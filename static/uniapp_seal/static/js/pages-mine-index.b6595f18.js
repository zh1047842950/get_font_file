(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-mine-index"],{"0f29":function(t,e,n){"use strict";n("4160"),n("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{}},provide:function(){return{swipeaction:this}},created:function(){this.children=[]},methods:{closeOther:function(t){var e=this.children;e.forEach((function(e,n){if(t!==e){var i=e.position[0],o=i.show;o&&(i.show=!1)}}))}}};e.default=i},"0fba":function(t,e,n){"use strict";n.r(e);var i=n("f83b"),o=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},"10a1":function(t,e,n){"use strict";n.r(e);var i=n("89ff"),o=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},"3a3d":function(t,e,n){"use strict";var i=n("f122"),o=n.n(i);o.a},"43c3":function(t,e,n){"use strict";n.r(e);var i=n("f981"),o=n("10a1");for(var a in o)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("3a3d");var r,s=n("f0c5"),c=n("53a7"),u=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,"5d2b9f1e",null,!1,i["a"],r);"function"===typeof c["a"]&&Object(c["a"])(u),e["default"]=u.exports},"53a7":function(t,e,n){"use strict";var i=function(t){(t.options.wxs||(t.options.wxs={}))["swipe"]=function(t){function e(t,e,n,i){var o=i.getState();if(o.position=JSON.parse(t),o.position&&0!==o.position.length){var a=o.position[0].show;o.left=o.left||o.position[0].left,c(!!a,i,n)}}function n(t,e){var n=t.instance,i=n.getState(),o=t.touches[0].pageX;n.removeClass("ani");for(var a=e.selectAllComponents(".button-hock"),r=0;r<a.length;r++)a[r].removeClass("ani");i.left=i.left||i.position[0].left,i.width=o-i.left,e.callMethod("closeSwipe")}function i(t,e){var n=t.instance,i=n.getDataset().disabled,o=n.getState();if(i=("string"===typeof i?JSON.parse(i):i)||!1,!i){var r=t.touches[0].pageX;a(r-o.width,n,e)}}function o(t,e){var n=t.instance,i=n.getDataset().disabled,o=n.getState();i=("string"===typeof i?JSON.parse(i):i)||!1,i||r(o.left,-40,n,e)}function a(t,e,n){var i=e.getState(),o=Math.max(-i.position[1].width,Math.min(t,0));i.left=o,e.setStyle({transform:"translateX("+o+"px)","-webkit-transform":"translateX("+o+"px)"}),s(o,e,n)}function r(t,e,n,i){var o=n.getState(),a=o.position,r=o.isopen;a[1].width?r?-t<=a[1].width?c(!1,n,i):c(!0,n,i):c(t<=e,n,i):c(!1,n,i)}function s(t,e,n){for(var i=n.selectAllComponents(".button-hock"),o=e.getState(),a=o.position,r=[],s=0,c=0;c<i.length;c++){if(!i[c].getDataset().button)return;var u=JSON.parse(i[c].getDataset().button);"string"===typeof u&&(u=JSON.parse(u));var l=u[c]&&u[c].width||0;s+=l,r.push(-s);var f=r[c-1]+t*(r[c-1]/a[1].width);0!=c&&i[c].setStyle({transform:"translateX("+f+"px)"})}}function c(t,e,n){var i=e.getState(),o=i.position;void 0===i.isopen&&(i.isopen=!1),i.isopen!==t&&n.callMethod("change",{open:t}),i.isopen=t,e.addClass("ani");for(var r=n.selectAllComponents(".button-hock"),s=0;s<r.length;s++)r[s].addClass("ani");a(t?-o[1].width:0,e,n)}return t.exports={sizeReady:e,touchstart:n,touchmove:i,touchend:o},t.exports}({exports:{}})};e["a"]=i},5719:function(t,e,n){"use strict";n.r(e);var i=n("cd55"),o=n("0fba");for(var a in o)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("90f4");var r,s=n("f0c5"),c=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,"714ff665",null,!1,i["a"],r);e["default"]=c.exports},"864e":function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[t._t("default")],2)},a=[]},"89ff":function(t,e,n){"use strict";var i=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(n("a19e")),a={mixins:[o.default],props:{options:{type:Array,default:function(){return[]}},disabled:{type:Boolean,default:!1},show:{type:Boolean,default:!1},autoClose:{type:Boolean,default:!0}},inject:["swipeaction"]};e.default=a},"90f4":function(t,e,n){"use strict";var i=n("b092"),o=n.n(i);o.a},"97b5":function(t,e,n){"use strict";n.r(e);var i=n("864e"),o=n("f230");for(var a in o)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(a);var r,s=n("f0c5"),c=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,"26c7cbb2",null,!1,i["a"],r);e["default"]=c.exports},a19e:function(t,e,n){"use strict";n.r(e),function(t){e["default"]={data(){return{position:[],button:[]}},computed:{pos(){return JSON.stringify(this.position)},btn(){return JSON.stringify(this.button)}},watch:{show(t){if(this.autoClose)return;let e=this.position[0];e?(e.show=t,this.$set(this.position,0,e)):this.init()}},created(){void 0!==this.swipeaction.children&&this.swipeaction.children.push(this)},mounted(){this.init()},beforeDestroy(){this.swipeaction.children.forEach((t,e)=>{t===this&&this.swipeaction.children.splice(e,1)})},methods:{init(){setTimeout(()=>{this.getSize(),this.getButtonSize()},50)},closeSwipe(t){this.autoClose&&this.swipeaction.closeOther(this)},change(t){this.$emit("change",t.open);let e=this.position[0];e.show!==t.open&&(e.show=t.open,this.$set(this.position,0,e))},onClick(t,e){this.$emit("click",{content:e,index:t})},appTouchStart(t){const{clientX:e}=t.changedTouches[0];this.clientX=e,this.timestamp=(new Date).getTime()},appTouchEnd(e,n,i){const{clientX:o}=e.changedTouches[0];let a=Math.abs(this.clientX-o),r=(new Date).getTime()-this.timestamp;t.log(a),a<40&&r<300&&this.$emit("click",{content:i,index:n})},getSize(){const t=uni.createSelectorQuery().in(this);t.selectAll(".selector-query-hock").boundingClientRect(t=>{this.autoClose?t[0].show=!1:t[0].show=this.show,this.position=t}).exec()},getButtonSize(){const t=uni.createSelectorQuery().in(this);t.selectAll(".button-hock").boundingClientRect(t=>{this.button=t}).exec()}}}}.call(this,n("5a52")["default"])},b092:function(t,e,n){var i=n("c371");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("2723ea1d",i,!0,{sourceMap:!1,shadowMode:!1})},c371:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,".order_types[data-v-714ff665]{-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;padding:0 20px}.order_types uni-view[data-v-714ff665]{margin-right:20px;line-height:30px;border-bottom:2px solid #fff;padding:0 10px}.order_types uni-view.active[data-v-714ff665]{border-color:#3c98fe;color:#3c98fe}.order_item img[data-v-714ff665]{width:70px;height:40px;object-fit:contain;margin:0 10px}.order_item .flex_item[data-v-714ff665]{line-height:30px}.order_item .flex_item .title[data-v-714ff665]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.order_item .flex_item .title uni-text[data-v-714ff665]{color:#3c98fe}.to_create[data-v-714ff665]{line-height:30px;display:block;width:60%;margin:10px auto;border-radius:15px;border:1px solid #3c98fe;color:#3c98fe;text-align:center;font-size:14px}",""]),t.exports=e},c5b8:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.uni-swipe[data-v-5d2b9f1e]{overflow:hidden}.uni-swipe-box[data-v-5d2b9f1e]{position:relative;width:100%}.uni-swipe_content[data-v-5d2b9f1e]{-webkit-box-flex:1;-webkit-flex:1;flex:1;position:relative}.uni-swipe_move-box[data-v-5d2b9f1e]{display:-webkit-box;display:-webkit-flex;display:flex;position:relative;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}.uni-swipe_box[data-v-5d2b9f1e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;width:100%;-webkit-flex-shrink:0;flex-shrink:0;font-size:14px;background-color:#fff}.uni-swipe_button-group[data-v-5d2b9f1e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-shrink:0;flex-shrink:0;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}.uni-swipe_button[data-v-5d2b9f1e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:0 20px}.uni-swipe_button-text[data-v-5d2b9f1e]{-webkit-flex-shrink:0;flex-shrink:0;font-size:14px}.ani[data-v-5d2b9f1e]{-webkit-transition-property:-webkit-transform;transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform;-webkit-transition-duration:.3s;transition-duration:.3s;-webkit-transition-timing-function:cubic-bezier(.165,.84,.44,1);transition-timing-function:cubic-bezier(.165,.84,.44,1)}',""]),t.exports=e},cd55:function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"mine_page flex_box vertical"},[n("TopNav",{attrs:{pathName:"mine"}}),"seal"===t.moduleFor?n("v-uni-view",{staticClass:"order_types flex_box"},[n("v-uni-view",{class:0===t.status?"active":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onChangeType(0)}}},[t._v("已下单")]),n("v-uni-view",{class:1===t.status?"active":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onChangeType(1)}}},[t._v("保存")])],1):t._e(),n("ListView",{staticClass:"flex_item",scopedSlots:t._u([{key:"default",fn:function(e){var i=e.data;return[n("AllowRight",{staticClass:"order_item",on:{itemClick:function(e){arguments[0]=e=t.$handleEvent(e),t.onTapSeal(i)}}},[n("uni-swipe-action",{staticClass:"flex_item"},[n("uni-swipe-action-item",{attrs:{options:t.options},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onActions(e,i)}}},[i.img?n("img",{attrs:{src:"string"===typeof i.img?i.img:i.img.medium,alt:""}}):t._e(),n("v-uni-view",[n("v-uni-view",{staticClass:"title"},[t._v("订单ID："),n("v-uni-text",[t._v(t._s(i.id))])],1),n("v-uni-view",{staticClass:"time"},[t._v(t._s(i.time))])],1)],1)],1)],1)]}}])}),n("v-uni-navigator",{staticClass:"to_create",attrs:{url:"/pages/conventional/index?type="+t.moduleFor}},[t._v("创建我的"+t._s("label"===t.moduleFor?"标签":"印章"))])],1)},a=[]},f122:function(t,e,n){var i=n("c5b8");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("46966b88",i,!0,{sourceMap:!1,shadowMode:!1})},f230:function(t,e,n){"use strict";n.r(e);var i=n("0f29"),o=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},f83b:function(t,e,n){"use strict";var i=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(n("5530"));n("96cf");var a=i(n("1da1")),r=i(n("d4ec")),s=i(n("bee2")),c=i(n("262e")),u=i(n("2caf")),l=n("9ab4"),f=n("4bb5"),d=n("60a3"),p=n("3617"),h=n("d257"),v=i(n("97b5")),b=i(n("43c3")),w=n("7655"),m=function(t){(0,c.default)(n,t);var e=(0,u.default)(n);function n(){var t;return(0,r.default)(this,n),t=e.apply(this,arguments),t.status=0,t.options=[{text:"取消",style:{backgroundColor:"#3C98FE"}},{text:"删除",style:{backgroundColor:"#dd524d"}}],t}return(0,s.default)(n,[{key:"create",value:function(){}},{key:"onShow",value:function(){this.init()}},{key:"init",value:function(){var t=(0,a.default)(regeneratorRuntime.mark((function t(){var e,n,i,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=this.changeCommonData,n=this.status,i=this.moduleFor,a="label"===i?{listUrl:"/queryLabelStampOrderList",listParams:{type:1}}:{listUrl:"/queryStampOrderList",listParams:{type:n}},t.next=4,e((0,o.default)((0,o.default)({},a),{},{listKey:"orderList",refreshList:!0}));case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"onTapSeal",value:function(t){var e=this.moduleFor,n=this.status,i=this.createDiySeal,o=t.id,r=t.img,s=t.stampId;"label"!==e?uni.showActionSheet({itemList:[n?"淘宝下单":"复制订单ID","查看图片【长按保存】"],itemColor:"#3C98FE",success:function(){var t=(0,a.default)(regeneratorRuntime.mark((function t(e){var a,c,u,l,f;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:a=e.tapIndex,t.t0=!0,t.next=t.t0===(0===a&&0===n)?4:t.t0===(0===a&&1===n)?7:18;break;case 4:return h.Utils.h5Copy(o,"订单ID已复制到系统剪贴板!"),window.location.href="https://t.asczwa.com/taobao?backurl=https://m.tb.cn/h.VrrMU6V?sm=917be1",t.abrupt("break",21);case 7:return t.next=9,w(r.original);case 9:return c=t.sent,c.data,u=c.width,l=c.height,t.next=15,i({stampId:s,status:0,img:[{imgUrl:r.original,width:u,height:l,imgCategory:1}]});case 15:return f=t.sent,uni.showModal({title:"提示",content:"印章图片已下单,马上复制订单ID前往淘宝旗舰店下单?",success:function(t){var e=t.confirm;e&&(h.Utils.h5Copy(f.id),window.location.href="https://t.asczwa.com/taobao?backurl=https://m.tb.cn/h.VrrMU6V?sm=917be1")}}),t.abrupt("break",21);case 18:return function(t,e){var n=new Image;n.setAttribute("crossOrigin","anonymous"),n.onload=function(){var t=document.createElement("canvas");t.width=n.width,t.height=n.height;var i=t.getContext("2d");i.drawImage(n,0,0,n.width,n.height);var o=t.toDataURL("image/png"),a=document.createElement("a"),r=new MouseEvent("longtap");a.download=e||"photo",a.href=o,a.dispatchEvent(r)},n.src=t},uni.previewImage({urls:[r.medium]}),t.abrupt("break",21);case 21:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()}):uni.navigateTo({url:"/pages/label_edit/index?id="+o})}},{key:"onChangeType",value:function(){var t=(0,a.default)(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.status=e,n=this.changeCommonData,t.next=4,n({listParams:{type:e},refreshList:!0});case 4:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"onActions",value:function(){var t=(0,a.default)(regeneratorRuntime.mark((function t(e,n){var i,o,a,r,s,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(i=e.index,i){t.next=3;break}return t.abrupt("return");case 3:if(o=n.id,a=this.deleteDiyLabel,r=this.deleteSealOrder,s=this.changeCommonData,c=this.moduleFor,"label"!==c){t.next=10;break}return t.next=8,a({id:o,successTip:"标签已删除!"});case 8:t.next=12;break;case 10:return t.next=12,r({id:o,successTip:"印章订单已删除!"});case 12:return t.next=14,s({refreshList:!0});case 14:case"end":return t.stop()}}),t,this)})));function e(e,n){return t.apply(this,arguments)}return e}()},{key:"users",get:function(){return[]}}]),n}(d.Vue);(0,l.__decorate)([(0,f.State)("moduleFor",{namespace:"common"})],m.prototype,"moduleFor",void 0),(0,l.__decorate)([(0,f.Action)("changeCommonData",{namespace:"common"})],m.prototype,"changeCommonData",void 0),(0,l.__decorate)([(0,f.Action)("deleteDiyLabel",{namespace:"label"})],m.prototype,"deleteDiyLabel",void 0),(0,l.__decorate)([(0,f.Action)("deleteSealOrder",{namespace:"label"})],m.prototype,"deleteSealOrder",void 0),(0,l.__decorate)([(0,f.Action)("createDiySeal",{namespace:"label"})],m.prototype,"createDiySeal",void 0),m=(0,l.__decorate)([(0,d.Component)({name:"Mine",components:{ListView:p.ListView,TopNav:p.TopNav,AllowRight:p.AllowRight,uniSwipeAction:v.default,uniSwipeActionItem:b.default}})],m);var x=m;e.default=x},f981:function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"uni-swipe"},[n("v-uni-view",{staticClass:"uni-swipe_content"},[n("v-uni-view",{wxsProps:{"change:prop":"pos"},staticClass:"uni-swipe_move-box selector-query-hock move-hock",attrs:{"data-disabled":t.disabled,"data-position":t.pos,"change:prop":t.swipe.sizeReady,prop:t.pos},on:{touchstart:function(e){e=t.$handleWxsEvent(e),t.swipe.touchstart(e,t.$getComponentDescriptor())},touchmove:function(e){e=t.$handleWxsEvent(e),t.swipe.touchmove(e,t.$getComponentDescriptor())},touchend:function(e){e=t.$handleWxsEvent(e),t.swipe.touchend(e,t.$getComponentDescriptor())},change:function(e){arguments[0]=e=t.$handleEvent(e),t.change.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"uni-swipe_box"},[t._t("default")],2),n("v-uni-view",{ref:"selector-button-hock",staticClass:"uni-swipe_button-group selector-query-hock move-hock"},t._l(t.options,(function(e,i){return n("v-uni-view",{key:i,staticClass:"uni-swipe_button button-hock",style:{backgroundColor:e.style&&e.style.backgroundColor?e.style.backgroundColor:"#C7C6CD",fontSize:e.style&&e.style.fontSize?e.style.fontSize:"16px"},attrs:{"data-button":t.btn},on:{touchstart:function(e){e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.appTouchStart.apply(void 0,arguments)},touchend:function(n){n.preventDefault(),arguments[0]=n=t.$handleEvent(n),t.appTouchEnd(n,i,e)}}},[n("v-uni-text",{staticClass:"uni-swipe_button-text",style:{color:e.style&&e.style.color?e.style.color:"#FFFFFF"}},[t._v(t._s(e.text))])],1)})),1)],1)],1)],1)},a=[]}}]);