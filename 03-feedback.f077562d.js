function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=u||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,v=Math.min,m=function(){return l.Date.now()};function p(e,t,n){var o,i,r,a,f,u,c=0,l=!1,s=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=o,r=i;return o=i=void 0,c=t,a=e.apply(r,n)}function j(e){return c=e,f=setTimeout(w,t),l?b(e):a}function h(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-c>=r}function w(){var e=m();if(h(e))return O(e);f=setTimeout(w,function(e){var n=t-(e-u);return s?v(n,r-(e-c)):n}(e))}function O(e){return f=void 0,p&&o?b(e):(o=i=void 0,a)}function S(){var e=m(),n=h(e);if(o=arguments,i=this,u=e,n){if(void 0===f)return j(u);if(s)return f=setTimeout(w,t),b(u)}return void 0===f&&(f=setTimeout(w,t)),a}return t=y(t)||0,g(n)&&(l=!!n.leading,r=(s="maxWait"in n)?d(y(n.maxWait)||0,t):r,p="trailing"in n?!!n.trailing:p),S.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=u=i=f=void 0},S.flush=function(){return void 0===f?a:O(m())},S}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=r.test(e);return n||a.test(e)?f(e.slice(2),n?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),p(e,t,{leading:o,maxWait:t,trailing:i})};const b={},j=document.querySelector("form"),h=document.querySelector("button");j.addEventListener("input",e(t)((function(e){localStorage.setItem("feedback-form-state",JSON.stringify(b)),b[e.target.name]=e.target.value}),500)),h.addEventListener("click",(function(e){e.preventDefault(),localStorage.removeItem("feedback-form-state"),j.reset(),console.log(b)})),function(){const e=JSON.parse(localStorage.getItem("feedback-form-state"));e&&(j.email.value=e.email,j.message.value=e.message)}();
//# sourceMappingURL=03-feedback.f077562d.js.map
