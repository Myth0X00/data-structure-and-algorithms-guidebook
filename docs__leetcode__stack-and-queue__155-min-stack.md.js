(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[151],{"0Owb":function(e,n,t){"use strict";function a(){return a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},a.apply(this,arguments)}t.d(n,"a",(function(){return a}))},"K+nK":function(e,n){function t(e){return e&&e.__esModule?e:{default:e}}e.exports=t},mpw7:function(e,n,t){e.exports=t.p+"static/155-min-stack.aca90c3b.gif"},srWp:function(e,n,t){"use strict";t.r(n);var a=t("0Owb"),l=t("q1tI"),c=t.n(l),r=(t("B2uJ"),t("+su7"),t("qOys")),i=t.n(r),m=t("5Yjd"),u=t.n(m),o=c.a.memo((function(){var e=t("K+nK"),n=e(t("q1tI")),a=e(t("mpw7")),l=function(){return n["default"].createElement("img",{alt:"\u6700\u5c0f\u6808-\u8f85\u52a9\u6808",src:a["default"],width:"50%",height:"50%"})};return n["default"].createElement(l)}));n["default"]=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"markdown"},c.a.createElement("h1",{id:"\u6700\u5c0f\u6808"},c.a.createElement("a",{"aria-hidden":"true",href:"#\u6700\u5c0f\u6808"},c.a.createElement("span",{className:"icon icon-link"})),"\u6700\u5c0f\u6808"),c.a.createElement("p",null,"\u8bbe\u8ba1\u4e00\u4e2a\u652f\u6301 push \uff0cpop \uff0ctop \u64cd\u4f5c\uff0c\u5e76\u80fd\u5728\u5e38\u6570\u65f6\u95f4\u5185\u68c0\u7d22\u5230\u6700\u5c0f\u5143\u7d20\u7684\u6808\u3002"),c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement("code",null,"push(x)")," \u2014\u2014 \u5c06\u5143\u7d20 x \u63a8\u5165\u6808\u4e2d\u3002"),c.a.createElement("li",null,c.a.createElement("code",null,"pop()"),"\xa0\u2014\u2014 \u5220\u9664\u6808\u9876\u7684\u5143\u7d20\u3002"),c.a.createElement("li",null,c.a.createElement("code",null,"top()"),"\xa0\u2014\u2014 \u83b7\u53d6\u6808\u9876\u5143\u7d20\u3002"),c.a.createElement("li",null,c.a.createElement("code",null,"getMin()")," \u2014\u2014 \u68c0\u7d22\u6808\u4e2d\u7684\u6700\u5c0f\u5143\u7d20\u3002")),c.a.createElement("p",null,"\u793a\u4f8b\uff1a"),c.a.createElement(i.a,{code:'\u8f93\u5165\uff1a\n["MinStack","push","push","push","getMin","pop","top","getMin"]\n[[],[-2],[0],[-3],[],[],[],[]]\n\n\u8f93\u51fa\uff1a\n[null,null,null,null,-3,null,0,-2]\n\n\u89e3\u91ca\uff1a\nMinStack minStack = new MinStack();\nminStack.push(-2);\nminStack.push(0);\nminStack.push(-3);\nminStack.getMin();   --\x3e \u8fd4\u56de -3.\nminStack.pop();\nminStack.top();      --\x3e \u8fd4\u56de 0.\nminStack.getMin();   --\x3e \u8fd4\u56de -2.\n',lang:"unknown"}),c.a.createElement("p",null,"\u63d0\u793a\uff1a"),c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement("code",null,"pop"),"\u3001",c.a.createElement("code",null,"top")," \u548c ",c.a.createElement("code",null,"getMin")," \u64cd\u4f5c\u603b\u662f\u5728 \u975e\u7a7a\u6808 \u4e0a\u8c03\u7528\u3002")),c.a.createElement("h2",{id:"\u89e3\u9898\u601d\u8def"},c.a.createElement("a",{"aria-hidden":"true",href:"#\u89e3\u9898\u601d\u8def"},c.a.createElement("span",{className:"icon icon-link"})),"\u89e3\u9898\u601d\u8def"),c.a.createElement("h3",{id:"\u8f85\u52a9\u6808"},c.a.createElement("a",{"aria-hidden":"true",href:"#\u8f85\u52a9\u6808"},c.a.createElement("span",{className:"icon icon-link"})),"\u8f85\u52a9\u6808"),c.a.createElement("h4",{id:"\u601d\u8def"},c.a.createElement("a",{"aria-hidden":"true",href:"#\u601d\u8def"},c.a.createElement("span",{className:"icon icon-link"})),"\u601d\u8def"),c.a.createElement("p",null,"\u8981\u505a\u51fa\u8fd9\u9053\u9898\u76ee\uff0c\u9996\u5148\u8981\u7406\u89e3\u6808\u7ed3\u6784\u5148\u8fdb\u540e\u51fa\u7684\u6027\u8d28\u3002"),c.a.createElement("p",null,"\u5bf9\u4e8e\u6808\u6765\u8bf4\uff0c\u5982\u679c\u4e00\u4e2a\u5143\u7d20 ",c.a.createElement("code",null,"a")," \u5728\u5165\u6808\u65f6\uff0c\u6808\u91cc\u6709\u5176\u5b83\u7684\u5143\u7d20 ",c.a.createElement("code",null,"b, c, d"),"\uff0c\u90a3\u4e48\u65e0\u8bba\u8fd9\u4e2a\u6808\u5728\u4e4b\u540e\u7ecf\u5386\u4e86\u4ec0\u4e48\u64cd\u4f5c\uff0c\u53ea\u8981 ",c.a.createElement("code",null,"a")," \u5728\u6808\u4e2d\uff0c",c.a.createElement("code",null,"b, c, d")," \u5c31\u4e00\u5b9a\u5728\u6808\u4e2d\uff0c\u56e0\u4e3a\u5728 ",c.a.createElement("code",null,"a")," \u88ab\u5f39\u51fa\u4e4b\u524d\uff0c",c.a.createElement("code",null,"b, c, d")," \u4e0d\u4f1a\u88ab\u5f39\u51fa\u3002"),c.a.createElement("p",null,"\u56e0\u6b64\uff0c\u5728\u64cd\u4f5c\u8fc7\u7a0b\u4e2d\u7684\u4efb\u610f\u4e00\u4e2a\u65f6\u523b\uff0c\u53ea\u8981\u6808\u9876\u7684\u5143\u7d20\u662f ",c.a.createElement("code",null,"a"),"\uff0c\u90a3\u4e48\u6211\u4eec\u5c31\u53ef\u4ee5\u786e\u5b9a\u6808\u91cc\u9762\u73b0\u5728\u7684\u5143\u7d20\u4e00\u5b9a\u662f ",c.a.createElement("code",null,"a, b, c, d"),"\u3002"),c.a.createElement("p",null,"\u90a3\u4e48\uff0c\u6211\u4eec\u53ef\u4ee5\u5728\u6bcf\u4e2a\u5143\u7d20 ",c.a.createElement("code",null,"a")," \u5165\u6808\u65f6\u628a\u5f53\u524d\u6808\u7684\u6700\u5c0f\u503c ",c.a.createElement("code",null,"m")," \u5b58\u50a8\u8d77\u6765\u3002\u5728\u8fd9\u4e4b\u540e\u65e0\u8bba\u4f55\u65f6\uff0c\u5982\u679c\u6808\u9876\u5143\u7d20\u662f ",c.a.createElement("code",null,"a"),"\uff0c\u6211\u4eec\u5c31\u53ef\u4ee5\u76f4\u63a5\u8fd4\u56de\u5b58\u50a8\u7684\u6700\u5c0f\u503c ",c.a.createElement("code",null,"m"),"\u3002"),c.a.createElement("h4",{id:"\u7b97\u6cd5"},c.a.createElement("a",{"aria-hidden":"true",href:"#\u7b97\u6cd5"},c.a.createElement("span",{className:"icon icon-link"})),"\u7b97\u6cd5"),c.a.createElement("p",null,"\u6309\u7167\u4e0a\u9762\u7684\u601d\u8def\uff0c\u6211\u4eec\u53ea\u9700\u8981\u8bbe\u8ba1\u4e00\u4e2a\u6570\u636e\u7ed3\u6784\uff0c\u4f7f\u5f97\u6bcf\u4e2a\u5143\u7d20 ",c.a.createElement("code",null,"a")," \u4e0e\u5176\u76f8\u5e94\u7684\u6700\u5c0f\u503c ",c.a.createElement("code",null,"m")," \u65f6\u523b\u4fdd\u6301\u4e00\u4e00\u5bf9\u5e94\u3002\u56e0\u6b64\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u4e00\u4e2a\u8f85\u52a9\u6808\uff0c\u4e0e\u5143\u7d20\u6808\u540c\u6b65\u63d2\u5165\u4e0e\u5220\u9664\uff0c\u7528\u4e8e\u5b58\u50a8\u4e0e\u6bcf\u4e2a\u5143\u7d20\u5bf9\u5e94\u7684\u6700\u5c0f\u503c\u3002"),c.a.createElement("ul",null,c.a.createElement("li",null,"\u5f53\u4e00\u4e2a\u5143\u7d20\u8981\u5165\u6808\u65f6\uff0c\u6211\u4eec\u53d6\u5f53\u524d\u8f85\u52a9\u6808\u7684\u6808\u9876\u5b58\u50a8\u7684\u6700\u5c0f\u503c\uff0c\u4e0e\u5f53\u524d\u5143\u7d20\u6bd4\u8f83\u5f97\u51fa\u6700\u5c0f\u503c\uff0c\u5c06\u8fd9\u4e2a\u6700\u5c0f\u503c\u63d2\u5165\u8f85\u52a9\u6808\u4e2d\uff1b"),c.a.createElement("li",null,"\u5f53\u4e00\u4e2a\u5143\u7d20\u8981\u51fa\u6808\u65f6\uff0c\u6211\u4eec\u628a\u8f85\u52a9\u6808\u7684\u6808\u9876\u5143\u7d20\u4e5f\u4e00\u5e76\u5f39\u51fa\uff1b"),c.a.createElement("li",null,"\u5728\u4efb\u610f\u4e00\u4e2a\u65f6\u523b\uff0c\u6808\u5185\u5143\u7d20\u7684\u6700\u5c0f\u503c\u5c31\u5b58\u50a8\u5728\u8f85\u52a9\u6808\u7684\u6808\u9876\u5143\u7d20\u4e2d\u3002"))),c.a.createElement(u.a,Object(a["a"])({source:{jsx:'import React from \'react\';\nimport img from \'../../assets/leetcode/155-min-stack.gif\';\n\nexport default () => <img alt="\u6700\u5c0f\u6808-\u8f85\u52a9\u6808" src={img} width="50%" height="50%" />;'}},{inline:!0,dependencies:{},files:{}}),c.a.createElement(o,null)),c.a.createElement("div",{className:"markdown"},c.a.createElement(i.a,{code:"const MinStack = function() {\n  this.stack = [];\n  this.minStack = [Infinity];\n};\n\nMinStack.prototype.push = function(value) {\n  this, stack.push(value);\n  this.minStack.push(Math.min(this.minStack[this.minStack.length - 1], value));\n};\n\nMinStack.prototype.pop = function() {\n  this.stack.pop();\n  this.minStack.pop();\n};\n\nMinStack.prototype.top = function() {\n  return this.stack[this.stack.length - 1];\n};\n\nMinStack.prototype.getMin = function() {\n  return this.minStack[this.minStack.length - 1];\n};\n",lang:"js"}),c.a.createElement("h4",{id:"\u590d\u6742\u5ea6\u5206\u6790"},c.a.createElement("a",{"aria-hidden":"true",href:"#\u590d\u6742\u5ea6\u5206\u6790"},c.a.createElement("span",{className:"icon icon-link"})),"\u590d\u6742\u5ea6\u5206\u6790"),c.a.createElement("ul",null,c.a.createElement("li",null,"\u65f6\u95f4\u590d\u6742\u5ea6\uff1a",c.a.createElement("code",null,"O(1)"),"\uff0c\u538b\u6808\u3001\u51fa\u6808\uff0c\u83b7\u53d6\u6700\u5c0f\u503c\u7684\u65f6\u95f4\u590d\u6742\u5ea6\u90fd\u4e3a ",c.a.createElement("code",null,"O(1)")),c.a.createElement("li",null,"\u7a7a\u95f4\u590d\u6742\u5ea6\uff1a",c.a.createElement("code",null,"O(N)"),"\uff0c\u5305\u542b N \u4e2a\u5143\u7d20\u8f85\u52a9\u6808\u5360\u7528\u7ebf\u6027\u5927\u5c0f\u7684\u989d\u5916\u7a7a\u95f4"))))}}}]);