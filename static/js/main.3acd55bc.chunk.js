(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{38:function(e,t,n){e.exports=n(88)},43:function(e,t,n){},86:function(e,t,n){},88:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(9),l=n.n(o),r=(n(43),n(14)),c=n(15),s=n(17),u=n(16),h=n(18),d=n(8),f=n(13),m=n.n(f),v=n(19),w=n(10),b=n.n(w),E=function(e){function t(e){var n;Object(r.a)(this,t),n=Object(s.a)(this,Object(u.a)(t).call(this,e));var a=localStorage.getItem("state");return n.state=a||{items:[],show:!1},n.currentNote="",n.currentTitle="",n.addEditNote=n.addEditNote.bind(Object(d.a)(Object(d.a)(n))),n.handleClose=n.handleClose.bind(Object(d.a)(Object(d.a)(n))),n.handleShow=n.handleShow.bind(Object(d.a)(Object(d.a)(n))),n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"handleClose",value:function(){this.setState({show:!1})}},{key:"handleShow",value:function(){this.setState({show:!0})}},{key:"deleteNote",value:function(e){var t=this.state.items;t.splice(e,1),this.setState({items:t}),console.log(this.state)}},{key:"addEditNote",value:function(e){if(console.log(this.theNote.value),""!==this.theTitle.value)var t={title:this.theTitle.value,note:this.theNote.value};var n=this.state.items;this.currentTitle.length>0?n.splice(this.theIndex,1,t):n=n.concat(t),this.setState({items:n}),localStorage.setItem("state",this.state),this.theTitle.value="",this.theNote.value="",this.currentTitle="",this.currentNote="",this.theIndex=void 0,console.log(this.state.items),this.handleClose(),e.preventDefault()}},{key:"initializeEdit",value:function(e){this.theIndex=e,this.currentNote=this.state.items[e].note,this.currentTitle=this.state.items[e].title,this.handleShow()}},{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement("header",null,i.a.createElement("h1",null,"Noteable",i.a.createElement(v.a,{onClick:this.handleShow})),i.a.createElement(m.a,{show:this.state.show,onHide:this.handleClose},i.a.createElement(m.a.Header,{closeButton:!0},i.a.createElement(m.a.Title,null,"Add Note")),i.a.createElement(m.a.Body,null,i.a.createElement("form",{onSubmit:this.addEditNote},i.a.createElement("input",{type:"text",placeholder:"Title",ref:function(t){return e.theTitle=t},defaultValue:this.currentTitle,required:!0}),i.a.createElement("textarea",{placeholder:"Enter text",ref:function(t){return e.theNote=t},defaultValue:this.currentNote}),i.a.createElement("button",{type:"submit"},"Add Note"))))),i.a.createElement("div",{className:"main-content"},this.state.items.map(function(t,n){return i.a.createElement(b.a,{style:{width:"18rem"}},i.a.createElement(b.a.Body,null,i.a.createElement(b.a.Title,null,t.title),i.a.createElement(b.a.Text,null,t.note.split("\n").map(function(e){return i.a.createElement("div",null,e)})),i.a.createElement(b.a.Link,{href:"#"},i.a.createElement(v.c,{onClick:function(){return e.initializeEdit(n)}})),i.a.createElement(b.a.Link,{href:"#"},i.a.createElement(v.b,{onClick:function(){return e.deleteNote(n)}}))))})))}}]),t}(a.Component),p=(n(86),function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"noteable"},i.a.createElement(E,null))}}]),t}(a.Component)),g=(n(87),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function k(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}l.a.render(i.a.createElement(p,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/noteable",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/noteable","/service-worker.js");g?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):k(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):k(t,e)})}}()}},[[38,1,2]]]);
//# sourceMappingURL=main.3acd55bc.chunk.js.map