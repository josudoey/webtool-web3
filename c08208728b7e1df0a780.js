(self.webpackChunkwebtool_web3=self.webpackChunkwebtool_web3||[]).push([[874],{9214:()=>{},5568:()=>{},7131:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>S});var s=a(6486),n=a(4278),r=a(8764),o=a(3550),c=a(6266);const i=a(1094).keccak_256,l=r.lW,u=new(0,c.ec)("secp256k1"),d=function(e){return"string"!=typeof e?e:function(e){if("string"!=typeof e)throw new Error("[is-hex-prefixed] value must be type 'string', is currently type "+typeof e+", while checking isHexPrefixed.");return"0x"===e.slice(0,2)}(e)?e.slice(2):e},p=function(e){return new o(m(e)).toNumber()},m=function(e){if(null==e)return l.allocUnsafe(0);if(l.isBuffer(e))return l.from(e);if(Array.isArray(e)||e instanceof Uint8Array)return l.from(e);if("string"==typeof e){if("string"!=typeof(t=e)||!t.match(/^0x[0-9A-Fa-f]*$/)||a&&t.length!==2+2*a)throw new Error(`Cannot convert string to buffer. toBuffer only supports 0x-prefixed hex strings and this string was given: ${e}`);return l.from(function(e){let t=e;if("string"!=typeof t)throw new Error("[padToEven] value must be type 'string', received "+typeof t);return t.length%2&&(t=`0${t}`),t}(d(e)),"hex")}var t,a;return l.from(str,"hex")},h=function(e,t){const a=function(e){const t=l.from(`Ethereum Signed Message:\n${e.length}`,"utf-8");return l.from(i(l.concat([t,e])),"hex")}(l.from(e,"utf-8")),s=function(e){const t=m(e);let a,s,n;if(t.length>=65)a=t.slice(0,32),s=t.slice(32,64),n=p(t.slice(64));else{if(64!==t.length)throw new Error("Invalid signature length");a=t.slice(0,32),s=t.slice(32,64),n=p(t.slice(32,33))>>7,s[0]&=127}return n<27&&(n+=27),{v:n,r:a,s}}(t),n=u.recoverPubKey(a,s,s.v-27).encode("hex",!1),r=l.from(n,"hex").slice(1);return`0x${l.from(i(r),"hex").slice(-20).toString("hex")}`},v=function(e,t){const a=d(e).toLowerCase();let s="";if(t){s=new o(t).toString()+"0x"}const n=i(s+a);let r="0x";for(let e=0;e<a.length;e++)parseInt(n[e],16)>=8?r+=a[e].toUpperCase():r+=a[e];return r};const b="metamask-card",f=["transactionToAddress","transactionEther","transactionData","message"],y={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-card",{staticStyle:{"max-width":"400px"}},[a("b-card-title",[e._v("MetaMask")]),e.ethereum.selectedAddress?a("b-card-body",[a("span",[e._v("Current Address: "+e._s(e._f("toChecksumAddress")(e.ethereum.selectedAddress)))]),a("br"),null===e.balance&&e.getBalance(e.ethereum.selectedAddress)?a("b-icon",{attrs:{icon:"arrow-clockwise",animation:"spin-pulse"}}):e._e(),null!==e.balance?a("span",[e._v("Balance: "+e._s(e._f("ether")(e.balance))+" Ether"),a("b-btn",{staticClass:"p-0",attrs:{variant:"primary"},on:{click:function(t){return e.getBalance(e.ethereum.selectedAddress)}}},[a("b-icon-arrow-repeat")],1)],1):e._e(),a("br"),a("b-btn",{attrs:{variant:"secondary",size:"sm"},on:{click:e.reset}},[e._v("reset")]),a("b-form-input",{attrs:{placeholder:"to address"},model:{value:e.transactionToAddress,callback:function(t){e.transactionToAddress=t},expression:"transactionToAddress"}}),a("b-form-input",{attrs:{placeholder:"send amount(ether)"},model:{value:e.transactionEther,callback:function(t){e.transactionEther=t},expression:"transactionEther"}}),a("b-form-textarea",{attrs:{placeholder:"data(option)"},model:{value:e.transactionData,callback:function(t){e.transactionData=t},expression:"transactionData"}}),a("b-btn",{attrs:{variant:"primary"},on:{click:function(t){return e.sendTransaction(e.transactionToAddress,e.transactionEther,e.transactionData)}}},[e._v("sendTransaction")]),e.transactionHash?a("b-alert",{attrs:{show:""}},[e._v("tx hash: "+e._s(e.transactionHash))]):e._e(),a("b-btn",{attrs:{variant:"primary"},on:{click:function(t){return e.call(e.transactionToAddress,e.transactionEther,e.transactionData)}}},[e._v("call")]),e.returnData?a("b-alert",{attrs:{show:""}},[e._v("return data: "+e._s(e.returnData))]):e._e(),a("hr"),a("b-form-textarea",{attrs:{placeholder:"message"},model:{value:e.message,callback:function(t){e.message=t},expression:"message"}}),a("b-btn",{attrs:{variant:"primary"},on:{click:function(t){return e.personalSign(e.message)}}},[e._v("personalSign")]),e.messageSignature?a("b-alert",{attrs:{show:""}},[e._v("message signature: "+e._s(e.messageSignature))]):e._e()],1):a("b-card-body",[a("b-btn",{attrs:{variant:"primary"},on:{click:e.requestAccounts}},[e._v("requestAccounts")])],1)],1)},staticRenderFns:[],inject:["ethereum","preserveRestore","preserveWatch"],data:()=>({accounts:[],balance:null,transactionToAddress:"",transactionEther:"",transactionData:"",transactionHash:"",returnData:"",message:"",messageSignature:""}),mounted(){const{preserveRestore:e,preserveWatch:t,$data:a,ethereum:s}=this;e(b,a),t(b,this,f);const n=this;s.on("accountsChanged",(function(e){const{selectedAddress:t}=s;n.$bvToast.toast(`accountsChanged ${t}`,{title:"帳號變更",autoHideDelay:3e3,appendToast:!0}),t&&n.getBalance(t)})),this.getAccounts()},filters:{ether:e=>n.fromWei(e,"ether"),toChecksumAddress:e=>v(e)},methods:{reset(){Object.assign(this,{transactionToAddress:"",transactionEther:"",transactionData:"",transactionHash:""})},async request(e){const{ethereum:t}=this;return t.request(e)},async requestAccounts(){try{this.accounts=await this.request({method:"eth_requestAccounts"})}catch(e){this.$bvToast.toast(e.message,{title:"存取失敗",autoHideDelay:3e3,appendToast:!0})}},async getAccounts(){this.accounts=await this.request({method:"eth_accounts"})},async getBalance(e){console.log("getBalance",e);const t=this.balance=await this.request({method:"eth_getBalance",params:[e,"latest"]});return console.log(e,t),t},async sendTransaction(e,t,a){const{ethereum:s}=this;try{const r={from:s.selectedAddress,to:e};if(t){const e=n.toWei(t,"ether");r.value=`0x${e.toString(16)}`}a&&(r.data=`0x${d(a)}`),console.log(r);const o=this.transactionHash=await this.request({method:"eth_sendTransaction",params:[r]});console.log(o)}catch(e){this.$bvToast.toast(e.message,{title:"發送失敗",autoHideDelay:3e3,appendToast:!0}),console.log(e)}},async call(e,t,a){const{ethereum:s}=this;try{const r={from:s.selectedAddress,to:e};if(t){const e=n.toWei(t,"ether");r.value=`0x${e.toString(16)}`}a&&(r.data=`0x${d(a)}`),console.log(r);const o=this.returnData=await this.request({method:"eth_call",params:[r,"latest"]});console.log(o)}catch(e){this.$bvToast.toast(e.message,{title:"呼叫失敗",autoHideDelay:3e3,appendToast:!0}),console.log(e)}},async personalSign(e,t){const{ethereum:a}=this,s={method:"personal_sign",params:[e,t=t||a.selectedAddress]};console.log(s);const n=this.messageSignature=await a.request(s);console.log(n)}}};const g="ecrecover-card",_=["recoverMessage","recoverSignature"],w={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-card",{staticStyle:{"max-width":"400px"}},[a("b-card-title",[e._v("EcRecover")]),a("b-card-body",[a("b-form-textarea",{attrs:{placeholder:"recover message"},model:{value:e.recoverMessage,callback:function(t){e.recoverMessage=t},expression:"recoverMessage"}}),a("b-form-textarea",{attrs:{placeholder:"recover signature"},model:{value:e.recoverSignature,callback:function(t){e.recoverSignature=t},expression:"recoverSignature"}}),a("b-btn",{attrs:{variant:"primary"},on:{click:function(t){return e.personalRecover(e.recoverMessage,e.recoverSignature)}}},[e._v("personalRecover")]),e.recoverAddress?a("b-alert",{attrs:{show:""}},[e._v("recover address: "+e._s(e._f("toChecksumAddress")(e.recoverAddress)))]):e._e()],1)],1)},staticRenderFns:[],inject:["preserveRestore","preserveWatch"],data:()=>({recoverMessage:"",recoverSignature:"",recoverAddress:""}),async mounted(){const{preserveRestore:e,preserveWatch:t,$data:a}=this;e(g,a),t(g,this,_)},filters:{toChecksumAddress:v},methods:{preserveData(){const{preserveSave:e,$data:t}=this;e(g,(0,s.pick)(t,_))},watchForPreserve(){const{preserveData:e}=this;for(const t of _)this.$watch(t,e)},async personalRecover(e,t){this.recoverAddress=h(e,t)}}};var x=a(9934);const k=r.lW,A={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-card",[a("b-input-group",{attrs:{prepend:e.name}},[e._l(e.inputs,(function(t,s){return a("b-form-input",{key:e.uniqueId(),attrs:{placeholder:e.methodPlaceholderDisplay(t)},model:{value:e.values[s],callback:function(t){e.$set(e.values,s,t)},expression:"values[index]"}})})),a("b-input-group-append",[a("b-btn",{attrs:{variant:"primary"},on:{click:e.encode}},[e._v("encode")])],1)],2),e.encodeResult?a("b-alert",{attrs:{show:""}},[e._v(e._s(e.encodeResult))]):e._e(),a("b-form-textarea",{attrs:{placeholder:"return data"},model:{value:e.returnData,callback:function(t){e.returnData=t},expression:"returnData"}}),e.returnData?a("b-btn",{attrs:{variant:"primary"},on:{click:e.decode}},[e._v("decode")]):e._e(),e.decodeResult?a("b-alert",{attrs:{show:""}},[e._v(e._s(e.decodeResult))]):e._e()],1)},staticRenderFns:[],props:["method"],data(){const{name:e,inputs:t}=this.method;return{name:e,inputs:t.slice(),values:t.map((function(){return""})),encodeResult:"",returnData:"",decodeResult:""}},mounted(){window.Buffer=k},methods:{uniqueId:s.uniqueId,methodPlaceholderDisplay:e=>`${e.name} (${e.type})`,encode(){const{method:e,values:t}=this;this.encodeResult=x.encodeMethod(e,t)},decode(){const{method:e,returnData:t}=this;this.decodeResult=x.decodeMethod(e,t)}}},R=[{constant:!0,inputs:[],name:"name",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_spender",type:"address"},{name:"_value",type:"uint256"}],name:"approve",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"totalSupply",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_from",type:"address"},{name:"_to",type:"address"},{name:"_value",type:"uint256"}],name:"transferFrom",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"decimals",outputs:[{name:"",type:"uint8"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"_owner",type:"address"}],name:"balanceOf",outputs:[{name:"balance",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"symbol",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_to",type:"address"},{name:"_value",type:"uint256"}],name:"transfer",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"_owner",type:"address"},{name:"_spender",type:"address"}],name:"allowance",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{payable:!0,stateMutability:"payable",type:"fallback"},{anonymous:!1,inputs:[{indexed:!0,name:"owner",type:"address"},{indexed:!0,name:"spender",type:"address"},{indexed:!1,name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!0,name:"to",type:"address"},{indexed:!1,name:"value",type:"uint256"}],name:"Transfer",type:"event"}];const C="abi-card",$=["abiRaw"];const S={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container-fluid px-0"},[e._m(0),a("div",{staticClass:"container-fluid px-0"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-6 col-lg-3"},[e.ethereum&&e.ethereum.isMetaMask?a("metamask-card"):a("a",{attrs:{href:"https://metamask.io/"}},[a("img",{attrs:{src:"https://metamask.io/images/mm-logo.svg"}}),e._v("Install")])],1),a("div",{staticClass:"col-6 col-lg-3"},[a("ecrecover-card")],1),a("div",{staticClass:"col-12 col-lg-6"},[a("abi-card")],1)])])])},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("nav",{staticClass:"navbar navbar-dark bg-dark"},[a("div",{staticClass:"navbar-brand d-flex"},[a("div",[e._v("Webtool Web3")])])])}],components:{MetamaskCard:y,EcrecoverCard:w,AbiCard:{render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-card",[a("b-card-title",[e._v("Contract ABI"),a("b-btn",{staticClass:"py-0",attrs:{variant:"secondary",size:"sm"},on:{click:e.setErc20Abi}},[e._v("erc20")]),a("a",{staticClass:"ml-1 small",attrs:{href:"https://remix.ethereum.org/"}},[e._v("reminx")])],1),a("b-card-body",[a("b-form-textarea",{attrs:{placeholder:"Contract ABI","max-rows":"15"},model:{value:e.abiRaw,callback:function(t){e.abiRaw=t},expression:"abiRaw"}}),a("b-btn",{attrs:{variant:"primary"},on:{click:e.parse}},[e._v("parse")]),e.abi.length?a("div",{staticClass:"m-1"},e._l(e.abi,(function(t){return"function"===t.type?a("method-card",{key:e.uniqueId(),attrs:{method:t}}):e._e()})),1):e._e()],1)],1)},staticRenderFns:[],components:{MethodCard:A},inject:["preserveRestore","preserveWatch"],data:()=>({abiRaw:"[]",abi:[],inputs:[],encodeResult:""}),mounted(){const{preserveRestore:e,preserveWatch:t,$data:a}=this;e(C,a),t(C,this,$)},filters:{},methods:{uniqueId:s.uniqueId,setErc20Abi(){this.abiRaw=JSON.stringify(R)},parse(){const{abiRaw:e}=this;this.abi=JSON.parse(e)}}}},provide(){const e=function(e,t,a){const{$data:n}=t;!function(e,t){window.localStorage.setItem(e,JSON.stringify(t))}(e,s(n,a))},t={preserveRestore:function(e,t){const a=window.localStorage.getItem(e);Object.assign(t,JSON.parse(a))},preserveWatch:function(t,a,s){for(const n of s)a.$watch(n,(function(){e(t,a,s)}))}};return Object.defineProperties(t,{ethereum:{get:()=>window.ethereum}}),t},data:()=>({ethereum:null}),mounted(){this.ethereum=window.ethereum},updated(){},methods:{}}}}]);