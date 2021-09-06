"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Auth_ConfirmEmail_jsx"],{

/***/ "./resources/js/Pages/Auth/ConfirmEmail.jsx":
/*!**************************************************!*\
  !*** ./resources/js/Pages/Auth/ConfirmEmail.jsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ConfirmPassword)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var _image_logo_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../image/logo.svg */ "./resources/image/logo.svg");
/* harmony import */ var _image_email_send_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../image/email-send.svg */ "./resources/image/email-send.svg");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* eslint-disable no-nested-ternary */







function ConfirmPassword() {
  var _useForm = (0,_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__.useForm)({}),
      post = _useForm.post,
      processing = _useForm.processing,
      wasSuccessful = _useForm.wasSuccessful;

  var handleResendEmailVerification = function handleResendEmailVerification() {
    post(route('verification.send'));
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__.Head, {
      title: "Verifi\xE7\xE3o de email"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("main", {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("section", {
        className: "min-vh-100 d-flex align-items-center",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "container-fluid py-4",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
            className: "row",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              className: "col-xxl-4 col-xl-4 col-lg-5 col-md-6 col-sm-7 mx-auto",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                className: "d-flex flex-column text-center",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
                  src: _image_logo_svg__WEBPACK_IMPORTED_MODULE_2__["default"],
                  alt: "",
                  className: "img-fluid w-100"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
                  src: _image_email_send_svg__WEBPACK_IMPORTED_MODULE_3__["default"],
                  alt: "",
                  className: "mx-auto img-fluid mt-awe-80 mb-5"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h2", {
                  className: "text-awe-black-first fw-semibold fz-20 mb-awe-20",
                  children: "Estamos quase l\xE1."
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
                  className: "fz-14 text-awe-gray-first mb-5",
                  children: "Enviamos um e-mail para confirma\xE7\xE3o de acesso. Acesse sua caixa postal e realize os passos indicados."
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
                  type: "submit",
                  className: "btn btn-awe-blue-first mx-auto mt-awe-20 mb-3",
                  disabled: processing || wasSuccessful,
                  onClick: handleResendEmailVerification,
                  children: processing ? 'REENVIANDO EMAIL' : wasSuccessful ? 'EMAIL REENVIADO COM SUCESSO' : 'REENVIAR EMAIL'
                })]
              })
            })
          })
        })
      })
    })]
  });
}

/***/ }),

/***/ "./resources/image/email-send.svg":
/*!****************************************!*\
  !*** ./resources/image/email-send.svg ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/email-send.svg?f1a5be2496b2f7bd161c54f1f789d12b");

/***/ }),

/***/ "./resources/image/logo.svg":
/*!**********************************!*\
  !*** ./resources/image/logo.svg ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/logo.svg?81d1ee59050200ab0a3cc59af83dd547");

/***/ })

}]);
//# sourceMappingURL=resources_js_Pages_Auth_ConfirmEmail_jsx.js.map