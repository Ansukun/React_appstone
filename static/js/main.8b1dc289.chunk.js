(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{36:function(e,t,n){},48:function(e,t,n){},67:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);var a=n(2),s=n(0),i=n.n(s),o=n(10),l=n.n(o),r=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,124)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),a(e),s(e),i(e),o(e)}))},c=n(12),d=n(13),u=n(15),h=n(14),p=(n(36),i.a.Component,function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).handleSum=function(){a.setState({sum:alert(parseInt(a.props.val1)+parseInt(a.props.val2))})},a.handleSub=function(){a.setState({sub:alert(parseInt(a.props.val1)-parseInt(a.props.val2))})},a.handleMul=function(){a.setState({mult:alert(parseInt(a.props.val1)*parseInt(a.props.val2))})},a.handleDiv=function(){a.setState({div:alert(parseInt(a.props.val1)/parseInt(a.props.val2))})},a.handleClc=function(){a.setState({num1:"",num2:"",sum:0,div:0,sub:0,mult:0})},a.state={sum:0,div:0,sub:0,mult:0},a}return Object(d.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{className:"button",children:[Object(a.jsx)("button",{className:"add-button",onClick:this.handleSum,children:"ADD"}),Object(a.jsx)("button",{className:"sub-button",onClick:this.handleSub,children:"SUBSTRACT"}),Object(a.jsx)("button",{className:"mul-button",onClick:this.handleMul,children:"MULTIPLY"}),Object(a.jsx)("button",{className:"div-button",onClick:this.handleDiv,children:"DIVIDE"}),Object(a.jsx)("button",{className:"clc-button",onClick:this.handleClc,children:"CLEAR"})]}),Object(a.jsx)("div",{})]})}}]),n}(i.a.Component)),b=(i.a.Component,i.a.Component,s.Component,n(108)),j=n(119),m=n(113),g=n(114),f=(n(67),i.a.Component,i.a.Component,n(115)),C=(n(71),i.a.Component,n(48),n(120)),v=n(116),O=n(122),x=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).handleClick=function(){fetch("https://reqres.in/api/users?pages=5").then((function(e){return e.json()})).then((function(e){console.log(e)}))},a.handleLogin=function(){fetch("https://reqres.in/api/register",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:a.state.email,password:a.state.password})}).then((function(e){return e.json()})).then((function(e){e.id?(console.log(e),console.log(e.id),a.setState({message:"User Created",snackbarmessage:"Logged in Succesfully",login:!0,snackbaropen:!0,email:"",password:""})):a.setState({message:"User not Created",snackbarmessage:"Login Failed",login:!0,snackbaropen:!0,email:"",password:""})}))},a.handleEmail=function(e){a.setState({email:e.target.value})},a.handlePassword=function(e){a.setState({password:e.target.value})},a.state={email:"",password:"",snackbarmessage:"",snackbaropen:!1,login:!1},a}return Object(d.a)(n,[{key:"render",value:function(){return Object(a.jsxs)(b.a,{Container:!0,style:{justifyContent:"center",marginTop:100,marginLeft:450},xs:4,children:[Object(a.jsx)(g.a,{children:Object(a.jsxs)(v.a,{children:[Object(a.jsx)(b.a,{item:!0,children:Object(a.jsx)(f.a,{variant:"h3",gutterBottom:!0,style:{color:"Red",justifyContent:"center",textAlign:"center"},children:"Login"})}),Object(a.jsx)(b.a,{item:!0,children:Object(a.jsx)(j.a,{label:"Email",fullWidth:!0,id:"outlined-basic",variant:"outlined",value:this.state.email,style:{marginTop:20},onChange:this.handleEmail})}),Object(a.jsx)(b.a,{item:!0,children:Object(a.jsx)(j.a,{required:!0,id:"filled-required",label:"Password",variant:"outlined",value:this.state.password,style:{marginTop:10},onChange:this.handlePassword,fullWidth:!0})}),Object(a.jsx)(b.a,{item:!0,children:Object(a.jsx)(m.a,{onClick:this.handleLogin,fullWidth:!0,disabled:0===this.state.password.length||0===this.state.email.length,variant:"contained",color:"secondary",style:{marginTop:10},children:"LOGIN"})})]})}),Object(a.jsx)(O.a,{open:this.state.snackbaropen,autoHideDuration:6e3,onClose:this.handleClose,anchorOrigin:{vertical:"top",horizontal:"center"},children:"Login Failed"===this.state.snackbarmessage?Object(a.jsx)(C.a,{onClose:this.handleClose,severity:"error",children:this.state.snackbarmessage}):Object(a.jsx)(C.a,{onClose:this.handleClose,severity:"success",children:this.state.snackbarmessage})})]})}}]),n}(s.Component),k=n(123),S=n(117),y=n(118);s.Component;l.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(x,{})}),document.getElementById("root")),r()}},[[72,1,2]]]);
//# sourceMappingURL=main.8b1dc289.chunk.js.map