(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{196:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(208),i=a(277),s=a(278),c=a(203),o=a(243),u=function(e){var t=e.icon,a=e.description,n=e.title;return l.a.createElement(i.a,{md:"4"},l.a.createElement("span",{className:"fa-stack fa-4x"},l.a.createElement(c.a,{icon:t})),l.a.createElement("h4",{className:"section-heading"},n),l.a.createElement("p",{className:"text-muted"},a))},m=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("section",{id:"services",className:"bg-light"},l.a.createElement(s.a,null,l.a.createElement(i.a,{lg:"12",className:"text-center"},l.a.createElement("h2",{className:"text-uppercase section-heading"},"Services"))),l.a.createElement(s.a,{className:"text-center"},l.a.createElement(u,{title:"Workspace",description:"We provide space for students to study, work on projects or just hang out.",icon:o.b}),l.a.createElement(u,{title:"Tool Access",description:"We provide various tools and equipment to help you build your dreams.",icon:o.c}),l.a.createElement(u,{title:"Workshops",description:"Anyone can teach a workshop about anything. Interested in teaching something click here.",icon:o.a})),l.a.createElement(s.a,{className:"text-center"},l.a.createElement(i.a,{sm:"12"},l.a.createElement("a",{href:"https://utdesignmakerspace.typeform.com/to/JcM2uX",className:"join-btn"},"Join Now")))))},d=a(244),p=a.n(d)()({loader:function(){return Promise.all([a.e(9),a.e(10)]).then(a.bind(null,281))},loading:function(){return l.a.createElement("div",null,"Loading...")}}),h=function(){return l.a.createElement("div",null,l.a.createElement(p,null))},f=(a(39),a(245)),E=a(279),g=a(280),b=a(204),N=a(206),v=function(e){var t=e.type,a=e.url,n=null;switch(t){case"github":n=b.b;break;case"linkedin":n=b.d;break;case"twitter":n=b.g;break;default:n=null}return l.a.createElement("li",{className:"list-inline-item"},l.a.createElement("a",{className:t+"-btn",href:a},l.a.createElement(c.a,{icon:n})))},k=function(e){var t=e.name,a=e.title,n=e.socialMedia,r=e.img;return l.a.createElement(i.a,{xs:"12",sm:"6",md:"4"},l.a.createElement("div",{className:"team-member"},l.a.createElement(E.a,{className:"rounded-circle mx-auto",src:r,style:{backgroundColor:"#C1393D"}}),l.a.createElement("h4",{className:"team-name"},t),l.a.createElement("p",{className:"text-muted"},a),l.a.createElement("ul",{className:"list-inline social-buttons"},n.map(function(e,t){return l.a.createElement(v,{type:e.type,url:e.url,key:t})}))))},w=function(e){var t=e.data;return l.a.createElement("section",{id:"team",className:"bg-dark"},l.a.createElement(g.a,null,l.a.createElement(s.a,null,l.a.createElement(i.a,{sm:"12",className:"text-center"},l.a.createElement("h2",{className:"text-uppercase section-heading"},"Team")))),l.a.createElement(g.a,null,l.a.createElement(s.a,null,t.allAirtable.edges.filter(function(e){return console.dir(e),void 0!==e.node.data.FirstName&&void 0!==e.node.data.LastName&&null!==e.node.data.FirstName&&null!==e.node.data.LastName}).map(function(e,t){console.dir(e);var n=e.node.data,r=n.FirstName,i=n.LastName,s=n.Github,c=n.Linkedin,o=n.Twitter,u=n.Role;n.Image;return l.a.createElement(k,{name:r+""+i,title:u,socialMedia:[{type:"github",url:s},{type:"linkedin",url:c},{type:"twitter",url:o}],img:a(246)("./"+r+"-Photo.png")})}))))},y=function(){return l.a.createElement(N.b,{query:"1486674488",render:function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(w,{data:e}))},data:f})},T=a(251);var x=function(e){var t,a;function n(t){var a;return(a=e.call(this)||this).onClickHandler=function(){a.setState({isOpen:!a.state.isOpen})},a.state={isOpen:!1},a}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){return l.a.createElement("li",null,l.a.createElement("span",{className:"faq-link",onClick:this.onClickHandler,"aria-expanded":"true"},this.state.isOpen?"- ":"+ ",this.props.question),l.a.createElement("div",{className:this.state.isOpen?"":"collapse"},l.a.createElement("p",null,this.props.answer)))},n}(l.a.Component),A=function(e){var t=e.data;return l.a.createElement("section",{id:"faq"},l.a.createElement(g.a,null,l.a.createElement(s.a,{className:"justify-content-center"},l.a.createElement(i.a,{lg:"12",className:"text-center"},l.a.createElement("h2",{className:"text-uppercase section-heading"},"FAQ")),l.a.createElement(i.a,{lg:"9"},l.a.createElement("ul",{id:"faq-list"},t.allAirtable.edges.filter(function(e){return null!==e.node.data.Answer&&null!==e.node.data.Question}).map(function(e,t){return l.a.createElement(x,{key:t,question:e.node.data.Question,answer:e.node.data.Answer})}))))))},L=function(){return l.a.createElement(N.b,{query:"1911036027",render:function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(A,{data:e}))},data:T})},F=a(283),C=a(282),P=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(F.a,{expand:"lg",style:{backgroundColor:"#c1393e"},className:"navbar navbar-expand-lg navbar-dark fixed-top"},l.a.createElement(F.a.Brand,{style:{fontFamily:"Montserrat"}},l.a.createElement(E.a,{src:a(259),width:70,style:{position:"relative",left:"-5px",marginRight:"10px"}}),"UTDesign Makerspace"),l.a.createElement(F.a.Toggle,{"aria-controls":"basic-navbar-nav"}),l.a.createElement(F.a.Collapse,{id:"basic-navbar-nav",className:"justify-content-end"},l.a.createElement(C.a,null,l.a.createElement(N.a,{className:"nav-link",to:"/#services"},"Services"),l.a.createElement(N.a,{className:"nav-link",to:"/#cal"},"Calendar"),l.a.createElement(N.a,{className:"nav-link",to:"/#team"},"Team"),l.a.createElement(N.a,{className:"nav-link",to:"/#faq"},"FAQ"),l.a.createElement(N.a,{className:"nav-link",to:"/#contact"},"Contact"),l.a.createElement(C.a.Link,{href:"http://wiki.utdmaker.space"},"Wiki"),l.a.createElement(C.a.Link,{href:"https://app.slack.com/client/TDM5QBZND/CDP5WT7JS",className:"slack-btn"},l.a.createElement(c.a,{icon:b.f}))))))},Q=function(e){e.siteTitle;return l.a.createElement("header",{className:"masthead",style:{backgroundImage:a(265)}},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"intro-text"},l.a.createElement("div",{className:"intro-lead-in"},l.a.createElement("span",null,"Welcome To Your Space")),l.a.createElement("div",{className:"intro-heading text-uppercase"}),l.a.createElement("a",{className:"btn btn-primary btn-xl text-uppercase js-scroll-trigger",role:"button",href:"#services"},"Learn more"))))};Q.defaultProps={siteTitle:""};var I=Q;t.default=function(){return l.a.createElement(r.a,null,l.a.createElement(P,null),l.a.createElement(I,null),l.a.createElement(m,null),l.a.createElement(h,null),l.a.createElement(y,null),l.a.createElement(L,null))}},202:function(e,t,a){"use strict";var n=a(205),l=a(0),r=a.n(l),i=a(213),s=a.n(i);function c(e){var t=e.description,a=e.lang,l=e.meta,i=e.title,c=n.data.site,o=t||c.siteMetadata.description;return r.a.createElement(s.a,{htmlAttributes:{lang:a},title:i,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:o},{property:"og:title",content:i},{property:"og:description",content:o},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:o}].concat(l)})}c.defaultProps={lang:"en",meta:[],description:""},t.a=c},205:function(e){e.exports={data:{site:{siteMetadata:{title:"UTDesign Makerspace",description:"The offical website for the UTDesign Makerspace",author:"Cameron Steele"}}}}},206:function(e,t,a){"use strict";a.d(t,"b",function(){return o});var n=a(0),l=a.n(n),r=a(66),i=a.n(r);a.d(t,"a",function(){return i.a});a(207),a(9).default.enqueue;var s=l.a.createContext({});function c(e){var t=e.staticQueryData,a=e.data,n=e.query,r=e.render,i=a?a.data:t[n]&&t[n].data;return l.a.createElement(l.a.Fragment,null,i&&r(i),!i&&l.a.createElement("div",null,"Loading (StaticQuery)"))}var o=function(e){var t=e.data,a=e.query,n=e.render,r=e.children;return l.a.createElement(s.Consumer,null,function(e){return l.a.createElement(c,{data:t,query:a,render:n||r,staticQueryData:e})})}},207:function(e,t,a){var n;e.exports=(n=a(216))&&n.default||n},208:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(203),i=a(204),s=function(){return l.a.createElement("ul",{className:"list-inline social-buttons"},l.a.createElement("li",{className:"list-inline-item"},l.a.createElement("a",{href:"https://twitter.com",className:"twitter-btn"},l.a.createElement(r.a,{icon:i.g}))),l.a.createElement("li",{className:"list-inline-item"},l.a.createElement("a",{href:"https://instagram.com",className:"instagram-btn"},l.a.createElement(r.a,{icon:i.c}))),l.a.createElement("li",{className:"list-inline-item"},l.a.createElement("a",{href:"https://facebook.com",className:"facebook-btn"},l.a.createElement(r.a,{icon:i.a}))),l.a.createElement("li",{className:"list-inline-item"},l.a.createElement("a",{href:"https://linkedin.com/",className:"linkedin-btn"},l.a.createElement(r.a,{icon:i.e}))))},c=function(e){e.children;return l.a.createElement("footer",{className:"footer"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row align-items-center"},l.a.createElement("div",{className:"col-md-4"},l.a.createElement("span",{className:"copyright"},"Copyright © UTDesign Makerspace ",(new Date).getFullYear())),l.a.createElement("div",{className:"col-md-4"},l.a.createElement(s,null)))))},o=a(202);a(214),t.a=function(e){var t=e.children;return"undefined"!=typeof window&&a(215)('a[href*="#"]'),l.a.createElement(l.a.Fragment,null,l.a.createElement(o.a,null),t,l.a.createElement(c,null))}},216:function(e,t,a){"use strict";a.r(t);a(23);var n=a(0),l=a.n(n),r=a(104);t.default=function(e){var t=e.location,a=e.pageResources;return a?l.a.createElement(r.a,Object.assign({location:t,pageResources:a},a.json)):null}},245:function(e){e.exports={data:{allAirtable:{edges:[{node:{data:{FirstName:null,LastName:null,Role:null,Github:null,Linkedin:null,Twitter:null,Image:null}}},{node:{data:{FirstName:null,LastName:null,Role:null,Github:null,Linkedin:null,Twitter:null,Image:null}}},{node:{data:{FirstName:null,LastName:null,Role:null,Github:null,Linkedin:null,Twitter:null,Image:null}}},{node:{data:{FirstName:null,LastName:null,Role:null,Github:null,Linkedin:null,Twitter:null,Image:null}}},{node:{data:{FirstName:null,LastName:null,Role:null,Github:null,Linkedin:null,Twitter:null,Image:null}}},{node:{data:{FirstName:"Cameron",LastName:"Steele",Role:"President",Github:"https://github.com/ATechAdventurer",Linkedin:"https://linkedin.com/in/ATechAdventurer",Twitter:"https://twitter.com/ATechAdventurer",Image:[{url:"https://dl.airtable.com/.attachments/13d2c4cf42a1b24cbae80ea354f80c55/42651f95/Cameron-Photo.png"}]}}},{node:{data:{FirstName:null,LastName:null,Role:null,Github:null,Linkedin:null,Twitter:null,Image:null}}},{node:{data:{FirstName:null,LastName:null,Role:null,Github:null,Linkedin:null,Twitter:null,Image:null}}},{node:{data:{FirstName:null,LastName:null,Role:null,Github:null,Linkedin:null,Twitter:null,Image:null}}},{node:{data:{FirstName:null,LastName:null,Role:null,Github:null,Linkedin:null,Twitter:null,Image:null}}},{node:{data:{FirstName:null,LastName:null,Role:null,Github:null,Linkedin:null,Twitter:null,Image:null}}}]}}}},246:function(e,t,a){var n={"./Antonio-Photo.png":247,"./Cameron-Photo.png":248,"./Sabrina-Photo.png":249,"./Victor-Photo.png":250};function l(e){var t=r(e);return a(t)}function r(e){var t=n[e];if(!(t+1)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t}l.keys=function(){return Object.keys(n)},l.resolve=r,e.exports=l,l.id=246},247:function(e,t,a){e.exports=a.p+"static/Antonio-Photo-0b2b103f1d329cb4bbd3011dc9beced6.png"},248:function(e,t,a){e.exports=a.p+"static/Cameron-Photo-acf4ad8d15c109df2b3756d827a5c9c4.png"},249:function(e,t,a){e.exports=a.p+"static/Sabrina-Photo-160822a40f19453c3816ae12974ca26b.png"},250:function(e,t,a){e.exports=a.p+"static/Victor-Photo-4d50a0b4bd37f59077518022aed8704d.png"},251:function(e){e.exports={data:{allAirtable:{edges:[{node:{data:{Answer:"If you are a student, faculty, or alumni of The University Of Texas at Dallas the space is completely free to use.",Question:"How much does it cost to use the space?"}}},{node:{data:{Answer:null,Question:null}}},{node:{data:{Answer:null,Question:null}}},{node:{data:{Answer:"Just send us an email at teach@utdmaker.space",Question:"How can I teach a workshop?"}}},{node:{data:{Answer:"A regularly updated list of equipment can be found at wiki.utdmaker.space/equipment",Question:"What equipment does the space have?"}}},{node:{data:{Answer:null,Question:null}}},{node:{data:{Answer:"A Makerspace is a place where people can share knowledge and tools to create. The possibilities are limitless—arts and crafts, electronics, 3D printing. The only limit is the ingenuity of our makerspace's members!",Question:"What is a Makerspace? "}}},{node:{data:{Answer:"Our address is 3000 Waterview Parkway, Richardson, TX. We are located in the SPN (Synergy Park North) building on the second floor. If you enter from the main entrance go up the right hand stairs and through the glass doors.",Question:"Where is the space?"}}},{node:{data:{Answer:"The only way you can get access to SPN is by taking the online training course https://utd.bioraft.com, completing the five trainings in the fabrication shop and volunteering 3 hours a week. You can get more information about this downstairs in the fabrication shop or emailing Gene Woten the shop manager at woten@utdallas.edu.",Question:"How can I have access? "}}},{node:{data:{Answer:"We aren't subsidised by the school so we have to pay for the filament and machines, to be able to afford to keep these services active we have to charge a small fee.",Question:"Why does it cost to use the 3D Printers?"}}},{node:{data:{Answer:"Nope we are 100% student run and lead.",Question:"Are there any makerspace employees?"}}}]}}}},259:function(e,t,a){e.exports=a.p+"static/Logo-bg-73df2749787beb8fba4bae6dd2ba2f43.webp"},265:function(e,t,a){e.exports=a.p+"static/background-89a3d9d8a14f373e121dc86f89753916.jpg"}}]);
//# sourceMappingURL=component---src-pages-index-js-2a59ba93fa02ef239a7e.js.map