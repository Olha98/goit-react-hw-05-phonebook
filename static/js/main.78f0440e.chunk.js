(this["webpackJsonpgoit-react-hw-05-phonebook"]=this["webpackJsonpgoit-react-hw-05-phonebook"]||[]).push([[0],{14:function(e,t,n){e.exports={appear:"Form_appear__VcPL8",appearActive:"Form_appearActive__2LLCP",formContainer:"Form_formContainer__3Cub4",boxAlert:"Form_boxAlert__3OyNo"}},15:function(e,t,n){e.exports={list:"ListPeople_list__38UQx",enter:"ListPeople_enter__1gdwS",enterActive:"ListPeople_enterActive__1kMjE",exit:"ListPeople_exit__yNFDF",exitActive:"ListPeople_exitActive__1XXTd"}},26:function(e,t,n){},28:function(e,t,n){e.exports={contactsTitle:"FillterForm_contactsTitle__3TROt"}},29:function(e,t,n){e.exports={containerUser:"ContactForm_containerUser__Ms2zL"}},30:function(e,t,n){e.exports={enter:"Alert_enter__1F49x",enterActive:"Alert_enterActive__lVVX-",exit:"Alert_exit__1tMav",exitActive:"Alert_exitActive__3wrvk",alert:"Alert_alert__3ekzA",message:"Alert_message__J-Hd-"}},42:function(e,t,n){e.exports=n(56)},47:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(7),o=n.n(c),l=n(17),i=n(23),s=n(24),m=n(25),u=n(37),f=n(34),p=n(14),_=n.n(p),h=(n(47),n(11)),d=n(26),v=n.n(d),b=function(e){var t=e.name,n=e.number,a=e.id,c=e.deliteContact;return r.a.createElement(r.a.Fragment,null,r.a.createElement("li",{className:v.a.listItem},t,": ",n,r.a.createElement("button",{type:"button",onClick:c,name:a},"Delite")))},g=n(15),E=n.n(g),C=n(59),A=n(58),x=function(e){var t=e.contacts,n=e.deliteContact;return r.a.createElement(C.a,{className:E.a.list},t.map((function(e){return r.a.createElement(A.a,{key:e.id,timeout:500,classNames:E.a},r.a.createElement(b,Object.assign({key:Object(h.v4)()},e,{deliteContact:n})))})))},S=n(28),y=n.n(S),O=function(e){var t=e.filter,n=e.onChange;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Contacts"),r.a.createElement("label",null,r.a.createElement("p",{className:y.a.contactsTitle},"Find contacts by name"),r.a.createElement("input",{type:"text",name:"filter",value:t,onChange:n})))},w=n(29),N=n.n(w),F=function(e){var t=e.name,n=e.number,a=e.handleChange;return r.a.createElement("div",{className:N.a.containerUser},r.a.createElement("label",null,r.a.createElement("p",null,"Name"),r.a.createElement("input",{type:"text",name:"name",onChange:a,value:t})),r.a.createElement("label",null,r.a.createElement("p",null,"Number"),r.a.createElement("input",{type:"text",name:"number",onChange:a,value:n})),r.a.createElement("button",{type:"submit"},"Add"))},k=n(16),j=n(30),L=n.n(j),P=(n(52),n(53),function(){return r.a.createElement("div",{className:"container-sm"},r.a.createElement(k.a,{variant:"danger",className:L.a.boxAlert},r.a.createElement(k.a.Heading,null,"Contact already exists!Oh snap! You got an error!")))}),I=n(33),T=function(e){Object(u.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={contacts:[],name:"",number:"",filter:"",inShow:!1,AlertShow:!1},e.handleChange=function(t){var n=t.target.name,a=t.target.value;e.setState(Object(i.a)({},n,a))},e.getFilterValue=function(t){e.setState({filter:t.target.value})},e.handleSubmit=function(t){t.preventDefault();var n=e.state,a=n.name,r=n.number;e.addContact({id:Object(h.v4)(),name:a,number:r}),e.setState({name:"",number:"",filter:""}),console.log("this.state",e.state)},e.addContact=function(t){if(e.state.contacts.find((function(e){return e.name===t.name})))return e.setState({AlertShow:!0}),void setTimeout((function(){return e.setState({AlertShow:!1})}),5e3);e.setState((function(e){return{contacts:[].concat(Object(l.a)(e.contacts),[t])}}))},e.getInfo=function(){var t=e.state,n=t.contacts,a=t.filter;return a?n.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())})):n},e.deliteContac=function(t){var n=t.target.name,a=e.state.contacts.filter((function(e){return e.id!==n}));e.setState({contacts:Object(l.a)(a)})},e}return Object(m.a)(n,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("contacts");e&&this.setState({contacts:JSON.parse(e),inShow:!0})}},{key:"componentDidUpdate",value:function(e,t){e.contacts!==this.state.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var e=this.state,t=e.name,n=e.number,a=e.filter,c=e.AlertShow;return console.log("AlertShow",c),r.a.createElement(r.a.Fragment,null,c&&r.a.createElement(A.a,{classNames:_.a,in:!0,appear:!0,timeout:1500,unmountOnExit:!0},r.a.createElement(P,null)),r.a.createElement(I.a,{onSubmit:this.handleSubmit,className:_.a.formContainer},r.a.createElement(A.a,{in:!0,appear:!0,classNames:"title",timeout:1e3,unmountOnExit:!0},r.a.createElement("h2",null,"Phonebook")),r.a.createElement(F,{handleChange:this.handleChange,name:t,number:n}),r.a.createElement(O,{filter:a,onChange:this.handleChange}),r.a.createElement(x,{contacts:this.getInfo(),deliteContact:this.deliteContac})))}}]),n}(a.Component);n(55);o.a.render(r.a.createElement(T,null),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.78f0440e.chunk.js.map