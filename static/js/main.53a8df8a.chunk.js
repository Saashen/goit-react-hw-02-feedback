(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{14:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(2),r=a.n(l),o=a(3),u=a(4),i=a(5),b=a(7),s=a(6),d=a(8),m=function(e){var t=e.onLeaveFeedback;return c.a.createElement(c.a.Fragment,null,c.a.createElement("button",{type:"button",onClick:t,name:"good"},"Good"),c.a.createElement("button",{type:"button",onClick:t,name:"neutral"},"Neutral"),c.a.createElement("button",{type:"button",onClick:t,name:"bad"},"Bad"))},v=function(e){var t=e.label,a=e.value;return c.a.createElement("p",null,t,": ",a)},k=function(e){var t=e.good,a=e.neutral,n=e.bad,l=e.total,r=e.positivePercentage;return c.a.createElement(c.a.Fragment,null,c.a.createElement(v,{label:"Good",value:t}),c.a.createElement(v,{label:"Neutral",value:a}),c.a.createElement(v,{label:"Bad",value:n}),c.a.createElement(v,{label:"Total",value:l}),c.a.createElement(v,{label:"Positive feedback",value:r}))},E=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(b.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(c)))).state={good:0,neutral:0,bad:0},a.countClickAmount=function(e){var t=e.target.name;a.setState((function(e){return Object(o.a)({},t,e[t]+1)}))},a.countTotalFeedback=function(){return Object.values(a.state).reduce((function(e,t){return e+t}),0)},a.countPositiveFeedbackPercentage=function(){var e=a.state.good;return e<1?0:Math.round(100*e/a.countTotalFeedback())},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.good,a=e.neutral,n=e.bad;return c.a.createElement(c.a.Fragment,null,c.a.createElement("section",{title:"FeedbackOptions"},c.a.createElement("h2",null,"Please leave feedback"),c.a.createElement(m,{onLeaveFeedback:this.countClickAmount})),c.a.createElement("section",{title:"Statistics"},c.a.createElement("h2",null,"Statistics"),c.a.createElement(k,{good:t,neutral:a,bad:n,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()})))}}]),t}(n.Component);r.a.render(c.a.createElement(E,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(14)}},[[9,1,2]]]);
//# sourceMappingURL=main.53a8df8a.chunk.js.map