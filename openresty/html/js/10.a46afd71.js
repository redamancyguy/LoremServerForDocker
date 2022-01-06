(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[10],{"30b8":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page",{staticClass:"flex row justify-center"},[a("div",{staticClass:"san-grail q-pa-md"},[a("q-stepper",{ref:"stepper",attrs:{color:"primary",animated:""},model:{value:e.step,callback:function(t){e.step=t},expression:"step"}},[a("q-step",{attrs:{name:1,title:"身份验证",icon:"verified_user",done:e.step>1}},[a("q-form",{ref:"emailVerify",staticClass:"flex column"},[a("q-input",{attrs:{label:"邮箱",maxlength:"50","lazy-rules":"",rules:[function(e){return e&&e.length>0||"请输入邮箱"},function(e){return e&&/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/.test(e)||"请输入正确的邮箱地址"}]},on:{keydown:function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;t.preventDefault()}},scopedSlots:e._u([{key:"prepend",fn:function(){return[a("q-icon",{attrs:{name:"email"}})]},proxy:!0}]),model:{value:e.verifyForm.email,callback:function(t){e.$set(e.verifyForm,"email",t)},expression:"verifyForm.email"}}),a("q-input",{attrs:{label:"验证码",maxlength:"20","lazy-rules":"",rules:[function(e){return e&&e.length>0||"请输入验证码"}]},on:{keydown:function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;t.preventDefault()}},scopedSlots:e._u([{key:"prepend",fn:function(){return[a("q-icon",{attrs:{name:"how_to_reg"}})]},proxy:!0},{key:"after",fn:function(){return[a("q-img",{staticStyle:{cursor:"pointer"},attrs:{src:"data:image/png;base64,"+e.captchaImg,width:"100px",height:"50px"},on:{click:e.getCaptchaData}})]},proxy:!0}]),model:{value:e.verifyForm.captcha.code,callback:function(t){e.$set(e.verifyForm.captcha,"code",t)},expression:"verifyForm.captcha.code"}}),a("q-btn",{attrs:{color:"primary",label:"继续"},on:{click:e.verifyEmail}})],1)],1),a("q-step",{attrs:{name:2,title:"更改密码",icon:"manage_accounts",done:e.step>2}},[a("q-form",{ref:"codeVerify",staticClass:"flex column"},[a("div",[e._v("我们向您的邮箱中发送了验证码，请在下方填写：")]),a("q-input",{attrs:{label:"邮箱验证码",type:"text",mask:"######","lazy-rules":"",rules:[function(e){return e&&e.length>0||"请输入验证码"}]},on:{keydown:function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;t.preventDefault()}},model:{value:e.verifyCodeFrom.emailCode,callback:function(t){e.$set(e.verifyCodeFrom,"emailCode",t)},expression:"verifyCodeFrom.emailCode"}}),a("q-btn",{attrs:{color:"primary",label:"继续"},on:{click:e.verifyCode}})],1)],1),a("q-step",{attrs:{name:3,title:"完成",icon:"check_circle",done:3===e.step}},[a("q-form",{ref:"changeFrom",staticClass:"flex column"},[a("q-input",{attrs:{label:"密码",name:"password",maxlength:"20",autocomplete:"new-password",type:e.isPwd?"password":"text","lazy-rules":"",rules:[function(e){return e&&e.length>0||"请输入密码"},function(e){return e&&/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/.test(e)||"密码至少包含 数字和英文，长度6-20"}]},scopedSlots:e._u([{key:"prepend",fn:function(){return[a("q-icon",{attrs:{name:"lock"}})]},proxy:!0},{key:"append",fn:function(){return[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:e.isPwd?"visibility_off":"visibility"},on:{click:function(t){e.isPwd=!e.isPwd}}})]},proxy:!0}]),model:{value:e.verifyCodeFrom.password,callback:function(t){e.$set(e.verifyCodeFrom,"password",t)},expression:"verifyCodeFrom.password"}}),a("q-input",{attrs:{label:"重复密码",maxlength:"20",autocomplete:"new-password",type:"password",rules:[function(t){return t===e.verifyCodeFrom.password||"两次输入不一致"}]},scopedSlots:e._u([{key:"prepend",fn:function(){return[a("q-icon",{attrs:{name:"lock"}})]},proxy:!0}]),model:{value:e.passwordAgain,callback:function(t){e.passwordAgain=t},expression:"passwordAgain"}}),a("q-btn",{attrs:{label:1===e.submitted?"修改成功!":"修改密码",color:1===e.submitted?"secondary":"primary",disable:0!==e.submitted,loading:-1===e.submitted},on:{click:e.changePassword}})],1)],1)],1)],1)])},o=[],n=a("4ec3"),i={name:"Forget",data(){return{step:1,isPwd:!0,verifyForm:{email:"",captcha:{code:"",id:""}},passwordAgain:"",verifyCodeFrom:{emailCode:"",password:""},captchaImg:"",submitted:0}},created(){this.getCaptchaData()},methods:{getCaptchaData(){Object(n["c"])().then((e=>{this.verifyForm.captcha.code="",this.verifyForm.captcha.id=e.data.data.id,this.captchaImg=e.data.data.base64Data}))},verifyEmail(){this.$refs.emailVerify.validate().then((e=>{e&&Object(n["i"])(this.verifyForm).then((e=>{console.log(e),0===e.data.code&&this.$refs.stepper.next()}))}))},verifyCode(){this.$refs.codeVerify.validate().then((e=>{e&&Object(n["a"])({emailCode:this.verifyCodeFrom.emailCode}).then((e=>{console.log(e),0===e.data.code&&this.$refs.stepper.next()}))}))},changePassword(){this.submitted=-1,this.$refs.changeFrom.validate().then((e=>{e&&Object(n["a"])({emailCode:this.verifyCodeFrom.emailCode,password:this.$md5(this.verifyCodeFrom.password)}).then((e=>{console.log(e),0===e.data.code?(this.submitted=1,setTimeout(this.toLogin,1500)):this.submitted=0})),this.submitted=0}))},toLogin(){this.$router.push("login")}}},s=i,c=a("2877"),u=a("9989"),l=a("f531"),d=a("87fe"),p=a("0378"),m=a("27f9"),f=a("0016"),h=a("068f"),g=a("9c40"),y=a("b19c"),b=a("eebe"),v=a.n(b),w=Object(c["a"])(s,r,o,!1,null,"29a447de",null);t["default"]=w.exports;v()(w,"components",{QPage:u["a"],QStepper:l["a"],QStep:d["a"],QForm:p["a"],QInput:m["a"],QIcon:f["a"],QImg:h["a"],QBtn:g["a"],QStepperNavigation:y["a"]})},"4ec3":function(e,t,a){"use strict";a.d(t,"d",(function(){return o})),a.d(t,"j",(function(){return n})),a.d(t,"f",(function(){return i})),a.d(t,"h",(function(){return s})),a.d(t,"g",(function(){return c})),a.d(t,"c",(function(){return u})),a.d(t,"e",(function(){return l})),a.d(t,"b",(function(){return d})),a.d(t,"i",(function(){return p})),a.d(t,"a",(function(){return m}));var r=a("b775");const o=e=>Object(r["a"])({url:"/api/question/answer",method:"get",params:e}),n=(e,t)=>Object(r["a"])({url:"/api/question/answer",method:"post",params:e,data:t}),i=e=>Object(r["a"])({url:"/api/user/login",method:"post",data:e}),s=e=>Object(r["a"])({url:"/api/user/register",method:"post",data:e}),c=e=>Object(r["a"])({url:"/api/user/logout",method:"post",data:e}),u=e=>Object(r["a"])({url:"/api/user/getcaptcha",method:"get",data:e}),l=e=>Object(r["a"])({url:"/api/user/userinfo",method:"get",data:e}),d=e=>Object(r["a"])({url:"/api/user/userinfo",method:"put",data:e}),p=e=>Object(r["a"])({url:"/api/user/changepw",method:"post",data:e}),m=e=>Object(r["a"])({url:"/api/user/changepw",method:"put",data:e})},b775:function(e,t,a){"use strict";(function(e){var r=a("bc3a"),o=a.n(r),n=a("2a19"),i=a("2b27"),s=a.n(i);const c=o.a.create({baseURL:e.env.VUE_APP_BASE_API,timeout:99999,withCredentials:!0});c.interceptors.request.use((e=>{let t=null;return s.a.isKey("csrftoken")&&(t=s.a.get("csrftoken")),e.data=JSON.stringify(e.data),e.headers={"Content-Type":"application/json","X-CSRFToken":t},e}),(e=>(n["a"].create({message:e.toString(),color:"negative",position:"top",timeout:2e3,icon:"warning"}),e))),c.interceptors.response.use((e=>{switch(e.data.code){case 0:return e;case 1:return n["a"].create({message:e.data.message.toString(),color:"warning",position:"top",timeout:2e3}),setTimeout((()=>{document.cookie="username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;",document.cookie="token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;",location.reload()}),500),e;case 2:return n["a"].create({message:e.data.message.toString(),color:"orange",position:"top",timeout:2e3}),e;case-1:return n["a"].create({message:"系统错误",color:"deep-orange-14",position:"top",timeout:2e3}),e;case 7:return n["a"].create({message:e.data.message.toString(),color:"warning",position:"top",timeout:2e3}),e;default:return e}}),(e=>(n["a"].create({message:e.toString(),color:"negative",position:"top",timeout:2e3,icon:"warning"}),e))),t["a"]=c}).call(this,a("4362"))}}]);