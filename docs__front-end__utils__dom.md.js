(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[72],{"cou/":function(e,n,a){"use strict";a.r(n);var t=a("q1tI"),l=a.n(t),c=(a("B2uJ"),a("+su7"),a("qOys")),m=a.n(c);a("5Yjd");n["default"]=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h1",{id:"dom"},l.a.createElement("a",{"aria-hidden":"true",href:"#dom"},l.a.createElement("span",{className:"icon icon-link"})),"DOM"),l.a.createElement("h2",{id:"\u7edf\u8ba1html\u6807\u7b7e\u4e2d\u4ee5\u67d0\u5b57\u6bcd\u5f00\u5934\u7684\u6807\u7b7e\u6570\u91cf"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u7edf\u8ba1html\u6807\u7b7e\u4e2d\u4ee5\u67d0\u5b57\u6bcd\u5f00\u5934\u7684\u6807\u7b7e\u6570\u91cf"},l.a.createElement("span",{className:"icon icon-link"})),"\u7edf\u8ba1HTML\u6807\u7b7e\u4e2d\u4ee5\u67d0\u5b57\u6bcd\u5f00\u5934\u7684\u6807\u7b7e\u6570\u91cf"),l.a.createElement(m.a,{code:"const tags = document.getElementsByTagName('*')\n\n// \u8981\u4f7f\u7528\u6570\u7ec4\u7684\u65b9\u6cd5\u5fc5\u987b\u5c06\u7c7b\u6570\u7ec4\u8f6c\u4e3a\u771f\u6b63\u7684\u6570\u7ec4\nconst arr = [...tags].filter(item => item.tagName.startsWith('B'))\n\nconst len = arr.length;\n",lang:"js"}),l.a.createElement("p",null,"\u6216\u8005\u4f7f\u7528\u6df1\u5ea6\u904d\u5386\uff1a"),l.a.createElement(m.a,{code:"const collection = [];\n\nfunction dfs(ele) {\n  if (ele.tagName.startsWith('B')) {\n    collection.push(ele)\n  }\n  for (const child of ele.children) {\n    dfs(child)\n  }\n}\n\ndfs(document.documentElement)\n\nconst len = collection.length;\n",lang:"js"}),l.a.createElement("h2",{id:"\u7edf\u8ba1html\u6807\u7b7e\u4e2d\u51fa\u73b0\u6b21\u6570\u6700\u591a\u7684\u6807\u7b7e"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u7edf\u8ba1html\u6807\u7b7e\u4e2d\u51fa\u73b0\u6b21\u6570\u6700\u591a\u7684\u6807\u7b7e"},l.a.createElement("span",{className:"icon icon-link"})),"\u7edf\u8ba1HTML\u6807\u7b7e\u4e2d\u51fa\u73b0\u6b21\u6570\u6700\u591a\u7684\u6807\u7b7e"),l.a.createElement("p",null,"\u548c ",l.a.createElement("code",null,"\u5b9e\u73b0\u4e00\u4e2a\u7edf\u8ba1\u4e00\u4e2a\u5b57\u7b26\u4e32\u4e2d\u51fa\u73b0\u5b57\u7b26\u6700\u591a\u7684\u5b57\u7b26")," \u53ca ",l.a.createElement("code",null,"\u7edf\u8ba1\u4e00\u7bc7\u6587\u7ae0\u4e2d\u51fa\u73b0\u6700\u591a\u7684\u5b57")," \u662f\u5dee\u4e0d\u591a\u7c7b\u578b\u7684\u9898\u3002"),l.a.createElement(m.a,{code:"const tags = document.getElementsByName('*');\n\nlet map = new Map();\nlet maxTag = '';\nlet maxNum = 0;\n\nfor (let i = 0; i < tags.length; i++) {\n  const tag = tags[i].tagName;\n  const num = map.get(tag)\n  if (num) {\n    map.set(tag, ++num)\n  } else {\n    map.set(tag, 1)\n  }\n  if (num > maxNum) {\n    maxNum = num;\n    maxTag = tag;\n  }\n}\n\nconsole.log('\u5f53\u524d\u6587\u6863\u4e2d\u51fa\u73b0\u6b21\u6570\u6700\u591a\u7684\u6807\u7b7e\u540d\uff1a', maxTag)\nconsole.log('\u5f53\u524d\u6587\u6863\u4e2d\u51fa\u73b0\u6b21\u6570\u6700\u591a\u7684\u6807\u7b7e\u7684\u6b21\u6570\uff1a', maxNum)\n",lang:"js"})))}}}]);