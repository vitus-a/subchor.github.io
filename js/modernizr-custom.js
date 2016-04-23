/*! modernizr 3.3.1 (Custom Build) | MIT *
 * http://modernizr.com/download/?-classlist-localstorage-promises-queryselector-setclasses !*/
!function(e,n,s){function o(e,n){return typeof e===n}function t(){var e,n,s,t,a,l,c;for(var f in r)if(r.hasOwnProperty(f)){if(e=[],n=r[f],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(s=0;s<n.options.aliases.length;s++)e.push(n.options.aliases[s].toLowerCase());for(t=o(n.fn,"function")?n.fn():n.fn,a=0;a<e.length;a++)l=e[a],c=l.split("."),1===c.length?Modernizr[c[0]]=t:(!Modernizr[c[0]]||Modernizr[c[0]]instanceof Boolean||(Modernizr[c[0]]=new Boolean(Modernizr[c[0]])),Modernizr[c[0]][c[1]]=t),i.push((t?"":"no-")+c.join("-"))}}function a(e){var n=c.className,s=Modernizr._config.classPrefix||"";if(f&&(n=n.baseVal),Modernizr._config.enableJSClass){var o=new RegExp("(^|\\s)"+s+"no-js(\\s|$)");n=n.replace(o,"$1"+s+"js$2")}Modernizr._config.enableClasses&&(n+=" "+s+e.join(" "+s),f?c.className.baseVal=n:c.className=n)}var i=[],r=[],l={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var s=this;setTimeout(function(){n(s[e])},0)},addTest:function(e,n,s){r.push({name:e,fn:n,options:s})},addAsyncTest:function(e){r.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=l,Modernizr=new Modernizr,Modernizr.addTest("queryselector","querySelector"in n&&"querySelectorAll"in n),Modernizr.addTest("promises",function(){return"Promise"in e&&"resolve"in e.Promise&&"reject"in e.Promise&&"all"in e.Promise&&"race"in e.Promise&&function(){var n;return new e.Promise(function(e){n=e}),"function"==typeof n}()});var c=n.documentElement;Modernizr.addTest("classlist","classList"in c);var f="svg"===c.nodeName.toLowerCase();Modernizr.addTest("localstorage",function(){var e="modernizr";try{return localStorage.setItem(e,e),localStorage.removeItem(e),!0}catch(n){return!1}}),t(),a(i),delete l.addTest,delete l.addAsyncTest;for(var u=0;u<Modernizr._q.length;u++)Modernizr._q[u]();e.Modernizr=Modernizr}(window,document);
