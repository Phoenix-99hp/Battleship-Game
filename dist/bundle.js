(()=>{"use strict";var t={333:(t,n,e)=>{e.d(n,{Z:()=>f});var i=e(645),o=e.n(i),r=e(667),a=e.n(r),s=e(971),l=e(857),d=o()((function(t){return t[1]})),p=a()(s.Z),c=a()(l.Z);d.push([t.id,"@font-face {\n\tfont-family: RussoOne;\n\tsrc: url("+p+");\n}\n\n@font-face {\n\tfont-family: BebasNeue;\n\tsrc: url("+c+");\n}\n",""]);const f=d},524:(t,n,e)=>{e.d(n,{Z:()=>s});var i=e(645),o=e.n(i),r=e(333),a=o()((function(t){return t[1]}));a.i(r.Z),a.push([t.id,'html,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol,\nul {\n\tlist-style: none;\n}\nblockquote,\nq {\n\tquotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n\tcontent: "";\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n* {\n\t-webkit-user-select: none;\n\t-khtml-user-select: none;\n\t-moz-user-select: none;\n\t-o-user-select: none;\n\tuser-select: none;\n}\n\nhtml,\nbody,\n#content {\n\twidth: 100%;\n\theight: 100%;\n\tmin-height: 100vh;\n}\n\n/* #mainContainer {\n\tdisplay: flex;\n\tflex: 1 1 auto;\n\theight: calc(100vh - 160px);\n\talign-items: center;\n\tjustify-content: center;\n} */\n\nbutton {\n\tcursor: pointer;\n}\n\nheader {\n\tdisplay: flex;\n\tjustify-content: center;\n\t/* text-align: center; */\n\t/* margin-top: 10px;\n\tmargin-bottom: 5px; */\n\tflex: 1 1 160px;\n\tpadding: 30px 20px 0;\n\tfont-size: 100px;\n\tcolor: rgb(0, 81, 255);\n\ttext-shadow: -1px 1px 2px rgb(197, 27, 4);\n\tfont-family: "BebasNeue", cursive;\n}\n\nmain {\n\tmax-width: 1000px;\n\tmargin: 0 auto;\n\ttext-align: center;\n\tposition: relative;\n}\n\n#shipsContainer {\n\tdisplay: block;\n\tmargin: 0 auto;\n\tmargin-bottom: 20px;\n}\n\n#placeBoard,\n#computerBoard {\n\tdisplay: grid;\n\tgrid-template-rows: repeat(11, 50px);\n\tgrid-template-columns: repeat(11, 50px);\n\twidth: fit-content;\n\tmargin: 0 auto;\n\tmargin-top: 40px;\n\tmargin-bottom: 20px;\n\ttext-align: center;\n\t/* border-bottom: 1px solid black; */\n\t/* border-left: 1px solid black; */\n}\n\n#placeBoard {\n\tmargin-top: 20px;\n}\n\n#playerBoard {\n\tdisplay: grid;\n\tgrid-template-rows: repeat(11, 25px);\n\tgrid-template-columns: repeat(11, 25px);\n\tmargin: 0 auto;\n\ttext-align: center;\n\tposition: absolute;\n\ttop: -100px;\n\tleft: -50px;\n\twidth: fit-content;\n\theight: fit-content;\n}\n\n#battleship {\n\tbackground-color: purple;\n\theight: 199px;\n\tz-index: 98;\n}\n\n#carrier {\n\tbackground-color: aqua;\n\theight: 249px;\n\tz-index: 98;\n}\n\n#destroyer {\n\tbackground-color: rgb(13, 190, 13);\n\theight: 149px;\n\tz-index: 98;\n}\n\n#patrol {\n\tbackground-color: orange;\n\theight: 99px;\n\tz-index: 98;\n}\n\n#submarine {\n\tbackground-color: rgb(235, 220, 15);\n\theight: 149px;\n\tz-index: 98;\n}\n\n/* .Battleship,\n.Carrier,\n.Destroyer,\n.Patrol,\n.Submarine {\n\theight: 24px;\n\twidth: 24px;\n} */\n\n.dropzone {\n\t/* z-index: 1; */\n\ttext-align: center;\n}\n\n#buttonContainer {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\twidth: 100%;\n\ttext-align: center;\n\tmargin-bottom: 10px;\n\ttext-align: left;\n\theight: fit-content;\n}\n\n#shipsContainer {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\tflex-wrap: wrap;\n\twidth: 100%;\n\tpadding-top: 0px;\n\tpadding-bottom: 40px;\n\tpadding-right: 10px;\n\tpadding-left: 10px;\n\tbox-sizing: border-box;\n}\n\n#playerContainer {\n\twidth: fit-content;\n}\n\n.grid-item {\n\twidth: 100%;\n\tborder: 1px solid black;\n}\n\n.ship {\n\t/* z-index: 99; */\n\theight: 48px;\n\twidth: 49px;\n\tmargin: 0 auto;\n\tmargin-top: 20px;\n\tmargin-left: 10px;\n\tmargin-right: 10px;\n\tcursor: pointer;\n}\n\n.square {\n\tbox-sizing: border-box;\n\t/* z-index: 1; */\n\t/* display: inline-block; */\n\tdisplay: inline-grid;\n\t-webkit-user-drag: none;\n\t-khtml-user-drag: none;\n\t-moz-user-drag: none;\n\t-o-user-drag: none;\n\t-webkit-user-select: none;\n\t-khtml-user-select: none;\n\t-moz-user-select: none;\n\t-o-user-select: none;\n\tuser-select: none;\n\twidth: 100%;\n\tborder-top: 1px solid black;\n\tborder-right: 1px solid black;\n\t/* border-top: 1px solid black;\n\tborder-right: 1px solid black; */\n}\n\n.label-top,\n.label-left,\n.square {\n\tline-height: 3;\n\ttext-align: center;\n}\n\n.label-top-mini,\n.label-left-mini {\n\tline-height: 1.5;\n\ttext-align: center;\n}\n\n.label-left,\n.label-left-mini {\n\t/* border-left: none; */\n\tborder-top: none;\n\tborder-left: none;\n\tborder-bottom: none;\n\t/* background-color: white; */\n}\n\n.label-top,\n.label-top-mini {\n\tborder-right: none;\n\tborder-top: none;\n\t/* background-color: white; */\n}\n\n#ready {\n\tfloat: right;\n}\n\n.hide {\n\tvisibility: hidden;\n}\n\n.hidden {\n\tdisplay: none;\n}\n\n.blur {\n\t-webkit-filter: blur(5px);\n\tfilter: blur(5px);\n}\n\n.miss {\n\tcolor: blue;\n}\n\n.hit {\n\tcolor: red;\n}\n\n.sunk {\n\tcolor: orangered;\n}\n\n/* .game-tile {\n\tline-height: 1.5;\n}\n\n.Battleship {\n\tbackground-color: purple;\n}\n\n.Carrier {\n\tbackground-color: aqua;\n}\n\n.Destroyer {\n\tbackground-color: rgb(13, 190, 13);\n}\n\n.Patrol {\n\tbackground-color: orange;\n}\n\n.Submarine {\n\tbackground-color: rgb(235, 220, 15);\n} */\n\n#btnContainer {\n\tposition: absolute;\n\ttop: 50%;\n\tleft: 50%;\n\ttransform: translate(-50%, -50%);\n}\n\n#startBtn {\n\t/* line-height: 32px;\n\theight: 34px; */\n\tborder: 2px solid rgb(0, 81, 255);\n\tline-height: 38px;\n\theight: 40px;\n\twidth: 150px;\n\tfont-size: 16px;\n\tborder-radius: 3.5px;\n\tfont-family: "RussoOne", sans-serif;\n\tcolor: rgb(61, 59, 59);\n\tbackground-color: white;\n\tpadding-top: 0px;\n\tpadding-bottom: 0px;\n}\n\n#startBtn:hover {\n\tbackground-color: rgb(0, 81, 255);\n\tcolor: white;\n}\n\n#rotate,\n#ready {\n\t/* line-height: 30px;\n\theight: 33px; */\n\tline-height: 38px;\n\theight: 40px;\n\twidth: 150px;\n\tfont-size: 16px;\n\tborder: 2px solid rgb(0, 81, 255);\n\t/* font-size: 13px; */\n\tborder-radius: 3.5px;\n\tfont-family: "RussoOne", sans-serif;\n\tcolor: rgb(61, 59, 59);\n\tbackground-color: white;\n\toutline: none;\n}\n\n#rotate:hover {\n\tcolor: white;\n\tbackground-color: rgb(0, 81, 255);\n}\n\n#ready {\n\tborder: 2px solid rgb(58, 214, 58);\n}\n\n#ready:hover {\n\tcolor: white;\n\tbackground-color: rgb(58, 214, 58);\n}\n\n#toast {\n\twidth: fit-content;\n\tfont-family: "RussoOne", sans-serif;\n\tmargin: 0 auto;\n\tmargin-top: 20px;\n}\n\n#errorMsg {\n\tdisplay: none;\n\tposition: absolute;\n\tborder: 2px solid black;\n\tfont-family: "RussoOne", sans-serif;\n\tz-index: 99;\n\tborder: 2px solid rgb(197, 27, 4);\n\tborder-radius: 4px;\n\tpadding: 5px;\n\twidth: fit-content;\n\ttop: 40%;\n\tleft: 50%;\n\ttransform: translateY(-40%);\n\ttransform: translateX(-50%);\n\ttext-align: center;\n\tbackground-color: rgb(247, 244, 244);\n}\n\n#ok {\n\tbottom: 10px;\n\tz-index: 99;\n\tmargin: 0 auto;\n\tdisplay: block;\n\tborder: 2px solid rgb(58, 214, 58);\n\tbackground-color: rgb(58, 214, 58);\n\tcolor: whitesmoke;\n\tfont-size: 13px;\n\tborder-radius: 3.5px;\n\tfont-family: "RussoOne", sans-serif;\n}\n\np {\n\tmargin: 0 auto;\n\tmargin-top: 30px;\n\tmargin-bottom: 30px;\n}\n\n#drag {\n\tmargin: 0;\n\tline-height: 39px;\n\tfont-family: "RussoOne", sans-serif;\n\tfont-size: 13px;\n}\n\n#computerBoard {\n\tpadding-bottom: 20px;\n\tcursor: pointer;\n}\n\n.dropzone:nth-of-type(112),\n.dropzone:nth-of-type(113),\n.dropzone:nth-of-type(114),\n.dropzone:nth-of-type(115),\n.dropzone:nth-of-type(116),\n.dropzone:nth-of-type(117),\n.dropzone:nth-of-type(118),\n.dropzone:nth-of-type(119),\n.dropzone:nth-of-type(120),\n.dropzone:nth-of-type(121) {\n\tborder-bottom: 1px solid black;\n\theight: 51px;\n}\n\n.game-tile:nth-of-type(112),\n.game-tile:nth-of-type(113),\n.game-tile:nth-of-type(114),\n.game-tile:nth-of-type(115),\n.game-tile:nth-of-type(116),\n.game-tile:nth-of-type(117),\n.game-tile:nth-of-type(118),\n.game-tile:nth-of-type(119),\n.game-tile:nth-of-type(120),\n.game-tile:nth-of-type(121) {\n\tborder-bottom: 1px solid black;\n}\n\n.game-tile {\n\tline-height: 1.5;\n\t/* box-sizing: border-box; */\n}\n\n.Battleship {\n\tbackground-color: purple;\n}\n\n.Carrier {\n\tbackground-color: aqua;\n}\n\n.Destroyer {\n\tbackground-color: rgb(13, 190, 13);\n}\n\n.Patrol {\n\tbackground-color: orange;\n}\n\n.Submarine {\n\tbackground-color: rgb(235, 220, 15);\n}\n\n.Battleship,\n.Carrier,\n.Destroyer,\n.Patrol,\n.Submarine {\n\theight: 25px;\n\twidth: 25px;\n}\n\n/* .dropzone {\n\tz-index: 8000;\n}\n.square {\n\tz-index: 8000;\n} */\n\n.ship {\n\tz-index: 98;\n}\n\n.bottom {\n\tborder-bottom: 1px solid black;\n}\n\n.game:nth-of-type(112) {\n\tborder-bottom: 1px solid black;\n}\n\n@media screen and (max-width: 1200px) {\n\t#computerContainer {\n\t\tmargin: 0 auto;\n\t}\n\n\t#toast {\n\t\tmargin-bottom: 20px;\n\t}\n\t/* #playerContainer {\n\t\tmargin: 0 auto;\n\t} */\n\t#playerBoard {\n\t\tmargin-top: 40px;\n\t\tposition: relative;\n\t\ttop: 0;\n\t\tleft: 0;\n\t}\n\t#computerBoard {\n\t\tmargin: 0 auto;\n\t}\n}\n\n@media screen and (max-width: 610px) {\n\t#errorMsg {\n\t\ttop: 20%;\n\t}\n\theader {\n\t\tfont-size: 80px;\n\t}\n\n\t#shipsContainer {\n\t\tpadding-bottom: 75px;\n\t}\n\n\t#placeBoard {\n\t\tgrid-template-rows: repeat(11, 25px);\n\t\tgrid-template-columns: repeat(11, 25px);\n\t\tmargin: 0 auto;\n\t\theight: 100%;\n\t}\n\t.square {\n\t\tline-height: 1.5;\n\t\theight: 100%;\n\t}\n\t.ship {\n\t\twidth: 24px;\n\t}\n\t#battleship {\n\t\theight: 99px;\n\t}\n\t#carrier {\n\t\theight: 124px;\n\t}\n\t#destroyer {\n\t\theight: 74px;\n\t}\n\t#patrol {\n\t\theight: 49px;\n\t}\n\t#submarine {\n\t\theight: 74px;\n\t}\n\t#buttonContainer {\n\t\tmargin-top: 15px;\n\t\tmargin-bottom: 0px;\n\t}\n\t#drag {\n\t\twidth: 100%;\n\t\tbottom: 0;\n\t\tleft: 50%;\n\t\tposition: absolute;\n\t\ttransform: translateX(-50%);\n\t\ttext-align: center;\n\t\t/* top:100%; */\n\t\t/* transform: translateY(-100%); */\n\t\t/* padding-top: 40px; */\n\t}\n\t#computerBoard {\n\t\tgrid-template-rows: repeat(11, 25px);\n\t\tgrid-template-columns: repeat(11, 25px);\n\t\tmargin: 0 auto;\n\t\t/* position: absolute;\n\t\tleft: 50%;\n\t\ttransform: translateX(-50%); */\n\t}\n\t/* #playerBoard {\n\t\t/* width: fit-content; */\n\t/* left: 50%;\n\t\ttransform: translateX(-50%);\n\t\tmargin: 0 auto; */\n\t/* } */\n\t.label-top,\n\t.label-left {\n\t\tline-height: 1.5;\n\t\ttext-align: center;\n\t}\n\n\t.dropzone:nth-of-type(112),\n\t.dropzone:nth-of-type(113),\n\t.dropzone:nth-of-type(114),\n\t.dropzone:nth-of-type(115),\n\t.dropzone:nth-of-type(116),\n\t.dropzone:nth-of-type(117),\n\t.dropzone:nth-of-type(118),\n\t.dropzone:nth-of-type(119),\n\t.dropzone:nth-of-type(120),\n\t.dropzone:nth-of-type(121) {\n\t\tborder-bottom: 1px solid black;\n\t\theight: 26px;\n\t}\n}\n\n@media screen and (max-width: 360px) {\n\theader {\n\t\tfont-size: 70px;\n\t\tpadding-left: 0;\n\t\tpadding-right: 0;\n\t}\n}\n\n@media screen and (max-width: 320px) {\n\t#drag {\n\t\ttop: 100%;\n\t\tline-height: 1.5;\n\t}\n\t#shipsContainer {\n\t\tmargin-bottom: 0;\n\t\t/* padding-bottom: 0; */\n\t}\n\theader {\n\t\tmargin-bottom: 0px;\n\t\tfont-size: 60px;\n\t}\n\n\t#buttonContainer {\n\t\tflex-wrap: wrap;\n\t\tjustify-content: center;\n\t}\n\n\t#rotate {\n\t\tmargin-bottom: 10px;\n\t}\n}\n',""]);const s=a},645:t=>{t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var e=t(n);return n[2]?"@media ".concat(n[2]," {").concat(e,"}"):e})).join("")},n.i=function(t,e,i){"string"==typeof t&&(t=[[null,t,""]]);var o={};if(i)for(var r=0;r<this.length;r++){var a=this[r][0];null!=a&&(o[a]=!0)}for(var s=0;s<t.length;s++){var l=[].concat(t[s]);i&&o[l[0]]||(e&&(l[2]?l[2]="".concat(e," and ").concat(l[2]):l[2]=e),n.push(l))}},n}},667:t=>{t.exports=function(t,n){return n||(n={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),n.hash&&(t+=n.hash),/["'() \t\n]/.test(t)||n.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},857:(t,n,e)=>{e.d(n,{Z:()=>i});const i=e.p+"fonts/BebasNeue-Regular.ttf"},971:(t,n,e)=>{e.d(n,{Z:()=>i});const i=e.p+"fonts/RussoOne-Regular.ttf"},379:(t,n,e)=>{var i,o=function(){var t={};return function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}t[n]=e}return t[n]}}(),r=[];function a(t){for(var n=-1,e=0;e<r.length;e++)if(r[e].identifier===t){n=e;break}return n}function s(t,n){for(var e={},i=[],o=0;o<t.length;o++){var s=t[o],l=n.base?s[0]+n.base:s[0],d=e[l]||0,p="".concat(l," ").concat(d);e[l]=d+1;var c=a(p),f={css:s[1],media:s[2],sourceMap:s[3]};-1!==c?(r[c].references++,r[c].updater(f)):r.push({identifier:p,updater:g(f,n),references:1}),i.push(p)}return i}function l(t){var n=document.createElement("style"),i=t.attributes||{};if(void 0===i.nonce){var r=e.nc;r&&(i.nonce=r)}if(Object.keys(i).forEach((function(t){n.setAttribute(t,i[t])})),"function"==typeof t.insert)t.insert(n);else{var a=o(t.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}return n}var d,p=(d=[],function(t,n){return d[t]=n,d.filter(Boolean).join("\n")});function c(t,n,e,i){var o=e?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(t.styleSheet)t.styleSheet.cssText=p(n,o);else{var r=document.createTextNode(o),a=t.childNodes;a[n]&&t.removeChild(a[n]),a.length?t.insertBefore(r,a[n]):t.appendChild(r)}}function f(t,n,e){var i=e.css,o=e.media,r=e.sourceMap;if(o?t.setAttribute("media",o):t.removeAttribute("media"),r&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleSheet)t.styleSheet.cssText=i;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(i))}}var u=null,h=0;function g(t,n){var e,i,o;if(n.singleton){var r=h++;e=u||(u=l(n)),i=c.bind(null,e,r,!1),o=c.bind(null,e,r,!0)}else e=l(n),i=f.bind(null,e,n),o=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)};return i(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;i(t=n)}else o()}}t.exports=function(t,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i));var e=s(t=t||[],n);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var i=0;i<e.length;i++){var o=a(e[i]);r[o].references--}for(var l=s(t,n),d=0;d<e.length;d++){var p=a(e[d]);0===r[p].references&&(r[p].updater(),r.splice(p,1))}e=l}}}}},n={};function e(i){if(n[i])return n[i].exports;var o=n[i]={id:i,exports:{}};return t[i](o,o.exports,e),o.exports}e.n=t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},e.d=(t,n)=>{for(var i in n)e.o(n,i)&&!e.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:n[i]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),e.o=(t,n)=>Object.prototype.hasOwnProperty.call(t,n),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var n=e.g.document;if(!t&&n&&(n.currentScript&&(t=n.currentScript.src),!t)){var i=n.getElementsByTagName("script");i.length&&(t=i[i.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})(),(()=>{const t=class{constructor(){this.battleshipPosition=null,this.carrierPosition=null,this.destroyerPosition=null,this.patrolPosition=null,this.submarinePosition=null,this.board=[]}generateBoard(){let t=0,n=0;const e=["A","B","C","D","E","F","G","H","I","J"],i=[1,2,3,4,5,6,7,8,9,10];for(let o=0;o<100;o++)this.board[o]=e[t]+i[n],t++,!0===/9$/.test(o)&&(n++,t=0)}placeShips(t,n,e,i,o){this.battleshipPosition=t,this.carrierPosition=n,this.destroyerPosition=e,this.patrolPosition=i,this.submarinePosition=o;for(let r=0,a=0;r<this.board.length;r++,a++)a>4&&(a=0),this.board[r]===t[a]?this.board.splice(r,1,"Battleship"):this.board[r]===n[a]?this.board.splice(r,1,"Carrier"):this.board[r]===e[a]?this.board.splice(r,1,"Destroyer"):this.board[r]===i[a]?this.board.splice(r,1,"Patrol"):this.board[r]===o[a]&&this.board.splice(r,1,"Submarine")}},n=class{constructor(){this.position=[]}},i=class extends n{constructor(t,n){super(t),this.type="Battleship",this.orientation=n,this.size=4}},o=class extends n{constructor(t,n){super(t),this.type="Carrier",this.size=5,this.orientation=n}},r=class extends n{constructor(t,n){super(t),this.type="Destroyer",this.size=3,this.orientation=n}},a=class extends n{constructor(t,n){super(t),this.type="Patrol",this.size=2,this.orientation=n}},s=class extends n{constructor(t,n){super(t),this.type="Submarine",this.size=3,this.orientation=n}},l=()=>{document.getElementById("content").innerHTML='\n    <header>Battleship</header>\n    <div id="mainContainer">\n    <div id="btnContainer">\n        <button id="startBtn">Start Game</button>\n    <div>\n    </div>'};var d=e(379),p=e.n(d),c=e(524);p()(c.Z,{insert:"head",singleton:!1}),c.Z.locals,l(),function n(){const e=new class{constructor(){this.turn=!1}};e.Battleship=new i,e.Carrier=new o,e.Destroyer=new r,e.Patrol=new a,e.Submarine=new s,e.Gameboard=new t;const d=new class{constructor(){this.turn=!1}};function p(t,n){let e=d.Gameboard.board;for(let o=0;o<t.length;o++){let r=n||Math.floor(2*Math.random());if(!0!==/(Sunk)$/.test(t[o].position[0])){!1===/\d$/.test(t[o].position[0])&&!1===/(- Hit)$/.test(t[o].position[0])&&!1===/(Sunk)$/.test(t[o].position[0])&&(t[o].position[0]=e[Math.floor(Math.random()*e.length)]);for(let n=1;n<t[o].size;n++){function i(t,i,r){0===t&&/\d$/.test(!1===e[e.indexOf(r[o].position[n-1])+i])||0===t&&e[e.indexOf(r[o].position[n-1])]!==e[r[o].position[0]]?(r[o].position.splice(0),p(r,t)):0===t&&!0===/\d$/.test(e[e.indexOf(r[o].position[n-1])+i])?r[o].position[n]=e[e.indexOf(r[o].position[n-1])+i]:1===t&&!1===/\d$/.test(e[e.indexOf(r[o].position[n-1])-i])||1===t&&e[e.indexOf(r[o].position[n-1])]!==e[r[o].position[0]]?(r[o].position.splice(0),p(r,t)):1===t&&!0===/\d$/.test(e[e.indexOf(r[o].position[n-1])-i])&&(r[o].position[n]=e[e.indexOf(r[o].position[n])-i])}/\d$/.test(!1===t[o].position[n-1])&&/(- Hit)$/.test(!1===t[o].position[n-1])&&n>=2?(t[o].splice(1),n=1):"Horizontal"===t[o].orientation?0===r&&!1===/\d$/.test(e[e.indexOf(t[o].position[n-1])+1])||!0===/^J/i.test(e[e.indexOf(t[o].position[n-1])])&&!0===/^A/i.test(e[e.indexOf(t[o].position[n-1])+1])?(r=1,i(r,1,t)):0===r&&!0===/\d$/.test(e[e.indexOf(t[o].position[n-1])+1])?t[o].position[n]=e[e.indexOf(t[o].position[n-1])+1]:1===r&&!1===/\d$/.test(e[e.indexOf(t[o].position[n-1])-1])||!0===/^A/i.test(e[e.indexOf(t[o].position[n-1])])&&!0===/^J/i.test(e[e.indexOf(t[o].position[n-1])-1])?(r=0,i(r,1,t)):1===r&&!0===/\d$/i.test(e[e.indexOf(t[o].position[n-1])-1])&&(t[o].position[n]=e[e.indexOf(t[o].position[n-1])-1]):"Vertical"===t[o].orientation&&(0===r&&!1===/\d$/.test(e[e.indexOf(t[o].position[n-1])+10])?(r=1,i(r,10,t)):0===r&&!0===/\d$/.test(e[e.indexOf(t[o].position[n-1])+10])?t[o].position[n]=e[e.indexOf(t[o].position[n-1])+10]:1===r&&!1===/\d$/.test(e[e.indexOf(t[o].position[n-1])-10])?(r=0,i(r,10,t)):1===r&&!0===/\d$/.test(e[e.indexOf(t[o].position[n-1])-10])&&(t[o].position[n]=e[e.indexOf(t[o].position[n-1])-10]))}}}!function(t){const n=t[0].position.concat(t[1].position,t[2].position,t[3].position,t[4].position);n.forEach((e=>{if(n.lastIndexOf(e)!==n.indexOf(e)){let i=n.lastIndexOf(e);i>0&&i<=3?t[0].position.splice(0):i>3&&i<9?t[1].position.splice(0):i>=9&&i<12?t[2].position.splice(0):i>=12&&i<14?t[3].position.splice(0):i>=14&&i<17&&t[4].position.splice(0)}}))}(t),!0===function(t){let n=!0;for(let e=0;e<t.length&&!1!==n;e++)for(let i=0;i<t[e].size&&!1!==n;i++)if(!0!==/\d$/.test(t[e].position[i])){n=!1;break}return n}(t)||p(t)}function c(t,n,e,i,o,r,a,s){let l,d,p=a.filter((t=>{if(!1===/(- Hit)$/.test(t)&&!1===/(Miss)$/.test(t)&&!1===/(- Sunk)$/.test(t))return t}));if(void 0===r&&(l=p[Math.floor(Math.random()*p.length)],f(l,o,a)),!0===/^A/.test(a[a.indexOf(r)])&&!0===/^J/.test(a[a.indexOf(r)-1])&&(n=!1),!0===/^J/.test(a[a.indexOf(r)])&&!0===/^A/.test(a[a.indexOf(r)+1])&&(t=!1),a.includes(r))if(t&&n&&e&&i)d=Math.floor(2*Math.random()),0===d?(d=Math.floor(2*Math.random()),0===d?(l=a[a.indexOf(r)+1],f(l,o,a)):1===d&&(l=a[a.indexOf(r)-1],f(l,o,a))):1===d&&(d=Math.floor(2*Math.random()),0===d&&(d=Math.floor(2*Math.random()),0===d?(l=a[a.indexOf(r)+10],f(l,o,a)):1===d&&(l=a[a.indexOf(r)-10],f(l,o,a))));else if(t&&n&&e&&!i)d=Math.floor(2*Math.random()),0===d?(d=Math.floor(2*Math.random()),0===d?(l=a[a.indexOf(r)+1],f(l,o,a)):1===d&&(l=a[a.indexOf(r)-1],f(l,o,a))):1===d&&(l=a[a.indexOf(r)+10],f(l,o,a));else if(t&&n&&i&&!e)d=Math.floor(2*Math.random()),0===d?(d=Math.floor(2*Math.random()),0===d?(l=a[a.indexOf(r)+1],f(l,o,a)):1===d&&(l=a[a.indexOf(r)-1],f(l,o,a))):1===d&&(l=a[a.indexOf(r)-10],f(l,o,a));else if(n&&e&&i&&!t)d=Math.floor(2*Math.random()),0===d?(l=a[a.indexOf(r)-1],f(l,o,a)):1===d&&(d=Math.floor(2*Math.random()),0===d?(l=a[a.indexOf(r)+10],f(l,o,a)):1===d&&(l=a[a.indexOf(r)-10],f(l,o,a)));else if(t&&e&&i&&!n)d=Math.floor(2*Math.random()),0===d?(l=a[a.indexOf(r)+1],f(l,o,a)):1===d&&(d=Math.floor(2*Math.random()),0===d?(l=a[a.indexOf(r)+10],f(l,o,a)):1===d&&(l=a[a.indexOf(r)-10],f(l,o,a)));else if(t&&n&&!e&&!i)d=Math.floor(2*Math.random()),0===d?(l=a[a.indexOf(r)+1],f(l,o,a)):1===d&&(l=a[a.indexOf(r)-1],f(l,o,a));else if(!t&&!n&&e&&i)d=Math.floor(2*Math.random()),0===d?(l=a[a.indexOf(r)+10],f(l,o,a)):1===d&&(l=a[a.indexOf(r)-10],f(l,o,a));else if(t&&!n&&e&&!i)d=Math.floor(2*Math.random()),0===d?(l=a[a.indexOf(r)+1],f(l,o,a)):1===d&&(l=a[a.indexOf(r)+10],f(l,o,a));else if(t&&!n&&!e&&i)d=Math.floor(2*Math.random()),0===d?(l=a[a.indexOf(r)+1],f(l,o,a)):1===d&&(l=a[a.indexOf(r)-10],f(l,o,a));else if(!t&&n&&e&&!i)d=Math.floor(2*Math.random()),0===d?(l=a[a.indexOf(r)-1],f(l,o,a)):1===d&&(l=a[a.indexOf(r)+10],f(l,o,a));else if(t&&!n&&!e&&i)d=Math.floor(2*Math.random()),0===d?(l=a[a.indexOf(r)+1],f(l,o,a)):1===d&&(l=a[a.indexOf(r)-10],f(l,o,a));else if(!t&&n&&!e&&i)d=Math.floor(2*Math.random()),0===d?(l=a[a.indexOf(r)-1],f(l,o,a)):1===d&&(l=a[a.indexOf(r)-10],f(l,o,a));else if(!t||n||e||i)if(!n||t||e||i)if(t||n||!e||i)if(t||n||e||!i)if(t||n||e||i){let t=a.filter((t=>{if(!1===/(- Hit)$/.test(t)&&"Miss"!==t&&!1===/(- Sunk)$/.test(t))return t}));l=t[Math.floor(Math.random()*t.length)],f(l,o,a)}else{s.splice(s.indexOf(r),1);let t=s[Math.floor(Math.random()*s.length)];c(/\d$/.test(a[a.indexOf(t)+1]),/\d$/.test(a[a.indexOf(t)-1]),/\d$/.test(a[a.indexOf(t)+10]),/\d$/.test(a[a.indexOf(t)-10]),o,t,a,s)}else l=a[a.indexOf(r)-10],f(l,o,a);else l=a[a.indexOf(r)+10],f(l,o,a);else l=a[a.indexOf(r)-1],f(l,o,a);else l=a[a.indexOf(r)+1],f(l,o,a)}function f(t,n,i){let o=function(t,n){let e=!1,i=!1;for(let o=0;o<n.length&&!0!==i;o++)for(let r=0;r<n[o].position.length;r++)if(t===n[o].position[r]){n[o].position.splice(r,1,t+" - Hit"),e=!0,i=!0;break}return e}(t,n),r=document.getElementById("playerBoard");if(!0===o){let o=function(t,n){let e=!1,i=0,o="";for(let n=0;n<t.length;n++)if("Sunk"!==t[n].position[t[n].position.length-1]){let e=t[n].position.filter((t=>{if(!0===/(- Hit)$/.test(t))return t}));if(t[n].position[e.length-1]===t[n].position[t[n].position.length-1]){o=n;break}}if(!0===/\d/.test(o))for(let n=0;n<t[o].position.length;n++){if(!1===/(- Hit)$/.test(t[o].position[n])){i=0;break}if(!0===/(- Hit)$/.test(t[o].position[n])&&i++,!0===/(- Hit)$/.test(t[o].position[n])&&i===t[o].position.length){e=!0;break}}return{sunk:e,index:o}}(n);if(i===e.Gameboard.board&&!1===o.sunk){async function a(){const t=document.getElementById("toast");await u(1e3),t.classList.add("hide")}i.splice(i.indexOf(t),1,t+" - Hit"),toast.classList.remove("hide"),toast.style.color="red",toast.innerText="Hit",a()}else if(i===d.Gameboard.board&&!1===o.sunk){i.splice(i.indexOf(t),1,t+" - Hit");for(let n=10;n<r.children.length;n++)t===r.children[n].id&&(r.children[n].innerText="x",r.children[n].style.color="red")}else if(!0===o.sunk){i.splice(i.indexOf(t),1,t+" - Hit");for(let t=0;t<n[o.index].position.length;t++)null!==n[o.index].position[t].match(/^(\w10)/i)?i.splice(i.indexOf(n[o.index].position[t]),1,n[o.index].position[t].match(/^(\w10)/i)[0]+" - Sunk"):i.splice(i.indexOf(n[o.index].position[t]),1,n[o.index].position[t].match(/^(\w\d)/i)[0]+" - Sunk"),n[o.index].position[t]="Sunk";function s(t){let n=i.filter((t=>{if(!0===/(Sunk)$/.test(t))return t}));for(let e=10;e<t.children.length;e++)for(let i=0;i<n.length;i++)null!==n[i].match(/^(\w10)/i)?n[i].match(/^(\w10)/i)[0]===t.children[e].id&&(t.children[e].innerText="X",t.children[e].style.color="black",t.children[e].style.backgroundColor="orangered"):n[i].match(/^(\w\d -)/i)[0].match(/^(\w\d)/i)[0]===t.children[e].id&&(t.children[e].innerText="X",t.children[e].style.color="black",t.children[e].style.backgroundColor="orangered")}if(i===e.Gameboard.board){async function a(){const t=document.getElementById("toast");await u(1e3),t.classList.add("hide"),h("You",n)}s(computerBoard),toast.classList.remove("hide"),toast.style.color="orangered",toast.innerText="Ship sunk!",a()}else i===d.Gameboard.board&&(s(r),h("The Computer",n))}}else if(i.splice(i.indexOf(t),1,"Miss"),i===e.Gameboard.board){async function a(){const t=document.getElementById("toast");await u(1e3),t.classList.add("hide")}toast.classList.remove("hide"),toast.style.color="blue",toast.innerText="Miss",a()}else if(i===d.Gameboard.board)for(let n=10;n<r.children.length;n++)t===r.children[n].id&&(r.children[n].innerText="o",r.children[n].style.color="blue")}function u(t){return new Promise((n=>setTimeout(n,t)))}function h(t,e){let i=!1,o=0;for(let t=0;t<e.length;t++)for(let n=0;n<e[t].position.length;n++)"Sunk"===e[t].position[n]&&o++,"Sunk"===e[t].position[n]&&17===o&&(i=!0);if(!i)return!1;toast.classList.remove("hide"),toast.style.color="black",toast.innerText=`${t} won!`,async function(){const t=document.getElementById("toast");await u(3e3),t.classList.add("hide"),l(),n()}()}d.Battleship=new i,d.Carrier=new o,d.Destroyer=new r,d.Patrol=new a,d.Submarine=new s,d.Gameboard=new t,document.getElementById("startBtn").addEventListener("click",(()=>{e.Gameboard.generateBoard();let t=function(t){let n='\n        <div class="square label-top label-left" draggable="false"></div>\n        <div class="square label-top" draggable="false">A</div>\n        <div class="square label-top" draggable="false">B</div>\n        <div class="square label-top" draggable="false">C</div>\n        <div class="square label-top" draggable="false">D</div>\n        <div class="square label-top" draggable="false">E</div>\n        <div class="square label-top" draggable="false">F</div>\n        <div class="square label-top" draggable="false">G</div>\n        <div class="square label-top" draggable="false">H</div>\n        <div class="square label-top" draggable="false">I</div>\n        <div class="square label-top" draggable="false">J</div>',e=[1,2,3,4,5,6,7,8,9,10];return t.forEach((t=>{!0===/A\d$|A\d\d$/.test(t)?(n+=`<div class="square label-left" draggable="false">${e[0]}</div><div id=${t} class="square dropzone"></div>`,e.splice(0,1)):n+=`<div id=${t} class="square dropzone"></div>`})),n}(e.Gameboard.board);var n;n=t,document.getElementById("content").innerHTML=`\n    <header>Battleship</header>\n    <div id="errorMsg">\n         <button id="ok">OK</button>\n    </div>\n    <main id="mainContent">\n        <div id="placeBoard">${n}</div>\n        <div id="shipsContainer" class="dropzone">\n            <div id="buttonContainer">\n                <button id="rotate">Rotate Ships</button>\n                <p id="drag">Drag ships to board to place positions</p>\n                <button id="ready">Ready</button>\n            </div>\n            <div class="ship" id="battleship" draggable="true" ondragstart="event.dataTransfer.setData('text/plain',null)"></div>\n            <div class="ship" id="carrier" draggable="true" ondragstart="event.dataTransfer.setData('text/plain',null)"></div>\n            <div class="ship" id="destroyer" draggable="true" ondragstart="event.dataTransfer.setData('text/plain',null)"></div>\n            <div class="ship" id="patrol" draggable="true" ondragstart="event.dataTransfer.setData('text/plain',null)"></div>\n            <div class="ship" id="submarine" draggable="true" ondragstart="event.dataTransfer.setData('text/plain',null)"></div>\n        </div>\n    </main>`;const i=document.getElementById("battleship"),o=document.getElementById("carrier"),r=document.getElementById("destroyer"),a=document.getElementById("patrol"),s=document.getElementById("submarine"),l=document.getElementById("shipsContainer"),u=[i,o,r,a,s],h=document.getElementById("rotate"),g=document.getElementById("ready");let b;u.forEach((t=>{t.orientation="vertical"})),h.addEventListener("click",(()=>{u.forEach((t=>{let n=getComputedStyle(t).height,e=getComputedStyle(t).width;t.parentNode===l&&(function(t){"vertical"===t.orientation?t.orientation="horizontal":t.orientation="vertical"}(t),t.style.height=e,t.style.width=n)}))})),u.forEach((t=>{t.addEventListener("drag",(function(t){}),!1),t.addEventListener("touchstart",(function(t){console.log("TS")}),!1),t.addEventListener("dragend",(function(t){t.target.style.opacity=""}),!1),t.addEventListener("touchend",(function(t){t.target.style.opacity=""}),!1)})),document.addEventListener("dragstart",(function(t){b=t.target,b!=i&&b!=o&&b!=r&&b!=a&&b!=s||(t.target.style.opacity=.5)}),!1),document.addEventListener("touchmove",(function(t){b=t.target,b!=i&&b!=o&&b!=r&&b!=a&&b!=s||(t.target.style.opacity=.5)}),!1),document.addEventListener("dragover",(function(t){t.preventDefault()}),!1),document.addEventListener("drop",(function(t){if(t.preventDefault(),t.target.classList.value.includes("dropzone")&&(b==i||b==o||b==r||b==a||b==s)){t.target.style.background="none",b.parentNode.removeChild(b),t.target.classList.contains("square")?(b.style.marginTop="0px",b.style.marginLeft="0px",b.style.marginRight="0px"):(b.style.marginTop="10px",b.style.marginLeft="10px",b.style.marginRight="0px"),t.target.appendChild(b),"battleship"===(n=[(l=b).id,l.orientation,t.target.id])[0]?(e.Battleship.orientation=n[1],e.Battleship.position[0]=n[2]):"carrier"===n[0]?(e.Carrier.orientation=n[1],e.Carrier.position[0]=n[2]):"destroyer"===n[0]?(e.Destroyer.orientation=n[1],e.Destroyer.position[0]=n[2]):"patrol"===n[0]?(e.Patrol.orientation=n[1],e.Patrol.position[0]=n[2]):"submarine"===n[0]&&(e.Submarine.orientation=n[1],e.Submarine.position[0]=n[2])}var n,l}),!1),document.addEventListener("touchend",(function(t){if(t.target.classList.value.includes("dropzone")&&(b==i||b==o||b==r||b==a||b==s)){t.target.style.background="none",b.parentNode.removeChild(b),t.target.classList.contains("square")?(b.style.marginTop="0px",b.style.marginLeft="0px",b.style.marginRight="0px"):(b.style.marginTop="10px",b.style.marginLeft="10px",b.style.marginRight="0px"),t.target.appendChild(b),"battleship"===(n=[(l=b).id,l.orientation,t.target.id])[0]?(e.Battleship.orientation=n[1],e.Battleship.position[0]=n[2]):"carrier"===n[0]?(e.Carrier.orientation=n[1],e.Carrier.position[0]=n[2]):"destroyer"===n[0]?(e.Destroyer.orientation=n[1],e.Destroyer.position[0]=n[2]):"patrol"===n[0]?(e.Patrol.orientation=n[1],e.Patrol.position[0]=n[2]):"submarine"===n[0]&&(e.Submarine.orientation=n[1],e.Submarine.position[0]=n[2])}var n,l}),!1),g.addEventListener("click",(()=>{const t=[e.Battleship,e.Carrier,e.Destroyer,e.Patrol,e.Submarine];if(!0===function(t,n){t.forEach((t=>{const e=t.position[0];if("vertical"===t.orientation)for(let i=1,o=10;i<t.size;i++)t.position[i]=n[n.indexOf(e)+o],o+=10;else if("horizontal"===t.orientation)for(let i=1,o=1;i<t.size;i++)t.position[i]=n[n.indexOf(e)+o],o+=1}));let e=t[0].position.concat(t[1].position,t[2].position,t[3].position,t[4].position),i=!0;for(let t=0;t<e.length;t++)if(e.indexOf(e[t])!==e.lastIndexOf(e[t])){i=!1;break}return!(e.length<17||!0===e.includes(void 0)||!0===e.includes(null))&&i}(t,e.Gameboard.board)){i=e.Battleship,o=e.Carrier,r=e.Destroyer,a=e.Patrol,s=e.Submarine,l=e.Gameboard.board,i.position.forEach((t=>{let n=l.indexOf(t);l.splice(n,1,"Battleship")})),o.position.forEach((t=>{let n=l.indexOf(t);l.splice(n,1,"Carrier")})),r.position.forEach((t=>{let n=e.Gameboard.board.indexOf(t);l.splice(n,1,"Destroyer")})),a.position.forEach((t=>{let n=e.Gameboard.board.indexOf(t);l.splice(n,1,"Patrol")})),s.position.forEach((t=>{let n=l.indexOf(t);l.splice(n,1,"Submarine")}));let u=[d.Battleship,d.Carrier,d.Destroyer,d.Patrol,d.Submarine],h=function(){let t='\n        <div class="square label-top-mini label-left-mini" draggable="false"></div>\n        <div class="square label-top-mini" draggable="false">A</div>\n        <div class="square label-top-mini" draggable="false">B</div>\n        <div class="square label-top-mini" draggable="false">C</div>\n        <div class="square label-top-mini" draggable="false">D</div>\n        <div class="square label-top-mini" draggable="false">E</div>\n        <div class="square label-top-mini" draggable="false">F</div>\n        <div class="square label-top-mini" draggable="false">G</div>\n        <div class="square label-top-mini" draggable="false">H</div>\n        <div class="square label-top-mini" draggable="false">I</div>\n        <div class="square label-top-mini" draggable="false">J</div>',n=[1,2,3,4,5,6,7,8,9,10],i=function(){let t=0,n=0;const e=["A","B","C","D","E","F","G","H","I","J"],i=[1,2,3,4,5,6,7,8,9,10],o=[];for(let r=0;r<100;r++)o[r]=e[t]+i[n],t++,!0===/9$/.test(r)&&(n++,t=0);return o}();for(let o=0;o<e.Gameboard.board.length;o++)!0===/A\d$|A\d\d$/.test(e.Gameboard.board[o])||!0===/\w$/.test(e.Gameboard.board[o])&&!0===/0$/.test(o)?(t+=`<div class="square label-left-mini" draggable="false">${n[0]}</div><div id="${i[o]}" class="square game-tile ${e.Gameboard.board[o]}"></div>`,n.splice(0,1)):t+=`<div id="${i[o]}" class="square game-tile ${e.Gameboard.board[o]}"></div>`;return t}();d.Gameboard.generateBoard(),function(){let t=[];for(let n=0;n<5;n++)t[n]=Math.floor(2*Math.random()),0===t[n]?t[n]="Vertical":t[n]="Horizontal";d.Battleship.orientation=t[0],d.Carrier.orientation=t[1],d.Destroyer.orientation=t[2],d.Patrol.orientation=t[3],d.Submarine.orientation=t[4]}(),p(u),((t,n)=>{document.getElementById("content").innerHTML=`\n    <header>Battleship</header>\n    <div id="errorMsg">\n            <button id="ok">OK</button>\n        </div>\n    <main id="mainContent">\n        <div id="playerBoard">${t}</div>\n    <div id="toast" class="hide">Text</div>\n    <div id="computerContainer">\n        <div id="computerBoard">${n}</div>\n    </div>\n    </main>`})(h,function(t){let n='\n        <div class="square label-top label-left" draggable="false"></div>\n        <div class="square label-top" draggable="false">A</div>\n        <div class="square label-top" draggable="false">B</div>\n        <div class="square label-top" draggable="false">C</div>\n        <div class="square label-top" draggable="false">D</div>\n        <div class="square label-top" draggable="false">E</div>\n        <div class="square label-top" draggable="false">F</div>\n        <div class="square label-top" draggable="false">G</div>\n        <div class="square label-top" draggable="false">H</div>\n        <div class="square label-top" draggable="false">I</div>\n        <div class="square label-top" draggable="false">J</div>',e=[1,2,3,4,5,6,7,8,9,10];return t.forEach((t=>{!0===/A\d$|A\d\d$/.test(t)?(n+=`<div class="square label-left" draggable="false">${e[0]}</div><div id=${t} class="square game"></div>`,e.splice(0,1)):!0===/10/.test(t)?n+=`<div id=${t} class="square game bottom"></div>`:n+=`<div id=${t} class="square game"></div>`})),n}(d.Gameboard.board));const g=document.querySelectorAll(".game");let b=u[0].position.concat(u[1].position,u[2].position,u[3].position,u[4].position);e.Gameboard.generateBoard();let m=d.Gameboard.board;const x=document.getElementById("errorMsg");function n(){if(!0===d.turn){let i=m.filter((t=>{if(!0===/(- Hit)$/.test(t))return t})),o=i[Math.floor(Math.random()*i.length)];if(!0===/(- Hit)$/.test(o))c(/\d$/.test(m[m.indexOf(o)+1]),/\d$/.test(m[m.indexOf(o)-1]),/\d$/.test(m[m.indexOf(o)+10]),/\d$/.test(m[m.indexOf(o)-10]),t,o,m,i);else{let n=m.filter((t=>{if(!1===/(- Hit)$/.test(t)&&!1===/(Miss)$/.test(t)&&!1===/(Sunk)$/.test(t))return t}));f(n[Math.floor(Math.random()*n.length)],t,m)}d.turn=!1,e.turn=!0,n()}}document.getElementById("mainContent"),g.forEach((t=>{t.addEventListener("click",(()=>{if(t.classList.contains("game")){t.style.pointerEvents="auto";for(let i=0;i<b.length;i++){if("x"===t.innerText||"o"===t.innerText||"X"===t.innerText){x.innerHTML='\n                                    <p>You can\'t select a position that is already taken</p>\n                                    <button id="ok">OK</button>',x.style.display="block",document.getElementById("ok").addEventListener("click",(()=>{x.style.display="none"})),n();break}if(t.id===b[i]&&""===t.innerText){t.innerText="x",t.style.backgroundColor="red",b.splice(i,1),e.turn=!1,f(t.id,u,e.Gameboard.board),d.turn=!0,n();break}if(i===b.length-1){t.innerText="o",t.style.color="blue",e.turn=!1,f(t.id,u,e.Gameboard.board),d.turn=!0,n();break}}}}))})),function(){const t=document.getElementById("toast");e.turn=!0,t.classList.remove("hide"),t.innerText="Your turn - click a position on the empty board to attack"}(),n()}else document.getElementById("errorMsg").innerHTML='\n                <p>One or more ships is improperly placed</p>\n                <button id="ok">OK</button>',document.getElementById("errorMsg").style.display="block",document.getElementById("ok").addEventListener("click",(()=>{document.getElementById("errorMsg").style.display="none"}));var i,o,r,a,s,l}))}))}()})()})();