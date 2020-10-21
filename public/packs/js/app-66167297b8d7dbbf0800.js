/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/app.min.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/app.min.js":
/*!*****************************************!*\
  !*** ./app/javascript/packs/app.min.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, module, jQuery, $) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_LOCAL_MODULE_0__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!function (t, e) {
  "use strict";

   true && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function (t) {
    if (!t.document) throw new Error("jQuery requires a window with a document");
    return e(t);
  } : e(t);
}("undefined" != typeof window ? window : this, function (k, t) {
  "use strict";

  var e = [],
      C = k.document,
      i = Object.getPrototypeOf,
      a = e.slice,
      m = e.concat,
      l = e.push,
      s = e.indexOf,
      n = {},
      o = n.toString,
      g = n.hasOwnProperty,
      r = g.toString,
      c = r.call(Object),
      v = {},
      y = function y(t) {
    return "function" == typeof t && "number" != typeof t.nodeType;
  },
      b = function b(t) {
    return null != t && t === t.window;
  },
      h = {
    type: !0,
    src: !0,
    nonce: !0,
    noModule: !0
  };

  function _(t, e, n) {
    var i,
        s,
        o = (n = n || C).createElement("script");
    if (o.text = t, e) for (i in h) {
      (s = e[i] || e.getAttribute && e.getAttribute(i)) && o.setAttribute(i, s);
    }
    n.head.appendChild(o).parentNode.removeChild(o);
  }

  function w(t) {
    return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? n[o.call(t)] || "object" : typeof t;
  }

  var u = "3.4.0",
      x = function x(t, e) {
    return new x.fn.init(t, e);
  },
      d = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

  function p(t) {
    var e = !!t && "length" in t && t.length,
        n = w(t);
    return !y(t) && !b(t) && ("array" === n || 0 === e || "number" == typeof e && 0 < e && e - 1 in t);
  }

  x.fn = x.prototype = {
    jquery: u,
    constructor: x,
    length: 0,
    toArray: function toArray() {
      return a.call(this);
    },
    get: function get(t) {
      return null == t ? a.call(this) : t < 0 ? this[t + this.length] : this[t];
    },
    pushStack: function pushStack(t) {
      var e = x.merge(this.constructor(), t);
      return e.prevObject = this, e;
    },
    each: function each(t) {
      return x.each(this, t);
    },
    map: function map(n) {
      return this.pushStack(x.map(this, function (t, e) {
        return n.call(t, e, t);
      }));
    },
    slice: function slice() {
      return this.pushStack(a.apply(this, arguments));
    },
    first: function first() {
      return this.eq(0);
    },
    last: function last() {
      return this.eq(-1);
    },
    eq: function eq(t) {
      var e = this.length,
          n = +t + (t < 0 ? e : 0);
      return this.pushStack(0 <= n && n < e ? [this[n]] : []);
    },
    end: function end() {
      return this.prevObject || this.constructor();
    },
    push: l,
    sort: e.sort,
    splice: e.splice
  }, x.extend = x.fn.extend = function () {
    var t,
        e,
        n,
        i,
        s,
        o,
        r = arguments[0] || {},
        a = 1,
        l = arguments.length,
        c = !1;

    for ("boolean" == typeof r && (c = r, r = arguments[a] || {}, a++), "object" == typeof r || y(r) || (r = {}), a === l && (r = this, a--); a < l; a++) {
      if (null != (t = arguments[a])) for (e in t) {
        i = t[e], "__proto__" !== e && r !== i && (c && i && (x.isPlainObject(i) || (s = Array.isArray(i))) ? (n = r[e], o = s && !Array.isArray(n) ? [] : s || x.isPlainObject(n) ? n : {}, s = !1, r[e] = x.extend(c, o, i)) : void 0 !== i && (r[e] = i));
      }
    }

    return r;
  }, x.extend({
    expando: "jQuery" + (u + Math.random()).replace(/\D/g, ""),
    isReady: !0,
    error: function error(t) {
      throw new Error(t);
    },
    noop: function noop() {},
    isPlainObject: function isPlainObject(t) {
      var e, n;
      return !(!t || "[object Object]" !== o.call(t)) && (!(e = i(t)) || "function" == typeof (n = g.call(e, "constructor") && e.constructor) && r.call(n) === c);
    },
    isEmptyObject: function isEmptyObject(t) {
      var e;

      for (e in t) {
        return !1;
      }

      return !0;
    },
    globalEval: function globalEval(t, e) {
      _(t, {
        nonce: e && e.nonce
      });
    },
    each: function each(t, e) {
      var n,
          i = 0;
      if (p(t)) for (n = t.length; i < n && !1 !== e.call(t[i], i, t[i]); i++) {
        ;
      } else for (i in t) {
        if (!1 === e.call(t[i], i, t[i])) break;
      }
      return t;
    },
    trim: function trim(t) {
      return null == t ? "" : (t + "").replace(d, "");
    },
    makeArray: function makeArray(t, e) {
      var n = e || [];
      return null != t && (p(Object(t)) ? x.merge(n, "string" == typeof t ? [t] : t) : l.call(n, t)), n;
    },
    inArray: function inArray(t, e, n) {
      return null == e ? -1 : s.call(e, t, n);
    },
    merge: function merge(t, e) {
      for (var n = +e.length, i = 0, s = t.length; i < n; i++) {
        t[s++] = e[i];
      }

      return t.length = s, t;
    },
    grep: function grep(t, e, n) {
      for (var i = [], s = 0, o = t.length, r = !n; s < o; s++) {
        !e(t[s], s) !== r && i.push(t[s]);
      }

      return i;
    },
    map: function map(t, e, n) {
      var i,
          s,
          o = 0,
          r = [];
      if (p(t)) for (i = t.length; o < i; o++) {
        null != (s = e(t[o], o, n)) && r.push(s);
      } else for (o in t) {
        null != (s = e(t[o], o, n)) && r.push(s);
      }
      return m.apply([], r);
    },
    guid: 1,
    support: v
  }), "function" == typeof Symbol && (x.fn[Symbol.iterator] = e[Symbol.iterator]), x.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (t, e) {
    n["[object " + e + "]"] = e.toLowerCase();
  });

  var f = function (n) {
    var t,
        p,
        _,
        o,
        s,
        f,
        u,
        m,
        w,
        l,
        c,
        D,
        k,
        r,
        C,
        g,
        a,
        h,
        v,
        x = "sizzle" + 1 * new Date(),
        y = n.document,
        S = 0,
        i = 0,
        d = lt(),
        b = lt(),
        T = lt(),
        E = lt(),
        M = function M(t, e) {
      return t === e && (c = !0), 0;
    },
        A = {}.hasOwnProperty,
        e = [],
        O = e.pop,
        I = e.push,
        N = e.push,
        P = e.slice,
        L = function L(t, e) {
      for (var n = 0, i = t.length; n < i; n++) {
        if (t[n] === e) return n;
      }

      return -1;
    },
        j = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        H = "[\\x20\\t\\r\\n\\f]",
        Y = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
        $ = "\\[" + H + "*(" + Y + ")(?:" + H + "*([*^$|!~]?=)" + H + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + Y + "))|)" + H + "*\\]",
        R = ":(" + Y + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + $ + ")*)|.*)\\)|)",
        W = new RegExp(H + "+", "g"),
        U = new RegExp("^" + H + "+|((?:^|[^\\\\])(?:\\\\.)*)" + H + "+$", "g"),
        F = new RegExp("^" + H + "*," + H + "*"),
        q = new RegExp("^" + H + "*([>+~]|" + H + ")" + H + "*"),
        B = new RegExp(H + "|>"),
        V = new RegExp(R),
        z = new RegExp("^" + Y + "$"),
        G = {
      ID: new RegExp("^#(" + Y + ")"),
      CLASS: new RegExp("^\\.(" + Y + ")"),
      TAG: new RegExp("^(" + Y + "|[*])"),
      ATTR: new RegExp("^" + $),
      PSEUDO: new RegExp("^" + R),
      CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + H + "*(even|odd|(([+-]|)(\\d*)n|)" + H + "*(?:([+-]|)" + H + "*(\\d+)|))" + H + "*\\)|)", "i"),
      bool: new RegExp("^(?:" + j + ")$", "i"),
      needsContext: new RegExp("^" + H + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + H + "*((?:-\\d)?\\d*)" + H + "*\\)|)(?=[^-]|$)", "i")
    },
        K = /HTML$/i,
        Q = /^(?:input|select|textarea|button)$/i,
        Z = /^h\d$/i,
        X = /^[^{]+\{\s*\[native \w/,
        J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        tt = /[+~]/,
        et = new RegExp("\\\\([\\da-f]{1,6}" + H + "?|(" + H + ")|.)", "ig"),
        nt = function nt(t, e, n) {
      var i = "0x" + e - 65536;
      return i != i || n ? e : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320);
    },
        it = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        st = function st(t, e) {
      return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t;
    },
        ot = function ot() {
      D();
    },
        rt = _t(function (t) {
      return !0 === t.disabled && "fieldset" === t.nodeName.toLowerCase();
    }, {
      dir: "parentNode",
      next: "legend"
    });

    try {
      N.apply(e = P.call(y.childNodes), y.childNodes), e[y.childNodes.length].nodeType;
    } catch (t) {
      N = {
        apply: e.length ? function (t, e) {
          I.apply(t, P.call(e));
        } : function (t, e) {
          for (var n = t.length, i = 0; t[n++] = e[i++];) {
            ;
          }

          t.length = n - 1;
        }
      };
    }

    function at(e, t, n, i) {
      var s,
          o,
          r,
          a,
          l,
          c,
          h,
          u = t && t.ownerDocument,
          d = t ? t.nodeType : 9;
      if (n = n || [], "string" != typeof e || !e || 1 !== d && 9 !== d && 11 !== d) return n;

      if (!i && ((t ? t.ownerDocument || t : y) !== k && D(t), t = t || k, C)) {
        if (11 !== d && (l = J.exec(e))) if (s = l[1]) {
          if (9 === d) {
            if (!(r = t.getElementById(s))) return n;
            if (r.id === s) return n.push(r), n;
          } else if (u && (r = u.getElementById(s)) && v(t, r) && r.id === s) return n.push(r), n;
        } else {
          if (l[2]) return N.apply(n, t.getElementsByTagName(e)), n;
          if ((s = l[3]) && p.getElementsByClassName && t.getElementsByClassName) return N.apply(n, t.getElementsByClassName(s)), n;
        }

        if (p.qsa && !E[e + " "] && (!g || !g.test(e)) && (1 !== d || "object" !== t.nodeName.toLowerCase())) {
          if (h = e, u = t, 1 === d && B.test(e)) {
            for ((a = t.getAttribute("id")) ? a = a.replace(it, st) : t.setAttribute("id", a = x), o = (c = f(e)).length; o--;) {
              c[o] = "#" + a + " " + bt(c[o]);
            }

            h = c.join(","), u = tt.test(e) && vt(t.parentNode) || t;
          }

          try {
            return N.apply(n, u.querySelectorAll(h)), n;
          } catch (t) {
            E(e, !0);
          } finally {
            a === x && t.removeAttribute("id");
          }
        }
      }

      return m(e.replace(U, "$1"), t, n, i);
    }

    function lt() {
      var i = [];
      return function t(e, n) {
        return i.push(e + " ") > _.cacheLength && delete t[i.shift()], t[e + " "] = n;
      };
    }

    function ct(t) {
      return t[x] = !0, t;
    }

    function ht(t) {
      var e = k.createElement("fieldset");

      try {
        return !!t(e);
      } catch (t) {
        return !1;
      } finally {
        e.parentNode && e.parentNode.removeChild(e), e = null;
      }
    }

    function ut(t, e) {
      for (var n = t.split("|"), i = n.length; i--;) {
        _.attrHandle[n[i]] = e;
      }
    }

    function dt(t, e) {
      var n = e && t,
          i = n && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
      if (i) return i;
      if (n) for (; n = n.nextSibling;) {
        if (n === e) return -1;
      }
      return t ? 1 : -1;
    }

    function pt(e) {
      return function (t) {
        return "input" === t.nodeName.toLowerCase() && t.type === e;
      };
    }

    function ft(n) {
      return function (t) {
        var e = t.nodeName.toLowerCase();
        return ("input" === e || "button" === e) && t.type === n;
      };
    }

    function mt(e) {
      return function (t) {
        return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && rt(t) === e : t.disabled === e : "label" in t && t.disabled === e;
      };
    }

    function gt(r) {
      return ct(function (o) {
        return o = +o, ct(function (t, e) {
          for (var n, i = r([], t.length, o), s = i.length; s--;) {
            t[n = i[s]] && (t[n] = !(e[n] = t[n]));
          }
        });
      });
    }

    function vt(t) {
      return t && void 0 !== t.getElementsByTagName && t;
    }

    for (t in p = at.support = {}, s = at.isXML = function (t) {
      var e = t.namespaceURI,
          n = (t.ownerDocument || t).documentElement;
      return !K.test(e || n && n.nodeName || "HTML");
    }, D = at.setDocument = function (t) {
      var e,
          n,
          i = t ? t.ownerDocument || t : y;
      return i !== k && 9 === i.nodeType && i.documentElement && (r = (k = i).documentElement, C = !s(k), y !== k && (n = k.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", ot, !1) : n.attachEvent && n.attachEvent("onunload", ot)), p.attributes = ht(function (t) {
        return t.className = "i", !t.getAttribute("className");
      }), p.getElementsByTagName = ht(function (t) {
        return t.appendChild(k.createComment("")), !t.getElementsByTagName("*").length;
      }), p.getElementsByClassName = X.test(k.getElementsByClassName), p.getById = ht(function (t) {
        return r.appendChild(t).id = x, !k.getElementsByName || !k.getElementsByName(x).length;
      }), p.getById ? (_.filter.ID = function (t) {
        var e = t.replace(et, nt);
        return function (t) {
          return t.getAttribute("id") === e;
        };
      }, _.find.ID = function (t, e) {
        if (void 0 !== e.getElementById && C) {
          var n = e.getElementById(t);
          return n ? [n] : [];
        }
      }) : (_.filter.ID = function (t) {
        var n = t.replace(et, nt);
        return function (t) {
          var e = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
          return e && e.value === n;
        };
      }, _.find.ID = function (t, e) {
        if (void 0 !== e.getElementById && C) {
          var n,
              i,
              s,
              o = e.getElementById(t);

          if (o) {
            if ((n = o.getAttributeNode("id")) && n.value === t) return [o];

            for (s = e.getElementsByName(t), i = 0; o = s[i++];) {
              if ((n = o.getAttributeNode("id")) && n.value === t) return [o];
            }
          }

          return [];
        }
      }), _.find.TAG = p.getElementsByTagName ? function (t, e) {
        return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : p.qsa ? e.querySelectorAll(t) : void 0;
      } : function (t, e) {
        var n,
            i = [],
            s = 0,
            o = e.getElementsByTagName(t);
        if ("*" !== t) return o;

        for (; n = o[s++];) {
          1 === n.nodeType && i.push(n);
        }

        return i;
      }, _.find.CLASS = p.getElementsByClassName && function (t, e) {
        if (void 0 !== e.getElementsByClassName && C) return e.getElementsByClassName(t);
      }, a = [], g = [], (p.qsa = X.test(k.querySelectorAll)) && (ht(function (t) {
        r.appendChild(t).innerHTML = "<a id='" + x + "'></a><select id='" + x + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + H + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || g.push("\\[" + H + "*(?:value|" + j + ")"), t.querySelectorAll("[id~=" + x + "-]").length || g.push("~="), t.querySelectorAll(":checked").length || g.push(":checked"), t.querySelectorAll("a#" + x + "+*").length || g.push(".#.+[+~]");
      }), ht(function (t) {
        t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
        var e = k.createElement("input");
        e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && g.push("name" + H + "*[*^$|!~]?="), 2 !== t.querySelectorAll(":enabled").length && g.push(":enabled", ":disabled"), r.appendChild(t).disabled = !0, 2 !== t.querySelectorAll(":disabled").length && g.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), g.push(",.*:");
      })), (p.matchesSelector = X.test(h = r.matches || r.webkitMatchesSelector || r.mozMatchesSelector || r.oMatchesSelector || r.msMatchesSelector)) && ht(function (t) {
        p.disconnectedMatch = h.call(t, "*"), h.call(t, "[s!='']:x"), a.push("!=", R);
      }), g = g.length && new RegExp(g.join("|")), a = a.length && new RegExp(a.join("|")), e = X.test(r.compareDocumentPosition), v = e || X.test(r.contains) ? function (t, e) {
        var n = 9 === t.nodeType ? t.documentElement : t,
            i = e && e.parentNode;
        return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)));
      } : function (t, e) {
        if (e) for (; e = e.parentNode;) {
          if (e === t) return !0;
        }
        return !1;
      }, M = e ? function (t, e) {
        if (t === e) return c = !0, 0;
        var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
        return n || (1 & (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !p.sortDetached && e.compareDocumentPosition(t) === n ? t === k || t.ownerDocument === y && v(y, t) ? -1 : e === k || e.ownerDocument === y && v(y, e) ? 1 : l ? L(l, t) - L(l, e) : 0 : 4 & n ? -1 : 1);
      } : function (t, e) {
        if (t === e) return c = !0, 0;
        var n,
            i = 0,
            s = t.parentNode,
            o = e.parentNode,
            r = [t],
            a = [e];
        if (!s || !o) return t === k ? -1 : e === k ? 1 : s ? -1 : o ? 1 : l ? L(l, t) - L(l, e) : 0;
        if (s === o) return dt(t, e);

        for (n = t; n = n.parentNode;) {
          r.unshift(n);
        }

        for (n = e; n = n.parentNode;) {
          a.unshift(n);
        }

        for (; r[i] === a[i];) {
          i++;
        }

        return i ? dt(r[i], a[i]) : r[i] === y ? -1 : a[i] === y ? 1 : 0;
      }), k;
    }, at.matches = function (t, e) {
      return at(t, null, null, e);
    }, at.matchesSelector = function (t, e) {
      if ((t.ownerDocument || t) !== k && D(t), p.matchesSelector && C && !E[e + " "] && (!a || !a.test(e)) && (!g || !g.test(e))) try {
        var n = h.call(t, e);
        if (n || p.disconnectedMatch || t.document && 11 !== t.document.nodeType) return n;
      } catch (t) {
        E(e, !0);
      }
      return 0 < at(e, k, null, [t]).length;
    }, at.contains = function (t, e) {
      return (t.ownerDocument || t) !== k && D(t), v(t, e);
    }, at.attr = function (t, e) {
      (t.ownerDocument || t) !== k && D(t);

      var n = _.attrHandle[e.toLowerCase()],
          i = n && A.call(_.attrHandle, e.toLowerCase()) ? n(t, e, !C) : void 0;

      return void 0 !== i ? i : p.attributes || !C ? t.getAttribute(e) : (i = t.getAttributeNode(e)) && i.specified ? i.value : null;
    }, at.escape = function (t) {
      return (t + "").replace(it, st);
    }, at.error = function (t) {
      throw new Error("Syntax error, unrecognized expression: " + t);
    }, at.uniqueSort = function (t) {
      var e,
          n = [],
          i = 0,
          s = 0;

      if (c = !p.detectDuplicates, l = !p.sortStable && t.slice(0), t.sort(M), c) {
        for (; e = t[s++];) {
          e === t[s] && (i = n.push(s));
        }

        for (; i--;) {
          t.splice(n[i], 1);
        }
      }

      return l = null, t;
    }, o = at.getText = function (t) {
      var e,
          n = "",
          i = 0,
          s = t.nodeType;

      if (s) {
        if (1 === s || 9 === s || 11 === s) {
          if ("string" == typeof t.textContent) return t.textContent;

          for (t = t.firstChild; t; t = t.nextSibling) {
            n += o(t);
          }
        } else if (3 === s || 4 === s) return t.nodeValue;
      } else for (; e = t[i++];) {
        n += o(e);
      }

      return n;
    }, (_ = at.selectors = {
      cacheLength: 50,
      createPseudo: ct,
      match: G,
      attrHandle: {},
      find: {},
      relative: {
        ">": {
          dir: "parentNode",
          first: !0
        },
        " ": {
          dir: "parentNode"
        },
        "+": {
          dir: "previousSibling",
          first: !0
        },
        "~": {
          dir: "previousSibling"
        }
      },
      preFilter: {
        ATTR: function ATTR(t) {
          return t[1] = t[1].replace(et, nt), t[3] = (t[3] || t[4] || t[5] || "").replace(et, nt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4);
        },
        CHILD: function CHILD(t) {
          return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || at.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && at.error(t[0]), t;
        },
        PSEUDO: function PSEUDO(t) {
          var e,
              n = !t[6] && t[2];
          return G.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && V.test(n) && (e = f(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3));
        }
      },
      filter: {
        TAG: function TAG(t) {
          var e = t.replace(et, nt).toLowerCase();
          return "*" === t ? function () {
            return !0;
          } : function (t) {
            return t.nodeName && t.nodeName.toLowerCase() === e;
          };
        },
        CLASS: function CLASS(t) {
          var e = d[t + " "];
          return e || (e = new RegExp("(^|" + H + ")" + t + "(" + H + "|$)")) && d(t, function (t) {
            return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "");
          });
        },
        ATTR: function ATTR(n, i, s) {
          return function (t) {
            var e = at.attr(t, n);
            return null == e ? "!=" === i : !i || (e += "", "=" === i ? e === s : "!=" === i ? e !== s : "^=" === i ? s && 0 === e.indexOf(s) : "*=" === i ? s && -1 < e.indexOf(s) : "$=" === i ? s && e.slice(-s.length) === s : "~=" === i ? -1 < (" " + e.replace(W, " ") + " ").indexOf(s) : "|=" === i && (e === s || e.slice(0, s.length + 1) === s + "-"));
          };
        },
        CHILD: function CHILD(f, t, e, m, g) {
          var v = "nth" !== f.slice(0, 3),
              y = "last" !== f.slice(-4),
              b = "of-type" === t;
          return 1 === m && 0 === g ? function (t) {
            return !!t.parentNode;
          } : function (t, e, n) {
            var i,
                s,
                o,
                r,
                a,
                l,
                c = v !== y ? "nextSibling" : "previousSibling",
                h = t.parentNode,
                u = b && t.nodeName.toLowerCase(),
                d = !n && !b,
                p = !1;

            if (h) {
              if (v) {
                for (; c;) {
                  for (r = t; r = r[c];) {
                    if (b ? r.nodeName.toLowerCase() === u : 1 === r.nodeType) return !1;
                  }

                  l = c = "only" === f && !l && "nextSibling";
                }

                return !0;
              }

              if (l = [y ? h.firstChild : h.lastChild], y && d) {
                for (p = (a = (i = (s = (o = (r = h)[x] || (r[x] = {}))[r.uniqueID] || (o[r.uniqueID] = {}))[f] || [])[0] === S && i[1]) && i[2], r = a && h.childNodes[a]; r = ++a && r && r[c] || (p = a = 0) || l.pop();) {
                  if (1 === r.nodeType && ++p && r === t) {
                    s[f] = [S, a, p];
                    break;
                  }
                }
              } else if (d && (p = a = (i = (s = (o = (r = t)[x] || (r[x] = {}))[r.uniqueID] || (o[r.uniqueID] = {}))[f] || [])[0] === S && i[1]), !1 === p) for (; (r = ++a && r && r[c] || (p = a = 0) || l.pop()) && ((b ? r.nodeName.toLowerCase() !== u : 1 !== r.nodeType) || !++p || (d && ((s = (o = r[x] || (r[x] = {}))[r.uniqueID] || (o[r.uniqueID] = {}))[f] = [S, p]), r !== t));) {
                ;
              }

              return (p -= g) === m || p % m == 0 && 0 <= p / m;
            }
          };
        },
        PSEUDO: function PSEUDO(t, o) {
          var e,
              r = _.pseudos[t] || _.setFilters[t.toLowerCase()] || at.error("unsupported pseudo: " + t);
          return r[x] ? r(o) : 1 < r.length ? (e = [t, t, "", o], _.setFilters.hasOwnProperty(t.toLowerCase()) ? ct(function (t, e) {
            for (var n, i = r(t, o), s = i.length; s--;) {
              t[n = L(t, i[s])] = !(e[n] = i[s]);
            }
          }) : function (t) {
            return r(t, 0, e);
          }) : r;
        }
      },
      pseudos: {
        not: ct(function (t) {
          var i = [],
              s = [],
              a = u(t.replace(U, "$1"));
          return a[x] ? ct(function (t, e, n, i) {
            for (var s, o = a(t, null, i, []), r = t.length; r--;) {
              (s = o[r]) && (t[r] = !(e[r] = s));
            }
          }) : function (t, e, n) {
            return i[0] = t, a(i, null, n, s), i[0] = null, !s.pop();
          };
        }),
        has: ct(function (e) {
          return function (t) {
            return 0 < at(e, t).length;
          };
        }),
        contains: ct(function (e) {
          return e = e.replace(et, nt), function (t) {
            return -1 < (t.textContent || o(t)).indexOf(e);
          };
        }),
        lang: ct(function (n) {
          return z.test(n || "") || at.error("unsupported lang: " + n), n = n.replace(et, nt).toLowerCase(), function (t) {
            var e;

            do {
              if (e = C ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (e = e.toLowerCase()) === n || 0 === e.indexOf(n + "-");
            } while ((t = t.parentNode) && 1 === t.nodeType);

            return !1;
          };
        }),
        target: function target(t) {
          var e = n.location && n.location.hash;
          return e && e.slice(1) === t.id;
        },
        root: function root(t) {
          return t === r;
        },
        focus: function focus(t) {
          return t === k.activeElement && (!k.hasFocus || k.hasFocus()) && !!(t.type || t.href || ~t.tabIndex);
        },
        enabled: mt(!1),
        disabled: mt(!0),
        checked: function checked(t) {
          var e = t.nodeName.toLowerCase();
          return "input" === e && !!t.checked || "option" === e && !!t.selected;
        },
        selected: function selected(t) {
          return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected;
        },
        empty: function empty(t) {
          for (t = t.firstChild; t; t = t.nextSibling) {
            if (t.nodeType < 6) return !1;
          }

          return !0;
        },
        parent: function parent(t) {
          return !_.pseudos.empty(t);
        },
        header: function header(t) {
          return Z.test(t.nodeName);
        },
        input: function input(t) {
          return Q.test(t.nodeName);
        },
        button: function button(t) {
          var e = t.nodeName.toLowerCase();
          return "input" === e && "button" === t.type || "button" === e;
        },
        text: function text(t) {
          var e;
          return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase());
        },
        first: gt(function () {
          return [0];
        }),
        last: gt(function (t, e) {
          return [e - 1];
        }),
        eq: gt(function (t, e, n) {
          return [n < 0 ? n + e : n];
        }),
        even: gt(function (t, e) {
          for (var n = 0; n < e; n += 2) {
            t.push(n);
          }

          return t;
        }),
        odd: gt(function (t, e) {
          for (var n = 1; n < e; n += 2) {
            t.push(n);
          }

          return t;
        }),
        lt: gt(function (t, e, n) {
          for (var i = n < 0 ? n + e : e < n ? e : n; 0 <= --i;) {
            t.push(i);
          }

          return t;
        }),
        gt: gt(function (t, e, n) {
          for (var i = n < 0 ? n + e : n; ++i < e;) {
            t.push(i);
          }

          return t;
        })
      }
    }).pseudos.nth = _.pseudos.eq, {
      radio: !0,
      checkbox: !0,
      file: !0,
      password: !0,
      image: !0
    }) {
      _.pseudos[t] = pt(t);
    }

    for (t in {
      submit: !0,
      reset: !0
    }) {
      _.pseudos[t] = ft(t);
    }

    function yt() {}

    function bt(t) {
      for (var e = 0, n = t.length, i = ""; e < n; e++) {
        i += t[e].value;
      }

      return i;
    }

    function _t(a, t, e) {
      var l = t.dir,
          c = t.next,
          h = c || l,
          u = e && "parentNode" === h,
          d = i++;
      return t.first ? function (t, e, n) {
        for (; t = t[l];) {
          if (1 === t.nodeType || u) return a(t, e, n);
        }

        return !1;
      } : function (t, e, n) {
        var i,
            s,
            o,
            r = [S, d];

        if (n) {
          for (; t = t[l];) {
            if ((1 === t.nodeType || u) && a(t, e, n)) return !0;
          }
        } else for (; t = t[l];) {
          if (1 === t.nodeType || u) if (s = (o = t[x] || (t[x] = {}))[t.uniqueID] || (o[t.uniqueID] = {}), c && c === t.nodeName.toLowerCase()) t = t[l] || t;else {
            if ((i = s[h]) && i[0] === S && i[1] === d) return r[2] = i[2];
            if ((s[h] = r)[2] = a(t, e, n)) return !0;
          }
        }

        return !1;
      };
    }

    function wt(s) {
      return 1 < s.length ? function (t, e, n) {
        for (var i = s.length; i--;) {
          if (!s[i](t, e, n)) return !1;
        }

        return !0;
      } : s[0];
    }

    function Dt(t, e, n, i, s) {
      for (var o, r = [], a = 0, l = t.length, c = null != e; a < l; a++) {
        (o = t[a]) && (n && !n(o, i, s) || (r.push(o), c && e.push(a)));
      }

      return r;
    }

    function kt(p, f, m, g, v, t) {
      return g && !g[x] && (g = kt(g)), v && !v[x] && (v = kt(v, t)), ct(function (t, e, n, i) {
        var s,
            o,
            r,
            a = [],
            l = [],
            c = e.length,
            h = t || function (t, e, n) {
          for (var i = 0, s = e.length; i < s; i++) {
            at(t, e[i], n);
          }

          return n;
        }(f || "*", n.nodeType ? [n] : n, []),
            u = !p || !t && f ? h : Dt(h, a, p, n, i),
            d = m ? v || (t ? p : c || g) ? [] : e : u;

        if (m && m(u, d, n, i), g) for (s = Dt(d, l), g(s, [], n, i), o = s.length; o--;) {
          (r = s[o]) && (d[l[o]] = !(u[l[o]] = r));
        }

        if (t) {
          if (v || p) {
            if (v) {
              for (s = [], o = d.length; o--;) {
                (r = d[o]) && s.push(u[o] = r);
              }

              v(null, d = [], s, i);
            }

            for (o = d.length; o--;) {
              (r = d[o]) && -1 < (s = v ? L(t, r) : a[o]) && (t[s] = !(e[s] = r));
            }
          }
        } else d = Dt(d === e ? d.splice(c, d.length) : d), v ? v(null, e, d, i) : N.apply(e, d);
      });
    }

    function Ct(t) {
      for (var s, e, n, i = t.length, o = _.relative[t[0].type], r = o || _.relative[" "], a = o ? 1 : 0, l = _t(function (t) {
        return t === s;
      }, r, !0), c = _t(function (t) {
        return -1 < L(s, t);
      }, r, !0), h = [function (t, e, n) {
        var i = !o && (n || e !== w) || ((s = e).nodeType ? l(t, e, n) : c(t, e, n));
        return s = null, i;
      }]; a < i; a++) {
        if (e = _.relative[t[a].type]) h = [_t(wt(h), e)];else {
          if ((e = _.filter[t[a].type].apply(null, t[a].matches))[x]) {
            for (n = ++a; n < i && !_.relative[t[n].type]; n++) {
              ;
            }

            return kt(1 < a && wt(h), 1 < a && bt(t.slice(0, a - 1).concat({
              value: " " === t[a - 2].type ? "*" : ""
            })).replace(U, "$1"), e, a < n && Ct(t.slice(a, n)), n < i && Ct(t = t.slice(n)), n < i && bt(t));
          }

          h.push(e);
        }
      }

      return wt(h);
    }

    return yt.prototype = _.filters = _.pseudos, _.setFilters = new yt(), f = at.tokenize = function (t, e) {
      var n,
          i,
          s,
          o,
          r,
          a,
          l,
          c = b[t + " "];
      if (c) return e ? 0 : c.slice(0);

      for (r = t, a = [], l = _.preFilter; r;) {
        for (o in n && !(i = F.exec(r)) || (i && (r = r.slice(i[0].length) || r), a.push(s = [])), n = !1, (i = q.exec(r)) && (n = i.shift(), s.push({
          value: n,
          type: i[0].replace(U, " ")
        }), r = r.slice(n.length)), _.filter) {
          !(i = G[o].exec(r)) || l[o] && !(i = l[o](i)) || (n = i.shift(), s.push({
            value: n,
            type: o,
            matches: i
          }), r = r.slice(n.length));
        }

        if (!n) break;
      }

      return e ? r.length : r ? at.error(t) : b(t, a).slice(0);
    }, u = at.compile = function (t, e) {
      var n,
          g,
          v,
          y,
          b,
          i,
          s = [],
          o = [],
          r = T[t + " "];

      if (!r) {
        for (e || (e = f(t)), n = e.length; n--;) {
          (r = Ct(e[n]))[x] ? s.push(r) : o.push(r);
        }

        (r = T(t, (g = o, y = 0 < (v = s).length, b = 0 < g.length, i = function i(t, e, n, _i2, s) {
          var o,
              r,
              a,
              l = 0,
              c = "0",
              h = t && [],
              u = [],
              d = w,
              p = t || b && _.find.TAG("*", s),
              f = S += null == d ? 1 : Math.random() || .1,
              m = p.length;

          for (s && (w = e === k || e || s); c !== m && null != (o = p[c]); c++) {
            if (b && o) {
              for (r = 0, e || o.ownerDocument === k || (D(o), n = !C); a = g[r++];) {
                if (a(o, e || k, n)) {
                  _i2.push(o);

                  break;
                }
              }

              s && (S = f);
            }

            y && ((o = !a && o) && l--, t && h.push(o));
          }

          if (l += c, y && c !== l) {
            for (r = 0; a = v[r++];) {
              a(h, u, e, n);
            }

            if (t) {
              if (0 < l) for (; c--;) {
                h[c] || u[c] || (u[c] = O.call(_i2));
              }
              u = Dt(u);
            }

            N.apply(_i2, u), s && !t && 0 < u.length && 1 < l + v.length && at.uniqueSort(_i2);
          }

          return s && (S = f, w = d), h;
        }, y ? ct(i) : i))).selector = t;
      }

      return r;
    }, m = at.select = function (t, e, n, i) {
      var s,
          o,
          r,
          a,
          l,
          c = "function" == typeof t && t,
          h = !i && f(t = c.selector || t);

      if (n = n || [], 1 === h.length) {
        if (2 < (o = h[0] = h[0].slice(0)).length && "ID" === (r = o[0]).type && 9 === e.nodeType && C && _.relative[o[1].type]) {
          if (!(e = (_.find.ID(r.matches[0].replace(et, nt), e) || [])[0])) return n;
          c && (e = e.parentNode), t = t.slice(o.shift().value.length);
        }

        for (s = G.needsContext.test(t) ? 0 : o.length; s-- && (r = o[s], !_.relative[a = r.type]);) {
          if ((l = _.find[a]) && (i = l(r.matches[0].replace(et, nt), tt.test(o[0].type) && vt(e.parentNode) || e))) {
            if (o.splice(s, 1), !(t = i.length && bt(o))) return N.apply(n, i), n;
            break;
          }
        }
      }

      return (c || u(t, h))(i, e, !C, n, !e || tt.test(t) && vt(e.parentNode) || e), n;
    }, p.sortStable = x.split("").sort(M).join("") === x, p.detectDuplicates = !!c, D(), p.sortDetached = ht(function (t) {
      return 1 & t.compareDocumentPosition(k.createElement("fieldset"));
    }), ht(function (t) {
      return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href");
    }) || ut("type|href|height|width", function (t, e, n) {
      if (!n) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2);
    }), p.attributes && ht(function (t) {
      return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value");
    }) || ut("value", function (t, e, n) {
      if (!n && "input" === t.nodeName.toLowerCase()) return t.defaultValue;
    }), ht(function (t) {
      return null == t.getAttribute("disabled");
    }) || ut(j, function (t, e, n) {
      var i;
      if (!n) return !0 === t[e] ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null;
    }), at;
  }(k);

  x.find = f, x.expr = f.selectors, x.expr[":"] = x.expr.pseudos, x.uniqueSort = x.unique = f.uniqueSort, x.text = f.getText, x.isXMLDoc = f.isXML, x.contains = f.contains, x.escapeSelector = f.escape;

  var D = function D(t, e, n) {
    for (var i = [], s = void 0 !== n; (t = t[e]) && 9 !== t.nodeType;) {
      if (1 === t.nodeType) {
        if (s && x(t).is(n)) break;
        i.push(t);
      }
    }

    return i;
  },
      S = function S(t, e) {
    for (var n = []; t; t = t.nextSibling) {
      1 === t.nodeType && t !== e && n.push(t);
    }

    return n;
  },
      T = x.expr.match.needsContext;

  function E(t, e) {
    return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase();
  }

  var M = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

  function A(t, n, i) {
    return y(n) ? x.grep(t, function (t, e) {
      return !!n.call(t, e, t) !== i;
    }) : n.nodeType ? x.grep(t, function (t) {
      return t === n !== i;
    }) : "string" != typeof n ? x.grep(t, function (t) {
      return -1 < s.call(n, t) !== i;
    }) : x.filter(n, t, i);
  }

  x.filter = function (t, e, n) {
    var i = e[0];
    return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? x.find.matchesSelector(i, t) ? [i] : [] : x.find.matches(t, x.grep(e, function (t) {
      return 1 === t.nodeType;
    }));
  }, x.fn.extend({
    find: function find(t) {
      var e,
          n,
          i = this.length,
          s = this;
      if ("string" != typeof t) return this.pushStack(x(t).filter(function () {
        for (e = 0; e < i; e++) {
          if (x.contains(s[e], this)) return !0;
        }
      }));

      for (n = this.pushStack([]), e = 0; e < i; e++) {
        x.find(t, s[e], n);
      }

      return 1 < i ? x.uniqueSort(n) : n;
    },
    filter: function filter(t) {
      return this.pushStack(A(this, t || [], !1));
    },
    not: function not(t) {
      return this.pushStack(A(this, t || [], !0));
    },
    is: function is(t) {
      return !!A(this, "string" == typeof t && T.test(t) ? x(t) : t || [], !1).length;
    }
  });
  var O,
      I = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  (x.fn.init = function (t, e, n) {
    var i, s;
    if (!t) return this;
    if (n = n || O, "string" != typeof t) return t.nodeType ? (this[0] = t, this.length = 1, this) : y(t) ? void 0 !== n.ready ? n.ready(t) : t(x) : x.makeArray(t, this);
    if (!(i = "<" === t[0] && ">" === t[t.length - 1] && 3 <= t.length ? [null, t, null] : I.exec(t)) || !i[1] && e) return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);

    if (i[1]) {
      if (e = e instanceof x ? e[0] : e, x.merge(this, x.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : C, !0)), M.test(i[1]) && x.isPlainObject(e)) for (i in e) {
        y(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
      }
      return this;
    }

    return (s = C.getElementById(i[2])) && (this[0] = s, this.length = 1), this;
  }).prototype = x.fn, O = x(C);
  var N = /^(?:parents|prev(?:Until|All))/,
      P = {
    children: !0,
    contents: !0,
    next: !0,
    prev: !0
  };

  function L(t, e) {
    for (; (t = t[e]) && 1 !== t.nodeType;) {
      ;
    }

    return t;
  }

  x.fn.extend({
    has: function has(t) {
      var e = x(t, this),
          n = e.length;
      return this.filter(function () {
        for (var t = 0; t < n; t++) {
          if (x.contains(this, e[t])) return !0;
        }
      });
    },
    closest: function closest(t, e) {
      var n,
          i = 0,
          s = this.length,
          o = [],
          r = "string" != typeof t && x(t);
      if (!T.test(t)) for (; i < s; i++) {
        for (n = this[i]; n && n !== e; n = n.parentNode) {
          if (n.nodeType < 11 && (r ? -1 < r.index(n) : 1 === n.nodeType && x.find.matchesSelector(n, t))) {
            o.push(n);
            break;
          }
        }
      }
      return this.pushStack(1 < o.length ? x.uniqueSort(o) : o);
    },
    index: function index(t) {
      return t ? "string" == typeof t ? s.call(x(t), this[0]) : s.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    },
    add: function add(t, e) {
      return this.pushStack(x.uniqueSort(x.merge(this.get(), x(t, e))));
    },
    addBack: function addBack(t) {
      return this.add(null == t ? this.prevObject : this.prevObject.filter(t));
    }
  }), x.each({
    parent: function parent(t) {
      var e = t.parentNode;
      return e && 11 !== e.nodeType ? e : null;
    },
    parents: function parents(t) {
      return D(t, "parentNode");
    },
    parentsUntil: function parentsUntil(t, e, n) {
      return D(t, "parentNode", n);
    },
    next: function next(t) {
      return L(t, "nextSibling");
    },
    prev: function prev(t) {
      return L(t, "previousSibling");
    },
    nextAll: function nextAll(t) {
      return D(t, "nextSibling");
    },
    prevAll: function prevAll(t) {
      return D(t, "previousSibling");
    },
    nextUntil: function nextUntil(t, e, n) {
      return D(t, "nextSibling", n);
    },
    prevUntil: function prevUntil(t, e, n) {
      return D(t, "previousSibling", n);
    },
    siblings: function siblings(t) {
      return S((t.parentNode || {}).firstChild, t);
    },
    children: function children(t) {
      return S(t.firstChild);
    },
    contents: function contents(t) {
      return void 0 !== t.contentDocument ? t.contentDocument : (E(t, "template") && (t = t.content || t), x.merge([], t.childNodes));
    }
  }, function (i, s) {
    x.fn[i] = function (t, e) {
      var n = x.map(this, s, t);
      return "Until" !== i.slice(-5) && (e = t), e && "string" == typeof e && (n = x.filter(e, n)), 1 < this.length && (P[i] || x.uniqueSort(n), N.test(i) && n.reverse()), this.pushStack(n);
    };
  });
  var j = /[^\x20\t\r\n\f]+/g;

  function H(t) {
    return t;
  }

  function Y(t) {
    throw t;
  }

  function $(t, e, n, i) {
    var s;

    try {
      t && y(s = t.promise) ? s.call(t).done(e).fail(n) : t && y(s = t.then) ? s.call(t, e, n) : e.apply(void 0, [t].slice(i));
    } catch (t) {
      n.apply(void 0, [t]);
    }
  }

  x.Callbacks = function (i) {
    var t, n;
    i = "string" == typeof i ? (t = i, n = {}, x.each(t.match(j) || [], function (t, e) {
      n[e] = !0;
    }), n) : x.extend({}, i);

    var s,
        e,
        o,
        r,
        a = [],
        l = [],
        c = -1,
        h = function h() {
      for (r = r || i.once, o = s = !0; l.length; c = -1) {
        for (e = l.shift(); ++c < a.length;) {
          !1 === a[c].apply(e[0], e[1]) && i.stopOnFalse && (c = a.length, e = !1);
        }
      }

      i.memory || (e = !1), s = !1, r && (a = e ? [] : "");
    },
        u = {
      add: function add() {
        return a && (e && !s && (c = a.length - 1, l.push(e)), function n(t) {
          x.each(t, function (t, e) {
            y(e) ? i.unique && u.has(e) || a.push(e) : e && e.length && "string" !== w(e) && n(e);
          });
        }(arguments), e && !s && h()), this;
      },
      remove: function remove() {
        return x.each(arguments, function (t, e) {
          for (var n; -1 < (n = x.inArray(e, a, n));) {
            a.splice(n, 1), n <= c && c--;
          }
        }), this;
      },
      has: function has(t) {
        return t ? -1 < x.inArray(t, a) : 0 < a.length;
      },
      empty: function empty() {
        return a && (a = []), this;
      },
      disable: function disable() {
        return r = l = [], a = e = "", this;
      },
      disabled: function disabled() {
        return !a;
      },
      lock: function lock() {
        return r = l = [], e || s || (a = e = ""), this;
      },
      locked: function locked() {
        return !!r;
      },
      fireWith: function fireWith(t, e) {
        return r || (e = [t, (e = e || []).slice ? e.slice() : e], l.push(e), s || h()), this;
      },
      fire: function fire() {
        return u.fireWith(this, arguments), this;
      },
      fired: function fired() {
        return !!o;
      }
    };

    return u;
  }, x.extend({
    Deferred: function Deferred(t) {
      var o = [["notify", "progress", x.Callbacks("memory"), x.Callbacks("memory"), 2], ["resolve", "done", x.Callbacks("once memory"), x.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", x.Callbacks("once memory"), x.Callbacks("once memory"), 1, "rejected"]],
          s = "pending",
          r = {
        state: function state() {
          return s;
        },
        always: function always() {
          return a.done(arguments).fail(arguments), this;
        },
        "catch": function _catch(t) {
          return r.then(null, t);
        },
        pipe: function pipe() {
          var s = arguments;
          return x.Deferred(function (i) {
            x.each(o, function (t, e) {
              var n = y(s[e[4]]) && s[e[4]];
              a[e[1]](function () {
                var t = n && n.apply(this, arguments);
                t && y(t.promise) ? t.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[e[0] + "With"](this, n ? [t] : arguments);
              });
            }), s = null;
          }).promise();
        },
        then: function then(e, n, i) {
          var l = 0;

          function c(s, o, r, a) {
            return function () {
              var n = this,
                  i = arguments,
                  t = function t() {
                var t, e;

                if (!(s < l)) {
                  if ((t = r.apply(n, i)) === o.promise()) throw new TypeError("Thenable self-resolution");
                  e = t && ("object" == typeof t || "function" == typeof t) && t.then, y(e) ? a ? e.call(t, c(l, o, H, a), c(l, o, Y, a)) : (l++, e.call(t, c(l, o, H, a), c(l, o, Y, a), c(l, o, H, o.notifyWith))) : (r !== H && (n = void 0, i = [t]), (a || o.resolveWith)(n, i));
                }
              },
                  e = a ? t : function () {
                try {
                  t();
                } catch (t) {
                  x.Deferred.exceptionHook && x.Deferred.exceptionHook(t, e.stackTrace), l <= s + 1 && (r !== Y && (n = void 0, i = [t]), o.rejectWith(n, i));
                }
              };

              s ? e() : (x.Deferred.getStackHook && (e.stackTrace = x.Deferred.getStackHook()), k.setTimeout(e));
            };
          }

          return x.Deferred(function (t) {
            o[0][3].add(c(0, t, y(i) ? i : H, t.notifyWith)), o[1][3].add(c(0, t, y(e) ? e : H)), o[2][3].add(c(0, t, y(n) ? n : Y));
          }).promise();
        },
        promise: function promise(t) {
          return null != t ? x.extend(t, r) : r;
        }
      },
          a = {};
      return x.each(o, function (t, e) {
        var n = e[2],
            i = e[5];
        r[e[1]] = n.add, i && n.add(function () {
          s = i;
        }, o[3 - t][2].disable, o[3 - t][3].disable, o[0][2].lock, o[0][3].lock), n.add(e[3].fire), a[e[0]] = function () {
          return a[e[0] + "With"](this === a ? void 0 : this, arguments), this;
        }, a[e[0] + "With"] = n.fireWith;
      }), r.promise(a), t && t.call(a, a), a;
    },
    when: function when(t) {
      var n = arguments.length,
          e = n,
          i = Array(e),
          s = a.call(arguments),
          o = x.Deferred(),
          r = function r(e) {
        return function (t) {
          i[e] = this, s[e] = 1 < arguments.length ? a.call(arguments) : t, --n || o.resolveWith(i, s);
        };
      };

      if (n <= 1 && ($(t, o.done(r(e)).resolve, o.reject, !n), "pending" === o.state() || y(s[e] && s[e].then))) return o.then();

      for (; e--;) {
        $(s[e], r(e), o.reject);
      }

      return o.promise();
    }
  });
  var R = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  x.Deferred.exceptionHook = function (t, e) {
    k.console && k.console.warn && t && R.test(t.name) && k.console.warn("jQuery.Deferred exception: " + t.message, t.stack, e);
  }, x.readyException = function (t) {
    k.setTimeout(function () {
      throw t;
    });
  };
  var W = x.Deferred();

  function U() {
    C.removeEventListener("DOMContentLoaded", U), k.removeEventListener("load", U), x.ready();
  }

  x.fn.ready = function (t) {
    return W.then(t)["catch"](function (t) {
      x.readyException(t);
    }), this;
  }, x.extend({
    isReady: !1,
    readyWait: 1,
    ready: function ready(t) {
      (!0 === t ? --x.readyWait : x.isReady) || (x.isReady = !0) !== t && 0 < --x.readyWait || W.resolveWith(C, [x]);
    }
  }), x.ready.then = W.then, "complete" === C.readyState || "loading" !== C.readyState && !C.documentElement.doScroll ? k.setTimeout(x.ready) : (C.addEventListener("DOMContentLoaded", U), k.addEventListener("load", U));

  var F = function F(t, e, n, i, s, o, r) {
    var a = 0,
        l = t.length,
        c = null == n;
    if ("object" === w(n)) for (a in s = !0, n) {
      F(t, e, a, n[a], !0, o, r);
    } else if (void 0 !== i && (s = !0, y(i) || (r = !0), c && (e = r ? (e.call(t, i), null) : (c = e, function (t, e, n) {
      return c.call(x(t), n);
    })), e)) for (; a < l; a++) {
      e(t[a], n, r ? i : i.call(t[a], a, e(t[a], n)));
    }
    return s ? t : c ? e.call(t) : l ? e(t[0], n) : o;
  },
      q = /^-ms-/,
      B = /-([a-z])/g;

  function V(t, e) {
    return e.toUpperCase();
  }

  function z(t) {
    return t.replace(q, "ms-").replace(B, V);
  }

  var G = function G(t) {
    return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType;
  };

  function K() {
    this.expando = x.expando + K.uid++;
  }

  K.uid = 1, K.prototype = {
    cache: function cache(t) {
      var e = t[this.expando];
      return e || (e = {}, G(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
        value: e,
        configurable: !0
      }))), e;
    },
    set: function set(t, e, n) {
      var i,
          s = this.cache(t);
      if ("string" == typeof e) s[z(e)] = n;else for (i in e) {
        s[z(i)] = e[i];
      }
      return s;
    },
    get: function get(t, e) {
      return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][z(e)];
    },
    access: function access(t, e, n) {
      return void 0 === e || e && "string" == typeof e && void 0 === n ? this.get(t, e) : (this.set(t, e, n), void 0 !== n ? n : e);
    },
    remove: function remove(t, e) {
      var n,
          i = t[this.expando];

      if (void 0 !== i) {
        if (void 0 !== e) {
          n = (e = Array.isArray(e) ? e.map(z) : (e = z(e)) in i ? [e] : e.match(j) || []).length;

          for (; n--;) {
            delete i[e[n]];
          }
        }

        (void 0 === e || x.isEmptyObject(i)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando]);
      }
    },
    hasData: function hasData(t) {
      var e = t[this.expando];
      return void 0 !== e && !x.isEmptyObject(e);
    }
  };
  var Q = new K(),
      Z = new K(),
      X = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      J = /[A-Z]/g;

  function tt(t, e, n) {
    var i, s;
    if (void 0 === n && 1 === t.nodeType) if (i = "data-" + e.replace(J, "-$&").toLowerCase(), "string" == typeof (n = t.getAttribute(i))) {
      try {
        n = "true" === (s = n) || "false" !== s && ("null" === s ? null : s === +s + "" ? +s : X.test(s) ? JSON.parse(s) : s);
      } catch (t) {}

      Z.set(t, e, n);
    } else n = void 0;
    return n;
  }

  x.extend({
    hasData: function hasData(t) {
      return Z.hasData(t) || Q.hasData(t);
    },
    data: function data(t, e, n) {
      return Z.access(t, e, n);
    },
    removeData: function removeData(t, e) {
      Z.remove(t, e);
    },
    _data: function _data(t, e, n) {
      return Q.access(t, e, n);
    },
    _removeData: function _removeData(t, e) {
      Q.remove(t, e);
    }
  }), x.fn.extend({
    data: function data(n, t) {
      var e,
          i,
          s,
          o = this[0],
          r = o && o.attributes;
      if (void 0 !== n) return "object" == typeof n ? this.each(function () {
        Z.set(this, n);
      }) : F(this, function (t) {
        var e;
        if (o && void 0 === t) return void 0 !== (e = Z.get(o, n)) ? e : void 0 !== (e = tt(o, n)) ? e : void 0;
        this.each(function () {
          Z.set(this, n, t);
        });
      }, null, t, 1 < arguments.length, null, !0);

      if (this.length && (s = Z.get(o), 1 === o.nodeType && !Q.get(o, "hasDataAttrs"))) {
        for (e = r.length; e--;) {
          r[e] && 0 === (i = r[e].name).indexOf("data-") && (i = z(i.slice(5)), tt(o, i, s[i]));
        }

        Q.set(o, "hasDataAttrs", !0);
      }

      return s;
    },
    removeData: function removeData(t) {
      return this.each(function () {
        Z.remove(this, t);
      });
    }
  }), x.extend({
    queue: function queue(t, e, n) {
      var i;
      if (t) return e = (e || "fx") + "queue", i = Q.get(t, e), n && (!i || Array.isArray(n) ? i = Q.access(t, e, x.makeArray(n)) : i.push(n)), i || [];
    },
    dequeue: function dequeue(t, e) {
      e = e || "fx";

      var n = x.queue(t, e),
          i = n.length,
          s = n.shift(),
          o = x._queueHooks(t, e);

      "inprogress" === s && (s = n.shift(), i--), s && ("fx" === e && n.unshift("inprogress"), delete o.stop, s.call(t, function () {
        x.dequeue(t, e);
      }, o)), !i && o && o.empty.fire();
    },
    _queueHooks: function _queueHooks(t, e) {
      var n = e + "queueHooks";
      return Q.get(t, n) || Q.access(t, n, {
        empty: x.Callbacks("once memory").add(function () {
          Q.remove(t, [e + "queue", n]);
        })
      });
    }
  }), x.fn.extend({
    queue: function queue(e, n) {
      var t = 2;
      return "string" != typeof e && (n = e, e = "fx", t--), arguments.length < t ? x.queue(this[0], e) : void 0 === n ? this : this.each(function () {
        var t = x.queue(this, e, n);
        x._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && x.dequeue(this, e);
      });
    },
    dequeue: function dequeue(t) {
      return this.each(function () {
        x.dequeue(this, t);
      });
    },
    clearQueue: function clearQueue(t) {
      return this.queue(t || "fx", []);
    },
    promise: function promise(t, e) {
      var n,
          i = 1,
          s = x.Deferred(),
          o = this,
          r = this.length,
          a = function a() {
        --i || s.resolveWith(o, [o]);
      };

      for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; r--;) {
        (n = Q.get(o[r], t + "queueHooks")) && n.empty && (i++, n.empty.add(a));
      }

      return a(), s.promise(e);
    }
  });

  var et = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      nt = new RegExp("^(?:([+-])=|)(" + et + ")([a-z%]*)$", "i"),
      it = ["Top", "Right", "Bottom", "Left"],
      st = C.documentElement,
      ot = function ot(t) {
    return x.contains(t.ownerDocument, t);
  },
      rt = {
    composed: !0
  };

  st.attachShadow && (ot = function ot(t) {
    return x.contains(t.ownerDocument, t) || t.getRootNode(rt) === t.ownerDocument;
  });

  var at = function at(t, e) {
    return "none" === (t = e || t).style.display || "" === t.style.display && ot(t) && "none" === x.css(t, "display");
  },
      lt = function lt(t, e, n, i) {
    var s,
        o,
        r = {};

    for (o in e) {
      r[o] = t.style[o], t.style[o] = e[o];
    }

    for (o in s = n.apply(t, i || []), e) {
      t.style[o] = r[o];
    }

    return s;
  };

  function ct(t, e, n, i) {
    var s,
        o,
        r = 20,
        a = i ? function () {
      return i.cur();
    } : function () {
      return x.css(t, e, "");
    },
        l = a(),
        c = n && n[3] || (x.cssNumber[e] ? "" : "px"),
        h = t.nodeType && (x.cssNumber[e] || "px" !== c && +l) && nt.exec(x.css(t, e));

    if (h && h[3] !== c) {
      for (l /= 2, c = c || h[3], h = +l || 1; r--;) {
        x.style(t, e, h + c), (1 - o) * (1 - (o = a() / l || .5)) <= 0 && (r = 0), h /= o;
      }

      h *= 2, x.style(t, e, h + c), n = n || [];
    }

    return n && (h = +h || +l || 0, s = n[1] ? h + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = h, i.end = s)), s;
  }

  var ht = {};

  function ut(t, e) {
    for (var n, i, s, o, r, a, l, c = [], h = 0, u = t.length; h < u; h++) {
      (i = t[h]).style && (n = i.style.display, e ? ("none" === n && (c[h] = Q.get(i, "display") || null, c[h] || (i.style.display = "")), "" === i.style.display && at(i) && (c[h] = (l = r = o = void 0, r = (s = i).ownerDocument, a = s.nodeName, (l = ht[a]) || (o = r.body.appendChild(r.createElement(a)), l = x.css(o, "display"), o.parentNode.removeChild(o), "none" === l && (l = "block"), ht[a] = l)))) : "none" !== n && (c[h] = "none", Q.set(i, "display", n)));
    }

    for (h = 0; h < u; h++) {
      null != c[h] && (t[h].style.display = c[h]);
    }

    return t;
  }

  x.fn.extend({
    show: function show() {
      return ut(this, !0);
    },
    hide: function hide() {
      return ut(this);
    },
    toggle: function toggle(t) {
      return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function () {
        at(this) ? x(this).show() : x(this).hide();
      });
    }
  });
  var dt = /^(?:checkbox|radio)$/i,
      pt = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
      ft = /^$|^module$|\/(?:java|ecma)script/i,
      mt = {
    option: [1, "<select multiple='multiple'>", "</select>"],
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""]
  };

  function gt(t, e) {
    var n;
    return n = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [], void 0 === e || e && E(t, e) ? x.merge([t], n) : n;
  }

  function vt(t, e) {
    for (var n = 0, i = t.length; n < i; n++) {
      Q.set(t[n], "globalEval", !e || Q.get(e[n], "globalEval"));
    }
  }

  mt.optgroup = mt.option, mt.tbody = mt.tfoot = mt.colgroup = mt.caption = mt.thead, mt.th = mt.td;
  var yt,
      bt,
      _t = /<|&#?\w+;/;

  function wt(t, e, n, i, s) {
    for (var o, r, a, l, c, h, u = e.createDocumentFragment(), d = [], p = 0, f = t.length; p < f; p++) {
      if ((o = t[p]) || 0 === o) if ("object" === w(o)) x.merge(d, o.nodeType ? [o] : o);else if (_t.test(o)) {
        for (r = r || u.appendChild(e.createElement("div")), a = (pt.exec(o) || ["", ""])[1].toLowerCase(), l = mt[a] || mt._default, r.innerHTML = l[1] + x.htmlPrefilter(o) + l[2], h = l[0]; h--;) {
          r = r.lastChild;
        }

        x.merge(d, r.childNodes), (r = u.firstChild).textContent = "";
      } else d.push(e.createTextNode(o));
    }

    for (u.textContent = "", p = 0; o = d[p++];) {
      if (i && -1 < x.inArray(o, i)) s && s.push(o);else if (c = ot(o), r = gt(u.appendChild(o), "script"), c && vt(r), n) for (h = 0; o = r[h++];) {
        ft.test(o.type || "") && n.push(o);
      }
    }

    return u;
  }

  yt = C.createDocumentFragment().appendChild(C.createElement("div")), (bt = C.createElement("input")).setAttribute("type", "radio"), bt.setAttribute("checked", "checked"), bt.setAttribute("name", "t"), yt.appendChild(bt), v.checkClone = yt.cloneNode(!0).cloneNode(!0).lastChild.checked, yt.innerHTML = "<textarea>x</textarea>", v.noCloneChecked = !!yt.cloneNode(!0).lastChild.defaultValue;
  var Dt = /^key/,
      kt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      Ct = /^([^.]*)(?:\.(.+)|)/;

  function xt() {
    return !0;
  }

  function St() {
    return !1;
  }

  function Tt(t, e) {
    return t === function () {
      try {
        return C.activeElement;
      } catch (t) {}
    }() == ("focus" === e);
  }

  function Et(t, e, n, i, s, o) {
    var r, a;

    if ("object" == typeof e) {
      for (a in "string" != typeof n && (i = i || n, n = void 0), e) {
        Et(t, a, n, i, e[a], o);
      }

      return t;
    }

    if (null == i && null == s ? (s = n, i = n = void 0) : null == s && ("string" == typeof n ? (s = i, i = void 0) : (s = i, i = n, n = void 0)), !1 === s) s = St;else if (!s) return t;
    return 1 === o && (r = s, (s = function s(t) {
      return x().off(t), r.apply(this, arguments);
    }).guid = r.guid || (r.guid = x.guid++)), t.each(function () {
      x.event.add(this, e, s, i, n);
    });
  }

  function Mt(t, s, o) {
    o ? (Q.set(t, s, !1), x.event.add(t, s, {
      namespace: !1,
      handler: function handler(t) {
        var e,
            n,
            i = Q.get(this, s);

        if (1 & t.isTrigger && this[s]) {
          if (i) (x.event.special[s] || {}).delegateType && t.stopPropagation();else if (i = a.call(arguments), Q.set(this, s, i), e = o(this, s), this[s](), i !== (n = Q.get(this, s)) || e ? Q.set(this, s, !1) : n = void 0, i !== n) return t.stopImmediatePropagation(), t.preventDefault(), n;
        } else i && (Q.set(this, s, x.event.trigger(x.extend(i.shift(), x.Event.prototype), i, this)), t.stopImmediatePropagation());
      }
    })) : x.event.add(t, s, xt);
  }

  x.event = {
    global: {},
    add: function add(e, t, n, i, s) {
      var o,
          r,
          a,
          l,
          c,
          h,
          u,
          d,
          p,
          f,
          m,
          g = Q.get(e);
      if (g) for (n.handler && (n = (o = n).handler, s = o.selector), s && x.find.matchesSelector(st, s), n.guid || (n.guid = x.guid++), (l = g.events) || (l = g.events = {}), (r = g.handle) || (r = g.handle = function (t) {
        return void 0 !== x && x.event.triggered !== t.type ? x.event.dispatch.apply(e, arguments) : void 0;
      }), c = (t = (t || "").match(j) || [""]).length; c--;) {
        p = m = (a = Ct.exec(t[c]) || [])[1], f = (a[2] || "").split(".").sort(), p && (u = x.event.special[p] || {}, p = (s ? u.delegateType : u.bindType) || p, u = x.event.special[p] || {}, h = x.extend({
          type: p,
          origType: m,
          data: i,
          handler: n,
          guid: n.guid,
          selector: s,
          needsContext: s && x.expr.match.needsContext.test(s),
          namespace: f.join(".")
        }, o), (d = l[p]) || ((d = l[p] = []).delegateCount = 0, u.setup && !1 !== u.setup.call(e, i, f, r) || e.addEventListener && e.addEventListener(p, r)), u.add && (u.add.call(e, h), h.handler.guid || (h.handler.guid = n.guid)), s ? d.splice(d.delegateCount++, 0, h) : d.push(h), x.event.global[p] = !0);
      }
    },
    remove: function remove(t, e, n, i, s) {
      var o,
          r,
          a,
          l,
          c,
          h,
          u,
          d,
          p,
          f,
          m,
          g = Q.hasData(t) && Q.get(t);

      if (g && (l = g.events)) {
        for (c = (e = (e || "").match(j) || [""]).length; c--;) {
          if (p = m = (a = Ct.exec(e[c]) || [])[1], f = (a[2] || "").split(".").sort(), p) {
            for (u = x.event.special[p] || {}, d = l[p = (i ? u.delegateType : u.bindType) || p] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), r = o = d.length; o--;) {
              h = d[o], !s && m !== h.origType || n && n.guid !== h.guid || a && !a.test(h.namespace) || i && i !== h.selector && ("**" !== i || !h.selector) || (d.splice(o, 1), h.selector && d.delegateCount--, u.remove && u.remove.call(t, h));
            }

            r && !d.length && (u.teardown && !1 !== u.teardown.call(t, f, g.handle) || x.removeEvent(t, p, g.handle), delete l[p]);
          } else for (p in l) {
            x.event.remove(t, p + e[c], n, i, !0);
          }
        }

        x.isEmptyObject(l) && Q.remove(t, "handle events");
      }
    },
    dispatch: function dispatch(t) {
      var e,
          n,
          i,
          s,
          o,
          r,
          a = x.event.fix(t),
          l = new Array(arguments.length),
          c = (Q.get(this, "events") || {})[a.type] || [],
          h = x.event.special[a.type] || {};

      for (l[0] = a, e = 1; e < arguments.length; e++) {
        l[e] = arguments[e];
      }

      if (a.delegateTarget = this, !h.preDispatch || !1 !== h.preDispatch.call(this, a)) {
        for (r = x.event.handlers.call(this, a, c), e = 0; (s = r[e++]) && !a.isPropagationStopped();) {
          for (a.currentTarget = s.elem, n = 0; (o = s.handlers[n++]) && !a.isImmediatePropagationStopped();) {
            a.rnamespace && !1 !== o.namespace && !a.rnamespace.test(o.namespace) || (a.handleObj = o, a.data = o.data, void 0 !== (i = ((x.event.special[o.origType] || {}).handle || o.handler).apply(s.elem, l)) && !1 === (a.result = i) && (a.preventDefault(), a.stopPropagation()));
          }
        }

        return h.postDispatch && h.postDispatch.call(this, a), a.result;
      }
    },
    handlers: function handlers(t, e) {
      var n,
          i,
          s,
          o,
          r,
          a = [],
          l = e.delegateCount,
          c = t.target;
      if (l && c.nodeType && !("click" === t.type && 1 <= t.button)) for (; c !== this; c = c.parentNode || this) {
        if (1 === c.nodeType && ("click" !== t.type || !0 !== c.disabled)) {
          for (o = [], r = {}, n = 0; n < l; n++) {
            void 0 === r[s = (i = e[n]).selector + " "] && (r[s] = i.needsContext ? -1 < x(s, this).index(c) : x.find(s, this, null, [c]).length), r[s] && o.push(i);
          }

          o.length && a.push({
            elem: c,
            handlers: o
          });
        }
      }
      return c = this, l < e.length && a.push({
        elem: c,
        handlers: e.slice(l)
      }), a;
    },
    addProp: function addProp(e, t) {
      Object.defineProperty(x.Event.prototype, e, {
        enumerable: !0,
        configurable: !0,
        get: y(t) ? function () {
          if (this.originalEvent) return t(this.originalEvent);
        } : function () {
          if (this.originalEvent) return this.originalEvent[e];
        },
        set: function set(t) {
          Object.defineProperty(this, e, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: t
          });
        }
      });
    },
    fix: function fix(t) {
      return t[x.expando] ? t : new x.Event(t);
    },
    special: {
      load: {
        noBubble: !0
      },
      click: {
        setup: function setup(t) {
          var e = this || t;
          return dt.test(e.type) && e.click && E(e, "input") && void 0 === Q.get(e, "click") && Mt(e, "click", xt), !1;
        },
        trigger: function trigger(t) {
          var e = this || t;
          return dt.test(e.type) && e.click && E(e, "input") && void 0 === Q.get(e, "click") && Mt(e, "click"), !0;
        },
        _default: function _default(t) {
          var e = t.target;
          return dt.test(e.type) && e.click && E(e, "input") && Q.get(e, "click") || E(e, "a");
        }
      },
      beforeunload: {
        postDispatch: function postDispatch(t) {
          void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result);
        }
      }
    }
  }, x.removeEvent = function (t, e, n) {
    t.removeEventListener && t.removeEventListener(e, n);
  }, x.Event = function (t, e) {
    if (!(this instanceof x.Event)) return new x.Event(t, e);
    t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? xt : St, this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget) : this.type = t, e && x.extend(this, e), this.timeStamp = t && t.timeStamp || Date.now(), this[x.expando] = !0;
  }, x.Event.prototype = {
    constructor: x.Event,
    isDefaultPrevented: St,
    isPropagationStopped: St,
    isImmediatePropagationStopped: St,
    isSimulated: !1,
    preventDefault: function preventDefault() {
      var t = this.originalEvent;
      this.isDefaultPrevented = xt, t && !this.isSimulated && t.preventDefault();
    },
    stopPropagation: function stopPropagation() {
      var t = this.originalEvent;
      this.isPropagationStopped = xt, t && !this.isSimulated && t.stopPropagation();
    },
    stopImmediatePropagation: function stopImmediatePropagation() {
      var t = this.originalEvent;
      this.isImmediatePropagationStopped = xt, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation();
    }
  }, x.each({
    altKey: !0,
    bubbles: !0,
    cancelable: !0,
    changedTouches: !0,
    ctrlKey: !0,
    detail: !0,
    eventPhase: !0,
    metaKey: !0,
    pageX: !0,
    pageY: !0,
    shiftKey: !0,
    view: !0,
    "char": !0,
    code: !0,
    charCode: !0,
    key: !0,
    keyCode: !0,
    button: !0,
    buttons: !0,
    clientX: !0,
    clientY: !0,
    offsetX: !0,
    offsetY: !0,
    pointerId: !0,
    pointerType: !0,
    screenX: !0,
    screenY: !0,
    targetTouches: !0,
    toElement: !0,
    touches: !0,
    which: function which(t) {
      var e = t.button;
      return null == t.which && Dt.test(t.type) ? null != t.charCode ? t.charCode : t.keyCode : !t.which && void 0 !== e && kt.test(t.type) ? 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0 : t.which;
    }
  }, x.event.addProp), x.each({
    focus: "focusin",
    blur: "focusout"
  }, function (t, e) {
    x.event.special[t] = {
      setup: function setup() {
        return Mt(this, t, Tt), !1;
      },
      trigger: function trigger() {
        return Mt(this, t), !0;
      },
      delegateType: e
    };
  }), x.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function (t, s) {
    x.event.special[t] = {
      delegateType: s,
      bindType: s,
      handle: function handle(t) {
        var e,
            n = t.relatedTarget,
            i = t.handleObj;
        return n && (n === this || x.contains(this, n)) || (t.type = i.origType, e = i.handler.apply(this, arguments), t.type = s), e;
      }
    };
  }), x.fn.extend({
    on: function on(t, e, n, i) {
      return Et(this, t, e, n, i);
    },
    one: function one(t, e, n, i) {
      return Et(this, t, e, n, i, 1);
    },
    off: function off(t, e, n) {
      var i, s;
      if (t && t.preventDefault && t.handleObj) return i = t.handleObj, x(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
      if ("object" != typeof t) return !1 !== e && "function" != typeof e || (n = e, e = void 0), !1 === n && (n = St), this.each(function () {
        x.event.remove(this, t, n, e);
      });

      for (s in t) {
        this.off(s, e, t[s]);
      }

      return this;
    }
  });
  var At = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
      Ot = /<script|<style|<link/i,
      It = /checked\s*(?:[^=]|=\s*.checked.)/i,
      Nt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

  function Pt(t, e) {
    return E(t, "table") && E(11 !== e.nodeType ? e : e.firstChild, "tr") && x(t).children("tbody")[0] || t;
  }

  function Lt(t) {
    return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t;
  }

  function jt(t) {
    return "true/" === (t.type || "").slice(0, 5) ? t.type = t.type.slice(5) : t.removeAttribute("type"), t;
  }

  function Ht(t, e) {
    var n, i, s, o, r, a, l, c;

    if (1 === e.nodeType) {
      if (Q.hasData(t) && (o = Q.access(t), r = Q.set(e, o), c = o.events)) for (s in delete r.handle, r.events = {}, c) {
        for (n = 0, i = c[s].length; n < i; n++) {
          x.event.add(e, s, c[s][n]);
        }
      }
      Z.hasData(t) && (a = Z.access(t), l = x.extend({}, a), Z.set(e, l));
    }
  }

  function Yt(n, i, s, o) {
    i = m.apply([], i);
    var t,
        e,
        r,
        a,
        l,
        c,
        h = 0,
        u = n.length,
        d = u - 1,
        p = i[0],
        f = y(p);
    if (f || 1 < u && "string" == typeof p && !v.checkClone && It.test(p)) return n.each(function (t) {
      var e = n.eq(t);
      f && (i[0] = p.call(this, t, e.html())), Yt(e, i, s, o);
    });

    if (u && (e = (t = wt(i, n[0].ownerDocument, !1, n, o)).firstChild, 1 === t.childNodes.length && (t = e), e || o)) {
      for (a = (r = x.map(gt(t, "script"), Lt)).length; h < u; h++) {
        l = t, h !== d && (l = x.clone(l, !0, !0), a && x.merge(r, gt(l, "script"))), s.call(n[h], l, h);
      }

      if (a) for (c = r[r.length - 1].ownerDocument, x.map(r, jt), h = 0; h < a; h++) {
        l = r[h], ft.test(l.type || "") && !Q.access(l, "globalEval") && x.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? x._evalUrl && !l.noModule && x._evalUrl(l.src, {
          nonce: l.nonce || l.getAttribute("nonce")
        }) : _(l.textContent.replace(Nt, ""), l, c));
      }
    }

    return n;
  }

  function $t(t, e, n) {
    for (var i, s = e ? x.filter(e, t) : t, o = 0; null != (i = s[o]); o++) {
      n || 1 !== i.nodeType || x.cleanData(gt(i)), i.parentNode && (n && ot(i) && vt(gt(i, "script")), i.parentNode.removeChild(i));
    }

    return t;
  }

  x.extend({
    htmlPrefilter: function htmlPrefilter(t) {
      return t.replace(At, "<$1></$2>");
    },
    clone: function clone(t, e, n) {
      var i,
          s,
          o,
          r,
          a,
          l,
          c,
          h = t.cloneNode(!0),
          u = ot(t);
      if (!(v.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || x.isXMLDoc(t))) for (r = gt(h), i = 0, s = (o = gt(t)).length; i < s; i++) {
        a = o[i], l = r[i], void 0, "input" === (c = l.nodeName.toLowerCase()) && dt.test(a.type) ? l.checked = a.checked : "input" !== c && "textarea" !== c || (l.defaultValue = a.defaultValue);
      }
      if (e) if (n) for (o = o || gt(t), r = r || gt(h), i = 0, s = o.length; i < s; i++) {
        Ht(o[i], r[i]);
      } else Ht(t, h);
      return 0 < (r = gt(h, "script")).length && vt(r, !u && gt(t, "script")), h;
    },
    cleanData: function cleanData(t) {
      for (var e, n, i, s = x.event.special, o = 0; void 0 !== (n = t[o]); o++) {
        if (G(n)) {
          if (e = n[Q.expando]) {
            if (e.events) for (i in e.events) {
              s[i] ? x.event.remove(n, i) : x.removeEvent(n, i, e.handle);
            }
            n[Q.expando] = void 0;
          }

          n[Z.expando] && (n[Z.expando] = void 0);
        }
      }
    }
  }), x.fn.extend({
    detach: function detach(t) {
      return $t(this, t, !0);
    },
    remove: function remove(t) {
      return $t(this, t);
    },
    text: function text(t) {
      return F(this, function (t) {
        return void 0 === t ? x.text(this) : this.empty().each(function () {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t);
        });
      }, null, t, arguments.length);
    },
    append: function append() {
      return Yt(this, arguments, function (t) {
        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Pt(this, t).appendChild(t);
      });
    },
    prepend: function prepend() {
      return Yt(this, arguments, function (t) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var e = Pt(this, t);
          e.insertBefore(t, e.firstChild);
        }
      });
    },
    before: function before() {
      return Yt(this, arguments, function (t) {
        this.parentNode && this.parentNode.insertBefore(t, this);
      });
    },
    after: function after() {
      return Yt(this, arguments, function (t) {
        this.parentNode && this.parentNode.insertBefore(t, this.nextSibling);
      });
    },
    empty: function empty() {
      for (var t, e = 0; null != (t = this[e]); e++) {
        1 === t.nodeType && (x.cleanData(gt(t, !1)), t.textContent = "");
      }

      return this;
    },
    clone: function clone(t, e) {
      return t = null != t && t, e = null == e ? t : e, this.map(function () {
        return x.clone(this, t, e);
      });
    },
    html: function html(t) {
      return F(this, function (t) {
        var e = this[0] || {},
            n = 0,
            i = this.length;
        if (void 0 === t && 1 === e.nodeType) return e.innerHTML;

        if ("string" == typeof t && !Ot.test(t) && !mt[(pt.exec(t) || ["", ""])[1].toLowerCase()]) {
          t = x.htmlPrefilter(t);

          try {
            for (; n < i; n++) {
              1 === (e = this[n] || {}).nodeType && (x.cleanData(gt(e, !1)), e.innerHTML = t);
            }

            e = 0;
          } catch (t) {}
        }

        e && this.empty().append(t);
      }, null, t, arguments.length);
    },
    replaceWith: function replaceWith() {
      var n = [];
      return Yt(this, arguments, function (t) {
        var e = this.parentNode;
        x.inArray(this, n) < 0 && (x.cleanData(gt(this)), e && e.replaceChild(t, this));
      }, n);
    }
  }), x.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function (t, r) {
    x.fn[t] = function (t) {
      for (var e, n = [], i = x(t), s = i.length - 1, o = 0; o <= s; o++) {
        e = o === s ? this : this.clone(!0), x(i[o])[r](e), l.apply(n, e.get());
      }

      return this.pushStack(n);
    };
  });

  var Rt = new RegExp("^(" + et + ")(?!px)[a-z%]+$", "i"),
      Wt = function Wt(t) {
    var e = t.ownerDocument.defaultView;
    return e && e.opener || (e = k), e.getComputedStyle(t);
  },
      Ut = new RegExp(it.join("|"), "i");

  function Ft(t, e, n) {
    var i,
        s,
        o,
        r,
        a = t.style;
    return (n = n || Wt(t)) && ("" !== (r = n.getPropertyValue(e) || n[e]) || ot(t) || (r = x.style(t, e)), !v.pixelBoxStyles() && Rt.test(r) && Ut.test(e) && (i = a.width, s = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = r, r = n.width, a.width = i, a.minWidth = s, a.maxWidth = o)), void 0 !== r ? r + "" : r;
  }

  function qt(t, e) {
    return {
      get: function get() {
        if (!t()) return (this.get = e).apply(this, arguments);
        delete this.get;
      }
    };
  }

  !function () {
    function t() {
      if (l) {
        a.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", st.appendChild(a).appendChild(l);
        var t = k.getComputedStyle(l);
        n = "1%" !== t.top, r = 12 === e(t.marginLeft), l.style.right = "60%", o = 36 === e(t.right), i = 36 === e(t.width), l.style.position = "absolute", s = 12 === e(l.offsetWidth / 3), st.removeChild(a), l = null;
      }
    }

    function e(t) {
      return Math.round(parseFloat(t));
    }

    var n,
        i,
        s,
        o,
        r,
        a = C.createElement("div"),
        l = C.createElement("div");
    l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", v.clearCloneStyle = "content-box" === l.style.backgroundClip, x.extend(v, {
      boxSizingReliable: function boxSizingReliable() {
        return t(), i;
      },
      pixelBoxStyles: function pixelBoxStyles() {
        return t(), o;
      },
      pixelPosition: function pixelPosition() {
        return t(), n;
      },
      reliableMarginLeft: function reliableMarginLeft() {
        return t(), r;
      },
      scrollboxSize: function scrollboxSize() {
        return t(), s;
      }
    }));
  }();
  var Bt = ["Webkit", "Moz", "ms"],
      Vt = C.createElement("div").style,
      zt = {};

  function Gt(t) {
    var e = x.cssProps[t] || zt[t];
    return e || (t in Vt ? t : zt[t] = function (t) {
      for (var e = t[0].toUpperCase() + t.slice(1), n = Bt.length; n--;) {
        if ((t = Bt[n] + e) in Vt) return t;
      }
    }(t) || t);
  }

  var Kt = /^(none|table(?!-c[ea]).+)/,
      Qt = /^--/,
      Zt = {
    position: "absolute",
    visibility: "hidden",
    display: "block"
  },
      Xt = {
    letterSpacing: "0",
    fontWeight: "400"
  };

  function Jt(t, e, n) {
    var i = nt.exec(e);
    return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : e;
  }

  function te(t, e, n, i, s, o) {
    var r = "width" === e ? 1 : 0,
        a = 0,
        l = 0;
    if (n === (i ? "border" : "content")) return 0;

    for (; r < 4; r += 2) {
      "margin" === n && (l += x.css(t, n + it[r], !0, s)), i ? ("content" === n && (l -= x.css(t, "padding" + it[r], !0, s)), "margin" !== n && (l -= x.css(t, "border" + it[r] + "Width", !0, s))) : (l += x.css(t, "padding" + it[r], !0, s), "padding" !== n ? l += x.css(t, "border" + it[r] + "Width", !0, s) : a += x.css(t, "border" + it[r] + "Width", !0, s));
    }

    return !i && 0 <= o && (l += Math.max(0, Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - o - l - a - .5)) || 0), l;
  }

  function ee(t, e, n) {
    var i = Wt(t),
        s = (!v.boxSizingReliable() || n) && "border-box" === x.css(t, "boxSizing", !1, i),
        o = s,
        r = Ft(t, e, i),
        a = "offset" + e[0].toUpperCase() + e.slice(1);

    if (Rt.test(r)) {
      if (!n) return r;
      r = "auto";
    }

    return (!v.boxSizingReliable() && s || "auto" === r || !parseFloat(r) && "inline" === x.css(t, "display", !1, i)) && t.getClientRects().length && (s = "border-box" === x.css(t, "boxSizing", !1, i), (o = a in t) && (r = t[a])), (r = parseFloat(r) || 0) + te(t, e, n || (s ? "border" : "content"), o, i, r) + "px";
  }

  function ne(t, e, n, i, s) {
    return new ne.prototype.init(t, e, n, i, s);
  }

  x.extend({
    cssHooks: {
      opacity: {
        get: function get(t, e) {
          if (e) {
            var n = Ft(t, "opacity");
            return "" === n ? "1" : n;
          }
        }
      }
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      gridArea: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnStart: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowStart: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: {},
    style: function style(t, e, n, i) {
      if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
        var s,
            o,
            r,
            a = z(e),
            l = Qt.test(e),
            c = t.style;
        if (l || (e = Gt(a)), r = x.cssHooks[e] || x.cssHooks[a], void 0 === n) return r && "get" in r && void 0 !== (s = r.get(t, !1, i)) ? s : c[e];
        "string" === (o = typeof n) && (s = nt.exec(n)) && s[1] && (n = ct(t, e, s), o = "number"), null != n && n == n && ("number" !== o || l || (n += s && s[3] || (x.cssNumber[a] ? "" : "px")), v.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (c[e] = "inherit"), r && "set" in r && void 0 === (n = r.set(t, n, i)) || (l ? c.setProperty(e, n) : c[e] = n));
      }
    },
    css: function css(t, e, n, i) {
      var s,
          o,
          r,
          a = z(e);
      return Qt.test(e) || (e = Gt(a)), (r = x.cssHooks[e] || x.cssHooks[a]) && "get" in r && (s = r.get(t, !0, n)), void 0 === s && (s = Ft(t, e, i)), "normal" === s && e in Xt && (s = Xt[e]), "" === n || n ? (o = parseFloat(s), !0 === n || isFinite(o) ? o || 0 : s) : s;
    }
  }), x.each(["height", "width"], function (t, l) {
    x.cssHooks[l] = {
      get: function get(t, e, n) {
        if (e) return !Kt.test(x.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? ee(t, l, n) : lt(t, Zt, function () {
          return ee(t, l, n);
        });
      },
      set: function set(t, e, n) {
        var i,
            s = Wt(t),
            o = !v.scrollboxSize() && "absolute" === s.position,
            r = (o || n) && "border-box" === x.css(t, "boxSizing", !1, s),
            a = n ? te(t, l, n, r, s) : 0;
        return r && o && (a -= Math.ceil(t["offset" + l[0].toUpperCase() + l.slice(1)] - parseFloat(s[l]) - te(t, l, "border", !1, s) - .5)), a && (i = nt.exec(e)) && "px" !== (i[3] || "px") && (t.style[l] = e, e = x.css(t, l)), Jt(0, e, a);
      }
    };
  }), x.cssHooks.marginLeft = qt(v.reliableMarginLeft, function (t, e) {
    if (e) return (parseFloat(Ft(t, "marginLeft")) || t.getBoundingClientRect().left - lt(t, {
      marginLeft: 0
    }, function () {
      return t.getBoundingClientRect().left;
    })) + "px";
  }), x.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function (s, o) {
    x.cssHooks[s + o] = {
      expand: function expand(t) {
        for (var e = 0, n = {}, i = "string" == typeof t ? t.split(" ") : [t]; e < 4; e++) {
          n[s + it[e] + o] = i[e] || i[e - 2] || i[0];
        }

        return n;
      }
    }, "margin" !== s && (x.cssHooks[s + o].set = Jt);
  }), x.fn.extend({
    css: function css(t, e) {
      return F(this, function (t, e, n) {
        var i,
            s,
            o = {},
            r = 0;

        if (Array.isArray(e)) {
          for (i = Wt(t), s = e.length; r < s; r++) {
            o[e[r]] = x.css(t, e[r], !1, i);
          }

          return o;
        }

        return void 0 !== n ? x.style(t, e, n) : x.css(t, e);
      }, t, e, 1 < arguments.length);
    }
  }), ((x.Tween = ne).prototype = {
    constructor: ne,
    init: function init(t, e, n, i, s, o) {
      this.elem = t, this.prop = n, this.easing = s || x.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = o || (x.cssNumber[n] ? "" : "px");
    },
    cur: function cur() {
      var t = ne.propHooks[this.prop];
      return t && t.get ? t.get(this) : ne.propHooks._default.get(this);
    },
    run: function run(t) {
      var e,
          n = ne.propHooks[this.prop];
      return this.options.duration ? this.pos = e = x.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : ne.propHooks._default.set(this), this;
    }
  }).init.prototype = ne.prototype, (ne.propHooks = {
    _default: {
      get: function get(t) {
        var e;
        return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = x.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0;
      },
      set: function set(t) {
        x.fx.step[t.prop] ? x.fx.step[t.prop](t) : 1 !== t.elem.nodeType || !x.cssHooks[t.prop] && null == t.elem.style[Gt(t.prop)] ? t.elem[t.prop] = t.now : x.style(t.elem, t.prop, t.now + t.unit);
      }
    }
  }).scrollTop = ne.propHooks.scrollLeft = {
    set: function set(t) {
      t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now);
    }
  }, x.easing = {
    linear: function linear(t) {
      return t;
    },
    swing: function swing(t) {
      return .5 - Math.cos(t * Math.PI) / 2;
    },
    _default: "swing"
  }, x.fx = ne.prototype.init, x.fx.step = {};
  var ie,
      se,
      oe,
      re,
      ae = /^(?:toggle|show|hide)$/,
      le = /queueHooks$/;

  function ce() {
    se && (!1 === C.hidden && k.requestAnimationFrame ? k.requestAnimationFrame(ce) : k.setTimeout(ce, x.fx.interval), x.fx.tick());
  }

  function he() {
    return k.setTimeout(function () {
      ie = void 0;
    }), ie = Date.now();
  }

  function ue(t, e) {
    var n,
        i = 0,
        s = {
      height: t
    };

    for (e = e ? 1 : 0; i < 4; i += 2 - e) {
      s["margin" + (n = it[i])] = s["padding" + n] = t;
    }

    return e && (s.opacity = s.width = t), s;
  }

  function de(t, e, n) {
    for (var i, s = (pe.tweeners[e] || []).concat(pe.tweeners["*"]), o = 0, r = s.length; o < r; o++) {
      if (i = s[o].call(n, e, t)) return i;
    }
  }

  function pe(o, t, e) {
    var n,
        r,
        i = 0,
        s = pe.prefilters.length,
        a = x.Deferred().always(function () {
      delete l.elem;
    }),
        l = function l() {
      if (r) return !1;

      for (var t = ie || he(), e = Math.max(0, c.startTime + c.duration - t), n = 1 - (e / c.duration || 0), i = 0, s = c.tweens.length; i < s; i++) {
        c.tweens[i].run(n);
      }

      return a.notifyWith(o, [c, n, e]), n < 1 && s ? e : (s || a.notifyWith(o, [c, 1, 0]), a.resolveWith(o, [c]), !1);
    },
        c = a.promise({
      elem: o,
      props: x.extend({}, t),
      opts: x.extend(!0, {
        specialEasing: {},
        easing: x.easing._default
      }, e),
      originalProperties: t,
      originalOptions: e,
      startTime: ie || he(),
      duration: e.duration,
      tweens: [],
      createTween: function createTween(t, e) {
        var n = x.Tween(o, c.opts, t, e, c.opts.specialEasing[t] || c.opts.easing);
        return c.tweens.push(n), n;
      },
      stop: function stop(t) {
        var e = 0,
            n = t ? c.tweens.length : 0;
        if (r) return this;

        for (r = !0; e < n; e++) {
          c.tweens[e].run(1);
        }

        return t ? (a.notifyWith(o, [c, 1, 0]), a.resolveWith(o, [c, t])) : a.rejectWith(o, [c, t]), this;
      }
    }),
        h = c.props;

    for (!function (t, e) {
      var n, i, s, o, r;

      for (n in t) {
        if (s = e[i = z(n)], o = t[n], Array.isArray(o) && (s = o[1], o = t[n] = o[0]), n !== i && (t[i] = o, delete t[n]), (r = x.cssHooks[i]) && ("expand" in r)) for (n in o = r.expand(o), delete t[i], o) {
          (n in t) || (t[n] = o[n], e[n] = s);
        } else e[i] = s;
      }
    }(h, c.opts.specialEasing); i < s; i++) {
      if (n = pe.prefilters[i].call(c, o, h, c.opts)) return y(n.stop) && (x._queueHooks(c.elem, c.opts.queue).stop = n.stop.bind(n)), n;
    }

    return x.map(h, de, c), y(c.opts.start) && c.opts.start.call(o, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), x.fx.timer(x.extend(l, {
      elem: o,
      anim: c,
      queue: c.opts.queue
    })), c;
  }

  x.Animation = x.extend(pe, {
    tweeners: {
      "*": [function (t, e) {
        var n = this.createTween(t, e);
        return ct(n.elem, t, nt.exec(e), n), n;
      }]
    },
    tweener: function tweener(t, e) {
      for (var n, i = 0, s = (t = y(t) ? (e = t, ["*"]) : t.match(j)).length; i < s; i++) {
        n = t[i], pe.tweeners[n] = pe.tweeners[n] || [], pe.tweeners[n].unshift(e);
      }
    },
    prefilters: [function (t, e, n) {
      var i,
          s,
          o,
          r,
          a,
          l,
          c,
          h,
          u = "width" in e || "height" in e,
          d = this,
          p = {},
          f = t.style,
          m = t.nodeType && at(t),
          g = Q.get(t, "fxshow");

      for (i in n.queue || (null == (r = x._queueHooks(t, "fx")).unqueued && (r.unqueued = 0, a = r.empty.fire, r.empty.fire = function () {
        r.unqueued || a();
      }), r.unqueued++, d.always(function () {
        d.always(function () {
          r.unqueued--, x.queue(t, "fx").length || r.empty.fire();
        });
      })), e) {
        if (s = e[i], ae.test(s)) {
          if (delete e[i], o = o || "toggle" === s, s === (m ? "hide" : "show")) {
            if ("show" !== s || !g || void 0 === g[i]) continue;
            m = !0;
          }

          p[i] = g && g[i] || x.style(t, i);
        }
      }

      if ((l = !x.isEmptyObject(e)) || !x.isEmptyObject(p)) for (i in u && 1 === t.nodeType && (n.overflow = [f.overflow, f.overflowX, f.overflowY], null == (c = g && g.display) && (c = Q.get(t, "display")), "none" === (h = x.css(t, "display")) && (c ? h = c : (ut([t], !0), c = t.style.display || c, h = x.css(t, "display"), ut([t]))), ("inline" === h || "inline-block" === h && null != c) && "none" === x.css(t, "float") && (l || (d.done(function () {
        f.display = c;
      }), null == c && (h = f.display, c = "none" === h ? "" : h)), f.display = "inline-block")), n.overflow && (f.overflow = "hidden", d.always(function () {
        f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2];
      })), l = !1, p) {
        l || (g ? "hidden" in g && (m = g.hidden) : g = Q.access(t, "fxshow", {
          display: c
        }), o && (g.hidden = !m), m && ut([t], !0), d.done(function () {
          for (i in m || ut([t]), Q.remove(t, "fxshow"), p) {
            x.style(t, i, p[i]);
          }
        })), l = de(m ? g[i] : 0, i, d), i in g || (g[i] = l.start, m && (l.end = l.start, l.start = 0));
      }
    }],
    prefilter: function prefilter(t, e) {
      e ? pe.prefilters.unshift(t) : pe.prefilters.push(t);
    }
  }), x.speed = function (t, e, n) {
    var i = t && "object" == typeof t ? x.extend({}, t) : {
      complete: n || !n && e || y(t) && t,
      duration: t,
      easing: n && e || e && !y(e) && e
    };
    return x.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in x.fx.speeds ? i.duration = x.fx.speeds[i.duration] : i.duration = x.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
      y(i.old) && i.old.call(this), i.queue && x.dequeue(this, i.queue);
    }, i;
  }, x.fn.extend({
    fadeTo: function fadeTo(t, e, n, i) {
      return this.filter(at).css("opacity", 0).show().end().animate({
        opacity: e
      }, t, n, i);
    },
    animate: function animate(e, t, n, i) {
      var s = x.isEmptyObject(e),
          o = x.speed(t, n, i),
          r = function r() {
        var t = pe(this, x.extend({}, e), o);
        (s || Q.get(this, "finish")) && t.stop(!0);
      };

      return r.finish = r, s || !1 === o.queue ? this.each(r) : this.queue(o.queue, r);
    },
    stop: function stop(s, t, o) {
      var r = function r(t) {
        var e = t.stop;
        delete t.stop, e(o);
      };

      return "string" != typeof s && (o = t, t = s, s = void 0), t && !1 !== s && this.queue(s || "fx", []), this.each(function () {
        var t = !0,
            e = null != s && s + "queueHooks",
            n = x.timers,
            i = Q.get(this);
        if (e) i[e] && i[e].stop && r(i[e]);else for (e in i) {
          i[e] && i[e].stop && le.test(e) && r(i[e]);
        }

        for (e = n.length; e--;) {
          n[e].elem !== this || null != s && n[e].queue !== s || (n[e].anim.stop(o), t = !1, n.splice(e, 1));
        }

        !t && o || x.dequeue(this, s);
      });
    },
    finish: function finish(r) {
      return !1 !== r && (r = r || "fx"), this.each(function () {
        var t,
            e = Q.get(this),
            n = e[r + "queue"],
            i = e[r + "queueHooks"],
            s = x.timers,
            o = n ? n.length : 0;

        for (e.finish = !0, x.queue(this, r, []), i && i.stop && i.stop.call(this, !0), t = s.length; t--;) {
          s[t].elem === this && s[t].queue === r && (s[t].anim.stop(!0), s.splice(t, 1));
        }

        for (t = 0; t < o; t++) {
          n[t] && n[t].finish && n[t].finish.call(this);
        }

        delete e.finish;
      });
    }
  }), x.each(["toggle", "show", "hide"], function (t, i) {
    var s = x.fn[i];

    x.fn[i] = function (t, e, n) {
      return null == t || "boolean" == typeof t ? s.apply(this, arguments) : this.animate(ue(i, !0), t, e, n);
    };
  }), x.each({
    slideDown: ue("show"),
    slideUp: ue("hide"),
    slideToggle: ue("toggle"),
    fadeIn: {
      opacity: "show"
    },
    fadeOut: {
      opacity: "hide"
    },
    fadeToggle: {
      opacity: "toggle"
    }
  }, function (t, i) {
    x.fn[t] = function (t, e, n) {
      return this.animate(i, t, e, n);
    };
  }), x.timers = [], x.fx.tick = function () {
    var t,
        e = 0,
        n = x.timers;

    for (ie = Date.now(); e < n.length; e++) {
      (t = n[e])() || n[e] !== t || n.splice(e--, 1);
    }

    n.length || x.fx.stop(), ie = void 0;
  }, x.fx.timer = function (t) {
    x.timers.push(t), x.fx.start();
  }, x.fx.interval = 13, x.fx.start = function () {
    se || (se = !0, ce());
  }, x.fx.stop = function () {
    se = null;
  }, x.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400
  }, x.fn.delay = function (i, t) {
    return i = x.fx && x.fx.speeds[i] || i, t = t || "fx", this.queue(t, function (t, e) {
      var n = k.setTimeout(t, i);

      e.stop = function () {
        k.clearTimeout(n);
      };
    });
  }, oe = C.createElement("input"), re = C.createElement("select").appendChild(C.createElement("option")), oe.type = "checkbox", v.checkOn = "" !== oe.value, v.optSelected = re.selected, (oe = C.createElement("input")).value = "t", oe.type = "radio", v.radioValue = "t" === oe.value;
  var fe,
      me = x.expr.attrHandle;
  x.fn.extend({
    attr: function attr(t, e) {
      return F(this, x.attr, t, e, 1 < arguments.length);
    },
    removeAttr: function removeAttr(t) {
      return this.each(function () {
        x.removeAttr(this, t);
      });
    }
  }), x.extend({
    attr: function attr(t, e, n) {
      var i,
          s,
          o = t.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) return void 0 === t.getAttribute ? x.prop(t, e, n) : (1 === o && x.isXMLDoc(t) || (s = x.attrHooks[e.toLowerCase()] || (x.expr.match.bool.test(e) ? fe : void 0)), void 0 !== n ? null === n ? void x.removeAttr(t, e) : s && "set" in s && void 0 !== (i = s.set(t, n, e)) ? i : (t.setAttribute(e, n + ""), n) : s && "get" in s && null !== (i = s.get(t, e)) ? i : null == (i = x.find.attr(t, e)) ? void 0 : i);
    },
    attrHooks: {
      type: {
        set: function set(t, e) {
          if (!v.radioValue && "radio" === e && E(t, "input")) {
            var n = t.value;
            return t.setAttribute("type", e), n && (t.value = n), e;
          }
        }
      }
    },
    removeAttr: function removeAttr(t, e) {
      var n,
          i = 0,
          s = e && e.match(j);
      if (s && 1 === t.nodeType) for (; n = s[i++];) {
        t.removeAttribute(n);
      }
    }
  }), fe = {
    set: function set(t, e, n) {
      return !1 === e ? x.removeAttr(t, n) : t.setAttribute(n, n), n;
    }
  }, x.each(x.expr.match.bool.source.match(/\w+/g), function (t, e) {
    var r = me[e] || x.find.attr;

    me[e] = function (t, e, n) {
      var i,
          s,
          o = e.toLowerCase();
      return n || (s = me[o], me[o] = i, i = null != r(t, e, n) ? o : null, me[o] = s), i;
    };
  });
  var ge = /^(?:input|select|textarea|button)$/i,
      ve = /^(?:a|area)$/i;

  function ye(t) {
    return (t.match(j) || []).join(" ");
  }

  function be(t) {
    return t.getAttribute && t.getAttribute("class") || "";
  }

  function _e(t) {
    return Array.isArray(t) ? t : "string" == typeof t && t.match(j) || [];
  }

  x.fn.extend({
    prop: function prop(t, e) {
      return F(this, x.prop, t, e, 1 < arguments.length);
    },
    removeProp: function removeProp(t) {
      return this.each(function () {
        delete this[x.propFix[t] || t];
      });
    }
  }), x.extend({
    prop: function prop(t, e, n) {
      var i,
          s,
          o = t.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) return 1 === o && x.isXMLDoc(t) || (e = x.propFix[e] || e, s = x.propHooks[e]), void 0 !== n ? s && "set" in s && void 0 !== (i = s.set(t, n, e)) ? i : t[e] = n : s && "get" in s && null !== (i = s.get(t, e)) ? i : t[e];
    },
    propHooks: {
      tabIndex: {
        get: function get(t) {
          var e = x.find.attr(t, "tabindex");
          return e ? parseInt(e, 10) : ge.test(t.nodeName) || ve.test(t.nodeName) && t.href ? 0 : -1;
        }
      }
    },
    propFix: {
      "for": "htmlFor",
      "class": "className"
    }
  }), v.optSelected || (x.propHooks.selected = {
    get: function get(t) {
      var e = t.parentNode;
      return e && e.parentNode && e.parentNode.selectedIndex, null;
    },
    set: function set(t) {
      var e = t.parentNode;
      e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex);
    }
  }), x.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    x.propFix[this.toLowerCase()] = this;
  }), x.fn.extend({
    addClass: function addClass(e) {
      var t,
          n,
          i,
          s,
          o,
          r,
          a,
          l = 0;
      if (y(e)) return this.each(function (t) {
        x(this).addClass(e.call(this, t, be(this)));
      });
      if ((t = _e(e)).length) for (; n = this[l++];) {
        if (s = be(n), i = 1 === n.nodeType && " " + ye(s) + " ") {
          for (r = 0; o = t[r++];) {
            i.indexOf(" " + o + " ") < 0 && (i += o + " ");
          }

          s !== (a = ye(i)) && n.setAttribute("class", a);
        }
      }
      return this;
    },
    removeClass: function removeClass(e) {
      var t,
          n,
          i,
          s,
          o,
          r,
          a,
          l = 0;
      if (y(e)) return this.each(function (t) {
        x(this).removeClass(e.call(this, t, be(this)));
      });
      if (!arguments.length) return this.attr("class", "");
      if ((t = _e(e)).length) for (; n = this[l++];) {
        if (s = be(n), i = 1 === n.nodeType && " " + ye(s) + " ") {
          for (r = 0; o = t[r++];) {
            for (; -1 < i.indexOf(" " + o + " ");) {
              i = i.replace(" " + o + " ", " ");
            }
          }

          s !== (a = ye(i)) && n.setAttribute("class", a);
        }
      }
      return this;
    },
    toggleClass: function toggleClass(s, e) {
      var o = typeof s,
          r = "string" === o || Array.isArray(s);
      return "boolean" == typeof e && r ? e ? this.addClass(s) : this.removeClass(s) : y(s) ? this.each(function (t) {
        x(this).toggleClass(s.call(this, t, be(this), e), e);
      }) : this.each(function () {
        var t, e, n, i;
        if (r) for (e = 0, n = x(this), i = _e(s); t = i[e++];) {
          n.hasClass(t) ? n.removeClass(t) : n.addClass(t);
        } else void 0 !== s && "boolean" !== o || ((t = be(this)) && Q.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === s ? "" : Q.get(this, "__className__") || ""));
      });
    },
    hasClass: function hasClass(t) {
      var e,
          n,
          i = 0;

      for (e = " " + t + " "; n = this[i++];) {
        if (1 === n.nodeType && -1 < (" " + ye(be(n)) + " ").indexOf(e)) return !0;
      }

      return !1;
    }
  });
  var we = /\r/g;
  x.fn.extend({
    val: function val(n) {
      var i,
          t,
          s,
          e = this[0];
      return arguments.length ? (s = y(n), this.each(function (t) {
        var e;
        1 === this.nodeType && (null == (e = s ? n.call(this, t, x(this).val()) : n) ? e = "" : "number" == typeof e ? e += "" : Array.isArray(e) && (e = x.map(e, function (t) {
          return null == t ? "" : t + "";
        })), (i = x.valHooks[this.type] || x.valHooks[this.nodeName.toLowerCase()]) && "set" in i && void 0 !== i.set(this, e, "value") || (this.value = e));
      })) : e ? (i = x.valHooks[e.type] || x.valHooks[e.nodeName.toLowerCase()]) && "get" in i && void 0 !== (t = i.get(e, "value")) ? t : "string" == typeof (t = e.value) ? t.replace(we, "") : null == t ? "" : t : void 0;
    }
  }), x.extend({
    valHooks: {
      option: {
        get: function get(t) {
          var e = x.find.attr(t, "value");
          return null != e ? e : ye(x.text(t));
        }
      },
      select: {
        get: function get(t) {
          var e,
              n,
              i,
              s = t.options,
              o = t.selectedIndex,
              r = "select-one" === t.type,
              a = r ? null : [],
              l = r ? o + 1 : s.length;

          for (i = o < 0 ? l : r ? o : 0; i < l; i++) {
            if (((n = s[i]).selected || i === o) && !n.disabled && (!n.parentNode.disabled || !E(n.parentNode, "optgroup"))) {
              if (e = x(n).val(), r) return e;
              a.push(e);
            }
          }

          return a;
        },
        set: function set(t, e) {
          for (var n, i, s = t.options, o = x.makeArray(e), r = s.length; r--;) {
            ((i = s[r]).selected = -1 < x.inArray(x.valHooks.option.get(i), o)) && (n = !0);
          }

          return n || (t.selectedIndex = -1), o;
        }
      }
    }
  }), x.each(["radio", "checkbox"], function () {
    x.valHooks[this] = {
      set: function set(t, e) {
        if (Array.isArray(e)) return t.checked = -1 < x.inArray(x(t).val(), e);
      }
    }, v.checkOn || (x.valHooks[this].get = function (t) {
      return null === t.getAttribute("value") ? "on" : t.value;
    });
  }), v.focusin = "onfocusin" in k;

  var De = /^(?:focusinfocus|focusoutblur)$/,
      ke = function ke(t) {
    t.stopPropagation();
  };

  x.extend(x.event, {
    trigger: function trigger(t, e, n, i) {
      var s,
          o,
          r,
          a,
          l,
          c,
          h,
          u,
          d = [n || C],
          p = g.call(t, "type") ? t.type : t,
          f = g.call(t, "namespace") ? t.namespace.split(".") : [];

      if (o = u = r = n = n || C, 3 !== n.nodeType && 8 !== n.nodeType && !De.test(p + x.event.triggered) && (-1 < p.indexOf(".") && (p = (f = p.split(".")).shift(), f.sort()), l = p.indexOf(":") < 0 && "on" + p, (t = t[x.expando] ? t : new x.Event(p, "object" == typeof t && t)).isTrigger = i ? 2 : 3, t.namespace = f.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = n), e = null == e ? [t] : x.makeArray(e, [t]), h = x.event.special[p] || {}, i || !h.trigger || !1 !== h.trigger.apply(n, e))) {
        if (!i && !h.noBubble && !b(n)) {
          for (a = h.delegateType || p, De.test(a + p) || (o = o.parentNode); o; o = o.parentNode) {
            d.push(o), r = o;
          }

          r === (n.ownerDocument || C) && d.push(r.defaultView || r.parentWindow || k);
        }

        for (s = 0; (o = d[s++]) && !t.isPropagationStopped();) {
          u = o, t.type = 1 < s ? a : h.bindType || p, (c = (Q.get(o, "events") || {})[t.type] && Q.get(o, "handle")) && c.apply(o, e), (c = l && o[l]) && c.apply && G(o) && (t.result = c.apply(o, e), !1 === t.result && t.preventDefault());
        }

        return t.type = p, i || t.isDefaultPrevented() || h._default && !1 !== h._default.apply(d.pop(), e) || !G(n) || l && y(n[p]) && !b(n) && ((r = n[l]) && (n[l] = null), x.event.triggered = p, t.isPropagationStopped() && u.addEventListener(p, ke), n[p](), t.isPropagationStopped() && u.removeEventListener(p, ke), x.event.triggered = void 0, r && (n[l] = r)), t.result;
      }
    },
    simulate: function simulate(t, e, n) {
      var i = x.extend(new x.Event(), n, {
        type: t,
        isSimulated: !0
      });
      x.event.trigger(i, null, e);
    }
  }), x.fn.extend({
    trigger: function trigger(t, e) {
      return this.each(function () {
        x.event.trigger(t, e, this);
      });
    },
    triggerHandler: function triggerHandler(t, e) {
      var n = this[0];
      if (n) return x.event.trigger(t, e, n, !0);
    }
  }), v.focusin || x.each({
    focus: "focusin",
    blur: "focusout"
  }, function (n, i) {
    var s = function s(t) {
      x.event.simulate(i, t.target, x.event.fix(t));
    };

    x.event.special[i] = {
      setup: function setup() {
        var t = this.ownerDocument || this,
            e = Q.access(t, i);
        e || t.addEventListener(n, s, !0), Q.access(t, i, (e || 0) + 1);
      },
      teardown: function teardown() {
        var t = this.ownerDocument || this,
            e = Q.access(t, i) - 1;
        e ? Q.access(t, i, e) : (t.removeEventListener(n, s, !0), Q.remove(t, i));
      }
    };
  });
  var Ce = k.location,
      xe = Date.now(),
      Se = /\?/;

  x.parseXML = function (t) {
    var e;
    if (!t || "string" != typeof t) return null;

    try {
      e = new k.DOMParser().parseFromString(t, "text/xml");
    } catch (t) {
      e = void 0;
    }

    return e && !e.getElementsByTagName("parsererror").length || x.error("Invalid XML: " + t), e;
  };

  var Te = /\[\]$/,
      Ee = /\r?\n/g,
      Me = /^(?:submit|button|image|reset|file)$/i,
      Ae = /^(?:input|select|textarea|keygen)/i;

  function Oe(n, t, i, s) {
    var e;
    if (Array.isArray(t)) x.each(t, function (t, e) {
      i || Te.test(n) ? s(n, e) : Oe(n + "[" + ("object" == typeof e && null != e ? t : "") + "]", e, i, s);
    });else if (i || "object" !== w(t)) s(n, t);else for (e in t) {
      Oe(n + "[" + e + "]", t[e], i, s);
    }
  }

  x.param = function (t, e) {
    var n,
        i = [],
        s = function s(t, e) {
      var n = y(e) ? e() : e;
      i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == n ? "" : n);
    };

    if (null == t) return "";
    if (Array.isArray(t) || t.jquery && !x.isPlainObject(t)) x.each(t, function () {
      s(this.name, this.value);
    });else for (n in t) {
      Oe(n, t[n], e, s);
    }
    return i.join("&");
  }, x.fn.extend({
    serialize: function serialize() {
      return x.param(this.serializeArray());
    },
    serializeArray: function serializeArray() {
      return this.map(function () {
        var t = x.prop(this, "elements");
        return t ? x.makeArray(t) : this;
      }).filter(function () {
        var t = this.type;
        return this.name && !x(this).is(":disabled") && Ae.test(this.nodeName) && !Me.test(t) && (this.checked || !dt.test(t));
      }).map(function (t, e) {
        var n = x(this).val();
        return null == n ? null : Array.isArray(n) ? x.map(n, function (t) {
          return {
            name: e.name,
            value: t.replace(Ee, "\r\n")
          };
        }) : {
          name: e.name,
          value: n.replace(Ee, "\r\n")
        };
      }).get();
    }
  });
  var Ie = /%20/g,
      Ne = /#.*$/,
      Pe = /([?&])_=[^&]*/,
      Le = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      je = /^(?:GET|HEAD)$/,
      He = /^\/\//,
      Ye = {},
      $e = {},
      Re = "*/".concat("*"),
      We = C.createElement("a");

  function Ue(o) {
    return function (t, e) {
      "string" != typeof t && (e = t, t = "*");
      var n,
          i = 0,
          s = t.toLowerCase().match(j) || [];
      if (y(e)) for (; n = s[i++];) {
        "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(e)) : (o[n] = o[n] || []).push(e);
      }
    };
  }

  function Fe(e, s, o, r) {
    var a = {},
        l = e === $e;

    function c(t) {
      var i;
      return a[t] = !0, x.each(e[t] || [], function (t, e) {
        var n = e(s, o, r);
        return "string" != typeof n || l || a[n] ? l ? !(i = n) : void 0 : (s.dataTypes.unshift(n), c(n), !1);
      }), i;
    }

    return c(s.dataTypes[0]) || !a["*"] && c("*");
  }

  function qe(t, e) {
    var n,
        i,
        s = x.ajaxSettings.flatOptions || {};

    for (n in e) {
      void 0 !== e[n] && ((s[n] ? t : i || (i = {}))[n] = e[n]);
    }

    return i && x.extend(!0, t, i), t;
  }

  We.href = Ce.href, x.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: Ce.href,
      type: "GET",
      isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Ce.protocol),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": Re,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {
        xml: /\bxml\b/,
        html: /\bhtml/,
        json: /\bjson\b/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": JSON.parse,
        "text xml": x.parseXML
      },
      flatOptions: {
        url: !0,
        context: !0
      }
    },
    ajaxSetup: function ajaxSetup(t, e) {
      return e ? qe(qe(t, x.ajaxSettings), e) : qe(x.ajaxSettings, t);
    },
    ajaxPrefilter: Ue(Ye),
    ajaxTransport: Ue($e),
    ajax: function ajax(t, e) {
      "object" == typeof t && (e = t, t = void 0), e = e || {};

      var h,
          u,
          d,
          n,
          p,
          i,
          f,
          m,
          s,
          o,
          g = x.ajaxSetup({}, e),
          v = g.context || g,
          y = g.context && (v.nodeType || v.jquery) ? x(v) : x.event,
          b = x.Deferred(),
          _ = x.Callbacks("once memory"),
          w = g.statusCode || {},
          r = {},
          a = {},
          l = "canceled",
          D = {
        readyState: 0,
        getResponseHeader: function getResponseHeader(t) {
          var e;

          if (f) {
            if (!n) for (n = {}; e = Le.exec(d);) {
              n[e[1].toLowerCase() + " "] = (n[e[1].toLowerCase() + " "] || []).concat(e[2]);
            }
            e = n[t.toLowerCase() + " "];
          }

          return null == e ? null : e.join(", ");
        },
        getAllResponseHeaders: function getAllResponseHeaders() {
          return f ? d : null;
        },
        setRequestHeader: function setRequestHeader(t, e) {
          return null == f && (t = a[t.toLowerCase()] = a[t.toLowerCase()] || t, r[t] = e), this;
        },
        overrideMimeType: function overrideMimeType(t) {
          return null == f && (g.mimeType = t), this;
        },
        statusCode: function statusCode(t) {
          var e;
          if (t) if (f) D.always(t[D.status]);else for (e in t) {
            w[e] = [w[e], t[e]];
          }
          return this;
        },
        abort: function abort(t) {
          var e = t || l;
          return h && h.abort(e), c(0, e), this;
        }
      };

      if (b.promise(D), g.url = ((t || g.url || Ce.href) + "").replace(He, Ce.protocol + "//"), g.type = e.method || e.type || g.method || g.type, g.dataTypes = (g.dataType || "*").toLowerCase().match(j) || [""], null == g.crossDomain) {
        i = C.createElement("a");

        try {
          i.href = g.url, i.href = i.href, g.crossDomain = We.protocol + "//" + We.host != i.protocol + "//" + i.host;
        } catch (t) {
          g.crossDomain = !0;
        }
      }

      if (g.data && g.processData && "string" != typeof g.data && (g.data = x.param(g.data, g.traditional)), Fe(Ye, g, e, D), f) return D;

      for (s in (m = x.event && g.global) && 0 == x.active++ && x.event.trigger("ajaxStart"), g.type = g.type.toUpperCase(), g.hasContent = !je.test(g.type), u = g.url.replace(Ne, ""), g.hasContent ? g.data && g.processData && 0 === (g.contentType || "").indexOf("application/x-www-form-urlencoded") && (g.data = g.data.replace(Ie, "+")) : (o = g.url.slice(u.length), g.data && (g.processData || "string" == typeof g.data) && (u += (Se.test(u) ? "&" : "?") + g.data, delete g.data), !1 === g.cache && (u = u.replace(Pe, "$1"), o = (Se.test(u) ? "&" : "?") + "_=" + xe++ + o), g.url = u + o), g.ifModified && (x.lastModified[u] && D.setRequestHeader("If-Modified-Since", x.lastModified[u]), x.etag[u] && D.setRequestHeader("If-None-Match", x.etag[u])), (g.data && g.hasContent && !1 !== g.contentType || e.contentType) && D.setRequestHeader("Content-Type", g.contentType), D.setRequestHeader("Accept", g.dataTypes[0] && g.accepts[g.dataTypes[0]] ? g.accepts[g.dataTypes[0]] + ("*" !== g.dataTypes[0] ? ", " + Re + "; q=0.01" : "") : g.accepts["*"]), g.headers) {
        D.setRequestHeader(s, g.headers[s]);
      }

      if (g.beforeSend && (!1 === g.beforeSend.call(v, D, g) || f)) return D.abort();

      if (l = "abort", _.add(g.complete), D.done(g.success), D.fail(g.error), h = Fe($e, g, e, D)) {
        if (D.readyState = 1, m && y.trigger("ajaxSend", [D, g]), f) return D;
        g.async && 0 < g.timeout && (p = k.setTimeout(function () {
          D.abort("timeout");
        }, g.timeout));

        try {
          f = !1, h.send(r, c);
        } catch (t) {
          if (f) throw t;
          c(-1, t);
        }
      } else c(-1, "No Transport");

      function c(t, e, n, i) {
        var s,
            o,
            r,
            a,
            l,
            c = e;
        f || (f = !0, p && k.clearTimeout(p), h = void 0, d = i || "", D.readyState = 0 < t ? 4 : 0, s = 200 <= t && t < 300 || 304 === t, n && (a = function (t, e, n) {
          for (var i, s, o, r, a = t.contents, l = t.dataTypes; "*" === l[0];) {
            l.shift(), void 0 === i && (i = t.mimeType || e.getResponseHeader("Content-Type"));
          }

          if (i) for (s in a) {
            if (a[s] && a[s].test(i)) {
              l.unshift(s);
              break;
            }
          }
          if (l[0] in n) o = l[0];else {
            for (s in n) {
              if (!l[0] || t.converters[s + " " + l[0]]) {
                o = s;
                break;
              }

              r || (r = s);
            }

            o = o || r;
          }
          if (o) return o !== l[0] && l.unshift(o), n[o];
        }(g, D, n)), a = function (t, e, n, i) {
          var s,
              o,
              r,
              a,
              l,
              c = {},
              h = t.dataTypes.slice();
          if (h[1]) for (r in t.converters) {
            c[r.toLowerCase()] = t.converters[r];
          }

          for (o = h.shift(); o;) {
            if (t.responseFields[o] && (n[t.responseFields[o]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = o, o = h.shift()) if ("*" === o) o = l;else if ("*" !== l && l !== o) {
              if (!(r = c[l + " " + o] || c["* " + o])) for (s in c) {
                if ((a = s.split(" "))[1] === o && (r = c[l + " " + a[0]] || c["* " + a[0]])) {
                  !0 === r ? r = c[s] : !0 !== c[s] && (o = a[0], h.unshift(a[1]));
                  break;
                }
              }
              if (!0 !== r) if (r && t["throws"]) e = r(e);else try {
                e = r(e);
              } catch (t) {
                return {
                  state: "parsererror",
                  error: r ? t : "No conversion from " + l + " to " + o
                };
              }
            }
          }

          return {
            state: "success",
            data: e
          };
        }(g, a, D, s), s ? (g.ifModified && ((l = D.getResponseHeader("Last-Modified")) && (x.lastModified[u] = l), (l = D.getResponseHeader("etag")) && (x.etag[u] = l)), 204 === t || "HEAD" === g.type ? c = "nocontent" : 304 === t ? c = "notmodified" : (c = a.state, o = a.data, s = !(r = a.error))) : (r = c, !t && c || (c = "error", t < 0 && (t = 0))), D.status = t, D.statusText = (e || c) + "", s ? b.resolveWith(v, [o, c, D]) : b.rejectWith(v, [D, c, r]), D.statusCode(w), w = void 0, m && y.trigger(s ? "ajaxSuccess" : "ajaxError", [D, g, s ? o : r]), _.fireWith(v, [D, c]), m && (y.trigger("ajaxComplete", [D, g]), --x.active || x.event.trigger("ajaxStop")));
      }

      return D;
    },
    getJSON: function getJSON(t, e, n) {
      return x.get(t, e, n, "json");
    },
    getScript: function getScript(t, e) {
      return x.get(t, void 0, e, "script");
    }
  }), x.each(["get", "post"], function (t, s) {
    x[s] = function (t, e, n, i) {
      return y(e) && (i = i || n, n = e, e = void 0), x.ajax(x.extend({
        url: t,
        type: s,
        dataType: i,
        data: e,
        success: n
      }, x.isPlainObject(t) && t));
    };
  }), x._evalUrl = function (t, e) {
    return x.ajax({
      url: t,
      type: "GET",
      dataType: "script",
      cache: !0,
      async: !1,
      global: !1,
      converters: {
        "text script": function textScript() {}
      },
      dataFilter: function dataFilter(t) {
        x.globalEval(t, e);
      }
    });
  }, x.fn.extend({
    wrapAll: function wrapAll(t) {
      var e;
      return this[0] && (y(t) && (t = t.call(this[0])), e = x(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
        for (var t = this; t.firstElementChild;) {
          t = t.firstElementChild;
        }

        return t;
      }).append(this)), this;
    },
    wrapInner: function wrapInner(n) {
      return y(n) ? this.each(function (t) {
        x(this).wrapInner(n.call(this, t));
      }) : this.each(function () {
        var t = x(this),
            e = t.contents();
        e.length ? e.wrapAll(n) : t.append(n);
      });
    },
    wrap: function wrap(e) {
      var n = y(e);
      return this.each(function (t) {
        x(this).wrapAll(n ? e.call(this, t) : e);
      });
    },
    unwrap: function unwrap(t) {
      return this.parent(t).not("body").each(function () {
        x(this).replaceWith(this.childNodes);
      }), this;
    }
  }), x.expr.pseudos.hidden = function (t) {
    return !x.expr.pseudos.visible(t);
  }, x.expr.pseudos.visible = function (t) {
    return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length);
  }, x.ajaxSettings.xhr = function () {
    try {
      return new k.XMLHttpRequest();
    } catch (t) {}
  };
  var Be = {
    0: 200,
    1223: 204
  },
      Ve = x.ajaxSettings.xhr();
  v.cors = !!Ve && "withCredentials" in Ve, v.ajax = Ve = !!Ve, x.ajaxTransport(function (s) {
    var _o, r;

    if (v.cors || Ve && !s.crossDomain) return {
      send: function send(t, e) {
        var n,
            i = s.xhr();
        if (i.open(s.type, s.url, s.async, s.username, s.password), s.xhrFields) for (n in s.xhrFields) {
          i[n] = s.xhrFields[n];
        }

        for (n in s.mimeType && i.overrideMimeType && i.overrideMimeType(s.mimeType), s.crossDomain || t["X-Requested-With"] || (t["X-Requested-With"] = "XMLHttpRequest"), t) {
          i.setRequestHeader(n, t[n]);
        }

        _o = function o(t) {
          return function () {
            _o && (_o = r = i.onload = i.onerror = i.onabort = i.ontimeout = i.onreadystatechange = null, "abort" === t ? i.abort() : "error" === t ? "number" != typeof i.status ? e(0, "error") : e(i.status, i.statusText) : e(Be[i.status] || i.status, i.statusText, "text" !== (i.responseType || "text") || "string" != typeof i.responseText ? {
              binary: i.response
            } : {
              text: i.responseText
            }, i.getAllResponseHeaders()));
          };
        }, i.onload = _o(), r = i.onerror = i.ontimeout = _o("error"), void 0 !== i.onabort ? i.onabort = r : i.onreadystatechange = function () {
          4 === i.readyState && k.setTimeout(function () {
            _o && r();
          });
        }, _o = _o("abort");

        try {
          i.send(s.hasContent && s.data || null);
        } catch (t) {
          if (_o) throw t;
        }
      },
      abort: function abort() {
        _o && _o();
      }
    };
  }), x.ajaxPrefilter(function (t) {
    t.crossDomain && (t.contents.script = !1);
  }), x.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /\b(?:java|ecma)script\b/
    },
    converters: {
      "text script": function textScript(t) {
        return x.globalEval(t), t;
      }
    }
  }), x.ajaxPrefilter("script", function (t) {
    void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET");
  }), x.ajaxTransport("script", function (n) {
    var i, _s;

    if (n.crossDomain || n.scriptAttrs) return {
      send: function send(t, e) {
        i = x("<script>").attr(n.scriptAttrs || {}).prop({
          charset: n.scriptCharset,
          src: n.url
        }).on("load error", _s = function s(t) {
          i.remove(), _s = null, t && e("error" === t.type ? 404 : 200, t.type);
        }), C.head.appendChild(i[0]);
      },
      abort: function abort() {
        _s && _s();
      }
    };
  });
  var ze,
      Ge = [],
      Ke = /(=)\?(?=&|$)|\?\?/;
  x.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function jsonpCallback() {
      var t = Ge.pop() || x.expando + "_" + xe++;
      return this[t] = !0, t;
    }
  }), x.ajaxPrefilter("json jsonp", function (t, e, n) {
    var i,
        s,
        o,
        r = !1 !== t.jsonp && (Ke.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Ke.test(t.data) && "data");
    if (r || "jsonp" === t.dataTypes[0]) return i = t.jsonpCallback = y(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, r ? t[r] = t[r].replace(Ke, "$1" + i) : !1 !== t.jsonp && (t.url += (Se.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function () {
      return o || x.error(i + " was not called"), o[0];
    }, t.dataTypes[0] = "json", s = k[i], k[i] = function () {
      o = arguments;
    }, n.always(function () {
      void 0 === s ? x(k).removeProp(i) : k[i] = s, t[i] && (t.jsonpCallback = e.jsonpCallback, Ge.push(i)), o && y(s) && s(o[0]), o = s = void 0;
    }), "script";
  }), v.createHTMLDocument = ((ze = C.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === ze.childNodes.length), x.parseHTML = function (t, e, n) {
    return "string" != typeof t ? [] : ("boolean" == typeof e && (n = e, e = !1), e || (v.createHTMLDocument ? ((i = (e = C.implementation.createHTMLDocument("")).createElement("base")).href = C.location.href, e.head.appendChild(i)) : e = C), o = !n && [], (s = M.exec(t)) ? [e.createElement(s[1])] : (s = wt([t], e, o), o && o.length && x(o).remove(), x.merge([], s.childNodes)));
    var i, s, o;
  }, x.fn.load = function (t, e, n) {
    var i,
        s,
        o,
        r = this,
        a = t.indexOf(" ");
    return -1 < a && (i = ye(t.slice(a)), t = t.slice(0, a)), y(e) ? (n = e, e = void 0) : e && "object" == typeof e && (s = "POST"), 0 < r.length && x.ajax({
      url: t,
      type: s || "GET",
      dataType: "html",
      data: e
    }).done(function (t) {
      o = arguments, r.html(i ? x("<div>").append(x.parseHTML(t)).find(i) : t);
    }).always(n && function (t, e) {
      r.each(function () {
        n.apply(this, o || [t.responseText, e, t]);
      });
    }), this;
  }, x.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {
    x.fn[e] = function (t) {
      return this.on(e, t);
    };
  }), x.expr.pseudos.animated = function (e) {
    return x.grep(x.timers, function (t) {
      return e === t.elem;
    }).length;
  }, x.offset = {
    setOffset: function setOffset(t, e, n) {
      var i,
          s,
          o,
          r,
          a,
          l,
          c = x.css(t, "position"),
          h = x(t),
          u = {};
      "static" === c && (t.style.position = "relative"), a = h.offset(), o = x.css(t, "top"), l = x.css(t, "left"), s = ("absolute" === c || "fixed" === c) && -1 < (o + l).indexOf("auto") ? (r = (i = h.position()).top, i.left) : (r = parseFloat(o) || 0, parseFloat(l) || 0), y(e) && (e = e.call(t, n, x.extend({}, a))), null != e.top && (u.top = e.top - a.top + r), null != e.left && (u.left = e.left - a.left + s), "using" in e ? e.using.call(t, u) : h.css(u);
    }
  }, x.fn.extend({
    offset: function offset(e) {
      if (arguments.length) return void 0 === e ? this : this.each(function (t) {
        x.offset.setOffset(this, e, t);
      });
      var t,
          n,
          i = this[0];
      return i ? i.getClientRects().length ? (t = i.getBoundingClientRect(), n = i.ownerDocument.defaultView, {
        top: t.top + n.pageYOffset,
        left: t.left + n.pageXOffset
      }) : {
        top: 0,
        left: 0
      } : void 0;
    },
    position: function position() {
      if (this[0]) {
        var t,
            e,
            n,
            i = this[0],
            s = {
          top: 0,
          left: 0
        };
        if ("fixed" === x.css(i, "position")) e = i.getBoundingClientRect();else {
          for (e = this.offset(), n = i.ownerDocument, t = i.offsetParent || n.documentElement; t && (t === n.body || t === n.documentElement) && "static" === x.css(t, "position");) {
            t = t.parentNode;
          }

          t && t !== i && 1 === t.nodeType && ((s = x(t).offset()).top += x.css(t, "borderTopWidth", !0), s.left += x.css(t, "borderLeftWidth", !0));
        }
        return {
          top: e.top - s.top - x.css(i, "marginTop", !0),
          left: e.left - s.left - x.css(i, "marginLeft", !0)
        };
      }
    },
    offsetParent: function offsetParent() {
      return this.map(function () {
        for (var t = this.offsetParent; t && "static" === x.css(t, "position");) {
          t = t.offsetParent;
        }

        return t || st;
      });
    }
  }), x.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function (e, s) {
    var o = "pageYOffset" === s;

    x.fn[e] = function (t) {
      return F(this, function (t, e, n) {
        var i;
        if (b(t) ? i = t : 9 === t.nodeType && (i = t.defaultView), void 0 === n) return i ? i[s] : t[e];
        i ? i.scrollTo(o ? i.pageXOffset : n, o ? n : i.pageYOffset) : t[e] = n;
      }, e, t, arguments.length);
    };
  }), x.each(["top", "left"], function (t, n) {
    x.cssHooks[n] = qt(v.pixelPosition, function (t, e) {
      if (e) return e = Ft(t, n), Rt.test(e) ? x(t).position()[n] + "px" : e;
    });
  }), x.each({
    Height: "height",
    Width: "width"
  }, function (r, a) {
    x.each({
      padding: "inner" + r,
      content: a,
      "": "outer" + r
    }, function (i, o) {
      x.fn[o] = function (t, e) {
        var n = arguments.length && (i || "boolean" != typeof t),
            s = i || (!0 === t || !0 === e ? "margin" : "border");
        return F(this, function (t, e, n) {
          var i;
          return b(t) ? 0 === o.indexOf("outer") ? t["inner" + r] : t.document.documentElement["client" + r] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + r], i["scroll" + r], t.body["offset" + r], i["offset" + r], i["client" + r])) : void 0 === n ? x.css(t, e, s) : x.style(t, e, n, s);
        }, a, n ? t : void 0, n);
      };
    });
  }), x.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (t, n) {
    x.fn[n] = function (t, e) {
      return 0 < arguments.length ? this.on(n, null, t, e) : this.trigger(n);
    };
  }), x.fn.extend({
    hover: function hover(t, e) {
      return this.mouseenter(t).mouseleave(e || t);
    }
  }), x.fn.extend({
    bind: function bind(t, e, n) {
      return this.on(t, null, e, n);
    },
    unbind: function unbind(t, e) {
      return this.off(t, null, e);
    },
    delegate: function delegate(t, e, n, i) {
      return this.on(e, t, n, i);
    },
    undelegate: function undelegate(t, e, n) {
      return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n);
    }
  }), x.proxy = function (t, e) {
    var n, i, s;
    if ("string" == typeof e && (n = t[e], e = t, t = n), y(t)) return i = a.call(arguments, 2), (s = function s() {
      return t.apply(e || this, i.concat(a.call(arguments)));
    }).guid = t.guid = t.guid || x.guid++, s;
  }, x.holdReady = function (t) {
    t ? x.readyWait++ : x.ready(!0);
  }, x.isArray = Array.isArray, x.parseJSON = JSON.parse, x.nodeName = E, x.isFunction = y, x.isWindow = b, x.camelCase = z, x.type = w, x.now = Date.now, x.isNumeric = function (t) {
    var e = x.type(t);
    return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t));
  },  true && !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_LOCAL_MODULE_0__ = ((function () {
    return x;
  }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)));
  var Qe = k.jQuery,
      Ze = k.$;
  return x.noConflict = function (t) {
    return k.$ === x && (k.$ = Ze), t && k.jQuery === x && (k.jQuery = Qe), x;
  }, t || (k.jQuery = k.$ = x), x;
}), function (t, e) {
   true ? e(exports, __WEBPACK_LOCAL_MODULE_0__) : undefined;
}(this, function (t, f) {
  "use strict";

  function i(t, e) {
    for (var n = 0; n < e.length; n++) {
      var i = e[n];
      i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
    }
  }

  function r(t, e, n) {
    return e && i(t.prototype, e), n && i(t, n), t;
  }

  function l(s) {
    for (var t = 1; t < arguments.length; t++) {
      var o = null != arguments[t] ? arguments[t] : {},
          e = Object.keys(o);
      "function" == typeof Object.getOwnPropertySymbols && (e = e.concat(Object.getOwnPropertySymbols(o).filter(function (t) {
        return Object.getOwnPropertyDescriptor(o, t).enumerable;
      }))), e.forEach(function (t) {
        var e, n, i;
        e = s, i = o[n = t], n in e ? Object.defineProperty(e, n, {
          value: i,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[n] = i;
      });
    }

    return s;
  }

  f = f && f.hasOwnProperty("default") ? f["default"] : f;
  var e = "transitionend";

  function n(t) {
    var e = this,
        n = !1;
    return f(this).one(m.TRANSITION_END, function () {
      n = !0;
    }), setTimeout(function () {
      n || m.triggerTransitionEnd(e);
    }, t), this;
  }

  var m = {
    TRANSITION_END: "bsTransitionEnd",
    getUID: function getUID(t) {
      for (; t += ~~(1e6 * Math.random()), document.getElementById(t);) {
        ;
      }

      return t;
    },
    getSelectorFromElement: function getSelectorFromElement(t) {
      var e = t.getAttribute("data-target");

      if (!e || "#" === e) {
        var n = t.getAttribute("href");
        e = n && "#" !== n ? n.trim() : "";
      }

      try {
        return document.querySelector(e) ? e : null;
      } catch (t) {
        return null;
      }
    },
    getTransitionDurationFromElement: function getTransitionDurationFromElement(t) {
      if (!t) return 0;
      var e = f(t).css("transition-duration"),
          n = f(t).css("transition-delay"),
          i = parseFloat(e),
          s = parseFloat(n);
      return i || s ? (e = e.split(",")[0], n = n.split(",")[0], 1e3 * (parseFloat(e) + parseFloat(n))) : 0;
    },
    reflow: function reflow(t) {
      return t.offsetHeight;
    },
    triggerTransitionEnd: function triggerTransitionEnd(t) {
      f(t).trigger(e);
    },
    supportsTransitionEnd: function supportsTransitionEnd() {
      return Boolean(e);
    },
    isElement: function isElement(t) {
      return (t[0] || t).nodeType;
    },
    typeCheckConfig: function typeCheckConfig(t, e, n) {
      for (var i in n) {
        if (Object.prototype.hasOwnProperty.call(n, i)) {
          var s = n[i],
              o = e[i],
              r = o && m.isElement(o) ? "element" : (a = o, {}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());
          if (!new RegExp(s).test(r)) throw new Error(t.toUpperCase() + ': Option "' + i + '" provided type "' + r + '" but expected type "' + s + '".');
        }
      }

      var a;
    },
    findShadowRoot: function findShadowRoot(t) {
      if (!document.documentElement.attachShadow) return null;
      if ("function" != typeof t.getRootNode) return t instanceof ShadowRoot ? t : t.parentNode ? m.findShadowRoot(t.parentNode) : null;
      var e = t.getRootNode();
      return e instanceof ShadowRoot ? e : null;
    }
  };
  f.fn.emulateTransitionEnd = n, f.event.special[m.TRANSITION_END] = {
    bindType: e,
    delegateType: e,
    handle: function handle(t) {
      if (f(t.target).is(this)) return t.handleObj.handler.apply(this, arguments);
    }
  };

  var s = "alert",
      o = "bs.alert",
      a = "." + o,
      c = f.fn[s],
      h = {
    CLOSE: "close" + a,
    CLOSED: "closed" + a,
    CLICK_DATA_API: "click" + a + ".data-api"
  },
      u = "alert",
      d = "fade",
      p = "show",
      g = function () {
    function i(t) {
      this._element = t;
    }

    var t = i.prototype;
    return t.close = function (t) {
      var e = this._element;
      t && (e = this._getRootElement(t)), this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e);
    }, t.dispose = function () {
      f.removeData(this._element, o), this._element = null;
    }, t._getRootElement = function (t) {
      var e = m.getSelectorFromElement(t),
          n = !1;
      return e && (n = document.querySelector(e)), n || (n = f(t).closest("." + u)[0]), n;
    }, t._triggerCloseEvent = function (t) {
      var e = f.Event(h.CLOSE);
      return f(t).trigger(e), e;
    }, t._removeElement = function (e) {
      var n = this;

      if (f(e).removeClass(p), f(e).hasClass(d)) {
        var t = m.getTransitionDurationFromElement(e);
        f(e).one(m.TRANSITION_END, function (t) {
          return n._destroyElement(e, t);
        }).emulateTransitionEnd(t);
      } else this._destroyElement(e);
    }, t._destroyElement = function (t) {
      f(t).detach().trigger(h.CLOSED).remove();
    }, i._jQueryInterface = function (n) {
      return this.each(function () {
        var t = f(this),
            e = t.data(o);
        e || (e = new i(this), t.data(o, e)), "close" === n && e[n](this);
      });
    }, i._handleDismiss = function (e) {
      return function (t) {
        t && t.preventDefault(), e.close(this);
      };
    }, r(i, null, [{
      key: "VERSION",
      get: function get() {
        return "4.3.1";
      }
    }]), i;
  }();

  f(document).on(h.CLICK_DATA_API, '[data-dismiss="alert"]', g._handleDismiss(new g())), f.fn[s] = g._jQueryInterface, f.fn[s].Constructor = g, f.fn[s].noConflict = function () {
    return f.fn[s] = c, g._jQueryInterface;
  };

  var v = "button",
      y = "bs.button",
      b = "." + y,
      _ = ".data-api",
      w = f.fn[v],
      D = "active",
      k = "btn",
      C = "focus",
      x = '[data-toggle^="button"]',
      S = '[data-toggle="buttons"]',
      T = 'input:not([type="hidden"])',
      E = ".active",
      M = ".btn",
      A = {
    CLICK_DATA_API: "click" + b + _,
    FOCUS_BLUR_DATA_API: "focus" + b + _ + " blur" + b + _
  },
      O = function () {
    function n(t) {
      this._element = t;
    }

    var t = n.prototype;
    return t.toggle = function () {
      var t = !0,
          e = !0,
          n = f(this._element).closest(S)[0];

      if (n) {
        var i = this._element.querySelector(T);

        if (i) {
          if ("radio" === i.type) if (i.checked && this._element.classList.contains(D)) t = !1;else {
            var s = n.querySelector(E);
            s && f(s).removeClass(D);
          }

          if (t) {
            if (i.hasAttribute("disabled") || n.hasAttribute("disabled") || i.classList.contains("disabled") || n.classList.contains("disabled")) return;
            i.checked = !this._element.classList.contains(D), f(i).trigger("change");
          }

          i.focus(), e = !1;
        }
      }

      e && this._element.setAttribute("aria-pressed", !this._element.classList.contains(D)), t && f(this._element).toggleClass(D);
    }, t.dispose = function () {
      f.removeData(this._element, y), this._element = null;
    }, n._jQueryInterface = function (e) {
      return this.each(function () {
        var t = f(this).data(y);
        t || (t = new n(this), f(this).data(y, t)), "toggle" === e && t[e]();
      });
    }, r(n, null, [{
      key: "VERSION",
      get: function get() {
        return "4.3.1";
      }
    }]), n;
  }();

  f(document).on(A.CLICK_DATA_API, x, function (t) {
    t.preventDefault();
    var e = t.target;
    f(e).hasClass(k) || (e = f(e).closest(M)), O._jQueryInterface.call(f(e), "toggle");
  }).on(A.FOCUS_BLUR_DATA_API, x, function (t) {
    var e = f(t.target).closest(M)[0];
    f(e).toggleClass(C, /^focus(in)?$/.test(t.type));
  }), f.fn[v] = O._jQueryInterface, f.fn[v].Constructor = O, f.fn[v].noConflict = function () {
    return f.fn[v] = w, O._jQueryInterface;
  };

  var I = "carousel",
      N = "bs.carousel",
      P = "." + N,
      L = ".data-api",
      j = f.fn[I],
      H = {
    interval: 5e3,
    keyboard: !0,
    slide: !1,
    pause: "hover",
    wrap: !0,
    touch: !0
  },
      Y = {
    interval: "(number|boolean)",
    keyboard: "boolean",
    slide: "(boolean|string)",
    pause: "(string|boolean)",
    wrap: "boolean",
    touch: "boolean"
  },
      $ = "next",
      R = "prev",
      W = "left",
      U = "right",
      F = {
    SLIDE: "slide" + P,
    SLID: "slid" + P,
    KEYDOWN: "keydown" + P,
    MOUSEENTER: "mouseenter" + P,
    MOUSELEAVE: "mouseleave" + P,
    TOUCHSTART: "touchstart" + P,
    TOUCHMOVE: "touchmove" + P,
    TOUCHEND: "touchend" + P,
    POINTERDOWN: "pointerdown" + P,
    POINTERUP: "pointerup" + P,
    DRAG_START: "dragstart" + P,
    LOAD_DATA_API: "load" + P + L,
    CLICK_DATA_API: "click" + P + L
  },
      q = "carousel",
      B = "active",
      V = "slide",
      z = "carousel-item-right",
      G = "carousel-item-left",
      K = "carousel-item-next",
      Q = "carousel-item-prev",
      Z = "pointer-event",
      X = ".active",
      J = ".active.carousel-item",
      tt = ".carousel-item",
      et = ".carousel-item img",
      nt = ".carousel-item-next, .carousel-item-prev",
      it = ".carousel-indicators",
      st = "[data-slide], [data-slide-to]",
      ot = '[data-ride="carousel"]',
      rt = {
    TOUCH: "touch",
    PEN: "pen"
  },
      at = function () {
    function o(t, e) {
      this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(e), this._element = t, this._indicatorsElement = this._element.querySelector(it), this._touchSupported = "ontouchstart" in document.documentElement || 0 < navigator.maxTouchPoints, this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent), this._addEventListeners();
    }

    var t = o.prototype;
    return t.next = function () {
      this._isSliding || this._slide($);
    }, t.nextWhenVisible = function () {
      !document.hidden && f(this._element).is(":visible") && "hidden" !== f(this._element).css("visibility") && this.next();
    }, t.prev = function () {
      this._isSliding || this._slide(R);
    }, t.pause = function (t) {
      t || (this._isPaused = !0), this._element.querySelector(nt) && (m.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null;
    }, t.cycle = function (t) {
      t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval));
    }, t.to = function (t) {
      var e = this;
      this._activeElement = this._element.querySelector(J);

      var n = this._getItemIndex(this._activeElement);

      if (!(t > this._items.length - 1 || t < 0)) if (this._isSliding) f(this._element).one(F.SLID, function () {
        return e.to(t);
      });else {
        if (n === t) return this.pause(), void this.cycle();
        var i = n < t ? $ : R;

        this._slide(i, this._items[t]);
      }
    }, t.dispose = function () {
      f(this._element).off(P), f.removeData(this._element, N), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null;
    }, t._getConfig = function (t) {
      return t = l({}, H, t), m.typeCheckConfig(I, t, Y), t;
    }, t._handleSwipe = function () {
      var t = Math.abs(this.touchDeltaX);

      if (!(t <= 40)) {
        var e = t / this.touchDeltaX;
        0 < e && this.prev(), e < 0 && this.next();
      }
    }, t._addEventListeners = function () {
      var e = this;
      this._config.keyboard && f(this._element).on(F.KEYDOWN, function (t) {
        return e._keydown(t);
      }), "hover" === this._config.pause && f(this._element).on(F.MOUSEENTER, function (t) {
        return e.pause(t);
      }).on(F.MOUSELEAVE, function (t) {
        return e.cycle(t);
      }), this._config.touch && this._addTouchEventListeners();
    }, t._addTouchEventListeners = function () {
      var n = this;

      if (this._touchSupported) {
        var e = function e(t) {
          n._pointerEvent && rt[t.originalEvent.pointerType.toUpperCase()] ? n.touchStartX = t.originalEvent.clientX : n._pointerEvent || (n.touchStartX = t.originalEvent.touches[0].clientX);
        },
            i = function i(t) {
          n._pointerEvent && rt[t.originalEvent.pointerType.toUpperCase()] && (n.touchDeltaX = t.originalEvent.clientX - n.touchStartX), n._handleSwipe(), "hover" === n._config.pause && (n.pause(), n.touchTimeout && clearTimeout(n.touchTimeout), n.touchTimeout = setTimeout(function (t) {
            return n.cycle(t);
          }, 500 + n._config.interval));
        };

        f(this._element.querySelectorAll(et)).on(F.DRAG_START, function (t) {
          return t.preventDefault();
        }), this._pointerEvent ? (f(this._element).on(F.POINTERDOWN, function (t) {
          return e(t);
        }), f(this._element).on(F.POINTERUP, function (t) {
          return i(t);
        }), this._element.classList.add(Z)) : (f(this._element).on(F.TOUCHSTART, function (t) {
          return e(t);
        }), f(this._element).on(F.TOUCHMOVE, function (t) {
          var e;
          (e = t).originalEvent.touches && 1 < e.originalEvent.touches.length ? n.touchDeltaX = 0 : n.touchDeltaX = e.originalEvent.touches[0].clientX - n.touchStartX;
        }), f(this._element).on(F.TOUCHEND, function (t) {
          return i(t);
        }));
      }
    }, t._keydown = function (t) {
      if (!/input|textarea/i.test(t.target.tagName)) switch (t.which) {
        case 37:
          t.preventDefault(), this.prev();
          break;

        case 39:
          t.preventDefault(), this.next();
      }
    }, t._getItemIndex = function (t) {
      return this._items = t && t.parentNode ? [].slice.call(t.parentNode.querySelectorAll(tt)) : [], this._items.indexOf(t);
    }, t._getItemByDirection = function (t, e) {
      var n = t === $,
          i = t === R,
          s = this._getItemIndex(e),
          o = this._items.length - 1;

      if ((i && 0 === s || n && s === o) && !this._config.wrap) return e;
      var r = (s + (t === R ? -1 : 1)) % this._items.length;
      return -1 === r ? this._items[this._items.length - 1] : this._items[r];
    }, t._triggerSlideEvent = function (t, e) {
      var n = this._getItemIndex(t),
          i = this._getItemIndex(this._element.querySelector(J)),
          s = f.Event(F.SLIDE, {
        relatedTarget: t,
        direction: e,
        from: i,
        to: n
      });

      return f(this._element).trigger(s), s;
    }, t._setActiveIndicatorElement = function (t) {
      if (this._indicatorsElement) {
        var e = [].slice.call(this._indicatorsElement.querySelectorAll(X));
        f(e).removeClass(B);

        var n = this._indicatorsElement.children[this._getItemIndex(t)];

        n && f(n).addClass(B);
      }
    }, t._slide = function (t, e) {
      var n,
          i,
          s,
          o = this,
          r = this._element.querySelector(J),
          a = this._getItemIndex(r),
          l = e || r && this._getItemByDirection(t, r),
          c = this._getItemIndex(l),
          h = Boolean(this._interval);

      if (s = t === $ ? (n = G, i = K, W) : (n = z, i = Q, U), l && f(l).hasClass(B)) this._isSliding = !1;else if (!this._triggerSlideEvent(l, s).isDefaultPrevented() && r && l) {
        this._isSliding = !0, h && this.pause(), this._setActiveIndicatorElement(l);
        var u = f.Event(F.SLID, {
          relatedTarget: l,
          direction: s,
          from: a,
          to: c
        });

        if (f(this._element).hasClass(V)) {
          f(l).addClass(i), m.reflow(l), f(r).addClass(n), f(l).addClass(n);
          var d = parseInt(l.getAttribute("data-interval"), 10);
          this._config.interval = d ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, d) : this._config.defaultInterval || this._config.interval;
          var p = m.getTransitionDurationFromElement(r);
          f(r).one(m.TRANSITION_END, function () {
            f(l).removeClass(n + " " + i).addClass(B), f(r).removeClass(B + " " + i + " " + n), o._isSliding = !1, setTimeout(function () {
              return f(o._element).trigger(u);
            }, 0);
          }).emulateTransitionEnd(p);
        } else f(r).removeClass(B), f(l).addClass(B), this._isSliding = !1, f(this._element).trigger(u);

        h && this.cycle();
      }
    }, o._jQueryInterface = function (i) {
      return this.each(function () {
        var t = f(this).data(N),
            e = l({}, H, f(this).data());
        "object" == typeof i && (e = l({}, e, i));
        var n = "string" == typeof i ? i : e.slide;
        if (t || (t = new o(this, e), f(this).data(N, t)), "number" == typeof i) t.to(i);else if ("string" == typeof n) {
          if (void 0 === t[n]) throw new TypeError('No method named "' + n + '"');
          t[n]();
        } else e.interval && e.ride && (t.pause(), t.cycle());
      });
    }, o._dataApiClickHandler = function (t) {
      var e = m.getSelectorFromElement(this);

      if (e) {
        var n = f(e)[0];

        if (n && f(n).hasClass(q)) {
          var i = l({}, f(n).data(), f(this).data()),
              s = this.getAttribute("data-slide-to");
          s && (i.interval = !1), o._jQueryInterface.call(f(n), i), s && f(n).data(N).to(s), t.preventDefault();
        }
      }
    }, r(o, null, [{
      key: "VERSION",
      get: function get() {
        return "4.3.1";
      }
    }, {
      key: "Default",
      get: function get() {
        return H;
      }
    }]), o;
  }();

  f(document).on(F.CLICK_DATA_API, st, at._dataApiClickHandler), f(window).on(F.LOAD_DATA_API, function () {
    for (var t = [].slice.call(document.querySelectorAll(ot)), e = 0, n = t.length; e < n; e++) {
      var i = f(t[e]);

      at._jQueryInterface.call(i, i.data());
    }
  }), f.fn[I] = at._jQueryInterface, f.fn[I].Constructor = at, f.fn[I].noConflict = function () {
    return f.fn[I] = j, at._jQueryInterface;
  };

  var lt = "collapse",
      ct = "bs.collapse",
      ht = "." + ct,
      ut = f.fn[lt],
      dt = {
    toggle: !0,
    parent: ""
  },
      pt = {
    toggle: "boolean",
    parent: "(string|element)"
  },
      ft = {
    SHOW: "show" + ht,
    SHOWN: "shown" + ht,
    HIDE: "hide" + ht,
    HIDDEN: "hidden" + ht,
    CLICK_DATA_API: "click" + ht + ".data-api"
  },
      mt = "show",
      gt = "collapse",
      vt = "collapsing",
      yt = "collapsed",
      bt = "width",
      _t = "height",
      wt = ".show, .collapsing",
      Dt = '[data-toggle="collapse"]',
      kt = function () {
    function a(e, t) {
      this._isTransitioning = !1, this._element = e, this._config = this._getConfig(t), this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));

      for (var n = [].slice.call(document.querySelectorAll(Dt)), i = 0, s = n.length; i < s; i++) {
        var o = n[i],
            r = m.getSelectorFromElement(o),
            a = [].slice.call(document.querySelectorAll(r)).filter(function (t) {
          return t === e;
        });
        null !== r && 0 < a.length && (this._selector = r, this._triggerArray.push(o));
      }

      this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle();
    }

    var t = a.prototype;
    return t.toggle = function () {
      f(this._element).hasClass(mt) ? this.hide() : this.show();
    }, t.show = function () {
      var t,
          e,
          n = this;

      if (!this._isTransitioning && !f(this._element).hasClass(mt) && (this._parent && 0 === (t = [].slice.call(this._parent.querySelectorAll(wt)).filter(function (t) {
        return "string" == typeof n._config.parent ? t.getAttribute("data-parent") === n._config.parent : t.classList.contains(gt);
      })).length && (t = null), !(t && (e = f(t).not(this._selector).data(ct)) && e._isTransitioning))) {
        var i = f.Event(ft.SHOW);

        if (f(this._element).trigger(i), !i.isDefaultPrevented()) {
          t && (a._jQueryInterface.call(f(t).not(this._selector), "hide"), e || f(t).data(ct, null));

          var s = this._getDimension();

          f(this._element).removeClass(gt).addClass(vt), this._element.style[s] = 0, this._triggerArray.length && f(this._triggerArray).removeClass(yt).attr("aria-expanded", !0), this.setTransitioning(!0);
          var o = "scroll" + (s[0].toUpperCase() + s.slice(1)),
              r = m.getTransitionDurationFromElement(this._element);
          f(this._element).one(m.TRANSITION_END, function () {
            f(n._element).removeClass(vt).addClass(gt).addClass(mt), n._element.style[s] = "", n.setTransitioning(!1), f(n._element).trigger(ft.SHOWN);
          }).emulateTransitionEnd(r), this._element.style[s] = this._element[o] + "px";
        }
      }
    }, t.hide = function () {
      var t = this;

      if (!this._isTransitioning && f(this._element).hasClass(mt)) {
        var e = f.Event(ft.HIDE);

        if (f(this._element).trigger(e), !e.isDefaultPrevented()) {
          var n = this._getDimension();

          this._element.style[n] = this._element.getBoundingClientRect()[n] + "px", m.reflow(this._element), f(this._element).addClass(vt).removeClass(gt).removeClass(mt);
          var i = this._triggerArray.length;
          if (0 < i) for (var s = 0; s < i; s++) {
            var o = this._triggerArray[s],
                r = m.getSelectorFromElement(o);
            if (null !== r) f([].slice.call(document.querySelectorAll(r))).hasClass(mt) || f(o).addClass(yt).attr("aria-expanded", !1);
          }
          this.setTransitioning(!0);
          this._element.style[n] = "";
          var a = m.getTransitionDurationFromElement(this._element);
          f(this._element).one(m.TRANSITION_END, function () {
            t.setTransitioning(!1), f(t._element).removeClass(vt).addClass(gt).trigger(ft.HIDDEN);
          }).emulateTransitionEnd(a);
        }
      }
    }, t.setTransitioning = function (t) {
      this._isTransitioning = t;
    }, t.dispose = function () {
      f.removeData(this._element, ct), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null;
    }, t._getConfig = function (t) {
      return (t = l({}, dt, t)).toggle = Boolean(t.toggle), m.typeCheckConfig(lt, t, pt), t;
    }, t._getDimension = function () {
      return f(this._element).hasClass(bt) ? bt : _t;
    }, t._getParent = function () {
      var t,
          n = this;
      m.isElement(this._config.parent) ? (t = this._config.parent, void 0 !== this._config.parent.jquery && (t = this._config.parent[0])) : t = document.querySelector(this._config.parent);
      var e = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
          i = [].slice.call(t.querySelectorAll(e));
      return f(i).each(function (t, e) {
        n._addAriaAndCollapsedClass(a._getTargetFromElement(e), [e]);
      }), t;
    }, t._addAriaAndCollapsedClass = function (t, e) {
      var n = f(t).hasClass(mt);
      e.length && f(e).toggleClass(yt, !n).attr("aria-expanded", n);
    }, a._getTargetFromElement = function (t) {
      var e = m.getSelectorFromElement(t);
      return e ? document.querySelector(e) : null;
    }, a._jQueryInterface = function (i) {
      return this.each(function () {
        var t = f(this),
            e = t.data(ct),
            n = l({}, dt, t.data(), "object" == typeof i && i ? i : {});

        if (!e && n.toggle && /show|hide/.test(i) && (n.toggle = !1), e || (e = new a(this, n), t.data(ct, e)), "string" == typeof i) {
          if (void 0 === e[i]) throw new TypeError('No method named "' + i + '"');
          e[i]();
        }
      });
    }, r(a, null, [{
      key: "VERSION",
      get: function get() {
        return "4.3.1";
      }
    }, {
      key: "Default",
      get: function get() {
        return dt;
      }
    }]), a;
  }();

  f(document).on(ft.CLICK_DATA_API, Dt, function (t) {
    "A" === t.currentTarget.tagName && t.preventDefault();
    var n = f(this),
        e = m.getSelectorFromElement(this),
        i = [].slice.call(document.querySelectorAll(e));
    f(i).each(function () {
      var t = f(this),
          e = t.data(ct) ? "toggle" : n.data();

      kt._jQueryInterface.call(t, e);
    });
  }), f.fn[lt] = kt._jQueryInterface, f.fn[lt].Constructor = kt, f.fn[lt].noConflict = function () {
    return f.fn[lt] = ut, kt._jQueryInterface;
  };

  for (var Ct = "undefined" != typeof window && "undefined" != typeof document, xt = ["Edge", "Trident", "Firefox"], St = 0, Tt = 0; Tt < xt.length; Tt += 1) {
    if (Ct && 0 <= navigator.userAgent.indexOf(xt[Tt])) {
      St = 1;
      break;
    }
  }

  var Et = Ct && window.Promise ? function (t) {
    var e = !1;
    return function () {
      e || (e = !0, window.Promise.resolve().then(function () {
        e = !1, t();
      }));
    };
  } : function (t) {
    var e = !1;
    return function () {
      e || (e = !0, setTimeout(function () {
        e = !1, t();
      }, St));
    };
  };

  function Mt(t) {
    return t && "[object Function]" === {}.toString.call(t);
  }

  function At(t, e) {
    if (1 !== t.nodeType) return [];
    var n = t.ownerDocument.defaultView.getComputedStyle(t, null);
    return e ? n[e] : n;
  }

  function Ot(t) {
    return "HTML" === t.nodeName ? t : t.parentNode || t.host;
  }

  function It(t) {
    if (!t) return document.body;

    switch (t.nodeName) {
      case "HTML":
      case "BODY":
        return t.ownerDocument.body;

      case "#document":
        return t.body;
    }

    var e = At(t),
        n = e.overflow,
        i = e.overflowX,
        s = e.overflowY;
    return /(auto|scroll|overlay)/.test(n + s + i) ? t : It(Ot(t));
  }

  var Nt = Ct && !(!window.MSInputMethodContext || !document.documentMode),
      Pt = Ct && /MSIE 10/.test(navigator.userAgent);

  function Lt(t) {
    return 11 === t ? Nt : 10 === t ? Pt : Nt || Pt;
  }

  function jt(t) {
    if (!t) return document.documentElement;

    for (var e = Lt(10) ? document.body : null, n = t.offsetParent || null; n === e && t.nextElementSibling;) {
      n = (t = t.nextElementSibling).offsetParent;
    }

    var i = n && n.nodeName;
    return i && "BODY" !== i && "HTML" !== i ? -1 !== ["TH", "TD", "TABLE"].indexOf(n.nodeName) && "static" === At(n, "position") ? jt(n) : n : t ? t.ownerDocument.documentElement : document.documentElement;
  }

  function Ht(t) {
    return null !== t.parentNode ? Ht(t.parentNode) : t;
  }

  function Yt(t, e) {
    if (!(t && t.nodeType && e && e.nodeType)) return document.documentElement;
    var n = t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING,
        i = n ? t : e,
        s = n ? e : t,
        o = document.createRange();
    o.setStart(i, 0), o.setEnd(s, 0);
    var r,
        a,
        l = o.commonAncestorContainer;
    if (t !== l && e !== l || i.contains(s)) return "BODY" === (a = (r = l).nodeName) || "HTML" !== a && jt(r.firstElementChild) !== r ? jt(l) : l;
    var c = Ht(t);
    return c.host ? Yt(c.host, e) : Yt(t, Ht(e).host);
  }

  function $t(t) {
    var e = "top" === (1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "top") ? "scrollTop" : "scrollLeft",
        n = t.nodeName;
    if ("BODY" !== n && "HTML" !== n) return t[e];
    var i = t.ownerDocument.documentElement;
    return (t.ownerDocument.scrollingElement || i)[e];
  }

  function Rt(t, e) {
    var n = "x" === e ? "Left" : "Top",
        i = "Left" === n ? "Right" : "Bottom";
    return parseFloat(t["border" + n + "Width"], 10) + parseFloat(t["border" + i + "Width"], 10);
  }

  function Wt(t, e, n, i) {
    return Math.max(e["offset" + t], e["scroll" + t], n["client" + t], n["offset" + t], n["scroll" + t], Lt(10) ? parseInt(n["offset" + t]) + parseInt(i["margin" + ("Height" === t ? "Top" : "Left")]) + parseInt(i["margin" + ("Height" === t ? "Bottom" : "Right")]) : 0);
  }

  function Ut(t) {
    var e = t.body,
        n = t.documentElement,
        i = Lt(10) && getComputedStyle(n);
    return {
      height: Wt("Height", e, n, i),
      width: Wt("Width", e, n, i)
    };
  }

  var Ft = function () {
    function i(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
      }
    }

    return function (t, e, n) {
      return e && i(t.prototype, e), n && i(t, n), t;
    };
  }(),
      qt = function qt(t, e, n) {
    return e in t ? Object.defineProperty(t, e, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[e] = n, t;
  },
      Bt = Object.assign || function (t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];

      for (var i in n) {
        Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
      }
    }

    return t;
  };

  function Vt(t) {
    return Bt({}, t, {
      right: t.left + t.width,
      bottom: t.top + t.height
    });
  }

  function zt(t) {
    var e = {};

    try {
      if (Lt(10)) {
        e = t.getBoundingClientRect();
        var n = $t(t, "top"),
            i = $t(t, "left");
        e.top += n, e.left += i, e.bottom += n, e.right += i;
      } else e = t.getBoundingClientRect();
    } catch (t) {}

    var s = {
      left: e.left,
      top: e.top,
      width: e.right - e.left,
      height: e.bottom - e.top
    },
        o = "HTML" === t.nodeName ? Ut(t.ownerDocument) : {},
        r = o.width || t.clientWidth || s.right - s.left,
        a = o.height || t.clientHeight || s.bottom - s.top,
        l = t.offsetWidth - r,
        c = t.offsetHeight - a;

    if (l || c) {
      var h = At(t);
      l -= Rt(h, "x"), c -= Rt(h, "y"), s.width -= l, s.height -= c;
    }

    return Vt(s);
  }

  function Gt(t, e) {
    var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
        i = Lt(10),
        s = "HTML" === e.nodeName,
        o = zt(t),
        r = zt(e),
        a = It(t),
        l = At(e),
        c = parseFloat(l.borderTopWidth, 10),
        h = parseFloat(l.borderLeftWidth, 10);
    n && s && (r.top = Math.max(r.top, 0), r.left = Math.max(r.left, 0));
    var u = Vt({
      top: o.top - r.top - c,
      left: o.left - r.left - h,
      width: o.width,
      height: o.height
    });

    if (u.marginTop = 0, u.marginLeft = 0, !i && s) {
      var d = parseFloat(l.marginTop, 10),
          p = parseFloat(l.marginLeft, 10);
      u.top -= c - d, u.bottom -= c - d, u.left -= h - p, u.right -= h - p, u.marginTop = d, u.marginLeft = p;
    }

    return (i && !n ? e.contains(a) : e === a && "BODY" !== a.nodeName) && (u = function (t, e) {
      var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
          i = $t(e, "top"),
          s = $t(e, "left"),
          o = n ? -1 : 1;
      return t.top += i * o, t.bottom += i * o, t.left += s * o, t.right += s * o, t;
    }(u, e)), u;
  }

  function Kt(t) {
    if (!t || !t.parentElement || Lt()) return document.documentElement;

    for (var e = t.parentElement; e && "none" === At(e, "transform");) {
      e = e.parentElement;
    }

    return e || document.documentElement;
  }

  function Qt(t, e, n, i) {
    var s = 4 < arguments.length && void 0 !== arguments[4] && arguments[4],
        o = {
      top: 0,
      left: 0
    },
        r = s ? Kt(t) : Yt(t, e);
    if ("viewport" === i) o = function (t) {
      var e = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
          n = t.ownerDocument.documentElement,
          i = Gt(t, n),
          s = Math.max(n.clientWidth, window.innerWidth || 0),
          o = Math.max(n.clientHeight, window.innerHeight || 0),
          r = e ? 0 : $t(n),
          a = e ? 0 : $t(n, "left");
      return Vt({
        top: r - i.top + i.marginTop,
        left: a - i.left + i.marginLeft,
        width: s,
        height: o
      });
    }(r, s);else {
      var a = void 0;
      "scrollParent" === i ? "BODY" === (a = It(Ot(e))).nodeName && (a = t.ownerDocument.documentElement) : a = "window" === i ? t.ownerDocument.documentElement : i;
      var l = Gt(a, r, s);
      if ("HTML" !== a.nodeName || function t(e) {
        var n = e.nodeName;
        if ("BODY" === n || "HTML" === n) return !1;
        if ("fixed" === At(e, "position")) return !0;
        var i = Ot(e);
        return !!i && t(i);
      }(r)) o = l;else {
        var c = Ut(t.ownerDocument),
            h = c.height,
            u = c.width;
        o.top += l.top - l.marginTop, o.bottom = h + l.top, o.left += l.left - l.marginLeft, o.right = u + l.left;
      }
    }
    var d = "number" == typeof (n = n || 0);
    return o.left += d ? n : n.left || 0, o.top += d ? n : n.top || 0, o.right -= d ? n : n.right || 0, o.bottom -= d ? n : n.bottom || 0, o;
  }

  function Zt(t, e, i, n, s) {
    var o = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
    if (-1 === t.indexOf("auto")) return t;
    var r = Qt(i, n, o, s),
        a = {
      top: {
        width: r.width,
        height: e.top - r.top
      },
      right: {
        width: r.right - e.right,
        height: r.height
      },
      bottom: {
        width: r.width,
        height: r.bottom - e.bottom
      },
      left: {
        width: e.left - r.left,
        height: r.height
      }
    },
        l = Object.keys(a).map(function (t) {
      return Bt({
        key: t
      }, a[t], {
        area: (e = a[t], e.width * e.height)
      });
      var e;
    }).sort(function (t, e) {
      return e.area - t.area;
    }),
        c = l.filter(function (t) {
      var e = t.width,
          n = t.height;
      return e >= i.clientWidth && n >= i.clientHeight;
    }),
        h = 0 < c.length ? c[0].key : l[0].key,
        u = t.split("-")[1];
    return h + (u ? "-" + u : "");
  }

  function Xt(t, e, n) {
    var i = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
    return Gt(n, i ? Kt(e) : Yt(e, n), i);
  }

  function Jt(t) {
    var e = t.ownerDocument.defaultView.getComputedStyle(t),
        n = parseFloat(e.marginTop || 0) + parseFloat(e.marginBottom || 0),
        i = parseFloat(e.marginLeft || 0) + parseFloat(e.marginRight || 0);
    return {
      width: t.offsetWidth + i,
      height: t.offsetHeight + n
    };
  }

  function te(t) {
    var e = {
      left: "right",
      right: "left",
      bottom: "top",
      top: "bottom"
    };
    return t.replace(/left|right|bottom|top/g, function (t) {
      return e[t];
    });
  }

  function ee(t, e, n) {
    n = n.split("-")[0];
    var i = Jt(t),
        s = {
      width: i.width,
      height: i.height
    },
        o = -1 !== ["right", "left"].indexOf(n),
        r = o ? "top" : "left",
        a = o ? "left" : "top",
        l = o ? "height" : "width",
        c = o ? "width" : "height";
    return s[r] = e[r] + e[l] / 2 - i[l] / 2, s[a] = n === a ? e[a] - i[c] : e[te(a)], s;
  }

  function ne(t, e) {
    return Array.prototype.find ? t.find(e) : t.filter(e)[0];
  }

  function ie(t, n, e) {
    return (void 0 === e ? t : t.slice(0, function (t, e, n) {
      if (Array.prototype.findIndex) return t.findIndex(function (t) {
        return t[e] === n;
      });
      var i = ne(t, function (t) {
        return t[e] === n;
      });
      return t.indexOf(i);
    }(t, "name", e))).forEach(function (t) {
      t["function"] && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
      var e = t["function"] || t.fn;
      t.enabled && Mt(e) && (n.offsets.popper = Vt(n.offsets.popper), n.offsets.reference = Vt(n.offsets.reference), n = e(n, t));
    }), n;
  }

  function se(t, n) {
    return t.some(function (t) {
      var e = t.name;
      return t.enabled && e === n;
    });
  }

  function oe(t) {
    for (var e = [!1, "ms", "Webkit", "Moz", "O"], n = t.charAt(0).toUpperCase() + t.slice(1), i = 0; i < e.length; i++) {
      var s = e[i],
          o = s ? "" + s + n : t;
      if (void 0 !== document.body.style[o]) return o;
    }

    return null;
  }

  function re(t) {
    var e = t.ownerDocument;
    return e ? e.defaultView : window;
  }

  function ae(t, e, n, i) {
    n.updateBound = i, re(t).addEventListener("resize", n.updateBound, {
      passive: !0
    });
    var s = It(t);
    return function t(e, n, i, s) {
      var o = "BODY" === e.nodeName,
          r = o ? e.ownerDocument.defaultView : e;
      r.addEventListener(n, i, {
        passive: !0
      }), o || t(It(r.parentNode), n, i, s), s.push(r);
    }(s, "scroll", n.updateBound, n.scrollParents), n.scrollElement = s, n.eventsEnabled = !0, n;
  }

  function le() {
    var t, e;
    this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = (t = this.reference, e = this.state, re(t).removeEventListener("resize", e.updateBound), e.scrollParents.forEach(function (t) {
      t.removeEventListener("scroll", e.updateBound);
    }), e.updateBound = null, e.scrollParents = [], e.scrollElement = null, e.eventsEnabled = !1, e));
  }

  function ce(t) {
    return "" !== t && !isNaN(parseFloat(t)) && isFinite(t);
  }

  function he(n, i) {
    Object.keys(i).forEach(function (t) {
      var e = "";
      -1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(t) && ce(i[t]) && (e = "px"), n.style[t] = i[t] + e;
    });
  }

  var ue = Ct && /Firefox/i.test(navigator.userAgent);

  function de(t, e, n) {
    var i = ne(t, function (t) {
      return t.name === e;
    }),
        s = !!i && t.some(function (t) {
      return t.name === n && t.enabled && t.order < i.order;
    });

    if (!s) {
      var o = "`" + e + "`",
          r = "`" + n + "`";
      console.warn(r + " modifier is required by " + o + " modifier in order to work, be sure to include it before " + o + "!");
    }

    return s;
  }

  var pe = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
      fe = pe.slice(3);

  function me(t) {
    var e = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
        n = fe.indexOf(t),
        i = fe.slice(n + 1).concat(fe.slice(0, n));
    return e ? i.reverse() : i;
  }

  var ge = "flip",
      ve = "clockwise",
      ye = "counterclockwise";

  function be(t, s, o, e) {
    var r = [0, 0],
        a = -1 !== ["right", "left"].indexOf(e),
        n = t.split(/(\+|\-)/).map(function (t) {
      return t.trim();
    }),
        i = n.indexOf(ne(n, function (t) {
      return -1 !== t.search(/,|\s/);
    }));
    n[i] && -1 === n[i].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
    var l = /\s*,\s*|\s+/,
        c = -1 !== i ? [n.slice(0, i).concat([n[i].split(l)[0]]), [n[i].split(l)[1]].concat(n.slice(i + 1))] : [n];
    return (c = c.map(function (t, e) {
      var n = (1 === e ? !a : a) ? "height" : "width",
          i = !1;
      return t.reduce(function (t, e) {
        return "" === t[t.length - 1] && -1 !== ["+", "-"].indexOf(e) ? (t[t.length - 1] = e, i = !0, t) : i ? (t[t.length - 1] += e, i = !1, t) : t.concat(e);
      }, []).map(function (t) {
        return function (t, e, n, i) {
          var s = t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
              o = +s[1],
              r = s[2];
          if (!o) return t;
          if (0 !== r.indexOf("%")) return "vh" !== r && "vw" !== r ? o : ("vh" === r ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * o;
          var a = void 0;

          switch (r) {
            case "%p":
              a = n;
              break;

            case "%":
            case "%r":
            default:
              a = i;
          }

          return Vt(a)[e] / 100 * o;
        }(t, n, s, o);
      });
    })).forEach(function (n, i) {
      n.forEach(function (t, e) {
        ce(t) && (r[i] += t * ("-" === n[e - 1] ? -1 : 1));
      });
    }), r;
  }

  var _e = {
    placement: "bottom",
    positionFixed: !1,
    eventsEnabled: !0,
    removeOnDestroy: !1,
    onCreate: function onCreate() {},
    onUpdate: function onUpdate() {},
    modifiers: {
      shift: {
        order: 100,
        enabled: !0,
        fn: function fn(t) {
          var e = t.placement,
              n = e.split("-")[0],
              i = e.split("-")[1];

          if (i) {
            var s = t.offsets,
                o = s.reference,
                r = s.popper,
                a = -1 !== ["bottom", "top"].indexOf(n),
                l = a ? "left" : "top",
                c = a ? "width" : "height",
                h = {
              start: qt({}, l, o[l]),
              end: qt({}, l, o[l] + o[c] - r[c])
            };
            t.offsets.popper = Bt({}, r, h[i]);
          }

          return t;
        }
      },
      offset: {
        order: 200,
        enabled: !0,
        fn: function fn(t, e) {
          var n = e.offset,
              i = t.placement,
              s = t.offsets,
              o = s.popper,
              r = s.reference,
              a = i.split("-")[0],
              l = void 0;
          return l = ce(+n) ? [+n, 0] : be(n, o, r, a), "left" === a ? (o.top += l[0], o.left -= l[1]) : "right" === a ? (o.top += l[0], o.left += l[1]) : "top" === a ? (o.left += l[0], o.top -= l[1]) : "bottom" === a && (o.left += l[0], o.top += l[1]), t.popper = o, t;
        },
        offset: 0
      },
      preventOverflow: {
        order: 300,
        enabled: !0,
        fn: function fn(t, i) {
          var e = i.boundariesElement || jt(t.instance.popper);
          t.instance.reference === e && (e = jt(e));
          var n = oe("transform"),
              s = t.instance.popper.style,
              o = s.top,
              r = s.left,
              a = s[n];
          s.top = "", s.left = "", s[n] = "";
          var l = Qt(t.instance.popper, t.instance.reference, i.padding, e, t.positionFixed);
          s.top = o, s.left = r, s[n] = a, i.boundaries = l;
          var c = i.priority,
              h = t.offsets.popper,
              u = {
            primary: function primary(t) {
              var e = h[t];
              return h[t] < l[t] && !i.escapeWithReference && (e = Math.max(h[t], l[t])), qt({}, t, e);
            },
            secondary: function secondary(t) {
              var e = "right" === t ? "left" : "top",
                  n = h[e];
              return h[t] > l[t] && !i.escapeWithReference && (n = Math.min(h[e], l[t] - ("right" === t ? h.width : h.height))), qt({}, e, n);
            }
          };
          return c.forEach(function (t) {
            var e = -1 !== ["left", "top"].indexOf(t) ? "primary" : "secondary";
            h = Bt({}, h, u[e](t));
          }), t.offsets.popper = h, t;
        },
        priority: ["left", "right", "top", "bottom"],
        padding: 5,
        boundariesElement: "scrollParent"
      },
      keepTogether: {
        order: 400,
        enabled: !0,
        fn: function fn(t) {
          var e = t.offsets,
              n = e.popper,
              i = e.reference,
              s = t.placement.split("-")[0],
              o = Math.floor,
              r = -1 !== ["top", "bottom"].indexOf(s),
              a = r ? "right" : "bottom",
              l = r ? "left" : "top",
              c = r ? "width" : "height";
          return n[a] < o(i[l]) && (t.offsets.popper[l] = o(i[l]) - n[c]), n[l] > o(i[a]) && (t.offsets.popper[l] = o(i[a])), t;
        }
      },
      arrow: {
        order: 500,
        enabled: !0,
        fn: function fn(t, e) {
          var n;
          if (!de(t.instance.modifiers, "arrow", "keepTogether")) return t;
          var i = e.element;

          if ("string" == typeof i) {
            if (!(i = t.instance.popper.querySelector(i))) return t;
          } else if (!t.instance.popper.contains(i)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), t;

          var s = t.placement.split("-")[0],
              o = t.offsets,
              r = o.popper,
              a = o.reference,
              l = -1 !== ["left", "right"].indexOf(s),
              c = l ? "height" : "width",
              h = l ? "Top" : "Left",
              u = h.toLowerCase(),
              d = l ? "left" : "top",
              p = l ? "bottom" : "right",
              f = Jt(i)[c];
          a[p] - f < r[u] && (t.offsets.popper[u] -= r[u] - (a[p] - f)), a[u] + f > r[p] && (t.offsets.popper[u] += a[u] + f - r[p]), t.offsets.popper = Vt(t.offsets.popper);
          var m = a[u] + a[c] / 2 - f / 2,
              g = At(t.instance.popper),
              v = parseFloat(g["margin" + h], 10),
              y = parseFloat(g["border" + h + "Width"], 10),
              b = m - t.offsets.popper[u] - v - y;
          return b = Math.max(Math.min(r[c] - f, b), 0), t.arrowElement = i, t.offsets.arrow = (qt(n = {}, u, Math.round(b)), qt(n, d, ""), n), t;
        },
        element: "[x-arrow]"
      },
      flip: {
        order: 600,
        enabled: !0,
        fn: function fn(f, m) {
          if (se(f.instance.modifiers, "inner")) return f;
          if (f.flipped && f.placement === f.originalPlacement) return f;
          var g = Qt(f.instance.popper, f.instance.reference, m.padding, m.boundariesElement, f.positionFixed),
              v = f.placement.split("-")[0],
              y = te(v),
              b = f.placement.split("-")[1] || "",
              _ = [];

          switch (m.behavior) {
            case ge:
              _ = [v, y];
              break;

            case ve:
              _ = me(v);
              break;

            case ye:
              _ = me(v, !0);
              break;

            default:
              _ = m.behavior;
          }

          return _.forEach(function (t, e) {
            if (v !== t || _.length === e + 1) return f;
            v = f.placement.split("-")[0], y = te(v);
            var n,
                i = f.offsets.popper,
                s = f.offsets.reference,
                o = Math.floor,
                r = "left" === v && o(i.right) > o(s.left) || "right" === v && o(i.left) < o(s.right) || "top" === v && o(i.bottom) > o(s.top) || "bottom" === v && o(i.top) < o(s.bottom),
                a = o(i.left) < o(g.left),
                l = o(i.right) > o(g.right),
                c = o(i.top) < o(g.top),
                h = o(i.bottom) > o(g.bottom),
                u = "left" === v && a || "right" === v && l || "top" === v && c || "bottom" === v && h,
                d = -1 !== ["top", "bottom"].indexOf(v),
                p = !!m.flipVariations && (d && "start" === b && a || d && "end" === b && l || !d && "start" === b && c || !d && "end" === b && h);
            (r || u || p) && (f.flipped = !0, (r || u) && (v = _[e + 1]), p && (b = "end" === (n = b) ? "start" : "start" === n ? "end" : n), f.placement = v + (b ? "-" + b : ""), f.offsets.popper = Bt({}, f.offsets.popper, ee(f.instance.popper, f.offsets.reference, f.placement)), f = ie(f.instance.modifiers, f, "flip"));
          }), f;
        },
        behavior: "flip",
        padding: 5,
        boundariesElement: "viewport"
      },
      inner: {
        order: 700,
        enabled: !1,
        fn: function fn(t) {
          var e = t.placement,
              n = e.split("-")[0],
              i = t.offsets,
              s = i.popper,
              o = i.reference,
              r = -1 !== ["left", "right"].indexOf(n),
              a = -1 === ["top", "left"].indexOf(n);
          return s[r ? "left" : "top"] = o[n] - (a ? s[r ? "width" : "height"] : 0), t.placement = te(e), t.offsets.popper = Vt(s), t;
        }
      },
      hide: {
        order: 800,
        enabled: !0,
        fn: function fn(t) {
          if (!de(t.instance.modifiers, "hide", "preventOverflow")) return t;
          var e = t.offsets.reference,
              n = ne(t.instance.modifiers, function (t) {
            return "preventOverflow" === t.name;
          }).boundaries;

          if (e.bottom < n.top || e.left > n.right || e.top > n.bottom || e.right < n.left) {
            if (!0 === t.hide) return t;
            t.hide = !0, t.attributes["x-out-of-boundaries"] = "";
          } else {
            if (!1 === t.hide) return t;
            t.hide = !1, t.attributes["x-out-of-boundaries"] = !1;
          }

          return t;
        }
      },
      computeStyle: {
        order: 850,
        enabled: !0,
        fn: function fn(t, e) {
          var n = e.x,
              i = e.y,
              s = t.offsets.popper,
              o = ne(t.instance.modifiers, function (t) {
            return "applyStyle" === t.name;
          }).gpuAcceleration;
          void 0 !== o && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");

          var r,
              a,
              l,
              c,
              h,
              u,
              d,
              p,
              f,
              m,
              g,
              v,
              y,
              b,
              _ = void 0 !== o ? o : e.gpuAcceleration,
              w = jt(t.instance.popper),
              D = zt(w),
              k = {
            position: s.position
          },
              C = (r = t, a = window.devicePixelRatio < 2 || !ue, l = r.offsets, c = l.popper, h = l.reference, u = Math.round, d = Math.floor, p = function p(t) {
            return t;
          }, f = u(h.width), m = u(c.width), g = -1 !== ["left", "right"].indexOf(r.placement), v = -1 !== r.placement.indexOf("-"), b = a ? u : p, {
            left: (y = a ? g || v || f % 2 == m % 2 ? u : d : p)(f % 2 == 1 && m % 2 == 1 && !v && a ? c.left - 1 : c.left),
            top: b(c.top),
            bottom: b(c.bottom),
            right: y(c.right)
          }),
              x = "bottom" === n ? "top" : "bottom",
              S = "right" === i ? "left" : "right",
              T = oe("transform"),
              E = void 0,
              M = void 0;

          if (M = "bottom" === x ? "HTML" === w.nodeName ? -w.clientHeight + C.bottom : -D.height + C.bottom : C.top, E = "right" === S ? "HTML" === w.nodeName ? -w.clientWidth + C.right : -D.width + C.right : C.left, _ && T) k[T] = "translate3d(" + E + "px, " + M + "px, 0)", k[x] = 0, k[S] = 0, k.willChange = "transform";else {
            var A = "bottom" === x ? -1 : 1,
                O = "right" === S ? -1 : 1;
            k[x] = M * A, k[S] = E * O, k.willChange = x + ", " + S;
          }
          var I = {
            "x-placement": t.placement
          };
          return t.attributes = Bt({}, I, t.attributes), t.styles = Bt({}, k, t.styles), t.arrowStyles = Bt({}, t.offsets.arrow, t.arrowStyles), t;
        },
        gpuAcceleration: !0,
        x: "bottom",
        y: "right"
      },
      applyStyle: {
        order: 900,
        enabled: !0,
        fn: function fn(t) {
          var e, n;
          return he(t.instance.popper, t.styles), e = t.instance.popper, n = t.attributes, Object.keys(n).forEach(function (t) {
            !1 !== n[t] ? e.setAttribute(t, n[t]) : e.removeAttribute(t);
          }), t.arrowElement && Object.keys(t.arrowStyles).length && he(t.arrowElement, t.arrowStyles), t;
        },
        onLoad: function onLoad(t, e, n, i, s) {
          var o = Xt(s, e, t, n.positionFixed),
              r = Zt(n.placement, o, e, t, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
          return e.setAttribute("x-placement", r), he(e, {
            position: n.positionFixed ? "fixed" : "absolute"
          }), n;
        },
        gpuAcceleration: void 0
      }
    }
  },
      we = function () {
    function o(t, e) {
      var n = this,
          i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
      !function (t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
      }(this, o), this.scheduleUpdate = function () {
        return requestAnimationFrame(n.update);
      }, this.update = Et(this.update.bind(this)), this.options = Bt({}, o.Defaults, i), this.state = {
        isDestroyed: !1,
        isCreated: !1,
        scrollParents: []
      }, this.reference = t && t.jquery ? t[0] : t, this.popper = e && e.jquery ? e[0] : e, this.options.modifiers = {}, Object.keys(Bt({}, o.Defaults.modifiers, i.modifiers)).forEach(function (t) {
        n.options.modifiers[t] = Bt({}, o.Defaults.modifiers[t] || {}, i.modifiers ? i.modifiers[t] : {});
      }), this.modifiers = Object.keys(this.options.modifiers).map(function (t) {
        return Bt({
          name: t
        }, n.options.modifiers[t]);
      }).sort(function (t, e) {
        return t.order - e.order;
      }), this.modifiers.forEach(function (t) {
        t.enabled && Mt(t.onLoad) && t.onLoad(n.reference, n.popper, n.options, t, n.state);
      }), this.update();
      var s = this.options.eventsEnabled;
      s && this.enableEventListeners(), this.state.eventsEnabled = s;
    }

    return Ft(o, [{
      key: "update",
      value: function value() {
        return function () {
          if (!this.state.isDestroyed) {
            var t = {
              instance: this,
              styles: {},
              arrowStyles: {},
              attributes: {},
              flipped: !1,
              offsets: {}
            };
            t.offsets.reference = Xt(this.state, this.popper, this.reference, this.options.positionFixed), t.placement = Zt(this.options.placement, t.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), t.originalPlacement = t.placement, t.positionFixed = this.options.positionFixed, t.offsets.popper = ee(this.popper, t.offsets.reference, t.placement), t.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", t = ie(this.modifiers, t), this.state.isCreated ? this.options.onUpdate(t) : (this.state.isCreated = !0, this.options.onCreate(t));
          }
        }.call(this);
      }
    }, {
      key: "destroy",
      value: function value() {
        return function () {
          return this.state.isDestroyed = !0, se(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[oe("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this;
        }.call(this);
      }
    }, {
      key: "enableEventListeners",
      value: function value() {
        return function () {
          this.state.eventsEnabled || (this.state = ae(this.reference, this.options, this.state, this.scheduleUpdate));
        }.call(this);
      }
    }, {
      key: "disableEventListeners",
      value: function value() {
        return le.call(this);
      }
    }]), o;
  }();

  we.Utils = ("undefined" != typeof window ? window : global).PopperUtils, we.placements = pe, we.Defaults = _e;

  var De = "dropdown",
      ke = "bs.dropdown",
      Ce = "." + ke,
      xe = ".data-api",
      Se = f.fn[De],
      Te = new RegExp("38|40|27"),
      Ee = {
    HIDE: "hide" + Ce,
    HIDDEN: "hidden" + Ce,
    SHOW: "show" + Ce,
    SHOWN: "shown" + Ce,
    CLICK: "click" + Ce,
    CLICK_DATA_API: "click" + Ce + xe,
    KEYDOWN_DATA_API: "keydown" + Ce + xe,
    KEYUP_DATA_API: "keyup" + Ce + xe
  },
      Me = "disabled",
      Ae = "show",
      Oe = "dropup",
      Ie = "dropright",
      Ne = "dropleft",
      Pe = "dropdown-menu-right",
      Le = "position-static",
      je = '[data-toggle="dropdown"]',
      He = ".dropdown form",
      Ye = ".dropdown-menu",
      $e = ".navbar-nav",
      Re = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
      We = "top-start",
      Ue = "top-end",
      Fe = "bottom-start",
      qe = "bottom-end",
      Be = "right-start",
      Ve = "left-start",
      ze = {
    offset: 0,
    flip: !0,
    boundary: "scrollParent",
    reference: "toggle",
    display: "dynamic"
  },
      Ge = {
    offset: "(number|string|function)",
    flip: "boolean",
    boundary: "(string|element)",
    reference: "(string|element)",
    display: "string"
  },
      Ke = function () {
    function c(t, e) {
      this._element = t, this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners();
    }

    var t = c.prototype;
    return t.toggle = function () {
      if (!this._element.disabled && !f(this._element).hasClass(Me)) {
        var t = c._getParentFromElement(this._element),
            e = f(this._menu).hasClass(Ae);

        if (c._clearMenus(), !e) {
          var n = {
            relatedTarget: this._element
          },
              i = f.Event(Ee.SHOW, n);

          if (f(t).trigger(i), !i.isDefaultPrevented()) {
            if (!this._inNavbar) {
              if (void 0 === we) throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");
              var s = this._element;
              "parent" === this._config.reference ? s = t : m.isElement(this._config.reference) && (s = this._config.reference, void 0 !== this._config.reference.jquery && (s = this._config.reference[0])), "scrollParent" !== this._config.boundary && f(t).addClass(Le), this._popper = new we(s, this._menu, this._getPopperConfig());
            }

            "ontouchstart" in document.documentElement && 0 === f(t).closest($e).length && f(document.body).children().on("mouseover", null, f.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), f(this._menu).toggleClass(Ae), f(t).toggleClass(Ae).trigger(f.Event(Ee.SHOWN, n));
          }
        }
      }
    }, t.show = function () {
      if (!(this._element.disabled || f(this._element).hasClass(Me) || f(this._menu).hasClass(Ae))) {
        var t = {
          relatedTarget: this._element
        },
            e = f.Event(Ee.SHOW, t),
            n = c._getParentFromElement(this._element);

        f(n).trigger(e), e.isDefaultPrevented() || (f(this._menu).toggleClass(Ae), f(n).toggleClass(Ae).trigger(f.Event(Ee.SHOWN, t)));
      }
    }, t.hide = function () {
      if (!this._element.disabled && !f(this._element).hasClass(Me) && f(this._menu).hasClass(Ae)) {
        var t = {
          relatedTarget: this._element
        },
            e = f.Event(Ee.HIDE, t),
            n = c._getParentFromElement(this._element);

        f(n).trigger(e), e.isDefaultPrevented() || (f(this._menu).toggleClass(Ae), f(n).toggleClass(Ae).trigger(f.Event(Ee.HIDDEN, t)));
      }
    }, t.dispose = function () {
      f.removeData(this._element, ke), f(this._element).off(Ce), this._element = null, (this._menu = null) !== this._popper && (this._popper.destroy(), this._popper = null);
    }, t.update = function () {
      this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate();
    }, t._addEventListeners = function () {
      var e = this;
      f(this._element).on(Ee.CLICK, function (t) {
        t.preventDefault(), t.stopPropagation(), e.toggle();
      });
    }, t._getConfig = function (t) {
      return t = l({}, this.constructor.Default, f(this._element).data(), t), m.typeCheckConfig(De, t, this.constructor.DefaultType), t;
    }, t._getMenuElement = function () {
      if (!this._menu) {
        var t = c._getParentFromElement(this._element);

        t && (this._menu = t.querySelector(Ye));
      }

      return this._menu;
    }, t._getPlacement = function () {
      var t = f(this._element.parentNode),
          e = Fe;
      return t.hasClass(Oe) ? (e = We, f(this._menu).hasClass(Pe) && (e = Ue)) : t.hasClass(Ie) ? e = Be : t.hasClass(Ne) ? e = Ve : f(this._menu).hasClass(Pe) && (e = qe), e;
    }, t._detectNavbar = function () {
      return 0 < f(this._element).closest(".navbar").length;
    }, t._getOffset = function () {
      var e = this,
          t = {};
      return "function" == typeof this._config.offset ? t.fn = function (t) {
        return t.offsets = l({}, t.offsets, e._config.offset(t.offsets, e._element) || {}), t;
      } : t.offset = this._config.offset, t;
    }, t._getPopperConfig = function () {
      var t = {
        placement: this._getPlacement(),
        modifiers: {
          offset: this._getOffset(),
          flip: {
            enabled: this._config.flip
          },
          preventOverflow: {
            boundariesElement: this._config.boundary
          }
        }
      };
      return "static" === this._config.display && (t.modifiers.applyStyle = {
        enabled: !1
      }), t;
    }, c._jQueryInterface = function (e) {
      return this.each(function () {
        var t = f(this).data(ke);

        if (t || (t = new c(this, "object" == typeof e ? e : null), f(this).data(ke, t)), "string" == typeof e) {
          if (void 0 === t[e]) throw new TypeError('No method named "' + e + '"');
          t[e]();
        }
      });
    }, c._clearMenus = function (t) {
      if (!t || 3 !== t.which && ("keyup" !== t.type || 9 === t.which)) for (var e = [].slice.call(document.querySelectorAll(je)), n = 0, i = e.length; n < i; n++) {
        var s = c._getParentFromElement(e[n]),
            o = f(e[n]).data(ke),
            r = {
          relatedTarget: e[n]
        };

        if (t && "click" === t.type && (r.clickEvent = t), o) {
          var a = o._menu;

          if (f(s).hasClass(Ae) && !(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && 9 === t.which) && f.contains(s, t.target))) {
            var l = f.Event(Ee.HIDE, r);
            f(s).trigger(l), l.isDefaultPrevented() || ("ontouchstart" in document.documentElement && f(document.body).children().off("mouseover", null, f.noop), e[n].setAttribute("aria-expanded", "false"), f(a).removeClass(Ae), f(s).removeClass(Ae).trigger(f.Event(Ee.HIDDEN, r)));
          }
        }
      }
    }, c._getParentFromElement = function (t) {
      var e,
          n = m.getSelectorFromElement(t);
      return n && (e = document.querySelector(n)), e || t.parentNode;
    }, c._dataApiKeydownHandler = function (t) {
      if ((/input|textarea/i.test(t.target.tagName) ? !(32 === t.which || 27 !== t.which && (40 !== t.which && 38 !== t.which || f(t.target).closest(Ye).length)) : Te.test(t.which)) && (t.preventDefault(), t.stopPropagation(), !this.disabled && !f(this).hasClass(Me))) {
        var e = c._getParentFromElement(this),
            n = f(e).hasClass(Ae);

        if (n && (!n || 27 !== t.which && 32 !== t.which)) {
          var i = [].slice.call(e.querySelectorAll(Re));

          if (0 !== i.length) {
            var s = i.indexOf(t.target);
            38 === t.which && 0 < s && s--, 40 === t.which && s < i.length - 1 && s++, s < 0 && (s = 0), i[s].focus();
          }
        } else {
          if (27 === t.which) {
            var o = e.querySelector(je);
            f(o).trigger("focus");
          }

          f(this).trigger("click");
        }
      }
    }, r(c, null, [{
      key: "VERSION",
      get: function get() {
        return "4.3.1";
      }
    }, {
      key: "Default",
      get: function get() {
        return ze;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return Ge;
      }
    }]), c;
  }();

  f(document).on(Ee.KEYDOWN_DATA_API, je, Ke._dataApiKeydownHandler).on(Ee.KEYDOWN_DATA_API, Ye, Ke._dataApiKeydownHandler).on(Ee.CLICK_DATA_API + " " + Ee.KEYUP_DATA_API, Ke._clearMenus).on(Ee.CLICK_DATA_API, je, function (t) {
    t.preventDefault(), t.stopPropagation(), Ke._jQueryInterface.call(f(this), "toggle");
  }).on(Ee.CLICK_DATA_API, He, function (t) {
    t.stopPropagation();
  }), f.fn[De] = Ke._jQueryInterface, f.fn[De].Constructor = Ke, f.fn[De].noConflict = function () {
    return f.fn[De] = Se, Ke._jQueryInterface;
  };

  var Qe = "modal",
      Ze = "bs.modal",
      Xe = "." + Ze,
      Je = f.fn[Qe],
      tn = {
    backdrop: !0,
    keyboard: !0,
    focus: !0,
    show: !0
  },
      en = {
    backdrop: "(boolean|string)",
    keyboard: "boolean",
    focus: "boolean",
    show: "boolean"
  },
      nn = {
    HIDE: "hide" + Xe,
    HIDDEN: "hidden" + Xe,
    SHOW: "show" + Xe,
    SHOWN: "shown" + Xe,
    FOCUSIN: "focusin" + Xe,
    RESIZE: "resize" + Xe,
    CLICK_DISMISS: "click.dismiss" + Xe,
    KEYDOWN_DISMISS: "keydown.dismiss" + Xe,
    MOUSEUP_DISMISS: "mouseup.dismiss" + Xe,
    MOUSEDOWN_DISMISS: "mousedown.dismiss" + Xe,
    CLICK_DATA_API: "click" + Xe + ".data-api"
  },
      sn = "modal-dialog-scrollable",
      on = "modal-scrollbar-measure",
      rn = "modal-backdrop",
      an = "modal-open",
      ln = "fade",
      cn = "show",
      hn = ".modal-dialog",
      un = ".modal-body",
      dn = '[data-toggle="modal"]',
      pn = '[data-dismiss="modal"]',
      fn = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
      mn = ".sticky-top",
      gn = function () {
    function s(t, e) {
      this._config = this._getConfig(e), this._element = t, this._dialog = t.querySelector(hn), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollbarWidth = 0;
    }

    var t = s.prototype;
    return t.toggle = function (t) {
      return this._isShown ? this.hide() : this.show(t);
    }, t.show = function (t) {
      var e = this;

      if (!this._isShown && !this._isTransitioning) {
        f(this._element).hasClass(ln) && (this._isTransitioning = !0);
        var n = f.Event(nn.SHOW, {
          relatedTarget: t
        });
        f(this._element).trigger(n), this._isShown || n.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), f(this._element).on(nn.CLICK_DISMISS, pn, function (t) {
          return e.hide(t);
        }), f(this._dialog).on(nn.MOUSEDOWN_DISMISS, function () {
          f(e._element).one(nn.MOUSEUP_DISMISS, function (t) {
            f(t.target).is(e._element) && (e._ignoreBackdropClick = !0);
          });
        }), this._showBackdrop(function () {
          return e._showElement(t);
        }));
      }
    }, t.hide = function (t) {
      var e = this;

      if (t && t.preventDefault(), this._isShown && !this._isTransitioning) {
        var n = f.Event(nn.HIDE);

        if (f(this._element).trigger(n), this._isShown && !n.isDefaultPrevented()) {
          this._isShown = !1;
          var i = f(this._element).hasClass(ln);

          if (i && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), f(document).off(nn.FOCUSIN), f(this._element).removeClass(cn), f(this._element).off(nn.CLICK_DISMISS), f(this._dialog).off(nn.MOUSEDOWN_DISMISS), i) {
            var s = m.getTransitionDurationFromElement(this._element);
            f(this._element).one(m.TRANSITION_END, function (t) {
              return e._hideModal(t);
            }).emulateTransitionEnd(s);
          } else this._hideModal();
        }
      }
    }, t.dispose = function () {
      [window, this._element, this._dialog].forEach(function (t) {
        return f(t).off(Xe);
      }), f(document).off(nn.FOCUSIN), f.removeData(this._element, Ze), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null;
    }, t.handleUpdate = function () {
      this._adjustDialog();
    }, t._getConfig = function (t) {
      return t = l({}, tn, t), m.typeCheckConfig(Qe, t, en), t;
    }, t._showElement = function (t) {
      var e = this,
          n = f(this._element).hasClass(ln);
      this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), f(this._dialog).hasClass(sn) ? this._dialog.querySelector(un).scrollTop = 0 : this._element.scrollTop = 0, n && m.reflow(this._element), f(this._element).addClass(cn), this._config.focus && this._enforceFocus();

      var i = f.Event(nn.SHOWN, {
        relatedTarget: t
      }),
          s = function s() {
        e._config.focus && e._element.focus(), e._isTransitioning = !1, f(e._element).trigger(i);
      };

      if (n) {
        var o = m.getTransitionDurationFromElement(this._dialog);
        f(this._dialog).one(m.TRANSITION_END, s).emulateTransitionEnd(o);
      } else s();
    }, t._enforceFocus = function () {
      var e = this;
      f(document).off(nn.FOCUSIN).on(nn.FOCUSIN, function (t) {
        document !== t.target && e._element !== t.target && 0 === f(e._element).has(t.target).length && e._element.focus();
      });
    }, t._setEscapeEvent = function () {
      var e = this;
      this._isShown && this._config.keyboard ? f(this._element).on(nn.KEYDOWN_DISMISS, function (t) {
        27 === t.which && (t.preventDefault(), e.hide());
      }) : this._isShown || f(this._element).off(nn.KEYDOWN_DISMISS);
    }, t._setResizeEvent = function () {
      var e = this;
      this._isShown ? f(window).on(nn.RESIZE, function (t) {
        return e.handleUpdate(t);
      }) : f(window).off(nn.RESIZE);
    }, t._hideModal = function () {
      var t = this;
      this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._isTransitioning = !1, this._showBackdrop(function () {
        f(document.body).removeClass(an), t._resetAdjustments(), t._resetScrollbar(), f(t._element).trigger(nn.HIDDEN);
      });
    }, t._removeBackdrop = function () {
      this._backdrop && (f(this._backdrop).remove(), this._backdrop = null);
    }, t._showBackdrop = function (t) {
      var e = this,
          n = f(this._element).hasClass(ln) ? ln : "";

      if (this._isShown && this._config.backdrop) {
        if (this._backdrop = document.createElement("div"), this._backdrop.className = rn, n && this._backdrop.classList.add(n), f(this._backdrop).appendTo(document.body), f(this._element).on(nn.CLICK_DISMISS, function (t) {
          e._ignoreBackdropClick ? e._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === e._config.backdrop ? e._element.focus() : e.hide());
        }), n && m.reflow(this._backdrop), f(this._backdrop).addClass(cn), !t) return;
        if (!n) return void t();
        var i = m.getTransitionDurationFromElement(this._backdrop);
        f(this._backdrop).one(m.TRANSITION_END, t).emulateTransitionEnd(i);
      } else if (!this._isShown && this._backdrop) {
        f(this._backdrop).removeClass(cn);

        var s = function s() {
          e._removeBackdrop(), t && t();
        };

        if (f(this._element).hasClass(ln)) {
          var o = m.getTransitionDurationFromElement(this._backdrop);
          f(this._backdrop).one(m.TRANSITION_END, s).emulateTransitionEnd(o);
        } else s();
      } else t && t();
    }, t._adjustDialog = function () {
      var t = this._element.scrollHeight > document.documentElement.clientHeight;
      !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px");
    }, t._resetAdjustments = function () {
      this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
    }, t._checkScrollbar = function () {
      var t = document.body.getBoundingClientRect();
      this._isBodyOverflowing = t.left + t.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth();
    }, t._setScrollbar = function () {
      var s = this;

      if (this._isBodyOverflowing) {
        var t = [].slice.call(document.querySelectorAll(fn)),
            e = [].slice.call(document.querySelectorAll(mn));
        f(t).each(function (t, e) {
          var n = e.style.paddingRight,
              i = f(e).css("padding-right");
          f(e).data("padding-right", n).css("padding-right", parseFloat(i) + s._scrollbarWidth + "px");
        }), f(e).each(function (t, e) {
          var n = e.style.marginRight,
              i = f(e).css("margin-right");
          f(e).data("margin-right", n).css("margin-right", parseFloat(i) - s._scrollbarWidth + "px");
        });
        var n = document.body.style.paddingRight,
            i = f(document.body).css("padding-right");
        f(document.body).data("padding-right", n).css("padding-right", parseFloat(i) + this._scrollbarWidth + "px");
      }

      f(document.body).addClass(an);
    }, t._resetScrollbar = function () {
      var t = [].slice.call(document.querySelectorAll(fn));
      f(t).each(function (t, e) {
        var n = f(e).data("padding-right");
        f(e).removeData("padding-right"), e.style.paddingRight = n || "";
      });
      var e = [].slice.call(document.querySelectorAll("" + mn));
      f(e).each(function (t, e) {
        var n = f(e).data("margin-right");
        void 0 !== n && f(e).css("margin-right", n).removeData("margin-right");
      });
      var n = f(document.body).data("padding-right");
      f(document.body).removeData("padding-right"), document.body.style.paddingRight = n || "";
    }, t._getScrollbarWidth = function () {
      var t = document.createElement("div");
      t.className = on, document.body.appendChild(t);
      var e = t.getBoundingClientRect().width - t.clientWidth;
      return document.body.removeChild(t), e;
    }, s._jQueryInterface = function (n, i) {
      return this.each(function () {
        var t = f(this).data(Ze),
            e = l({}, tn, f(this).data(), "object" == typeof n && n ? n : {});

        if (t || (t = new s(this, e), f(this).data(Ze, t)), "string" == typeof n) {
          if (void 0 === t[n]) throw new TypeError('No method named "' + n + '"');
          t[n](i);
        } else e.show && t.show(i);
      });
    }, r(s, null, [{
      key: "VERSION",
      get: function get() {
        return "4.3.1";
      }
    }, {
      key: "Default",
      get: function get() {
        return tn;
      }
    }]), s;
  }();

  f(document).on(nn.CLICK_DATA_API, dn, function (t) {
    var e,
        n = this,
        i = m.getSelectorFromElement(this);
    i && (e = document.querySelector(i));
    var s = f(e).data(Ze) ? "toggle" : l({}, f(e).data(), f(this).data());
    "A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault();
    var o = f(e).one(nn.SHOW, function (t) {
      t.isDefaultPrevented() || o.one(nn.HIDDEN, function () {
        f(n).is(":visible") && n.focus();
      });
    });

    gn._jQueryInterface.call(f(e), s, this);
  }), f.fn[Qe] = gn._jQueryInterface, f.fn[Qe].Constructor = gn, f.fn[Qe].noConflict = function () {
    return f.fn[Qe] = Je, gn._jQueryInterface;
  };
  var vn = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
      yn = {
    "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
    a: ["target", "href", "title", "rel"],
    area: [],
    b: [],
    br: [],
    col: [],
    code: [],
    div: [],
    em: [],
    hr: [],
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: [],
    i: [],
    img: ["src", "alt", "title", "width", "height"],
    li: [],
    ol: [],
    p: [],
    pre: [],
    s: [],
    small: [],
    span: [],
    sub: [],
    sup: [],
    strong: [],
    u: [],
    ul: []
  },
      bn = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
      _n = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;

  function wn(t, r, e) {
    if (0 === t.length) return t;
    if (e && "function" == typeof e) return e(t);

    for (var n = new window.DOMParser().parseFromString(t, "text/html"), a = Object.keys(r), l = [].slice.call(n.body.querySelectorAll("*")), i = function i(t, e) {
      var n = l[t],
          i = n.nodeName.toLowerCase();
      if (-1 === a.indexOf(n.nodeName.toLowerCase())) return n.parentNode.removeChild(n), "continue";
      var s = [].slice.call(n.attributes),
          o = [].concat(r["*"] || [], r[i] || []);
      s.forEach(function (t) {
        (function (t, e) {
          var n = t.nodeName.toLowerCase();
          if (-1 !== e.indexOf(n)) return -1 === vn.indexOf(n) || Boolean(t.nodeValue.match(bn) || t.nodeValue.match(_n));

          for (var i = e.filter(function (t) {
            return t instanceof RegExp;
          }), s = 0, o = i.length; s < o; s++) {
            if (n.match(i[s])) return !0;
          }

          return !1;
        })(t, o) || n.removeAttribute(t.nodeName);
      });
    }, s = 0, o = l.length; s < o; s++) {
      i(s);
    }

    return n.body.innerHTML;
  }

  var Dn = "tooltip",
      kn = "bs.tooltip",
      Cn = "." + kn,
      xn = f.fn[Dn],
      Sn = "bs-tooltip",
      Tn = new RegExp("(^|\\s)" + Sn + "\\S+", "g"),
      En = ["sanitize", "whiteList", "sanitizeFn"],
      Mn = {
    animation: "boolean",
    template: "string",
    title: "(string|element|function)",
    trigger: "string",
    delay: "(number|object)",
    html: "boolean",
    selector: "(string|boolean)",
    placement: "(string|function)",
    offset: "(number|string|function)",
    container: "(string|element|boolean)",
    fallbackPlacement: "(string|array)",
    boundary: "(string|element)",
    sanitize: "boolean",
    sanitizeFn: "(null|function)",
    whiteList: "object"
  },
      An = {
    AUTO: "auto",
    TOP: "top",
    RIGHT: "right",
    BOTTOM: "bottom",
    LEFT: "left"
  },
      On = {
    animation: !0,
    template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: "hover focus",
    title: "",
    delay: 0,
    html: !1,
    selector: !1,
    placement: "top",
    offset: 0,
    container: !1,
    fallbackPlacement: "flip",
    boundary: "scrollParent",
    sanitize: !0,
    sanitizeFn: null,
    whiteList: yn
  },
      In = "show",
      Nn = "out",
      Pn = {
    HIDE: "hide" + Cn,
    HIDDEN: "hidden" + Cn,
    SHOW: "show" + Cn,
    SHOWN: "shown" + Cn,
    INSERTED: "inserted" + Cn,
    CLICK: "click" + Cn,
    FOCUSIN: "focusin" + Cn,
    FOCUSOUT: "focusout" + Cn,
    MOUSEENTER: "mouseenter" + Cn,
    MOUSELEAVE: "mouseleave" + Cn
  },
      Ln = "fade",
      jn = "show",
      Hn = ".tooltip-inner",
      Yn = ".arrow",
      $n = "hover",
      Rn = "focus",
      Wn = "click",
      Un = "manual",
      Fn = function () {
    function i(t, e) {
      if (void 0 === we) throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");
      this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners();
    }

    var t = i.prototype;
    return t.enable = function () {
      this._isEnabled = !0;
    }, t.disable = function () {
      this._isEnabled = !1;
    }, t.toggleEnabled = function () {
      this._isEnabled = !this._isEnabled;
    }, t.toggle = function (t) {
      if (this._isEnabled) if (t) {
        var e = this.constructor.DATA_KEY,
            n = f(t.currentTarget).data(e);
        n || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), f(t.currentTarget).data(e, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n);
      } else {
        if (f(this.getTipElement()).hasClass(jn)) return void this._leave(null, this);

        this._enter(null, this);
      }
    }, t.dispose = function () {
      clearTimeout(this._timeout), f.removeData(this.element, this.constructor.DATA_KEY), f(this.element).off(this.constructor.EVENT_KEY), f(this.element).closest(".modal").off("hide.bs.modal"), this.tip && f(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, (this._activeTrigger = null) !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null;
    }, t.show = function () {
      var e = this;
      if ("none" === f(this.element).css("display")) throw new Error("Please use show on visible elements");
      var t = f.Event(this.constructor.Event.SHOW);

      if (this.isWithContent() && this._isEnabled) {
        f(this.element).trigger(t);
        var n = m.findShadowRoot(this.element),
            i = f.contains(null !== n ? n : this.element.ownerDocument.documentElement, this.element);
        if (t.isDefaultPrevented() || !i) return;
        var s = this.getTipElement(),
            o = m.getUID(this.constructor.NAME);
        s.setAttribute("id", o), this.element.setAttribute("aria-describedby", o), this.setContent(), this.config.animation && f(s).addClass(Ln);

        var r = "function" == typeof this.config.placement ? this.config.placement.call(this, s, this.element) : this.config.placement,
            a = this._getAttachment(r);

        this.addAttachmentClass(a);

        var l = this._getContainer();

        f(s).data(this.constructor.DATA_KEY, this), f.contains(this.element.ownerDocument.documentElement, this.tip) || f(s).appendTo(l), f(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new we(this.element, s, {
          placement: a,
          modifiers: {
            offset: this._getOffset(),
            flip: {
              behavior: this.config.fallbackPlacement
            },
            arrow: {
              element: Yn
            },
            preventOverflow: {
              boundariesElement: this.config.boundary
            }
          },
          onCreate: function onCreate(t) {
            t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t);
          },
          onUpdate: function onUpdate(t) {
            return e._handlePopperPlacementChange(t);
          }
        }), f(s).addClass(jn), "ontouchstart" in document.documentElement && f(document.body).children().on("mouseover", null, f.noop);

        var c = function c() {
          e.config.animation && e._fixTransition();
          var t = e._hoverState;
          e._hoverState = null, f(e.element).trigger(e.constructor.Event.SHOWN), t === Nn && e._leave(null, e);
        };

        if (f(this.tip).hasClass(Ln)) {
          var h = m.getTransitionDurationFromElement(this.tip);
          f(this.tip).one(m.TRANSITION_END, c).emulateTransitionEnd(h);
        } else c();
      }
    }, t.hide = function (t) {
      var e = this,
          n = this.getTipElement(),
          i = f.Event(this.constructor.Event.HIDE),
          s = function s() {
        e._hoverState !== In && n.parentNode && n.parentNode.removeChild(n), e._cleanTipClass(), e.element.removeAttribute("aria-describedby"), f(e.element).trigger(e.constructor.Event.HIDDEN), null !== e._popper && e._popper.destroy(), t && t();
      };

      if (f(this.element).trigger(i), !i.isDefaultPrevented()) {
        if (f(n).removeClass(jn), "ontouchstart" in document.documentElement && f(document.body).children().off("mouseover", null, f.noop), this._activeTrigger[Wn] = !1, this._activeTrigger[Rn] = !1, this._activeTrigger[$n] = !1, f(this.tip).hasClass(Ln)) {
          var o = m.getTransitionDurationFromElement(n);
          f(n).one(m.TRANSITION_END, s).emulateTransitionEnd(o);
        } else s();

        this._hoverState = "";
      }
    }, t.update = function () {
      null !== this._popper && this._popper.scheduleUpdate();
    }, t.isWithContent = function () {
      return Boolean(this.getTitle());
    }, t.addAttachmentClass = function (t) {
      f(this.getTipElement()).addClass(Sn + "-" + t);
    }, t.getTipElement = function () {
      return this.tip = this.tip || f(this.config.template)[0], this.tip;
    }, t.setContent = function () {
      var t = this.getTipElement();
      this.setElementContent(f(t.querySelectorAll(Hn)), this.getTitle()), f(t).removeClass(Ln + " " + jn);
    }, t.setElementContent = function (t, e) {
      "object" != typeof e || !e.nodeType && !e.jquery ? this.config.html ? (this.config.sanitize && (e = wn(e, this.config.whiteList, this.config.sanitizeFn)), t.html(e)) : t.text(e) : this.config.html ? f(e).parent().is(t) || t.empty().append(e) : t.text(f(e).text());
    }, t.getTitle = function () {
      var t = this.element.getAttribute("data-original-title");
      return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t;
    }, t._getOffset = function () {
      var e = this,
          t = {};
      return "function" == typeof this.config.offset ? t.fn = function (t) {
        return t.offsets = l({}, t.offsets, e.config.offset(t.offsets, e.element) || {}), t;
      } : t.offset = this.config.offset, t;
    }, t._getContainer = function () {
      return !1 === this.config.container ? document.body : m.isElement(this.config.container) ? f(this.config.container) : f(document).find(this.config.container);
    }, t._getAttachment = function (t) {
      return An[t.toUpperCase()];
    }, t._setListeners = function () {
      var i = this;
      this.config.trigger.split(" ").forEach(function (t) {
        if ("click" === t) f(i.element).on(i.constructor.Event.CLICK, i.config.selector, function (t) {
          return i.toggle(t);
        });else if (t !== Un) {
          var e = t === $n ? i.constructor.Event.MOUSEENTER : i.constructor.Event.FOCUSIN,
              n = t === $n ? i.constructor.Event.MOUSELEAVE : i.constructor.Event.FOCUSOUT;
          f(i.element).on(e, i.config.selector, function (t) {
            return i._enter(t);
          }).on(n, i.config.selector, function (t) {
            return i._leave(t);
          });
        }
      }), f(this.element).closest(".modal").on("hide.bs.modal", function () {
        i.element && i.hide();
      }), this.config.selector ? this.config = l({}, this.config, {
        trigger: "manual",
        selector: ""
      }) : this._fixTitle();
    }, t._fixTitle = function () {
      var t = typeof this.element.getAttribute("data-original-title");
      (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""));
    }, t._enter = function (t, e) {
      var n = this.constructor.DATA_KEY;
      (e = e || f(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), f(t.currentTarget).data(n, e)), t && (e._activeTrigger["focusin" === t.type ? Rn : $n] = !0), f(e.getTipElement()).hasClass(jn) || e._hoverState === In ? e._hoverState = In : (clearTimeout(e._timeout), e._hoverState = In, e.config.delay && e.config.delay.show ? e._timeout = setTimeout(function () {
        e._hoverState === In && e.show();
      }, e.config.delay.show) : e.show());
    }, t._leave = function (t, e) {
      var n = this.constructor.DATA_KEY;
      (e = e || f(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), f(t.currentTarget).data(n, e)), t && (e._activeTrigger["focusout" === t.type ? Rn : $n] = !1), e._isWithActiveTrigger() || (clearTimeout(e._timeout), e._hoverState = Nn, e.config.delay && e.config.delay.hide ? e._timeout = setTimeout(function () {
        e._hoverState === Nn && e.hide();
      }, e.config.delay.hide) : e.hide());
    }, t._isWithActiveTrigger = function () {
      for (var t in this._activeTrigger) {
        if (this._activeTrigger[t]) return !0;
      }

      return !1;
    }, t._getConfig = function (t) {
      var e = f(this.element).data();
      return Object.keys(e).forEach(function (t) {
        -1 !== En.indexOf(t) && delete e[t];
      }), "number" == typeof (t = l({}, this.constructor.Default, e, "object" == typeof t && t ? t : {})).delay && (t.delay = {
        show: t.delay,
        hide: t.delay
      }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), m.typeCheckConfig(Dn, t, this.constructor.DefaultType), t.sanitize && (t.template = wn(t.template, t.whiteList, t.sanitizeFn)), t;
    }, t._getDelegateConfig = function () {
      var t = {};
      if (this.config) for (var e in this.config) {
        this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
      }
      return t;
    }, t._cleanTipClass = function () {
      var t = f(this.getTipElement()),
          e = t.attr("class").match(Tn);
      null !== e && e.length && t.removeClass(e.join(""));
    }, t._handlePopperPlacementChange = function (t) {
      var e = t.instance;
      this.tip = e.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement));
    }, t._fixTransition = function () {
      var t = this.getTipElement(),
          e = this.config.animation;
      null === t.getAttribute("x-placement") && (f(t).removeClass(Ln), this.config.animation = !1, this.hide(), this.show(), this.config.animation = e);
    }, i._jQueryInterface = function (n) {
      return this.each(function () {
        var t = f(this).data(kn),
            e = "object" == typeof n && n;

        if ((t || !/dispose|hide/.test(n)) && (t || (t = new i(this, e), f(this).data(kn, t)), "string" == typeof n)) {
          if (void 0 === t[n]) throw new TypeError('No method named "' + n + '"');
          t[n]();
        }
      });
    }, r(i, null, [{
      key: "VERSION",
      get: function get() {
        return "4.3.1";
      }
    }, {
      key: "Default",
      get: function get() {
        return On;
      }
    }, {
      key: "NAME",
      get: function get() {
        return Dn;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return kn;
      }
    }, {
      key: "Event",
      get: function get() {
        return Pn;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return Cn;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return Mn;
      }
    }]), i;
  }();

  f.fn[Dn] = Fn._jQueryInterface, f.fn[Dn].Constructor = Fn, f.fn[Dn].noConflict = function () {
    return f.fn[Dn] = xn, Fn._jQueryInterface;
  };

  var qn = "popover",
      Bn = "bs.popover",
      Vn = "." + Bn,
      zn = f.fn[qn],
      Gn = "bs-popover",
      Kn = new RegExp("(^|\\s)" + Gn + "\\S+", "g"),
      Qn = l({}, Fn.Default, {
    placement: "right",
    trigger: "click",
    content: "",
    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
  }),
      Zn = l({}, Fn.DefaultType, {
    content: "(string|element|function)"
  }),
      Xn = "fade",
      Jn = "show",
      ti = ".popover-header",
      ei = ".popover-body",
      ni = {
    HIDE: "hide" + Vn,
    HIDDEN: "hidden" + Vn,
    SHOW: "show" + Vn,
    SHOWN: "shown" + Vn,
    INSERTED: "inserted" + Vn,
    CLICK: "click" + Vn,
    FOCUSIN: "focusin" + Vn,
    FOCUSOUT: "focusout" + Vn,
    MOUSEENTER: "mouseenter" + Vn,
    MOUSELEAVE: "mouseleave" + Vn
  },
      ii = function (t) {
    var e, n;

    function i() {
      return t.apply(this, arguments) || this;
    }

    n = t, (e = i).prototype = Object.create(n.prototype), (e.prototype.constructor = e).__proto__ = n;
    var s = i.prototype;
    return s.isWithContent = function () {
      return this.getTitle() || this._getContent();
    }, s.addAttachmentClass = function (t) {
      f(this.getTipElement()).addClass(Gn + "-" + t);
    }, s.getTipElement = function () {
      return this.tip = this.tip || f(this.config.template)[0], this.tip;
    }, s.setContent = function () {
      var t = f(this.getTipElement());
      this.setElementContent(t.find(ti), this.getTitle());

      var e = this._getContent();

      "function" == typeof e && (e = e.call(this.element)), this.setElementContent(t.find(ei), e), t.removeClass(Xn + " " + Jn);
    }, s._getContent = function () {
      return this.element.getAttribute("data-content") || this.config.content;
    }, s._cleanTipClass = function () {
      var t = f(this.getTipElement()),
          e = t.attr("class").match(Kn);
      null !== e && 0 < e.length && t.removeClass(e.join(""));
    }, i._jQueryInterface = function (n) {
      return this.each(function () {
        var t = f(this).data(Bn),
            e = "object" == typeof n ? n : null;

        if ((t || !/dispose|hide/.test(n)) && (t || (t = new i(this, e), f(this).data(Bn, t)), "string" == typeof n)) {
          if (void 0 === t[n]) throw new TypeError('No method named "' + n + '"');
          t[n]();
        }
      });
    }, r(i, null, [{
      key: "VERSION",
      get: function get() {
        return "4.3.1";
      }
    }, {
      key: "Default",
      get: function get() {
        return Qn;
      }
    }, {
      key: "NAME",
      get: function get() {
        return qn;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return Bn;
      }
    }, {
      key: "Event",
      get: function get() {
        return ni;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return Vn;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return Zn;
      }
    }]), i;
  }(Fn);

  f.fn[qn] = ii._jQueryInterface, f.fn[qn].Constructor = ii, f.fn[qn].noConflict = function () {
    return f.fn[qn] = zn, ii._jQueryInterface;
  };

  var si = "scrollspy",
      oi = "bs.scrollspy",
      ri = "." + oi,
      ai = f.fn[si],
      li = {
    offset: 10,
    method: "auto",
    target: ""
  },
      ci = {
    offset: "number",
    method: "string",
    target: "(string|element)"
  },
      hi = {
    ACTIVATE: "activate" + ri,
    SCROLL: "scroll" + ri,
    LOAD_DATA_API: "load" + ri + ".data-api"
  },
      ui = "dropdown-item",
      di = "active",
      pi = '[data-spy="scroll"]',
      fi = ".nav, .list-group",
      mi = ".nav-link",
      gi = ".nav-item",
      vi = ".list-group-item",
      yi = ".dropdown",
      bi = ".dropdown-item",
      _i = ".dropdown-toggle",
      wi = "offset",
      Di = "position",
      ki = function () {
    function n(t, e) {
      var n = this;
      this._element = t, this._scrollElement = "BODY" === t.tagName ? window : t, this._config = this._getConfig(e), this._selector = this._config.target + " " + mi + "," + this._config.target + " " + vi + "," + this._config.target + " " + bi, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, f(this._scrollElement).on(hi.SCROLL, function (t) {
        return n._process(t);
      }), this.refresh(), this._process();
    }

    var t = n.prototype;
    return t.refresh = function () {
      var e = this,
          t = this._scrollElement === this._scrollElement.window ? wi : Di,
          s = "auto" === this._config.method ? t : this._config.method,
          o = s === Di ? this._getScrollTop() : 0;
      this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map(function (t) {
        var e,
            n = m.getSelectorFromElement(t);

        if (n && (e = document.querySelector(n)), e) {
          var i = e.getBoundingClientRect();
          if (i.width || i.height) return [f(e)[s]().top + o, n];
        }

        return null;
      }).filter(function (t) {
        return t;
      }).sort(function (t, e) {
        return t[0] - e[0];
      }).forEach(function (t) {
        e._offsets.push(t[0]), e._targets.push(t[1]);
      });
    }, t.dispose = function () {
      f.removeData(this._element, oi), f(this._scrollElement).off(ri), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null;
    }, t._getConfig = function (t) {
      if ("string" != typeof (t = l({}, li, "object" == typeof t && t ? t : {})).target) {
        var e = f(t.target).attr("id");
        e || (e = m.getUID(si), f(t.target).attr("id", e)), t.target = "#" + e;
      }

      return m.typeCheckConfig(si, t, ci), t;
    }, t._getScrollTop = function () {
      return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
    }, t._getScrollHeight = function () {
      return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    }, t._getOffsetHeight = function () {
      return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
    }, t._process = function () {
      var t = this._getScrollTop() + this._config.offset,
          e = this._getScrollHeight(),
          n = this._config.offset + e - this._getOffsetHeight();

      if (this._scrollHeight !== e && this.refresh(), n <= t) {
        var i = this._targets[this._targets.length - 1];
        this._activeTarget !== i && this._activate(i);
      } else {
        if (this._activeTarget && t < this._offsets[0] && 0 < this._offsets[0]) return this._activeTarget = null, void this._clear();

        for (var s = this._offsets.length; s--;) {
          this._activeTarget !== this._targets[s] && t >= this._offsets[s] && (void 0 === this._offsets[s + 1] || t < this._offsets[s + 1]) && this._activate(this._targets[s]);
        }
      }
    }, t._activate = function (e) {
      this._activeTarget = e, this._clear();

      var t = this._selector.split(",").map(function (t) {
        return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]';
      }),
          n = f([].slice.call(document.querySelectorAll(t.join(","))));

      n.hasClass(ui) ? (n.closest(yi).find(_i).addClass(di), n.addClass(di)) : (n.addClass(di), n.parents(fi).prev(mi + ", " + vi).addClass(di), n.parents(fi).prev(gi).children(mi).addClass(di)), f(this._scrollElement).trigger(hi.ACTIVATE, {
        relatedTarget: e
      });
    }, t._clear = function () {
      [].slice.call(document.querySelectorAll(this._selector)).filter(function (t) {
        return t.classList.contains(di);
      }).forEach(function (t) {
        return t.classList.remove(di);
      });
    }, n._jQueryInterface = function (e) {
      return this.each(function () {
        var t = f(this).data(oi);

        if (t || (t = new n(this, "object" == typeof e && e), f(this).data(oi, t)), "string" == typeof e) {
          if (void 0 === t[e]) throw new TypeError('No method named "' + e + '"');
          t[e]();
        }
      });
    }, r(n, null, [{
      key: "VERSION",
      get: function get() {
        return "4.3.1";
      }
    }, {
      key: "Default",
      get: function get() {
        return li;
      }
    }]), n;
  }();

  f(window).on(hi.LOAD_DATA_API, function () {
    for (var t = [].slice.call(document.querySelectorAll(pi)), e = t.length; e--;) {
      var n = f(t[e]);

      ki._jQueryInterface.call(n, n.data());
    }
  }), f.fn[si] = ki._jQueryInterface, f.fn[si].Constructor = ki, f.fn[si].noConflict = function () {
    return f.fn[si] = ai, ki._jQueryInterface;
  };

  var Ci = "bs.tab",
      xi = "." + Ci,
      Si = f.fn.tab,
      Ti = {
    HIDE: "hide" + xi,
    HIDDEN: "hidden" + xi,
    SHOW: "show" + xi,
    SHOWN: "shown" + xi,
    CLICK_DATA_API: "click" + xi + ".data-api"
  },
      Ei = "dropdown-menu",
      Mi = "active",
      Ai = "disabled",
      Oi = "fade",
      Ii = "show",
      Ni = ".dropdown",
      Pi = ".nav, .list-group",
      Li = ".active",
      ji = "> li > .active",
      Hi = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
      Yi = ".dropdown-toggle",
      $i = "> .dropdown-menu .active",
      Ri = function () {
    function i(t) {
      this._element = t;
    }

    var t = i.prototype;
    return t.show = function () {
      var n = this;

      if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && f(this._element).hasClass(Mi) || f(this._element).hasClass(Ai))) {
        var t,
            i,
            e = f(this._element).closest(Pi)[0],
            s = m.getSelectorFromElement(this._element);

        if (e) {
          var o = "UL" === e.nodeName || "OL" === e.nodeName ? ji : Li;
          i = (i = f.makeArray(f(e).find(o)))[i.length - 1];
        }

        var r = f.Event(Ti.HIDE, {
          relatedTarget: this._element
        }),
            a = f.Event(Ti.SHOW, {
          relatedTarget: i
        });

        if (i && f(i).trigger(r), f(this._element).trigger(a), !a.isDefaultPrevented() && !r.isDefaultPrevented()) {
          s && (t = document.querySelector(s)), this._activate(this._element, e);

          var l = function l() {
            var t = f.Event(Ti.HIDDEN, {
              relatedTarget: n._element
            }),
                e = f.Event(Ti.SHOWN, {
              relatedTarget: i
            });
            f(i).trigger(t), f(n._element).trigger(e);
          };

          t ? this._activate(t, t.parentNode, l) : l();
        }
      }
    }, t.dispose = function () {
      f.removeData(this._element, Ci), this._element = null;
    }, t._activate = function (t, e, n) {
      var i = this,
          s = (!e || "UL" !== e.nodeName && "OL" !== e.nodeName ? f(e).children(Li) : f(e).find(ji))[0],
          o = n && s && f(s).hasClass(Oi),
          r = function r() {
        return i._transitionComplete(t, s, n);
      };

      if (s && o) {
        var a = m.getTransitionDurationFromElement(s);
        f(s).removeClass(Ii).one(m.TRANSITION_END, r).emulateTransitionEnd(a);
      } else r();
    }, t._transitionComplete = function (t, e, n) {
      if (e) {
        f(e).removeClass(Mi);
        var i = f(e.parentNode).find($i)[0];
        i && f(i).removeClass(Mi), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1);
      }

      if (f(t).addClass(Mi), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), m.reflow(t), t.classList.contains(Oi) && t.classList.add(Ii), t.parentNode && f(t.parentNode).hasClass(Ei)) {
        var s = f(t).closest(Ni)[0];

        if (s) {
          var o = [].slice.call(s.querySelectorAll(Yi));
          f(o).addClass(Mi);
        }

        t.setAttribute("aria-expanded", !0);
      }

      n && n();
    }, i._jQueryInterface = function (n) {
      return this.each(function () {
        var t = f(this),
            e = t.data(Ci);

        if (e || (e = new i(this), t.data(Ci, e)), "string" == typeof n) {
          if (void 0 === e[n]) throw new TypeError('No method named "' + n + '"');
          e[n]();
        }
      });
    }, r(i, null, [{
      key: "VERSION",
      get: function get() {
        return "4.3.1";
      }
    }]), i;
  }();

  f(document).on(Ti.CLICK_DATA_API, Hi, function (t) {
    t.preventDefault(), Ri._jQueryInterface.call(f(this), "show");
  }), f.fn.tab = Ri._jQueryInterface, f.fn.tab.Constructor = Ri, f.fn.tab.noConflict = function () {
    return f.fn.tab = Si, Ri._jQueryInterface;
  };

  var Wi = "toast",
      Ui = "bs.toast",
      Fi = "." + Ui,
      qi = f.fn[Wi],
      Bi = {
    CLICK_DISMISS: "click.dismiss" + Fi,
    HIDE: "hide" + Fi,
    HIDDEN: "hidden" + Fi,
    SHOW: "show" + Fi,
    SHOWN: "shown" + Fi
  },
      Vi = "fade",
      zi = "hide",
      Gi = "show",
      Ki = "showing",
      Qi = {
    animation: "boolean",
    autohide: "boolean",
    delay: "number"
  },
      Zi = {
    animation: !0,
    autohide: !0,
    delay: 500
  },
      Xi = '[data-dismiss="toast"]',
      Ji = function () {
    function i(t, e) {
      this._element = t, this._config = this._getConfig(e), this._timeout = null, this._setListeners();
    }

    var t = i.prototype;
    return t.show = function () {
      var t = this;
      f(this._element).trigger(Bi.SHOW), this._config.animation && this._element.classList.add(Vi);

      var e = function e() {
        t._element.classList.remove(Ki), t._element.classList.add(Gi), f(t._element).trigger(Bi.SHOWN), t._config.autohide && t.hide();
      };

      if (this._element.classList.remove(zi), this._element.classList.add(Ki), this._config.animation) {
        var n = m.getTransitionDurationFromElement(this._element);
        f(this._element).one(m.TRANSITION_END, e).emulateTransitionEnd(n);
      } else e();
    }, t.hide = function (t) {
      var e = this;
      this._element.classList.contains(Gi) && (f(this._element).trigger(Bi.HIDE), t ? this._close() : this._timeout = setTimeout(function () {
        e._close();
      }, this._config.delay));
    }, t.dispose = function () {
      clearTimeout(this._timeout), this._timeout = null, this._element.classList.contains(Gi) && this._element.classList.remove(Gi), f(this._element).off(Bi.CLICK_DISMISS), f.removeData(this._element, Ui), this._element = null, this._config = null;
    }, t._getConfig = function (t) {
      return t = l({}, Zi, f(this._element).data(), "object" == typeof t && t ? t : {}), m.typeCheckConfig(Wi, t, this.constructor.DefaultType), t;
    }, t._setListeners = function () {
      var t = this;
      f(this._element).on(Bi.CLICK_DISMISS, Xi, function () {
        return t.hide(!0);
      });
    }, t._close = function () {
      var t = this,
          e = function e() {
        t._element.classList.add(zi), f(t._element).trigger(Bi.HIDDEN);
      };

      if (this._element.classList.remove(Gi), this._config.animation) {
        var n = m.getTransitionDurationFromElement(this._element);
        f(this._element).one(m.TRANSITION_END, e).emulateTransitionEnd(n);
      } else e();
    }, i._jQueryInterface = function (n) {
      return this.each(function () {
        var t = f(this),
            e = t.data(Ui);

        if (e || (e = new i(this, "object" == typeof n && n), t.data(Ui, e)), "string" == typeof n) {
          if (void 0 === e[n]) throw new TypeError('No method named "' + n + '"');
          e[n](this);
        }
      });
    }, r(i, null, [{
      key: "VERSION",
      get: function get() {
        return "4.3.1";
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return Qi;
      }
    }, {
      key: "Default",
      get: function get() {
        return Zi;
      }
    }]), i;
  }();

  f.fn[Wi] = Ji._jQueryInterface, f.fn[Wi].Constructor = Ji, f.fn[Wi].noConflict = function () {
    return f.fn[Wi] = qi, Ji._jQueryInterface;
  }, function () {
    if (void 0 === f) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
    var t = f.fn.jquery.split(" ")[0].split(".");
    if (t[0] < 2 && t[1] < 9 || 1 === t[0] && 9 === t[1] && t[2] < 1 || 4 <= t[0]) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0");
  }(), t.Util = m, t.Alert = g, t.Button = O, t.Carousel = at, t.Collapse = kt, t.Dropdown = Ke, t.Modal = gn, t.Popover = ii, t.Scrollspy = ki, t.Tab = Ri, t.Toast = Ji, t.Tooltip = Fn, Object.defineProperty(t, "__esModule", {
    value: !0
  });
}), function (t, e) {
   true ? module.exports = e() : undefined;
}(this, function () {
  "use strict";

  var t, s;

  function d() {
    return t.apply(null, arguments);
  }

  function a(t) {
    return t instanceof Array || "[object Array]" === Object.prototype.toString.call(t);
  }

  function l(t) {
    return null != t && "[object Object]" === Object.prototype.toString.call(t);
  }

  function c(t) {
    return void 0 === t;
  }

  function h(t) {
    return "number" == typeof t || "[object Number]" === Object.prototype.toString.call(t);
  }

  function u(t) {
    return t instanceof Date || "[object Date]" === Object.prototype.toString.call(t);
  }

  function p(t, e) {
    var n,
        i = [];

    for (n = 0; n < t.length; ++n) {
      i.push(e(t[n], n));
    }

    return i;
  }

  function f(t, e) {
    return Object.prototype.hasOwnProperty.call(t, e);
  }

  function m(t, e) {
    for (var n in e) {
      f(e, n) && (t[n] = e[n]);
    }

    return f(e, "toString") && (t.toString = e.toString), f(e, "valueOf") && (t.valueOf = e.valueOf), t;
  }

  function g(t, e, n, i) {
    return Te(t, e, n, i, !0).utc();
  }

  function v(t) {
    return null == t._pf && (t._pf = {
      empty: !1,
      unusedTokens: [],
      unusedInput: [],
      overflow: -2,
      charsLeftOver: 0,
      nullInput: !1,
      invalidMonth: null,
      invalidFormat: !1,
      userInvalidated: !1,
      iso: !1,
      parsedDateParts: [],
      meridiem: null,
      rfc2822: !1,
      weekdayMismatch: !1
    }), t._pf;
  }

  function y(t) {
    if (null == t._isValid) {
      var e = v(t),
          n = s.call(e.parsedDateParts, function (t) {
        return null != t;
      }),
          i = !isNaN(t._d.getTime()) && e.overflow < 0 && !e.empty && !e.invalidMonth && !e.invalidWeekday && !e.weekdayMismatch && !e.nullInput && !e.invalidFormat && !e.userInvalidated && (!e.meridiem || e.meridiem && n);
      if (t._strict && (i = i && 0 === e.charsLeftOver && 0 === e.unusedTokens.length && void 0 === e.bigHour), null != Object.isFrozen && Object.isFrozen(t)) return i;
      t._isValid = i;
    }

    return t._isValid;
  }

  function b(t) {
    var e = g(NaN);
    return null != t ? m(v(e), t) : v(e).userInvalidated = !0, e;
  }

  s = Array.prototype.some ? Array.prototype.some : function (t) {
    for (var e = Object(this), n = e.length >>> 0, i = 0; i < n; i++) {
      if (i in e && t.call(this, e[i], i, e)) return !0;
    }

    return !1;
  };
  var o = d.momentProperties = [];

  function _(t, e) {
    var n, i, s;
    if (c(e._isAMomentObject) || (t._isAMomentObject = e._isAMomentObject), c(e._i) || (t._i = e._i), c(e._f) || (t._f = e._f), c(e._l) || (t._l = e._l), c(e._strict) || (t._strict = e._strict), c(e._tzm) || (t._tzm = e._tzm), c(e._isUTC) || (t._isUTC = e._isUTC), c(e._offset) || (t._offset = e._offset), c(e._pf) || (t._pf = v(e)), c(e._locale) || (t._locale = e._locale), 0 < o.length) for (n = 0; n < o.length; n++) {
      c(s = e[i = o[n]]) || (t[i] = s);
    }
    return t;
  }

  var e = !1;

  function w(t) {
    _(this, t), this._d = new Date(null != t._d ? t._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), !1 === e && (e = !0, d.updateOffset(this), e = !1);
  }

  function D(t) {
    return t instanceof w || null != t && null != t._isAMomentObject;
  }

  function k(t) {
    return t < 0 ? Math.ceil(t) || 0 : Math.floor(t);
  }

  function C(t) {
    var e = +t,
        n = 0;
    return 0 !== e && isFinite(e) && (n = k(e)), n;
  }

  function r(t, e, n) {
    var i,
        s = Math.min(t.length, e.length),
        o = Math.abs(t.length - e.length),
        r = 0;

    for (i = 0; i < s; i++) {
      (n && t[i] !== e[i] || !n && C(t[i]) !== C(e[i])) && r++;
    }

    return r + o;
  }

  function x(t) {
    !1 === d.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + t);
  }

  function n(s, o) {
    var r = !0;
    return m(function () {
      if (null != d.deprecationHandler && d.deprecationHandler(null, s), r) {
        for (var t, e = [], n = 0; n < arguments.length; n++) {
          if (t = "", "object" == typeof arguments[n]) {
            for (var i in t += "\n[" + n + "] ", arguments[0]) {
              t += i + ": " + arguments[0][i] + ", ";
            }

            t = t.slice(0, -2);
          } else t = arguments[n];

          e.push(t);
        }

        x(s + "\nArguments: " + Array.prototype.slice.call(e).join("") + "\n" + new Error().stack), r = !1;
      }

      return o.apply(this, arguments);
    }, o);
  }

  var i,
      S = {};

  function T(t, e) {
    null != d.deprecationHandler && d.deprecationHandler(t, e), S[t] || (x(e), S[t] = !0);
  }

  function E(t) {
    return t instanceof Function || "[object Function]" === Object.prototype.toString.call(t);
  }

  function M(t, e) {
    var n,
        i = m({}, t);

    for (n in e) {
      f(e, n) && (l(t[n]) && l(e[n]) ? (i[n] = {}, m(i[n], t[n]), m(i[n], e[n])) : null != e[n] ? i[n] = e[n] : delete i[n]);
    }

    for (n in t) {
      f(t, n) && !f(e, n) && l(t[n]) && (i[n] = m({}, i[n]));
    }

    return i;
  }

  function A(t) {
    null != t && this.set(t);
  }

  d.suppressDeprecationWarnings = !1, d.deprecationHandler = null, i = Object.keys ? Object.keys : function (t) {
    var e,
        n = [];

    for (e in t) {
      f(t, e) && n.push(e);
    }

    return n;
  };
  var O = {};

  function I(t, e) {
    var n = t.toLowerCase();
    O[n] = O[n + "s"] = O[e] = t;
  }

  function N(t) {
    return "string" == typeof t ? O[t] || O[t.toLowerCase()] : void 0;
  }

  function P(t) {
    var e,
        n,
        i = {};

    for (n in t) {
      f(t, n) && (e = N(n)) && (i[e] = t[n]);
    }

    return i;
  }

  var L = {};

  function j(t, e) {
    L[t] = e;
  }

  function H(t, e, n) {
    var i = "" + Math.abs(t),
        s = e - i.length;
    return (0 <= t ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, s)).toString().substr(1) + i;
  }

  var Y = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
      $ = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
      R = {},
      W = {};

  function U(t, e, n, i) {
    var s = i;
    "string" == typeof i && (s = function s() {
      return this[i]();
    }), t && (W[t] = s), e && (W[e[0]] = function () {
      return H(s.apply(this, arguments), e[1], e[2]);
    }), n && (W[n] = function () {
      return this.localeData().ordinal(s.apply(this, arguments), t);
    });
  }

  function F(t, e) {
    return t.isValid() ? (e = q(e, t.localeData()), R[e] = R[e] || function (i) {
      var t,
          s,
          e,
          o = i.match(Y);

      for (t = 0, s = o.length; t < s; t++) {
        W[o[t]] ? o[t] = W[o[t]] : o[t] = (e = o[t]).match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "");
      }

      return function (t) {
        var e,
            n = "";

        for (e = 0; e < s; e++) {
          n += E(o[e]) ? o[e].call(t, i) : o[e];
        }

        return n;
      };
    }(e), R[e](t)) : t.localeData().invalidDate();
  }

  function q(t, e) {
    var n = 5;

    function i(t) {
      return e.longDateFormat(t) || t;
    }

    for ($.lastIndex = 0; 0 <= n && $.test(t);) {
      t = t.replace($, i), $.lastIndex = 0, n -= 1;
    }

    return t;
  }

  var B = /\d/,
      V = /\d\d/,
      z = /\d{3}/,
      G = /\d{4}/,
      K = /[+-]?\d{6}/,
      Q = /\d\d?/,
      Z = /\d\d\d\d?/,
      X = /\d\d\d\d\d\d?/,
      J = /\d{1,3}/,
      tt = /\d{1,4}/,
      et = /[+-]?\d{1,6}/,
      nt = /\d+/,
      it = /[+-]?\d+/,
      st = /Z|[+-]\d\d:?\d\d/gi,
      ot = /Z|[+-]\d\d(?::?\d\d)?/gi,
      rt = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
      at = {};

  function lt(t, n, i) {
    at[t] = E(n) ? n : function (t, e) {
      return t && i ? i : n;
    };
  }

  function ct(t, e) {
    return f(at, t) ? at[t](e._strict, e._locale) : new RegExp(ht(t.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (t, e, n, i, s) {
      return e || n || i || s;
    })));
  }

  function ht(t) {
    return t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
  }

  var ut = {};

  function dt(t, n) {
    var e,
        i = n;

    for ("string" == typeof t && (t = [t]), h(n) && (i = function i(t, e) {
      e[n] = C(t);
    }), e = 0; e < t.length; e++) {
      ut[t[e]] = i;
    }
  }

  function pt(t, s) {
    dt(t, function (t, e, n, i) {
      n._w = n._w || {}, s(t, n._w, n, i);
    });
  }

  var ft = 0,
      mt = 1,
      gt = 2,
      vt = 3,
      yt = 4,
      bt = 5,
      _t = 6,
      wt = 7,
      Dt = 8;

  function kt(t) {
    return Ct(t) ? 366 : 365;
  }

  function Ct(t) {
    return t % 4 == 0 && t % 100 != 0 || t % 400 == 0;
  }

  U("Y", 0, 0, function () {
    var t = this.year();
    return t <= 9999 ? "" + t : "+" + t;
  }), U(0, ["YY", 2], 0, function () {
    return this.year() % 100;
  }), U(0, ["YYYY", 4], 0, "year"), U(0, ["YYYYY", 5], 0, "year"), U(0, ["YYYYYY", 6, !0], 0, "year"), I("year", "y"), j("year", 1), lt("Y", it), lt("YY", Q, V), lt("YYYY", tt, G), lt("YYYYY", et, K), lt("YYYYYY", et, K), dt(["YYYYY", "YYYYYY"], ft), dt("YYYY", function (t, e) {
    e[ft] = 2 === t.length ? d.parseTwoDigitYear(t) : C(t);
  }), dt("YY", function (t, e) {
    e[ft] = d.parseTwoDigitYear(t);
  }), dt("Y", function (t, e) {
    e[ft] = parseInt(t, 10);
  }), d.parseTwoDigitYear = function (t) {
    return C(t) + (68 < C(t) ? 1900 : 2e3);
  };
  var xt,
      St = Tt("FullYear", !0);

  function Tt(e, n) {
    return function (t) {
      return null != t ? (Mt(this, e, t), d.updateOffset(this, n), this) : Et(this, e);
    };
  }

  function Et(t, e) {
    return t.isValid() ? t._d["get" + (t._isUTC ? "UTC" : "") + e]() : NaN;
  }

  function Mt(t, e, n) {
    t.isValid() && !isNaN(n) && ("FullYear" === e && Ct(t.year()) && 1 === t.month() && 29 === t.date() ? t._d["set" + (t._isUTC ? "UTC" : "") + e](n, t.month(), At(n, t.month())) : t._d["set" + (t._isUTC ? "UTC" : "") + e](n));
  }

  function At(t, e) {
    if (isNaN(t) || isNaN(e)) return NaN;
    var n,
        i = (e % (n = 12) + n) % n;
    return t += (e - i) / 12, 1 === i ? Ct(t) ? 29 : 28 : 31 - i % 7 % 2;
  }

  xt = Array.prototype.indexOf ? Array.prototype.indexOf : function (t) {
    var e;

    for (e = 0; e < this.length; ++e) {
      if (this[e] === t) return e;
    }

    return -1;
  }, U("M", ["MM", 2], "Mo", function () {
    return this.month() + 1;
  }), U("MMM", 0, 0, function (t) {
    return this.localeData().monthsShort(this, t);
  }), U("MMMM", 0, 0, function (t) {
    return this.localeData().months(this, t);
  }), I("month", "M"), j("month", 8), lt("M", Q), lt("MM", Q, V), lt("MMM", function (t, e) {
    return e.monthsShortRegex(t);
  }), lt("MMMM", function (t, e) {
    return e.monthsRegex(t);
  }), dt(["M", "MM"], function (t, e) {
    e[mt] = C(t) - 1;
  }), dt(["MMM", "MMMM"], function (t, e, n, i) {
    var s = n._locale.monthsParse(t, i, n._strict);

    null != s ? e[mt] = s : v(n).invalidMonth = t;
  });
  var Ot = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
      It = "January_February_March_April_May_June_July_August_September_October_November_December".split("_");
  var Nt = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");

  function Pt(t, e) {
    var n;
    if (!t.isValid()) return t;
    if ("string" == typeof e) if (/^\d+$/.test(e)) e = C(e);else if (!h(e = t.localeData().monthsParse(e))) return t;
    return n = Math.min(t.date(), At(t.year(), e)), t._d["set" + (t._isUTC ? "UTC" : "") + "Month"](e, n), t;
  }

  function Lt(t) {
    return null != t ? (Pt(this, t), d.updateOffset(this, !0), this) : Et(this, "Month");
  }

  var jt = rt;
  var Ht = rt;

  function Yt() {
    function t(t, e) {
      return e.length - t.length;
    }

    var e,
        n,
        i = [],
        s = [],
        o = [];

    for (e = 0; e < 12; e++) {
      n = g([2e3, e]), i.push(this.monthsShort(n, "")), s.push(this.months(n, "")), o.push(this.months(n, "")), o.push(this.monthsShort(n, ""));
    }

    for (i.sort(t), s.sort(t), o.sort(t), e = 0; e < 12; e++) {
      i[e] = ht(i[e]), s[e] = ht(s[e]);
    }

    for (e = 0; e < 24; e++) {
      o[e] = ht(o[e]);
    }

    this._monthsRegex = new RegExp("^(" + o.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + s.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + i.join("|") + ")", "i");
  }

  function $t(t) {
    var e;

    if (t < 100 && 0 <= t) {
      var n = Array.prototype.slice.call(arguments);
      n[0] = t + 400, e = new Date(Date.UTC.apply(null, n)), isFinite(e.getUTCFullYear()) && e.setUTCFullYear(t);
    } else e = new Date(Date.UTC.apply(null, arguments));

    return e;
  }

  function Rt(t, e, n) {
    var i = 7 + e - n;
    return -((7 + $t(t, 0, i).getUTCDay() - e) % 7) + i - 1;
  }

  function Wt(t, e, n, i, s) {
    var o,
        r,
        a = 1 + 7 * (e - 1) + (7 + n - i) % 7 + Rt(t, i, s);
    return r = a <= 0 ? kt(o = t - 1) + a : a > kt(t) ? (o = t + 1, a - kt(t)) : (o = t, a), {
      year: o,
      dayOfYear: r
    };
  }

  function Ut(t, e, n) {
    var i,
        s,
        o = Rt(t.year(), e, n),
        r = Math.floor((t.dayOfYear() - o - 1) / 7) + 1;
    return r < 1 ? i = r + Ft(s = t.year() - 1, e, n) : r > Ft(t.year(), e, n) ? (i = r - Ft(t.year(), e, n), s = t.year() + 1) : (s = t.year(), i = r), {
      week: i,
      year: s
    };
  }

  function Ft(t, e, n) {
    var i = Rt(t, e, n),
        s = Rt(t + 1, e, n);
    return (kt(t) - i + s) / 7;
  }

  U("w", ["ww", 2], "wo", "week"), U("W", ["WW", 2], "Wo", "isoWeek"), I("week", "w"), I("isoWeek", "W"), j("week", 5), j("isoWeek", 5), lt("w", Q), lt("ww", Q, V), lt("W", Q), lt("WW", Q, V), pt(["w", "ww", "W", "WW"], function (t, e, n, i) {
    e[i.substr(0, 1)] = C(t);
  });

  function qt(t, e) {
    return t.slice(e, 7).concat(t.slice(0, e));
  }

  U("d", 0, "do", "day"), U("dd", 0, 0, function (t) {
    return this.localeData().weekdaysMin(this, t);
  }), U("ddd", 0, 0, function (t) {
    return this.localeData().weekdaysShort(this, t);
  }), U("dddd", 0, 0, function (t) {
    return this.localeData().weekdays(this, t);
  }), U("e", 0, 0, "weekday"), U("E", 0, 0, "isoWeekday"), I("day", "d"), I("weekday", "e"), I("isoWeekday", "E"), j("day", 11), j("weekday", 11), j("isoWeekday", 11), lt("d", Q), lt("e", Q), lt("E", Q), lt("dd", function (t, e) {
    return e.weekdaysMinRegex(t);
  }), lt("ddd", function (t, e) {
    return e.weekdaysShortRegex(t);
  }), lt("dddd", function (t, e) {
    return e.weekdaysRegex(t);
  }), pt(["dd", "ddd", "dddd"], function (t, e, n, i) {
    var s = n._locale.weekdaysParse(t, i, n._strict);

    null != s ? e.d = s : v(n).invalidWeekday = t;
  }), pt(["d", "e", "E"], function (t, e, n, i) {
    e[i] = C(t);
  });
  var Bt = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_");
  var Vt = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_");
  var zt = "Su_Mo_Tu_We_Th_Fr_Sa".split("_");
  var Gt = rt;
  var Kt = rt;
  var Qt = rt;

  function Zt() {
    function t(t, e) {
      return e.length - t.length;
    }

    var e,
        n,
        i,
        s,
        o,
        r = [],
        a = [],
        l = [],
        c = [];

    for (e = 0; e < 7; e++) {
      n = g([2e3, 1]).day(e), i = this.weekdaysMin(n, ""), s = this.weekdaysShort(n, ""), o = this.weekdays(n, ""), r.push(i), a.push(s), l.push(o), c.push(i), c.push(s), c.push(o);
    }

    for (r.sort(t), a.sort(t), l.sort(t), c.sort(t), e = 0; e < 7; e++) {
      a[e] = ht(a[e]), l[e] = ht(l[e]), c[e] = ht(c[e]);
    }

    this._weekdaysRegex = new RegExp("^(" + c.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + l.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + a.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + r.join("|") + ")", "i");
  }

  function Xt() {
    return this.hours() % 12 || 12;
  }

  function Jt(t, e) {
    U(t, 0, 0, function () {
      return this.localeData().meridiem(this.hours(), this.minutes(), e);
    });
  }

  function te(t, e) {
    return e._meridiemParse;
  }

  U("H", ["HH", 2], 0, "hour"), U("h", ["hh", 2], 0, Xt), U("k", ["kk", 2], 0, function () {
    return this.hours() || 24;
  }), U("hmm", 0, 0, function () {
    return "" + Xt.apply(this) + H(this.minutes(), 2);
  }), U("hmmss", 0, 0, function () {
    return "" + Xt.apply(this) + H(this.minutes(), 2) + H(this.seconds(), 2);
  }), U("Hmm", 0, 0, function () {
    return "" + this.hours() + H(this.minutes(), 2);
  }), U("Hmmss", 0, 0, function () {
    return "" + this.hours() + H(this.minutes(), 2) + H(this.seconds(), 2);
  }), Jt("a", !0), Jt("A", !1), I("hour", "h"), j("hour", 13), lt("a", te), lt("A", te), lt("H", Q), lt("h", Q), lt("k", Q), lt("HH", Q, V), lt("hh", Q, V), lt("kk", Q, V), lt("hmm", Z), lt("hmmss", X), lt("Hmm", Z), lt("Hmmss", X), dt(["H", "HH"], vt), dt(["k", "kk"], function (t, e, n) {
    var i = C(t);
    e[vt] = 24 === i ? 0 : i;
  }), dt(["a", "A"], function (t, e, n) {
    n._isPm = n._locale.isPM(t), n._meridiem = t;
  }), dt(["h", "hh"], function (t, e, n) {
    e[vt] = C(t), v(n).bigHour = !0;
  }), dt("hmm", function (t, e, n) {
    var i = t.length - 2;
    e[vt] = C(t.substr(0, i)), e[yt] = C(t.substr(i)), v(n).bigHour = !0;
  }), dt("hmmss", function (t, e, n) {
    var i = t.length - 4,
        s = t.length - 2;
    e[vt] = C(t.substr(0, i)), e[yt] = C(t.substr(i, 2)), e[bt] = C(t.substr(s)), v(n).bigHour = !0;
  }), dt("Hmm", function (t, e, n) {
    var i = t.length - 2;
    e[vt] = C(t.substr(0, i)), e[yt] = C(t.substr(i));
  }), dt("Hmmss", function (t, e, n) {
    var i = t.length - 4,
        s = t.length - 2;
    e[vt] = C(t.substr(0, i)), e[yt] = C(t.substr(i, 2)), e[bt] = C(t.substr(s));
  });
  var ee,
      ne = Tt("Hours", !0),
      ie = {
    calendar: {
      sameDay: "[Today at] LT",
      nextDay: "[Tomorrow at] LT",
      nextWeek: "dddd [at] LT",
      lastDay: "[Yesterday at] LT",
      lastWeek: "[Last] dddd [at] LT",
      sameElse: "L"
    },
    longDateFormat: {
      LTS: "h:mm:ss A",
      LT: "h:mm A",
      L: "MM/DD/YYYY",
      LL: "MMMM D, YYYY",
      LLL: "MMMM D, YYYY h:mm A",
      LLLL: "dddd, MMMM D, YYYY h:mm A"
    },
    invalidDate: "Invalid date",
    ordinal: "%d",
    dayOfMonthOrdinalParse: /\d{1,2}/,
    relativeTime: {
      future: "in %s",
      past: "%s ago",
      s: "a few seconds",
      ss: "%d seconds",
      m: "a minute",
      mm: "%d minutes",
      h: "an hour",
      hh: "%d hours",
      d: "a day",
      dd: "%d days",
      M: "a month",
      MM: "%d months",
      y: "a year",
      yy: "%d years"
    },
    months: It,
    monthsShort: Nt,
    week: {
      dow: 0,
      doy: 6
    },
    weekdays: Bt,
    weekdaysMin: zt,
    weekdaysShort: Vt,
    meridiemParse: /[ap]\.?m?\.?/i
  },
      se = {},
      oe = {};

  function re(t) {
    return t ? t.toLowerCase().replace("_", "-") : t;
  }

  function ae(t) {
    var e = null;
    if (!se[t] && "undefined" != typeof module && module && module.exports) try {
      e = ee._abbr, !(function webpackMissingModule() { var e = new Error("Cannot find module 'undefined'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), le(e);
    } catch (t) {}
    return se[t];
  }

  function le(t, e) {
    var n;
    return t && ((n = c(e) ? he(t) : ce(t, e)) ? ee = n : "undefined" != typeof console && console.warn && console.warn("Locale " + t + " not found. Did you forget to load it?")), ee._abbr;
  }

  function ce(t, e) {
    if (null === e) return delete se[t], null;
    var n,
        i = ie;
    if (e.abbr = t, null != se[t]) T("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), i = se[t]._config;else if (null != e.parentLocale) if (null != se[e.parentLocale]) i = se[e.parentLocale]._config;else {
      if (null == (n = ae(e.parentLocale))) return oe[e.parentLocale] || (oe[e.parentLocale] = []), oe[e.parentLocale].push({
        name: t,
        config: e
      }), null;
      i = n._config;
    }
    return se[t] = new A(M(i, e)), oe[t] && oe[t].forEach(function (t) {
      ce(t.name, t.config);
    }), le(t), se[t];
  }

  function he(t) {
    var e;
    if (t && t._locale && t._locale._abbr && (t = t._locale._abbr), !t) return ee;

    if (!a(t)) {
      if (e = ae(t)) return e;
      t = [t];
    }

    return function (t) {
      for (var e, n, i, s, o = 0; o < t.length;) {
        for (e = (s = re(t[o]).split("-")).length, n = (n = re(t[o + 1])) ? n.split("-") : null; 0 < e;) {
          if (i = ae(s.slice(0, e).join("-"))) return i;
          if (n && n.length >= e && r(s, n, !0) >= e - 1) break;
          e--;
        }

        o++;
      }

      return ee;
    }(t);
  }

  function ue(t) {
    var e,
        n = t._a;
    return n && -2 === v(t).overflow && (e = n[mt] < 0 || 11 < n[mt] ? mt : n[gt] < 1 || n[gt] > At(n[ft], n[mt]) ? gt : n[vt] < 0 || 24 < n[vt] || 24 === n[vt] && (0 !== n[yt] || 0 !== n[bt] || 0 !== n[_t]) ? vt : n[yt] < 0 || 59 < n[yt] ? yt : n[bt] < 0 || 59 < n[bt] ? bt : n[_t] < 0 || 999 < n[_t] ? _t : -1, v(t)._overflowDayOfYear && (e < ft || gt < e) && (e = gt), v(t)._overflowWeeks && -1 === e && (e = wt), v(t)._overflowWeekday && -1 === e && (e = Dt), v(t).overflow = e), t;
  }

  function de(t, e, n) {
    return null != t ? t : null != e ? e : n;
  }

  function pe(t) {
    var e,
        n,
        i,
        s,
        o,
        r = [];

    if (!t._d) {
      var a, l;

      for (a = t, l = new Date(d.now()), i = a._useUTC ? [l.getUTCFullYear(), l.getUTCMonth(), l.getUTCDate()] : [l.getFullYear(), l.getMonth(), l.getDate()], t._w && null == t._a[gt] && null == t._a[mt] && function (t) {
        var e, n, i, s, o, r, a, l;
        if (null != (e = t._w).GG || null != e.W || null != e.E) o = 1, r = 4, n = de(e.GG, t._a[ft], Ut(Ee(), 1, 4).year), i = de(e.W, 1), ((s = de(e.E, 1)) < 1 || 7 < s) && (l = !0);else {
          o = t._locale._week.dow, r = t._locale._week.doy;
          var c = Ut(Ee(), o, r);
          n = de(e.gg, t._a[ft], c.year), i = de(e.w, c.week), null != e.d ? ((s = e.d) < 0 || 6 < s) && (l = !0) : null != e.e ? (s = e.e + o, (e.e < 0 || 6 < e.e) && (l = !0)) : s = o;
        }
        i < 1 || i > Ft(n, o, r) ? v(t)._overflowWeeks = !0 : null != l ? v(t)._overflowWeekday = !0 : (a = Wt(n, i, s, o, r), t._a[ft] = a.year, t._dayOfYear = a.dayOfYear);
      }(t), null != t._dayOfYear && (o = de(t._a[ft], i[ft]), (t._dayOfYear > kt(o) || 0 === t._dayOfYear) && (v(t)._overflowDayOfYear = !0), n = $t(o, 0, t._dayOfYear), t._a[mt] = n.getUTCMonth(), t._a[gt] = n.getUTCDate()), e = 0; e < 3 && null == t._a[e]; ++e) {
        t._a[e] = r[e] = i[e];
      }

      for (; e < 7; e++) {
        t._a[e] = r[e] = null == t._a[e] ? 2 === e ? 1 : 0 : t._a[e];
      }

      24 === t._a[vt] && 0 === t._a[yt] && 0 === t._a[bt] && 0 === t._a[_t] && (t._nextDay = !0, t._a[vt] = 0), t._d = (t._useUTC ? $t : function (t, e, n, i, s, o, r) {
        var a;
        return t < 100 && 0 <= t ? (a = new Date(t + 400, e, n, i, s, o, r), isFinite(a.getFullYear()) && a.setFullYear(t)) : a = new Date(t, e, n, i, s, o, r), a;
      }).apply(null, r), s = t._useUTC ? t._d.getUTCDay() : t._d.getDay(), null != t._tzm && t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm), t._nextDay && (t._a[vt] = 24), t._w && void 0 !== t._w.d && t._w.d !== s && (v(t).weekdayMismatch = !0);
    }
  }

  var fe = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
      me = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
      ge = /Z|[+-]\d\d(?::?\d\d)?/,
      ve = [["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/], ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/], ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/], ["GGGG-[W]WW", /\d{4}-W\d\d/, !1], ["YYYY-DDD", /\d{4}-\d{3}/], ["YYYY-MM", /\d{4}-\d\d/, !1], ["YYYYYYMMDD", /[+-]\d{10}/], ["YYYYMMDD", /\d{8}/], ["GGGG[W]WWE", /\d{4}W\d{3}/], ["GGGG[W]WW", /\d{4}W\d{2}/, !1], ["YYYYDDD", /\d{7}/]],
      ye = [["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/], ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/], ["HH:mm:ss", /\d\d:\d\d:\d\d/], ["HH:mm", /\d\d:\d\d/], ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/], ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/], ["HHmmss", /\d\d\d\d\d\d/], ["HHmm", /\d\d\d\d/], ["HH", /\d\d/]],
      be = /^\/?Date\((\-?\d+)/i;

  function _e(t) {
    var e,
        n,
        i,
        s,
        o,
        r,
        a = t._i,
        l = fe.exec(a) || me.exec(a);

    if (l) {
      for (v(t).iso = !0, e = 0, n = ve.length; e < n; e++) {
        if (ve[e][1].exec(l[1])) {
          s = ve[e][0], i = !1 !== ve[e][2];
          break;
        }
      }

      if (null == s) return void (t._isValid = !1);

      if (l[3]) {
        for (e = 0, n = ye.length; e < n; e++) {
          if (ye[e][1].exec(l[3])) {
            o = (l[2] || " ") + ye[e][0];
            break;
          }
        }

        if (null == o) return void (t._isValid = !1);
      }

      if (!i && null != o) return void (t._isValid = !1);

      if (l[4]) {
        if (!ge.exec(l[4])) return void (t._isValid = !1);
        r = "Z";
      }

      t._f = s + (o || "") + (r || ""), xe(t);
    } else t._isValid = !1;
  }

  var we = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;

  function De(t, e, n, i, s, o) {
    var r = [function (t) {
      var e = parseInt(t, 10);
      {
        if (e <= 49) return 2e3 + e;
        if (e <= 999) return 1900 + e;
      }
      return e;
    }(t), Nt.indexOf(e), parseInt(n, 10), parseInt(i, 10), parseInt(s, 10)];
    return o && r.push(parseInt(o, 10)), r;
  }

  var ke = {
    UT: 0,
    GMT: 0,
    EDT: -240,
    EST: -300,
    CDT: -300,
    CST: -360,
    MDT: -360,
    MST: -420,
    PDT: -420,
    PST: -480
  };

  function Ce(t) {
    var e,
        n,
        i,
        s = we.exec(t._i.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, ""));

    if (s) {
      var o = De(s[4], s[3], s[2], s[5], s[6], s[7]);
      if (e = s[1], n = o, i = t, e && Vt.indexOf(e) !== new Date(n[0], n[1], n[2]).getDay() && (v(i).weekdayMismatch = !0, !(i._isValid = !1))) return;
      t._a = o, t._tzm = function (t, e, n) {
        if (t) return ke[t];
        if (e) return 0;
        var i = parseInt(n, 10),
            s = i % 100;
        return (i - s) / 100 * 60 + s;
      }(s[8], s[9], s[10]), t._d = $t.apply(null, t._a), t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm), v(t).rfc2822 = !0;
    } else t._isValid = !1;
  }

  function xe(t) {
    if (t._f !== d.ISO_8601) {
      if (t._f !== d.RFC_2822) {
        t._a = [], v(t).empty = !0;
        var e,
            n,
            i,
            s,
            o,
            r,
            a,
            l,
            c = "" + t._i,
            h = c.length,
            u = 0;

        for (i = q(t._f, t._locale).match(Y) || [], e = 0; e < i.length; e++) {
          s = i[e], (n = (c.match(ct(s, t)) || [])[0]) && (0 < (o = c.substr(0, c.indexOf(n))).length && v(t).unusedInput.push(o), c = c.slice(c.indexOf(n) + n.length), u += n.length), W[s] ? (n ? v(t).empty = !1 : v(t).unusedTokens.push(s), r = s, l = t, null != (a = n) && f(ut, r) && ut[r](a, l._a, l, r)) : t._strict && !n && v(t).unusedTokens.push(s);
        }

        v(t).charsLeftOver = h - u, 0 < c.length && v(t).unusedInput.push(c), t._a[vt] <= 12 && !0 === v(t).bigHour && 0 < t._a[vt] && (v(t).bigHour = void 0), v(t).parsedDateParts = t._a.slice(0), v(t).meridiem = t._meridiem, t._a[vt] = function (t, e, n) {
          var i;
          if (null == n) return e;
          return null != t.meridiemHour ? t.meridiemHour(e, n) : (null != t.isPM && ((i = t.isPM(n)) && e < 12 && (e += 12), i || 12 !== e || (e = 0)), e);
        }(t._locale, t._a[vt], t._meridiem), pe(t), ue(t);
      } else Ce(t);
    } else _e(t);
  }

  function Se(t) {
    var e,
        n,
        i,
        s,
        o = t._i,
        r = t._f;
    return t._locale = t._locale || he(t._l), null === o || void 0 === r && "" === o ? b({
      nullInput: !0
    }) : ("string" == typeof o && (t._i = o = t._locale.preparse(o)), D(o) ? new w(ue(o)) : (u(o) ? t._d = o : a(r) ? function (t) {
      var e, n, i, s, o;
      if (0 === t._f.length) return v(t).invalidFormat = !0, t._d = new Date(NaN);

      for (s = 0; s < t._f.length; s++) {
        o = 0, e = _({}, t), null != t._useUTC && (e._useUTC = t._useUTC), e._f = t._f[s], xe(e), y(e) && (o += v(e).charsLeftOver, o += 10 * v(e).unusedTokens.length, v(e).score = o, (null == i || o < i) && (i = o, n = e));
      }

      m(t, n || e);
    }(t) : r ? xe(t) : c(n = (e = t)._i) ? e._d = new Date(d.now()) : u(n) ? e._d = new Date(n.valueOf()) : "string" == typeof n ? (i = e, null === (s = be.exec(i._i)) ? (_e(i), !1 === i._isValid && (delete i._isValid, Ce(i), !1 === i._isValid && (delete i._isValid, d.createFromInputFallback(i)))) : i._d = new Date(+s[1])) : a(n) ? (e._a = p(n.slice(0), function (t) {
      return parseInt(t, 10);
    }), pe(e)) : l(n) ? function (t) {
      if (!t._d) {
        var e = P(t._i);
        t._a = p([e.year, e.month, e.day || e.date, e.hour, e.minute, e.second, e.millisecond], function (t) {
          return t && parseInt(t, 10);
        }), pe(t);
      }
    }(e) : h(n) ? e._d = new Date(n) : d.createFromInputFallback(e), y(t) || (t._d = null), t));
  }

  function Te(t, e, n, i, s) {
    var o,
        r = {};
    return !0 !== n && !1 !== n || (i = n, n = void 0), (l(t) && function (t) {
      if (Object.getOwnPropertyNames) return 0 === Object.getOwnPropertyNames(t).length;
      var e;

      for (e in t) {
        if (t.hasOwnProperty(e)) return !1;
      }

      return !0;
    }(t) || a(t) && 0 === t.length) && (t = void 0), r._isAMomentObject = !0, r._useUTC = r._isUTC = s, r._l = n, r._i = t, r._f = e, r._strict = i, (o = new w(ue(Se(r))))._nextDay && (o.add(1, "d"), o._nextDay = void 0), o;
  }

  function Ee(t, e, n, i) {
    return Te(t, e, n, i, !1);
  }

  d.createFromInputFallback = n("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function (t) {
    t._d = new Date(t._i + (t._useUTC ? " UTC" : ""));
  }), d.ISO_8601 = function () {}, d.RFC_2822 = function () {};
  var Me = n("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
    var t = Ee.apply(null, arguments);
    return this.isValid() && t.isValid() ? t < this ? this : t : b();
  }),
      Ae = n("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
    var t = Ee.apply(null, arguments);
    return this.isValid() && t.isValid() ? this < t ? this : t : b();
  });

  function Oe(t, e) {
    var n, i;
    if (1 === e.length && a(e[0]) && (e = e[0]), !e.length) return Ee();

    for (n = e[0], i = 1; i < e.length; ++i) {
      e[i].isValid() && !e[i][t](n) || (n = e[i]);
    }

    return n;
  }

  var Ie = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];

  function Ne(t) {
    var e = P(t),
        n = e.year || 0,
        i = e.quarter || 0,
        s = e.month || 0,
        o = e.week || e.isoWeek || 0,
        r = e.day || 0,
        a = e.hour || 0,
        l = e.minute || 0,
        c = e.second || 0,
        h = e.millisecond || 0;
    this._isValid = function (t) {
      for (var e in t) {
        if (-1 === xt.call(Ie, e) || null != t[e] && isNaN(t[e])) return !1;
      }

      for (var n = !1, i = 0; i < Ie.length; ++i) {
        if (t[Ie[i]]) {
          if (n) return !1;
          parseFloat(t[Ie[i]]) !== C(t[Ie[i]]) && (n = !0);
        }
      }

      return !0;
    }(e), this._milliseconds = +h + 1e3 * c + 6e4 * l + 1e3 * a * 60 * 60, this._days = +r + 7 * o, this._months = +s + 3 * i + 12 * n, this._data = {}, this._locale = he(), this._bubble();
  }

  function Pe(t) {
    return t instanceof Ne;
  }

  function Le(t) {
    return t < 0 ? -1 * Math.round(-1 * t) : Math.round(t);
  }

  function je(t, n) {
    U(t, 0, 0, function () {
      var t = this.utcOffset(),
          e = "+";
      return t < 0 && (t = -t, e = "-"), e + H(~~(t / 60), 2) + n + H(~~t % 60, 2);
    });
  }

  je("Z", ":"), je("ZZ", ""), lt("Z", ot), lt("ZZ", ot), dt(["Z", "ZZ"], function (t, e, n) {
    n._useUTC = !0, n._tzm = Ye(ot, t);
  });
  var He = /([\+\-]|\d\d)/gi;

  function Ye(t, e) {
    var n = (e || "").match(t);
    if (null === n) return null;
    var i = ((n[n.length - 1] || []) + "").match(He) || ["-", 0, 0],
        s = 60 * i[1] + C(i[2]);
    return 0 === s ? 0 : "+" === i[0] ? s : -s;
  }

  function $e(t, e) {
    var n, i;
    return e._isUTC ? (n = e.clone(), i = (D(t) || u(t) ? t.valueOf() : Ee(t).valueOf()) - n.valueOf(), n._d.setTime(n._d.valueOf() + i), d.updateOffset(n, !1), n) : Ee(t).local();
  }

  function Re(t) {
    return 15 * -Math.round(t._d.getTimezoneOffset() / 15);
  }

  function We() {
    return !!this.isValid() && this._isUTC && 0 === this._offset;
  }

  d.updateOffset = function () {};

  var Ue = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
      Fe = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

  function qe(t, e) {
    var n,
        i,
        s,
        o = t,
        r = null;
    return Pe(t) ? o = {
      ms: t._milliseconds,
      d: t._days,
      M: t._months
    } : h(t) ? (o = {}, e ? o[e] = t : o.milliseconds = t) : (r = Ue.exec(t)) ? (n = "-" === r[1] ? -1 : 1, o = {
      y: 0,
      d: C(r[gt]) * n,
      h: C(r[vt]) * n,
      m: C(r[yt]) * n,
      s: C(r[bt]) * n,
      ms: C(Le(1e3 * r[_t])) * n
    }) : (r = Fe.exec(t)) ? (n = "-" === r[1] ? -1 : 1, o = {
      y: Be(r[2], n),
      M: Be(r[3], n),
      w: Be(r[4], n),
      d: Be(r[5], n),
      h: Be(r[6], n),
      m: Be(r[7], n),
      s: Be(r[8], n)
    }) : null == o ? o = {} : "object" == typeof o && ("from" in o || "to" in o) && (s = function (t, e) {
      var n;
      if (!t.isValid() || !e.isValid()) return {
        milliseconds: 0,
        months: 0
      };
      e = $e(e, t), t.isBefore(e) ? n = Ve(t, e) : ((n = Ve(e, t)).milliseconds = -n.milliseconds, n.months = -n.months);
      return n;
    }(Ee(o.from), Ee(o.to)), (o = {}).ms = s.milliseconds, o.M = s.months), i = new Ne(o), Pe(t) && f(t, "_locale") && (i._locale = t._locale), i;
  }

  function Be(t, e) {
    var n = t && parseFloat(t.replace(",", "."));
    return (isNaN(n) ? 0 : n) * e;
  }

  function Ve(t, e) {
    var n = {};
    return n.months = e.month() - t.month() + 12 * (e.year() - t.year()), t.clone().add(n.months, "M").isAfter(e) && --n.months, n.milliseconds = +e - +t.clone().add(n.months, "M"), n;
  }

  function ze(i, s) {
    return function (t, e) {
      var n;
      return null === e || isNaN(+e) || (T(s, "moment()." + s + "(period, number) is deprecated. Please use moment()." + s + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), n = t, t = e, e = n), Ge(this, qe(t = "string" == typeof t ? +t : t, e), i), this;
    };
  }

  function Ge(t, e, n, i) {
    var s = e._milliseconds,
        o = Le(e._days),
        r = Le(e._months);
    t.isValid() && (i = null == i || i, r && Pt(t, Et(t, "Month") + r * n), o && Mt(t, "Date", Et(t, "Date") + o * n), s && t._d.setTime(t._d.valueOf() + s * n), i && d.updateOffset(t, o || r));
  }

  qe.fn = Ne.prototype, qe.invalid = function () {
    return qe(NaN);
  };
  var Ke = ze(1, "add"),
      Qe = ze(-1, "subtract");

  function Ze(t, e) {
    var n = 12 * (e.year() - t.year()) + (e.month() - t.month()),
        i = t.clone().add(n, "months");
    return -(n + (e - i < 0 ? (e - i) / (i - t.clone().add(n - 1, "months")) : (e - i) / (t.clone().add(n + 1, "months") - i))) || 0;
  }

  function Xe(t) {
    var e;
    return void 0 === t ? this._locale._abbr : (null != (e = he(t)) && (this._locale = e), this);
  }

  d.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", d.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
  var Je = n("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function (t) {
    return void 0 === t ? this.localeData() : this.locale(t);
  });

  function tn() {
    return this._locale;
  }

  var en = 126227808e5;

  function nn(t, e) {
    return (t % e + e) % e;
  }

  function sn(t, e, n) {
    return t < 100 && 0 <= t ? new Date(t + 400, e, n) - en : new Date(t, e, n).valueOf();
  }

  function on(t, e, n) {
    return t < 100 && 0 <= t ? Date.UTC(t + 400, e, n) - en : Date.UTC(t, e, n);
  }

  function rn(t, e) {
    U(0, [t, t.length], 0, e);
  }

  function an(t, e, n, i, s) {
    var o;
    return null == t ? Ut(this, i, s).year : ((o = Ft(t, i, s)) < e && (e = o), function (t, e, n, i, s) {
      var o = Wt(t, e, n, i, s),
          r = $t(o.year, 0, o.dayOfYear);
      return this.year(r.getUTCFullYear()), this.month(r.getUTCMonth()), this.date(r.getUTCDate()), this;
    }.call(this, t, e, n, i, s));
  }

  U(0, ["gg", 2], 0, function () {
    return this.weekYear() % 100;
  }), U(0, ["GG", 2], 0, function () {
    return this.isoWeekYear() % 100;
  }), rn("gggg", "weekYear"), rn("ggggg", "weekYear"), rn("GGGG", "isoWeekYear"), rn("GGGGG", "isoWeekYear"), I("weekYear", "gg"), I("isoWeekYear", "GG"), j("weekYear", 1), j("isoWeekYear", 1), lt("G", it), lt("g", it), lt("GG", Q, V), lt("gg", Q, V), lt("GGGG", tt, G), lt("gggg", tt, G), lt("GGGGG", et, K), lt("ggggg", et, K), pt(["gggg", "ggggg", "GGGG", "GGGGG"], function (t, e, n, i) {
    e[i.substr(0, 2)] = C(t);
  }), pt(["gg", "GG"], function (t, e, n, i) {
    e[i] = d.parseTwoDigitYear(t);
  }), U("Q", 0, "Qo", "quarter"), I("quarter", "Q"), j("quarter", 7), lt("Q", B), dt("Q", function (t, e) {
    e[mt] = 3 * (C(t) - 1);
  }), U("D", ["DD", 2], "Do", "date"), I("date", "D"), j("date", 9), lt("D", Q), lt("DD", Q, V), lt("Do", function (t, e) {
    return t ? e._dayOfMonthOrdinalParse || e._ordinalParse : e._dayOfMonthOrdinalParseLenient;
  }), dt(["D", "DD"], gt), dt("Do", function (t, e) {
    e[gt] = C(t.match(Q)[0]);
  });
  var ln = Tt("Date", !0);
  U("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), I("dayOfYear", "DDD"), j("dayOfYear", 4), lt("DDD", J), lt("DDDD", z), dt(["DDD", "DDDD"], function (t, e, n) {
    n._dayOfYear = C(t);
  }), U("m", ["mm", 2], 0, "minute"), I("minute", "m"), j("minute", 14), lt("m", Q), lt("mm", Q, V), dt(["m", "mm"], yt);
  var cn = Tt("Minutes", !1);
  U("s", ["ss", 2], 0, "second"), I("second", "s"), j("second", 15), lt("s", Q), lt("ss", Q, V), dt(["s", "ss"], bt);
  var hn,
      un = Tt("Seconds", !1);

  for (U("S", 0, 0, function () {
    return ~~(this.millisecond() / 100);
  }), U(0, ["SS", 2], 0, function () {
    return ~~(this.millisecond() / 10);
  }), U(0, ["SSS", 3], 0, "millisecond"), U(0, ["SSSS", 4], 0, function () {
    return 10 * this.millisecond();
  }), U(0, ["SSSSS", 5], 0, function () {
    return 100 * this.millisecond();
  }), U(0, ["SSSSSS", 6], 0, function () {
    return 1e3 * this.millisecond();
  }), U(0, ["SSSSSSS", 7], 0, function () {
    return 1e4 * this.millisecond();
  }), U(0, ["SSSSSSSS", 8], 0, function () {
    return 1e5 * this.millisecond();
  }), U(0, ["SSSSSSSSS", 9], 0, function () {
    return 1e6 * this.millisecond();
  }), I("millisecond", "ms"), j("millisecond", 16), lt("S", J, B), lt("SS", J, V), lt("SSS", J, z), hn = "SSSS"; hn.length <= 9; hn += "S") {
    lt(hn, nt);
  }

  function dn(t, e) {
    e[_t] = C(1e3 * ("0." + t));
  }

  for (hn = "S"; hn.length <= 9; hn += "S") {
    dt(hn, dn);
  }

  var pn = Tt("Milliseconds", !1);
  U("z", 0, 0, "zoneAbbr"), U("zz", 0, 0, "zoneName");
  var fn = w.prototype;

  function mn(t) {
    return t;
  }

  fn.add = Ke, fn.calendar = function (t, e) {
    var n = t || Ee(),
        i = $e(n, this).startOf("day"),
        s = d.calendarFormat(this, i) || "sameElse",
        o = e && (E(e[s]) ? e[s].call(this, n) : e[s]);
    return this.format(o || this.localeData().calendar(s, this, Ee(n)));
  }, fn.clone = function () {
    return new w(this);
  }, fn.diff = function (t, e, n) {
    var i, s, o;
    if (!this.isValid()) return NaN;
    if (!(i = $e(t, this)).isValid()) return NaN;

    switch (s = 6e4 * (i.utcOffset() - this.utcOffset()), e = N(e)) {
      case "year":
        o = Ze(this, i) / 12;
        break;

      case "month":
        o = Ze(this, i);
        break;

      case "quarter":
        o = Ze(this, i) / 3;
        break;

      case "second":
        o = (this - i) / 1e3;
        break;

      case "minute":
        o = (this - i) / 6e4;
        break;

      case "hour":
        o = (this - i) / 36e5;
        break;

      case "day":
        o = (this - i - s) / 864e5;
        break;

      case "week":
        o = (this - i - s) / 6048e5;
        break;

      default:
        o = this - i;
    }

    return n ? o : k(o);
  }, fn.endOf = function (t) {
    var e;
    if (void 0 === (t = N(t)) || "millisecond" === t || !this.isValid()) return this;
    var n = this._isUTC ? on : sn;

    switch (t) {
      case "year":
        e = n(this.year() + 1, 0, 1) - 1;
        break;

      case "quarter":
        e = n(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
        break;

      case "month":
        e = n(this.year(), this.month() + 1, 1) - 1;
        break;

      case "week":
        e = n(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
        break;

      case "isoWeek":
        e = n(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
        break;

      case "day":
      case "date":
        e = n(this.year(), this.month(), this.date() + 1) - 1;
        break;

      case "hour":
        e = this._d.valueOf(), e += 36e5 - nn(e + (this._isUTC ? 0 : 6e4 * this.utcOffset()), 36e5) - 1;
        break;

      case "minute":
        e = this._d.valueOf(), e += 6e4 - nn(e, 6e4) - 1;
        break;

      case "second":
        e = this._d.valueOf(), e += 1e3 - nn(e, 1e3) - 1;
    }

    return this._d.setTime(e), d.updateOffset(this, !0), this;
  }, fn.format = function (t) {
    t || (t = this.isUtc() ? d.defaultFormatUtc : d.defaultFormat);
    var e = F(this, t);
    return this.localeData().postformat(e);
  }, fn.from = function (t, e) {
    return this.isValid() && (D(t) && t.isValid() || Ee(t).isValid()) ? qe({
      to: this,
      from: t
    }).locale(this.locale()).humanize(!e) : this.localeData().invalidDate();
  }, fn.fromNow = function (t) {
    return this.from(Ee(), t);
  }, fn.to = function (t, e) {
    return this.isValid() && (D(t) && t.isValid() || Ee(t).isValid()) ? qe({
      from: this,
      to: t
    }).locale(this.locale()).humanize(!e) : this.localeData().invalidDate();
  }, fn.toNow = function (t) {
    return this.to(Ee(), t);
  }, fn.get = function (t) {
    return E(this[t = N(t)]) ? this[t]() : this;
  }, fn.invalidAt = function () {
    return v(this).overflow;
  }, fn.isAfter = function (t, e) {
    var n = D(t) ? t : Ee(t);
    return !(!this.isValid() || !n.isValid()) && ("millisecond" === (e = N(e) || "millisecond") ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(e).valueOf());
  }, fn.isBefore = function (t, e) {
    var n = D(t) ? t : Ee(t);
    return !(!this.isValid() || !n.isValid()) && ("millisecond" === (e = N(e) || "millisecond") ? this.valueOf() < n.valueOf() : this.clone().endOf(e).valueOf() < n.valueOf());
  }, fn.isBetween = function (t, e, n, i) {
    var s = D(t) ? t : Ee(t),
        o = D(e) ? e : Ee(e);
    return !!(this.isValid() && s.isValid() && o.isValid()) && ("(" === (i = i || "()")[0] ? this.isAfter(s, n) : !this.isBefore(s, n)) && (")" === i[1] ? this.isBefore(o, n) : !this.isAfter(o, n));
  }, fn.isSame = function (t, e) {
    var n,
        i = D(t) ? t : Ee(t);
    return !(!this.isValid() || !i.isValid()) && ("millisecond" === (e = N(e) || "millisecond") ? this.valueOf() === i.valueOf() : (n = i.valueOf(), this.clone().startOf(e).valueOf() <= n && n <= this.clone().endOf(e).valueOf()));
  }, fn.isSameOrAfter = function (t, e) {
    return this.isSame(t, e) || this.isAfter(t, e);
  }, fn.isSameOrBefore = function (t, e) {
    return this.isSame(t, e) || this.isBefore(t, e);
  }, fn.isValid = function () {
    return y(this);
  }, fn.lang = Je, fn.locale = Xe, fn.localeData = tn, fn.max = Ae, fn.min = Me, fn.parsingFlags = function () {
    return m({}, v(this));
  }, fn.set = function (t, e) {
    if ("object" == typeof t) for (var n = function (t) {
      var e = [];

      for (var n in t) {
        e.push({
          unit: n,
          priority: L[n]
        });
      }

      return e.sort(function (t, e) {
        return t.priority - e.priority;
      }), e;
    }(t = P(t)), i = 0; i < n.length; i++) {
      this[n[i].unit](t[n[i].unit]);
    } else if (E(this[t = N(t)])) return this[t](e);
    return this;
  }, fn.startOf = function (t) {
    var e;
    if (void 0 === (t = N(t)) || "millisecond" === t || !this.isValid()) return this;
    var n = this._isUTC ? on : sn;

    switch (t) {
      case "year":
        e = n(this.year(), 0, 1);
        break;

      case "quarter":
        e = n(this.year(), this.month() - this.month() % 3, 1);
        break;

      case "month":
        e = n(this.year(), this.month(), 1);
        break;

      case "week":
        e = n(this.year(), this.month(), this.date() - this.weekday());
        break;

      case "isoWeek":
        e = n(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
        break;

      case "day":
      case "date":
        e = n(this.year(), this.month(), this.date());
        break;

      case "hour":
        e = this._d.valueOf(), e -= nn(e + (this._isUTC ? 0 : 6e4 * this.utcOffset()), 36e5);
        break;

      case "minute":
        e = this._d.valueOf(), e -= nn(e, 6e4);
        break;

      case "second":
        e = this._d.valueOf(), e -= nn(e, 1e3);
    }

    return this._d.setTime(e), d.updateOffset(this, !0), this;
  }, fn.subtract = Qe, fn.toArray = function () {
    return [this.year(), this.month(), this.date(), this.hour(), this.minute(), this.second(), this.millisecond()];
  }, fn.toObject = function () {
    return {
      years: this.year(),
      months: this.month(),
      date: this.date(),
      hours: this.hours(),
      minutes: this.minutes(),
      seconds: this.seconds(),
      milliseconds: this.milliseconds()
    };
  }, fn.toDate = function () {
    return new Date(this.valueOf());
  }, fn.toISOString = function (t) {
    if (!this.isValid()) return null;
    var e = !0 !== t,
        n = e ? this.clone().utc() : this;
    return n.year() < 0 || 9999 < n.year() ? F(n, e ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : E(Date.prototype.toISOString) ? e ? this.toDate().toISOString() : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3).toISOString().replace("Z", F(n, "Z")) : F(n, e ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ");
  }, fn.inspect = function () {
    if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
    var t = "moment",
        e = "";
    this.isLocal() || (t = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", e = "Z");
    var n = "[" + t + '("]',
        i = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY",
        s = e + '[")]';
    return this.format(n + i + "-MM-DD[T]HH:mm:ss.SSS" + s);
  }, fn.toJSON = function () {
    return this.isValid() ? this.toISOString() : null;
  }, fn.toString = function () {
    return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
  }, fn.unix = function () {
    return Math.floor(this.valueOf() / 1e3);
  }, fn.valueOf = function () {
    return this._d.valueOf() - 6e4 * (this._offset || 0);
  }, fn.creationData = function () {
    return {
      input: this._i,
      format: this._f,
      locale: this._locale,
      isUTC: this._isUTC,
      strict: this._strict
    };
  }, fn.year = St, fn.isLeapYear = function () {
    return Ct(this.year());
  }, fn.weekYear = function (t) {
    return an.call(this, t, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy);
  }, fn.isoWeekYear = function (t) {
    return an.call(this, t, this.isoWeek(), this.isoWeekday(), 1, 4);
  }, fn.quarter = fn.quarters = function (t) {
    return null == t ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (t - 1) + this.month() % 3);
  }, fn.month = Lt, fn.daysInMonth = function () {
    return At(this.year(), this.month());
  }, fn.week = fn.weeks = function (t) {
    var e = this.localeData().week(this);
    return null == t ? e : this.add(7 * (t - e), "d");
  }, fn.isoWeek = fn.isoWeeks = function (t) {
    var e = Ut(this, 1, 4).week;
    return null == t ? e : this.add(7 * (t - e), "d");
  }, fn.weeksInYear = function () {
    var t = this.localeData()._week;

    return Ft(this.year(), t.dow, t.doy);
  }, fn.isoWeeksInYear = function () {
    return Ft(this.year(), 1, 4);
  }, fn.date = ln, fn.day = fn.days = function (t) {
    if (!this.isValid()) return null != t ? this : NaN;
    var e,
        n,
        i = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
    return null != t ? (e = t, n = this.localeData(), t = "string" != typeof e ? e : isNaN(e) ? "number" == typeof (e = n.weekdaysParse(e)) ? e : null : parseInt(e, 10), this.add(t - i, "d")) : i;
  }, fn.weekday = function (t) {
    if (!this.isValid()) return null != t ? this : NaN;
    var e = (this.day() + 7 - this.localeData()._week.dow) % 7;
    return null == t ? e : this.add(t - e, "d");
  }, fn.isoWeekday = function (t) {
    if (!this.isValid()) return null != t ? this : NaN;
    if (null == t) return this.day() || 7;
    var e,
        n,
        i = (e = t, n = this.localeData(), "string" == typeof e ? n.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e);
    return this.day(this.day() % 7 ? i : i - 7);
  }, fn.dayOfYear = function (t) {
    var e = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
    return null == t ? e : this.add(t - e, "d");
  }, fn.hour = fn.hours = ne, fn.minute = fn.minutes = cn, fn.second = fn.seconds = un, fn.millisecond = fn.milliseconds = pn, fn.utcOffset = function (t, e, n) {
    var i,
        s = this._offset || 0;
    if (!this.isValid()) return null != t ? this : NaN;
    if (null == t) return this._isUTC ? s : Re(this);

    if ("string" == typeof t) {
      if (null === (t = Ye(ot, t))) return this;
    } else Math.abs(t) < 16 && !n && (t *= 60);

    return !this._isUTC && e && (i = Re(this)), this._offset = t, this._isUTC = !0, null != i && this.add(i, "m"), s !== t && (!e || this._changeInProgress ? Ge(this, qe(t - s, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, d.updateOffset(this, !0), this._changeInProgress = null)), this;
  }, fn.utc = function (t) {
    return this.utcOffset(0, t);
  }, fn.local = function (t) {
    return this._isUTC && (this.utcOffset(0, t), this._isUTC = !1, t && this.subtract(Re(this), "m")), this;
  }, fn.parseZone = function () {
    if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);else if ("string" == typeof this._i) {
      var t = Ye(st, this._i);
      null != t ? this.utcOffset(t) : this.utcOffset(0, !0);
    }
    return this;
  }, fn.hasAlignedHourOffset = function (t) {
    return !!this.isValid() && (t = t ? Ee(t).utcOffset() : 0, (this.utcOffset() - t) % 60 == 0);
  }, fn.isDST = function () {
    return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
  }, fn.isLocal = function () {
    return !!this.isValid() && !this._isUTC;
  }, fn.isUtcOffset = function () {
    return !!this.isValid() && this._isUTC;
  }, fn.isUtc = We, fn.isUTC = We, fn.zoneAbbr = function () {
    return this._isUTC ? "UTC" : "";
  }, fn.zoneName = function () {
    return this._isUTC ? "Coordinated Universal Time" : "";
  }, fn.dates = n("dates accessor is deprecated. Use date instead.", ln), fn.months = n("months accessor is deprecated. Use month instead", Lt), fn.years = n("years accessor is deprecated. Use year instead", St), fn.zone = n("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", function (t, e) {
    return null != t ? ("string" != typeof t && (t = -t), this.utcOffset(t, e), this) : -this.utcOffset();
  }), fn.isDSTShifted = n("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", function () {
    if (!c(this._isDSTShifted)) return this._isDSTShifted;
    var t = {};

    if (_(t, this), (t = Se(t))._a) {
      var e = t._isUTC ? g(t._a) : Ee(t._a);
      this._isDSTShifted = this.isValid() && 0 < r(t._a, e.toArray());
    } else this._isDSTShifted = !1;

    return this._isDSTShifted;
  });
  var gn = A.prototype;

  function vn(t, e, n, i) {
    var s = he(),
        o = g().set(i, e);
    return s[n](o, t);
  }

  function yn(t, e, n) {
    if (h(t) && (e = t, t = void 0), t = t || "", null != e) return vn(t, e, n, "month");
    var i,
        s = [];

    for (i = 0; i < 12; i++) {
      s[i] = vn(t, i, n, "month");
    }

    return s;
  }

  function bn(t, e, n, i) {
    e = ("boolean" == typeof t ? h(e) && (n = e, e = void 0) : (e = t, t = !1, h(n = e) && (n = e, e = void 0)), e || "");
    var s,
        o = he(),
        r = t ? o._week.dow : 0;
    if (null != n) return vn(e, (n + r) % 7, i, "day");
    var a = [];

    for (s = 0; s < 7; s++) {
      a[s] = vn(e, (s + r) % 7, i, "day");
    }

    return a;
  }

  gn.calendar = function (t, e, n) {
    var i = this._calendar[t] || this._calendar.sameElse;
    return E(i) ? i.call(e, n) : i;
  }, gn.longDateFormat = function (t) {
    var e = this._longDateFormat[t],
        n = this._longDateFormat[t.toUpperCase()];

    return e || !n ? e : (this._longDateFormat[t] = n.replace(/MMMM|MM|DD|dddd/g, function (t) {
      return t.slice(1);
    }), this._longDateFormat[t]);
  }, gn.invalidDate = function () {
    return this._invalidDate;
  }, gn.ordinal = function (t) {
    return this._ordinal.replace("%d", t);
  }, gn.preparse = mn, gn.postformat = mn, gn.relativeTime = function (t, e, n, i) {
    var s = this._relativeTime[n];
    return E(s) ? s(t, e, n, i) : s.replace(/%d/i, t);
  }, gn.pastFuture = function (t, e) {
    var n = this._relativeTime[0 < t ? "future" : "past"];
    return E(n) ? n(e) : n.replace(/%s/i, e);
  }, gn.set = function (t) {
    var e, n;

    for (n in t) {
      E(e = t[n]) ? this[n] = e : this["_" + n] = e;
    }

    this._config = t, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source);
  }, gn.months = function (t, e) {
    return t ? a(this._months) ? this._months[t.month()] : this._months[(this._months.isFormat || Ot).test(e) ? "format" : "standalone"][t.month()] : a(this._months) ? this._months : this._months.standalone;
  }, gn.monthsShort = function (t, e) {
    return t ? a(this._monthsShort) ? this._monthsShort[t.month()] : this._monthsShort[Ot.test(e) ? "format" : "standalone"][t.month()] : a(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
  }, gn.monthsParse = function (t, e, n) {
    var i, s, o;
    if (this._monthsParseExact) return function (t, e, n) {
      var i,
          s,
          o,
          r = t.toLocaleLowerCase();
      if (!this._monthsParse) for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], i = 0; i < 12; ++i) {
        o = g([2e3, i]), this._shortMonthsParse[i] = this.monthsShort(o, "").toLocaleLowerCase(), this._longMonthsParse[i] = this.months(o, "").toLocaleLowerCase();
      }
      return n ? "MMM" === e ? -1 !== (s = xt.call(this._shortMonthsParse, r)) ? s : null : -1 !== (s = xt.call(this._longMonthsParse, r)) ? s : null : "MMM" === e ? -1 !== (s = xt.call(this._shortMonthsParse, r)) ? s : -1 !== (s = xt.call(this._longMonthsParse, r)) ? s : null : -1 !== (s = xt.call(this._longMonthsParse, r)) ? s : -1 !== (s = xt.call(this._shortMonthsParse, r)) ? s : null;
    }.call(this, t, e, n);

    for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), i = 0; i < 12; i++) {
      if (s = g([2e3, i]), n && !this._longMonthsParse[i] && (this._longMonthsParse[i] = new RegExp("^" + this.months(s, "").replace(".", "") + "$", "i"), this._shortMonthsParse[i] = new RegExp("^" + this.monthsShort(s, "").replace(".", "") + "$", "i")), n || this._monthsParse[i] || (o = "^" + this.months(s, "") + "|^" + this.monthsShort(s, ""), this._monthsParse[i] = new RegExp(o.replace(".", ""), "i")), n && "MMMM" === e && this._longMonthsParse[i].test(t)) return i;
      if (n && "MMM" === e && this._shortMonthsParse[i].test(t)) return i;
      if (!n && this._monthsParse[i].test(t)) return i;
    }
  }, gn.monthsRegex = function (t) {
    return this._monthsParseExact ? (f(this, "_monthsRegex") || Yt.call(this), t ? this._monthsStrictRegex : this._monthsRegex) : (f(this, "_monthsRegex") || (this._monthsRegex = Ht), this._monthsStrictRegex && t ? this._monthsStrictRegex : this._monthsRegex);
  }, gn.monthsShortRegex = function (t) {
    return this._monthsParseExact ? (f(this, "_monthsRegex") || Yt.call(this), t ? this._monthsShortStrictRegex : this._monthsShortRegex) : (f(this, "_monthsShortRegex") || (this._monthsShortRegex = jt), this._monthsShortStrictRegex && t ? this._monthsShortStrictRegex : this._monthsShortRegex);
  }, gn.week = function (t) {
    return Ut(t, this._week.dow, this._week.doy).week;
  }, gn.firstDayOfYear = function () {
    return this._week.doy;
  }, gn.firstDayOfWeek = function () {
    return this._week.dow;
  }, gn.weekdays = function (t, e) {
    var n = a(this._weekdays) ? this._weekdays : this._weekdays[t && !0 !== t && this._weekdays.isFormat.test(e) ? "format" : "standalone"];
    return !0 === t ? qt(n, this._week.dow) : t ? n[t.day()] : n;
  }, gn.weekdaysMin = function (t) {
    return !0 === t ? qt(this._weekdaysMin, this._week.dow) : t ? this._weekdaysMin[t.day()] : this._weekdaysMin;
  }, gn.weekdaysShort = function (t) {
    return !0 === t ? qt(this._weekdaysShort, this._week.dow) : t ? this._weekdaysShort[t.day()] : this._weekdaysShort;
  }, gn.weekdaysParse = function (t, e, n) {
    var i, s, o;
    if (this._weekdaysParseExact) return function (t, e, n) {
      var i,
          s,
          o,
          r = t.toLocaleLowerCase();
      if (!this._weekdaysParse) for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], i = 0; i < 7; ++i) {
        o = g([2e3, 1]).day(i), this._minWeekdaysParse[i] = this.weekdaysMin(o, "").toLocaleLowerCase(), this._shortWeekdaysParse[i] = this.weekdaysShort(o, "").toLocaleLowerCase(), this._weekdaysParse[i] = this.weekdays(o, "").toLocaleLowerCase();
      }
      return n ? "dddd" === e ? -1 !== (s = xt.call(this._weekdaysParse, r)) ? s : null : "ddd" === e ? -1 !== (s = xt.call(this._shortWeekdaysParse, r)) ? s : null : -1 !== (s = xt.call(this._minWeekdaysParse, r)) ? s : null : "dddd" === e ? -1 !== (s = xt.call(this._weekdaysParse, r)) ? s : -1 !== (s = xt.call(this._shortWeekdaysParse, r)) ? s : -1 !== (s = xt.call(this._minWeekdaysParse, r)) ? s : null : "ddd" === e ? -1 !== (s = xt.call(this._shortWeekdaysParse, r)) ? s : -1 !== (s = xt.call(this._weekdaysParse, r)) ? s : -1 !== (s = xt.call(this._minWeekdaysParse, r)) ? s : null : -1 !== (s = xt.call(this._minWeekdaysParse, r)) ? s : -1 !== (s = xt.call(this._weekdaysParse, r)) ? s : -1 !== (s = xt.call(this._shortWeekdaysParse, r)) ? s : null;
    }.call(this, t, e, n);

    for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), i = 0; i < 7; i++) {
      if (s = g([2e3, 1]).day(i), n && !this._fullWeekdaysParse[i] && (this._fullWeekdaysParse[i] = new RegExp("^" + this.weekdays(s, "").replace(".", "\\.?") + "$", "i"), this._shortWeekdaysParse[i] = new RegExp("^" + this.weekdaysShort(s, "").replace(".", "\\.?") + "$", "i"), this._minWeekdaysParse[i] = new RegExp("^" + this.weekdaysMin(s, "").replace(".", "\\.?") + "$", "i")), this._weekdaysParse[i] || (o = "^" + this.weekdays(s, "") + "|^" + this.weekdaysShort(s, "") + "|^" + this.weekdaysMin(s, ""), this._weekdaysParse[i] = new RegExp(o.replace(".", ""), "i")), n && "dddd" === e && this._fullWeekdaysParse[i].test(t)) return i;
      if (n && "ddd" === e && this._shortWeekdaysParse[i].test(t)) return i;
      if (n && "dd" === e && this._minWeekdaysParse[i].test(t)) return i;
      if (!n && this._weekdaysParse[i].test(t)) return i;
    }
  }, gn.weekdaysRegex = function (t) {
    return this._weekdaysParseExact ? (f(this, "_weekdaysRegex") || Zt.call(this), t ? this._weekdaysStrictRegex : this._weekdaysRegex) : (f(this, "_weekdaysRegex") || (this._weekdaysRegex = Gt), this._weekdaysStrictRegex && t ? this._weekdaysStrictRegex : this._weekdaysRegex);
  }, gn.weekdaysShortRegex = function (t) {
    return this._weekdaysParseExact ? (f(this, "_weekdaysRegex") || Zt.call(this), t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (f(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Kt), this._weekdaysShortStrictRegex && t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
  }, gn.weekdaysMinRegex = function (t) {
    return this._weekdaysParseExact ? (f(this, "_weekdaysRegex") || Zt.call(this), t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (f(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Qt), this._weekdaysMinStrictRegex && t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
  }, gn.isPM = function (t) {
    return "p" === (t + "").toLowerCase().charAt(0);
  }, gn.meridiem = function (t, e, n) {
    return 11 < t ? n ? "pm" : "PM" : n ? "am" : "AM";
  }, le("en", {
    dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
    ordinal: function ordinal(t) {
      var e = t % 10;
      return t + (1 === C(t % 100 / 10) ? "th" : 1 === e ? "st" : 2 === e ? "nd" : 3 === e ? "rd" : "th");
    }
  }), d.lang = n("moment.lang is deprecated. Use moment.locale instead.", le), d.langData = n("moment.langData is deprecated. Use moment.localeData instead.", he);
  var _n = Math.abs;

  function wn(t, e, n, i) {
    var s = qe(e, n);
    return t._milliseconds += i * s._milliseconds, t._days += i * s._days, t._months += i * s._months, t._bubble();
  }

  function Dn(t) {
    return t < 0 ? Math.floor(t) : Math.ceil(t);
  }

  function kn(t) {
    return 4800 * t / 146097;
  }

  function Cn(t) {
    return 146097 * t / 4800;
  }

  function xn(t) {
    return function () {
      return this.as(t);
    };
  }

  var Sn = xn("ms"),
      Tn = xn("s"),
      En = xn("m"),
      Mn = xn("h"),
      An = xn("d"),
      On = xn("w"),
      In = xn("M"),
      Nn = xn("Q"),
      Pn = xn("y");

  function Ln(t) {
    return function () {
      return this.isValid() ? this._data[t] : NaN;
    };
  }

  var jn = Ln("milliseconds"),
      Hn = Ln("seconds"),
      Yn = Ln("minutes"),
      $n = Ln("hours"),
      Rn = Ln("days"),
      Wn = Ln("months"),
      Un = Ln("years");
  var Fn = Math.round,
      qn = {
    ss: 44,
    s: 45,
    m: 45,
    h: 22,
    d: 26,
    M: 11
  };
  var Bn = Math.abs;

  function Vn(t) {
    return (0 < t) - (t < 0) || +t;
  }

  function zn() {
    if (!this.isValid()) return this.localeData().invalidDate();
    var t,
        e,
        n = Bn(this._milliseconds) / 1e3,
        i = Bn(this._days),
        s = Bn(this._months);
    e = k((t = k(n / 60)) / 60), n %= 60, t %= 60;
    var o = k(s / 12),
        r = s %= 12,
        a = i,
        l = e,
        c = t,
        h = n ? n.toFixed(3).replace(/\.?0+$/, "") : "",
        u = this.asSeconds();
    if (!u) return "P0D";
    var d = u < 0 ? "-" : "",
        p = Vn(this._months) !== Vn(u) ? "-" : "",
        f = Vn(this._days) !== Vn(u) ? "-" : "",
        m = Vn(this._milliseconds) !== Vn(u) ? "-" : "";
    return d + "P" + (o ? p + o + "Y" : "") + (r ? p + r + "M" : "") + (a ? f + a + "D" : "") + (l || c || h ? "T" : "") + (l ? m + l + "H" : "") + (c ? m + c + "M" : "") + (h ? m + h + "S" : "");
  }

  var Gn = Ne.prototype;
  return Gn.isValid = function () {
    return this._isValid;
  }, Gn.abs = function () {
    var t = this._data;
    return this._milliseconds = _n(this._milliseconds), this._days = _n(this._days), this._months = _n(this._months), t.milliseconds = _n(t.milliseconds), t.seconds = _n(t.seconds), t.minutes = _n(t.minutes), t.hours = _n(t.hours), t.months = _n(t.months), t.years = _n(t.years), this;
  }, Gn.add = function (t, e) {
    return wn(this, t, e, 1);
  }, Gn.subtract = function (t, e) {
    return wn(this, t, e, -1);
  }, Gn.as = function (t) {
    if (!this.isValid()) return NaN;
    var e,
        n,
        i = this._milliseconds;
    if ("month" === (t = N(t)) || "quarter" === t || "year" === t) switch (e = this._days + i / 864e5, n = this._months + kn(e), t) {
      case "month":
        return n;

      case "quarter":
        return n / 3;

      case "year":
        return n / 12;
    } else switch (e = this._days + Math.round(Cn(this._months)), t) {
      case "week":
        return e / 7 + i / 6048e5;

      case "day":
        return e + i / 864e5;

      case "hour":
        return 24 * e + i / 36e5;

      case "minute":
        return 1440 * e + i / 6e4;

      case "second":
        return 86400 * e + i / 1e3;

      case "millisecond":
        return Math.floor(864e5 * e) + i;

      default:
        throw new Error("Unknown unit " + t);
    }
  }, Gn.asMilliseconds = Sn, Gn.asSeconds = Tn, Gn.asMinutes = En, Gn.asHours = Mn, Gn.asDays = An, Gn.asWeeks = On, Gn.asMonths = In, Gn.asQuarters = Nn, Gn.asYears = Pn, Gn.valueOf = function () {
    return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * C(this._months / 12) : NaN;
  }, Gn._bubble = function () {
    var t,
        e,
        n,
        i,
        s,
        o = this._milliseconds,
        r = this._days,
        a = this._months,
        l = this._data;
    return 0 <= o && 0 <= r && 0 <= a || o <= 0 && r <= 0 && a <= 0 || (o += 864e5 * Dn(Cn(a) + r), a = r = 0), l.milliseconds = o % 1e3, t = k(o / 1e3), l.seconds = t % 60, e = k(t / 60), l.minutes = e % 60, n = k(e / 60), l.hours = n % 24, a += s = k(kn(r += k(n / 24))), r -= Dn(Cn(s)), i = k(a / 12), a %= 12, l.days = r, l.months = a, l.years = i, this;
  }, Gn.clone = function () {
    return qe(this);
  }, Gn.get = function (t) {
    return t = N(t), this.isValid() ? this[t + "s"]() : NaN;
  }, Gn.milliseconds = jn, Gn.seconds = Hn, Gn.minutes = Yn, Gn.hours = $n, Gn.days = Rn, Gn.weeks = function () {
    return k(this.days() / 7);
  }, Gn.months = Wn, Gn.years = Un, Gn.humanize = function (t) {
    if (!this.isValid()) return this.localeData().invalidDate();
    var e,
        n,
        i,
        s,
        o,
        r,
        a,
        l,
        c,
        h,
        u,
        d = this.localeData(),
        p = (n = !t, i = d, s = qe(e = this).abs(), o = Fn(s.as("s")), r = Fn(s.as("m")), a = Fn(s.as("h")), l = Fn(s.as("d")), c = Fn(s.as("M")), h = Fn(s.as("y")), (u = o <= qn.ss && ["s", o] || o < qn.s && ["ss", o] || r <= 1 && ["m"] || r < qn.m && ["mm", r] || a <= 1 && ["h"] || a < qn.h && ["hh", a] || l <= 1 && ["d"] || l < qn.d && ["dd", l] || c <= 1 && ["M"] || c < qn.M && ["MM", c] || h <= 1 && ["y"] || ["yy", h])[2] = n, u[3] = 0 < +e, u[4] = i, function (t, e, n, i, s) {
      return s.relativeTime(e || 1, !!n, t, i);
    }.apply(null, u));
    return t && (p = d.pastFuture(+this, p)), d.postformat(p);
  }, Gn.toISOString = zn, Gn.toString = zn, Gn.toJSON = zn, Gn.locale = Xe, Gn.localeData = tn, Gn.toIsoString = n("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", zn), Gn.lang = Je, U("X", 0, 0, "unix"), U("x", 0, 0, "valueOf"), lt("x", it), lt("X", /[+-]?\d+(\.\d{1,3})?/), dt("X", function (t, e, n) {
    n._d = new Date(1e3 * parseFloat(t, 10));
  }), dt("x", function (t, e, n) {
    n._d = new Date(C(t));
  }), d.version = "2.24.0", t = Ee, d.fn = fn, d.min = function () {
    return Oe("isBefore", [].slice.call(arguments, 0));
  }, d.max = function () {
    return Oe("isAfter", [].slice.call(arguments, 0));
  }, d.now = function () {
    return Date.now ? Date.now() : +new Date();
  }, d.utc = g, d.unix = function (t) {
    return Ee(1e3 * t);
  }, d.months = function (t, e) {
    return yn(t, e, "months");
  }, d.isDate = u, d.locale = le, d.invalid = b, d.duration = qe, d.isMoment = D, d.weekdays = function (t, e, n) {
    return bn(t, e, n, "weekdays");
  }, d.parseZone = function () {
    return Ee.apply(null, arguments).parseZone();
  }, d.localeData = he, d.isDuration = Pe, d.monthsShort = function (t, e) {
    return yn(t, e, "monthsShort");
  }, d.weekdaysMin = function (t, e, n) {
    return bn(t, e, n, "weekdaysMin");
  }, d.defineLocale = ce, d.updateLocale = function (t, e) {
    if (null != e) {
      var n,
          i,
          s = ie;
      null != (i = ae(t)) && (s = i._config), (n = new A(e = M(s, e))).parentLocale = se[t], se[t] = n, le(t);
    } else null != se[t] && (null != se[t].parentLocale ? se[t] = se[t].parentLocale : null != se[t] && delete se[t]);

    return se[t];
  }, d.locales = function () {
    return i(se);
  }, d.weekdaysShort = function (t, e, n) {
    return bn(t, e, n, "weekdaysShort");
  }, d.normalizeUnits = N, d.relativeTimeRounding = function (t) {
    return void 0 === t ? Fn : "function" == typeof t && (Fn = t, !0);
  }, d.relativeTimeThreshold = function (t, e) {
    return void 0 !== qn[t] && (void 0 === e ? qn[t] : (qn[t] = e, "s" === t && (qn.ss = e - 1), !0));
  }, d.calendarFormat = function (t, e) {
    var n = t.diff(e, "days", !0);
    return n < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse";
  }, d.prototype = fn, d.HTML5_FMT = {
    DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
    DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
    DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
    DATE: "YYYY-MM-DD",
    TIME: "HH:mm",
    TIME_SECONDS: "HH:mm:ss",
    TIME_MS: "HH:mm:ss.SSS",
    WEEK: "GGGG-[W]WW",
    MONTH: "YYYY-MM"
  }, d;
}), function (E) {
  E.fn.extend({
    slimScroll: function slimScroll(S) {
      var T = E.extend({
        width: "auto",
        height: "250px",
        size: "7px",
        color: "#000",
        position: "right",
        distance: "1px",
        start: "top",
        opacity: .4,
        alwaysVisible: !1,
        disableFadeOut: !1,
        railVisible: !1,
        railColor: "#333",
        railOpacity: .2,
        railDraggable: !0,
        railClass: "slimScrollRail",
        barClass: "slimScrollBar",
        wrapperClass: "slimScrollDiv",
        allowPageScroll: !1,
        wheelStep: 20,
        touchScrollStep: 200,
        borderRadius: "7px",
        railBorderRadius: "7px"
      }, S);
      return this.each(function () {
        var i,
            e,
            s,
            n,
            o,
            r,
            a,
            l,
            c = "<div></div>",
            h = 30,
            u = !1,
            d = E(this);

        if (d.parent().hasClass(T.wrapperClass)) {
          var p = d.scrollTop();

          if (b = d.siblings("." + T.barClass), y = d.siblings("." + T.railClass), k(), E.isPlainObject(S)) {
            if ("height" in S && "auto" == S.height) {
              d.parent().css("height", "auto"), d.css("height", "auto");
              var f = d.parent().parent().height();
              d.parent().css("height", f), d.css("height", f);
            } else if ("height" in S) {
              var m = S.height;
              d.parent().css("height", m), d.css("height", m);
            }

            if ("scrollTo" in S) p = parseInt(T.scrollTo);else if ("scrollBy" in S) p += parseInt(T.scrollBy);else if ("destroy" in S) return b.remove(), y.remove(), void d.unwrap();
            D(p, !1, !0);
          }
        } else if (!(E.isPlainObject(S) && "destroy" in S)) {
          T.height = "auto" == T.height ? d.parent().height() : T.height;
          var g = E(c).addClass(T.wrapperClass).css({
            position: "relative",
            overflow: "hidden",
            width: T.width,
            height: T.height
          });
          d.css({
            overflow: "hidden",
            width: T.width,
            height: T.height
          });

          var v,
              y = E(c).addClass(T.railClass).css({
            width: T.size,
            height: "100%",
            position: "absolute",
            top: 0,
            display: T.alwaysVisible && T.railVisible ? "block" : "none",
            "border-radius": T.railBorderRadius,
            background: T.railColor,
            opacity: T.railOpacity,
            zIndex: 90
          }),
              b = E(c).addClass(T.barClass).css({
            background: T.color,
            width: T.size,
            position: "absolute",
            top: 0,
            opacity: T.opacity,
            display: T.alwaysVisible ? "block" : "none",
            "border-radius": T.borderRadius,
            BorderRadius: T.borderRadius,
            MozBorderRadius: T.borderRadius,
            WebkitBorderRadius: T.borderRadius,
            zIndex: 99
          }),
              _ = "right" == T.position ? {
            right: T.distance
          } : {
            left: T.distance
          };

          y.css(_), b.css(_), d.wrap(g), d.parent().append(b), d.parent().append(y), T.railDraggable && b.bind("mousedown", function (e) {
            var n = E(document);
            return s = !0, t = parseFloat(b.css("top")), pageY = e.pageY, n.bind("mousemove.slimscroll", function (e) {
              currTop = t + e.pageY - pageY, b.css("top", currTop), D(0, b.position().top, !1);
            }), n.bind("mouseup.slimscroll", function (t) {
              s = !1, x(), n.unbind(".slimscroll");
            }), !1;
          }).bind("selectstart.slimscroll", function (t) {
            return t.stopPropagation(), t.preventDefault(), !1;
          }), y.hover(function () {
            C();
          }, function () {
            x();
          }), b.hover(function () {
            e = !0;
          }, function () {
            e = !1;
          }), d.hover(function () {
            i = !0, C(), x();
          }, function () {
            i = !1, x();
          }), d.bind("touchstart", function (t, e) {
            t.originalEvent.touches.length && (o = t.originalEvent.touches[0].pageY);
          }), d.bind("touchmove", function (t) {
            (u || t.originalEvent.preventDefault(), t.originalEvent.touches.length) && (D((o - t.originalEvent.touches[0].pageY) / T.touchScrollStep, !0), o = t.originalEvent.touches[0].pageY);
          }), k(), "bottom" === T.start ? (b.css({
            top: d.outerHeight() - b.outerHeight()
          }), D(0, !0)) : "top" !== T.start && (D(E(T.start).position().top, null, !0), T.alwaysVisible || b.hide()), v = this, window.addEventListener ? (v.addEventListener("DOMMouseScroll", w, !1), v.addEventListener("mousewheel", w, !1)) : document.attachEvent("onmousewheel", w);
        }

        function w(t) {
          if (i) {
            var e = 0;
            (t = t || window.event).wheelDelta && (e = -t.wheelDelta / 120), t.detail && (e = t.detail / 3);
            var n = t.target || t.srcTarget || t.srcElement;
            E(n).closest("." + T.wrapperClass).is(d.parent()) && D(e, !0), t.preventDefault && !u && t.preventDefault(), u || (t.returnValue = !1);
          }
        }

        function D(t, e, n) {
          u = !1;
          var i = t,
              s = d.outerHeight() - b.outerHeight();

          if (e && (i = parseInt(b.css("top")) + t * parseInt(T.wheelStep) / 100 * b.outerHeight(), i = Math.min(Math.max(i, 0), s), i = 0 < t ? Math.ceil(i) : Math.floor(i), b.css({
            top: i + "px"
          })), i = (a = parseInt(b.css("top")) / (d.outerHeight() - b.outerHeight())) * (d[0].scrollHeight - d.outerHeight()), n) {
            var o = (i = t) / d[0].scrollHeight * d.outerHeight();
            o = Math.min(Math.max(o, 0), s), b.css({
              top: o + "px"
            });
          }

          d.scrollTop(i), d.trigger("slimscrolling", ~~i), C(), x();
        }

        function k() {
          r = Math.max(d.outerHeight() / d[0].scrollHeight * d.outerHeight(), h), b.css({
            height: r + "px"
          });
          var t = r == d.outerHeight() ? "none" : "block";
          b.css({
            display: t
          });
        }

        function C() {
          if (k(), clearTimeout(n), a == ~~a) {
            if (u = T.allowPageScroll, l != a) {
              var t = 0 == ~~a ? "top" : "bottom";
              d.trigger("slimscroll", t);
            }
          } else u = !1;

          l = a, r >= d.outerHeight() ? u = !0 : (b.stop(!0, !0).fadeIn("fast"), T.railVisible && y.stop(!0, !0).fadeIn("fast"));
        }

        function x() {
          T.alwaysVisible || (n = setTimeout(function () {
            T.disableFadeOut && i || e || s || (b.fadeOut("slow"), y.fadeOut("slow"));
          }, 1e3));
        }
      }), this;
    }
  }), E.fn.extend({
    slimscroll: E.fn.slimScroll
  });
}(jQuery), function (t, n) {
  if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [!(function webpackMissingModule() { var e = new Error("Cannot find module 'moment'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), __WEBPACK_LOCAL_MODULE_0__], __WEBPACK_AMD_DEFINE_RESULT__ = (function (t, e) {
    return e.fn || (e.fn = {}), "function" != typeof t && t["default"] && (t = t["default"]), n(t, e);
  }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else { var i, e; }
}(this, function (Y, $) {
  var i = function i(t, e, n) {
    if (this.parentEl = "body", this.element = $(t), this.startDate = Y().startOf("day"), this.endDate = Y().endOf("day"), this.minDate = !1, this.maxDate = !1, this.maxSpan = !1, this.autoApply = !1, this.singleDatePicker = !1, this.showDropdowns = !1, this.minYear = Y().subtract(100, "year").format("YYYY"), this.maxYear = Y().add(100, "year").format("YYYY"), this.showWeekNumbers = !1, this.showISOWeekNumbers = !1, this.showCustomRangeLabel = !0, this.timePicker = !1, this.timePicker24Hour = !1, this.timePickerIncrement = 1, this.timePickerSeconds = !1, this.linkedCalendars = !0, this.autoUpdateInput = !0, this.alwaysShowCalendars = !1, this.ranges = {}, this.opens = "right", this.element.hasClass("pull-right") && (this.opens = "left"), this.drops = "down", this.element.hasClass("dropup") && (this.drops = "up"), this.buttonClasses = "btn btn-sm", this.applyButtonClasses = "btn-primary", this.cancelButtonClasses = "btn-default", this.locale = {
      direction: "ltr",
      format: Y.localeData().longDateFormat("L"),
      separator: " - ",
      applyLabel: "Apply",
      cancelLabel: "Cancel",
      weekLabel: "W",
      customRangeLabel: "Custom Range",
      daysOfWeek: Y.weekdaysMin(),
      monthNames: Y.monthsShort(),
      firstDay: Y.localeData().firstDayOfWeek()
    }, this.callback = function () {}, this.isShowing = !1, this.leftCalendar = {}, this.rightCalendar = {}, "object" == typeof e && null !== e || (e = {}), "string" == typeof (e = $.extend(this.element.data(), e)).template || e.template instanceof $ || (e.template = '<div class="daterangepicker"><div class="ranges"></div><div class="drp-calendar left"><div class="calendar-table"></div><div class="calendar-time"></div></div><div class="drp-calendar right"><div class="calendar-table"></div><div class="calendar-time"></div></div><div class="drp-buttons"><span class="drp-selected"></span><button class="cancelBtn" type="button"></button><button class="applyBtn" disabled="disabled" type="button"></button> </div></div>'), this.parentEl = e.parentEl && $(e.parentEl).length ? $(e.parentEl) : $(this.parentEl), this.container = $(e.template).appendTo(this.parentEl), "object" == typeof e.locale && ("string" == typeof e.locale.direction && (this.locale.direction = e.locale.direction), "string" == typeof e.locale.format && (this.locale.format = e.locale.format), "string" == typeof e.locale.separator && (this.locale.separator = e.locale.separator), "object" == typeof e.locale.daysOfWeek && (this.locale.daysOfWeek = e.locale.daysOfWeek.slice()), "object" == typeof e.locale.monthNames && (this.locale.monthNames = e.locale.monthNames.slice()), "number" == typeof e.locale.firstDay && (this.locale.firstDay = e.locale.firstDay), "string" == typeof e.locale.applyLabel && (this.locale.applyLabel = e.locale.applyLabel), "string" == typeof e.locale.cancelLabel && (this.locale.cancelLabel = e.locale.cancelLabel), "string" == typeof e.locale.weekLabel && (this.locale.weekLabel = e.locale.weekLabel), "string" == typeof e.locale.customRangeLabel)) {
      (u = document.createElement("textarea")).innerHTML = e.locale.customRangeLabel;
      var i = u.value;
      this.locale.customRangeLabel = i;
    }

    if (this.container.addClass(this.locale.direction), "string" == typeof e.startDate && (this.startDate = Y(e.startDate, this.locale.format)), "string" == typeof e.endDate && (this.endDate = Y(e.endDate, this.locale.format)), "string" == typeof e.minDate && (this.minDate = Y(e.minDate, this.locale.format)), "string" == typeof e.maxDate && (this.maxDate = Y(e.maxDate, this.locale.format)), "object" == typeof e.startDate && (this.startDate = Y(e.startDate)), "object" == typeof e.endDate && (this.endDate = Y(e.endDate)), "object" == typeof e.minDate && (this.minDate = Y(e.minDate)), "object" == typeof e.maxDate && (this.maxDate = Y(e.maxDate)), this.minDate && this.startDate.isBefore(this.minDate) && (this.startDate = this.minDate.clone()), this.maxDate && this.endDate.isAfter(this.maxDate) && (this.endDate = this.maxDate.clone()), "string" == typeof e.applyButtonClasses && (this.applyButtonClasses = e.applyButtonClasses), "string" == typeof e.applyClass && (this.applyButtonClasses = e.applyClass), "string" == typeof e.cancelButtonClasses && (this.cancelButtonClasses = e.cancelButtonClasses), "string" == typeof e.cancelClass && (this.cancelButtonClasses = e.cancelClass), "object" == typeof e.maxSpan && (this.maxSpan = e.maxSpan), "object" == typeof e.dateLimit && (this.maxSpan = e.dateLimit), "string" == typeof e.opens && (this.opens = e.opens), "string" == typeof e.drops && (this.drops = e.drops), "boolean" == typeof e.showWeekNumbers && (this.showWeekNumbers = e.showWeekNumbers), "boolean" == typeof e.showISOWeekNumbers && (this.showISOWeekNumbers = e.showISOWeekNumbers), "string" == typeof e.buttonClasses && (this.buttonClasses = e.buttonClasses), "object" == typeof e.buttonClasses && (this.buttonClasses = e.buttonClasses.join(" ")), "boolean" == typeof e.showDropdowns && (this.showDropdowns = e.showDropdowns), "number" == typeof e.minYear && (this.minYear = e.minYear), "number" == typeof e.maxYear && (this.maxYear = e.maxYear), "boolean" == typeof e.showCustomRangeLabel && (this.showCustomRangeLabel = e.showCustomRangeLabel), "boolean" == typeof e.singleDatePicker && (this.singleDatePicker = e.singleDatePicker, this.singleDatePicker && (this.endDate = this.startDate.clone())), "boolean" == typeof e.timePicker && (this.timePicker = e.timePicker), "boolean" == typeof e.timePickerSeconds && (this.timePickerSeconds = e.timePickerSeconds), "number" == typeof e.timePickerIncrement && (this.timePickerIncrement = e.timePickerIncrement), "boolean" == typeof e.timePicker24Hour && (this.timePicker24Hour = e.timePicker24Hour), "boolean" == typeof e.autoApply && (this.autoApply = e.autoApply), "boolean" == typeof e.autoUpdateInput && (this.autoUpdateInput = e.autoUpdateInput), "boolean" == typeof e.linkedCalendars && (this.linkedCalendars = e.linkedCalendars), "function" == typeof e.isInvalidDate && (this.isInvalidDate = e.isInvalidDate), "function" == typeof e.isCustomDate && (this.isCustomDate = e.isCustomDate), "boolean" == typeof e.alwaysShowCalendars && (this.alwaysShowCalendars = e.alwaysShowCalendars), 0 != this.locale.firstDay) for (var s = this.locale.firstDay; 0 < s;) {
      this.locale.daysOfWeek.push(this.locale.daysOfWeek.shift()), s--;
    }
    var o, r, a;

    if (void 0 === e.startDate && void 0 === e.endDate && $(this.element).is(":text")) {
      var l = $(this.element).val(),
          c = l.split(this.locale.separator);
      o = r = null, 2 == c.length ? (o = Y(c[0], this.locale.format), r = Y(c[1], this.locale.format)) : this.singleDatePicker && "" !== l && (o = Y(l, this.locale.format), r = Y(l, this.locale.format)), null !== o && null !== r && (this.setStartDate(o), this.setEndDate(r));
    }

    if ("object" == typeof e.ranges) {
      for (a in e.ranges) {
        o = "string" == typeof e.ranges[a][0] ? Y(e.ranges[a][0], this.locale.format) : Y(e.ranges[a][0]), r = "string" == typeof e.ranges[a][1] ? Y(e.ranges[a][1], this.locale.format) : Y(e.ranges[a][1]), this.minDate && o.isBefore(this.minDate) && (o = this.minDate.clone());
        var h = this.maxDate;

        if (this.maxSpan && h && o.clone().add(this.maxSpan).isAfter(h) && (h = o.clone().add(this.maxSpan)), h && r.isAfter(h) && (r = h.clone()), !(this.minDate && r.isBefore(this.minDate, this.timepicker ? "minute" : "day") || h && o.isAfter(h, this.timepicker ? "minute" : "day"))) {
          var u;
          (u = document.createElement("textarea")).innerHTML = a;
          i = u.value;
          this.ranges[i] = [o, r];
        }
      }

      var d = "<ul>";

      for (a in this.ranges) {
        d += '<li data-range-key="' + a + '">' + a + "</li>";
      }

      this.showCustomRangeLabel && (d += '<li data-range-key="' + this.locale.customRangeLabel + '">' + this.locale.customRangeLabel + "</li>"), d += "</ul>", this.container.find(".ranges").prepend(d);
    }

    "function" == typeof n && (this.callback = n), this.timePicker || (this.startDate = this.startDate.startOf("day"), this.endDate = this.endDate.endOf("day"), this.container.find(".calendar-time").hide()), this.timePicker && this.autoApply && (this.autoApply = !1), this.autoApply && this.container.addClass("auto-apply"), "object" == typeof e.ranges && this.container.addClass("show-ranges"), this.singleDatePicker && (this.container.addClass("single"), this.container.find(".drp-calendar.left").addClass("single"), this.container.find(".drp-calendar.left").show(), this.container.find(".drp-calendar.right").hide(), this.timePicker || this.container.addClass("auto-apply")), (void 0 === e.ranges && !this.singleDatePicker || this.alwaysShowCalendars) && this.container.addClass("show-calendar"), this.container.addClass("opens" + this.opens), this.container.find(".applyBtn, .cancelBtn").addClass(this.buttonClasses), this.applyButtonClasses.length && this.container.find(".applyBtn").addClass(this.applyButtonClasses), this.cancelButtonClasses.length && this.container.find(".cancelBtn").addClass(this.cancelButtonClasses), this.container.find(".applyBtn").html(this.locale.applyLabel), this.container.find(".cancelBtn").html(this.locale.cancelLabel), this.container.find(".drp-calendar").on("click.daterangepicker", ".prev", $.proxy(this.clickPrev, this)).on("click.daterangepicker", ".next", $.proxy(this.clickNext, this)).on("mousedown.daterangepicker", "td.available", $.proxy(this.clickDate, this)).on("mouseenter.daterangepicker", "td.available", $.proxy(this.hoverDate, this)).on("change.daterangepicker", "select.yearselect", $.proxy(this.monthOrYearChanged, this)).on("change.daterangepicker", "select.monthselect", $.proxy(this.monthOrYearChanged, this)).on("change.daterangepicker", "select.hourselect,select.minuteselect,select.secondselect,select.ampmselect", $.proxy(this.timeChanged, this)), this.container.find(".ranges").on("click.daterangepicker", "li", $.proxy(this.clickRange, this)), this.container.find(".drp-buttons").on("click.daterangepicker", "button.applyBtn", $.proxy(this.clickApply, this)).on("click.daterangepicker", "button.cancelBtn", $.proxy(this.clickCancel, this)), this.element.is("input") || this.element.is("button") ? this.element.on({
      "click.daterangepicker": $.proxy(this.show, this),
      "focus.daterangepicker": $.proxy(this.show, this),
      "keyup.daterangepicker": $.proxy(this.elementChanged, this),
      "keydown.daterangepicker": $.proxy(this.keydown, this)
    }) : (this.element.on("click.daterangepicker", $.proxy(this.toggle, this)), this.element.on("keydown.daterangepicker", $.proxy(this.toggle, this))), this.updateElement();
  };

  return i.prototype = {
    constructor: i,
    setStartDate: function setStartDate(t) {
      "string" == typeof t && (this.startDate = Y(t, this.locale.format)), "object" == typeof t && (this.startDate = Y(t)), this.timePicker || (this.startDate = this.startDate.startOf("day")), this.timePicker && this.timePickerIncrement && this.startDate.minute(Math.round(this.startDate.minute() / this.timePickerIncrement) * this.timePickerIncrement), this.minDate && this.startDate.isBefore(this.minDate) && (this.startDate = this.minDate.clone(), this.timePicker && this.timePickerIncrement && this.startDate.minute(Math.round(this.startDate.minute() / this.timePickerIncrement) * this.timePickerIncrement)), this.maxDate && this.startDate.isAfter(this.maxDate) && (this.startDate = this.maxDate.clone(), this.timePicker && this.timePickerIncrement && this.startDate.minute(Math.floor(this.startDate.minute() / this.timePickerIncrement) * this.timePickerIncrement)), this.isShowing || this.updateElement(), this.updateMonthsInView();
    },
    setEndDate: function setEndDate(t) {
      "string" == typeof t && (this.endDate = Y(t, this.locale.format)), "object" == typeof t && (this.endDate = Y(t)), this.timePicker || (this.endDate = this.endDate.endOf("day")), this.timePicker && this.timePickerIncrement && this.endDate.minute(Math.round(this.endDate.minute() / this.timePickerIncrement) * this.timePickerIncrement), this.endDate.isBefore(this.startDate) && (this.endDate = this.startDate.clone()), this.maxDate && this.endDate.isAfter(this.maxDate) && (this.endDate = this.maxDate.clone()), this.maxSpan && this.startDate.clone().add(this.maxSpan).isBefore(this.endDate) && (this.endDate = this.startDate.clone().add(this.maxSpan)), this.previousRightTime = this.endDate.clone(), this.container.find(".drp-selected").html(this.startDate.format(this.locale.format) + this.locale.separator + this.endDate.format(this.locale.format)), this.isShowing || this.updateElement(), this.updateMonthsInView();
    },
    isInvalidDate: function isInvalidDate() {
      return !1;
    },
    isCustomDate: function isCustomDate() {
      return !1;
    },
    updateView: function updateView() {
      this.timePicker && (this.renderTimePicker("left"), this.renderTimePicker("right"), this.endDate ? this.container.find(".right .calendar-time select").removeAttr("disabled").removeClass("disabled") : this.container.find(".right .calendar-time select").attr("disabled", "disabled").addClass("disabled")), this.endDate && this.container.find(".drp-selected").html(this.startDate.format(this.locale.format) + this.locale.separator + this.endDate.format(this.locale.format)), this.updateMonthsInView(), this.updateCalendars(), this.updateFormInputs();
    },
    updateMonthsInView: function updateMonthsInView() {
      if (this.endDate) {
        if (!this.singleDatePicker && this.leftCalendar.month && this.rightCalendar.month && (this.startDate.format("YYYY-MM") == this.leftCalendar.month.format("YYYY-MM") || this.startDate.format("YYYY-MM") == this.rightCalendar.month.format("YYYY-MM")) && (this.endDate.format("YYYY-MM") == this.leftCalendar.month.format("YYYY-MM") || this.endDate.format("YYYY-MM") == this.rightCalendar.month.format("YYYY-MM"))) return;
        this.leftCalendar.month = this.startDate.clone().date(2), this.linkedCalendars || this.endDate.month() == this.startDate.month() && this.endDate.year() == this.startDate.year() ? this.rightCalendar.month = this.startDate.clone().date(2).add(1, "month") : this.rightCalendar.month = this.endDate.clone().date(2);
      } else this.leftCalendar.month.format("YYYY-MM") != this.startDate.format("YYYY-MM") && this.rightCalendar.month.format("YYYY-MM") != this.startDate.format("YYYY-MM") && (this.leftCalendar.month = this.startDate.clone().date(2), this.rightCalendar.month = this.startDate.clone().date(2).add(1, "month"));

      this.maxDate && this.linkedCalendars && !this.singleDatePicker && this.rightCalendar.month > this.maxDate && (this.rightCalendar.month = this.maxDate.clone().date(2), this.leftCalendar.month = this.maxDate.clone().date(2).subtract(1, "month"));
    },
    updateCalendars: function updateCalendars() {
      if (this.timePicker) {
        var t, e, n, i;

        if (this.endDate) {
          if (t = parseInt(this.container.find(".left .hourselect").val(), 10), e = parseInt(this.container.find(".left .minuteselect").val(), 10), isNaN(e) && (e = parseInt(this.container.find(".left .minuteselect option:last").val(), 10)), n = this.timePickerSeconds ? parseInt(this.container.find(".left .secondselect").val(), 10) : 0, !this.timePicker24Hour) "PM" === (i = this.container.find(".left .ampmselect").val()) && t < 12 && (t += 12), "AM" === i && 12 === t && (t = 0);
        } else if (t = parseInt(this.container.find(".right .hourselect").val(), 10), e = parseInt(this.container.find(".right .minuteselect").val(), 10), isNaN(e) && (e = parseInt(this.container.find(".right .minuteselect option:last").val(), 10)), n = this.timePickerSeconds ? parseInt(this.container.find(".right .secondselect").val(), 10) : 0, !this.timePicker24Hour) "PM" === (i = this.container.find(".right .ampmselect").val()) && t < 12 && (t += 12), "AM" === i && 12 === t && (t = 0);

        this.leftCalendar.month.hour(t).minute(e).second(n), this.rightCalendar.month.hour(t).minute(e).second(n);
      }

      this.renderCalendar("left"), this.renderCalendar("right"), this.container.find(".ranges li").removeClass("active"), null != this.endDate && this.calculateChosenLabel();
    },
    renderCalendar: function renderCalendar(t) {
      var e,
          n = (e = "left" == t ? this.leftCalendar : this.rightCalendar).month.month(),
          i = e.month.year(),
          s = e.month.hour(),
          o = e.month.minute(),
          r = e.month.second(),
          a = Y([i, n]).daysInMonth(),
          l = Y([i, n, 1]),
          c = Y([i, n, a]),
          h = Y(l).subtract(1, "month").month(),
          u = Y(l).subtract(1, "month").year(),
          d = Y([u, h]).daysInMonth(),
          p = l.day();
      (e = []).firstDay = l, e.lastDay = c;

      for (var f = 0; f < 6; f++) {
        e[f] = [];
      }

      var m = d - p + this.locale.firstDay + 1;
      d < m && (m -= 7), p == this.locale.firstDay && (m = d - 6);

      for (var g = Y([u, h, m, 12, o, r]), v = (f = 0, 0), y = 0; f < 42; f++, v++, g = Y(g).add(24, "hour")) {
        0 < f && v % 7 == 0 && (v = 0, y++), e[y][v] = g.clone().hour(s).minute(o).second(r), g.hour(12), this.minDate && e[y][v].format("YYYY-MM-DD") == this.minDate.format("YYYY-MM-DD") && e[y][v].isBefore(this.minDate) && "left" == t && (e[y][v] = this.minDate.clone()), this.maxDate && e[y][v].format("YYYY-MM-DD") == this.maxDate.format("YYYY-MM-DD") && e[y][v].isAfter(this.maxDate) && "right" == t && (e[y][v] = this.maxDate.clone());
      }

      "left" == t ? this.leftCalendar.calendar = e : this.rightCalendar.calendar = e;
      var b = "left" == t ? this.minDate : this.startDate,
          _ = this.maxDate,
          w = ("left" == t ? this.startDate : this.endDate, this.locale.direction, '<table class="table-condensed">');
      w += "<thead>", w += "<tr>", (this.showWeekNumbers || this.showISOWeekNumbers) && (w += "<th></th>"), b && !b.isBefore(e.firstDay) || this.linkedCalendars && "left" != t ? w += "<th></th>" : w += '<th class="prev available"><span></span></th>';
      var D = this.locale.monthNames[e[1][1].month()] + e[1][1].format(" YYYY");

      if (this.showDropdowns) {
        for (var k = e[1][1].month(), C = e[1][1].year(), x = _ && _.year() || this.maxYear, S = b && b.year() || this.minYear, T = C == S, E = C == x, M = '<select class="monthselect">', A = 0; A < 12; A++) {
          (!T || b && A >= b.month()) && (!E || _ && A <= _.month()) ? M += "<option value='" + A + "'" + (A === k ? " selected='selected'" : "") + ">" + this.locale.monthNames[A] + "</option>" : M += "<option value='" + A + "'" + (A === k ? " selected='selected'" : "") + " disabled='disabled'>" + this.locale.monthNames[A] + "</option>";
        }

        M += "</select>";

        for (var O = '<select class="yearselect">', I = S; I <= x; I++) {
          O += '<option value="' + I + '"' + (I === C ? ' selected="selected"' : "") + ">" + I + "</option>";
        }

        D = M + (O += "</select>");
      }

      if (w += '<th colspan="5" class="month">' + D + "</th>", _ && !_.isAfter(e.lastDay) || this.linkedCalendars && "right" != t && !this.singleDatePicker ? w += "<th></th>" : w += '<th class="next available"><span></span></th>', w += "</tr>", w += "<tr>", (this.showWeekNumbers || this.showISOWeekNumbers) && (w += '<th class="week">' + this.locale.weekLabel + "</th>"), $.each(this.locale.daysOfWeek, function (t, e) {
        w += "<th>" + e + "</th>";
      }), w += "</tr>", w += "</thead>", w += "<tbody>", null == this.endDate && this.maxSpan) {
        var N = this.startDate.clone().add(this.maxSpan).endOf("day");
        _ && !N.isBefore(_) || (_ = N);
      }

      for (y = 0; y < 6; y++) {
        w += "<tr>", this.showWeekNumbers ? w += '<td class="week">' + e[y][0].week() + "</td>" : this.showISOWeekNumbers && (w += '<td class="week">' + e[y][0].isoWeek() + "</td>");

        for (v = 0; v < 7; v++) {
          var P = [];
          e[y][v].isSame(new Date(), "day") && P.push("today"), 5 < e[y][v].isoWeekday() && P.push("weekend"), e[y][v].month() != e[1][1].month() && P.push("off", "ends"), this.minDate && e[y][v].isBefore(this.minDate, "day") && P.push("off", "disabled"), _ && e[y][v].isAfter(_, "day") && P.push("off", "disabled"), this.isInvalidDate(e[y][v]) && P.push("off", "disabled"), e[y][v].format("YYYY-MM-DD") == this.startDate.format("YYYY-MM-DD") && P.push("active", "start-date"), null != this.endDate && e[y][v].format("YYYY-MM-DD") == this.endDate.format("YYYY-MM-DD") && P.push("active", "end-date"), null != this.endDate && e[y][v] > this.startDate && e[y][v] < this.endDate && P.push("in-range");
          var L = this.isCustomDate(e[y][v]);
          !1 !== L && ("string" == typeof L ? P.push(L) : Array.prototype.push.apply(P, L));
          var j = "",
              H = !1;

          for (f = 0; f < P.length; f++) {
            j += P[f] + " ", "disabled" == P[f] && (H = !0);
          }

          H || (j += "available"), w += '<td class="' + j.replace(/^\s+|\s+$/g, "") + '" data-title="r' + y + "c" + v + '">' + e[y][v].date() + "</td>";
        }

        w += "</tr>";
      }

      w += "</tbody>", w += "</table>", this.container.find(".drp-calendar." + t + " .calendar-table").html(w);
    },
    renderTimePicker: function renderTimePicker(t) {
      if ("right" != t || this.endDate) {
        var e,
            n,
            i,
            s = this.maxDate;
        if (!this.maxSpan || this.maxDate && !this.startDate.clone().add(this.maxSpan).isBefore(this.maxDate) || (s = this.startDate.clone().add(this.maxSpan)), "left" == t) n = this.startDate.clone(), i = this.minDate;else if ("right" == t) {
          n = this.endDate.clone(), i = this.startDate;
          var o = this.container.find(".drp-calendar.right .calendar-time");

          if ("" != o.html() && (n.hour(isNaN(n.hour()) ? o.find(".hourselect option:selected").val() : n.hour()), n.minute(isNaN(n.minute()) ? o.find(".minuteselect option:selected").val() : n.minute()), n.second(isNaN(n.second()) ? o.find(".secondselect option:selected").val() : n.second()), !this.timePicker24Hour)) {
            var r = o.find(".ampmselect option:selected").val();
            "PM" === r && n.hour() < 12 && n.hour(n.hour() + 12), "AM" === r && 12 === n.hour() && n.hour(0);
          }

          n.isBefore(this.startDate) && (n = this.startDate.clone()), s && n.isAfter(s) && (n = s.clone());
        }
        e = '<select class="hourselect">';

        for (var a = this.timePicker24Hour ? 0 : 1, l = this.timePicker24Hour ? 23 : 12, c = a; c <= l; c++) {
          var h = c;
          this.timePicker24Hour || (h = 12 <= n.hour() ? 12 == c ? 12 : c + 12 : 12 == c ? 0 : c);
          var u = n.clone().hour(h),
              d = !1;
          i && u.minute(59).isBefore(i) && (d = !0), s && u.minute(0).isAfter(s) && (d = !0), h != n.hour() || d ? e += d ? '<option value="' + c + '" disabled="disabled" class="disabled">' + c + "</option>" : '<option value="' + c + '">' + c + "</option>" : e += '<option value="' + c + '" selected="selected">' + c + "</option>";
        }

        e += "</select> ", e += ': <select class="minuteselect">';

        for (c = 0; c < 60; c += this.timePickerIncrement) {
          var p = c < 10 ? "0" + c : c;
          u = n.clone().minute(c), d = !1;
          i && u.second(59).isBefore(i) && (d = !0), s && u.second(0).isAfter(s) && (d = !0), n.minute() != c || d ? e += d ? '<option value="' + c + '" disabled="disabled" class="disabled">' + p + "</option>" : '<option value="' + c + '">' + p + "</option>" : e += '<option value="' + c + '" selected="selected">' + p + "</option>";
        }

        if (e += "</select> ", this.timePickerSeconds) {
          e += ': <select class="secondselect">';

          for (c = 0; c < 60; c++) {
            p = c < 10 ? "0" + c : c, u = n.clone().second(c), d = !1;
            i && u.isBefore(i) && (d = !0), s && u.isAfter(s) && (d = !0), n.second() != c || d ? e += d ? '<option value="' + c + '" disabled="disabled" class="disabled">' + p + "</option>" : '<option value="' + c + '">' + p + "</option>" : e += '<option value="' + c + '" selected="selected">' + p + "</option>";
          }

          e += "</select> ";
        }

        if (!this.timePicker24Hour) {
          e += '<select class="ampmselect">';
          var f = "",
              m = "";
          i && n.clone().hour(12).minute(0).second(0).isBefore(i) && (f = ' disabled="disabled" class="disabled"'), s && n.clone().hour(0).minute(0).second(0).isAfter(s) && (m = ' disabled="disabled" class="disabled"'), 12 <= n.hour() ? e += '<option value="AM"' + f + '>AM</option><option value="PM" selected="selected"' + m + ">PM</option>" : e += '<option value="AM" selected="selected"' + f + '>AM</option><option value="PM"' + m + ">PM</option>", e += "</select>";
        }

        this.container.find(".drp-calendar." + t + " .calendar-time").html(e);
      }
    },
    updateFormInputs: function updateFormInputs() {
      this.singleDatePicker || this.endDate && (this.startDate.isBefore(this.endDate) || this.startDate.isSame(this.endDate)) ? this.container.find("button.applyBtn").removeAttr("disabled") : this.container.find("button.applyBtn").attr("disabled", "disabled");
    },
    move: function move() {
      var t,
          e = {
        top: 0,
        left: 0
      },
          n = $(window).width();
      this.parentEl.is("body") || (e = {
        top: this.parentEl.offset().top - this.parentEl.scrollTop(),
        left: this.parentEl.offset().left - this.parentEl.scrollLeft()
      }, n = this.parentEl[0].clientWidth + this.parentEl.offset().left), t = "up" == this.drops ? this.element.offset().top - this.container.outerHeight() - e.top : this.element.offset().top + this.element.outerHeight() - e.top, this.container.css({
        top: 0,
        left: 0,
        right: "auto"
      });
      var i = this.container.outerWidth();

      if (this.container["up" == this.drops ? "addClass" : "removeClass"]("drop-up"), "left" == this.opens) {
        var s = n - this.element.offset().left - this.element.outerWidth();
        i + s > $(window).width() ? this.container.css({
          top: t,
          right: "auto",
          left: 9
        }) : this.container.css({
          top: t,
          right: s,
          left: "auto"
        });
      } else if ("center" == this.opens) {
        (o = this.element.offset().left - e.left + this.element.outerWidth() / 2 - i / 2) < 0 ? this.container.css({
          top: t,
          right: "auto",
          left: 9
        }) : o + i > $(window).width() ? this.container.css({
          top: t,
          left: "auto",
          right: 0
        }) : this.container.css({
          top: t,
          left: o,
          right: "auto"
        });
      } else {
        var o;
        (o = this.element.offset().left - e.left) + i > $(window).width() ? this.container.css({
          top: t,
          left: "auto",
          right: 0
        }) : this.container.css({
          top: t,
          left: o,
          right: "auto"
        });
      }
    },
    show: function show(t) {
      this.isShowing || (this._outsideClickProxy = $.proxy(function (t) {
        this.outsideClick(t);
      }, this), $(document).on("mousedown.daterangepicker", this._outsideClickProxy).on("touchend.daterangepicker", this._outsideClickProxy).on("click.daterangepicker", "[data-toggle=dropdown]", this._outsideClickProxy).on("focusin.daterangepicker", this._outsideClickProxy), $(window).on("resize.daterangepicker", $.proxy(function (t) {
        this.move(t);
      }, this)), this.oldStartDate = this.startDate.clone(), this.oldEndDate = this.endDate.clone(), this.previousRightTime = this.endDate.clone(), this.updateView(), this.container.show(), this.move(), this.element.trigger("show.daterangepicker", this), this.isShowing = !0);
    },
    hide: function hide(t) {
      this.isShowing && (this.endDate || (this.startDate = this.oldStartDate.clone(), this.endDate = this.oldEndDate.clone()), this.startDate.isSame(this.oldStartDate) && this.endDate.isSame(this.oldEndDate) || this.callback(this.startDate.clone(), this.endDate.clone(), this.chosenLabel), this.updateElement(), $(document).off(".daterangepicker"), $(window).off(".daterangepicker"), this.container.hide(), this.element.trigger("hide.daterangepicker", this), this.isShowing = !1);
    },
    toggle: function toggle(t) {
      this.isShowing ? this.hide() : this.show();
    },
    outsideClick: function outsideClick(t) {
      var e = $(t.target);
      "focusin" == t.type || e.closest(this.element).length || e.closest(this.container).length || e.closest(".calendar-table").length || (this.hide(), this.element.trigger("outsideClick.daterangepicker", this));
    },
    showCalendars: function showCalendars() {
      this.container.addClass("show-calendar"), this.move(), this.element.trigger("showCalendar.daterangepicker", this);
    },
    hideCalendars: function hideCalendars() {
      this.container.removeClass("show-calendar"), this.element.trigger("hideCalendar.daterangepicker", this);
    },
    clickRange: function clickRange(t) {
      var e = t.target.getAttribute("data-range-key");
      if ((this.chosenLabel = e) == this.locale.customRangeLabel) this.showCalendars();else {
        var n = this.ranges[e];
        this.startDate = n[0], this.endDate = n[1], this.timePicker || (this.startDate.startOf("day"), this.endDate.endOf("day")), this.alwaysShowCalendars || this.hideCalendars(), this.clickApply();
      }
    },
    clickPrev: function clickPrev(t) {
      $(t.target).parents(".drp-calendar").hasClass("left") ? (this.leftCalendar.month.subtract(1, "month"), this.linkedCalendars && this.rightCalendar.month.subtract(1, "month")) : this.rightCalendar.month.subtract(1, "month"), this.updateCalendars();
    },
    clickNext: function clickNext(t) {
      $(t.target).parents(".drp-calendar").hasClass("left") ? this.leftCalendar.month.add(1, "month") : (this.rightCalendar.month.add(1, "month"), this.linkedCalendars && this.leftCalendar.month.add(1, "month")), this.updateCalendars();
    },
    hoverDate: function hoverDate(t) {
      if ($(t.target).hasClass("available")) {
        var e = $(t.target).attr("data-title"),
            n = e.substr(1, 1),
            i = e.substr(3, 1),
            r = $(t.target).parents(".drp-calendar").hasClass("left") ? this.leftCalendar.calendar[n][i] : this.rightCalendar.calendar[n][i],
            a = this.leftCalendar,
            l = this.rightCalendar,
            c = this.startDate;
        this.endDate || this.container.find(".drp-calendar tbody td").each(function (t, e) {
          if (!$(e).hasClass("week")) {
            var n = $(e).attr("data-title"),
                i = n.substr(1, 1),
                s = n.substr(3, 1),
                o = $(e).parents(".drp-calendar").hasClass("left") ? a.calendar[i][s] : l.calendar[i][s];
            o.isAfter(c) && o.isBefore(r) || o.isSame(r, "day") ? $(e).addClass("in-range") : $(e).removeClass("in-range");
          }
        });
      }
    },
    clickDate: function clickDate(t) {
      if ($(t.target).hasClass("available")) {
        var e = $(t.target).attr("data-title"),
            n = e.substr(1, 1),
            i = e.substr(3, 1),
            s = $(t.target).parents(".drp-calendar").hasClass("left") ? this.leftCalendar.calendar[n][i] : this.rightCalendar.calendar[n][i];

        if (this.endDate || s.isBefore(this.startDate, "day")) {
          if (this.timePicker) {
            var o = parseInt(this.container.find(".left .hourselect").val(), 10);
            if (!this.timePicker24Hour) "PM" === (l = this.container.find(".left .ampmselect").val()) && o < 12 && (o += 12), "AM" === l && 12 === o && (o = 0);
            var r = parseInt(this.container.find(".left .minuteselect").val(), 10);
            isNaN(r) && (r = parseInt(this.container.find(".left .minuteselect option:last").val(), 10));
            var a = this.timePickerSeconds ? parseInt(this.container.find(".left .secondselect").val(), 10) : 0;
            s = s.clone().hour(o).minute(r).second(a);
          }

          this.endDate = null, this.setStartDate(s.clone());
        } else if (!this.endDate && s.isBefore(this.startDate)) this.setEndDate(this.startDate.clone());else {
          if (this.timePicker) {
            var l;
            o = parseInt(this.container.find(".right .hourselect").val(), 10);
            if (!this.timePicker24Hour) "PM" === (l = this.container.find(".right .ampmselect").val()) && o < 12 && (o += 12), "AM" === l && 12 === o && (o = 0);
            r = parseInt(this.container.find(".right .minuteselect").val(), 10);
            isNaN(r) && (r = parseInt(this.container.find(".right .minuteselect option:last").val(), 10));
            a = this.timePickerSeconds ? parseInt(this.container.find(".right .secondselect").val(), 10) : 0;
            s = s.clone().hour(o).minute(r).second(a);
          }

          this.setEndDate(s.clone()), this.autoApply && (this.calculateChosenLabel(), this.clickApply());
        }

        this.singleDatePicker && (this.setEndDate(this.startDate), this.timePicker || this.clickApply()), this.updateView(), t.stopPropagation();
      }
    },
    calculateChosenLabel: function calculateChosenLabel() {
      var t = !0,
          e = 0;

      for (var n in this.ranges) {
        if (this.timePicker) {
          var i = this.timePickerSeconds ? "YYYY-MM-DD HH:mm:ss" : "YYYY-MM-DD HH:mm";

          if (this.startDate.format(i) == this.ranges[n][0].format(i) && this.endDate.format(i) == this.ranges[n][1].format(i)) {
            t = !1, this.chosenLabel = this.container.find(".ranges li:eq(" + e + ")").addClass("active").attr("data-range-key");
            break;
          }
        } else if (this.startDate.format("YYYY-MM-DD") == this.ranges[n][0].format("YYYY-MM-DD") && this.endDate.format("YYYY-MM-DD") == this.ranges[n][1].format("YYYY-MM-DD")) {
          t = !1, this.chosenLabel = this.container.find(".ranges li:eq(" + e + ")").addClass("active").attr("data-range-key");
          break;
        }

        e++;
      }

      t && (this.showCustomRangeLabel ? this.chosenLabel = this.container.find(".ranges li:last").addClass("active").attr("data-range-key") : this.chosenLabel = null, this.showCalendars());
    },
    clickApply: function clickApply(t) {
      this.hide(), this.element.trigger("apply.daterangepicker", this);
    },
    clickCancel: function clickCancel(t) {
      this.startDate = this.oldStartDate, this.endDate = this.oldEndDate, this.hide(), this.element.trigger("cancel.daterangepicker", this);
    },
    monthOrYearChanged: function monthOrYearChanged(t) {
      var e = $(t.target).closest(".drp-calendar").hasClass("left"),
          n = e ? "left" : "right",
          i = this.container.find(".drp-calendar." + n),
          s = parseInt(i.find(".monthselect").val(), 10),
          o = i.find(".yearselect").val();
      e || (o < this.startDate.year() || o == this.startDate.year() && s < this.startDate.month()) && (s = this.startDate.month(), o = this.startDate.year()), this.minDate && (o < this.minDate.year() || o == this.minDate.year() && s < this.minDate.month()) && (s = this.minDate.month(), o = this.minDate.year()), this.maxDate && (o > this.maxDate.year() || o == this.maxDate.year() && s > this.maxDate.month()) && (s = this.maxDate.month(), o = this.maxDate.year()), e ? (this.leftCalendar.month.month(s).year(o), this.linkedCalendars && (this.rightCalendar.month = this.leftCalendar.month.clone().add(1, "month"))) : (this.rightCalendar.month.month(s).year(o), this.linkedCalendars && (this.leftCalendar.month = this.rightCalendar.month.clone().subtract(1, "month"))), this.updateCalendars();
    },
    timeChanged: function timeChanged(t) {
      var e = $(t.target).closest(".drp-calendar"),
          n = e.hasClass("left"),
          i = parseInt(e.find(".hourselect").val(), 10),
          s = parseInt(e.find(".minuteselect").val(), 10);
      isNaN(s) && (s = parseInt(e.find(".minuteselect option:last").val(), 10));
      var o = this.timePickerSeconds ? parseInt(e.find(".secondselect").val(), 10) : 0;

      if (!this.timePicker24Hour) {
        var r = e.find(".ampmselect").val();
        "PM" === r && i < 12 && (i += 12), "AM" === r && 12 === i && (i = 0);
      }

      if (n) {
        var a = this.startDate.clone();
        a.hour(i), a.minute(s), a.second(o), this.setStartDate(a), this.singleDatePicker ? this.endDate = this.startDate.clone() : this.endDate && this.endDate.format("YYYY-MM-DD") == a.format("YYYY-MM-DD") && this.endDate.isBefore(a) && this.setEndDate(a.clone());
      } else if (this.endDate) {
        var l = this.endDate.clone();
        l.hour(i), l.minute(s), l.second(o), this.setEndDate(l);
      }

      this.updateCalendars(), this.updateFormInputs(), this.renderTimePicker("left"), this.renderTimePicker("right");
    },
    elementChanged: function elementChanged() {
      if (this.element.is("input") && this.element.val().length) {
        var t = this.element.val().split(this.locale.separator),
            e = null,
            n = null;
        2 === t.length && (e = Y(t[0], this.locale.format), n = Y(t[1], this.locale.format)), (this.singleDatePicker || null === e || null === n) && (n = e = Y(this.element.val(), this.locale.format)), e.isValid() && n.isValid() && (this.setStartDate(e), this.setEndDate(n), this.updateView());
      }
    },
    keydown: function keydown(t) {
      9 !== t.keyCode && 13 !== t.keyCode || this.hide(), 27 === t.keyCode && (t.preventDefault(), t.stopPropagation(), this.hide());
    },
    updateElement: function updateElement() {
      if (this.element.is("input") && this.autoUpdateInput) {
        var t = this.startDate.format(this.locale.format);
        this.singleDatePicker || (t += this.locale.separator + this.endDate.format(this.locale.format)), t !== this.element.val() && this.element.val(t).trigger("change");
      }
    },
    remove: function remove() {
      this.container.remove(), this.element.off(".daterangepicker"), this.element.removeData();
    }
  }, $.fn.daterangepicker = function (t, e) {
    var n = $.extend(!0, {}, $.fn.daterangepicker.defaultOptions, t);
    return this.each(function () {
      var t = $(this);
      t.data("daterangepicker") && t.data("daterangepicker").remove(), t.data("daterangepicker", new i(t, n, e));
    }), this;
  }, i;
}), function (t, e) {
   true ? module.exports = e(__WEBPACK_LOCAL_MODULE_0__) : undefined;
}(this, function (a) {
  "use strict";

  function o() {
    return (o = Object.assign || function (t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = arguments[e];

        for (var i in n) {
          Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
        }
      }

      return t;
    }).apply(this, arguments);
  }

  var r = function (i) {
    var e = "transitionend",
        s = {
      TRANSITION_END: "mmTransitionEnd",
      triggerTransitionEnd: function triggerTransitionEnd(t) {
        i(t).trigger(e);
      },
      supportsTransitionEnd: function supportsTransitionEnd() {
        return Boolean(e);
      }
    };

    function t(t) {
      var e = this,
          n = !1;
      return i(this).one(s.TRANSITION_END, function () {
        n = !0;
      }), setTimeout(function () {
        n || s.triggerTransitionEnd(e);
      }, t), this;
    }

    return i.fn.mmEmulateTransitionEnd = t, i.event.special[s.TRANSITION_END] = {
      bindType: e,
      delegateType: e,
      handle: function handle(t) {
        if (i(t.target).is(this)) return t.handleObj.handler.apply(this, arguments);
      }
    }, s;
  }(a = a && a.hasOwnProperty("default") ? a["default"] : a),
      t = "metisMenu",
      l = "metisMenu",
      e = "." + l,
      n = a.fn[t],
      c = {
    toggle: !0,
    preventDefault: !0,
    triggerElement: "a",
    parentTrigger: "li",
    subMenu: "ul"
  },
      h = {
    SHOW: "show" + e,
    SHOWN: "shown" + e,
    HIDE: "hide" + e,
    HIDDEN: "hidden" + e,
    CLICK_DATA_API: "click" + e + ".data-api"
  },
      i = "metismenu",
      u = "mm-active",
      d = "mm-show",
      p = "mm-collapse",
      f = "mm-collapsing",
      s = function () {
    function s(t, e) {
      this.element = t, this.config = o({}, c, e), this.transitioning = null, this.init();
    }

    var t = s.prototype;
    return t.init = function () {
      var o = this,
          r = this.config,
          t = a(this.element);
      t.addClass(i), t.find(r.parentTrigger + "." + u).children(r.triggerElement).attr("aria-expanded", "true"), t.find(r.parentTrigger + "." + u).parents(r.parentTrigger).addClass(u), t.find(r.parentTrigger + "." + u).parents(r.parentTrigger).children(r.triggerElement).attr("aria-expanded", "true"), t.find(r.parentTrigger + "." + u).has(r.subMenu).children(r.subMenu).addClass(p + " " + d), t.find(r.parentTrigger).not("." + u).has(r.subMenu).children(r.subMenu).addClass(p), t.find(r.parentTrigger).children(r.triggerElement).on(h.CLICK_DATA_API, function (t) {
        var e = a(this);

        if ("true" !== e.attr("aria-disabled")) {
          r.preventDefault && "#" === e.attr("href") && t.preventDefault();
          var n = e.parent(r.parentTrigger),
              i = n.siblings(r.parentTrigger),
              s = i.children(r.triggerElement);
          n.hasClass(u) ? (e.attr("aria-expanded", "false"), o.removeActive(n)) : (e.attr("aria-expanded", "true"), o.setActive(n), r.toggle && (o.removeActive(i), s.attr("aria-expanded", "false"))), r.onTransitionStart && r.onTransitionStart(t);
        }
      });
    }, t.setActive = function (t) {
      a(t).addClass(u);
      var e = a(t).children(this.config.subMenu);
      0 < e.length && !e.hasClass(d) && this.show(e);
    }, t.removeActive = function (t) {
      a(t).removeClass(u);
      var e = a(t).children(this.config.subMenu + "." + d);
      0 < e.length && this.hide(e);
    }, t.show = function (t) {
      var e = this;

      if (!this.transitioning && !a(t).hasClass(f)) {
        var n = a(t),
            i = a.Event(h.SHOW);

        if (n.trigger(i), !i.isDefaultPrevented()) {
          if (n.parent(this.config.parentTrigger).addClass(u), this.config.toggle) {
            var s = n.parent(this.config.parentTrigger).siblings().children(this.config.subMenu + "." + d);
            this.hide(s);
          }

          n.removeClass(p).addClass(f).height(0), this.setTransitioning(!0);
          n.height(t[0].scrollHeight).one(r.TRANSITION_END, function () {
            e.config && e.element && (n.removeClass(f).addClass(p + " " + d).height(""), e.setTransitioning(!1), n.trigger(h.SHOWN));
          }).mmEmulateTransitionEnd(350);
        }
      }
    }, t.hide = function (t) {
      var e = this;

      if (!this.transitioning && a(t).hasClass(d)) {
        var n = a(t),
            i = a.Event(h.HIDE);

        if (n.trigger(i), !i.isDefaultPrevented()) {
          n.parent(this.config.parentTrigger).removeClass(u), n.height(n.height())[0].offsetHeight, n.addClass(f).removeClass(p).removeClass(d), this.setTransitioning(!0);

          var s = function s() {
            e.config && e.element && (e.transitioning && e.config.onTransitionEnd && e.config.onTransitionEnd(), e.setTransitioning(!1), n.trigger(h.HIDDEN), n.removeClass(f).addClass(p));
          };

          0 === n.height() || "none" === n.css("display") ? s() : n.height(0).one(r.TRANSITION_END, s).mmEmulateTransitionEnd(350);
        }
      }
    }, t.setTransitioning = function (t) {
      this.transitioning = t;
    }, t.dispose = function () {
      a.removeData(this.element, l), a(this.element).find(this.config.parentTrigger).has(this.config.subMenu).children(this.config.triggerElement).off("click"), this.transitioning = null, this.config = null, this.element = null;
    }, s.jQueryInterface = function (i) {
      return this.each(function () {
        var t = a(this),
            e = t.data(l),
            n = o({}, c, t.data(), "object" == typeof i && i ? i : {});

        if (e || (e = new s(this, n), t.data(l, e)), "string" == typeof i) {
          if (void 0 === e[i]) throw new Error('No method named "' + i + '"');
          e[i]();
        }
      });
    }, s;
  }();

  return a.fn[t] = s.jQueryInterface, a.fn[t].Constructor = s, a.fn[t].noConflict = function () {
    return a.fn[t] = n, s.jQueryInterface;
  }, s;
}), "function" != typeof Object.create && (Object.create = function (t) {
  function e() {}

  return e.prototype = t, new e();
}), function (i, e, t, n) {
  "use strict";

  var s = {
    _positionClasses: ["bottom-left", "bottom-right", "top-right", "top-left", "bottom-center", "top-center", "mid-center"],
    _defaultIcons: ["success", "error", "info", "warning"],
    init: function init(t, e) {
      this.prepareOptions(t, i.toast.options), this.process();
    },
    prepareOptions: function prepareOptions(t, e) {
      var n = {};
      "string" == typeof t || t instanceof Array ? n.text = t : n = t, this.options = i.extend({}, e, n);
    },
    process: function process() {
      this.setup(), this.addToDom(), this.position(), this.bindToast(), this.animate();
    },
    setup: function setup() {
      var t = "";

      if (this._toastEl = this._toastEl || i("<div></div>", {
        "class": "jq-toast-single"
      }), t += '<span class="jq-toast-loader"></span>', this.options.allowToastClose && (t += '<span class="close-jq-toast-single">&times;</span>'), this.options.text instanceof Array) {
        this.options.heading && (t += '<h2 class="jq-toast-heading">' + this.options.heading + "</h2>"), t += '<ul class="jq-toast-ul">';

        for (var e = 0; e < this.options.text.length; e++) {
          t += '<li class="jq-toast-li" id="jq-toast-item-' + e + '">' + this.options.text[e] + "</li>";
        }

        t += "</ul>";
      } else this.options.heading && (t += '<h2 class="jq-toast-heading">' + this.options.heading + "</h2>"), t += this.options.text;

      this._toastEl.html(t), !1 !== this.options.bgColor && this._toastEl.css("background-color", this.options.bgColor), !1 !== this.options.textColor && this._toastEl.css("color", this.options.textColor), this.options.textAlign && this._toastEl.css("text-align", this.options.textAlign), !1 !== this.options.icon && (this._toastEl.addClass("jq-has-icon"), -1 !== i.inArray(this.options.icon, this._defaultIcons) && this._toastEl.addClass("jq-icon-" + this.options.icon)), !1 !== this.options["class"] && this._toastEl.addClass(this.options["class"]);
    },
    position: function position() {
      "string" == typeof this.options.position && -1 !== i.inArray(this.options.position, this._positionClasses) ? "bottom-center" === this.options.position ? this._container.css({
        left: i(e).outerWidth() / 2 - this._container.outerWidth() / 2,
        bottom: 20
      }) : "top-center" === this.options.position ? this._container.css({
        left: i(e).outerWidth() / 2 - this._container.outerWidth() / 2,
        top: 20
      }) : "mid-center" === this.options.position ? this._container.css({
        left: i(e).outerWidth() / 2 - this._container.outerWidth() / 2,
        top: i(e).outerHeight() / 2 - this._container.outerHeight() / 2
      }) : this._container.addClass(this.options.position) : "object" == typeof this.options.position ? this._container.css({
        top: this.options.position.top ? this.options.position.top : "auto",
        bottom: this.options.position.bottom ? this.options.position.bottom : "auto",
        left: this.options.position.left ? this.options.position.left : "auto",
        right: this.options.position.right ? this.options.position.right : "auto"
      }) : this._container.addClass("bottom-left");
    },
    bindToast: function bindToast() {
      var e = this;
      this._toastEl.on("afterShown", function () {
        e.processLoader();
      }), this._toastEl.find(".close-jq-toast-single").on("click", function (t) {
        t.preventDefault(), "fade" === e.options.showHideTransition ? (e._toastEl.trigger("beforeHide"), e._toastEl.fadeOut(function () {
          e._toastEl.trigger("afterHidden");
        })) : "slide" === e.options.showHideTransition ? (e._toastEl.trigger("beforeHide"), e._toastEl.slideUp(function () {
          e._toastEl.trigger("afterHidden");
        })) : (e._toastEl.trigger("beforeHide"), e._toastEl.hide(function () {
          e._toastEl.trigger("afterHidden");
        }));
      }), "function" == typeof this.options.beforeShow && this._toastEl.on("beforeShow", function () {
        e.options.beforeShow();
      }), "function" == typeof this.options.afterShown && this._toastEl.on("afterShown", function () {
        e.options.afterShown();
      }), "function" == typeof this.options.beforeHide && this._toastEl.on("beforeHide", function () {
        e.options.beforeHide();
      }), "function" == typeof this.options.afterHidden && this._toastEl.on("afterHidden", function () {
        e.options.afterHidden();
      });
    },
    addToDom: function addToDom() {
      var t = i(".jq-toast-wrap");

      if (0 === t.length ? (t = i("<div></div>", {
        "class": "jq-toast-wrap"
      }), i("body").append(t)) : (!this.options.stack || isNaN(parseInt(this.options.stack, 10))) && t.empty(), t.find(".jq-toast-single:hidden").remove(), t.append(this._toastEl), this.options.stack && !isNaN(parseInt(this.options.stack), 10)) {
        var e = t.find(".jq-toast-single").length - this.options.stack;
        0 < e && i(".jq-toast-wrap").find(".jq-toast-single").slice(0, e).remove();
      }

      this._container = t;
    },
    canAutoHide: function canAutoHide() {
      return !1 !== this.options.hideAfter && !isNaN(parseInt(this.options.hideAfter, 10));
    },
    processLoader: function processLoader() {
      if (!this.canAutoHide() || !1 === this.options.loader) return !1;

      var t = this._toastEl.find(".jq-toast-loader"),
          e = (this.options.hideAfter - 400) / 1e3 + "s",
          n = this.options.loaderBg,
          i = t.attr("style") || "";

      i = i.substring(0, i.indexOf("-webkit-transition")), i += "-webkit-transition: width " + e + " ease-in;                       -o-transition: width " + e + " ease-in;                       transition: width " + e + " ease-in;                       background-color: " + n + ";", t.attr("style", i).addClass("jq-toast-loaded");
    },
    animate: function animate() {
      var t = this;

      if (this._toastEl.hide(), this._toastEl.trigger("beforeShow"), "fade" === this.options.showHideTransition.toLowerCase() ? this._toastEl.fadeIn(function () {
        t._toastEl.trigger("afterShown");
      }) : "slide" === this.options.showHideTransition.toLowerCase() ? this._toastEl.slideDown(function () {
        t._toastEl.trigger("afterShown");
      }) : this._toastEl.show(function () {
        t._toastEl.trigger("afterShown");
      }), this.canAutoHide()) {
        t = this;
        e.setTimeout(function () {
          "fade" === t.options.showHideTransition.toLowerCase() ? (t._toastEl.trigger("beforeHide"), t._toastEl.fadeOut(function () {
            t._toastEl.trigger("afterHidden");
          })) : "slide" === t.options.showHideTransition.toLowerCase() ? (t._toastEl.trigger("beforeHide"), t._toastEl.slideUp(function () {
            t._toastEl.trigger("afterHidden");
          })) : (t._toastEl.trigger("beforeHide"), t._toastEl.hide(function () {
            t._toastEl.trigger("afterHidden");
          }));
        }, this.options.hideAfter);
      }
    },
    reset: function reset(t) {
      "all" === t ? i(".jq-toast-wrap").remove() : this._toastEl.remove();
    },
    update: function update(t) {
      this.prepareOptions(t, this.options), this.setup(), this.bindToast();
    }
  };
  i.toast = function (t) {
    var e = Object.create(s);
    return e.init(t, this), {
      reset: function reset(t) {
        e.reset(t);
      },
      update: function update(t) {
        e.update(t);
      }
    };
  }, i.toast.options = {
    text: "",
    heading: "",
    showHideTransition: "fade",
    allowToastClose: !0,
    hideAfter: 3e3,
    loader: !0,
    loaderBg: "#9EC600",
    stack: 5,
    position: "bottom-left",
    bgColor: !1,
    textColor: !1,
    textAlign: "left",
    icon: !1,
    beforeShow: function beforeShow() {},
    afterShown: function afterShown() {},
    beforeHide: function beforeHide() {},
    afterHidden: function afterHidden() {}
  };
}(jQuery, window, document), function (n) {
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__WEBPACK_LOCAL_MODULE_0__], __WEBPACK_AMD_DEFINE_FACTORY__ = (n),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(function (n) {
  var t = function () {
    if (n && n.fn && n.fn.select2 && n.fn.select2.amd) var t = n.fn.select2.amd;
    var e, s, c;
    return t && t.requirejs || (t ? s = t : t = {}, function (p) {
      function f(t, e) {
        return n.call(t, e);
      }

      function a(t, e) {
        var n,
            i,
            s,
            o,
            r,
            a,
            l,
            c,
            h,
            u,
            d,
            p = e && e.split("/"),
            f = k.map,
            m = f && f["*"] || {};

        if (t) {
          for (r = (t = t.split("/")).length - 1, k.nodeIdCompat && x.test(t[r]) && (t[r] = t[r].replace(x, "")), "." === t[0].charAt(0) && p && (t = p.slice(0, p.length - 1).concat(t)), h = 0; h < t.length; h++) {
            if ("." === (d = t[h])) t.splice(h, 1), h -= 1;else if (".." === d) {
              if (0 === h || 1 === h && ".." === t[2] || ".." === t[h - 1]) continue;
              0 < h && (t.splice(h - 1, 2), h -= 2);
            }
          }

          t = t.join("/");
        }

        if ((p || m) && f) {
          for (h = (n = t.split("/")).length; 0 < h; h -= 1) {
            if (i = n.slice(0, h).join("/"), p) for (u = p.length; 0 < u; u -= 1) {
              if ((s = f[p.slice(0, u).join("/")]) && (s = s[i])) {
                o = s, a = h;
                break;
              }
            }
            if (o) break;
            !l && m && m[i] && (l = m[i], c = h);
          }

          !o && l && (o = l, a = c), o && (n.splice(0, a, o), t = n.join("/"));
        }

        return t;
      }

      function m(e, n) {
        return function () {
          var t = i.call(arguments, 0);
          return "string" != typeof t[0] && 1 === t.length && t.push(null), _r.apply(p, t.concat([e, n]));
        };
      }

      function g(e) {
        return function (t) {
          w[e] = t;
        };
      }

      function v(t) {
        if (f(D, t)) {
          var e = D[t];
          delete D[t], C[t] = !0, o.apply(p, e);
        }

        if (!f(w, t) && !f(C, t)) throw new Error("No " + t);
        return w[t];
      }

      function l(t) {
        var e,
            n = t ? t.indexOf("!") : -1;
        return -1 < n && (e = t.substring(0, n), t = t.substring(n + 1, t.length)), [e, t];
      }

      function y(t) {
        return t ? l(t) : [];
      }

      var o,
          _r,
          b,
          _,
          w = {},
          D = {},
          k = {},
          C = {},
          n = Object.prototype.hasOwnProperty,
          i = [].slice,
          x = /\.js$/;

      b = function b(t, e) {
        var n,
            i,
            s = l(t),
            o = s[0],
            r = e[1];
        return t = s[1], o && (n = v(o = a(o, r))), o ? t = n && n.normalize ? n.normalize(t, (i = r, function (t) {
          return a(t, i);
        })) : a(t, r) : (o = (s = l(t = a(t, r)))[0], t = s[1], o && (n = v(o))), {
          f: o ? o + "!" + t : t,
          n: t,
          pr: o,
          p: n
        };
      }, _ = {
        require: function require(t) {
          return m(t);
        },
        exports: function exports(t) {
          var e = w[t];
          return void 0 !== e ? e : w[t] = {};
        },
        module: function module(t) {
          return {
            id: t,
            uri: "",
            exports: w[t],
            config: (e = t, function () {
              return k && k.config && k.config[e] || {};
            })
          };
          var e;
        }
      }, o = function o(t, e, n, i) {
        var s,
            o,
            r,
            a,
            l,
            c,
            h,
            u = [],
            d = typeof n;

        if (c = y(i = i || t), "undefined" === d || "function" === d) {
          for (e = !e.length && n.length ? ["require", "exports", "module"] : e, l = 0; l < e.length; l += 1) {
            if ("require" === (o = (a = b(e[l], c)).f)) u[l] = _.require(t);else if ("exports" === o) u[l] = _.exports(t), h = !0;else if ("module" === o) s = u[l] = _.module(t);else if (f(w, o) || f(D, o) || f(C, o)) u[l] = v(o);else {
              if (!a.p) throw new Error(t + " missing " + o);
              a.p.load(a.n, m(i, !0), g(o), {}), u[l] = w[o];
            }
          }

          r = n ? n.apply(w[t], u) : void 0, t && (s && s.exports !== p && s.exports !== w[t] ? w[t] = s.exports : r === p && h || (w[t] = r));
        } else t && (w[t] = n);
      }, e = s = _r = function r(t, e, n, i, s) {
        if ("string" == typeof t) return _[t] ? _[t](e) : v(b(t, y(e)).f);

        if (!t.splice) {
          if ((k = t).deps && _r(k.deps, k.callback), !e) return;
          e.splice ? (t = e, e = n, n = null) : t = p;
        }

        return e = e || function () {}, "function" == typeof n && (n = i, i = s), i ? o(p, t, e, n) : setTimeout(function () {
          o(p, t, e, n);
        }, 4), _r;
      }, _r.config = function (t) {
        return _r(t);
      }, e._defined = w, (c = function c(t, e, n) {
        if ("string" != typeof t) throw new Error("See almond README: incorrect module build, no module name");
        e.splice || (n = e, e = []), f(w, t) || f(D, t) || (D[t] = [t, e, n]);
      }).amd = {
        jQuery: !0
      };
    }(), t.requirejs = e, t.require = s, t.define = c), t.define("almond", function () {}), t.define("jquery", [], function () {
      var t = n || $;
      return null == t && console && console.error && console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."), t;
    }), t.define("select2/utils", ["jquery"], function (o) {
      function h(t) {
        var e = t.prototype,
            n = [];

        for (var i in e) {
          "function" == typeof e[i] && "constructor" !== i && n.push(i);
        }

        return n;
      }

      var s = {
        Extend: function Extend(t, e) {
          function n() {
            this.constructor = t;
          }

          var i = {}.hasOwnProperty;

          for (var s in e) {
            i.call(e, s) && (t[s] = e[s]);
          }

          return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, t;
        },
        Decorate: function Decorate(i, s) {
          function o() {
            var t = Array.prototype.unshift,
                e = s.prototype.constructor.length,
                n = i.prototype.constructor;
            0 < e && (t.call(arguments, i.prototype.constructor), n = s.prototype.constructor), n.apply(this, arguments);
          }

          var t = h(s),
              e = h(i);
          s.displayName = i.displayName, o.prototype = new function () {
            this.constructor = o;
          }();

          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            o.prototype[r] = i.prototype[r];
          }

          for (var a = function a(t) {
            var e = function e() {};

            (t in o.prototype) && (e = o.prototype[t]);
            var n = s.prototype[t];
            return function () {
              return Array.prototype.unshift.call(arguments, e), n.apply(this, arguments);
            };
          }, l = 0; l < t.length; l++) {
            var c = t[l];
            o.prototype[c] = a(c);
          }

          return o;
        }
      },
          t = function t() {
        this.listeners = {};
      };

      t.prototype.on = function (t, e) {
        this.listeners = this.listeners || {}, t in this.listeners ? this.listeners[t].push(e) : this.listeners[t] = [e];
      }, t.prototype.trigger = function (t) {
        var e = Array.prototype.slice,
            n = e.call(arguments, 1);
        this.listeners = this.listeners || {}, null == n && (n = []), 0 === n.length && n.push({}), (n[0]._type = t) in this.listeners && this.invoke(this.listeners[t], e.call(arguments, 1)), "*" in this.listeners && this.invoke(this.listeners["*"], arguments);
      }, t.prototype.invoke = function (t, e) {
        for (var n = 0, i = t.length; n < i; n++) {
          t[n].apply(this, e);
        }
      }, s.Observable = t, s.generateChars = function (t) {
        for (var e = "", n = 0; n < t; n++) {
          e += Math.floor(36 * Math.random()).toString(36);
        }

        return e;
      }, s.bind = function (t, e) {
        return function () {
          t.apply(e, arguments);
        };
      }, s._convertData = function (t) {
        for (var e in t) {
          var n = e.split("-"),
              i = t;

          if (1 !== n.length) {
            for (var s = 0; s < n.length; s++) {
              var o = n[s];
              (o = o.substring(0, 1).toLowerCase() + o.substring(1)) in i || (i[o] = {}), s == n.length - 1 && (i[o] = t[e]), i = i[o];
            }

            delete t[e];
          }
        }

        return t;
      }, s.hasScroll = function (t, e) {
        var n = o(e),
            i = e.style.overflowX,
            s = e.style.overflowY;
        return (i !== s || "hidden" !== s && "visible" !== s) && ("scroll" === i || "scroll" === s || n.innerHeight() < e.scrollHeight || n.innerWidth() < e.scrollWidth);
      }, s.escapeMarkup = function (t) {
        var e = {
          "\\": "&#92;",
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
          "/": "&#47;"
        };
        return "string" != typeof t ? t : String(t).replace(/[&<>"'\/\\]/g, function (t) {
          return e[t];
        });
      }, s.appendMany = function (t, e) {
        if ("1.7" === o.fn.jquery.substr(0, 3)) {
          var n = o();
          o.map(e, function (t) {
            n = n.add(t);
          }), e = n;
        }

        t.append(e);
      }, s.__cache = {};
      var n = 0;
      return s.GetUniqueElementId = function (t) {
        var e = t.getAttribute("data-select2-id");
        return null == e && (t.id ? (e = t.id, t.setAttribute("data-select2-id", e)) : (t.setAttribute("data-select2-id", ++n), e = n.toString())), e;
      }, s.StoreData = function (t, e, n) {
        var i = s.GetUniqueElementId(t);
        s.__cache[i] || (s.__cache[i] = {}), s.__cache[i][e] = n;
      }, s.GetData = function (t, e) {
        var n = s.GetUniqueElementId(t);
        return e ? s.__cache[n] && null != s.__cache[n][e] ? s.__cache[n][e] : o(t).data(e) : s.__cache[n];
      }, s.RemoveData = function (t) {
        var e = s.GetUniqueElementId(t);
        null != s.__cache[e] && delete s.__cache[e];
      }, s;
    }), t.define("select2/results", ["jquery", "./utils"], function (d, p) {
      function i(t, e, n) {
        this.$element = t, this.data = n, this.options = e, i.__super__.constructor.call(this);
      }

      return p.Extend(i, p.Observable), i.prototype.render = function () {
        var t = d('<ul class="select2-results__options" role="tree"></ul>');
        return this.options.get("multiple") && t.attr("aria-multiselectable", "true"), this.$results = t;
      }, i.prototype.clear = function () {
        this.$results.empty();
      }, i.prototype.displayMessage = function (t) {
        var e = this.options.get("escapeMarkup");
        this.clear(), this.hideLoading();
        var n = d('<li role="treeitem" aria-live="assertive" class="select2-results__option"></li>'),
            i = this.options.get("translations").get(t.message);
        n.append(e(i(t.args))), n[0].className += " select2-results__message", this.$results.append(n);
      }, i.prototype.hideMessages = function () {
        this.$results.find(".select2-results__message").remove();
      }, i.prototype.append = function (t) {
        this.hideLoading();
        var e = [];

        if (null != t.results && 0 !== t.results.length) {
          t.results = this.sort(t.results);

          for (var n = 0; n < t.results.length; n++) {
            var i = t.results[n],
                s = this.option(i);
            e.push(s);
          }

          this.$results.append(e);
        } else 0 === this.$results.children().length && this.trigger("results:message", {
          message: "noResults"
        });
      }, i.prototype.position = function (t, e) {
        e.find(".select2-results").append(t);
      }, i.prototype.sort = function (t) {
        return this.options.get("sorter")(t);
      }, i.prototype.highlightFirstItem = function () {
        var t = this.$results.find(".select2-results__option[aria-selected]"),
            e = t.filter("[aria-selected=true]");
        0 < e.length ? e.first().trigger("mouseenter") : t.first().trigger("mouseenter"), this.ensureHighlightVisible();
      }, i.prototype.setClasses = function () {
        var e = this;
        this.data.current(function (t) {
          var i = d.map(t, function (t) {
            return t.id.toString();
          });
          e.$results.find(".select2-results__option[aria-selected]").each(function () {
            var t = d(this),
                e = p.GetData(this, "data"),
                n = "" + e.id;
            null != e.element && e.element.selected || null == e.element && -1 < d.inArray(n, i) ? t.attr("aria-selected", "true") : t.attr("aria-selected", "false");
          });
        });
      }, i.prototype.showLoading = function (t) {
        this.hideLoading();
        var e = {
          disabled: !0,
          loading: !0,
          text: this.options.get("translations").get("searching")(t)
        },
            n = this.option(e);
        n.className += " loading-results", this.$results.prepend(n);
      }, i.prototype.hideLoading = function () {
        this.$results.find(".loading-results").remove();
      }, i.prototype.option = function (t) {
        var e = document.createElement("li");
        e.className = "select2-results__option";
        var n = {
          role: "treeitem",
          "aria-selected": "false"
        };

        for (var i in t.disabled && (delete n["aria-selected"], n["aria-disabled"] = "true"), null == t.id && delete n["aria-selected"], null != t._resultId && (e.id = t._resultId), t.title && (e.title = t.title), t.children && (n.role = "group", n["aria-label"] = t.text, delete n["aria-selected"]), n) {
          var s = n[i];
          e.setAttribute(i, s);
        }

        if (t.children) {
          var o = d(e),
              r = document.createElement("strong");
          r.className = "select2-results__group", d(r), this.template(t, r);

          for (var a = [], l = 0; l < t.children.length; l++) {
            var c = t.children[l],
                h = this.option(c);
            a.push(h);
          }

          var u = d("<ul></ul>", {
            "class": "select2-results__options select2-results__options--nested"
          });
          u.append(a), o.append(r), o.append(u);
        } else this.template(t, e);

        return p.StoreData(e, "data", t), e;
      }, i.prototype.bind = function (e, t) {
        var l = this,
            n = e.id + "-results";
        this.$results.attr("id", n), e.on("results:all", function (t) {
          l.clear(), l.append(t.data), e.isOpen() && (l.setClasses(), l.highlightFirstItem());
        }), e.on("results:append", function (t) {
          l.append(t.data), e.isOpen() && l.setClasses();
        }), e.on("query", function (t) {
          l.hideMessages(), l.showLoading(t);
        }), e.on("select", function () {
          e.isOpen() && (l.setClasses(), l.options.get("scrollAfterSelect") && l.highlightFirstItem());
        }), e.on("unselect", function () {
          e.isOpen() && (l.setClasses(), l.options.get("scrollAfterSelect") && l.highlightFirstItem());
        }), e.on("open", function () {
          l.$results.attr("aria-expanded", "true"), l.$results.attr("aria-hidden", "false"), l.setClasses(), l.ensureHighlightVisible();
        }), e.on("close", function () {
          l.$results.attr("aria-expanded", "false"), l.$results.attr("aria-hidden", "true"), l.$results.removeAttr("aria-activedescendant");
        }), e.on("results:toggle", function () {
          var t = l.getHighlightedResults();
          0 !== t.length && t.trigger("mouseup");
        }), e.on("results:select", function () {
          var t = l.getHighlightedResults();

          if (0 !== t.length) {
            var e = p.GetData(t[0], "data");
            "true" == t.attr("aria-selected") ? l.trigger("close", {}) : l.trigger("select", {
              data: e
            });
          }
        }), e.on("results:previous", function () {
          var t = l.getHighlightedResults(),
              e = l.$results.find("[aria-selected]"),
              n = e.index(t);

          if (!(n <= 0)) {
            var i = n - 1;
            0 === t.length && (i = 0);
            var s = e.eq(i);
            s.trigger("mouseenter");
            var o = l.$results.offset().top,
                r = s.offset().top,
                a = l.$results.scrollTop() + (r - o);
            0 === i ? l.$results.scrollTop(0) : r - o < 0 && l.$results.scrollTop(a);
          }
        }), e.on("results:next", function () {
          var t = l.getHighlightedResults(),
              e = l.$results.find("[aria-selected]"),
              n = e.index(t) + 1;

          if (!(n >= e.length)) {
            var i = e.eq(n);
            i.trigger("mouseenter");
            var s = l.$results.offset().top + l.$results.outerHeight(!1),
                o = i.offset().top + i.outerHeight(!1),
                r = l.$results.scrollTop() + o - s;
            0 === n ? l.$results.scrollTop(0) : s < o && l.$results.scrollTop(r);
          }
        }), e.on("results:focus", function (t) {
          t.element.addClass("select2-results__option--highlighted");
        }), e.on("results:message", function (t) {
          l.displayMessage(t);
        }), d.fn.mousewheel && this.$results.on("mousewheel", function (t) {
          var e = l.$results.scrollTop(),
              n = l.$results.get(0).scrollHeight - e + t.deltaY,
              i = 0 < t.deltaY && e - t.deltaY <= 0,
              s = t.deltaY < 0 && n <= l.$results.height();
          i ? (l.$results.scrollTop(0), t.preventDefault(), t.stopPropagation()) : s && (l.$results.scrollTop(l.$results.get(0).scrollHeight - l.$results.height()), t.preventDefault(), t.stopPropagation());
        }), this.$results.on("mouseup", ".select2-results__option[aria-selected]", function (t) {
          var e = d(this),
              n = p.GetData(this, "data");
          "true" !== e.attr("aria-selected") ? l.trigger("select", {
            originalEvent: t,
            data: n
          }) : l.options.get("multiple") ? l.trigger("unselect", {
            originalEvent: t,
            data: n
          }) : l.trigger("close", {});
        }), this.$results.on("mouseenter", ".select2-results__option[aria-selected]", function (t) {
          var e = p.GetData(this, "data");
          l.getHighlightedResults().removeClass("select2-results__option--highlighted"), l.trigger("results:focus", {
            data: e,
            element: d(this)
          });
        });
      }, i.prototype.getHighlightedResults = function () {
        return this.$results.find(".select2-results__option--highlighted");
      }, i.prototype.destroy = function () {
        this.$results.remove();
      }, i.prototype.ensureHighlightVisible = function () {
        var t = this.getHighlightedResults();

        if (0 !== t.length) {
          var e = this.$results.find("[aria-selected]").index(t),
              n = this.$results.offset().top,
              i = t.offset().top,
              s = this.$results.scrollTop() + (i - n),
              o = i - n;
          s -= 2 * t.outerHeight(!1), e <= 2 ? this.$results.scrollTop(0) : (o > this.$results.outerHeight() || o < 0) && this.$results.scrollTop(s);
        }
      }, i.prototype.template = function (t, e) {
        var n = this.options.get("templateResult"),
            i = this.options.get("escapeMarkup"),
            s = n(t, e);
        null == s ? e.style.display = "none" : "string" == typeof s ? e.innerHTML = i(s) : d(e).append(s);
      }, i;
    }), t.define("select2/keys", [], function () {
      return {
        BACKSPACE: 8,
        TAB: 9,
        ENTER: 13,
        SHIFT: 16,
        CTRL: 17,
        ALT: 18,
        ESC: 27,
        SPACE: 32,
        PAGE_UP: 33,
        PAGE_DOWN: 34,
        END: 35,
        HOME: 36,
        LEFT: 37,
        UP: 38,
        RIGHT: 39,
        DOWN: 40,
        DELETE: 46
      };
    }), t.define("select2/selection/base", ["jquery", "../utils", "../keys"], function (n, i, s) {
      function o(t, e) {
        this.$element = t, this.options = e, o.__super__.constructor.call(this);
      }

      return i.Extend(o, i.Observable), o.prototype.render = function () {
        var t = n('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');
        return this._tabindex = 0, null != i.GetData(this.$element[0], "old-tabindex") ? this._tabindex = i.GetData(this.$element[0], "old-tabindex") : null != this.$element.attr("tabindex") && (this._tabindex = this.$element.attr("tabindex")), t.attr("title", this.$element.attr("title")), t.attr("tabindex", this._tabindex), this.$selection = t;
      }, o.prototype.bind = function (t, e) {
        var n = this,
            i = (t.id, t.id + "-results");
        this.container = t, this.$selection.on("focus", function (t) {
          n.trigger("focus", t);
        }), this.$selection.on("blur", function (t) {
          n._handleBlur(t);
        }), this.$selection.on("keydown", function (t) {
          n.trigger("keypress", t), t.which === s.SPACE && t.preventDefault();
        }), t.on("results:focus", function (t) {
          n.$selection.attr("aria-activedescendant", t.data._resultId);
        }), t.on("selection:update", function (t) {
          n.update(t.data);
        }), t.on("open", function () {
          n.$selection.attr("aria-expanded", "true"), n.$selection.attr("aria-owns", i), n._attachCloseHandler(t);
        }), t.on("close", function () {
          n.$selection.attr("aria-expanded", "false"), n.$selection.removeAttr("aria-activedescendant"), n.$selection.removeAttr("aria-owns"), window.setTimeout(function () {
            n.$selection.focus();
          }, 0), n._detachCloseHandler(t);
        }), t.on("enable", function () {
          n.$selection.attr("tabindex", n._tabindex);
        }), t.on("disable", function () {
          n.$selection.attr("tabindex", "-1");
        });
      }, o.prototype._handleBlur = function (t) {
        var e = this;
        window.setTimeout(function () {
          document.activeElement == e.$selection[0] || n.contains(e.$selection[0], document.activeElement) || e.trigger("blur", t);
        }, 1);
      }, o.prototype._attachCloseHandler = function (t) {
        n(document.body).on("mousedown.select2." + t.id, function (t) {
          var e = n(t.target).closest(".select2");
          n(".select2.select2-container--open").each(function () {
            n(this), this != e[0] && i.GetData(this, "element").select2("close");
          });
        });
      }, o.prototype._detachCloseHandler = function (t) {
        n(document.body).off("mousedown.select2." + t.id);
      }, o.prototype.position = function (t, e) {
        e.find(".selection").append(t);
      }, o.prototype.destroy = function () {
        this._detachCloseHandler(this.container);
      }, o.prototype.update = function (t) {
        throw new Error("The `update` method must be defined in child classes.");
      }, o;
    }), t.define("select2/selection/single", ["jquery", "./base", "../utils", "../keys"], function (t, e, n, i) {
      function s() {
        s.__super__.constructor.apply(this, arguments);
      }

      return n.Extend(s, e), s.prototype.render = function () {
        var t = s.__super__.render.call(this);

        return t.addClass("select2-selection--single"), t.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'), t;
      }, s.prototype.bind = function (e, t) {
        var n = this;

        s.__super__.bind.apply(this, arguments);

        var i = e.id + "-container";
        this.$selection.find(".select2-selection__rendered").attr("id", i).attr("role", "textbox").attr("aria-readonly", "true"), this.$selection.attr("aria-labelledby", i), this.$selection.on("mousedown", function (t) {
          1 === t.which && n.trigger("toggle", {
            originalEvent: t
          });
        }), this.$selection.on("focus", function (t) {}), this.$selection.on("blur", function (t) {}), e.on("focus", function (t) {
          e.isOpen() || n.$selection.focus();
        });
      }, s.prototype.clear = function () {
        var t = this.$selection.find(".select2-selection__rendered");
        t.empty(), t.removeAttr("title");
      }, s.prototype.display = function (t, e) {
        var n = this.options.get("templateSelection");
        return this.options.get("escapeMarkup")(n(t, e));
      }, s.prototype.selectionContainer = function () {
        return t("<span></span>");
      }, s.prototype.update = function (t) {
        if (0 !== t.length) {
          var e = t[0],
              n = this.$selection.find(".select2-selection__rendered"),
              i = this.display(e, n);
          n.empty().append(i), n.attr("title", e.title || e.text);
        } else this.clear();
      }, s;
    }), t.define("select2/selection/multiple", ["jquery", "./base", "../utils"], function (s, t, a) {
      function n(t, e) {
        n.__super__.constructor.apply(this, arguments);
      }

      return a.Extend(n, t), n.prototype.render = function () {
        var t = n.__super__.render.call(this);

        return t.addClass("select2-selection--multiple"), t.html('<ul class="select2-selection__rendered"></ul>'), t;
      }, n.prototype.bind = function (t, e) {
        var i = this;
        n.__super__.bind.apply(this, arguments), this.$selection.on("click", function (t) {
          i.trigger("toggle", {
            originalEvent: t
          });
        }), this.$selection.on("click", ".select2-selection__choice__remove", function (t) {
          if (!i.options.get("disabled")) {
            var e = s(this).parent(),
                n = a.GetData(e[0], "data");
            i.trigger("unselect", {
              originalEvent: t,
              data: n
            });
          }
        });
      }, n.prototype.clear = function () {
        var t = this.$selection.find(".select2-selection__rendered");
        t.empty(), t.removeAttr("title");
      }, n.prototype.display = function (t, e) {
        var n = this.options.get("templateSelection");
        return this.options.get("escapeMarkup")(n(t, e));
      }, n.prototype.selectionContainer = function () {
        return s('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>');
      }, n.prototype.update = function (t) {
        if (this.clear(), 0 !== t.length) {
          for (var e = [], n = 0; n < t.length; n++) {
            var i = t[n],
                s = this.selectionContainer(),
                o = this.display(i, s);
            s.append(o), s.attr("title", i.title || i.text), a.StoreData(s[0], "data", i), e.push(s);
          }

          var r = this.$selection.find(".select2-selection__rendered");
          a.appendMany(r, e);
        }
      }, n;
    }), t.define("select2/selection/placeholder", ["../utils"], function (t) {
      function e(t, e, n) {
        this.placeholder = this.normalizePlaceholder(n.get("placeholder")), t.call(this, e, n);
      }

      return e.prototype.normalizePlaceholder = function (t, e) {
        return "string" == typeof e && (e = {
          id: "",
          text: e
        }), e;
      }, e.prototype.createPlaceholder = function (t, e) {
        var n = this.selectionContainer();
        return n.html(this.display(e)), n.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"), n;
      }, e.prototype.update = function (t, e) {
        var n = 1 == e.length && e[0].id != this.placeholder.id;
        if (1 < e.length || n) return t.call(this, e);
        this.clear();
        var i = this.createPlaceholder(this.placeholder);
        this.$selection.find(".select2-selection__rendered").append(i);
      }, e;
    }), t.define("select2/selection/allowClear", ["jquery", "../keys", "../utils"], function (s, i, a) {
      function t() {}

      return t.prototype.bind = function (t, e, n) {
        var i = this;
        t.call(this, e, n), null == this.placeholder && this.options.get("debug") && window.console && console.error && console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."), this.$selection.on("mousedown", ".select2-selection__clear", function (t) {
          i._handleClear(t);
        }), e.on("keypress", function (t) {
          i._handleKeyboardClear(t, e);
        });
      }, t.prototype._handleClear = function (t, e) {
        if (!this.options.get("disabled")) {
          var n = this.$selection.find(".select2-selection__clear");

          if (0 !== n.length) {
            e.stopPropagation();
            var i = a.GetData(n[0], "data"),
                s = this.$element.val();
            this.$element.val(this.placeholder.id);
            var o = {
              data: i
            };
            if (this.trigger("clear", o), o.prevented) return void this.$element.val(s);

            for (var r = 0; r < i.length; r++) {
              if (o = {
                data: i[r]
              }, this.trigger("unselect", o), o.prevented) return void this.$element.val(s);
            }

            this.$element.trigger("change"), this.trigger("toggle", {});
          }
        }
      }, t.prototype._handleKeyboardClear = function (t, e, n) {
        n.isOpen() || e.which != i.DELETE && e.which != i.BACKSPACE || this._handleClear(e);
      }, t.prototype.update = function (t, e) {
        if (t.call(this, e), !(0 < this.$selection.find(".select2-selection__placeholder").length || 0 === e.length)) {
          var n = this.options.get("translations").get("removeAllItems"),
              i = s('<span class="select2-selection__clear" title="' + n() + '">&times;</span>');
          a.StoreData(i[0], "data", e), this.$selection.find(".select2-selection__rendered").prepend(i);
        }
      }, t;
    }), t.define("select2/selection/search", ["jquery", "../utils", "../keys"], function (i, r, a) {
      function t(t, e, n) {
        t.call(this, e, n);
      }

      return t.prototype.render = function (t) {
        var e = i('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="textbox" aria-autocomplete="list" /></li>');
        this.$searchContainer = e, this.$search = e.find("input");
        var n = t.call(this);
        return this._transferTabIndex(), n;
      }, t.prototype.bind = function (t, e, n) {
        var i = this;
        t.call(this, e, n), e.on("open", function () {
          i.$search.trigger("focus");
        }), e.on("close", function () {
          i.$search.val(""), i.$search.removeAttr("aria-activedescendant"), i.$search.trigger("focus");
        }), e.on("enable", function () {
          i.$search.prop("disabled", !1), i._transferTabIndex();
        }), e.on("disable", function () {
          i.$search.prop("disabled", !0);
        }), e.on("focus", function (t) {
          i.$search.trigger("focus");
        }), e.on("results:focus", function (t) {
          i.$search.attr("aria-activedescendant", t.id);
        }), this.$selection.on("focusin", ".select2-search--inline", function (t) {
          i.trigger("focus", t);
        }), this.$selection.on("focusout", ".select2-search--inline", function (t) {
          i._handleBlur(t);
        }), this.$selection.on("keydown", ".select2-search--inline", function (t) {
          if (t.stopPropagation(), i.trigger("keypress", t), i._keyUpPrevented = t.isDefaultPrevented(), t.which === a.BACKSPACE && "" === i.$search.val()) {
            var e = i.$searchContainer.prev(".select2-selection__choice");

            if (0 < e.length) {
              var n = r.GetData(e[0], "data");
              i.searchRemoveChoice(n), t.preventDefault();
            }
          }
        });
        var s = document.documentMode,
            o = s && s <= 11;
        this.$selection.on("input.searchcheck", ".select2-search--inline", function (t) {
          o ? i.$selection.off("input.search input.searchcheck") : i.$selection.off("keyup.search");
        }), this.$selection.on("keyup.search input.search", ".select2-search--inline", function (t) {
          if (o && "input" === t.type) i.$selection.off("input.search input.searchcheck");else {
            var e = t.which;
            e != a.SHIFT && e != a.CTRL && e != a.ALT && e != a.TAB && i.handleSearch(t);
          }
        });
      }, t.prototype._transferTabIndex = function (t) {
        this.$search.attr("tabindex", this.$selection.attr("tabindex")), this.$selection.attr("tabindex", "-1");
      }, t.prototype.createPlaceholder = function (t, e) {
        this.$search.attr("placeholder", e.text);
      }, t.prototype.update = function (t, e) {
        var n = this.$search[0] == document.activeElement;
        this.$search.attr("placeholder", ""), t.call(this, e), this.$selection.find(".select2-selection__rendered").append(this.$searchContainer), this.resizeSearch(), n && (this.$element.find("[data-select2-tag]").length ? this.$element.focus() : this.$search.focus());
      }, t.prototype.handleSearch = function () {
        if (this.resizeSearch(), !this._keyUpPrevented) {
          var t = this.$search.val();
          this.trigger("query", {
            term: t
          });
        }

        this._keyUpPrevented = !1;
      }, t.prototype.searchRemoveChoice = function (t, e) {
        this.trigger("unselect", {
          data: e
        }), this.$search.val(e.text), this.handleSearch();
      }, t.prototype.resizeSearch = function () {
        this.$search.css("width", "25px");
        var t = "";
        t = "" !== this.$search.attr("placeholder") ? this.$selection.find(".select2-selection__rendered").innerWidth() : .75 * (this.$search.val().length + 1) + "em", this.$search.css("width", t);
      }, t;
    }), t.define("select2/selection/eventRelay", ["jquery"], function (r) {
      function t() {}

      return t.prototype.bind = function (t, e, n) {
        var i = this,
            s = ["open", "opening", "close", "closing", "select", "selecting", "unselect", "unselecting", "clear", "clearing"],
            o = ["opening", "closing", "selecting", "unselecting", "clearing"];
        t.call(this, e, n), e.on("*", function (t, e) {
          if (-1 !== r.inArray(t, s)) {
            e = e || {};
            var n = r.Event("select2:" + t, {
              params: e
            });
            i.$element.trigger(n), -1 !== r.inArray(t, o) && (e.prevented = n.isDefaultPrevented());
          }
        });
      }, t;
    }), t.define("select2/translation", ["jquery", "require"], function (e, n) {
      function i(t) {
        this.dict = t || {};
      }

      return i.prototype.all = function () {
        return this.dict;
      }, i.prototype.get = function (t) {
        return this.dict[t];
      }, i.prototype.extend = function (t) {
        this.dict = e.extend({}, t.all(), this.dict);
      }, i._cache = {}, i.loadPath = function (t) {
        if (!(t in i._cache)) {
          var e = n(t);
          i._cache[t] = e;
        }

        return new i(i._cache[t]);
      }, i;
    }), t.define("select2/diacritics", [], function () {
      return {
        "Ⓐ": "A",
        "Ａ": "A",
        "À": "A",
        "Á": "A",
        "Â": "A",
        "Ầ": "A",
        "Ấ": "A",
        "Ẫ": "A",
        "Ẩ": "A",
        "Ã": "A",
        "Ā": "A",
        "Ă": "A",
        "Ằ": "A",
        "Ắ": "A",
        "Ẵ": "A",
        "Ẳ": "A",
        "Ȧ": "A",
        "Ǡ": "A",
        "Ä": "A",
        "Ǟ": "A",
        "Ả": "A",
        "Å": "A",
        "Ǻ": "A",
        "Ǎ": "A",
        "Ȁ": "A",
        "Ȃ": "A",
        "Ạ": "A",
        "Ậ": "A",
        "Ặ": "A",
        "Ḁ": "A",
        "Ą": "A",
        "Ⱥ": "A",
        "Ɐ": "A",
        "Ꜳ": "AA",
        "Æ": "AE",
        "Ǽ": "AE",
        "Ǣ": "AE",
        "Ꜵ": "AO",
        "Ꜷ": "AU",
        "Ꜹ": "AV",
        "Ꜻ": "AV",
        "Ꜽ": "AY",
        "Ⓑ": "B",
        "Ｂ": "B",
        "Ḃ": "B",
        "Ḅ": "B",
        "Ḇ": "B",
        "Ƀ": "B",
        "Ƃ": "B",
        "Ɓ": "B",
        "Ⓒ": "C",
        "Ｃ": "C",
        "Ć": "C",
        "Ĉ": "C",
        "Ċ": "C",
        "Č": "C",
        "Ç": "C",
        "Ḉ": "C",
        "Ƈ": "C",
        "Ȼ": "C",
        "Ꜿ": "C",
        "Ⓓ": "D",
        "Ｄ": "D",
        "Ḋ": "D",
        "Ď": "D",
        "Ḍ": "D",
        "Ḑ": "D",
        "Ḓ": "D",
        "Ḏ": "D",
        "Đ": "D",
        "Ƌ": "D",
        "Ɗ": "D",
        "Ɖ": "D",
        "Ꝺ": "D",
        "Ǳ": "DZ",
        "Ǆ": "DZ",
        "ǲ": "Dz",
        "ǅ": "Dz",
        "Ⓔ": "E",
        "Ｅ": "E",
        "È": "E",
        "É": "E",
        "Ê": "E",
        "Ề": "E",
        "Ế": "E",
        "Ễ": "E",
        "Ể": "E",
        "Ẽ": "E",
        "Ē": "E",
        "Ḕ": "E",
        "Ḗ": "E",
        "Ĕ": "E",
        "Ė": "E",
        "Ë": "E",
        "Ẻ": "E",
        "Ě": "E",
        "Ȅ": "E",
        "Ȇ": "E",
        "Ẹ": "E",
        "Ệ": "E",
        "Ȩ": "E",
        "Ḝ": "E",
        "Ę": "E",
        "Ḙ": "E",
        "Ḛ": "E",
        "Ɛ": "E",
        "Ǝ": "E",
        "Ⓕ": "F",
        "Ｆ": "F",
        "Ḟ": "F",
        "Ƒ": "F",
        "Ꝼ": "F",
        "Ⓖ": "G",
        "Ｇ": "G",
        "Ǵ": "G",
        "Ĝ": "G",
        "Ḡ": "G",
        "Ğ": "G",
        "Ġ": "G",
        "Ǧ": "G",
        "Ģ": "G",
        "Ǥ": "G",
        "Ɠ": "G",
        "Ꞡ": "G",
        "Ᵹ": "G",
        "Ꝿ": "G",
        "Ⓗ": "H",
        "Ｈ": "H",
        "Ĥ": "H",
        "Ḣ": "H",
        "Ḧ": "H",
        "Ȟ": "H",
        "Ḥ": "H",
        "Ḩ": "H",
        "Ḫ": "H",
        "Ħ": "H",
        "Ⱨ": "H",
        "Ⱶ": "H",
        "Ɥ": "H",
        "Ⓘ": "I",
        "Ｉ": "I",
        "Ì": "I",
        "Í": "I",
        "Î": "I",
        "Ĩ": "I",
        "Ī": "I",
        "Ĭ": "I",
        "İ": "I",
        "Ï": "I",
        "Ḯ": "I",
        "Ỉ": "I",
        "Ǐ": "I",
        "Ȉ": "I",
        "Ȋ": "I",
        "Ị": "I",
        "Į": "I",
        "Ḭ": "I",
        "Ɨ": "I",
        "Ⓙ": "J",
        "Ｊ": "J",
        "Ĵ": "J",
        "Ɉ": "J",
        "Ⓚ": "K",
        "Ｋ": "K",
        "Ḱ": "K",
        "Ǩ": "K",
        "Ḳ": "K",
        "Ķ": "K",
        "Ḵ": "K",
        "Ƙ": "K",
        "Ⱪ": "K",
        "Ꝁ": "K",
        "Ꝃ": "K",
        "Ꝅ": "K",
        "Ꞣ": "K",
        "Ⓛ": "L",
        "Ｌ": "L",
        "Ŀ": "L",
        "Ĺ": "L",
        "Ľ": "L",
        "Ḷ": "L",
        "Ḹ": "L",
        "Ļ": "L",
        "Ḽ": "L",
        "Ḻ": "L",
        "Ł": "L",
        "Ƚ": "L",
        "Ɫ": "L",
        "Ⱡ": "L",
        "Ꝉ": "L",
        "Ꝇ": "L",
        "Ꞁ": "L",
        "Ǉ": "LJ",
        "ǈ": "Lj",
        "Ⓜ": "M",
        "Ｍ": "M",
        "Ḿ": "M",
        "Ṁ": "M",
        "Ṃ": "M",
        "Ɱ": "M",
        "Ɯ": "M",
        "Ⓝ": "N",
        "Ｎ": "N",
        "Ǹ": "N",
        "Ń": "N",
        "Ñ": "N",
        "Ṅ": "N",
        "Ň": "N",
        "Ṇ": "N",
        "Ņ": "N",
        "Ṋ": "N",
        "Ṉ": "N",
        "Ƞ": "N",
        "Ɲ": "N",
        "Ꞑ": "N",
        "Ꞥ": "N",
        "Ǌ": "NJ",
        "ǋ": "Nj",
        "Ⓞ": "O",
        "Ｏ": "O",
        "Ò": "O",
        "Ó": "O",
        "Ô": "O",
        "Ồ": "O",
        "Ố": "O",
        "Ỗ": "O",
        "Ổ": "O",
        "Õ": "O",
        "Ṍ": "O",
        "Ȭ": "O",
        "Ṏ": "O",
        "Ō": "O",
        "Ṑ": "O",
        "Ṓ": "O",
        "Ŏ": "O",
        "Ȯ": "O",
        "Ȱ": "O",
        "Ö": "O",
        "Ȫ": "O",
        "Ỏ": "O",
        "Ő": "O",
        "Ǒ": "O",
        "Ȍ": "O",
        "Ȏ": "O",
        "Ơ": "O",
        "Ờ": "O",
        "Ớ": "O",
        "Ỡ": "O",
        "Ở": "O",
        "Ợ": "O",
        "Ọ": "O",
        "Ộ": "O",
        "Ǫ": "O",
        "Ǭ": "O",
        "Ø": "O",
        "Ǿ": "O",
        "Ɔ": "O",
        "Ɵ": "O",
        "Ꝋ": "O",
        "Ꝍ": "O",
        "Œ": "OE",
        "Ƣ": "OI",
        "Ꝏ": "OO",
        "Ȣ": "OU",
        "Ⓟ": "P",
        "Ｐ": "P",
        "Ṕ": "P",
        "Ṗ": "P",
        "Ƥ": "P",
        "Ᵽ": "P",
        "Ꝑ": "P",
        "Ꝓ": "P",
        "Ꝕ": "P",
        "Ⓠ": "Q",
        "Ｑ": "Q",
        "Ꝗ": "Q",
        "Ꝙ": "Q",
        "Ɋ": "Q",
        "Ⓡ": "R",
        "Ｒ": "R",
        "Ŕ": "R",
        "Ṙ": "R",
        "Ř": "R",
        "Ȑ": "R",
        "Ȓ": "R",
        "Ṛ": "R",
        "Ṝ": "R",
        "Ŗ": "R",
        "Ṟ": "R",
        "Ɍ": "R",
        "Ɽ": "R",
        "Ꝛ": "R",
        "Ꞧ": "R",
        "Ꞃ": "R",
        "Ⓢ": "S",
        "Ｓ": "S",
        "ẞ": "S",
        "Ś": "S",
        "Ṥ": "S",
        "Ŝ": "S",
        "Ṡ": "S",
        "Š": "S",
        "Ṧ": "S",
        "Ṣ": "S",
        "Ṩ": "S",
        "Ș": "S",
        "Ş": "S",
        "Ȿ": "S",
        "Ꞩ": "S",
        "Ꞅ": "S",
        "Ⓣ": "T",
        "Ｔ": "T",
        "Ṫ": "T",
        "Ť": "T",
        "Ṭ": "T",
        "Ț": "T",
        "Ţ": "T",
        "Ṱ": "T",
        "Ṯ": "T",
        "Ŧ": "T",
        "Ƭ": "T",
        "Ʈ": "T",
        "Ⱦ": "T",
        "Ꞇ": "T",
        "Ꜩ": "TZ",
        "Ⓤ": "U",
        "Ｕ": "U",
        "Ù": "U",
        "Ú": "U",
        "Û": "U",
        "Ũ": "U",
        "Ṹ": "U",
        "Ū": "U",
        "Ṻ": "U",
        "Ŭ": "U",
        "Ü": "U",
        "Ǜ": "U",
        "Ǘ": "U",
        "Ǖ": "U",
        "Ǚ": "U",
        "Ủ": "U",
        "Ů": "U",
        "Ű": "U",
        "Ǔ": "U",
        "Ȕ": "U",
        "Ȗ": "U",
        "Ư": "U",
        "Ừ": "U",
        "Ứ": "U",
        "Ữ": "U",
        "Ử": "U",
        "Ự": "U",
        "Ụ": "U",
        "Ṳ": "U",
        "Ų": "U",
        "Ṷ": "U",
        "Ṵ": "U",
        "Ʉ": "U",
        "Ⓥ": "V",
        "Ｖ": "V",
        "Ṽ": "V",
        "Ṿ": "V",
        "Ʋ": "V",
        "Ꝟ": "V",
        "Ʌ": "V",
        "Ꝡ": "VY",
        "Ⓦ": "W",
        "Ｗ": "W",
        "Ẁ": "W",
        "Ẃ": "W",
        "Ŵ": "W",
        "Ẇ": "W",
        "Ẅ": "W",
        "Ẉ": "W",
        "Ⱳ": "W",
        "Ⓧ": "X",
        "Ｘ": "X",
        "Ẋ": "X",
        "Ẍ": "X",
        "Ⓨ": "Y",
        "Ｙ": "Y",
        "Ỳ": "Y",
        "Ý": "Y",
        "Ŷ": "Y",
        "Ỹ": "Y",
        "Ȳ": "Y",
        "Ẏ": "Y",
        "Ÿ": "Y",
        "Ỷ": "Y",
        "Ỵ": "Y",
        "Ƴ": "Y",
        "Ɏ": "Y",
        "Ỿ": "Y",
        "Ⓩ": "Z",
        "Ｚ": "Z",
        "Ź": "Z",
        "Ẑ": "Z",
        "Ż": "Z",
        "Ž": "Z",
        "Ẓ": "Z",
        "Ẕ": "Z",
        "Ƶ": "Z",
        "Ȥ": "Z",
        "Ɀ": "Z",
        "Ⱬ": "Z",
        "Ꝣ": "Z",
        "ⓐ": "a",
        "ａ": "a",
        "ẚ": "a",
        "à": "a",
        "á": "a",
        "â": "a",
        "ầ": "a",
        "ấ": "a",
        "ẫ": "a",
        "ẩ": "a",
        "ã": "a",
        "ā": "a",
        "ă": "a",
        "ằ": "a",
        "ắ": "a",
        "ẵ": "a",
        "ẳ": "a",
        "ȧ": "a",
        "ǡ": "a",
        "ä": "a",
        "ǟ": "a",
        "ả": "a",
        "å": "a",
        "ǻ": "a",
        "ǎ": "a",
        "ȁ": "a",
        "ȃ": "a",
        "ạ": "a",
        "ậ": "a",
        "ặ": "a",
        "ḁ": "a",
        "ą": "a",
        "ⱥ": "a",
        "ɐ": "a",
        "ꜳ": "aa",
        "æ": "ae",
        "ǽ": "ae",
        "ǣ": "ae",
        "ꜵ": "ao",
        "ꜷ": "au",
        "ꜹ": "av",
        "ꜻ": "av",
        "ꜽ": "ay",
        "ⓑ": "b",
        "ｂ": "b",
        "ḃ": "b",
        "ḅ": "b",
        "ḇ": "b",
        "ƀ": "b",
        "ƃ": "b",
        "ɓ": "b",
        "ⓒ": "c",
        "ｃ": "c",
        "ć": "c",
        "ĉ": "c",
        "ċ": "c",
        "č": "c",
        "ç": "c",
        "ḉ": "c",
        "ƈ": "c",
        "ȼ": "c",
        "ꜿ": "c",
        "ↄ": "c",
        "ⓓ": "d",
        "ｄ": "d",
        "ḋ": "d",
        "ď": "d",
        "ḍ": "d",
        "ḑ": "d",
        "ḓ": "d",
        "ḏ": "d",
        "đ": "d",
        "ƌ": "d",
        "ɖ": "d",
        "ɗ": "d",
        "ꝺ": "d",
        "ǳ": "dz",
        "ǆ": "dz",
        "ⓔ": "e",
        "ｅ": "e",
        "è": "e",
        "é": "e",
        "ê": "e",
        "ề": "e",
        "ế": "e",
        "ễ": "e",
        "ể": "e",
        "ẽ": "e",
        "ē": "e",
        "ḕ": "e",
        "ḗ": "e",
        "ĕ": "e",
        "ė": "e",
        "ë": "e",
        "ẻ": "e",
        "ě": "e",
        "ȅ": "e",
        "ȇ": "e",
        "ẹ": "e",
        "ệ": "e",
        "ȩ": "e",
        "ḝ": "e",
        "ę": "e",
        "ḙ": "e",
        "ḛ": "e",
        "ɇ": "e",
        "ɛ": "e",
        "ǝ": "e",
        "ⓕ": "f",
        "ｆ": "f",
        "ḟ": "f",
        "ƒ": "f",
        "ꝼ": "f",
        "ⓖ": "g",
        "ｇ": "g",
        "ǵ": "g",
        "ĝ": "g",
        "ḡ": "g",
        "ğ": "g",
        "ġ": "g",
        "ǧ": "g",
        "ģ": "g",
        "ǥ": "g",
        "ɠ": "g",
        "ꞡ": "g",
        "ᵹ": "g",
        "ꝿ": "g",
        "ⓗ": "h",
        "ｈ": "h",
        "ĥ": "h",
        "ḣ": "h",
        "ḧ": "h",
        "ȟ": "h",
        "ḥ": "h",
        "ḩ": "h",
        "ḫ": "h",
        "ẖ": "h",
        "ħ": "h",
        "ⱨ": "h",
        "ⱶ": "h",
        "ɥ": "h",
        "ƕ": "hv",
        "ⓘ": "i",
        "ｉ": "i",
        "ì": "i",
        "í": "i",
        "î": "i",
        "ĩ": "i",
        "ī": "i",
        "ĭ": "i",
        "ï": "i",
        "ḯ": "i",
        "ỉ": "i",
        "ǐ": "i",
        "ȉ": "i",
        "ȋ": "i",
        "ị": "i",
        "į": "i",
        "ḭ": "i",
        "ɨ": "i",
        "ı": "i",
        "ⓙ": "j",
        "ｊ": "j",
        "ĵ": "j",
        "ǰ": "j",
        "ɉ": "j",
        "ⓚ": "k",
        "ｋ": "k",
        "ḱ": "k",
        "ǩ": "k",
        "ḳ": "k",
        "ķ": "k",
        "ḵ": "k",
        "ƙ": "k",
        "ⱪ": "k",
        "ꝁ": "k",
        "ꝃ": "k",
        "ꝅ": "k",
        "ꞣ": "k",
        "ⓛ": "l",
        "ｌ": "l",
        "ŀ": "l",
        "ĺ": "l",
        "ľ": "l",
        "ḷ": "l",
        "ḹ": "l",
        "ļ": "l",
        "ḽ": "l",
        "ḻ": "l",
        "ſ": "l",
        "ł": "l",
        "ƚ": "l",
        "ɫ": "l",
        "ⱡ": "l",
        "ꝉ": "l",
        "ꞁ": "l",
        "ꝇ": "l",
        "ǉ": "lj",
        "ⓜ": "m",
        "ｍ": "m",
        "ḿ": "m",
        "ṁ": "m",
        "ṃ": "m",
        "ɱ": "m",
        "ɯ": "m",
        "ⓝ": "n",
        "ｎ": "n",
        "ǹ": "n",
        "ń": "n",
        "ñ": "n",
        "ṅ": "n",
        "ň": "n",
        "ṇ": "n",
        "ņ": "n",
        "ṋ": "n",
        "ṉ": "n",
        "ƞ": "n",
        "ɲ": "n",
        "ŉ": "n",
        "ꞑ": "n",
        "ꞥ": "n",
        "ǌ": "nj",
        "ⓞ": "o",
        "ｏ": "o",
        "ò": "o",
        "ó": "o",
        "ô": "o",
        "ồ": "o",
        "ố": "o",
        "ỗ": "o",
        "ổ": "o",
        "õ": "o",
        "ṍ": "o",
        "ȭ": "o",
        "ṏ": "o",
        "ō": "o",
        "ṑ": "o",
        "ṓ": "o",
        "ŏ": "o",
        "ȯ": "o",
        "ȱ": "o",
        "ö": "o",
        "ȫ": "o",
        "ỏ": "o",
        "ő": "o",
        "ǒ": "o",
        "ȍ": "o",
        "ȏ": "o",
        "ơ": "o",
        "ờ": "o",
        "ớ": "o",
        "ỡ": "o",
        "ở": "o",
        "ợ": "o",
        "ọ": "o",
        "ộ": "o",
        "ǫ": "o",
        "ǭ": "o",
        "ø": "o",
        "ǿ": "o",
        "ɔ": "o",
        "ꝋ": "o",
        "ꝍ": "o",
        "ɵ": "o",
        "œ": "oe",
        "ƣ": "oi",
        "ȣ": "ou",
        "ꝏ": "oo",
        "ⓟ": "p",
        "ｐ": "p",
        "ṕ": "p",
        "ṗ": "p",
        "ƥ": "p",
        "ᵽ": "p",
        "ꝑ": "p",
        "ꝓ": "p",
        "ꝕ": "p",
        "ⓠ": "q",
        "ｑ": "q",
        "ɋ": "q",
        "ꝗ": "q",
        "ꝙ": "q",
        "ⓡ": "r",
        "ｒ": "r",
        "ŕ": "r",
        "ṙ": "r",
        "ř": "r",
        "ȑ": "r",
        "ȓ": "r",
        "ṛ": "r",
        "ṝ": "r",
        "ŗ": "r",
        "ṟ": "r",
        "ɍ": "r",
        "ɽ": "r",
        "ꝛ": "r",
        "ꞧ": "r",
        "ꞃ": "r",
        "ⓢ": "s",
        "ｓ": "s",
        "ß": "s",
        "ś": "s",
        "ṥ": "s",
        "ŝ": "s",
        "ṡ": "s",
        "š": "s",
        "ṧ": "s",
        "ṣ": "s",
        "ṩ": "s",
        "ș": "s",
        "ş": "s",
        "ȿ": "s",
        "ꞩ": "s",
        "ꞅ": "s",
        "ẛ": "s",
        "ⓣ": "t",
        "ｔ": "t",
        "ṫ": "t",
        "ẗ": "t",
        "ť": "t",
        "ṭ": "t",
        "ț": "t",
        "ţ": "t",
        "ṱ": "t",
        "ṯ": "t",
        "ŧ": "t",
        "ƭ": "t",
        "ʈ": "t",
        "ⱦ": "t",
        "ꞇ": "t",
        "ꜩ": "tz",
        "ⓤ": "u",
        "ｕ": "u",
        "ù": "u",
        "ú": "u",
        "û": "u",
        "ũ": "u",
        "ṹ": "u",
        "ū": "u",
        "ṻ": "u",
        "ŭ": "u",
        "ü": "u",
        "ǜ": "u",
        "ǘ": "u",
        "ǖ": "u",
        "ǚ": "u",
        "ủ": "u",
        "ů": "u",
        "ű": "u",
        "ǔ": "u",
        "ȕ": "u",
        "ȗ": "u",
        "ư": "u",
        "ừ": "u",
        "ứ": "u",
        "ữ": "u",
        "ử": "u",
        "ự": "u",
        "ụ": "u",
        "ṳ": "u",
        "ų": "u",
        "ṷ": "u",
        "ṵ": "u",
        "ʉ": "u",
        "ⓥ": "v",
        "ｖ": "v",
        "ṽ": "v",
        "ṿ": "v",
        "ʋ": "v",
        "ꝟ": "v",
        "ʌ": "v",
        "ꝡ": "vy",
        "ⓦ": "w",
        "ｗ": "w",
        "ẁ": "w",
        "ẃ": "w",
        "ŵ": "w",
        "ẇ": "w",
        "ẅ": "w",
        "ẘ": "w",
        "ẉ": "w",
        "ⱳ": "w",
        "ⓧ": "x",
        "ｘ": "x",
        "ẋ": "x",
        "ẍ": "x",
        "ⓨ": "y",
        "ｙ": "y",
        "ỳ": "y",
        "ý": "y",
        "ŷ": "y",
        "ỹ": "y",
        "ȳ": "y",
        "ẏ": "y",
        "ÿ": "y",
        "ỷ": "y",
        "ẙ": "y",
        "ỵ": "y",
        "ƴ": "y",
        "ɏ": "y",
        "ỿ": "y",
        "ⓩ": "z",
        "ｚ": "z",
        "ź": "z",
        "ẑ": "z",
        "ż": "z",
        "ž": "z",
        "ẓ": "z",
        "ẕ": "z",
        "ƶ": "z",
        "ȥ": "z",
        "ɀ": "z",
        "ⱬ": "z",
        "ꝣ": "z",
        "Ά": "Α",
        "Έ": "Ε",
        "Ή": "Η",
        "Ί": "Ι",
        "Ϊ": "Ι",
        "Ό": "Ο",
        "Ύ": "Υ",
        "Ϋ": "Υ",
        "Ώ": "Ω",
        "ά": "α",
        "έ": "ε",
        "ή": "η",
        "ί": "ι",
        "ϊ": "ι",
        "ΐ": "ι",
        "ό": "ο",
        "ύ": "υ",
        "ϋ": "υ",
        "ΰ": "υ",
        "ώ": "ω",
        "ς": "σ",
        "’": "'"
      };
    }), t.define("select2/data/base", ["../utils"], function (i) {
      function n(t, e) {
        n.__super__.constructor.call(this);
      }

      return i.Extend(n, i.Observable), n.prototype.current = function (t) {
        throw new Error("The `current` method must be defined in child classes.");
      }, n.prototype.query = function (t, e) {
        throw new Error("The `query` method must be defined in child classes.");
      }, n.prototype.bind = function (t, e) {}, n.prototype.destroy = function () {}, n.prototype.generateResultId = function (t, e) {
        var n = t.id + "-result-";
        return n += i.generateChars(4), null != e.id ? n += "-" + e.id.toString() : n += "-" + i.generateChars(4), n;
      }, n;
    }), t.define("select2/data/select", ["./base", "../utils", "jquery"], function (t, a, l) {
      function n(t, e) {
        this.$element = t, this.options = e, n.__super__.constructor.call(this);
      }

      return a.Extend(n, t), n.prototype.current = function (t) {
        var n = [],
            i = this;
        this.$element.find(":selected").each(function () {
          var t = l(this),
              e = i.item(t);
          n.push(e);
        }), t(n);
      }, n.prototype.select = function (s) {
        var o = this;
        if (s.selected = !0, l(s.element).is("option")) return s.element.selected = !0, void this.$element.trigger("change");
        if (this.$element.prop("multiple")) this.current(function (t) {
          var e = [];
          (s = [s]).push.apply(s, t);

          for (var n = 0; n < s.length; n++) {
            var i = s[n].id;
            -1 === l.inArray(i, e) && e.push(i);
          }

          o.$element.val(e), o.$element.trigger("change");
        });else {
          var t = s.id;
          this.$element.val(t), this.$element.trigger("change");
        }
      }, n.prototype.unselect = function (s) {
        var o = this;

        if (this.$element.prop("multiple")) {
          if (s.selected = !1, l(s.element).is("option")) return s.element.selected = !1, void this.$element.trigger("change");
          this.current(function (t) {
            for (var e = [], n = 0; n < t.length; n++) {
              var i = t[n].id;
              i !== s.id && -1 === l.inArray(i, e) && e.push(i);
            }

            o.$element.val(e), o.$element.trigger("change");
          });
        }
      }, n.prototype.bind = function (t, e) {
        var n = this;
        (this.container = t).on("select", function (t) {
          n.select(t.data);
        }), t.on("unselect", function (t) {
          n.unselect(t.data);
        });
      }, n.prototype.destroy = function () {
        this.$element.find("*").each(function () {
          a.RemoveData(this);
        });
      }, n.prototype.query = function (i, t) {
        var s = [],
            o = this;
        this.$element.children().each(function () {
          var t = l(this);

          if (t.is("option") || t.is("optgroup")) {
            var e = o.item(t),
                n = o.matches(i, e);
            null !== n && s.push(n);
          }
        }), t({
          results: s
        });
      }, n.prototype.addOptions = function (t) {
        a.appendMany(this.$element, t);
      }, n.prototype.option = function (t) {
        var e;
        t.children ? (e = document.createElement("optgroup")).label = t.text : void 0 !== (e = document.createElement("option")).textContent ? e.textContent = t.text : e.innerText = t.text, void 0 !== t.id && (e.value = t.id), t.disabled && (e.disabled = !0), t.selected && (e.selected = !0), t.title && (e.title = t.title);

        var n = l(e),
            i = this._normalizeItem(t);

        return i.element = e, a.StoreData(e, "data", i), n;
      }, n.prototype.item = function (t) {
        var e = {};
        if (null != (e = a.GetData(t[0], "data"))) return e;
        if (t.is("option")) e = {
          id: t.val(),
          text: t.text(),
          disabled: t.prop("disabled"),
          selected: t.prop("selected"),
          title: t.prop("title")
        };else if (t.is("optgroup")) {
          e = {
            text: t.prop("label"),
            children: [],
            title: t.prop("title")
          };

          for (var n = t.children("option"), i = [], s = 0; s < n.length; s++) {
            var o = l(n[s]),
                r = this.item(o);
            i.push(r);
          }

          e.children = i;
        }
        return (e = this._normalizeItem(e)).element = t[0], a.StoreData(t[0], "data", e), e;
      }, n.prototype._normalizeItem = function (t) {
        t !== Object(t) && (t = {
          id: t,
          text: t
        });
        return null != (t = l.extend({}, {
          text: ""
        }, t)).id && (t.id = t.id.toString()), null != t.text && (t.text = t.text.toString()), null == t._resultId && t.id && null != this.container && (t._resultId = this.generateResultId(this.container, t)), l.extend({}, {
          selected: !1,
          disabled: !1
        }, t);
      }, n.prototype.matches = function (t, e) {
        return this.options.get("matcher")(t, e);
      }, n;
    }), t.define("select2/data/array", ["./select", "../utils", "jquery"], function (t, f, m) {
      function i(t, e) {
        var n = e.get("data") || [];
        i.__super__.constructor.call(this, t, e), this.addOptions(this.convertToOptions(n));
      }

      return f.Extend(i, t), i.prototype.select = function (n) {
        var t = this.$element.find("option").filter(function (t, e) {
          return e.value == n.id.toString();
        });
        0 === t.length && (t = this.option(n), this.addOptions(t)), i.__super__.select.call(this, n);
      }, i.prototype.convertToOptions = function (t) {
        function e(t) {
          return function () {
            return m(this).val() == t.id;
          };
        }

        for (var n = this, i = this.$element.find("option"), s = i.map(function () {
          return n.item(m(this)).id;
        }).get(), o = [], r = 0; r < t.length; r++) {
          var a = this._normalizeItem(t[r]);

          if (0 <= m.inArray(a.id, s)) {
            var l = i.filter(e(a)),
                c = this.item(l),
                h = m.extend(!0, {}, a, c),
                u = this.option(h);
            l.replaceWith(u);
          } else {
            var d = this.option(a);

            if (a.children) {
              var p = this.convertToOptions(a.children);
              f.appendMany(d, p);
            }

            o.push(d);
          }
        }

        return o;
      }, i;
    }), t.define("select2/data/ajax", ["./array", "../utils", "jquery"], function (t, e, o) {
      function n(t, e) {
        this.ajaxOptions = this._applyDefaults(e.get("ajax")), null != this.ajaxOptions.processResults && (this.processResults = this.ajaxOptions.processResults), n.__super__.constructor.call(this, t, e);
      }

      return e.Extend(n, t), n.prototype._applyDefaults = function (t) {
        var e = {
          data: function data(t) {
            return o.extend({}, t, {
              q: t.term
            });
          },
          transport: function transport(t, e, n) {
            var i = o.ajax(t);
            return i.then(e), i.fail(n), i;
          }
        };
        return o.extend({}, e, t, !0);
      }, n.prototype.processResults = function (t) {
        return t;
      }, n.prototype.query = function (n, i) {
        function t() {
          var t = e.transport(e, function (t) {
            var e = s.processResults(t, n);
            s.options.get("debug") && window.console && console.error && (e && e.results && o.isArray(e.results) || console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")), i(e);
          }, function () {
            "status" in t && (0 === t.status || "0" === t.status) || s.trigger("results:message", {
              message: "errorLoading"
            });
          });
          s._request = t;
        }

        var s = this;
        null != this._request && (o.isFunction(this._request.abort) && this._request.abort(), this._request = null);
        var e = o.extend({
          type: "GET"
        }, this.ajaxOptions);
        "function" == typeof e.url && (e.url = e.url.call(this.$element, n)), "function" == typeof e.data && (e.data = e.data.call(this.$element, n)), this.ajaxOptions.delay && null != n.term ? (this._queryTimeout && window.clearTimeout(this._queryTimeout), this._queryTimeout = window.setTimeout(t, this.ajaxOptions.delay)) : t();
      }, n;
    }), t.define("select2/data/tags", ["jquery"], function (h) {
      function t(t, e, n) {
        var i = n.get("tags"),
            s = n.get("createTag");
        void 0 !== s && (this.createTag = s);
        var o = n.get("insertTag");
        if (void 0 !== o && (this.insertTag = o), t.call(this, e, n), h.isArray(i)) for (var r = 0; r < i.length; r++) {
          var a = i[r],
              l = this._normalizeItem(a),
              c = this.option(l);

          this.$element.append(c);
        }
      }

      return t.prototype.query = function (t, c, h) {
        var u = this;
        this._removeOldTags(), null != c.term && null == c.page ? t.call(this, c, function t(e, n) {
          for (var i = e.results, s = 0; s < i.length; s++) {
            var o = i[s],
                r = null != o.children && !t({
              results: o.children
            }, !0);
            if ((o.text || "").toUpperCase() === (c.term || "").toUpperCase() || r) return !n && (e.data = i, void h(e));
          }

          if (n) return !0;
          var a = u.createTag(c);

          if (null != a) {
            var l = u.option(a);
            l.attr("data-select2-tag", !0), u.addOptions([l]), u.insertTag(i, a);
          }

          e.results = i, h(e);
        }) : t.call(this, c, h);
      }, t.prototype.createTag = function (t, e) {
        var n = h.trim(e.term);
        return "" === n ? null : {
          id: n,
          text: n
        };
      }, t.prototype.insertTag = function (t, e, n) {
        e.unshift(n);
      }, t.prototype._removeOldTags = function (t) {
        this._lastTag, this.$element.find("option[data-select2-tag]").each(function () {
          this.selected || h(this).remove();
        });
      }, t;
    }), t.define("select2/data/tokenizer", ["jquery"], function (u) {
      function t(t, e, n) {
        var i = n.get("tokenizer");
        void 0 !== i && (this.tokenizer = i), t.call(this, e, n);
      }

      return t.prototype.bind = function (t, e, n) {
        t.call(this, e, n), this.$search = e.dropdown.$search || e.selection.$search || n.find(".select2-search__field");
      }, t.prototype.query = function (t, e, n) {
        var s = this;
        e.term = e.term || "";
        var i = this.tokenizer(e, this.options, function (t) {
          var e,
              n = s._normalizeItem(t);

          if (!s.$element.find("option").filter(function () {
            return u(this).val() === n.id;
          }).length) {
            var i = s.option(n);
            i.attr("data-select2-tag", !0), s._removeOldTags(), s.addOptions([i]);
          }

          e = n, s.trigger("select", {
            data: e
          });
        });
        i.term !== e.term && (this.$search.length && (this.$search.val(i.term), this.$search.focus()), e.term = i.term), t.call(this, e, n);
      }, t.prototype.tokenizer = function (t, e, n, i) {
        for (var s = n.get("tokenSeparators") || [], o = e.term, r = 0, a = this.createTag || function (t) {
          return {
            id: t.term,
            text: t.term
          };
        }; r < o.length;) {
          var l = o[r];

          if (-1 !== u.inArray(l, s)) {
            var c = o.substr(0, r),
                h = a(u.extend({}, e, {
              term: c
            }));
            null != h ? (i(h), o = o.substr(r + 1) || "", r = 0) : r++;
          } else r++;
        }

        return {
          term: o
        };
      }, t;
    }), t.define("select2/data/minimumInputLength", [], function () {
      function t(t, e, n) {
        this.minimumInputLength = n.get("minimumInputLength"), t.call(this, e, n);
      }

      return t.prototype.query = function (t, e, n) {
        e.term = e.term || "", e.term.length < this.minimumInputLength ? this.trigger("results:message", {
          message: "inputTooShort",
          args: {
            minimum: this.minimumInputLength,
            input: e.term,
            params: e
          }
        }) : t.call(this, e, n);
      }, t;
    }), t.define("select2/data/maximumInputLength", [], function () {
      function t(t, e, n) {
        this.maximumInputLength = n.get("maximumInputLength"), t.call(this, e, n);
      }

      return t.prototype.query = function (t, e, n) {
        e.term = e.term || "", 0 < this.maximumInputLength && e.term.length > this.maximumInputLength ? this.trigger("results:message", {
          message: "inputTooLong",
          args: {
            maximum: this.maximumInputLength,
            input: e.term,
            params: e
          }
        }) : t.call(this, e, n);
      }, t;
    }), t.define("select2/data/maximumSelectionLength", [], function () {
      function t(t, e, n) {
        this.maximumSelectionLength = n.get("maximumSelectionLength"), t.call(this, e, n);
      }

      return t.prototype.query = function (n, i, s) {
        var o = this;
        this.current(function (t) {
          var e = null != t ? t.length : 0;
          0 < o.maximumSelectionLength && e >= o.maximumSelectionLength ? o.trigger("results:message", {
            message: "maximumSelected",
            args: {
              maximum: o.maximumSelectionLength
            }
          }) : n.call(o, i, s);
        });
      }, t;
    }), t.define("select2/dropdown", ["jquery", "./utils"], function (e, t) {
      function n(t, e) {
        this.$element = t, this.options = e, n.__super__.constructor.call(this);
      }

      return t.Extend(n, t.Observable), n.prototype.render = function () {
        var t = e('<span class="select2-dropdown"><span class="select2-results"></span></span>');
        return t.attr("dir", this.options.get("dir")), this.$dropdown = t;
      }, n.prototype.bind = function () {}, n.prototype.position = function (t, e) {}, n.prototype.destroy = function () {
        this.$dropdown.remove();
      }, n;
    }), t.define("select2/dropdown/search", ["jquery", "../utils"], function (s, t) {
      function e() {}

      return e.prototype.render = function (t) {
        var e = t.call(this),
            n = s('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="textbox" /></span>');
        return this.$searchContainer = n, this.$search = n.find("input"), e.prepend(n), e;
      }, e.prototype.bind = function (t, e, n) {
        var i = this;
        t.call(this, e, n), this.$search.on("keydown", function (t) {
          i.trigger("keypress", t), i._keyUpPrevented = t.isDefaultPrevented();
        }), this.$search.on("input", function (t) {
          s(this).off("keyup");
        }), this.$search.on("keyup input", function (t) {
          i.handleSearch(t);
        }), e.on("open", function () {
          i.$search.attr("tabindex", 0), i.$search.focus(), window.setTimeout(function () {
            i.$search.focus();
          }, 0);
        }), e.on("close", function () {
          i.$search.attr("tabindex", -1), i.$search.val(""), i.$search.blur();
        }), e.on("focus", function () {
          e.isOpen() || i.$search.focus();
        }), e.on("results:all", function (t) {
          null != t.query.term && "" !== t.query.term || (i.showSearch(t) ? i.$searchContainer.removeClass("select2-search--hide") : i.$searchContainer.addClass("select2-search--hide"));
        });
      }, e.prototype.handleSearch = function (t) {
        if (!this._keyUpPrevented) {
          var e = this.$search.val();
          this.trigger("query", {
            term: e
          });
        }

        this._keyUpPrevented = !1;
      }, e.prototype.showSearch = function (t, e) {
        return !0;
      }, e;
    }), t.define("select2/dropdown/hidePlaceholder", [], function () {
      function t(t, e, n, i) {
        this.placeholder = this.normalizePlaceholder(n.get("placeholder")), t.call(this, e, n, i);
      }

      return t.prototype.append = function (t, e) {
        e.results = this.removePlaceholder(e.results), t.call(this, e);
      }, t.prototype.normalizePlaceholder = function (t, e) {
        return "string" == typeof e && (e = {
          id: "",
          text: e
        }), e;
      }, t.prototype.removePlaceholder = function (t, e) {
        for (var n = e.slice(0), i = e.length - 1; 0 <= i; i--) {
          var s = e[i];
          this.placeholder.id === s.id && n.splice(i, 1);
        }

        return n;
      }, t;
    }), t.define("select2/dropdown/infiniteScroll", ["jquery"], function (s) {
      function t(t, e, n, i) {
        this.lastParams = {}, t.call(this, e, n, i), this.$loadingMore = this.createLoadingMore(), this.loading = !1;
      }

      return t.prototype.append = function (t, e) {
        this.$loadingMore.remove(), this.loading = !1, t.call(this, e), this.showLoadingMore(e) && this.$results.append(this.$loadingMore);
      }, t.prototype.bind = function (t, e, n) {
        var i = this;
        t.call(this, e, n), e.on("query", function (t) {
          i.lastParams = t, i.loading = !0;
        }), e.on("query:append", function (t) {
          i.lastParams = t, i.loading = !0;
        }), this.$results.on("scroll", function () {
          var t = s.contains(document.documentElement, i.$loadingMore[0]);
          !i.loading && t && i.$results.offset().top + i.$results.outerHeight(!1) + 50 >= i.$loadingMore.offset().top + i.$loadingMore.outerHeight(!1) && i.loadMore();
        });
      }, t.prototype.loadMore = function () {
        this.loading = !0;
        var t = s.extend({}, {
          page: 1
        }, this.lastParams);
        t.page++, this.trigger("query:append", t);
      }, t.prototype.showLoadingMore = function (t, e) {
        return e.pagination && e.pagination.more;
      }, t.prototype.createLoadingMore = function () {
        var t = s('<li class="select2-results__option select2-results__option--load-more"role="treeitem" aria-disabled="true"></li>'),
            e = this.options.get("translations").get("loadingMore");
        return t.html(e(this.lastParams)), t;
      }, t;
    }), t.define("select2/dropdown/attachBody", ["jquery", "../utils"], function (f, a) {
      function t(t, e, n) {
        this.$dropdownParent = n.get("dropdownParent") || f(document.body), t.call(this, e, n);
      }

      return t.prototype.bind = function (t, e, n) {
        var i = this,
            s = !1;
        t.call(this, e, n), e.on("open", function () {
          i._showDropdown(), i._attachPositioningHandler(e), s || (s = !0, e.on("results:all", function () {
            i._positionDropdown(), i._resizeDropdown();
          }), e.on("results:append", function () {
            i._positionDropdown(), i._resizeDropdown();
          }));
        }), e.on("close", function () {
          i._hideDropdown(), i._detachPositioningHandler(e);
        }), this.$dropdownContainer.on("mousedown", function (t) {
          t.stopPropagation();
        });
      }, t.prototype.destroy = function (t) {
        t.call(this), this.$dropdownContainer.remove();
      }, t.prototype.position = function (t, e, n) {
        e.attr("class", n.attr("class")), e.removeClass("select2"), e.addClass("select2-container--open"), e.css({
          position: "absolute",
          top: -999999
        }), this.$container = n;
      }, t.prototype.render = function (t) {
        var e = f("<span></span>"),
            n = t.call(this);
        return e.append(n), this.$dropdownContainer = e;
      }, t.prototype._hideDropdown = function (t) {
        this.$dropdownContainer.detach();
      }, t.prototype._attachPositioningHandler = function (t, e) {
        var n = this,
            i = "scroll.select2." + e.id,
            s = "resize.select2." + e.id,
            o = "orientationchange.select2." + e.id,
            r = this.$container.parents().filter(a.hasScroll);
        r.each(function () {
          a.StoreData(this, "select2-scroll-position", {
            x: f(this).scrollLeft(),
            y: f(this).scrollTop()
          });
        }), r.on(i, function (t) {
          var e = a.GetData(this, "select2-scroll-position");
          f(this).scrollTop(e.y);
        }), f(window).on(i + " " + s + " " + o, function (t) {
          n._positionDropdown(), n._resizeDropdown();
        });
      }, t.prototype._detachPositioningHandler = function (t, e) {
        var n = "scroll.select2." + e.id,
            i = "resize.select2." + e.id,
            s = "orientationchange.select2." + e.id;
        this.$container.parents().filter(a.hasScroll).off(n), f(window).off(n + " " + i + " " + s);
      }, t.prototype._positionDropdown = function () {
        var t = f(window),
            e = this.$dropdown.hasClass("select2-dropdown--above"),
            n = this.$dropdown.hasClass("select2-dropdown--below"),
            i = null,
            s = this.$container.offset();
        s.bottom = s.top + this.$container.outerHeight(!1);
        var o = {
          height: this.$container.outerHeight(!1)
        };
        o.top = s.top, o.bottom = s.top + o.height;
        var r = this.$dropdown.outerHeight(!1),
            a = t.scrollTop(),
            l = t.scrollTop() + t.height(),
            c = a < s.top - r,
            h = l > s.bottom + r,
            u = {
          left: s.left,
          top: o.bottom
        },
            d = this.$dropdownParent;
        "static" === d.css("position") && (d = d.offsetParent());
        var p = d.offset();
        u.top -= p.top, u.left -= p.left, e || n || (i = "below"), h || !c || e ? !c && h && e && (i = "below") : i = "above", ("above" == i || e && "below" !== i) && (u.top = o.top - p.top - r), null != i && (this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--" + i), this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--" + i)), this.$dropdownContainer.css(u);
      }, t.prototype._resizeDropdown = function () {
        var t = {
          width: this.$container.outerWidth(!1) + "px"
        };
        this.options.get("dropdownAutoWidth") && (t.minWidth = t.width, t.position = "relative", t.width = "auto"), this.$dropdown.css(t);
      }, t.prototype._showDropdown = function (t) {
        this.$dropdownContainer.appendTo(this.$dropdownParent), this._positionDropdown(), this._resizeDropdown();
      }, t;
    }), t.define("select2/dropdown/minimumResultsForSearch", [], function () {
      function t(t, e, n, i) {
        this.minimumResultsForSearch = n.get("minimumResultsForSearch"), this.minimumResultsForSearch < 0 && (this.minimumResultsForSearch = 1 / 0), t.call(this, e, n, i);
      }

      return t.prototype.showSearch = function (t, e) {
        return !(function t(e) {
          for (var n = 0, i = 0; i < e.length; i++) {
            var s = e[i];
            s.children ? n += t(s.children) : n++;
          }

          return n;
        }(e.data.results) < this.minimumResultsForSearch) && t.call(this, e);
      }, t;
    }), t.define("select2/dropdown/selectOnClose", ["../utils"], function (o) {
      function t() {}

      return t.prototype.bind = function (t, e, n) {
        var i = this;
        t.call(this, e, n), e.on("close", function (t) {
          i._handleSelectOnClose(t);
        });
      }, t.prototype._handleSelectOnClose = function (t, e) {
        if (e && null != e.originalSelect2Event) {
          var n = e.originalSelect2Event;
          if ("select" === n._type || "unselect" === n._type) return;
        }

        var i = this.getHighlightedResults();

        if (!(i.length < 1)) {
          var s = o.GetData(i[0], "data");
          null != s.element && s.element.selected || null == s.element && s.selected || this.trigger("select", {
            data: s
          });
        }
      }, t;
    }), t.define("select2/dropdown/closeOnSelect", [], function () {
      function t() {}

      return t.prototype.bind = function (t, e, n) {
        var i = this;
        t.call(this, e, n), e.on("select", function (t) {
          i._selectTriggered(t);
        }), e.on("unselect", function (t) {
          i._selectTriggered(t);
        });
      }, t.prototype._selectTriggered = function (t, e) {
        var n = e.originalEvent;
        n && (n.ctrlKey || n.metaKey) || this.trigger("close", {
          originalEvent: n,
          originalSelect2Event: e
        });
      }, t;
    }), t.define("select2/i18n/en", [], function () {
      return {
        errorLoading: function errorLoading() {
          return "The results could not be loaded.";
        },
        inputTooLong: function inputTooLong(t) {
          var e = t.input.length - t.maximum,
              n = "Please delete " + e + " character";
          return 1 != e && (n += "s"), n;
        },
        inputTooShort: function inputTooShort(t) {
          return "Please enter " + (t.minimum - t.input.length) + " or more characters";
        },
        loadingMore: function loadingMore() {
          return "Loading more results…";
        },
        maximumSelected: function maximumSelected(t) {
          var e = "You can only select " + t.maximum + " item";
          return 1 != t.maximum && (e += "s"), e;
        },
        noResults: function noResults() {
          return "No results found";
        },
        searching: function searching() {
          return "Searching…";
        },
        removeAllItems: function removeAllItems() {
          return "Remove all items";
        }
      };
    }), t.define("select2/defaults", ["jquery", "require", "./results", "./selection/single", "./selection/multiple", "./selection/placeholder", "./selection/allowClear", "./selection/search", "./selection/eventRelay", "./utils", "./translation", "./diacritics", "./data/select", "./data/array", "./data/ajax", "./data/tags", "./data/tokenizer", "./data/minimumInputLength", "./data/maximumInputLength", "./data/maximumSelectionLength", "./dropdown", "./dropdown/search", "./dropdown/hidePlaceholder", "./dropdown/infiniteScroll", "./dropdown/attachBody", "./dropdown/minimumResultsForSearch", "./dropdown/selectOnClose", "./dropdown/closeOnSelect", "./i18n/en"], function (f, m, g, v, y, b, _, w, D, k, C, e, x, S, T, E, M, A, O, I, N, P, L, j, H, Y, $, R, t) {
      function n() {
        this.reset();
      }

      return n.prototype.apply = function (e) {
        if (null == (e = f.extend(!0, {}, this.defaults, e)).dataAdapter) {
          if (null != e.ajax ? e.dataAdapter = T : null != e.data ? e.dataAdapter = S : e.dataAdapter = x, 0 < e.minimumInputLength && (e.dataAdapter = k.Decorate(e.dataAdapter, A)), 0 < e.maximumInputLength && (e.dataAdapter = k.Decorate(e.dataAdapter, O)), 0 < e.maximumSelectionLength && (e.dataAdapter = k.Decorate(e.dataAdapter, I)), e.tags && (e.dataAdapter = k.Decorate(e.dataAdapter, E)), null == e.tokenSeparators && null == e.tokenizer || (e.dataAdapter = k.Decorate(e.dataAdapter, M)), null != e.query) {
            var t = m(e.amdBase + "compat/query");
            e.dataAdapter = k.Decorate(e.dataAdapter, t);
          }

          if (null != e.initSelection) {
            var n = m(e.amdBase + "compat/initSelection");
            e.dataAdapter = k.Decorate(e.dataAdapter, n);
          }
        }

        if (null == e.resultsAdapter && (e.resultsAdapter = g, null != e.ajax && (e.resultsAdapter = k.Decorate(e.resultsAdapter, j)), null != e.placeholder && (e.resultsAdapter = k.Decorate(e.resultsAdapter, L)), e.selectOnClose && (e.resultsAdapter = k.Decorate(e.resultsAdapter, $))), null == e.dropdownAdapter) {
          if (e.multiple) e.dropdownAdapter = N;else {
            var i = k.Decorate(N, P);
            e.dropdownAdapter = i;
          }

          if (0 !== e.minimumResultsForSearch && (e.dropdownAdapter = k.Decorate(e.dropdownAdapter, Y)), e.closeOnSelect && (e.dropdownAdapter = k.Decorate(e.dropdownAdapter, R)), null != e.dropdownCssClass || null != e.dropdownCss || null != e.adaptDropdownCssClass) {
            var s = m(e.amdBase + "compat/dropdownCss");
            e.dropdownAdapter = k.Decorate(e.dropdownAdapter, s);
          }

          e.dropdownAdapter = k.Decorate(e.dropdownAdapter, H);
        }

        if (null == e.selectionAdapter) {
          if (e.multiple ? e.selectionAdapter = y : e.selectionAdapter = v, null != e.placeholder && (e.selectionAdapter = k.Decorate(e.selectionAdapter, b)), e.allowClear && (e.selectionAdapter = k.Decorate(e.selectionAdapter, _)), e.multiple && (e.selectionAdapter = k.Decorate(e.selectionAdapter, w)), null != e.containerCssClass || null != e.containerCss || null != e.adaptContainerCssClass) {
            var o = m(e.amdBase + "compat/containerCss");
            e.selectionAdapter = k.Decorate(e.selectionAdapter, o);
          }

          e.selectionAdapter = k.Decorate(e.selectionAdapter, D);
        }

        if ("string" == typeof e.language) if (0 < e.language.indexOf("-")) {
          var r = e.language.split("-")[0];
          e.language = [e.language, r];
        } else e.language = [e.language];

        if (f.isArray(e.language)) {
          var a = new C();
          e.language.push("en");

          for (var l = e.language, c = 0; c < l.length; c++) {
            var h = l[c],
                u = {};

            try {
              u = C.loadPath(h);
            } catch (t) {
              try {
                h = this.defaults.amdLanguageBase + h, u = C.loadPath(h);
              } catch (t) {
                e.debug && window.console && console.warn && console.warn('Select2: The language file for "' + h + '" could not be automatically loaded. A fallback will be used instead.');
                continue;
              }
            }

            a.extend(u);
          }

          e.translations = a;
        } else {
          var d = C.loadPath(this.defaults.amdLanguageBase + "en"),
              p = new C(e.language);
          p.extend(d), e.translations = p;
        }

        return e;
      }, n.prototype.reset = function () {
        function a(t) {
          return t.replace(/[^\u0000-\u007E]/g, function (t) {
            return e[t] || t;
          });
        }

        this.defaults = {
          amdBase: "./",
          amdLanguageBase: "./i18n/",
          closeOnSelect: !0,
          debug: !1,
          dropdownAutoWidth: !1,
          escapeMarkup: k.escapeMarkup,
          language: t,
          matcher: function t(e, n) {
            if ("" === f.trim(e.term)) return n;

            if (n.children && 0 < n.children.length) {
              for (var i = f.extend(!0, {}, n), s = n.children.length - 1; 0 <= s; s--) {
                null == t(e, n.children[s]) && i.children.splice(s, 1);
              }

              return 0 < i.children.length ? i : t(e, i);
            }

            var o = a(n.text).toUpperCase(),
                r = a(e.term).toUpperCase();
            return -1 < o.indexOf(r) ? n : null;
          },
          minimumInputLength: 0,
          maximumInputLength: 0,
          maximumSelectionLength: 0,
          minimumResultsForSearch: 0,
          selectOnClose: !1,
          scrollAfterSelect: !1,
          sorter: function sorter(t) {
            return t;
          },
          templateResult: function templateResult(t) {
            return t.text;
          },
          templateSelection: function templateSelection(t) {
            return t.text;
          },
          theme: "default",
          width: "resolve"
        };
      }, n.prototype.set = function (t, e) {
        var n = {};
        n[f.camelCase(t)] = e;

        var i = k._convertData(n);

        f.extend(!0, this.defaults, i);
      }, new n();
    }), t.define("select2/options", ["require", "jquery", "./defaults", "./utils"], function (i, h, s, u) {
      function t(t, e) {
        if (this.options = t, null != e && this.fromElement(e), this.options = s.apply(this.options), e && e.is("input")) {
          var n = i(this.get("amdBase") + "compat/inputData");
          this.options.dataAdapter = u.Decorate(this.options.dataAdapter, n);
        }
      }

      return t.prototype.fromElement = function (t) {
        function e(t, e) {
          return e.toUpperCase();
        }

        var n = ["select2"];
        null == this.options.multiple && (this.options.multiple = t.prop("multiple")), null == this.options.disabled && (this.options.disabled = t.prop("disabled")), null == this.options.language && (t.prop("lang") ? this.options.language = t.prop("lang").toLowerCase() : t.closest("[lang]").prop("lang") && (this.options.language = t.closest("[lang]").prop("lang"))), null == this.options.dir && (t.prop("dir") ? this.options.dir = t.prop("dir") : t.closest("[dir]").prop("dir") ? this.options.dir = t.closest("[dir]").prop("dir") : this.options.dir = "ltr"), t.prop("disabled", this.options.disabled), t.prop("multiple", this.options.multiple), u.GetData(t[0], "select2Tags") && (this.options.debug && window.console && console.warn && console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'), u.StoreData(t[0], "data", u.GetData(t[0], "select2Tags")), u.StoreData(t[0], "tags", !0)), u.GetData(t[0], "ajaxUrl") && (this.options.debug && window.console && console.warn && console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."), t.attr("ajax--url", u.GetData(t[0], "ajaxUrl")), u.StoreData(t[0], "ajax-Url", u.GetData(t[0], "ajaxUrl")));

        for (var i = {}, s = 0; s < t[0].attributes.length; s++) {
          var o = t[0].attributes[s].name;

          if ("data-" == o.substr(0, "data-".length)) {
            var r = o.substring("data-".length),
                a = u.GetData(t[0], r);
            i[r.replace(/-([a-z])/g, e)] = a;
          }
        }

        h.fn.jquery && "1." == h.fn.jquery.substr(0, 2) && t[0].dataset && (i = h.extend(!0, {}, t[0].dataset, i));
        var l = h.extend(!0, {}, u.GetData(t[0]), i);

        for (var c in l = u._convertData(l)) {
          -1 < h.inArray(c, n) || (h.isPlainObject(this.options[c]) ? h.extend(this.options[c], l[c]) : this.options[c] = l[c]);
        }

        return this;
      }, t.prototype.get = function (t) {
        return this.options[t];
      }, t.prototype.set = function (t, e) {
        this.options[t] = e;
      }, t;
    }), t.define("select2/core", ["jquery", "./options", "./utils", "./keys"], function (s, c, h, i) {
      var u = function u(t, e) {
        null != h.GetData(t[0], "select2") && h.GetData(t[0], "select2").destroy(), this.$element = t, this.id = this._generateId(t), e = e || {}, this.options = new c(e, t), u.__super__.constructor.call(this);
        var n = t.attr("tabindex") || 0;
        h.StoreData(t[0], "old-tabindex", n), t.attr("tabindex", "-1");
        var i = this.options.get("dataAdapter");
        this.dataAdapter = new i(t, this.options);
        var s = this.render();

        this._placeContainer(s);

        var o = this.options.get("selectionAdapter");
        this.selection = new o(t, this.options), this.$selection = this.selection.render(), this.selection.position(this.$selection, s);
        var r = this.options.get("dropdownAdapter");
        this.dropdown = new r(t, this.options), this.$dropdown = this.dropdown.render(), this.dropdown.position(this.$dropdown, s);
        var a = this.options.get("resultsAdapter");
        this.results = new a(t, this.options, this.dataAdapter), this.$results = this.results.render(), this.results.position(this.$results, this.$dropdown);
        var l = this;
        this._bindAdapters(), this._registerDomEvents(), this._registerDataEvents(), this._registerSelectionEvents(), this._registerDropdownEvents(), this._registerResultsEvents(), this._registerEvents(), this.dataAdapter.current(function (t) {
          l.trigger("selection:update", {
            data: t
          });
        }), t.addClass("select2-hidden-accessible"), t.attr("aria-hidden", "true"), this._syncAttributes(), h.StoreData(t[0], "select2", this), t.data("select2", this);
      };

      return h.Extend(u, h.Observable), u.prototype._generateId = function (t) {
        return "select2-" + (null != t.attr("id") ? t.attr("id") : null != t.attr("name") ? t.attr("name") + "-" + h.generateChars(2) : h.generateChars(4)).replace(/(:|\.|\[|\]|,)/g, "");
      }, u.prototype._placeContainer = function (t) {
        t.insertAfter(this.$element);

        var e = this._resolveWidth(this.$element, this.options.get("width"));

        null != e && t.css("width", e);
      }, u.prototype._resolveWidth = function (t, e) {
        var n = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;

        if ("resolve" == e) {
          var i = this._resolveWidth(t, "style");

          return null != i ? i : this._resolveWidth(t, "element");
        }

        if ("element" == e) {
          var s = t.outerWidth(!1);
          return s <= 0 ? "auto" : s + "px";
        }

        if ("style" != e) return e;
        var o = t.attr("style");
        if ("string" != typeof o) return null;

        for (var r = o.split(";"), a = 0, l = r.length; a < l; a += 1) {
          var c = r[a].replace(/\s/g, "").match(n);
          if (null !== c && 1 <= c.length) return c[1];
        }

        return null;
      }, u.prototype._bindAdapters = function () {
        this.dataAdapter.bind(this, this.$container), this.selection.bind(this, this.$container), this.dropdown.bind(this, this.$container), this.results.bind(this, this.$container);
      }, u.prototype._registerDomEvents = function () {
        var e = this;
        this.$element.on("change.select2", function () {
          e.dataAdapter.current(function (t) {
            e.trigger("selection:update", {
              data: t
            });
          });
        }), this.$element.on("focus.select2", function (t) {
          e.trigger("focus", t);
        }), this._syncA = h.bind(this._syncAttributes, this), this._syncS = h.bind(this._syncSubtree, this), this.$element[0].attachEvent && this.$element[0].attachEvent("onpropertychange", this._syncA);
        var t = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
        null != t ? (this._observer = new t(function (t) {
          s.each(t, e._syncA), s.each(t, e._syncS);
        }), this._observer.observe(this.$element[0], {
          attributes: !0,
          childList: !0,
          subtree: !1
        })) : this.$element[0].addEventListener && (this.$element[0].addEventListener("DOMAttrModified", e._syncA, !1), this.$element[0].addEventListener("DOMNodeInserted", e._syncS, !1), this.$element[0].addEventListener("DOMNodeRemoved", e._syncS, !1));
      }, u.prototype._registerDataEvents = function () {
        var n = this;
        this.dataAdapter.on("*", function (t, e) {
          n.trigger(t, e);
        });
      }, u.prototype._registerSelectionEvents = function () {
        var n = this,
            i = ["toggle", "focus"];
        this.selection.on("toggle", function () {
          n.toggleDropdown();
        }), this.selection.on("focus", function (t) {
          n.focus(t);
        }), this.selection.on("*", function (t, e) {
          -1 === s.inArray(t, i) && n.trigger(t, e);
        });
      }, u.prototype._registerDropdownEvents = function () {
        var n = this;
        this.dropdown.on("*", function (t, e) {
          n.trigger(t, e);
        });
      }, u.prototype._registerResultsEvents = function () {
        var n = this;
        this.results.on("*", function (t, e) {
          n.trigger(t, e);
        });
      }, u.prototype._registerEvents = function () {
        var n = this;
        this.on("open", function () {
          n.$container.addClass("select2-container--open");
        }), this.on("close", function () {
          n.$container.removeClass("select2-container--open");
        }), this.on("enable", function () {
          n.$container.removeClass("select2-container--disabled");
        }), this.on("disable", function () {
          n.$container.addClass("select2-container--disabled");
        }), this.on("blur", function () {
          n.$container.removeClass("select2-container--focus");
        }), this.on("query", function (e) {
          n.isOpen() || n.trigger("open", {}), this.dataAdapter.query(e, function (t) {
            n.trigger("results:all", {
              data: t,
              query: e
            });
          });
        }), this.on("query:append", function (e) {
          this.dataAdapter.query(e, function (t) {
            n.trigger("results:append", {
              data: t,
              query: e
            });
          });
        }), this.on("keypress", function (t) {
          var e = t.which;
          n.isOpen() ? e === i.ESC || e === i.TAB || e === i.UP && t.altKey ? (n.close(), t.preventDefault()) : e === i.ENTER ? (n.trigger("results:select", {}), t.preventDefault()) : e === i.SPACE && t.ctrlKey ? (n.trigger("results:toggle", {}), t.preventDefault()) : e === i.UP ? (n.trigger("results:previous", {}), t.preventDefault()) : e === i.DOWN && (n.trigger("results:next", {}), t.preventDefault()) : (e === i.ENTER || e === i.SPACE || e === i.DOWN && t.altKey) && (n.open(), t.preventDefault());
        });
      }, u.prototype._syncAttributes = function () {
        this.options.set("disabled", this.$element.prop("disabled")), this.options.get("disabled") ? (this.isOpen() && this.close(), this.trigger("disable", {})) : this.trigger("enable", {});
      }, u.prototype._syncSubtree = function (t, e) {
        var n = !1,
            i = this;

        if (!t || !t.target || "OPTION" === t.target.nodeName || "OPTGROUP" === t.target.nodeName) {
          if (e) {
            if (e.addedNodes && 0 < e.addedNodes.length) for (var s = 0; s < e.addedNodes.length; s++) {
              e.addedNodes[s].selected && (n = !0);
            } else e.removedNodes && 0 < e.removedNodes.length && (n = !0);
          } else n = !0;
          n && this.dataAdapter.current(function (t) {
            i.trigger("selection:update", {
              data: t
            });
          });
        }
      }, u.prototype.trigger = function (t, e) {
        var n = u.__super__.trigger,
            i = {
          open: "opening",
          close: "closing",
          select: "selecting",
          unselect: "unselecting",
          clear: "clearing"
        };

        if (void 0 === e && (e = {}), t in i) {
          var s = i[t],
              o = {
            prevented: !1,
            name: t,
            args: e
          };
          if (n.call(this, s, o), o.prevented) return void (e.prevented = !0);
        }

        n.call(this, t, e);
      }, u.prototype.toggleDropdown = function () {
        this.options.get("disabled") || (this.isOpen() ? this.close() : this.open());
      }, u.prototype.open = function () {
        this.isOpen() || this.trigger("query", {});
      }, u.prototype.close = function () {
        this.isOpen() && this.trigger("close", {});
      }, u.prototype.isOpen = function () {
        return this.$container.hasClass("select2-container--open");
      }, u.prototype.hasFocus = function () {
        return this.$container.hasClass("select2-container--focus");
      }, u.prototype.focus = function (t) {
        this.hasFocus() || (this.$container.addClass("select2-container--focus"), this.trigger("focus", {}));
      }, u.prototype.enable = function (t) {
        this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'), null != t && 0 !== t.length || (t = [!0]);
        var e = !t[0];
        this.$element.prop("disabled", e);
      }, u.prototype.data = function () {
        this.options.get("debug") && 0 < arguments.length && window.console && console.warn && console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');
        var e = [];
        return this.dataAdapter.current(function (t) {
          e = t;
        }), e;
      }, u.prototype.val = function (t) {
        if (this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'), null == t || 0 === t.length) return this.$element.val();
        var e = t[0];
        s.isArray(e) && (e = s.map(e, function (t) {
          return t.toString();
        })), this.$element.val(e).trigger("change");
      }, u.prototype.destroy = function () {
        this.$container.remove(), this.$element[0].detachEvent && this.$element[0].detachEvent("onpropertychange", this._syncA), null != this._observer ? (this._observer.disconnect(), this._observer = null) : this.$element[0].removeEventListener && (this.$element[0].removeEventListener("DOMAttrModified", this._syncA, !1), this.$element[0].removeEventListener("DOMNodeInserted", this._syncS, !1), this.$element[0].removeEventListener("DOMNodeRemoved", this._syncS, !1)), this._syncA = null, this._syncS = null, this.$element.off(".select2"), this.$element.attr("tabindex", h.GetData(this.$element[0], "old-tabindex")), this.$element.removeClass("select2-hidden-accessible"), this.$element.attr("aria-hidden", "false"), h.RemoveData(this.$element[0]), this.$element.removeData("select2"), this.dataAdapter.destroy(), this.selection.destroy(), this.dropdown.destroy(), this.results.destroy(), this.dataAdapter = null, this.selection = null, this.dropdown = null, this.results = null;
      }, u.prototype.render = function () {
        var t = s('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');
        return t.attr("dir", this.options.get("dir")), this.$container = t, this.$container.addClass("select2-container--" + this.options.get("theme")), h.StoreData(t[0], "element", this.$element), t;
      }, u;
    }), t.define("jquery-mousewheel", ["jquery"], function (t) {
      return t;
    }), t.define("jquery.select2", ["jquery", "jquery-mousewheel", "./select2/core", "./select2/defaults", "./select2/utils"], function (s, t, o, e, r) {
      if (null == s.fn.select2) {
        var a = ["open", "close", "destroy"];

        s.fn.select2 = function (e) {
          if ("object" == typeof (e = e || {})) return this.each(function () {
            var t = s.extend(!0, {}, e);
            new o(s(this), t);
          }), this;
          if ("string" != typeof e) throw new Error("Invalid arguments for Select2: " + e);
          var n,
              i = Array.prototype.slice.call(arguments, 1);
          return this.each(function () {
            var t = r.GetData(this, "select2");
            null == t && window.console && console.error && console.error("The select2('" + e + "') method was called on an element that is not using Select2."), n = t[e].apply(t, i);
          }), -1 < s.inArray(e, a) ? this : n;
        };
      }

      return null == s.fn.select2.defaults && (s.fn.select2.defaults = e), o;
    }), {
      define: t.define,
      require: t.require
    };
  }(),
      e = t.require("jquery.select2");

  return n.fn.select2.amd = t, e;
});
var $jscomp = {
  scope: {},
  findInternal: function findInternal(t, e, n) {
    t instanceof String && (t = String(t));

    for (var i = t.length, s = 0; s < i; s++) {
      var o = t[s];
      if (e.call(n, o, s, t)) return {
        i: s,
        v: o
      };
    }

    return {
      i: -1,
      v: void 0
    };
  }
};
$jscomp.defineProperty = "function" == typeof Object.defineProperties ? Object.defineProperty : function (t, e, n) {
  if (n.get || n.set) throw new TypeError("ES3 does not support getters and setters.");
  t != Array.prototype && t != Object.prototype && (t[e] = n.value);
}, $jscomp.getGlobal = function (t) {
  return "undefined" != typeof window && window === t ? t : "undefined" != typeof global && null != global ? global : t;
}, $jscomp.global = $jscomp.getGlobal(this), $jscomp.polyfill = function (t, e, n, i) {
  if (e) {
    for (n = $jscomp.global, t = t.split("."), i = 0; i < t.length - 1; i++) {
      var s = t[i];
      s in n || (n[s] = {}), n = n[s];
    }

    (e = e(i = n[t = t[t.length - 1]])) != i && null != e && $jscomp.defineProperty(n, t, {
      configurable: !0,
      writable: !0,
      value: e
    });
  }
}, $jscomp.polyfill("Array.prototype.find", function (t) {
  return t || function (t, e) {
    return $jscomp.findInternal(this, t, e).v;
  };
}, "es6-impl", "es3"), function (t, e, n) {
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__WEBPACK_LOCAL_MODULE_0__], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(function (r) {
  var a = function a(c, b, _) {
    var w = {
      invalid: [],
      getCaret: function getCaret() {
        try {
          var t,
              e = 0,
              n = c.get(0),
              i = document.selection,
              s = n.selectionStart;
          return i && -1 === navigator.appVersion.indexOf("MSIE 10") ? ((t = i.createRange()).moveStart("character", -w.val().length), e = t.text.length) : (s || "0" === s) && (e = s), e;
        } catch (t) {}
      },
      setCaret: function setCaret(t) {
        try {
          if (c.is(":focus")) {
            var e,
                n = c.get(0);
            n.setSelectionRange ? n.setSelectionRange(t, t) : ((e = n.createTextRange()).collapse(!0), e.moveEnd("character", t), e.moveStart("character", t), e.select());
          }
        } catch (t) {}
      },
      events: function events() {
        c.on("keydown.mask", function (t) {
          c.data("mask-keycode", t.keyCode || t.which), c.data("mask-previus-value", c.val()), c.data("mask-previus-caret-pos", w.getCaret()), w.maskDigitPosMapOld = w.maskDigitPosMap;
        }).on(r.jMaskGlobals.useInput ? "input.mask" : "keyup.mask", w.behaviour).on("paste.mask drop.mask", function () {
          setTimeout(function () {
            c.keydown().keyup();
          }, 100);
        }).on("change.mask", function () {
          c.data("changed", !0);
        }).on("blur.mask", function () {
          o === w.val() || c.data("changed") || c.trigger("change"), c.data("changed", !1);
        }).on("blur.mask", function () {
          o = w.val();
        }).on("focus.mask", function (t) {
          !0 === _.selectOnFocus && r(t.target).select();
        }).on("focusout.mask", function () {
          _.clearIfNotMatch && !i.test(w.val()) && w.val("");
        });
      },
      getRegexMask: function getRegexMask() {
        for (var t, e, n, i, s = [], o = 0; o < b.length; o++) {
          (t = D.translation[b.charAt(o)]) ? (e = t.pattern.toString().replace(/.{1}$|^.{1}/g, ""), n = t.optional, (t = t.recursive) ? (s.push(b.charAt(o)), i = {
            digit: b.charAt(o),
            pattern: e
          }) : s.push(n || t ? e + "?" : e)) : s.push(b.charAt(o).replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"));
        }

        return s = s.join(""), i && (s = s.replace(new RegExp("(" + i.digit + "(.*" + i.digit + ")?)"), "($1)?").replace(new RegExp(i.digit, "g"), i.pattern)), new RegExp(s);
      },
      destroyEvents: function destroyEvents() {
        c.off("input keydown keyup paste drop blur focusout ".split(" ").join(".mask "));
      },
      val: function val(t) {
        var e = c.is("input") ? "val" : "text";
        return e = 0 < arguments.length ? (c[e]() !== t && c[e](t), c) : c[e]();
      },
      calculateCaretPosition: function calculateCaretPosition() {
        var t = c.data("mask-previus-value") || "",
            e = w.getMasked(),
            n = w.getCaret();

        if (t !== e) {
          var i,
              s = c.data("mask-previus-caret-pos") || 0,
              o = (e = e.length, t.length),
              r = t = 0,
              a = 0,
              l = 0;

          for (i = n; i < e && w.maskDigitPosMap[i]; i++) {
            r++;
          }

          for (i = n - 1; 0 <= i && w.maskDigitPosMap[i]; i--) {
            t++;
          }

          for (i = n - 1; 0 <= i; i--) {
            w.maskDigitPosMap[i] && a++;
          }

          for (i = s - 1; 0 <= i; i--) {
            w.maskDigitPosMapOld[i] && l++;
          }

          o < n ? n = 10 * e : n <= s && s !== o ? w.maskDigitPosMapOld[n] || (n = (s = n) - (l - a) - t, w.maskDigitPosMap[n] && (n = s)) : s < n && (n = n + (a - l) + r);
        }

        return n;
      },
      behaviour: function behaviour(t) {
        t = t || window.event, w.invalid = [];
        var e = c.data("mask-keycode");

        if (-1 === r.inArray(e, D.byPassKeys)) {
          e = w.getMasked();
          var n = w.getCaret();
          return setTimeout(function () {
            w.setCaret(w.calculateCaretPosition());
          }, r.jMaskGlobals.keyStrokeCompensation), w.val(e), w.setCaret(n), w.callbacks(t);
        }
      },
      getMasked: function getMasked(t, e) {
        var n,
            i,
            s,
            o = [],
            r = void 0 === e ? w.val() : e + "",
            a = 0,
            l = b.length,
            c = 0,
            h = r.length,
            u = 1,
            d = "push",
            p = -1,
            f = 0,
            m = [];

        for (i = _.reverse ? (d = "unshift", u = -1, n = 0, a = l - 1, c = h - 1, function () {
          return -1 < a && -1 < c;
        }) : (n = l - 1, function () {
          return a < l && c < h;
        }); i();) {
          var g = b.charAt(a),
              v = r.charAt(c),
              y = D.translation[g];
          y ? (v.match(y.pattern) ? (o[d](v), y.recursive && (-1 === p ? p = a : a === n && a !== p && (a = p - u), n === p && (a -= u)), a += u) : v === s ? (f--, s = void 0) : y.optional ? (a += u, c -= u) : y.fallback ? (o[d](y.fallback), a += u, c -= u) : w.invalid.push({
            p: c,
            v: v,
            e: y.pattern
          }), c += u) : (t || o[d](g), v === g ? (m.push(c), c += u) : (s = g, m.push(c + f), f++), a += u);
        }

        return r = b.charAt(n), l !== h + 1 || D.translation[r] || o.push(r), o = o.join(""), w.mapMaskdigitPositions(o, m, h), o;
      },
      mapMaskdigitPositions: function mapMaskdigitPositions(t, e, n) {
        for (t = _.reverse ? t.length - n : 0, w.maskDigitPosMap = {}, n = 0; n < e.length; n++) {
          w.maskDigitPosMap[e[n] + t] = 1;
        }
      },
      callbacks: function callbacks(t) {
        var e = w.val(),
            n = e !== o,
            i = [e, t, c, _],
            s = function s(t, e, n) {
          "function" == typeof _[t] && e && _[t].apply(this, n);
        };

        s("onChange", !0 === n, i), s("onKeyPress", !0 === n, i), s("onComplete", e.length === b.length, i), s("onInvalid", 0 < w.invalid.length, [e, t, c, w.invalid, _]);
      }
    };
    c = r(c);
    var i,
        D = this,
        o = w.val();
    b = "function" == typeof b ? b(w.val(), void 0, c, _) : b, D.mask = b, D.options = _, D.remove = function () {
      var t = w.getCaret();
      return D.options.placeholder && c.removeAttr("placeholder"), c.data("mask-maxlength") && c.removeAttr("maxlength"), w.destroyEvents(), w.val(D.getCleanVal()), w.setCaret(t), c;
    }, D.getCleanVal = function () {
      return w.getMasked(!0);
    }, D.getMaskedVal = function (t) {
      return w.getMasked(!1, t);
    }, D.init = function (t) {
      if (t = t || !1, _ = _ || {}, D.clearIfNotMatch = r.jMaskGlobals.clearIfNotMatch, D.byPassKeys = r.jMaskGlobals.byPassKeys, D.translation = r.extend({}, r.jMaskGlobals.translation, _.translation), D = r.extend(!0, {}, D, _), i = w.getRegexMask(), t) w.events(), w.val(w.getMasked());else {
        _.placeholder && c.attr("placeholder", _.placeholder), c.data("mask") && c.attr("autocomplete", "off");

        for (var e = !(t = 0); t < b.length; t++) {
          var n = D.translation[b.charAt(t)];

          if (n && n.recursive) {
            e = !1;
            break;
          }
        }

        e && c.attr("maxlength", b.length).data("mask-maxlength", !0), w.destroyEvents(), w.events(), t = w.getCaret(), w.val(w.getMasked()), w.setCaret(t);
      }
    }, D.init(!c.is("input"));
  };

  r.maskWatchers = {};

  var e = function e() {
    var t = r(this),
        e = {},
        n = t.attr("data-mask");
    if (t.attr("data-mask-reverse") && (e.reverse = !0), t.attr("data-mask-clearifnotmatch") && (e.clearIfNotMatch = !0), "true" === t.attr("data-mask-selectonfocus") && (e.selectOnFocus = !0), l(t, n, e)) return t.data("mask", new a(this, n, e));
  },
      l = function l(t, e, n) {
    n = n || {};
    var i = r(t).data("mask"),
        s = JSON.stringify;
    t = r(t).val() || r(t).text();

    try {
      return "function" == typeof e && (e = e(t)), "object" != typeof i || s(i.options) !== s(n) || i.mask !== e;
    } catch (t) {}
  },
      t = function (_t2) {
    function t(_x) {
      return _t2.apply(this, arguments);
    }

    t.toString = function () {
      return _t2.toString();
    };

    return t;
  }(function (t) {
    var e,
        n = document.createElement("div");
    return (e = (t = "on" + t) in n) || (n.setAttribute(t, "return;"), e = "function" == typeof n[t]), e;
  });

  r.fn.mask = function (t, e) {
    e = e || {};

    var n = this.selector,
        i = (s = r.jMaskGlobals).watchInterval,
        s = e.watchInputs || s.watchInputs,
        o = function o() {
      if (l(this, t, e)) return r(this).data("mask", new a(this, t, e));
    };

    return r(this).each(o), n && "" !== n && s && (clearInterval(r.maskWatchers[n]), r.maskWatchers[n] = setInterval(function () {
      r(document).find(n).each(o);
    }, i)), this;
  }, r.fn.masked = function (t) {
    return this.data("mask").getMaskedVal(t);
  }, r.fn.unmask = function () {
    return clearInterval(r.maskWatchers[this.selector]), delete r.maskWatchers[this.selector], this.each(function () {
      var t = r(this).data("mask");
      t && t.remove().removeData("mask");
    });
  }, r.fn.cleanVal = function () {
    return this.data("mask").getCleanVal();
  }, r.applyDataMask = function (t) {
    ((t = t || r.jMaskGlobals.maskElements) instanceof r ? t : r(t)).filter(r.jMaskGlobals.dataMaskAttr).each(e);
  }, t = {
    maskElements: "input,td,span,div",
    dataMaskAttr: "*[data-mask]",
    dataMask: !0,
    watchInterval: 300,
    watchInputs: !0,
    keyStrokeCompensation: 10,
    useInput: !/Chrome\/[2-4][0-9]|SamsungBrowser/.test(window.navigator.userAgent) && t("input"),
    watchDataMask: !1,
    byPassKeys: [9, 16, 17, 18, 36, 37, 38, 39, 40, 91],
    translation: {
      0: {
        pattern: /\d/
      },
      9: {
        pattern: /\d/,
        optional: !0
      },
      "#": {
        pattern: /\d/,
        recursive: !0
      },
      A: {
        pattern: /[a-zA-Z0-9]/
      },
      S: {
        pattern: /[a-zA-Z]/
      }
    }
  }, r.jMaskGlobals = r.jMaskGlobals || {}, (t = r.jMaskGlobals = r.extend(!0, {}, t, r.jMaskGlobals)).dataMask && r.applyDataMask(), setInterval(function () {
    r.jMaskGlobals.watchDataMask && r.applyDataMask();
  }, t.watchInterval);
}, window.jQuery, window.Zepto), function (c) {
  var i = function i(e, t) {
    e = c(e);
    var n = this,
        i = [],
        s = c.extend({}, c.fn.bootstrapWizard.defaults, t),
        o = null,
        r = null;
    this.rebindClick = function (t, e) {
      t.unbind("click", e).bind("click", e);
    }, this.fixNavigationButtons = function () {
      if (o.length || (r.find("a:first").tab("show"), o = r.find('li:has([data-toggle="tab"]):first')), c(s.previousSelector, e).toggleClass("disabled", n.firstIndex() >= n.currentIndex()), c(s.nextSelector, e).toggleClass("disabled", n.currentIndex() >= n.navigationLength()), c(s.backSelector, e).toggleClass("disabled", 0 == i.length), n.rebindClick(c(s.nextSelector, e), n.next), n.rebindClick(c(s.previousSelector, e), n.previous), n.rebindClick(c(s.lastSelector, e), n.last), n.rebindClick(c(s.firstSelector, e), n.first), n.rebindClick(c(s.backSelector, e), n.back), s.onTabShow && "function" == typeof s.onTabShow && !1 === s.onTabShow(o, r, n.currentIndex())) return !1;
    }, this.next = function (t) {
      if (e.hasClass("last") || s.onNext && "function" == typeof s.onNext && !1 === s.onNext(o, r, n.nextIndex())) return !1;
      t = n.currentIndex(), $index = n.nextIndex(), $index > n.navigationLength() || (i.push(t), r.find('li:has([data-toggle="tab"]):eq(' + $index + ") a").tab("show"));
    }, this.previous = function (t) {
      if (e.hasClass("first") || s.onPrevious && "function" == typeof s.onPrevious && !1 === s.onPrevious(o, r, n.previousIndex())) return !1;
      t = n.currentIndex(), $index = n.previousIndex(), $index < 0 || (i.push(t), r.find('li:has([data-toggle="tab"]):eq(' + $index + ") a").tab("show"));
    }, this.first = function (t) {
      if (s.onFirst && "function" == typeof s.onFirst && !1 === s.onFirst(o, r, n.firstIndex()) || e.hasClass("disabled")) return !1;
      i.push(n.currentIndex()), r.find('li:has([data-toggle="tab"]):eq(0) a').tab("show");
    }, this.last = function (t) {
      if (s.onLast && "function" == typeof s.onLast && !1 === s.onLast(o, r, n.lastIndex()) || e.hasClass("disabled")) return !1;
      i.push(n.currentIndex()), r.find('li:has([data-toggle="tab"]):eq(' + n.navigationLength() + ") a").tab("show");
    }, this.back = function () {
      if (0 == i.length) return null;
      var t = i.pop();
      if (s.onBack && "function" == typeof s.onBack && !1 === s.onBack(o, r, t)) return i.push(t), !1;
      e.find('li:has([data-toggle="tab"]):eq(' + t + ") a").tab("show");
    }, this.currentIndex = function () {
      return r.find('li:has([data-toggle="tab"])').index(o);
    }, this.firstIndex = function () {
      return 0;
    }, this.lastIndex = function () {
      return n.navigationLength();
    }, this.getIndex = function (t) {
      return r.find('li:has([data-toggle="tab"])').index(t);
    }, this.nextIndex = function () {
      return r.find('li:has([data-toggle="tab"])').index(o) + 1;
    }, this.previousIndex = function () {
      return r.find('li:has([data-toggle="tab"])').index(o) - 1;
    }, this.navigationLength = function () {
      return r.find('li:has([data-toggle="tab"])').length - 1;
    }, this.activeTab = function () {
      return o;
    }, this.nextTab = function () {
      return r.find('li:has([data-toggle="tab"]):eq(' + (n.currentIndex() + 1) + ")").length ? r.find('li:has([data-toggle="tab"]):eq(' + (n.currentIndex() + 1) + ")") : null;
    }, this.previousTab = function () {
      return n.currentIndex() <= 0 ? null : r.find('li:has([data-toggle="tab"]):eq(' + parseInt(n.currentIndex() - 1) + ")");
    }, this.show = function (t) {
      0 < (t = isNaN(t) ? e.find('li:has([data-toggle="tab"]) a[href=#' + t + "]") : e.find('li:has([data-toggle="tab"]):eq(' + t + ") a")).length && (i.push(n.currentIndex()), t.tab("show"));
    }, this.disable = function (t) {
      r.find('li:has([data-toggle="tab"]):eq(' + t + ")").addClass("disabled");
    }, this.enable = function (t) {
      r.find('li:has([data-toggle="tab"]):eq(' + t + ")").removeClass("disabled");
    }, this.hide = function (t) {
      r.find('li:has([data-toggle="tab"]):eq(' + t + ")").hide();
    }, this.display = function (t) {
      r.find('li:has([data-toggle="tab"]):eq(' + t + ")").show();
    }, this.remove = function (t) {
      var e = void 0 !== t[1] && t[1];
      t = r.find('li:has([data-toggle="tab"]):eq(' + t[0] + ")"), e && (e = t.find("a").attr("href"), c(e).remove()), t.remove();
    };

    var a = function a(t) {
      var e = r.find('li:has([data-toggle="tab"])');
      if (t = e.index(c(t.currentTarget).parent('li:has([data-toggle="tab"])')), e = c(e[t]), s.onTabClick && "function" == typeof s.onTabClick && !1 === s.onTabClick(o, r, n.currentIndex(), t, e)) return !1;
    },
        l = function l(t) {
      if ($element = c(t.target).parent(), t = r.find('li:has([data-toggle="tab"])').index($element), $element.hasClass("disabled") || s.onTabChange && "function" == typeof s.onTabChange && !1 === s.onTabChange(o, r, n.currentIndex(), t)) return !1;
      o = $element, n.fixNavigationButtons();
    };

    this.resetWizard = function () {
      c('a[data-toggle="tab"]', r).off("click", a), c('a[data-toggle="tab"]', r).off("shown shown.bs.tab", l), r = e.find("ul:first", e), o = r.find('li:has([data-toggle="tab"]).active', e), c('a[data-toggle="tab"]', r).on("click", a), c('a[data-toggle="tab"]', r).on("shown shown.bs.tab", l), n.fixNavigationButtons();
    }, r = e.find("ul:first", e), o = r.find('li:has([data-toggle="tab"]).active', e), r.hasClass(s.tabClass) || r.addClass(s.tabClass), s.onInit && "function" == typeof s.onInit && s.onInit(o, r, 0), s.onShow && "function" == typeof s.onShow && s.onShow(o, r, n.nextIndex()), c('a[data-toggle="tab"]', r).on("click", a), c('a[data-toggle="tab"]', r).on("shown shown.bs.tab", l);
  };

  c.fn.bootstrapWizard = function (n) {
    if ("string" != typeof n) return this.each(function (t) {
      if (!(t = c(this)).data("bootstrapWizard")) {
        var e = new i(t, n);
        t.data("bootstrapWizard", e), e.fixNavigationButtons();
      }
    });
    var t = Array.prototype.slice.call(arguments, 1);
    return 1 === t.length && t.toString(), this.data("bootstrapWizard")[n](t);
  }, c.fn.bootstrapWizard.defaults = {
    tabClass: "nav nav-pills",
    nextSelector: ".wizard li.next",
    previousSelector: ".wizard li.previous",
    firstSelector: ".wizard li.first",
    lastSelector: ".wizard li.last",
    backSelector: ".wizard li.back",
    onShow: null,
    onInit: null,
    onNext: null,
    onPrevious: null,
    onLast: null,
    onFirst: null,
    onBack: null,
    onTabChange: null,
    onTabClick: null,
    onTabShow: null
  };
}(jQuery), function (f, m, i) {
  "use strict";

  var o = function o(t, e) {
    this.widget = "", this.$element = f(t), this.defaultTime = e.defaultTime, this.disableFocus = e.disableFocus, this.disableMousewheel = e.disableMousewheel, this.isOpen = e.isOpen, this.minuteStep = e.minuteStep, this.modalBackdrop = e.modalBackdrop, this.orientation = e.orientation, this.secondStep = e.secondStep, this.snapToStep = e.snapToStep, this.showInputs = e.showInputs, this.showMeridian = e.showMeridian, this.showSeconds = e.showSeconds, this.template = e.template, this.appendWidgetTo = e.appendWidgetTo, this.showWidgetOnAddonClick = e.showWidgetOnAddonClick, this.icons = e.icons, this.maxHours = e.maxHours, this.explicitMode = e.explicitMode, this.handleDocumentClick = function (t) {
      var e = t.data.scope;
      e.$element.parent().find(t.target).length || e.$widget.is(t.target) || e.$widget.find(t.target).length || e.hideWidget();
    }, this._init();
  };

  o.prototype = {
    constructor: o,
    _init: function _init() {
      var t = this;
      this.showWidgetOnAddonClick && this.$element.parent().hasClass("input-group") && this.$element.parent().hasClass("bootstrap-timepicker") ? (this.$element.parent(".input-group.bootstrap-timepicker").find(".input-group-addon").on({
        "click.timepicker": f.proxy(this.showWidget, this)
      }), this.$element.on({
        "focus.timepicker": f.proxy(this.highlightUnit, this),
        "click.timepicker": f.proxy(this.highlightUnit, this),
        "keydown.timepicker": f.proxy(this.elementKeydown, this),
        "blur.timepicker": f.proxy(this.blurElement, this),
        "mousewheel.timepicker DOMMouseScroll.timepicker": f.proxy(this.mousewheel, this)
      })) : this.template ? this.$element.on({
        "focus.timepicker": f.proxy(this.showWidget, this),
        "click.timepicker": f.proxy(this.showWidget, this),
        "blur.timepicker": f.proxy(this.blurElement, this),
        "mousewheel.timepicker DOMMouseScroll.timepicker": f.proxy(this.mousewheel, this)
      }) : this.$element.on({
        "focus.timepicker": f.proxy(this.highlightUnit, this),
        "click.timepicker": f.proxy(this.highlightUnit, this),
        "keydown.timepicker": f.proxy(this.elementKeydown, this),
        "blur.timepicker": f.proxy(this.blurElement, this),
        "mousewheel.timepicker DOMMouseScroll.timepicker": f.proxy(this.mousewheel, this)
      }), !1 !== this.template ? this.$widget = f(this.getTemplate()).on("click", f.proxy(this.widgetClick, this)) : this.$widget = !1, this.showInputs && !1 !== this.$widget && this.$widget.find("input").each(function () {
        f(this).on({
          "click.timepicker": function clickTimepicker() {
            f(this).select();
          },
          "keydown.timepicker": f.proxy(t.widgetKeydown, t),
          "keyup.timepicker": f.proxy(t.widgetKeyup, t)
        });
      }), this.setDefaultTime(this.defaultTime);
    },
    blurElement: function blurElement() {
      this.highlightedUnit = null, this.updateFromElementVal();
    },
    clear: function clear() {
      this.hour = "", this.minute = "", this.second = "", this.meridian = "", this.$element.val("");
    },
    decrementHour: function decrementHour() {
      if (this.showMeridian) {
        if (1 === this.hour) this.hour = 12;else {
          if (12 === this.hour) return this.hour--, this.toggleMeridian();
          if (0 === this.hour) return this.hour = 11, this.toggleMeridian();
          this.hour--;
        }
      } else this.hour <= 0 ? this.hour = this.maxHours - 1 : this.hour--;
    },
    decrementMinute: function decrementMinute(t) {
      var e;
      e = t ? this.minute - t : this.minute - this.minuteStep, this.minute = e < 0 ? (this.decrementHour(), e + 60) : e;
    },
    decrementSecond: function decrementSecond() {
      var t = this.second - this.secondStep;
      this.second = t < 0 ? (this.decrementMinute(!0), t + 60) : t;
    },
    elementKeydown: function elementKeydown(t) {
      switch (t.which) {
        case 9:
          if (t.shiftKey) {
            if ("hour" === this.highlightedUnit) {
              this.hideWidget();
              break;
            }

            this.highlightPrevUnit();
          } else {
            if (this.showMeridian && "meridian" === this.highlightedUnit || this.showSeconds && "second" === this.highlightedUnit || !this.showMeridian && !this.showSeconds && "minute" === this.highlightedUnit) {
              this.hideWidget();
              break;
            }

            this.highlightNextUnit();
          }

          t.preventDefault(), this.updateFromElementVal();
          break;

        case 27:
          this.updateFromElementVal();
          break;

        case 37:
          t.preventDefault(), this.highlightPrevUnit(), this.updateFromElementVal();
          break;

        case 38:
          switch (t.preventDefault(), this.highlightedUnit) {
            case "hour":
              this.incrementHour(), this.highlightHour();
              break;

            case "minute":
              this.incrementMinute(), this.highlightMinute();
              break;

            case "second":
              this.incrementSecond(), this.highlightSecond();
              break;

            case "meridian":
              this.toggleMeridian(), this.highlightMeridian();
          }

          this.update();
          break;

        case 39:
          t.preventDefault(), this.highlightNextUnit(), this.updateFromElementVal();
          break;

        case 40:
          switch (t.preventDefault(), this.highlightedUnit) {
            case "hour":
              this.decrementHour(), this.highlightHour();
              break;

            case "minute":
              this.decrementMinute(), this.highlightMinute();
              break;

            case "second":
              this.decrementSecond(), this.highlightSecond();
              break;

            case "meridian":
              this.toggleMeridian(), this.highlightMeridian();
          }

          this.update();
      }
    },
    getCursorPosition: function getCursorPosition() {
      var t = this.$element.get(0);
      if ("selectionStart" in t) return t.selectionStart;

      if (i.selection) {
        t.focus();
        var e = i.selection.createRange(),
            n = i.selection.createRange().text.length;
        return e.moveStart("character", -t.value.length), e.text.length - n;
      }
    },
    getTemplate: function getTemplate() {
      var t, e, n, i, s, o;

      switch (s = this.showInputs ? (e = '<input type="text" class="bootstrap-timepicker-hour" maxlength="2"/>', n = '<input type="text" class="bootstrap-timepicker-minute" maxlength="2"/>', i = '<input type="text" class="bootstrap-timepicker-second" maxlength="2"/>', '<input type="text" class="bootstrap-timepicker-meridian" maxlength="2"/>') : (e = '<span class="bootstrap-timepicker-hour"></span>', n = '<span class="bootstrap-timepicker-minute"></span>', i = '<span class="bootstrap-timepicker-second"></span>', '<span class="bootstrap-timepicker-meridian"></span>'), o = '<table><tr><td><a href="#" data-action="incrementHour"><span class="' + this.icons.up + '"></span></a></td><td class="separator">&nbsp;</td><td><a href="#" data-action="incrementMinute"><span class="' + this.icons.up + '"></span></a></td>' + (this.showSeconds ? '<td class="separator">&nbsp;</td><td><a href="#" data-action="incrementSecond"><span class="' + this.icons.up + '"></span></a></td>' : "") + (this.showMeridian ? '<td class="separator">&nbsp;</td><td class="meridian-column"><a href="#" data-action="toggleMeridian"><span class="' + this.icons.up + '"></span></a></td>' : "") + "</tr><tr><td>" + e + '</td> <td class="separator">:</td><td>' + n + "</td> " + (this.showSeconds ? '<td class="separator">:</td><td>' + i + "</td>" : "") + (this.showMeridian ? '<td class="separator">&nbsp;</td><td>' + s + "</td>" : "") + '</tr><tr><td><a href="#" data-action="decrementHour"><span class="' + this.icons.down + '"></span></a></td><td class="separator"></td><td><a href="#" data-action="decrementMinute"><span class="' + this.icons.down + '"></span></a></td>' + (this.showSeconds ? '<td class="separator">&nbsp;</td><td><a href="#" data-action="decrementSecond"><span class="' + this.icons.down + '"></span></a></td>' : "") + (this.showMeridian ? '<td class="separator">&nbsp;</td><td><a href="#" data-action="toggleMeridian"><span class="' + this.icons.down + '"></span></a></td>' : "") + "</tr></table>", this.template) {
        case "modal":
          t = '<div class="bootstrap-timepicker-widget modal hide fade in" data-backdrop="' + (this.modalBackdrop ? "true" : "false") + '"><div class="modal-header"><a href="#" class="close" data-dismiss="modal">&times;</a><h3>Pick a Time</h3></div><div class="modal-content">' + o + '</div><div class="modal-footer"><a href="#" class="btn btn-primary" data-dismiss="modal">OK</a></div></div>';
          break;

        case "dropdown":
          t = '<div class="bootstrap-timepicker-widget dropdown-menu">' + o + "</div>";
      }

      return t;
    },
    getTime: function getTime() {
      return "" === this.hour ? "" : this.hour + ":" + (1 === this.minute.toString().length ? "0" + this.minute : this.minute) + (this.showSeconds ? ":" + (1 === this.second.toString().length ? "0" + this.second : this.second) : "") + (this.showMeridian ? " " + this.meridian : "");
    },
    hideWidget: function hideWidget() {
      !1 !== this.isOpen && (this.$element.trigger({
        type: "hide.timepicker",
        time: {
          value: this.getTime(),
          hours: this.hour,
          minutes: this.minute,
          seconds: this.second,
          meridian: this.meridian
        }
      }), "modal" === this.template && this.$widget.modal ? this.$widget.modal("hide") : this.$widget.removeClass("open"), f(i).off("mousedown.timepicker, touchend.timepicker", this.handleDocumentClick), this.isOpen = !1, this.$widget.detach());
    },
    highlightUnit: function highlightUnit() {
      this.position = this.getCursorPosition(), 0 <= this.position && this.position <= 2 ? this.highlightHour() : 3 <= this.position && this.position <= 5 ? this.highlightMinute() : 6 <= this.position && this.position <= 8 ? this.showSeconds ? this.highlightSecond() : this.highlightMeridian() : 9 <= this.position && this.position <= 11 && this.highlightMeridian();
    },
    highlightNextUnit: function highlightNextUnit() {
      switch (this.highlightedUnit) {
        case "hour":
          this.highlightMinute();
          break;

        case "minute":
          this.showSeconds ? this.highlightSecond() : this.showMeridian ? this.highlightMeridian() : this.highlightHour();
          break;

        case "second":
          this.showMeridian ? this.highlightMeridian() : this.highlightHour();
          break;

        case "meridian":
          this.highlightHour();
      }
    },
    highlightPrevUnit: function highlightPrevUnit() {
      switch (this.highlightedUnit) {
        case "hour":
          this.showMeridian ? this.highlightMeridian() : this.showSeconds ? this.highlightSecond() : this.highlightMinute();
          break;

        case "minute":
          this.highlightHour();
          break;

        case "second":
          this.highlightMinute();
          break;

        case "meridian":
          this.showSeconds ? this.highlightSecond() : this.highlightMinute();
      }
    },
    highlightHour: function highlightHour() {
      var t = this.$element.get(0),
          e = this;
      this.highlightedUnit = "hour", t.setSelectionRange && setTimeout(function () {
        e.hour < 10 ? t.setSelectionRange(0, 1) : t.setSelectionRange(0, 2);
      }, 0);
    },
    highlightMinute: function highlightMinute() {
      var t = this.$element.get(0),
          e = this;
      this.highlightedUnit = "minute", t.setSelectionRange && setTimeout(function () {
        e.hour < 10 ? t.setSelectionRange(2, 4) : t.setSelectionRange(3, 5);
      }, 0);
    },
    highlightSecond: function highlightSecond() {
      var t = this.$element.get(0),
          e = this;
      this.highlightedUnit = "second", t.setSelectionRange && setTimeout(function () {
        e.hour < 10 ? t.setSelectionRange(5, 7) : t.setSelectionRange(6, 8);
      }, 0);
    },
    highlightMeridian: function highlightMeridian() {
      var t = this.$element.get(0),
          e = this;
      this.highlightedUnit = "meridian", t.setSelectionRange && (this.showSeconds ? setTimeout(function () {
        e.hour < 10 ? t.setSelectionRange(8, 10) : t.setSelectionRange(9, 11);
      }, 0) : setTimeout(function () {
        e.hour < 10 ? t.setSelectionRange(5, 7) : t.setSelectionRange(6, 8);
      }, 0));
    },
    incrementHour: function incrementHour() {
      if (this.showMeridian) {
        if (11 === this.hour) return this.hour++, this.toggleMeridian();
        12 === this.hour && (this.hour = 0);
      }

      return this.hour === this.maxHours - 1 ? void (this.hour = 0) : void this.hour++;
    },
    incrementMinute: function incrementMinute(t) {
      var e;
      e = t ? this.minute + t : this.minute + this.minuteStep - this.minute % this.minuteStep, this.minute = 59 < e ? (this.incrementHour(), e - 60) : e;
    },
    incrementSecond: function incrementSecond() {
      var t = this.second + this.secondStep - this.second % this.secondStep;
      this.second = 59 < t ? (this.incrementMinute(!0), t - 60) : t;
    },
    mousewheel: function mousewheel(t) {
      if (!this.disableMousewheel) {
        t.preventDefault(), t.stopPropagation();
        var e = t.originalEvent.wheelDelta || -t.originalEvent.detail,
            n = null;

        switch ("mousewheel" === t.type ? n = -1 * t.originalEvent.wheelDelta : "DOMMouseScroll" === t.type && (n = 40 * t.originalEvent.detail), n && (t.preventDefault(), f(this).scrollTop(n + f(this).scrollTop())), this.highlightedUnit) {
          case "minute":
            0 < e ? this.incrementMinute() : this.decrementMinute(), this.highlightMinute();
            break;

          case "second":
            0 < e ? this.incrementSecond() : this.decrementSecond(), this.highlightSecond();
            break;

          case "meridian":
            this.toggleMeridian(), this.highlightMeridian();
            break;

          default:
            0 < e ? this.incrementHour() : this.decrementHour(), this.highlightHour();
        }

        return !1;
      }
    },
    changeToNearestStep: function changeToNearestStep(t, e) {
      return t % e == 0 ? t : Math.round(t % e / e) ? (t + (e - t % e)) % 60 : t - t % e;
    },
    place: function place() {
      if (!this.isInline) {
        var t = this.$widget.outerWidth(),
            e = this.$widget.outerHeight(),
            n = f(m).width(),
            i = f(m).height(),
            s = f(m).scrollTop(),
            o = parseInt(this.$element.parents().filter(function () {
          return "auto" !== f(this).css("z-index");
        }).first().css("z-index"), 10) + 10,
            r = this.component ? this.component.parent().offset() : this.$element.offset(),
            a = this.component ? this.component.outerHeight(!0) : this.$element.outerHeight(!1),
            l = this.component ? this.component.outerWidth(!0) : this.$element.outerWidth(!1),
            c = r.left,
            h = r.top;
        this.$widget.removeClass("timepicker-orient-top timepicker-orient-bottom timepicker-orient-right timepicker-orient-left"), "auto" !== this.orientation.x ? (this.$widget.addClass("timepicker-orient-" + this.orientation.x), "right" === this.orientation.x && (c -= t - l)) : (this.$widget.addClass("timepicker-orient-left"), r.left < 0 ? c -= r.left - 10 : r.left + t > n && (c = n - t - 10));
        var u,
            d,
            p = this.orientation.y;
        "auto" === p && (u = -s + r.top - e, d = s + i - (r.top + a + e), p = Math.max(u, d) === d ? "top" : "bottom"), this.$widget.addClass("timepicker-orient-" + p), "top" === p ? h += a : h -= e + parseInt(this.$widget.css("padding-top"), 10), this.$widget.css({
          top: h,
          left: c,
          zIndex: o
        });
      }
    },
    remove: function remove() {
      f("document").off(".timepicker"), this.$widget && this.$widget.remove(), delete this.$element.data().timepicker;
    },
    setDefaultTime: function setDefaultTime(t) {
      if (this.$element.val()) this.updateFromElementVal();else if ("current" === t) {
        var e = new Date(),
            n = e.getHours(),
            i = e.getMinutes(),
            s = e.getSeconds(),
            o = "AM";
        0 !== s && 60 === (s = Math.ceil(e.getSeconds() / this.secondStep) * this.secondStep) && (i += 1, s = 0), 0 !== i && 60 === (i = Math.ceil(e.getMinutes() / this.minuteStep) * this.minuteStep) && (n += 1, i = 0), this.showMeridian && (0 === n ? n = 12 : o = 12 <= n ? (12 < n && (n -= 12), "PM") : "AM"), this.hour = n, this.minute = i, this.second = s, this.meridian = o, this.update();
      } else !1 === t ? (this.hour = 0, this.minute = 0, this.second = 0, this.meridian = "AM") : this.setTime(t);
    },
    setTime: function setTime(t, e) {
      if (t) {
        var n, i, s, o, r, a;
        if ("object" == typeof t && t.getMonth) s = t.getHours(), o = t.getMinutes(), r = t.getSeconds(), this.showMeridian && (a = "AM", 12 < s && (a = "PM", s %= 12), 12 === s && (a = "PM"));else {
          if (2 < (n = (/a/i.test(t) ? 1 : 0) + (/p/i.test(t) ? 2 : 0))) return void this.clear();
          if (s = (i = t.replace(/[^0-9\:]/g, "").split(":"))[0] ? i[0].toString() : i.toString(), this.explicitMode && 2 < s.length && s.length % 2 != 0) return void this.clear();
          o = i[1] ? i[1].toString() : "", r = i[2] ? i[2].toString() : "", 4 < s.length && (r = s.slice(-2), s = s.slice(0, -2)), 2 < s.length && (o = s.slice(-2), s = s.slice(0, -2)), 2 < o.length && (r = o.slice(-2), o = o.slice(0, -2)), s = parseInt(s, 10), o = parseInt(o, 10), r = parseInt(r, 10), isNaN(s) && (s = 0), isNaN(o) && (o = 0), isNaN(r) && (r = 0), 59 < r && (r = 59), 59 < o && (o = 59), s >= this.maxHours && (s = this.maxHours - 1), this.showMeridian ? (12 < s && (n = 2, s -= 12), n || (n = 1), 0 === s && (s = 12), a = 1 === n ? "AM" : "PM") : s < 12 && 2 === n ? s += 12 : s >= this.maxHours ? s = this.maxHours - 1 : (s < 0 || 12 === s && 1 === n) && (s = 0);
        }
        this.hour = s, this.snapToStep ? (this.minute = this.changeToNearestStep(o, this.minuteStep), this.second = this.changeToNearestStep(r, this.secondStep)) : (this.minute = o, this.second = r), this.meridian = a, this.update(e);
      } else this.clear();
    },
    showWidget: function showWidget() {
      this.isOpen || this.$element.is(":disabled") || (this.$widget.appendTo(this.appendWidgetTo), f(i).on("mousedown.timepicker, touchend.timepicker", {
        scope: this
      }, this.handleDocumentClick), this.$element.trigger({
        type: "show.timepicker",
        time: {
          value: this.getTime(),
          hours: this.hour,
          minutes: this.minute,
          seconds: this.second,
          meridian: this.meridian
        }
      }), this.place(), this.disableFocus && this.$element.blur(), "" === this.hour && (this.defaultTime ? this.setDefaultTime(this.defaultTime) : this.setTime("0:0:0")), "modal" === this.template && this.$widget.modal ? this.$widget.modal("show").on("hidden", f.proxy(this.hideWidget, this)) : !1 === this.isOpen && this.$widget.addClass("open"), this.isOpen = !0);
    },
    toggleMeridian: function toggleMeridian() {
      this.meridian = "AM" === this.meridian ? "PM" : "AM";
    },
    update: function update(t) {
      this.updateElement(), t || this.updateWidget(), this.$element.trigger({
        type: "changeTime.timepicker",
        time: {
          value: this.getTime(),
          hours: this.hour,
          minutes: this.minute,
          seconds: this.second,
          meridian: this.meridian
        }
      });
    },
    updateElement: function updateElement() {
      this.$element.val(this.getTime()).change();
    },
    updateFromElementVal: function updateFromElementVal() {
      this.setTime(this.$element.val());
    },
    updateWidget: function updateWidget() {
      if (!1 !== this.$widget) {
        var t = this.hour,
            e = 1 === this.minute.toString().length ? "0" + this.minute : this.minute,
            n = 1 === this.second.toString().length ? "0" + this.second : this.second;
        this.showInputs ? (this.$widget.find("input.bootstrap-timepicker-hour").val(t), this.$widget.find("input.bootstrap-timepicker-minute").val(e), this.showSeconds && this.$widget.find("input.bootstrap-timepicker-second").val(n), this.showMeridian && this.$widget.find("input.bootstrap-timepicker-meridian").val(this.meridian)) : (this.$widget.find("span.bootstrap-timepicker-hour").text(t), this.$widget.find("span.bootstrap-timepicker-minute").text(e), this.showSeconds && this.$widget.find("span.bootstrap-timepicker-second").text(n), this.showMeridian && this.$widget.find("span.bootstrap-timepicker-meridian").text(this.meridian));
      }
    },
    updateFromWidgetInputs: function updateFromWidgetInputs() {
      if (!1 !== this.$widget) {
        var t = this.$widget.find("input.bootstrap-timepicker-hour").val() + ":" + this.$widget.find("input.bootstrap-timepicker-minute").val() + (this.showSeconds ? ":" + this.$widget.find("input.bootstrap-timepicker-second").val() : "") + (this.showMeridian ? this.$widget.find("input.bootstrap-timepicker-meridian").val() : "");
        this.setTime(t, !0);
      }
    },
    widgetClick: function widgetClick(t) {
      t.stopPropagation(), t.preventDefault();
      var e = f(t.target),
          n = e.closest("a").data("action");
      n && this[n](), this.update(), e.is("input") && e.get(0).setSelectionRange(0, 2);
    },
    widgetKeydown: function widgetKeydown(t) {
      var e = f(t.target),
          n = e.attr("class").replace("bootstrap-timepicker-", "");

      switch (t.which) {
        case 9:
          if (t.shiftKey) {
            if ("hour" === n) return this.hideWidget();
          } else if (this.showMeridian && "meridian" === n || this.showSeconds && "second" === n || !this.showMeridian && !this.showSeconds && "minute" === n) return this.hideWidget();

          break;

        case 27:
          this.hideWidget();
          break;

        case 38:
          switch (t.preventDefault(), n) {
            case "hour":
              this.incrementHour();
              break;

            case "minute":
              this.incrementMinute();
              break;

            case "second":
              this.incrementSecond();
              break;

            case "meridian":
              this.toggleMeridian();
          }

          this.setTime(this.getTime()), e.get(0).setSelectionRange(0, 2);
          break;

        case 40:
          switch (t.preventDefault(), n) {
            case "hour":
              this.decrementHour();
              break;

            case "minute":
              this.decrementMinute();
              break;

            case "second":
              this.decrementSecond();
              break;

            case "meridian":
              this.toggleMeridian();
          }

          this.setTime(this.getTime()), e.get(0).setSelectionRange(0, 2);
      }
    },
    widgetKeyup: function widgetKeyup(t) {
      (65 === t.which || 77 === t.which || 80 === t.which || 46 === t.which || 8 === t.which || 48 <= t.which && t.which <= 57 || 96 <= t.which && t.which <= 105) && this.updateFromWidgetInputs();
    }
  }, f.fn.timepicker = function (i) {
    var s = Array.apply(null, arguments);
    return s.shift(), this.each(function () {
      var t = f(this),
          e = t.data("timepicker"),
          n = "object" == typeof i && i;
      e || t.data("timepicker", e = new o(this, f.extend({}, f.fn.timepicker.defaults, n, f(this).data()))), "string" == typeof i && e[i].apply(e, s);
    });
  }, f.fn.timepicker.defaults = {
    defaultTime: "current",
    disableFocus: !1,
    disableMousewheel: !1,
    isOpen: !1,
    minuteStep: 15,
    modalBackdrop: !1,
    orientation: {
      x: "auto",
      y: "auto"
    },
    secondStep: 15,
    snapToStep: !1,
    showSeconds: !1,
    showInputs: !0,
    showMeridian: !0,
    template: "dropdown",
    appendWidgetTo: "body",
    showWidgetOnAddonClick: !0,
    icons: {
      up: "glyphicon glyphicon-chevron-up",
      down: "glyphicon glyphicon-chevron-down"
    },
    maxHours: 24,
    explicitMode: !1
  }, f.fn.timepicker.Constructor = o, f(i).on("focus.timepicker.data-api click.timepicker.data-api", '[data-provide="timepicker"]', function (t) {
    var e = f(this);
    e.data("timepicker") || (t.preventDefault(), e.timepicker());
  });
}(jQuery, window, document), function (n) {
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__WEBPACK_LOCAL_MODULE_0__], __WEBPACK_AMD_DEFINE_FACTORY__ = (n),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(function (x) {
  "use strict";

  var S = 0;

  x.fn.TouchSpin = function (D) {
    var k = {
      min: 0,
      max: 100,
      initval: "",
      replacementval: "",
      step: 1,
      decimals: 0,
      stepinterval: 100,
      forcestepdivisibility: "round",
      stepintervaldelay: 500,
      verticalbuttons: !1,
      verticalup: "+",
      verticaldown: "-",
      verticalupclass: "",
      verticaldownclass: "",
      prefix: "",
      postfix: "",
      prefix_extraclass: "",
      postfix_extraclass: "",
      booster: !0,
      boostat: 10,
      maxboostedstep: !1,
      mousewheel: !0,
      buttondown_class: "btn btn-primary",
      buttonup_class: "btn btn-primary",
      buttondown_txt: "-",
      buttonup_txt: "+",
      callback_before_calculation: function callback_before_calculation(t) {
        return t;
      },
      callback_after_calculation: function callback_after_calculation(t) {
        return t;
      }
    },
        C = {
      min: "min",
      max: "max",
      initval: "init-val",
      replacementval: "replacement-val",
      step: "step",
      decimals: "decimals",
      stepinterval: "step-interval",
      verticalbuttons: "vertical-buttons",
      verticalupclass: "vertical-up-class",
      verticaldownclass: "vertical-down-class",
      forcestepdivisibility: "force-step-divisibility",
      stepintervaldelay: "step-interval-delay",
      prefix: "prefix",
      postfix: "postfix",
      prefix_extraclass: "prefix-extra-class",
      postfix_extraclass: "postfix-extra-class",
      booster: "booster",
      boostat: "boostat",
      maxboostedstep: "max-boosted-step",
      mousewheel: "mouse-wheel",
      buttondown_class: "button-down-class",
      buttonup_class: "button-up-class",
      buttondown_txt: "button-down-txt",
      buttonup_txt: "button-up-txt"
    };
    return this.each(function () {
      var a,
          o,
          r,
          l,
          c,
          n,
          t,
          e,
          i,
          s,
          h = x(this),
          u = h.data(),
          d = 0,
          p = !1;

      function f() {
        "" === a.prefix && (o = c.prefix.detach()), "" === a.postfix && (r = c.postfix.detach());
      }

      function m() {
        var t, e, n;
        "" !== (t = a.callback_before_calculation(h.val())) ? 0 < a.decimals && "." === t || (e = parseFloat(t), isNaN(e) && (e = "" !== a.replacementval ? a.replacementval : 0), (n = e).toString() !== t && (n = e), null !== a.min && e < a.min && (n = a.min), null !== a.max && e > a.max && (n = a.max), n = function (t) {
          switch (a.forcestepdivisibility) {
            case "round":
              return (Math.round(t / a.step) * a.step).toFixed(a.decimals);

            case "floor":
              return (Math.floor(t / a.step) * a.step).toFixed(a.decimals);

            case "ceil":
              return (Math.ceil(t / a.step) * a.step).toFixed(a.decimals);

            default:
              return t;
          }
        }(n), Number(t).toString() !== n.toString() && (h.val(n), h.trigger("change"))) : "" !== a.replacementval && (h.val(a.replacementval), h.trigger("change"));
      }

      function g() {
        if (a.booster) {
          var t = Math.pow(2, Math.floor(d / a.boostat)) * a.step;
          return a.maxboostedstep && t > a.maxboostedstep && (t = a.maxboostedstep, n = Math.round(n / t) * t), Math.max(a.step, t);
        }

        return a.step;
      }

      function v() {
        m(), n = parseFloat(a.callback_before_calculation(c.input.val())), isNaN(n) && (n = 0);
        var t = n,
            e = g();
        n += e, null !== a.max && n > a.max && (n = a.max, h.trigger("touchspin.on.max"), w()), c.input.val(a.callback_after_calculation(Number(n).toFixed(a.decimals))), t !== n && h.trigger("change");
      }

      function y() {
        m(), n = parseFloat(a.callback_before_calculation(c.input.val())), isNaN(n) && (n = 0);
        var t = n,
            e = g();
        n -= e, null !== a.min && n < a.min && (n = a.min, h.trigger("touchspin.on.min"), w()), c.input.val(a.callback_after_calculation(Number(n).toFixed(a.decimals))), t !== n && h.trigger("change");
      }

      function b() {
        w(), d = 0, p = "down", h.trigger("touchspin.on.startspin"), h.trigger("touchspin.on.startdownspin"), i = setTimeout(function () {
          t = setInterval(function () {
            d++, y();
          }, a.stepinterval);
        }, a.stepintervaldelay);
      }

      function _() {
        w(), d = 0, p = "up", h.trigger("touchspin.on.startspin"), h.trigger("touchspin.on.startupspin"), s = setTimeout(function () {
          e = setInterval(function () {
            d++, v();
          }, a.stepinterval);
        }, a.stepintervaldelay);
      }

      function w() {
        switch (clearTimeout(i), clearTimeout(s), clearInterval(t), clearInterval(e), p) {
          case "up":
            h.trigger("touchspin.on.stopupspin"), h.trigger("touchspin.on.stopspin");
            break;

          case "down":
            h.trigger("touchspin.on.stopdownspin"), h.trigger("touchspin.on.stopspin");
        }

        d = 0, p = !1;
      }

      !function () {
        var t, e, n, i, s;
        if (!h.data("alreadyinitialized")) h.data("alreadyinitialized", !0), S += 1, h.data("spinnerid", S), h.is("input") ? ("" !== (a = x.extend({}, k, u, (s = {}, x.each(C, function (t, e) {
          var n = "bts-" + e;
          h.is("[data-" + n + "]") && (s[t] = h.data(n));
        }), s), D)).initval && "" === h.val() && h.val(a.initval), m(), n = h.val(), i = h.parent(), "" !== n && (n = a.callback_after_calculation(Number(n).toFixed(a.decimals))), h.data("initvalue", n).val(n), h.addClass("form-control"), i.hasClass("input-group") ? function (t) {
          t.addClass("bootstrap-touchspin");
          var e,
              n,
              i = h.prev(),
              s = h.next(),
              o = '<span class="input-group-addon input-group-prepend bootstrap-touchspin-prefix input-group-prepend bootstrap-touchspin-injected"><span class="input-group-text">' + a.prefix + "</span></span>",
              r = '<span class="input-group-addon input-group-append bootstrap-touchspin-postfix input-group-append bootstrap-touchspin-injected"><span class="input-group-text">' + a.postfix + "</span></span>";
          i.hasClass("input-group-btn") || i.hasClass("input-group-prepend") ? (e = '<button class="' + a.buttondown_class + ' bootstrap-touchspin-down bootstrap-touchspin-injected" type="button">' + a.buttondown_txt + "</button>", i.append(e)) : (e = '<span class="input-group-btn input-group-prepend bootstrap-touchspin-injected"><button class="' + a.buttondown_class + ' bootstrap-touchspin-down" type="button">' + a.buttondown_txt + "</button></span>", x(e).insertBefore(h)), s.hasClass("input-group-btn") || s.hasClass("input-group-append") ? (n = '<button class="' + a.buttonup_class + ' bootstrap-touchspin-up bootstrap-touchspin-injected" type="button">' + a.buttonup_txt + "</button>", s.prepend(n)) : (n = '<span class="input-group-btn input-group-append bootstrap-touchspin-injected"><button class="' + a.buttonup_class + ' bootstrap-touchspin-up" type="button">' + a.buttonup_txt + "</button></span>", x(n).insertAfter(h)), x(o).insertBefore(h), x(r).insertAfter(h), l = t;
        }(i) : (e = "", h.hasClass("input-sm") && (e = "input-group-sm"), h.hasClass("input-lg") && (e = "input-group-lg"), t = a.verticalbuttons ? '<div class="input-group ' + e + ' bootstrap-touchspin bootstrap-touchspin-injected"><span class="input-group-addon input-group-prepend bootstrap-touchspin-prefix"><span class="input-group-text">' + a.prefix + '</span></span><span class="input-group-addon bootstrap-touchspin-postfix input-group-append"><span class="input-group-text">' + a.postfix + '</span></span><span class="input-group-btn-vertical"><button class="' + a.buttondown_class + " bootstrap-touchspin-up " + a.verticalupclass + '" type="button">' + a.verticalup + '</button><button class="' + a.buttonup_class + " bootstrap-touchspin-down " + a.verticaldownclass + '" type="button">' + a.verticaldown + "</button></span></div>" : '<div class="input-group bootstrap-touchspin bootstrap-touchspin-injected"><span class="input-group-btn input-group-prepend"><button class="' + a.buttondown_class + ' bootstrap-touchspin-down" type="button">' + a.buttondown_txt + '</button></span><span class="input-group-addon bootstrap-touchspin-prefix input-group-prepend"><span class="input-group-text">' + a.prefix + '</span></span><span class="input-group-addon bootstrap-touchspin-postfix input-group-append"><span class="input-group-text">' + a.postfix + '</span></span><span class="input-group-btn input-group-append"><button class="' + a.buttonup_class + ' bootstrap-touchspin-up" type="button">' + a.buttonup_txt + "</button></span></div>", l = x(t).insertBefore(h), x(".bootstrap-touchspin-prefix", l).after(h), h.hasClass("input-sm") ? l.addClass("input-group-sm") : h.hasClass("input-lg") && l.addClass("input-group-lg")), c = {
          down: x(".bootstrap-touchspin-down", l),
          up: x(".bootstrap-touchspin-up", l),
          input: x("input", l),
          prefix: x(".bootstrap-touchspin-prefix", l).addClass(a.prefix_extraclass),
          postfix: x(".bootstrap-touchspin-postfix", l).addClass(a.postfix_extraclass)
        }, f(), h.on("keydown.touchspin", function (t) {
          var e = t.keyCode || t.which;
          38 === e ? ("up" !== p && (v(), _()), t.preventDefault()) : 40 === e && ("down" !== p && (y(), b()), t.preventDefault());
        }), h.on("keyup.touchspin", function (t) {
          var e = t.keyCode || t.which;
          38 === e ? w() : 40 === e && w();
        }), h.on("blur.touchspin", function () {
          m(), h.val(a.callback_after_calculation(h.val()));
        }), c.down.on("keydown", function (t) {
          var e = t.keyCode || t.which;
          32 !== e && 13 !== e || ("down" !== p && (y(), b()), t.preventDefault());
        }), c.down.on("keyup.touchspin", function (t) {
          var e = t.keyCode || t.which;
          32 !== e && 13 !== e || w();
        }), c.up.on("keydown.touchspin", function (t) {
          var e = t.keyCode || t.which;
          32 !== e && 13 !== e || ("up" !== p && (v(), _()), t.preventDefault());
        }), c.up.on("keyup.touchspin", function (t) {
          var e = t.keyCode || t.which;
          32 !== e && 13 !== e || w();
        }), c.down.on("mousedown.touchspin", function (t) {
          c.down.off("touchstart.touchspin"), h.is(":disabled") || (y(), b(), t.preventDefault(), t.stopPropagation());
        }), c.down.on("touchstart.touchspin", function (t) {
          c.down.off("mousedown.touchspin"), h.is(":disabled") || (y(), b(), t.preventDefault(), t.stopPropagation());
        }), c.up.on("mousedown.touchspin", function (t) {
          c.up.off("touchstart.touchspin"), h.is(":disabled") || (v(), _(), t.preventDefault(), t.stopPropagation());
        }), c.up.on("touchstart.touchspin", function (t) {
          c.up.off("mousedown.touchspin"), h.is(":disabled") || (v(), _(), t.preventDefault(), t.stopPropagation());
        }), c.up.on("mouseup.touchspin mouseout.touchspin touchleave.touchspin touchend.touchspin touchcancel.touchspin", function (t) {
          p && (t.stopPropagation(), w());
        }), c.down.on("mouseup.touchspin mouseout.touchspin touchleave.touchspin touchend.touchspin touchcancel.touchspin", function (t) {
          p && (t.stopPropagation(), w());
        }), c.down.on("mousemove.touchspin touchmove.touchspin", function (t) {
          p && (t.stopPropagation(), t.preventDefault());
        }), c.up.on("mousemove.touchspin touchmove.touchspin", function (t) {
          p && (t.stopPropagation(), t.preventDefault());
        }), h.on("mousewheel.touchspin DOMMouseScroll.touchspin", function (t) {
          if (a.mousewheel && h.is(":focus")) {
            var e = t.originalEvent.wheelDelta || -t.originalEvent.deltaY || -t.originalEvent.detail;
            t.stopPropagation(), t.preventDefault(), e < 0 ? y() : v();
          }
        }), h.on("touchspin.destroy", function () {
          var t;
          t = h.parent(), w(), h.off(".touchspin"), t.hasClass("bootstrap-touchspin-injected") ? (h.siblings().remove(), h.unwrap()) : (x(".bootstrap-touchspin-injected", t).remove(), t.removeClass("bootstrap-touchspin")), h.data("alreadyinitialized", !1);
        }), h.on("touchspin.uponce", function () {
          w(), v();
        }), h.on("touchspin.downonce", function () {
          w(), y();
        }), h.on("touchspin.startupspin", function () {
          _();
        }), h.on("touchspin.startdownspin", function () {
          b();
        }), h.on("touchspin.stopspin", function () {
          w();
        }), h.on("touchspin.updatesettings", function (t, n) {
          !function (t) {
            (function (t) {
              (a = x.extend({}, a, t), t.postfix) && (0 === h.parent().find(".bootstrap-touchspin-postfix").length && r.insertAfter(h), h.parent().find(".bootstrap-touchspin-postfix .input-group-text").text(t.postfix));
              t.prefix && (0 === h.parent().find(".bootstrap-touchspin-prefix").length && o.insertBefore(h), h.parent().find(".bootstrap-touchspin-prefix .input-group-text").text(t.prefix));
              f();
            })(n), m();
            var e = c.input.val();
            "" !== e && (e = Number(a.callback_before_calculation(c.input.val())), c.input.val(a.callback_after_calculation(Number(e).toFixed(a.decimals))));
          }();
        })) : console.log("Must be an input.");
      }();
    });
  };
}), function (v) {
  "use strict";

  v.event.special.destroyed || (v.event.special.destroyed = {
    remove: function remove(t) {
      t.handler && t.handler();
    }
  }), v.fn.extend({
    maxlength: function maxlength(h, t) {
      function c(t) {
        var e = t.val();
        e = h.twoCharLinebreak ? e.replace(/\r(?!\n)|\n(?!\r)/g, "\r\n") : e.replace(new RegExp("\r?\n", "g"), "\n");
        return h.utf8 ? function (t) {
          for (var e = 0, n = 0; n < t.length; n++) {
            var i = t.charCodeAt(n);
            i < 128 ? e++ : e += 127 < i && i < 2048 ? 2 : 3;
          }

          return e;
        }(e) : e.length;
      }

      function u(t, e) {
        return e - c(t);
      }

      function d(t, e) {
        e.css({
          display: "block"
        }), t.trigger("maxlength.shown");
      }

      function p(t, e, n) {
        var i = "";
        return h.message ? i = "function" == typeof h.message ? h.message(t, e) : h.message.replace("%charsTyped%", n).replace("%charsRemaining%", e - n).replace("%charsTotal%", e) : (h.preText && (i += h.preText), i += h.showCharsTyped ? n : e - n, h.showMaxLength && (i += h.separator + e), h.postText && (i += h.postText)), i;
      }

      function f(t, e, n, i) {
        var s, o, r, a, l;
        i && (i.html(p(e.val(), n, n - t)), 0 < t ? (o = e, r = h.threshold, a = n, l = !0, !h.alwaysShow && a - c(o) > r && (l = !1), l ? d(e, i.removeClass(h.limitReachedClass).addClass(h.warningClass)) : (s = e, i.css({
          display: "none"
        }), s.trigger("maxlength.hidden"))) : d(e, i.removeClass(h.warningClass).addClass(h.limitReachedClass))), h.allowOverMax && (t < 0 ? e.addClass("overmax") : e.removeClass("overmax"));
      }

      function m(t, e) {
        var n,
            i,
            s = (i = (n = t)[0], v.extend({}, "function" == typeof i.getBoundingClientRect ? i.getBoundingClientRect() : {
          width: i.offsetWidth,
          height: i.offsetHeight
        }, n.offset()));
        if ("function" !== v.type(h.placement)) {
          if (v.isPlainObject(h.placement)) !function (t, e) {
            if (t && e) {
              var i = {};
              v.each(["top", "bottom", "left", "right", "position"], function (t, e) {
                var n = h.placement[e];
                void 0 !== n && (i[e] = n);
              }), e.css(i);
            }
          }(h.placement, e);else {
            var o = t.outerWidth(),
                r = e.outerWidth(),
                a = e.width(),
                l = e.height();

            switch (h.appendToParent && (s.top -= t.parent().offset().top, s.left -= t.parent().offset().left), h.placement) {
              case "bottom":
                e.css({
                  top: s.top + s.height,
                  left: s.left + s.width / 2 - a / 2
                });
                break;

              case "top":
                e.css({
                  top: s.top - l,
                  left: s.left + s.width / 2 - a / 2
                });
                break;

              case "left":
                e.css({
                  top: s.top + s.height / 2 - l / 2,
                  left: s.left - a
                });
                break;

              case "right":
                e.css({
                  top: s.top + s.height / 2 - l / 2,
                  left: s.left + s.width
                });
                break;

              case "bottom-right":
                e.css({
                  top: s.top + s.height,
                  left: s.left + s.width
                });
                break;

              case "top-right":
                e.css({
                  top: s.top - l,
                  left: s.left + o
                });
                break;

              case "top-left":
                e.css({
                  top: s.top - l,
                  left: s.left - r
                });
                break;

              case "bottom-left":
                e.css({
                  top: s.top + t.outerHeight(),
                  left: s.left - r
                });
                break;

              case "centered-right":
                e.css({
                  top: s.top + l / 2,
                  left: s.left + o - r - 3
                });
                break;

              case "bottom-right-inside":
                e.css({
                  top: s.top + s.height,
                  left: s.left + s.width - r
                });
                break;

              case "top-right-inside":
                e.css({
                  top: s.top - l,
                  left: s.left + o - r
                });
                break;

              case "top-left-inside":
                e.css({
                  top: s.top - l,
                  left: s.left
                });
                break;

              case "bottom-left-inside":
                e.css({
                  top: s.top + t.outerHeight(),
                  left: s.left
                });
            }
          }
        } else h.placement(t, e, s);
      }

      function g(t) {
        var e = "maxlength";
        return h.allowOverMax && (e = "data-bs-mxl"), t.attr(e) || t.attr("size");
      }

      var e = v("body");
      return v.isFunction(h) && !t && (t = h, h = {}), h = v.extend({
        showOnReady: !1,
        alwaysShow: !1,
        threshold: 10,
        warningClass: "label label-success",
        limitReachedClass: "label label-important label-danger",
        separator: " / ",
        preText: "",
        postText: "",
        showMaxLength: !0,
        placement: "bottom",
        message: null,
        showCharsTyped: !0,
        validate: !1,
        utf8: !1,
        appendToParent: !1,
        twoCharLinebreak: !0,
        allowOverMax: !1
      }, h), this.each(function () {
        function t() {
          var t = p(c.val(), a, "0");
          a = g(c), l || (l = v('<span class="bootstrap-maxlength"></span>').css({
            display: "none",
            position: "absolute",
            whiteSpace: "nowrap",
            zIndex: 1099
          }).html(t)), c.is("textarea") && (c.data("maxlenghtsizex", c.outerWidth()), c.data("maxlenghtsizey", c.outerHeight()), c.mouseup(function () {
            (c.outerWidth() !== c.data("maxlenghtsizex") || c.outerHeight() !== c.data("maxlenghtsizey")) && m(c, l), c.data("maxlenghtsizex", c.outerWidth()), c.data("maxlenghtsizey", c.outerHeight());
          })), h.appendToParent ? (c.parent().append(l), c.parent().css("position", "relative")) : e.append(l), f(u(c, g(c)), c, a, l), m(c, l);
        }

        var a,
            l,
            c = v(this);
        v(window).resize(function () {
          l && m(c, l);
        }), h.allowOverMax && (v(this).attr("data-bs-mxl", v(this).attr("maxlength")), v(this).removeAttr("maxlength")), h.showOnReady ? c.ready(function () {
          t();
        }) : c.focus(function () {
          t();
        }), c.on("maxlength.reposition", function () {
          m(c, l);
        }), c.on("destroyed", function () {
          l && l.remove();
        }), c.on("blur", function () {
          l && !h.showOnReady && l.remove();
        }), c.on("input", function () {
          var t,
              e,
              n,
              i,
              s = g(c),
              o = u(c, s),
              r = !0;
          return h.validate && o < 0 ? (e = s, n = (t = c).val(), i = 0, h.twoCharLinebreak && "\n" === (n = n.replace(/\r(?!\n)|\n(?!\r)/g, "\r\n")).substr(n.length - 1) && n.length % 2 == 1 && (i = 1), t.val(n.substr(0, e - i)), r = !1) : f(o, c, a, l), ("bottom-right-inside" === h.placement || "top-right-inside" === h.placement) && m(c, l), r;
        });
      });
    }
  });
}(jQuery), function (t) {
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__WEBPACK_LOCAL_MODULE_0__], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(function (S, T) {
  function E() {
    return new Date(Date.UTC.apply(Date, arguments));
  }

  function w() {
    var t = new Date();
    return E(t.getFullYear(), t.getMonth(), t.getDate());
  }

  function o(t, e) {
    return t.getUTCFullYear() === e.getUTCFullYear() && t.getUTCMonth() === e.getUTCMonth() && t.getUTCDate() === e.getUTCDate();
  }

  function t(t, e) {
    return function () {
      return e !== T && S.fn.datepicker.deprecated(e), this[t].apply(this, arguments);
    };
  }

  var e,
      n = (e = {
    get: function get(t) {
      return this.slice(t)[0];
    },
    contains: function contains(t) {
      for (var e = t && t.valueOf(), n = 0, i = this.length; n < i; n++) {
        if (0 <= this[n].valueOf() - e && this[n].valueOf() - e < 864e5) return n;
      }

      return -1;
    },
    remove: function remove(t) {
      this.splice(t, 1);
    },
    replace: function replace(t) {
      t && (S.isArray(t) || (t = [t]), this.clear(), this.push.apply(this, t));
    },
    clear: function clear() {
      this.length = 0;
    },
    copy: function copy() {
      var t = new n();
      return t.replace(this), t;
    }
  }, function () {
    var t = [];
    return t.push.apply(t, arguments), S.extend(t, e), t;
  }),
      D = function D(t, e) {
    S.data(t, "datepicker", this), this._process_options(e), this.dates = new n(), this.viewDate = this.o.defaultViewDate, this.focusDate = null, this.element = S(t), this.isInput = this.element.is("input"), this.inputField = this.isInput ? this.element : this.element.find("input"), this.component = !!this.element.hasClass("date") && this.element.find(".add-on, .input-group-addon, .btn"), this.component && 0 === this.component.length && (this.component = !1), this.isInline = !this.component && this.element.is("div"), this.picker = S(A.template), this._check_template(this.o.templates.leftArrow) && this.picker.find(".prev").html(this.o.templates.leftArrow), this._check_template(this.o.templates.rightArrow) && this.picker.find(".next").html(this.o.templates.rightArrow), this._buildEvents(), this._attachEvents(), this.isInline ? this.picker.addClass("datepicker-inline").appendTo(this.element) : this.picker.addClass("datepicker-dropdown dropdown-menu"), this.o.rtl && this.picker.addClass("datepicker-rtl"), this.o.calendarWeeks && this.picker.find(".datepicker-days .datepicker-switch, thead .datepicker-title, tfoot .today, tfoot .clear").attr("colspan", function (t, e) {
      return Number(e) + 1;
    }), this._process_options({
      startDate: this._o.startDate,
      endDate: this._o.endDate,
      daysOfWeekDisabled: this.o.daysOfWeekDisabled,
      daysOfWeekHighlighted: this.o.daysOfWeekHighlighted,
      datesDisabled: this.o.datesDisabled
    }), this._allow_update = !1, this.setViewMode(this.o.startView), this._allow_update = !0, this.fillDow(), this.fillMonths(), this.update(), this.isInline && this.show();
  };

  D.prototype = {
    constructor: D,
    _resolveViewName: function _resolveViewName(n) {
      return S.each(A.viewModes, function (t, e) {
        if (n === t || -1 !== S.inArray(n, e.names)) return n = t, !1;
      }), n;
    },
    _resolveDaysOfWeek: function _resolveDaysOfWeek(t) {
      return S.isArray(t) || (t = t.split(/[,\s]*/)), S.map(t, Number);
    },
    _check_template: function _check_template(t) {
      try {
        return t !== T && "" !== t && ((t.match(/[<>]/g) || []).length <= 0 || 0 < S(t).length);
      } catch (t) {
        return !1;
      }
    },
    _process_options: function _process_options(t) {
      this._o = S.extend({}, this._o, t);
      var e = this.o = S.extend({}, this._o),
          n = e.language;
      M[n] || (n = n.split("-")[0], M[n] || (n = h.language)), e.language = n, e.startView = this._resolveViewName(e.startView), e.minViewMode = this._resolveViewName(e.minViewMode), e.maxViewMode = this._resolveViewName(e.maxViewMode), e.startView = Math.max(this.o.minViewMode, Math.min(this.o.maxViewMode, e.startView)), !0 !== e.multidate && (e.multidate = Number(e.multidate) || !1, !1 !== e.multidate && (e.multidate = Math.max(0, e.multidate))), e.multidateSeparator = String(e.multidateSeparator), e.weekStart %= 7, e.weekEnd = (e.weekStart + 6) % 7;
      var i = A.parseFormat(e.format);
      e.startDate !== -1 / 0 && (e.startDate ? e.startDate instanceof Date ? e.startDate = this._local_to_utc(this._zero_time(e.startDate)) : e.startDate = A.parseDate(e.startDate, i, e.language, e.assumeNearbyYear) : e.startDate = -1 / 0), e.endDate !== 1 / 0 && (e.endDate ? e.endDate instanceof Date ? e.endDate = this._local_to_utc(this._zero_time(e.endDate)) : e.endDate = A.parseDate(e.endDate, i, e.language, e.assumeNearbyYear) : e.endDate = 1 / 0), e.daysOfWeekDisabled = this._resolveDaysOfWeek(e.daysOfWeekDisabled || []), e.daysOfWeekHighlighted = this._resolveDaysOfWeek(e.daysOfWeekHighlighted || []), e.datesDisabled = e.datesDisabled || [], S.isArray(e.datesDisabled) || (e.datesDisabled = e.datesDisabled.split(",")), e.datesDisabled = S.map(e.datesDisabled, function (t) {
        return A.parseDate(t, i, e.language, e.assumeNearbyYear);
      });
      var s = String(e.orientation).toLowerCase().split(/\s+/g),
          o = e.orientation.toLowerCase();
      if (s = S.grep(s, function (t) {
        return /^auto|left|right|top|bottom$/.test(t);
      }), e.orientation = {
        x: "auto",
        y: "auto"
      }, o && "auto" !== o) if (1 === s.length) switch (s[0]) {
        case "top":
        case "bottom":
          e.orientation.y = s[0];
          break;

        case "left":
        case "right":
          e.orientation.x = s[0];
      } else o = S.grep(s, function (t) {
        return /^left|right$/.test(t);
      }), e.orientation.x = o[0] || "auto", o = S.grep(s, function (t) {
        return /^top|bottom$/.test(t);
      }), e.orientation.y = o[0] || "auto";
      if (e.defaultViewDate instanceof Date || "string" == typeof e.defaultViewDate) e.defaultViewDate = A.parseDate(e.defaultViewDate, i, e.language, e.assumeNearbyYear);else if (e.defaultViewDate) {
        var r = e.defaultViewDate.year || new Date().getFullYear(),
            a = e.defaultViewDate.month || 0,
            l = e.defaultViewDate.day || 1;
        e.defaultViewDate = E(r, a, l);
      } else e.defaultViewDate = w();
    },
    _events: [],
    _secondaryEvents: [],
    _applyEvents: function _applyEvents(t) {
      for (var e, n, i, s = 0; s < t.length; s++) {
        e = t[s][0], 2 === t[s].length ? (n = T, i = t[s][1]) : 3 === t[s].length && (n = t[s][1], i = t[s][2]), e.on(i, n);
      }
    },
    _unapplyEvents: function _unapplyEvents(t) {
      for (var e, n, i, s = 0; s < t.length; s++) {
        e = t[s][0], 2 === t[s].length ? (i = T, n = t[s][1]) : 3 === t[s].length && (i = t[s][1], n = t[s][2]), e.off(n, i);
      }
    },
    _buildEvents: function _buildEvents() {
      var t = {
        keyup: S.proxy(function (t) {
          -1 === S.inArray(t.keyCode, [27, 37, 39, 38, 40, 32, 13, 9]) && this.update();
        }, this),
        keydown: S.proxy(this.keydown, this),
        paste: S.proxy(this.paste, this)
      };
      !0 === this.o.showOnFocus && (t.focus = S.proxy(this.show, this)), this.isInput ? this._events = [[this.element, t]] : this.component && this.inputField.length ? this._events = [[this.inputField, t], [this.component, {
        click: S.proxy(this.show, this)
      }]] : this._events = [[this.element, {
        click: S.proxy(this.show, this),
        keydown: S.proxy(this.keydown, this)
      }]], this._events.push([this.element, "*", {
        blur: S.proxy(function (t) {
          this._focused_from = t.target;
        }, this)
      }], [this.element, {
        blur: S.proxy(function (t) {
          this._focused_from = t.target;
        }, this)
      }]), this.o.immediateUpdates && this._events.push([this.element, {
        "changeYear changeMonth": S.proxy(function (t) {
          this.update(t.date);
        }, this)
      }]), this._secondaryEvents = [[this.picker, {
        click: S.proxy(this.click, this)
      }], [this.picker, ".prev, .next", {
        click: S.proxy(this.navArrowsClick, this)
      }], [this.picker, ".day:not(.disabled)", {
        click: S.proxy(this.dayCellClick, this)
      }], [S(window), {
        resize: S.proxy(this.place, this)
      }], [S(document), {
        "mousedown touchstart": S.proxy(function (t) {
          this.element.is(t.target) || this.element.find(t.target).length || this.picker.is(t.target) || this.picker.find(t.target).length || this.isInline || this.hide();
        }, this)
      }]];
    },
    _attachEvents: function _attachEvents() {
      this._detachEvents(), this._applyEvents(this._events);
    },
    _detachEvents: function _detachEvents() {
      this._unapplyEvents(this._events);
    },
    _attachSecondaryEvents: function _attachSecondaryEvents() {
      this._detachSecondaryEvents(), this._applyEvents(this._secondaryEvents);
    },
    _detachSecondaryEvents: function _detachSecondaryEvents() {
      this._unapplyEvents(this._secondaryEvents);
    },
    _trigger: function _trigger(t, e) {
      var n = e || this.dates.get(-1),
          i = this._utc_to_local(n);

      this.element.trigger({
        type: t,
        date: i,
        viewMode: this.viewMode,
        dates: S.map(this.dates, this._utc_to_local),
        format: S.proxy(function (t, e) {
          0 === arguments.length ? (t = this.dates.length - 1, e = this.o.format) : "string" == typeof t && (e = t, t = this.dates.length - 1), e = e || this.o.format;
          var n = this.dates.get(t);
          return A.formatDate(n, e, this.o.language);
        }, this)
      });
    },
    show: function show() {
      if (!(this.inputField.prop("disabled") || this.inputField.prop("readonly") && !1 === this.o.enableOnReadonly)) return this.isInline || this.picker.appendTo(this.o.container), this.place(), this.picker.show(), this._attachSecondaryEvents(), this._trigger("show"), (window.navigator.msMaxTouchPoints || "ontouchstart" in document) && this.o.disableTouchKeyboard && S(this.element).blur(), this;
    },
    hide: function hide() {
      return this.isInline || !this.picker.is(":visible") || (this.focusDate = null, this.picker.hide().detach(), this._detachSecondaryEvents(), this.setViewMode(this.o.startView), this.o.forceParse && this.inputField.val() && this.setValue(), this._trigger("hide")), this;
    },
    destroy: function destroy() {
      return this.hide(), this._detachEvents(), this._detachSecondaryEvents(), this.picker.remove(), delete this.element.data().datepicker, this.isInput || delete this.element.data().date, this;
    },
    paste: function paste(t) {
      var e;
      if (t.originalEvent.clipboardData && t.originalEvent.clipboardData.types && -1 !== S.inArray("text/plain", t.originalEvent.clipboardData.types)) e = t.originalEvent.clipboardData.getData("text/plain");else {
        if (!window.clipboardData) return;
        e = window.clipboardData.getData("Text");
      }
      this.setDate(e), this.update(), t.preventDefault();
    },
    _utc_to_local: function _utc_to_local(t) {
      if (!t) return t;
      var e = new Date(t.getTime() + 6e4 * t.getTimezoneOffset());
      return e.getTimezoneOffset() !== t.getTimezoneOffset() && (e = new Date(t.getTime() + 6e4 * e.getTimezoneOffset())), e;
    },
    _local_to_utc: function _local_to_utc(t) {
      return t && new Date(t.getTime() - 6e4 * t.getTimezoneOffset());
    },
    _zero_time: function _zero_time(t) {
      return t && new Date(t.getFullYear(), t.getMonth(), t.getDate());
    },
    _zero_utc_time: function _zero_utc_time(t) {
      return t && E(t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate());
    },
    getDates: function getDates() {
      return S.map(this.dates, this._utc_to_local);
    },
    getUTCDates: function getUTCDates() {
      return S.map(this.dates, function (t) {
        return new Date(t);
      });
    },
    getDate: function getDate() {
      return this._utc_to_local(this.getUTCDate());
    },
    getUTCDate: function getUTCDate() {
      var t = this.dates.get(-1);
      return t !== T ? new Date(t) : null;
    },
    clearDates: function clearDates() {
      this.inputField.val(""), this.update(), this._trigger("changeDate"), this.o.autoclose && this.hide();
    },
    setDates: function setDates() {
      var t = S.isArray(arguments[0]) ? arguments[0] : arguments;
      return this.update.apply(this, t), this._trigger("changeDate"), this.setValue(), this;
    },
    setUTCDates: function setUTCDates() {
      var t = S.isArray(arguments[0]) ? arguments[0] : arguments;
      return this.setDates.apply(this, S.map(t, this._utc_to_local)), this;
    },
    setDate: t("setDates"),
    setUTCDate: t("setUTCDates"),
    remove: t("destroy", "Method `remove` is deprecated and will be removed in version 2.0. Use `destroy` instead"),
    setValue: function setValue() {
      var t = this.getFormattedDate();
      return this.inputField.val(t), this;
    },
    getFormattedDate: function getFormattedDate(e) {
      e === T && (e = this.o.format);
      var n = this.o.language;
      return S.map(this.dates, function (t) {
        return A.formatDate(t, e, n);
      }).join(this.o.multidateSeparator);
    },
    getStartDate: function getStartDate() {
      return this.o.startDate;
    },
    setStartDate: function setStartDate(t) {
      return this._process_options({
        startDate: t
      }), this.update(), this.updateNavArrows(), this;
    },
    getEndDate: function getEndDate() {
      return this.o.endDate;
    },
    setEndDate: function setEndDate(t) {
      return this._process_options({
        endDate: t
      }), this.update(), this.updateNavArrows(), this;
    },
    setDaysOfWeekDisabled: function setDaysOfWeekDisabled(t) {
      return this._process_options({
        daysOfWeekDisabled: t
      }), this.update(), this;
    },
    setDaysOfWeekHighlighted: function setDaysOfWeekHighlighted(t) {
      return this._process_options({
        daysOfWeekHighlighted: t
      }), this.update(), this;
    },
    setDatesDisabled: function setDatesDisabled(t) {
      return this._process_options({
        datesDisabled: t
      }), this.update(), this;
    },
    place: function place() {
      if (this.isInline) return this;
      var t = this.picker.outerWidth(),
          e = this.picker.outerHeight(),
          n = S(this.o.container),
          i = n.width(),
          s = "body" === this.o.container ? S(document).scrollTop() : n.scrollTop(),
          o = n.offset(),
          r = [0];
      this.element.parents().each(function () {
        var t = S(this).css("z-index");
        "auto" !== t && 0 !== Number(t) && r.push(Number(t));
      });
      var a = Math.max.apply(Math, r) + this.o.zIndexOffset,
          l = this.component ? this.component.parent().offset() : this.element.offset(),
          c = this.component ? this.component.outerHeight(!0) : this.element.outerHeight(!1),
          h = this.component ? this.component.outerWidth(!0) : this.element.outerWidth(!1),
          u = l.left - o.left,
          d = l.top - o.top;
      "body" !== this.o.container && (d += s), this.picker.removeClass("datepicker-orient-top datepicker-orient-bottom datepicker-orient-right datepicker-orient-left"), "auto" !== this.o.orientation.x ? (this.picker.addClass("datepicker-orient-" + this.o.orientation.x), "right" === this.o.orientation.x && (u -= t - h)) : l.left < 0 ? (this.picker.addClass("datepicker-orient-left"), u -= l.left - 10) : i < u + t ? (this.picker.addClass("datepicker-orient-right"), u += h - t) : this.o.rtl ? this.picker.addClass("datepicker-orient-right") : this.picker.addClass("datepicker-orient-left");
      var p = this.o.orientation.y;

      if ("auto" === p && (p = -s + d - e < 0 ? "bottom" : "top"), this.picker.addClass("datepicker-orient-" + p), "top" === p ? d -= e + parseInt(this.picker.css("padding-top")) : d += c, this.o.rtl) {
        var f = i - (u + h);
        this.picker.css({
          top: d,
          right: f,
          zIndex: a
        });
      } else this.picker.css({
        top: d,
        left: u,
        zIndex: a
      });

      return this;
    },
    _allow_update: !0,
    update: function update() {
      if (!this._allow_update) return this;
      var t = this.dates.copy(),
          n = [],
          e = !1;
      return arguments.length ? (S.each(arguments, S.proxy(function (t, e) {
        e instanceof Date && (e = this._local_to_utc(e)), n.push(e);
      }, this)), e = !0) : (n = (n = this.isInput ? this.element.val() : this.element.data("date") || this.inputField.val()) && this.o.multidate ? n.split(this.o.multidateSeparator) : [n], delete this.element.data().date), n = S.map(n, S.proxy(function (t) {
        return A.parseDate(t, this.o.format, this.o.language, this.o.assumeNearbyYear);
      }, this)), n = S.grep(n, S.proxy(function (t) {
        return !this.dateWithinRange(t) || !t;
      }, this), !0), this.dates.replace(n), this.o.updateViewDate && (this.dates.length ? this.viewDate = new Date(this.dates.get(-1)) : this.viewDate < this.o.startDate ? this.viewDate = new Date(this.o.startDate) : this.viewDate > this.o.endDate ? this.viewDate = new Date(this.o.endDate) : this.viewDate = this.o.defaultViewDate), e ? (this.setValue(), this.element.change()) : this.dates.length && String(t) !== String(this.dates) && e && (this._trigger("changeDate"), this.element.change()), !this.dates.length && t.length && (this._trigger("clearDate"), this.element.change()), this.fill(), this;
    },
    fillDow: function fillDow() {
      if (this.o.showWeekDays) {
        var t = this.o.weekStart,
            e = "<tr>";

        for (this.o.calendarWeeks && (e += '<th class="cw">&#160;</th>'); t < this.o.weekStart + 7;) {
          e += '<th class="dow', -1 !== S.inArray(t, this.o.daysOfWeekDisabled) && (e += " disabled"), e += '">' + M[this.o.language].daysMin[t++ % 7] + "</th>";
        }

        e += "</tr>", this.picker.find(".datepicker-days thead").append(e);
      }
    },
    fillMonths: function fillMonths() {
      for (var t = this._utc_to_local(this.viewDate), e = "", n = 0; n < 12; n++) {
        e += '<span class="month' + (t && t.getMonth() === n ? " focused" : "") + '">' + M[this.o.language].monthsShort[n] + "</span>";
      }

      this.picker.find(".datepicker-months td").html(e);
    },
    setRange: function setRange(t) {
      t && t.length ? this.range = S.map(t, function (t) {
        return t.valueOf();
      }) : delete this.range, this.fill();
    },
    getClassNames: function getClassNames(t) {
      var e = [],
          n = this.viewDate.getUTCFullYear(),
          i = this.viewDate.getUTCMonth(),
          s = w();
      return t.getUTCFullYear() < n || t.getUTCFullYear() === n && t.getUTCMonth() < i ? e.push("old") : (t.getUTCFullYear() > n || t.getUTCFullYear() === n && t.getUTCMonth() > i) && e.push("new"), this.focusDate && t.valueOf() === this.focusDate.valueOf() && e.push("focused"), this.o.todayHighlight && o(t, s) && e.push("today"), -1 !== this.dates.contains(t) && e.push("active"), this.dateWithinRange(t) || e.push("disabled"), this.dateIsDisabled(t) && e.push("disabled", "disabled-date"), -1 !== S.inArray(t.getUTCDay(), this.o.daysOfWeekHighlighted) && e.push("highlighted"), this.range && (t > this.range[0] && t < this.range[this.range.length - 1] && e.push("range"), -1 !== S.inArray(t.valueOf(), this.range) && e.push("selected"), t.valueOf() === this.range[0] && e.push("range-start"), t.valueOf() === this.range[this.range.length - 1] && e.push("range-end")), e;
    },
    _fill_yearsView: function _fill_yearsView(t, e, n, i, s, o, r) {
      for (var a, l, c, h = "", u = n / 10, d = this.picker.find(t), p = Math.floor(i / n) * n, f = p + 9 * u, m = Math.floor(this.viewDate.getFullYear() / u) * u, g = S.map(this.dates, function (t) {
        return Math.floor(t.getUTCFullYear() / u) * u;
      }), v = p - u; v <= f + u; v += u) {
        a = [e], l = null, v === p - u ? a.push("old") : v === f + u && a.push("new"), -1 !== S.inArray(v, g) && a.push("active"), (v < s || o < v) && a.push("disabled"), v === m && a.push("focused"), r !== S.noop && ((c = r(new Date(v, 0, 1))) === T ? c = {} : "boolean" == typeof c ? c = {
          enabled: c
        } : "string" == typeof c && (c = {
          classes: c
        }), !1 === c.enabled && a.push("disabled"), c.classes && (a = a.concat(c.classes.split(/\s+/))), c.tooltip && (l = c.tooltip)), h += '<span class="' + a.join(" ") + '"' + (l ? ' title="' + l + '"' : "") + ">" + v + "</span>";
      }

      d.find(".datepicker-switch").text(p + "-" + f), d.find("td").html(h);
    },
    fill: function fill() {
      var t,
          e,
          n = new Date(this.viewDate),
          s = n.getUTCFullYear(),
          i = n.getUTCMonth(),
          o = this.o.startDate !== -1 / 0 ? this.o.startDate.getUTCFullYear() : -1 / 0,
          r = this.o.startDate !== -1 / 0 ? this.o.startDate.getUTCMonth() : -1 / 0,
          a = this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCFullYear() : 1 / 0,
          l = this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCMonth() : 1 / 0,
          c = M[this.o.language].today || M.en.today || "",
          h = M[this.o.language].clear || M.en.clear || "",
          u = M[this.o.language].titleFormat || M.en.titleFormat;

      if (!isNaN(s) && !isNaN(i)) {
        this.picker.find(".datepicker-days .datepicker-switch").text(A.formatDate(n, u, this.o.language)), this.picker.find("tfoot .today").text(c).css("display", !0 === this.o.todayBtn || "linked" === this.o.todayBtn ? "table-cell" : "none"), this.picker.find("tfoot .clear").text(h).css("display", !0 === this.o.clearBtn ? "table-cell" : "none"), this.picker.find("thead .datepicker-title").text(this.o.title).css("display", "string" == typeof this.o.title && "" !== this.o.title ? "table-cell" : "none"), this.updateNavArrows(), this.fillMonths();
        var d = E(s, i, 0),
            p = d.getUTCDate();
        d.setUTCDate(p - (d.getUTCDay() - this.o.weekStart + 7) % 7);
        var f = new Date(d);
        d.getUTCFullYear() < 100 && f.setUTCFullYear(d.getUTCFullYear()), f.setUTCDate(f.getUTCDate() + 42), f = f.valueOf();

        for (var m, g, v = []; d.valueOf() < f;) {
          if ((m = d.getUTCDay()) === this.o.weekStart && (v.push("<tr>"), this.o.calendarWeeks)) {
            var y = new Date(+d + (this.o.weekStart - m - 7) % 7 * 864e5),
                b = new Date(Number(y) + (11 - y.getUTCDay()) % 7 * 864e5),
                _ = new Date(Number(_ = E(b.getUTCFullYear(), 0, 1)) + (11 - _.getUTCDay()) % 7 * 864e5),
                w = (b - _) / 864e5 / 7 + 1;

            v.push('<td class="cw">' + w + "</td>");
          }

          (g = this.getClassNames(d)).push("day");
          var D = d.getUTCDate();
          this.o.beforeShowDay !== S.noop && ((e = this.o.beforeShowDay(this._utc_to_local(d))) === T ? e = {} : "boolean" == typeof e ? e = {
            enabled: e
          } : "string" == typeof e && (e = {
            classes: e
          }), !1 === e.enabled && g.push("disabled"), e.classes && (g = g.concat(e.classes.split(/\s+/))), e.tooltip && (t = e.tooltip), e.content && (D = e.content)), g = S.isFunction(S.uniqueSort) ? S.uniqueSort(g) : S.unique(g), v.push('<td class="' + g.join(" ") + '"' + (t ? ' title="' + t + '"' : "") + ' data-date="' + d.getTime().toString() + '">' + D + "</td>"), t = null, m === this.o.weekEnd && v.push("</tr>"), d.setUTCDate(d.getUTCDate() + 1);
        }

        this.picker.find(".datepicker-days tbody").html(v.join(""));
        var k = M[this.o.language].monthsTitle || M.en.monthsTitle || "Months",
            C = this.picker.find(".datepicker-months").find(".datepicker-switch").text(this.o.maxViewMode < 2 ? k : s).end().find("tbody span").removeClass("active");

        if (S.each(this.dates, function (t, e) {
          e.getUTCFullYear() === s && C.eq(e.getUTCMonth()).addClass("active");
        }), (s < o || a < s) && C.addClass("disabled"), s === o && C.slice(0, r).addClass("disabled"), s === a && C.slice(l + 1).addClass("disabled"), this.o.beforeShowMonth !== S.noop) {
          var x = this;
          S.each(C, function (t, e) {
            var n = new Date(s, t, 1),
                i = x.o.beforeShowMonth(n);
            i === T ? i = {} : "boolean" == typeof i ? i = {
              enabled: i
            } : "string" == typeof i && (i = {
              classes: i
            }), !1 !== i.enabled || S(e).hasClass("disabled") || S(e).addClass("disabled"), i.classes && S(e).addClass(i.classes), i.tooltip && S(e).prop("title", i.tooltip);
          });
        }

        this._fill_yearsView(".datepicker-years", "year", 10, s, o, a, this.o.beforeShowYear), this._fill_yearsView(".datepicker-decades", "decade", 100, s, o, a, this.o.beforeShowDecade), this._fill_yearsView(".datepicker-centuries", "century", 1e3, s, o, a, this.o.beforeShowCentury);
      }
    },
    updateNavArrows: function updateNavArrows() {
      if (this._allow_update) {
        var t,
            e,
            n = new Date(this.viewDate),
            i = n.getUTCFullYear(),
            s = n.getUTCMonth(),
            o = this.o.startDate !== -1 / 0 ? this.o.startDate.getUTCFullYear() : -1 / 0,
            r = this.o.startDate !== -1 / 0 ? this.o.startDate.getUTCMonth() : -1 / 0,
            a = this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCFullYear() : 1 / 0,
            l = this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCMonth() : 1 / 0,
            c = 1;

        switch (this.viewMode) {
          case 4:
            c *= 10;

          case 3:
            c *= 10;

          case 2:
            c *= 10;

          case 1:
            t = Math.floor(i / c) * c < o, e = Math.floor(i / c) * c + c > a;
            break;

          case 0:
            t = i <= o && s < r, e = a <= i && l < s;
        }

        this.picker.find(".prev").toggleClass("disabled", t), this.picker.find(".next").toggleClass("disabled", e);
      }
    },
    click: function click(t) {
      var e, n, i;
      t.preventDefault(), t.stopPropagation(), (e = S(t.target)).hasClass("datepicker-switch") && this.viewMode !== this.o.maxViewMode && this.setViewMode(this.viewMode + 1), e.hasClass("today") && !e.hasClass("day") && (this.setViewMode(0), this._setDate(w(), "linked" === this.o.todayBtn ? null : "view")), e.hasClass("clear") && this.clearDates(), e.hasClass("disabled") || (e.hasClass("month") || e.hasClass("year") || e.hasClass("decade") || e.hasClass("century")) && (this.viewDate.setUTCDate(1), 1 === this.viewMode ? (i = e.parent().find("span").index(e), n = this.viewDate.getUTCFullYear(), this.viewDate.setUTCMonth(i)) : (i = 0, n = Number(e.text()), this.viewDate.setUTCFullYear(n)), this._trigger(A.viewModes[this.viewMode - 1].e, this.viewDate), this.viewMode === this.o.minViewMode ? this._setDate(E(n, i, 1)) : (this.setViewMode(this.viewMode - 1), this.fill())), this.picker.is(":visible") && this._focused_from && this._focused_from.focus(), delete this._focused_from;
    },
    dayCellClick: function dayCellClick(t) {
      var e = S(t.currentTarget).data("date"),
          n = new Date(e);
      this.o.updateViewDate && (n.getUTCFullYear() !== this.viewDate.getUTCFullYear() && this._trigger("changeYear", this.viewDate), n.getUTCMonth() !== this.viewDate.getUTCMonth() && this._trigger("changeMonth", this.viewDate)), this._setDate(n);
    },
    navArrowsClick: function navArrowsClick(t) {
      var e = S(t.currentTarget).hasClass("prev") ? -1 : 1;
      0 !== this.viewMode && (e *= 12 * A.viewModes[this.viewMode].navStep), this.viewDate = this.moveMonth(this.viewDate, e), this._trigger(A.viewModes[this.viewMode].e, this.viewDate), this.fill();
    },
    _toggle_multidate: function _toggle_multidate(t) {
      var e = this.dates.contains(t);
      if (t || this.dates.clear(), -1 !== e ? (!0 === this.o.multidate || 1 < this.o.multidate || this.o.toggleActive) && this.dates.remove(e) : (!1 === this.o.multidate && this.dates.clear(), this.dates.push(t)), "number" == typeof this.o.multidate) for (; this.dates.length > this.o.multidate;) {
        this.dates.remove(0);
      }
    },
    _setDate: function _setDate(t, e) {
      e && "date" !== e || this._toggle_multidate(t && new Date(t)), (!e && this.o.updateViewDate || "view" === e) && (this.viewDate = t && new Date(t)), this.fill(), this.setValue(), e && "view" === e || this._trigger("changeDate"), this.inputField.trigger("change"), !this.o.autoclose || e && "date" !== e || this.hide();
    },
    moveDay: function moveDay(t, e) {
      var n = new Date(t);
      return n.setUTCDate(t.getUTCDate() + e), n;
    },
    moveWeek: function moveWeek(t, e) {
      return this.moveDay(t, 7 * e);
    },
    moveMonth: function moveMonth(t, e) {
      if (!(n = t) || isNaN(n.getTime())) return this.o.defaultViewDate;
      var n;
      if (!e) return t;
      var i,
          s,
          o = new Date(t.valueOf()),
          r = o.getUTCDate(),
          a = o.getUTCMonth(),
          l = Math.abs(e);
      if (e = 0 < e ? 1 : -1, 1 === l) s = -1 === e ? function () {
        return o.getUTCMonth() === a;
      } : function () {
        return o.getUTCMonth() !== i;
      }, i = a + e, o.setUTCMonth(i), i = (i + 12) % 12;else {
        for (var c = 0; c < l; c++) {
          o = this.moveMonth(o, e);
        }

        i = o.getUTCMonth(), o.setUTCDate(r), s = function s() {
          return i !== o.getUTCMonth();
        };
      }

      for (; s();) {
        o.setUTCDate(--r), o.setUTCMonth(i);
      }

      return o;
    },
    moveYear: function moveYear(t, e) {
      return this.moveMonth(t, 12 * e);
    },
    moveAvailableDate: function moveAvailableDate(t, e, n) {
      do {
        if (t = this[n](t, e), !this.dateWithinRange(t)) return !1;
        n = "moveDay";
      } while (this.dateIsDisabled(t));

      return t;
    },
    weekOfDateIsDisabled: function weekOfDateIsDisabled(t) {
      return -1 !== S.inArray(t.getUTCDay(), this.o.daysOfWeekDisabled);
    },
    dateIsDisabled: function dateIsDisabled(e) {
      return this.weekOfDateIsDisabled(e) || 0 < S.grep(this.o.datesDisabled, function (t) {
        return o(e, t);
      }).length;
    },
    dateWithinRange: function dateWithinRange(t) {
      return t >= this.o.startDate && t <= this.o.endDate;
    },
    keydown: function keydown(t) {
      if (this.picker.is(":visible")) {
        var e,
            n,
            i = !1,
            s = this.focusDate || this.viewDate;

        switch (t.keyCode) {
          case 27:
            this.focusDate ? (this.focusDate = null, this.viewDate = this.dates.get(-1) || this.viewDate, this.fill()) : this.hide(), t.preventDefault(), t.stopPropagation();
            break;

          case 37:
          case 38:
          case 39:
          case 40:
            if (!this.o.keyboardNavigation || 7 === this.o.daysOfWeekDisabled.length) break;
            e = 37 === t.keyCode || 38 === t.keyCode ? -1 : 1, 0 === this.viewMode ? t.ctrlKey ? (n = this.moveAvailableDate(s, e, "moveYear")) && this._trigger("changeYear", this.viewDate) : t.shiftKey ? (n = this.moveAvailableDate(s, e, "moveMonth")) && this._trigger("changeMonth", this.viewDate) : 37 === t.keyCode || 39 === t.keyCode ? n = this.moveAvailableDate(s, e, "moveDay") : this.weekOfDateIsDisabled(s) || (n = this.moveAvailableDate(s, e, "moveWeek")) : 1 === this.viewMode ? (38 !== t.keyCode && 40 !== t.keyCode || (e *= 4), n = this.moveAvailableDate(s, e, "moveMonth")) : 2 === this.viewMode && (38 !== t.keyCode && 40 !== t.keyCode || (e *= 4), n = this.moveAvailableDate(s, e, "moveYear")), n && (this.focusDate = this.viewDate = n, this.setValue(), this.fill(), t.preventDefault());
            break;

          case 13:
            if (!this.o.forceParse) break;
            s = this.focusDate || this.dates.get(-1) || this.viewDate, this.o.keyboardNavigation && (this._toggle_multidate(s), i = !0), this.focusDate = null, this.viewDate = this.dates.get(-1) || this.viewDate, this.setValue(), this.fill(), this.picker.is(":visible") && (t.preventDefault(), t.stopPropagation(), this.o.autoclose && this.hide());
            break;

          case 9:
            this.focusDate = null, this.viewDate = this.dates.get(-1) || this.viewDate, this.fill(), this.hide();
        }

        i && (this.dates.length ? this._trigger("changeDate") : this._trigger("clearDate"), this.inputField.trigger("change"));
      } else 40 !== t.keyCode && 27 !== t.keyCode || (this.show(), t.stopPropagation());
    },
    setViewMode: function setViewMode(t) {
      this.viewMode = t, this.picker.children("div").hide().filter(".datepicker-" + A.viewModes[this.viewMode].clsName).show(), this.updateNavArrows(), this._trigger("changeViewMode", new Date(this.viewDate));
    }
  };

  var c = function c(t, e) {
    S.data(t, "datepicker", this), this.element = S(t), this.inputs = S.map(e.inputs, function (t) {
      return t.jquery ? t[0] : t;
    }), delete e.inputs, this.keepEmptyValues = e.keepEmptyValues, delete e.keepEmptyValues, s.call(S(this.inputs), e).on("changeDate", S.proxy(this.dateUpdated, this)), this.pickers = S.map(this.inputs, function (t) {
      return S.data(t, "datepicker");
    }), this.updateDates();
  };

  c.prototype = {
    updateDates: function updateDates() {
      this.dates = S.map(this.pickers, function (t) {
        return t.getUTCDate();
      }), this.updateRanges();
    },
    updateRanges: function updateRanges() {
      var n = S.map(this.dates, function (t) {
        return t.valueOf();
      });
      S.each(this.pickers, function (t, e) {
        e.setRange(n);
      });
    },
    clearDates: function clearDates() {
      S.each(this.pickers, function (t, e) {
        e.clearDates();
      });
    },
    dateUpdated: function dateUpdated(t) {
      if (!this.updating) {
        this.updating = !0;
        var n = S.data(t.target, "datepicker");

        if (n !== T) {
          var i = n.getUTCDate(),
              s = this.keepEmptyValues,
              e = S.inArray(t.target, this.inputs),
              o = e - 1,
              r = e + 1,
              a = this.inputs.length;

          if (-1 !== e) {
            if (S.each(this.pickers, function (t, e) {
              e.getUTCDate() || e !== n && s || e.setUTCDate(i);
            }), i < this.dates[o]) for (; 0 <= o && i < this.dates[o];) {
              this.pickers[o--].setUTCDate(i);
            } else if (i > this.dates[r]) for (; r < a && i > this.dates[r];) {
              this.pickers[r++].setUTCDate(i);
            }
            this.updateDates(), delete this.updating;
          }
        }
      }
    },
    destroy: function destroy() {
      S.map(this.pickers, function (t) {
        t.destroy();
      }), S(this.inputs).off("changeDate", this.dateUpdated), delete this.element.data().datepicker;
    },
    remove: t("destroy", "Method `remove` is deprecated and will be removed in version 2.0. Use `destroy` instead")
  };

  var i = S.fn.datepicker,
      s = function s(r) {
    var a,
        l = Array.apply(null, arguments);
    if (l.shift(), this.each(function () {
      var t = S(this),
          e = t.data("datepicker"),
          n = "object" == typeof r && r;

      if (!e) {
        var i = function (t, e) {
          function n(t, e) {
            return e.toLowerCase();
          }

          var i = S(t).data(),
              s = {},
              o = new RegExp("^" + e.toLowerCase() + "([A-Z])");

          for (var r in e = new RegExp("^" + e.toLowerCase()), i) {
            e.test(r) && (s[r.replace(o, n)] = i[r]);
          }

          return s;
        }(this, "date"),
            s = function (t) {
          var n = {};

          if (M[t] || (t = t.split("-")[0], M[t])) {
            var i = M[t];
            return S.each(u, function (t, e) {
              e in i && (n[e] = i[e]);
            }), n;
          }
        }(S.extend({}, h, i, n).language),
            o = S.extend({}, h, s, i, n);

        e = t.hasClass("input-daterange") || o.inputs ? (S.extend(o, {
          inputs: o.inputs || t.find("input").toArray()
        }), new c(this, o)) : new D(this, o), t.data("datepicker", e);
      }

      "string" == typeof r && "function" == typeof e[r] && (a = e[r].apply(e, l));
    }), a === T || a instanceof D || a instanceof c) return this;
    if (1 < this.length) throw new Error("Using only allowed for the collection of a single element (" + r + " function)");
    return a;
  };

  S.fn.datepicker = s;
  var h = S.fn.datepicker.defaults = {
    assumeNearbyYear: !1,
    autoclose: !1,
    beforeShowDay: S.noop,
    beforeShowMonth: S.noop,
    beforeShowYear: S.noop,
    beforeShowDecade: S.noop,
    beforeShowCentury: S.noop,
    calendarWeeks: !1,
    clearBtn: !1,
    toggleActive: !1,
    daysOfWeekDisabled: [],
    daysOfWeekHighlighted: [],
    datesDisabled: [],
    endDate: 1 / 0,
    forceParse: !0,
    format: "mm/dd/yyyy",
    keepEmptyValues: !1,
    keyboardNavigation: !0,
    language: "en",
    minViewMode: 0,
    maxViewMode: 4,
    multidate: !1,
    multidateSeparator: ",",
    orientation: "auto",
    rtl: !1,
    startDate: -1 / 0,
    startView: 0,
    todayBtn: !1,
    todayHighlight: !1,
    updateViewDate: !0,
    weekStart: 0,
    disableTouchKeyboard: !1,
    enableOnReadonly: !0,
    showOnFocus: !0,
    zIndexOffset: 10,
    container: "body",
    immediateUpdates: !1,
    title: "",
    templates: {
      leftArrow: "&#x00AB;",
      rightArrow: "&#x00BB;"
    },
    showWeekDays: !0
  },
      u = S.fn.datepicker.locale_opts = ["format", "rtl", "weekStart"];
  S.fn.datepicker.Constructor = D;
  var M = S.fn.datepicker.dates = {
    en: {
      days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
      months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      today: "Today",
      clear: "Clear",
      titleFormat: "MM yyyy"
    }
  },
      A = {
    viewModes: [{
      names: ["days", "month"],
      clsName: "days",
      e: "changeMonth"
    }, {
      names: ["months", "year"],
      clsName: "months",
      e: "changeYear",
      navStep: 1
    }, {
      names: ["years", "decade"],
      clsName: "years",
      e: "changeDecade",
      navStep: 10
    }, {
      names: ["decades", "century"],
      clsName: "decades",
      e: "changeCentury",
      navStep: 100
    }, {
      names: ["centuries", "millennium"],
      clsName: "centuries",
      e: "changeMillennium",
      navStep: 1e3
    }],
    validParts: /dd?|DD?|mm?|MM?|yy(?:yy)?/g,
    nonpunctuation: /[^ -\/:-@\u5e74\u6708\u65e5\[-`{-~\t\n\r]+/g,
    parseFormat: function parseFormat(t) {
      if ("function" == typeof t.toValue && "function" == typeof t.toDisplay) return t;
      var e = t.replace(this.validParts, "\0").split("\0"),
          n = t.match(this.validParts);
      if (!e || !e.length || !n || 0 === n.length) throw new Error("Invalid date format.");
      return {
        separators: e,
        parts: n
      };
    },
    parseDate: function parseDate(t, e, n, s) {
      function i() {
        var t = this.slice(0, o[l].length),
            e = o[l].slice(0, t.length);
        return t.toLowerCase() === e.toLowerCase();
      }

      if (!t) return T;
      if (t instanceof Date) return t;
      if ("string" == typeof e && (e = A.parseFormat(e)), e.toValue) return e.toValue(t, e, n);
      var o,
          r,
          a,
          l,
          c,
          h = {
        d: "moveDay",
        m: "moveMonth",
        w: "moveWeek",
        y: "moveYear"
      },
          u = {
        yesterday: "-1d",
        today: "+0d",
        tomorrow: "+1d"
      };

      if (t in u && (t = u[t]), /^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/i.test(t)) {
        for (o = t.match(/([\-+]\d+)([dmwy])/gi), t = new Date(), l = 0; l < o.length; l++) {
          r = o[l].match(/([\-+]\d+)([dmwy])/i), a = Number(r[1]), c = h[r[2].toLowerCase()], t = D.prototype[c](t, a);
        }

        return D.prototype._zero_utc_time(t);
      }

      o = t && t.match(this.nonpunctuation) || [];
      var d,
          p,
          f = {},
          m = ["yyyy", "yy", "M", "MM", "m", "mm", "d", "dd"],
          g = {
        yyyy: function yyyy(t, e) {
          return t.setUTCFullYear(s ? (!0 === (i = s) && (i = 10), (n = e) < 100 && (n += 2e3) > new Date().getFullYear() + i && (n -= 100), n) : e);
          var n, i;
        },
        m: function m(t, e) {
          if (isNaN(t)) return t;

          for (e -= 1; e < 0;) {
            e += 12;
          }

          for (e %= 12, t.setUTCMonth(e); t.getUTCMonth() !== e;) {
            t.setUTCDate(t.getUTCDate() - 1);
          }

          return t;
        },
        d: function d(t, e) {
          return t.setUTCDate(e);
        }
      };
      g.yy = g.yyyy, g.M = g.MM = g.mm = g.m, g.dd = g.d, t = w();
      var v = e.parts.slice();

      if (o.length !== v.length && (v = S(v).filter(function (t, e) {
        return -1 !== S.inArray(e, m);
      }).toArray()), o.length === v.length) {
        var y, b, _;

        for (l = 0, y = v.length; l < y; l++) {
          if (d = parseInt(o[l], 10), r = v[l], isNaN(d)) switch (r) {
            case "MM":
              p = S(M[n].months).filter(i), d = S.inArray(p[0], M[n].months) + 1;
              break;

            case "M":
              p = S(M[n].monthsShort).filter(i), d = S.inArray(p[0], M[n].monthsShort) + 1;
          }
          f[r] = d;
        }

        for (l = 0; l < m.length; l++) {
          (_ = m[l]) in f && !isNaN(f[_]) && (b = new Date(t), g[_](b, f[_]), isNaN(b) || (t = b));
        }
      }

      return t;
    },
    formatDate: function formatDate(t, e, n) {
      if (!t) return "";
      if ("string" == typeof e && (e = A.parseFormat(e)), e.toDisplay) return e.toDisplay(t, e, n);
      var i = {
        d: t.getUTCDate(),
        D: M[n].daysShort[t.getUTCDay()],
        DD: M[n].days[t.getUTCDay()],
        m: t.getUTCMonth() + 1,
        M: M[n].monthsShort[t.getUTCMonth()],
        MM: M[n].months[t.getUTCMonth()],
        yy: t.getUTCFullYear().toString().substring(2),
        yyyy: t.getUTCFullYear()
      };
      i.dd = (i.d < 10 ? "0" : "") + i.d, i.mm = (i.m < 10 ? "0" : "") + i.m, t = [];

      for (var s = S.extend([], e.separators), o = 0, r = e.parts.length; o <= r; o++) {
        s.length && t.push(s.shift()), t.push(i[e.parts[o]]);
      }

      return t.join("");
    },
    headTemplate: '<thead><tr><th colspan="7" class="datepicker-title"></th></tr><tr><th class="prev">' + h.templates.leftArrow + '</th><th colspan="5" class="datepicker-switch"></th><th class="next">' + h.templates.rightArrow + "</th></tr></thead>",
    contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>',
    footTemplate: '<tfoot><tr><th colspan="7" class="today"></th></tr><tr><th colspan="7" class="clear"></th></tr></tfoot>'
  };
  A.template = '<div class="datepicker"><div class="datepicker-days"><table class="table-condensed">' + A.headTemplate + "<tbody></tbody>" + A.footTemplate + '</table></div><div class="datepicker-months"><table class="table-condensed">' + A.headTemplate + A.contTemplate + A.footTemplate + '</table></div><div class="datepicker-years"><table class="table-condensed">' + A.headTemplate + A.contTemplate + A.footTemplate + '</table></div><div class="datepicker-decades"><table class="table-condensed">' + A.headTemplate + A.contTemplate + A.footTemplate + '</table></div><div class="datepicker-centuries"><table class="table-condensed">' + A.headTemplate + A.contTemplate + A.footTemplate + "</table></div></div>", S.fn.datepicker.DPGlobal = A, S.fn.datepicker.noConflict = function () {
    return S.fn.datepicker = i, this;
  }, S.fn.datepicker.version = "1.8.0", S.fn.datepicker.deprecated = function (t) {
    var e = window.console;
    e && e.warn && e.warn("DEPRECATED: " + t);
  }, S(document).on("focus.datepicker.data-api click.datepicker.data-api", '[data-provide="datepicker"]', function (t) {
    var e = S(this);
    e.data("datepicker") || (t.preventDefault(), s.call(e, "show"));
  }), S(function () {
    s.call(S('[data-provide="datepicker-inline"]'));
  });
}), function (s) {
  "use strict";

  var t = function t() {
    this.$body = s("body"), this.$portletIdentifier = ".card", this.$portletCloser = '.card a[data-toggle="remove"]', this.$portletRefresher = '.card a[data-toggle="reload"]';
  };

  t.prototype.init = function () {
    var i = this;
    s(document).on("click", this.$portletCloser, function (t) {
      t.preventDefault();
      var e = s(this).closest(i.$portletIdentifier),
          n = e.parent();
      e.remove(), 0 == n.children().length && n.remove();
    }), s(document).on("click", this.$portletRefresher, function (t) {
      t.preventDefault();
      var e = s(this).closest(i.$portletIdentifier);
      e.append('<div class="card-disabled"><div class="card-portlets-loader"></div></div>');
      var n = e.find(".card-disabled");
      setTimeout(function () {
        n.fadeOut("fast", function () {
          n.remove();
        });
      }, 500 + 5 * Math.random() * 300);
    });
  }, s.Portlet = new t(), s.Portlet.Constructor = t;
}(window.jQuery), function (o) {
  "use strict";

  var t = function t() {
    this.$body = o("body"), this.$window = o(window);
  };

  t.prototype.initSelect2 = function () {
    o('[data-toggle="select2"]').select2();
  }, t.prototype.initMask = function () {
    o('[data-toggle="input-mask"]').each(function (t, e) {
      var n = o(e).data("maskFormat"),
          i = o(e).data("reverse");
      null != i ? o(e).mask(n, {
        reverse: i
      }) : o(e).mask(n);
    });
  }, t.prototype.initDateRange = function () {
    var i = {
      cancelClass: "btn-light",
      applyButtonClasses: "btn-success"
    };
    o('[data-toggle="date-picker"]').each(function (t, e) {
      var n = o.extend({}, i, o(e).data());
      o(e).daterangepicker(n);
    });
    var s = {
      startDate: moment().subtract(29, "days"),
      endDate: moment(),
      ranges: {
        Today: [moment(), moment()],
        Yesterday: [moment().subtract(1, "days"), moment().subtract(1, "days")],
        "Last 7 Days": [moment().subtract(6, "days"), moment()],
        "Last 30 Days": [moment().subtract(29, "days"), moment()],
        "This Month": [moment().startOf("month"), moment().endOf("month")],
        "Last Month": [moment().subtract(1, "month").startOf("month"), moment().subtract(1, "month").endOf("month")]
      }
    };
    o('[data-toggle="date-picker-range"]').each(function (t, e) {
      var n = o.extend({}, s, o(e).data()),
          i = n.targetDisplay;
      o(e).daterangepicker(n, function (t, e) {
        i && o(i).html(t.format("MMMM D, YYYY") + " - " + e.format("MMMM D, YYYY"));
      });
    });
  }, t.prototype.initTimePicker = function () {
    var i = {
      showSeconds: !0,
      icons: {
        up: "mdi mdi-chevron-up",
        down: "mdi mdi-chevron-down"
      }
    };
    o('[data-toggle="timepicker"]').each(function (t, e) {
      var n = o.extend({}, i, o(e).data());
      o(e).timepicker(n);
    });
  }, t.prototype.initTouchspin = function () {
    var i = {};
    o('[data-toggle="touchspin"]').each(function (t, e) {
      var n = o.extend({}, i, o(e).data());
      o(e).TouchSpin(n);
    });
  }, t.prototype.initMaxlength = function () {
    var i = {
      warningClass: "badge badge-success",
      limitReachedClass: "badge badge-danger",
      separator: " out of ",
      preText: "You typed ",
      postText: " chars available.",
      placement: "bottom"
    };
    o('[data-toggle="maxlength"]').each(function (t, e) {
      var n = o.extend({}, i, o(e).data());
      o(e).maxlength(n);
    });
  }, t.prototype.init = function () {
    this.initSelect2(), this.initMask(), this.initDateRange(), this.initTimePicker(), this.initTouchspin(), this.initMaxlength();
  }, o.AdvanceFormApp = new t(), o.AdvanceFormApp.Constructor = t;
}(window.jQuery), function (c) {
  "use strict";

  var t = function t() {};

  t.prototype.send = function (t, e, n, i, s, o, r, a) {
    o || (o = 3e3), r || (r = 1);
    var l = {
      heading: t,
      text: e,
      position: n,
      loaderBg: i,
      icon: s,
      hideAfter: o,
      stack: r
    };
    l.showHideTransition = a || "fade", c.toast().reset("all"), c.toast(l);
  }, c.NotificationApp = new t(), c.NotificationApp.Constructor = t;
}(window.jQuery), function (e) {
  "use strict";

  var t = function t() {};

  t.prototype.initTooltipPlugin = function () {
    e.fn.tooltip && e('[data-toggle="tooltip"]').tooltip();
  }, t.prototype.initPopoverPlugin = function () {
    e.fn.popover && e('[data-toggle="popover"]').popover();
  }, t.prototype.initToastPlugin = function () {
    e.fn.toast && e('[data-toggle="toast"]').toast();
  }, t.prototype.initSlimScrollPlugin = function () {
    e.fn.slimScroll && e(".slimscroll").slimScroll({
      height: "auto",
      position: "right",
      size: "8px",
      touchScrollStep: 20,
      color: "#9ea5ab"
    });
  }, t.prototype.initFormValidation = function () {
    e(".needs-validation").on("submit", function (t) {
      return e(this).addClass("was-validated"), !1 !== e(this)[0].checkValidity() || (t.preventDefault(), t.stopPropagation(), !1);
    });
  }, t.prototype.init = function () {
    this.initTooltipPlugin(), this.initPopoverPlugin(), this.initToastPlugin(), this.initSlimScrollPlugin(), this.initFormValidation();
  }, e.Components = new t(), e.Components.Constructor = t;
}(window.jQuery), function (n) {
  "use strict";

  var t = function t() {
    this.body = n("body"), this.window = n(window), this.menuContainer = n(".slimscroll-menu");
  };

  t.prototype._resetSidebarScroll = function () {
    n(".slimscroll-menu").slimscroll({
      height: "auto",
      position: "right",
      size: "8px",
      color: "#9ea5ab",
      wheelStep: 5,
      touchScrollStep: 20
    });
  }, t.prototype._reset = function () {
    this.body.removeAttr("data-leftbar-theme"), n("#side-main-logo").attr("src", "assets/images/logo.png"), n("#side-sm-main-logo").attr("src", "assets/images/logo_sm.png");
  }, t.prototype.activateCondensedSidebar = function () {
    this.body.attr("data-leftbar-compact-mode", "condensed");
  }, t.prototype.deactivateCondensedSidebar = function () {
    this.body.removeAttr("data-leftbar-compact-mode");
  }, t.prototype.activateScrollableSidebar = function () {
    this.body.attr("data-leftbar-compact-mode", "scrollable");
    var t = n("#left-side-menu-container");
    t.slimScroll({
      destroy: !0
    }), t.removeClass("slimscroll-menu"), t.removeAttr("style"), this._resetSidebarScroll();
  }, t.prototype.deactivateScrollableSidebar = function () {
    this.body.removeAttr("data-leftbar-compact-mode"), n("#left-side-menu-container").addClass("slimscroll-menu"), this._resetSidebarScroll();
  }, t.prototype.activateDefaultTheme = function () {
    this._reset();
  }, t.prototype.activateLightTheme = function () {
    this._reset(), n("#side-main-logo").attr("src", "assets/images/logo-dark.png"), n("#side-sm-main-logo").attr("src", "assets/images/logo_sm_dark.png"), this.body.attr("data-leftbar-theme", "light");
  }, t.prototype.activateDarkTheme = function () {
    this._reset(), this.body.attr("data-leftbar-theme", "dark");
  }, t.prototype.initMenu = function () {
    var e = this;
    this._reset(), n(".side-nav").metisMenu(), this.body.hasClass("scrollable-layout") && n("#left-side-menu-container").removeClass("slimscroll-menu"), this._resetSidebarScroll(), n(document).on("click", ".button-menu-mobile", function (t) {
      t.preventDefault(), e.body.toggleClass("sidebar-enable"), e._resetSidebarScroll();
    }), n(".side-nav a").each(function () {
      var t = window.location.href.split(/[?#]/)[0];
      this.href == t && (n(this).addClass("active"), n(this).parent().addClass("mm-active"), n(this).parent().parent().addClass("mm-show"), n(this).parent().parent().prev().addClass("active"), n(this).parent().parent().parent().addClass("mm-active"), n(this).parent().parent().parent().parent().addClass("mm-show"), n(this).parent().parent().parent().parent().parent().addClass("mm-active"), n(this).parent().parent().parent().parent().parent().parent().addClass("mm-show"), n(this).parent().parent().parent().parent().parent().parent().parent().addClass("mm-active"));
    }), n.fn.slimScroll && n(".slimscroll").slimScroll({
      height: "auto",
      position: "right",
      size: "5px",
      touchScrollStep: 20,
      color: "#9ea5ab"
    });
  }, t.prototype.init = function () {
    this.initMenu();
  }, n.LeftSidebar = new t(), n.LeftSidebar.Constructor = t;
}(window.jQuery), function (e) {
  "use strict";

  var t = function t() {
    this.$body = e("body"), this.$window = e(window);
  };

  t.prototype.initMenu = function () {
    e(".topnav-menu li a").each(function () {
      var t = window.location.href.split(/[?#]/)[0];
      this.href == t && (e(this).addClass("active"), e(this).parent().parent().addClass("active"), e(this).parent().parent().parent().parent().addClass("active"));
    }), e.fn.slimScroll && e(".slimscroll").slimScroll({
      height: "auto",
      position: "right",
      size: "5px",
      touchScrollStep: 20,
      color: "#9ea5ab"
    }), e(".navbar-toggle").on("click", function () {
      e(this).toggleClass("open"), e("#navigation").slideToggle(400);
    }), e(".dropdown-menu a.dropdown-toggle").on("click", function () {
      return e(this).next().hasClass("show") || e(this).parents(".dropdown-menu").first().find(".show").removeClass("show"), e(this).next(".dropdown-menu").toggleClass("show"), !1;
    });
  }, t.prototype.init = function () {
    this.initMenu();
  }, e.Topbar = new t(), e.Topbar.Constructor = t;
}(window.jQuery), function (n) {
  "use strict";

  var t = function t() {
    this.body = n("body"), this.window = n(window);
  };

  t.prototype._activateLayout = function (t) {
    switch (t) {
      case "vertical":
        n.App.activateVerticalLayout(function () {
          n("input[type=radio][name=theme]").prop("disabled", !1), n("input[type=radio][name=compact]").prop("disabled", !1), n("input[type=radio][name=width]").prop("disabled", !1);
        });
        break;

      case "horizontal":
        n.App.activateHorizontalLayout(function () {
          n("#default-check").prop("checked", !0), n("#fixed-check").prop("checked", !0), n("input[type=radio][name=width]").prop("disabled", !1), n("input[type=radio][name=theme]").prop("disabled", !0), n("input[type=radio][name=compact]").prop("disabled", !0);
        });
        break;

      case "detached":
        n.App.activateDetachedlLayout(function () {
          n("#fluid-check").prop("checked", !0), n("#default-check").prop("checked", !0), n("#scrollable-check").prop("checked", !0), n("input[type=radio][name=width]").prop("disabled", !0), n("input[type=radio][name=theme]").prop("disabled", !0), n("input[type=radio][name=compact]").prop("disabled", !1);
        });
    }
  }, t.prototype._selectOptionsFromConfig = function () {
    var t = n.App.getLayoutConfig();

    if (t) {
      switch (t.layout) {
        case "vertical":
          n("#vertical-check").prop("checked", !0), n("input[type=radio][name=theme]").prop("disabled", !1), n("input[type=radio][name=compact]").prop("disabled", !1), n("input[type=radio][name=width]").prop("disabled", !1);
          break;

        case "horizontal":
          n("#horizontal-check").prop("checked", !0), n("input[type=radio][name=width]").prop("disabled", !1), n("input[type=radio][name=theme]").prop("disabled", !0), n("input[type=radio][name=compact]").prop("disabled", !0);
          break;

        case "detached":
          n("#fluid-check").prop("checked", !0), n("#default-check").prop("checked", !0), n("#scrollable-check").prop("checked", !0), n("input[type=radio][name=width]").prop("disabled", !0), n("input[type=radio][name=theme]").prop("disabled", !0), n("input[type=radio][name=compact]").prop("disabled", !1), n("#detached-check").prop("checked", !0);
      }

      switch (t.sideBarTheme) {
        case "default":
          n("#default-check").prop("checked", !0);
          break;

        case "light":
          n("#light-check").prop("checked", !0);
          break;

        case "dark":
          n("#dark-check").prop("checked", !0);
      }

      t.isBoxed ? n("#boxed-check").prop("checked", !0) : n("#fluid-check").prop("checked", !0), t.isCondensed && n("#condensed-check").prop("checked", !0), t.isScrollable && n("#scrollable-check").prop("checked", !0), t.isScrollable || t.isCondensed || n("#fixed-check").prop("checked", !0), t.isDarkModeEnabled || (n("#light-mode-check").prop("checked", !0), "vertical" === t.layout && n("input[type=radio][name=theme]").prop("disabled", !1)), t.isDarkModeEnabled && n("#dark-mode-check").prop("checked", !0);
    }
  }, t.prototype.toggleRightSideBar = function () {
    this.body.toggleClass("right-bar-enabled"), this._selectOptionsFromConfig();
  }, t.prototype.init = function () {
    var e = this;
    n(document).on("click", ".right-bar-toggle", function () {
      e.toggleRightSideBar();
    }), n(document).on("click", "body", function (t) {
      0 < n(t.target).closest(".right-bar-toggle, .right-bar").length || 0 < n(t.target).closest(".left-side-menu, .side-nav").length || n(t.target).hasClass("button-menu-mobile") || 0 < n(t.target).closest(".button-menu-mobile").length || (n("body").removeClass("right-bar-enabled"), n("body").removeClass("sidebar-enable"));
    }), n("input[type=radio][name=layout]").change(function () {
      e._activateLayout(n(this).val()), n("#fluid-check").prop("checked", !0), n.App.activateFluid();
    }), n("input[type=radio][name=width]").change(function () {
      switch (n(this).val()) {
        case "fluid":
          n.App.activateFluid(), e._activateLayout(n("input[type=radio][name=layout]:checked").val());
          break;

        case "boxed":
          n.App.activateBoxed();
      }
    }), n("input[type=radio][name=theme]").change(function () {
      switch (n(this).val()) {
        case "default":
          n.App.activateDefaultSidebarTheme();
          break;

        case "light":
          n.App.activateLightSidebarTheme();
          break;

        case "dark":
          n.App.activateDarkSidebarTheme();
      }
    }), n("input[type=radio][name=compact]").change(function () {
      switch (n(this).val()) {
        case "fixed":
          n.App.deactivateCondensedSidebar(), n.App.deactivateScrollableSidebar();
          break;

        case "scrollable":
          n.App.activateScrollableSidebar();
          break;

        case "condensed":
          n.App.activateCondensedSidebar();
      }
    }), n("input[type=radio][name=color-scheme-mode]").change(function () {
      switch (n(this).val()) {
        case "light":
          n.App.deactivateDarkMode(), n("#default-check").prop("checked", !0), n("input[type=radio][name=theme]").prop("disabled", !1);
          break;

        case "dark":
          n.App.activateDarkMode(), n("#default-check").prop("checked", !0), n("input[type=radio][name=theme]").prop("disabled", !0);
      }
    }), n("#resetBtn").on("click", function (t) {
      t.preventDefault(), n.App.resetLayout(function () {
        e._selectOptionsFromConfig();
      });
    });
  }, n.RightBar = new t(), n.RightBar.Constructor = t;
}(window.jQuery), function (i) {
  "use strict";

  var n = "vertical",
      s = "horizontal",
      o = "detached",
      e = {
    layout: n,
    sideBarTheme: "default",
    isBoxed: !1,
    isCondensed: !1,
    isScrollable: !1,
    isDarkModeEnabled: !1
  },
      t = function t() {
    this.body = i("body"), this.window = i(window), this.verticalSidebarPH = i("#vertical-sidebar-placeholder"), this.verticalTopbarPH = i("#vertical-topbar-placeholder"), this.detachedTopbarPH = i("#detached-topbar-placeholder"), this.detachedSidebarPH = i("#detached-sidebar-placeholder"), this.horizontalTopbarPH = i("#horizontal-topbar-placeholder"), this._partials = {
      VERTICAL_SIDEBAR: "./partials/left-sidebar.html",
      VERTICAL_TOPBAR: "./partials/topbar.html",
      DETAHCED_TOPBAR: "./partials/topbar-dark.html",
      DETAHCED_SIDEBAR: "./partials/detached-left-sidebar.html",
      HORIZONTAL_TOPBAR: "./partials/horizontal-nav.html"
    }, this.currentlyActivatedLayout = n, this._config = {};
  };

  t.prototype._resetMenuContent = function () {
    this.verticalSidebarPH.html(""), this.verticalTopbarPH.html(""), this.detachedTopbarPH.html(""), this.detachedSidebarPH.html(""), this.horizontalTopbarPH.html("");
  }, t.prototype._resetLayout = function () {
    this.body.removeAttr("data-layout"), this.body.removeAttr("data-layout-mode");
  }, t.prototype._saveConfig = function (t) {
    i.extend(this._config, t), localStorage.setItem("_HYPER_CONFIG_", JSON.stringify(this._config));
  }, t.prototype._getStoredConfig = function () {
    var t = localStorage.getItem("_HYPER_CONFIG_");
    return t ? JSON.parse(t) : e;
  }, t.prototype._applyConfig = function () {
    var t = this;

    function e() {
      switch (t._config.sideBarTheme) {
        case "dark":
          t.activateDarkSidebarTheme();
          break;

        case "light":
          t.activateLightSidebarTheme();
      }

      t._config.isDarkModeEnabled ? t.activateDarkMode() : t.deactivateDarkMode(), t._config.isBoxed && t.activateBoxed(), t._config.isCondensed && t.activateCondensedSidebar(), t._config.isScrollable && t.activateScrollableSidebar();
    }

    switch (this._config = this._getStoredConfig(), t._resetMenuContent(), t._resetLayout(), t._config.layout) {
      case n:
        t.activateVertical(e);
        break;

      case s:
        t.activateHorizontal(e);
        break;

      case o:
        t.activateDetached(e);
        break;

      default:
        t.activateVertical(e);
    }
  }, t.prototype._adjustLayout = function () {
    768 <= this.window.width() && this.window.width() <= 1028 ? this.activateCondensedSidebar(!0) : this._getStoredConfig().isCondensed || this.deactivateCondensedSidebar();
  }, t.prototype._resetSidebarScroll = function () {
    i(".slimscroll-menu").slimscroll({
      height: "auto",
      position: "right",
      size: "5px",
      color: "#9ea5ab",
      wheelStep: 5,
      touchScrollStep: 20
    });
  }, t.prototype.activateVertical = function (t) {
    var e = this;
    e._resetMenuContent(), e._resetLayout(), i.when(i.get(e._partials.VERTICAL_SIDEBAR, function (t) {
      e.verticalSidebarPH.append(t);
    }), i.get(e._partials.VERTICAL_TOPBAR, function (t) {
      e.verticalTopbarPH.append(t);
    })).then(function () {
      i.LeftSidebar.init(), e._saveConfig({
        layout: n
      }), t && t();
    });
  }, t.prototype.activateHorizontal = function (e) {
    var n = this;
    n._resetMenuContent(), n._resetLayout(), i.get(n._partials.HORIZONTAL_TOPBAR, function (t) {
      n.horizontalTopbarPH.append(t), n.verticalSidebarPH.html(""), n.verticalTopbarPH.html(""), n.body.attr("data-layout", "topnav"), i.Topbar.initMenu(), n._saveConfig({
        layout: s,
        isBoxed: !1,
        isCondensed: !1,
        isScrollable: !1
      }), e && e();
    });
  }, t.prototype.activateDetached = function (t) {
    var e = this;
    e._resetMenuContent(), e._resetLayout(), i.when(i.get(e._partials.DETAHCED_TOPBAR, function (t) {
      e.detachedTopbarPH.append(t);
    }), i.get(e._partials.DETAHCED_SIDEBAR, function (t) {
      e.detachedSidebarPH.append(t);
    })).then(function () {
      e.body.attr("data-layout", "detached"), i.LeftSidebar.initMenu(), e._saveConfig({
        layout: o,
        isBoxed: !1
      }), t && t();
    });
  }, t.prototype.activateFluid = function () {
    this._saveConfig({
      isBoxed: !1
    }), this._config.layout !== n && this._config.layout !== s || this.body.attr("data-layout-mode", "fluid");
  }, t.prototype.activateBoxed = function () {
    this._saveConfig({
      isBoxed: !0
    }), this._config.layout !== n && this._config.layout !== s || this.body.attr("data-layout-mode", "boxed");
  }, t.prototype.activateCondensedSidebar = function (t) {
    this._config.layout !== n && this._config.layout !== o || (t || this._saveConfig({
      isCondensed: !0,
      isScrollable: !1
    }), i.LeftSidebar.activateCondensedSidebar());
  }, t.prototype.deactivateCondensedSidebar = function () {
    this._config.layout !== n && this._config.layout !== o || (this._saveConfig({
      isCondensed: !1
    }), i.LeftSidebar.deactivateCondensedSidebar());
  }, t.prototype.activateScrollableSidebar = function () {
    this._config.layout !== n && this._config.layout !== o || (this._saveConfig({
      isScrollable: !0,
      isCondensed: !1
    }), i.LeftSidebar.activateScrollableSidebar());
  }, t.prototype.deactivateScrollableSidebar = function () {
    this._config.layout !== n && this._config.layout !== o || (this._saveConfig({
      isScrollable: !1
    }), i.LeftSidebar.deactivateScrollableSidebar());
  }, t.prototype.activateDefaultSidebarTheme = function () {
    i.LeftSidebar.activateDefaultTheme(), this._saveConfig({
      sideBarTheme: "default"
    });
  }, t.prototype.activateLightSidebarTheme = function () {
    this._config.layout === n && (i.LeftSidebar.activateLightTheme(), this._saveConfig({
      sideBarTheme: "light"
    }));
  }, t.prototype.activateDarkSidebarTheme = function () {
    this._config.layout === n && (i.LeftSidebar.activateDarkTheme(), this._saveConfig({
      sideBarTheme: "dark"
    }));
  }, t.prototype.activateDarkMode = function () {
    i("#main-style-container").attr("href", "assets/css/app-dark.min.css"), this._saveConfig({
      isDarkModeEnabled: !0
    });
  }, t.prototype.deactivateDarkMode = function () {
    i("#main-style-container").attr("href", "assets/css/app.min.css"), this._saveConfig({
      isDarkModeEnabled: !1
    });
  }, t.prototype.clearSavedConfig = function () {
    localStorage.removeItem("_HYPER_CONFIG_"), this._config = e;
  }, t.prototype.getConfig = function () {
    return this._config;
  }, t.prototype.reset = function (t) {
    this.clearSavedConfig(), this._resetLayout(), this._resetMenuContent();
    var e = this;
    this.activateVertical(function () {
      e.deactivateCondensedSidebar(), e.deactivateDarkMode(), e.activateDefaultSidebarTheme(), e.activateFluid(), t();
    });
  }, t.prototype.init = function () {
    var e = this;
    this._applyConfig(), this._adjustLayout(), this.window.on("resize", function (t) {
      t.preventDefault(), e._adjustLayout(), e._resetSidebarScroll();
    });
  }, i.LayoutThemeApp = new t(), i.LayoutThemeApp.Constructor = t;
}(window.jQuery), function (e) {
  "use strict";

  var t = function t() {
    this.$body = e("body"), this.$window = e(window);
  };

  t.prototype.activateVerticalLayout = function (t) {
    e.LayoutThemeApp.activateVertical(t);
  }, t.prototype.activateHorizontalLayout = function (t) {
    e.LayoutThemeApp.activateHorizontal(t);
  }, t.prototype.activateDetachedlLayout = function (t) {
    e.LayoutThemeApp.activateDetached(t);
  }, t.prototype.activateDefaultSidebarTheme = function () {
    e.LayoutThemeApp.activateDefaultSidebarTheme();
  }, t.prototype.activateLightSidebarTheme = function () {
    e.LayoutThemeApp.activateLightSidebarTheme();
  }, t.prototype.activateDarkSidebarTheme = function () {
    e.LayoutThemeApp.activateDarkSidebarTheme();
  }, t.prototype.activateCondensedSidebar = function () {
    e.LayoutThemeApp.activateCondensedSidebar();
  }, t.prototype.deactivateCondensedSidebar = function () {
    e.LayoutThemeApp.deactivateCondensedSidebar();
  }, t.prototype.activateScrollableSidebar = function () {
    e.LayoutThemeApp.activateScrollableSidebar();
  }, t.prototype.deactivateScrollableSidebar = function () {
    e.LayoutThemeApp.deactivateScrollableSidebar();
  }, t.prototype.activateBoxed = function () {
    e.LayoutThemeApp.activateBoxed();
  }, t.prototype.activateFluid = function () {
    e.LayoutThemeApp.activateFluid();
  }, t.prototype.activateDarkMode = function () {
    e.LayoutThemeApp.activateDarkMode();
  }, t.prototype.deactivateDarkMode = function () {
    e.LayoutThemeApp.deactivateDarkMode();
  }, t.prototype.clearSavedConfig = function () {
    e.LayoutThemeApp.clearSavedConfig();
  }, t.prototype.getLayoutConfig = function () {
    return e.LayoutThemeApp.getConfig();
  }, t.prototype.resetLayout = function (t) {
    e.LayoutThemeApp.reset(t);
  }, t.prototype.init = function () {
    (e.LayoutThemeApp.init(), setTimeout(function () {
      document.body.classList.remove("loading");
    }, 400), e.RightBar.init(), window.sessionStorage) && (sessionStorage.getItem("_HYPER_VISITED_") || (e.RightBar.toggleRightSideBar(), sessionStorage.setItem("_HYPER_VISITED_", !0)));
    e.Portlet.init(), e.AdvanceFormApp.init(), e.Components.init(), e(window).on("load", function () {
      e("#status").fadeOut(), e("#preloader").delay(350).fadeOut("slow");
    });
  }, e.App = new t(), e.App.Constructor = t;
}(window.jQuery), function (t) {
  "use strict";

  window.jQuery.App.init();
}();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module), __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./node_modules/jquery/dist/jquery.js":
/*!********************************************!*\
  !*** ./node_modules/jquery/dist/jquery.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * jQuery JavaScript Library v3.5.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2020-05-04T22:49Z
 */
(function (global, factory) {
  "use strict";

  if (( false ? undefined : _typeof(module)) === "object" && _typeof(module.exports) === "object") {
    // For CommonJS and CommonJS-like environments where a proper `window`
    // is present, execute the factory and get jQuery.
    // For environments that do not have a `window` with a `document`
    // (such as Node.js), expose a factory as module.exports.
    // This accentuates the need for the creation of a real `window`.
    // e.g. var jQuery = require("jquery")(window);
    // See ticket #14549 for more info.
    module.exports = global.document ? factory(global, true) : function (w) {
      if (!w.document) {
        throw new Error("jQuery requires a window with a document");
      }

      return factory(w);
    };
  } else {
    factory(global);
  } // Pass this if window is not defined yet

})(typeof window !== "undefined" ? window : this, function (window, noGlobal) {
  // Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
  // throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
  // arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
  // enough that all such attempts are guarded in a try block.
  "use strict";

  var arr = [];
  var getProto = Object.getPrototypeOf;
  var _slice = arr.slice;
  var flat = arr.flat ? function (array) {
    return arr.flat.call(array);
  } : function (array) {
    return arr.concat.apply([], array);
  };
  var push = arr.push;
  var indexOf = arr.indexOf;
  var class2type = {};
  var toString = class2type.toString;
  var hasOwn = class2type.hasOwnProperty;
  var fnToString = hasOwn.toString;
  var ObjectFunctionString = fnToString.call(Object);
  var support = {};

  var isFunction = function isFunction(obj) {
    // Support: Chrome <=57, Firefox <=52
    // In some browsers, typeof returns "function" for HTML <object> elements
    // (i.e., `typeof document.createElement( "object" ) === "function"`).
    // We don't want to classify *any* DOM node as a function.
    return typeof obj === "function" && typeof obj.nodeType !== "number";
  };

  var isWindow = function isWindow(obj) {
    return obj != null && obj === obj.window;
  };

  var document = window.document;
  var preservedScriptAttributes = {
    type: true,
    src: true,
    nonce: true,
    noModule: true
  };

  function DOMEval(code, node, doc) {
    doc = doc || document;
    var i,
        val,
        script = doc.createElement("script");
    script.text = code;

    if (node) {
      for (i in preservedScriptAttributes) {
        // Support: Firefox 64+, Edge 18+
        // Some browsers don't support the "nonce" property on scripts.
        // On the other hand, just using `getAttribute` is not enough as
        // the `nonce` attribute is reset to an empty string whenever it
        // becomes browsing-context connected.
        // See https://github.com/whatwg/html/issues/2369
        // See https://html.spec.whatwg.org/#nonce-attributes
        // The `node.getAttribute` check was added for the sake of
        // `jQuery.globalEval` so that it can fake a nonce-containing node
        // via an object.
        val = node[i] || node.getAttribute && node.getAttribute(i);

        if (val) {
          script.setAttribute(i, val);
        }
      }
    }

    doc.head.appendChild(script).parentNode.removeChild(script);
  }

  function toType(obj) {
    if (obj == null) {
      return obj + "";
    } // Support: Android <=2.3 only (functionish RegExp)


    return _typeof(obj) === "object" || typeof obj === "function" ? class2type[toString.call(obj)] || "object" : _typeof(obj);
  }
  /* global Symbol */
  // Defining this global in .eslintrc.json would create a danger of using the global
  // unguarded in another place, it seems safer to define global only for this module


  var version = "3.5.1",
      // Define a local copy of jQuery
  jQuery = function jQuery(selector, context) {
    // The jQuery object is actually just the init constructor 'enhanced'
    // Need init if jQuery is called (just allow error to be thrown if not included)
    return new jQuery.fn.init(selector, context);
  };

  jQuery.fn = jQuery.prototype = {
    // The current version of jQuery being used
    jquery: version,
    constructor: jQuery,
    // The default length of a jQuery object is 0
    length: 0,
    toArray: function toArray() {
      return _slice.call(this);
    },
    // Get the Nth element in the matched element set OR
    // Get the whole matched element set as a clean array
    get: function get(num) {
      // Return all the elements in a clean array
      if (num == null) {
        return _slice.call(this);
      } // Return just the one element from the set


      return num < 0 ? this[num + this.length] : this[num];
    },
    // Take an array of elements and push it onto the stack
    // (returning the new matched element set)
    pushStack: function pushStack(elems) {
      // Build a new jQuery matched element set
      var ret = jQuery.merge(this.constructor(), elems); // Add the old object onto the stack (as a reference)

      ret.prevObject = this; // Return the newly-formed element set

      return ret;
    },
    // Execute a callback for every element in the matched set.
    each: function each(callback) {
      return jQuery.each(this, callback);
    },
    map: function map(callback) {
      return this.pushStack(jQuery.map(this, function (elem, i) {
        return callback.call(elem, i, elem);
      }));
    },
    slice: function slice() {
      return this.pushStack(_slice.apply(this, arguments));
    },
    first: function first() {
      return this.eq(0);
    },
    last: function last() {
      return this.eq(-1);
    },
    even: function even() {
      return this.pushStack(jQuery.grep(this, function (_elem, i) {
        return (i + 1) % 2;
      }));
    },
    odd: function odd() {
      return this.pushStack(jQuery.grep(this, function (_elem, i) {
        return i % 2;
      }));
    },
    eq: function eq(i) {
      var len = this.length,
          j = +i + (i < 0 ? len : 0);
      return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
    },
    end: function end() {
      return this.prevObject || this.constructor();
    },
    // For internal use only.
    // Behaves like an Array's method, not like a jQuery method.
    push: push,
    sort: arr.sort,
    splice: arr.splice
  };

  jQuery.extend = jQuery.fn.extend = function () {
    var options,
        name,
        src,
        copy,
        copyIsArray,
        clone,
        target = arguments[0] || {},
        i = 1,
        length = arguments.length,
        deep = false; // Handle a deep copy situation

    if (typeof target === "boolean") {
      deep = target; // Skip the boolean and the target

      target = arguments[i] || {};
      i++;
    } // Handle case when target is a string or something (possible in deep copy)


    if (_typeof(target) !== "object" && !isFunction(target)) {
      target = {};
    } // Extend jQuery itself if only one argument is passed


    if (i === length) {
      target = this;
      i--;
    }

    for (; i < length; i++) {
      // Only deal with non-null/undefined values
      if ((options = arguments[i]) != null) {
        // Extend the base object
        for (name in options) {
          copy = options[name]; // Prevent Object.prototype pollution
          // Prevent never-ending loop

          if (name === "__proto__" || target === copy) {
            continue;
          } // Recurse if we're merging plain objects or arrays


          if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {
            src = target[name]; // Ensure proper type for the source value

            if (copyIsArray && !Array.isArray(src)) {
              clone = [];
            } else if (!copyIsArray && !jQuery.isPlainObject(src)) {
              clone = {};
            } else {
              clone = src;
            }

            copyIsArray = false; // Never move original objects, clone them

            target[name] = jQuery.extend(deep, clone, copy); // Don't bring in undefined values
          } else if (copy !== undefined) {
            target[name] = copy;
          }
        }
      }
    } // Return the modified object


    return target;
  };

  jQuery.extend({
    // Unique for each copy of jQuery on the page
    expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),
    // Assume jQuery is ready without the ready module
    isReady: true,
    error: function error(msg) {
      throw new Error(msg);
    },
    noop: function noop() {},
    isPlainObject: function isPlainObject(obj) {
      var proto, Ctor; // Detect obvious negatives
      // Use toString instead of jQuery.type to catch host objects

      if (!obj || toString.call(obj) !== "[object Object]") {
        return false;
      }

      proto = getProto(obj); // Objects with no prototype (e.g., `Object.create( null )`) are plain

      if (!proto) {
        return true;
      } // Objects with prototype are plain iff they were constructed by a global Object function


      Ctor = hasOwn.call(proto, "constructor") && proto.constructor;
      return typeof Ctor === "function" && fnToString.call(Ctor) === ObjectFunctionString;
    },
    isEmptyObject: function isEmptyObject(obj) {
      var name;

      for (name in obj) {
        return false;
      }

      return true;
    },
    // Evaluates a script in a provided context; falls back to the global one
    // if not specified.
    globalEval: function globalEval(code, options, doc) {
      DOMEval(code, {
        nonce: options && options.nonce
      }, doc);
    },
    each: function each(obj, callback) {
      var length,
          i = 0;

      if (isArrayLike(obj)) {
        length = obj.length;

        for (; i < length; i++) {
          if (callback.call(obj[i], i, obj[i]) === false) {
            break;
          }
        }
      } else {
        for (i in obj) {
          if (callback.call(obj[i], i, obj[i]) === false) {
            break;
          }
        }
      }

      return obj;
    },
    // results is for internal usage only
    makeArray: function makeArray(arr, results) {
      var ret = results || [];

      if (arr != null) {
        if (isArrayLike(Object(arr))) {
          jQuery.merge(ret, typeof arr === "string" ? [arr] : arr);
        } else {
          push.call(ret, arr);
        }
      }

      return ret;
    },
    inArray: function inArray(elem, arr, i) {
      return arr == null ? -1 : indexOf.call(arr, elem, i);
    },
    // Support: Android <=4.0 only, PhantomJS 1 only
    // push.apply(_, arraylike) throws on ancient WebKit
    merge: function merge(first, second) {
      var len = +second.length,
          j = 0,
          i = first.length;

      for (; j < len; j++) {
        first[i++] = second[j];
      }

      first.length = i;
      return first;
    },
    grep: function grep(elems, callback, invert) {
      var callbackInverse,
          matches = [],
          i = 0,
          length = elems.length,
          callbackExpect = !invert; // Go through the array, only saving the items
      // that pass the validator function

      for (; i < length; i++) {
        callbackInverse = !callback(elems[i], i);

        if (callbackInverse !== callbackExpect) {
          matches.push(elems[i]);
        }
      }

      return matches;
    },
    // arg is for internal usage only
    map: function map(elems, callback, arg) {
      var length,
          value,
          i = 0,
          ret = []; // Go through the array, translating each of the items to their new values

      if (isArrayLike(elems)) {
        length = elems.length;

        for (; i < length; i++) {
          value = callback(elems[i], i, arg);

          if (value != null) {
            ret.push(value);
          }
        } // Go through every key on the object,

      } else {
        for (i in elems) {
          value = callback(elems[i], i, arg);

          if (value != null) {
            ret.push(value);
          }
        }
      } // Flatten any nested arrays


      return flat(ret);
    },
    // A global GUID counter for objects
    guid: 1,
    // jQuery.support is not used in Core but other projects attach their
    // properties to it so it needs to exist.
    support: support
  });

  if (typeof Symbol === "function") {
    jQuery.fn[Symbol.iterator] = arr[Symbol.iterator];
  } // Populate the class2type map


  jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (_i, name) {
    class2type["[object " + name + "]"] = name.toLowerCase();
  });

  function isArrayLike(obj) {
    // Support: real iOS 8.2 only (not reproducible in simulator)
    // `in` check used to prevent JIT error (gh-2145)
    // hasOwn isn't used here due to false negatives
    // regarding Nodelist length in IE
    var length = !!obj && "length" in obj && obj.length,
        type = toType(obj);

    if (isFunction(obj) || isWindow(obj)) {
      return false;
    }

    return type === "array" || length === 0 || typeof length === "number" && length > 0 && length - 1 in obj;
  }

  var Sizzle =
  /*!
   * Sizzle CSS Selector Engine v2.3.5
   * https://sizzlejs.com/
   *
   * Copyright JS Foundation and other contributors
   * Released under the MIT license
   * https://js.foundation/
   *
   * Date: 2020-03-14
   */
  function (window) {
    var i,
        support,
        Expr,
        getText,
        isXML,
        tokenize,
        compile,
        select,
        outermostContext,
        sortInput,
        hasDuplicate,
        // Local document vars
    setDocument,
        document,
        docElem,
        documentIsHTML,
        rbuggyQSA,
        rbuggyMatches,
        matches,
        contains,
        // Instance-specific data
    expando = "sizzle" + 1 * new Date(),
        preferredDoc = window.document,
        dirruns = 0,
        done = 0,
        classCache = createCache(),
        tokenCache = createCache(),
        compilerCache = createCache(),
        nonnativeSelectorCache = createCache(),
        sortOrder = function sortOrder(a, b) {
      if (a === b) {
        hasDuplicate = true;
      }

      return 0;
    },
        // Instance methods
    hasOwn = {}.hasOwnProperty,
        arr = [],
        pop = arr.pop,
        pushNative = arr.push,
        push = arr.push,
        slice = arr.slice,
        // Use a stripped-down indexOf as it's faster than native
    // https://jsperf.com/thor-indexof-vs-for/5
    indexOf = function indexOf(list, elem) {
      var i = 0,
          len = list.length;

      for (; i < len; i++) {
        if (list[i] === elem) {
          return i;
        }
      }

      return -1;
    },
        booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|" + "ismap|loop|multiple|open|readonly|required|scoped",
        // Regular expressions
    // http://www.w3.org/TR/css3-selectors/#whitespace
    whitespace = "[\\x20\\t\\r\\n\\f]",
        // https://www.w3.org/TR/css-syntax-3/#ident-token-diagram
    identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
        // Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
    attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace + // Operator (capture 2)
    "*([*^$|!~]?=)" + whitespace + // "Attribute values must be CSS identifiers [capture 5]
    // or strings [capture 3 or capture 4]"
    "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace + "*\\]",
        pseudos = ":(" + identifier + ")(?:\\((" + // To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
    // 1. quoted (capture 3; capture 4 or capture 5)
    "('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" + // 2. simple (capture 6)
    "((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" + // 3. anything else (capture 2)
    ".*" + ")\\)|)",
        // Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
    rwhitespace = new RegExp(whitespace + "+", "g"),
        rtrim = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g"),
        rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"),
        rcombinators = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"),
        rdescend = new RegExp(whitespace + "|>"),
        rpseudo = new RegExp(pseudos),
        ridentifier = new RegExp("^" + identifier + "$"),
        matchExpr = {
      "ID": new RegExp("^#(" + identifier + ")"),
      "CLASS": new RegExp("^\\.(" + identifier + ")"),
      "TAG": new RegExp("^(" + identifier + "|[*])"),
      "ATTR": new RegExp("^" + attributes),
      "PSEUDO": new RegExp("^" + pseudos),
      "CHILD": new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i"),
      "bool": new RegExp("^(?:" + booleans + ")$", "i"),
      // For use in libraries implementing .is()
      // We use this for POS matching in `select`
      "needsContext": new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
    },
        rhtml = /HTML$/i,
        rinputs = /^(?:input|select|textarea|button)$/i,
        rheader = /^h\d$/i,
        rnative = /^[^{]+\{\s*\[native \w/,
        // Easily-parseable/retrievable ID or TAG or CLASS selectors
    rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        rsibling = /[+~]/,
        // CSS escapes
    // http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
    runescape = new RegExp("\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\([^\\r\\n\\f])", "g"),
        funescape = function funescape(escape, nonHex) {
      var high = "0x" + escape.slice(1) - 0x10000;
      return nonHex ? // Strip the backslash prefix from a non-hex escape sequence
      nonHex : // Replace a hexadecimal escape sequence with the encoded Unicode code point
      // Support: IE <=11+
      // For values outside the Basic Multilingual Plane (BMP), manually construct a
      // surrogate pair
      high < 0 ? String.fromCharCode(high + 0x10000) : String.fromCharCode(high >> 10 | 0xD800, high & 0x3FF | 0xDC00);
    },
        // CSS string/identifier serialization
    // https://drafts.csswg.org/cssom/#common-serializing-idioms
    rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        fcssescape = function fcssescape(ch, asCodePoint) {
      if (asCodePoint) {
        // U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
        if (ch === "\0") {
          return "\uFFFD";
        } // Control characters and (dependent upon position) numbers get escaped as code points


        return ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " ";
      } // Other potentially-special ASCII characters get backslash-escaped


      return "\\" + ch;
    },
        // Used for iframes
    // See setDocument()
    // Removing the function wrapper causes a "Permission Denied"
    // error in IE
    unloadHandler = function unloadHandler() {
      setDocument();
    },
        inDisabledFieldset = addCombinator(function (elem) {
      return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
    }, {
      dir: "parentNode",
      next: "legend"
    }); // Optimize for push.apply( _, NodeList )


    try {
      push.apply(arr = slice.call(preferredDoc.childNodes), preferredDoc.childNodes); // Support: Android<4.0
      // Detect silently failing push.apply
      // eslint-disable-next-line no-unused-expressions

      arr[preferredDoc.childNodes.length].nodeType;
    } catch (e) {
      push = {
        apply: arr.length ? // Leverage slice if possible
        function (target, els) {
          pushNative.apply(target, slice.call(els));
        } : // Support: IE<9
        // Otherwise append directly
        function (target, els) {
          var j = target.length,
              i = 0; // Can't trust NodeList.length

          while (target[j++] = els[i++]) {}

          target.length = j - 1;
        }
      };
    }

    function Sizzle(selector, context, results, seed) {
      var m,
          i,
          elem,
          nid,
          match,
          groups,
          newSelector,
          newContext = context && context.ownerDocument,
          // nodeType defaults to 9, since context defaults to document
      nodeType = context ? context.nodeType : 9;
      results = results || []; // Return early from calls with invalid selector or context

      if (typeof selector !== "string" || !selector || nodeType !== 1 && nodeType !== 9 && nodeType !== 11) {
        return results;
      } // Try to shortcut find operations (as opposed to filters) in HTML documents


      if (!seed) {
        setDocument(context);
        context = context || document;

        if (documentIsHTML) {
          // If the selector is sufficiently simple, try using a "get*By*" DOM method
          // (excepting DocumentFragment context, where the methods don't exist)
          if (nodeType !== 11 && (match = rquickExpr.exec(selector))) {
            // ID selector
            if (m = match[1]) {
              // Document context
              if (nodeType === 9) {
                if (elem = context.getElementById(m)) {
                  // Support: IE, Opera, Webkit
                  // TODO: identify versions
                  // getElementById can match elements by name instead of ID
                  if (elem.id === m) {
                    results.push(elem);
                    return results;
                  }
                } else {
                  return results;
                } // Element context

              } else {
                // Support: IE, Opera, Webkit
                // TODO: identify versions
                // getElementById can match elements by name instead of ID
                if (newContext && (elem = newContext.getElementById(m)) && contains(context, elem) && elem.id === m) {
                  results.push(elem);
                  return results;
                }
              } // Type selector

            } else if (match[2]) {
              push.apply(results, context.getElementsByTagName(selector));
              return results; // Class selector
            } else if ((m = match[3]) && support.getElementsByClassName && context.getElementsByClassName) {
              push.apply(results, context.getElementsByClassName(m));
              return results;
            }
          } // Take advantage of querySelectorAll


          if (support.qsa && !nonnativeSelectorCache[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector)) && ( // Support: IE 8 only
          // Exclude object elements
          nodeType !== 1 || context.nodeName.toLowerCase() !== "object")) {
            newSelector = selector;
            newContext = context; // qSA considers elements outside a scoping root when evaluating child or
            // descendant combinators, which is not what we want.
            // In such cases, we work around the behavior by prefixing every selector in the
            // list with an ID selector referencing the scope context.
            // The technique has to be used as well when a leading combinator is used
            // as such selectors are not recognized by querySelectorAll.
            // Thanks to Andrew Dupont for this technique.

            if (nodeType === 1 && (rdescend.test(selector) || rcombinators.test(selector))) {
              // Expand context for sibling selectors
              newContext = rsibling.test(selector) && testContext(context.parentNode) || context; // We can use :scope instead of the ID hack if the browser
              // supports it & if we're not changing the context.

              if (newContext !== context || !support.scope) {
                // Capture the context ID, setting it first if necessary
                if (nid = context.getAttribute("id")) {
                  nid = nid.replace(rcssescape, fcssescape);
                } else {
                  context.setAttribute("id", nid = expando);
                }
              } // Prefix every selector in the list


              groups = tokenize(selector);
              i = groups.length;

              while (i--) {
                groups[i] = (nid ? "#" + nid : ":scope") + " " + toSelector(groups[i]);
              }

              newSelector = groups.join(",");
            }

            try {
              push.apply(results, newContext.querySelectorAll(newSelector));
              return results;
            } catch (qsaError) {
              nonnativeSelectorCache(selector, true);
            } finally {
              if (nid === expando) {
                context.removeAttribute("id");
              }
            }
          }
        }
      } // All others


      return select(selector.replace(rtrim, "$1"), context, results, seed);
    }
    /**
     * Create key-value caches of limited size
     * @returns {function(string, object)} Returns the Object data after storing it on itself with
     *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
     *	deleting the oldest entry
     */


    function createCache() {
      var keys = [];

      function cache(key, value) {
        // Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
        if (keys.push(key + " ") > Expr.cacheLength) {
          // Only keep the most recent entries
          delete cache[keys.shift()];
        }

        return cache[key + " "] = value;
      }

      return cache;
    }
    /**
     * Mark a function for special use by Sizzle
     * @param {Function} fn The function to mark
     */


    function markFunction(fn) {
      fn[expando] = true;
      return fn;
    }
    /**
     * Support testing using an element
     * @param {Function} fn Passed the created element and returns a boolean result
     */


    function assert(fn) {
      var el = document.createElement("fieldset");

      try {
        return !!fn(el);
      } catch (e) {
        return false;
      } finally {
        // Remove from its parent by default
        if (el.parentNode) {
          el.parentNode.removeChild(el);
        } // release memory in IE


        el = null;
      }
    }
    /**
     * Adds the same handler for all of the specified attrs
     * @param {String} attrs Pipe-separated list of attributes
     * @param {Function} handler The method that will be applied
     */


    function addHandle(attrs, handler) {
      var arr = attrs.split("|"),
          i = arr.length;

      while (i--) {
        Expr.attrHandle[arr[i]] = handler;
      }
    }
    /**
     * Checks document order of two siblings
     * @param {Element} a
     * @param {Element} b
     * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
     */


    function siblingCheck(a, b) {
      var cur = b && a,
          diff = cur && a.nodeType === 1 && b.nodeType === 1 && a.sourceIndex - b.sourceIndex; // Use IE sourceIndex if available on both nodes

      if (diff) {
        return diff;
      } // Check if b follows a


      if (cur) {
        while (cur = cur.nextSibling) {
          if (cur === b) {
            return -1;
          }
        }
      }

      return a ? 1 : -1;
    }
    /**
     * Returns a function to use in pseudos for input types
     * @param {String} type
     */


    function createInputPseudo(type) {
      return function (elem) {
        var name = elem.nodeName.toLowerCase();
        return name === "input" && elem.type === type;
      };
    }
    /**
     * Returns a function to use in pseudos for buttons
     * @param {String} type
     */


    function createButtonPseudo(type) {
      return function (elem) {
        var name = elem.nodeName.toLowerCase();
        return (name === "input" || name === "button") && elem.type === type;
      };
    }
    /**
     * Returns a function to use in pseudos for :enabled/:disabled
     * @param {Boolean} disabled true for :disabled; false for :enabled
     */


    function createDisabledPseudo(disabled) {
      // Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
      return function (elem) {
        // Only certain elements can match :enabled or :disabled
        // https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
        // https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
        if ("form" in elem) {
          // Check for inherited disabledness on relevant non-disabled elements:
          // * listed form-associated elements in a disabled fieldset
          //   https://html.spec.whatwg.org/multipage/forms.html#category-listed
          //   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
          // * option elements in a disabled optgroup
          //   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
          // All such elements have a "form" property.
          if (elem.parentNode && elem.disabled === false) {
            // Option elements defer to a parent optgroup if present
            if ("label" in elem) {
              if ("label" in elem.parentNode) {
                return elem.parentNode.disabled === disabled;
              } else {
                return elem.disabled === disabled;
              }
            } // Support: IE 6 - 11
            // Use the isDisabled shortcut property to check for disabled fieldset ancestors


            return elem.isDisabled === disabled || // Where there is no isDisabled, check manually

            /* jshint -W018 */
            elem.isDisabled !== !disabled && inDisabledFieldset(elem) === disabled;
          }

          return elem.disabled === disabled; // Try to winnow out elements that can't be disabled before trusting the disabled property.
          // Some victims get caught in our net (label, legend, menu, track), but it shouldn't
          // even exist on them, let alone have a boolean value.
        } else if ("label" in elem) {
          return elem.disabled === disabled;
        } // Remaining elements are neither :enabled nor :disabled


        return false;
      };
    }
    /**
     * Returns a function to use in pseudos for positionals
     * @param {Function} fn
     */


    function createPositionalPseudo(fn) {
      return markFunction(function (argument) {
        argument = +argument;
        return markFunction(function (seed, matches) {
          var j,
              matchIndexes = fn([], seed.length, argument),
              i = matchIndexes.length; // Match elements found at the specified indexes

          while (i--) {
            if (seed[j = matchIndexes[i]]) {
              seed[j] = !(matches[j] = seed[j]);
            }
          }
        });
      });
    }
    /**
     * Checks a node for validity as a Sizzle context
     * @param {Element|Object=} context
     * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
     */


    function testContext(context) {
      return context && typeof context.getElementsByTagName !== "undefined" && context;
    } // Expose support vars for convenience


    support = Sizzle.support = {};
    /**
     * Detects XML nodes
     * @param {Element|Object} elem An element or a document
     * @returns {Boolean} True iff elem is a non-HTML XML node
     */

    isXML = Sizzle.isXML = function (elem) {
      var namespace = elem.namespaceURI,
          docElem = (elem.ownerDocument || elem).documentElement; // Support: IE <=8
      // Assume HTML when documentElement doesn't yet exist, such as inside loading iframes
      // https://bugs.jquery.com/ticket/4833

      return !rhtml.test(namespace || docElem && docElem.nodeName || "HTML");
    };
    /**
     * Sets document-related variables once based on the current document
     * @param {Element|Object} [doc] An element or document object to use to set the document
     * @returns {Object} Returns the current document
     */


    setDocument = Sizzle.setDocument = function (node) {
      var hasCompare,
          subWindow,
          doc = node ? node.ownerDocument || node : preferredDoc; // Return early if doc is invalid or already selected
      // Support: IE 11+, Edge 17 - 18+
      // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
      // two documents; shallow comparisons work.
      // eslint-disable-next-line eqeqeq

      if (doc == document || doc.nodeType !== 9 || !doc.documentElement) {
        return document;
      } // Update global variables


      document = doc;
      docElem = document.documentElement;
      documentIsHTML = !isXML(document); // Support: IE 9 - 11+, Edge 12 - 18+
      // Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
      // Support: IE 11+, Edge 17 - 18+
      // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
      // two documents; shallow comparisons work.
      // eslint-disable-next-line eqeqeq

      if (preferredDoc != document && (subWindow = document.defaultView) && subWindow.top !== subWindow) {
        // Support: IE 11, Edge
        if (subWindow.addEventListener) {
          subWindow.addEventListener("unload", unloadHandler, false); // Support: IE 9 - 10 only
        } else if (subWindow.attachEvent) {
          subWindow.attachEvent("onunload", unloadHandler);
        }
      } // Support: IE 8 - 11+, Edge 12 - 18+, Chrome <=16 - 25 only, Firefox <=3.6 - 31 only,
      // Safari 4 - 5 only, Opera <=11.6 - 12.x only
      // IE/Edge & older browsers don't support the :scope pseudo-class.
      // Support: Safari 6.0 only
      // Safari 6.0 supports :scope but it's an alias of :root there.


      support.scope = assert(function (el) {
        docElem.appendChild(el).appendChild(document.createElement("div"));
        return typeof el.querySelectorAll !== "undefined" && !el.querySelectorAll(":scope fieldset div").length;
      });
      /* Attributes
      ---------------------------------------------------------------------- */
      // Support: IE<8
      // Verify that getAttribute really returns attributes and not properties
      // (excepting IE8 booleans)

      support.attributes = assert(function (el) {
        el.className = "i";
        return !el.getAttribute("className");
      });
      /* getElement(s)By*
      ---------------------------------------------------------------------- */
      // Check if getElementsByTagName("*") returns only elements

      support.getElementsByTagName = assert(function (el) {
        el.appendChild(document.createComment(""));
        return !el.getElementsByTagName("*").length;
      }); // Support: IE<9

      support.getElementsByClassName = rnative.test(document.getElementsByClassName); // Support: IE<10
      // Check if getElementById returns elements by name
      // The broken getElementById methods don't pick up programmatically-set names,
      // so use a roundabout getElementsByName test

      support.getById = assert(function (el) {
        docElem.appendChild(el).id = expando;
        return !document.getElementsByName || !document.getElementsByName(expando).length;
      }); // ID filter and find

      if (support.getById) {
        Expr.filter["ID"] = function (id) {
          var attrId = id.replace(runescape, funescape);
          return function (elem) {
            return elem.getAttribute("id") === attrId;
          };
        };

        Expr.find["ID"] = function (id, context) {
          if (typeof context.getElementById !== "undefined" && documentIsHTML) {
            var elem = context.getElementById(id);
            return elem ? [elem] : [];
          }
        };
      } else {
        Expr.filter["ID"] = function (id) {
          var attrId = id.replace(runescape, funescape);
          return function (elem) {
            var node = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
            return node && node.value === attrId;
          };
        }; // Support: IE 6 - 7 only
        // getElementById is not reliable as a find shortcut


        Expr.find["ID"] = function (id, context) {
          if (typeof context.getElementById !== "undefined" && documentIsHTML) {
            var node,
                i,
                elems,
                elem = context.getElementById(id);

            if (elem) {
              // Verify the id attribute
              node = elem.getAttributeNode("id");

              if (node && node.value === id) {
                return [elem];
              } // Fall back on getElementsByName


              elems = context.getElementsByName(id);
              i = 0;

              while (elem = elems[i++]) {
                node = elem.getAttributeNode("id");

                if (node && node.value === id) {
                  return [elem];
                }
              }
            }

            return [];
          }
        };
      } // Tag


      Expr.find["TAG"] = support.getElementsByTagName ? function (tag, context) {
        if (typeof context.getElementsByTagName !== "undefined") {
          return context.getElementsByTagName(tag); // DocumentFragment nodes don't have gEBTN
        } else if (support.qsa) {
          return context.querySelectorAll(tag);
        }
      } : function (tag, context) {
        var elem,
            tmp = [],
            i = 0,
            // By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
        results = context.getElementsByTagName(tag); // Filter out possible comments

        if (tag === "*") {
          while (elem = results[i++]) {
            if (elem.nodeType === 1) {
              tmp.push(elem);
            }
          }

          return tmp;
        }

        return results;
      }; // Class

      Expr.find["CLASS"] = support.getElementsByClassName && function (className, context) {
        if (typeof context.getElementsByClassName !== "undefined" && documentIsHTML) {
          return context.getElementsByClassName(className);
        }
      };
      /* QSA/matchesSelector
      ---------------------------------------------------------------------- */
      // QSA and matchesSelector support
      // matchesSelector(:active) reports false when true (IE9/Opera 11.5)


      rbuggyMatches = []; // qSa(:focus) reports false when true (Chrome 21)
      // We allow this because of a bug in IE8/9 that throws an error
      // whenever `document.activeElement` is accessed on an iframe
      // So, we allow :focus to pass through QSA all the time to avoid the IE error
      // See https://bugs.jquery.com/ticket/13378

      rbuggyQSA = [];

      if (support.qsa = rnative.test(document.querySelectorAll)) {
        // Build QSA regex
        // Regex strategy adopted from Diego Perini
        assert(function (el) {
          var input; // Select is set to empty string on purpose
          // This is to test IE's treatment of not explicitly
          // setting a boolean content attribute,
          // since its presence should be enough
          // https://bugs.jquery.com/ticket/12359

          docElem.appendChild(el).innerHTML = "<a id='" + expando + "'></a>" + "<select id='" + expando + "-\r\\' msallowcapture=''>" + "<option selected=''></option></select>"; // Support: IE8, Opera 11-12.16
          // Nothing should be selected when empty strings follow ^= or $= or *=
          // The test attribute must be unknown in Opera but "safe" for WinRT
          // https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section

          if (el.querySelectorAll("[msallowcapture^='']").length) {
            rbuggyQSA.push("[*^$]=" + whitespace + "*(?:''|\"\")");
          } // Support: IE8
          // Boolean attributes and "value" are not treated correctly


          if (!el.querySelectorAll("[selected]").length) {
            rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
          } // Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+


          if (!el.querySelectorAll("[id~=" + expando + "-]").length) {
            rbuggyQSA.push("~=");
          } // Support: IE 11+, Edge 15 - 18+
          // IE 11/Edge don't find elements on a `[name='']` query in some cases.
          // Adding a temporary attribute to the document before the selection works
          // around the issue.
          // Interestingly, IE 10 & older don't seem to have the issue.


          input = document.createElement("input");
          input.setAttribute("name", "");
          el.appendChild(input);

          if (!el.querySelectorAll("[name='']").length) {
            rbuggyQSA.push("\\[" + whitespace + "*name" + whitespace + "*=" + whitespace + "*(?:''|\"\")");
          } // Webkit/Opera - :checked should return selected option elements
          // http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
          // IE8 throws error here and will not see later tests


          if (!el.querySelectorAll(":checked").length) {
            rbuggyQSA.push(":checked");
          } // Support: Safari 8+, iOS 8+
          // https://bugs.webkit.org/show_bug.cgi?id=136851
          // In-page `selector#id sibling-combinator selector` fails


          if (!el.querySelectorAll("a#" + expando + "+*").length) {
            rbuggyQSA.push(".#.+[+~]");
          } // Support: Firefox <=3.6 - 5 only
          // Old Firefox doesn't throw on a badly-escaped identifier.


          el.querySelectorAll("\\\f");
          rbuggyQSA.push("[\\r\\n\\f]");
        });
        assert(function (el) {
          el.innerHTML = "<a href='' disabled='disabled'></a>" + "<select disabled='disabled'><option/></select>"; // Support: Windows 8 Native Apps
          // The type and name attributes are restricted during .innerHTML assignment

          var input = document.createElement("input");
          input.setAttribute("type", "hidden");
          el.appendChild(input).setAttribute("name", "D"); // Support: IE8
          // Enforce case-sensitivity of name attribute

          if (el.querySelectorAll("[name=d]").length) {
            rbuggyQSA.push("name" + whitespace + "*[*^$|!~]?=");
          } // FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
          // IE8 throws error here and will not see later tests


          if (el.querySelectorAll(":enabled").length !== 2) {
            rbuggyQSA.push(":enabled", ":disabled");
          } // Support: IE9-11+
          // IE's :disabled selector does not pick up the children of disabled fieldsets


          docElem.appendChild(el).disabled = true;

          if (el.querySelectorAll(":disabled").length !== 2) {
            rbuggyQSA.push(":enabled", ":disabled");
          } // Support: Opera 10 - 11 only
          // Opera 10-11 does not throw on post-comma invalid pseudos


          el.querySelectorAll("*,:x");
          rbuggyQSA.push(",.*:");
        });
      }

      if (support.matchesSelector = rnative.test(matches = docElem.matches || docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector)) {
        assert(function (el) {
          // Check to see if it's possible to do matchesSelector
          // on a disconnected node (IE 9)
          support.disconnectedMatch = matches.call(el, "*"); // This should fail with an exception
          // Gecko does not error, returns false instead

          matches.call(el, "[s!='']:x");
          rbuggyMatches.push("!=", pseudos);
        });
      }

      rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
      rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|"));
      /* Contains
      ---------------------------------------------------------------------- */

      hasCompare = rnative.test(docElem.compareDocumentPosition); // Element contains another
      // Purposefully self-exclusive
      // As in, an element does not contain itself

      contains = hasCompare || rnative.test(docElem.contains) ? function (a, b) {
        var adown = a.nodeType === 9 ? a.documentElement : a,
            bup = b && b.parentNode;
        return a === bup || !!(bup && bup.nodeType === 1 && (adown.contains ? adown.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
      } : function (a, b) {
        if (b) {
          while (b = b.parentNode) {
            if (b === a) {
              return true;
            }
          }
        }

        return false;
      };
      /* Sorting
      ---------------------------------------------------------------------- */
      // Document order sorting

      sortOrder = hasCompare ? function (a, b) {
        // Flag for duplicate removal
        if (a === b) {
          hasDuplicate = true;
          return 0;
        } // Sort on method existence if only one input has compareDocumentPosition


        var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;

        if (compare) {
          return compare;
        } // Calculate position if both inputs belong to the same document
        // Support: IE 11+, Edge 17 - 18+
        // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
        // two documents; shallow comparisons work.
        // eslint-disable-next-line eqeqeq


        compare = (a.ownerDocument || a) == (b.ownerDocument || b) ? a.compareDocumentPosition(b) : // Otherwise we know they are disconnected
        1; // Disconnected nodes

        if (compare & 1 || !support.sortDetached && b.compareDocumentPosition(a) === compare) {
          // Choose the first element that is related to our preferred document
          // Support: IE 11+, Edge 17 - 18+
          // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
          // two documents; shallow comparisons work.
          // eslint-disable-next-line eqeqeq
          if (a == document || a.ownerDocument == preferredDoc && contains(preferredDoc, a)) {
            return -1;
          } // Support: IE 11+, Edge 17 - 18+
          // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
          // two documents; shallow comparisons work.
          // eslint-disable-next-line eqeqeq


          if (b == document || b.ownerDocument == preferredDoc && contains(preferredDoc, b)) {
            return 1;
          } // Maintain original order


          return sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0;
        }

        return compare & 4 ? -1 : 1;
      } : function (a, b) {
        // Exit early if the nodes are identical
        if (a === b) {
          hasDuplicate = true;
          return 0;
        }

        var cur,
            i = 0,
            aup = a.parentNode,
            bup = b.parentNode,
            ap = [a],
            bp = [b]; // Parentless nodes are either documents or disconnected

        if (!aup || !bup) {
          // Support: IE 11+, Edge 17 - 18+
          // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
          // two documents; shallow comparisons work.

          /* eslint-disable eqeqeq */
          return a == document ? -1 : b == document ? 1 :
          /* eslint-enable eqeqeq */
          aup ? -1 : bup ? 1 : sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0; // If the nodes are siblings, we can do a quick check
        } else if (aup === bup) {
          return siblingCheck(a, b);
        } // Otherwise we need full lists of their ancestors for comparison


        cur = a;

        while (cur = cur.parentNode) {
          ap.unshift(cur);
        }

        cur = b;

        while (cur = cur.parentNode) {
          bp.unshift(cur);
        } // Walk down the tree looking for a discrepancy


        while (ap[i] === bp[i]) {
          i++;
        }

        return i ? // Do a sibling check if the nodes have a common ancestor
        siblingCheck(ap[i], bp[i]) : // Otherwise nodes in our document sort first
        // Support: IE 11+, Edge 17 - 18+
        // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
        // two documents; shallow comparisons work.

        /* eslint-disable eqeqeq */
        ap[i] == preferredDoc ? -1 : bp[i] == preferredDoc ? 1 :
        /* eslint-enable eqeqeq */
        0;
      };
      return document;
    };

    Sizzle.matches = function (expr, elements) {
      return Sizzle(expr, null, null, elements);
    };

    Sizzle.matchesSelector = function (elem, expr) {
      setDocument(elem);

      if (support.matchesSelector && documentIsHTML && !nonnativeSelectorCache[expr + " "] && (!rbuggyMatches || !rbuggyMatches.test(expr)) && (!rbuggyQSA || !rbuggyQSA.test(expr))) {
        try {
          var ret = matches.call(elem, expr); // IE 9's matchesSelector returns false on disconnected nodes

          if (ret || support.disconnectedMatch || // As well, disconnected nodes are said to be in a document
          // fragment in IE 9
          elem.document && elem.document.nodeType !== 11) {
            return ret;
          }
        } catch (e) {
          nonnativeSelectorCache(expr, true);
        }
      }

      return Sizzle(expr, document, null, [elem]).length > 0;
    };

    Sizzle.contains = function (context, elem) {
      // Set document vars if needed
      // Support: IE 11+, Edge 17 - 18+
      // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
      // two documents; shallow comparisons work.
      // eslint-disable-next-line eqeqeq
      if ((context.ownerDocument || context) != document) {
        setDocument(context);
      }

      return contains(context, elem);
    };

    Sizzle.attr = function (elem, name) {
      // Set document vars if needed
      // Support: IE 11+, Edge 17 - 18+
      // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
      // two documents; shallow comparisons work.
      // eslint-disable-next-line eqeqeq
      if ((elem.ownerDocument || elem) != document) {
        setDocument(elem);
      }

      var fn = Expr.attrHandle[name.toLowerCase()],
          // Don't get fooled by Object.prototype properties (jQuery #13807)
      val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : undefined;
      return val !== undefined ? val : support.attributes || !documentIsHTML ? elem.getAttribute(name) : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
    };

    Sizzle.escape = function (sel) {
      return (sel + "").replace(rcssescape, fcssescape);
    };

    Sizzle.error = function (msg) {
      throw new Error("Syntax error, unrecognized expression: " + msg);
    };
    /**
     * Document sorting and removing duplicates
     * @param {ArrayLike} results
     */


    Sizzle.uniqueSort = function (results) {
      var elem,
          duplicates = [],
          j = 0,
          i = 0; // Unless we *know* we can detect duplicates, assume their presence

      hasDuplicate = !support.detectDuplicates;
      sortInput = !support.sortStable && results.slice(0);
      results.sort(sortOrder);

      if (hasDuplicate) {
        while (elem = results[i++]) {
          if (elem === results[i]) {
            j = duplicates.push(i);
          }
        }

        while (j--) {
          results.splice(duplicates[j], 1);
        }
      } // Clear input after sorting to release objects
      // See https://github.com/jquery/sizzle/pull/225


      sortInput = null;
      return results;
    };
    /**
     * Utility function for retrieving the text value of an array of DOM nodes
     * @param {Array|Element} elem
     */


    getText = Sizzle.getText = function (elem) {
      var node,
          ret = "",
          i = 0,
          nodeType = elem.nodeType;

      if (!nodeType) {
        // If no nodeType, this is expected to be an array
        while (node = elem[i++]) {
          // Do not traverse comment nodes
          ret += getText(node);
        }
      } else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
        // Use textContent for elements
        // innerText usage removed for consistency of new lines (jQuery #11153)
        if (typeof elem.textContent === "string") {
          return elem.textContent;
        } else {
          // Traverse its children
          for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
            ret += getText(elem);
          }
        }
      } else if (nodeType === 3 || nodeType === 4) {
        return elem.nodeValue;
      } // Do not include comment or processing instruction nodes


      return ret;
    };

    Expr = Sizzle.selectors = {
      // Can be adjusted by the user
      cacheLength: 50,
      createPseudo: markFunction,
      match: matchExpr,
      attrHandle: {},
      find: {},
      relative: {
        ">": {
          dir: "parentNode",
          first: true
        },
        " ": {
          dir: "parentNode"
        },
        "+": {
          dir: "previousSibling",
          first: true
        },
        "~": {
          dir: "previousSibling"
        }
      },
      preFilter: {
        "ATTR": function ATTR(match) {
          match[1] = match[1].replace(runescape, funescape); // Move the given value to match[3] whether quoted or unquoted

          match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape);

          if (match[2] === "~=") {
            match[3] = " " + match[3] + " ";
          }

          return match.slice(0, 4);
        },
        "CHILD": function CHILD(match) {
          /* matches from matchExpr["CHILD"]
          	1 type (only|nth|...)
          	2 what (child|of-type)
          	3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
          	4 xn-component of xn+y argument ([+-]?\d*n|)
          	5 sign of xn-component
          	6 x of xn-component
          	7 sign of y-component
          	8 y of y-component
          */
          match[1] = match[1].toLowerCase();

          if (match[1].slice(0, 3) === "nth") {
            // nth-* requires argument
            if (!match[3]) {
              Sizzle.error(match[0]);
            } // numeric x and y parameters for Expr.filter.CHILD
            // remember that false/true cast respectively to 0/1


            match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
            match[5] = +(match[7] + match[8] || match[3] === "odd"); // other types prohibit arguments
          } else if (match[3]) {
            Sizzle.error(match[0]);
          }

          return match;
        },
        "PSEUDO": function PSEUDO(match) {
          var excess,
              unquoted = !match[6] && match[2];

          if (matchExpr["CHILD"].test(match[0])) {
            return null;
          } // Accept quoted arguments as-is


          if (match[3]) {
            match[2] = match[4] || match[5] || ""; // Strip excess characters from unquoted arguments
          } else if (unquoted && rpseudo.test(unquoted) && ( // Get excess from tokenize (recursively)
          excess = tokenize(unquoted, true)) && ( // advance to the next closing parenthesis
          excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {
            // excess is a negative index
            match[0] = match[0].slice(0, excess);
            match[2] = unquoted.slice(0, excess);
          } // Return only captures needed by the pseudo filter method (type and argument)


          return match.slice(0, 3);
        }
      },
      filter: {
        "TAG": function TAG(nodeNameSelector) {
          var nodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
          return nodeNameSelector === "*" ? function () {
            return true;
          } : function (elem) {
            return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
          };
        },
        "CLASS": function CLASS(className) {
          var pattern = classCache[className + " "];
          return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function (elem) {
            return pattern.test(typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "");
          });
        },
        "ATTR": function ATTR(name, operator, check) {
          return function (elem) {
            var result = Sizzle.attr(elem, name);

            if (result == null) {
              return operator === "!=";
            }

            if (!operator) {
              return true;
            }

            result += "";
            /* eslint-disable max-len */

            return operator === "=" ? result === check : operator === "!=" ? result !== check : operator === "^=" ? check && result.indexOf(check) === 0 : operator === "*=" ? check && result.indexOf(check) > -1 : operator === "$=" ? check && result.slice(-check.length) === check : operator === "~=" ? (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1 : operator === "|=" ? result === check || result.slice(0, check.length + 1) === check + "-" : false;
            /* eslint-enable max-len */
          };
        },
        "CHILD": function CHILD(type, what, _argument, first, last) {
          var simple = type.slice(0, 3) !== "nth",
              forward = type.slice(-4) !== "last",
              ofType = what === "of-type";
          return first === 1 && last === 0 ? // Shortcut for :nth-*(n)
          function (elem) {
            return !!elem.parentNode;
          } : function (elem, _context, xml) {
            var cache,
                uniqueCache,
                outerCache,
                node,
                nodeIndex,
                start,
                dir = simple !== forward ? "nextSibling" : "previousSibling",
                parent = elem.parentNode,
                name = ofType && elem.nodeName.toLowerCase(),
                useCache = !xml && !ofType,
                diff = false;

            if (parent) {
              // :(first|last|only)-(child|of-type)
              if (simple) {
                while (dir) {
                  node = elem;

                  while (node = node[dir]) {
                    if (ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) {
                      return false;
                    }
                  } // Reverse direction for :only-* (if we haven't yet done so)


                  start = dir = type === "only" && !start && "nextSibling";
                }

                return true;
              }

              start = [forward ? parent.firstChild : parent.lastChild]; // non-xml :nth-child(...) stores cache data on `parent`

              if (forward && useCache) {
                // Seek `elem` from a previously-cached index
                // ...in a gzip-friendly way
                node = parent;
                outerCache = node[expando] || (node[expando] = {}); // Support: IE <9 only
                // Defend against cloned attroperties (jQuery gh-1709)

                uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                cache = uniqueCache[type] || [];
                nodeIndex = cache[0] === dirruns && cache[1];
                diff = nodeIndex && cache[2];
                node = nodeIndex && parent.childNodes[nodeIndex];

                while (node = ++nodeIndex && node && node[dir] || ( // Fallback to seeking `elem` from the start
                diff = nodeIndex = 0) || start.pop()) {
                  // When found, cache indexes on `parent` and break
                  if (node.nodeType === 1 && ++diff && node === elem) {
                    uniqueCache[type] = [dirruns, nodeIndex, diff];
                    break;
                  }
                }
              } else {
                // Use previously-cached element index if available
                if (useCache) {
                  // ...in a gzip-friendly way
                  node = elem;
                  outerCache = node[expando] || (node[expando] = {}); // Support: IE <9 only
                  // Defend against cloned attroperties (jQuery gh-1709)

                  uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                  cache = uniqueCache[type] || [];
                  nodeIndex = cache[0] === dirruns && cache[1];
                  diff = nodeIndex;
                } // xml :nth-child(...)
                // or :nth-last-child(...) or :nth(-last)?-of-type(...)


                if (diff === false) {
                  // Use the same loop as above to seek `elem` from the start
                  while (node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop()) {
                    if ((ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) && ++diff) {
                      // Cache the index of each encountered element
                      if (useCache) {
                        outerCache = node[expando] || (node[expando] = {}); // Support: IE <9 only
                        // Defend against cloned attroperties (jQuery gh-1709)

                        uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                        uniqueCache[type] = [dirruns, diff];
                      }

                      if (node === elem) {
                        break;
                      }
                    }
                  }
                }
              } // Incorporate the offset, then check against cycle size


              diff -= last;
              return diff === first || diff % first === 0 && diff / first >= 0;
            }
          };
        },
        "PSEUDO": function PSEUDO(pseudo, argument) {
          // pseudo-class names are case-insensitive
          // http://www.w3.org/TR/selectors/#pseudo-classes
          // Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
          // Remember that setFilters inherits from pseudos
          var args,
              fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle.error("unsupported pseudo: " + pseudo); // The user may use createPseudo to indicate that
          // arguments are needed to create the filter function
          // just as Sizzle does

          if (fn[expando]) {
            return fn(argument);
          } // But maintain support for old signatures


          if (fn.length > 1) {
            args = [pseudo, pseudo, "", argument];
            return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function (seed, matches) {
              var idx,
                  matched = fn(seed, argument),
                  i = matched.length;

              while (i--) {
                idx = indexOf(seed, matched[i]);
                seed[idx] = !(matches[idx] = matched[i]);
              }
            }) : function (elem) {
              return fn(elem, 0, args);
            };
          }

          return fn;
        }
      },
      pseudos: {
        // Potentially complex pseudos
        "not": markFunction(function (selector) {
          // Trim the selector passed to compile
          // to avoid treating leading and trailing
          // spaces as combinators
          var input = [],
              results = [],
              matcher = compile(selector.replace(rtrim, "$1"));
          return matcher[expando] ? markFunction(function (seed, matches, _context, xml) {
            var elem,
                unmatched = matcher(seed, null, xml, []),
                i = seed.length; // Match elements unmatched by `matcher`

            while (i--) {
              if (elem = unmatched[i]) {
                seed[i] = !(matches[i] = elem);
              }
            }
          }) : function (elem, _context, xml) {
            input[0] = elem;
            matcher(input, null, xml, results); // Don't keep the element (issue #299)

            input[0] = null;
            return !results.pop();
          };
        }),
        "has": markFunction(function (selector) {
          return function (elem) {
            return Sizzle(selector, elem).length > 0;
          };
        }),
        "contains": markFunction(function (text) {
          text = text.replace(runescape, funescape);
          return function (elem) {
            return (elem.textContent || getText(elem)).indexOf(text) > -1;
          };
        }),
        // "Whether an element is represented by a :lang() selector
        // is based solely on the element's language value
        // being equal to the identifier C,
        // or beginning with the identifier C immediately followed by "-".
        // The matching of C against the element's language value is performed case-insensitively.
        // The identifier C does not have to be a valid language name."
        // http://www.w3.org/TR/selectors/#lang-pseudo
        "lang": markFunction(function (lang) {
          // lang value must be a valid identifier
          if (!ridentifier.test(lang || "")) {
            Sizzle.error("unsupported lang: " + lang);
          }

          lang = lang.replace(runescape, funescape).toLowerCase();
          return function (elem) {
            var elemLang;

            do {
              if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) {
                elemLang = elemLang.toLowerCase();
                return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
              }
            } while ((elem = elem.parentNode) && elem.nodeType === 1);

            return false;
          };
        }),
        // Miscellaneous
        "target": function target(elem) {
          var hash = window.location && window.location.hash;
          return hash && hash.slice(1) === elem.id;
        },
        "root": function root(elem) {
          return elem === docElem;
        },
        "focus": function focus(elem) {
          return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
        },
        // Boolean properties
        "enabled": createDisabledPseudo(false),
        "disabled": createDisabledPseudo(true),
        "checked": function checked(elem) {
          // In CSS3, :checked should return both checked and selected elements
          // http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
          var nodeName = elem.nodeName.toLowerCase();
          return nodeName === "input" && !!elem.checked || nodeName === "option" && !!elem.selected;
        },
        "selected": function selected(elem) {
          // Accessing this property makes selected-by-default
          // options in Safari work properly
          if (elem.parentNode) {
            // eslint-disable-next-line no-unused-expressions
            elem.parentNode.selectedIndex;
          }

          return elem.selected === true;
        },
        // Contents
        "empty": function empty(elem) {
          // http://www.w3.org/TR/selectors/#empty-pseudo
          // :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
          //   but not by others (comment: 8; processing instruction: 7; etc.)
          // nodeType < 6 works because attributes (2) do not appear as children
          for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
            if (elem.nodeType < 6) {
              return false;
            }
          }

          return true;
        },
        "parent": function parent(elem) {
          return !Expr.pseudos["empty"](elem);
        },
        // Element/input types
        "header": function header(elem) {
          return rheader.test(elem.nodeName);
        },
        "input": function input(elem) {
          return rinputs.test(elem.nodeName);
        },
        "button": function button(elem) {
          var name = elem.nodeName.toLowerCase();
          return name === "input" && elem.type === "button" || name === "button";
        },
        "text": function text(elem) {
          var attr;
          return elem.nodeName.toLowerCase() === "input" && elem.type === "text" && ( // Support: IE<8
          // New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
          (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text");
        },
        // Position-in-collection
        "first": createPositionalPseudo(function () {
          return [0];
        }),
        "last": createPositionalPseudo(function (_matchIndexes, length) {
          return [length - 1];
        }),
        "eq": createPositionalPseudo(function (_matchIndexes, length, argument) {
          return [argument < 0 ? argument + length : argument];
        }),
        "even": createPositionalPseudo(function (matchIndexes, length) {
          var i = 0;

          for (; i < length; i += 2) {
            matchIndexes.push(i);
          }

          return matchIndexes;
        }),
        "odd": createPositionalPseudo(function (matchIndexes, length) {
          var i = 1;

          for (; i < length; i += 2) {
            matchIndexes.push(i);
          }

          return matchIndexes;
        }),
        "lt": createPositionalPseudo(function (matchIndexes, length, argument) {
          var i = argument < 0 ? argument + length : argument > length ? length : argument;

          for (; --i >= 0;) {
            matchIndexes.push(i);
          }

          return matchIndexes;
        }),
        "gt": createPositionalPseudo(function (matchIndexes, length, argument) {
          var i = argument < 0 ? argument + length : argument;

          for (; ++i < length;) {
            matchIndexes.push(i);
          }

          return matchIndexes;
        })
      }
    };
    Expr.pseudos["nth"] = Expr.pseudos["eq"]; // Add button/input type pseudos

    for (i in {
      radio: true,
      checkbox: true,
      file: true,
      password: true,
      image: true
    }) {
      Expr.pseudos[i] = createInputPseudo(i);
    }

    for (i in {
      submit: true,
      reset: true
    }) {
      Expr.pseudos[i] = createButtonPseudo(i);
    } // Easy API for creating new setFilters


    function setFilters() {}

    setFilters.prototype = Expr.filters = Expr.pseudos;
    Expr.setFilters = new setFilters();

    tokenize = Sizzle.tokenize = function (selector, parseOnly) {
      var matched,
          match,
          tokens,
          type,
          soFar,
          groups,
          preFilters,
          cached = tokenCache[selector + " "];

      if (cached) {
        return parseOnly ? 0 : cached.slice(0);
      }

      soFar = selector;
      groups = [];
      preFilters = Expr.preFilter;

      while (soFar) {
        // Comma and first run
        if (!matched || (match = rcomma.exec(soFar))) {
          if (match) {
            // Don't consume trailing commas as valid
            soFar = soFar.slice(match[0].length) || soFar;
          }

          groups.push(tokens = []);
        }

        matched = false; // Combinators

        if (match = rcombinators.exec(soFar)) {
          matched = match.shift();
          tokens.push({
            value: matched,
            // Cast descendant combinators to space
            type: match[0].replace(rtrim, " ")
          });
          soFar = soFar.slice(matched.length);
        } // Filters


        for (type in Expr.filter) {
          if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
            matched = match.shift();
            tokens.push({
              value: matched,
              type: type,
              matches: match
            });
            soFar = soFar.slice(matched.length);
          }
        }

        if (!matched) {
          break;
        }
      } // Return the length of the invalid excess
      // if we're just parsing
      // Otherwise, throw an error or return tokens


      return parseOnly ? soFar.length : soFar ? Sizzle.error(selector) : // Cache the tokens
      tokenCache(selector, groups).slice(0);
    };

    function toSelector(tokens) {
      var i = 0,
          len = tokens.length,
          selector = "";

      for (; i < len; i++) {
        selector += tokens[i].value;
      }

      return selector;
    }

    function addCombinator(matcher, combinator, base) {
      var dir = combinator.dir,
          skip = combinator.next,
          key = skip || dir,
          checkNonElements = base && key === "parentNode",
          doneName = done++;
      return combinator.first ? // Check against closest ancestor/preceding element
      function (elem, context, xml) {
        while (elem = elem[dir]) {
          if (elem.nodeType === 1 || checkNonElements) {
            return matcher(elem, context, xml);
          }
        }

        return false;
      } : // Check against all ancestor/preceding elements
      function (elem, context, xml) {
        var oldCache,
            uniqueCache,
            outerCache,
            newCache = [dirruns, doneName]; // We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching

        if (xml) {
          while (elem = elem[dir]) {
            if (elem.nodeType === 1 || checkNonElements) {
              if (matcher(elem, context, xml)) {
                return true;
              }
            }
          }
        } else {
          while (elem = elem[dir]) {
            if (elem.nodeType === 1 || checkNonElements) {
              outerCache = elem[expando] || (elem[expando] = {}); // Support: IE <9 only
              // Defend against cloned attroperties (jQuery gh-1709)

              uniqueCache = outerCache[elem.uniqueID] || (outerCache[elem.uniqueID] = {});

              if (skip && skip === elem.nodeName.toLowerCase()) {
                elem = elem[dir] || elem;
              } else if ((oldCache = uniqueCache[key]) && oldCache[0] === dirruns && oldCache[1] === doneName) {
                // Assign to newCache so results back-propagate to previous elements
                return newCache[2] = oldCache[2];
              } else {
                // Reuse newcache so results back-propagate to previous elements
                uniqueCache[key] = newCache; // A match means we're done; a fail means we have to keep checking

                if (newCache[2] = matcher(elem, context, xml)) {
                  return true;
                }
              }
            }
          }
        }

        return false;
      };
    }

    function elementMatcher(matchers) {
      return matchers.length > 1 ? function (elem, context, xml) {
        var i = matchers.length;

        while (i--) {
          if (!matchers[i](elem, context, xml)) {
            return false;
          }
        }

        return true;
      } : matchers[0];
    }

    function multipleContexts(selector, contexts, results) {
      var i = 0,
          len = contexts.length;

      for (; i < len; i++) {
        Sizzle(selector, contexts[i], results);
      }

      return results;
    }

    function condense(unmatched, map, filter, context, xml) {
      var elem,
          newUnmatched = [],
          i = 0,
          len = unmatched.length,
          mapped = map != null;

      for (; i < len; i++) {
        if (elem = unmatched[i]) {
          if (!filter || filter(elem, context, xml)) {
            newUnmatched.push(elem);

            if (mapped) {
              map.push(i);
            }
          }
        }
      }

      return newUnmatched;
    }

    function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
      if (postFilter && !postFilter[expando]) {
        postFilter = setMatcher(postFilter);
      }

      if (postFinder && !postFinder[expando]) {
        postFinder = setMatcher(postFinder, postSelector);
      }

      return markFunction(function (seed, results, context, xml) {
        var temp,
            i,
            elem,
            preMap = [],
            postMap = [],
            preexisting = results.length,
            // Get initial elements from seed or context
        elems = seed || multipleContexts(selector || "*", context.nodeType ? [context] : context, []),
            // Prefilter to get matcher input, preserving a map for seed-results synchronization
        matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems,
            matcherOut = matcher ? // If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
        postFinder || (seed ? preFilter : preexisting || postFilter) ? // ...intermediate processing is necessary
        [] : // ...otherwise use results directly
        results : matcherIn; // Find primary matches

        if (matcher) {
          matcher(matcherIn, matcherOut, context, xml);
        } // Apply postFilter


        if (postFilter) {
          temp = condense(matcherOut, postMap);
          postFilter(temp, [], context, xml); // Un-match failing elements by moving them back to matcherIn

          i = temp.length;

          while (i--) {
            if (elem = temp[i]) {
              matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem);
            }
          }
        }

        if (seed) {
          if (postFinder || preFilter) {
            if (postFinder) {
              // Get the final matcherOut by condensing this intermediate into postFinder contexts
              temp = [];
              i = matcherOut.length;

              while (i--) {
                if (elem = matcherOut[i]) {
                  // Restore matcherIn since elem is not yet a final match
                  temp.push(matcherIn[i] = elem);
                }
              }

              postFinder(null, matcherOut = [], temp, xml);
            } // Move matched elements from seed to results to keep them synchronized


            i = matcherOut.length;

            while (i--) {
              if ((elem = matcherOut[i]) && (temp = postFinder ? indexOf(seed, elem) : preMap[i]) > -1) {
                seed[temp] = !(results[temp] = elem);
              }
            }
          } // Add elements to results, through postFinder if defined

        } else {
          matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut);

          if (postFinder) {
            postFinder(null, results, matcherOut, xml);
          } else {
            push.apply(results, matcherOut);
          }
        }
      });
    }

    function matcherFromTokens(tokens) {
      var checkContext,
          matcher,
          j,
          len = tokens.length,
          leadingRelative = Expr.relative[tokens[0].type],
          implicitRelative = leadingRelative || Expr.relative[" "],
          i = leadingRelative ? 1 : 0,
          // The foundational matcher ensures that elements are reachable from top-level context(s)
      matchContext = addCombinator(function (elem) {
        return elem === checkContext;
      }, implicitRelative, true),
          matchAnyContext = addCombinator(function (elem) {
        return indexOf(checkContext, elem) > -1;
      }, implicitRelative, true),
          matchers = [function (elem, context, xml) {
        var ret = !leadingRelative && (xml || context !== outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml)); // Avoid hanging onto element (issue #299)

        checkContext = null;
        return ret;
      }];

      for (; i < len; i++) {
        if (matcher = Expr.relative[tokens[i].type]) {
          matchers = [addCombinator(elementMatcher(matchers), matcher)];
        } else {
          matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches); // Return special upon seeing a positional matcher

          if (matcher[expando]) {
            // Find the next relative operator (if any) for proper handling
            j = ++i;

            for (; j < len; j++) {
              if (Expr.relative[tokens[j].type]) {
                break;
              }
            }

            return setMatcher(i > 1 && elementMatcher(matchers), i > 1 && toSelector( // If the preceding token was a descendant combinator, insert an implicit any-element `*`
            tokens.slice(0, i - 1).concat({
              value: tokens[i - 2].type === " " ? "*" : ""
            })).replace(rtrim, "$1"), matcher, i < j && matcherFromTokens(tokens.slice(i, j)), j < len && matcherFromTokens(tokens = tokens.slice(j)), j < len && toSelector(tokens));
          }

          matchers.push(matcher);
        }
      }

      return elementMatcher(matchers);
    }

    function matcherFromGroupMatchers(elementMatchers, setMatchers) {
      var bySet = setMatchers.length > 0,
          byElement = elementMatchers.length > 0,
          superMatcher = function superMatcher(seed, context, xml, results, outermost) {
        var elem,
            j,
            matcher,
            matchedCount = 0,
            i = "0",
            unmatched = seed && [],
            setMatched = [],
            contextBackup = outermostContext,
            // We must always have either seed elements or outermost context
        elems = seed || byElement && Expr.find["TAG"]("*", outermost),
            // Use integer dirruns iff this is the outermost matcher
        dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.random() || 0.1,
            len = elems.length;

        if (outermost) {
          // Support: IE 11+, Edge 17 - 18+
          // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
          // two documents; shallow comparisons work.
          // eslint-disable-next-line eqeqeq
          outermostContext = context == document || context || outermost;
        } // Add elements passing elementMatchers directly to results
        // Support: IE<9, Safari
        // Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id


        for (; i !== len && (elem = elems[i]) != null; i++) {
          if (byElement && elem) {
            j = 0; // Support: IE 11+, Edge 17 - 18+
            // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
            // two documents; shallow comparisons work.
            // eslint-disable-next-line eqeqeq

            if (!context && elem.ownerDocument != document) {
              setDocument(elem);
              xml = !documentIsHTML;
            }

            while (matcher = elementMatchers[j++]) {
              if (matcher(elem, context || document, xml)) {
                results.push(elem);
                break;
              }
            }

            if (outermost) {
              dirruns = dirrunsUnique;
            }
          } // Track unmatched elements for set filters


          if (bySet) {
            // They will have gone through all possible matchers
            if (elem = !matcher && elem) {
              matchedCount--;
            } // Lengthen the array for every element, matched or not


            if (seed) {
              unmatched.push(elem);
            }
          }
        } // `i` is now the count of elements visited above, and adding it to `matchedCount`
        // makes the latter nonnegative.


        matchedCount += i; // Apply set filters to unmatched elements
        // NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
        // equals `i`), unless we didn't visit _any_ elements in the above loop because we have
        // no element matchers and no seed.
        // Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
        // case, which will result in a "00" `matchedCount` that differs from `i` but is also
        // numerically zero.

        if (bySet && i !== matchedCount) {
          j = 0;

          while (matcher = setMatchers[j++]) {
            matcher(unmatched, setMatched, context, xml);
          }

          if (seed) {
            // Reintegrate element matches to eliminate the need for sorting
            if (matchedCount > 0) {
              while (i--) {
                if (!(unmatched[i] || setMatched[i])) {
                  setMatched[i] = pop.call(results);
                }
              }
            } // Discard index placeholder values to get only actual matches


            setMatched = condense(setMatched);
          } // Add matches to results


          push.apply(results, setMatched); // Seedless set matches succeeding multiple successful matchers stipulate sorting

          if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) {
            Sizzle.uniqueSort(results);
          }
        } // Override manipulation of globals by nested matchers


        if (outermost) {
          dirruns = dirrunsUnique;
          outermostContext = contextBackup;
        }

        return unmatched;
      };

      return bySet ? markFunction(superMatcher) : superMatcher;
    }

    compile = Sizzle.compile = function (selector, match
    /* Internal Use Only */
    ) {
      var i,
          setMatchers = [],
          elementMatchers = [],
          cached = compilerCache[selector + " "];

      if (!cached) {
        // Generate a function of recursive functions that can be used to check each element
        if (!match) {
          match = tokenize(selector);
        }

        i = match.length;

        while (i--) {
          cached = matcherFromTokens(match[i]);

          if (cached[expando]) {
            setMatchers.push(cached);
          } else {
            elementMatchers.push(cached);
          }
        } // Cache the compiled function


        cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers)); // Save selector and tokenization

        cached.selector = selector;
      }

      return cached;
    };
    /**
     * A low-level selection function that works with Sizzle's compiled
     *  selector functions
     * @param {String|Function} selector A selector or a pre-compiled
     *  selector function built with Sizzle.compile
     * @param {Element} context
     * @param {Array} [results]
     * @param {Array} [seed] A set of elements to match against
     */


    select = Sizzle.select = function (selector, context, results, seed) {
      var i,
          tokens,
          token,
          type,
          find,
          compiled = typeof selector === "function" && selector,
          match = !seed && tokenize(selector = compiled.selector || selector);
      results = results || []; // Try to minimize operations if there is only one selector in the list and no seed
      // (the latter of which guarantees us context)

      if (match.length === 1) {
        // Reduce context if the leading compound selector is an ID
        tokens = match[0] = match[0].slice(0);

        if (tokens.length > 2 && (token = tokens[0]).type === "ID" && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {
          context = (Expr.find["ID"](token.matches[0].replace(runescape, funescape), context) || [])[0];

          if (!context) {
            return results; // Precompiled matchers will still verify ancestry, so step up a level
          } else if (compiled) {
            context = context.parentNode;
          }

          selector = selector.slice(tokens.shift().value.length);
        } // Fetch a seed set for right-to-left matching


        i = matchExpr["needsContext"].test(selector) ? 0 : tokens.length;

        while (i--) {
          token = tokens[i]; // Abort if we hit a combinator

          if (Expr.relative[type = token.type]) {
            break;
          }

          if (find = Expr.find[type]) {
            // Search, expanding context for leading sibling combinators
            if (seed = find(token.matches[0].replace(runescape, funescape), rsibling.test(tokens[0].type) && testContext(context.parentNode) || context)) {
              // If seed is empty or no tokens remain, we can return early
              tokens.splice(i, 1);
              selector = seed.length && toSelector(tokens);

              if (!selector) {
                push.apply(results, seed);
                return results;
              }

              break;
            }
          }
        }
      } // Compile and execute a filtering function if one is not provided
      // Provide `match` to avoid retokenization if we modified the selector above


      (compiled || compile(selector, match))(seed, context, !documentIsHTML, results, !context || rsibling.test(selector) && testContext(context.parentNode) || context);
      return results;
    }; // One-time assignments
    // Sort stability


    support.sortStable = expando.split("").sort(sortOrder).join("") === expando; // Support: Chrome 14-35+
    // Always assume duplicates if they aren't passed to the comparison function

    support.detectDuplicates = !!hasDuplicate; // Initialize against the default document

    setDocument(); // Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
    // Detached nodes confoundingly follow *each other*

    support.sortDetached = assert(function (el) {
      // Should return 1, but returns 4 (following)
      return el.compareDocumentPosition(document.createElement("fieldset")) & 1;
    }); // Support: IE<8
    // Prevent attribute/property "interpolation"
    // https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx

    if (!assert(function (el) {
      el.innerHTML = "<a href='#'></a>";
      return el.firstChild.getAttribute("href") === "#";
    })) {
      addHandle("type|href|height|width", function (elem, name, isXML) {
        if (!isXML) {
          return elem.getAttribute(name, name.toLowerCase() === "type" ? 1 : 2);
        }
      });
    } // Support: IE<9
    // Use defaultValue in place of getAttribute("value")


    if (!support.attributes || !assert(function (el) {
      el.innerHTML = "<input/>";
      el.firstChild.setAttribute("value", "");
      return el.firstChild.getAttribute("value") === "";
    })) {
      addHandle("value", function (elem, _name, isXML) {
        if (!isXML && elem.nodeName.toLowerCase() === "input") {
          return elem.defaultValue;
        }
      });
    } // Support: IE<9
    // Use getAttributeNode to fetch booleans when getAttribute lies


    if (!assert(function (el) {
      return el.getAttribute("disabled") == null;
    })) {
      addHandle(booleans, function (elem, name, isXML) {
        var val;

        if (!isXML) {
          return elem[name] === true ? name.toLowerCase() : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
        }
      });
    }

    return Sizzle;
  }(window);

  jQuery.find = Sizzle;
  jQuery.expr = Sizzle.selectors; // Deprecated

  jQuery.expr[":"] = jQuery.expr.pseudos;
  jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
  jQuery.text = Sizzle.getText;
  jQuery.isXMLDoc = Sizzle.isXML;
  jQuery.contains = Sizzle.contains;
  jQuery.escapeSelector = Sizzle.escape;

  var dir = function dir(elem, _dir, until) {
    var matched = [],
        truncate = until !== undefined;

    while ((elem = elem[_dir]) && elem.nodeType !== 9) {
      if (elem.nodeType === 1) {
        if (truncate && jQuery(elem).is(until)) {
          break;
        }

        matched.push(elem);
      }
    }

    return matched;
  };

  var _siblings = function siblings(n, elem) {
    var matched = [];

    for (; n; n = n.nextSibling) {
      if (n.nodeType === 1 && n !== elem) {
        matched.push(n);
      }
    }

    return matched;
  };

  var rneedsContext = jQuery.expr.match.needsContext;

  function nodeName(elem, name) {
    return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
  }

  ;
  var rsingleTag = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i; // Implement the identical functionality for filter and not

  function winnow(elements, qualifier, not) {
    if (isFunction(qualifier)) {
      return jQuery.grep(elements, function (elem, i) {
        return !!qualifier.call(elem, i, elem) !== not;
      });
    } // Single element


    if (qualifier.nodeType) {
      return jQuery.grep(elements, function (elem) {
        return elem === qualifier !== not;
      });
    } // Arraylike of elements (jQuery, arguments, Array)


    if (typeof qualifier !== "string") {
      return jQuery.grep(elements, function (elem) {
        return indexOf.call(qualifier, elem) > -1 !== not;
      });
    } // Filtered directly for both simple and complex selectors


    return jQuery.filter(qualifier, elements, not);
  }

  jQuery.filter = function (expr, elems, not) {
    var elem = elems[0];

    if (not) {
      expr = ":not(" + expr + ")";
    }

    if (elems.length === 1 && elem.nodeType === 1) {
      return jQuery.find.matchesSelector(elem, expr) ? [elem] : [];
    }

    return jQuery.find.matches(expr, jQuery.grep(elems, function (elem) {
      return elem.nodeType === 1;
    }));
  };

  jQuery.fn.extend({
    find: function find(selector) {
      var i,
          ret,
          len = this.length,
          self = this;

      if (typeof selector !== "string") {
        return this.pushStack(jQuery(selector).filter(function () {
          for (i = 0; i < len; i++) {
            if (jQuery.contains(self[i], this)) {
              return true;
            }
          }
        }));
      }

      ret = this.pushStack([]);

      for (i = 0; i < len; i++) {
        jQuery.find(selector, self[i], ret);
      }

      return len > 1 ? jQuery.uniqueSort(ret) : ret;
    },
    filter: function filter(selector) {
      return this.pushStack(winnow(this, selector || [], false));
    },
    not: function not(selector) {
      return this.pushStack(winnow(this, selector || [], true));
    },
    is: function is(selector) {
      return !!winnow(this, // If this is a positional/relative selector, check membership in the returned set
      // so $("p:first").is("p:last") won't return true for a doc with two "p".
      typeof selector === "string" && rneedsContext.test(selector) ? jQuery(selector) : selector || [], false).length;
    }
  }); // Initialize a jQuery object
  // A central reference to the root jQuery(document)

  var rootjQuery,
      // A simple way to check for HTML strings
  // Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
  // Strict HTML recognition (#11290: must start with <)
  // Shortcut simple #id case for speed
  rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
      init = jQuery.fn.init = function (selector, context, root) {
    var match, elem; // HANDLE: $(""), $(null), $(undefined), $(false)

    if (!selector) {
      return this;
    } // Method init() accepts an alternate rootjQuery
    // so migrate can support jQuery.sub (gh-2101)


    root = root || rootjQuery; // Handle HTML strings

    if (typeof selector === "string") {
      if (selector[0] === "<" && selector[selector.length - 1] === ">" && selector.length >= 3) {
        // Assume that strings that start and end with <> are HTML and skip the regex check
        match = [null, selector, null];
      } else {
        match = rquickExpr.exec(selector);
      } // Match html or make sure no context is specified for #id


      if (match && (match[1] || !context)) {
        // HANDLE: $(html) -> $(array)
        if (match[1]) {
          context = context instanceof jQuery ? context[0] : context; // Option to run scripts is true for back-compat
          // Intentionally let the error be thrown if parseHTML is not present

          jQuery.merge(this, jQuery.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document, true)); // HANDLE: $(html, props)

          if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
            for (match in context) {
              // Properties of context are called as methods if possible
              if (isFunction(this[match])) {
                this[match](context[match]); // ...and otherwise set as attributes
              } else {
                this.attr(match, context[match]);
              }
            }
          }

          return this; // HANDLE: $(#id)
        } else {
          elem = document.getElementById(match[2]);

          if (elem) {
            // Inject the element directly into the jQuery object
            this[0] = elem;
            this.length = 1;
          }

          return this;
        } // HANDLE: $(expr, $(...))

      } else if (!context || context.jquery) {
        return (context || root).find(selector); // HANDLE: $(expr, context)
        // (which is just equivalent to: $(context).find(expr)
      } else {
        return this.constructor(context).find(selector);
      } // HANDLE: $(DOMElement)

    } else if (selector.nodeType) {
      this[0] = selector;
      this.length = 1;
      return this; // HANDLE: $(function)
      // Shortcut for document ready
    } else if (isFunction(selector)) {
      return root.ready !== undefined ? root.ready(selector) : // Execute immediately if ready is not present
      selector(jQuery);
    }

    return jQuery.makeArray(selector, this);
  }; // Give the init function the jQuery prototype for later instantiation


  init.prototype = jQuery.fn; // Initialize central reference

  rootjQuery = jQuery(document);
  var rparentsprev = /^(?:parents|prev(?:Until|All))/,
      // Methods guaranteed to produce a unique set when starting from a unique set
  guaranteedUnique = {
    children: true,
    contents: true,
    next: true,
    prev: true
  };
  jQuery.fn.extend({
    has: function has(target) {
      var targets = jQuery(target, this),
          l = targets.length;
      return this.filter(function () {
        var i = 0;

        for (; i < l; i++) {
          if (jQuery.contains(this, targets[i])) {
            return true;
          }
        }
      });
    },
    closest: function closest(selectors, context) {
      var cur,
          i = 0,
          l = this.length,
          matched = [],
          targets = typeof selectors !== "string" && jQuery(selectors); // Positional selectors never match, since there's no _selection_ context

      if (!rneedsContext.test(selectors)) {
        for (; i < l; i++) {
          for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) {
            // Always skip document fragments
            if (cur.nodeType < 11 && (targets ? targets.index(cur) > -1 : // Don't pass non-elements to Sizzle
            cur.nodeType === 1 && jQuery.find.matchesSelector(cur, selectors))) {
              matched.push(cur);
              break;
            }
          }
        }
      }

      return this.pushStack(matched.length > 1 ? jQuery.uniqueSort(matched) : matched);
    },
    // Determine the position of an element within the set
    index: function index(elem) {
      // No argument, return index in parent
      if (!elem) {
        return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
      } // Index in selector


      if (typeof elem === "string") {
        return indexOf.call(jQuery(elem), this[0]);
      } // Locate the position of the desired element


      return indexOf.call(this, // If it receives a jQuery object, the first element is used
      elem.jquery ? elem[0] : elem);
    },
    add: function add(selector, context) {
      return this.pushStack(jQuery.uniqueSort(jQuery.merge(this.get(), jQuery(selector, context))));
    },
    addBack: function addBack(selector) {
      return this.add(selector == null ? this.prevObject : this.prevObject.filter(selector));
    }
  });

  function sibling(cur, dir) {
    while ((cur = cur[dir]) && cur.nodeType !== 1) {}

    return cur;
  }

  jQuery.each({
    parent: function parent(elem) {
      var parent = elem.parentNode;
      return parent && parent.nodeType !== 11 ? parent : null;
    },
    parents: function parents(elem) {
      return dir(elem, "parentNode");
    },
    parentsUntil: function parentsUntil(elem, _i, until) {
      return dir(elem, "parentNode", until);
    },
    next: function next(elem) {
      return sibling(elem, "nextSibling");
    },
    prev: function prev(elem) {
      return sibling(elem, "previousSibling");
    },
    nextAll: function nextAll(elem) {
      return dir(elem, "nextSibling");
    },
    prevAll: function prevAll(elem) {
      return dir(elem, "previousSibling");
    },
    nextUntil: function nextUntil(elem, _i, until) {
      return dir(elem, "nextSibling", until);
    },
    prevUntil: function prevUntil(elem, _i, until) {
      return dir(elem, "previousSibling", until);
    },
    siblings: function siblings(elem) {
      return _siblings((elem.parentNode || {}).firstChild, elem);
    },
    children: function children(elem) {
      return _siblings(elem.firstChild);
    },
    contents: function contents(elem) {
      if (elem.contentDocument != null && // Support: IE 11+
      // <object> elements with no `data` attribute has an object
      // `contentDocument` with a `null` prototype.
      getProto(elem.contentDocument)) {
        return elem.contentDocument;
      } // Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
      // Treat the template element as a regular one in browsers that
      // don't support it.


      if (nodeName(elem, "template")) {
        elem = elem.content || elem;
      }

      return jQuery.merge([], elem.childNodes);
    }
  }, function (name, fn) {
    jQuery.fn[name] = function (until, selector) {
      var matched = jQuery.map(this, fn, until);

      if (name.slice(-5) !== "Until") {
        selector = until;
      }

      if (selector && typeof selector === "string") {
        matched = jQuery.filter(selector, matched);
      }

      if (this.length > 1) {
        // Remove duplicates
        if (!guaranteedUnique[name]) {
          jQuery.uniqueSort(matched);
        } // Reverse order for parents* and prev-derivatives


        if (rparentsprev.test(name)) {
          matched.reverse();
        }
      }

      return this.pushStack(matched);
    };
  });
  var rnothtmlwhite = /[^\x20\t\r\n\f]+/g; // Convert String-formatted options into Object-formatted ones

  function createOptions(options) {
    var object = {};
    jQuery.each(options.match(rnothtmlwhite) || [], function (_, flag) {
      object[flag] = true;
    });
    return object;
  }
  /*
   * Create a callback list using the following parameters:
   *
   *	options: an optional list of space-separated options that will change how
   *			the callback list behaves or a more traditional option object
   *
   * By default a callback list will act like an event callback list and can be
   * "fired" multiple times.
   *
   * Possible options:
   *
   *	once:			will ensure the callback list can only be fired once (like a Deferred)
   *
   *	memory:			will keep track of previous values and will call any callback added
   *					after the list has been fired right away with the latest "memorized"
   *					values (like a Deferred)
   *
   *	unique:			will ensure a callback can only be added once (no duplicate in the list)
   *
   *	stopOnFalse:	interrupt callings when a callback returns false
   *
   */


  jQuery.Callbacks = function (options) {
    // Convert options from String-formatted to Object-formatted if needed
    // (we check in cache first)
    options = typeof options === "string" ? createOptions(options) : jQuery.extend({}, options);

    var // Flag to know if list is currently firing
    firing,
        // Last fire value for non-forgettable lists
    memory,
        // Flag to know if list was already fired
    _fired,
        // Flag to prevent firing
    _locked,
        // Actual callback list
    list = [],
        // Queue of execution data for repeatable lists
    queue = [],
        // Index of currently firing callback (modified by add/remove as needed)
    firingIndex = -1,
        // Fire callbacks
    fire = function fire() {
      // Enforce single-firing
      _locked = _locked || options.once; // Execute callbacks for all pending executions,
      // respecting firingIndex overrides and runtime changes

      _fired = firing = true;

      for (; queue.length; firingIndex = -1) {
        memory = queue.shift();

        while (++firingIndex < list.length) {
          // Run callback and check for early termination
          if (list[firingIndex].apply(memory[0], memory[1]) === false && options.stopOnFalse) {
            // Jump to end and forget the data so .add doesn't re-fire
            firingIndex = list.length;
            memory = false;
          }
        }
      } // Forget the data if we're done with it


      if (!options.memory) {
        memory = false;
      }

      firing = false; // Clean up if we're done firing for good

      if (_locked) {
        // Keep an empty list if we have data for future add calls
        if (memory) {
          list = []; // Otherwise, this object is spent
        } else {
          list = "";
        }
      }
    },
        // Actual Callbacks object
    self = {
      // Add a callback or a collection of callbacks to the list
      add: function add() {
        if (list) {
          // If we have memory from a past run, we should fire after adding
          if (memory && !firing) {
            firingIndex = list.length - 1;
            queue.push(memory);
          }

          (function add(args) {
            jQuery.each(args, function (_, arg) {
              if (isFunction(arg)) {
                if (!options.unique || !self.has(arg)) {
                  list.push(arg);
                }
              } else if (arg && arg.length && toType(arg) !== "string") {
                // Inspect recursively
                add(arg);
              }
            });
          })(arguments);

          if (memory && !firing) {
            fire();
          }
        }

        return this;
      },
      // Remove a callback from the list
      remove: function remove() {
        jQuery.each(arguments, function (_, arg) {
          var index;

          while ((index = jQuery.inArray(arg, list, index)) > -1) {
            list.splice(index, 1); // Handle firing indexes

            if (index <= firingIndex) {
              firingIndex--;
            }
          }
        });
        return this;
      },
      // Check if a given callback is in the list.
      // If no argument is given, return whether or not list has callbacks attached.
      has: function has(fn) {
        return fn ? jQuery.inArray(fn, list) > -1 : list.length > 0;
      },
      // Remove all callbacks from the list
      empty: function empty() {
        if (list) {
          list = [];
        }

        return this;
      },
      // Disable .fire and .add
      // Abort any current/pending executions
      // Clear all callbacks and values
      disable: function disable() {
        _locked = queue = [];
        list = memory = "";
        return this;
      },
      disabled: function disabled() {
        return !list;
      },
      // Disable .fire
      // Also disable .add unless we have memory (since it would have no effect)
      // Abort any pending executions
      lock: function lock() {
        _locked = queue = [];

        if (!memory && !firing) {
          list = memory = "";
        }

        return this;
      },
      locked: function locked() {
        return !!_locked;
      },
      // Call all callbacks with the given context and arguments
      fireWith: function fireWith(context, args) {
        if (!_locked) {
          args = args || [];
          args = [context, args.slice ? args.slice() : args];
          queue.push(args);

          if (!firing) {
            fire();
          }
        }

        return this;
      },
      // Call all the callbacks with the given arguments
      fire: function fire() {
        self.fireWith(this, arguments);
        return this;
      },
      // To know if the callbacks have already been called at least once
      fired: function fired() {
        return !!_fired;
      }
    };

    return self;
  };

  function Identity(v) {
    return v;
  }

  function Thrower(ex) {
    throw ex;
  }

  function adoptValue(value, resolve, reject, noValue) {
    var method;

    try {
      // Check for promise aspect first to privilege synchronous behavior
      if (value && isFunction(method = value.promise)) {
        method.call(value).done(resolve).fail(reject); // Other thenables
      } else if (value && isFunction(method = value.then)) {
        method.call(value, resolve, reject); // Other non-thenables
      } else {
        // Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
        // * false: [ value ].slice( 0 ) => resolve( value )
        // * true: [ value ].slice( 1 ) => resolve()
        resolve.apply(undefined, [value].slice(noValue));
      } // For Promises/A+, convert exceptions into rejections
      // Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
      // Deferred#then to conditionally suppress rejection.

    } catch (value) {
      // Support: Android 4.0 only
      // Strict mode functions invoked without .call/.apply get global-object context
      reject.apply(undefined, [value]);
    }
  }

  jQuery.extend({
    Deferred: function Deferred(func) {
      var tuples = [// action, add listener, callbacks,
      // ... .then handlers, argument index, [final state]
      ["notify", "progress", jQuery.Callbacks("memory"), jQuery.Callbacks("memory"), 2], ["resolve", "done", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), 1, "rejected"]],
          _state = "pending",
          _promise = {
        state: function state() {
          return _state;
        },
        always: function always() {
          deferred.done(arguments).fail(arguments);
          return this;
        },
        "catch": function _catch(fn) {
          return _promise.then(null, fn);
        },
        // Keep pipe for back-compat
        pipe: function pipe()
        /* fnDone, fnFail, fnProgress */
        {
          var fns = arguments;
          return jQuery.Deferred(function (newDefer) {
            jQuery.each(tuples, function (_i, tuple) {
              // Map tuples (progress, done, fail) to arguments (done, fail, progress)
              var fn = isFunction(fns[tuple[4]]) && fns[tuple[4]]; // deferred.progress(function() { bind to newDefer or newDefer.notify })
              // deferred.done(function() { bind to newDefer or newDefer.resolve })
              // deferred.fail(function() { bind to newDefer or newDefer.reject })

              deferred[tuple[1]](function () {
                var returned = fn && fn.apply(this, arguments);

                if (returned && isFunction(returned.promise)) {
                  returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);
                } else {
                  newDefer[tuple[0] + "With"](this, fn ? [returned] : arguments);
                }
              });
            });
            fns = null;
          }).promise();
        },
        then: function then(onFulfilled, onRejected, onProgress) {
          var maxDepth = 0;

          function resolve(depth, deferred, handler, special) {
            return function () {
              var that = this,
                  args = arguments,
                  mightThrow = function mightThrow() {
                var returned, then; // Support: Promises/A+ section 2.3.3.3.3
                // https://promisesaplus.com/#point-59
                // Ignore double-resolution attempts

                if (depth < maxDepth) {
                  return;
                }

                returned = handler.apply(that, args); // Support: Promises/A+ section 2.3.1
                // https://promisesaplus.com/#point-48

                if (returned === deferred.promise()) {
                  throw new TypeError("Thenable self-resolution");
                } // Support: Promises/A+ sections 2.3.3.1, 3.5
                // https://promisesaplus.com/#point-54
                // https://promisesaplus.com/#point-75
                // Retrieve `then` only once


                then = returned && ( // Support: Promises/A+ section 2.3.4
                // https://promisesaplus.com/#point-64
                // Only check objects and functions for thenability
                _typeof(returned) === "object" || typeof returned === "function") && returned.then; // Handle a returned thenable

                if (isFunction(then)) {
                  // Special processors (notify) just wait for resolution
                  if (special) {
                    then.call(returned, resolve(maxDepth, deferred, Identity, special), resolve(maxDepth, deferred, Thrower, special)); // Normal processors (resolve) also hook into progress
                  } else {
                    // ...and disregard older resolution values
                    maxDepth++;
                    then.call(returned, resolve(maxDepth, deferred, Identity, special), resolve(maxDepth, deferred, Thrower, special), resolve(maxDepth, deferred, Identity, deferred.notifyWith));
                  } // Handle all other returned values

                } else {
                  // Only substitute handlers pass on context
                  // and multiple values (non-spec behavior)
                  if (handler !== Identity) {
                    that = undefined;
                    args = [returned];
                  } // Process the value(s)
                  // Default process is resolve


                  (special || deferred.resolveWith)(that, args);
                }
              },
                  // Only normal processors (resolve) catch and reject exceptions
              process = special ? mightThrow : function () {
                try {
                  mightThrow();
                } catch (e) {
                  if (jQuery.Deferred.exceptionHook) {
                    jQuery.Deferred.exceptionHook(e, process.stackTrace);
                  } // Support: Promises/A+ section 2.3.3.3.4.1
                  // https://promisesaplus.com/#point-61
                  // Ignore post-resolution exceptions


                  if (depth + 1 >= maxDepth) {
                    // Only substitute handlers pass on context
                    // and multiple values (non-spec behavior)
                    if (handler !== Thrower) {
                      that = undefined;
                      args = [e];
                    }

                    deferred.rejectWith(that, args);
                  }
                }
              }; // Support: Promises/A+ section 2.3.3.3.1
              // https://promisesaplus.com/#point-57
              // Re-resolve promises immediately to dodge false rejection from
              // subsequent errors


              if (depth) {
                process();
              } else {
                // Call an optional hook to record the stack, in case of exception
                // since it's otherwise lost when execution goes async
                if (jQuery.Deferred.getStackHook) {
                  process.stackTrace = jQuery.Deferred.getStackHook();
                }

                window.setTimeout(process);
              }
            };
          }

          return jQuery.Deferred(function (newDefer) {
            // progress_handlers.add( ... )
            tuples[0][3].add(resolve(0, newDefer, isFunction(onProgress) ? onProgress : Identity, newDefer.notifyWith)); // fulfilled_handlers.add( ... )

            tuples[1][3].add(resolve(0, newDefer, isFunction(onFulfilled) ? onFulfilled : Identity)); // rejected_handlers.add( ... )

            tuples[2][3].add(resolve(0, newDefer, isFunction(onRejected) ? onRejected : Thrower));
          }).promise();
        },
        // Get a promise for this deferred
        // If obj is provided, the promise aspect is added to the object
        promise: function promise(obj) {
          return obj != null ? jQuery.extend(obj, _promise) : _promise;
        }
      },
          deferred = {}; // Add list-specific methods

      jQuery.each(tuples, function (i, tuple) {
        var list = tuple[2],
            stateString = tuple[5]; // promise.progress = list.add
        // promise.done = list.add
        // promise.fail = list.add

        _promise[tuple[1]] = list.add; // Handle state

        if (stateString) {
          list.add(function () {
            // state = "resolved" (i.e., fulfilled)
            // state = "rejected"
            _state = stateString;
          }, // rejected_callbacks.disable
          // fulfilled_callbacks.disable
          tuples[3 - i][2].disable, // rejected_handlers.disable
          // fulfilled_handlers.disable
          tuples[3 - i][3].disable, // progress_callbacks.lock
          tuples[0][2].lock, // progress_handlers.lock
          tuples[0][3].lock);
        } // progress_handlers.fire
        // fulfilled_handlers.fire
        // rejected_handlers.fire


        list.add(tuple[3].fire); // deferred.notify = function() { deferred.notifyWith(...) }
        // deferred.resolve = function() { deferred.resolveWith(...) }
        // deferred.reject = function() { deferred.rejectWith(...) }

        deferred[tuple[0]] = function () {
          deferred[tuple[0] + "With"](this === deferred ? undefined : this, arguments);
          return this;
        }; // deferred.notifyWith = list.fireWith
        // deferred.resolveWith = list.fireWith
        // deferred.rejectWith = list.fireWith


        deferred[tuple[0] + "With"] = list.fireWith;
      }); // Make the deferred a promise

      _promise.promise(deferred); // Call given func if any


      if (func) {
        func.call(deferred, deferred);
      } // All done!


      return deferred;
    },
    // Deferred helper
    when: function when(singleValue) {
      var // count of uncompleted subordinates
      remaining = arguments.length,
          // count of unprocessed arguments
      i = remaining,
          // subordinate fulfillment data
      resolveContexts = Array(i),
          resolveValues = _slice.call(arguments),
          // the master Deferred
      master = jQuery.Deferred(),
          // subordinate callback factory
      updateFunc = function updateFunc(i) {
        return function (value) {
          resolveContexts[i] = this;
          resolveValues[i] = arguments.length > 1 ? _slice.call(arguments) : value;

          if (! --remaining) {
            master.resolveWith(resolveContexts, resolveValues);
          }
        };
      }; // Single- and empty arguments are adopted like Promise.resolve


      if (remaining <= 1) {
        adoptValue(singleValue, master.done(updateFunc(i)).resolve, master.reject, !remaining); // Use .then() to unwrap secondary thenables (cf. gh-3000)

        if (master.state() === "pending" || isFunction(resolveValues[i] && resolveValues[i].then)) {
          return master.then();
        }
      } // Multiple arguments are aggregated like Promise.all array elements


      while (i--) {
        adoptValue(resolveValues[i], updateFunc(i), master.reject);
      }

      return master.promise();
    }
  }); // These usually indicate a programmer mistake during development,
  // warn about them ASAP rather than swallowing them by default.

  var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

  jQuery.Deferred.exceptionHook = function (error, stack) {
    // Support: IE 8 - 9 only
    // Console exists when dev tools are open, which can happen at any time
    if (window.console && window.console.warn && error && rerrorNames.test(error.name)) {
      window.console.warn("jQuery.Deferred exception: " + error.message, error.stack, stack);
    }
  };

  jQuery.readyException = function (error) {
    window.setTimeout(function () {
      throw error;
    });
  }; // The deferred used on DOM ready


  var readyList = jQuery.Deferred();

  jQuery.fn.ready = function (fn) {
    readyList.then(fn) // Wrap jQuery.readyException in a function so that the lookup
    // happens at the time of error handling instead of callback
    // registration.
    ["catch"](function (error) {
      jQuery.readyException(error);
    });
    return this;
  };

  jQuery.extend({
    // Is the DOM ready to be used? Set to true once it occurs.
    isReady: false,
    // A counter to track how many items to wait for before
    // the ready event fires. See #6781
    readyWait: 1,
    // Handle when the DOM is ready
    ready: function ready(wait) {
      // Abort if there are pending holds or we're already ready
      if (wait === true ? --jQuery.readyWait : jQuery.isReady) {
        return;
      } // Remember that the DOM is ready


      jQuery.isReady = true; // If a normal DOM Ready event fired, decrement, and wait if need be

      if (wait !== true && --jQuery.readyWait > 0) {
        return;
      } // If there are functions bound, to execute


      readyList.resolveWith(document, [jQuery]);
    }
  });
  jQuery.ready.then = readyList.then; // The ready event handler and self cleanup method

  function completed() {
    document.removeEventListener("DOMContentLoaded", completed);
    window.removeEventListener("load", completed);
    jQuery.ready();
  } // Catch cases where $(document).ready() is called
  // after the browser event has already occurred.
  // Support: IE <=9 - 10 only
  // Older IE sometimes signals "interactive" too soon


  if (document.readyState === "complete" || document.readyState !== "loading" && !document.documentElement.doScroll) {
    // Handle it asynchronously to allow scripts the opportunity to delay ready
    window.setTimeout(jQuery.ready);
  } else {
    // Use the handy event callback
    document.addEventListener("DOMContentLoaded", completed); // A fallback to window.onload, that will always work

    window.addEventListener("load", completed);
  } // Multifunctional method to get and set values of a collection
  // The value/s can optionally be executed if it's a function


  var access = function access(elems, fn, key, value, chainable, emptyGet, raw) {
    var i = 0,
        len = elems.length,
        bulk = key == null; // Sets many values

    if (toType(key) === "object") {
      chainable = true;

      for (i in key) {
        access(elems, fn, i, key[i], true, emptyGet, raw);
      } // Sets one value

    } else if (value !== undefined) {
      chainable = true;

      if (!isFunction(value)) {
        raw = true;
      }

      if (bulk) {
        // Bulk operations run against the entire set
        if (raw) {
          fn.call(elems, value);
          fn = null; // ...except when executing function values
        } else {
          bulk = fn;

          fn = function fn(elem, _key, value) {
            return bulk.call(jQuery(elem), value);
          };
        }
      }

      if (fn) {
        for (; i < len; i++) {
          fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key)));
        }
      }
    }

    if (chainable) {
      return elems;
    } // Gets


    if (bulk) {
      return fn.call(elems);
    }

    return len ? fn(elems[0], key) : emptyGet;
  }; // Matches dashed string for camelizing


  var rmsPrefix = /^-ms-/,
      rdashAlpha = /-([a-z])/g; // Used by camelCase as callback to replace()

  function fcamelCase(_all, letter) {
    return letter.toUpperCase();
  } // Convert dashed to camelCase; used by the css and data modules
  // Support: IE <=9 - 11, Edge 12 - 15
  // Microsoft forgot to hump their vendor prefix (#9572)


  function camelCase(string) {
    return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
  }

  var acceptData = function acceptData(owner) {
    // Accepts only:
    //  - Node
    //    - Node.ELEMENT_NODE
    //    - Node.DOCUMENT_NODE
    //  - Object
    //    - Any
    return owner.nodeType === 1 || owner.nodeType === 9 || !+owner.nodeType;
  };

  function Data() {
    this.expando = jQuery.expando + Data.uid++;
  }

  Data.uid = 1;
  Data.prototype = {
    cache: function cache(owner) {
      // Check if the owner object already has a cache
      var value = owner[this.expando]; // If not, create one

      if (!value) {
        value = {}; // We can accept data for non-element nodes in modern browsers,
        // but we should not, see #8335.
        // Always return an empty object.

        if (acceptData(owner)) {
          // If it is a node unlikely to be stringify-ed or looped over
          // use plain assignment
          if (owner.nodeType) {
            owner[this.expando] = value; // Otherwise secure it in a non-enumerable property
            // configurable must be true to allow the property to be
            // deleted when data is removed
          } else {
            Object.defineProperty(owner, this.expando, {
              value: value,
              configurable: true
            });
          }
        }
      }

      return value;
    },
    set: function set(owner, data, value) {
      var prop,
          cache = this.cache(owner); // Handle: [ owner, key, value ] args
      // Always use camelCase key (gh-2257)

      if (typeof data === "string") {
        cache[camelCase(data)] = value; // Handle: [ owner, { properties } ] args
      } else {
        // Copy the properties one-by-one to the cache object
        for (prop in data) {
          cache[camelCase(prop)] = data[prop];
        }
      }

      return cache;
    },
    get: function get(owner, key) {
      return key === undefined ? this.cache(owner) : // Always use camelCase key (gh-2257)
      owner[this.expando] && owner[this.expando][camelCase(key)];
    },
    access: function access(owner, key, value) {
      // In cases where either:
      //
      //   1. No key was specified
      //   2. A string key was specified, but no value provided
      //
      // Take the "read" path and allow the get method to determine
      // which value to return, respectively either:
      //
      //   1. The entire cache object
      //   2. The data stored at the key
      //
      if (key === undefined || key && typeof key === "string" && value === undefined) {
        return this.get(owner, key);
      } // When the key is not a string, or both a key and value
      // are specified, set or extend (existing objects) with either:
      //
      //   1. An object of properties
      //   2. A key and value
      //


      this.set(owner, key, value); // Since the "set" path can have two possible entry points
      // return the expected data based on which path was taken[*]

      return value !== undefined ? value : key;
    },
    remove: function remove(owner, key) {
      var i,
          cache = owner[this.expando];

      if (cache === undefined) {
        return;
      }

      if (key !== undefined) {
        // Support array or space separated string of keys
        if (Array.isArray(key)) {
          // If key is an array of keys...
          // We always set camelCase keys, so remove that.
          key = key.map(camelCase);
        } else {
          key = camelCase(key); // If a key with the spaces exists, use it.
          // Otherwise, create an array by matching non-whitespace

          key = key in cache ? [key] : key.match(rnothtmlwhite) || [];
        }

        i = key.length;

        while (i--) {
          delete cache[key[i]];
        }
      } // Remove the expando if there's no more data


      if (key === undefined || jQuery.isEmptyObject(cache)) {
        // Support: Chrome <=35 - 45
        // Webkit & Blink performance suffers when deleting properties
        // from DOM nodes, so set to undefined instead
        // https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
        if (owner.nodeType) {
          owner[this.expando] = undefined;
        } else {
          delete owner[this.expando];
        }
      }
    },
    hasData: function hasData(owner) {
      var cache = owner[this.expando];
      return cache !== undefined && !jQuery.isEmptyObject(cache);
    }
  };
  var dataPriv = new Data();
  var dataUser = new Data(); //	Implementation Summary
  //
  //	1. Enforce API surface and semantic compatibility with 1.9.x branch
  //	2. Improve the module's maintainability by reducing the storage
  //		paths to a single mechanism.
  //	3. Use the same single mechanism to support "private" and "user" data.
  //	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
  //	5. Avoid exposing implementation details on user objects (eg. expando properties)
  //	6. Provide a clear path for implementation upgrade to WeakMap in 2014

  var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      rmultiDash = /[A-Z]/g;

  function getData(data) {
    if (data === "true") {
      return true;
    }

    if (data === "false") {
      return false;
    }

    if (data === "null") {
      return null;
    } // Only convert to a number if it doesn't change the string


    if (data === +data + "") {
      return +data;
    }

    if (rbrace.test(data)) {
      return JSON.parse(data);
    }

    return data;
  }

  function dataAttr(elem, key, data) {
    var name; // If nothing was found internally, try to fetch any
    // data from the HTML5 data-* attribute

    if (data === undefined && elem.nodeType === 1) {
      name = "data-" + key.replace(rmultiDash, "-$&").toLowerCase();
      data = elem.getAttribute(name);

      if (typeof data === "string") {
        try {
          data = getData(data);
        } catch (e) {} // Make sure we set the data so it isn't changed later


        dataUser.set(elem, key, data);
      } else {
        data = undefined;
      }
    }

    return data;
  }

  jQuery.extend({
    hasData: function hasData(elem) {
      return dataUser.hasData(elem) || dataPriv.hasData(elem);
    },
    data: function data(elem, name, _data) {
      return dataUser.access(elem, name, _data);
    },
    removeData: function removeData(elem, name) {
      dataUser.remove(elem, name);
    },
    // TODO: Now that all calls to _data and _removeData have been replaced
    // with direct calls to dataPriv methods, these can be deprecated.
    _data: function _data(elem, name, data) {
      return dataPriv.access(elem, name, data);
    },
    _removeData: function _removeData(elem, name) {
      dataPriv.remove(elem, name);
    }
  });
  jQuery.fn.extend({
    data: function data(key, value) {
      var i,
          name,
          data,
          elem = this[0],
          attrs = elem && elem.attributes; // Gets all values

      if (key === undefined) {
        if (this.length) {
          data = dataUser.get(elem);

          if (elem.nodeType === 1 && !dataPriv.get(elem, "hasDataAttrs")) {
            i = attrs.length;

            while (i--) {
              // Support: IE 11 only
              // The attrs elements can be null (#14894)
              if (attrs[i]) {
                name = attrs[i].name;

                if (name.indexOf("data-") === 0) {
                  name = camelCase(name.slice(5));
                  dataAttr(elem, name, data[name]);
                }
              }
            }

            dataPriv.set(elem, "hasDataAttrs", true);
          }
        }

        return data;
      } // Sets multiple values


      if (_typeof(key) === "object") {
        return this.each(function () {
          dataUser.set(this, key);
        });
      }

      return access(this, function (value) {
        var data; // The calling jQuery object (element matches) is not empty
        // (and therefore has an element appears at this[ 0 ]) and the
        // `value` parameter was not undefined. An empty jQuery object
        // will result in `undefined` for elem = this[ 0 ] which will
        // throw an exception if an attempt to read a data cache is made.

        if (elem && value === undefined) {
          // Attempt to get data from the cache
          // The key will always be camelCased in Data
          data = dataUser.get(elem, key);

          if (data !== undefined) {
            return data;
          } // Attempt to "discover" the data in
          // HTML5 custom data-* attrs


          data = dataAttr(elem, key);

          if (data !== undefined) {
            return data;
          } // We tried really hard, but the data doesn't exist.


          return;
        } // Set the data...


        this.each(function () {
          // We always store the camelCased key
          dataUser.set(this, key, value);
        });
      }, null, value, arguments.length > 1, null, true);
    },
    removeData: function removeData(key) {
      return this.each(function () {
        dataUser.remove(this, key);
      });
    }
  });
  jQuery.extend({
    queue: function queue(elem, type, data) {
      var queue;

      if (elem) {
        type = (type || "fx") + "queue";
        queue = dataPriv.get(elem, type); // Speed up dequeue by getting out quickly if this is just a lookup

        if (data) {
          if (!queue || Array.isArray(data)) {
            queue = dataPriv.access(elem, type, jQuery.makeArray(data));
          } else {
            queue.push(data);
          }
        }

        return queue || [];
      }
    },
    dequeue: function dequeue(elem, type) {
      type = type || "fx";

      var queue = jQuery.queue(elem, type),
          startLength = queue.length,
          fn = queue.shift(),
          hooks = jQuery._queueHooks(elem, type),
          next = function next() {
        jQuery.dequeue(elem, type);
      }; // If the fx queue is dequeued, always remove the progress sentinel


      if (fn === "inprogress") {
        fn = queue.shift();
        startLength--;
      }

      if (fn) {
        // Add a progress sentinel to prevent the fx queue from being
        // automatically dequeued
        if (type === "fx") {
          queue.unshift("inprogress");
        } // Clear up the last queue stop function


        delete hooks.stop;
        fn.call(elem, next, hooks);
      }

      if (!startLength && hooks) {
        hooks.empty.fire();
      }
    },
    // Not public - generate a queueHooks object, or return the current one
    _queueHooks: function _queueHooks(elem, type) {
      var key = type + "queueHooks";
      return dataPriv.get(elem, key) || dataPriv.access(elem, key, {
        empty: jQuery.Callbacks("once memory").add(function () {
          dataPriv.remove(elem, [type + "queue", key]);
        })
      });
    }
  });
  jQuery.fn.extend({
    queue: function queue(type, data) {
      var setter = 2;

      if (typeof type !== "string") {
        data = type;
        type = "fx";
        setter--;
      }

      if (arguments.length < setter) {
        return jQuery.queue(this[0], type);
      }

      return data === undefined ? this : this.each(function () {
        var queue = jQuery.queue(this, type, data); // Ensure a hooks for this queue

        jQuery._queueHooks(this, type);

        if (type === "fx" && queue[0] !== "inprogress") {
          jQuery.dequeue(this, type);
        }
      });
    },
    dequeue: function dequeue(type) {
      return this.each(function () {
        jQuery.dequeue(this, type);
      });
    },
    clearQueue: function clearQueue(type) {
      return this.queue(type || "fx", []);
    },
    // Get a promise resolved when queues of a certain type
    // are emptied (fx is the type by default)
    promise: function promise(type, obj) {
      var tmp,
          count = 1,
          defer = jQuery.Deferred(),
          elements = this,
          i = this.length,
          resolve = function resolve() {
        if (! --count) {
          defer.resolveWith(elements, [elements]);
        }
      };

      if (typeof type !== "string") {
        obj = type;
        type = undefined;
      }

      type = type || "fx";

      while (i--) {
        tmp = dataPriv.get(elements[i], type + "queueHooks");

        if (tmp && tmp.empty) {
          count++;
          tmp.empty.add(resolve);
        }
      }

      resolve();
      return defer.promise(obj);
    }
  });
  var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
  var rcssNum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i");
  var cssExpand = ["Top", "Right", "Bottom", "Left"];
  var documentElement = document.documentElement;

  var isAttached = function isAttached(elem) {
    return jQuery.contains(elem.ownerDocument, elem);
  },
      composed = {
    composed: true
  }; // Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only
  // Check attachment across shadow DOM boundaries when possible (gh-3504)
  // Support: iOS 10.0-10.2 only
  // Early iOS 10 versions support `attachShadow` but not `getRootNode`,
  // leading to errors. We need to check for `getRootNode`.


  if (documentElement.getRootNode) {
    isAttached = function isAttached(elem) {
      return jQuery.contains(elem.ownerDocument, elem) || elem.getRootNode(composed) === elem.ownerDocument;
    };
  }

  var isHiddenWithinTree = function isHiddenWithinTree(elem, el) {
    // isHiddenWithinTree might be called from jQuery#filter function;
    // in that case, element will be second argument
    elem = el || elem; // Inline style trumps all

    return elem.style.display === "none" || elem.style.display === "" && // Otherwise, check computed style
    // Support: Firefox <=43 - 45
    // Disconnected elements can have computed display: none, so first confirm that elem is
    // in the document.
    isAttached(elem) && jQuery.css(elem, "display") === "none";
  };

  function adjustCSS(elem, prop, valueParts, tween) {
    var adjusted,
        scale,
        maxIterations = 20,
        currentValue = tween ? function () {
      return tween.cur();
    } : function () {
      return jQuery.css(elem, prop, "");
    },
        initial = currentValue(),
        unit = valueParts && valueParts[3] || (jQuery.cssNumber[prop] ? "" : "px"),
        // Starting value computation is required for potential unit mismatches
    initialInUnit = elem.nodeType && (jQuery.cssNumber[prop] || unit !== "px" && +initial) && rcssNum.exec(jQuery.css(elem, prop));

    if (initialInUnit && initialInUnit[3] !== unit) {
      // Support: Firefox <=54
      // Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
      initial = initial / 2; // Trust units reported by jQuery.css

      unit = unit || initialInUnit[3]; // Iteratively approximate from a nonzero starting point

      initialInUnit = +initial || 1;

      while (maxIterations--) {
        // Evaluate and update our best guess (doubling guesses that zero out).
        // Finish if the scale equals or crosses 1 (making the old*new product non-positive).
        jQuery.style(elem, prop, initialInUnit + unit);

        if ((1 - scale) * (1 - (scale = currentValue() / initial || 0.5)) <= 0) {
          maxIterations = 0;
        }

        initialInUnit = initialInUnit / scale;
      }

      initialInUnit = initialInUnit * 2;
      jQuery.style(elem, prop, initialInUnit + unit); // Make sure we update the tween properties later on

      valueParts = valueParts || [];
    }

    if (valueParts) {
      initialInUnit = +initialInUnit || +initial || 0; // Apply relative offset (+=/-=) if specified

      adjusted = valueParts[1] ? initialInUnit + (valueParts[1] + 1) * valueParts[2] : +valueParts[2];

      if (tween) {
        tween.unit = unit;
        tween.start = initialInUnit;
        tween.end = adjusted;
      }
    }

    return adjusted;
  }

  var defaultDisplayMap = {};

  function getDefaultDisplay(elem) {
    var temp,
        doc = elem.ownerDocument,
        nodeName = elem.nodeName,
        display = defaultDisplayMap[nodeName];

    if (display) {
      return display;
    }

    temp = doc.body.appendChild(doc.createElement(nodeName));
    display = jQuery.css(temp, "display");
    temp.parentNode.removeChild(temp);

    if (display === "none") {
      display = "block";
    }

    defaultDisplayMap[nodeName] = display;
    return display;
  }

  function showHide(elements, show) {
    var display,
        elem,
        values = [],
        index = 0,
        length = elements.length; // Determine new display value for elements that need to change

    for (; index < length; index++) {
      elem = elements[index];

      if (!elem.style) {
        continue;
      }

      display = elem.style.display;

      if (show) {
        // Since we force visibility upon cascade-hidden elements, an immediate (and slow)
        // check is required in this first loop unless we have a nonempty display value (either
        // inline or about-to-be-restored)
        if (display === "none") {
          values[index] = dataPriv.get(elem, "display") || null;

          if (!values[index]) {
            elem.style.display = "";
          }
        }

        if (elem.style.display === "" && isHiddenWithinTree(elem)) {
          values[index] = getDefaultDisplay(elem);
        }
      } else {
        if (display !== "none") {
          values[index] = "none"; // Remember what we're overwriting

          dataPriv.set(elem, "display", display);
        }
      }
    } // Set the display of the elements in a second loop to avoid constant reflow


    for (index = 0; index < length; index++) {
      if (values[index] != null) {
        elements[index].style.display = values[index];
      }
    }

    return elements;
  }

  jQuery.fn.extend({
    show: function show() {
      return showHide(this, true);
    },
    hide: function hide() {
      return showHide(this);
    },
    toggle: function toggle(state) {
      if (typeof state === "boolean") {
        return state ? this.show() : this.hide();
      }

      return this.each(function () {
        if (isHiddenWithinTree(this)) {
          jQuery(this).show();
        } else {
          jQuery(this).hide();
        }
      });
    }
  });
  var rcheckableType = /^(?:checkbox|radio)$/i;
  var rtagName = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i;
  var rscriptType = /^$|^module$|\/(?:java|ecma)script/i;

  (function () {
    var fragment = document.createDocumentFragment(),
        div = fragment.appendChild(document.createElement("div")),
        input = document.createElement("input"); // Support: Android 4.0 - 4.3 only
    // Check state lost if the name is set (#11217)
    // Support: Windows Web Apps (WWA)
    // `name` and `type` must use .setAttribute for WWA (#14901)

    input.setAttribute("type", "radio");
    input.setAttribute("checked", "checked");
    input.setAttribute("name", "t");
    div.appendChild(input); // Support: Android <=4.1 only
    // Older WebKit doesn't clone checked state correctly in fragments

    support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked; // Support: IE <=11 only
    // Make sure textarea (and checkbox) defaultValue is properly cloned

    div.innerHTML = "<textarea>x</textarea>";
    support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue; // Support: IE <=9 only
    // IE <=9 replaces <option> tags with their contents when inserted outside of
    // the select element.

    div.innerHTML = "<option></option>";
    support.option = !!div.lastChild;
  })(); // We have to close these tags to support XHTML (#13200)


  var wrapMap = {
    // XHTML parsers do not magically insert elements in the
    // same way that tag soup parsers do. So we cannot shorten
    // this by omitting <tbody> or other required elements.
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""]
  };
  wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
  wrapMap.th = wrapMap.td; // Support: IE <=9 only

  if (!support.option) {
    wrapMap.optgroup = wrapMap.option = [1, "<select multiple='multiple'>", "</select>"];
  }

  function getAll(context, tag) {
    // Support: IE <=9 - 11 only
    // Use typeof to avoid zero-argument method invocation on host objects (#15151)
    var ret;

    if (typeof context.getElementsByTagName !== "undefined") {
      ret = context.getElementsByTagName(tag || "*");
    } else if (typeof context.querySelectorAll !== "undefined") {
      ret = context.querySelectorAll(tag || "*");
    } else {
      ret = [];
    }

    if (tag === undefined || tag && nodeName(context, tag)) {
      return jQuery.merge([context], ret);
    }

    return ret;
  } // Mark scripts as having already been evaluated


  function setGlobalEval(elems, refElements) {
    var i = 0,
        l = elems.length;

    for (; i < l; i++) {
      dataPriv.set(elems[i], "globalEval", !refElements || dataPriv.get(refElements[i], "globalEval"));
    }
  }

  var rhtml = /<|&#?\w+;/;

  function buildFragment(elems, context, scripts, selection, ignored) {
    var elem,
        tmp,
        tag,
        wrap,
        attached,
        j,
        fragment = context.createDocumentFragment(),
        nodes = [],
        i = 0,
        l = elems.length;

    for (; i < l; i++) {
      elem = elems[i];

      if (elem || elem === 0) {
        // Add nodes directly
        if (toType(elem) === "object") {
          // Support: Android <=4.0 only, PhantomJS 1 only
          // push.apply(_, arraylike) throws on ancient WebKit
          jQuery.merge(nodes, elem.nodeType ? [elem] : elem); // Convert non-html into a text node
        } else if (!rhtml.test(elem)) {
          nodes.push(context.createTextNode(elem)); // Convert html into DOM nodes
        } else {
          tmp = tmp || fragment.appendChild(context.createElement("div")); // Deserialize a standard representation

          tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();
          wrap = wrapMap[tag] || wrapMap._default;
          tmp.innerHTML = wrap[1] + jQuery.htmlPrefilter(elem) + wrap[2]; // Descend through wrappers to the right content

          j = wrap[0];

          while (j--) {
            tmp = tmp.lastChild;
          } // Support: Android <=4.0 only, PhantomJS 1 only
          // push.apply(_, arraylike) throws on ancient WebKit


          jQuery.merge(nodes, tmp.childNodes); // Remember the top-level container

          tmp = fragment.firstChild; // Ensure the created nodes are orphaned (#12392)

          tmp.textContent = "";
        }
      }
    } // Remove wrapper from fragment


    fragment.textContent = "";
    i = 0;

    while (elem = nodes[i++]) {
      // Skip elements already in the context collection (trac-4087)
      if (selection && jQuery.inArray(elem, selection) > -1) {
        if (ignored) {
          ignored.push(elem);
        }

        continue;
      }

      attached = isAttached(elem); // Append to fragment

      tmp = getAll(fragment.appendChild(elem), "script"); // Preserve script evaluation history

      if (attached) {
        setGlobalEval(tmp);
      } // Capture executables


      if (scripts) {
        j = 0;

        while (elem = tmp[j++]) {
          if (rscriptType.test(elem.type || "")) {
            scripts.push(elem);
          }
        }
      }
    }

    return fragment;
  }

  var rkeyEvent = /^key/,
      rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

  function returnTrue() {
    return true;
  }

  function returnFalse() {
    return false;
  } // Support: IE <=9 - 11+
  // focus() and blur() are asynchronous, except when they are no-op.
  // So expect focus to be synchronous when the element is already active,
  // and blur to be synchronous when the element is not already active.
  // (focus and blur are always synchronous in other supported browsers,
  // this just defines when we can count on it).


  function expectSync(elem, type) {
    return elem === safeActiveElement() === (type === "focus");
  } // Support: IE <=9 only
  // Accessing document.activeElement can throw unexpectedly
  // https://bugs.jquery.com/ticket/13393


  function safeActiveElement() {
    try {
      return document.activeElement;
    } catch (err) {}
  }

  function _on(elem, types, selector, data, fn, one) {
    var origFn, type; // Types can be a map of types/handlers

    if (_typeof(types) === "object") {
      // ( types-Object, selector, data )
      if (typeof selector !== "string") {
        // ( types-Object, data )
        data = data || selector;
        selector = undefined;
      }

      for (type in types) {
        _on(elem, type, selector, data, types[type], one);
      }

      return elem;
    }

    if (data == null && fn == null) {
      // ( types, fn )
      fn = selector;
      data = selector = undefined;
    } else if (fn == null) {
      if (typeof selector === "string") {
        // ( types, selector, fn )
        fn = data;
        data = undefined;
      } else {
        // ( types, data, fn )
        fn = data;
        data = selector;
        selector = undefined;
      }
    }

    if (fn === false) {
      fn = returnFalse;
    } else if (!fn) {
      return elem;
    }

    if (one === 1) {
      origFn = fn;

      fn = function fn(event) {
        // Can use an empty set, since event contains the info
        jQuery().off(event);
        return origFn.apply(this, arguments);
      }; // Use same guid so caller can remove using origFn


      fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
    }

    return elem.each(function () {
      jQuery.event.add(this, types, fn, data, selector);
    });
  }
  /*
   * Helper functions for managing events -- not part of the public interface.
   * Props to Dean Edwards' addEvent library for many of the ideas.
   */


  jQuery.event = {
    global: {},
    add: function add(elem, types, handler, data, selector) {
      var handleObjIn,
          eventHandle,
          tmp,
          events,
          t,
          handleObj,
          special,
          handlers,
          type,
          namespaces,
          origType,
          elemData = dataPriv.get(elem); // Only attach events to objects that accept data

      if (!acceptData(elem)) {
        return;
      } // Caller can pass in an object of custom data in lieu of the handler


      if (handler.handler) {
        handleObjIn = handler;
        handler = handleObjIn.handler;
        selector = handleObjIn.selector;
      } // Ensure that invalid selectors throw exceptions at attach time
      // Evaluate against documentElement in case elem is a non-element node (e.g., document)


      if (selector) {
        jQuery.find.matchesSelector(documentElement, selector);
      } // Make sure that the handler has a unique ID, used to find/remove it later


      if (!handler.guid) {
        handler.guid = jQuery.guid++;
      } // Init the element's event structure and main handler, if this is the first


      if (!(events = elemData.events)) {
        events = elemData.events = Object.create(null);
      }

      if (!(eventHandle = elemData.handle)) {
        eventHandle = elemData.handle = function (e) {
          // Discard the second event of a jQuery.event.trigger() and
          // when an event is called after a page has unloaded
          return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ? jQuery.event.dispatch.apply(elem, arguments) : undefined;
        };
      } // Handle multiple events separated by a space


      types = (types || "").match(rnothtmlwhite) || [""];
      t = types.length;

      while (t--) {
        tmp = rtypenamespace.exec(types[t]) || [];
        type = origType = tmp[1];
        namespaces = (tmp[2] || "").split(".").sort(); // There *must* be a type, no attaching namespace-only handlers

        if (!type) {
          continue;
        } // If event changes its type, use the special event handlers for the changed type


        special = jQuery.event.special[type] || {}; // If selector defined, determine special event api type, otherwise given type

        type = (selector ? special.delegateType : special.bindType) || type; // Update special based on newly reset type

        special = jQuery.event.special[type] || {}; // handleObj is passed to all event handlers

        handleObj = jQuery.extend({
          type: type,
          origType: origType,
          data: data,
          handler: handler,
          guid: handler.guid,
          selector: selector,
          needsContext: selector && jQuery.expr.match.needsContext.test(selector),
          namespace: namespaces.join(".")
        }, handleObjIn); // Init the event handler queue if we're the first

        if (!(handlers = events[type])) {
          handlers = events[type] = [];
          handlers.delegateCount = 0; // Only use addEventListener if the special events handler returns false

          if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {
            if (elem.addEventListener) {
              elem.addEventListener(type, eventHandle);
            }
          }
        }

        if (special.add) {
          special.add.call(elem, handleObj);

          if (!handleObj.handler.guid) {
            handleObj.handler.guid = handler.guid;
          }
        } // Add to the element's handler list, delegates in front


        if (selector) {
          handlers.splice(handlers.delegateCount++, 0, handleObj);
        } else {
          handlers.push(handleObj);
        } // Keep track of which events have ever been used, for event optimization


        jQuery.event.global[type] = true;
      }
    },
    // Detach an event or set of events from an element
    remove: function remove(elem, types, handler, selector, mappedTypes) {
      var j,
          origCount,
          tmp,
          events,
          t,
          handleObj,
          special,
          handlers,
          type,
          namespaces,
          origType,
          elemData = dataPriv.hasData(elem) && dataPriv.get(elem);

      if (!elemData || !(events = elemData.events)) {
        return;
      } // Once for each type.namespace in types; type may be omitted


      types = (types || "").match(rnothtmlwhite) || [""];
      t = types.length;

      while (t--) {
        tmp = rtypenamespace.exec(types[t]) || [];
        type = origType = tmp[1];
        namespaces = (tmp[2] || "").split(".").sort(); // Unbind all events (on this namespace, if provided) for the element

        if (!type) {
          for (type in events) {
            jQuery.event.remove(elem, type + types[t], handler, selector, true);
          }

          continue;
        }

        special = jQuery.event.special[type] || {};
        type = (selector ? special.delegateType : special.bindType) || type;
        handlers = events[type] || [];
        tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)"); // Remove matching events

        origCount = j = handlers.length;

        while (j--) {
          handleObj = handlers[j];

          if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
            handlers.splice(j, 1);

            if (handleObj.selector) {
              handlers.delegateCount--;
            }

            if (special.remove) {
              special.remove.call(elem, handleObj);
            }
          }
        } // Remove generic event handler if we removed something and no more handlers exist
        // (avoids potential for endless recursion during removal of special event handlers)


        if (origCount && !handlers.length) {
          if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) {
            jQuery.removeEvent(elem, type, elemData.handle);
          }

          delete events[type];
        }
      } // Remove data and the expando if it's no longer used


      if (jQuery.isEmptyObject(events)) {
        dataPriv.remove(elem, "handle events");
      }
    },
    dispatch: function dispatch(nativeEvent) {
      var i,
          j,
          ret,
          matched,
          handleObj,
          handlerQueue,
          args = new Array(arguments.length),
          // Make a writable jQuery.Event from the native event object
      event = jQuery.event.fix(nativeEvent),
          handlers = (dataPriv.get(this, "events") || Object.create(null))[event.type] || [],
          special = jQuery.event.special[event.type] || {}; // Use the fix-ed jQuery.Event rather than the (read-only) native event

      args[0] = event;

      for (i = 1; i < arguments.length; i++) {
        args[i] = arguments[i];
      }

      event.delegateTarget = this; // Call the preDispatch hook for the mapped type, and let it bail if desired

      if (special.preDispatch && special.preDispatch.call(this, event) === false) {
        return;
      } // Determine handlers


      handlerQueue = jQuery.event.handlers.call(this, event, handlers); // Run delegates first; they may want to stop propagation beneath us

      i = 0;

      while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
        event.currentTarget = matched.elem;
        j = 0;

        while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) {
          // If the event is namespaced, then each handler is only invoked if it is
          // specially universal or its namespaces are a superset of the event's.
          if (!event.rnamespace || handleObj.namespace === false || event.rnamespace.test(handleObj.namespace)) {
            event.handleObj = handleObj;
            event.data = handleObj.data;
            ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);

            if (ret !== undefined) {
              if ((event.result = ret) === false) {
                event.preventDefault();
                event.stopPropagation();
              }
            }
          }
        }
      } // Call the postDispatch hook for the mapped type


      if (special.postDispatch) {
        special.postDispatch.call(this, event);
      }

      return event.result;
    },
    handlers: function handlers(event, _handlers) {
      var i,
          handleObj,
          sel,
          matchedHandlers,
          matchedSelectors,
          handlerQueue = [],
          delegateCount = _handlers.delegateCount,
          cur = event.target; // Find delegate handlers

      if (delegateCount && // Support: IE <=9
      // Black-hole SVG <use> instance trees (trac-13180)
      cur.nodeType && // Support: Firefox <=42
      // Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
      // https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
      // Support: IE 11 only
      // ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
      !(event.type === "click" && event.button >= 1)) {
        for (; cur !== this; cur = cur.parentNode || this) {
          // Don't check non-elements (#13208)
          // Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
          if (cur.nodeType === 1 && !(event.type === "click" && cur.disabled === true)) {
            matchedHandlers = [];
            matchedSelectors = {};

            for (i = 0; i < delegateCount; i++) {
              handleObj = _handlers[i]; // Don't conflict with Object.prototype properties (#13203)

              sel = handleObj.selector + " ";

              if (matchedSelectors[sel] === undefined) {
                matchedSelectors[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) > -1 : jQuery.find(sel, this, null, [cur]).length;
              }

              if (matchedSelectors[sel]) {
                matchedHandlers.push(handleObj);
              }
            }

            if (matchedHandlers.length) {
              handlerQueue.push({
                elem: cur,
                handlers: matchedHandlers
              });
            }
          }
        }
      } // Add the remaining (directly-bound) handlers


      cur = this;

      if (delegateCount < _handlers.length) {
        handlerQueue.push({
          elem: cur,
          handlers: _handlers.slice(delegateCount)
        });
      }

      return handlerQueue;
    },
    addProp: function addProp(name, hook) {
      Object.defineProperty(jQuery.Event.prototype, name, {
        enumerable: true,
        configurable: true,
        get: isFunction(hook) ? function () {
          if (this.originalEvent) {
            return hook(this.originalEvent);
          }
        } : function () {
          if (this.originalEvent) {
            return this.originalEvent[name];
          }
        },
        set: function set(value) {
          Object.defineProperty(this, name, {
            enumerable: true,
            configurable: true,
            writable: true,
            value: value
          });
        }
      });
    },
    fix: function fix(originalEvent) {
      return originalEvent[jQuery.expando] ? originalEvent : new jQuery.Event(originalEvent);
    },
    special: {
      load: {
        // Prevent triggered image.load events from bubbling to window.load
        noBubble: true
      },
      click: {
        // Utilize native event to ensure correct state for checkable inputs
        setup: function setup(data) {
          // For mutual compressibility with _default, replace `this` access with a local var.
          // `|| data` is dead code meant only to preserve the variable through minification.
          var el = this || data; // Claim the first handler

          if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) {
            // dataPriv.set( el, "click", ... )
            leverageNative(el, "click", returnTrue);
          } // Return false to allow normal processing in the caller


          return false;
        },
        trigger: function trigger(data) {
          // For mutual compressibility with _default, replace `this` access with a local var.
          // `|| data` is dead code meant only to preserve the variable through minification.
          var el = this || data; // Force setup before triggering a click

          if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) {
            leverageNative(el, "click");
          } // Return non-false to allow normal event-path propagation


          return true;
        },
        // For cross-browser consistency, suppress native .click() on links
        // Also prevent it if we're currently inside a leveraged native-event stack
        _default: function _default(event) {
          var target = event.target;
          return rcheckableType.test(target.type) && target.click && nodeName(target, "input") && dataPriv.get(target, "click") || nodeName(target, "a");
        }
      },
      beforeunload: {
        postDispatch: function postDispatch(event) {
          // Support: Firefox 20+
          // Firefox doesn't alert if the returnValue field is not set.
          if (event.result !== undefined && event.originalEvent) {
            event.originalEvent.returnValue = event.result;
          }
        }
      }
    }
  }; // Ensure the presence of an event listener that handles manually-triggered
  // synthetic events by interrupting progress until reinvoked in response to
  // *native* events that it fires directly, ensuring that state changes have
  // already occurred before other listeners are invoked.

  function leverageNative(el, type, expectSync) {
    // Missing expectSync indicates a trigger call, which must force setup through jQuery.event.add
    if (!expectSync) {
      if (dataPriv.get(el, type) === undefined) {
        jQuery.event.add(el, type, returnTrue);
      }

      return;
    } // Register the controller as a special universal handler for all event namespaces


    dataPriv.set(el, type, false);
    jQuery.event.add(el, type, {
      namespace: false,
      handler: function handler(event) {
        var notAsync,
            result,
            saved = dataPriv.get(this, type);

        if (event.isTrigger & 1 && this[type]) {
          // Interrupt processing of the outer synthetic .trigger()ed event
          // Saved data should be false in such cases, but might be a leftover capture object
          // from an async native handler (gh-4350)
          if (!saved.length) {
            // Store arguments for use when handling the inner native event
            // There will always be at least one argument (an event object), so this array
            // will not be confused with a leftover capture object.
            saved = _slice.call(arguments);
            dataPriv.set(this, type, saved); // Trigger the native event and capture its result
            // Support: IE <=9 - 11+
            // focus() and blur() are asynchronous

            notAsync = expectSync(this, type);
            this[type]();
            result = dataPriv.get(this, type);

            if (saved !== result || notAsync) {
              dataPriv.set(this, type, false);
            } else {
              result = {};
            }

            if (saved !== result) {
              // Cancel the outer synthetic event
              event.stopImmediatePropagation();
              event.preventDefault();
              return result.value;
            } // If this is an inner synthetic event for an event with a bubbling surrogate
            // (focus or blur), assume that the surrogate already propagated from triggering the
            // native event and prevent that from happening again here.
            // This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
            // bubbling surrogate propagates *after* the non-bubbling base), but that seems
            // less bad than duplication.

          } else if ((jQuery.event.special[type] || {}).delegateType) {
            event.stopPropagation();
          } // If this is a native event triggered above, everything is now in order
          // Fire an inner synthetic event with the original arguments

        } else if (saved.length) {
          // ...and capture the result
          dataPriv.set(this, type, {
            value: jQuery.event.trigger( // Support: IE <=9 - 11+
            // Extend with the prototype to reset the above stopImmediatePropagation()
            jQuery.extend(saved[0], jQuery.Event.prototype), saved.slice(1), this)
          }); // Abort handling of the native event

          event.stopImmediatePropagation();
        }
      }
    });
  }

  jQuery.removeEvent = function (elem, type, handle) {
    // This "if" is needed for plain objects
    if (elem.removeEventListener) {
      elem.removeEventListener(type, handle);
    }
  };

  jQuery.Event = function (src, props) {
    // Allow instantiation without the 'new' keyword
    if (!(this instanceof jQuery.Event)) {
      return new jQuery.Event(src, props);
    } // Event object


    if (src && src.type) {
      this.originalEvent = src;
      this.type = src.type; // Events bubbling up the document may have been marked as prevented
      // by a handler lower down the tree; reflect the correct value.

      this.isDefaultPrevented = src.defaultPrevented || src.defaultPrevented === undefined && // Support: Android <=2.3 only
      src.returnValue === false ? returnTrue : returnFalse; // Create target properties
      // Support: Safari <=6 - 7 only
      // Target should not be a text node (#504, #13143)

      this.target = src.target && src.target.nodeType === 3 ? src.target.parentNode : src.target;
      this.currentTarget = src.currentTarget;
      this.relatedTarget = src.relatedTarget; // Event type
    } else {
      this.type = src;
    } // Put explicitly provided properties onto the event object


    if (props) {
      jQuery.extend(this, props);
    } // Create a timestamp if incoming event doesn't have one


    this.timeStamp = src && src.timeStamp || Date.now(); // Mark it as fixed

    this[jQuery.expando] = true;
  }; // jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
  // https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html


  jQuery.Event.prototype = {
    constructor: jQuery.Event,
    isDefaultPrevented: returnFalse,
    isPropagationStopped: returnFalse,
    isImmediatePropagationStopped: returnFalse,
    isSimulated: false,
    preventDefault: function preventDefault() {
      var e = this.originalEvent;
      this.isDefaultPrevented = returnTrue;

      if (e && !this.isSimulated) {
        e.preventDefault();
      }
    },
    stopPropagation: function stopPropagation() {
      var e = this.originalEvent;
      this.isPropagationStopped = returnTrue;

      if (e && !this.isSimulated) {
        e.stopPropagation();
      }
    },
    stopImmediatePropagation: function stopImmediatePropagation() {
      var e = this.originalEvent;
      this.isImmediatePropagationStopped = returnTrue;

      if (e && !this.isSimulated) {
        e.stopImmediatePropagation();
      }

      this.stopPropagation();
    }
  }; // Includes all common event props including KeyEvent and MouseEvent specific props

  jQuery.each({
    altKey: true,
    bubbles: true,
    cancelable: true,
    changedTouches: true,
    ctrlKey: true,
    detail: true,
    eventPhase: true,
    metaKey: true,
    pageX: true,
    pageY: true,
    shiftKey: true,
    view: true,
    "char": true,
    code: true,
    charCode: true,
    key: true,
    keyCode: true,
    button: true,
    buttons: true,
    clientX: true,
    clientY: true,
    offsetX: true,
    offsetY: true,
    pointerId: true,
    pointerType: true,
    screenX: true,
    screenY: true,
    targetTouches: true,
    toElement: true,
    touches: true,
    which: function which(event) {
      var button = event.button; // Add which for key events

      if (event.which == null && rkeyEvent.test(event.type)) {
        return event.charCode != null ? event.charCode : event.keyCode;
      } // Add which for click: 1 === left; 2 === middle; 3 === right


      if (!event.which && button !== undefined && rmouseEvent.test(event.type)) {
        if (button & 1) {
          return 1;
        }

        if (button & 2) {
          return 3;
        }

        if (button & 4) {
          return 2;
        }

        return 0;
      }

      return event.which;
    }
  }, jQuery.event.addProp);
  jQuery.each({
    focus: "focusin",
    blur: "focusout"
  }, function (type, delegateType) {
    jQuery.event.special[type] = {
      // Utilize native event if possible so blur/focus sequence is correct
      setup: function setup() {
        // Claim the first handler
        // dataPriv.set( this, "focus", ... )
        // dataPriv.set( this, "blur", ... )
        leverageNative(this, type, expectSync); // Return false to allow normal processing in the caller

        return false;
      },
      trigger: function trigger() {
        // Force setup before trigger
        leverageNative(this, type); // Return non-false to allow normal event-path propagation

        return true;
      },
      delegateType: delegateType
    };
  }); // Create mouseenter/leave events using mouseover/out and event-time checks
  // so that event delegation works in jQuery.
  // Do the same for pointerenter/pointerleave and pointerover/pointerout
  //
  // Support: Safari 7 only
  // Safari sends mouseenter too often; see:
  // https://bugs.chromium.org/p/chromium/issues/detail?id=470258
  // for the description of the bug (it existed in older Chrome versions as well).

  jQuery.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function (orig, fix) {
    jQuery.event.special[orig] = {
      delegateType: fix,
      bindType: fix,
      handle: function handle(event) {
        var ret,
            target = this,
            related = event.relatedTarget,
            handleObj = event.handleObj; // For mouseenter/leave call the handler if related is outside the target.
        // NB: No relatedTarget if the mouse left/entered the browser window

        if (!related || related !== target && !jQuery.contains(target, related)) {
          event.type = handleObj.origType;
          ret = handleObj.handler.apply(this, arguments);
          event.type = fix;
        }

        return ret;
      }
    };
  });
  jQuery.fn.extend({
    on: function on(types, selector, data, fn) {
      return _on(this, types, selector, data, fn);
    },
    one: function one(types, selector, data, fn) {
      return _on(this, types, selector, data, fn, 1);
    },
    off: function off(types, selector, fn) {
      var handleObj, type;

      if (types && types.preventDefault && types.handleObj) {
        // ( event )  dispatched jQuery.Event
        handleObj = types.handleObj;
        jQuery(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler);
        return this;
      }

      if (_typeof(types) === "object") {
        // ( types-object [, selector] )
        for (type in types) {
          this.off(type, selector, types[type]);
        }

        return this;
      }

      if (selector === false || typeof selector === "function") {
        // ( types [, fn] )
        fn = selector;
        selector = undefined;
      }

      if (fn === false) {
        fn = returnFalse;
      }

      return this.each(function () {
        jQuery.event.remove(this, types, fn, selector);
      });
    }
  });
  var // Support: IE <=10 - 11, Edge 12 - 13 only
  // In IE/Edge using regex groups here causes severe slowdowns.
  // See https://connect.microsoft.com/IE/feedback/details/1736512/
  rnoInnerhtml = /<script|<style|<link/i,
      // checked="checked" or checked
  rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
      rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g; // Prefer a tbody over its parent table for containing new rows

  function manipulationTarget(elem, content) {
    if (nodeName(elem, "table") && nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr")) {
      return jQuery(elem).children("tbody")[0] || elem;
    }

    return elem;
  } // Replace/restore the type attribute of script elements for safe DOM manipulation


  function disableScript(elem) {
    elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
    return elem;
  }

  function restoreScript(elem) {
    if ((elem.type || "").slice(0, 5) === "true/") {
      elem.type = elem.type.slice(5);
    } else {
      elem.removeAttribute("type");
    }

    return elem;
  }

  function cloneCopyEvent(src, dest) {
    var i, l, type, pdataOld, udataOld, udataCur, events;

    if (dest.nodeType !== 1) {
      return;
    } // 1. Copy private data: events, handlers, etc.


    if (dataPriv.hasData(src)) {
      pdataOld = dataPriv.get(src);
      events = pdataOld.events;

      if (events) {
        dataPriv.remove(dest, "handle events");

        for (type in events) {
          for (i = 0, l = events[type].length; i < l; i++) {
            jQuery.event.add(dest, type, events[type][i]);
          }
        }
      }
    } // 2. Copy user data


    if (dataUser.hasData(src)) {
      udataOld = dataUser.access(src);
      udataCur = jQuery.extend({}, udataOld);
      dataUser.set(dest, udataCur);
    }
  } // Fix IE bugs, see support tests


  function fixInput(src, dest) {
    var nodeName = dest.nodeName.toLowerCase(); // Fails to persist the checked state of a cloned checkbox or radio button.

    if (nodeName === "input" && rcheckableType.test(src.type)) {
      dest.checked = src.checked; // Fails to return the selected option to the default selected state when cloning options
    } else if (nodeName === "input" || nodeName === "textarea") {
      dest.defaultValue = src.defaultValue;
    }
  }

  function domManip(collection, args, callback, ignored) {
    // Flatten any nested arrays
    args = flat(args);
    var fragment,
        first,
        scripts,
        hasScripts,
        node,
        doc,
        i = 0,
        l = collection.length,
        iNoClone = l - 1,
        value = args[0],
        valueIsFunction = isFunction(value); // We can't cloneNode fragments that contain checked, in WebKit

    if (valueIsFunction || l > 1 && typeof value === "string" && !support.checkClone && rchecked.test(value)) {
      return collection.each(function (index) {
        var self = collection.eq(index);

        if (valueIsFunction) {
          args[0] = value.call(this, index, self.html());
        }

        domManip(self, args, callback, ignored);
      });
    }

    if (l) {
      fragment = buildFragment(args, collection[0].ownerDocument, false, collection, ignored);
      first = fragment.firstChild;

      if (fragment.childNodes.length === 1) {
        fragment = first;
      } // Require either new content or an interest in ignored elements to invoke the callback


      if (first || ignored) {
        scripts = jQuery.map(getAll(fragment, "script"), disableScript);
        hasScripts = scripts.length; // Use the original fragment for the last item
        // instead of the first because it can end up
        // being emptied incorrectly in certain situations (#8070).

        for (; i < l; i++) {
          node = fragment;

          if (i !== iNoClone) {
            node = jQuery.clone(node, true, true); // Keep references to cloned scripts for later restoration

            if (hasScripts) {
              // Support: Android <=4.0 only, PhantomJS 1 only
              // push.apply(_, arraylike) throws on ancient WebKit
              jQuery.merge(scripts, getAll(node, "script"));
            }
          }

          callback.call(collection[i], node, i);
        }

        if (hasScripts) {
          doc = scripts[scripts.length - 1].ownerDocument; // Reenable scripts

          jQuery.map(scripts, restoreScript); // Evaluate executable scripts on first document insertion

          for (i = 0; i < hasScripts; i++) {
            node = scripts[i];

            if (rscriptType.test(node.type || "") && !dataPriv.access(node, "globalEval") && jQuery.contains(doc, node)) {
              if (node.src && (node.type || "").toLowerCase() !== "module") {
                // Optional AJAX dependency, but won't run scripts if not present
                if (jQuery._evalUrl && !node.noModule) {
                  jQuery._evalUrl(node.src, {
                    nonce: node.nonce || node.getAttribute("nonce")
                  }, doc);
                }
              } else {
                DOMEval(node.textContent.replace(rcleanScript, ""), node, doc);
              }
            }
          }
        }
      }
    }

    return collection;
  }

  function _remove(elem, selector, keepData) {
    var node,
        nodes = selector ? jQuery.filter(selector, elem) : elem,
        i = 0;

    for (; (node = nodes[i]) != null; i++) {
      if (!keepData && node.nodeType === 1) {
        jQuery.cleanData(getAll(node));
      }

      if (node.parentNode) {
        if (keepData && isAttached(node)) {
          setGlobalEval(getAll(node, "script"));
        }

        node.parentNode.removeChild(node);
      }
    }

    return elem;
  }

  jQuery.extend({
    htmlPrefilter: function htmlPrefilter(html) {
      return html;
    },
    clone: function clone(elem, dataAndEvents, deepDataAndEvents) {
      var i,
          l,
          srcElements,
          destElements,
          clone = elem.cloneNode(true),
          inPage = isAttached(elem); // Fix IE cloning issues

      if (!support.noCloneChecked && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem)) {
        // We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
        destElements = getAll(clone);
        srcElements = getAll(elem);

        for (i = 0, l = srcElements.length; i < l; i++) {
          fixInput(srcElements[i], destElements[i]);
        }
      } // Copy the events from the original to the clone


      if (dataAndEvents) {
        if (deepDataAndEvents) {
          srcElements = srcElements || getAll(elem);
          destElements = destElements || getAll(clone);

          for (i = 0, l = srcElements.length; i < l; i++) {
            cloneCopyEvent(srcElements[i], destElements[i]);
          }
        } else {
          cloneCopyEvent(elem, clone);
        }
      } // Preserve script evaluation history


      destElements = getAll(clone, "script");

      if (destElements.length > 0) {
        setGlobalEval(destElements, !inPage && getAll(elem, "script"));
      } // Return the cloned set


      return clone;
    },
    cleanData: function cleanData(elems) {
      var data,
          elem,
          type,
          special = jQuery.event.special,
          i = 0;

      for (; (elem = elems[i]) !== undefined; i++) {
        if (acceptData(elem)) {
          if (data = elem[dataPriv.expando]) {
            if (data.events) {
              for (type in data.events) {
                if (special[type]) {
                  jQuery.event.remove(elem, type); // This is a shortcut to avoid jQuery.event.remove's overhead
                } else {
                  jQuery.removeEvent(elem, type, data.handle);
                }
              }
            } // Support: Chrome <=35 - 45+
            // Assign undefined instead of using delete, see Data#remove


            elem[dataPriv.expando] = undefined;
          }

          if (elem[dataUser.expando]) {
            // Support: Chrome <=35 - 45+
            // Assign undefined instead of using delete, see Data#remove
            elem[dataUser.expando] = undefined;
          }
        }
      }
    }
  });
  jQuery.fn.extend({
    detach: function detach(selector) {
      return _remove(this, selector, true);
    },
    remove: function remove(selector) {
      return _remove(this, selector);
    },
    text: function text(value) {
      return access(this, function (value) {
        return value === undefined ? jQuery.text(this) : this.empty().each(function () {
          if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
            this.textContent = value;
          }
        });
      }, null, value, arguments.length);
    },
    append: function append() {
      return domManip(this, arguments, function (elem) {
        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
          var target = manipulationTarget(this, elem);
          target.appendChild(elem);
        }
      });
    },
    prepend: function prepend() {
      return domManip(this, arguments, function (elem) {
        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
          var target = manipulationTarget(this, elem);
          target.insertBefore(elem, target.firstChild);
        }
      });
    },
    before: function before() {
      return domManip(this, arguments, function (elem) {
        if (this.parentNode) {
          this.parentNode.insertBefore(elem, this);
        }
      });
    },
    after: function after() {
      return domManip(this, arguments, function (elem) {
        if (this.parentNode) {
          this.parentNode.insertBefore(elem, this.nextSibling);
        }
      });
    },
    empty: function empty() {
      var elem,
          i = 0;

      for (; (elem = this[i]) != null; i++) {
        if (elem.nodeType === 1) {
          // Prevent memory leaks
          jQuery.cleanData(getAll(elem, false)); // Remove any remaining nodes

          elem.textContent = "";
        }
      }

      return this;
    },
    clone: function clone(dataAndEvents, deepDataAndEvents) {
      dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
      deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
      return this.map(function () {
        return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
      });
    },
    html: function html(value) {
      return access(this, function (value) {
        var elem = this[0] || {},
            i = 0,
            l = this.length;

        if (value === undefined && elem.nodeType === 1) {
          return elem.innerHTML;
        } // See if we can take a shortcut and just use innerHTML


        if (typeof value === "string" && !rnoInnerhtml.test(value) && !wrapMap[(rtagName.exec(value) || ["", ""])[1].toLowerCase()]) {
          value = jQuery.htmlPrefilter(value);

          try {
            for (; i < l; i++) {
              elem = this[i] || {}; // Remove element nodes and prevent memory leaks

              if (elem.nodeType === 1) {
                jQuery.cleanData(getAll(elem, false));
                elem.innerHTML = value;
              }
            }

            elem = 0; // If using innerHTML throws an exception, use the fallback method
          } catch (e) {}
        }

        if (elem) {
          this.empty().append(value);
        }
      }, null, value, arguments.length);
    },
    replaceWith: function replaceWith() {
      var ignored = []; // Make the changes, replacing each non-ignored context element with the new content

      return domManip(this, arguments, function (elem) {
        var parent = this.parentNode;

        if (jQuery.inArray(this, ignored) < 0) {
          jQuery.cleanData(getAll(this));

          if (parent) {
            parent.replaceChild(elem, this);
          }
        } // Force callback invocation

      }, ignored);
    }
  });
  jQuery.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function (name, original) {
    jQuery.fn[name] = function (selector) {
      var elems,
          ret = [],
          insert = jQuery(selector),
          last = insert.length - 1,
          i = 0;

      for (; i <= last; i++) {
        elems = i === last ? this : this.clone(true);
        jQuery(insert[i])[original](elems); // Support: Android <=4.0 only, PhantomJS 1 only
        // .get() because push.apply(_, arraylike) throws on ancient WebKit

        push.apply(ret, elems.get());
      }

      return this.pushStack(ret);
    };
  });
  var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");

  var getStyles = function getStyles(elem) {
    // Support: IE <=11 only, Firefox <=30 (#15098, #14150)
    // IE throws on elements created in popups
    // FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
    var view = elem.ownerDocument.defaultView;

    if (!view || !view.opener) {
      view = window;
    }

    return view.getComputedStyle(elem);
  };

  var swap = function swap(elem, options, callback) {
    var ret,
        name,
        old = {}; // Remember the old values, and insert the new ones

    for (name in options) {
      old[name] = elem.style[name];
      elem.style[name] = options[name];
    }

    ret = callback.call(elem); // Revert the old values

    for (name in options) {
      elem.style[name] = old[name];
    }

    return ret;
  };

  var rboxStyle = new RegExp(cssExpand.join("|"), "i");

  (function () {
    // Executing both pixelPosition & boxSizingReliable tests require only one layout
    // so they're executed at the same time to save the second computation.
    function computeStyleTests() {
      // This is a singleton, we need to execute it only once
      if (!div) {
        return;
      }

      container.style.cssText = "position:absolute;left:-11111px;width:60px;" + "margin-top:1px;padding:0;border:0";
      div.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;" + "margin:auto;border:1px;padding:1px;" + "width:60%;top:1%";
      documentElement.appendChild(container).appendChild(div);
      var divStyle = window.getComputedStyle(div);
      pixelPositionVal = divStyle.top !== "1%"; // Support: Android 4.0 - 4.3 only, Firefox <=3 - 44

      reliableMarginLeftVal = roundPixelMeasures(divStyle.marginLeft) === 12; // Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
      // Some styles come back with percentage values, even though they shouldn't

      div.style.right = "60%";
      pixelBoxStylesVal = roundPixelMeasures(divStyle.right) === 36; // Support: IE 9 - 11 only
      // Detect misreporting of content dimensions for box-sizing:border-box elements

      boxSizingReliableVal = roundPixelMeasures(divStyle.width) === 36; // Support: IE 9 only
      // Detect overflow:scroll screwiness (gh-3699)
      // Support: Chrome <=64
      // Don't get tricked when zoom affects offsetWidth (gh-4029)

      div.style.position = "absolute";
      scrollboxSizeVal = roundPixelMeasures(div.offsetWidth / 3) === 12;
      documentElement.removeChild(container); // Nullify the div so it wouldn't be stored in the memory and
      // it will also be a sign that checks already performed

      div = null;
    }

    function roundPixelMeasures(measure) {
      return Math.round(parseFloat(measure));
    }

    var pixelPositionVal,
        boxSizingReliableVal,
        scrollboxSizeVal,
        pixelBoxStylesVal,
        reliableTrDimensionsVal,
        reliableMarginLeftVal,
        container = document.createElement("div"),
        div = document.createElement("div"); // Finish early in limited (non-browser) environments

    if (!div.style) {
      return;
    } // Support: IE <=9 - 11 only
    // Style of cloned element affects source element cloned (#8908)


    div.style.backgroundClip = "content-box";
    div.cloneNode(true).style.backgroundClip = "";
    support.clearCloneStyle = div.style.backgroundClip === "content-box";
    jQuery.extend(support, {
      boxSizingReliable: function boxSizingReliable() {
        computeStyleTests();
        return boxSizingReliableVal;
      },
      pixelBoxStyles: function pixelBoxStyles() {
        computeStyleTests();
        return pixelBoxStylesVal;
      },
      pixelPosition: function pixelPosition() {
        computeStyleTests();
        return pixelPositionVal;
      },
      reliableMarginLeft: function reliableMarginLeft() {
        computeStyleTests();
        return reliableMarginLeftVal;
      },
      scrollboxSize: function scrollboxSize() {
        computeStyleTests();
        return scrollboxSizeVal;
      },
      // Support: IE 9 - 11+, Edge 15 - 18+
      // IE/Edge misreport `getComputedStyle` of table rows with width/height
      // set in CSS while `offset*` properties report correct values.
      // Behavior in IE 9 is more subtle than in newer versions & it passes
      // some versions of this test; make sure not to make it pass there!
      reliableTrDimensions: function reliableTrDimensions() {
        var table, tr, trChild, trStyle;

        if (reliableTrDimensionsVal == null) {
          table = document.createElement("table");
          tr = document.createElement("tr");
          trChild = document.createElement("div");
          table.style.cssText = "position:absolute;left:-11111px";
          tr.style.height = "1px";
          trChild.style.height = "9px";
          documentElement.appendChild(table).appendChild(tr).appendChild(trChild);
          trStyle = window.getComputedStyle(tr);
          reliableTrDimensionsVal = parseInt(trStyle.height) > 3;
          documentElement.removeChild(table);
        }

        return reliableTrDimensionsVal;
      }
    });
  })();

  function curCSS(elem, name, computed) {
    var width,
        minWidth,
        maxWidth,
        ret,
        // Support: Firefox 51+
    // Retrieving style before computed somehow
    // fixes an issue with getting wrong values
    // on detached elements
    style = elem.style;
    computed = computed || getStyles(elem); // getPropertyValue is needed for:
    //   .css('filter') (IE 9 only, #12537)
    //   .css('--customProperty) (#3144)

    if (computed) {
      ret = computed.getPropertyValue(name) || computed[name];

      if (ret === "" && !isAttached(elem)) {
        ret = jQuery.style(elem, name);
      } // A tribute to the "awesome hack by Dean Edwards"
      // Android Browser returns percentage for some values,
      // but width seems to be reliably pixels.
      // This is against the CSSOM draft spec:
      // https://drafts.csswg.org/cssom/#resolved-values


      if (!support.pixelBoxStyles() && rnumnonpx.test(ret) && rboxStyle.test(name)) {
        // Remember the original values
        width = style.width;
        minWidth = style.minWidth;
        maxWidth = style.maxWidth; // Put in the new values to get a computed value out

        style.minWidth = style.maxWidth = style.width = ret;
        ret = computed.width; // Revert the changed values

        style.width = width;
        style.minWidth = minWidth;
        style.maxWidth = maxWidth;
      }
    }

    return ret !== undefined ? // Support: IE <=9 - 11 only
    // IE returns zIndex value as an integer.
    ret + "" : ret;
  }

  function addGetHookIf(conditionFn, hookFn) {
    // Define the hook, we'll check on the first run if it's really needed.
    return {
      get: function get() {
        if (conditionFn()) {
          // Hook not needed (or it's not possible to use it due
          // to missing dependency), remove it.
          delete this.get;
          return;
        } // Hook needed; redefine it so that the support test is not executed again.


        return (this.get = hookFn).apply(this, arguments);
      }
    };
  }

  var cssPrefixes = ["Webkit", "Moz", "ms"],
      emptyStyle = document.createElement("div").style,
      vendorProps = {}; // Return a vendor-prefixed property or undefined

  function vendorPropName(name) {
    // Check for vendor prefixed names
    var capName = name[0].toUpperCase() + name.slice(1),
        i = cssPrefixes.length;

    while (i--) {
      name = cssPrefixes[i] + capName;

      if (name in emptyStyle) {
        return name;
      }
    }
  } // Return a potentially-mapped jQuery.cssProps or vendor prefixed property


  function finalPropName(name) {
    var _final = jQuery.cssProps[name] || vendorProps[name];

    if (_final) {
      return _final;
    }

    if (name in emptyStyle) {
      return name;
    }

    return vendorProps[name] = vendorPropName(name) || name;
  }

  var // Swappable if display is none or starts with table
  // except "table", "table-cell", or "table-caption"
  // See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
  rdisplayswap = /^(none|table(?!-c[ea]).+)/,
      rcustomProp = /^--/,
      cssShow = {
    position: "absolute",
    visibility: "hidden",
    display: "block"
  },
      cssNormalTransform = {
    letterSpacing: "0",
    fontWeight: "400"
  };

  function setPositiveNumber(_elem, value, subtract) {
    // Any relative (+/-) values have already been
    // normalized at this point
    var matches = rcssNum.exec(value);
    return matches ? // Guard against undefined "subtract", e.g., when used as in cssHooks
    Math.max(0, matches[2] - (subtract || 0)) + (matches[3] || "px") : value;
  }

  function boxModelAdjustment(elem, dimension, box, isBorderBox, styles, computedVal) {
    var i = dimension === "width" ? 1 : 0,
        extra = 0,
        delta = 0; // Adjustment may not be necessary

    if (box === (isBorderBox ? "border" : "content")) {
      return 0;
    }

    for (; i < 4; i += 2) {
      // Both box models exclude margin
      if (box === "margin") {
        delta += jQuery.css(elem, box + cssExpand[i], true, styles);
      } // If we get here with a content-box, we're seeking "padding" or "border" or "margin"


      if (!isBorderBox) {
        // Add padding
        delta += jQuery.css(elem, "padding" + cssExpand[i], true, styles); // For "border" or "margin", add border

        if (box !== "padding") {
          delta += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles); // But still keep track of it otherwise
        } else {
          extra += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
        } // If we get here with a border-box (content + padding + border), we're seeking "content" or
        // "padding" or "margin"

      } else {
        // For "content", subtract padding
        if (box === "content") {
          delta -= jQuery.css(elem, "padding" + cssExpand[i], true, styles);
        } // For "content" or "padding", subtract border


        if (box !== "margin") {
          delta -= jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
        }
      }
    } // Account for positive content-box scroll gutter when requested by providing computedVal


    if (!isBorderBox && computedVal >= 0) {
      // offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
      // Assuming integer scroll gutter, subtract the rest and round down
      delta += Math.max(0, Math.ceil(elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - computedVal - delta - extra - 0.5 // If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
      // Use an explicit zero to avoid NaN (gh-3964)
      )) || 0;
    }

    return delta;
  }

  function getWidthOrHeight(elem, dimension, extra) {
    // Start with computed style
    var styles = getStyles(elem),
        // To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
    // Fake content-box until we know it's needed to know the true value.
    boxSizingNeeded = !support.boxSizingReliable() || extra,
        isBorderBox = boxSizingNeeded && jQuery.css(elem, "boxSizing", false, styles) === "border-box",
        valueIsBorderBox = isBorderBox,
        val = curCSS(elem, dimension, styles),
        offsetProp = "offset" + dimension[0].toUpperCase() + dimension.slice(1); // Support: Firefox <=54
    // Return a confounding non-pixel value or feign ignorance, as appropriate.

    if (rnumnonpx.test(val)) {
      if (!extra) {
        return val;
      }

      val = "auto";
    } // Support: IE 9 - 11 only
    // Use offsetWidth/offsetHeight for when box sizing is unreliable.
    // In those cases, the computed value can be trusted to be border-box.


    if ((!support.boxSizingReliable() && isBorderBox || // Support: IE 10 - 11+, Edge 15 - 18+
    // IE/Edge misreport `getComputedStyle` of table rows with width/height
    // set in CSS while `offset*` properties report correct values.
    // Interestingly, in some cases IE 9 doesn't suffer from this issue.
    !support.reliableTrDimensions() && nodeName(elem, "tr") || // Fall back to offsetWidth/offsetHeight when value is "auto"
    // This happens for inline elements with no explicit setting (gh-3571)
    val === "auto" || // Support: Android <=4.1 - 4.3 only
    // Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
    !parseFloat(val) && jQuery.css(elem, "display", false, styles) === "inline") && // Make sure the element is visible & connected
    elem.getClientRects().length) {
      isBorderBox = jQuery.css(elem, "boxSizing", false, styles) === "border-box"; // Where available, offsetWidth/offsetHeight approximate border box dimensions.
      // Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
      // retrieved value as a content box dimension.

      valueIsBorderBox = offsetProp in elem;

      if (valueIsBorderBox) {
        val = elem[offsetProp];
      }
    } // Normalize "" and auto


    val = parseFloat(val) || 0; // Adjust for the element's box model

    return val + boxModelAdjustment(elem, dimension, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles, // Provide the current computed size to request scroll gutter calculation (gh-3589)
    val) + "px";
  }

  jQuery.extend({
    // Add in style property hooks for overriding the default
    // behavior of getting and setting a style property
    cssHooks: {
      opacity: {
        get: function get(elem, computed) {
          if (computed) {
            // We should always get a number back from opacity
            var ret = curCSS(elem, "opacity");
            return ret === "" ? "1" : ret;
          }
        }
      }
    },
    // Don't automatically add "px" to these possibly-unitless properties
    cssNumber: {
      "animationIterationCount": true,
      "columnCount": true,
      "fillOpacity": true,
      "flexGrow": true,
      "flexShrink": true,
      "fontWeight": true,
      "gridArea": true,
      "gridColumn": true,
      "gridColumnEnd": true,
      "gridColumnStart": true,
      "gridRow": true,
      "gridRowEnd": true,
      "gridRowStart": true,
      "lineHeight": true,
      "opacity": true,
      "order": true,
      "orphans": true,
      "widows": true,
      "zIndex": true,
      "zoom": true
    },
    // Add in properties whose names you wish to fix before
    // setting or getting the value
    cssProps: {},
    // Get and set the style property on a DOM Node
    style: function style(elem, name, value, extra) {
      // Don't set styles on text and comment nodes
      if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
        return;
      } // Make sure that we're working with the right name


      var ret,
          type,
          hooks,
          origName = camelCase(name),
          isCustomProp = rcustomProp.test(name),
          style = elem.style; // Make sure that we're working with the right name. We don't
      // want to query the value if it is a CSS custom property
      // since they are user-defined.

      if (!isCustomProp) {
        name = finalPropName(origName);
      } // Gets hook for the prefixed version, then unprefixed version


      hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName]; // Check if we're setting a value

      if (value !== undefined) {
        type = _typeof(value); // Convert "+=" or "-=" to relative numbers (#7345)

        if (type === "string" && (ret = rcssNum.exec(value)) && ret[1]) {
          value = adjustCSS(elem, name, ret); // Fixes bug #9237

          type = "number";
        } // Make sure that null and NaN values aren't set (#7116)


        if (value == null || value !== value) {
          return;
        } // If a number was passed in, add the unit (except for certain CSS properties)
        // The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
        // "px" to a few hardcoded values.


        if (type === "number" && !isCustomProp) {
          value += ret && ret[3] || (jQuery.cssNumber[origName] ? "" : "px");
        } // background-* props affect original clone's values


        if (!support.clearCloneStyle && value === "" && name.indexOf("background") === 0) {
          style[name] = "inherit";
        } // If a hook was provided, use that value, otherwise just set the specified value


        if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== undefined) {
          if (isCustomProp) {
            style.setProperty(name, value);
          } else {
            style[name] = value;
          }
        }
      } else {
        // If a hook was provided get the non-computed value from there
        if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== undefined) {
          return ret;
        } // Otherwise just get the value from the style object


        return style[name];
      }
    },
    css: function css(elem, name, extra, styles) {
      var val,
          num,
          hooks,
          origName = camelCase(name),
          isCustomProp = rcustomProp.test(name); // Make sure that we're working with the right name. We don't
      // want to modify the value if it is a CSS custom property
      // since they are user-defined.

      if (!isCustomProp) {
        name = finalPropName(origName);
      } // Try prefixed name followed by the unprefixed name


      hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName]; // If a hook was provided get the computed value from there

      if (hooks && "get" in hooks) {
        val = hooks.get(elem, true, extra);
      } // Otherwise, if a way to get the computed value exists, use that


      if (val === undefined) {
        val = curCSS(elem, name, styles);
      } // Convert "normal" to computed value


      if (val === "normal" && name in cssNormalTransform) {
        val = cssNormalTransform[name];
      } // Make numeric if forced or a qualifier was provided and val looks numeric


      if (extra === "" || extra) {
        num = parseFloat(val);
        return extra === true || isFinite(num) ? num || 0 : val;
      }

      return val;
    }
  });
  jQuery.each(["height", "width"], function (_i, dimension) {
    jQuery.cssHooks[dimension] = {
      get: function get(elem, computed, extra) {
        if (computed) {
          // Certain elements can have dimension info if we invisibly show them
          // but it must have a current display style that would benefit
          return rdisplayswap.test(jQuery.css(elem, "display")) && ( // Support: Safari 8+
          // Table columns in Safari have non-zero offsetWidth & zero
          // getBoundingClientRect().width unless display is changed.
          // Support: IE <=11 only
          // Running getBoundingClientRect on a disconnected node
          // in IE throws an error.
          !elem.getClientRects().length || !elem.getBoundingClientRect().width) ? swap(elem, cssShow, function () {
            return getWidthOrHeight(elem, dimension, extra);
          }) : getWidthOrHeight(elem, dimension, extra);
        }
      },
      set: function set(elem, value, extra) {
        var matches,
            styles = getStyles(elem),
            // Only read styles.position if the test has a chance to fail
        // to avoid forcing a reflow.
        scrollboxSizeBuggy = !support.scrollboxSize() && styles.position === "absolute",
            // To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
        boxSizingNeeded = scrollboxSizeBuggy || extra,
            isBorderBox = boxSizingNeeded && jQuery.css(elem, "boxSizing", false, styles) === "border-box",
            subtract = extra ? boxModelAdjustment(elem, dimension, extra, isBorderBox, styles) : 0; // Account for unreliable border-box dimensions by comparing offset* to computed and
        // faking a content-box to get border and padding (gh-3699)

        if (isBorderBox && scrollboxSizeBuggy) {
          subtract -= Math.ceil(elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - parseFloat(styles[dimension]) - boxModelAdjustment(elem, dimension, "border", false, styles) - 0.5);
        } // Convert to pixels if value adjustment is needed


        if (subtract && (matches = rcssNum.exec(value)) && (matches[3] || "px") !== "px") {
          elem.style[dimension] = value;
          value = jQuery.css(elem, dimension);
        }

        return setPositiveNumber(elem, value, subtract);
      }
    };
  });
  jQuery.cssHooks.marginLeft = addGetHookIf(support.reliableMarginLeft, function (elem, computed) {
    if (computed) {
      return (parseFloat(curCSS(elem, "marginLeft")) || elem.getBoundingClientRect().left - swap(elem, {
        marginLeft: 0
      }, function () {
        return elem.getBoundingClientRect().left;
      })) + "px";
    }
  }); // These hooks are used by animate to expand properties

  jQuery.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function (prefix, suffix) {
    jQuery.cssHooks[prefix + suffix] = {
      expand: function expand(value) {
        var i = 0,
            expanded = {},
            // Assumes a single number if not a string
        parts = typeof value === "string" ? value.split(" ") : [value];

        for (; i < 4; i++) {
          expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];
        }

        return expanded;
      }
    };

    if (prefix !== "margin") {
      jQuery.cssHooks[prefix + suffix].set = setPositiveNumber;
    }
  });
  jQuery.fn.extend({
    css: function css(name, value) {
      return access(this, function (elem, name, value) {
        var styles,
            len,
            map = {},
            i = 0;

        if (Array.isArray(name)) {
          styles = getStyles(elem);
          len = name.length;

          for (; i < len; i++) {
            map[name[i]] = jQuery.css(elem, name[i], false, styles);
          }

          return map;
        }

        return value !== undefined ? jQuery.style(elem, name, value) : jQuery.css(elem, name);
      }, name, value, arguments.length > 1);
    }
  });

  function Tween(elem, options, prop, end, easing) {
    return new Tween.prototype.init(elem, options, prop, end, easing);
  }

  jQuery.Tween = Tween;
  Tween.prototype = {
    constructor: Tween,
    init: function init(elem, options, prop, end, easing, unit) {
      this.elem = elem;
      this.prop = prop;
      this.easing = easing || jQuery.easing._default;
      this.options = options;
      this.start = this.now = this.cur();
      this.end = end;
      this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
    },
    cur: function cur() {
      var hooks = Tween.propHooks[this.prop];
      return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
    },
    run: function run(percent) {
      var eased,
          hooks = Tween.propHooks[this.prop];

      if (this.options.duration) {
        this.pos = eased = jQuery.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration);
      } else {
        this.pos = eased = percent;
      }

      this.now = (this.end - this.start) * eased + this.start;

      if (this.options.step) {
        this.options.step.call(this.elem, this.now, this);
      }

      if (hooks && hooks.set) {
        hooks.set(this);
      } else {
        Tween.propHooks._default.set(this);
      }

      return this;
    }
  };
  Tween.prototype.init.prototype = Tween.prototype;
  Tween.propHooks = {
    _default: {
      get: function get(tween) {
        var result; // Use a property on the element directly when it is not a DOM element,
        // or when there is no matching style property that exists.

        if (tween.elem.nodeType !== 1 || tween.elem[tween.prop] != null && tween.elem.style[tween.prop] == null) {
          return tween.elem[tween.prop];
        } // Passing an empty string as a 3rd parameter to .css will automatically
        // attempt a parseFloat and fallback to a string if the parse fails.
        // Simple values such as "10px" are parsed to Float;
        // complex values such as "rotate(1rad)" are returned as-is.


        result = jQuery.css(tween.elem, tween.prop, ""); // Empty strings, null, undefined and "auto" are converted to 0.

        return !result || result === "auto" ? 0 : result;
      },
      set: function set(tween) {
        // Use step hook for back compat.
        // Use cssHook if its there.
        // Use .style if available and use plain properties where available.
        if (jQuery.fx.step[tween.prop]) {
          jQuery.fx.step[tween.prop](tween);
        } else if (tween.elem.nodeType === 1 && (jQuery.cssHooks[tween.prop] || tween.elem.style[finalPropName(tween.prop)] != null)) {
          jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
        } else {
          tween.elem[tween.prop] = tween.now;
        }
      }
    }
  }; // Support: IE <=9 only
  // Panic based approach to setting things on disconnected nodes

  Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
    set: function set(tween) {
      if (tween.elem.nodeType && tween.elem.parentNode) {
        tween.elem[tween.prop] = tween.now;
      }
    }
  };
  jQuery.easing = {
    linear: function linear(p) {
      return p;
    },
    swing: function swing(p) {
      return 0.5 - Math.cos(p * Math.PI) / 2;
    },
    _default: "swing"
  };
  jQuery.fx = Tween.prototype.init; // Back compat <1.8 extension point

  jQuery.fx.step = {};
  var fxNow,
      inProgress,
      rfxtypes = /^(?:toggle|show|hide)$/,
      rrun = /queueHooks$/;

  function schedule() {
    if (inProgress) {
      if (document.hidden === false && window.requestAnimationFrame) {
        window.requestAnimationFrame(schedule);
      } else {
        window.setTimeout(schedule, jQuery.fx.interval);
      }

      jQuery.fx.tick();
    }
  } // Animations created synchronously will run synchronously


  function createFxNow() {
    window.setTimeout(function () {
      fxNow = undefined;
    });
    return fxNow = Date.now();
  } // Generate parameters to create a standard animation


  function genFx(type, includeWidth) {
    var which,
        i = 0,
        attrs = {
      height: type
    }; // If we include width, step value is 1 to do all cssExpand values,
    // otherwise step value is 2 to skip over Left and Right

    includeWidth = includeWidth ? 1 : 0;

    for (; i < 4; i += 2 - includeWidth) {
      which = cssExpand[i];
      attrs["margin" + which] = attrs["padding" + which] = type;
    }

    if (includeWidth) {
      attrs.opacity = attrs.width = type;
    }

    return attrs;
  }

  function createTween(value, prop, animation) {
    var tween,
        collection = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]),
        index = 0,
        length = collection.length;

    for (; index < length; index++) {
      if (tween = collection[index].call(animation, prop, value)) {
        // We're done with this property
        return tween;
      }
    }
  }

  function defaultPrefilter(elem, props, opts) {
    var prop,
        value,
        toggle,
        hooks,
        oldfire,
        propTween,
        restoreDisplay,
        display,
        isBox = "width" in props || "height" in props,
        anim = this,
        orig = {},
        style = elem.style,
        hidden = elem.nodeType && isHiddenWithinTree(elem),
        dataShow = dataPriv.get(elem, "fxshow"); // Queue-skipping animations hijack the fx hooks

    if (!opts.queue) {
      hooks = jQuery._queueHooks(elem, "fx");

      if (hooks.unqueued == null) {
        hooks.unqueued = 0;
        oldfire = hooks.empty.fire;

        hooks.empty.fire = function () {
          if (!hooks.unqueued) {
            oldfire();
          }
        };
      }

      hooks.unqueued++;
      anim.always(function () {
        // Ensure the complete handler is called before this completes
        anim.always(function () {
          hooks.unqueued--;

          if (!jQuery.queue(elem, "fx").length) {
            hooks.empty.fire();
          }
        });
      });
    } // Detect show/hide animations


    for (prop in props) {
      value = props[prop];

      if (rfxtypes.test(value)) {
        delete props[prop];
        toggle = toggle || value === "toggle";

        if (value === (hidden ? "hide" : "show")) {
          // Pretend to be hidden if this is a "show" and
          // there is still data from a stopped show/hide
          if (value === "show" && dataShow && dataShow[prop] !== undefined) {
            hidden = true; // Ignore all other no-op show/hide data
          } else {
            continue;
          }
        }

        orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);
      }
    } // Bail out if this is a no-op like .hide().hide()


    propTween = !jQuery.isEmptyObject(props);

    if (!propTween && jQuery.isEmptyObject(orig)) {
      return;
    } // Restrict "overflow" and "display" styles during box animations


    if (isBox && elem.nodeType === 1) {
      // Support: IE <=9 - 11, Edge 12 - 15
      // Record all 3 overflow attributes because IE does not infer the shorthand
      // from identically-valued overflowX and overflowY and Edge just mirrors
      // the overflowX value there.
      opts.overflow = [style.overflow, style.overflowX, style.overflowY]; // Identify a display type, preferring old show/hide data over the CSS cascade

      restoreDisplay = dataShow && dataShow.display;

      if (restoreDisplay == null) {
        restoreDisplay = dataPriv.get(elem, "display");
      }

      display = jQuery.css(elem, "display");

      if (display === "none") {
        if (restoreDisplay) {
          display = restoreDisplay;
        } else {
          // Get nonempty value(s) by temporarily forcing visibility
          showHide([elem], true);
          restoreDisplay = elem.style.display || restoreDisplay;
          display = jQuery.css(elem, "display");
          showHide([elem]);
        }
      } // Animate inline elements as inline-block


      if (display === "inline" || display === "inline-block" && restoreDisplay != null) {
        if (jQuery.css(elem, "float") === "none") {
          // Restore the original display value at the end of pure show/hide animations
          if (!propTween) {
            anim.done(function () {
              style.display = restoreDisplay;
            });

            if (restoreDisplay == null) {
              display = style.display;
              restoreDisplay = display === "none" ? "" : display;
            }
          }

          style.display = "inline-block";
        }
      }
    }

    if (opts.overflow) {
      style.overflow = "hidden";
      anim.always(function () {
        style.overflow = opts.overflow[0];
        style.overflowX = opts.overflow[1];
        style.overflowY = opts.overflow[2];
      });
    } // Implement show/hide animations


    propTween = false;

    for (prop in orig) {
      // General show/hide setup for this element animation
      if (!propTween) {
        if (dataShow) {
          if ("hidden" in dataShow) {
            hidden = dataShow.hidden;
          }
        } else {
          dataShow = dataPriv.access(elem, "fxshow", {
            display: restoreDisplay
          });
        } // Store hidden/visible for toggle so `.stop().toggle()` "reverses"


        if (toggle) {
          dataShow.hidden = !hidden;
        } // Show elements before animating them


        if (hidden) {
          showHide([elem], true);
        }
        /* eslint-disable no-loop-func */


        anim.done(function () {
          /* eslint-enable no-loop-func */
          // The final step of a "hide" animation is actually hiding the element
          if (!hidden) {
            showHide([elem]);
          }

          dataPriv.remove(elem, "fxshow");

          for (prop in orig) {
            jQuery.style(elem, prop, orig[prop]);
          }
        });
      } // Per-property setup


      propTween = createTween(hidden ? dataShow[prop] : 0, prop, anim);

      if (!(prop in dataShow)) {
        dataShow[prop] = propTween.start;

        if (hidden) {
          propTween.end = propTween.start;
          propTween.start = 0;
        }
      }
    }
  }

  function propFilter(props, specialEasing) {
    var index, name, easing, value, hooks; // camelCase, specialEasing and expand cssHook pass

    for (index in props) {
      name = camelCase(index);
      easing = specialEasing[name];
      value = props[index];

      if (Array.isArray(value)) {
        easing = value[1];
        value = props[index] = value[0];
      }

      if (index !== name) {
        props[name] = value;
        delete props[index];
      }

      hooks = jQuery.cssHooks[name];

      if (hooks && "expand" in hooks) {
        value = hooks.expand(value);
        delete props[name]; // Not quite $.extend, this won't overwrite existing keys.
        // Reusing 'index' because we have the correct "name"

        for (index in value) {
          if (!(index in props)) {
            props[index] = value[index];
            specialEasing[index] = easing;
          }
        }
      } else {
        specialEasing[name] = easing;
      }
    }
  }

  function Animation(elem, properties, options) {
    var result,
        stopped,
        index = 0,
        length = Animation.prefilters.length,
        deferred = jQuery.Deferred().always(function () {
      // Don't match elem in the :animated selector
      delete tick.elem;
    }),
        tick = function tick() {
      if (stopped) {
        return false;
      }

      var currentTime = fxNow || createFxNow(),
          remaining = Math.max(0, animation.startTime + animation.duration - currentTime),
          // Support: Android 2.3 only
      // Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
      temp = remaining / animation.duration || 0,
          percent = 1 - temp,
          index = 0,
          length = animation.tweens.length;

      for (; index < length; index++) {
        animation.tweens[index].run(percent);
      }

      deferred.notifyWith(elem, [animation, percent, remaining]); // If there's more to do, yield

      if (percent < 1 && length) {
        return remaining;
      } // If this was an empty animation, synthesize a final progress notification


      if (!length) {
        deferred.notifyWith(elem, [animation, 1, 0]);
      } // Resolve the animation and report its conclusion


      deferred.resolveWith(elem, [animation]);
      return false;
    },
        animation = deferred.promise({
      elem: elem,
      props: jQuery.extend({}, properties),
      opts: jQuery.extend(true, {
        specialEasing: {},
        easing: jQuery.easing._default
      }, options),
      originalProperties: properties,
      originalOptions: options,
      startTime: fxNow || createFxNow(),
      duration: options.duration,
      tweens: [],
      createTween: function createTween(prop, end) {
        var tween = jQuery.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
        animation.tweens.push(tween);
        return tween;
      },
      stop: function stop(gotoEnd) {
        var index = 0,
            // If we are going to the end, we want to run all the tweens
        // otherwise we skip this part
        length = gotoEnd ? animation.tweens.length : 0;

        if (stopped) {
          return this;
        }

        stopped = true;

        for (; index < length; index++) {
          animation.tweens[index].run(1);
        } // Resolve when we played the last frame; otherwise, reject


        if (gotoEnd) {
          deferred.notifyWith(elem, [animation, 1, 0]);
          deferred.resolveWith(elem, [animation, gotoEnd]);
        } else {
          deferred.rejectWith(elem, [animation, gotoEnd]);
        }

        return this;
      }
    }),
        props = animation.props;

    propFilter(props, animation.opts.specialEasing);

    for (; index < length; index++) {
      result = Animation.prefilters[index].call(animation, elem, props, animation.opts);

      if (result) {
        if (isFunction(result.stop)) {
          jQuery._queueHooks(animation.elem, animation.opts.queue).stop = result.stop.bind(result);
        }

        return result;
      }
    }

    jQuery.map(props, createTween, animation);

    if (isFunction(animation.opts.start)) {
      animation.opts.start.call(elem, animation);
    } // Attach callbacks from options


    animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
    jQuery.fx.timer(jQuery.extend(tick, {
      elem: elem,
      anim: animation,
      queue: animation.opts.queue
    }));
    return animation;
  }

  jQuery.Animation = jQuery.extend(Animation, {
    tweeners: {
      "*": [function (prop, value) {
        var tween = this.createTween(prop, value);
        adjustCSS(tween.elem, prop, rcssNum.exec(value), tween);
        return tween;
      }]
    },
    tweener: function tweener(props, callback) {
      if (isFunction(props)) {
        callback = props;
        props = ["*"];
      } else {
        props = props.match(rnothtmlwhite);
      }

      var prop,
          index = 0,
          length = props.length;

      for (; index < length; index++) {
        prop = props[index];
        Animation.tweeners[prop] = Animation.tweeners[prop] || [];
        Animation.tweeners[prop].unshift(callback);
      }
    },
    prefilters: [defaultPrefilter],
    prefilter: function prefilter(callback, prepend) {
      if (prepend) {
        Animation.prefilters.unshift(callback);
      } else {
        Animation.prefilters.push(callback);
      }
    }
  });

  jQuery.speed = function (speed, easing, fn) {
    var opt = speed && _typeof(speed) === "object" ? jQuery.extend({}, speed) : {
      complete: fn || !fn && easing || isFunction(speed) && speed,
      duration: speed,
      easing: fn && easing || easing && !isFunction(easing) && easing
    }; // Go to the end state if fx are off

    if (jQuery.fx.off) {
      opt.duration = 0;
    } else {
      if (typeof opt.duration !== "number") {
        if (opt.duration in jQuery.fx.speeds) {
          opt.duration = jQuery.fx.speeds[opt.duration];
        } else {
          opt.duration = jQuery.fx.speeds._default;
        }
      }
    } // Normalize opt.queue - true/undefined/null -> "fx"


    if (opt.queue == null || opt.queue === true) {
      opt.queue = "fx";
    } // Queueing


    opt.old = opt.complete;

    opt.complete = function () {
      if (isFunction(opt.old)) {
        opt.old.call(this);
      }

      if (opt.queue) {
        jQuery.dequeue(this, opt.queue);
      }
    };

    return opt;
  };

  jQuery.fn.extend({
    fadeTo: function fadeTo(speed, to, easing, callback) {
      // Show any hidden elements after setting opacity to 0
      return this.filter(isHiddenWithinTree).css("opacity", 0).show() // Animate to the value specified
      .end().animate({
        opacity: to
      }, speed, easing, callback);
    },
    animate: function animate(prop, speed, easing, callback) {
      var empty = jQuery.isEmptyObject(prop),
          optall = jQuery.speed(speed, easing, callback),
          doAnimation = function doAnimation() {
        // Operate on a copy of prop so per-property easing won't be lost
        var anim = Animation(this, jQuery.extend({}, prop), optall); // Empty animations, or finishing resolves immediately

        if (empty || dataPriv.get(this, "finish")) {
          anim.stop(true);
        }
      };

      doAnimation.finish = doAnimation;
      return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
    },
    stop: function stop(type, clearQueue, gotoEnd) {
      var stopQueue = function stopQueue(hooks) {
        var stop = hooks.stop;
        delete hooks.stop;
        stop(gotoEnd);
      };

      if (typeof type !== "string") {
        gotoEnd = clearQueue;
        clearQueue = type;
        type = undefined;
      }

      if (clearQueue) {
        this.queue(type || "fx", []);
      }

      return this.each(function () {
        var dequeue = true,
            index = type != null && type + "queueHooks",
            timers = jQuery.timers,
            data = dataPriv.get(this);

        if (index) {
          if (data[index] && data[index].stop) {
            stopQueue(data[index]);
          }
        } else {
          for (index in data) {
            if (data[index] && data[index].stop && rrun.test(index)) {
              stopQueue(data[index]);
            }
          }
        }

        for (index = timers.length; index--;) {
          if (timers[index].elem === this && (type == null || timers[index].queue === type)) {
            timers[index].anim.stop(gotoEnd);
            dequeue = false;
            timers.splice(index, 1);
          }
        } // Start the next in the queue if the last step wasn't forced.
        // Timers currently will call their complete callbacks, which
        // will dequeue but only if they were gotoEnd.


        if (dequeue || !gotoEnd) {
          jQuery.dequeue(this, type);
        }
      });
    },
    finish: function finish(type) {
      if (type !== false) {
        type = type || "fx";
      }

      return this.each(function () {
        var index,
            data = dataPriv.get(this),
            queue = data[type + "queue"],
            hooks = data[type + "queueHooks"],
            timers = jQuery.timers,
            length = queue ? queue.length : 0; // Enable finishing flag on private data

        data.finish = true; // Empty the queue first

        jQuery.queue(this, type, []);

        if (hooks && hooks.stop) {
          hooks.stop.call(this, true);
        } // Look for any active animations, and finish them


        for (index = timers.length; index--;) {
          if (timers[index].elem === this && timers[index].queue === type) {
            timers[index].anim.stop(true);
            timers.splice(index, 1);
          }
        } // Look for any animations in the old queue and finish them


        for (index = 0; index < length; index++) {
          if (queue[index] && queue[index].finish) {
            queue[index].finish.call(this);
          }
        } // Turn off finishing flag


        delete data.finish;
      });
    }
  });
  jQuery.each(["toggle", "show", "hide"], function (_i, name) {
    var cssFn = jQuery.fn[name];

    jQuery.fn[name] = function (speed, easing, callback) {
      return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback);
    };
  }); // Generate shortcuts for custom animations

  jQuery.each({
    slideDown: genFx("show"),
    slideUp: genFx("hide"),
    slideToggle: genFx("toggle"),
    fadeIn: {
      opacity: "show"
    },
    fadeOut: {
      opacity: "hide"
    },
    fadeToggle: {
      opacity: "toggle"
    }
  }, function (name, props) {
    jQuery.fn[name] = function (speed, easing, callback) {
      return this.animate(props, speed, easing, callback);
    };
  });
  jQuery.timers = [];

  jQuery.fx.tick = function () {
    var timer,
        i = 0,
        timers = jQuery.timers;
    fxNow = Date.now();

    for (; i < timers.length; i++) {
      timer = timers[i]; // Run the timer and safely remove it when done (allowing for external removal)

      if (!timer() && timers[i] === timer) {
        timers.splice(i--, 1);
      }
    }

    if (!timers.length) {
      jQuery.fx.stop();
    }

    fxNow = undefined;
  };

  jQuery.fx.timer = function (timer) {
    jQuery.timers.push(timer);
    jQuery.fx.start();
  };

  jQuery.fx.interval = 13;

  jQuery.fx.start = function () {
    if (inProgress) {
      return;
    }

    inProgress = true;
    schedule();
  };

  jQuery.fx.stop = function () {
    inProgress = null;
  };

  jQuery.fx.speeds = {
    slow: 600,
    fast: 200,
    // Default speed
    _default: 400
  }; // Based off of the plugin by Clint Helfers, with permission.
  // https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/

  jQuery.fn.delay = function (time, type) {
    time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
    type = type || "fx";
    return this.queue(type, function (next, hooks) {
      var timeout = window.setTimeout(next, time);

      hooks.stop = function () {
        window.clearTimeout(timeout);
      };
    });
  };

  (function () {
    var input = document.createElement("input"),
        select = document.createElement("select"),
        opt = select.appendChild(document.createElement("option"));
    input.type = "checkbox"; // Support: Android <=4.3 only
    // Default value for a checkbox should be "on"

    support.checkOn = input.value !== ""; // Support: IE <=11 only
    // Must access selectedIndex to make default options select

    support.optSelected = opt.selected; // Support: IE <=11 only
    // An input loses its value after becoming a radio

    input = document.createElement("input");
    input.value = "t";
    input.type = "radio";
    support.radioValue = input.value === "t";
  })();

  var boolHook,
      attrHandle = jQuery.expr.attrHandle;
  jQuery.fn.extend({
    attr: function attr(name, value) {
      return access(this, jQuery.attr, name, value, arguments.length > 1);
    },
    removeAttr: function removeAttr(name) {
      return this.each(function () {
        jQuery.removeAttr(this, name);
      });
    }
  });
  jQuery.extend({
    attr: function attr(elem, name, value) {
      var ret,
          hooks,
          nType = elem.nodeType; // Don't get/set attributes on text, comment and attribute nodes

      if (nType === 3 || nType === 8 || nType === 2) {
        return;
      } // Fallback to prop when attributes are not supported


      if (typeof elem.getAttribute === "undefined") {
        return jQuery.prop(elem, name, value);
      } // Attribute hooks are determined by the lowercase version
      // Grab necessary hook if one is defined


      if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
        hooks = jQuery.attrHooks[name.toLowerCase()] || (jQuery.expr.match.bool.test(name) ? boolHook : undefined);
      }

      if (value !== undefined) {
        if (value === null) {
          jQuery.removeAttr(elem, name);
          return;
        }

        if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
          return ret;
        }

        elem.setAttribute(name, value + "");
        return value;
      }

      if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
        return ret;
      }

      ret = jQuery.find.attr(elem, name); // Non-existent attributes return null, we normalize to undefined

      return ret == null ? undefined : ret;
    },
    attrHooks: {
      type: {
        set: function set(elem, value) {
          if (!support.radioValue && value === "radio" && nodeName(elem, "input")) {
            var val = elem.value;
            elem.setAttribute("type", value);

            if (val) {
              elem.value = val;
            }

            return value;
          }
        }
      }
    },
    removeAttr: function removeAttr(elem, value) {
      var name,
          i = 0,
          // Attribute names can contain non-HTML whitespace characters
      // https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
      attrNames = value && value.match(rnothtmlwhite);

      if (attrNames && elem.nodeType === 1) {
        while (name = attrNames[i++]) {
          elem.removeAttribute(name);
        }
      }
    }
  }); // Hooks for boolean attributes

  boolHook = {
    set: function set(elem, value, name) {
      if (value === false) {
        // Remove boolean attributes when set to false
        jQuery.removeAttr(elem, name);
      } else {
        elem.setAttribute(name, name);
      }

      return name;
    }
  };
  jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function (_i, name) {
    var getter = attrHandle[name] || jQuery.find.attr;

    attrHandle[name] = function (elem, name, isXML) {
      var ret,
          handle,
          lowercaseName = name.toLowerCase();

      if (!isXML) {
        // Avoid an infinite loop by temporarily removing this function from the getter
        handle = attrHandle[lowercaseName];
        attrHandle[lowercaseName] = ret;
        ret = getter(elem, name, isXML) != null ? lowercaseName : null;
        attrHandle[lowercaseName] = handle;
      }

      return ret;
    };
  });
  var rfocusable = /^(?:input|select|textarea|button)$/i,
      rclickable = /^(?:a|area)$/i;
  jQuery.fn.extend({
    prop: function prop(name, value) {
      return access(this, jQuery.prop, name, value, arguments.length > 1);
    },
    removeProp: function removeProp(name) {
      return this.each(function () {
        delete this[jQuery.propFix[name] || name];
      });
    }
  });
  jQuery.extend({
    prop: function prop(elem, name, value) {
      var ret,
          hooks,
          nType = elem.nodeType; // Don't get/set properties on text, comment and attribute nodes

      if (nType === 3 || nType === 8 || nType === 2) {
        return;
      }

      if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
        // Fix name and attach hooks
        name = jQuery.propFix[name] || name;
        hooks = jQuery.propHooks[name];
      }

      if (value !== undefined) {
        if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
          return ret;
        }

        return elem[name] = value;
      }

      if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
        return ret;
      }

      return elem[name];
    },
    propHooks: {
      tabIndex: {
        get: function get(elem) {
          // Support: IE <=9 - 11 only
          // elem.tabIndex doesn't always return the
          // correct value when it hasn't been explicitly set
          // https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
          // Use proper attribute retrieval(#12072)
          var tabindex = jQuery.find.attr(elem, "tabindex");

          if (tabindex) {
            return parseInt(tabindex, 10);
          }

          if (rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href) {
            return 0;
          }

          return -1;
        }
      }
    },
    propFix: {
      "for": "htmlFor",
      "class": "className"
    }
  }); // Support: IE <=11 only
  // Accessing the selectedIndex property
  // forces the browser to respect setting selected
  // on the option
  // The getter ensures a default option is selected
  // when in an optgroup
  // eslint rule "no-unused-expressions" is disabled for this code
  // since it considers such accessions noop

  if (!support.optSelected) {
    jQuery.propHooks.selected = {
      get: function get(elem) {
        /* eslint no-unused-expressions: "off" */
        var parent = elem.parentNode;

        if (parent && parent.parentNode) {
          parent.parentNode.selectedIndex;
        }

        return null;
      },
      set: function set(elem) {
        /* eslint no-unused-expressions: "off" */
        var parent = elem.parentNode;

        if (parent) {
          parent.selectedIndex;

          if (parent.parentNode) {
            parent.parentNode.selectedIndex;
          }
        }
      }
    };
  }

  jQuery.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    jQuery.propFix[this.toLowerCase()] = this;
  }); // Strip and collapse whitespace according to HTML spec
  // https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace

  function stripAndCollapse(value) {
    var tokens = value.match(rnothtmlwhite) || [];
    return tokens.join(" ");
  }

  function getClass(elem) {
    return elem.getAttribute && elem.getAttribute("class") || "";
  }

  function classesToArray(value) {
    if (Array.isArray(value)) {
      return value;
    }

    if (typeof value === "string") {
      return value.match(rnothtmlwhite) || [];
    }

    return [];
  }

  jQuery.fn.extend({
    addClass: function addClass(value) {
      var classes,
          elem,
          cur,
          curValue,
          clazz,
          j,
          finalValue,
          i = 0;

      if (isFunction(value)) {
        return this.each(function (j) {
          jQuery(this).addClass(value.call(this, j, getClass(this)));
        });
      }

      classes = classesToArray(value);

      if (classes.length) {
        while (elem = this[i++]) {
          curValue = getClass(elem);
          cur = elem.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";

          if (cur) {
            j = 0;

            while (clazz = classes[j++]) {
              if (cur.indexOf(" " + clazz + " ") < 0) {
                cur += clazz + " ";
              }
            } // Only assign if different to avoid unneeded rendering.


            finalValue = stripAndCollapse(cur);

            if (curValue !== finalValue) {
              elem.setAttribute("class", finalValue);
            }
          }
        }
      }

      return this;
    },
    removeClass: function removeClass(value) {
      var classes,
          elem,
          cur,
          curValue,
          clazz,
          j,
          finalValue,
          i = 0;

      if (isFunction(value)) {
        return this.each(function (j) {
          jQuery(this).removeClass(value.call(this, j, getClass(this)));
        });
      }

      if (!arguments.length) {
        return this.attr("class", "");
      }

      classes = classesToArray(value);

      if (classes.length) {
        while (elem = this[i++]) {
          curValue = getClass(elem); // This expression is here for better compressibility (see addClass)

          cur = elem.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";

          if (cur) {
            j = 0;

            while (clazz = classes[j++]) {
              // Remove *all* instances
              while (cur.indexOf(" " + clazz + " ") > -1) {
                cur = cur.replace(" " + clazz + " ", " ");
              }
            } // Only assign if different to avoid unneeded rendering.


            finalValue = stripAndCollapse(cur);

            if (curValue !== finalValue) {
              elem.setAttribute("class", finalValue);
            }
          }
        }
      }

      return this;
    },
    toggleClass: function toggleClass(value, stateVal) {
      var type = _typeof(value),
          isValidValue = type === "string" || Array.isArray(value);

      if (typeof stateVal === "boolean" && isValidValue) {
        return stateVal ? this.addClass(value) : this.removeClass(value);
      }

      if (isFunction(value)) {
        return this.each(function (i) {
          jQuery(this).toggleClass(value.call(this, i, getClass(this), stateVal), stateVal);
        });
      }

      return this.each(function () {
        var className, i, self, classNames;

        if (isValidValue) {
          // Toggle individual class names
          i = 0;
          self = jQuery(this);
          classNames = classesToArray(value);

          while (className = classNames[i++]) {
            // Check each className given, space separated list
            if (self.hasClass(className)) {
              self.removeClass(className);
            } else {
              self.addClass(className);
            }
          } // Toggle whole class name

        } else if (value === undefined || type === "boolean") {
          className = getClass(this);

          if (className) {
            // Store className if set
            dataPriv.set(this, "__className__", className);
          } // If the element has a class name or if we're passed `false`,
          // then remove the whole classname (if there was one, the above saved it).
          // Otherwise bring back whatever was previously saved (if anything),
          // falling back to the empty string if nothing was stored.


          if (this.setAttribute) {
            this.setAttribute("class", className || value === false ? "" : dataPriv.get(this, "__className__") || "");
          }
        }
      });
    },
    hasClass: function hasClass(selector) {
      var className,
          elem,
          i = 0;
      className = " " + selector + " ";

      while (elem = this[i++]) {
        if (elem.nodeType === 1 && (" " + stripAndCollapse(getClass(elem)) + " ").indexOf(className) > -1) {
          return true;
        }
      }

      return false;
    }
  });
  var rreturn = /\r/g;
  jQuery.fn.extend({
    val: function val(value) {
      var hooks,
          ret,
          valueIsFunction,
          elem = this[0];

      if (!arguments.length) {
        if (elem) {
          hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()];

          if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== undefined) {
            return ret;
          }

          ret = elem.value; // Handle most common string cases

          if (typeof ret === "string") {
            return ret.replace(rreturn, "");
          } // Handle cases where value is null/undef or number


          return ret == null ? "" : ret;
        }

        return;
      }

      valueIsFunction = isFunction(value);
      return this.each(function (i) {
        var val;

        if (this.nodeType !== 1) {
          return;
        }

        if (valueIsFunction) {
          val = value.call(this, i, jQuery(this).val());
        } else {
          val = value;
        } // Treat null/undefined as ""; convert numbers to string


        if (val == null) {
          val = "";
        } else if (typeof val === "number") {
          val += "";
        } else if (Array.isArray(val)) {
          val = jQuery.map(val, function (value) {
            return value == null ? "" : value + "";
          });
        }

        hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()]; // If set returns undefined, fall back to normal setting

        if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === undefined) {
          this.value = val;
        }
      });
    }
  });
  jQuery.extend({
    valHooks: {
      option: {
        get: function get(elem) {
          var val = jQuery.find.attr(elem, "value");
          return val != null ? val : // Support: IE <=10 - 11 only
          // option.text throws exceptions (#14686, #14858)
          // Strip and collapse whitespace
          // https://html.spec.whatwg.org/#strip-and-collapse-whitespace
          stripAndCollapse(jQuery.text(elem));
        }
      },
      select: {
        get: function get(elem) {
          var value,
              option,
              i,
              options = elem.options,
              index = elem.selectedIndex,
              one = elem.type === "select-one",
              values = one ? null : [],
              max = one ? index + 1 : options.length;

          if (index < 0) {
            i = max;
          } else {
            i = one ? index : 0;
          } // Loop through all the selected options


          for (; i < max; i++) {
            option = options[i]; // Support: IE <=9 only
            // IE8-9 doesn't update selected after form reset (#2551)

            if ((option.selected || i === index) && // Don't return options that are disabled or in a disabled optgroup
            !option.disabled && (!option.parentNode.disabled || !nodeName(option.parentNode, "optgroup"))) {
              // Get the specific value for the option
              value = jQuery(option).val(); // We don't need an array for one selects

              if (one) {
                return value;
              } // Multi-Selects return an array


              values.push(value);
            }
          }

          return values;
        },
        set: function set(elem, value) {
          var optionSet,
              option,
              options = elem.options,
              values = jQuery.makeArray(value),
              i = options.length;

          while (i--) {
            option = options[i];
            /* eslint-disable no-cond-assign */

            if (option.selected = jQuery.inArray(jQuery.valHooks.option.get(option), values) > -1) {
              optionSet = true;
            }
            /* eslint-enable no-cond-assign */

          } // Force browsers to behave consistently when non-matching value is set


          if (!optionSet) {
            elem.selectedIndex = -1;
          }

          return values;
        }
      }
    }
  }); // Radios and checkboxes getter/setter

  jQuery.each(["radio", "checkbox"], function () {
    jQuery.valHooks[this] = {
      set: function set(elem, value) {
        if (Array.isArray(value)) {
          return elem.checked = jQuery.inArray(jQuery(elem).val(), value) > -1;
        }
      }
    };

    if (!support.checkOn) {
      jQuery.valHooks[this].get = function (elem) {
        return elem.getAttribute("value") === null ? "on" : elem.value;
      };
    }
  }); // Return jQuery for attributes-only inclusion

  support.focusin = "onfocusin" in window;

  var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
      stopPropagationCallback = function stopPropagationCallback(e) {
    e.stopPropagation();
  };

  jQuery.extend(jQuery.event, {
    trigger: function trigger(event, data, elem, onlyHandlers) {
      var i,
          cur,
          tmp,
          bubbleType,
          ontype,
          handle,
          special,
          lastElement,
          eventPath = [elem || document],
          type = hasOwn.call(event, "type") ? event.type : event,
          namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
      cur = lastElement = tmp = elem = elem || document; // Don't do events on text and comment nodes

      if (elem.nodeType === 3 || elem.nodeType === 8) {
        return;
      } // focus/blur morphs to focusin/out; ensure we're not firing them right now


      if (rfocusMorph.test(type + jQuery.event.triggered)) {
        return;
      }

      if (type.indexOf(".") > -1) {
        // Namespaced trigger; create a regexp to match event type in handle()
        namespaces = type.split(".");
        type = namespaces.shift();
        namespaces.sort();
      }

      ontype = type.indexOf(":") < 0 && "on" + type; // Caller can pass in a jQuery.Event object, Object, or just an event type string

      event = event[jQuery.expando] ? event : new jQuery.Event(type, _typeof(event) === "object" && event); // Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)

      event.isTrigger = onlyHandlers ? 2 : 3;
      event.namespace = namespaces.join(".");
      event.rnamespace = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null; // Clean up the event in case it is being reused

      event.result = undefined;

      if (!event.target) {
        event.target = elem;
      } // Clone any incoming data and prepend the event, creating the handler arg list


      data = data == null ? [event] : jQuery.makeArray(data, [event]); // Allow special events to draw outside the lines

      special = jQuery.event.special[type] || {};

      if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
        return;
      } // Determine event propagation path in advance, per W3C events spec (#9951)
      // Bubble up to document, then to window; watch for a global ownerDocument var (#9724)


      if (!onlyHandlers && !special.noBubble && !isWindow(elem)) {
        bubbleType = special.delegateType || type;

        if (!rfocusMorph.test(bubbleType + type)) {
          cur = cur.parentNode;
        }

        for (; cur; cur = cur.parentNode) {
          eventPath.push(cur);
          tmp = cur;
        } // Only add window if we got to document (e.g., not plain obj or detached DOM)


        if (tmp === (elem.ownerDocument || document)) {
          eventPath.push(tmp.defaultView || tmp.parentWindow || window);
        }
      } // Fire handlers on the event path


      i = 0;

      while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {
        lastElement = cur;
        event.type = i > 1 ? bubbleType : special.bindType || type; // jQuery handler

        handle = (dataPriv.get(cur, "events") || Object.create(null))[event.type] && dataPriv.get(cur, "handle");

        if (handle) {
          handle.apply(cur, data);
        } // Native handler


        handle = ontype && cur[ontype];

        if (handle && handle.apply && acceptData(cur)) {
          event.result = handle.apply(cur, data);

          if (event.result === false) {
            event.preventDefault();
          }
        }
      }

      event.type = type; // If nobody prevented the default action, do it now

      if (!onlyHandlers && !event.isDefaultPrevented()) {
        if ((!special._default || special._default.apply(eventPath.pop(), data) === false) && acceptData(elem)) {
          // Call a native DOM method on the target with the same name as the event.
          // Don't do default actions on window, that's where global variables be (#6170)
          if (ontype && isFunction(elem[type]) && !isWindow(elem)) {
            // Don't re-trigger an onFOO event when we call its FOO() method
            tmp = elem[ontype];

            if (tmp) {
              elem[ontype] = null;
            } // Prevent re-triggering of the same event, since we already bubbled it above


            jQuery.event.triggered = type;

            if (event.isPropagationStopped()) {
              lastElement.addEventListener(type, stopPropagationCallback);
            }

            elem[type]();

            if (event.isPropagationStopped()) {
              lastElement.removeEventListener(type, stopPropagationCallback);
            }

            jQuery.event.triggered = undefined;

            if (tmp) {
              elem[ontype] = tmp;
            }
          }
        }
      }

      return event.result;
    },
    // Piggyback on a donor event to simulate a different one
    // Used only for `focus(in | out)` events
    simulate: function simulate(type, elem, event) {
      var e = jQuery.extend(new jQuery.Event(), event, {
        type: type,
        isSimulated: true
      });
      jQuery.event.trigger(e, null, elem);
    }
  });
  jQuery.fn.extend({
    trigger: function trigger(type, data) {
      return this.each(function () {
        jQuery.event.trigger(type, data, this);
      });
    },
    triggerHandler: function triggerHandler(type, data) {
      var elem = this[0];

      if (elem) {
        return jQuery.event.trigger(type, data, elem, true);
      }
    }
  }); // Support: Firefox <=44
  // Firefox doesn't have focus(in | out) events
  // Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
  //
  // Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
  // focus(in | out) events fire after focus & blur events,
  // which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
  // Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857

  if (!support.focusin) {
    jQuery.each({
      focus: "focusin",
      blur: "focusout"
    }, function (orig, fix) {
      // Attach a single capturing handler on the document while someone wants focusin/focusout
      var handler = function handler(event) {
        jQuery.event.simulate(fix, event.target, jQuery.event.fix(event));
      };

      jQuery.event.special[fix] = {
        setup: function setup() {
          // Handle: regular nodes (via `this.ownerDocument`), window
          // (via `this.document`) & document (via `this`).
          var doc = this.ownerDocument || this.document || this,
              attaches = dataPriv.access(doc, fix);

          if (!attaches) {
            doc.addEventListener(orig, handler, true);
          }

          dataPriv.access(doc, fix, (attaches || 0) + 1);
        },
        teardown: function teardown() {
          var doc = this.ownerDocument || this.document || this,
              attaches = dataPriv.access(doc, fix) - 1;

          if (!attaches) {
            doc.removeEventListener(orig, handler, true);
            dataPriv.remove(doc, fix);
          } else {
            dataPriv.access(doc, fix, attaches);
          }
        }
      };
    });
  }

  var location = window.location;
  var nonce = {
    guid: Date.now()
  };
  var rquery = /\?/; // Cross-browser xml parsing

  jQuery.parseXML = function (data) {
    var xml;

    if (!data || typeof data !== "string") {
      return null;
    } // Support: IE 9 - 11 only
    // IE throws on parseFromString with invalid input.


    try {
      xml = new window.DOMParser().parseFromString(data, "text/xml");
    } catch (e) {
      xml = undefined;
    }

    if (!xml || xml.getElementsByTagName("parsererror").length) {
      jQuery.error("Invalid XML: " + data);
    }

    return xml;
  };

  var rbracket = /\[\]$/,
      rCRLF = /\r?\n/g,
      rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
      rsubmittable = /^(?:input|select|textarea|keygen)/i;

  function buildParams(prefix, obj, traditional, add) {
    var name;

    if (Array.isArray(obj)) {
      // Serialize array item.
      jQuery.each(obj, function (i, v) {
        if (traditional || rbracket.test(prefix)) {
          // Treat each array item as a scalar.
          add(prefix, v);
        } else {
          // Item is non-scalar (array or object), encode its numeric index.
          buildParams(prefix + "[" + (_typeof(v) === "object" && v != null ? i : "") + "]", v, traditional, add);
        }
      });
    } else if (!traditional && toType(obj) === "object") {
      // Serialize object item.
      for (name in obj) {
        buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
      }
    } else {
      // Serialize scalar item.
      add(prefix, obj);
    }
  } // Serialize an array of form elements or a set of
  // key/values into a query string


  jQuery.param = function (a, traditional) {
    var prefix,
        s = [],
        add = function add(key, valueOrFunction) {
      // If value is a function, invoke it and use its return value
      var value = isFunction(valueOrFunction) ? valueOrFunction() : valueOrFunction;
      s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value == null ? "" : value);
    };

    if (a == null) {
      return "";
    } // If an array was passed in, assume that it is an array of form elements.


    if (Array.isArray(a) || a.jquery && !jQuery.isPlainObject(a)) {
      // Serialize the form elements
      jQuery.each(a, function () {
        add(this.name, this.value);
      });
    } else {
      // If traditional, encode the "old" way (the way 1.3.2 or older
      // did it), otherwise encode params recursively.
      for (prefix in a) {
        buildParams(prefix, a[prefix], traditional, add);
      }
    } // Return the resulting serialization


    return s.join("&");
  };

  jQuery.fn.extend({
    serialize: function serialize() {
      return jQuery.param(this.serializeArray());
    },
    serializeArray: function serializeArray() {
      return this.map(function () {
        // Can add propHook for "elements" to filter or add form elements
        var elements = jQuery.prop(this, "elements");
        return elements ? jQuery.makeArray(elements) : this;
      }).filter(function () {
        var type = this.type; // Use .is( ":disabled" ) so that fieldset[disabled] works

        return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
      }).map(function (_i, elem) {
        var val = jQuery(this).val();

        if (val == null) {
          return null;
        }

        if (Array.isArray(val)) {
          return jQuery.map(val, function (val) {
            return {
              name: elem.name,
              value: val.replace(rCRLF, "\r\n")
            };
          });
        }

        return {
          name: elem.name,
          value: val.replace(rCRLF, "\r\n")
        };
      }).get();
    }
  });
  var r20 = /%20/g,
      rhash = /#.*$/,
      rantiCache = /([?&])_=[^&]*/,
      rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,
      // #7653, #8125, #8152: local protocol detection
  rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      rnoContent = /^(?:GET|HEAD)$/,
      rprotocol = /^\/\//,

  /* Prefilters
   * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
   * 2) These are called:
   *    - BEFORE asking for a transport
   *    - AFTER param serialization (s.data is a string if s.processData is true)
   * 3) key is the dataType
   * 4) the catchall symbol "*" can be used
   * 5) execution will start with transport dataType and THEN continue down to "*" if needed
   */
  prefilters = {},

  /* Transports bindings
   * 1) key is the dataType
   * 2) the catchall symbol "*" can be used
   * 3) selection will start with transport dataType and THEN go to "*" if needed
   */
  transports = {},
      // Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
  allTypes = "*/".concat("*"),
      // Anchor tag for parsing the document origin
  originAnchor = document.createElement("a");
  originAnchor.href = location.href; // Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport

  function addToPrefiltersOrTransports(structure) {
    // dataTypeExpression is optional and defaults to "*"
    return function (dataTypeExpression, func) {
      if (typeof dataTypeExpression !== "string") {
        func = dataTypeExpression;
        dataTypeExpression = "*";
      }

      var dataType,
          i = 0,
          dataTypes = dataTypeExpression.toLowerCase().match(rnothtmlwhite) || [];

      if (isFunction(func)) {
        // For each dataType in the dataTypeExpression
        while (dataType = dataTypes[i++]) {
          // Prepend if requested
          if (dataType[0] === "+") {
            dataType = dataType.slice(1) || "*";
            (structure[dataType] = structure[dataType] || []).unshift(func); // Otherwise append
          } else {
            (structure[dataType] = structure[dataType] || []).push(func);
          }
        }
      }
    };
  } // Base inspection function for prefilters and transports


  function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
    var inspected = {},
        seekingTransport = structure === transports;

    function inspect(dataType) {
      var selected;
      inspected[dataType] = true;
      jQuery.each(structure[dataType] || [], function (_, prefilterOrFactory) {
        var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);

        if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {
          options.dataTypes.unshift(dataTypeOrTransport);
          inspect(dataTypeOrTransport);
          return false;
        } else if (seekingTransport) {
          return !(selected = dataTypeOrTransport);
        }
      });
      return selected;
    }

    return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
  } // A special extend for ajax options
  // that takes "flat" options (not to be deep extended)
  // Fixes #9887


  function ajaxExtend(target, src) {
    var key,
        deep,
        flatOptions = jQuery.ajaxSettings.flatOptions || {};

    for (key in src) {
      if (src[key] !== undefined) {
        (flatOptions[key] ? target : deep || (deep = {}))[key] = src[key];
      }
    }

    if (deep) {
      jQuery.extend(true, target, deep);
    }

    return target;
  }
  /* Handles responses to an ajax request:
   * - finds the right dataType (mediates between content-type and expected dataType)
   * - returns the corresponding response
   */


  function ajaxHandleResponses(s, jqXHR, responses) {
    var ct,
        type,
        finalDataType,
        firstDataType,
        contents = s.contents,
        dataTypes = s.dataTypes; // Remove auto dataType and get content-type in the process

    while (dataTypes[0] === "*") {
      dataTypes.shift();

      if (ct === undefined) {
        ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
      }
    } // Check if we're dealing with a known content-type


    if (ct) {
      for (type in contents) {
        if (contents[type] && contents[type].test(ct)) {
          dataTypes.unshift(type);
          break;
        }
      }
    } // Check to see if we have a response for the expected dataType


    if (dataTypes[0] in responses) {
      finalDataType = dataTypes[0];
    } else {
      // Try convertible dataTypes
      for (type in responses) {
        if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
          finalDataType = type;
          break;
        }

        if (!firstDataType) {
          firstDataType = type;
        }
      } // Or just use first one


      finalDataType = finalDataType || firstDataType;
    } // If we found a dataType
    // We add the dataType to the list if needed
    // and return the corresponding response


    if (finalDataType) {
      if (finalDataType !== dataTypes[0]) {
        dataTypes.unshift(finalDataType);
      }

      return responses[finalDataType];
    }
  }
  /* Chain conversions given the request and the original response
   * Also sets the responseXXX fields on the jqXHR instance
   */


  function ajaxConvert(s, response, jqXHR, isSuccess) {
    var conv2,
        current,
        conv,
        tmp,
        prev,
        converters = {},
        // Work with a copy of dataTypes in case we need to modify it for conversion
    dataTypes = s.dataTypes.slice(); // Create converters map with lowercased keys

    if (dataTypes[1]) {
      for (conv in s.converters) {
        converters[conv.toLowerCase()] = s.converters[conv];
      }
    }

    current = dataTypes.shift(); // Convert to each sequential dataType

    while (current) {
      if (s.responseFields[current]) {
        jqXHR[s.responseFields[current]] = response;
      } // Apply the dataFilter if provided


      if (!prev && isSuccess && s.dataFilter) {
        response = s.dataFilter(response, s.dataType);
      }

      prev = current;
      current = dataTypes.shift();

      if (current) {
        // There's only work to do if current dataType is non-auto
        if (current === "*") {
          current = prev; // Convert response if prev dataType is non-auto and differs from current
        } else if (prev !== "*" && prev !== current) {
          // Seek a direct converter
          conv = converters[prev + " " + current] || converters["* " + current]; // If none found, seek a pair

          if (!conv) {
            for (conv2 in converters) {
              // If conv2 outputs current
              tmp = conv2.split(" ");

              if (tmp[1] === current) {
                // If prev can be converted to accepted input
                conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];

                if (conv) {
                  // Condense equivalence converters
                  if (conv === true) {
                    conv = converters[conv2]; // Otherwise, insert the intermediate dataType
                  } else if (converters[conv2] !== true) {
                    current = tmp[0];
                    dataTypes.unshift(tmp[1]);
                  }

                  break;
                }
              }
            }
          } // Apply converter (if not an equivalence)


          if (conv !== true) {
            // Unless errors are allowed to bubble, catch and return them
            if (conv && s["throws"]) {
              response = conv(response);
            } else {
              try {
                response = conv(response);
              } catch (e) {
                return {
                  state: "parsererror",
                  error: conv ? e : "No conversion from " + prev + " to " + current
                };
              }
            }
          }
        }
      }
    }

    return {
      state: "success",
      data: response
    };
  }

  jQuery.extend({
    // Counter for holding the number of active queries
    active: 0,
    // Last-Modified header cache for next request
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: location.href,
      type: "GET",
      isLocal: rlocalProtocol.test(location.protocol),
      global: true,
      processData: true,
      async: true,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",

      /*
      timeout: 0,
      data: null,
      dataType: null,
      username: null,
      password: null,
      cache: null,
      throws: false,
      traditional: false,
      headers: {},
      */
      accepts: {
        "*": allTypes,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {
        xml: /\bxml\b/,
        html: /\bhtml/,
        json: /\bjson\b/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },
      // Data converters
      // Keys separate source (or catchall "*") and destination types with a single space
      converters: {
        // Convert anything to text
        "* text": String,
        // Text to html (true = no transformation)
        "text html": true,
        // Evaluate text as a json expression
        "text json": JSON.parse,
        // Parse text as xml
        "text xml": jQuery.parseXML
      },
      // For options that shouldn't be deep extended:
      // you can add your own custom options here if
      // and when you create one that shouldn't be
      // deep extended (see ajaxExtend)
      flatOptions: {
        url: true,
        context: true
      }
    },
    // Creates a full fledged settings object into target
    // with both ajaxSettings and settings fields.
    // If target is omitted, writes into ajaxSettings.
    ajaxSetup: function ajaxSetup(target, settings) {
      return settings ? // Building a settings object
      ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) : // Extending ajaxSettings
      ajaxExtend(jQuery.ajaxSettings, target);
    },
    ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
    ajaxTransport: addToPrefiltersOrTransports(transports),
    // Main method
    ajax: function ajax(url, options) {
      // If url is an object, simulate pre-1.5 signature
      if (_typeof(url) === "object") {
        options = url;
        url = undefined;
      } // Force options to be an object


      options = options || {};

      var transport,
          // URL without anti-cache param
      cacheURL,
          // Response headers
      responseHeadersString,
          responseHeaders,
          // timeout handle
      timeoutTimer,
          // Url cleanup var
      urlAnchor,
          // Request state (becomes false upon send and true upon completion)
      completed,
          // To know if global events are to be dispatched
      fireGlobals,
          // Loop variable
      i,
          // uncached part of the url
      uncached,
          // Create the final options object
      s = jQuery.ajaxSetup({}, options),
          // Callbacks context
      callbackContext = s.context || s,
          // Context for global events is callbackContext if it is a DOM node or jQuery collection
      globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event,
          // Deferreds
      deferred = jQuery.Deferred(),
          completeDeferred = jQuery.Callbacks("once memory"),
          // Status-dependent callbacks
      _statusCode = s.statusCode || {},
          // Headers (they are sent all at once)
      requestHeaders = {},
          requestHeadersNames = {},
          // Default abort message
      strAbort = "canceled",
          // Fake xhr
      jqXHR = {
        readyState: 0,
        // Builds headers hashtable if needed
        getResponseHeader: function getResponseHeader(key) {
          var match;

          if (completed) {
            if (!responseHeaders) {
              responseHeaders = {};

              while (match = rheaders.exec(responseHeadersString)) {
                responseHeaders[match[1].toLowerCase() + " "] = (responseHeaders[match[1].toLowerCase() + " "] || []).concat(match[2]);
              }
            }

            match = responseHeaders[key.toLowerCase() + " "];
          }

          return match == null ? null : match.join(", ");
        },
        // Raw string
        getAllResponseHeaders: function getAllResponseHeaders() {
          return completed ? responseHeadersString : null;
        },
        // Caches the header
        setRequestHeader: function setRequestHeader(name, value) {
          if (completed == null) {
            name = requestHeadersNames[name.toLowerCase()] = requestHeadersNames[name.toLowerCase()] || name;
            requestHeaders[name] = value;
          }

          return this;
        },
        // Overrides response content-type header
        overrideMimeType: function overrideMimeType(type) {
          if (completed == null) {
            s.mimeType = type;
          }

          return this;
        },
        // Status-dependent callbacks
        statusCode: function statusCode(map) {
          var code;

          if (map) {
            if (completed) {
              // Execute the appropriate callbacks
              jqXHR.always(map[jqXHR.status]);
            } else {
              // Lazy-add the new callbacks in a way that preserves old ones
              for (code in map) {
                _statusCode[code] = [_statusCode[code], map[code]];
              }
            }
          }

          return this;
        },
        // Cancel the request
        abort: function abort(statusText) {
          var finalText = statusText || strAbort;

          if (transport) {
            transport.abort(finalText);
          }

          done(0, finalText);
          return this;
        }
      }; // Attach deferreds


      deferred.promise(jqXHR); // Add protocol if not provided (prefilters might expect it)
      // Handle falsy url in the settings object (#10093: consistency with old signature)
      // We also use the url parameter if available

      s.url = ((url || s.url || location.href) + "").replace(rprotocol, location.protocol + "//"); // Alias method option to type as per ticket #12004

      s.type = options.method || options.type || s.method || s.type; // Extract dataTypes list

      s.dataTypes = (s.dataType || "*").toLowerCase().match(rnothtmlwhite) || [""]; // A cross-domain request is in order when the origin doesn't match the current origin.

      if (s.crossDomain == null) {
        urlAnchor = document.createElement("a"); // Support: IE <=8 - 11, Edge 12 - 15
        // IE throws exception on accessing the href property if url is malformed,
        // e.g. http://example.com:80x/

        try {
          urlAnchor.href = s.url; // Support: IE <=8 - 11 only
          // Anchor's host property isn't correctly set when s.url is relative

          urlAnchor.href = urlAnchor.href;
          s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !== urlAnchor.protocol + "//" + urlAnchor.host;
        } catch (e) {
          // If there is an error parsing the URL, assume it is crossDomain,
          // it can be rejected by the transport if it is invalid
          s.crossDomain = true;
        }
      } // Convert data if not already a string


      if (s.data && s.processData && typeof s.data !== "string") {
        s.data = jQuery.param(s.data, s.traditional);
      } // Apply prefilters


      inspectPrefiltersOrTransports(prefilters, s, options, jqXHR); // If request was aborted inside a prefilter, stop there

      if (completed) {
        return jqXHR;
      } // We can fire global events as of now if asked to
      // Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)


      fireGlobals = jQuery.event && s.global; // Watch for a new set of requests

      if (fireGlobals && jQuery.active++ === 0) {
        jQuery.event.trigger("ajaxStart");
      } // Uppercase the type


      s.type = s.type.toUpperCase(); // Determine if request has content

      s.hasContent = !rnoContent.test(s.type); // Save the URL in case we're toying with the If-Modified-Since
      // and/or If-None-Match header later on
      // Remove hash to simplify url manipulation

      cacheURL = s.url.replace(rhash, ""); // More options handling for requests with no content

      if (!s.hasContent) {
        // Remember the hash so we can put it back
        uncached = s.url.slice(cacheURL.length); // If data is available and should be processed, append data to url

        if (s.data && (s.processData || typeof s.data === "string")) {
          cacheURL += (rquery.test(cacheURL) ? "&" : "?") + s.data; // #9682: remove data so that it's not used in an eventual retry

          delete s.data;
        } // Add or update anti-cache param if needed


        if (s.cache === false) {
          cacheURL = cacheURL.replace(rantiCache, "$1");
          uncached = (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce.guid++ + uncached;
        } // Put hash and anti-cache on the URL that will be requested (gh-1732)


        s.url = cacheURL + uncached; // Change '%20' to '+' if this is encoded form body content (gh-2658)
      } else if (s.data && s.processData && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0) {
        s.data = s.data.replace(r20, "+");
      } // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.


      if (s.ifModified) {
        if (jQuery.lastModified[cacheURL]) {
          jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]);
        }

        if (jQuery.etag[cacheURL]) {
          jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL]);
        }
      } // Set the correct header, if data is being sent


      if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
        jqXHR.setRequestHeader("Content-Type", s.contentType);
      } // Set the Accepts header for the server, depending on the dataType


      jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]); // Check for headers option

      for (i in s.headers) {
        jqXHR.setRequestHeader(i, s.headers[i]);
      } // Allow custom headers/mimetypes and early abort


      if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || completed)) {
        // Abort if not done already and return
        return jqXHR.abort();
      } // Aborting is no longer a cancellation


      strAbort = "abort"; // Install callbacks on deferreds

      completeDeferred.add(s.complete);
      jqXHR.done(s.success);
      jqXHR.fail(s.error); // Get transport

      transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR); // If no transport, we auto-abort

      if (!transport) {
        done(-1, "No Transport");
      } else {
        jqXHR.readyState = 1; // Send global event

        if (fireGlobals) {
          globalEventContext.trigger("ajaxSend", [jqXHR, s]);
        } // If request was aborted inside ajaxSend, stop there


        if (completed) {
          return jqXHR;
        } // Timeout


        if (s.async && s.timeout > 0) {
          timeoutTimer = window.setTimeout(function () {
            jqXHR.abort("timeout");
          }, s.timeout);
        }

        try {
          completed = false;
          transport.send(requestHeaders, done);
        } catch (e) {
          // Rethrow post-completion exceptions
          if (completed) {
            throw e;
          } // Propagate others as results


          done(-1, e);
        }
      } // Callback for when everything is done


      function done(status, nativeStatusText, responses, headers) {
        var isSuccess,
            success,
            error,
            response,
            modified,
            statusText = nativeStatusText; // Ignore repeat invocations

        if (completed) {
          return;
        }

        completed = true; // Clear timeout if it exists

        if (timeoutTimer) {
          window.clearTimeout(timeoutTimer);
        } // Dereference transport for early garbage collection
        // (no matter how long the jqXHR object will be used)


        transport = undefined; // Cache response headers

        responseHeadersString = headers || ""; // Set readyState

        jqXHR.readyState = status > 0 ? 4 : 0; // Determine if successful

        isSuccess = status >= 200 && status < 300 || status === 304; // Get response data

        if (responses) {
          response = ajaxHandleResponses(s, jqXHR, responses);
        } // Use a noop converter for missing script


        if (!isSuccess && jQuery.inArray("script", s.dataTypes) > -1) {
          s.converters["text script"] = function () {};
        } // Convert no matter what (that way responseXXX fields are always set)


        response = ajaxConvert(s, response, jqXHR, isSuccess); // If successful, handle type chaining

        if (isSuccess) {
          // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
          if (s.ifModified) {
            modified = jqXHR.getResponseHeader("Last-Modified");

            if (modified) {
              jQuery.lastModified[cacheURL] = modified;
            }

            modified = jqXHR.getResponseHeader("etag");

            if (modified) {
              jQuery.etag[cacheURL] = modified;
            }
          } // if no content


          if (status === 204 || s.type === "HEAD") {
            statusText = "nocontent"; // if not modified
          } else if (status === 304) {
            statusText = "notmodified"; // If we have data, let's convert it
          } else {
            statusText = response.state;
            success = response.data;
            error = response.error;
            isSuccess = !error;
          }
        } else {
          // Extract error from statusText and normalize for non-aborts
          error = statusText;

          if (status || !statusText) {
            statusText = "error";

            if (status < 0) {
              status = 0;
            }
          }
        } // Set data for the fake xhr object


        jqXHR.status = status;
        jqXHR.statusText = (nativeStatusText || statusText) + ""; // Success/Error

        if (isSuccess) {
          deferred.resolveWith(callbackContext, [success, statusText, jqXHR]);
        } else {
          deferred.rejectWith(callbackContext, [jqXHR, statusText, error]);
        } // Status-dependent callbacks


        jqXHR.statusCode(_statusCode);
        _statusCode = undefined;

        if (fireGlobals) {
          globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [jqXHR, s, isSuccess ? success : error]);
        } // Complete


        completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);

        if (fireGlobals) {
          globalEventContext.trigger("ajaxComplete", [jqXHR, s]); // Handle the global AJAX counter

          if (! --jQuery.active) {
            jQuery.event.trigger("ajaxStop");
          }
        }
      }

      return jqXHR;
    },
    getJSON: function getJSON(url, data, callback) {
      return jQuery.get(url, data, callback, "json");
    },
    getScript: function getScript(url, callback) {
      return jQuery.get(url, undefined, callback, "script");
    }
  });
  jQuery.each(["get", "post"], function (_i, method) {
    jQuery[method] = function (url, data, callback, type) {
      // Shift arguments if data argument was omitted
      if (isFunction(data)) {
        type = type || callback;
        callback = data;
        data = undefined;
      } // The url can be an options object (which then must have .url)


      return jQuery.ajax(jQuery.extend({
        url: url,
        type: method,
        dataType: type,
        data: data,
        success: callback
      }, jQuery.isPlainObject(url) && url));
    };
  });
  jQuery.ajaxPrefilter(function (s) {
    var i;

    for (i in s.headers) {
      if (i.toLowerCase() === "content-type") {
        s.contentType = s.headers[i] || "";
      }
    }
  });

  jQuery._evalUrl = function (url, options, doc) {
    return jQuery.ajax({
      url: url,
      // Make this explicit, since user can override this through ajaxSetup (#11264)
      type: "GET",
      dataType: "script",
      cache: true,
      async: false,
      global: false,
      // Only evaluate the response if it is successful (gh-4126)
      // dataFilter is not invoked for failure responses, so using it instead
      // of the default converter is kludgy but it works.
      converters: {
        "text script": function textScript() {}
      },
      dataFilter: function dataFilter(response) {
        jQuery.globalEval(response, options, doc);
      }
    });
  };

  jQuery.fn.extend({
    wrapAll: function wrapAll(html) {
      var wrap;

      if (this[0]) {
        if (isFunction(html)) {
          html = html.call(this[0]);
        } // The elements to wrap the target around


        wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);

        if (this[0].parentNode) {
          wrap.insertBefore(this[0]);
        }

        wrap.map(function () {
          var elem = this;

          while (elem.firstElementChild) {
            elem = elem.firstElementChild;
          }

          return elem;
        }).append(this);
      }

      return this;
    },
    wrapInner: function wrapInner(html) {
      if (isFunction(html)) {
        return this.each(function (i) {
          jQuery(this).wrapInner(html.call(this, i));
        });
      }

      return this.each(function () {
        var self = jQuery(this),
            contents = self.contents();

        if (contents.length) {
          contents.wrapAll(html);
        } else {
          self.append(html);
        }
      });
    },
    wrap: function wrap(html) {
      var htmlIsFunction = isFunction(html);
      return this.each(function (i) {
        jQuery(this).wrapAll(htmlIsFunction ? html.call(this, i) : html);
      });
    },
    unwrap: function unwrap(selector) {
      this.parent(selector).not("body").each(function () {
        jQuery(this).replaceWith(this.childNodes);
      });
      return this;
    }
  });

  jQuery.expr.pseudos.hidden = function (elem) {
    return !jQuery.expr.pseudos.visible(elem);
  };

  jQuery.expr.pseudos.visible = function (elem) {
    return !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
  };

  jQuery.ajaxSettings.xhr = function () {
    try {
      return new window.XMLHttpRequest();
    } catch (e) {}
  };

  var xhrSuccessStatus = {
    // File protocol always yields status code 0, assume 200
    0: 200,
    // Support: IE <=9 only
    // #1450: sometimes IE returns 1223 when it should be 204
    1223: 204
  },
      xhrSupported = jQuery.ajaxSettings.xhr();
  support.cors = !!xhrSupported && "withCredentials" in xhrSupported;
  support.ajax = xhrSupported = !!xhrSupported;
  jQuery.ajaxTransport(function (options) {
    var _callback, errorCallback; // Cross domain only allowed if supported through XMLHttpRequest


    if (support.cors || xhrSupported && !options.crossDomain) {
      return {
        send: function send(headers, complete) {
          var i,
              xhr = options.xhr();
          xhr.open(options.type, options.url, options.async, options.username, options.password); // Apply custom fields if provided

          if (options.xhrFields) {
            for (i in options.xhrFields) {
              xhr[i] = options.xhrFields[i];
            }
          } // Override mime type if needed


          if (options.mimeType && xhr.overrideMimeType) {
            xhr.overrideMimeType(options.mimeType);
          } // X-Requested-With header
          // For cross-domain requests, seeing as conditions for a preflight are
          // akin to a jigsaw puzzle, we simply never set it to be sure.
          // (it can always be set on a per-request basis or even using ajaxSetup)
          // For same-domain requests, won't change header if already provided.


          if (!options.crossDomain && !headers["X-Requested-With"]) {
            headers["X-Requested-With"] = "XMLHttpRequest";
          } // Set headers


          for (i in headers) {
            xhr.setRequestHeader(i, headers[i]);
          } // Callback


          _callback = function callback(type) {
            return function () {
              if (_callback) {
                _callback = errorCallback = xhr.onload = xhr.onerror = xhr.onabort = xhr.ontimeout = xhr.onreadystatechange = null;

                if (type === "abort") {
                  xhr.abort();
                } else if (type === "error") {
                  // Support: IE <=9 only
                  // On a manual native abort, IE9 throws
                  // errors on any property access that is not readyState
                  if (typeof xhr.status !== "number") {
                    complete(0, "error");
                  } else {
                    complete( // File: protocol always yields status 0; see #8605, #14207
                    xhr.status, xhr.statusText);
                  }
                } else {
                  complete(xhrSuccessStatus[xhr.status] || xhr.status, xhr.statusText, // Support: IE <=9 only
                  // IE9 has no XHR2 but throws on binary (trac-11426)
                  // For XHR2 non-text, let the caller handle it (gh-2498)
                  (xhr.responseType || "text") !== "text" || typeof xhr.responseText !== "string" ? {
                    binary: xhr.response
                  } : {
                    text: xhr.responseText
                  }, xhr.getAllResponseHeaders());
                }
              }
            };
          }; // Listen to events


          xhr.onload = _callback();
          errorCallback = xhr.onerror = xhr.ontimeout = _callback("error"); // Support: IE 9 only
          // Use onreadystatechange to replace onabort
          // to handle uncaught aborts

          if (xhr.onabort !== undefined) {
            xhr.onabort = errorCallback;
          } else {
            xhr.onreadystatechange = function () {
              // Check readyState before timeout as it changes
              if (xhr.readyState === 4) {
                // Allow onerror to be called first,
                // but that will not handle a native abort
                // Also, save errorCallback to a variable
                // as xhr.onerror cannot be accessed
                window.setTimeout(function () {
                  if (_callback) {
                    errorCallback();
                  }
                });
              }
            };
          } // Create the abort callback


          _callback = _callback("abort");

          try {
            // Do send the request (this may raise an exception)
            xhr.send(options.hasContent && options.data || null);
          } catch (e) {
            // #14683: Only rethrow if this hasn't been notified as an error yet
            if (_callback) {
              throw e;
            }
          }
        },
        abort: function abort() {
          if (_callback) {
            _callback();
          }
        }
      };
    }
  }); // Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)

  jQuery.ajaxPrefilter(function (s) {
    if (s.crossDomain) {
      s.contents.script = false;
    }
  }); // Install script dataType

  jQuery.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, " + "application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /\b(?:java|ecma)script\b/
    },
    converters: {
      "text script": function textScript(text) {
        jQuery.globalEval(text);
        return text;
      }
    }
  }); // Handle cache's special case and crossDomain

  jQuery.ajaxPrefilter("script", function (s) {
    if (s.cache === undefined) {
      s.cache = false;
    }

    if (s.crossDomain) {
      s.type = "GET";
    }
  }); // Bind script tag hack transport

  jQuery.ajaxTransport("script", function (s) {
    // This transport only deals with cross domain or forced-by-attrs requests
    if (s.crossDomain || s.scriptAttrs) {
      var script, _callback2;

      return {
        send: function send(_, complete) {
          script = jQuery("<script>").attr(s.scriptAttrs || {}).prop({
            charset: s.scriptCharset,
            src: s.url
          }).on("load error", _callback2 = function callback(evt) {
            script.remove();
            _callback2 = null;

            if (evt) {
              complete(evt.type === "error" ? 404 : 200, evt.type);
            }
          }); // Use native DOM manipulation to avoid our domManip AJAX trickery

          document.head.appendChild(script[0]);
        },
        abort: function abort() {
          if (_callback2) {
            _callback2();
          }
        }
      };
    }
  });
  var oldCallbacks = [],
      rjsonp = /(=)\?(?=&|$)|\?\?/; // Default jsonp settings

  jQuery.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function jsonpCallback() {
      var callback = oldCallbacks.pop() || jQuery.expando + "_" + nonce.guid++;
      this[callback] = true;
      return callback;
    }
  }); // Detect, normalize options and install callbacks for jsonp requests

  jQuery.ajaxPrefilter("json jsonp", function (s, originalSettings, jqXHR) {
    var callbackName,
        overwritten,
        responseContainer,
        jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ? "url" : typeof s.data === "string" && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && rjsonp.test(s.data) && "data"); // Handle iff the expected data type is "jsonp" or we have a parameter to set

    if (jsonProp || s.dataTypes[0] === "jsonp") {
      // Get callback name, remembering preexisting value associated with it
      callbackName = s.jsonpCallback = isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback; // Insert callback into url or form data

      if (jsonProp) {
        s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName);
      } else if (s.jsonp !== false) {
        s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
      } // Use data converter to retrieve json after script execution


      s.converters["script json"] = function () {
        if (!responseContainer) {
          jQuery.error(callbackName + " was not called");
        }

        return responseContainer[0];
      }; // Force json dataType


      s.dataTypes[0] = "json"; // Install callback

      overwritten = window[callbackName];

      window[callbackName] = function () {
        responseContainer = arguments;
      }; // Clean-up function (fires after converters)


      jqXHR.always(function () {
        // If previous value didn't exist - remove it
        if (overwritten === undefined) {
          jQuery(window).removeProp(callbackName); // Otherwise restore preexisting value
        } else {
          window[callbackName] = overwritten;
        } // Save back as free


        if (s[callbackName]) {
          // Make sure that re-using the options doesn't screw things around
          s.jsonpCallback = originalSettings.jsonpCallback; // Save the callback name for future use

          oldCallbacks.push(callbackName);
        } // Call if it was a function and we have a response


        if (responseContainer && isFunction(overwritten)) {
          overwritten(responseContainer[0]);
        }

        responseContainer = overwritten = undefined;
      }); // Delegate to script

      return "script";
    }
  }); // Support: Safari 8 only
  // In Safari 8 documents created via document.implementation.createHTMLDocument
  // collapse sibling forms: the second one becomes a child of the first one.
  // Because of that, this security measure has to be disabled in Safari 8.
  // https://bugs.webkit.org/show_bug.cgi?id=137337

  support.createHTMLDocument = function () {
    var body = document.implementation.createHTMLDocument("").body;
    body.innerHTML = "<form></form><form></form>";
    return body.childNodes.length === 2;
  }(); // Argument "data" should be string of html
  // context (optional): If specified, the fragment will be created in this context,
  // defaults to document
  // keepScripts (optional): If true, will include scripts passed in the html string


  jQuery.parseHTML = function (data, context, keepScripts) {
    if (typeof data !== "string") {
      return [];
    }

    if (typeof context === "boolean") {
      keepScripts = context;
      context = false;
    }

    var base, parsed, scripts;

    if (!context) {
      // Stop scripts or inline event handlers from being executed immediately
      // by using document.implementation
      if (support.createHTMLDocument) {
        context = document.implementation.createHTMLDocument(""); // Set the base href for the created document
        // so any parsed elements with URLs
        // are based on the document's URL (gh-2965)

        base = context.createElement("base");
        base.href = document.location.href;
        context.head.appendChild(base);
      } else {
        context = document;
      }
    }

    parsed = rsingleTag.exec(data);
    scripts = !keepScripts && []; // Single tag

    if (parsed) {
      return [context.createElement(parsed[1])];
    }

    parsed = buildFragment([data], context, scripts);

    if (scripts && scripts.length) {
      jQuery(scripts).remove();
    }

    return jQuery.merge([], parsed.childNodes);
  };
  /**
   * Load a url into a page
   */


  jQuery.fn.load = function (url, params, callback) {
    var selector,
        type,
        response,
        self = this,
        off = url.indexOf(" ");

    if (off > -1) {
      selector = stripAndCollapse(url.slice(off));
      url = url.slice(0, off);
    } // If it's a function


    if (isFunction(params)) {
      // We assume that it's the callback
      callback = params;
      params = undefined; // Otherwise, build a param string
    } else if (params && _typeof(params) === "object") {
      type = "POST";
    } // If we have elements to modify, make the request


    if (self.length > 0) {
      jQuery.ajax({
        url: url,
        // If "type" variable is undefined, then "GET" method will be used.
        // Make value of this field explicit since
        // user can override it through ajaxSetup method
        type: type || "GET",
        dataType: "html",
        data: params
      }).done(function (responseText) {
        // Save response for use in complete callback
        response = arguments;
        self.html(selector ? // If a selector was specified, locate the right elements in a dummy div
        // Exclude scripts to avoid IE 'Permission Denied' errors
        jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) : // Otherwise use the full result
        responseText); // If the request succeeds, this function gets "data", "status", "jqXHR"
        // but they are ignored because response was set above.
        // If it fails, this function gets "jqXHR", "status", "error"
      }).always(callback && function (jqXHR, status) {
        self.each(function () {
          callback.apply(this, response || [jqXHR.responseText, status, jqXHR]);
        });
      });
    }

    return this;
  };

  jQuery.expr.pseudos.animated = function (elem) {
    return jQuery.grep(jQuery.timers, function (fn) {
      return elem === fn.elem;
    }).length;
  };

  jQuery.offset = {
    setOffset: function setOffset(elem, options, i) {
      var curPosition,
          curLeft,
          curCSSTop,
          curTop,
          curOffset,
          curCSSLeft,
          calculatePosition,
          position = jQuery.css(elem, "position"),
          curElem = jQuery(elem),
          props = {}; // Set position first, in-case top/left are set even on static elem

      if (position === "static") {
        elem.style.position = "relative";
      }

      curOffset = curElem.offset();
      curCSSTop = jQuery.css(elem, "top");
      curCSSLeft = jQuery.css(elem, "left");
      calculatePosition = (position === "absolute" || position === "fixed") && (curCSSTop + curCSSLeft).indexOf("auto") > -1; // Need to be able to calculate position if either
      // top or left is auto and position is either absolute or fixed

      if (calculatePosition) {
        curPosition = curElem.position();
        curTop = curPosition.top;
        curLeft = curPosition.left;
      } else {
        curTop = parseFloat(curCSSTop) || 0;
        curLeft = parseFloat(curCSSLeft) || 0;
      }

      if (isFunction(options)) {
        // Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
        options = options.call(elem, i, jQuery.extend({}, curOffset));
      }

      if (options.top != null) {
        props.top = options.top - curOffset.top + curTop;
      }

      if (options.left != null) {
        props.left = options.left - curOffset.left + curLeft;
      }

      if ("using" in options) {
        options.using.call(elem, props);
      } else {
        if (typeof props.top === "number") {
          props.top += "px";
        }

        if (typeof props.left === "number") {
          props.left += "px";
        }

        curElem.css(props);
      }
    }
  };
  jQuery.fn.extend({
    // offset() relates an element's border box to the document origin
    offset: function offset(options) {
      // Preserve chaining for setter
      if (arguments.length) {
        return options === undefined ? this : this.each(function (i) {
          jQuery.offset.setOffset(this, options, i);
        });
      }

      var rect,
          win,
          elem = this[0];

      if (!elem) {
        return;
      } // Return zeros for disconnected and hidden (display: none) elements (gh-2310)
      // Support: IE <=11 only
      // Running getBoundingClientRect on a
      // disconnected node in IE throws an error


      if (!elem.getClientRects().length) {
        return {
          top: 0,
          left: 0
        };
      } // Get document-relative position by adding viewport scroll to viewport-relative gBCR


      rect = elem.getBoundingClientRect();
      win = elem.ownerDocument.defaultView;
      return {
        top: rect.top + win.pageYOffset,
        left: rect.left + win.pageXOffset
      };
    },
    // position() relates an element's margin box to its offset parent's padding box
    // This corresponds to the behavior of CSS absolute positioning
    position: function position() {
      if (!this[0]) {
        return;
      }

      var offsetParent,
          offset,
          doc,
          elem = this[0],
          parentOffset = {
        top: 0,
        left: 0
      }; // position:fixed elements are offset from the viewport, which itself always has zero offset

      if (jQuery.css(elem, "position") === "fixed") {
        // Assume position:fixed implies availability of getBoundingClientRect
        offset = elem.getBoundingClientRect();
      } else {
        offset = this.offset(); // Account for the *real* offset parent, which can be the document or its root element
        // when a statically positioned element is identified

        doc = elem.ownerDocument;
        offsetParent = elem.offsetParent || doc.documentElement;

        while (offsetParent && (offsetParent === doc.body || offsetParent === doc.documentElement) && jQuery.css(offsetParent, "position") === "static") {
          offsetParent = offsetParent.parentNode;
        }

        if (offsetParent && offsetParent !== elem && offsetParent.nodeType === 1) {
          // Incorporate borders into its offset, since they are outside its content origin
          parentOffset = jQuery(offsetParent).offset();
          parentOffset.top += jQuery.css(offsetParent, "borderTopWidth", true);
          parentOffset.left += jQuery.css(offsetParent, "borderLeftWidth", true);
        }
      } // Subtract parent offsets and element margins


      return {
        top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", true),
        left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", true)
      };
    },
    // This method will return documentElement in the following cases:
    // 1) For the element inside the iframe without offsetParent, this method will return
    //    documentElement of the parent window
    // 2) For the hidden or detached element
    // 3) For body or html element, i.e. in case of the html node - it will return itself
    //
    // but those exceptions were never presented as a real life use-cases
    // and might be considered as more preferable results.
    //
    // This logic, however, is not guaranteed and can change at any point in the future
    offsetParent: function offsetParent() {
      return this.map(function () {
        var offsetParent = this.offsetParent;

        while (offsetParent && jQuery.css(offsetParent, "position") === "static") {
          offsetParent = offsetParent.offsetParent;
        }

        return offsetParent || documentElement;
      });
    }
  }); // Create scrollLeft and scrollTop methods

  jQuery.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function (method, prop) {
    var top = "pageYOffset" === prop;

    jQuery.fn[method] = function (val) {
      return access(this, function (elem, method, val) {
        // Coalesce documents and windows
        var win;

        if (isWindow(elem)) {
          win = elem;
        } else if (elem.nodeType === 9) {
          win = elem.defaultView;
        }

        if (val === undefined) {
          return win ? win[prop] : elem[method];
        }

        if (win) {
          win.scrollTo(!top ? val : win.pageXOffset, top ? val : win.pageYOffset);
        } else {
          elem[method] = val;
        }
      }, method, val, arguments.length);
    };
  }); // Support: Safari <=7 - 9.1, Chrome <=37 - 49
  // Add the top/left cssHooks using jQuery.fn.position
  // Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
  // Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
  // getComputedStyle returns percent when specified for top/left/bottom/right;
  // rather than make the css module depend on the offset module, just check for it here

  jQuery.each(["top", "left"], function (_i, prop) {
    jQuery.cssHooks[prop] = addGetHookIf(support.pixelPosition, function (elem, computed) {
      if (computed) {
        computed = curCSS(elem, prop); // If curCSS returns percentage, fallback to offset

        return rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + "px" : computed;
      }
    });
  }); // Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods

  jQuery.each({
    Height: "height",
    Width: "width"
  }, function (name, type) {
    jQuery.each({
      padding: "inner" + name,
      content: type,
      "": "outer" + name
    }, function (defaultExtra, funcName) {
      // Margin is only for outerHeight, outerWidth
      jQuery.fn[funcName] = function (margin, value) {
        var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"),
            extra = defaultExtra || (margin === true || value === true ? "margin" : "border");
        return access(this, function (elem, type, value) {
          var doc;

          if (isWindow(elem)) {
            // $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
            return funcName.indexOf("outer") === 0 ? elem["inner" + name] : elem.document.documentElement["client" + name];
          } // Get document width or height


          if (elem.nodeType === 9) {
            doc = elem.documentElement; // Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
            // whichever is greatest

            return Math.max(elem.body["scroll" + name], doc["scroll" + name], elem.body["offset" + name], doc["offset" + name], doc["client" + name]);
          }

          return value === undefined ? // Get width or height on the element, requesting but not forcing parseFloat
          jQuery.css(elem, type, extra) : // Set width or height on the element
          jQuery.style(elem, type, value, extra);
        }, type, chainable ? margin : undefined, chainable);
      };
    });
  });
  jQuery.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (_i, type) {
    jQuery.fn[type] = function (fn) {
      return this.on(type, fn);
    };
  });
  jQuery.fn.extend({
    bind: function bind(types, data, fn) {
      return this.on(types, null, data, fn);
    },
    unbind: function unbind(types, fn) {
      return this.off(types, null, fn);
    },
    delegate: function delegate(selector, types, data, fn) {
      return this.on(types, selector, data, fn);
    },
    undelegate: function undelegate(selector, types, fn) {
      // ( namespace ) or ( selector, types [, fn] )
      return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn);
    },
    hover: function hover(fnOver, fnOut) {
      return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
    }
  });
  jQuery.each(("blur focus focusin focusout resize scroll click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select submit keydown keypress keyup contextmenu").split(" "), function (_i, name) {
    // Handle event binding
    jQuery.fn[name] = function (data, fn) {
      return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
    };
  }); // Support: Android <=4.0 only
  // Make sure we trim BOM and NBSP

  var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g; // Bind a function to a context, optionally partially applying any
  // arguments.
  // jQuery.proxy is deprecated to promote standards (specifically Function#bind)
  // However, it is not slated for removal any time soon

  jQuery.proxy = function (fn, context) {
    var tmp, args, proxy;

    if (typeof context === "string") {
      tmp = fn[context];
      context = fn;
      fn = tmp;
    } // Quick check to determine if target is callable, in the spec
    // this throws a TypeError, but we will just return undefined.


    if (!isFunction(fn)) {
      return undefined;
    } // Simulated bind


    args = _slice.call(arguments, 2);

    proxy = function proxy() {
      return fn.apply(context || this, args.concat(_slice.call(arguments)));
    }; // Set the guid of unique handler to the same of original handler, so it can be removed


    proxy.guid = fn.guid = fn.guid || jQuery.guid++;
    return proxy;
  };

  jQuery.holdReady = function (hold) {
    if (hold) {
      jQuery.readyWait++;
    } else {
      jQuery.ready(true);
    }
  };

  jQuery.isArray = Array.isArray;
  jQuery.parseJSON = JSON.parse;
  jQuery.nodeName = nodeName;
  jQuery.isFunction = isFunction;
  jQuery.isWindow = isWindow;
  jQuery.camelCase = camelCase;
  jQuery.type = toType;
  jQuery.now = Date.now;

  jQuery.isNumeric = function (obj) {
    // As of jQuery 3.0, isNumeric is limited to
    // strings and numbers (primitives or objects)
    // that can be coerced to finite numbers (gh-2662)
    var type = jQuery.type(obj);
    return (type === "number" || type === "string") && // parseFloat NaNs numeric-cast false positives ("")
    // ...but misinterprets leading-number strings, particularly hex literals ("0x...")
    // subtraction forces infinities to NaN
    !isNaN(obj - parseFloat(obj));
  };

  jQuery.trim = function (text) {
    return text == null ? "" : (text + "").replace(rtrim, "");
  }; // Register as a named AMD module, since jQuery can be concatenated with other
  // files that may use define, but not via a proper concatenation script that
  // understands anonymous AMD modules. A named AMD is safest and most robust
  // way to register. Lowercase jquery is used because AMD module names are
  // derived from file names, and jQuery is normally delivered in a lowercase
  // file name. Do this after creating the global so that if an AMD module wants
  // to call noConflict to hide this version of jQuery, it will work.
  // Note that for maximum portability, libraries that are not jQuery should
  // declare themselves as anonymous modules, and avoid setting a global if an
  // AMD loader is present. jQuery is a special case. For more information, see
  // https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon


  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return jQuery;
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }

  var // Map over jQuery in case of overwrite
  _jQuery = window.jQuery,
      // Map over the $ in case of overwrite
  _$ = window.$;

  jQuery.noConflict = function (deep) {
    if (window.$ === jQuery) {
      window.$ = _$;
    }

    if (deep && window.jQuery === jQuery) {
      window.jQuery = _jQuery;
    }

    return jQuery;
  }; // Expose jQuery and $ identifiers, even in AMD
  // (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
  // and CommonJS for browser emulators (#13566)


  if (typeof noGlobal === "undefined") {
    window.jQuery = window.$ = jQuery;
  }

  return jQuery;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var g; // This works in non-strict mode

g = function () {
  return this;
}();

try {
  // This works if eval is allowed (see CSP)
  g = g || new Function("return this")();
} catch (e) {
  // This works if the window reference is available
  if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
} // g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}


module.exports = g;

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ })

/******/ });
//# sourceMappingURL=app-66167297b8d7dbbf0800.js.map