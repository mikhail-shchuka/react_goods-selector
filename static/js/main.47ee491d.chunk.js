(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var s=c(3),o=c.n(s),a=c(4),n=c(5),l=c(8),r=c(7),d=c(1),i=c.n(d),h=c(6),u=c.n(h),p=(c(13),["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"]),j=c(0),b=function(e){Object(l.a)(c,e);var t=Object(r.a)(c);function c(){var e;Object(a.a)(this,c);for(var s=arguments.length,o=new Array(s),n=0;n<s;n++)o[n]=arguments[n];return(e=t.call.apply(t,[this].concat(o))).state={selectedGood:""},e.handlerClear=function(){e.setState({selectedGood:""})},e.handlerRemove=function(){e.setState({selectedGood:""})},e}return Object(n.a)(c,[{key:"render",value:function(){var e=this;return Object(j.jsxs)("main",{className:"App",children:[Object(j.jsxs)("header",{className:"App__header",children:[Object(j.jsx)("h1",{className:"App__title",children:this.state.selectedGood?"".concat(this.state.selectedGood," is selected"):"No goods selected"}),this.state.selectedGood&&Object(j.jsx)("button",{type:"button",className:"App__clear",onClick:this.handlerClear,children:"Clear"})]}),Object(j.jsx)("ul",{children:p.map((function(t){return Object(j.jsxs)("li",{className:u()("Good",{"Good--active":e.state.selectedGood===t}),children:[t,e.state.selectedGood===t&&Object(j.jsx)("button",{type:"button",className:"Good__remove",onClick:e.handlerRemove,children:"Remove"}),e.state.selectedGood!==t&&Object(j.jsx)("button",{type:"button",className:"Good__select",onClick:function(){e.setState({selectedGood:t})},children:"Select"})]})}))})]})}}]),c}(i.a.Component);o.a.render(Object(j.jsx)(b,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.47ee491d.chunk.js.map