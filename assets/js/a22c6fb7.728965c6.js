"use strict";(self.webpackChunkdocumentation_book=self.webpackChunkdocumentation_book||[]).push([[2610],{3905:function(e,r,n){n.d(r,{Zo:function(){return l},kt:function(){return y}});var t=n(7294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function c(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?c(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function u(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},c=Object.keys(e);for(t=0;t<c.length;t++)n=c[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)n=c[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=t.createContext({}),s=function(e){var r=t.useContext(i),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},l=function(e){var r=s(e.components);return t.createElement(i.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},f=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,c=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),f=s(n),y=o,m=f["".concat(i,".").concat(y)]||f[y]||p[y]||c;return n?t.createElement(m,a(a({ref:r},l),{},{components:n})):t.createElement(m,a({ref:r},l))}));function y(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var c=n.length,a=new Array(c);a[0]=f;var u={};for(var i in r)hasOwnProperty.call(r,i)&&(u[i]=r[i]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var s=2;s<c;s++)a[s]=n[s];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5244:function(e,r,n){n.r(r),n.d(r,{assets:function(){return l},contentTitle:function(){return i},default:function(){return y},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return p}});var t=n(7462),o=n(3366),c=(n(7294),n(3905)),a=["components"],u={},i=void 0,s={unversionedId:"iOS/Concurrency/Quick Notes/From async to regular work",id:"iOS/Concurrency/Quick Notes/From async to regular work",title:"From async to regular work",description:"",source:"@site/docs/iOS/Concurrency/Quick Notes/From async to regular work.md",sourceDirName:"iOS/Concurrency/Quick Notes",slug:"/iOS/Concurrency/Quick Notes/From async to regular work",permalink:"/Book/docs/iOS/Concurrency/Quick Notes/From async to regular work",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/iOS/Concurrency/Quick Notes/From async to regular work.md",tags:[],version:"current",frontMatter:{},sidebar:"iOSsidebar",previous:{title:"Untitled",permalink:"/Book/docs/iOS/Concurrency/Modern Concurrency Book/Untitled"},next:{title:"RxSwift",permalink:"/Book/docs/iOS/RxSwift/Introduction"}},l={},p=[],f={toc:p};function y(e){var r=e.components,n=(0,o.Z)(e,a);return(0,c.kt)("wrapper",(0,t.Z)({},f,n,{components:r,mdxType:"MDXLayout"}),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-swift"},'func doAsyncWork() async {\n    print("Doing async work")\n}\n\nfunc doRegularWork() {\n    Task {\n        await doAsyncWork()\n    }\n}\n\ndoRegularWork()\n')))}y.isMDXComponent=!0}}]);