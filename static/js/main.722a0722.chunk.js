(this["webpackJsonpdashboard-dnd-composer"]=this["webpackJsonpdashboard-dnd-composer"]||[]).push([[0],{58:function(e,t,n){e.exports=n(82)},63:function(e,t,n){},82:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(43),i=n.n(c),o=(n(63),n(36)),l=n(90),u=n(47),d=n(85),h=n(88),m=n(44),s=n(8),p=n(7),f=function(e){var t=e.bg,n=e.children,a=e.direction,c=void 0===a?"column":a,i=Object(s.a)(e,["bg","children","direction"]),o="row"===c?{display:"flex",flexGrow:1,justifyContent:"center"}:{};return r.a.createElement(m.a,{justify:"center",bg:t},r.a.createElement(p.a,Object.assign({},o,i,{width:["90%","28em","46em","60em","78em"]}),n))},g=n(87),b=function(e){var t=e.bg,n=e.children;Object(s.a)(e,["bg","children"]);return r.a.createElement(m.a,{justify:"center",bg:t,flexGrow:1},r.a.createElement(m.a,{width:["90%","28em","46em","60em","78em"]},n))},O=function(e){return r.a.createElement(f,{bg:"brand.900"},r.a.createElement(m.a,{p:4,justify:"space-between"},r.a.createElement(d.a,{color:"brand.100",fontSize:"sm",m:0},"Footer Left"),r.a.createElement(d.a,{color:"brand.100",fontSize:"sm",m:0},"Footer Middle"),r.a.createElement(d.a,{color:"brand.100",fontSize:"sm",m:0},"Copyright etc.")))},E=n(86),v=function(e){return r.a.createElement(f,{width:"100vw"},r.a.createElement(m.a,Object.assign({as:"header",align:"center",justify:"space-between",p:4},e,{mb:0}),r.a.createElement(E.a,{as:"h1",color:"brand.500",size:"lg",m:1,ml:0},"DnD Composer"),r.a.createElement(m.a,{align:"center"},r.a.createElement(l.a,{color:"brand.500",variant:"outline",size:"sm",mr:4},"sign in"),r.a.createElement(u.a,{fill:"brand.300",name:"userCircleOutline",size:"40px"}))))},y=function(e){var t=e.children;e.title;return r.a.createElement(g.a,{style:{height:"100vh"}},r.a.createElement(v,null),r.a.createElement(H,null),r.a.createElement(b,null,r.a.createElement(ht,null),r.a.createElement("main",{style:{flexGrow:1,overflow:"auto"}},t)),r.a.createElement(O,null))},w=function(e){var t=e.children,n=e.title;return r.a.createElement(m.a,{align:"center",justify:"space-between",borderBottom:"1px",borderColor:"brand.700",p:4,minHeight:"32px"},r.a.createElement(d.a,{color:"brand.700",as:"h2",m:0},n),t)},M=function(e,t,n){var a={color:t===n.length-1?"white":"brand.100",key:t,m:0,mr:2};return"/"===e||t===n.length-1?r.a.createElement(d.a,a,e):r.a.createElement(h.a,a,e)},H=function(e){return r.a.createElement(f,{bg:"brand.900"},r.a.createElement(m.a,{px:4,py:1},function(e){return e.reduce((function(e,t,n,a){return e.push(t),n!==a.length-1&&e.push("/"),e}),[]).map(M)}(["Full","Breadcrumbs","Path"])))},j=n(18),C=n(56),A=n(89),x=n(3),V=function(){return{type:"EDIT_LAYOUT"}},R=function(){return{type:"SAVE_LAYOUT"}},T=function(e,t){switch(t.type){case"EDIT_LAYOUT":return Object(x.a)({},e,{editMode:!0});case"SAVE_LAYOUT":return Object(x.a)({},e,{editMode:!1});default:return console.warn("LayoutContext: no action for action type ".concat(t.type)),e}},L={editMode:!1},S=Object(a.createContext)(L),z=S.Provider,W=function(e){var t=e.children,n=Object(a.useReducer)(T,L),c=Object(j.a)(n,2),i=c[0],o=c[1];return r.a.createElement(z,{value:{state:i,dispatch:o}},t)},D=function(e,t){var n=e.editMode,a=e.level;return!n||a<0?{}:{borderRadius:8,border:"2px solid ".concat(t),margin:-2}},k=function(e){var t=e.layoutOptions,n=t.targetHeight,a=t.targetWidth;return"left ".concat(a/-2,"px top ").concat(n/-2,"px")},F=function(e){var t=e.layoutOptions,n=t.gridColumnWidth,a=t.gridRowHeight;return"".concat(n,"px ").concat(a,"px")},P=function(e){return e.editMode&&0===e.level?{backgroundPosition:k(e),backgroundSize:F(e),backgroundImage:"linear-gradient(to right, lightgrey 1px, transparent 1px),\n      linear-gradient(to bottom, lightgrey 1px, transparent 1px)"}:{}},B=function(e){var t=e.children,n=e.style,a=void 0===n?{}:n,c=Object(o.b)(),i=r.a.useContext(S).state,l=Object(x.a)({},e,{editMode:i.editMode});return r.a.createElement("div",{style:Object(x.a)({display:e.type===fe.ROW?"flex":"block"},D(l,c.colors.brand[300]),{},P(l),{},a)},t)};B.defaultProps={borderColor:"red",gridColumnWidth:10,gridRowHeight:10};var U=B,N=n(92),_=function(e){var t=e.accept,n=e.index,a=e.parent,c=Object(s.a)(e,["accept","index","parent"]),i=Object(N.a)({accept:t,drop:function(){return{index:n,parent:a}},collect:function(e){return{isOver:e.isOver(),canDrop:e.canDrop()}}}),o=Object(j.a)(i,2),l=o[0],u=l.canDrop,d=l.isOver,h=o[1];if(c.disabled){var m=c.height,p=c.width;return m?r.a.createElement("div",{style:{width:p,height:m}}):null}var f=c.targetColor,g=c.hoverColor,b=c.hoverOpacity,O=Object(s.a)(c,["targetColor","hoverColor","hoverOpacity"]),E=Object(x.a)({},O,{flexGrow:0,flexShrink:0});return u&&(u&&d?(E.backgroundColor=g,E.opacity=b):u&&(E.backgroundColor=f)),r.a.createElement("div",{"data-type":"DropTarget",ref:h,style:E})};_.defaultProps={opacity:.2,hoverColor:"green",hoverOpacity:.5,targetColor:"green",height:"100%",width:"100%"};var G=_,I=function(e){var t=e.accept,n=e.children,a=e.id,c=e.frameDimensions,i=Object(s.a)(e,["accept","children","id","frameDimensions"]),o={accept:t,parent:a},l=c.getTargetSize,u=c.getFrameSize,d=c.getFinalTargetSize,h=n.reduce((function(e,t,n){return 0!==n&&e.push(r.a.createElement(G,Object.assign({key:"target_".concat(n),index:n},l(t,n),o))),e.push(function(e,t,n,a){var c=a.framesMap[e.type],i="COLUMN"===a.type?Object(x.a)({},a.layoutOptions,{maxWidth:a.width}):a.layoutOptions;return r.a.createElement(c,Object.assign({key:t},a,{layoutOptions:i,level:a.level+1},e,n(e,t)))}(t,n,u,i)),e}),[]);return h.push(r.a.createElement(G,Object.assign({key:"target_final",index:n.length},d(n),o))),r.a.createElement(r.a.Fragment,null,h)},Z=n(13),X=function(e){return function(t){var n=function e(t){return function(n){var a=n.children,r=n.type,c=n.height;return c||(r===fe.COLUMN&&a.length?a.map(e(t)).reduce((function(e,t){return e+t}),0):r===fe.ROW?Math.max.apply(Math,Object(Z.a)(a.map(e(t))).concat([t.gridRowHeight])):t.gridRowHeight)}}(e)(t);return e.shouldLog&&e.shouldLog(t)&&(console.group("getFrameHeight ".concat(t.id)),console.log(t),console.log("  =>",n),console.groupEnd()),n}},Y=function(e){return function(t){var n=function e(t){return function(n){var a=n.children,r=n.type,c=n.width;return c||(r===fe.COLUMN&&a.length?Math.max.apply(Math,Object(Z.a)(a.map(e(t)))):r===fe.ROW?a.map(e(t)).reduce((function(e,t){return e+t}),0):t.gridColumnWidth)}}(e)(t);return e.shouldLog&&e.shouldLog(t)&&(console.group("getFrameWidth ".concat(t.id)),console.log(t),console.log("  =>",n),console.groupEnd()),n}},J=function(e){return function(t,n){var a=e.layoutOptions.targetHeight;return-1===e.level?{height:2*a}:{height:0===n?a/2:a,marginTop:0===n?a/-2:0}}},$=function(e){return function(t,n){var a=e.layoutOptions,r=X(a)(t);return{width:Y(a)(t),height:r}}},q=function(e){return function(t){var n=e.height,a=e.layoutOptions,r=e.level,c=a.gridRowHeight,i=a.targetHeight,o=function(e){var t=e.children,n=e.layoutOptions;return t.map((function(e){return X(n)(e)})).reduce((function(e,t){return e+t}),0)}(e);return 0===t.length?n:n>o?{height:n-o}:-1===r?{height:c+i}:{height:i,marginTop:-i}}},K=function(e){var t=e.height,n=e.width,a=e.layoutOptions,c=a.targetHeight,i=a.targetWidth,o={getTargetSize:J(e),getFrameSize:$(e),getFinalTargetSize:q(e)};return r.a.createElement(U,Object.assign({},e,{style:{height:t-c,width:n-i}}),r.a.createElement(I,Object.assign({frameDimensions:o},e)))},Q=function(e,t){return e.type===fe.COLUMN?t:e.height},ee=function(e){var t=e.layoutOptions,n=e.level,a=e.canExpand,r=e.width,c=t.maxWidth;return 0!==n?a:r<c},te=function(e){return function(t){var n=e.layoutOptions,a=n.gridRowHeight,r=n.maxWidth,c=n.targetHeight,i=n.targetWidth;if(!t.length)return{height:a-c,width:r-i};var o=Math.max.apply(Math,Object(Z.a)(t.map(X(n)))),l=r-ne(t,n);return 0===l&&ee(e)?{height:o-c,width:i,marginLeft:-i}:{disabled:!ee(e),height:o-c,width:l}}},ne=function(e,t){return e.map(Y(t)).reduce((function(e,t){return e+t}),0)},ae=function(e){var t=e.children,n=e.height,a=e.layoutOptions,c=e.level,i=a.targetHeight,o=a.targetWidth,l=function(e,t){var n=e.map(X(t));return Math.max.apply(Math,Object(Z.a)(n))}(t,a),u=c?l-i:l,d={getTargetSize:function(t,a){return{disabled:!ee(e),flexGrow:0,height:n-i,width:o}},getFrameSize:function(e,t){return{flexGrow:0,height:Q(e,u),width:Y(a)(e)}},getFinalTargetSize:te(e,e.width)};return r.a.createElement(U,Object.assign({"data-type":"background"},e),r.a.createElement(I,Object.assign({},e,{canExpand:ee(e),frameDimensions:d})))};ae.defaultProps={};var re=ae,ce=function(e){var t=e.height,n=e.icon,a=e.layoutOptions,c=e.width,i=a.targetHeight,o=a.targetWidth;return r.a.createElement(m.a,{bg:"brand.100",align:"center",justify:"center",width:"".concat(c-o,"px"),height:"".concat(t-i,"px"),flexGrow:0,flexShrink:0,borderRadius:"lg"},r.a.createElement(u.a,{name:n,size:12,fill:"brand.300"}))};ce.defaultProps={icon:"frame"};var ie=ce,oe=function(e){return r.a.createElement(ie,e)};oe.defaultProps={icon:"chart"};var le=oe,ue=function(e){return r.a.createElement(ie,e)};ue.defaultProps={icon:"image"};var de=ue,he=function(e){return r.a.createElement(ie,e)};he.defaultProps={icon:"table"};var me=he,se=function(e){return r.a.createElement(ie,e)};se.defaultProps={icon:"textbox"};var pe=se,fe={CHART:"CHART",COLUMN:"COLUMN",FRAME:"FRAME",IMAGE:"IMAGE",ROW:"ROW",SPACER_H:"SPACER_H",SPACER_V:"SPACER_V",TABLE:"TABLE",TEXT:"TEXT"};fe.SIZERS=[fe.ROW,fe.COLUMN],fe.SPACERS=[fe.SPACER_H,fe.SPACER_V],fe.FRAMES=[fe.FRAME,fe.CHART,fe.IMAGE,fe.TABLE,fe.TEXT];var ge=Object.keys(fe).reduce((function(e,t){return e[t]=ie,e}),{});ge[fe.COLUMN]=K,ge[fe.ROW]=re,ge[fe.CHART]=le,ge[fe.IMAGE]=de,ge[fe.TABLE]=me,ge[fe.TEXT]=pe;var be=[{icon:"row",type:fe.ROW},{icon:"column",type:fe.COLUMN},{icon:"frame",type:fe.FRAME,width:80,height:60},{icon:"textbox",type:fe.TEXT,width:160,height:60},{icon:"chart",type:fe.CHART,width:160,height:120},{icon:"table",type:fe.TABLE,width:320,height:180},{icon:"image",type:fe.IMAGE,width:160,height:120}],Oe=function(e){var t=e.layout,n=e.layoutOptions,a=e.width,c=function(e,t){return e.children.map(X(t)).reduce((function(e,t){return e+t}),0)}(t,n),i=ge[t.type],o=Object(x.a)({},n,{maxHeight:c+n.gridColumnWidth,maxWidth:a});return r.a.createElement(i,Object.assign({},t,{canExpand:!1,framesMap:ge,height:c,layoutOptions:o,level:-1,width:a}))},Ee=n(55),ve=n.n(Ee),ye=function e(t,n){var a=n.payload,r=(a.dropEffect,a.frameType),c=a.index,i=a.parent,o=Object(s.a)(a,["dropEffect","frameType","index","parent"]);if(!r)return console.warn("no frame type for action '".concat(n.type,"'")),t;if(t.id===i){var l=[].concat(Object(Z.a)(t.children.slice(0,c)),[He(r,o)],Object(Z.a)(t.children.slice(c)));return Object(x.a)({},t,{children:l})}return t.children&&Me(t.children,i)?Object(x.a)({},t,{children:t.children?t.children.map((function(t){return e(t,n)})):void 0}):t},we=function e(t){try{return t.children?[t.id].concat(Object(Z.a)(t.children.map(e))):[t.id]}catch(n){return console.warn(n.message),console.warn(t),[]}},Me=function(e,t){return e&&e.map(we).flat(10).includes(t)},He=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Object(x.a)({id:ve.a.generate(),type:e},t);return e===fe.COLUMN?Object(x.a)({},n,{children:[],accept:[fe.ROW].concat(Object(Z.a)(fe.FRAMES))}):e===fe.ROW?Object(x.a)({},n,{children:[],accept:[fe.COLUMN].concat(Object(Z.a)(fe.FRAMES))}):Object(x.a)({},n,{},t)},je=function(e){var t=e.type,n=e.payload;return"ADD_FRAME"!==t||function(e){var t=e.frameType,n=e.height,a=e.parent,r=e.width;return!(!t||!a)&&(t===fe.ROW||t===fe.COLUMN||r&&n)}(n)},Ce=function(e,t){if(!function(e){if(!je(e)){var t=JSON.stringify(e.payload,null,2);return console.error("invalid payload for ".concat(e.type,":\n").concat(t)),!1}return!0}(t))return e;switch(t.type){case"ADD_FRAME":return(n=ye,function(e,t){var a=n(e,t);return console.log(JSON.stringify(t,null,2)),a})(e,t);default:return console.warn("TODO",t.type),e}var n},Ae=function(){var e=fe.FRAMES;return e[parseInt(Math.random()*e.length)]},xe={width:80,height:60},Ve={width:80,height:120},Re={width:160,height:60},Te={width:160,height:120},Le=He(fe.ROW,{id:"header"}),Se=He(fe.TEXT,{id:"headerLeft",width:160,height:60});Le.children=[Se];var ze=He(fe.CHART,Object(x.a)({id:"col1frm1"},Te)),We=He(Ae(),Object(x.a)({id:"col1frm2"},Re)),De=He(fe.COLUMN,{id:"col1"});De.children=[ze,We];var ke=He(Ae(),Object(x.a)({id:"col2row1frm1"},xe)),Fe=He(Ae(),Object(x.a)({id:"col2row1frm2"},xe)),Pe=He(fe.ROW,{id:"col2row1"});Pe.children=[ke,Fe];var Be=He(Ae(),Object(x.a)({id:"col2-frm2"},Ve)),Ue=He(Ae(),Object(x.a)({id:"col2-frm3"},Re)),Ne=He(fe.COLUMN,{id:"col2"});Ne.children=[Pe,Be,Ue];var _e=He(Ae(),Object(x.a)({id:"col3-frm1"},xe)),Ge=He(fe.COLUMN,{id:"col3"});Ge.children=[_e];var Ie=He(fe.ROW,{id:"mixed"}),Ze=He(Ae(),Object(x.a)({id:"frame2"},Ve)),Xe=He(Ae(),Object(x.a)({id:"frame3"},xe));Ie.children=[De,Ze,Ne,Xe,Ge];var Ye=function(e){var t=new Array(parseInt(e/160)).fill(!0).map((function(e,t){return He(fe.FRAMES[t],Object(x.a)({id:"full".concat(t+1)},Te))})),n=He(fe.ROW,{id:"fullRow"});n.children=t;var a=He(fe.CHART,Object(x.a)({id:"fullcol1frm1"},Re)),r=He(fe.TEXT,Object(x.a)({id:"fullcol1frm2"},Re)),c=He(fe.COLUMN,{id:"fullcol1"});return c.children=[a,r],n.children[1]=c,n},Je=function(e){return[Le,Ye(e),Ie]},$e=Ce,qe=n(93),Ke=function(e){var t=e.dispatch,n=e.icon,a=(e.mb,e.type),c=Object(s.a)(e,["dispatch","icon","mb","type"]),i=Object(qe.a)({item:{type:a},end:function(e,r){var i=r.getDropResult();e&&i&&t({type:"ADD_FRAME",payload:Object(x.a)({frameType:a,icon:n},i,{},c)})},collect:function(e){return{isDragging:e.isDragging()}}}),o=Object(j.a)(i,2),l=o[0].isDragging,d=o[1],h=l?.4:1;return r.a.createElement(p.a,{ref:d,style:{opacity:h},rounded:"lg",bg:"brand.100",p:2,mb:2},r.a.createElement(u.a,{name:n,size:8,fill:"brand.300"}))},Qe=function(e){var t=e.tools,n=Object(s.a)(e,["tools"]);return r.a.createElement(g.a,null,t.map((function(e){return r.a.createElement(Ke,Object.assign({key:e.type},e,n))})))},et={id:"DASHBOARD-LAYOUT-ID",accept:[fe.ROW],children:Je(640),type:fe.COLUMN},tt=function(e){var t=r.a.useReducer($e,et),n=Object(j.a)(t,2),a=n[0],c=n[1],i=r.a.useContext(S).state.editMode;return r.a.createElement(A.a,{backend:C.a},r.a.createElement(m.a,{justify:"space-between",m:4},r.a.createElement(Oe,Object.assign({},e,{layout:a})),i&&r.a.createElement(Qe,{dispatch:c,tools:be})))};tt.defaultProps={layoutOptions:{gridColumnWidth:80,gridRowHeight:60,targetHeight:16,targetWidth:16},width:640};var nt=tt;function at(){return(at=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function rt(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var ct=r.a.createElement("g",null,r.a.createElement("path",{d:"M666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9V78c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6V78.5c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zM421.2 430c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24 4.7 8 9.5 15.8 14.4 23.4zM420.7 163c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6 0-15.7 22.9-35.6 58.3-50.6 8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zM310 490c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6zM320.8 78.4z"}),r.a.createElement("circle",{cx:420.9,cy:296.5,r:45.7}),r.a.createElement("path",{d:"M520.5 78.1z"})),it=function(e){var t=e.svgRef,n=e.title,a=rt(e,["svgRef","title"]);return r.a.createElement("svg",at({viewBox:"0 0 841.9 595.3",ref:t},a),n?r.a.createElement("title",null,n):null,ct)},ot=r.a.forwardRef((function(e,t){return r.a.createElement(it,at({svgRef:t},e))})),lt=(n.p,function(e){var t=e.active,n=e.children,a=Object(s.a)(e,["active","children"]);return t?r.a.createElement(d.a,Object.assign({as:"h3",display:"block",my:2},a),n):r.a.createElement(h.a,Object.assign({display:"block",my:2},a),n)}),ut=function(e){return r.a.createElement(lt,Object.assign({},e,{ml:4,fontSize:"sm",my:1}))},dt=function(e){return r.a.createElement(g.a,Object.assign({as:"nav",p:4,bg:"brand.100",color:"brand.700",flexGrow:0,flexShrink:0},e),r.a.createElement(lt,{active:!0},"Dashboard"),r.a.createElement(lt,{fontWeight:"bold"},"Todo:"),r.a.createElement(ut,null,"add resize handles"),r.a.createElement(ut,null,"delete frame"),r.a.createElement(ut,null,"wrap frame in column/row"),r.a.createElement(ut,null,"add spacers"),r.a.createElement(ut,null,"replace w/h with rows/cols"),r.a.createElement(ut,null,"layouts depending on screen size"),r.a.createElement(ut,null,"add drag-n-drop within layout"),r.a.createElement("div",{style:{flexGrow:1}}),r.a.createElement(ot,{fill:"white",fillOpacity:.6}),";")};dt.defaultProps={width:120};var ht=dt,mt=function(e){e.icon,e.label;var t=r.a.useContext(S),n=t.state,a=t.dispatch;return n.editMode?r.a.createElement(l.a,{onClick:function(){return a(R())},size:"sm",variantColor:"brand",variant:"solid"},"Save"):r.a.createElement(u.a,{onClick:function(){return a(V())},color:"brand.300",name:"edit",size:"24px"})},st=function(e){return r.a.createElement(y,null,r.a.createElement(W,null,r.a.createElement(w,{title:"Dashboard"},r.a.createElement(mt,null)),r.a.createElement(nt,null)))},pt=n(91),ft={arrowExpandHorizontal:{path:r.a.createElement("path",{d:"M9,11H15V8L19,12L15,16V13H9V16L5,12L9,8V11M2,20V4H4V20H2M20,20V4H22V20H20Z"}),viewBox:"0 0 24 24"},arrowExpandVertical:{path:r.a.createElement("path",{d:"M13,9V15H16L12,19L8,15H11V9H8L12,5L16,9H13M4,2H20V4H4V2M4,20H20V22H4V20Z"}),viewBox:"0 0 24 24"},chart:{path:r.a.createElement("path",{d:"M22,21H2V3H4V19H6V10H10V19H12V6H16V19H18V14H22V21Z"}),viewBox:"0 0 24 24"},column:{path:r.a.createElement("path",{d:"M8,2H16A2,2 0 0,1 18,4V20A2,2 0 0,1 16,22H8A2,2 0 0,1 6,20V4A2,2 0 0,1 8,2M8,10V14H16V10H8M8,16V20H16V16H8M8,4V8H16V4H8Z"}),viewBox:"0 0 24 24"},frame:{path:r.a.createElement("path",{d:"M4,4H20V20H4V4M6,8V18H18V8H6Z"}),viewBox:"0 0 24 24"},image:{path:r.a.createElement("path",{d:"M19,19H5V5H19M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M13.96,12.29L11.21,15.83L9.25,13.47L6.5,17H17.5L13.96,12.29Z"}),viewBox:"0 0 24 24"},row:{path:r.a.createElement("path",{d:"M22,14A2,2 0 0,1 20,16H4A2,2 0 0,1 2,14V10A2,2 0 0,1 4,8H20A2,2 0 0,1 22,10V14M4,14H8V10H4V14M10,14H14V10H10V14M16,14H20V10H16V14Z"}),viewBox:"0 0 24 24"},table:{path:r.a.createElement("path",{d:"M5,4H19A2,2 0 0,1 21,6V18A2,2 0 0,1 19,20H5A2,2 0 0,1 3,18V6A2,2 0 0,1 5,4M5,8V12H11V8H5M13,8V12H19V8H13M5,14V18H11V14H5M13,14V18H19V14H13Z"}),viewBox:"0 0 24 24"},textbox:{path:r.a.createElement("path",{d:"M5,3C3.89,3 3,3.89 3,5V19C3,20.11 3.89,21 5,21H19C20.11,21 21,20.11 21,19V5C21,3.89 20.11,3 19,3H5M5,5H19V19H5V5M7,7V9H17V7H7M7,11V13H17V11H7M7,15V17H14V15H7Z"}),viewBox:"0 0 24 24"},userCircleFill:{path:r.a.createElement("path",{d:'M12,19.2C9.5,19.2 7.29,17.92 6,16C6.03,14 10,12.9 12,12.9C14,12.9\n17.97,14 18,16C16.71,17.92 14.5,19.2 12,19.2M12,5A3,3 0 0,1 15,8A3,3 0 0,1\n12,11A3,3 0 0,1 9,8A3,3 0 0,1 12,5M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10\n0 0,0 22,12C22,6.47 17.5,2 12,2Z"\n'}),viewBox:"0 0 24 24"},userCircleOutline:{path:r.a.createElement("path",{d:"M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0\n22,12A10,10 0 0,0 12,2M7.07,18.28C7.5,17.38 10.12,16.5 12,16.5C13.88,16.5\n16.5,17.38 16.93,18.28C15.57,19.36 13.86,20 12,20C10.14,20 8.43,19.36\n7.07,18.28M18.36,16.83C16.93,15.09 13.46,14.5 12,14.5C10.54,14.5 7.07,15.09\n5.64,16.83C4.62,15.5 4,13.82 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,13.82\n19.38,15.5 18.36,16.83M12,6C10.06,6 8.5,7.56 8.5,9.5C8.5,11.44 10.06,13 12,13C13.94,13\n15.5,11.44 15.5,9.5C15.5,7.56 13.94,6 12,6M12,11A1.5,1.5 0 0,1 10.5,9.5A1.5,1.5\n0 0,1 12,8A1.5,1.5 0 0,1 13.5,9.5A1.5,1.5 0 0,1 12,11Z\n"}),viewBox:"0 0 24 24"}},gt=Object(x.a)({},pt.a,{breakpoints:["30em","48em","62em","80em"],colors:Object(x.a)({},pt.a.colors,{brand:Object(x.a)({},pt.a.colors.blue)}),icons:Object(x.a)({},pt.a.icons,{},ft)});var bt=function(){return r.a.createElement(o.a,{theme:gt},r.a.createElement(st,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(bt,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[58,1,2]]]);
//# sourceMappingURL=main.722a0722.chunk.js.map