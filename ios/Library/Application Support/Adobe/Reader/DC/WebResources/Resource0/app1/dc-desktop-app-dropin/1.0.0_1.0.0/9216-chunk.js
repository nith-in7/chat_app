(self["webpackJsonp-desktop-app"]=self["webpackJsonp-desktop-app"]||[]).push([[9216],{wQIg:(t,e,i)=>{"use strict";i.d(e,{Z:()=>d});var o=i("ZPsF"),n=i("LRRW"),r=i("A2Se"),s=i("nJAS"),__awaiter=function(t,e,i,o){return new(i||(i=Promise))((function(n,r){function fulfilled(t){try{step(o.next(t))}catch(t){r(t)}}function rejected(t){try{step(o.throw(t))}catch(t){r(t)}}function step(t){t.done?n(t.value):function adopt(t){return t instanceof i?t:new i((function(e){e(t)}))}(t.value).then(fulfilled,rejected)}step((o=o.apply(t,e||[])).next())}))};const d=new class WalkthroughProvider{constructor(){this.eventProxy=null}ResizeWindow(t,e){return __awaiter(this,void 0,void 0,(function*(){return s.Z.ResizeWindow(t,e)}))}SetWindowPosition(t){return __awaiter(this,void 0,void 0,(function*(){const e=yield n.Z.getWalkthroughAPIObject();if(e){const i=(0,r.o)(t);yield e.invoke(o.Z.SET_CONTAINER_POSITION,[i])}}))}ExecutePreCondition(t){return __awaiter(this,void 0,void 0,(function*(){const e=yield n.Z.getWalkthroughAPIObject();e&&(yield e.invoke(o.Z.PERFORM_PRE_CONDITION,[t]))}))}SetWindowVisibility(t){return __awaiter(this,void 0,void 0,(function*(){const e=yield n.Z.getWalkthroughAPIObject();e&&(yield e.invoke(o.Z.SHOW_WALKTHROUGH,[{show:t}]))}))}SetCompleteAction(t){return __awaiter(this,void 0,void 0,(function*(){const e=yield n.Z.getWalkthroughAPIObject();e&&(yield e.invoke(o.Z.SET_ACTION_COMPLETED,[t]))}))}PerformAction(t){return __awaiter(this,void 0,void 0,(function*(){const e=yield n.Z.getWalkthroughAPIObject();e&&(yield e.invoke(o.Z.PERFORM_ACTION,"object"==typeof t?t:[t]))}))}CloseWindow(){return __awaiter(this,void 0,void 0,(function*(){const t=yield n.Z.getWalkthroughAPIObject();t&&(yield t.invoke(o.Z.CLOSE_WALKTHROUGH))}))}shouldShowSkipCard(){return __awaiter(this,void 0,void 0,(function*(){const t=yield n.Z.getWalkthroughAPIObject();if(t){return yield t.invoke(o.Z.SHOW_SKIPCARD)}return!1}))}GetWalkthroughJSON(){return __awaiter(this,void 0,void 0,(function*(){const t=yield n.Z.getWalkthroughAPIObject();if(t){return yield t.invoke(o.Z.GET_WALKTHROUGH_DATA)}return null}))}RegisterForNativeEvents(t){return __awaiter(this,void 0,void 0,(function*(){const e=yield n.Z.getWalkthroughAPIObject();e&&(yield e.invoke(o.Z.REGISTER_FOR_EVENTS,t))}))}UnregisterAllNativeEvents(){return __awaiter(this,void 0,void 0,(function*(){const t=yield n.Z.getWalkthroughAPIObject();t&&(yield t.invoke(o.Z.UNREGISTER_ALL_EVENTS))}))}ListenForEvents(t){return __awaiter(this,void 0,void 0,(function*(){if(!this.eventProxy){const t=yield n.Z.getWalkthroughAPIObject();if(t){const e=yield t.invoke(o.Z.GET_WALKTHROUGH_EVENTS_OBJECT);this.eventProxy=e.data}}this.eventProxy&&(window.eventProxy=this.eventProxy,this.eventProxy._addEventListener(o.Z.WALKTHROUGH_EVENTS_SUBSCRIPTION,t))}))}UnlistenForEvents(t){return __awaiter(this,void 0,void 0,(function*(){this.eventProxy&&this.eventProxy._removeEventListener(o.Z.WALKTHROUGH_EVENTS_SUBSCRIPTION,t)}))}triggerWalkthroughAtposition(t){return __awaiter(this,void 0,void 0,(function*(){(yield n.Z.getWalkthroughAPIObject()).invoke("triggerWalkthroughAtposition",t)}))}}},lXyy:(t,e,i)=>{"use strict";i.d(e,{ZP:()=>__WEBPACK_DEFAULT_EXPORT__});var o=i("plsW"),__awaiter=function(t,e,i,o){return new(i||(i=Promise))((function(n,r){function fulfilled(t){try{step(o.next(t))}catch(t){r(t)}}function rejected(t){try{step(o.throw(t))}catch(t){r(t)}}function step(t){t.done?n(t.value):function adopt(t){return t instanceof i?t:new i((function(e){e(t)}))}(t.value).then(fulfilled,rejected)}step((o=o.apply(t,e||[])).next())}))};const __WEBPACK_DEFAULT_EXPORT__=(t,e,i)=>__awaiter(void 0,void 0,void 0,(function*(){if(!o.providers["native-api"])return;const n=yield o.providers["native-api"]();(yield n.analyticsAPI()).logEvent(t,e,i)}))},LRRW:(t,e,i)=>{"use strict";i.d(e,{Z:()=>n});var o=i("plsW"),__awaiter=function(t,e,i,o){return new(i||(i=Promise))((function(n,r){function fulfilled(t){try{step(o.next(t))}catch(t){r(t)}}function rejected(t){try{step(o.throw(t))}catch(t){r(t)}}function step(t){t.done?n(t.value):function adopt(t){return t instanceof i?t:new i((function(e){e(t)}))}(t.value).then(fulfilled,rejected)}step((o=o.apply(t,e||[])).next())}))};const n=class WalkthroughNativeAPI{static get Instance(){return this.instance||(this.instance=new this),this.instance}getWalkthroughAPI(){return __awaiter(this,void 0,void 0,(function*(){if(!this.wtApi&&o.providers["native-api"]){const t=yield o.providers["native-api"]();this.wtApi=yield t.walkthoughAPI()}return this.wtApi}))}getWalkthroughAPIObject(){return __awaiter(this,void 0,void 0,(function*(){if(!this.wtApiObject){const t=yield this.getWalkthroughAPI();this.wtApiObject=t.getWalkthroughAPIObj()}return this.wtApiObject}))}}.Instance},A2Se:(t,e,i)=>{"use strict";function GetSelectorForCoachmark(t){return t.command||t.htmlSelector||t.objectID}function ConvertPositionParamsToNativeJSON(t){return function CleanJSONForNative(t){return Object.fromEntries(Object.entries(t).filter((t=>{let[,e]=t;return null!=e})))}({selector:GetSelectorForCoachmark(t),type:t.command?"Native":t.htmlSelector?"HTML":"ObjectID",pos_pref:t.positionPreferences?t.positionPreferences.join(" "):void 0,highlight:t.highlight,modal_highlight:t.modalHighlight,modal_type:t.modalType,modal_circle_radius:t.modalCircleRadius,margin_left:t.marginLeft,margin_top:t.marginTop,margin_right:t.marginRight,margin_bottom:t.marginBottom,modal_padding_left:t.modalPaddingLeft,modal_padding_top:t.modalPaddingTop,modal_padding_right:t.modalPaddingRight,modal_padding_bottom:t.modalPaddingBottom,focus:t.focus,background_color:t.backgroundColor,command_state:void 0===t.commandState?void 0:t.command_state?"enabled":"disabled",is_spectrum_type:void 0,plugin_id:void 0,show_cap:void 0,wt_horizontal_shift:t.horizontalShift,wt_vertical_shift:t.verticalShift,layered_vertical_shift:t.layeredVerticalShift,layered_horizontal_shift:t.layeredHorizontalShift})}i.d(e,{R:()=>GetSelectorForCoachmark,o:()=>ConvertPositionParamsToNativeJSON})},ZPsF:(t,e,i)=>{"use strict";var o;i.d(e,{Z:()=>n}),function(t){t.PERFORM_PRE_CONDITION="performPreCondition",t.CLOSE_WALKTHROUGH="closeWalkthrough",t.SHOW_SKIPCARD="showSkipCard",t.LAUNCH_SIGN_IN="launchSignInWindow",t.REGISTER_FOR_EVENTS="registerForEvents",t.UNREGISTER_ALL_EVENTS="deregisterAllEvents",t.PERFORM_ACTION="performAction",t.SET_ACTION_COMPLETED="setActionCompleted",t.GET_WALKTHROUGH_DATA="getWTData",t.SHOW_WALKTHROUGH="showWalkthrough",t.LOG_HIGHBEAM_DATA="logHighbeamData",t.SET_CONTAINER_POSITION="setWalkthroughPosition",t.GET_WALKTHROUGH_EVENTS_OBJECT="getWalkthroughEventsObject",t.WALKTHROUGH_EVENTS_SUBSCRIPTION="custom:walkthroughEvent",t.NOTIFY_WALKTHROUGH_CARD_SHOWN="notifyWalkthroughCardShown"}(o||(o={}));const n=o},YWiy:(t,e,i)=>{t.exports=i("2pFd")("GiK3")},Zm2D:(t,e,i)=>{t.exports=i("2pFd")("L4Le")},GWyE:(t,e,i)=>{t.exports=i("SEmX")("OzsN")},plsW:(t,e,i)=>{t.exports=i("2pFd")("o4sN")}}]);
//# sourceMappingURL=private/9216-chunk.js.map