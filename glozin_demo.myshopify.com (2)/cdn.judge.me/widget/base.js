! function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    "use strict";

    function n(e, t, n) {}

    function r(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? pe[me.call(e)] || "object" : typeof e
    }

    function i(e) {
        var t = !!e && "length" in e && e.length,
            n = r(e);
        return je(e) || we(e) ? !1 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
    }

    function a(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }

    function o(e, t, n) {
        return je(t) ? xe.grep(e, function(e, r) {
            return !!t.call(e, r, e) !== n
        }) : t.nodeType ? xe.grep(e, function(e) {
            return e === t !== n
        }) : "string" != typeof t ? xe.grep(e, function(e) {
            return ge.call(t, e) > -1 !== n
        }) : xe.filter(t, e, n)
    }

    function s(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }

    function d(e) {
        var t = {};
        return xe.each(e.match(Le) || [], function(e, n) {
            t[n] = !0
        }), t
    }

    function l(e) {
        return e
    }

    function u(e) {
        throw e
    }

    function c(e, t, n, r) {
        var i;
        try {
            e && je(i = e.promise) ? i.call(e).done(t).fail(n) : e && je(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }

    function g() {
        be.removeEventListener("DOMContentLoaded", g), e.removeEventListener("load", g), xe.ready()
    }

    function p(e, t) {
        return t.toUpperCase()
    }

    function m(e) {
        return e.replace(Ne, "ms-").replace(Me, p)
    }

    function f() {
        this.expando = xe.expando + f.uid++
    }

    function _(e) {
        return "true" === e ? !0 : "false" === e ? !1 : "null" === e ? null : e === +e + "" ? +e : $e.test(e) ? JSON.parse(e) : e
    }

    function v(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(ze, "-$&").toLowerCase(), n = e.getAttribute(r), "string" == typeof n) {
                try {
                    n = _(n)
                } catch (i) {}
                Be.set(e, t, n)
            } else n = void 0;
        return n
    }

    function h(e, t, n, r) {
        var i, a, o = 20,
            s = r ? function() {
                return r.cur()
            } : function() {
                return xe.css(e, t, "")
            },
            d = s(),
            l = n && n[3] || (xe.cssNumber[t] ? "" : "px"),
            u = e.nodeType && (xe.cssNumber[t] || "px" !== l && +d) && Ve.exec(xe.css(e, t));
        if (u && u[3] !== l) {
            for (d /= 2, l = l || u[3], u = +d || 1; o--;) xe.style(e, t, u + l), (1 - a) * (1 - (a = s() / d || .5)) <= 0 && (o = 0), u /= a;
            u = 2 * u, xe.style(e, t, u + l), n = n || []
        }
        return n && (u = +u || +d || 0, i = n[1] ? u + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = u, r.end = i)), i
    }

    function j(e) {
        var t, n = e.ownerDocument,
            r = e.nodeName,
            i = Xe[r];
        return i ? i : (t = n.body.appendChild(n.createElement(r)), i = xe.css(t, "display"), t.parentNode.removeChild(t), "none" === i && (i = "block"), Xe[r] = i, i)
    }

    function w(e, t) {
        for (var n, r, i = [], a = 0, o = e.length; o > a; a++) r = e[a], r.style && (n = r.style.display, t ? ("none" === n && (i[a] = He.get(r, "display") || null, i[a] || (r.style.display = "")), "" === r.style.display && Qe(r) && (i[a] = j(r))) : "none" !== n && (i[a] = "none", He.set(r, "display", n)));
        for (a = 0; o > a; a++) null != i[a] && (e[a].style.display = i[a]);
        return e
    }

    function b(e, t) {
        var n;
        return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && a(e, t) ? xe.merge([e], n) : n
    }

    function y(e, t) {
        for (var n = 0, r = e.length; r > n; n++) He.set(e[n], "globalEval", !t || He.get(t[n], "globalEval"))
    }

    function x(e, t, n, i, a) {
        for (var o, s, d, l, u, c, g = t.createDocumentFragment(), p = [], m = 0, f = e.length; f > m; m++)
            if (o = e[m], o || 0 === o)
                if ("object" === r(o)) xe.merge(p, o.nodeType ? [o] : o);
                else if (rt.test(o)) {
            for (s = s || g.appendChild(t.createElement("div")), d = (et.exec(o) || ["", ""])[1].toLowerCase(), l = nt[d] || nt._default, s.innerHTML = l[1] + xe.htmlPrefilter(o) + l[2], c = l[0]; c--;) s = s.lastChild;
            xe.merge(p, s.childNodes), s = g.firstChild, s.textContent = ""
        } else p.push(t.createTextNode(o));
        for (g.textContent = "", m = 0; o = p[m++];)
            if (i && xe.inArray(o, i) > -1) a && a.push(o);
            else if (u = Ke(o), s = b(g.appendChild(o), "script"), u && y(s), n)
            for (c = 0; o = s[c++];) tt.test(o.type || "") && n.push(o);
        return g
    }

    function S() {
        return !0
    }

    function T() {
        return !1
    }

    function C(e, t) {
        return e === k() == ("focus" === t)
    }

    function k() {
        try {
            return be.activeElement
        } catch (e) {}
    }

    function F(e, t, n, r, i, a) {
        var o, s;
        if ("object" == typeof t) {
            "string" != typeof n && (r = r || n, n = void 0);
            for (s in t) F(e, s, n, r, t[s], a);
            return e
        }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), i === !1) i = T;
        else if (!i) return e;
        return 1 === a && (o = i, i = function(e) {
            return xe().off(e), o.apply(this, arguments)
        }, i.guid = o.guid || (o.guid = xe.guid++)), e.each(function() {
            xe.event.add(this, t, i, r, n)
        })
    }

    function E(e, t, n) {
        return n ? (He.set(e, t, !1), void xe.event.add(e, t, {
            namespace: !1,
            handler: function(e) {
                var r, i, a = He.get(this, t);
                if (1 & e.isTrigger && this[t]) {
                    if (a.length)(xe.event.special[t] || {}).delegateType && e.stopPropagation();
                    else if (a = le.call(arguments), He.set(this, t, a), r = n(this, t), this[t](), i = He.get(this, t), a !== i || r ? He.set(this, t, !1) : i = {}, a !== i) return e.stopImmediatePropagation(), e.preventDefault(), i && i.value
                } else a.length && (He.set(this, t, {
                    value: xe.event.trigger(xe.extend(a[0], xe.Event.prototype), a.slice(1), this)
                }), e.stopImmediatePropagation())
            }
        })) : void(void 0 === He.get(e, t) && xe.event.add(e, t, S))
    }

    function R(e, t) {
        return a(e, "table") && a(11 !== t.nodeType ? t : t.firstChild, "tr") ? xe(e).children("tbody")[0] || e : e
    }

    function q(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function A(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

    function P(e, t) {
        var n, r, i, a, o, s, d;
        if (1 === t.nodeType) {
            if (He.hasData(e) && (a = He.get(e), d = a.events)) {
                He.remove(t, "handle events");
                for (i in d)
                    for (n = 0, r = d[i].length; r > n; n++) xe.event.add(t, i, d[i][n])
            }
            Be.hasData(e) && (o = Be.access(e), s = xe.extend({}, o), Be.set(t, s))
        }
    }

    function L(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && Ze.test(e.type) ? t.checked = e.checked : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
    }

    function D(e, t, r, i) {
        t = ue(t);
        var a, o, s, d, l, u, c = 0,
            g = e.length,
            p = g - 1,
            m = t[0],
            f = je(m);
        if (f || g > 1 && "string" == typeof m && !he.checkClone && ot.test(m)) return e.each(function(n) {
            var a = e.eq(n);
            f && (t[0] = m.call(this, n, a.html())), D(a, t, r, i)
        });
        if (g && (a = x(t, e[0].ownerDocument, !1, e, i), o = a.firstChild, 1 === a.childNodes.length && (a = o), o || i)) {
            for (s = xe.map(b(a, "script"), q), d = s.length; g > c; c++) l = a, c !== p && (l = xe.clone(l, !0, !0), d && xe.merge(s, b(l, "script"))), r.call(e[c], l, c);
            if (d)
                for (u = s[s.length - 1].ownerDocument, xe.map(s, A), c = 0; d > c; c++) l = s[c], tt.test(l.type || "") && !He.access(l, "globalEval") && xe.contains(u, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? xe._evalUrl && !l.noModule && xe._evalUrl(l.src, {
                    nonce: l.nonce || l.getAttribute("nonce")
                }, u) : n(l.textContent.replace(st, ""), l, u))
        }
        return e
    }

    function I(e, t, n) {
        for (var r, i = t ? xe.filter(t, e) : e, a = 0; null != (r = i[a]); a++) n || 1 !== r.nodeType || xe.cleanData(b(r)), r.parentNode && (n && Ke(r) && y(b(r, "script")), r.parentNode.removeChild(r));
        return e
    }

    function O(e, t, n) {
        var r, i, a, o, s = e.style;
        return n = n || lt(e), n && (o = n.getPropertyValue(t) || n[t], "" !== o || Ke(e) || (o = xe.style(e, t)), !he.pixelBoxStyles() && dt.test(o) && ct.test(t) && (r = s.width, i = s.minWidth, a = s.maxWidth, s.minWidth = s.maxWidth = s.width = o, o = n.width, s.width = r, s.minWidth = i, s.maxWidth = a)), void 0 !== o ? o + "" : o
    }

    function N(e, t) {
        return {
            get: function() {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }

    function M(e) {
        for (var t = e[0].toUpperCase() + e.slice(1), n = gt.length; n--;)
            if (e = gt[n] + t, e in pt) return e
    }

    function W(e) {
        var t = xe.cssProps[e] || mt[e];
        return t ? t : e in pt ? e : mt[e] = M(e) || e
    }

    function H(e, t, n) {
        var r = Ve.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }

    function B(e, t, n, r, i, a) {
        var o = "width" === t ? 1 : 0,
            s = 0,
            d = 0;
        if (n === (r ? "border" : "content")) return 0;
        for (; 4 > o; o += 2) "margin" === n && (d += xe.css(e, n + Ue[o], !0, i)), r ? ("content" === n && (d -= xe.css(e, "padding" + Ue[o], !0, i)), "margin" !== n && (d -= xe.css(e, "border" + Ue[o] + "Width", !0, i))) : (d += xe.css(e, "padding" + Ue[o], !0, i), "padding" !== n ? d += xe.css(e, "border" + Ue[o] + "Width", !0, i) : s += xe.css(e, "border" + Ue[o] + "Width", !0, i));
        return !r && a >= 0 && (d += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - a - d - s - .5)) || 0), d
    }

    function $(e, t, n) {
        var r = lt(e),
            i = !he.boxSizingReliable() || n,
            o = i && "border-box" === xe.css(e, "boxSizing", !1, r),
            s = o,
            d = O(e, t, r),
            l = "offset" + t[0].toUpperCase() + t.slice(1);
        if (dt.test(d)) {
            if (!n) return d;
            d = "auto"
        }
        return (!he.boxSizingReliable() && o || !he.reliableTrDimensions() && a(e, "tr") || "auto" === d || !parseFloat(d) && "inline" === xe.css(e, "display", !1, r)) && e.getClientRects().length && (o = "border-box" === xe.css(e, "boxSizing", !1, r), s = l in e, s && (d = e[l])), d = parseFloat(d) || 0, d + B(e, t, n || (o ? "border" : "content"), s, r, d) + "px"
    }

    function z(e, t, n, r, i) {
        return new z.prototype.init(e, t, n, r, i)
    }

    function J() {
        wt && (be.hidden === !1 && e.requestAnimationFrame ? e.requestAnimationFrame(J) : e.setTimeout(J, xe.fx.interval), xe.fx.tick())
    }

    function V() {
        return e.setTimeout(function() {
            jt = void 0
        }), jt = Date.now()
    }

    function U(e, t) {
        var n, r = 0,
            i = {
                height: e
            };
        for (t = t ? 1 : 0; 4 > r; r += 2 - t) n = Ue[r], i["margin" + n] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function G(e, t, n) {
        for (var r, i = (Q.tweeners[t] || []).concat(Q.tweeners["*"]), a = 0, o = i.length; o > a; a++)
            if (r = i[a].call(n, t, e)) return r
    }

    function K(e, t, n) {
        var r, i, a, o, s, d, l, u, c = "width" in t || "height" in t,
            g = this,
            p = {},
            m = e.style,
            f = e.nodeType && Qe(e),
            _ = He.get(e, "fxshow");
        n.queue || (o = xe._queueHooks(e, "fx"), null == o.unqueued && (o.unqueued = 0, s = o.empty.fire, o.empty.fire = function() {
            o.unqueued || s()
        }), o.unqueued++, g.always(function() {
            g.always(function() {
                o.unqueued--, xe.queue(e, "fx").length || o.empty.fire()
            })
        }));
        for (r in t)
            if (i = t[r], bt.test(i)) {
                if (delete t[r], a = a || "toggle" === i, i === (f ? "hide" : "show")) {
                    if ("show" !== i || !_ || void 0 === _[r]) continue;
                    f = !0
                }
                p[r] = _ && _[r] || xe.style(e, r)
            }
        if (d = !xe.isEmptyObject(t), d || !xe.isEmptyObject(p)) {
            c && 1 === e.nodeType && (n.overflow = [m.overflow, m.overflowX, m.overflowY], l = _ && _.display, null == l && (l = He.get(e, "display")), u = xe.css(e, "display"), "none" === u && (l ? u = l : (w([e], !0), l = e.style.display || l, u = xe.css(e, "display"), w([e]))), ("inline" === u || "inline-block" === u && null != l) && "none" === xe.css(e, "float") && (d || (g.done(function() {
                m.display = l
            }), null == l && (u = m.display, l = "none" === u ? "" : u)), m.display = "inline-block")), n.overflow && (m.overflow = "hidden", g.always(function() {
                m.overflow = n.overflow[0], m.overflowX = n.overflow[1], m.overflowY = n.overflow[2]
            })), d = !1;
            for (r in p) d || (_ ? "hidden" in _ && (f = _.hidden) : _ = He.access(e, "fxshow", {
                display: l
            }), a && (_.hidden = !f), f && w([e], !0), g.done(function() {
                f || w([e]), He.remove(e, "fxshow");
                for (r in p) xe.style(e, r, p[r])
            })), d = G(f ? _[r] : 0, r, g), r in _ || (_[r] = d.start, f && (d.end = d.start, d.start = 0))
        }
    }

    function Y(e, t) {
        var n, r, i, a, o;
        for (n in e)
            if (r = m(n), i = t[r], a = e[n], Array.isArray(a) && (i = a[1], a = e[n] = a[0]), n !== r && (e[r] = a, delete e[n]), o = xe.cssHooks[r], o && "expand" in o) {
                a = o.expand(a), delete e[r];
                for (n in a) n in e || (e[n] = a[n], t[n] = i)
            } else t[r] = i
    }

    function Q(e, t, n) {
        var r, i, a = 0,
            o = Q.prefilters.length,
            s = xe.Deferred().always(function() {
                delete d.elem
            }),
            d = function() {
                if (i) return !1;
                for (var t = jt || V(), n = Math.max(0, l.startTime + l.duration - t), r = n / l.duration || 0, a = 1 - r, o = 0, d = l.tweens.length; d > o; o++) l.tweens[o].run(a);
                return s.notifyWith(e, [l, a, n]), 1 > a && d ? n : (d || s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l]), !1)
            },
            l = s.promise({
                elem: e,
                props: xe.extend({}, t),
                opts: xe.extend(!0, {
                    specialEasing: {},
                    easing: xe.easing._default
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: jt || V(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var r = xe.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                    return l.tweens.push(r), r
                },
                stop: function(t) {
                    var n = 0,
                        r = t ? l.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; r > n; n++) l.tweens[n].run(1);
                    return t ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]), this
                }
            }),
            u = l.props;
        for (Y(u, l.opts.specialEasing); o > a; a++)
            if (r = Q.prefilters[a].call(l, e, u, l.opts)) return je(r.stop) && (xe._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)), r;
        return xe.map(u, G, l), je(l.opts.start) && l.opts.start.call(e, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), xe.fx.timer(xe.extend(d, {
            elem: e,
            anim: l,
            queue: l.opts.queue
        })), l
    }

    function X(e) {
        var t = e.match(Le) || [];
        return t.join(" ")
    }

    function Z(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function ee(e) {
        return Array.isArray(e) ? e : "string" == typeof e ? e.match(Le) || [] : []
    }

    function te(e, t, n, i) {
        var a;
        if (Array.isArray(t)) xe.each(t, function(t, r) {
            n || Pt.test(e) ? i(e, r) : te(e + "[" + ("object" == typeof r && null != r ? t : "") + "]", r, n, i)
        });
        else if (n || "object" !== r(t)) i(e, t);
        else
            for (a in t) te(e + "[" + a + "]", t[a], n, i)
    }

    function ne(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0,
                a = t.toLowerCase().match(Le) || [];
            if (je(n))
                for (; r = a[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function re(e, t, n, r) {
        function i(s) {
            var d;
            return a[s] = !0, xe.each(e[s] || [], function(e, s) {
                var l = s(t, n, r);
                return "string" != typeof l || o || a[l] ? o ? !(d = l) : void 0 : (t.dataTypes.unshift(l), i(l), !1)
            }), d
        }
        var a = {},
            o = e === Jt;
        return i(t.dataTypes[0]) || !a["*"] && i("*")
    }

    function ie(e, t) {
        var n, r, i = xe.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && xe.extend(!0, e, r), e
    }

    function ae(e, t, n) {
        for (var r, i, a, o, s = e.contents, d = e.dataTypes;
            "*" === d[0];) d.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
        if (r)
            for (i in s)
                if (s[i] && s[i].test(r)) {
                    d.unshift(i);
                    break
                }
        if (d[0] in n) a = d[0];
        else {
            for (i in n) {
                if (!d[0] || e.converters[i + " " + d[0]]) {
                    a = i;
                    break
                }
                o || (o = i)
            }
            a = a || o
        }
        return a ? (a !== d[0] && d.unshift(a), n[a]) : void 0
    }

    function oe(e, t, n, r) {
        var i, a, o, s, d, l = {},
            u = e.dataTypes.slice();
        if (u[1])
            for (o in e.converters) l[o.toLowerCase()] = e.converters[o];
        for (a = u.shift(); a;)
            if (e.responseFields[a] && (n[e.responseFields[a]] = t), !d && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), d = a, a = u.shift())
                if ("*" === a) a = d;
                else if ("*" !== d && d !== a) {
            if (o = l[d + " " + a] || l["* " + a], !o)
                for (i in l)
                    if (s = i.split(" "), s[1] === a && (o = l[d + " " + s[0]] || l["* " + s[0]])) {
                        o === !0 ? o = l[i] : l[i] !== !0 && (a = s[0], u.unshift(s[1]));
                        break
                    }
            if (o !== !0)
                if (o && e["throws"]) t = o(t);
                else try {
                    t = o(t)
                } catch (c) {
                    return {
                        state: "parsererror",
                        error: o ? c : "No conversion from " + d + " to " + a
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }
    var se = [],
        de = Object.getPrototypeOf,
        le = se.slice,
        ue = se.flat ? function(e) {
            return se.flat.call(e)
        } : function(e) {
            return se.concat.apply([], e)
        },
        ce = se.push,
        ge = se.indexOf,
        pe = {},
        me = pe.toString,
        fe = pe.hasOwnProperty,
        _e = fe.toString,
        ve = _e.call(Object),
        he = {},
        je = function(e) {
            return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item
        },
        we = function(e) {
            return null != e && e === e.window
        },
        be = e.document,
        ye = "3.6.0",
        xe = function(e, t) {
            return new xe.fn.init(e, t)
        };
    xe.fn = xe.prototype = {
        jquery: ye,
        constructor: xe,
        length: 0,
        toArray: function() {
            return le.call(this)
        },
        get: function(e) {
            return null == e ? le.call(this) : 0 > e ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = xe.merge(this.constructor(), e);
            return t.prevObject = this, t
        },
        each: function(e) {
            return xe.each(this, e)
        },
        map: function(e) {
            return this.pushStack(xe.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(le.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        even: function() {
            return this.pushStack(xe.grep(this, function(e, t) {
                return (t + 1) % 2
            }))
        },
        odd: function() {
            return this.pushStack(xe.grep(this, function(e, t) {
                return t % 2
            }))
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: ce,
        sort: se.sort,
        splice: se.splice
    }, xe.extend = xe.fn.extend = function() {
        var e, t, n, r, i, a, o = arguments[0] || {},
            s = 1,
            d = arguments.length,
            l = !1;
        for ("boolean" == typeof o && (l = o, o = arguments[s] || {}, s++), "object" == typeof o || je(o) || (o = {}), s === d && (o = this, s--); d > s; s++)
            if (null != (e = arguments[s]))
                for (t in e) r = e[t], "__proto__" !== t && o !== r && (l && r && (xe.isPlainObject(r) || (i = Array.isArray(r))) ? (n = o[t], a = i && !Array.isArray(n) ? [] : i || xe.isPlainObject(n) ? n : {}, i = !1, o[t] = xe.extend(l, a, r)) : void 0 !== r && (o[t] = r));
        return o
    }, xe.extend({
        expando: "jQuery" + (ye + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            var t, n;
            return e && "[object Object]" === me.call(e) ? (t = de(e)) ? (n = fe.call(t, "constructor") && t.constructor, "function" == typeof n && _e.call(n) === ve) : !0 : !1
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        globalEval: function(e, t, n) {},
        each: function(e, t) {
            var n, r = 0;
            if (i(e))
                for (n = e.length; n > r && t.call(e[r], r, e[r]) !== !1; r++);
            else
                for (r in e)
                    if (t.call(e[r], r, e[r]) === !1) break;
            return e
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (i(Object(e)) ? xe.merge(n, "string" == typeof e ? [e] : e) : ce.call(n, e)), n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : ge.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; n > r; r++) e[i++] = t[r];
            return e.length = i, e
        },
        grep: function(e, t, n) {
            for (var r, i = [], a = 0, o = e.length, s = !n; o > a; a++) r = !t(e[a], a), r !== s && i.push(e[a]);
            return i
        },
        map: function(e, t, n) {
            var r, a, o = 0,
                s = [];
            if (i(e))
                for (r = e.length; r > o; o++) a = t(e[o], o, n), null != a && s.push(a);
            else
                for (o in e) a = t(e[o], o, n), null != a && s.push(a);
            return ue(s)
        },
        guid: 1,
        support: he
    }), "function" == typeof Symbol && (xe.fn[Symbol.iterator] = se[Symbol.iterator]), xe.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        pe["[object " + t + "]"] = t.toLowerCase()
    });
    var Se = function(e) {
        function t(e, t, n, r) {
            var i, a, o, s, d, l, c, p = t && t.ownerDocument,
                m = t ? t.nodeType : 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== m && 9 !== m && 11 !== m) return n;
            if (!r && (q(t), t = t || A, L)) {
                if (11 !== m && (d = he.exec(e)))
                    if (i = d[1]) {
                        if (9 === m) {
                            if (!(o = t.getElementById(i))) return n;
                            if (o.id === i) return n.push(o), n
                        } else if (p && (o = p.getElementById(i)) && N(t, o) && o.id === i) return n.push(o), n
                    } else {
                        if (d[2]) return X.apply(n, t.getElementsByTagName(e)), n;
                        if ((i = d[3]) && b.getElementsByClassName && t.getElementsByClassName) return X.apply(n, t.getElementsByClassName(i)), n
                    }
                if (b.qsa && !V[e + " "] && (!D || !D.test(e)) && (1 !== m || "object" !== t.nodeName.toLowerCase())) {
                    if (c = e, p = t, 1 === m && (ue.test(e) || le.test(e))) {
                        for (p = je.test(e) && u(t.parentNode) || t, p === t && b.scope || ((s = t.getAttribute("id")) ? s = s.replace(ye, xe) : t.setAttribute("id", s = M)), l = T(e), a = l.length; a--;) l[a] = (s ? "#" + s : ":scope") + " " + g(l[a]);
                        c = l.join(",")
                    }
                    try {
                        return X.apply(n, p.querySelectorAll(c)), n
                    } catch (f) {
                        V(e, !0)
                    } finally {
                        s === M && t.removeAttribute("id")
                    }
                }
            }
            return k(e.replace(se, "$1"), t, n, r)
        }

        function n() {
            function e(n, r) {
                return t.push(n + " ") > y.cacheLength && delete e[t.shift()], e[n + " "] = r
            }
            var t = [];
            return e
        }

        function r(e) {
            return e[M] = !0, e
        }

        function i(e) {
            var t = A.createElement("fieldset");
            try {
                return !!e(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function a(e, t) {
            for (var n = e.split("|"), r = n.length; r--;) y.attrHandle[n[r]] = t
        }

        function o(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }

        function s(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function d(e) {
            return function(t) {
                return "form" in t ? t.parentNode && t.disabled === !1 ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && Te(t) === e : t.disabled === e : "label" in t ? t.disabled === e : !1
            }
        }

        function l(e) {
            return r(function(t) {
                return t = +t, r(function(n, r) {
                    for (var i, a = e([], n.length, t), o = a.length; o--;) n[i = a[o]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }

        function u(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }

        function c() {}

        function g(e) {
            for (var t = 0, n = e.length, r = ""; n > t; t++) r += e[t].value;
            return r
        }

        function p(e, t, n) {
            var r = t.dir,
                i = t.next,
                a = i || r,
                o = n && "parentNode" === a,
                s = B++;
            return t.first ? function(t, n, i) {
                for (; t = t[r];)
                    if (1 === t.nodeType || o) return e(t, n, i);
                return !1
            } : function(t, n, d) {
                var l, u, c, g = [H, s];
                if (d) {
                    for (; t = t[r];)
                        if ((1 === t.nodeType || o) && e(t, n, d)) return !0
                } else
                    for (; t = t[r];)
                        if (1 === t.nodeType || o)
                            if (c = t[M] || (t[M] = {}), u = c[t.uniqueID] || (c[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase()) t = t[r] || t;
                            else {
                                if ((l = u[a]) && l[0] === H && l[1] === s) return g[2] = l[2];
                                if (u[a] = g, g[2] = e(t, n, d)) return !0
                            } return !1
            }
        }

        function m(e) {
            return e.length > 1 ? function(t, n, r) {
                for (var i = e.length; i--;)
                    if (!e[i](t, n, r)) return !1;
                return !0
            } : e[0]
        }

        function f(e, n, r) {
            for (var i = 0, a = n.length; a > i; i++) t(e, n[i], r);
            return r
        }

        function _(e, t, n, r, i) {
            for (var a, o = [], s = 0, d = e.length, l = null != t; d > s; s++)(a = e[s]) && (!n || n(a, r, i)) && (o.push(a), l && t.push(s));
            return o
        }

        function v(e, t, n, i, a, o) {
            return i && !i[M] && (i = v(i)), a && !a[M] && (a = v(a, o)), r(function(r, o, s, d) {
                var l, u, c, g = [],
                    p = [],
                    m = o.length,
                    v = r || f(t || "*", s.nodeType ? [s] : s, []),
                    h = !e || !r && t ? v : _(v, g, e, s, d),
                    j = n ? a || (r ? e : m || i) ? [] : o : h;
                if (n && n(h, j, s, d), i)
                    for (l = _(j, p), i(l, [], s, d), u = l.length; u--;)(c = l[u]) && (j[p[u]] = !(h[p[u]] = c));
                if (r) {
                    if (a || e) {
                        if (a) {
                            for (l = [], u = j.length; u--;)(c = j[u]) && l.push(h[u] = c);
                            a(null, j = [], l, d)
                        }
                        for (u = j.length; u--;)(c = j[u]) && (l = a ? ee(r, c) : g[u]) > -1 && (r[l] = !(o[l] = c))
                    }
                } else j = _(j === o ? j.splice(m, j.length) : j), a ? a(null, o, j, d) : X.apply(o, j)
            })
        }

        function h(e) {
            for (var t, n, r, i = e.length, a = y.relative[e[0].type], o = a || y.relative[" "], s = a ? 1 : 0, d = p(function(e) {
                    return e === t
                }, o, !0), l = p(function(e) {
                    return ee(t, e) > -1
                }, o, !0), u = [function(e, n, r) {
                    var i = !a && (r || n !== F) || ((t = n).nodeType ? d(e, n, r) : l(e, n, r));
                    return t = null, i
                }]; i > s; s++)
                if (n = y.relative[e[s].type]) u = [p(m(u), n)];
                else {
                    if (n = y.filter[e[s].type].apply(null, e[s].matches), n[M]) {
                        for (r = ++s; i > r && !y.relative[e[r].type]; r++);
                        return v(s > 1 && m(u), s > 1 && g(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace(se, "$1"), n, r > s && h(e.slice(s, r)), i > r && h(e = e.slice(r)), i > r && g(e))
                    }
                    u.push(n)
                }
            return m(u)
        }

        function j(e, n) {
            var i = n.length > 0,
                a = e.length > 0,
                o = function(r, o, s, d, l) {
                    var u, c, g, p = 0,
                        m = "0",
                        f = r && [],
                        v = [],
                        h = F,
                        j = r || a && y.find.TAG("*", l),
                        w = H += null == h ? 1 : Math.random() || .1,
                        b = j.length;
                    for (l && (F = o == A || o || l); m !== b && null != (u = j[m]); m++) {
                        if (a && u) {
                            for (c = 0, o || u.ownerDocument == A || (q(u), s = !L); g = e[c++];)
                                if (g(u, o || A, s)) {
                                    d.push(u);
                                    break
                                }
                            l && (H = w)
                        }
                        i && ((u = !g && u) && p--, r && f.push(u))
                    }
                    if (p += m, i && m !== p) {
                        for (c = 0; g = n[c++];) g(f, v, o, s);
                        if (r) {
                            if (p > 0)
                                for (; m--;) f[m] || v[m] || (v[m] = Y.call(d));
                            v = _(v)
                        }
                        X.apply(d, v), l && !r && v.length > 0 && p + n.length > 1 && t.uniqueSort(d)
                    }
                    return l && (H = w, F = h), f
                };
            return i ? r(o) : o
        }
        var w, b, y, x, S, T, C, k, F, E, R, q, A, P, L, D, I, O, N, M = "sizzle" + 1 * new Date,
            W = e.document,
            H = 0,
            B = 0,
            $ = n(),
            z = n(),
            J = n(),
            V = n(),
            U = function(e, t) {
                return e === t && (R = !0), 0
            },
            G = {}.hasOwnProperty,
            K = [],
            Y = K.pop,
            Q = K.push,
            X = K.push,
            Z = K.slice,
            ee = function(e, t) {
                for (var n = 0, r = e.length; r > n; n++)
                    if (e[n] === t) return n;
                return -1
            },
            te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ne = "[\\x20\\t\\r\\n\\f]",
            re = "(?:\\\\[\\da-fA-F]{1,6}" + ne + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\x00-\\x7f])+",
            ie = "\\[" + ne + "*(" + re + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + re + "))|)" + ne + "*\\]",
            ae = ":(" + re + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ie + ")*)|.*)\\)|)",
            oe = new RegExp(ne + "+", "g"),
            se = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
            de = new RegExp("^" + ne + "*," + ne + "*"),
            le = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
            ue = new RegExp(ne + "|>"),
            ce = new RegExp(ae),
            ge = new RegExp("^" + re + "$"),
            pe = {
                ID: new RegExp("^#(" + re + ")"),
                CLASS: new RegExp("^\\.(" + re + ")"),
                TAG: new RegExp("^(" + re + "|[*])"),
                ATTR: new RegExp("^" + ie),
                PSEUDO: new RegExp("^" + ae),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + te + ")$", "i"),
                needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
            },
            me = /HTML$/i,
            fe = /^(?:input|select|textarea|button)$/i,
            _e = /^h\d$/i,
            ve = /^[^{]+\{\s*\[native \w/,
            he = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            je = /[+~]/,
            we = new RegExp("\\\\[\\da-fA-F]{1,6}" + ne + "?|\\\\([^\\r\\n\\f])", "g"),
            be = function(e, t) {
                var n = "0x" + e.slice(1) - 65536;
                return t ? t : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
            },
            ye = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            xe = function(e, t) {
                return t ? "\x00" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            },
            Se = function() {
                q()
            },
            Te = p(function(e) {
                return e.disabled === !0 && "fieldset" === e.nodeName.toLowerCase()
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            X.apply(K = Z.call(W.childNodes), W.childNodes), K[W.childNodes.length].nodeType
        } catch (Ce) {
            X = {
                apply: K.length ? function(e, t) {
                    Q.apply(e, Z.call(t))
                } : function(e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++];);
                    e.length = n - 1
                }
            }
        }
        b = t.support = {}, S = t.isXML = function(e) {
            var t = e && e.namespaceURI,
                n = e && (e.ownerDocument || e).documentElement;
            return !me.test(t || n && n.nodeName || "HTML")
        }, q = t.setDocument = function(e) {
            var t, n, r = e ? e.ownerDocument || e : W;
            return r != A && 9 === r.nodeType && r.documentElement ? (A = r, P = A.documentElement, L = !S(A), W != A && (n = A.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Se, !1) : n.attachEvent && n.attachEvent("onunload", Se)), b.scope = i(function(e) {
                return P.appendChild(e).appendChild(A.createElement("div")), "undefined" != typeof e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
            }), b.attributes = i(function(e) {
                return e.className = "i", !e.getAttribute("className")
            }), b.getElementsByTagName = i(function(e) {
                return e.appendChild(A.createComment("")), !e.getElementsByTagName("*").length
            }), b.getElementsByClassName = ve.test(A.getElementsByClassName), b.getById = i(function(e) {
                return P.appendChild(e).id = M, !A.getElementsByName || !A.getElementsByName(M).length
            }), b.getById ? (y.filter.ID = function(e) {
                var t = e.replace(we, be);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }, y.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && L) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }) : y.filter.ID = function(e) {
                var t = e.replace(we, be);
                return function(e) {
                    var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }, y.find.TAG = b.getElementsByTagName ? function(e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : b.qsa ? t.querySelectorAll(e) : void 0
            } : function(e, t) {
                var n, r = [],
                    i = 0,
                    a = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = a[i++];) 1 === n.nodeType && r.push(n);
                    return r
                }
                return a
            }, y.find.CLASS = b.getElementsByClassName && function(e, t) {
                return "undefined" != typeof t.getElementsByClassName && L ? t.getElementsByClassName(e) : void 0
            }, I = [], D = [], (b.qsa = ve.test(A.querySelectorAll)) && (i(function(e) {
                var t;
                P.appendChild(e).innerHTML = "<a id='" + M + "'></a><select id='" + M + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && D.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || D.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + M + "-]").length || D.push("~="), t = A.createElement("input"), t.setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || D.push("\\[" + ne + "*name" + ne + "*=" + ne + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || D.push(":checked"), e.querySelectorAll("a#" + M + "+*").length || D.push(".#.+[+~]"), e.querySelectorAll("\\\f"), D.push("[\\r\\n\\f]")
            }), i(function(e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = A.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && D.push("name" + ne + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && D.push(":enabled", ":disabled"), P.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && D.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), D.push(",.*:")
            })), (b.matchesSelector = ve.test(O = P.matches || P.webkitMatchesSelector || P.mozMatchesSelector || P.oMatchesSelector || P.msMatchesSelector)) && i(function(e) {
                b.disconnectedMatch = O.call(e, "*"), O.call(e, "[s!='']:x"), I.push("!=", ae)
            }), D = D.length && new RegExp(D.join("|")), I = I.length && new RegExp(I.join("|")), t = ve.test(P.compareDocumentPosition), N = t || ve.test(P.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            } : function(e, t) {
                if (t)
                    for (; t = t.parentNode;)
                        if (t === e) return !0;
                return !1
            }, U = t ? function(e, t) {
                if (e === t) return R = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n ? n : (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !b.sortDetached && t.compareDocumentPosition(e) === n ? e == A || e.ownerDocument == W && N(W, e) ? -1 : t == A || t.ownerDocument == W && N(W, t) ? 1 : E ? ee(E, e) - ee(E, t) : 0 : 4 & n ? -1 : 1)
            } : function(e, t) {
                return 0
            }, A) : A
        }, t.matches = function(e, n) {
            return t(e, null, null, n)
        }, t.matchesSelector = function(e, n) {
            if (q(e), b.matchesSelector && L && !V[n + " "] && (!I || !I.test(n)) && (!D || !D.test(n))) try {
                var r = O.call(e, n);
                if (r || b.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
            } catch (i) {
                V(n, !0)
            }
            return t(n, A, null, [e]).length > 0
        }, t.contains = function(e, t) {
            return (e.ownerDocument || e) != A && q(e), N(e, t)
        }, t.attr = function(e, t) {
            (e.ownerDocument || e) != A && q(e);
            var n = y.attrHandle[t.toLowerCase()],
                r = n && G.call(y.attrHandle, t.toLowerCase()) ? n(e, t, !L) : void 0;
            return void 0 !== r ? r : b.attributes || !L ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }, t.escape = function(e) {
            return (e + "").replace(ye, xe)
        }, t.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function(e) {
            var t, n = [],
                r = 0,
                i = 0;
            if (R = !b.detectDuplicates, E = !b.sortStable && e.slice(0), e.sort(U), R) {
                for (; t = e[i++];) t === e[i] && (r = n.push(i));
                for (; r--;) e.splice(n[r], 1)
            }
            return E = null, e
        }, x = t.getText = function(e) {
            var t, n = "",
                r = 0,
                i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += x(e)
                } else if (3 === i || 4 === i) return e.nodeValue
            } else
                for (; t = e[r++];) n += x(t);
            return n
        }, y = t.selectors = {
            cacheLength: 50,
            createPseudo: r,
            match: pe,
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
                ATTR: function(e) {
                    return e[1] = e[1].replace(we, be), e[3] = (e[3] || e[4] || e[5] || "").replace(we, be), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return pe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && ce.test(n) && (t = T(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(we, be).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = $[e + " "];
                    return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && $(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, n, r) {
                    return function(i) {
                        var a = t.attr(i, e);
                        return null == a ? "!=" === n : n ? (a += "", "=" === n ? a === r : "!=" === n ? a !== r : "^=" === n ? r && 0 === a.indexOf(r) : "*=" === n ? r && a.indexOf(r) > -1 : "$=" === n ? r && a.slice(-r.length) === r : "~=" === n ? (" " + a.replace(oe, " ") + " ").indexOf(r) > -1 : "|=" === n ? a === r || a.slice(0, r.length + 1) === r + "-" : !1) : !0
                    }
                },
                CHILD: function(e, t, n, r, i) {
                    var a = "nth" !== e.slice(0, 3),
                        o = "last" !== e.slice(-4),
                        s = "of-type" === t;
                    return 1 === r && 0 === i ? function(e) {
                        return !!e.parentNode
                    } : function(t, n, d) {
                        var l, u, c, g, p, m, f = a !== o ? "nextSibling" : "previousSibling",
                            _ = t.parentNode,
                            v = s && t.nodeName.toLowerCase(),
                            h = !d && !s,
                            j = !1;
                        if (_) {
                            if (a) {
                                for (; f;) {
                                    for (g = t; g = g[f];)
                                        if (s ? g.nodeName.toLowerCase() === v : 1 === g.nodeType) return !1;
                                    m = f = "only" === e && !m && "nextSibling"
                                }
                                return !0
                            }
                            if (m = [o ? _.firstChild : _.lastChild], o && h) {
                                for (g = _, c = g[M] || (g[M] = {}), u = c[g.uniqueID] || (c[g.uniqueID] = {}), l = u[e] || [], p = l[0] === H && l[1], j = p && l[2], g = p && _.childNodes[p]; g = ++p && g && g[f] || (j = p = 0) || m.pop();)
                                    if (1 === g.nodeType && ++j && g === t) {
                                        u[e] = [H, p, j];
                                        break
                                    }
                            } else if (h && (g = t, c = g[M] || (g[M] = {}), u = c[g.uniqueID] || (c[g.uniqueID] = {}), l = u[e] || [], p = l[0] === H && l[1], j = p), j === !1)
                                for (;
                                    (g = ++p && g && g[f] || (j = p = 0) || m.pop()) && ((s ? g.nodeName.toLowerCase() !== v : 1 !== g.nodeType) || !++j || (h && (c = g[M] || (g[M] = {}), u = c[g.uniqueID] || (c[g.uniqueID] = {}), u[e] = [H, j]), g !== t)););
                            return j -= i, j === r || j % r === 0 && j / r >= 0
                        }
                    }
                },
                PSEUDO: function(e, n) {
                    var i, a = y.pseudos[e] || y.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return a[M] ? a(n) : a.length > 1 ? (i = [e, e, "", n], y.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function(e, t) {
                        for (var r, i = a(e, n), o = i.length; o--;) r = ee(e, i[o]), e[r] = !(t[r] = i[o])
                    }) : function(e) {
                        return a(e, 0, i)
                    }) : a
                }
            },
            pseudos: {
                not: r(function(e) {
                    var t = [],
                        n = [],
                        i = C(e.replace(se, "$1"));
                    return i[M] ? r(function(e, t, n, r) {
                        for (var a, o = i(e, null, r, []), s = e.length; s--;)(a = o[s]) && (e[s] = !(t[s] = a))
                    }) : function(e, r, a) {
                        return t[0] = e, i(t, null, a, n), t[0] = null, !n.pop()
                    }
                }),
                has: r(function(e) {
                    return function(n) {
                        return t(e, n).length > 0
                    }
                }),
                contains: r(function(e) {
                    return e = e.replace(we, be),
                        function(t) {
                            return (t.textContent || x(t)).indexOf(e) > -1
                        }
                }),
                lang: r(function(e) {
                    return ge.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(we, be).toLowerCase(),
                        function(t) {
                            var n;
                            do
                                if (n = L ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === P
                },
                focus: function(e) {
                    return e === A.activeElement && (!A.hasFocus || A.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: d(!1),
                disabled: d(!0),
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex,
                        e.selected === !0
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0
                },
                parent: function(e) {
                    return !y.pseudos.empty(e)
                },
                header: function(e) {
                    return _e.test(e.nodeName)
                },
                input: function(e) {
                    return fe.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: l(function() {
                    return [0]
                }),
                last: l(function(e, t) {
                    return [t - 1]
                }),
                eq: l(function(e, t, n) {
                    return [0 > n ? n + t : n]
                }),
                even: l(function(e, t) {
                    for (var n = 0; t > n; n += 2) e.push(n);
                    return e
                }),
                odd: l(function(e, t) {
                    for (var n = 1; t > n; n += 2) e.push(n);
                    return e
                }),
                lt: l(function(e, t, n) {
                    for (var r = 0 > n ? n + t : n > t ? t : n; --r >= 0;) e.push(r);
                    return e
                }),
                gt: l(function(e, t, n) {
                    for (var r = 0 > n ? n + t : n; ++r < t;) e.push(r);
                    return e
                })
            }
        }, y.pseudos.nth = y.pseudos.eq;
        for (w in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) y.pseudos[w] = o(w);
        for (w in {
                submit: !0,
                reset: !0
            }) y.pseudos[w] = s(w);
        return c.prototype = y.filters = y.pseudos, y.setFilters = new c, T = t.tokenize = function(e, n) {
            var r, i, a, o, s, d, l, u = z[e + " "];
            if (u) return n ? 0 : u.slice(0);
            for (s = e, d = [], l = y.preFilter; s;) {
                (!r || (i = de.exec(s))) && (i && (s = s.slice(i[0].length) || s), d.push(a = [])), r = !1, (i = le.exec(s)) && (r = i.shift(), a.push({
                    value: r,
                    type: i[0].replace(se, " ")
                }), s = s.slice(r.length));
                for (o in y.filter) !(i = pe[o].exec(s)) || l[o] && !(i = l[o](i)) || (r = i.shift(), a.push({
                    value: r,
                    type: o,
                    matches: i
                }), s = s.slice(r.length));
                if (!r) break
            }
            return n ? s.length : s ? t.error(e) : z(e, d).slice(0)
        }, C = t.compile = function(e, t) {
            var n, r = [],
                i = [],
                a = J[e + " "];
            if (!a) {
                for (t || (t = T(e)), n = t.length; n--;) a = h(t[n]), a[M] ? r.push(a) : i.push(a);
                a = J(e, j(i, r)), a.selector = e
            }
            return a
        }, k = t.select = function(e, t, n, r) {
            var i, a, o, s, d, l = "function" == typeof e && e,
                c = !r && T(e = l.selector || e);
            if (n = n || [], 1 === c.length) {
                if (a = c[0] = c[0].slice(0), a.length > 2 && "ID" === (o = a[0]).type && 9 === t.nodeType && L && y.relative[a[1].type]) {
                    if (t = (y.find.ID(o.matches[0].replace(we, be), t) || [])[0], !t) return n;
                    l && (t = t.parentNode), e = e.slice(a.shift().value.length)
                }
                for (i = pe.needsContext.test(e) ? 0 : a.length; i-- && (o = a[i], !y.relative[s = o.type]);)
                    if ((d = y.find[s]) && (r = d(o.matches[0].replace(we, be), je.test(a[0].type) && u(t.parentNode) || t))) {
                        if (a.splice(i, 1), e = r.length && g(a), !e) return X.apply(n, r), n;
                        break
                    }
            }
            return (l || C(e, c))(r, t, !L, n, !t || je.test(e) && u(t.parentNode) || t), n
        }, b.sortStable = M.split("").sort(U).join("") === M, b.detectDuplicates = !!R, q(), b.sortDetached = i(function(e) {
            return 1 & e.compareDocumentPosition(A.createElement("fieldset"))
        }), i(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || a("type|href|height|width", function(e, t, n) {
            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), b.attributes && i(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || a("value", function(e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }), i(function(e) {
            return null == e.getAttribute("disabled")
        }) || a(te, function(e, t, n) {
            var r;
            return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), t
    }(e);
    xe.find = Se, xe.expr = Se.selectors, xe.expr[":"] = xe.expr.pseudos, xe.uniqueSort = xe.unique = Se.uniqueSort, xe.text = Se.getText, xe.isXMLDoc = Se.isXML, xe.contains = Se.contains, xe.escapeSelector = Se.escape;
    var Te = function(e, t, n) {
            for (var r = [], i = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (i && xe(e).is(n)) break;
                    r.push(e)
                }
            return r
        },
        Ce = function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        ke = xe.expr.match.needsContext,
        Fe = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    xe.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? xe.find.matchesSelector(r, e) ? [r] : [] : xe.find.matches(e, xe.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, xe.fn.extend({
        find: function(e) {
            var t, n, r = this.length,
                i = this;
            if ("string" != typeof e) return this.pushStack(xe(e).filter(function() {
                for (t = 0; r > t; t++)
                    if (xe.contains(i[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; r > t; t++) xe.find(e, i[t], n);
            return r > 1 ? xe.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(o(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(o(this, e || [], !0))
        },
        is: function(e) {
            return !!o(this, "string" == typeof e && ke.test(e) ? xe(e) : e || [], !1).length
        }
    });
    var Ee, Re = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
        qe = xe.fn.init = function(e, t, n) {
            var r, i;
            if (!e) return this;
            if (n = n || Ee, "string" == typeof e) {
                if (r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : Re.exec(e), !r || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                if (r[1]) {
                    if (t = t instanceof xe ? t[0] : t, xe.merge(this, xe.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : be, !0)), Fe.test(r[1]) && xe.isPlainObject(t))
                        for (r in t) je(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                    return this
                }
                return i = be.getElementById(r[2]), i && (this[0] = i, this.length = 1), this
            }
            return e.nodeType ? (this[0] = e, this.length = 1, this) : je(e) ? void 0 !== n.ready ? n.ready(e) : e(xe) : xe.makeArray(e, this)
        };
    qe.prototype = xe.fn, Ee = xe(be);
    var Ae = /^(?:parents|prev(?:Until|All))/,
        Pe = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    xe.fn.extend({
        has: function(e) {
            var t = xe(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; n > e; e++)
                    if (xe.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            var n, r = 0,
                i = this.length,
                a = [],
                o = "string" != typeof e && xe(e);
            if (!ke.test(e))
                for (; i > r; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (o ? o.index(n) > -1 : 1 === n.nodeType && xe.find.matchesSelector(n, e))) {
                            a.push(n);
                            break
                        }
            return this.pushStack(a.length > 1 ? xe.uniqueSort(a) : a)
        },
        index: function(e) {
            return e ? "string" == typeof e ? ge.call(xe(e), this[0]) : ge.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(xe.uniqueSort(xe.merge(this.get(), xe(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), xe.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return Te(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return Te(e, "parentNode", n)
        },
        next: function(e) {
            return s(e, "nextSibling")
        },
        prev: function(e) {
            return s(e, "previousSibling")
        },
        nextAll: function(e) {
            return Te(e, "nextSibling")
        },
        prevAll: function(e) {
            return Te(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return Te(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return Te(e, "previousSibling", n)
        },
        siblings: function(e) {
            return Ce((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return Ce(e.firstChild)
        },
        contents: function(e) {
            return null != e.contentDocument && de(e.contentDocument) ? e.contentDocument : (a(e, "template") && (e = e.content || e), xe.merge([], e.childNodes))
        }
    }, function(e, t) {
        xe.fn[e] = function(n, r) {
            var i = xe.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = xe.filter(r, i)), this.length > 1 && (Pe[e] || xe.uniqueSort(i), Ae.test(e) && i.reverse()), this.pushStack(i)
        }
    });
    var Le = /[^\x20\t\r\n\f]+/g;
    xe.Callbacks = function(e) {
        e = "string" == typeof e ? d(e) : xe.extend({}, e);
        var t, n, i, a, o = [],
            s = [],
            l = -1,
            u = function() {
                for (a = a || e.once, i = t = !0; s.length; l = -1)
                    for (n = s.shift(); ++l < o.length;) o[l].apply(n[0], n[1]) === !1 && e.stopOnFalse && (l = o.length, n = !1);
                e.memory || (n = !1), t = !1, a && (o = n ? [] : "")
            },
            c = {
                add: function() {
                    return o && (n && !t && (l = o.length - 1, s.push(n)), function i(t) {
                        xe.each(t, function(t, n) {
                            je(n) ? e.unique && c.has(n) || o.push(n) : n && n.length && "string" !== r(n) && i(n)
                        })
                    }(arguments), n && !t && u()), this
                },
                remove: function() {
                    return xe.each(arguments, function(e, t) {
                        for (var n;
                            (n = xe.inArray(t, o, n)) > -1;) o.splice(n, 1), l >= n && l--
                    }), this
                },
                has: function(e) {
                    return e ? xe.inArray(e, o) > -1 : o.length > 0
                },
                empty: function() {
                    return o && (o = []), this
                },
                disable: function() {
                    return a = s = [], o = n = "", this
                },
                disabled: function() {
                    return !o
                },
                lock: function() {
                    return a = s = [], n || t || (o = n = ""), this
                },
                locked: function() {
                    return !!a
                },
                fireWith: function(e, n) {
                    return a || (n = n || [], n = [e, n.slice ? n.slice() : n], s.push(n), t || u()), this
                },
                fire: function() {
                    return c.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!i
                }
            };
        return c
    }, xe.extend({
        Deferred: function(t) {
            var n = [
                    ["notify", "progress", xe.Callbacks("memory"), xe.Callbacks("memory"), 2],
                    ["resolve", "done", xe.Callbacks("once memory"), xe.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", xe.Callbacks("once memory"), xe.Callbacks("once memory"), 1, "rejected"]
                ],
                r = "pending",
                i = {
                    state: function() {
                        return r
                    },
                    always: function() {
                        return a.done(arguments).fail(arguments), this
                    },
                    "catch": function(e) {
                        return i.then(null, e)
                    },
                    pipe: function() {
                        var e = arguments;
                        return xe.Deferred(function(t) {
                            xe.each(n, function(n, r) {
                                var i = je(e[r[4]]) && e[r[4]];
                                a[r[1]](function() {
                                    var e = i && i.apply(this, arguments);
                                    e && je(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    then: function(t, r, i) {
                        function a(t, n, r, i) {
                            return function() {
                                var s = this,
                                    d = arguments,
                                    c = function() {
                                        var e, c;
                                        if (!(o > t)) {
                                            if (e = r.apply(s, d), e === n.promise()) throw new TypeError("Thenable self-resolution");
                                            c = e && ("object" == typeof e || "function" == typeof e) && e.then, je(c) ? i ? c.call(e, a(o, n, l, i), a(o, n, u, i)) : (o++, c.call(e, a(o, n, l, i), a(o, n, u, i), a(o, n, l, n.notifyWith))) : (r !== l && (s = void 0, d = [e]), (i || n.resolveWith)(s, d))
                                        }
                                    },
                                    g = i ? c : function() {
                                        try {
                                            c()
                                        } catch (e) {
                                            xe.Deferred.exceptionHook && xe.Deferred.exceptionHook(e, g.stackTrace), t + 1 >= o && (r !== u && (s = void 0, d = [e]), n.rejectWith(s, d))
                                        }
                                    };
                                t ? g() : (xe.Deferred.getStackHook && (g.stackTrace = xe.Deferred.getStackHook()), e.setTimeout(g))
                            }
                        }
                        var o = 0;
                        return xe.Deferred(function(e) {
                            n[0][3].add(a(0, e, je(i) ? i : l, e.notifyWith)), n[1][3].add(a(0, e, je(t) ? t : l)), n[2][3].add(a(0, e, je(r) ? r : u))
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? xe.extend(e, i) : i
                    }
                },
                a = {};
            return xe.each(n, function(e, t) {
                var o = t[2],
                    s = t[5];
                i[t[1]] = o.add, s && o.add(function() {
                    r = s
                }, n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock), o.add(t[3].fire), a[t[0]] = function() {
                    return a[t[0] + "With"](this === a ? void 0 : this, arguments), this
                }, a[t[0] + "With"] = o.fireWith
            }), i.promise(a), t && t.call(a, a), a
        },
        when: function(e) {
            var t = arguments.length,
                n = t,
                r = Array(n),
                i = le.call(arguments),
                a = xe.Deferred(),
                o = function(e) {
                    return function(n) {
                        r[e] = this, i[e] = arguments.length > 1 ? le.call(arguments) : n, --t || a.resolveWith(r, i)
                    }
                };
            if (1 >= t && (c(e, a.done(o(n)).resolve, a.reject, !t), "pending" === a.state() || je(i[n] && i[n].then))) return a.then();
            for (; n--;) c(i[n], o(n), a.reject);
            return a.promise()
        }
    });
    var De = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    xe.Deferred.exceptionHook = function(t, n) {
        e.console && e.console.warn && t && De.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
    }, xe.readyException = function(t) {
        e.setTimeout(function() {
            throw t
        })
    };
    var Ie = xe.Deferred();
    xe.fn.ready = function(e) {
        return Ie.then(e)["catch"](function(e) {
            xe.readyException(e)
        }), this
    }, xe.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (e === !0 ? --xe.readyWait : xe.isReady) || (xe.isReady = !0, e !== !0 && --xe.readyWait > 0 || Ie.resolveWith(be, [xe]))
        }
    }), xe.ready.then = Ie.then, "complete" === be.readyState || "loading" !== be.readyState && !be.documentElement.doScroll ? e.setTimeout(xe.ready) : (be.addEventListener("DOMContentLoaded", g), e.addEventListener("load", g));
    var Oe = function(e, t, n, i, a, o, s) {
            var d = 0,
                l = e.length,
                u = null == n;
            if ("object" === r(n)) {
                a = !0;
                for (d in n) Oe(e, t, d, n[d], !0, o, s)
            } else if (void 0 !== i && (a = !0, je(i) || (s = !0), u && (s ? (t.call(e, i), t = null) : (u = t, t = function(e, t, n) {
                    return u.call(xe(e), n)
                })), t))
                for (; l > d; d++) t(e[d], n, s ? i : i.call(e[d], d, t(e[d], n)));
            return a ? e : u ? t.call(e) : l ? t(e[0], n) : o
        },
        Ne = /^-ms-/,
        Me = /-([a-z])/g,
        We = function(e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        };
    f.uid = 1, f.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {}, We(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function(e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t) i[m(t)] = n;
            else
                for (r in t) i[m(r)] = t[r];
            return i
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][m(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    Array.isArray(t) ? t = t.map(m) : (t = m(t), t = t in r ? [t] : t.match(Le) || []), n = t.length;
                    for (; n--;) delete r[t[n]]
                }(void 0 === t || xe.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !xe.isEmptyObject(t)
        }
    };
    var He = new f,
        Be = new f,
        $e = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        ze = /[A-Z]/g;
    xe.extend({
        hasData: function(e) {
            return Be.hasData(e) || He.hasData(e)
        },
        data: function(e, t, n) {
            return Be.access(e, t, n)
        },
        removeData: function(e, t) {
            Be.remove(e, t)
        },
        _data: function(e, t, n) {
            return He.access(e, t, n)
        },
        _removeData: function(e, t) {
            He.remove(e, t)
        }
    }), xe.fn.extend({
        data: function(e, t) {
            var n, r, i, a = this[0],
                o = a && a.attributes;
            if (void 0 === e) {
                if (this.length && (i = Be.get(a), 1 === a.nodeType && !He.get(a, "hasDataAttrs"))) {
                    for (n = o.length; n--;) o[n] && (r = o[n].name, 0 === r.indexOf("data-") && (r = m(r.slice(5)), v(a, r, i[r])));
                    He.set(a, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof e ? this.each(function() {
                Be.set(this, e)
            }) : Oe(this, function(t) {
                var n;
                if (a && void 0 === t) {
                    if (n = Be.get(a, e), void 0 !== n) return n;
                    if (n = v(a, e), void 0 !== n) return n
                } else this.each(function() {
                    Be.set(this, e, t)
                })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                Be.remove(this, e)
            })
        }
    }), xe.extend({
        queue: function(e, t, n) {
            var r;
            return e ? (t = (t || "fx") + "queue", r = He.get(e, t), n && (!r || Array.isArray(n) ? r = He.access(e, t, xe.makeArray(n)) : r.push(n)), r || []) : void 0
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = xe.queue(e, t),
                r = n.length,
                i = n.shift(),
                a = xe._queueHooks(e, t),
                o = function() {
                    xe.dequeue(e, t)
                };
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete a.stop, i.call(e, o, a)), !r && a && a.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return He.get(e, n) || He.access(e, n, {
                empty: xe.Callbacks("once memory").add(function() {
                    He.remove(e, [t + "queue", n])
                })
            })
        }
    }), xe.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? xe.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = xe.queue(this, e, t);
                xe._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && xe.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                xe.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1,
                i = xe.Deferred(),
                a = this,
                o = this.length,
                s = function() {
                    --r || i.resolveWith(a, [a])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; o--;) n = He.get(a[o], e + "queueHooks"), n && n.empty && (r++, n.empty.add(s));
            return s(), i.promise(t)
        }
    });
    var Je = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Ve = new RegExp("^(?:([+-])=|)(" + Je + ")([a-z%]*)$", "i"),
        Ue = ["Top", "Right", "Bottom", "Left"],
        Ge = be.documentElement,
        Ke = function(e) {
            return xe.contains(e.ownerDocument, e)
        },
        Ye = {
            composed: !0
        };
    Ge.getRootNode && (Ke = function(e) {
        return xe.contains(e.ownerDocument, e) || e.getRootNode(Ye) === e.ownerDocument
    });
    var Qe = function(e, t) {
            return e = t || e, "none" === e.style.display || "" === e.style.display && Ke(e) && "none" === xe.css(e, "display")
        },
        Xe = {};
    xe.fn.extend({
        show: function() {
            return w(this, !0)
        },
        hide: function() {
            return w(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                Qe(this) ? xe(this).show() : xe(this).hide()
            })
        }
    });
    var Ze = /^(?:checkbox|radio)$/i,
        et = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        tt = /^$|^module$|\/(?:java|ecma)script/i;
    ! function() {
        var e = be.createDocumentFragment(),
            t = e.appendChild(be.createElement("div")),
            n = be.createElement("input");
        n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), he.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", he.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, t.innerHTML = "<option></option>", he.option = !!t.lastChild
    }();
    var nt = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    nt.tbody = nt.tfoot = nt.colgroup = nt.caption = nt.thead, nt.th = nt.td, he.option || (nt.optgroup = nt.option = [1, "<select multiple='multiple'>", "</select>"]);
    var rt = /<|&#?\w+;/,
        it = /^([^.]*)(?:\.(.+)|)/;
    xe.event = {
        global: {},
        add: function(e, t, n, r, i) {
            var a, o, s, d, l, u, c, g, p, m, f, _ = He.get(e);
            if (We(e))
                for (n.handler && (a = n, n = a.handler, i = a.selector), i && xe.find.matchesSelector(Ge, i), n.guid || (n.guid = xe.guid++), (d = _.events) || (d = _.events = Object.create(null)), (o = _.handle) || (o = _.handle = function(t) {
                        return "undefined" != typeof xe && xe.event.triggered !== t.type ? xe.event.dispatch.apply(e, arguments) : void 0
                    }), t = (t || "").match(Le) || [""], l = t.length; l--;) s = it.exec(t[l]) || [], p = f = s[1], m = (s[2] || "").split(".").sort(), p && (c = xe.event.special[p] || {}, p = (i ? c.delegateType : c.bindType) || p, c = xe.event.special[p] || {}, u = xe.extend({
                    type: p,
                    origType: f,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && xe.expr.match.needsContext.test(i),
                    namespace: m.join(".")
                }, a), (g = d[p]) || (g = d[p] = [], g.delegateCount = 0, c.setup && c.setup.call(e, r, m, o) !== !1 || e.addEventListener && e.addEventListener(p, o)), c.add && (c.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)), i ? g.splice(g.delegateCount++, 0, u) : g.push(u), xe.event.global[p] = !0)
        },
        remove: function(e, t, n, r, i) {
            var a, o, s, d, l, u, c, g, p, m, f, _ = He.hasData(e) && He.get(e);
            if (_ && (d = _.events)) {
                for (t = (t || "").match(Le) || [""], l = t.length; l--;)
                    if (s = it.exec(t[l]) || [], p = f = s[1], m = (s[2] || "").split(".").sort(), p) {
                        for (c = xe.event.special[p] || {}, p = (r ? c.delegateType : c.bindType) || p, g = d[p] || [], s = s[2] && new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)"), o = a = g.length; a--;) u = g[a], !i && f !== u.origType || n && n.guid !== u.guid || s && !s.test(u.namespace) || r && r !== u.selector && ("**" !== r || !u.selector) || (g.splice(a, 1), u.selector && g.delegateCount--, c.remove && c.remove.call(e, u));
                        o && !g.length && (c.teardown && c.teardown.call(e, m, _.handle) !== !1 || xe.removeEvent(e, p, _.handle), delete d[p])
                    } else
                        for (p in d) xe.event.remove(e, p + t[l], n, r, !0);
                xe.isEmptyObject(d) && He.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, r, i, a, o, s = new Array(arguments.length),
                d = xe.event.fix(e),
                l = (He.get(this, "events") || Object.create(null))[d.type] || [],
                u = xe.event.special[d.type] || {};
            for (s[0] = d, t = 1; t < arguments.length; t++) s[t] = arguments[t];
            if (d.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, d) !== !1) {
                for (o = xe.event.handlers.call(this, d, l), t = 0;
                    (i = o[t++]) && !d.isPropagationStopped();)
                    for (d.currentTarget = i.elem, n = 0;
                        (a = i.handlers[n++]) && !d.isImmediatePropagationStopped();)(!d.rnamespace || a.namespace === !1 || d.rnamespace.test(a.namespace)) && (d.handleObj = a, d.data = a.data, r = ((xe.event.special[a.origType] || {}).handle || a.handler).apply(i.elem, s), void 0 !== r && (d.result = r) === !1 && (d.preventDefault(), d.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, d), d.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, a, o, s = [],
                d = t.delegateCount,
                l = e.target;
            if (d && l.nodeType && !("click" === e.type && e.button >= 1))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || l.disabled !== !0)) {
                        for (a = [], o = {}, n = 0; d > n; n++) r = t[n], i = r.selector + " ", void 0 === o[i] && (o[i] = r.needsContext ? xe(i, this).index(l) > -1 : xe.find(i, this, null, [l]).length), o[i] && a.push(r);
                        a.length && s.push({
                            elem: l,
                            handlers: a
                        })
                    }
            return l = this, d < t.length && s.push({
                elem: l,
                handlers: t.slice(d)
            }), s
        },
        addProp: function(e, t) {
            Object.defineProperty(xe.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: je(t) ? function() {
                    return this.originalEvent ? t(this.originalEvent) : void 0
                } : function() {
                    return this.originalEvent ? this.originalEvent[e] : void 0
                },
                set: function(t) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        },
        fix: function(e) {
            return e[xe.expando] ? e : new xe.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(e) {
                    var t = this || e;
                    return Ze.test(t.type) && t.click && a(t, "input") && E(t, "click", S), !1
                },
                trigger: function(e) {
                    var t = this || e;
                    return Ze.test(t.type) && t.click && a(t, "input") && E(t, "click"), !0
                },
                _default: function(e) {
                    var t = e.target;
                    return Ze.test(t.type) && t.click && a(t, "input") && He.get(t, "click") || a(t, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, xe.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, xe.Event = function(e, t) {
        return this instanceof xe.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? S : T, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && xe.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), void(this[xe.expando] = !0)) : new xe.Event(e, t)
    }, xe.Event.prototype = {
        constructor: xe.Event,
        isDefaultPrevented: T,
        isPropagationStopped: T,
        isImmediatePropagationStopped: T,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = S, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = S, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = S, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, xe.each({
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
        which: !0
    }, xe.event.addProp), xe.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        xe.event.special[e] = {
            setup: function() {
                return E(this, e, C), !1
            },
            trigger: function() {
                return E(this, e), !0
            },
            _default: function() {
                return !0
            },
            delegateType: t
        }
    }), xe.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        xe.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = this,
                    i = e.relatedTarget,
                    a = e.handleObj;
                return (!i || i !== r && !xe.contains(r, i)) && (e.type = a.origType, n = a.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), xe.fn.extend({
        on: function(e, t, n, r) {
            return F(this, e, t, n, r)
        },
        one: function(e, t, n, r) {
            return F(this, e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, xe(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this
            }
            return (t === !1 || "function" == typeof t) && (n = t, t = void 0), n === !1 && (n = T), this.each(function() {
                xe.event.remove(this, e, n, t)
            })
        }
    });
    var at = /<script|<style|<link/i,
        ot = /checked\s*(?:[^=]|=\s*.checked.)/i,
        st = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    xe.extend({
        htmlPrefilter: function(e) {
            return e
        },
        clone: function(e, t, n) {
            var r, i, a, o, s = e.cloneNode(!0),
                d = Ke(e);
            if (!(he.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || xe.isXMLDoc(e)))
                for (o = b(s), a = b(e), r = 0, i = a.length; i > r; r++) L(a[r], o[r]);
            if (t)
                if (n)
                    for (a = a || b(e), o = o || b(s), r = 0, i = a.length; i > r; r++) P(a[r], o[r]);
                else P(e, s);
            return o = b(s, "script"), o.length > 0 && y(o, !d && b(e, "script")), s
        },
        cleanData: function(e) {
            for (var t, n, r, i = xe.event.special, a = 0; void 0 !== (n = e[a]); a++)
                if (We(n)) {
                    if (t = n[He.expando]) {
                        if (t.events)
                            for (r in t.events) i[r] ? xe.event.remove(n, r) : xe.removeEvent(n, r, t.handle);
                        n[He.expando] = void 0
                    }
                    n[Be.expando] && (n[Be.expando] = void 0)
                }
        }
    }), xe.fn.extend({
        detach: function(e) {
            return I(this, e, !0)
        },
        remove: function(e) {
            return I(this, e)
        },
        text: function(e) {
            return Oe(this, function(e) {
                return void 0 === e ? xe.text(this) : this.empty().each(function() {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return D(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = R(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return D(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = R(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return D(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return D(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (xe.cleanData(b(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
                return xe.clone(this, e, t)
            })
        },
        html: function(e) {
            return Oe(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !at.test(e) && !nt[(et.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = xe.htmlPrefilter(e);
                    try {
                        for (; r > n; n++) t = this[n] || {}, 1 === t.nodeType && (xe.cleanData(b(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (i) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return D(this, arguments, function(t) {
                var n = this.parentNode;
                xe.inArray(this, e) < 0 && (xe.cleanData(b(this)), n && n.replaceChild(t, this))
            }, e)
        }
    }), xe.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        xe.fn[e] = function(e) {
            for (var n, r = [], i = xe(e), a = i.length - 1, o = 0; a >= o; o++) n = o === a ? this : this.clone(!0), xe(i[o])[t](n), ce.apply(r, n.get());
            return this.pushStack(r)
        }
    });
    var dt = new RegExp("^(" + Je + ")(?!px)[a-z%]+$", "i"),
        lt = function(t) {
            var n = t.ownerDocument.defaultView;
            return n && n.opener || (n = e), n.getComputedStyle(t)
        },
        ut = function(e, t, n) {
            var r, i, a = {};
            for (i in t) a[i] = e.style[i], e.style[i] = t[i];
            r = n.call(e);
            for (i in t) e.style[i] = a[i];
            return r
        },
        ct = new RegExp(Ue.join("|"), "i");
    ! function() {
        function t() {
            if (u) {
                l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", Ge.appendChild(l).appendChild(u);
                var t = e.getComputedStyle(u);
                r = "1%" !== t.top, d = 12 === n(t.marginLeft), u.style.right = "60%", o = 36 === n(t.right), i = 36 === n(t.width), u.style.position = "absolute", a = 12 === n(u.offsetWidth / 3), Ge.removeChild(l), u = null
            }
        }

        function n(e) {
            return Math.round(parseFloat(e))
        }
        var r, i, a, o, s, d, l = be.createElement("div"),
            u = be.createElement("div");
        u.style && (u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", he.clearCloneStyle = "content-box" === u.style.backgroundClip, xe.extend(he, {
            boxSizingReliable: function() {
                return t(), i
            },
            pixelBoxStyles: function() {
                return t(), o
            },
            pixelPosition: function() {
                return t(), r
            },
            reliableMarginLeft: function() {
                return t(), d
            },
            scrollboxSize: function() {
                return t(), a
            },
            reliableTrDimensions: function() {
                var t, n, r, i;
                return null == s && (t = be.createElement("table"), n = be.createElement("tr"), r = be.createElement("div"), t.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", n.style.cssText = "border:1px solid", n.style.height = "1px", r.style.height = "9px", r.style.display = "block", Ge.appendChild(t).appendChild(n).appendChild(r), i = e.getComputedStyle(n), s = parseInt(i.height, 10) + parseInt(i.borderTopWidth, 10) + parseInt(i.borderBottomWidth, 10) === n.offsetHeight, Ge.removeChild(t)), s
            }
        }))
    }();
    var gt = ["Webkit", "Moz", "ms"],
        pt = be.createElement("div").style,
        mt = {},
        ft = /^(none|table(?!-c[ea]).+)/,
        _t = /^--/,
        vt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        ht = {
            letterSpacing: "0",
            fontWeight: "400"
        };
    xe.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = O(e, "opacity");
                        return "" === n ? "1" : n
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
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, a, o, s = m(t),
                    d = _t.test(t),
                    l = e.style;
                return d || (t = W(s)), o = xe.cssHooks[t] || xe.cssHooks[s], void 0 === n ? o && "get" in o && void 0 !== (i = o.get(e, !1, r)) ? i : l[t] : (a = typeof n, "string" === a && (i = Ve.exec(n)) && i[1] && (n = h(e, t, i), a = "number"), null != n && n === n && ("number" !== a || d || (n += i && i[3] || (xe.cssNumber[s] ? "" : "px")), he.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), o && "set" in o && void 0 === (n = o.set(e, n, r)) || (d ? l.setProperty(t, n) : l[t] = n)), void 0)
            }
        },
        css: function(e, t, n, r) {
            var i, a, o, s = m(t),
                d = _t.test(t);
            return d || (t = W(s)), o = xe.cssHooks[t] || xe.cssHooks[s], o && "get" in o && (i = o.get(e, !0, n)), void 0 === i && (i = O(e, t, r)), "normal" === i && t in ht && (i = ht[t]), "" === n || n ? (a = parseFloat(i), n === !0 || isFinite(a) ? a || 0 : i) : i
        }
    }), xe.each(["height", "width"], function(e, t) {
        xe.cssHooks[t] = {
            get: function(e, n, r) {
                return n ? !ft.test(xe.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? $(e, t, r) : ut(e, vt, function() {
                    return $(e, t, r)
                }) : void 0
            },
            set: function(e, n, r) {
                var i, a = lt(e),
                    o = !he.scrollboxSize() && "absolute" === a.position,
                    s = o || r,
                    d = s && "border-box" === xe.css(e, "boxSizing", !1, a),
                    l = r ? B(e, t, r, d, a) : 0;
                return d && o && (l -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(a[t]) - B(e, t, "border", !1, a) - .5)), l && (i = Ve.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = xe.css(e, t)), H(e, n, l)
            }
        }
    }), xe.cssHooks.marginLeft = N(he.reliableMarginLeft, function(e, t) {
        return t ? (parseFloat(O(e, "marginLeft")) || e.getBoundingClientRect().left - ut(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left
        })) + "px" : void 0
    }), xe.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        xe.cssHooks[e + t] = {
            expand: function(n) {
                for (var r = 0, i = {}, a = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++) i[e + Ue[r] + t] = a[r] || a[r - 2] || a[0];
                return i
            }
        }, "margin" !== e && (xe.cssHooks[e + t].set = H)
    }), xe.fn.extend({
        css: function(e, t) {
            return Oe(this, function(e, t, n) {
                var r, i, a = {},
                    o = 0;
                if (Array.isArray(t)) {
                    for (r = lt(e), i = t.length; i > o; o++) a[t[o]] = xe.css(e, t[o], !1, r);
                    return a
                }
                return void 0 !== n ? xe.style(e, t, n) : xe.css(e, t)
            }, e, t, arguments.length > 1)
        }
    }), xe.Tween = z, z.prototype = {
        constructor: z,
        init: function(e, t, n, r, i, a) {
            this.elem = e, this.prop = n, this.easing = i || xe.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = a || (xe.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = z.propHooks[this.prop];
            return e && e.get ? e.get(this) : z.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = z.propHooks[this.prop];
            return this.options.duration ? this.pos = t = xe.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : z.propHooks._default.set(this), this
        }
    }, z.prototype.init.prototype = z.prototype, z.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = xe.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0)
            },
            set: function(e) {
                xe.fx.step[e.prop] ? xe.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !xe.cssHooks[e.prop] && null == e.elem.style[W(e.prop)] ? e.elem[e.prop] = e.now : xe.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }, z.propHooks.scrollTop = z.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, xe.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, xe.fx = z.prototype.init, xe.fx.step = {};
    var jt, wt, bt = /^(?:toggle|show|hide)$/,
        yt = /queueHooks$/;
    xe.Animation = xe.extend(Q, {
            tweeners: {
                "*": [function(e, t) {
                    var n = this.createTween(e, t);
                    return h(n.elem, e, Ve.exec(t), n), n
                }]
            },
            tweener: function(e, t) {
                je(e) ? (t = e, e = ["*"]) : e = e.match(Le);
                for (var n, r = 0, i = e.length; i > r; r++) n = e[r], Q.tweeners[n] = Q.tweeners[n] || [], Q.tweeners[n].unshift(t)
            },
            prefilters: [K],
            prefilter: function(e, t) {
                t ? Q.prefilters.unshift(e) : Q.prefilters.push(e)
            }
        }), xe.speed = function(e, t, n) {
            var r = e && "object" == typeof e ? xe.extend({}, e) : {
                complete: n || !n && t || je(e) && e,
                duration: e,
                easing: n && t || t && !je(t) && t
            };
            return xe.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in xe.fx.speeds ? r.duration = xe.fx.speeds[r.duration] : r.duration = xe.fx.speeds._default), (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function() {
                je(r.old) && r.old.call(this), r.queue && xe.dequeue(this, r.queue)
            }, r
        }, xe.fn.extend({
            fadeTo: function(e, t, n, r) {
                return this.filter(Qe).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, r)
            },
            animate: function(e, t, n, r) {
                var i = xe.isEmptyObject(e),
                    a = xe.speed(t, n, r),
                    o = function() {
                        var t = Q(this, xe.extend({}, e), a);
                        (i || He.get(this, "finish")) && t.stop(!0)
                    };
                return o.finish = o, i || a.queue === !1 ? this.each(o) : this.queue(a.queue, o)
            },
            stop: function(e, t, n) {
                var r = function(e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && this.queue(e || "fx", []), this.each(function() {
                    var t = !0,
                        i = null != e && e + "queueHooks",
                        a = xe.timers,
                        o = He.get(this);
                    if (i) o[i] && o[i].stop && r(o[i]);
                    else
                        for (i in o) o[i] && o[i].stop && yt.test(i) && r(o[i]);
                    for (i = a.length; i--;) a[i].elem !== this || null != e && a[i].queue !== e || (a[i].anim.stop(n), t = !1, a.splice(i, 1));
                    (t || !n) && xe.dequeue(this, e)
                })
            },
            finish: function(e) {
                return e !== !1 && (e = e || "fx"), this.each(function() {
                    var t, n = He.get(this),
                        r = n[e + "queue"],
                        i = n[e + "queueHooks"],
                        a = xe.timers,
                        o = r ? r.length : 0;
                    for (n.finish = !0, xe.queue(this, e, []),
                        i && i.stop && i.stop.call(this, !0), t = a.length; t--;) a[t].elem === this && a[t].queue === e && (a[t].anim.stop(!0), a.splice(t, 1));
                    for (t = 0; o > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
                    delete n.finish
                })
            }
        }), xe.each(["toggle", "show", "hide"], function(e, t) {
            var n = xe.fn[t];
            xe.fn[t] = function(e, r, i) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(U(t, !0), e, r, i)
            }
        }), xe.each({
            slideDown: U("show"),
            slideUp: U("hide"),
            slideToggle: U("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, t) {
            xe.fn[e] = function(e, n, r) {
                return this.animate(t, e, n, r)
            }
        }), xe.timers = [], xe.fx.tick = function() {
            var e, t = 0,
                n = xe.timers;
            for (jt = Date.now(); t < n.length; t++) e = n[t], e() || n[t] !== e || n.splice(t--, 1);
            n.length || xe.fx.stop(), jt = void 0
        }, xe.fx.timer = function(e) {
            xe.timers.push(e), xe.fx.start()
        }, xe.fx.interval = 13, xe.fx.start = function() {
            wt || (wt = !0, J())
        }, xe.fx.stop = function() {
            wt = null
        }, xe.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, xe.fn.delay = function(t, n) {
            return t = xe.fx ? xe.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function(n, r) {
                var i = e.setTimeout(n, t);
                r.stop = function() {
                    e.clearTimeout(i)
                }
            })
        },
        function() {
            var e = be.createElement("input"),
                t = be.createElement("select"),
                n = t.appendChild(be.createElement("option"));
            e.type = "checkbox", he.checkOn = "" !== e.value, he.optSelected = n.selected, e = be.createElement("input"), e.value = "t", e.type = "radio", he.radioValue = "t" === e.value
        }();
    var xt, St = xe.expr.attrHandle;
    xe.fn.extend({
        attr: function(e, t) {
            return Oe(this, xe.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                xe.removeAttr(this, e)
            })
        }
    }), xe.extend({
        attr: function(e, t, n) {
            var r, i, a = e.nodeType;
            if (3 !== a && 8 !== a && 2 !== a) return "undefined" == typeof e.getAttribute ? xe.prop(e, t, n) : (1 === a && xe.isXMLDoc(e) || (i = xe.attrHooks[t.toLowerCase()] || (xe.expr.match.bool.test(t) ? xt : void 0)), void 0 !== n ? null === n ? void xe.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : (r = xe.find.attr(e, t), null == r ? void 0 : r))
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!he.radioValue && "radio" === t && a(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r = 0,
                i = t && t.match(Le);
            if (i && 1 === e.nodeType)
                for (; n = i[r++];) e.removeAttribute(n)
        }
    }), xt = {
        set: function(e, t, n) {
            return t === !1 ? xe.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, xe.each(xe.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = St[t] || xe.find.attr;
        St[t] = function(e, t, r) {
            var i, a, o = t.toLowerCase();
            return r || (a = St[o], St[o] = i, i = null != n(e, t, r) ? o : null, St[o] = a), i
        }
    });
    var Tt = /^(?:input|select|textarea|button)$/i,
        Ct = /^(?:a|area)$/i;
    xe.fn.extend({
        prop: function(e, t) {
            return Oe(this, xe.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[xe.propFix[e] || e]
            })
        }
    }), xe.extend({
        prop: function(e, t, n) {
            var r, i, a = e.nodeType;
            if (3 !== a && 8 !== a && 2 !== a) return 1 === a && xe.isXMLDoc(e) || (t = xe.propFix[t] || t, i = xe.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = xe.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : Tt.test(e.nodeName) || Ct.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), he.optSelected || (xe.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), xe.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        xe.propFix[this.toLowerCase()] = this
    }), xe.fn.extend({
        addClass: function(e) {
            var t, n, r, i, a, o, s, d = 0;
            if (je(e)) return this.each(function(t) {
                xe(this).addClass(e.call(this, t, Z(this)))
            });
            if (t = ee(e), t.length)
                for (; n = this[d++];)
                    if (i = Z(n), r = 1 === n.nodeType && " " + X(i) + " ") {
                        for (o = 0; a = t[o++];) r.indexOf(" " + a + " ") < 0 && (r += a + " ");
                        s = X(r), i !== s && n.setAttribute("class", s)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, r, i, a, o, s, d = 0;
            if (je(e)) return this.each(function(t) {
                xe(this).removeClass(e.call(this, t, Z(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if (t = ee(e), t.length)
                for (; n = this[d++];)
                    if (i = Z(n), r = 1 === n.nodeType && " " + X(i) + " ") {
                        for (o = 0; a = t[o++];)
                            for (; r.indexOf(" " + a + " ") > -1;) r = r.replace(" " + a + " ", " ");
                        s = X(r), i !== s && n.setAttribute("class", s)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e,
                r = "string" === n || Array.isArray(e);
            return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : je(e) ? this.each(function(n) {
                xe(this).toggleClass(e.call(this, n, Z(this), t), t)
            }) : this.each(function() {
                var t, i, a, o;
                if (r)
                    for (i = 0, a = xe(this), o = ee(e); t = o[i++];) a.hasClass(t) ? a.removeClass(t) : a.addClass(t);
                else(void 0 === e || "boolean" === n) && (t = Z(this), t && He.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || e === !1 ? "" : He.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, r = 0;
            for (t = " " + e + " "; n = this[r++];)
                if (1 === n.nodeType && (" " + X(Z(n)) + " ").indexOf(t) > -1) return !0;
            return !1
        }
    });
    var kt = /\r/g;
    xe.fn.extend({
        val: function(e) {
            var t, n, r, i = this[0]; {
                if (arguments.length) return r = je(e), this.each(function(n) {
                    var i;
                    1 === this.nodeType && (i = r ? e.call(this, n, xe(this).val()) : e, null == i ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = xe.map(i, function(e) {
                        return null == e ? "" : e + ""
                    })), t = xe.valHooks[this.type] || xe.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
                });
                if (i) return t = xe.valHooks[i.type] || xe.valHooks[i.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : (n = i.value, "string" == typeof n ? n.replace(kt, "") : null == n ? "" : n)
            }
        }
    }), xe.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = xe.find.attr(e, "value");
                    return null != t ? t : X(xe.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, r, i = e.options,
                        o = e.selectedIndex,
                        s = "select-one" === e.type,
                        d = s ? null : [],
                        l = s ? o + 1 : i.length;
                    for (r = 0 > o ? l : s ? o : 0; l > r; r++)
                        if (n = i[r], (n.selected || r === o) && !n.disabled && (!n.parentNode.disabled || !a(n.parentNode, "optgroup"))) {
                            if (t = xe(n).val(), s) return t;
                            d.push(t)
                        }
                    return d
                },
                set: function(e, t) {
                    for (var n, r, i = e.options, a = xe.makeArray(t), o = i.length; o--;) r = i[o], (r.selected = xe.inArray(xe.valHooks.option.get(r), a) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1), a
                }
            }
        }
    }), xe.each(["radio", "checkbox"], function() {
        xe.valHooks[this] = {
            set: function(e, t) {
                return Array.isArray(t) ? e.checked = xe.inArray(xe(e).val(), t) > -1 : void 0
            }
        }, he.checkOn || (xe.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), he.focusin = "onfocusin" in e;
    var Ft = /^(?:focusinfocus|focusoutblur)$/,
        Et = function(e) {
            e.stopPropagation()
        };
    xe.extend(xe.event, {
        trigger: function(t, n, r, i) {
            var a, o, s, d, l, u, c, g, p = [r || be],
                m = fe.call(t, "type") ? t.type : t,
                f = fe.call(t, "namespace") ? t.namespace.split(".") : [];
            if (o = g = s = r = r || be, 3 !== r.nodeType && 8 !== r.nodeType && !Ft.test(m + xe.event.triggered) && (m.indexOf(".") > -1 && (f = m.split("."), m = f.shift(), f.sort()), l = m.indexOf(":") < 0 && "on" + m, t = t[xe.expando] ? t : new xe.Event(m, "object" == typeof t && t), t.isTrigger = i ? 2 : 3, t.namespace = f.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : xe.makeArray(n, [t]), c = xe.event.special[m] || {}, i || !c.trigger || c.trigger.apply(r, n) !== !1)) {
                if (!i && !c.noBubble && !we(r)) {
                    for (d = c.delegateType || m, Ft.test(d + m) || (o = o.parentNode); o; o = o.parentNode) p.push(o), s = o;
                    s === (r.ownerDocument || be) && p.push(s.defaultView || s.parentWindow || e)
                }
                for (a = 0;
                    (o = p[a++]) && !t.isPropagationStopped();) g = o, t.type = a > 1 ? d : c.bindType || m, u = (He.get(o, "events") || Object.create(null))[t.type] && He.get(o, "handle"), u && u.apply(o, n), u = l && o[l], u && u.apply && We(o) && (t.result = u.apply(o, n), t.result === !1 && t.preventDefault());
                return t.type = m, i || t.isDefaultPrevented() || c._default && c._default.apply(p.pop(), n) !== !1 || !We(r) || l && je(r[m]) && !we(r) && (s = r[l], s && (r[l] = null), xe.event.triggered = m, t.isPropagationStopped() && g.addEventListener(m, Et), r[m](), t.isPropagationStopped() && g.removeEventListener(m, Et), xe.event.triggered = void 0, s && (r[l] = s)), t.result
            }
        },
        simulate: function(e, t, n) {
            var r = xe.extend(new xe.Event, n, {
                type: e,
                isSimulated: !0
            });
            xe.event.trigger(r, null, t)
        }
    }), xe.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                xe.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            return n ? xe.event.trigger(e, t, n, !0) : void 0
        }
    });
    var Rt = e.location,
        qt = {
            guid: Date.now()
        },
        At = /\?/;
    xe.parseXML = function(t) {
        var n, r;
        if (!t || "string" != typeof t) return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (i) {}
        return r = n && n.getElementsByTagName("parsererror")[0], (!n || r) && xe.error("Invalid XML: " + (r ? xe.map(r.childNodes, function(e) {
            return e.textContent
        }).join("\n") : t)), n
    };
    var Pt = /\[\]$/,
        Lt = /\r?\n/g,
        Dt = /^(?:submit|button|image|reset|file)$/i,
        It = /^(?:input|select|textarea|keygen)/i;
    xe.param = function(e, t) {
        var n, r = [],
            i = function(e, t) {
                var n = je(t) ? t() : t;
                r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
        if (null == e) return "";
        if (Array.isArray(e) || e.jquery && !xe.isPlainObject(e)) xe.each(e, function() {
            i(this.name, this.value)
        });
        else
            for (n in e) te(n, e[n], t, i);
        return r.join("&")
    }, xe.fn.extend({
        serialize: function() {
            return xe.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = xe.prop(this, "elements");
                return e ? xe.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !xe(this).is(":disabled") && It.test(this.nodeName) && !Dt.test(e) && (this.checked || !Ze.test(e))
            }).map(function(e, t) {
                var n = xe(this).val();
                return null == n ? null : Array.isArray(n) ? xe.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Lt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Lt, "\r\n")
                }
            }).get()
        }
    });
    var Ot = /%20/g,
        Nt = /#.*$/,
        Mt = /([?&])_=[^&]*/,
        Wt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Ht = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Bt = /^(?:GET|HEAD)$/,
        $t = /^\/\//,
        zt = {},
        Jt = {},
        Vt = "*/".concat("*"),
        Ut = be.createElement("a");
    Ut.href = Rt.href, xe.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Rt.href,
            type: "GET",
            isLocal: Ht.test(Rt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Vt,
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
                "text xml": xe.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? ie(ie(e, xe.ajaxSettings), t) : ie(xe.ajaxSettings, e)
        },
        ajaxPrefilter: ne(zt),
        ajaxTransport: ne(Jt),
        ajax: function(t, n) {
            function r(t, n, r, s) {
                var l, g, p, w, b, y = n;
                u || (u = !0, d && e.clearTimeout(d), i = void 0, o = s || "", x.readyState = t > 0 ? 4 : 0, l = t >= 200 && 300 > t || 304 === t, r && (w = ae(m, x, r)), !l && xe.inArray("script", m.dataTypes) > -1 && xe.inArray("json", m.dataTypes) < 0 && (m.converters["text script"] = function() {}), w = oe(m, w, x, l), l ? (m.ifModified && (b = x.getResponseHeader("Last-Modified"), b && (xe.lastModified[a] = b), b = x.getResponseHeader("etag"), b && (xe.etag[a] = b)), 204 === t || "HEAD" === m.type ? y = "nocontent" : 304 === t ? y = "notmodified" : (y = w.state, g = w.data, p = w.error, l = !p)) : (p = y, (t || !y) && (y = "error", 0 > t && (t = 0))), x.status = t, x.statusText = (n || y) + "", l ? v.resolveWith(f, [g, y, x]) : v.rejectWith(f, [x, y, p]), x.statusCode(j), j = void 0, c && _.trigger(l ? "ajaxSuccess" : "ajaxError", [x, m, l ? g : p]), h.fireWith(f, [x, y]), c && (_.trigger("ajaxComplete", [x, m]), --xe.active || xe.event.trigger("ajaxStop")))
            }
            if (null != t && ("object" != typeof t || (n = t, t = void 0, null != n.url))) {
                n = n || {};
                var i, a, o, s, d, l, u, c, g, p, m = xe.ajaxSetup({}, n),
                    f = m.context || m,
                    _ = m.context && (f.nodeType || f.jquery) ? xe(f) : xe.event,
                    v = xe.Deferred(),
                    h = xe.Callbacks("once memory"),
                    j = m.statusCode || {},
                    w = {},
                    b = {},
                    y = "canceled",
                    x = {
                        readyState: 0,
                        getResponseHeader: function(e) {
                            var t;
                            if (u) {
                                if (!s)
                                    for (s = {}; t = Wt.exec(o);) s[t[1].toLowerCase() + " "] = (s[t[1].toLowerCase() + " "] || []).concat(t[2]);
                                t = s[e.toLowerCase() + " "]
                            }
                            return null == t ? null : t.join(", ")
                        },
                        getAllResponseHeaders: function() {
                            return u ? o : null
                        },
                        setRequestHeader: function(e, t) {
                            return null == u && (e = b[e.toLowerCase()] = b[e.toLowerCase()] || e, w[e] = t), this
                        },
                        overrideMimeType: function(e) {
                            return null == u && (m.mimeType = e), this
                        },
                        statusCode: function(e) {
                            var t;
                            if (e)
                                if (u) x.always(e[x.status]);
                                else
                                    for (t in e) j[t] = [j[t], e[t]];
                            return this
                        },
                        abort: function(e) {
                            var t = e || y;
                            return i && i.abort(t), r(0, t), this
                        }
                    };
                if (v.promise(x), m.url = ((t || m.url || Rt.href) + "").replace($t, Rt.protocol + "//"), m.type = n.method || n.type || m.method || m.type, m.dataTypes = (m.dataType || "*").toLowerCase().match(Le) || [""], null == m.crossDomain) {
                    l = be.createElement("a");
                    try {
                        l.href = m.url, l.href = l.href, m.crossDomain = Ut.protocol + "//" + Ut.host != l.protocol + "//" + l.host
                    } catch (S) {
                        m.crossDomain = !0
                    }
                }
                if (m.data && m.processData && "string" != typeof m.data && (m.data = xe.param(m.data, m.traditional)), re(zt, m, n, x), u) return x;
                c = xe.event && m.global, c && 0 === xe.active++ && xe.event.trigger("ajaxStart"), m.type = m.type.toUpperCase(), m.hasContent = !Bt.test(m.type), a = m.url.replace(Nt, ""), m.hasContent ? m.data && m.processData && 0 === (m.contentType || "").indexOf("application/x-www-form-urlencoded") && (m.data = m.data.replace(Ot, "+")) : (p = m.url.slice(a.length), m.data && (m.processData || "string" == typeof m.data) && (a += (At.test(a) ? "&" : "?") + m.data, delete m.data), m.cache === !1 && (a = a.replace(Mt, "$1"), p = (At.test(a) ? "&" : "?") + "_=" + qt.guid++ + p), m.url = a + p), m.ifModified && (xe.lastModified[a] && x.setRequestHeader("If-Modified-Since", xe.lastModified[a]), xe.etag[a] && x.setRequestHeader("If-None-Match", xe.etag[a])), (m.data && m.hasContent && m.contentType !== !1 || n.contentType) && x.setRequestHeader("Content-Type", m.contentType), x.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + Vt + "; q=0.01" : "") : m.accepts["*"]);
                for (g in m.headers) x.setRequestHeader(g, m.headers[g]);
                if (m.beforeSend && (m.beforeSend.call(f, x, m) === !1 || u)) return x.abort();
                if (y = "abort", h.add(m.complete), x.done(m.success), x.fail(m.error), i = re(Jt, m, n, x)) {
                    if (x.readyState = 1, c && _.trigger("ajaxSend", [x, m]), u) return x;
                    m.async && m.timeout > 0 && (d = e.setTimeout(function() {
                        x.abort("timeout")
                    }, m.timeout));
                    try {
                        u = !1, i.send(w, r)
                    } catch (S) {
                        if (u) throw S;
                        r(-1, S)
                    }
                } else r(-1, "No Transport");
                return x
            }
        },
        getJSON: function(e, t, n) {
            return xe.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return xe.get(e, void 0, t, "script")
        }
    }), xe.each(["get", "post"], function(e, t) {
        xe[t] = function(e, n, r, i) {
            return je(n) && (i = i || r, r = n, n = void 0), xe.ajax(xe.extend({
                url: e,
                type: t,
                dataType: i,
                data: n,
                success: r
            }, xe.isPlainObject(e) && e))
        }
    }), xe.ajaxPrefilter(function(e) {
        var t;
        for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
    }), xe._evalUrl = function(e, t, n) {}, xe.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (je(e) && (e = e.call(this[0])), t = xe(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this
        },
        wrapInner: function(e) {
            return je(e) ? this.each(function(t) {
                xe(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = xe(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = je(e);
            return this.each(function(n) {
                xe(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                xe(this).replaceWith(this.childNodes)
            }), this
        }
    }), xe.expr.pseudos.hidden = function(e) {
        return !xe.expr.pseudos.visible(e)
    }, xe.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, xe.ajaxSettings.xhr = function() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    };
    var Gt = {
            0: 200,
            1223: 204
        },
        Kt = xe.ajaxSettings.xhr();
    he.cors = !!Kt && "withCredentials" in Kt, he.ajax = Kt = !!Kt, xe.ajaxTransport(function(t) {
        var n, r;
        return he.cors || Kt && !t.crossDomain ? {
            send: function(i, a) {
                var o, s = t.xhr();
                if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (o in t.xhrFields) s[o] = t.xhrFields[o];
                t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                for (o in i) s.setRequestHeader(o, i[o]);
                n = function(e) {
                    return function() {
                        n && (n = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? a(0, "error") : a(s.status, s.statusText) : a(Gt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                            binary: s.response
                        } : {
                            text: s.responseText
                        }, s.getAllResponseHeaders()))
                    }
                }, s.onload = n(), r = s.onerror = s.ontimeout = n("error"), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function() {
                    4 === s.readyState && e.setTimeout(function() {
                        n && r()
                    })
                }, n = n("abort");
                try {
                    s.send(t.hasContent && t.data || null)
                } catch (d) {
                    if (n) throw d
                }
            },
            abort: function() {
                n && n()
            }
        } : void 0
    }), xe.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }), xe.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return xe.globalEval(e), e
            }
        }
    }), xe.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), xe.ajaxTransport("script", function(e) {
        if (e.crossDomain || e.scriptAttrs) {
            var t, n;
            return {
                send: function(r, i) {
                    t = xe("<script>").attr(e.scriptAttrs || {}).prop({
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function(e) {
                        t.remove(), n = null, e && i("error" === e.type ? 404 : 200, e.type)
                    }), be.head.appendChild(t[0])
                },
                abort: function() {
                    n && n()
                }
            }
        }
    });
    var Yt = [],
        Qt = /(=)\?(?=&|$)|\?\?/;
    xe.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Yt.pop() || xe.expando + "_" + qt.guid++;
            return this[e] = !0, e
        }
    }), xe.ajaxPrefilter("json jsonp", function(t, n, r) {
        var i, a, o, s = t.jsonp !== !1 && (Qt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Qt.test(t.data) && "data");
        return s || "jsonp" === t.dataTypes[0] ? (i = t.jsonpCallback = je(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Qt, "$1" + i) : t.jsonp !== !1 && (t.url += (At.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function() {
            return o || xe.error(i + " was not called"), o[0]
        }, t.dataTypes[0] = "json", a = e[i], e[i] = function() {
            o = arguments
        }, r.always(function() {
            void 0 === a ? xe(e).removeProp(i) : e[i] = a, t[i] && (t.jsonpCallback = n.jsonpCallback, Yt.push(i)), o && je(a) && a(o[0]), o = a = void 0
        }), "script") : void 0
    }), he.createHTMLDocument = function() {
        var e = be.implementation.createHTMLDocument("").body;
        return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length
    }(), xe.parseHTML = function(e, t, n) {
        if ("string" != typeof e) return [];
        "boolean" == typeof t && (n = t, t = !1);
        var r, i, a;
        return t || (he.createHTMLDocument ? (t = be.implementation.createHTMLDocument(""), r = t.createElement("base"), r.href = be.location.href, t.head.appendChild(r)) : t = be), i = Fe.exec(e), a = !n && [], i ? [t.createElement(i[1])] : (i = x([e], t, a), a && a.length && xe(a).remove(), xe.merge([], i.childNodes))
    }, xe.fn.load = function(e, t, n) {
        var r, i, a, o = this,
            s = e.indexOf(" ");
        return s > -1 && (r = X(e.slice(s)), e = e.slice(0, s)), je(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), o.length > 0 && xe.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            a = arguments, o.html(r ? xe("<div>").append(xe.parseHTML(e)).find(r) : e)
        }).always(n && function(e, t) {
            o.each(function() {
                n.apply(this, a || [e.responseText, t, e])
            })
        }), this
    }, xe.expr.pseudos.animated = function(e) {
        return xe.grep(xe.timers, function(t) {
            return e === t.elem
        }).length
    }, xe.offset = {
        setOffset: function(e, t, n) {
            var r, i, a, o, s, d, l, u = xe.css(e, "position"),
                c = xe(e),
                g = {};
            "static" === u && (e.style.position = "relative"), s = c.offset(), a = xe.css(e, "top"), d = xe.css(e, "left"), l = ("absolute" === u || "fixed" === u) && (a + d).indexOf("auto") > -1, l ? (r = c.position(), o = r.top, i = r.left) : (o = parseFloat(a) || 0, i = parseFloat(d) || 0), je(t) && (t = t.call(e, n, xe.extend({}, s))), null != t.top && (g.top = t.top - s.top + o), null != t.left && (g.left = t.left - s.left + i), "using" in t ? t.using.call(e, g) : c.css(g)
        }
    }, xe.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                xe.offset.setOffset(this, e, t)
            });
            var t, n, r = this[0];
            if (r) return r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
                top: t.top + n.pageYOffset,
                left: t.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            }
        },
        position: function() {
            if (this[0]) {
                var e, t, n, r = this[0],
                    i = {
                        top: 0,
                        left: 0
                    };
                if ("fixed" === xe.css(r, "position")) t = r.getBoundingClientRect();
                else {
                    for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === xe.css(e, "position");) e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && (i = xe(e).offset(), i.top += xe.css(e, "borderTopWidth", !0), i.left += xe.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - i.top - xe.css(r, "marginTop", !0),
                    left: t.left - i.left - xe.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === xe.css(e, "position");) e = e.offsetParent;
                return e || Ge
            })
        }
    }), xe.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = "pageYOffset" === t;
        xe.fn[e] = function(r) {
            return Oe(this, function(e, r, i) {
                var a;
                return we(e) ? a = e : 9 === e.nodeType && (a = e.defaultView), void 0 === i ? a ? a[t] : e[r] : void(a ? a.scrollTo(n ? a.pageXOffset : i, n ? i : a.pageYOffset) : e[r] = i)
            }, e, r, arguments.length)
        }
    }), xe.each(["top", "left"], function(e, t) {
        xe.cssHooks[t] = N(he.pixelPosition, function(e, n) {
            return n ? (n = O(e, t), dt.test(n) ? xe(e).position()[t] + "px" : n) : void 0
        })
    }), xe.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        xe.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, r) {
            xe.fn[r] = function(i, a) {
                var o = arguments.length && (n || "boolean" != typeof i),
                    s = n || (i === !0 || a === !0 ? "margin" : "border");
                return Oe(this, function(t, n, i) {
                    var a;
                    return we(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (a = t.documentElement, Math.max(t.body["scroll" + e], a["scroll" + e], t.body["offset" + e], a["offset" + e], a["client" + e])) : void 0 === i ? xe.css(t, n, s) : xe.style(t, n, i, s)
                }, t, o ? i : void 0, o)
            }
        })
    }), xe.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        xe.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), xe.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), xe.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
        xe.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    });
    var Xt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    xe.proxy = function(e, t) {
        var n, r, i;
        return "string" == typeof t && (n = e[t], t = e, e = n), je(e) ? (r = le.call(arguments, 2), i = function() {
            return e.apply(t || this, r.concat(le.call(arguments)))
        }, i.guid = e.guid = e.guid || xe.guid++, i) : void 0
    }, xe.holdReady = function(e) {
        e ? xe.readyWait++ : xe.ready(!0)
    }, xe.isArray = Array.isArray, xe.parseJSON = JSON.parse, xe.nodeName = a, xe.isFunction = je, xe.isWindow = we, xe.camelCase = m, xe.type = r, xe.now = Date.now, xe.isNumeric = function(e) {
        var t = xe.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }, xe.trim = function(e) {
        return null == e ? "" : (e + "").replace(Xt, "")
    }, "function" == typeof define && define.amd && define("jquery", [], function() {
        return xe
    });
    var Zt = e.jQuery,
        en = e.$;
    return xe.noConflict = function(t) {
        return e.$ === xe && (e.$ = en), t && e.jQuery === xe && (e.jQuery = Zt), xe
    }, "undefined" == typeof t && (jdgm.jQuery = jdgm.$ = xe), xe
}), jdgm.$.fn.unveil = function(e, t) {
        function n() {
            var e = l.filter(function() {
                var e = i(this);
                if (!e.is(":hidden")) {
                    var t = a.scrollTop(),
                        n = t + a.height(),
                        r = e.offset().top,
                        s = r + e.height();
                    return s >= t - o && n + o >= r
                }
            });
            r = e.trigger("unveil"), l = l.not(r)
        }
        var r, i = jdgm.$,
            a = i(window),
            o = e || 0,
            s = window.devicePixelRatio > 1,
            d = s ? "data-src-retina" : "data-src",
            l = this;
        return this.one("unveil", function() {
            var e = this.getAttribute(d);
            e = e || this.getAttribute("data-src"), e && (this.setAttribute("src", e), "function" == typeof t && t.call(this))
        }), a.on("resize.unveil lookup.unveil", n), jdgm.ScrollEvent.attach(n, "unveil"), n(), this
    },
    function(e, t) {
        function n(e, t, n) {
            return !1
        }

        function r(t, n, o, s, d) {
            var l = !1,
                u = "a, table, thead, tbody, tfoot, tr, col, colgroup, object, embed, param, ol, ul, dl, blockquote, select, optgroup, option, textarea, script, style",
                c = "script, .dotdotdot-keep";
            return t.contents().detach().each(function() {
                var g = this,
                    p = e(g);
                if ("undefined" == typeof g) return !0;
                if (p.is(c)) t.append(p);
                else {
                    if (l) return !0;
                    t.append(p), !d || p.is(s.after) || p.find(s.after).length || t[t.is(u) ? "after" : "append"](d), a(o, s) && (l = 3 == g.nodeType ? i(p, n, o, s, d) : r(p, n, o, s, d)), l || d && d.detach()
                }
            }), n.addClass("is-truncated"), l
        }

        function i(t, n, r, i, l) {
            var c = t[0];
            if (!c) return !1;
            var g = d(c),
                p = -1 !== g.indexOf(" ") ? " " : "\u3000",
                m = "letter" == i.wrap ? "" : p,
                f = g.split(m),
                _ = -1,
                v = -1,
                h = 0,
                j = f.length - 1;
            for (i.fallbackToLetter && 0 == h && 0 == j && (m = "", f = g.split(m), j = f.length - 1); j >= h && (0 != h || 0 != j);) {
                var w = Math.floor((h + j) / 2);
                if (w == v) break;
                v = w, s(c, f.slice(0, v + 1).join(m) + i.ellipsis), r.children().each(function() {
                    e(this).toggle().toggle()
                }), a(r, i) ? (j = v, i.fallbackToLetter && 0 == h && 0 == j && (m = "", f = f[0].split(m), _ = -1, v = -1, h = 0, j = f.length - 1)) : (_ = v, h = v)
            }
            if (-1 == _ || 1 == f.length && 0 == f[0].length) {
                var b = t.parent();
                t.detach();
                var y = l && l.closest(b).length ? l.length : 0;
                b.contents().length > y ? c = u(b.contents().eq(-1 - y), n) : (c = u(b, n, !0), y || b.detach()), c && (g = o(d(c), i), s(c, g), y && l && e(c).parent().append(l))
            } else g = o(f.slice(0, _ + 1).join(m), i), s(c, g);
            return !0
        }

        function a(e, t) {
            return e.innerHeight() > t.maxHeight
        }

        function o(t, n) {
            for (; e.inArray(t.slice(-1), n.lastCharacter.remove) > -1;) t = t.slice(0, -1);
            return e.inArray(t.slice(-1), n.lastCharacter.noEllipsis) < 0 && (t += n.ellipsis), t
        }

        function s(e, t) {
            e.innerText ? e.innerText = t : e.nodeValue ? e.nodeValue = t : e.textContent && (e.textContent = t)
        }

        function d(e) {
            return e.innerText ? e.innerText : e.nodeValue ? e.nodeValue : e.textContent ? e.textContent : ""
        }

        function l(e) {
            do e = e.previousSibling; while (e && 1 !== e.nodeType && 3 !== e.nodeType);
            return e
        }

        function u(t, n, r) {
            var i, a = t && t[0];
            if (a) {
                if (!r) {
                    if (3 === a.nodeType) return a;
                    if (e.trim(t.text())) return u(t.contents().last(), n)
                }
                for (i = l(a); !i;) {
                    if (t = t.parent(), t.is(n) || !t.length) return !1;
                    i = l(t[0])
                }
                if (i) return u(e(i), n)
            }
            return !1
        }

        function c(t, n) {
            return t ? "string" == typeof t ? (t = e(t, n), t.length ? t : !1) : t.jquery ? t : !1 : !1
        }

        function g(e) {
            for (var t = e.innerHeight(), n = ["paddingTop", "paddingBottom"], r = 0, i = n.length; i > r; r++) {
                var a = parseInt(e.css(n[r]), 10);
                isNaN(a) && (a = 0), t -= a
            }
            return t
        }
        if (!e.fn.dotdotdot) {
            e.fn.dotdotdot = function(t) {
                if (0 == this.length) return e.fn.dotdotdot.debug('No element found for "' + this.selector + '".'), this;
                if (this.length > 1) return this.each(function() {
                    e(this).dotdotdot(t)
                });
                var i = this;
                i.data("dotdotdot") && i.trigger("destroy.dot"), i.data("dotdotdot-style", i.attr("style") || ""), i.css("word-wrap", "break-word"), "nowrap" === i.css("white-space") && i.css("white-space", "normal"), i.bind_events = function() {
                    return i.bind("update.dot", function(t, u) {
                        switch (i.removeClass("is-truncated"), t.preventDefault(), t.stopPropagation(), typeof s.height) {
                            case "number":
                                s.maxHeight = s.height;
                                break;
                            case "function":
                                s.maxHeight = s.height.call(i[0]);
                                break;
                            default:
                                s.maxHeight = g(i)
                        }
                        s.maxHeight += s.tolerance, "undefined" != typeof u && (("string" == typeof u || "nodeType" in u && 1 === u.nodeType) && (u = e("<div />").append(u).contents()), u instanceof e && (o = u)), l = i.wrapInner('<div class="dotdotdot" />').children(), l.contents().detach().end().append(o.clone(!0)).find("br").replaceWith("  <br />  ").end().css({
                            height: "auto",
                            width: "auto",
                            border: "none",
                            padding: 0,
                            margin: 0
                        });
                        var c = !1,
                            p = !1;
                        return d.afterElement && (c = d.afterElement.clone(!0), c.show(), d.afterElement.detach()), a(l, s) && (p = "children" == s.wrap ? n(l, s, c) : r(l, i, l, s, c)), l.replaceWith(l.contents()), l = null, e.isFunction(s.callback) && s.callback.call(i[0], p, o), d.isTruncated = p, p
                    }).bind("originalContent.dot", function(e, t) {
                        return e.preventDefault(), e.stopPropagation(), "function" == typeof t && t.call(i[0], o), o
                    }).bind("destroy.dot", function(e) {
                        e.preventDefault(), e.stopPropagation(), i.unbind_events().contents().detach().end().append(o).attr("style", i.data("dotdotdot-style") || "").data("dotdotdot", !1)
                    }), i
                }, i.unbind_events = function() {
                    return i.unbind(".dot"), i
                }, i.watch = function() {}, i.unwatch = function() {};
                var o = i.contents(),
                    s = e.extend(!0, {}, e.fn.dotdotdot.defaults, t),
                    d = {},
                    l = null;
                return s.lastCharacter.remove instanceof Array || (s.lastCharacter.remove = e.fn.dotdotdot.defaultArrays.lastCharacter.remove), s.lastCharacter.noEllipsis instanceof Array || (s.lastCharacter.noEllipsis = e.fn.dotdotdot.defaultArrays.lastCharacter.noEllipsis), d.afterElement = c(s.after, i), d.isTruncated = !1, d.dotId = p++, i.data("dotdotdot", !0).bind_events().trigger("update.dot"), s.watch && i.watch(), i
            }, e.fn.dotdotdot.defaults = {
                ellipsis: "... ",
                wrap: "word",
                fallbackToLetter: !0,
                lastCharacter: {},
                tolerance: 0,
                callback: null,
                after: null,
                height: null,
                watch: !1,
                windowResizeFix: !0
            }, e.fn.dotdotdot.defaultArrays = {
                lastCharacter: {
                    remove: [" ", "\u3000", ",", ";", ".", "!", "?"],
                    noEllipsis: []
                }
            }, e.fn.dotdotdot.debug = function(e) {};
            var p = 1,
                m = e.fn.html;
            e.fn.html = function(n) {
                return n != t && !e.isFunction(n) && this.data("dotdotdot") ? this.trigger("update", [n]) : m.apply(this, arguments)
            };
            var f = e.fn.text;
            e.fn.text = function(n) {
                return n != t && !e.isFunction(n) && this.data("dotdotdot") ? (n = e("<div />").text(n).html(), this.trigger("update", [n])) : f.apply(this, arguments)
            }
        }
    }(jdgm.$ || jQuery),
    function() {
        jdgm.$(function(e) {
            var t, n, r;
            return r = jdgm._safeRun, n = function() {
                return {}
            }, t = e(), r(function() {
                return ["serialize", "val", "fadeTo", "hasClass", "has", "text", "index", "add", "addBack", "not", "is", "closest", "hide", "toggle", "slice", "first", "last", "even", "odd", "promise", "position", "off", "prepend", "before", "after", "clone", "replaceWith", "appendTo", "wrapAll", "wrapInner", "wrap", "unwrap", "removeClass"].forEach(function(e) {
                    return t[e]()
                }), e.event.remove(t), e.event.dispatch(t), e.clone(document.createElement("div")), t.appendTo(document.createElement("div"))
            }), r(function() {
                var t;
                return t = e("<form><input name=warmup></form>"), ["stop", "finish", "serializeArray", "parent", "parents", "parentsUntil", "next", "prev", "nextAll", "prevAll", "nextUntil", "prevUntil", "siblings", "children", "contents", "serializeJSON", "innerWidth"].forEach(function(e) {
                    return t[e]()
                }), ["attr", "prop", "removeProp", "removeData", "val"].forEach(function(e) {
                    return t[e]("")
                }), t.removeAttr("", "").animate({
                    width: "1px",
                    height: "1px"
                }), t.toggleClass("jdgm-hidden").trigger("click"), t.scrollTop({}), e.offset.setOffset(t[0], {}), e(".jdgm-random-link").offset()
            }), r(function() {
                return ["when", "parseXML", "ajax", "get", "proxy", "trim"].forEach(function(t) {
                    return e[t]()
                }), ["hasData", "data", "removeData", "_data", "_removeData"].forEach(function(n) {
                    return e[n](t, "")
                })
            }), r(function() {
                return e.Animation.tweener("x"), e.valHooks.select.get({
                    options: ""
                }), e.valHooks.select.set({
                    options: ""
                }), e.fn.load(""), e.isNumeric({}), e.event.special.blur.trigger()
            }), r(function() {
                var t, n;
                return t = e(".jdgm-widget span"), t.filter("[a]"), t.filter(".btn"), n = ["contains(x)", "lang(en)", "checked", "empty", "text", "even", "odd", "lt", "gt", "target", "root", "button", "input", "focus", "first-child", "selected", "not(i)", "parent", "header", "enabled", "disabled"], jdgm.asyncEach(n, function(e) {
                    return t.filter(":" + e)
                }), e.param(n), e.param({
                    a: {
                        b: n
                    }
                }), e.unique(n)
            }), r(function() {
                return e("<img>").unveil().trigger("unveil")
            }), r(function() {
                return e.urlParam(""), jdgm.uniq([]), jdgm.compact([]), jdgm.compactHash({
                    a: null
                }), jdgm.random(), jdgm.shopifyDomain(), jdgm.shopDomain(), jdgm.shopParams(), jdgm.truncate(""), jdgm.times(1, n), jdgm.escapeHTML(""), jdgm.urlParamsAsHash(""), jdgm.isInViewport(document.createElement("i")), jdgm.ScrollEvent.attach(n, "warmup"), jdgm.ScrollEvent.dettach("warmup"), jdgm.ScrollEvent.trigger("warmup"), jdgm.buildStarsFor(e("<i score=5></i>"))
            })
        })
    }.call(this),
    function() {
        jdgm.$(function(e) {
            return e(".jdgm-prev-badge").closest(".judgeme-preview-badge").addClass("jdgm-widget jdgm-preview-badge jdgm--from-v1"), e(".jdgm-rev-widg").closest("#judgeme_product_reviews:not(.jdgm-widget.jdgm-review-widget)").addClass("jdgm-widget jdgm-review-widget jdgm--from-v1"), e(".ui-tabs.ui-widget [id=judgeme_product_reviews]:not(.jdgm-widget.jdgm-review-widget)").each(function(t, n) {
                var r;
                return r = e(n), r.find(".jdgm-rev-widg, .judgeme-reviews").length <= 0 ? r.addClass("jdgm-widget jdgm-review-widget jdgm--from-v1") : void 0
            })
        })
    }.call(this),
    function() {
        window.InstantClick && InstantClick.on("change", function(e) {
            return jdgm._doneSetup = null
        })
    }.call(this),
    function() {
        jdgm.$(function(e) {
            var t, n, r, i, a, o;
            return r = {
                shopify: !0
            }, t = "https://cdn1.judge.me/assets/installed.js", n = "judge.me/assets/installed.js", i = [".jdgm-widget", ".jdgm-carousel-wrapper"], o = function(t) {
                var n;
                return n = t.replace(/\//g, "\\/"), e("head").html().indexOf(n) < 0 && e("html").html().indexOf(n) < 0 && e("head").html().indexOf(t) < 0 && e("html").html().indexOf(t)
            }, a = function() {
                return o(t) && o(n) ? (console.log("If you uninstalled Judge.me please remove our widgets from your theme files."), jdgm.asyncEach(i, function(t) {
                    return jdgm.asyncEach(e(t), function(t) {
                        return e(t).addClass("jdgm-hidden").css("display", "none")
                    })
                })) : void 0
            }, jdgm._removeIfUninstalled = function() {
                return r[jdgmSettings.platform] ? a() : void 0
            }, jdgm._removeIfUninstalled()
        })
    }.call(this),
    function() {
        var e;
        e = {
            pagination: 5,
            disable_web_reviews: !1,
            badge_no_review_text: "No reviews",
            badge_n_reviews_text: "{{ n }} review/reviews",
            badge_star_color: "",
            hide_badge_preview_if_no_reviews: !1,
            badge_hide_text: !1,
            enforce_center_preview_badge: !1,
            widget_title: "Customer Reviews",
            widget_open_form_text: "Write a review",
            widget_close_form_text: "Cancel review",
            widget_refresh_page_text: "Refresh page",
            widget_summary_text: "Based on {{ number_of_reviews }} review/reviews",
            widget_no_review_text: "Be the first to write a review",
            widget_name_field_text: "Name",
            widget_verified_name_field_text: "Verified Name (public)",
            widget_name_placeholder_text: "Enter your name (public)",
            widget_required_field_error_text: "This field is required.",
            widget_email_field_text: "Email",
            widget_verified_email_field_text: "Verified Email (private, can not be edited)",
            widget_email_placeholder_text: "Enter your email (private)",
            widget_email_field_error_text: "Please enter a valid email address.",
            widget_rating_field_text: "Rating",
            widget_review_title_field_text: "Review Title",
            widget_review_title_placeholder_text: "Give your review a title",
            widget_review_body_field_text: "Review",
            widget_review_body_placeholder_text: "Write your comments here",
            widget_pictures_field_text: "Picture/Video (optional)",
            widget_submit_review_text: "Submit Review",
            widget_submit_verified_review_text: "Submit Verified Review",
            widget_submit_success_msg_with_auto_publish: 'Thank you! Please refresh the page in a few moments to see your review. You can remove or edit your review by logging into <a href="https://judge.me/login" target="_blank" rel="nofollow noopener">Judge.me</a>',
            widget_submit_success_msg_no_auto_publish: 'Thank you! Your review will be published as soon as it is approved by the shop admin. You can remove or edit your review by logging into <a href="https://judge.me/login" target="_blank" rel="nofollow noopener">Judge.me</a>',
            widget_show_default_reviews_out_of_total_text: "Showing {{ n_reviews_shown }} out of {{ n_reviews }} reviews.",
            widget_show_all_link_text: "Show all",
            widget_show_less_link_text: "Show less",
            widget_author_said_text: "{{ reviewer_name }} said:",
            widget_days_text: "{{ n }} days ago",
            widget_weeks_text: "{{ n }} week/weeks ago",
            widget_months_text: "{{ n }} month/months ago",
            widget_years_text: "{{ n }} year/years ago",
            widget_yesterday_text: "yesterday",
            widget_today_text: "today",
            widget_replied_text: ">> {{ shop_name }} replied:",
            widget_read_more_text: "Read more",
            widget_reviewer_name_as_initial: "",
            widget_rating_filter_color: "#fbcd0a",
            widget_rating_filter_see_all_text: "See all reviews",
            widget_sorting_most_recent_text: "Most Recent",
            widget_sorting_highest_rating_text: "Highest Rating",
            widget_sorting_lowest_rating_text: "Lowest Rating",
            widget_sorting_with_pictures_text: "Only Pictures",
            widget_sorting_most_helpful_text: "Most Helpful",
            widget_open_question_form_text: "Ask a question",
            widget_reviews_subtab_text: "Reviews",
            widget_questions_subtab_text: "Questions",
            widget_question_label_text: "Question",
            widget_answer_label_text: "Answer",
            widget_question_placeholder_text: "Write your question here",
            widget_submit_question_text: "Submit Question",
            widget_question_submit_success_text: "Thank you for your question! We will notify you once it gets answered.",
            widget_star_color: "",
            verified_badge_text: "Verified",
            verified_badge_bg_color: "",
            verified_badge_text_color: "",
            verified_badge_placement: "left-of-reviewer-name",
            widget_review_max_height: "",
            widget_hide_border: !1,
            widget_social_share: !1,
            widget_thumb: !1,
            widget_review_location_show: !1,
            widget_location_format: "",
            all_reviews_include_out_of_store_products: !0,
            all_reviews_out_of_store_text: "(out of store)",
            all_reviews_pagination: 100,
            all_reviews_product_name_prefix_text: "about",
            enable_review_pictures: !1,
            enable_question_anwser: !1,
            widget_theme: "default",
            review_date_format: "mm/dd/yyyy",
            default_sort_method: "most-recent",
            widget_product_reviews_subtab_text: "Product Reviews",
            widget_shop_reviews_subtab_text: "Shop Reviews",
            widget_write_a_store_review_text: "Write a Store Review",
            show_product_url_for_grouped_product: !1,
            widget_sorting_pictures_first_text: "Pictures First",
            show_pictures_on_all_rev_page_mobile: !1,
            show_pictures_on_all_rev_page_desktop: !1,
            floating_tab_hide_mobile_install_preference: !1,
            floating_tab_button_name: "\u2605 Judge.me Reviews",
            floating_tab_title: "Let customers speak for us",
            floating_tab_button_color: "",
            floating_tab_button_background_color: "",
            floating_tab_url: "",
            floating_tab_url_enabled: !1,
            floating_tab_tab_style: "text",
            all_reviews_text_badge_text: "Customers rate us {{ shop.metafields.judgeme.all_reviews_rating | round: 1 }}/5 based on {{ shop.metafields.judgeme.all_reviews_count }} reviews.",
            all_reviews_text_badge_text_branded_style: "{{ shop.metafields.judgeme.all_reviews_rating | round: 1 }} out of 5 stars based on {{ shop.metafields.judgeme.all_reviews_count }} reviews",
            is_all_reviews_text_badge_a_link: !1,
            show_stars_for_all_reviews_text_badge: !1,
            all_reviews_text_badge_url: "",
            all_reviews_text_style: "text",
            all_reviews_text_color_style: "judgeme_brand_color",
            all_reviews_text_color: "#339999",
            all_reviews_text_show_jm_brand: !0,
            featured_carousel_show_header: !0,
            featured_carousel_title: "Let customers speak for us",
            featured_carousel_count_text: "from {{ n }} reviews",
            featured_carousel_add_link_to_all_reviews_page: !1,
            featured_carousel_url: "",
            featured_carousel_show_images: !0,
            featured_carousel_autoslide_interval: 5,
            featured_carousel_arrows_on_the_sides: !1,
            featured_carousel_height: 250,
            featured_carousel_width: 80,
            featured_carousel_image_size: 0,
            featured_carousel_image_height: 250,
            featured_carousel_arrow_color: "#eeeeee",
            verified_count_badge_style: "vintage",
            verified_count_badge_orientation: "horizontal",
            verified_count_badge_color_style: "judgeme_brand_color",
            verified_count_badge_color: "#339999",
            is_verified_count_badge_a_link: !1,
            verified_count_badge_url: "",
            verified_count_badge_show_jm_brand: !0,
            widget_rating_preset_default: 5,
            widget_first_sub_tab: "product-reviews",
            widget_show_histogram: !0,
            widget_histogram_use_custom_color: !1,
            widget_pagination_use_custom_color: !1,
            widget_star_use_custom_color: !1,
            widget_verified_badge_use_custom_color: !1,
            widget_write_review_use_custom_color: !1,
            picture_reminder_submit_button: "Upload Pictures",
            enable_review_videos: !1,
            mute_video_by_default: !1,
            widget_sorting_videos_first_text: "Videos First",
            widget_review_pending_text: "Pending",
            featured_carousel_items_for_large_screen: 3,
            social_share_options_order: "Facebook,Twitter",
            remove_microdata_snippet: !1,
            disable_json_ld: !1,
            enable_json_ld_products: !1,
            preview_badge_show_question_text: !1,
            preview_badge_no_question_text: "No questions",
            preview_badge_n_question_text: "{{ number_of_questions }} question/questions",
            qa_badge_show_icon: !1,
            qa_badge_icon_color: null,
            qa_badge_position: "same-row",
            remove_judgeme_branding: !1,
            widget_add_search_bar: !1,
            widget_search_bar_placeholder: "Search reviews",
            widget_sorting_verified_only_text: "Verified only",
            featured_carousel_theme: "default",
            featured_carousel_show_rating: !0,
            featured_carousel_show_title: !0,
            featured_carousel_show_body: !0,
            featured_carousel_show_date: !1,
            featured_carousel_show_reviewer: !0,
            featured_carousel_show_product: !1,
            featured_carousel_header_background_color: "#399999",
            featured_carousel_header_text_color: "#ffffff",
            featured_carousel_name_product_separator: "reviewed",
            featured_carousel_full_star_background: "#399999",
            featured_carousel_empty_star_background: "#dadada",
            featured_carousel_vertical_theme_background: "#f9fafb",
            featured_carousel_verified_badge_enable: !1,
            featured_carousel_verified_badge_color: "#339999",
            featured_carousel_border_style: "round",
            featured_carousel_review_line_length_limit: 3,
            featured_carousel_more_reviews_button_text: "Read more reviews",
            featured_carousel_view_product_button_text: "View product",
            all_reviews_page_load_reviews_on: "scroll",
            all_reviews_page_load_more_text: "Load More Reviews",
            disable_fb_tab_reviews: !1,
            enable_ajax_cdn_cache: !1,
            widget_advanced_speed_features: null,
            widget_public_name_text: "displayed publicly like",
            default_reviewer_name: "John Smith",
            default_reviewer_name_has_non_latin: !0,
            widget_reviewer_anonymous: "Anonymous",
            medals_widget_title: "Judge.me Review Medals",
            medals_widget_background_color: "#f9fafb",
            medals_widget_position: "footer_all_pages",
            medals_widget_border_color: "#f9fafb",
            medals_widget_verified_text_position: "left",
            medals_widget_use_monochromatic_version: !1,
            medals_widget_elements_color: "#339999",
            show_reviewer_avatar: !0,
            widget_invalid_yt_video_url_error_text: "Not a YouTube video URL",
            widget_max_length_field_error_text: "Please enter no more than {0} characters.",
            widget_show_country_flag: !1,
            widget_show_collected_via_shop_app: !0,
            widget_verified_by_shop_badge_style: "light",
            widget_verified_by_shop_text: "Verified by Shop",
            widget_show_photo_gallery: !1,
            widget_load_with_code_splitting: !1,
            widget_ugc_install_preference: !1,
            widget_ugc_title: "Made by us, Shared by you",
            widget_ugc_subtitle: "Tag us to see your picture featured in our page",
            widget_ugc_arrows_color: "#ffffff",
            widget_ugc_primary_button_text: "Buy Now",
            widget_ugc_primary_button_background_color: "#339999",
            widget_ugc_primary_button_text_color: "#ffffff",
            widget_ugc_primary_button_border_width: "0",
            widget_ugc_primary_button_border_style: "none",
            widget_ugc_primary_button_border_color: "#339999",
            widget_ugc_primary_button_border_radius: "25",
            widget_ugc_secondary_button_text: "Load More",
            widget_ugc_secondary_button_background_color: "#ffffff",
            widget_ugc_secondary_button_text_color: "#339999",
            widget_ugc_secondary_button_border_width: "2",
            widget_ugc_secondary_button_border_style: "solid",
            widget_ugc_secondary_button_border_color: "#339999",
            widget_ugc_secondary_button_border_radius: "25",
            widget_ugc_reviews_button_text: "View Reviews",
            widget_ugc_reviews_button_background_color: "#ffffff",
            widget_ugc_reviews_button_text_color: "#339999",
            widget_ugc_reviews_button_border_width: "2",
            widget_ugc_reviews_button_border_style: "solid",
            widget_ugc_reviews_button_border_color: "#339999",
            widget_ugc_reviews_button_border_radius: "25",
            widget_ugc_reviews_button_link_to: "judgeme-reviews-page",
            widget_ugc_show_post_date: !0,
            widget_ugc_max_width: "800",
            widget_rating_metafield_value_type: !0,
            widget_primary_color: "#339999",
            widget_enable_secondary_color: !1,
            widget_secondary_color: "#edf5f5",
            widget_summary_average_rating_text: "{{ average_rating }} out of 5",
            widget_media_grid_title: "Customer photos & videos",
            widget_media_grid_see_more_text: "See more",
            widget_round_style: !1,
            widget_show_product_medals: !0,
            widget_verified_by_judgeme_text: "Verified by Judge.me",
            widget_show_store_medals: !0,
            widget_verified_by_judgeme_text_in_store_medals: "Verified by Judge.me",
            widget_media_field_exceed_quantity_message: "Sorry, we can only accept {{ max_media }} for one review.",
            widget_media_field_exceed_limit_message: "{{ file_name }} is too large, please select a {{ media_type }} less than {{ size_limit }}MB.",
            widget_review_submitted_text: "Review Submitted!",
            widget_question_submitted_text: "Question Submitted!",
            widget_close_form_text_question: "Cancel",
            widget_write_your_answer_here_text: "Write your answer here",
            widget_show_collected_by_judgeme: !1,
            widget_reviewer_name_color: "",
            widget_write_review_text_color: "",
            widget_write_review_bg_color: "",
            widget_collected_by_judgeme_text: "collected by Judge.me",
            widget_pagination_type: "standard",
            widget_load_more_text: "Load More",
            widget_load_more_color: "#339999",
            widget_full_review_text: "Full Review",
            widget_read_more_reviews_text: "Read More Reviews",
            widget_read_questions_text: "Read Questions",
            widget_questions_and_answers_text: "Questions & Answers",
            widget_verified_by_text: "Verified by",
            widget_number_of_reviews_text: "{{ number_of_reviews }} reviews",
            widget_back_button_text: "Back",
            widget_next_button_text: "Next",
            widget_custom_forms_filter_button: "Filters",
            custom_forms_style: "horizontal",
            widget_show_review_information: !1,
            how_reviews_are_collected: "How reviews are collected?",
            widget_show_review_keywords: !1,
            widget_gdpr_statement: "How we use your data: We\u2019ll only contact you about the review you left, and only if necessary. By submitting your review, you agree to Judge.me\u2019s <a href='https://judge.me/terms' target='_blank' rel='nofollow noopener'>terms</a>, <a href='https://judge.me/privacy' target='_blank' rel='nofollow noopener'>privacy</a> and <a href='https://judge.me/content-policy' target='_blank' rel='nofollow noopener'>content</a> policies.",
            popup_widget_review_selection: "automatically_with_pictures",
            popup_widget_round_border_style: !0,
            popup_widget_show_title: !0,
            popup_widget_show_body: !0,
            popup_widget_show_reviewer: !1,
            popup_widget_show_product: !0,
            popup_widget_show_pictures: !0,
            popup_widget_use_review_picture: !0,
            popup_widget_show_on_home_page: !0,
            popup_widget_show_on_product_page: !0,
            popup_widget_show_on_collection_page: !0,
            popup_widget_show_on_cart_page: !0,
            popup_widget_position: "bottom_left",
            popup_widget_first_review_delay: 5,
            popup_widget_duration: 5,
            popup_widget_interval: 5,
            popup_widget_review_count: 5,
            popup_widget_hide_on_mobile: !0,
            review_snippet_widget_color: "#000000",
            review_snippet_widget_round_border_style: !0,
            review_snippet_widget_card_color: "#FFFFFF",
            review_snippet_widget_slider_arrows_background_color: "#FFFFFF",
            review_snippet_widget_slider_arrows_color: "#000000",
            review_snippet_widget_star_color: "#339999",
            widget_review_custom_css: "",
            preview_badge_custom_css: "",
            featured_carousel_custom_css: "",
            floating_tab_custom_css: "",
            all_reviews_widget_custom_css: "",
            medals_widget_custom_css: "",
            verified_badge_custom_css: "",
            all_reviews_text_custom_css: "",
            checkout_comment_extension_title_on_product_page: "Customer Comments",
            checkout_comment_extension_num_latest_comment_show: 5,
            checkout_comment_extension_format: "name_and_timestamp",
            checkout_comment_customer_name: "last_initial",
            checkout_comment_comment_notification: !0,
            preview_badge_collection_page_install_preference: !1,
            preview_badge_home_page_install_preference: !1,
            preview_badge_product_page_install_preference: !1,
            review_widget_install_preference: "",
            review_carousel_install_preference: !1,
            floating_reviews_tab_install_preference: "none",
            verified_reviews_count_badge_install_preference: !1,
            all_reviews_text_install_preference: !1,
            review_widget_best_location: !1,
            judgeme_medals_install_preference: !1,
            platform: "shopify",
            branding_url: "https://judge.me/reviews",
            branding_text: "Powered by Judge.me",
            locale: "en"
        }, jdgm.$(function(t) {
            var n, r, i, a, o;
            return n = {
                cbFormAdded: t.noop,
                cbRevSubmitSuccess: t.noop,
                openForm: null,
                closeForm: null,
                submitBtnClassname: null,
                cancelBtnClassname: null,
                scrollTopOffset: 30,
                scrollTo: t.noop,
                openReviewTab: null,
                revTabSelector: null,
                preloadPictures: !1,
                jldDisable: !1,
                jldCanonicalUrl: null,
                jldProductTitle: null,
                removeMicrodata: !1,
                autoSlideInterval: 5,
                carouselNoAutoSlide: !1,
                carouselHeightLimitDelay: 0,
                smallReviewWidget: !1,
                leexPicWidth: 360,
                productUrlBuilder: null,
                ajaxCdnCacheTtl: 1200,
                leexDesktopPreload: 6,
                leexMobilePreload: 1
            }, r = function() {
                var e;
                return e = t("<a class='jdgm-random-link jdgm-hidden' href='#' rel='nofollow' style='display: none;'>Judge.me</a>"), t("body").append(e), "rgb(0, 0, 238)" === window.getComputedStyle(e[0]).color ? (jdgmSettings.linkColor = "#fbcd0a", jdgmSettings.buttonColor = "currentColor") : (jdgmSettings.linkColor = e.css("color"), jdgmSettings.buttonColor = e.css("color")), jdgmSettings.bgColor = e.css("backgroundColor"), jdgm.hasBgColor(e) ? void 0 : jdgmSettings.bgColor = "#ffffff"
            }, a = function() {
                var e, n;
                return n = ".jdgm-settings-style, .jdgm-miracle-styles", e = /<span[^<]+>|<\/span>/g, t.each(t(n), function(n, r) {
                    var i, a;
                    return i = t(r), a = i.html(), a = a.replaceAll(e, ""), i.html(a)
                })
            }, i = function() {
                var e, t, n;
                n = [];
                for (e in jdgmSettings) t = jdgmSettings[e], "string" == typeof t ? n.push(jdgmSettings[e] = o(t)) : n.push(void 0);
                return n
            }, o = function(e) {
                var t, n, r, i, a, o, s;
                if (r = e, a = /<span class='notranslate'>([^<]+)<\/span>/g, n = r.match(a), n && n.length > 0)
                    for (o = 0, s = n.length; s > o; o++) t = n[o], i = a.exec(t), a.lastIndex = 0, i && (r = r.replace(t, i[1]));
                return r
            }, r(), a(), i(), jdgm.originalSettings = jdgmSettings, window.jdgmSettings = t.extend({}, e, n, jdgmSettings, window.judgemeOpts)
        })
    }.call(this),
    function() {
        var e, t, n;
        e = jdgm.$, t = function() {
            return (new Date).getTime()
        }, jdgm.DONE_SETUP_CLASS = "jdgm--done-setup", jdgm.DONE_SETUP_WIDGET_CLASS = "jdgm--done-setup-widget", jdgm.REVIEWS_NEEDING_SETUP_SELECTOR = ".jdgm-rev:not(." + jdgm.DONE_SETUP_CLASS + ")", jdgm.HTTPS_HOST = "https://judge.me", jdgm.API_HOST = "https://api.judge.me", jdgm.WIDGET_TRACKING_API_HOST = "https://tracking.aws.judge.me", jdgm.CDN_HOST = jdgm.CDN_HOST || "https://cdn.judge.me/", jdgm.JM_PUBLIC_IMAGE_URL = "https://judgeme-public-images.imgix.net/judgeme/", e.urlParam = function(e) {
            var t;
            return t = new RegExp("[\\?&]" + e + "=([^&#]*)").exec(window.location.href), t ? t[1] || void 0 : void 0
        }, e.fn.serializeJSON = function() {
            var t, n;
            return n = {}, t = e(this), t.find("input, select").each(function() {
                var t;
                if (t = void 0, this.name) {
                    if ("radio" === this.type) {
                        if (n[this.name]) return;
                        return n[this.name] = this.checked ? this.value : ""
                    }
                    return "checkbox" !== this.type ? (t = n[this.name], n[this.name] = "string" == typeof t ? [t, this.value] : e.isArray(t) ? e.merge(t, [this.value]) : this.value) : (t = n[this.name], this.checked ? n[this.name] = "string" == typeof t ? [t, this.value] : e.isArray(t) ? e.merge(t, [this.value]) : this.value : t ? void 0 : n[this.name] = "")
                }
            }), n
        }, jdgm.asyncEach = function(e, n, r, i, a) {
            var o, s;
            return null == r && (r = 200), null == i && (i = window), null == a && (a = 1), o = function() {
                var d;
                for (d = t(); s < e.length && t() - d <= r;) n.call(i, e[s], s, e), ++s;
                return s < e.length ? setTimeout(o, a) : void 0
            }, s = 0, o()
        }, jdgm.uniq = function(t) {
            return e.grep(t, function(n, r) {
                return r === e.inArray(n, t)
            })
        }, jdgm.random = function(e) {
            return Math.floor(Math.random() * e + 1)
        }, jdgm.shopifyDomain = function() {
            return window.Shopify ? Shopify.shop : void 0
        }, jdgm.shopDomain = function() {
            return jdgm.SHOP_DOMAIN || jdgm.shopifyDomain() || document.domain
        }, jdgm.shopParams = function() {
            return {
                url: jdgm.shopDomain(),
                shop_domain: jdgm.shopDomain(),
                platform: jdgmSettings.platform
            }
        }, jdgm.truncate = function(e, t) {
            return e.length <= t ? e : e.substring(0, t - 3) + "..."
        }, jdgm.hasBgColor = function(e) {
            var t;
            return t = e.css("background-color"), "rgba(0, 0, 0, 0)" !== t && "transparent" !== t
        }, jdgm.scrollTo = function(t, n) {
            return n = n || 0, jdgmSettings.scrollTo(t, n) !== !1 ? e("html,body").animate({
                scrollTop: t.offset().top - n
            }) : void 0
        }, jdgm.triggerEvent = function(t, n) {
            return e(document).trigger("jdgm." + t, n)
        }, jdgm.triggerVanillaEvent = function(e, t) {
            var n;
            return n = new CustomEvent("jdgm." + e, {
                detail: t
            }), document.dispatchEvent(n)
        }, jdgm.setupLazyLoadPicture = function(t, n) {
            return null == n && (n = 200), t.unveil(n, function() {
                var t;
                return t = e(this).parent(".jdgm--loading"), t ? t.removeClass("jdgm--loading") : void 0
            }), setTimeout(function() {
                return jdgm.ScrollEvent.trigger("unveil")
            })
        }, jdgm._loadSvg = function(t, n, r, i, a) {
            var o, s;
            return null == i && (i = !1), null == a && (a = !1), i ? e.ajax({
                url: "" + r + t.data("url") + "?auto=format",
                success: function(n) {
                    var r, i, a;
                    return r = e("<span class='jdgm-svg__mono' role='img'><span>"), r.attr("aria-label", t.data("alt")), void 0 === e(n.documentElement).attr("viewBox") && (a = e(n.documentElement).attr("width"), i = e(n.documentElement).attr("height"), e(n.documentElement).attr("viewBox", "0 0 " + a + " " + i)), r.html((new XMLSerializer).serializeToString(n.documentElement)), t.html(r), t.parent().removeClass("jdgm--loading")
                }
            }) : (o = e("<img />"), o.attr("alt", t.data("alt")), s = "" + n + t.data("url") + "?auto=format", a ? o.attr("data-src", s) : o.attr("src", s), t.html(o), t.parent().removeClass("jdgm--loading"))
        }, jdgm.compact = function(e) {
            return e.filter(Boolean)
        }, jdgm.compactHash = function(e) {
            return Object.keys(e).forEach(function(t) {
                return null === e[t] || void 0 === e[t] ? delete e[t] : void 0
            }), e
        }, jdgm.times = function(e, t) {
            var n, r, i;
            for (i = [], n = r = 0; e >= 0 ? e > r : r > e; n = e >= 0 ? ++r : --r) i.push(t(n));
            return i
        }, n = document.createElement("textarea"), jdgm.escapeHTML = function(e) {
            return n.textContent = e, n.innerHTML
        }, jdgm.urlParamsAsHash = function(e) {
            var t, n, r, i, a;
            if (null == e && (e = null), e) i = e.split("?")[1], r = i ? i.split("&") : [];
            else {
                if (location.search.length <= 0) return {};
                r = location.search.substring(1).split("&")
            }
            for (a = {}, t = 0; t < r.length;) n = r[t].split("="), a[decodeURIComponent(n[0])] = decodeURIComponent(n[1]), t++;
            return a
        }, jdgm.isWidgetLoadMore = function() {
            return "load_more" === jdgmSettings.widget_pagination_type
        }, jdgm.isInViewport = function(e, t) {
            var n, r;
            return null == t && (t = 1), null === e.offsetParent ? !1 : (r = e.getBoundingClientRect(), n = r.bottom - r.height * (1 - t), r.top >= 0 && r.left >= 0 && n <= (window.innerHeight || document.documentElement.clientHeight) && r.right <= (window.innerWidth || document.documentElement.clientWidth))
        }, jdgm._htmlFor = function(e, t) {
            return JST["templates/shopify_v2/" + e](t)
        }, jdgm._safeRun = function(e, t) {
            return null == t && (t = 99), setTimeout(function() {
                try {
                    return e()
                } catch (t) {}
            }, t)
        }
    }.call(this),
    function() {
        var e, t, n, r, i;
        e = jdgm.$, r = !1, t = [], n = {}, jdgm.ScrollEvent = {
            attach: function(e, r) {
                return r ? (n[r] = n[r] || [], n[r].push(e)) : t.push(e)
            },
            dettach: function(e) {
                return delete n[e]
            },
            trigger: function(e) {
                var t;
                return t = n[e], i(t)
            },
            scrollInsideContainer: function(t) {
                return e(t).on("scroll", function() {
                    return r = !0
                })
            }
        }, i = function(t) {
            return e.each(t, function(t, n) {
                return e.isFunction(n) ? n() : void 0
            })
        }, e(window).on("scroll", function() {
            return r = !0
        }), setInterval(function() {
            return r ? (r = !1, i(t), e.each(n, function(e, t) {
                return i(t)
            })) : void 0
        }, 250)
    }.call(this),
    function() {
        var e, t, n, r;
        e = jdgm.$, jdgm.buildStarsFor = function(e, t) {
            return e.find(".jdgm-star").length > 0 ? void 0 : (t = t || e.data("score"), e.html(n(t)))
        }, r = function(e) {
            return Math.round(2 * e) / 2
        }, t = function(e) {
            return "<span class='jdgm-star jdgm--" + e + "'></span>"
        }, n = function(e) {
            var n, i, a, o, s, d;
            for (d = r(parseFloat(e)), n = Math.floor(d), i = d % 1 === .5, s = 5, o = "", a = 0; n > a;) o += t("on"), s--, a++;
            for (i && (o += t("half"), s--), a = 0; s > a;) o += t("off"), a++;
            return o
        }
    }.call(this),
    function() {
        jdgm.$(function(e) {
            var t, n;
            return t = [".jdgm-histogram__row", ".jdgm-paginate__page", ".jdgm-prev-badge", ".jdgm-subtab__name", ".jdgm-rev__thumb-btn", ".jdgm-rev__share-btn", ".jdgm-carousel__left-arrow", ".jdgm-carousel__right-arrow", ".jdgm-form .jdgm-star", ".jdgm-revs-tab-btn", ".jdgm-form-dynamic__back", ".jdgm-form-dynamic__next", ".jdgm-form-dynamic .jdgm-star", ".jdgm-rev__body-read-more"].join(", "), n = function(e) {
                return [32, 13].includes(e.keyCode) ? e.currentTarget.click() : void 0
            }, e(document).on("keyup", t, n)
        })
    }.call(this),
    function() {
        jdgm.$(function(e) {
            var t, n, r, i, a, o, s, d, l, u, c, g, p, m, f, _, v, h;
            return t = 1e3, a = {
                "jdgm-preview-badge": "preview_badge",
                "jdgm-review-widget": "review_widget",
                "jdgm-medals-wrapper": "medals",
                "jdgm-verified-badge": "verified_badge",
                "jdgm-ugc-media-wrapper": "ugc_media",
                "jdgm-revs-tab": "reviews_tab",
                "jdgm-revs-tab__main": "reviews_tab",
                "jdgm-carousel": "carousel",
                "jdgm-all-reviews-widget": "all_reviews_page",
                "jdgm-comment-widget": "checkout_comment",
                "jdgm-popup-widget": "popup_widget",
                "jdgm-review-snippet-widget": "review_snippet_widget"
            }, n = [".jdgm-review-widget", ".jdgm-carousel", ".jdgm-comment-widget", ".jdgm-widget.jdgm-medals-wrapper", ".jdgm-verified-badge", ".jdgm-ugc-media-wrapper", ".jdgm-all-reviews-widget", ".jdgm-revs-tab", ".jdgm-revs-tab__main", ".jdgm-popup-widget", ".jdgm-review-snippet-widget"], o = {
                preview_badge: "data-id",
                review_widget: "data-id",
                checkout_comment: "data-id"
            }, jdgm._widgetEvents = [], s = null, r = 2e3, i = 20, jdgm._recordWidgetClick = function(e) {
                return v(e, "clicks")
            }, f = function() {
                var t, r;
                return r = n.map(function(e) {
                    return "" + e + ":not([data-widget-name]):not(.jdgm-hidden)"
                }).join(", "), t = e(r), jdgm.asyncEach(t, function(t) {
                    return l(e(t))
                }), h(t), m(t)
            }, h = function(t) {
                return jdgm.asyncEach(t, function(t) {
                    return v(e(t), "impressions")
                })
            }, m = function(t) {
                var n, r, i;
                return i = function(t, n) {
                    return t.forEach(function(t) {
                        var r;
                        return t.intersectionRatio > 0 && !t.target.dataset["views-tracked"] ? (r = e(t.target), v(r, "views"), jdgm.triggerVanillaEvent("widgetViewed", {
                            $widget: r
                        }), n.unobserve(t.target)) : void 0
                    })
                }, n = new IntersectionObserver(i, {
                    threshold: 0
                }), jdgm.asyncEach(t, function(e) {
                    return n.observe(e)
                }), r = document.querySelector(".jdgm-revs-tab__main"), r ? n.observe(r) : void 0
            }, p = function() {
                return e(document).on("click", ".jdgm-widget[data-widget-name]", function(t) {
                    var n;
                    return n = e(t.currentTarget), jdgm._recordWidgetClick(n), jdgm.triggerVanillaEvent("widgetClicked", {
                        $widget: n
                    })
                })
            }, l = function(t) {
                var n;
                return t.length <= 0 ? null : (n = null, e.each(t[0].classList, function(e, t) {
                    return a[t] ? (n = a[t], !1) : void 0
                }), n || (n = widget.classList[1] || "unknown"), t.attr("data-widget-name", n), n)
            }, _ = function() {
                return {
                    shop_domain: jdgm.shopDomain(),
                    platform: jdgmSettings.platform
                }
            }, v = function(e, t) {
                var n, r, i, a;
                if (!e[0].dataset["" + t + "Tracked"]) return a = e.data("widget-name"), n = {
                    name: a,
                    event_key: t
                }, i = u(e, a), i && (n.external_product_id = i), r = d(a), r && (n.location = r), jdgm._widgetEvents.push(n), c(), e[0].dataset["" + t + "Tracked"] = !0
            }, u = function(e, t) {
                var n, r;
                return r = o[t], r && (n = e.attr(r)), n
            }, d = function(e) {
                var t;
                return t = window.location.pathname, "preview_badge" !== e ? null : t.startsWith("/products/") || t.startsWith("/collections/") && t.include("/products/") ? "product" : t.startsWith("/collections/") ? "collection" : "/cart" === t ? "cart" : "/" === t ? "home" : null
            }, c = function() {
                return s || (s = setTimeout(g, r))
            }, g = function() {
                var t, n;
                if (!(jdgm._widgetEvents.length <= 0)) return n = jdgm._widgetEvents.splice(0, i), t = e.extend(_(), {
                    events: n
                }), e.ajax({
                    url: "" + jdgm.WIDGET_TRACKING_API_HOST + "/widgets/track_bulk_events?_events_count=" + n.length,
                    method: "POST",
                    data: t
                }), s = null, jdgm._widgetEvents.length > 0 ? c() : void 0
            }, setTimeout(function() {
                return l(e(".jdgm-revs-tab__main")), f(), p()
            }, t), setInterval(f, 1e4)
        })
    }.call(this),
    function() {
        jdgm.$(function(e) {
            var t, n, r, i, a, o, s;
            return n = 1e3, r = "jdgm_widget_interactions", t = {}, s = function() {
                return document.addEventListener("jdgm.widgetViewed", function(e) {
                    return i(e.detail.$widget, "viewed")
                }), document.addEventListener("jdgm.widgetClicked", function(e) {
                    return i(e.detail.$widget, "clicked")
                })
            }, i = function(e, n) {
                var r;
                return !e.hasClass("jdgm-review-widget") && !e.hasClass("jdgm-preview-badge") || (r = e.data("id"), t["" + r + "-" + n]) ? void 0 : (t["" + r + "-" + n] = !0, o(r, n, e.data("widget-name")))
            }, o = function(e, t, n) {
                var i, a, o, s;
                return a = localStorage.getItem(r) || "{}", i = JSON.parse(a), o = "" + n + "--" + t, i[e] = i[e] || {}, (s = i[e])[o] || (s[o] = 0), i[e][o] += 1, localStorage.setItem(r, JSON.stringify(i))
            }, a = function() {
                try {
                    return window.Shopify && window.Shopify.customerPrivacy ? window.Shopify.customerPrivacy.analyticsProcessingAllowed() : !1
                } catch (e) {
                    return console.log("Something went wrong with Shopify.customerPrivacy API"), !1
                }
            }, a() ? setTimeout(function() {
                return s()
            }, n) : void 0
        })
    }.call(this);