(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[10],{"/+zg":function(e,n,a){"use strict";a.r(n);var l=a("q1tI"),t=a.n(l),c=(a("B2uJ"),a("+su7"),a("qOys")),r=a.n(c);a("5Yjd");n["default"]=function(){return t.a.createElement(t.a.Fragment,null,t.a.createElement("div",{className:"markdown"},t.a.createElement("h1",{id:"\u5e7f\u5ea6\u4f18\u5148\u641c\u7d22"},t.a.createElement("a",{"aria-hidden":"true",href:"#\u5e7f\u5ea6\u4f18\u5148\u641c\u7d22"},t.a.createElement("span",{className:"icon icon-link"})),"\u5e7f\u5ea6\u4f18\u5148\u641c\u7d22"),t.a.createElement("p",null,t.a.createElement("strong",null,"\u5e7f\u5ea6\u4f18\u5148\u641c\u7d22\u7b97\u6cd5"),"\uff08Breadth-First Search\uff0c\u7f29\u5199\u4e3a BFS\uff09\uff0c\u53c8\u8bd1\u4f5c",t.a.createElement("strong",null,"\u5bbd\u5ea6\u4f18\u5148\u641c\u7d22"),"\uff0c\u6216",t.a.createElement("strong",null,"\u6a2a\u5411\u4f18\u5148\u641c\u7d22"),"\uff0c\u662f\u4e00\u79cd\u56fe\u5f62\u641c\u7d22\u7b97\u6cd5\u3002\u7b80\u5355\u7684\u8bf4\uff0cBFS \u662f\u4ece\u6839\u8282\u70b9\u5f00\u59cb\uff0c\u6cbf\u7740\u6811\u7684\u5bbd\u5ea6\u904d\u5386\u6811\u7684\u8282\u70b9\u3002\u5982\u679c\u6240\u6709\u8282\u70b9\u5747\u88ab\u8bbf\u95ee\uff0c\u5219\u7b97\u6cd5\u4e2d\u6b62\u3002\u5e7f\u5ea6\u4f18\u5148\u641c\u7d22\u7684\u5b9e\u73b0\u4e00\u822c\u91c7\u7528 open-closed \u8868\u3002"),t.a.createElement("h2",{id:"\u5904\u7406\u987a\u5e8f"},t.a.createElement("a",{"aria-hidden":"true",href:"#\u5904\u7406\u987a\u5e8f"},t.a.createElement("span",{className:"icon icon-link"})),"\u5904\u7406\u987a\u5e8f"),t.a.createElement("p",null,"\u5728\u7b2c\u4e00\u8f6e\u4e2d\uff0c\u6211\u4eec\u5904\u7406\u6839\u7ed3\u70b9\u3002\u5728\u7b2c\u4e8c\u8f6e\u4e2d\uff0c\u6211\u4eec\u5904\u7406\u6839\u7ed3\u70b9\u65c1\u8fb9\u7684\u7ed3\u70b9\uff1b\u5728\u7b2c\u4e09\u8f6e\u4e2d\uff0c\u6211\u4eec\u5904\u7406\u8ddd\u6839\u7ed3\u70b9\u4e24\u6b65\u7684\u7ed3\u70b9\uff1b\u7b49\u7b49\u7b49\u7b49\u3002"),t.a.createElement("p",null,"\u4e0e\u6811\u7684\u5c42\u5e8f\u904d\u5386\u7c7b\u4f3c\uff0c",t.a.createElement("code",null,"\u8d8a\u662f\u63a5\u8fd1\u6839\u7ed3\u70b9\u7684\u7ed3\u70b9\u5c06\u8d8a\u65e9\u5730\u904d\u5386"),"\u3002"),t.a.createElement("p",null,"\u5982\u679c\u5728\u7b2c ",t.a.createElement("code",null,"k")," \u8f6e\u4e2d\u5c06\u7ed3\u70b9 ",t.a.createElement("code",null,"X")," \u6dfb\u52a0\u5230\u961f\u5217\u4e2d\uff0c\u5219\u6839\u7ed3\u70b9\u4e0e ",t.a.createElement("code",null,"X")," \u4e4b\u95f4\u7684\u6700\u77ed\u8def\u5f84\u7684\u957f\u5ea6\u6070\u597d\u662f ",t.a.createElement("code",null,"k"),"\u3002\u4e5f\u5c31\u662f\u8bf4\uff0c\u7b2c\u4e00\u6b21\u627e\u5230\u76ee\u6807\u7ed3\u70b9\u65f6\uff0c\u4f60\u5df2\u7ecf\u5904\u4e8e\u6700\u77ed\u8def\u5f84\u4e2d\u3002"),t.a.createElement("h2",{id:"\u961f\u5217\u7684\u5165\u961f\u548c\u51fa\u961f\u987a\u5e8f\u662f\u4ec0\u4e48"},t.a.createElement("a",{"aria-hidden":"true",href:"#\u961f\u5217\u7684\u5165\u961f\u548c\u51fa\u961f\u987a\u5e8f\u662f\u4ec0\u4e48"},t.a.createElement("span",{className:"icon icon-link"})),"\u961f\u5217\u7684\u5165\u961f\u548c\u51fa\u961f\u987a\u5e8f\u662f\u4ec0\u4e48"),t.a.createElement("p",null,"\u5982\u4e0a\u9762\u7684\u52a8\u753b\u6240\u793a\uff0c\u6211\u4eec\u9996\u5148\u5c06\u6839\u7ed3\u70b9\u6392\u5165\u961f\u5217\u3002\u7136\u540e\u5728\u6bcf\u4e00\u8f6e\u4e2d\uff0c\u6211\u4eec\u9010\u4e2a\u5904\u7406\u5df2\u7ecf\u5728\u961f\u5217\u4e2d\u7684\u7ed3\u70b9\uff0c\u5e76\u5c06\u6240\u6709\u90bb\u5c45\u6dfb\u52a0\u5230\u961f\u5217\u4e2d\u3002\u503c\u5f97\u6ce8\u610f\u7684\u662f\uff0c\u65b0\u6dfb\u52a0\u7684\u8282\u70b9\u4e0d\u4f1a\u7acb\u5373\u904d\u5386\uff0c\u800c\u662f\u5728\u4e0b\u4e00\u8f6e\u4e2d\u5904\u7406\u3002"),t.a.createElement("p",null,"\u7ed3\u70b9\u7684\u5904\u7406\u987a\u5e8f\u4e0e\u5b83\u4eec\u6dfb\u52a0\u5230\u961f\u5217\u7684\u987a\u5e8f\u662f\u5b8c\u5168\u76f8\u540c\u7684\u987a\u5e8f\uff0c\u5373\u5148\u8fdb\u5148\u51fa\uff08FIFO\uff09\u3002\u8fd9\u5c31\u662f\u6211\u4eec\u5728 BFS \u4e2d\u4f7f\u7528\u961f\u5217\u7684\u539f\u56e0\u3002"),t.a.createElement("h2",{id:"\u6a21\u7248"},t.a.createElement("a",{"aria-hidden":"true",href:"#\u6a21\u7248"},t.a.createElement("span",{className:"icon icon-link"})),"\u6a21\u7248"),t.a.createElement("p",null,"\u4e4b\u524d\uff0c\u6211\u4eec\u5df2\u7ecf\u4ecb\u7ecd\u4e86\u4f7f\u7528 BFS \u7684\u4e24\u4e2a\u4e3b\u8981\u65b9\u6848\uff1a",t.a.createElement("code",null,"\u904d\u5386")," \u6216 ",t.a.createElement("code",null,"\u627e\u51fa\u6700\u77ed\u8def\u5f84"),"\u3002\u901a\u5e38\uff0c\u8fd9\u53d1\u751f\u5728\u6811\u6216\u56fe\u4e2d\u3002\u6b63\u5982\u6211\u4eec\u5728\u7ae0\u8282\u63cf\u8ff0\u4e2d\u63d0\u5230\u7684\uff0cBFS \u4e5f\u53ef\u4ee5\u7528\u4e8e\u66f4\u62bd\u8c61\u7684\u573a\u666f\u4e2d\u3002"),t.a.createElement("p",null,"\u5728\u672c\u6587\u4e2d\uff0c\u6211\u4eec\u5c06\u4e3a\u4f60\u63d0\u4f9b\u4e00\u4e2a\u6a21\u677f\u3002\u7136\u540e\uff0c\u6211\u4eec\u5728\u672c\u6587\u540e\u63d0\u4f9b\u4e00\u4e9b\u4e60\u9898\u4f9b\u4f60\u7ec3\u4e60\u3002"),t.a.createElement("blockquote",null,t.a.createElement("p",null,"\u5728\u7279\u5b9a\u95ee\u9898\u4e2d\u6267\u884c BFS \u4e4b\u524d\u786e\u5b9a\u7ed3\u70b9\u548c\u8fb9\u7f18\u975e\u5e38\u91cd\u8981\u3002\u901a\u5e38\uff0c\u7ed3\u70b9\u5c06\u662f\u5b9e\u9645\u7ed3\u70b9\u6216\u662f\u72b6\u6001\uff0c\u800c\u8fb9\u7f18\u5c06\u662f\u5b9e\u9645\u8fb9\u7f18\u6216\u53ef\u80fd\u7684\u8f6c\u6362\u3002")),t.a.createElement("h2",{id:"\u4ee3\u7801\u5b9e\u73b0"},t.a.createElement("a",{"aria-hidden":"true",href:"#\u4ee3\u7801\u5b9e\u73b0"},t.a.createElement("span",{className:"icon icon-link"})),"\u4ee3\u7801\u5b9e\u73b0"),t.a.createElement("p",null,"\u5e7f\u5ea6\u4f18\u5148\u904d\u5386\u4e8c\u53c9\u6811\uff0c\u4e5f\u5c31\u662f\u6309\u5c42\u6b21\u53bb\u904d\u5386\u3002\u4f9d\u6b21\u904d\u5386\u6839\u8282\u70b9\uff0c\u7136\u540e\u662f\u5de6\u5b50\u8282\u70b9\u548c\u53f3\u5b50\u8282\u70b9\u3002\u6240\u4ee5\u8981\u904d\u5386\u5b8c\u5f53\u524d\u8282\u70b9\u7684\u6240\u6709\u5b50\u8282\u70b9\u3002\u6839\u636e\u5de6\u53f3\u5b50\u8282\u70b9\u7684\u987a\u5e8f\u6765\u8f93\u51fa\uff0c\u6240\u4ee5\u5c31\u662f\u5148\u8fdb\u5148\u51fa\u7684\u539f\u5219\uff0c\u90a3\u4e48\u6211\u4eec\u5f53\u7136\u5c31\u60f3\u5230\u4e86\u961f\u5217\u8fd9\u4e2a\u6570\u636e\u7ed3\u6784\u3002"),t.a.createElement("h3",{id:"\u9012\u5f52\u7248\u672c"},t.a.createElement("a",{"aria-hidden":"true",href:"#\u9012\u5f52\u7248\u672c"},t.a.createElement("span",{className:"icon icon-link"})),"\u9012\u5f52\u7248\u672c"),t.a.createElement("p",null,"\u5b9e\u73b0\u601d\u8def\uff1a"),t.a.createElement("ol",null,t.a.createElement("li",null,"\u521b\u5efa ",t.a.createElement("code",null,"nodeList")," \u5b58\u50a8\u6700\u7ec8\u8fd4\u56de\u7ed3\u679c"),t.a.createElement("li",null,"\u521b\u5efa\u4e00\u4e2a\u961f\u5217\u5b58\u653e"),t.a.createElement("li",null,"\u5f53\u961f\u5217\u4e0d\u4e3a\u7a7a\u65f6\uff0c\u83b7\u53d6\u961f\u5217\u7b2c\u4e00\u5143\u7d20\uff0c\u5b58\u8fdb ",t.a.createElement("code",null,"nodeList")),t.a.createElement("li",null,"\u904d\u5386\u6240\u6709\u7684\u5b50\u8282\u70b9\uff0c\u5b58\u8fdb\u961f\u5217\u5c3e\u90e8"),t.a.createElement("li",null,"\u961f\u5217\u4e3a\u7a7a\u65f6\u63a8\u51fa\u5faa\u73af\u5e76\u7ed3\u675f")),t.a.createElement(r.a,{code:"function bfs(node) {\n  let nodeList = [];\n  let index = 0;\n\n  if (node != null) {\n    nodeList.push(node);\n\n    nodeList.push();\n  }\n\n  return nodeList;\n}\n",lang:"js"}),t.a.createElement("h3",{id:"\u975e\u9012\u5f52\u7248\u672c"},t.a.createElement("a",{"aria-hidden":"true",href:"#\u975e\u9012\u5f52\u7248\u672c"},t.a.createElement("span",{className:"icon icon-link"})),"\u975e\u9012\u5f52\u7248\u672c")))}}}]);