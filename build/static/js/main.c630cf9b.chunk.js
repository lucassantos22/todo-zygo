(this.webpackJsonptodo_app=this.webpackJsonptodo_app||[]).push([[0],{67:function(e,t,r){},94:function(e,t,r){"use strict";r.r(t);var n=r(1),a=r(0),s=r(20),c=r.n(s),i=(r(67),r(107)),o=r(109),l=r(15),u=r(96),d=function(e){return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)(i.a,{bg:"primary",variant:"dark",children:[Object(n.jsx)(i.a.Brand,{children:Object(n.jsxs)(l.b,{to:"/",style:{color:"white"},children:[Object(n.jsx)("b",{children:e.title})," ",e.subtitle]})}),Object(n.jsxs)(o.a,{className:"mr-auto",children:[Object(n.jsx)(o.a.Link,{children:Object(n.jsxs)(l.b,{to:"/",style:{color:"white"},id:"dashboard",children:[Object(n.jsx)(u.a,{className:"mb-1"})," Dashboard"]})}),Object(n.jsx)(o.a.Link,{children:Object(n.jsx)(l.b,{to:"/sobre",style:{color:"white"},id:"sobre",children:"Sobre"})})]})]})})},p=r(97),j=function(e){return Object(n.jsxs)(i.a,{bg:"dark",fixed:"bottom",children:[Object(n.jsxs)(i.a.Brand,{href:"https://github.com/lucassantos22",style:{color:"white"},children:[Object(n.jsx)(p.a,{style:{marginBottom:"3px"}})," /lucassantos22"]}),Object(n.jsx)(i.a.Toggle,{}),Object(n.jsx)(i.a.Collapse,{className:"justify-content-end",children:Object(n.jsxs)(i.a.Text,{style:{color:"white"},children:["Client conectado ao ",Object(n.jsx)("a",{style:{color:"white"},href:"http://todobackend.com/specs/index.html?https://todo-backend-express.herokuapp.com/",children:"https://todo-backend-express.herokuapp.com/"})]})})]})},h=r(7),b=r(58),x=r(9),f=r.n(x),O=r(17),k=r(32),m=r(33),v=r(36),T=r(34),g=r(61),y=r(98),w=r(99),C=r(102),I=r(59),L=r(110),V=r(100),A=r(101),N=r(103),S=function(e){var t=Object(a.useState)(""),r=Object(g.a)(t,2),s=r[0],c=r[1];return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("h3",{children:e.title}),e.completed?Object(n.jsx)(y.a,{variant:"primary",style:{float:"right",marginBottom:"-100%"},size:"sm",onClick:function(){return e.deleteCompletedTasks()},children:"Limpar tarefas conclu\xeddas"}):null,Object(n.jsx)(w.a,{striped:!0,hover:!0,responsive:!0,borderless:!0,children:e.tasks.length>0?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{children:"Status"}),Object(n.jsx)("th",{children:"Tarefa"})]})}),Object(n.jsx)("tbody",{children:e.tasks.map((function(t){return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:t.completed?Object(n.jsx)(y.a,{onClick:function(){return e.completeTask(t.url,!1)},variant:"success",children:Object(n.jsx)(V.a,{size:"20"})}):Object(n.jsx)(y.a,{onClick:function(){return e.completeTask(t.url,!0)},variant:"warning",children:Object(n.jsx)(A.a,{size:"20"})})}),!1===t.completed?Object(n.jsxs)(C.a,{style:{width:"100%",marginTop:"12px"},children:[Object(n.jsx)(I.a,{placeholder:t.title,onChange:function(e){return c(e.target.value)}}),Object(n.jsx)(C.a.Append,{children:Object(n.jsx)(y.a,{variant:"primary",onClick:function(){return e.editTask(t.url,s)},children:"Editar"})})]}):Object(n.jsx)("td",{style:{textDecoration:"line-through"},children:Object(n.jsx)("span",{style:{marginTop:"12px"},children:t.title})}),t.completed?Object(n.jsx)("td",{children:Object(n.jsx)(y.a,{variant:"secondary",disabled:!0,children:Object(n.jsx)(N.a,{})})}):Object(n.jsx)("td",{children:Object(n.jsx)(y.a,{variant:"danger",onClick:function(){return e.deleteTask(t.url)},children:Object(n.jsx)(N.a,{})})})]},t.url)}))})]}):Object(n.jsx)(L.a,{children:Object(n.jsxs)(L.a.Body,{children:[Object(n.jsx)(L.a.Title,{id:"Sobre",children:"Lista vazia"}),Object(n.jsxs)(L.a.Text,{children:["Ops! N\xe3o existem tarefas ",!0===e.completed?"conclu\xeddas":e.completed?"":"em andamento"," cadastradas :("]})]})})})]})},D=r(16),B=r(25),E=r(19),F=r.n(E),z=r(108);function _(e){return{type:"VISION_CHANGED",payload:e}}var G=function(e){return{type:"UPDATE_TASK",payload:e}},U=function(e){return{type:"UPDATE_LOADING",payload:e}},J="https://todo-backend-express.herokuapp.com/",P={title:"",order:""},H=function(e){Object(v.a)(r,e);var t=Object(T.a)(r);function r(e){var n;return Object(k.a)(this,r),(n=t.call(this,e)).state=Object(D.a)({},P),n.sendTask=function(){var e=Object(O.a)(f.a.mark((function e(t){var r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),0!==n.state.title.length){e.next=4;break}return alert("A tarefa deve ter um t\xedtulo"),e.abrupt("return");case 4:if(!(n.state.title.length>40)){e.next=7;break}return alert("A tarefa n\xe3o deve ultrapassar 40 caracteres"),e.abrupt("return");case 7:return n.props.updateLoading(!0),e.prev=8,F.a.post(J,{title:n.state.title,order:n.props.tasks.length+1}),e.next=12,F.a.get(J);case 12:r=e.sent,n.props.updateTasks(r.data);case 14:return e.prev=14,n.props.updateLoading(!1),e.finish(14);case 17:n.props.changeVision(1);case 18:case"end":return e.stop()}}),e,null,[[8,,14,17]])})));return function(t){return e.apply(this,arguments)}}(),n}return Object(m.a)(r,[{key:"render",value:function(){var e=this;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("h3",{children:"Cadastrar"}),Object(n.jsxs)(z.a,{children:[Object(n.jsxs)(z.a.Group,{controlId:"formBasicEmail",children:[Object(n.jsx)(z.a.Label,{children:"Tarefa"}),Object(n.jsx)(z.a.Control,{onChange:function(t){return e.setState({title:t.target.value})},type:"text",required:!0}),Object(n.jsx)(z.a.Text,{className:"text-muted",children:"Campo obrigat\xf3rio"})]}),Object(n.jsx)(y.a,{variant:"primary",type:"submit",onClick:function(t){return e.sendTask(t)},children:"Adicionar"})]})]})}}]),r}(a.Component),K=Object(B.b)((function(e){return{tasks:e.tasks.tasks}}),(function(e){return{changeVision:function(t){e(_(t))},updateTasks:function(t){e(G(t))},updateLoading:function(t){e(U(t))}}}))(H),W=r(104),q=r(105),M=r(106),Z=function(e){Object(v.a)(r,e);var t=Object(T.a)(r);function r(e){return Object(k.a)(this,r),t.call(this,e)}return Object(m.a)(r,[{key:"componentWillMount",value:function(){var e=Object(O.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.props.updateLoading(!0),e.prev=1,e.next=4,this.updateTasks();case 4:return e.prev=4,this.props.updateLoading(!1),e.finish(4);case 7:case"end":return e.stop()}}),e,this,[[1,,4,7]])})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){var e=Object(O.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.loading===this.props.loading){e.next=2;break}return e.abrupt("return");case 2:this.updateTasks();case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"updateTasks",value:function(){var e=Object(O.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.a.get("https://todo-backend-express.herokuapp.com/");case 2:if(t=e.sent,this.sortTasksByOrder(t.data),JSON.stringify(t.data)!=JSON.stringify(this.props.tasks)){e.next=6;break}return e.abrupt("return");case 6:this.props.updateTasks(t.data);case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"sortTasksByOrder",value:function(e){e.sort((function(e,t){return e.order<t.order?-1:e.order>t.order?1:0}))}},{key:"completeTask",value:function(){var e=Object(O.a)(f.a.mark((function e(t,r){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.a.patch(t,{completed:r});case 2:return e.next=4,this.updateTasks();case 4:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"deleteCompletedTasks",value:function(){var e=Object(O.a)(f.a.mark((function e(){var t,r,n,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.props.updateLoading(!0),t=this.props.tasks.filter((function(e){return e.completed})),e.prev=2,r=Object(b.a)(t),e.prev=4,r.s();case 6:if((n=r.n()).done){e.next=12;break}return a=n.value,e.next=10,F.a.delete(a.url);case 10:e.next=6;break;case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(4),r.e(e.t0);case 17:return e.prev=17,r.f(),e.finish(17);case 20:if(0!==t.length){e.next=23;break}return alert("N\xe3o existem tarefas completas no momento"),e.abrupt("return");case 23:return e.next=25,this.updateTasks();case 25:return e.prev=25,this.props.updateLoading(!1),e.finish(25);case 28:case"end":return e.stop()}}),e,this,[[2,,25,28],[4,14,17,20]])})));return function(){return e.apply(this,arguments)}}()},{key:"editTask",value:function(){var e=Object(O.a)(f.a.mark((function e(t,r){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return 0===r.length&&alert("A tarefa deve ter um t\xedtulo"),this.props.updateLoading(!0),e.prev=2,e.next=5,F.a.patch(t,{title:r});case 5:return e.next=7,this.updateTasks();case 7:return e.prev=7,this.props.updateLoading(!1),e.finish(7);case 10:case"end":return e.stop()}}),e,this,[[2,,7,10]])})));return function(t,r){return e.apply(this,arguments)}}()},{key:"deleteTask",value:function(){var e=Object(O.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Tem certeza que deseja excluir?")){e.next=11;break}return this.props.updateLoading(!0),e.prev=3,e.next=6,F.a.delete(t);case 6:return e.next=8,this.updateTasks();case 8:return e.prev=8,this.props.updateLoading(!1),e.finish(8);case 11:case"end":return e.stop()}}),e,this,[[3,,8,11]])})));return function(t){return e.apply(this,arguments)}}()},{key:"filterTasksCompleteds",value:function(){return this.props.tasks.filter((function(e){return e.completed}))}},{key:"filterTasksNotCompleteds",value:function(){return this.props.tasks.filter((function(e){return!e.completed}))}},{key:"render",value:function(){var e=this;return Object(n.jsxs)(n.Fragment,{children:[this.props.loading?Object(n.jsx)(W.a,{animation:"border",variant:"info",style:{position:"absolute",zIndex:"1",left:"50%",top:"40%"}}):null,Object(n.jsxs)(L.a,{children:[Object(n.jsx)(L.a.Header,{children:Object(n.jsxs)(o.a,{variant:"tabs",defaultActiveKey:"#first",children:[Object(n.jsx)(o.a.Item,{children:Object(n.jsx)(o.a.Link,{active:1===this.props.whichTableIsVisible,onClick:function(){return e.props.changeVision(1)},children:Object(n.jsx)(q.a,{})})}),Object(n.jsx)(o.a.Item,{children:Object(n.jsx)(o.a.Link,{active:2===this.props.whichTableIsVisible,onClick:function(){return e.props.changeVision(2)},children:Object(n.jsx)(A.a,{})})}),Object(n.jsx)(o.a.Item,{children:Object(n.jsx)(o.a.Link,{active:3===this.props.whichTableIsVisible,onClick:function(){return e.props.changeVision(3)},children:Object(n.jsx)(V.a,{})})}),Object(n.jsx)(o.a.Item,{children:Object(n.jsx)(o.a.Link,{active:4===this.props.whichTableIsVisible,onClick:function(){return e.props.changeVision(4)},children:Object(n.jsx)(M.a,{})})})]})}),Object(n.jsx)(L.a.Body,{children:1===this.props.whichTableIsVisible?Object(n.jsx)(S,{title:"Tarefas",deleteTask:function(t){return e.deleteTask(t)},completeTask:function(t,r){return e.completeTask(t,r)},editTask:function(t,r){return e.editTask(t,r)},tasks:this.props.tasks,completed:"trueAndFalse",deleteCompletedTasks:function(){return e.deleteCompletedTasks()}}):2===this.props.whichTableIsVisible?Object(n.jsx)(S,{title:"A fazer",deleteTask:function(t){return e.deleteTask(t)},completeTask:function(t,r){return e.completeTask(t,r)},editTask:function(t,r){return e.editTask(t,r)},tasks:this.filterTasksNotCompleteds(),deleteCompletedTasks:function(){return e.deleteCompletedTasks()}}):3===this.props.whichTableIsVisible?Object(n.jsx)(S,{title:"Conlu\xeddas",deleteTask:function(t){return e.deleteTask(t)},completeTask:function(t,r){return e.completeTask(t,r)},editTask:function(t,r){return e.editTask(t,r)},tasks:this.filterTasksCompleteds(),completed:!0,deleteCompletedTasks:function(){return e.deleteCompletedTasks()}}):Object(n.jsx)(K,{})})]})]})}}]),r}(a.Component),Q=Object(B.b)((function(e){return{whichTableIsVisible:e.whichTableIsVisible.whichTableIsVisible,tasks:e.tasks.tasks,loading:e.loading.loading}}),(function(e){return{changeVision:function(t){e(_(t))},updateTasks:function(t){e(G(t))},updateLoading:function(t){e(U(t))}}}))(Z),R=function(e){return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(L.a,{children:Object(n.jsxs)(L.a.Body,{children:[Object(n.jsx)(L.a.Title,{id:"Sobre",children:"Sobre"}),Object(n.jsxs)(L.a.Text,{children:["Sistema desenvolvido para o processo seletive da empresa ",Object(n.jsx)("a",{href:"https://zygotecnologia.com/",target:"blank",children:"Zygo"})," :)"]}),Object(n.jsx)(L.a.Link,{children:Object(n.jsx)(l.b,{to:"/",children:"Voltar"})})]})})})},X=function(e){return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(L.a,{children:Object(n.jsxs)(L.a.Body,{children:[Object(n.jsx)(L.a.Title,{id:"Sobre",children:"Erro 404"}),Object(n.jsx)(L.a.Text,{children:"Desculpe mas essa p\xe1gina n\xe3o existe."}),Object(n.jsx)(L.a.Link,{children:Object(n.jsx)(l.b,{to:"/",children:"Voltar"})})]})})})},Y=function(e){return Object(n.jsxs)(h.c,{children:[Object(n.jsx)(h.a,{path:"/",exact:!0,component:Q}),Object(n.jsx)(h.a,{path:"/sobre",component:R}),Object(n.jsx)(h.a,{path:"*",component:X})]})};var $=function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsxs)(l.a,{children:[Object(n.jsx)(d,{title:"TODO",subtitle:"App"}),Object(n.jsx)(Y,{}),Object(n.jsx)(j,{})]})})},ee=r(27),te={whichTableIsVisible:1},re={tasks:[]},ne={loading:!1},ae=Object(ee.b)({whichTableIsVisible:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"VISION_CHANGED":return Object(D.a)(Object(D.a)({},e),{},{whichTableIsVisible:t.payload});default:return e}},tasks:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_TASK":return Object(D.a)(Object(D.a)({},e),{},{tasks:t.payload});default:return e}},loading:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_LOADING":return Object(D.a)(Object(D.a)({},e),{},{loading:t.payload});default:return e}}});r(93);c.a.render(Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(B.a,{store:Object(ee.c)(ae),children:Object(n.jsx)($,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.register("sw.js")}},[[94,1,2]]]);
//# sourceMappingURL=main.c630cf9b.chunk.js.map