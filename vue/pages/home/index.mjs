import { render, staticRenderFns } from './render.pug'

export default {
  render,
  staticRenderFns,
  data () {
    return {
      ethereum: null,
      web3: null,
      accounts: [],
      balance: '',
      message: '',
      signature: '',
      transferToAddress: '',
      transferValue: ''
    }
  },
  mounted () {
    // see https://web3js.readthedocs.io/en/v1.5.2/getting-started.html#adding-web3-js
    this.ethereum = window.ethereum
  },
  updated () {
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
      this.accounts = await this.request({ method: 'eth_requestAccounts' })
    },
    async getAccounts () {
      this.accounts = await this.request({ method: 'eth_accounts' })
    },
    async getBalance (address) {
      const { ethereum } = this
      address = address || ethereum.selectedAddress
      const balance = this.balance = await this.request({
        method: 'eth_getBalance',
        params: [address]
      })
      console.log(address, balance)
    },
    async transfer (toAddress, value) {
      // see https://docs.metamask.io/guide/sending-transactions.html#example
      const { ethereum } = this

      try {
        const transactionParameters = {
          to: toAddress, // Required except during contract publications.
          from: ethereum.selectedAddress, // must match user's active address.
          value: value,
          data: ''
        }
        console.log(transactionParameters)

        const transactionHash = await this.request({
          method: 'eth_sendTransaction',
          params: [transactionParameters]
        })
        console.log(transactionHash)
      } catch (err) {
        console.log(err)
      }
    },

    async personalSign (message, address) {
      const { ethereum } = this
      address = address || ethereum.selectedAddress
      const payload = {
        method: 'personal_sign', params: [message, address]
      }
      console.log(payload)

      const signature = await ethereum.request(payload)
      console.log(signature)
    }

  }
}
