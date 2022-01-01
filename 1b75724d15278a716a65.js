(self.webpackChunkwebtool_web3=self.webpackChunkwebtool_web3||[]).push([[677],{9214:()=>{},5568:()=>{},9999:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>y});var r=a(4278),s=a(8764),n=a(3550),o=a(6266);const c=a(1094).keccak_256,i=s.lW,l=new(0,o.ec)("secp256k1"),d=function(e){return"string"!=typeof e?e:function(e){if("string"!=typeof e)throw new Error("[is-hex-prefixed] value must be type 'string', is currently type "+typeof e+", while checking isHexPrefixed.");return"0x"===e.slice(0,2)}(e)?e.slice(2):e},u=function(e){return new n(h(e)).toNumber()},h=function(e){if(null==e)return i.allocUnsafe(0);if(i.isBuffer(e))return i.from(e);if(Array.isArray(e)||e instanceof Uint8Array)return i.from(e);if("string"==typeof e){if("string"!=typeof(t=e)||!t.match(/^0x[0-9A-Fa-f]*$/)||a&&t.length!==2+2*a)throw new Error(`Cannot convert string to buffer. toBuffer only supports 0x-prefixed hex strings and this string was given: ${e}`);return i.from(function(e){let t=e;if("string"!=typeof t)throw new Error("[padToEven] value must be type 'string', received "+typeof t);return t.length%2&&(t=`0${t}`),t}(d(e)),"hex")}var t,a;return i.from(str,"hex")},m=function(e,t){const a=function(e){const t=i.from(`Ethereum Signed Message:\n${e.length}`,"utf-8");return i.from(c(i.concat([t,e])),"hex")}(i.from(e,"utf-8")),r=function(e){const t=h(e);let a,r,s;if(t.length>=65)a=t.slice(0,32),r=t.slice(32,64),s=u(t.slice(64));else{if(64!==t.length)throw new Error("Invalid signature length");a=t.slice(0,32),r=t.slice(32,64),s=u(t.slice(32,33))>>7,r[0]&=127}return s<27&&(s+=27),{v:s,r:a,s:r}}(t),s=l.recoverPubKey(a,r,r.v-27).encode("hex",!1),n=i.from(s,"hex").slice(1);return`0x${i.from(c(n),"hex").slice(-20).toString("hex")}`},p=function(e,t){const a=d(e).toLowerCase();let r="";if(t){r=new n(t).toString()+"0x"}const s=c(r+a);let o="0x";for(let e=0;e<a.length;e++)parseInt(s[e],16)>=8?o+=a[e].toUpperCase():o+=a[e];return o};const f={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-card",{staticStyle:{"max-width":"400px"}},[a("b-card-title",[e._v("MetaMask")]),e.ethereum.selectedAddress?a("b-card-body",[a("span",[e._v("Current Address: "+e._s(e._f("toChecksumAddress")(e.ethereum.selectedAddress)))]),a("br"),null===e.balance&&e.getBalance(e.ethereum.selectedAddress)?a("b-icon",{attrs:{icon:"arrow-clockwise",animation:"spin-pulse"}}):e._e(),null!==e.balance?a("span",[e._v("Balance: "+e._s(e._f("ether")(e.balance))+" Ether"),a("b-btn",{staticClass:"p-0",attrs:{variant:"primary"},on:{click:function(t){return e.getBalance(e.ethereum.selectedAddress)}}},[a("b-icon-arrow-repeat")],1)],1):e._e(),a("b-form-input",{attrs:{placeholder:"to address"},model:{value:e.transactionToAddress,callback:function(t){e.transactionToAddress=t},expression:"transactionToAddress"}}),a("b-form-input",{attrs:{placeholder:"send amount(ether)"},model:{value:e.transactionEther,callback:function(t){e.transactionEther=t},expression:"transactionEther"}}),a("b-form-textarea",{attrs:{placeholder:"data(option)"},model:{value:e.transactionData,callback:function(t){e.transactionData=t},expression:"transactionData"}}),a("b-btn",{attrs:{variant:"primary"},on:{click:function(t){return e.sendTransaction(e.transactionToAddress,e.transactionEther,e.transactionData)}}},[e._v("sendTransaction")]),e.transactionHash?a("b-alert",{attrs:{show:""}},[e._v("tx hash: "+e._s(e.transactionHash))]):e._e(),a("b-btn",{attrs:{variant:"primary"},on:{click:function(t){return e.call(e.transactionToAddress,e.transactionEther,e.transactionData)}}},[e._v("call")]),e.returnData?a("b-alert",{attrs:{show:""}},[e._v("return data: "+e._s(e.returnData))]):e._e(),a("hr"),a("b-form-textarea",{attrs:{placeholder:"message"},model:{value:e.message,callback:function(t){e.message=t},expression:"message"}}),a("b-btn",{attrs:{variant:"primary"},on:{click:function(t){return e.personalSign(e.message)}}},[e._v("personalSign")]),e.messageSignature?a("b-alert",{attrs:{show:""}},[e._v("message signature: "+e._s(e.messageSignature))]):e._e()],1):a("b-card-body",[a("b-btn",{attrs:{variant:"primary"},on:{click:e.requestAccounts}},[e._v("requestAccounts")])],1)],1)},staticRenderFns:[],inject:["ethereum"],data:()=>({accounts:[],balance:null,transactionToAddress:"",transactionEther:"",transactionData:"",transactionHash:"",returnData:"",message:"",messageSignature:""}),async mounted(){const{ethereum:e}=this,t=this;e.on("accountsChanged",(function(a){const{selectedAddress:r}=e;t.$bvToast.toast(`accountsChanged ${r}`,{title:"帳號變更",autoHideDelay:3e3,appendToast:!0}),r&&t.getBalance(r)})),await this.getAccounts()},updated(){},filters:{ether:e=>r.fromWei(e,"ether"),toChecksumAddress:e=>p(e)},methods:{async request(e){const{ethereum:t}=this;return t.request(e)},async requestAccounts(){try{this.accounts=await this.request({method:"eth_requestAccounts"})}catch(e){this.$bvToast.toast(e.message,{title:"存取失敗",autoHideDelay:3e3,appendToast:!0})}},async getAccounts(){this.accounts=await this.request({method:"eth_accounts"})},async getBalance(e){console.log("getBalance",e);const t=this.balance=await this.request({method:"eth_getBalance",params:[e,"latest"]});return console.log(e,t),t},async sendTransaction(e,t,a){const{ethereum:s}=this;try{const n={from:s.selectedAddress,to:e};if(t){const e=r.toWei(t,"ether");n.value=`0x${e.toString(16)}`}a&&(n.data=`0x${d(a)}`),console.log(n);const o=this.transactionHash=await this.request({method:"eth_sendTransaction",params:[n]});console.log(o)}catch(e){this.$bvToast.toast(e.message,{title:"發送失敗",autoHideDelay:3e3,appendToast:!0}),console.log(e)}},async call(e,t,a){const{ethereum:s}=this;try{const n={from:s.selectedAddress,to:e};if(t){const e=r.toWei(t,"ether");n.value=`0x${e.toString(16)}`}a&&(n.data=`0x${d(a)}`),console.log(n);const o=this.returnData=await this.request({method:"eth_call",params:[n,"latest"]});console.log(o)}catch(e){this.$bvToast.toast(e.message,{title:"發送失敗",autoHideDelay:3e3,appendToast:!0}),console.log(e)}},async personalSign(e,t){const{ethereum:a}=this,r={method:"personal_sign",params:[e,t=t||a.selectedAddress]};console.log(r);const s=this.messageSignature=await a.request(r);console.log(s)}}};const v={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-card",{staticStyle:{"max-width":"400px"}},[a("b-card-title",[e._v("EcRecover")]),a("b-card-body",[a("b-form-textarea",{attrs:{placeholder:"recover message"},model:{value:e.recoverMessage,callback:function(t){e.recoverMessage=t},expression:"recoverMessage"}}),a("b-form-textarea",{attrs:{placeholder:"recover signature"},model:{value:e.recoverSignature,callback:function(t){e.recoverSignature=t},expression:"recoverSignature"}}),a("b-btn",{attrs:{variant:"primary"},on:{click:function(t){return e.personalRecover(e.recoverMessage,e.recoverSignature)}}},[e._v("personalRecover")]),e.recoverAddress?a("b-alert",{attrs:{show:""}},[e._v("recover address: "+e._s(e._f("toChecksumAddress")(e.recoverAddress)))]):e._e()],1)],1)},staticRenderFns:[],data:()=>({recoverMessage:"",recoverSignature:"",recoverAddress:""}),async mounted(){},updated(){},filters:{toChecksumAddress:p},methods:{async personalRecover(e,t){this.recoverAddress=m(e,t)}}};var b=a(6486),g=a(9934);const _=s.lW;const y={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container-fluid px-0"},[e._m(0),a("div",{staticClass:"container-fluid px-0 d-flex flex-wrap"},[e.ethereum&&e.ethereum.isMetaMask?a("metamask-card"):a("a",{attrs:{href:"https://metamask.io/"}},[a("img",{attrs:{src:"https://metamask.io/images/mm-logo.svg"}}),e._v("Install")]),a("ecrecover-card"),a("abi-card")],1)])},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("nav",{staticClass:"navbar navbar-dark bg-dark"},[a("div",{staticClass:"navbar-brand d-flex"},[a("div",[e._v("Webtool Web3")])])])}],components:{MetamaskCard:f,EcrecoverCard:v,AbiCard:{render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-card",[a("b-card-title",[e._v("Contract ABI"),a("a",{staticClass:"ml-1 small",attrs:{href:"https://remix.ethereum.org/"}},[e._v("reminx")])]),a("b-card-body",[a("b-form-textarea",{attrs:{placeholder:"Contract ABI"},model:{value:e.abiRaw,callback:function(t){e.abiRaw=t},expression:"abiRaw"}}),a("b-btn",{attrs:{variant:"primary"},on:{click:e.parse}},[e._v("parse")]),e.abi.length?a("div",{staticClass:"m-1"},e._l(e.abi,(function(t){return"function"===t.type?a("method-card",{key:e.uniqueId(),attrs:{method:t}}):e._e()})),1):e._e()],1)],1)},staticRenderFns:[],components:{MethodCard:{render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-card",[a("b-input-group",{attrs:{prepend:e.name}},[e._l(e.inputs,(function(t,r){return a("b-form-input",{key:e.uniqueId(),attrs:{placeholder:e.inputPlaceholderDisplay(t)},model:{value:e.values[r],callback:function(t){e.$set(e.values,r,t)},expression:"values[index]"}})})),a("b-input-group-append",[a("b-btn",{attrs:{variant:"primary"},on:{click:e.encode}},[e._v("encode")])],1)],2),e.encodeResult?a("b-alert",{attrs:{show:""}},[e._v(e._s(e.encodeResult))]):e._e(),a("b-form-textarea",{attrs:{placeholder:"return data"},model:{value:e.returnData,callback:function(t){e.returnData=t},expression:"returnData"}}),e.returnData?a("b-btn",{attrs:{variant:"primary"},on:{click:e.decode}},[e._v("decode")]):e._e(),e.decodeResult?a("b-alert",{attrs:{show:""}},[e._v(e._s(e.decodeResult))]):e._e()],1)},staticRenderFns:[],props:["method"],data(){const{name:e,inputs:t}=this.method;return{name:e,inputs:t.slice(),values:t.map((function(){return""})),encodeResult:"",returnData:"",decodeResult:""}},mounted(){window.Buffer=_},updated(){},filters:{},methods:{uniqueId:b.uniqueId,inputPlaceholderDisplay:e=>`${e.name} (${e.type})`,encode(){const{method:e,values:t}=this;this.encodeResult=g.encodeMethod(e,t)},decode(){const{method:e,returnData:t}=this;this.decodeResult=g.decodeMethod(e,t)}}}},data:()=>({abiRaw:"[]",abi:[],inputs:[],encodeResult:""}),async mounted(){},updated(){},filters:{},methods:{uniqueId:b.uniqueId,parse(){const{abiRaw:e}=this;this.abi=JSON.parse(e)}}}},provide(){const e={};return Object.defineProperties(e,{ethereum:{get:()=>window.ethereum}}),e},data:()=>({ethereum:null}),mounted(){this.ethereum=window.ethereum},updated(){},methods:{}}}}]);