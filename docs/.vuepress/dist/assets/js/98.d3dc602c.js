(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{511:function(t,e,s){"use strict";s.r(e);var a=s(25),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"how-to-migrate-a-react-app-to-typescript"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-to-migrate-a-react-app-to-typescript"}},[t._v("#")]),t._v(" How to Migrate a React App to TypeScript")]),t._v(" "),s("p",[t._v("자바스크립트를 이용하여 만든 React 프로젝트를 타입스크립트로 변환하기 위한 과정입니다.")]),t._v(" "),s("h2",{attrs:{id:"typescript-추가"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#typescript-추가"}},[t._v("#")]),t._v(" TypeScript 추가")]),t._v(" "),s("p",[t._v("기존 프로젝트에 TypeScript를 추가합니다.")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("npm install --save typescript @types/node @types/react @types/react-dom @types/jest\n\n")])])]),s("p",[t._v("또는")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("yarn add typescript @types/node @types/react @types/react-dom @types/jest\n")])])]),s("p",[s("code",[t._v("package.json")]),t._v("에 위 패키지들이 설치되었다면 다음 과정으로 이어갑니다.")]),t._v(" "),s("h2",{attrs:{id:"tsconfig-json-추가"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tsconfig-json-추가"}},[t._v("#")]),t._v(" tsconfig.json 추가")]),t._v(" "),s("p",[s("code",[t._v("tsconfig.json")]),t._v("은 타입스크립트로 만들어진 프로젝트에 대한 환경 설정입니다.\n아래 커멘드로 기본적인 "),s("code",[t._v("tsconfig.json")]),t._v("를 만듭니다.")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("npx tsc --init\n")])])]),s("p",[t._v("성공적으로 "),s("code",[t._v("tsconfig.json")]),t._v("이 루트 디렉토리에 만들어졌다면 다음 과정을 이어갑니다.")]),t._v(" "),s("h2",{attrs:{id:"package-json에-types-xxx-추가"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#package-json에-types-xxx-추가"}},[t._v("#")]),t._v(" package.json에 @types/xxx 추가")]),t._v(" "),s("p",[t._v("만약 프로젝트에 "),s("code",[t._v("react-router-dom")]),t._v("이 있다면 타입스크립트에서 이 패키지를 실행하기 위해서는 "),s("code",[t._v("@types/react-router-dom")]),t._v("를 설치하여야합니다. 동일하게 만약 "),s("code",[t._v("moment")]),t._v("를 사용하고 있었다면 "),s("code",[t._v("@types/moment")]),t._v("를 설치하여야합니다. 이렇게 자신의 프로젝트에 있는 모든 패키지에 "),s("code",[t._v("@types/xxx")]),t._v("을 설치합니다.")]),t._v(" "),s("p",[s("code",[t._v("@types/xxx")]),t._v("이 없는 패키지가 있을 수 있습니다. 그럴때는 "),s("a",{attrs:{href:"https://kyounghwan01.github.io/blog/TS/Vue/node_module/",target:"_blank",rel:"noopener noreferrer"}},[t._v("링크"),s("OutboundLink")],1),t._v("를 참조하시면 해결할 수 있습니다.")]),t._v(" "),s("h2",{attrs:{id:"jsx-to-tsx"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jsx-to-tsx"}},[t._v("#")]),t._v(" jsx to tsx")]),t._v(" "),s("p",[t._v("이제 파일 하나씩 jsx 또는 js를 tsx로 바꾸는 작업을 합니다.")]),t._v(" "),s("p",[s("code",[t._v("npx tsc --init")]),t._v("에 의해 프로젝트에 자바스크립트와 타입스크립트가 공존할 수 있도록 미리 세팅을 하여 ("),s("code",[t._v('"allowJs": true')]),t._v("), 하나씩 바꾸면서 기존 프로젝트를 유지할 수 있습니다.")]),t._v(" "),s("p",[t._v("jsx에서 tsx로 바꿨는데 아무 에러가 뜨지 않는 경우 코드 에디터를 종료하고 다시 실행하면 에러가 뜨는 것을 볼 수 있습니다.")]),t._v(" "),s("p",[t._v("이후로는 타입스크립트를 쓰지 않으신분들은 (저를 포함..) 삽질의 연속이 기다리고 있습니다.\n제가 변환과정에서 겪는 에러와 해결과정을 모두 작성할 예정입니다. 방문해주셔서 다른 방법이 있다면 코멘트 남겨주시면 감사하겠습니다.")]),t._v(" "),s("TagLinks"),t._v(" "),s("Comment")],1)}),[],!1,null,null,null);e.default=r.exports}}]);