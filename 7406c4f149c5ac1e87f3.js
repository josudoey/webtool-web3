"use strict";
(self["webpackChunkwebtool_web3"] = self["webpackChunkwebtool_web3"] || []).push([["vue_pages_home_index_mjs"],{

/***/ "./vue/pages/home/render.pug":
/*!***********************************!*\
  !*** ./vue/pages/home/render.pug ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
        _c(
          "b-card",
          { attrs: { "no-body": "" } },
          [
            _c("b-card-title", [_vm._v("ethereum")]),
            _c(
              "b-card-body",
              [
                _c(
                  "b-btn",
                  {
                    attrs: { variant: "primary" },
                    on: { click: _vm.requestAccounts },
                  },
                  [_vm._v("requestAccounts")]
                ),
                _c(
                  "b-btn",
                  {
                    attrs: { variant: "primary" },
                    on: { click: _vm.getAccounts },
                  },
                  [_vm._v("getAccounts")]
                ),
                _c(
                  "b-btn",
                  {
                    attrs: { variant: "primary" },
                    on: {
                      click: function ($event) {
                        return _vm.getBalance(_vm.accounts[0])
                      },
                    },
                  },
                  [_vm._v("getBalance")]
                ),
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
                  attrs: { placeholder: "value" },
                  model: {
                    value: _vm.transferValue,
                    callback: function ($$v) {
                      _vm.transferValue = $$v
                    },
                    expression: "transferValue",
                  },
                }),
                _c(
                  "b-btn",
                  {
                    attrs: { variant: "primary" },
                    on: { click: _vm.transfer },
                  },
                  [_vm._v("transfer")]
                ),
              ],
              1
            ),
          ],
          1
        ),
        _c("h5", [_vm._v("account address")]),
        _c(
          "ul",
          _vm._l(_vm.accounts, function (account) {
            return _c("li", [_vm._v(_vm._s(account))])
          }),
          0
        ),
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
      try {
        const transactionParameters = {
          nonce: '0x00', // ignored by MetaMask
          gasPrice: '0x09184e72a000', // customizable by user during MetaMask confirmation.
          gas: '0x2710', // customizable by user during MetaMask confirmation.
          to: '0x0000000000000000000000000000000000000000', // Required except during contract publications.
          from: ethereum.selectedAddress, // must match user's active address.
          value: '0x00', // Only required to send ether to the recipient from the initiating external account.
          data:
            '0x7f7465737432000000000000000000000000000000000000000000000000000000600057', // Optional, but used for defining smart contract creation and interaction.
          chainId: '0x3' // Used to prevent transaction reuse across blockchains. Auto-filled by MetaMask.
        }
        const transactionHash = await this.request({
          method: 'eth_sendTransaction',
          params: [transactionParameters]
        })
        console.log(transactionHash)
      } catch (err) {
        console.log(err)
      }
    }
  }
});


/***/ })

}]);
//# sourceMappingURL=7406c4f149c5ac1e87f3.js.map