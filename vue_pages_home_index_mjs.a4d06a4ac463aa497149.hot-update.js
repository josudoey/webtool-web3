"use strict";
self["webpackHotUpdatewebtool_web3"]("vue_pages_home_index_mjs",{

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
                    on: { click: _vm.getBalance },
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
                    on: {
                      click: function ($event) {
                        return _vm.transfer(
                          _vm.transferToAddress,
                          _vm.transferValue
                        )
                      },
                    },
                  },
                  [_vm._v("transfer")]
                ),
                _c("b-form-input", {
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



/***/ })

});
//# sourceMappingURL=vue_pages_home_index_mjs.a4d06a4ac463aa497149.hot-update.js.map