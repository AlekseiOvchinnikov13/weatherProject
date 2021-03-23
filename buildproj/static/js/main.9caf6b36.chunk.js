(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{26:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},47:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){},57:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(9),i=n.n(r),o=(n(26),n(27),n(5)),s=n(3),l=(n(28),n(10)),u=n.n(l),d=n(8),j=function e(t){Object(d.a)(this,e),this.id=void 0,this.weather=void 0,this.main=void 0,this.name=void 0,this.coord=void 0,this.id=t.id,this.name=t.name,this.main=t.main,this.weather=t.weather,this.coord=t.coord},b=function e(t){Object(d.a)(this,e),this.coord=void 0,this.today=void 0,this.tomorrow=void 0,this.coord={lat:t.lat,lon:t.lon},this.tomorrow=t.daily[0],this.today=t.current},h="46329390d425d0a34e2d1f8601c85566",m=function(e){var t=e.lat,n=e.lon,c="https://api.openweathermap.org/data/2.5/onecall?lat=".concat(t,"&lon=").concat(n,"&exclude={daily}&lang=ru&units=metric&appid=").concat(h);return u.a.get(c).then((function(e){return new b(e.data)})).catch((function(){return console.log("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435.")}))},f=n(20),p=n.n(f),O=(n(47),n(0)),v=Object(s.b)("store")(Object(s.c)((function(e){var t=e.invert,n=e.onClick,c=e.title,a=p()("btn",{invert:t});return Object(O.jsx)("button",{onClick:n,className:a,children:c})}))),g=(n(50),n(51),Object(s.b)("store")(Object(s.c)((function(e){return Object(O.jsx)("input",{onChange:function(t){return function(t){e.store.setSelectedCity(t.target.value)}(t)},className:"input-text",type:"text",name:"cityName",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0433\u043e\u0440\u043e\u0434\u0430"})})))),x=(n(52),Object(s.b)("store")(Object(s.c)((function(e){var t=e.store.forecast,n=t.today,c=t.tomorrow,a=["\u0421\u0435\u0433\u043e\u0434\u043d\u044f","\u0417\u0430\u0432\u0442\u0440\u0430"];return n&&c?Object(O.jsxs)("div",{className:"forecast-wrapper",children:[Object(O.jsxs)("div",{className:"forecast-weather",children:[Object(O.jsx)("div",{className:"forecast-title",children:a[0]}),Object(O.jsxs)("div",{className:"forecast-inner",children:[Object(O.jsxs)("div",{className:"forecast-temp",children:[Math.round(n.temp)," \u2103"]}),Object(O.jsx)("div",{className:"forecast-icon",style:{backgroundImage:"url('http://openweathermap.org/img/wn/".concat(n.weather[0].icon,"@2x.png')")}})]}),Object(O.jsx)("div",{className:"graphic"})]}),Object(O.jsxs)("div",{className:"forecast-weather",children:[Object(O.jsx)("div",{className:"forecast-title",children:a[1]}),Object(O.jsxs)("div",{className:"forecast-inner",children:[Object(O.jsxs)("div",{className:"forecast-temp",children:[Math.round(c.temp.day)," \u2103"]}),Object(O.jsx)("div",{className:"forecast-icon",style:{backgroundImage:"url('http://openweathermap.org/img/wn/".concat(c.weather[0].icon,"@2x.png')")}})]}),Object(O.jsx)("div",{className:"graphic"})]})]}):null})))),w=function(e){var t=e.title,n=e.isOpen,a=e.onCancel,r=e.onSubmit,i=e.isAdding,s=Object(c.useState)("\u041e\u0442\u043c\u0435\u043d\u0430"),l=Object(o.a)(s,2),u=l[0],d=l[1],j=i?"":"one-button";Object(c.useEffect)((function(){return document.addEventListener("mousedown",b),function(){document.removeEventListener("mousedown",b)}})),Object(c.useEffect)((function(){!i&&d("\u0417\u0430\u043a\u0440\u044b\u0442\u044c")}),[]);var b=function(e){!n||"modal-overlay"!==e.target.className&&"modal-close"!==e.target.className||a()};return Object(O.jsx)(O.Fragment,{children:n&&Object(O.jsx)("div",{className:"modal-overlay",children:Object(O.jsxs)("div",{className:"modal-window",children:[Object(O.jsxs)("div",{className:"modal-header",children:[Object(O.jsx)("div",{className:"modal-title",children:t}),Object(O.jsx)("div",{className:"modal-close",onClick:a,children:"\xd7"})]}),Object(O.jsx)("div",{className:"modal-body",children:i?Object(O.jsx)(g,{}):Object(O.jsx)(x,{})}),Object(O.jsxs)("div",{className:"modal-footer ".concat(j),children:[i&&Object(O.jsx)(v,{title:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c",onClick:r,invert:!0}),Object(O.jsx)(v,{title:u,onClick:a})]})]})})})};w.defaultProps={isAdding:!0};var y,N,C,F,k,_,S,W,L,z,E=Object(s.b)("store")(Object(s.c)(w)),I=Object(s.b)("store")(Object(s.c)((function(e){var t=Object(c.useState)(!1),n=Object(o.a)(t,2),a=n[0],r=n[1],i=Object(c.useState)(""),s=Object(o.a)(i,2),l=s[0],u=s[1],d=function(t){m(t).then((function(t){e.store.setForecast(t)})).catch(console.log)};return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("div",{className:"card-wrapper",onClick:function(){return t=e.store.currentWeather,u(t.name),d(t.coord),void r(!a);var t},children:[Object(O.jsx)("div",{className:"card-wrapper__place",children:"\u041c\u043e\u0435 \u041c\u0435\u0441\u0442\u043e\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435"}),Object(O.jsxs)("div",{className:"card-wrapper__temp",children:[e.store.currentWeather.main.temp," \u2103"]}),Object(O.jsx)("div",{className:"card-wrapper__icon",style:{backgroundImage:"url('http://openweathermap.org/img/wn/".concat(e.store.currentWeather.weather[0].icon,"@2x.png')")}})]},e.store.currentWeather.name),Object(O.jsx)(E,{onCancel:function(){e.store.clearForecast(),r(!a)},isOpen:a,isAdding:!1,title:l})]})}))),A=n(2),P=(n(53),Object(s.b)("store")(Object(s.c)((function(e){var t=Object(c.useState)(!1),n=Object(o.a)(t,2),a=n[0],r=n[1],i=function(){return r(!a)};return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("button",{className:"btn-wrapper",onClick:i,children:[Object(O.jsx)("div",{className:"btn-wrapper__icon",style:{backgroundImage:"url('https://cdn1.iconfinder.com/data/icons/utilities-part-1/64/add_1-512.png')"}}),Object(O.jsx)("p",{className:"btn-wrapper__text",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})]}),Object(O.jsx)(E,{onCancel:i,isOpen:a,onSubmit:function(){e.store.selectedCity?(function(e){var t="https://api.openweathermap.org/data/2.5/weather?q=".concat(e,"&lang=ru&units=metric&appid=").concat(h);return u.a.get(t).then((function(e){return new j(e.data)})).catch((function(){return console.log("\u0413\u043e\u0440\u043e\u0434 ".concat(e," \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d."))}))}(e.store.selectedCity).then(Object(A.f)((function(t){e.store.addLocation(t)}))).catch((function(e){return console.log(e)})),r(!a),e.store.setSelectedCity("")):console.log("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0433\u043e\u0440\u043e\u0434\u0430.")},title:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})]})})))),M=(n(54),Object(s.b)("store")(Object(s.c)((function(e){var t=Object(c.useState)(!1),n=Object(o.a)(t,2),a=n[0],r=n[1],i=Object(c.useState)(""),s=Object(o.a)(i,2),l=s[0],u=s[1],d=function(t){m(t).then((function(t){e.store.setForecast(t)})).catch(console.log)};return Object(O.jsxs)(O.Fragment,{children:[e.store.locations.map((function(t){return Object(O.jsxs)("div",{className:"weather-card",children:[Object(O.jsxs)("div",{onClick:function(){return function(e){u(e.name),d(e.coord),r(!a)}(t)},className:"card-wrapper",children:[Object(O.jsx)("div",{className:"card-wrapper__place",children:t.name}),Object(O.jsxs)("div",{className:"card-wrapper__temp",children:[Math.round(t.main.temp)," \u2103"]}),Object(O.jsx)("div",{className:"card-wrapper__icon",style:{backgroundImage:"url('http://openweathermap.org/img/wn/".concat(t.weather[0].icon,"@2x.png')")}})]}),Object(O.jsx)(v,{onClick:function(){return n=t.id,void e.store.deleteLocation(n);var n}})]},t.id)})),Object(O.jsx)(E,{onCancel:function(){e.store.clearForecast(),r(!a)},isOpen:a,isAdding:!1,title:l})]})})))),B=(n(55),Object(s.b)("store")(Object(s.c)((function(e){var t=Object(c.useState)(!0),n=Object(o.a)(t,2),a=n[0],r=n[1],i=Object(c.useState)({lat:0,lon:0}),s=Object(o.a)(i,2),l=s[0],d=s[1],b=function(e){var t=e.coords,n=t.latitude,c=t.longitude;d({lat:n.toFixed(4),lon:c.toFixed(4)})};return Object(c.useEffect)((function(){navigator.geolocation.getCurrentPosition(b)}),[]),Object(c.useEffect)((function(){(l.lat||l.lon)&&function(e){var t=e.lat,n=e.lon,c="https://api.openweathermap.org/data/2.5/weather?lat=".concat(t,"&lon=").concat(n,"&lang=ru&units=metric&appid=").concat(h);return u.a.get(c).then((function(e){return new j(e.data)})).catch((function(e){return console.log(e)}))}(l).then((function(t){e.store.setCurrentWeather(t),r(!1)})).catch(console.log)}),[l.lat,l.lon]),a?null:Object(O.jsxs)("div",{className:"container",children:[Object(O.jsx)(I,{}),Object(O.jsx)(M,{}),Object(O.jsx)(P,{})]})})))),D=n(7),J=n(21),T=n(6),q=(n(56),new(y=function(){function e(){Object(d.a)(this,e),Object(D.a)(this,"currentWeather",N,this),Object(D.a)(this,"setCurrentWeather",C,this),Object(D.a)(this,"locations",F,this),Object(D.a)(this,"deleteLocation",k,this),Object(D.a)(this,"selectedCity",_,this),Object(D.a)(this,"setSelectedCity",S,this),Object(D.a)(this,"forecast",W,this),Object(D.a)(this,"setForecast",L,this),Object(D.a)(this,"clearForecast",z,this),Object(A.m)(this)}return Object(J.a)(e,[{key:"addLocation",value:function(e){this.locations.find((function(t){return e.name===t.name}))?console.log("\u041a\u0430\u0440\u0442\u043e\u0447\u043a\u0430 \u043f\u043e\u0433\u043e\u0434\u044b \u0432 \u0433\u043e\u0440\u043e\u0434\u0435 ".concat(e.name," \u0443\u0436\u0435 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0430")):this.locations.push(e)}}]),e}(),N=Object(T.a)(y.prototype,"currentWeather",[A.n],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return{}}}),C=Object(T.a)(y.prototype,"setCurrentWeather",[A.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){e.currentWeather.id=t.id,e.currentWeather.name=t.name,e.currentWeather.main=t.main,e.currentWeather.weather=t.weather,e.currentWeather.coord=t.coord}}}),F=Object(T.a)(y.prototype,"locations",[A.n],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return A.n.array()}}),Object(T.a)(y.prototype,"addLocation",[A.f],Object.getOwnPropertyDescriptor(y.prototype,"addLocation"),y.prototype),k=Object(T.a)(y.prototype,"deleteLocation",[A.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){e.locations=e.locations.filter((function(e){return e.id!==t}))}}}),_=Object(T.a)(y.prototype,"selectedCity",[A.n],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),S=Object(T.a)(y.prototype,"setSelectedCity",[A.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){return e.selectedCity=t}}}),W=Object(T.a)(y.prototype,"forecast",[A.n],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return{}}}),L=Object(T.a)(y.prototype,"setForecast",[A.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){e.forecast=t}}}),z=Object(T.a)(y.prototype,"clearForecast",[A.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){e.forecast={}}}}),y));var G=function(){return Object(O.jsx)(s.a,{store:q,children:Object(O.jsx)("div",{className:"App",children:Object(O.jsx)("header",{className:"App-header",children:Object(O.jsx)(B,{})})})})},H=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,58)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))};i.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(G,{})}),document.getElementById("root")),H()}},[[57,1,2]]]);
//# sourceMappingURL=main.9caf6b36.chunk.js.map