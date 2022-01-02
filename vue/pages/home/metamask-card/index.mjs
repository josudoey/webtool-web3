import unit from 'ethjs-unit'
import { toChecksumAddress, stripHexPrefix } from '../utils.mjs'
import { render, staticRenderFns } from './render.pug'

const PreserveKey = 'metamask-card'
const preservePropNames = [
  'transactionToAddress',
  'transactionEther',
  'transactionData',
  'message'
]

export default {
  render,
  staticRenderFns,
  inject: ['ethereum', 'preserveRestore', 'preserveWatch'],
  data () {
    return {
      accounts: [],
      balance: null,
      transactionToAddress: '',
      transactionEther: '',
      transactionData: '',
      transactionHash: '',
      returnData: '',
      message: '',
      messageSignature: ''
    }
  },
  mounted () {
    const { preserveRestore, preserveWatch, $data, ethereum } = this
    preserveRestore(PreserveKey, $data)
    preserveWatch(PreserveKey, this, preservePropNames)

    const self = this
    ethereum.on('accountsChanged', function (accounts) {
      const { selectedAddress } = ethereum
      self.$bvToast.toast(`accountsChanged ${selectedAddress}`, {
        title: '帳號變更',
        autoHideDelay: 3000,
        appendToast: true
      })
      if (!selectedAddress) {
        return
      }
      self.getBalance(selectedAddress)
      // Time to reload your interface with accounts[0]!
    })
    this.getAccounts()
  },
  filters: {
    ether (wei) {
      return unit.fromWei(wei, 'ether')
    },
    toChecksumAddress (address) {
      return toChecksumAddress(address)
    }
  },
  methods: {
    reset () {
      Object.assign(this, {
        transactionToAddress: '',
        transactionEther: '',
        transactionData: '',
        transactionHash: ''
      })
    },
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
      console.log('getBalance', address)
      const balance = this.balance = await this.request({
        method: 'eth_getBalance',
        params: [address, 'latest']
      })
      console.log(address, balance)
      return balance
    },
    async sendTransaction (toAddress, ether, data) {
      // see https://docs.metamask.io/guide/sending-transactions.html#example
      // see https://eth.wiki/json-rpc/API#eth_sendtransaction
      const { ethereum } = this

      try {
        const transactionParameters = {
          from: ethereum.selectedAddress,
          to: toAddress
        }

        if (ether) {
          const wei = unit.toWei(ether, 'ether')
          transactionParameters.value = `0x${wei.toString(16)}`
        }
        if (data) {
          transactionParameters.data = `0x${stripHexPrefix(data)}`
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
    async call (toAddress, ether, data) {
      // see https://docs.metamask.io/guide/sending-transactions.html#example
      // see https://eth.wiki/json-rpc/API#eth_call
      const { ethereum } = this

      try {
        const transactionParameters = {
          from: ethereum.selectedAddress,
          to: toAddress
        }

        if (ether) {
          const wei = unit.toWei(ether, 'ether')
          transactionParameters.value = `0x${wei.toString(16)}`
        }
        if (data) {
          transactionParameters.data = `0x${stripHexPrefix(data)}`
        }
        console.log(transactionParameters)

        const returnData = this.returnData = await this.request({
          method: 'eth_call',
          params: [transactionParameters, 'latest']
        })
        console.log(returnData)
      } catch (err) {
        this.$bvToast.toast(err.message, {
          title: '呼叫失敗',
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
    }
  }
}
