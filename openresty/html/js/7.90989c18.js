(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{2281:function(t,e,a){},"3e1a":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",{staticClass:"flex column content-center"},[a("div",{staticClass:"main-btn-group"},[a("q-btn",{attrs:{flat:"",color:"primary","icon-right":"arrow_forward"},on:{click:function(e){return t.routeTo("/manage/respondents")}}},[t._v("\n      受访者管理\n    ")]),a("q-btn",{attrs:{flat:"",color:"primary","icon-right":"arrow_forward"},on:{click:t.onCreateSurvey}},[t._v("\n      创建问卷\n    ")])],1),a("div",{staticClass:"work-area"},[a("div",{staticClass:"flex row surveys"},[t._l(t.surveyList,(function(e,n){return a("q-card",{key:n,staticClass:"survey-item"},[a("q-card-section",{staticClass:"survey-top text-white",style:"background-image: repeating-linear-gradient(305deg, "+t.getColor(e.id)+", #ffffff 800px)",on:{click:function(a){return t.routeTo("manage/edit/"+e.id)}}},[a("div",{staticClass:"text-h6"},[a("div",[t._v(t._s(e.title))]),a("div",{staticClass:"text-subtitle2"},[t._v("\n              "+t._s(e.open?"开放问卷":"定向问卷")+"\n            ")])]),e.running?a("div",{staticClass:"text-subtitle2"},[a("q-icon",{attrs:{name:"fiber_manual_record",color:"light-green"}}),t._v("\n            收集中\n          ")],1):a("div",{staticClass:"text-subtitle2"},[a("q-icon",{attrs:{name:"fiber_manual_record",color:"red"}}),t._v("\n            停止收集\n          ")],1),a("q-icon",{staticClass:"absolute-bottom-right",staticStyle:{opacity:"0.5"},attrs:{name:"description",size:"100px"}})],1),a("q-separator",{attrs:{dark:""}}),a("q-card-actions",[a("q-btn",{attrs:{flat:"",color:"primary"},on:{click:function(a){return t.routeTo("manage/edit/"+e.id)}}},[t._v("管理")]),a("q-btn",{attrs:{flat:"",color:"red"},on:{click:function(a){return t.ondeleteSurvey(e.id)}}},[t._v("删除")])],1)],1)})),a("q-btn",{staticClass:"survey-item",attrs:{icon:"add_circle_outline",size:"80px",dense:"","text-color":"grey-4"},on:{click:t.onCreateSurvey}}),a("div",{staticClass:"survey-void"}),a("div",{staticClass:"survey-void"}),a("div",{staticClass:"survey-void"}),a("div",{staticClass:"survey-void"}),a("div",{staticClass:"survey-void"})],2),a("q-dialog",{model:{value:t.addDialog,callback:function(e){t.addDialog=e},expression:"addDialog"}},[a("q-card",[a("q-card-section",[a("div",{staticClass:"text-h6"},[t._v("选择问卷类型")])]),a("q-card-section",{staticClass:"q-pt-none"},[a("q-btn-toggle",{attrs:{"toggle-color":"primary",options:[{value:!0,slot:"one"},{value:!1,slot:"two"}]},scopedSlots:t._u([{key:"one",fn:function(){return[a("div",{staticClass:"row items-center no-wrap q-py-md"},[a("div",{staticClass:"text-center"},[a("b",{staticClass:"text-h5"},[t._v("开放问卷")]),a("hr"),a("div",[t._v("\n                    受访者通过问卷链接匿名做答\n                    "),a("br"),a("br"),t._v("\n                    问卷链接多次有效\n                  ")])])])]},proxy:!0},{key:"two",fn:function(){return[a("div",{staticClass:"row items-center no-wrap q-py-md"},[a("div",{staticClass:"text-center"},[a("b",{staticClass:"text-h5"},[t._v("定向问卷")]),a("hr"),a("div",[t._v("\n                    受访者通过私密链接实名作答\n                    "),a("br"),a("br"),t._v("\n                    问卷链接单次有效\n                  ")])])])]},proxy:!0}]),model:{value:t.surveyOpen,callback:function(e){t.surveyOpen=e},expression:"surveyOpen"}}),a("div",{staticClass:"q-mt-md"},[t._v(" * 问卷类型可以在创建后切换")])],1),a("q-card-actions",{attrs:{align:"right"}},[a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"取消",color:"primary"}}),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"创建",color:"primary"},on:{click:t.createSurvey}})],1)],1)],1)],1)])},r=[],o=a("88b8"),i={name:"SurveyManager",data(){return{surveyList:[],addDialog:!1,surveyOpen:!0,colorList:["#1976D2","#26A69A","#9C27B0","#21BA45","#31CCEC","#F2C037"]}},created(){this.getData()},methods:{getColor(t){return this.colorList[t.charCodeAt(t.length-1)*t.charCodeAt(t.length-2)*37%6]},getData(){Object(o["e"])().then((t=>{this.surveyList=t.data.data}))},routeTo(t){this.$router.push(t)},onCreateSurvey(){this.surveyOpen=!0,this.addDialog=!0},createSurvey(){Object(o["a"])({open:this.surveyOpen,running:!1,title:"无标题问卷",startTime:null,stopTime:null,desc:"",questionSet:[],emailTemplate:""}).then((t=>{this.routeTo("manage/edit/"+t.data.data.id)}))},ondeleteSurvey(t){this.$q.dialog({title:"删除",message:"确定要删除此问卷吗? 此操作不可逆",cancel:!0,persistent:!0}).onOk((()=>{Object(o["b"])({id:t}).then((()=>{this.getData()}))}))}}},s=i,c=(a("d17b"),a("2877")),u=a("9989"),l=a("9c40"),d=a("eb85"),p=a("f09f"),v=a("a370"),g=a("0016"),m=a("4b7e"),b=a("24e8"),f=a("6a67"),h=a("7f67"),C=a("eebe"),y=a.n(C),q=Object(c["a"])(s,n,r,!1,null,"b4c9d6be",null);e["default"]=q.exports;y()(q,"components",{QPage:u["a"],QBtn:l["a"],QSeparator:d["a"],QCard:p["a"],QCardSection:v["a"],QIcon:g["a"],QCardActions:m["a"],QDialog:b["a"],QBtnToggle:f["a"]}),y()(q,"directives",{ClosePopup:h["a"]})},"88b8":function(t,e,a){"use strict";a.d(e,"a",(function(){return r})),a.d(e,"h",(function(){return o})),a.d(e,"e",(function(){return i})),a.d(e,"d",(function(){return s})),a.d(e,"b",(function(){return c})),a.d(e,"f",(function(){return u})),a.d(e,"i",(function(){return l})),a.d(e,"c",(function(){return d})),a.d(e,"g",(function(){return p}));var n=a("b775");const r=t=>Object(n["a"])({url:"/api/question/manage",method:"post",data:t}),o=t=>Object(n["a"])({url:"/api/question/manage",method:"put",data:t}),i=t=>Object(n["a"])({url:"/api/question/manage",method:"get",data:t}),s=t=>Object(n["a"])({url:"/api/question/manage",method:"get",params:t}),c=t=>Object(n["a"])({url:"/api/question/manage",method:"delete",data:t}),u=t=>Object(n["a"])({url:"/api/question/generate",method:"get",params:t}),l=t=>Object(n["a"])({url:"/api/question/generate",method:"post",data:t}),d=t=>Object(n["a"])({url:"/api/question/generate",method:"post",data:t}),p=t=>Object(n["a"])({url:"/api/question/result",method:"get",params:t})},b775:function(t,e,a){"use strict";(function(t){var n=a("bc3a"),r=a.n(n),o=a("2a19");const i=r.a.create({baseURL:t.env.VUE_APP_BASE_API,timeout:99999,withCredentials:!0});i.interceptors.request.use((t=>(t.data=JSON.stringify(t.data),t.headers={"Content-Type":"application/json"},t)),(t=>(o["a"].create({message:t.toString(),color:"negative",position:"top",timeout:2e3,icon:"warning"}),t))),i.interceptors.response.use((t=>{switch(t.data.code){case 0:return t;case 1:return o["a"].create({message:t.data.message.toString(),color:"warning",position:"top",timeout:2e3}),setTimeout((()=>{document.cookie="username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;",document.cookie="token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;",location.reload()}),500),t;case 2:return o["a"].create({message:t.data.message.toString(),color:"orange",position:"top",timeout:2e3}),t;case-1:return o["a"].create({message:"系统错误",color:"deep-orange-14",position:"top",timeout:2e3}),t;case 7:return o["a"].create({message:t.data.message.toString(),color:"warning",position:"top",timeout:2e3}),t;default:return t}}),(t=>(o["a"].create({message:t.toString(),color:"negative",position:"top",timeout:2e3,icon:"warning"}),t))),e["a"]=i}).call(this,a("4362"))},d17b:function(t,e,a){"use strict";a("2281")}}]);