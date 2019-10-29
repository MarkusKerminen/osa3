(window.webpackJsonppuhelinluettelo=window.webpackJsonppuhelinluettelo||[]).push([[0],{14:function(e,n,t){e.exports=t(37)},19:function(e,n,t){},37:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(13),u=t.n(c),o=(t(19),t(2)),l=t(3),i=t.n(l),m="/api/persons",f=function(){return i.a.get(m).then(function(e){return e.data})},d=function(e){return i.a.post(m,e).then(function(e){return e.data})},s=function(e){i.a.delete("".concat(m,"/").concat(e))},p=function(e,n){return i.a.put("".concat(m,"/").concat(e),n).then(function(e){return e.data})},h=function(e){var n=e.persons,t=e.filter,a=e.deleteContact;return r.a.createElement("div",null,n.filter(function(e){return e.name.toUpperCase().includes(t.toUpperCase())||0===t.length}).map(function(e){return r.a.createElement(b,{person:e,key:e.name,deleteContact:a})}))},b=function(e){var n=e.person,t=e.deleteContact;return r.a.createElement("div",null,n.name," ",n.number+" ",r.a.createElement("button",{onClick:function(){return t(n)}},"delete"))},v=function(e){var n=e.handleInpChangeName,t=e.newName,a=e.handleInpChangeNumber,c=e.newNumber,u=e.addPerson;return r.a.createElement("form",{onSubmit:u},r.a.createElement("div",null,"name: ",r.a.createElement("input",{value:t,onChange:n})),r.a.createElement("div",null,"number: ",r.a.createElement("input",{value:c,onChange:a})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add")))},E=function(e){var n=e.message,t=e.type;return null===n?null:r.a.createElement("div",{className:t},n)},w=function(){var e=Object(a.useState)([]),n=Object(o.a)(e,2),t=n[0],c=n[1],u=Object(a.useState)(""),l=Object(o.a)(u,2),i=l[0],m=l[1],b=Object(a.useState)(""),w=Object(o.a)(b,2),g=w[0],C=w[1],j=Object(a.useState)(""),O=Object(o.a)(j,2),N=O[0],y=O[1],S=Object(a.useState)(null),k=Object(o.a)(S,2),I=k[0],T=k[1],D=Object(a.useState)("notification"),P=Object(o.a)(D,2),A=P[0],J=P[1];Object(a.useEffect)(function(){f().then(function(e){c(e)})},[]);return r.a.createElement("div",null,r.a.createElement("h1",null,"Phonebook"),r.a.createElement(E,{message:I,type:A}),r.a.createElement("p",null,"Filter shown ",r.a.createElement("input",{value:N,onChange:function(e){y(e.target.value)}})),r.a.createElement("h2",null,"Add a new contact"),r.a.createElement(v,{handleInpChangeName:function(e){m(e.target.value)},handleInpChangeNumber:function(e){C(e.target.value)},newName:i,newNumber:g,addPerson:function(e){e.preventDefault();var n=t.map(function(e){return e.name}).filter(function(e){return e===i}).reduce(function(e,n){return e+1},0);if(i&&g){var a={name:i,number:g};if(0===n)d(a).then(function(e){c(t.concat(e)),m(""),C(""),J("notification"),T("Added ".concat(a.name)),setTimeout(function(){T(null)},4e3)}).catch(function(e){J("error"),T("Error: ".concat(e.response.data.error)),setTimeout(function(){T(null)},4e3),console.log(e.response.data)});else if(window.confirm("".concat(i," is already added to phonebook, replace the old number with a new one?"))){var r=t.find(function(e){return e.name===a.name}).id,u=!0;p(r,a).then(function(e){return c(t.map(function(n){return n.id!==r?n:e}))}).catch(function(e){u=!1,J("error"),T("".concat(a.name," has already been removed from the server")),setTimeout(function(){T(null)},4e3),c(t.filter(function(e){return e.id!==r}))}),m(""),C(""),u&&(J("notification"),T("Changed the number for ".concat(a.name)),setTimeout(function(){T(null)},4e3))}}}}),r.a.createElement("h2",null,"Contacts"),r.a.createElement(h,{persons:t,filter:N,deleteContact:function(e){window.confirm("Delete ".concat(e.name))&&(s(e.id),c(t.filter(function(n){return n!==e})),T("Deleted ".concat(e.name)),setTimeout(function(){T(null)},4e3))}}))};u.a.render(r.a.createElement(w,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.88b931cf.chunk.js.map