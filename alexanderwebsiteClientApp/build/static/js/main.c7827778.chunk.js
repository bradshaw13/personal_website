(this.webpackJsonpalexanderwebsite=this.webpackJsonpalexanderwebsite||[]).push([[0],{100:function(e,t,n){},101:function(e,t,n){},102:function(e,t,n){},121:function(e,t,n){"use strict";n.r(t);var s=n(1),a=n.n(s),i=n(56),c=n.n(i),o=(n(70),n(71),n(5)),r=n(62),l=n(26),d=n(14),j=n(58),h=n(57),u=n(59),b=n(3),p=[{title:"Home",path:"/",icon:Object(b.jsx)(l.a,{}),cName:"nav-text"},{title:"Recipes",path:"/recipes",icon:Object(b.jsx)(h.a,{}),cName:"nav-text"},{title:"Travel",path:"/travel",icon:Object(b.jsx)(j.a,{}),cName:"nav-text"},{title:"About Me",path:"/aboutme",icon:Object(b.jsx)(u.a,{}),cName:"nav-text"}],m=(n(73),n(0));var x=function(){var e=Object(s.useState)(!1),t=Object(o.a)(e,2),n=t[0],a=t[1],i=function(){return a(!n)};return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(m.b.Provider,{value:{color:"#fff"},children:[Object(b.jsx)("div",{className:"navbar",children:Object(b.jsx)(d.b,{to:"#",className:"menu-bars",children:Object(b.jsx)(r.a,{onClick:i})})}),Object(b.jsx)("nav",{className:n?"nav-menu active":"nav-menu",children:Object(b.jsxs)("ul",{className:"nav-menu-items",onClick:i,children:[Object(b.jsx)("li",{className:"navbar-toggle",children:Object(b.jsx)(d.b,{to:"#",className:"menu-bars",children:Object(b.jsx)(l.b,{})})}),p.map((function(e,t){return Object(b.jsx)("li",{className:e.cName,children:Object(b.jsxs)(d.b,{to:e.path,children:[e.icon,Object(b.jsx)("span",{className:"navTitle",children:e.title})]})},t)}))]})})]})})},O=n(7);n(78);var f=function(){var e=Object(O.f)();return Object(b.jsx)("div",{children:Object(b.jsxs)("div",{className:"background",children:[Object(b.jsx)("div",{className:"home",children:Object(b.jsx)("h1",{children:"Hello, my name is Alexander Bradshaw "})}),Object(b.jsx)("div",{className:"home",children:Object(b.jsx)("button",{onClick:function(){return e.push("/aboutme")},className:"testButton",children:"About Me"})})]})})},g=(n(79),n(28));var v=function(){var e=Object(O.f)();return Object(b.jsxs)("div",{className:"recipes",children:[Object(b.jsx)("h1",{children:"Recipes"}),Object(b.jsx)("ul",{className:"ulListRecipe",children:g.map((function(t,n){return Object(b.jsx)("li",{onClick:function(){return e.push("/recipes/"+t.name,{recipeInfo:t})},className:"listRecipes",children:t.name},n)}))})]})},N=n(37),y=n(17);function w(e){var t=e.data,n=e.onClick;return t.map((function(e,t){return Object(b.jsx)(y.c,{longitude:e.longitude,latitude:e.latitude,children:Object(b.jsx)("svg",{height:20,viewBox:"0 0 24 24",style:{cursor:"pointer",fill:"#d00",stroke:"none",transform:"translate(".concat(-10,"px,").concat(-20,"px)")},onClick:function(){return n(e)},children:Object(b.jsx)("path",{d:"M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3\n  c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9\n  C20.1,15.8,20.2,15.8,20.2,15.7z"})})},"marker-".concat(t))}))}var k=s.memo(w),C=n(29);function I(e){var t=e.info,n="".concat(t.city,", ").concat(t.state);return Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{children:[n," |"," ",Object(b.jsx)(d.b,{to:{pathname:"/travel/"+t.city},children:t.city})]}),Object(b.jsx)("img",{width:240,src:t.image,alt:t.displayName})]})}var S=s.memo(I),A=(n(97),n(25)),M=n.n(A);n(98);M.a.workerClass=n(99).default;var H=function(){var e=Object(s.useState)({longitude:-95.45,latitude:37.78,zoom:4}),t=Object(o.a)(e,2),n=t[0],a=t[1],i=Object(s.useState)(null),c=Object(o.a)(i,2),r=c[0],l=c[1];return Object(b.jsx)("div",{className:"travel",children:Object(b.jsxs)(y.g,Object(N.a)(Object(N.a)({},n),{},{width:"100vw",height:"100vh",onViewportChange:a,mapStyle:"mapbox://styles/mapbox/dark-v8",mapboxApiAccessToken:"pk.eyJ1IjoiYnJhZHNoYXcxMyIsImEiOiJja3Qzc3Y3Y2kxMG50MnVueHdkNXU5cXl4In0.ylJ0aYbRMbN4wkmsA09yUw",children:[Object(b.jsx)(k,{data:C,onClick:l}),r&&Object(b.jsx)(y.e,{tipSize:5,anchor:"top",longitude:r.longitude,latitude:r.latitude,closeOnClick:!1,onClose:l,children:Object(b.jsx)(S,{info:r})}),Object(b.jsx)(y.b,{style:{top:0,left:0,padding:"10px"}}),Object(b.jsx)(y.a,{style:{top:36,left:0,padding:"10px"}}),Object(b.jsx)(y.d,{style:{top:72,left:0,padding:"10px"}}),Object(b.jsx)(y.f,{style:{bottom:36,left:0,padding:"10px"}})]}))})};var T=function(){return Object(b.jsx)("div",{className:"portfolio",children:Object(b.jsx)("h1",{children:"Portfolio"})})},_=(n(100),n.p+"static/media/AstrosALCS.baa4b4ec.JPG");var B=function(){var e=Object(O.g)().city,t=Object(s.useState)({city:"",population:"",image:"",state:"",latitude:0,longitude:0}),n=Object(o.a)(t,2),a=n[0],i=n[1];return s.useEffect((function(){i(C.find((function(t){return t.city===e})))}),[e]),Object(b.jsxs)("div",{className:"travelByCity",children:[Object(b.jsx)("h1",{children:a.city+", "+a.state}),Object(b.jsxs)("h2",{children:["Population: ",a.population]}),Object(b.jsx)("div",{className:"info",children:a.paragraph1}),Object(b.jsx)("img",{src:_,alt:a.displayName})]})};n(101);var P=function(){var e=Object(O.g)().recipeName,t=Object(s.useState)({name:"",origin:"",ingredients:[],steps:[]}),n=Object(o.a)(t,2),a=n[0],i=n[1];return s.useEffect((function(){i(g.find((function(t){return t.name===e})))}),[e]),Object(b.jsx)("div",{className:"test",children:Object(b.jsxs)("div",{className:"recipeInfo",children:[Object(b.jsx)("h1",{children:a.name}),Object(b.jsxs)("h4",{className:"origin",children:["Recipe Origin: ",a.origin]}),Object(b.jsx)("h2",{children:"Ingredients"}),Object(b.jsx)("div",{className:"content",children:Object(b.jsx)("ul",{className:"ingredients",children:a.ingredients.map((function(e){return Object(b.jsx)("li",{className:"ingredient",children:e},e)}))})}),Object(b.jsx)("h2",{children:"Instructions"}),Object(b.jsx)("div",{className:"content",children:Object(b.jsx)("ol",{className:"steps",children:a.steps.map((function(e){return Object(b.jsx)("li",{className:"step",children:e},e)}))})})]})})},D=(n(102),n(65)),J=n.n(D);var F=function(){var e=Object(s.useState)(""),t=Object(o.a)(e,2),n=t[0],a=t[1];return Object(s.useEffect)((function(){J.a.get("/api/v1/say-something").then((function(e){var t=e.data.body;a(t)})),console.log("this do be the request")}),[]),Object(b.jsxs)("div",{className:"aboutMe",children:[Object(b.jsx)("h1",{className:"title",children:"AboutMe"}),Object(b.jsx)("div",{className:"aboutMeParagraph",children:"My name is Alexander Cuellar Bradshaw "}),Object(b.jsx)("h1",{children:n})]})};var z=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(d.a,{children:[Object(b.jsx)(x,{}),Object(b.jsxs)(O.c,{children:[Object(b.jsx)(O.a,{path:"/",exact:!0,component:f}),Object(b.jsx)(O.a,{path:"/recipes",exact:!0,component:v}),Object(b.jsx)(O.a,{path:"/recipes/:recipeName",exact:!0,component:P}),Object(b.jsx)(O.a,{path:"/portfolio",exact:!0,component:T}),Object(b.jsx)(O.a,{path:"/travel",exact:!0,component:H}),Object(b.jsx)(O.a,{path:"/travel/:city",exact:!0,component:B}),Object(b.jsx)(O.a,{path:"/aboutme",exact:!0,component:F})]})]})})},E=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,122)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),s(e),a(e),i(e),c(e)}))};c.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(z,{})}),document.getElementById("root")),E()},28:function(e){e.exports=JSON.parse('[{"name":"Flour Tortillas","origin":"Vengan A Comer","ingredients":["4 cups flour","2 tsp. Salt","1/4 tsp baking powder","7 tablespoons Crisco","1 1/2 cups hot water"],"steps":["Mix dry ingredients","Add shortening and blend very, very well by hand","Add hot water and stir well with fork, as this mixture is hot","Let cool down for a little until you are able to start kneading it until the bowl is cleaer of all the dough. The more you knead the dough the better. Cover and let stand for 30 minutes of longer if desired.","Make balls about the size of an egg, and then roll out with rolling pin.","Place on griddle and cook for about 2 minutes on one side, turn to the other side and cook for another minute or so and turn again. This will help the tortilla puff up"]},{"name":"Enchiladas","ingredients":"meat","step1":"Do this first","step2":"Do this second","step3":"do this third","step4":"do this fourth"},{"name":"Brisket","ingredients":"salt and pepper","step1":"Do this first","step2":"Do this second","step3":"do this third","step4":"do this fourth"},{"name":"Pizza","ingredients":"cheese","step1":"Do this first","step2":"Do this second","step3":"do this third","step4":"do this fourth"},{"name":"Sushi","ingredients":"rice","step1":"Do this first","step2":"Do this second","step3":"do this third","step4":"do this fourth"}]')},29:function(e){e.exports=JSON.parse('[{"city":"Houston","population":"2,100,263","image":"http://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Aerial_views_of_the_Houston%2C_Texas%2C_28005u.jpg/240px-Aerial_views_of_the_Houston%2C_Texas%2C_28005u.jpg","state":"Texas","latitude":29.7805,"longitude":-95.3863,"paragraph1":"I was born and raised in Houston, Texas. I grew up in the Cypress area and went to Cy Falls High School where I played baseball. I grew up playing baseball all around the Houston area. I love Houston because of how diverse it is and there is so much to do. I could go fishing in the lakes north of Houston or in Galveston, Texas which was a short 45 minute drive away. Houston always had the bbq and my favorite place to go to is Harris County BBQ. I would also go see my Houston Astros at Minute Maid Park as often as I could."}]')},70:function(e,t,n){},71:function(e,t,n){},73:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){},98:function(e,t,n){}},[[121,1,2]]]);
//# sourceMappingURL=main.c7827778.chunk.js.map