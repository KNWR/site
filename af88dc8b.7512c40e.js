(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{149:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var a=n(1),s=n(9),r=(n(0),n(163)),i={id:"e2e-tests",title:"End to End Tests",sidebar_label:"End to End Tests"},o={id:"e2e-tests",title:"End to End Tests",description:"End to End (E2E) tests are high level tests that tests. Instead of testing lower level functionality, such as if components render correctly or functions take certain arguments, they test at the application level. These are typically the kinds of tests that you would run to check if you app works. We have chosen [Testcafe](https://github.com/DevExpress/testcafe) as our testing framework. It is a much nicer alternative to [webdriverio](http://webdriver.io), [spectron](https://electronjs.org/spectron), and [selenium](https://www.seleniumhq.org).",source:"@site/docs/e2e-tests.md",permalink:"/docs/e2e-tests",sidebar_label:"End to End Tests",sidebar:"docs",previous:{title:"Component Tests",permalink:"/docs/component-tests"},next:{title:"Internals",permalink:"/docs/internals"}},c=[{value:"Writing End to End Tests",id:"writing-end-to-end-tests",children:[]},{value:"Running Tests",id:"running-tests",children:[{value:"Watching Tests",id:"watching-tests",children:[]}]}],l={rightToc:c},p="wrapper";function u(e){var t=e.components,n=Object(s.a)(e,["components"]);return Object(r.b)(p,Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"End to End (E2E) tests are high level tests that tests. Instead of testing lower level functionality, such as if components render correctly or functions take certain arguments, they test at the application level. These are typically the kinds of tests that you would run to check if you app works. We have chosen ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/DevExpress/testcafe"}),"Testcafe")," as our testing framework. It is a much nicer alternative to ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"http://webdriver.io"}),"webdriverio"),", ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://electronjs.org/spectron"}),"spectron"),", and ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.seleniumhq.org"}),"selenium"),"."),Object(r.b)("h2",{id:"writing-end-to-end-tests"},"Writing End to End Tests"),Object(r.b)("p",null,"By convention, all E2E test modules have the following filename suffix: ",Object(r.b)("inlineCode",{parentName:"p"},".e2e.js"),". An example of test module filename would be ",Object(r.b)("inlineCode",{parentName:"p"},"HomePage.e2e.js"),"."),Object(r.b)("p",null,"Here's some examples of E2E tests:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Testing if you app opens and closes"),Object(r.b)("li",{parentName:"ul"},"Testing if the title bar has the expected text"),Object(r.b)("li",{parentName:"ul"},"Testing if a popup shows after clicking a button")),Object(r.b)("p",null,"Here's an example of an E2E test:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"test('e2e', async t => {\n  await t.expect(getPageTitle()).eql('Hello Electron React!');\n});\n")),Object(r.b)("p",null,"Simply by reading this test, we can infer what it does:\n1. Gets the page title\n2. Asserts that it equals ",Object(r.b)("inlineCode",{parentName:"p"},"'Hello Electron React!'"),"\n3. Returns a promise"),Object(r.b)("p",null,"For more writing tests with Testcafe, refer to ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://devexpress.github.io/testcafe/documentation/test-api/"}),"their docs"),"."),Object(r.b)("h2",{id:"running-tests"},"Running Tests"),Object(r.b)("p",null,"After you have written E2E tests, we can now run tests. E2E tests must be built before running them. So we can run ",Object(r.b)("inlineCode",{parentName:"p"},"yarn build-e2e")," to build the E2E tests and then ",Object(r.b)("inlineCode",{parentName:"p"},"yarn test-e2e"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"yarn build-e2e\nyarn test-e2e\n")),Object(r.b)("p",null,"If you would like to run the E2E tests in the background without them opening (headlessly), run ",Object(r.b)("inlineCode",{parentName:"p"},"START_MINIMIZED=true yarn build-e2e")," and then run the E2E tests:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"START_MINIMIZED=true yarn build-e2e\nyarn test-e2e\n")),Object(r.b)("h3",{id:"watching-tests"},"Watching Tests"),Object(r.b)("p",null,"Similar to watching component tests, can be watched as well. This can be done by running ",Object(r.b)("inlineCode",{parentName:"p"},"yarn test-e2e-live"),". ",Object(r.b)("inlineCode",{parentName:"p"},"testcafe --live")," is used to watch tests and run."))}u.isMDXComponent=!0},163:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return u}));var a=n(0),s=n.n(a),r=s.a.createContext({}),i=function(e){var t=s.a.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},o=function(e){var t=i(e.components);return s.a.createElement(r.Provider,{value:t},e.children)};var c="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return s.a.createElement(s.a.Fragment,{},t)}},p=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,c=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}(e,["components","mdxType","originalType","parentName"]),p=i(n),u=a,b=p[o+"."+u]||p[u]||l[u]||r;return n?s.a.createElement(b,Object.assign({},{ref:t},c,{components:n})):s.a.createElement(b,Object.assign({},{ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[c]="string"==typeof e?e:a,i[1]=o;for(var u=2;u<r;u++)i[u]=n[u];return s.a.createElement.apply(null,i)}return s.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);