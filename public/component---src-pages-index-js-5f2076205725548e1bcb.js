(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{193:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(202),c=t(272),s=t(273),i=t(200),o=t(238),m=function(e){var a=e.icon,t=e.description,n=e.title;return r.a.createElement(c.a,{md:"4"},r.a.createElement("span",{className:"fa-stack fa-4x"},r.a.createElement(i.a,{icon:a})),r.a.createElement("h4",{className:"section-heading"},n),r.a.createElement("p",{className:"text-muted"},t))},u=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{id:"services",className:"bg-light"},r.a.createElement(s.a,null,r.a.createElement(c.a,{lg:"12",className:"text-center"},r.a.createElement("h2",{className:"text-uppercase section-heading"},"Services"))),r.a.createElement(s.a,{className:"text-center"},r.a.createElement(m,{title:"Workspace",description:"We provide space for students to study, work on projects or just hang out.",icon:o.b}),r.a.createElement(m,{title:"Tool Access",description:"We provide various tools and equipment to help you build your dreams.",icon:o.c}),r.a.createElement(m,{title:"Workshops",description:"Anyone can teach a workshop about anything. Interested in teaching something click here.",icon:o.a})),r.a.createElement(s.a,{className:"text-center"},r.a.createElement(c.a,{sm:"12"},r.a.createElement("a",{href:"https://utdesignmakerspace.typeform.com/to/JcM2uX",className:"join-btn"},"Join Now")))))},d=t(274),p=t(239),h=t(246),E=t.n(h),f=t(247),g=t.n(f),b=t(248),v=t.n(b);var k=function(e){var a,t;function n(){var a;return(a=e.call(this)||this).handleEventLoad=function(e){console.dir(e)},a.handleDateClick=function(e){e.jsEvent.preventDefault(),console.dir(e)},a.state={events:[]},a}return t=e,(a=n).prototype=Object.create(t.prototype),a.prototype.constructor=a,a.__proto__=t,n.prototype.render=function(){return r.a.createElement("section",{id:"cal"},r.a.createElement(d.a,null,r.a.createElement(s.a,null,r.a.createElement(c.a,{sm:"12"},r.a.createElement(p.a,{defaultView:"dayGridMonth",plugins:[E.a,v.a,g.a],googleCalendarApiKey:"AIzaSyCSNMxYW6PAh1QM0woCWwRnmZKZtm_6sFw",events:{googleCalendarId:"8sv5eeliouchn2dodnoqb5tj0g@group.calendar.google.com"},eventClick:this.handleDateClick,eventRender:this.handleEventLoad})))))},n}(r.a.Component),y=(t(39),t(275)),N=t(201),w=t(249),x=t.n(w),C=function(e){var a=e.type,t=e.url,n=null;switch(a){case"github":n=N.b;break;case"linkedin":n=N.d;break;case"twitter":n=N.g;break;default:n=null}return r.a.createElement("li",{className:"list-inline-item"},r.a.createElement("a",{className:a+"-btn",href:t},r.a.createElement(i.a,{icon:n})))},q=function(e){var a=e.name,t=e.title,n=e.socialMedia,l=e.img;return r.a.createElement(c.a,{xs:"12",sm:"6",md:"4"},r.a.createElement("div",{className:"team-member"},r.a.createElement(y.a,{className:"rounded-circle mx-auto",src:l,style:{backgroundColor:"#C1393D"}}),r.a.createElement("h4",{className:"team-name"},a),r.a.createElement("p",{className:"text-muted"},t),r.a.createElement("ul",{className:"list-inline social-buttons"},n.map(function(e,a){return r.a.createElement(C,{type:e.type,url:e.url,key:a})}))))},T=function(){return r.a.createElement(x.a,{id:"team"},r.a.createElement("section",{id:"team",className:"bg-dark"},r.a.createElement(d.a,null,r.a.createElement(s.a,null,r.a.createElement(q,{name:"Cameron Steele",title:"President",socialMedia:[{type:"github",url:"https://github.com/ATechAdventurer"},{type:"linkedin",url:"https://linkedin.com/in/ATechAdventurer"}],img:t(254)})))))};var W=function(e){var a,t;function n(a){var t;return(t=e.call(this)||this).onClickHandler=function(){t.setState({isOpen:!t.state.isOpen})},t.state={isOpen:!1},t}return t=e,(a=n).prototype=Object.create(t.prototype),a.prototype.constructor=a,a.__proto__=t,n.prototype.render=function(){return r.a.createElement("li",null,r.a.createElement("span",{className:"faq-link",onClick:this.onClickHandler,"aria-expanded":"true"},this.props.question),r.a.createElement("div",{className:this.state.isOpen?"":"collapse"},r.a.createElement("p",null,this.props.answer)))},n}(r.a.Component),A=function(e){return r.a.createElement("section",{id:"faq"},r.a.createElement(d.a,null,r.a.createElement(s.a,{className:"justify-content-center"},r.a.createElement(c.a,{lg:"12",className:"text-center"},r.a.createElement("h2",{className:"text-uppercase section-heading"},"FAQ")),r.a.createElement(c.a,{lg:"9"},r.a.createElement("ul",{id:"faq-list"},r.a.createElement(W,{question:"How much does it cost to use the space?",answer:"If you are a student, faculty, or alumni of The University Of Texas at Dallas the space is completely free to use."}),r.a.createElement(W,{question:"Where is the space?",answer:"Our address is 3000 Waterview Parkway, Richardson, TX. We are located in the SPN (Synergy Park North) building on the second floor. If you enter from the main entrance go up the right hand stairs and through the glass doors."}),r.a.createElement(W,{question:"Are there any makerspace employees?",answer:"Nope we are 100% student run and lead."}),r.a.createElement(W,{question:"Why does it cost to use the 3D Printers?",answer:"We aren't subsidised by the school so we have to pay for the filament and machines, to be able to afford to keep these services active we have to charge a small fee."}),r.a.createElement(W,{question:"How can I teach a workshop?",answer:"Just send us an email at teach@utdmaker.space"}),r.a.createElement(W,{question:"What equipment does the space have?",answer:"A regularly updated list of equipment can be found at wiki.utdmaker.space/equipment"}),r.a.createElement(W,{question:"How can I have access? ",answer:"The only way you can get access to SPN is by taking the online training course https://utd.bioraft.com, completing the five trainings in the fabrication shop and volunteering 3 hours a week. You can get more information about this downstairs in the fabrication shop or emailing Gene Woten the shop manager at woten@utdallas.edu."}),r.a.createElement(W,{question:"What is a Makerspace? ",answer:"A Makerspace is a place where people can share knowledge and tools to create. The possibilities are limitless—arts and crafts, electronics, 3D printing. The only limit is the ingenuity of our makerspace's members!"}))))))},j=t(277),L=t(276),M=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(j.a,{expand:"lg",style:{backgroundColor:"#c1393e"},className:"navbar navbar-expand-lg navbar-dark fixed-top"},r.a.createElement(j.a.Brand,{style:{fontFamily:"Montserrat"}},r.a.createElement(y.a,{src:t(263),width:70,style:{position:"relative",left:"-5px",marginRight:"10px"}}),"UTDesign Makerspace"),r.a.createElement(j.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(j.a.Collapse,{id:"basic-navbar-nav",className:"justify-content-end"},r.a.createElement(L.a,null,r.a.createElement(L.a.Link,null,"Services"),r.a.createElement(L.a.Link,null,"Calendar"),r.a.createElement(L.a.Link,null,"Team"),r.a.createElement(L.a.Link,null,"FAQ"),r.a.createElement(L.a.Link,null,"Contact"),r.a.createElement(L.a.Link,null,"Wiki"),r.a.createElement(L.a.Link,{className:"slack-btn"},r.a.createElement(i.a,{icon:N.f}))))))},D=function(e){e.siteTitle;return r.a.createElement("header",{className:"masthead",style:{backgroundImage:t(269)}},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"intro-text"},r.a.createElement("div",{className:"intro-lead-in"},r.a.createElement("span",null,"Welcome To Your Space")),r.a.createElement("div",{className:"intro-heading text-uppercase"}),r.a.createElement("a",{className:"btn btn-primary btn-xl text-uppercase js-scroll-trigger",role:"button",href:"#services"},"Learn more"))))};D.defaultProps={siteTitle:""};var S=D;a.default=function(){return r.a.createElement(l.a,null,r.a.createElement(M,null),r.a.createElement(S,null),r.a.createElement(u,null),r.a.createElement(k,null),r.a.createElement(T,null),r.a.createElement(A,null))}},202:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(200),c=t(201),s=function(){return r.a.createElement("ul",{className:"list-inline social-buttons"},r.a.createElement("li",{className:"list-inline-item"},r.a.createElement("a",{href:"https://twitter.com",className:"twitter-btn"},r.a.createElement(l.a,{icon:c.g}))),r.a.createElement("li",{className:"list-inline-item"},r.a.createElement("a",{href:"https://instagram.com",className:"instagram-btn"},r.a.createElement(l.a,{icon:c.c}))),r.a.createElement("li",{className:"list-inline-item"},r.a.createElement("a",{href:"https://facebook.com",className:"facebook-btn"},r.a.createElement(l.a,{icon:c.a}))),r.a.createElement("li",{className:"list-inline-item"},r.a.createElement("a",{href:"https://linkedin.com/",className:"linkedin-btn"},r.a.createElement(l.a,{icon:c.e}))))},i=function(e){e.children;return r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row align-items-center"},r.a.createElement("div",{className:"col-md-4"},r.a.createElement("span",{className:"copyright"},"Copyright © UTDesign Makerspace ",(new Date).getFullYear())),r.a.createElement("div",{className:"col-md-4"},r.a.createElement(s,null)))))};t(207),a.a=function(e){var a=e.children;return r.a.createElement(r.a.Fragment,null,a,r.a.createElement(i,null))}},254:function(e,a,t){e.exports=t.p+"static/Cameron-Photo-acf4ad8d15c109df2b3756d827a5c9c4.png"},263:function(e,a,t){e.exports=t.p+"static/Logo-bg-73df2749787beb8fba4bae6dd2ba2f43.webp"},269:function(e,a,t){e.exports=t.p+"static/background-89a3d9d8a14f373e121dc86f89753916.jpg"}}]);
//# sourceMappingURL=component---src-pages-index-js-5f2076205725548e1bcb.js.map