(this.webpackJsonpcovid19tracker=this.webpackJsonpcovid19tracker||[]).push([[0],{11:function(e,t,c){},13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c(4),r=c.n(s),a=(c(11),c(3)),d=c.n(a),i=c(5),j=c(6),h=(c(13),c(0)),l=function(){var e=Object(n.useState)([]),t=Object(j.a)(e,2),c=t[0],s=t[1],r=function(){var e=Object(i.a)(d.a.mark((function e(){var t,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.covid19india.org/data.json");case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,console.log(c.statewise),s(c.statewise);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){r()}),[]),Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{className:"container-fluid mt-5",children:[Object(h.jsxs)("div",{className:"main-heading",children:[Object(h.jsxs)("h1",{className:"mb-5 text-center",children:[Object(h.jsx)("span",{className:"font-weight-bold",children:"INDIA "}),"COVID-19 cases Statewise "]}),Object(h.jsx)("p",{children:"by Rajendra Nath Murmu"})]}),Object(h.jsx)("div",{className:"table-responsive",children:Object(h.jsxs)("table",{className:"table table-hover",children:[Object(h.jsx)("thead",{className:"thead-dark",children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"State"}),Object(h.jsx)("td",{children:"Confirmed"}),Object(h.jsx)("td",{children:"recovered"}),Object(h.jsx)("td",{children:"deaths"}),Object(h.jsx)("td",{children:"active"}),Object(h.jsx)("td",{children:"updated"})]})}),Object(h.jsx)("tbody",{children:c.map((function(e,t){return Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:e.state}),Object(h.jsx)("td",{children:e.confirmed}),Object(h.jsx)("td",{children:e.recovered}),Object(h.jsx)("td",{children:e.deaths}),Object(h.jsx)("td",{children:e.active}),Object(h.jsx)("td",{children:e.lastupdatedtime})]},t)}))})]})})]})})},b=function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(l,{})})};r.a.render(Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(b,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.43059683.chunk.js.map