"use strict";(self.webpackChunkdocumentation_book=self.webpackChunkdocumentation_book||[]).push([[3452],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1411:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={},s="Generics",p={unversionedId:"iOS/Swift/Swift/Generics",id:"iOS/Swift/Swift/Generics",title:"Generics",description:"Tag: #generics, #some, #opaque, #polymorphism",source:"@site/docs/iOS/Swift/Swift/Generics.md",sourceDirName:"iOS/Swift/Swift",slug:"/iOS/Swift/Swift/Generics",permalink:"/Book/docs/iOS/Swift/Swift/Generics",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/iOS/Swift/Swift/Generics.md",tags:[],version:"current",frontMatter:{},sidebar:"iOSsidebar",previous:{title:"Introduction",permalink:"/Book/docs/iOS/Swift/Swift/Intro"},next:{title:"Untitled",permalink:"/Book/docs/iOS/Concurrency/Modern Concurrency Book/Untitled"}},c={},u=[{value:"Polymorphism",id:"polymorphism",level:2},{value:"Attribute &quot;some&quot;",id:"attribute-some",level:2},{value:"Opaque Type",id:"opaque-type",level:3},{value:"Underlying Type",id:"underlying-type",level:3},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"Example 3",id:"example-3",level:2}],m={toc:u};function d(e){var t=e.components,l=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"generics"},"Generics"),(0,i.kt)("p",null,"Tag: #generics, #some, #opaque, #polymorphism"),(0,i.kt)("h2",{id:"polymorphism"},"Polymorphism"),(0,i.kt)("p",null,"::: Definition\nPolymorphism allows one piece of code to have many behaviors.\n:::"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Overloads achieve ",(0,i.kt)("strong",{parentName:"li"},"ad-hoc polymorphism"),". (Boilerplate code)"),(0,i.kt)("li",{parentName:"ul"},"Subtypes achieve ",(0,i.kt)("strong",{parentName:"li"},"subtype polymorphism.")," (Inheritance)"),(0,i.kt)("li",{parentName:"ul"},"Generics achieve ",(0,i.kt)("strong",{parentName:"li"},"parametric polymorphism."))),(0,i.kt)("h2",{id:"attribute-some"},'Attribute "some"'),(0,i.kt)("p",null,"Use to declare a generic type in parameter position or in result position."),(0,i.kt)("h3",{id:"opaque-type"},"Opaque Type"),(0,i.kt)("p",null,"A main type (as a protocol, an abstract class etc.) which is using for declaring a generic parameter."),(0,i.kt)("p",null,"::: New in Swift 5.7\nUsing some in parameter position.\n:::"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(9767).Z,width:"1594",height:"803"})),(0,i.kt)("h3",{id:"underlying-type"},"Underlying Type"),(0,i.kt)("p",null,"A subtype type (a class which is inherited from main type, applied a protocol etc.) which is using for reaching to target on run time."),(0,i.kt)("p",null,":::Note\nUsing some with Local variables, Underlying type has to be declared during implementation. This means local variables with opaque type must always have an initial value; and if you don't provide one, the compiler will report an error.\n:::"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(5927).Z,width:"1863",height:"920"})),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(9553).Z,width:"1826",height:"903"})),(0,i.kt)("p",null,'::: NOTE\nUsing "some" in parameter position is new in Swift 5.7.'),(0,i.kt)("p",null,"The underlying type only needs to be fixed for the scope of the parameter, so each call can provide a different argument type."),(0,i.kt)("p",null,"For an opaque result type, the underlying type is inferred from the return value in the implementation."),(0,i.kt)("p",null,"A method or computed property with an opaque result type can be called from anywhere in the program, so the scope of this named value is global."),(0,i.kt)("p",null,"This means the underlying return type has to be the same across all return statements; and if it isn't, the compiler will report an error that the underlying return values have mismatched types.\n:::"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(6805).Z,width:"1841",height:"902"})),(0,i.kt)("p",null,"For an opaque SwiftUI view, the ViewBuilder DSL can transform control-flow statements to have the same underlying return type for each branch."),(0,i.kt)("p",null,"So in this case, we can fix the issue by using the ViewBuilder DSL."),(0,i.kt)("p",null,"Writing an @ViewBuilder annotation on the method and removing return statements will enable the result to be built for us by the ViewBuilder type."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(2137).Z,width:"1829",height:"899"})),(0,i.kt)("h2",{id:"example-1"},"Example 1"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(4183).Z,width:"1387",height:"576"})),(0,i.kt)("h2",{id:"example-2"},"Example 2"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(2759).Z,width:"1045",height:"478"})),(0,i.kt)("h2",{id:"example-3"},"Example 3"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"protocol AnimalFeed {\n  associatedtype CropType: Crop where CropType.Feed == Self\n  static func grow() -> CropType\n}\n\nprotocol Crop {\n  associatedtype Feed: AnimalFeed where Feed.CropType == Self\n  func harvest() -> Feed\n}\n\nprotocol Animal {\n  associatedtype Feed: AnimalFeed\n  func eat(_ food: Feed)\n}\n\nstruct Farm {\n  func feed(_ animal: some Animal) {\n    let crop = type(of: animal).Feed.grow()\n    let produce = crop.harvest()\n    animal.eat(produce)\n  }\n\n  func feedAll(_ animals: [any Animal]) {\n    for animal in animals {\n      feed(animal)\n    }\n  }\n}\n\nstruct Cow: Animal {\n  func eat(_ food: Hay) {}\n}\n\nstruct Hay: AnimalFeed {\n  static func grow() -> Alfalfa {\n    Alfalfa()\n  }\n}\n\nstruct Alfalfa: Crop {\n  func harvest() -> Hay {\n    Hay()\n  }\n}\n")))}d.isMDXComponent=!0},9767:function(e,t,n){t.Z=n.p+"assets/images/Pasted image 20220627152354-ca5f214a1515fe56eaade08ba81f417a.png"},9553:function(e,t,n){t.Z=n.p+"assets/images/Pasted image 20220627153429-33c6191c4d7d2de2d264834a13e557e3.png"},5927:function(e,t,n){t.Z=n.p+"assets/images/Pasted image 20220627153807-793e56604c708a8c55ca8002641dec70.png"},6805:function(e,t,n){t.Z=n.p+"assets/images/Pasted image 20220627154210-2edb9e6de4b9ca09a0f51a6f6dbbb2d2.png"},2137:function(e,t,n){t.Z=n.p+"assets/images/Pasted image 20220627154308-885101e58b832a45d27893a2adaec016.png"},4183:function(e,t,n){t.Z=n.p+"assets/images/Pasted image 20220627155305-c6a9a2d7813744c238e1c978535a05b4.png"},2759:function(e,t,n){t.Z=n.p+"assets/images/Pasted image 20220627155409-9535572eb1ea771ab820f4a122d4ff5a.png"}}]);