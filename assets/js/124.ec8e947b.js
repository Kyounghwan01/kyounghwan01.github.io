(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{479:function(t,s,a){"use strict";a.r(s);var n=a(25),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"메모리-낭비-최소화하기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#메모리-낭비-최소화하기"}},[t._v("#")]),t._v(" 메모리 낭비 최소화하기")]),t._v(" "),a("h2",{attrs:{id:"virtual-scroll-기법"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#virtual-scroll-기법"}},[t._v("#")]),t._v(" Virtual scroll 기법")]),t._v(" "),a("p",[t._v("스크롤된 위치를 계산하여 그 위치에 해당하는 DOM만 그려주는 원리입니다.\n또 다른 방식으로는 인피니티 스크롤을 구현하는 방법도 있지만, 밑으로 내려가면 상위 데이터는 계속 남아있는 것이니 결론적으로는 스크롤 위치에 해당하는 dom만 그리는 것이 더 좋은 방법입니다.")]),t._v(" "),a("h2",{attrs:{id:"v-once"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v-once"}},[t._v("#")]),t._v(" v-once")]),t._v(" "),a("p",[a("code",[t._v("v-once")]),t._v("는 첫 렌더링 이후 이 값이 변하지 않아도 된다고 확인할 때, 사용합니다.\n요소와 구성 요소를 한 번만 렌더링합니다.\n이후에 다시 렌더링 할 때 요소 / 구성 요소 및 모든 하위 요소는 정적 콘텐츠로 처리되고 건너 뜁니다. 업데이트 성능을 최적화하는 데 사용할 수 있습니다.")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("span")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-once")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("This will never change: {{msg}}"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("span")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("h2",{attrs:{id:"v-if와-v-show-구분하여-사용하기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v-if와-v-show-구분하여-사용하기"}},[t._v("#")]),t._v(" v-if와 v-show 구분하여 사용하기")]),t._v(" "),a("p",[t._v("돔이 랜더링 될때 v-if가 false일때는 v-if에 해당하는 엘리먼트는 렌더링 되지 않습니다. 그러나 v-if가 true로 변하면 렌더링되고, false가 되면 제거되고 다시 true가 되면 다시 렌더링 됩니다.")]),t._v(" "),a("p",[t._v("그에 반해 v-show는 초기에 무조건 렌더링 됩니다. 그러나 true/false가 계속 바뀌어도 v-if처럼 재 렌더링 되지 않습니다.")]),t._v(" "),a("p",[t._v("자주 클릭되는 경우 v-show, 한번만 클릭될 경우 v-if가 적절하겠습니다.")]),t._v(" "),a("h2",{attrs:{id:"computed-활용"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#computed-활용"}},[t._v("#")]),t._v(" computed 활용")]),t._v(" "),a("p",[t._v("computed의 값은 캐싱되기 때문에, 리렌더링 됬을 때, 같은 값이 들어왔다면 연산하지 않습니다.")]),t._v(" "),a("h2",{attrs:{id:"데이터에-대한-이해"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#데이터에-대한-이해"}},[t._v("#")]),t._v(" 데이터에 대한 이해")]),t._v(" "),a("p",[t._v("만약 보여줄 데이터가 바뀔 가능성이 없고, 단지 사용자는 관찰만 할 경우 굳이 반응형을 넣을 필요가 없을 것입니다.")]),t._v(" "),a("p",[t._v("vue에서 data, state, computed, getters로 데이터 모델이 선언되면, "),a("code",[t._v("defineReactive")]),t._v("를 통해 해당 객체는 vue의 관리 대상이 됩고, 각 객체마다 "),a("code",[t._v("Observe")]),t._v("가 생성되어 내부적으로 getter와 setter가 생성됩니다. 데이터를 열어보면 "),a("code",[t._v("Ob")]),t._v("이 붙은 것을 확인할 수 있습니다.")]),t._v(" "),a("p",[t._v("그래서 관리 안되게 할 데이터에 를 vue의 감지 대상에서 제거합니다. (Observe 생성 안되게 막는다)")]),t._v(" "),a("p",[t._v("이때 해당 state에 대해 "),a("code",[t._v("Object.freeze()")]),t._v("를 사용합니다.\n"),a("code",[t._v("Object.freeze()")]),t._v("를 사용할 경우 해당 객체는 readOnly 판정을 받게 되어, 객체에 대해 수정, 삭제, 추가가 불가능 합니다. 그에 따라 vue에서도 감지대상에서 제외됩니다.")]),t._v(" "),a("p",[a("code",[t._v("Object.freeze()")]),t._v("를 사용해야하는 시점은 api를 통해 데이터를 받고, state에 할당하는 당시입니다.")]),t._v(" "),a("p",[t._v("vuex를 예시로 보겠습니다.")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" state "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  bookList"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// mutations")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" mutations "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setBookList")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" payload")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bookList "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("freeze")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("payload"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// actions")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" actions "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getBookList")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" commit "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" params")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" res "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" api"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("booking"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getbooking")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("params"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("commit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"setBookList"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("위 처럼 mutation을 통해 state를 할당할 그때, freeze를 시켜 vue의 감시대상에서 벗어나면, getter와 setter가 생성되지 않아 메모리를 아낄 수 있습니다.")]),t._v(" "),a("TagLinks"),t._v(" "),a("Comment")],1)}),[],!1,null,null,null);s.default=e.exports}}]);