(this.webpackJsonptiagofernandez=this.webpackJsonptiagofernandez||[]).push([[0],{110:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(12),r=a.n(o),c=(a(80),a(146)),s=a(147),l=a(136),d=a(155),p=a(156),h=a(67),g=a(145),m=a(54),u=a(141),b=a(138),j=a(143),v=a(112),w=a(152),f=a(13),y=a(26),x=a(157),O=a(149),k=a(154),S=a(142),A=a(68),C=Object(A.a)(n,{useCssModules:!1}),D=a(36),J=a.n(D),M=a(58),P=a.n(M),B=a(59),N=a.n(B),T=a(2);P()(J.a);var I=[{category:"Algorithms",score:2.5},{category:"Architecture",score:4.5},{category:"Databases",score:3.5},{category:"Frameworks",score:4.5},{category:"Infrastructure",score:3},{category:"Mobile",score:2.5},{category:"UI/UX",score:4},{category:"Web",score:4.5}];function L(){return Object(T.jsx)(N.a,{highcharts:J.a,options:{chart:{height:280,polar:!0,type:"line",width:360},title:{text:null,x:0},xAxis:{categories:I.map((function(e){return e.category})),labels:{style:{color:"#222"}},gridLineColor:"#ccc",tickmarkPlacement:"on",lineWidth:0},yAxis:{gridLineColor:"#ccc",gridLineInterpolation:"polygon",lineWidth:0,max:5,min:0,labels:{enabled:!1}},series:[{name:"Skills",data:I.map((function(e){return e.score})),pointPlacement:"on"}],plotOptions:{series:{tooltip:{pointFormatter:function(){var e=this.y;console.log(this);return"<b>".concat(e<=1?"Learning":e<=2?"Beginner":e<=3?"Intermediate":e<=4?"Advanced":"Expert","</b>")}}}},legend:{enabled:!1},tooltip:{enabled:!1},credits:{enabled:!1},exporting:{enabled:!1}}})}var R=a(60),z=a.n(R),E={"Amadeus IT Group S.A.":"https://www.amadeus.com",Android:"https://www.android.com",Ansible:"https://ansible.com",Ant:"https://ant.apache.org","Atech S/A":"https://www.atech.com.br","Audatex GmbH":"https://www.audatex.com",AWS:"https://aws.amazon.com",Backbone:"https://backbonejs.org",Celery:"http://www.celeryproject.org",Cypress:"https://cypress.io",D3:"https://d3js.org","Dotdash Inc.":"https://dotdash.com",Django:"https://djangoproject.com",Docker:"https://docker.com",Drools:"https://www.drools.org",EJB:"https://en.wikipedia.org/wiki/Enterprise_JavaBeans",Elasticsearch:"https://elastic.co/products/elasticsearch","European Innovation Academy S.A.":"https://www.inacademy.eu/",Go:"https://golang.org/",Gradle:"https://gradle.org",Grails:"https://grails.org",GraphQL:"https://graphql.org",Groovy:"https://groovy-lang.org",GWT:"https://www.gwtproject.org",Hibernate:"https://hibernate.org",Hive:"https://hive.apache.org","HP Inc.":"https://www8.hp.com/us/en/home.html",iOS:"https://developer.apple.com/ios/",Keycloak:"https://www.keycloak.org/",Kotlin:"https://kotlinlang.org/",Java:"https://www.java.com/",JavaScript:"https://developer.mozilla.org/en-US/docs/Web/JavaScript",JBoss:"https://wildfly.org",Jenkins:"https://www.jenkins.io",JiBX:"http://jibx.sourceforge.net",JRuby:"https://www.jruby.org",Jython:"https://www.jython.org",Logstash:"https://elastic.co/products/logstash",Marionette:"https://marionettejs.com",Maven:"https://maven.apache.org",Memcached:"https://memcached.org",MongoDB:"https://mongodb.com",MySQL:"https://mysql.com","Node.js":"https://nodejs.org",Nginx:"https://nginx.com","Objective-C":"https://en.wikipedia.org/wiki/Objective-C",OC4J:"https://docs.oracle.com/cd/B14099_19/web.1012/b14011/chap1.htm",OpenMap:"http://openmap-java.org/",Oracle9i:"https://docs.oracle.com/cd/B10501_01/server.920/a96531/ch1_over.htm","Pontifical Catholic University of S\xe3o Paulo":"http://www.pucsp.br/home",PostgreSQL:"https://postgresql.org",Play:"https://www.playframework.com",Python:"https://python.org",Rails:"https://rubyonrails.org",React:"https://reactjs.org",Redis:"https://redis.io",Ruby:"https://www.ruby-lang.org",Scala:"https://www.scala-lang.org",Sentry:"https://sentry.io",Spark:"https://spark.apache.org",Spring:"https://spring.io","SQL Server":"https://www.microsoft.com/en-us/sql-server/sql-server-downloads","State University of Campinas":"https://www.unicamp.br/unicamp/",Struts:"https://struts.apache.org",Swift:"https://swift.org/documentation/",Swing:"https://en.wikipedia.org/wiki/Swing_(Java)","Tamino XML Server":"https://en.wikipedia.org/wiki/Software_AG",Tomcat:"http://tomcat.apache.org","Telefonica S.A.":"https://telefonica.com",TypeScript:"https://www.typescriptlang.org","VMware Inc.":"https://vmware.com",Vue:"https://vuejs.org",WebLogic:"https://www.oracle.com/middleware/technologies/weblogic.html"},G=["Python","JavaScript","Java","Groovy","Go","Kotlin","Swift","Objective-C","Ruby","Scala","Django","Spring","React","Vue","Celery","Node.js","GraphQL","Hibernate","Drools","Rails","AWS","iOS","Android","Docker","PostgreSQL","MongoDB","MySQL","Redis","Memcached","Jenkins","Cypress","Nginx","Keycloak","Ansible","Gradle","Maven"],W=Object(l.a)((function(e){return Object(d.a)({root:{"& text":{cursor:"pointer"}}})}));function F(e){var t=W(e);return Object(T.jsx)("div",{className:t.root,children:Object(T.jsx)(z.a,{data:G.reverse().map((function(e,t){return{text:e,value:t+1}})),height:300,font:"Impact",fontSizeMapper:function(e){return 8*Math.log2(e.value)},padding:2,onWordClick:function(e){var t=E[e.text];t&&window.open(t,"_blank")},rotate:function(e){return 90*~~(2*Math.random())}})})}var H=Object(l.a)((function(e){return Object(d.a)({avatar:{height:56,width:56},chartsContainer:{padding:e.spacing(1),overflow:"hidden"},language:{cursor:"pointer",padding:e.spacing(1)},name:{paddingBottom:e.spacing(.5)},personality:{height:21,width:21},popover:{marginTop:e.spacing(2)}})})),_={Github:f.g,Instapaper:f.k,LinkedIn:f.i,PDF:f.e,Personality:f.r,Pinboard:f.o,StackOverflow:f.n,Twitter:f.q};function Q(e){var t=H(e),a=e.contact,n=i.a.useState(null),o=Object(y.a)(n,2),r=o[0],c=o[1];return Object(T.jsxs)(b.a,{container:!0,justify:"space-between",spacing:2,children:[Object(T.jsx)(b.a,{item:!0,children:Object(T.jsxs)(b.a,{container:!0,spacing:2,children:[Object(T.jsx)(w.a,{only:["xs"],children:Object(T.jsxs)(b.a,{item:!0,children:[Object(T.jsx)(x.a,{alt:a.name,className:t.avatar,onMouseEnter:function(e){c(e.currentTarget)},src:"/logo.png"}),Object(T.jsx)(O.a,{anchorEl:r,anchorOrigin:{horizontal:"left",vertical:"bottom"},className:t.popover,onClose:function(){return c(null)},open:Boolean(r),transformOrigin:{horizontal:"left",vertical:"top"},children:Object(T.jsxs)(b.a,{container:!0,className:t.chartsContainer,spacing:1,children:[Object(T.jsx)(b.a,{item:!0,children:Object(T.jsx)(L,{})}),Object(T.jsx)(b.a,{item:!0,children:Object(T.jsx)(F,{})})]})})]})}),Object(T.jsx)(b.a,{item:!0,children:Object(T.jsxs)(b.a,{container:!0,direction:"column",children:[Object(T.jsx)(b.a,{item:!0,children:Object(T.jsx)(v.a,{className:t.name,variant:"h5",children:a.name})}),Object(T.jsx)(b.a,{item:!0,children:Object(T.jsx)(b.a,{container:!0,spacing:1,children:Object.entries(a.links).map((function(e){var t=Object(y.a)(e,2),a=t[0],n=t[1],i=_[a];return Object(T.jsx)(b.a,{item:!0,children:Object(T.jsx)(k.a,{title:a,children:Object(T.jsx)(S.a,{href:n,color:"textSecondary",variant:"body2",target:"_blank",rel:"noopener",children:Object(T.jsx)(i,{size:"1.5em"})})})},a)}))})})]})})]})}),Object(T.jsx)(b.a,{item:!0,children:Object(T.jsxs)(b.a,{container:!0,direction:"column",alignItems:"flex-end",spacing:1,children:[Object(T.jsx)(b.a,{item:!0,children:a.languages.map((function(e){return Object(T.jsx)(k.a,{title:e.level,children:Object(T.jsx)("span",{className:t.language,children:Object(T.jsx)(C,{code:e.code,size:"lg"})})},e.code)}))}),Object(T.jsx)(b.a,{item:!0,children:Object(T.jsx)(S.a,{href:"mailto:".concat(a.email),variant:"body2",target:"_blank",rel:"noopener",children:a.email})})]})})]})}var U=Object(l.a)((function(e){return Object(d.a)({bold:{fontWeight:500}})}));function q(e){var t=U(e),a=e.education;return Object(T.jsxs)(b.a,{container:!0,spacing:1,children:[Object(T.jsx)(b.a,{item:!0,children:Object(T.jsx)(v.a,{className:t.bold,children:a.title})}),Object(T.jsx)(b.a,{item:!0,children:Object(T.jsx)(v.a,{className:t.bold,children:"\u2013"})}),Object(T.jsx)(b.a,{item:!0,children:Object(T.jsx)(S.a,{href:E[a.institution],target:"_blank",rel:"noopener",children:Object(T.jsx)(v.a,{className:t.bold,children:a.institution})})}),Object(T.jsx)(b.a,{item:!0,children:Object(T.jsxs)(v.a,{variant:"body1",children:[a.country,", ",a.year]})})]})}var V=a(151),K=a(150),X=a(148),Y=Object(l.a)((function(e){return Object(d.a)({bold:{fontWeight:500},root:{paddingBottom:e.spacing(2)}})}));function Z(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"/";if(-1===e.indexOf(t))return null;var a=e.split(t),n=Object(y.a)(a,2),i=n[0],o=n[1];return new Date(parseInt(o),parseInt(i),1)}function $(e){var t=Z(e[0]),a=Z(e[1]),n=e.join(" \u2013 ");if(t&&a){var i=Object(K.a)(a,t),o=Math.floor(i/12),r=i%12,c=Object(X.a)({months:r,years:o},{format:["years","months"]});return"".concat(n," \u2022 ").concat(c)}return n}function ee(e){var t=Y(e),a=e.experience;return Object(T.jsxs)(b.a,{container:!0,className:t.root,spacing:1,children:[Object(T.jsx)(b.a,{item:!0,xs:12,children:Object(T.jsx)(j.a,{})}),Object(T.jsx)(b.a,{item:!0,xs:12,children:Object(T.jsxs)(b.a,{container:!0,spacing:1,children:[Object(T.jsx)(b.a,{item:!0,children:Object(T.jsx)(v.a,{className:t.bold,children:a.title})}),Object(T.jsx)(b.a,{item:!0,children:Object(T.jsx)(v.a,{className:t.bold,children:"\u2013"})}),Object(T.jsx)(b.a,{item:!0,children:Object(T.jsx)(S.a,{href:E[a.company],target:"_blank",rel:"noopener",children:Object(T.jsx)(v.a,{className:t.bold,children:a.company})})}),Object(T.jsx)(b.a,{item:!0,children:Object(T.jsx)(v.a,{variant:"body1",children:a.location})}),Object(T.jsx)(b.a,{item:!0,children:Object(T.jsx)(v.a,{variant:"body1",children:$(a.period)})})]})}),a.description.length>0&&Object(T.jsx)(b.a,{item:!0,xs:12,children:a.description.map((function(e,t){return Object(T.jsx)(v.a,{gutterBottom:!0,variant:"body1",component:"li",children:e},t)}))}),Object(T.jsx)(w.a,{only:["xs"],children:Object(T.jsx)(b.a,{item:!0,md:12,children:Object(T.jsx)(b.a,{container:!0,spacing:1,children:a.technologies.map((function(e,t){return Object(T.jsx)(b.a,{item:!0,children:Object(T.jsx)(V.a,{label:e,size:"small",variant:"outlined",onClick:function(){var t=E[e];window.open(t,"_blank")}})},t)}))})})})]})}var te=a(144),ae=a(6),ne=[{name:"Mind",description:"how we interact with our environment.",edges:[{label:"Extraverted",value:40},{label:"Intraverted",value:60}],link:"https://www.16personalities.com/articles/mind-introverted-vs-extraverted"},{name:"Energy",description:"where we direct our mental energy.",edges:[{label:"Intuitive",value:39},{label:"Observant",value:61}],link:"https://www.16personalities.com/articles/energy-intuitive-vs-observant"},{name:"Nature",description:"how we make decisions and cope with emotions.",edges:[{label:"Thinking",value:61},{label:"Feeling",value:39}],link:"https://www.16personalities.com/articles/nature-thinking-vs-feeling"},{name:"Tactics",description:"our approach to work, planning and decision-making.",edges:[{label:"Judging",value:74},{label:"Prospecting",value:26}],link:"https://www.16personalities.com/articles/tactics-judging-vs-prospecting"},{name:"Identity",description:"how confident we are in our abilities and decisions.",edges:[{label:"Assertive",value:81},{label:"Turbulent",value:19}],link:"https://www.16personalities.com/articles/identity-assertive-vs-turbulent"}],ie=Object(l.a)((function(e){return Object(d.a)({trait:{color:e.palette.text.secondary,paddingBottom:e.spacing(.25)}})}));function oe(e){var t=ie(e);return Object(T.jsx)("div",{children:ne.map((function(e,a){var n=e.description,i=e.edges,o=e.link,r=e.name,c=Object(y.a)(i,2),s=c[0],l=c[1],p="#f0f0f0",h="#008adb";if(s.value>l.value){var g=[h,p];p=g[0],h=g[1]}var m=Object(ae.a)((function(e){return Object(d.a)({bar:{backgroundColor:p},colorPrimary:{backgroundColor:h},root:{borderRadius:e.spacing(2.5),height:20}})}))(te.a);return Object(T.jsxs)(b.a,{container:!0,className:t.trait,spacing:2,children:[Object(T.jsxs)(b.a,{item:!0,xs:3,style:{textAlign:"right"},children:[i[0].label," ",s.value,"%"]}),Object(T.jsx)(b.a,{item:!0,xs:6,style:{cursor:"pointer"},onClick:function(){return window.open(o,"_blank")},children:Object(T.jsx)(k.a,{title:"".concat(r,": ").concat(n),children:Object(T.jsx)(m,{variant:"determinate",value:s.value})})}),Object(T.jsxs)(b.a,{item:!0,xs:3,children:[l.value,"% ",i[1].label]})]},a)}))})}var re=Object(l.a)((function(e){return Object(d.a)({root:{padding:e.spacing(3)}})})),ce={summary:["\ud83d\udc68\ud83c\udffb\u200d\u2708\ufe0f","\ud83d\udc77\ud83c\udffb\u200d\u2642\ufe0f","\ud83e\uddd9\ud83c\udffb\u200d\u2642\ufe0f","\ud83d\udc68\ud83c\udffb\u200d\ud83c\udfa8","\ud83d\udc68\ud83c\udffb\u200d\ud83d\udcbb"],hobbies:[f.h,f.m,f.j,f.l,f.a,f.f,f.p,f.d,f.c,f.b]};function se(e){var t=re(e),a=e.resume;return a.summary.forEach((function(e,t){if(/N\+/.test(e)){var n=function(e,t){t=t||new Date;var a=Date.UTC(e.getFullYear(),e.getMonth(),e.getDate()),n=Date.UTC(t.getFullYear(),t.getMonth(),t.getDate()),i=Math.floor((n-a)/864e5);return Math.ceil(i/365)}(new Date("2003-01-01"));a.summary[t]=e.replace("N+","".concat(n,"+"))}})),Object(T.jsx)(u.a,{className:t.root,children:Object(T.jsxs)(b.a,{container:!0,spacing:2,children:[Object(T.jsx)(b.a,{item:!0,xs:12,children:Object(T.jsx)(Q,{contact:a.contact})}),Object(T.jsx)(b.a,{item:!0,xs:12,children:Object(T.jsx)(j.a,{})}),Object(T.jsx)(b.a,{item:!0,xs:12,children:Object(T.jsxs)(b.a,{container:!0,justify:"space-between",spacing:2,children:[Object(T.jsx)(b.a,{item:!0,lg:7,children:a.summary.map((function(e,t){return Object(T.jsx)(v.a,{gutterBottom:!0,variant:"body1",children:"".concat(ce.summary[t]," ").concat(e)},t)}))}),Object(T.jsx)(w.a,{only:["xs","sm","md"],children:Object(T.jsx)(b.a,{item:!0,lg:5,children:Object(T.jsx)(oe,{})})})]})}),Object(T.jsx)(b.a,{item:!0,xs:12,children:a.experience.map((function(e,t){return Object(T.jsx)(ee,{experience:e},t)}))}),Object(T.jsx)(b.a,{item:!0,xs:12,style:{marginTop:-8},children:Object(T.jsx)(j.a,{})}),Object(T.jsx)(b.a,{item:!0,xs:12,children:Object(T.jsx)(b.a,{container:!0,spacing:1,children:a.education.map((function(e,t){return Object(T.jsx)(b.a,{item:!0,xs:12,children:Object(T.jsx)(q,{education:e})},t)}))})}),!1]})})}var le=a(66),de=Object(l.a)((function(e){return Object(d.a)({printButton:{backgroundColor:"whitesmoke",margin:e.spacing(1)},printContainer:{marginBottom:e.spacing(-2),padding:e.spacing(1,0,0,3)},root:{padding:e.spacing(3)}})})),pe=function(e){var t=de(e);return Object(T.jsxs)(g.a,{theme:Object(p.a)(Object(h.a)(le)),children:[Object(T.jsx)(c.a,{}),Object(T.jsx)(s.a,{className:t.root,maxWidth:"lg",children:Object(T.jsx)(se,{resume:m})})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(Object(T.jsx)(pe,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},54:function(e){e.exports=JSON.parse('{"contact":{"name":"Tiago Fernandez","email":"tiago.fernandez@gmail.com","languages":[{"code":"us","level":"Fluent"},{"code":"fr","level":"Fluent"},{"code":"es","level":"Proficient"},{"code":"br","level":"Native"}],"links":{"Github":"http://github.com/tiagofernandez","Twitter":"https://twitter.com/tiagofernandez","LinkedIn":"https://www.linkedin.com/in/tiagofernandez","StackOverflow":"https://stackoverflow.com/users/75265/tiago-fernandez?tab=favorites","Instapaper":"https://www.instapaper.com/p/tiagofernandez","Pinboard":"https://pinboard.in/u:tiagofernandez","Personality":"https://www.16personalities.com/istj-personality","PDF":"https://tiagofernandez.github.io/tiago-fernandez.pdf"}},"summary":["Effective tech leader with customer focus and tenacity to deliver high quality results.","Passionate full-stack engineer with N+ years of experience in software development.","Hands-on architect with deep technical knowledge and design patterns expertise.","Talented developer with remarkable design aptitude and special attention to details.","Pragmatic programmer with strong analytical thinking and problem-solving skills."],"experience":[{"title":"Senior Software Engineer","company":"VMware Inc.","period":["7/2021","Present"],"location":"Madrid, ES","description":[],"technologies":[]},{"title":"Technical Leader","company":"Dotdash Inc.","period":["5/2018","7/2021"],"location":"New York, US","description":["Led engineering teams in Spain and Eastern Europe, while coordinating with stakeholders in the US to boost the publishing organization.","Spearheaded the development of an analytical dashboard, which provided 300+ users actionable insights and exploratory data about the company\'s brands.","Built an end-to-end query builder framework for advanced search engines, used by analysts to create complex filters with a fluent interface.","Designed reusable components and archetypes for full-stack applications, to empower developers and promote modern codebases.","Played a key role implementing cross-app features, while mentoring less-experienced peers to foster productivity and groom talent."],"technologies":["Python","JavaScript","Django","Celery","React","Vue","Cypress","AWS","Docker","Keycloak","PostgreSQL","Memcached","Redis","Jenkins","Sentry"]},{"title":"Data Visualization Engineer","company":"Telefonica S.A.","period":["1/2017","5/2018"],"location":"Madrid, ES","description":["Led the development of a suite of analytical products, delivering market insights and relevant information in relation to competitors.","Built a tool to improve decision making on best rates, used by sales teams in 14+ countries to reduce the churn rate and increase loyalty.","Implemented workflows and complex data visualizations, to guide product teams into enriching customer data and boosting local businesses."],"technologies":["Python","JavaScript","Django","React","GraphQL","D3","Celery","Docker","Ansible","MySQL","Elasticsearch","Spark","Hive"]},{"title":"IT Mentor","company":"European Innovation Academy S.A.","period":["7/2016","7/2017"],"location":"Lisbon, PT","description":["Provided advice and guidance to multi-disciplinary teams, offering an experiential learning opportunity with deep insight into the startup life.","Coached students to consider and weigh potential consequences of decisions and actions, so that they avoid pitfalls and predictable surprises.","Encouraged mentees to move out of their comfort zones and take risks when appropriate, in order to move forward and innovate."],"technologies":["Objective-C","iOS","Java","Android","Ruby","Rails","Python","Django","JavaScript","Node.js","Groovy","Grails","Scala","Play"]},{"title":"Research Engineer","company":"Amadeus IT Group S.A.","period":["7/2013","12/2016"],"location":"Nice, FR","description":["Spearheaded the development of a meta-search-based travel website, empowering users to find the best flights and plan their trips collaboratively.","Created a Rails-backed iOS application for managing travel expenses, featuring the capture of receipts with OCR technology and e-mail reports.","Played a major role in a virtual interlining project, allowing travelers to connect flights from competitor airlines onto a single itinerary."],"technologies":["Python","Django","Ruby","Rails","Objective-C","iOS","JavaScript","Backbone","Marionette","Docker","MongoDB","Ansible","Logstash"]},{"title":"Software Architect","company":"Amadeus IT Group S.A.","period":["5/2008","6/2013"],"location":"Nice, FR","description":["Designed Java middleware architecture and developed reusable components on large-scale systems running 50+ million bookings per month.","Researched JVM-based languages and created a sandboxed scripting engine, enabling 3rd-party customization to products via a cloud platform.","Supervised development teams throughout a division with 300+ engineers, while providing technical guidance and advocating best practices."],"technologies":["Java","Groovy","Spring","Hibernate","JRuby","Jython","GWT","Play","JiBX","Gradle","Maven","Ant","WebLogic","SQL Server"]},{"title":"Software Engineer","company":"HP Inc.","period":["1/2007","4/2008"],"location":"Nice, FR","description":["Led the development of a vast variety of tools, having as main objective to facilitate the global data center consolidation process.","Reverse engineered a legacy application written in ASP.NET and rebuilt it to leverage a rules engine for classifying documents."],"technologies":["Java","Drools","Spring","Hibernate","Tomcat","Tamino XML Server"]},{"title":"Web Developer","company":"Audatex GmbH","period":["10/2005","12/2006"],"location":"Zurich, CH","description":["Developed claim solutions to facilitate the communication between insurances, body-repair shops, and assessors in 40+ countries.","Supported a module for placement of wrecks in an electronic auction, open to qualified professional buyers."],"technologies":["Java","Struts","EJB","JBoss","OC4J","Oracle9i"]},{"title":"Software Developer","company":"Atech S/A","period":["9/2003","9/2005"],"location":"S\xe3o Paulo, BR","description":["Developed a client-server application for managing flight operations, featuring a tracking module for storing real-time data.","Built components to display aeronautical routes and weather satellite graphics on an interactive world map."],"technologies":["Java","Swing","OpenMap","Spring","Hibernate","JBoss"]}],"education":[{"title":"M.S. Software Engineering","institution":"State University of Campinas","country":"Brazil","year":2004},{"title":"B.S. Computer Science","institution":"Pontifical Catholic University of S\xe3o Paulo","country":"Brazil","year":2003}],"hobbies":["Programming","Traveling","Music","Dancing","Activities","Movies","TV Series","Social Games","Chess","Reading"]}')},66:function(e){e.exports=JSON.parse('{"palette":{"common":{"black":"#000","white":"#fff"},"background":{"paper":"#fff","default":"#fafafa"},"primary":{"light":"rgba(88, 165, 240, 1)","main":"rgba(2, 119, 189, 1)","dark":"rgba(0, 76, 140, 1)","contrastText":"#fff"},"secondary":{"light":"rgba(255, 100, 52, 1)","main":"rgba(221, 44, 0, 1)","dark":"rgba(163, 0, 0, 1)","contrastText":"#fff"},"error":{"light":"rgba(255, 158, 64, 1)","main":"rgba(255, 109, 0, 1)","dark":"rgba(196, 60, 0, 1)","contrastText":"#fff"},"text":{"primary":"rgba(0, 0, 0, 0.87)","secondary":"rgba(0, 0, 0, 0.54)","disabled":"rgba(0, 0, 0, 0.38)","hint":"rgba(0, 0, 0, 0.38)"}}}')},80:function(e,t,a){}},[[110,1,2]]]);
//# sourceMappingURL=main.2bec358b.chunk.js.map