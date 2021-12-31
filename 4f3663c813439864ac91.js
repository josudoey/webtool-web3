(self["webpackChunkwebtool_web3"] = self["webpackChunkwebtool_web3"] || []).push([["vue_pages_home_index_mjs"],{

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

/***/ "?8131":
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?3fc0":
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?cd53":
/*!************************!*\
  !*** stream (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?9419":
/*!************************!*\
  !*** assert (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?4a58":
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?ed1b":
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?d17e":
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?b3ef":
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?b0f0":
/*!**********************!*\
  !*** http (ignored) ***!
  \**********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?b76e":
/*!***********************!*\
  !*** https (ignored) ***!
  \***********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?06e8":
/*!**********************!*\
  !*** http (ignored) ***!
  \**********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?6abe":
/*!***********************!*\
  !*** https (ignored) ***!
  \***********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?9cf1":
/*!********************!*\
  !*** os (ignored) ***!
  \********************/
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
/* harmony import */ var _render_pug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render.pug */ "./vue/pages/home/render.pug");
/* harmony import */ var web3_eth_personal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! web3-eth-personal */ "./node_modules/web3-eth-personal/lib/index.js");



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
      console.log(address)
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

}]);
//# sourceMappingURL=4f3663c813439864ac91.js.map