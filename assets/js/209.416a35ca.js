(window.webpackJsonp=window.webpackJsonp||[]).push([[209],{563:function(t,e,s){"use strict";s.r(e);var v=s(25),_=Object(v.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"웹-크롤링-튜토리얼"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#웹-크롤링-튜토리얼"}},[t._v("#")]),t._v(" 웹 크롤링 튜토리얼")]),t._v(" "),s("h2",{attrs:{id:"중요"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#중요"}},[t._v("#")]),t._v(" 중요!")]),t._v(" "),s("ul",[s("li",[t._v("제가 올릴 글들은 http 방식에 대한 크롤링만 다루고, socket방식은 다루지 않습니다.")])]),t._v(" "),s("h2",{attrs:{id:"크롤링-하기-전에-선수-지식"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#크롤링-하기-전에-선수-지식"}},[t._v("#")]),t._v(" 크롤링 하기 전에 선수 지식")]),t._v(" "),s("h3",{attrs:{id:"웹에서-데이터를-주고-받는-행위의-이해"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#웹에서-데이터를-주고-받는-행위의-이해"}},[t._v("#")]),t._v(" 웹에서 데이터를 주고 받는 행위의 이해")]),t._v(" "),s("blockquote",[s("p",[t._v("웹은 사용자가 보고 있는 화면인 프론트(frontend)단, 사용자가 보고 있는 화면에 나오는 정보를 가지고 있는 서버(backend)로 나뉩니다.")])]),t._v(" "),s("h3",{attrs:{id:"http-방식"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http-방식"}},[t._v("#")]),t._v(" http 방식")]),t._v(" "),s("blockquote",[s("p",[t._v("사용자가 프론트단에서 블로그 글을 클릭했다고 가정해보고 데이터의 흐름에 대해 알아보겠습니다.")])]),t._v(" "),s("ol",[s("li",[t._v("사용자가 블로그 글을 보기 위해 해당 글을 클릭한다")]),t._v(" "),s("li",[t._v("웹(front)은 글에 대한 정보가 없기 때문에 바로 사용자에게 보여줄 수 없고, 글에 대한 정보를 서버(backend)로 request를 요청한다")]),t._v(" "),s("li",[t._v("서버는 웹에서 요청한 정보를 DB(database)에서 읽어와 웹에서 사용하기 좋게 가공한 후, 웹으로 response(응답)을 보낸다.")]),t._v(" "),s("li",[t._v("응답(블로그 글)을 받은 웹은 사용자에게 블로그 글을 보여준다.")]),t._v(" "),s("li",[t._v("사용자가 글을 본다.")])]),t._v(" "),s("ul",[s("li",[t._v("위와 같은 방법으로 데이터를 주보 받는 형식을 https 형식으로 부릅니다.")]),t._v(" "),s("li",[t._v("위 형식의 특징은 웹에서 서버로 request를 요청하면, 그에 대한 response응 주고 http요청을 끊습니다 (일회성)")]),t._v(" "),s("li",[t._v("즉, 웹이 서버에 먼저 요청하지 않는 이상, 서버가 웹에 먼저 정보를 주지 않습니다.")])]),t._v(" "),s("h4",{attrs:{id:"http-방식-res-타입"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http-방식-res-타입"}},[t._v("#")]),t._v(" http 방식 res 타입")]),t._v(" "),s("blockquote",[s("p",[t._v("위에서 알아본 http방식에서는 웹이 서버로 request를 하면 response를 준다고 하였습니다.")]),t._v(" "),s("p",[t._v("그 response도 두가지 타입으로 나뉘고, 그 방식에 따라 크롤링 방법도 달라집니다. 이 방식은 크롤러가 정하는 것이 아닌, 우리가 크롤링 할 사이트를 만든 개발자에 의해 정해집니다.")])]),t._v(" "),s("ol",[s("li",[t._v("json 타입")])]),t._v(" "),s("ul",[s("li",[t._v("특정 웹사이트에 들어가서 F12(개발자도구)를 켜면 network 탭에 웹이 서버로 request를 주고, 서버가 웹으로 reponse를 준 내역이 있습니다.")]),t._v(" "),s("li",[t._v("이 내역에서 "),s("code",[t._v("Preview")]),t._v("를 보면 json형식으로 객체, 배열이 있는 경우가 json타입으로 데이터를 주고 받는 웹입니다.")])]),t._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[t._v("html 타입")])]),t._v(" "),s("ul",[s("li",[t._v("다시 웹사이트에들어가 개발자도구를 켜고 network탭에 들어가 preview를 보면 json타입과는 다르게 response로 html 화면값을 주는 경우가 있습니다. 이 경우가 html을 서버가 만들어서 프론트에게 주는 방식입니다.")])]),t._v(" "),s("h3",{attrs:{id:"socket-방식"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#socket-방식"}},[t._v("#")]),t._v(" socket 방식")]),t._v(" "),s("blockquote",[s("p",[t._v("카카오톡을 켜고 친구와 대화한다고 가정해봅니다.")])]),t._v(" "),s("ol",[s("li",[t._v("카톡을 켜고 상대방에게 대화를 건다")]),t._v(" "),s("li",[t._v("상대방은 대화를 받는다")])]),t._v(" "),s("ul",[s("li",[t._v("https 방식과 다른점이 2번에 있습니다.")]),t._v(" "),s("li",[t._v("상대방의 입장에서는 내가 받은 대화를 서버로 요청하지 않았는데, 서버가 알아서 대화를 주었죠. 이것이 http와 socket방식입니다.")]),t._v(" "),s("li",[t._v("즉, socket방식은 웹과 서버과 연결되면 일회성으로 끊기지 않고 계속해서 서버와 연결되있습니다. 그렇기 때문에 서버는 웹프론트단으로 계속해서 정보를 줄 수 있습니다.")])]),t._v(" "),s("TagLinks"),t._v(" "),s("Comment")],1)}),[],!1,null,null,null);e.default=_.exports}}]);