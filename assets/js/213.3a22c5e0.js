(window.webpackJsonp=window.webpackJsonp||[]).push([[213],{567:function(t,s,a){"use strict";a.r(s);var n=a(25),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"네이버-뉴스-기사-크롤링"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#네이버-뉴스-기사-크롤링"}},[t._v("#")]),t._v(" 네이버 뉴스 기사 크롤링")]),t._v(" "),a("p",[t._v("네이버 뉴스에 접속하여, 원하는 키워드와 원하는 기간을 설정하여 나오는 모든 기사 검색 결과를 크롤링하는 방법입니다.\n기사 타이틀, 기사 등록일, 언론사 및 정확하지는 않지만 기자 이름과 기자 이메일까지 가져옵니다\n마지막으로 엑셀 및 csv로 저장합니다.")]),t._v(" "),a("h2",{attrs:{id:"코드"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#코드"}},[t._v("#")]),t._v(" 코드")]),t._v(" "),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" requests\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" bs4 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" BeautifulSoup\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" math\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" pandas\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" re\n\n\nresultList "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\nurl "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://search.naver.com/search.naver?"')]),t._v("\n\nparams "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"where"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'news'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 네이버 기사 검색 값")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"query"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'매틱 네트워크 스테이킹'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 페이지네이션 값")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"start"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# \"nso\": 'so:r,p:1y,a:all'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# nso: so: r, p: 1y, a: all -> 최근 1년")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# nso: so: r, p: 6m, a: all -> 최근 6개월")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# nso: so: r, p: 1d, a: all -> 1일")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 없으면 전체 검색")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# headers={'User-Agent': 'Mozilla/5.0'} -> 안티 크롤링 회피")]),t._v("\nraw "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" requests"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" headers"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'User-Agent'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Mozilla/5.0'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" params"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("params"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nhtml "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" BeautifulSoup"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("raw"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"html.parser"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 검색결과 html body")]),t._v("\narticles "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" html"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("select"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ul.type01 > li"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 전체 기사 수")]),t._v("\ntotalCount "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" html"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("select"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"div.section_head > div.title_desc > span"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("split"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("' / '")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("range")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("floor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("totalCount"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        params"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'start'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" i\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        params"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'start'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n\n    raw "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" requests"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" headers"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'User-Agent'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Mozilla/5.0'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" params"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("params"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    html "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" BeautifulSoup"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("raw"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"html.parser"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    articles "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" html"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("select"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ul.type01 > li"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" ar "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" articles"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 제목 값")]),t._v("\n        title "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("select_one"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"a._sp_each_title"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("text\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 검색된 기사의 url을 가져와서 다시 html을 get")]),t._v("\n        articleUrl "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("find"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"a"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"href"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        innerRaw "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" requests"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("articleUrl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" headers"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'User-Agent'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Mozilla/5.0'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 가져온 기사 html중 '기사', '@' string을 모두 가져온다")]),t._v("\n        innerHtml "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" BeautifulSoup"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("innerRaw"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"html.parser"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        reporter "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" innerArticles "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" innerHtml"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("text"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("re"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("compile")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"기자"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        reporterEmail "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" innerArticles "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" innerHtml"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("text"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("re"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("compile")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 언론사 값")]),t._v("\n        source "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("select_one"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"span._sp_each_source"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("text\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 등록일 값")]),t._v("\n        date "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("select_one"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dd.txt_inline"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("split"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"  "')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n        res "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"title"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" title"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"company"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" source"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n               "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"url"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" articleUrl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"date"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" date"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"reporter"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" reporter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"reporterEmail"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" reporterEmail"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        resultList"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("append"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 검색된 기사 갯수")]),t._v("\nresultList"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("append"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"totalCount"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" totalCount"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\ndf "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" pandas"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DataFrame"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("resultList"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\ndf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("to_csv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'blockChain_articles.csv'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ndf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("to_excel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'blockChain_articles.xlsx'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);