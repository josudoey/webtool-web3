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
      console.log(balance)
    },
    async transfer (toAddress, value) {
      try {
        const transactionHash = await this.request({
          method: 'eth_sendTransaction',
          params: [
            {
              to: toAddress,
              value: value
            }
          ]
        })
        console.log(transactionHash)
      } catch (err) {
        console.log(err)
      }
    }
  }
});


/***/ })

});
//# sourceMappingURL=vue_pages_home_index_mjs.9e2b26c24c4f1475c4e3.hot-update.js.map