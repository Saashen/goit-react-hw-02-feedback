(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{14:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(2),l=a.n(r),o=a(3),u=a(4),i=a(5),s=a(7),b=a(6),d=a(8),m=function(e){var t=e.onLeaveFeedback;return c.a.createElement(c.a.Fragment,null,c.a.createElement("button",{type:"button",onClick:t,name:"good"},"Good"),c.a.createElement("button",{type:"button",onClick:t,name:"neutral"},"Neutral"),c.a.createElement("button",{type:"button",onClick:t,name:"bad"},"Bad"))},v=function(e){var t=e.label,a=e.value;return c.a.createElement("p",null,t,": ",a)},g=function(e){var t=e.good,a=e.neutral,n=e.bad,r=e.total,l=e.positivePercentage;return c.a.createElement(c.a.Fragment,null,c.a.createElement(v,{label:"Good",value:t}),c.a.createElement(v,{label:"Neutral",value:a}),c.a.createElement(v,{label:"Bad",value:n}),c.a.createElement(v,{label:"Total",value:r}),c.a.createElement(v,{label:"Positive feedback",value:l}))},k=function(e){var t=e.title,a=e.state,n=e.total,r=e.positivePercentage,l=e.onLeaveFeedback;return c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",null,"Statistics"===t?"Statistics":"Please leave feedback"),"Statistics"===t?c.a.createElement(g,{good:a.good,neutral:a.neutral,bad:a.bad,total:n,positivePercentage:r}):c.a.createElement(m,{onLeaveFeedback:l}))},f=function(e){var t=e.message;return c.a.createElement("p",null,t)};f.defaultProps={message:""};var E=f,p=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(c)))).state={good:0,neutral:0,bad:0},a.countClickAmount=function(e){var t=e.target.name;a.setState((function(e){return Object(o.a)({},t,e[t]+1)}))},a.countTotalFeedback=function(){return Object.values(a.state).reduce((function(e,t){return e+t}),0)},a.countPositiveFeedbackPercentage=function(){var e=a.state.good;return e<1?0:Math.round(100*e/a.countTotalFeedback())},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(k,{title:"FeedbackOptions",onLeaveFeedback:this.countClickAmount}),this.countTotalFeedback()>0?c.a.createElement(k,{title:"Statistics",state:this.state,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()}):c.a.createElement(E,{message:"No feedback given"}))}}]),t}(n.Component);l.a.render(c.a.createElement(p,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(14)}},[[9,1,2]]]);
//# sourceMappingURL=main.7d983b32.chunk.js.map