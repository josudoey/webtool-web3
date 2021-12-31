"use strict";
self["webpackHotUpdatewebtool_web3"]("vue_pages_home_index_mjs",{

/***/ "./vue/pages/home/index.mjs":
/*!**********************************!*\
  !*** ./vue/pages/home/index.mjs ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _render_pug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render.pug */ "./vue/pages/home/render.pug");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  render: _render_pug__WEBPACK_IMPORTED_MODULE_0__.render,
  staticRenderFns: _render_pug__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
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
      const { ethereum } = window

      try {
        const transactionParameters = {
          // nonce: '0x00', // ignored by MetaMask
          // gasPrice: '0x09184e72a000', // customizable by user during MetaMask confirmation.
          // gas: '0x2710', // customizable by user during MetaMask confirmation.
          to: toAddress, // Required except during contract publications.
          from: ethereum.selectedAddress, // must match user's active address.
          value: value, // Only required to send ether to the recipient from the initiating external account.
          data:
            '0x7f7465737432000000000000000000000000000000000000000000000000000000600057' // Optional, but used for defining smart contract creation and interaction.
          // chainId: '0x3' // Used to prevent transaction reuse across blockchains. Auto-filled by MetaMask.
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

    async personalSign (message) {
      const signature = await ethereum.request({ method: 'personal_sign', params: [message, account] })
    }

  }
});


/***/ })

});
//# sourceMappingURL=vue_pages_home_index_mjs.d5b514be6a581dadbd1a.hot-update.js.map