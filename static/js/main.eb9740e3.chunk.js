(this["webpackJsonpstatic-job-listings-master"]=this["webpackJsonpstatic-job-listings-master"]||[]).push([[0],[,,,,,,,,function(e){e.exports=JSON.parse('[{"id":1,"company":"Photosnap","logo":"./images/photosnap.svg","nnew":true,"featured":true,"position":"Senior Frontend Developer","role":"Frontend","level":"Senior","postedAt":"1d ago","contract":"Full Time","location":"USA Only","languages":["HTML","CSS","JavaScript"],"tools":[]},{"id":2,"company":"Manage","logo":"./images/manage.svg","nnew":true,"featured":true,"position":"Fullstack Developer","role":"Fullstack","level":"Midweight","postedAt":"1d ago","contract":"Part Time","location":"Remote","languages":["Python"],"tools":["React"]},{"id":3,"company":"Account","logo":"./images/account.svg","nnew":true,"featured":false,"position":"Junior Frontend Developer","role":"Frontend","level":"Junior","postedAt":"2d ago","contract":"Part Time","location":"USA Only","languages":["JavaScript"],"tools":["React","Sass"]},{"id":4,"company":"MyHome","logo":"./images/myhome.svg","nnew":false,"featured":false,"position":"Junior Frontend Developer","role":"Frontend","level":"Junior","postedAt":"5d ago","contract":"Contract","location":"USA Only","languages":["CSS","JavaScript"],"tools":[]},{"id":5,"company":"Loop Studios","logo":"./images/loop-studios.svg","nnew":false,"featured":false,"position":"Software Engineer","role":"Fullstack","level":"Midweight","postedAt":"1w ago","contract":"Full Time","location":"Worldwide","languages":["JavaScript"],"tools":["Ruby","Sass"]},{"id":6,"company":"FaceIt","logo":"./images/faceit.svg","nnew":false,"featured":false,"position":"Junior Backend Developer","role":"Backend","level":"Junior","postedAt":"2w ago","contract":"Full Time","location":"UK Only","languages":["Ruby"],"tools":["RoR"]},{"id":7,"company":"Shortly","logo":"./images/shortly.svg","nnew":false,"featured":false,"position":"Junior Developer","role":"Frontend","level":"Junior","postedAt":"2w ago","contract":"Full Time","location":"Worldwide","languages":["HTML","JavaScript"],"tools":["Sass"]},{"id":8,"company":"Insure","logo":"./images/insure.svg","nnew":false,"featured":false,"position":"Junior Frontend Developer","role":"Frontend","level":"Junior","postedAt":"2w ago","contract":"Full Time","location":"USA Only","languages":["JavaScript"],"tools":["Vue","Sass"]},{"id":9,"company":"Eyecam Co.","logo":"./images/eyecam-co.svg","nnew":false,"featured":false,"position":"Full Stack Engineer","role":"Fullstack","level":"Midweight","postedAt":"3w ago","contract":"Full Time","location":"Worldwide","languages":["JavaScript","Python"],"tools":["Django"]},{"id":10,"company":"The Air Filter Company","logo":"./images/the-air-filter-company.svg","nnew":false,"featured":false,"position":"Front-end Dev","role":"Frontend","level":"Junior","postedAt":"1mo ago","contract":"Part Time","location":"Worldwide","languages":["JavaScript"],"tools":["React","Sass"]}]')},,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o=n(1),l=n(7),a=n.n(l),c=(n(13),n(4)),i=n(6),r=(n(14),n(0)),s=function(){return Object(r.jsx)("header",{})},u=function(e){var t=e.job,n=e.clickFilter,o=t.company,l=t.logo,a=t.nnew,c=t.featured,i=t.position,s=t.role,u=t.level,d=t.postedAt,j=t.contract,p=t.location,g=t.languages,f=t.tools;return Object(r.jsxs)("li",{children:[Object(r.jsxs)("div",{className:"left",children:[Object(r.jsx)("img",{src:l,alt:o})," "]}),Object(r.jsxs)("div",{className:"center",children:[Object(r.jsxs)("div",{className:"center_header",children:[Object(r.jsx)("p",{children:o}),a?Object(r.jsx)("span",{className:"new",children:"NEW!"}):null,c?Object(r.jsx)("span",{className:"featured",children:"FEATURED"}):null]}),Object(r.jsx)("div",{className:"center_body",children:Object(r.jsx)("p",{children:i})}),Object(r.jsxs)("div",{className:"center_footer",children:[Object(r.jsx)("p",{children:d}),Object(r.jsx)("p",{children:j}),Object(r.jsx)("p",{children:p})]})]}),Object(r.jsxs)("div",{className:"right",children:[Object(r.jsx)("span",{onClick:function(){return n(s)},children:s}),Object(r.jsx)("span",{onClick:function(){return n(u)},children:u}),g.map((function(e){return Object(r.jsx)("span",{onClick:function(){return n(e)},children:e},e)})),f.map((function(e){return Object(r.jsx)("span",{onClick:function(){return n(e)},children:e},e)}))]})]})},d=(n(16),function(e){var t=e.jobs,n=e.clickFilter,o=t.length>0;return Object(r.jsx)("ul",{className:"list_job",children:o?t.map((function(e){return Object(r.jsx)(u,{job:e,clickFilter:n},e.id)})):Object(r.jsx)("li",{children:"Sorry, no jobs yet"})})}),j=(n(17),function(e){var t=e.filter,n=e.dieFilter,o=e.clearFilter;return Object(r.jsx)("div",{className:"cont_filter",children:Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:t.map((function(e){return Object(r.jsxs)("div",{children:[Object(r.jsx)("p",{children:e}),Object(r.jsx)("span",{onClick:function(){return n(e)}})]},e)}))}),Object(r.jsx)("li",{children:Object(r.jsx)("p",{onClick:o,children:"Clear"})})]})})}),p=n(8);var g=function(){var e=Object(o.useState)([]),t=Object(i.a)(e,2),n=t[0],l=t[1],a=Object(o.useState)([]),u=Object(i.a)(a,2),g=u[0],f=u[1];Object(o.useEffect)((function(){return f(p)}),[]);var m=g.filter((function(e){var t=e.role,o=e.level,l=e.languages,a=e.tools;if(0===n.length)return!0;var i=[t,o];return a&&i.push.apply(i,Object(c.a)(a)),l&&i.push.apply(i,Object(c.a)(l)),i.some((function(e){return n.includes(e)}))}));return Object(r.jsxs)(o.Fragment,{children:[Object(r.jsx)(s,{}),n.length>0?Object(r.jsx)(j,{filter:n,dieFilter:function(e){l(n.filter((function(t){return t!==e})))},clearFilter:function(){l([])}}):null,Object(r.jsx)(d,{jobs:m,clickFilter:function(e){n.includes(e)||l([].concat(Object(c.a)(n),[e]))}})]})};a.a.render(Object(r.jsx)(g,{}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.eb9740e3.chunk.js.map