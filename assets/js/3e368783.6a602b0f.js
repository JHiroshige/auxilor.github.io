"use strict";(self.webpackChunkauxilor_docs=self.webpackChunkauxilor_docs||[]).push([[4564],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(n),f=r,y=m["".concat(s,".").concat(f)]||m[f]||p[f]||l;return n?o.createElement(y,a(a({ref:t},u),{},{components:n})):o.createElement(y,a({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,a=new Array(l);a[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var c=2;c<l;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3458:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p}});var o=n(7462),r=n(3366),l=(n(7294),n(3905)),a=["components"],i={},s="minecraft:follow_mobs",c={unversionedId:"all-plugins/custom-entity-ai/all-entity-goals/follow_mobs",id:"all-plugins/custom-entity-ai/all-entity-goals/follow_mobs",title:"minecraft:follow_mobs",description:"Allows an entity to follow and gather around all types of mobs, both hostile and neutral mobs",source:"@site/docs/all-plugins/custom-entity-ai/all-entity-goals/follow_mobs.md",sourceDirName:"all-plugins/custom-entity-ai/all-entity-goals",slug:"/all-plugins/custom-entity-ai/all-entity-goals/follow_mobs",permalink:"/all-plugins/custom-entity-ai/all-entity-goals/follow_mobs",editUrl:"https://github.com/Auxilor/docs/tree/main/packages/create-docusaurus/templates/shared/docs/all-plugins/custom-entity-ai/all-entity-goals/follow_mobs.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"minecraft:follow_boats",permalink:"/all-plugins/custom-entity-ai/all-entity-goals/follow_boats"},next:{title:"minecraft:illusioner_blindness_spell",permalink:"/all-plugins/custom-entity-ai/all-entity-goals/illusioner_blindness_spell"}},u={},p=[],m={toc:p};function f(e){var t=e.components,n=(0,r.Z)(e,a);return(0,l.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"minecraftfollow_mobs"},(0,l.kt)("inlineCode",{parentName:"h1"},"minecraft:follow_mobs")),(0,l.kt)("p",null,"Allows an entity to follow and gather around all types of mobs, both hostile and neutral mobs"),(0,l.kt)("h1",{id:"example-config"},"Example Config"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"- key: minecraft:follow_mobs\n  priority: 0\n  args:\n    speed: 1 # The speed at which to follow\n    minDistance: 2 # The minimum distance\n    maxDistance: 10 # The maximum distance\n")))}f.isMDXComponent=!0}}]);