(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{27:function(e,t,n){},28:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n(0),c=n.n(o),s=n(7),a=n.n(s),i=n(8),u=n(6),h=n(15),d=n(16),l=(n(27),n(2)),b=n(3),j=n(5),O=n(4),p=function(e){var t=e.name,n=e.email,o=e.id;return Object(r.jsxs)("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(r.jsx)("img",{alt:"robots",src:"https://robohash.org/".concat(o,"?200x200")}),Object(r.jsxs)("div",{children:[Object(r.jsxs)("h2",{children:[" ",t," "]}),Object(r.jsxs)("p",{children:[" ",n," "]})]})]})},f=function(e){var t=e.robots;return Object(r.jsx)("div",{children:t.map((function(e,n){return Object(r.jsx)(p,{id:t[n].id,name:t[n].name,e:!0,mail:t[n].email},n)}))})},g=function(e){e.searchfield;var t=e.searchChange;return Object(r.jsx)("div",{className:"pa2",children:Object(r.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t})})},v=function(e){return Object(r.jsx)("div",{style:{overflowY:"scroll",border:"1px solid black",height:"800px"},children:e.children})},x=function(e){Object(j.a)(n,e);var t=Object(O.a)(n);function n(e){var r;return Object(l.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(b.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(r.jsx)("h1",{children:" Oooooops. That is not good "}):this.props.children}}]),n}(o.Component),m=function(e){Object(j.a)(n,e);var t=Object(O.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).updateCount=function(){e.setState((function(t){return{count:e.state.count+1}}))},e.state={count:0},e}return Object(b.a)(n,[{key:"shouldComponentUpdate",value:function(e,t){return this.state.count!==t.count}},{key:"render",value:function(){return console.log("Header"),Object(r.jsxs)("button",{color:this.props.color,onClick:this.updateCount,children:["Count: ",this.state.count]})}}]),n}(o.Component),y=function(e){Object(j.a)(n,e);var t=Object(O.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){return console.log("Header"),Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{className:"f1",children:" RoboFriends "}),Object(r.jsx)(m,{color:"red"})]})}}]),n}(o.Component),C=(n(28),"CHANGE_SEARCH_FIELD"),R="REQUEST_ROBOTS_PENDING",E="REQUEST_ROBOTS_SUCCESS",S="REQUEST_ROBOTS_FAILED",F=function(e){Object(j.a)(n,e);var t=Object(O.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,t=e.searchField,n=e.onSearchChange,o=e.robots,c=e.isPending,s=o.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return Object(r.jsxs)("div",{className:"tc",children:[Object(r.jsx)(y,{}),Object(r.jsx)(g,{searchChange:n}),Object(r.jsxs)(v,{children:[c?Object(r.jsx)("h1",{children:" Loading "}):Object(r.jsx)(x,{children:Object(r.jsx)(f,{robots:s})}),";"]})]})}}]),n}(o.Component),k=Object(i.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPedning,error:e.requestRobots.error}}),(function(e){return{onSearchChange:function(t){return e((n=t.target.value,{type:C,payload:n}));var n},onRequestRobots:function(){return e((function(e){e({type:R}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e({type:E,payload:t})})).catch((function(t){return e({type:S,payload:t})}))}))}}}))(F),w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,31)).then((function(t){var n=t.getCLS,r=t.getFID,o=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),o(e),c(e),s(e)}))},P={searchField:""},T={isPending:!1,robots:[],error:""},L=(n(29),Object(h.createLogger)()),N=Object(u.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case C:return Object.assign({},e,{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case R:return Object.assign({},e,{isPending:!0});case E:return Object.assign({},e,{robots:t.payload,isPending:!1});case S:return Object.assign({},e,{error:t.payloadd,isPending:!1});default:return e}}}),_=Object(u.d)(N,Object(u.a)(d.a,L));a.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(i.a,{store:_,children:Object(r.jsx)(k,{})})}),document.getElementById("root")),w()}},[[30,1,2]]]);
//# sourceMappingURL=main.d190bb76.chunk.js.map