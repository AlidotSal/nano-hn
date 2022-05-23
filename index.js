(()=>{"use strict";var e={848:(e,t,n)=>{n.d(t,{Z:()=>r});var i=n(81),o=n.n(i),s=n(645),a=n.n(s)()(o());a.push([e.id,'body{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Fira Sans","Droid Sans","Helvetica Neue",sans-serif;font-size:15px;background-color:#f2f3f5;margin:0;padding-top:55px;color:#34495e;overflow-y:scroll}a{color:#34495e;text-decoration:none}.header{background-color:#ff4e6a;position:fixed;z-index:999;height:55px;top:0;left:0;right:0}.header .inner{max-width:800px;box-sizing:border-box;margin:0 auto;padding:15px 5px}.header a{color:#fff;line-height:24px;transition:color .15s ease;display:inline-block;vertical-align:middle;letter-spacing:.075em;margin-right:1.8em}.header a:hover{color:#fff}.header a.active{color:#fff;font-weight:400}.header a:nth-child(6){margin-right:0}.header .github{color:#000;font-size:.9em;margin:0;float:right}.logo{width:24px;margin-right:10px;display:inline-block;vertical-align:middle}.view{max-width:800px;margin:0 auto;position:relative}.fade-enter-active,.fade-exit-active{transition:all .2s ease}.fade-enter,.fade-exit-active{opacity:0}@media(max-width: 860px){.header .inner{padding:15px 30px}}@media(max-width: 600px){.header .inner{padding:15px}.header a{margin-right:1em}.header .github{display:none}}.news-view{padding-top:45px}.news-list,.news-list-nav{background-color:#fff;border-radius:2px}.news-list-nav{padding:15px 30px;position:fixed;text-align:center;top:55px;left:0;right:0;z-index:998;box-shadow:0 1px 2px rgba(0,0,0,.1)}.news-list-nav .page-link{margin:0 1em}.news-list-nav .disabled{color:#aaa}.news-list{position:absolute;margin:30px 0;width:100%;transition:all .5s cubic-bezier(0.55, 0, 0.1, 1)}.news-list ul{list-style-type:none;padding:0;margin:0}@media(max-width: 600px){.news-list{margin:10px 0}}.news-item{background-color:#fff;padding:20px 30px 20px 80px;border-bottom:1px solid #eee;position:relative;line-height:20px}.news-item .score{color:#335d92;font-size:1.1em;font-weight:700;position:absolute;top:50%;left:0;width:80px;text-align:center;margin-top:-10px}.news-item .host,.news-item .meta{font-size:.85em;color:#626262}.news-item .host a,.news-item .meta a{color:#626262;text-decoration:underline}.news-item .host a:hover,.news-item .meta a:hover{color:#335d92}.item-view-header{background-color:#fff;padding:1.8em 2em 1em;box-shadow:0 1px 2px rgba(0,0,0,.1)}.item-view-header h1{display:inline;font-size:1.5em;margin:0;margin-right:.5em}.item-view-header .host,.item-view-header .meta,.item-view-header .meta a{color:#626262}.item-view-header .meta a{text-decoration:underline}.item-view-comments{background-color:#fff;margin-top:10px;padding:0 2em .5em}.item-view-comments-header{margin:0;font-size:1.1em;padding:1em 0;position:relative}.item-view-comments-header .spinner{display:inline-block;margin:-15px 0}.comment-children{list-style-type:none;padding:0;margin:0}@media(max-width: 600px){.item-view-header h1{font-size:1.25em}}.comment-children .comment-children{margin-left:1.5em}.comment{border-top:1px solid #eee;position:relative}.comment .by,.comment .text,.comment .toggle{font-size:.9em;margin:1em 0}.comment .by{color:#626262}.comment .by a{color:#626262;text-decoration:underline}.comment .text{overflow-wrap:break-word}.comment .text a:hover{color:#335d92}.comment .text pre{white-space:pre-wrap}.comment .toggle{background-color:#fffbf2;padding:.3em .5em;border-radius:4px}.comment .toggle a{color:#626262;cursor:pointer}.comment .toggle.open{padding:0;background-color:rgba(0,0,0,0);margin-bottom:-0.5em}.user-view{background-color:#fff;box-sizing:border-box;padding:2em 3em}.user-view h1{margin:0;font-size:1.5em}.user-view .meta{list-style-type:none;padding:0}.user-view .label{display:inline-block;min-width:4em}.user-view .about{margin:1em 0}.user-view .links a{text-decoration:underline}',""]);const r=a},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",i=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),i&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),i&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,i,o,s){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(i)for(var r=0;r<this.length;r++){var l=this[r][0];null!=l&&(a[l]=!0)}for(var d=0;d<e.length;d++){var c=[].concat(e[d]);i&&a[c[0]]||(void 0!==s&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=s),n&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=n):c[2]=n),o&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=o):c[4]="".concat(o)),t.push(c))}},t}},81:e=>{e.exports=function(e){return e[1]}},860:e=>{e.exports=require("express")}},t={};function n(i){var o=t[i];if(void 0!==o)return o.exports;var s=t[i]={id:i,exports:{}};return e[i](s,s.exports,n),s.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{const e=require("node-fetch");var t=n.n(e);const i=require("compression");var o=n.n(i);const s=require("nano-jsx");var a=n.n(s);const r=require("fs");var l=n.n(r);const d=JSON.parse(l().readFileSync(__dirname+"/public/js/manifest.json",{encoding:"utf-8"})),c=(e,t=[],n=[])=>{let i=`\n<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <meta name="theme-color" content="#3367D6">\n    <link rel="apple-touch-icon" href="/public/img/pwa/icons-192.png">\n    ${t.join("\n")}\n  </head>\n\n  <body>\n    ${e}\n    ${n.join("\n")}\n\n    \x3c!-- <script>\n      "use strict";\n\n      if ('serviceWorker' in navigator) {\n        navigator.serviceWorker.register('/sw.js');\n      }\n    <\/script> --\x3e\n\n  </body> \n</html>\n`;return(()=>{for(const[e,t]of Object.entries(d))i.includes(e)&&(i=i.replace(e,t))})(),i};function m(){return(0,s.h)("header",{class:"header"},(0,s.h)("nav",{class:"inner"},(0,s.h)(s.Link,{href:"/"},(0,s.h)("strong",null,"HN")),(0,s.h)(s.Link,{href:"/newest/1"},(0,s.h)("strong",null,"New")),(0,s.h)(s.Link,{href:"/show/1"},(0,s.h)("strong",null,"Show")),(0,s.h)(s.Link,{href:"/ask/1"},(0,s.h)("strong",null,"Ask")),(0,s.h)(s.Link,{href:"/jobs/1"},(0,s.h)("strong",null,"Jobs")),(0,s.h)("a",{class:"github",href:"http://github.com/solidjs/solid",target:"_blank",rel:"noreferrer"},"Built with ",(0,s.h)("strong",null,"nano"),(0,s.h)("small",null,"JSX"))))}var h=n(848);const p=(0,s.withStyles)(h.Z)((e=>(0,s.h)(s.Fragment,null,(0,s.h)(m,null),e.children)));function u({story:e}){return(0,s.h)("li",{class:"news-item"},(0,s.h)("span",{class:"score"},e.points),(0,s.h)("span",{class:"title"},e.url&&!e.url.startsWith("item?id=")?(0,s.h)(s.Link,{href:`/item/${e.id}`},e.title):(0,s.h)(s.Fragment,null," ",(0,s.h)("a",{href:e.url,target:"_blank",rel:"noreferrer"},e.title),(0,s.h)("span",{class:"host"}," (",e.domain,")"))),(0,s.h)("br",null),(0,s.h)("span",{class:"meta"},"job"!==e.type?(0,s.h)(s.Fragment,null,"by ",(0,s.h)(s.Link,{href:`/users/${e.user}`},e.user)," ",e.time_ago," |"," ",(0,s.h)(s.Link,{href:`/stories/${e.id}`},e.comments_count?`${e.comments_count} comments`:"discuss")):(0,s.h)(s.Link,{href:`/stories/${e.id}`},e.time_ago)))}const g=({stories:e,page:t=1,type:n="news"})=>(0,s.h)(p,null,(0,s.h)(s.Helmet,null,(0,s.h)("title",null,"Nano Hacker News")),(0,s.h)("div",{class:"news-view"},(0,s.h)("div",{class:"news-list-nav"},t>1?(0,s.h)(s.Link,{class:"page-link",href:`/${n}/${t-1}`,"aria-label":"Previous Page"},"< prev"):(0,s.h)("span",{class:"page-link disabled","aria-hidden":"true"},"< prev"),(0,s.h)("span",null,"page ",t),e.length>=28?(0,s.h)(s.Link,{class:"page-link",href:`/${n}/${+t+1}`,"aria-label":"Next Page"},"more >"):(0,s.h)("span",{class:"page-link disabled","aria-hidden":"true"},"more >")),(0,s.h)("main",{class:"news-list"},(0,s.h)("ul",null,e?e.map((e=>(0,s.h)(u,{story:e}))):null))));class f extends s.Component{constructor(e){var t;super(e),this.store=null!==(t=new s.Store({isOpen:!0},"my-store").use())&&void 0!==t?t:"store",this.toggle=this.toggle.bind(this)}didMount(){this.store.subscribe(((e,t)=>{e.isOpen!==t.isOpen&&this.update()}))}didUnmount(){this.store.cancel()}toggle(){this.store.setState({isOpen:!this.store.state.isOpen})}render(){return(0,s.h)("li",{class:"comment"},(0,s.h)("div",{class:"by"},(0,s.h)(s.Link,{href:`/users/${this.props.comment.user}`},this.props.comment.user)," ",this.props.comment.time_ago),(0,s.h)("div",{class:"text",innerHTML:{__dangerousHtml:this.props.comment.content}}),this.props.comment.comments.length>0?(0,s.h)(s.Fragment,null,(0,s.h)("div",{class:"toggle "+(this.store.state.isOpen?"open":"")},(0,s.h)("a",{onClick:this.toggle},this.store.state.isOpen?"[-]":"[+] "+(e=this.props.comment.comments.length)+(1===e?" reply":" replies")+" collapsed")),!0===this.store.state.isOpen?(0,s.h)("ul",{class:"comment-children"},this.props.comment.comments.map((e=>(0,s.h)(f,{comment:e})))):null):null);var e}}function v({data:e}){return(0,s.h)(p,null,(0,s.h)(s.Helmet,null,(0,s.h)("title",null,"Stories page | ",e.title)),(0,s.h)(s.Helmet,{footer:!0},(0,s.h)("script",{async:!0,src:"/public/js/comment.hydrate.js"})),(0,s.h)("div",{class:"item-view"},(0,s.h)("div",{class:"item-view-header"},(0,s.h)("a",{href:e.url,target:"_blank"},(0,s.h)("h1",null,e.title)),e.domain?(0,s.h)("span",{class:"host"},"(",e.domain,")"):null,(0,s.h)("p",{class:"meta"},e.points," points | by"," ",(0,s.h)(s.Link,{prefetch:"hover",href:`/users/${e.user}`},e.user)," ",e.time_ago)),(0,s.h)("div",{class:"item-view-comments"},(0,s.h)("p",{class:"item-view-comments-header"},e.comments_count?e.comments_count+" comments":"No comments yet."),(0,s.h)("ul",{class:"comment-children",id:"cc"},e.comments.map((e=>(0,s.h)(f,{comment:e})))))))}function w({data:e}){return(0,s.h)(p,null,(0,s.h)(s.Helmet,null,(0,s.h)("title",null,"Users Page: ",e.id)),(0,s.h)("div",{class:"user-view"},e.error?(0,s.h)("h1",null,"User not found."):(0,s.h)(s.Fragment,null,(0,s.h)("h1",null,"User : ",e.id),(0,s.h)("ul",{class:"meta"},(0,s.h)("li",null,(0,s.h)("span",{class:"label"},"Created:")," ",null==e?void 0:e.created),(0,s.h)("li",null,(0,s.h)("span",{class:"label"},"Karma:")," ",e.karma),!!e.about&&(0,s.h)("li",{innerHTML:{__dangerousHtml:e.about},class:"about"})),(0,s.h)("p",{class:"links"},(0,s.h)("a",{href:`https://news.ycombinator.com/submitted?id=${e.id}`},"submissions")," |"," ",(0,s.h)("a",{href:`https://news.ycombinator.com/threads?id=${e.id}`},"comments")))))}var b=function(e,t,n,i){return new(n||(n=Promise))((function(o,s){function a(e){try{l(i.next(e))}catch(e){s(e)}}function r(e){try{l(i.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,r)}l((i=i.apply(e,t||[])).next())}))};const x=n(860),y=x(),k=process.env.PORT||3e3;y.use(o()()),y.get("/",((e,n)=>b(void 0,void 0,void 0,(function*(){const i=yield t()("https://api.hnpwa.com/v0/news/1.json"),o=yield i.json(),r=a().renderSSR((0,s.h)(g,{stories:o,type:"news",page:e.params.page})),{body:l,head:d,footer:m}=s.Helmet.SSR(r);n.send(c(l,d,m))})))),y.get("/news/:page",((e,n)=>b(void 0,void 0,void 0,(function*(){const i=yield t()(`https://api.hnpwa.com/v0/news/${e.params.page}.json`),o=yield i.json(),r=a().renderSSR((0,s.h)(g,{stories:o,type:"news",page:e.params.page})),{body:l,head:d,footer:m}=s.Helmet.SSR(r);n.send(c(l,d,m))})))),y.get("/newest/:page",((e,n)=>b(void 0,void 0,void 0,(function*(){const i=yield t()(`https://api.hnpwa.com/v0/newest/${e.params.page}.json`),o=yield i.json(),r=a().renderSSR((0,s.h)(g,{stories:o,type:"newest",page:e.params.page})),{body:l,head:d,footer:m}=s.Helmet.SSR(r);n.send(c(l,d,m))})))),y.get("/show/:page",((e,n)=>b(void 0,void 0,void 0,(function*(){const i=yield t()(`https://api.hnpwa.com/v0/show/${e.params.page}.json`),o=yield i.json(),r=a().renderSSR((0,s.h)(g,{stories:o,type:"newest",page:e.params.page})),{body:l,head:d,footer:m}=s.Helmet.SSR(r);n.send(c(l,d,m))})))),y.get("/ask/:page",((e,n)=>b(void 0,void 0,void 0,(function*(){const i=yield t()(`https://api.hnpwa.com/v0/ask/${e.params.page}.json`),o=yield i.json(),r=a().renderSSR((0,s.h)(g,{stories:o,type:"newest",page:e.params.page})),{body:l,head:d,footer:m}=s.Helmet.SSR(r);n.send(c(l,d,m))})))),y.get("/jobs/:page",((e,n)=>b(void 0,void 0,void 0,(function*(){const i=yield t()(`https://api.hnpwa.com/v0/jobs/${e.params.page}.json`),o=yield i.json(),r=a().renderSSR((0,s.h)(g,{stories:o,type:"newest",page:e.params.page})),{body:l,head:d,footer:m}=s.Helmet.SSR(r);n.send(c(l,d,m))})))),y.get("/stories/:id",((e,n)=>b(void 0,void 0,void 0,(function*(){const i=yield t()(`https://api.hackerwebapp.com/item/${e.params.id}`,{headers:{"sec-ch-ua-platform":"Windows","user-agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.64 Safari/537.36 Edg/101.0.1210.47"}}),o=yield i.json(),r=a().renderSSR((0,s.h)(v,{data:o})),{body:l,head:d,footer:m}=s.Helmet.SSR(r);n.send(c(l,d,m))})))),y.get("/users/:id",((e,n)=>b(void 0,void 0,void 0,(function*(){console.log(`https://api.hackerwebapp.com/user/${e.params.id}`);const i=yield t()(`https://api.hackerwebapp.com/user/${e.params.id}`,{headers:{"content-type":"application/json; charset=utf-8","sec-ch-ua-platform":"Windows","user-agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.64 Safari/537.36 Edg/101.0.1210.47"}}),o=yield i.json(),r=a().renderSSR((0,s.h)(w,{data:o})),{body:l,head:d,footer:m}=s.Helmet.SSR(r);n.send(c(l,d,m))})))),y.get("/sw.js",((e,t)=>{t.sendFile(__dirname+"/public/sw.js")})),y.get("/manifest.webmanifest",((e,t)=>{t.sendFile(__dirname+"/public/manifest.webmanifest")})),y.use("/public",x.static("./dist/public")),y.listen(k,(()=>console.log(`Example app listening at http://localhost:${k}`)))})()})();