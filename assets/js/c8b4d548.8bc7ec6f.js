"use strict";(self.webpackChunkdocumentation_book=self.webpackChunkdocumentation_book||[]).push([[2349],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return k}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),u=s(n),k=a,d=u["".concat(l,".").concat(k)]||u[k]||c[k]||o;return n?r.createElement(d,i(i({ref:t},m),{},{components:n})):r.createElement(d,i({ref:t},m))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8225:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return l},default:function(){return k},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return c}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],p={},l=void 0,s={unversionedId:"General/MostCommonGitOperations",id:"General/MostCommonGitOperations",title:"MostCommonGitOperations",description:"Most common Git Operations",source:"@site/docs/General/MostCommonGitOperations.md",sourceDirName:"General",slug:"/General/MostCommonGitOperations",permalink:"/Book/docs/General/MostCommonGitOperations",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/General/MostCommonGitOperations.md",tags:[],version:"current",frontMatter:{},sidebar:"generalSidebar",previous:{title:"Summary",permalink:"/Book/docs/intro_general"},next:{title:"Review Guideline",permalink:"/Book/docs/General/ReviewGuideline"}},m={},c=[{value:"<strong>Most common Git Operations</strong>\xa0",id:"most-common-git-operations",level:3}],u={toc:c};function k(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"most-common-git-operations"},(0,o.kt)("strong",{parentName:"h3"},"Most common Git Operations"),"\xa0"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"non-interactive rebase:"),"\xa0usually needed to resolve conflicts before creating / merging a PR"),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Update your current branch and local base branch"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"git pull"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If you didn't do step 1, then do the following"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"git pull"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Start the non-interactive rebase process"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"git rebase origin/base-branch"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In case of conflicts use any visual tool to resolve conflicts e.g. Android Studio or App Code")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"After resolving conflicts in a single commit you could either start by"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"git rebase --``continue")),(0,o.kt)("p",{parentName:"li"},"or if it complained about not retrieving anything from your own conflicting code but rather using the others' code as is then"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"git rebase --skip"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"At the very end of the rebase process when everything is done and properly resolved you need to push force using"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"git push --force-with-lease"))))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Steps to perform\xa0*",(0,o.kt)("strong",{parentName:"p"},"*interactive rebase (**"),"Interactive rebase to adjust commits / messages / squash .... etc)"),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Decide what you need to do and the number of tickets that you'd like to work on, you can do that in your branch/pr on github or locally by viewing the log of your current branch via the IDE or from command-line\xa0"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"git log"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"When you're ready to start the rebase process do the following"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"git rebase -i HEAD~``5")),(0,o.kt)("p",{parentName:"li"},"where\xa0",(0,o.kt)("strong",{parentName:"p"},"5"),"\xa0here represents the number of commits to be rebased interactively start from and including the HEAD of your current branch.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"You'll be taken to visual editor in case of VI/VIM or Nano/Emacs to start editing press on Vi/Vim press\xa0",(0,o.kt)("strong",{parentName:"p"},"i"),"\xa0to end editing press\xa0",(0,o.kt)("strong",{parentName:"p"},"esc"),"\xa0to save and exit (while not in editing mode) write\xa0",(0,o.kt)("strong",{parentName:"p"},":x"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"When rebasing interactively first you'll be prompted about the commits and what to do with each of them")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Then you'll be asked about the commit messages")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"At the very end of any rebase you need to do a push force."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"git push --force-with-lease"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In case something went wrong type the following to stop the proecess"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"git rebase --abort"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In case something goes horrible wrong like a wrong force-push for example, you can also revert to a previous state by the following (First check that point in the history of your local changes before force-pushing)"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"git reflog"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Pick the correct state's hash / checksum"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"git checkout XXXXXXXXXXXX"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Then as always push"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"git push --force-with-lease"))))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Cherry Pick"),"\xa0usually needed to have a specific commit to a branch (Ex: we need a specific feature to be added to a hot fix release OR from a release branch to development)"),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"find commit hash you want to include from either git log or Github.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"perform cherry pick command\xa0"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"git cherry-pick {COMMIT_HASH}"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In case of conflicts use any visual tool to resolve conflicts e.g. Android Studio or App Code")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"After resolving conflicts in a single commit you could either start by"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"git cherry-pick --``continue"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In case something went wrong type the following to stop the proecess"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"git cherry-pick --abort"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Then as always push"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"git push --force-with-lease")))))))}k.isMDXComponent=!0}}]);