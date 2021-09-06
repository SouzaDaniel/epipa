(self.webpackChunk=self.webpackChunk||[]).push([[994],{1811:(e,r,s)=>{"use strict";s.d(r,{Z:()=>d});s(7294);var t=s(5697),a=s.n(t),n=s(5893),l=["label","id","error","success"];function i(e,r){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),s.push.apply(s,t)}return s}function o(e){for(var r=1;r<arguments.length;r++){var s=null!=arguments[r]?arguments[r]:{};r%2?i(Object(s),!0).forEach((function(r){c(e,r,s[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):i(Object(s)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(s,r))}))}return e}function c(e,r,s){return r in e?Object.defineProperty(e,r,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[r]=s,e}function u(e,r){if(null==e)return{};var s,t,a=function(e,r){if(null==e)return{};var s,t,a={},n=Object.keys(e);for(t=0;t<n.length;t++)s=n[t],r.indexOf(s)>=0||(a[s]=e[s]);return a}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)s=n[t],r.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(a[s]=e[s])}return a}function d(e){var r=e.label,s=e.id,t=e.error,a=e.success,i=u(e,l);return(0,n.jsxs)("label",{htmlFor:s,className:"form-label",children:[r,(0,n.jsx)("input",o(o({},i),{},{className:"form-control mt-2",id:s})),t&&(0,n.jsx)("span",{className:"fz-12 text-awe-red-first",children:t}),a&&(0,n.jsx)("span",{className:"fz-12 text-awe-green-first",children:a})]})}d.propTypes={label:a().string,id:a().string.isRequired,error:a().string,success:a().string},d.defaultProps={label:"",error:"",success:""}},9994:(e,r,s)=>{"use strict";s.r(r),s.d(r,{default:()=>i});s(7294);var t=s(1636),a=s(1601);var n=s(1811),l=s(5893);const i=function(){var e=(0,t.cI)({email:"",password:"",remember:!1}),r=e.data,s=e.setData,i=e.post,o=e.processing,c=e.errors;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.Fb,{title:"Login"}),(0,l.jsx)("main",{children:(0,l.jsx)("section",{className:"min-vh-100 d-flex align-items-center",children:(0,l.jsx)("div",{className:"container py-4",children:(0,l.jsx)("div",{className:"row",children:(0,l.jsx)("div",{className:"col-12",children:(0,l.jsxs)("div",{className:"shadow p-5 px-lg-0 row m-0",children:[(0,l.jsx)("div",{className:"col-xl-4 col-lg-5 mx-lg-auto",children:(0,l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),i(route("login"))},className:"d-flex flex-column align-items-start",children:[(0,l.jsx)("img",{src:a.Z,alt:"",className:"mb-5 w-100 img-fluid"}),(0,l.jsx)("p",{className:"fz-14 text-awe-gray-first mb-4",children:"Tenha acesso a um mundo de novidades e promoções para você que é cliente do e-pipa."}),(0,l.jsxs)("div",{className:"d-flex flex-column gapy-awe-12 mb-awe-12 w-100",children:[(0,l.jsx)(n.Z,{id:"email",placeholder:"Digite seu e-mail",label:"E-mail",value:r.email,onChange:function(e){var r=e.target.value;return s("email",r)},error:c.email}),(0,l.jsx)(n.Z,{id:"password",placeholder:"******",type:"password",label:"Senha",value:r.password,onChange:function(e){var r=e.target.value;return s("password",r)},error:c.password})]}),(0,l.jsx)(t.ZQ,{href:route("password.request"),className:"ms-auto fz-14 link-awe-blue-first text-decoration-none",children:"Esqueceu sua senha?"}),(0,l.jsx)("button",{type:"submit",className:"btn btn-awe-blue-first w-100 mt-awe-20 mb-3",disabled:o,children:"FAZER LOGIN"}),(0,l.jsxs)("span",{className:"fz-14 text-awe-gray-first",children:["Ainda não está cadastrado?"," ",(0,l.jsx)(t.ZQ,{href:route("register"),className:"ms-auto link-awe-blue-first text-decoration-none fw-bold",children:"Crie uma conta"})]})]})}),(0,l.jsx)("div",{className:"col-5 d-lg-block d-none mx-auto",children:(0,l.jsx)("div",{className:"h-100 d-flex align-items-center",children:(0,l.jsx)("img",{src:"/images/user-secure.svg?a09681469e5aa0a5f383b78a14e59d24",alt:"",className:"img-fluid"})})})]})})})})})})]})}},1601:(e,r,s)=>{"use strict";s.d(r,{Z:()=>t});const t="/images/logo.svg?81d1ee59050200ab0a3cc59af83dd547"},2703:(e,r,s)=>{"use strict";var t=s(414);function a(){}function n(){}n.resetWarningCache=a,e.exports=function(){function e(e,r,s,a,n,l){if(l!==t){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function r(){return e}e.isRequired=e;var s={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:r,element:e,elementType:e,instanceOf:r,node:e,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:n,resetWarningCache:a};return s.PropTypes=s,s}},5697:(e,r,s)=>{e.exports=s(2703)()},414:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=994.js.map