(self["webpackChunkwebtool_web3"] = self["webpackChunkwebtool_web3"] || []).push([["vue_pages_home_index_mjs"],{

/***/ "./vue/pages/home/metamask-card/render.pug":
/*!*************************************************!*\
  !*** ./vue/pages/home/metamask-card/render.pug ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "b-card",
    [
      _c(
        "b-card-title",
        [
          _vm._v("MetaMask"),
          _vm.accounts.length === 0
            ? [
                _c(
                  "b-btn",
                  {
                    attrs: { variant: "primary" },
                    on: { click: _vm.requestAccounts },
                  },
                  [_vm._v("requestAccounts")]
                ),
              ]
            : _vm._e(),
        ],
        2
      ),
      _vm.ethereum.selectedAddress
        ? _c(
            "b-card-body",
            [
              _c("span", [
                _vm._v(
                  "Current Address: " +
                    _vm._s(
                      _vm._f("toChecksumAddress")(_vm.ethereum.selectedAddress)
                    )
                ),
              ]),
              _c("br"),
              _vm.balance === null &&
              _vm.getBalance(_vm.ethereum.selectedAddress)
                ? _c("b-icon", {
                    attrs: { icon: "arrow-clockwise", animation: "spin-pulse" },
                  })
                : _vm._e(),
              _vm.balance !== null
                ? _c(
                    "span",
                    [
                      _vm._v(
                        "Balance: " +
                          _vm._s(_vm._f("ether")(_vm.balance)) +
                          " Ether"
                      ),
                      _c(
                        "b-btn",
                        {
                          staticClass: "p-0",
                          attrs: { variant: "primary" },
                          on: {
                            click: function ($event) {
                              return _vm.getBalance(
                                _vm.ethereum.selectedAddress
                              )
                            },
                          },
                        },
                        [_c("b-icon-arrow-repeat")],
                        1
                      ),
                    ],
                    1
                  )
                : _vm._e(),
              _c("b-form-input", {
                attrs: { placeholder: "to address" },
                model: {
                  value: _vm.transferToAddress,
                  callback: function ($$v) {
                    _vm.transferToAddress = $$v
                  },
                  expression: "transferToAddress",
                },
              }),
              _c("b-form-input", {
                attrs: { placeholder: "transfer amount(ether)" },
                model: {
                  value: _vm.transferEther,
                  callback: function ($$v) {
                    _vm.transferEther = $$v
                  },
                  expression: "transferEther",
                },
              }),
              _c(
                "b-btn",
                {
                  attrs: { variant: "primary" },
                  on: {
                    click: function ($event) {
                      return _vm.transfer(
                        _vm.transferToAddress,
                        _vm.transferEther
                      )
                    },
                  },
                },
                [_vm._v("transfer")]
              ),
              _vm.transactionHash
                ? _c("b-alert", { attrs: { show: "" } }, [
                    _vm._v("tx hash: " + _vm._s(_vm.transactionHash)),
                  ])
                : _vm._e(),
              _c("hr"),
              _c("b-form-textarea", {
                attrs: { placeholder: "message" },
                model: {
                  value: _vm.message,
                  callback: function ($$v) {
                    _vm.message = $$v
                  },
                  expression: "message",
                },
              }),
              _c(
                "b-btn",
                {
                  attrs: { variant: "primary" },
                  on: {
                    click: function ($event) {
                      return _vm.personalSign(_vm.message)
                    },
                  },
                },
                [_vm._v("personalSign")]
              ),
              _vm.messageSignature
                ? _c("b-alert", { attrs: { show: "" } }, [
                    _vm._v(
                      "message signature: " + _vm._s(_vm.messageSignature)
                    ),
                  ])
                : _vm._e(),
              _c("hr"),
              _c("b-form-textarea", {
                attrs: { placeholder: "recover message" },
                model: {
                  value: _vm.recoverMessage,
                  callback: function ($$v) {
                    _vm.recoverMessage = $$v
                  },
                  expression: "recoverMessage",
                },
              }),
              _c("b-form-textarea", {
                attrs: { placeholder: "recover signature" },
                model: {
                  value: _vm.recoverSignature,
                  callback: function ($$v) {
                    _vm.recoverSignature = $$v
                  },
                  expression: "recoverSignature",
                },
              }),
              _c(
                "b-btn",
                {
                  attrs: { variant: "primary" },
                  on: {
                    click: function ($event) {
                      return _vm.personalRecover(
                        _vm.recoverMessage,
                        _vm.recoverSignature
                      )
                    },
                  },
                },
                [_vm._v("personalRecover")]
              ),
              _vm.recoverAddress
                ? _c("b-alert", { attrs: { show: "" } }, [
                    _vm._v("recover address: " + _vm._s(_vm.recoverAddress)),
                  ])
                : _vm._e(),
            ],
            1
          )
        : _vm._e(),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./vue/pages/home/render.pug":
/*!***********************************!*\
  !*** ./vue/pages/home/render.pug ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container-fluid px-0" }, [
    _vm._m(0),
    _c(
      "div",
      { staticClass: "container-fluid px-0" },
      [
        _vm.ethereum && _vm.ethereum.isMetaMask
          ? _c("metamask-card")
          : _c("a", { attrs: { href: "https://metamask.io/" } }, [
              _c("img", {
                attrs: { src: "https://metamask.io/images/mm-logo.svg" },
              }),
              _vm._v("Install"),
            ]),
      ],
      1
    ),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("nav", { staticClass: "navbar navbar-dark bg-dark" }, [
      _c("div", { staticClass: "navbar-brand d-flex" }, [
        _c("div", [_vm._v("Webtool Web3")]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "?3fc0":
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?7bec":
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "./vue/pages/home/index.mjs":
/*!**********************************!*\
  !*** ./vue/pages/home/index.mjs ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _metamask_card_index_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./metamask-card/index.mjs */ "./vue/pages/home/metamask-card/index.mjs");
/* harmony import */ var _render_pug__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render.pug */ "./vue/pages/home/render.pug");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  render: _render_pug__WEBPACK_IMPORTED_MODULE_1__.render,
  staticRenderFns: _render_pug__WEBPACK_IMPORTED_MODULE_1__.staticRenderFns,
  components: {
    MetamaskCard: _metamask_card_index_mjs__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  provide () {
    const ctx = {}
    Object.defineProperties(ctx, {
      ethereum: {
        get () {
          return window.ethereum
        }
      }
    })
    return ctx
  },
  data () {
    return {
      ethereum: null
    }
  },
  mounted () {
    // see https://web3js.readthedocs.io/en/v1.5.2/getting-started.html#adding-web3-js
    this.ethereum = window.ethereum
  },
  updated () {
  },
  methods: {

  }
});


/***/ }),

/***/ "./vue/pages/home/metamask-card/index.mjs":
/*!************************************************!*\
  !*** ./vue/pages/home/metamask-card/index.mjs ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ethjs_unit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ethjs-unit */ "./node_modules/ethjs-unit/lib/index.js");
/* harmony import */ var buffer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! buffer */ "./node_modules/buffer/index.js");
/* harmony import */ var bn_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bn.js */ "./node_modules/bn.js/lib/bn.js");
/* harmony import */ var elliptic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! elliptic */ "./node_modules/elliptic/lib/elliptic.js");
/* harmony import */ var js_sha3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-sha3 */ "./node_modules/js-sha3/src/sha3.js");
/* harmony import */ var _render_pug__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./render.pug */ "./vue/pages/home/metamask-card/render.pug");







const keccak256 = js_sha3__WEBPACK_IMPORTED_MODULE_4__.keccak_256
const Buffer = buffer__WEBPACK_IMPORTED_MODULE_1__.Buffer
const EC = elliptic__WEBPACK_IMPORTED_MODULE_3__.ec
const ec = window.ec = new EC('secp256k1')

function isHexString (value, length) {
  // see https://github.com/ethereumjs/ethereumjs-monorepo/blob/59f103eb796d7caa10775288db6f682a5f18210e/packages/util/src/internal.ts#L203
  if (typeof value !== 'string' || !value.match(/^0x[0-9A-Fa-f]*$/)) return false

  if (length && value.length !== 2 + 2 * length) return false

  return true
}

function isHexPrefixed (str) {
  // see https://github.com/SilentCicero/is-hex-prefixed/blob/master/src/index.js
  if (typeof str !== 'string') {
    throw new Error("[is-hex-prefixed] value must be type 'string', is currently type " + (typeof str) + ', while checking isHexPrefixed.')
  }

  return str.slice(0, 2) === '0x'
}

function stripHexPrefix (str) {
  // see https://github.com/SilentCicero/strip-hex-prefix/blob/master/src/index.js
  if (typeof str !== 'string') {
    return str
  }

  return isHexPrefixed(str) ? str.slice(2) : str
}

function padToEven (value) {
  // see https://github.com/ethereumjs/ethereumjs-monorepo/blob/58e5e0d059d55965b349c922af0ca6177bcb7f26/packages/util/src/internal.ts#L56
  let a = value

  if (typeof a !== 'string') {
    throw new Error(`[padToEven] value must be type 'string', received ${typeof a}`)
  }

  if (a.length % 2) a = `0${a}`

  return a
}

const bufferToInt = function (buf) {
  // see https://github.com/ethereumjs/ethereumjs-monorepo/blob/59f103eb796d7caa10775288db6f682a5f18210e/packages/util/src/bytes.ts#L198
  return new bn_js__WEBPACK_IMPORTED_MODULE_2__(toBuffer(buf)).toNumber()
}

const toBuffer = function (v) {
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

const fromRpcSig = window.fromRpcSig = function (sig) {
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

const hashPersonalMessage = window.hashPersonalMessage = function (message) {
  // see https://github.com/ethereumjs/ethereumjs-monorepo/blob/ade4233ddffffdd146b386de701762196a8c941c/packages/util/src/signature.ts#L196
  const prefix = Buffer.from(`\u0019Ethereum Signed Message:\n${message.length}`, 'utf-8')
  return Buffer.from(keccak256(Buffer.concat([prefix, message])), 'hex')
}

const personalRecover = window.personalRecover = function (message, signature) {
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

const toChecksumAddress = function (hexAddress, eip1191ChainId) {
  // see https://github.com/ethereumjs/ethereumjs-util/blob/master/src/account.ts#L139
  const address = stripHexPrefix(hexAddress).toLowerCase()

  let prefix = ''
  if (eip1191ChainId) {
    const chainId = new bn_js__WEBPACK_IMPORTED_MODULE_2__(eip1191ChainId)
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  render: _render_pug__WEBPACK_IMPORTED_MODULE_5__.render,
  staticRenderFns: _render_pug__WEBPACK_IMPORTED_MODULE_5__.staticRenderFns,
  inject: ['ethereum'],
  data () {
    return {
      accounts: [],
      balance: null,
      transferToAddress: '',
      transferEther: '',
      transactionHash: '',
      message: '',
      messageSignature: '',
      recoverMessage: '',
      recoverSignature: '',
      recoverAddress: ''
    }
  },
  async mounted () {
    const { ethereum } = this
    const self = this
    await this.getAccounts()
  },
  updated () {
  },
  filters: {
    ether (wei) {
      return ethjs_unit__WEBPACK_IMPORTED_MODULE_0__.fromWei(wei, 'ether')
    },
    toChecksumAddress (address) {
      return toChecksumAddress(address)
    }
  },
  methods: {
    async request (opts) {
      // see https://docs.metamask.io/guide/provider-migration.html#replacing-window-web3
      const { ethereum } = this
      return ethereum.request(opts)
    },
    async requestAccounts () {
      // see https://docs.metamask.io/guide/rpc-api.html#permissions
      // see https://docs.metamask.io/guide/accessing-accounts.html
      try {
        this.accounts = await this.request({ method: 'eth_requestAccounts' })
      } catch (err) {
        this.$bvToast.toast(err.message, {
          title: '存取失敗',
          autoHideDelay: 3000,
          appendToast: true
        })
      }
    },
    async getAccounts () {
      this.accounts = await this.request({ method: 'eth_accounts' })
    },
    async getBalance (address) {
      // see https://eth.wiki/json-rpc/API#eth_getbalance
      const { ethereum } = this
      console.log('getBalance', address)
      address = address || ethereum.selectedAddress
      const balance = this.balance = await this.request({
        method: 'eth_getBalance',
        params: [address, 'latest']
      })
      console.log(address, balance)
      return balance
    },
    async transfer (toAddress, ether) {
      // see https://docs.metamask.io/guide/sending-transactions.html#example
      // see https://eth.wiki/json-rpc/API#eth_sendtransaction
      const { ethereum } = this
      const wei = ethjs_unit__WEBPACK_IMPORTED_MODULE_0__.toWei(ether, 'ether')

      try {
        const transactionParameters = {
          to: toAddress,
          from: ethereum.selectedAddress,
          value: `0x${wei.toString(16)}`,
          data: ''
        }
        console.log(transactionParameters)

        const transactionHash = this.transactionHash = await this.request({
          method: 'eth_sendTransaction',
          params: [transactionParameters]
        })

        console.log(transactionHash)
      } catch (err) {
        this.$bvToast.toast(err.message, {
          title: '發送失敗',
          autoHideDelay: 3000,
          appendToast: true
        })
        console.log(err)
      }
    },
    async personalSign (message, address) {
      // see https://github.com/ethereum/go-ethereum/pull/2940
      const { ethereum } = this
      address = address || ethereum.selectedAddress
      const payload = {
        method: 'personal_sign', params: [message, address]
      }
      console.log(payload)

      const signature = this.messageSignature = await ethereum.request(payload)
      console.log(signature)
    },
    async personalRecover (message, signature) {
      this.recoverAddress = toChecksumAddress(personalRecover(message, signature))
    }
  }
});


/***/ })

}]);
//# sourceMappingURL=de12c1ed4a166d211528.js.map