import buffer from 'buffer'
import BN from 'bn.js'
import elliptic from 'elliptic'
import SHA3 from 'js-sha3'
const keccak256 = SHA3.keccak_256
const Buffer = buffer.Buffer
const EC = elliptic.ec
const ec = new EC('secp256k1')

export const isHexString = function (value, length) {
  // see https://github.com/ethereumjs/ethereumjs-monorepo/blob/59f103eb796d7caa10775288db6f682a5f18210e/packages/util/src/internal.ts#L203
  if (typeof value !== 'string' || !value.match(/^0x[0-9A-Fa-f]*$/)) return false

  if (length && value.length !== 2 + 2 * length) return false

  return true
}

export const isHexPrefixed = function (str) {
  // see https://github.com/SilentCicero/is-hex-prefixed/blob/master/src/index.js
  if (typeof str !== 'string') {
    throw new Error("[is-hex-prefixed] value must be type 'string', is currently type " + (typeof str) + ', while checking isHexPrefixed.')
  }

  return str.slice(0, 2) === '0x'
}

export const stripHexPrefix = function (str) {
  // see https://github.com/SilentCicero/strip-hex-prefix/blob/master/src/index.js
  if (typeof str !== 'string') {
    return str
  }

  return isHexPrefixed(str) ? str.slice(2) : str
}

export const padToEven = function (value) {
  // see https://github.com/ethereumjs/ethereumjs-monorepo/blob/58e5e0d059d55965b349c922af0ca6177bcb7f26/packages/util/src/internal.ts#L56
  let a = value

  if (typeof a !== 'string') {
    throw new Error(`[padToEven] value must be type 'string', received ${typeof a}`)
  }

  if (a.length % 2) a = `0${a}`

  return a
}

export const bufferToInt = function (buf) {
  // see https://github.com/ethereumjs/ethereumjs-monorepo/blob/59f103eb796d7caa10775288db6f682a5f18210e/packages/util/src/bytes.ts#L198
  return new BN(toBuffer(buf)).toNumber()
}

export const toBuffer = function (v) {
  // see https://github.com/ethereumjs/ethereumjs-monorepo/blob/59f103eb796d7caa10775288db6f682a5f18210e/packages/util/src/bytes.ts#L148
  if (v === null || v === undefined) {
    return Buffer.allocUnsafe(0)
  }

  if (Buffer.isBuffer(v)) {
    return Buffer.from(v)
  }

  if (Array.isArray(v) || v instanceof Uint8Array) {
    return Buffer.from(v)
  }

  if (typeof v === 'string') {
    if (!isHexString(v)) {
      throw new Error(
        `Cannot convert string to buffer. toBuffer only supports 0x-prefixed hex strings and this string was given: ${v}`
      )
    }
    return Buffer.from(padToEven(stripHexPrefix(v)), 'hex')
  }
  return Buffer.from(str, 'hex')
}

export const fromRpcSig = function (sig) {
  // see https://github.com/ethereumjs/ethereumjs-monorepo/blob/ade4233ddffffdd146b386de701762196a8c941c/packages/util/src/signature.ts
  const buf = toBuffer(sig)
  let r
  let s
  let v
  if (buf.length >= 65) {
    r = buf.slice(0, 32)
    s = buf.slice(32, 64)
    v = bufferToInt(buf.slice(64))
  } else if (buf.length === 64) {
    // Compact Signature Representation (https://eips.ethereum.org/EIPS/eip-2098)
    r = buf.slice(0, 32)
    s = buf.slice(32, 64)
    v = bufferToInt(buf.slice(32, 33)) >> 7
    s[0] &= 0x7f
  } else {
    throw new Error('Invalid signature length')
  }

  // support both versions of `eth_sign` responses
  if (v < 27) {
    v += 27
  }

  return {
    v,
    r,
    s
  }
}

export const hashPersonalMessage = function (message) {
  // see https://github.com/ethereumjs/ethereumjs-monorepo/blob/ade4233ddffffdd146b386de701762196a8c941c/packages/util/src/signature.ts#L196
  const prefix = Buffer.from(`\u0019Ethereum Signed Message:\n${message.length}`, 'utf-8')
  return Buffer.from(keccak256(Buffer.concat([prefix, message])), 'hex')
}

export const personalRecover = function (message, signature) {
  // see https://github.com/ethereum/go-ethereum/pull/2940
  const hash = hashPersonalMessage(Buffer.from(message, 'utf-8'))

  // see https://github.com/ethereumjs/ethereumjs-monorepo/blob/ade4233ddffffdd146b386de701762196a8c941c/packages/util/src/signature.ts#L65
  const sig = fromRpcSig(signature)
  const pubPoint = ec.recoverPubKey(hash, sig, sig.v - 27)

  // see  https://github.com/ethereumjs/ethereumjs-util/blob/master/src/account.ts#L249
  const pubHex = pubPoint.encode('hex', false)
  const pubKey = Buffer.from(pubHex, 'hex').slice(1)
  const address = Buffer.from(keccak256(pubKey), 'hex').slice(-20).toString('hex')
  return `0x${address}`
}

export const toChecksumAddress = function (hexAddress, eip1191ChainId) {
  // see https://github.com/ethereumjs/ethereumjs-util/blob/master/src/account.ts#L139
  const address = stripHexPrefix(hexAddress).toLowerCase()

  let prefix = ''
  if (eip1191ChainId) {
    const chainId = new BN(eip1191ChainId)
    prefix = chainId.toString() + '0x'
  }

  const hash = keccak256(prefix + address)
  let ret = '0x'

  for (let i = 0; i < address.length; i++) {
    if (parseInt(hash[i], 16) >= 8) {
      ret += address[i].toUpperCase()
    } else {
      ret += address[i]
    }
  }

  return ret
}
