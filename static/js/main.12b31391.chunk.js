(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{12:function(e,t,o){},14:function(e,t,o){"use strict";o.r(t);var c=o(3),s=o.n(c),a=o(4),n=o(5),l=o(7),r=o(6),d=o(1),i=o.n(d),u=(o(12),["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"]),h=o(0),m=function(e){Object(l.a)(o,e);var t=Object(r.a)(o);function o(){var e;Object(a.a)(this,o);for(var c=arguments.length,s=new Array(c),n=0;n<c;n++)s[n]=arguments[n];return(e=t.call.apply(t,[this].concat(s))).state={selectedGood:""},e.handlerClear=function(){var t;null===(t=document.querySelector(".Good--active"))||void 0===t||t.classList.remove("Good--active"),e.setState({selectedGood:""})},e.handlerRemove=function(t){var o;null===(o=t.currentTarget.parentElement)||void 0===o||o.classList.remove("Good--active"),e.setState({selectedGood:""})},e.select=function(t,o){var c,s;null===(c=document.querySelector(".Good--active"))||void 0===c||c.classList.remove("Good--active"),null===(s=t.currentTarget.parentElement)||void 0===s||s.classList.add("Good--active"),e.setState({selectedGood:o})},e}return Object(n.a)(o,[{key:"render",value:function(){var e=this;return Object(h.jsxs)("main",{className:"App",children:[Object(h.jsxs)("header",{className:"App__header",children:[Object(h.jsx)("h1",{className:"App__title",children:this.state.selectedGood?"".concat(this.state.selectedGood," is selected"):"No goods selected"}),this.state.selectedGood&&Object(h.jsx)("button",{type:"button",className:"App__clear",onClick:this.handlerClear,children:"Clear"})]}),Object(h.jsx)("ul",{children:u.map((function(t){return Object(h.jsxs)("li",{className:"Good",children:[t,e.state.selectedGood===t&&Object(h.jsx)("button",{type:"button",className:"Good__remove",onClick:e.handlerRemove,children:"Remove"}),e.state.selectedGood!==t&&Object(h.jsx)("button",{type:"button",className:"Good__select",onClick:function(o){e.select(o,t)},children:"Select"})]})}))})]})}}]),o}(i.a.Component);s.a.render(Object(h.jsx)(m,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.12b31391.chunk.js.map