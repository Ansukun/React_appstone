(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{28:function(t,e,n){},53:function(t,e,n){},57:function(t,e,n){"use strict";n.r(e);var a=n(2),s=n(0),c=n.n(s),l=n(8),i=n.n(l),r=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,94)).then((function(e){var n=e.getCLS,a=e.getFID,s=e.getFCP,c=e.getLCP,l=e.getTTFB;n(t),a(t),s(t),c(t),l(t)}))},o=n(11),d=n(12),u=n(14),h=n(13),p=(n(28),c.a.Component,function(t){Object(u.a)(n,t);var e=Object(h.a)(n);function n(t){var a;return Object(o.a)(this,n),(a=e.call(this,t)).handleSum=function(){a.setState({sum:alert(parseInt(a.props.val1)+parseInt(a.props.val2))})},a.handleSub=function(){a.setState({sub:alert(parseInt(a.props.val1)-parseInt(a.props.val2))})},a.handleMul=function(){a.setState({mult:alert(parseInt(a.props.val1)*parseInt(a.props.val2))})},a.handleDiv=function(){a.setState({div:alert(parseInt(a.props.val1)/parseInt(a.props.val2))})},a.handleClc=function(){a.setState({num1:"",num2:"",sum:0,div:0,sub:0,mult:0})},a.state={sum:0,div:0,sub:0,mult:0},a}return Object(d.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{className:"button",children:[Object(a.jsx)("button",{className:"add-button",onClick:this.handleSum,children:"ADD"}),Object(a.jsx)("button",{className:"sub-button",onClick:this.handleSub,children:"SUBSTRACT"}),Object(a.jsx)("button",{className:"mul-button",onClick:this.handleMul,children:"MULTIPLY"}),Object(a.jsx)("button",{className:"div-button",onClick:this.handleDiv,children:"DIVIDE"}),Object(a.jsx)("button",{className:"clc-button",onClick:this.handleClc,children:"CLEAR"})]}),Object(a.jsx)("div",{})]})}}]),n}(c.a.Component)),j=(c.a.Component,c.a.Component,s.Component,n(86)),b=n(91),m=n(92),v=n(90),O=(n(53),function(t){Object(u.a)(n,t);var e=Object(h.a)(n);function n(t){var a;return Object(o.a)(this,n),(a=e.call(this,t)).handleInput=function(t){a.setState({Input:t.target.value})},a.handlePush=function(){var t=a.state.Arr;t.push(a.state.Input),a.setState({Arr:t,Input:""})},a.handleComplete=function(t,e){var n=a.state.Arr,s=n.splice(e,1),c=a.state.Completed;c.push(s[0]),console.log(s[0]),a.setState({Arr:n,Completed:c})},a.handleUndo=function(t,e){var n=a.state.Completed,s=n.splice(e,1),c=a.state.Arr;c.push(s[0]),console.log(s[0]),a.setState({Arr:c,Completed:n})},a.state={Arr:[],Input:"",Completed:[]},a}return Object(d.a)(n,[{key:"render",value:function(){var t=this;return Object(a.jsxs)("div",{className:"main_index",children:[Object(a.jsxs)(j.a,{container:!0,direction:"row",justify:"center",alignItems:"center",children:[Object(a.jsx)(b.a,{id:"standard-basic",label:"Task",placeholder:"Enter the Task",onChange:this.handleInput,value:this.state.Input}),Object(a.jsx)(m.a,{variant:"contained",color:"secondary",onClick:this.handlePush,value:this.state.Input,disabled:!this.state.Input,children:"Add"})]}),Object(a.jsxs)("div",{className:"main",children:[Object(a.jsxs)(v.a,{className:"moreinfo",children:[Object(a.jsx)("div",{className:"index",children:0===this.state.Arr.length?Object(a.jsx)("h2",{children:"You have No tasks to do"}):Object(a.jsx)("h2",{children:"Tasks to do"})}),Object(a.jsx)("ul",{children:this.state.Arr.map((function(e,n){return Object(a.jsxs)("li",{children:[e,"  ",Object(a.jsx)(m.a,{color:"primary",variant:"contained",onClick:function(e){t.handleComplete(e,n)},children:"Done"})]})}))})]}),Object(a.jsxs)(v.a,{className:"completed",children:[Object(a.jsx)("div",{className:"index",children:0===this.state.Completed.length?Object(a.jsx)("h2",{children:"No Task Completed"}):Object(a.jsx)("h2",{children:"Tasks Completed"})}),Object(a.jsx)("ul",{children:this.state.Completed.map((function(e,n){return Object(a.jsxs)("li",{children:[e,"  ",Object(a.jsx)(m.a,{color:"primary",variant:"contained",onClick:function(e){t.handleUndo(e,n)},children:"Undo"})]})}))})]})]})]})}}]),n}(c.a.Component)),C=n(58);c.a.Component;i.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(O,{})}),document.getElementById("root")),r()}},[[57,1,2]]]);
//# sourceMappingURL=main.660be1ce.chunk.js.map