! function(e) {
    var t = void 0;
    "function" == typeof t && t.amd ? t(["jquery"], e) : e("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto)
}(function(e) {
    e = jdgm.$ || window.$;
    var t, n, r, i, a, o, s = "Close",
        d = "BeforeClose",
        l = "AfterClose",
        u = "BeforeAppend",
        c = "MarkupParse",
        g = "Open",
        p = "Change",
        m = "jm-mfp",
        f = "." + m,
        _ = "jm-mfp-ready",
        v = "jm-mfp-removing",
        h = "jm-mfp-prevent-close",
        j = function() {},
        w = !!e,
        b = e(window),
        y = function(e, n) {
            t.ev.on(m + e + f, n)
        },
        x = function(t, n, r, i) {
            var a = document.createElement("div");
            return a.className = "jm-mfp-" + t, r && (a.innerHTML = r), i ? n && n.appendChild(a) : (a = e(a), n && a.appendTo(n)), a
        },
        S = function(n, r) {
            t.ev.triggerHandler(m + n, r), t.st.callbacks && (n = n.charAt(0).toLowerCase() + n.slice(1), t.st.callbacks[n] && t.st.callbacks[n].apply(t, e.isArray(r) ? r : [r]))
        },
        T = function(n) {
            return n === o && t.currTemplate.closeBtn || (t.currTemplate.closeBtn = e(t.st.closeMarkup.replace("%title%", t.st.tClose)), o = n), t.currTemplate.closeBtn
        },
        C = function() {
            e.magnificPopup.instance || (t = new j, t.init(), e.magnificPopup.instance = t)
        },
        k = function() {
            var e = document.createElement("p").style,
                t = ["ms", "O", "Moz", "Webkit"];
            if (void 0 !== e.transition) return !0;
            for (; t.length;)
                if (t.pop() + "Transition" in e) return !0;
            return !1
        };
    j.prototype = {
        constructor: j,
        init: function() {
            var n = navigator.appVersion;
            t.isLowIE = t.isIE8 = document.all && !document.addEventListener, t.isAndroid = /android/gi.test(n), t.isIOS = /iphone|ipad|ipod/gi.test(n), t.supportsTransition = k(), t.probablyMobile = t.isAndroid || t.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), r = e(document), t.popupsCache = {}
        },
        open: function(n) {
            var i;
            if (n.isObj === !1) {
                t.items = n.items.toArray(), t.index = 0;
                var o, s = n.items;
                for (i = 0; i < s.length; i++)
                    if (o = s[i], o.parsed && (o = o.el[0]), o === n.el[0]) {
                        t.index = i;
                        break
                    }
            } else t.items = e.isArray(n.items) ? n.items : [n.items], t.index = n.index || 0;
            if (t.isOpen) return void t.updateItemHTML();
            t.types = [], a = "", n.mainEl && n.mainEl.length ? t.ev = n.mainEl.eq(0) : t.ev = r, n.key ? (t.popupsCache[n.key] || (t.popupsCache[n.key] = {}), t.currTemplate = t.popupsCache[n.key]) : t.currTemplate = {}, t.st = e.extend(!0, {}, e.magnificPopup.defaults, n), t.fixedContentPos = "auto" === t.st.fixedContentPos ? !t.probablyMobile : t.st.fixedContentPos, t.st.modal && (t.st.closeOnContentClick = !1, t.st.closeOnBgClick = !1, t.st.showCloseBtn = !1, t.st.enableEscapeKey = !1), t.bgOverlay || (t.bgOverlay = x("bg").on("click" + f, function() {
                t.close()
            }), t.wrap = x("wrap").attr("tabindex", -1).on("click" + f, function(e) {
                t._checkIfClose(e.target) && t.close()
            }), t.container = x("container", t.wrap)), t.contentContainer = x("content"), t.st.preloader && (t.preloader = x("preloader", t.container, t.st.tLoading));
            var d = e.magnificPopup.modules;
            for (i = 0; i < d.length; i++) {
                var l = d[i];
                l = l.charAt(0).toUpperCase() + l.slice(1), t["init" + l].call(t)
            }
            S("BeforeOpen"), t.st.showCloseBtn && (t.st.closeBtnInside ? (y(c, function(e, t, n, r) {
                n.close_replaceWith = T(r.type)
            }), a += " jm-mfp-close-btn-in") : t.wrap.append(T())), t.st.alignTop && (a += " jm-mfp-align-top"), t.fixedContentPos ? t.wrap.css({
                overflow: t.st.overflowY,
                overflowX: "hidden",
                overflowY: t.st.overflowY
            }) : t.wrap.css({
                top: b.scrollTop(),
                position: "absolute"
            }), (t.st.fixedBgPos === !1 || "auto" === t.st.fixedBgPos && !t.fixedContentPos) && t.bgOverlay.css({
                height: r.height(),
                position: "absolute"
            }), t.st.enableEscapeKey && r.on("keyup" + f, function(e) {
                27 === e.keyCode && t.close()
            }), b.on("resize" + f, function() {
                t.updateSize()
            }), t.st.closeOnContentClick || (a += " jm-mfp-auto-cursor"), a && t.wrap.addClass(a);
            var u = t.wH = b.height(),
                p = {};
            if (t.fixedContentPos && t._hasScrollBar(u)) {
                var m = t._getScrollbarSize();
                m && (p.marginRight = m)
            }
            t.fixedContentPos && (t.isIE7 ? e("body, html").css("overflow", "hidden") : p.overflow = "hidden");
            var v = t.st.mainClass;
            return t.isIE7 && (v += " jm-mfp-ie7"), v && t._addClassToMFP(v), t.updateItemHTML(), S("BuildControls"), e("html").css(p), t.bgOverlay.add(t.wrap).prependTo(t.st.prependTo || e(document.body)), t._lastFocusedEl = document.activeElement, setTimeout(function() {
                t.content ? (t._addClassToMFP(_), t._setFocus()) : t.bgOverlay.addClass(_), r.on("focusin" + f, t._onFocusIn)
            }, 16), t.isOpen = !0, t.updateSize(u), S(g), n
        },
        close: function() {
            t.isOpen && (S(d), t.isOpen = !1, t.st.removalDelay && !t.isLowIE && t.supportsTransition ? (t._addClassToMFP(v), setTimeout(function() {
                t._close()
            }, t.st.removalDelay)) : t._close())
        },
        _close: function() {
            S(s);
            var n = v + " " + _ + " ";
            if (t.bgOverlay.detach(), t.wrap.detach(), t.container.empty(), t.st.mainClass && (n += t.st.mainClass + " "), t._removeClassFromMFP(n), t.fixedContentPos) {
                var i = {
                    marginRight: ""
                };
                t.isIE7 ? e("body, html").css("overflow", "") : i.overflow = "", e("html").css(i)
            }
            r.off("keyup" + f + " focusin" + f), t.ev.off(f), t.wrap.attr("class", "jm-mfp-wrap").removeAttr("style"), t.bgOverlay.attr("class", "jm-mfp-bg"), t.container.attr("class", "jm-mfp-container"), !t.st.showCloseBtn || t.st.closeBtnInside && t.currTemplate[t.currItem.type] !== !0 || t.currTemplate.closeBtn && t.currTemplate.closeBtn.detach(), t.st.autoFocusLast && t._lastFocusedEl && e(t._lastFocusedEl).focus(), t.currItem = null, t.content = null, t.currTemplate = null, t.prevHeight = 0, S(l)
        },
        updateSize: function(e) {
            if (t.isIOS) {
                var n = document.documentElement.clientWidth / window.innerWidth,
                    r = window.innerHeight * n;
                t.wrap.css("height", r), t.wH = r
            } else t.wH = e || b.height();
            t.fixedContentPos || t.wrap.css("height", t.wH), S("Resize")
        },
        updateItemHTML: function() {
            var n = t.items[t.index];
            t.contentContainer.detach(), t.content && t.content.detach(), n.parsed || (n = t.parseEl(t.index));
            var r = n.type;
            if (S("BeforeChange", [t.currItem ? t.currItem.type : "", r]), t.currItem = n, !t.currTemplate[r]) {
                var a = t.st[r] ? t.st[r].markup : !1;
                S("FirstMarkupParse", a), a ? t.currTemplate[r] = e(a) : t.currTemplate[r] = !0
            }
            i && i !== n.type && t.container.removeClass("jm-mfp-" + i + "-holder");
            var o = t["get" + r.charAt(0).toUpperCase() + r.slice(1)](n, t.currTemplate[r]);
            t.appendContent(o, r), n.preloaded = !0, S(p, n), i = n.type, t.container.prepend(t.contentContainer), S("AfterChange")
        },
        appendContent: function(e, n) {
            t.content = e, e ? t.st.showCloseBtn && t.st.closeBtnInside && t.currTemplate[n] === !0 ? t.content.find(".jm-mfp-close").length || t.content.append(T()) : t.content = e : t.content = "", S(u), t.container.addClass("jm-mfp-" + n + "-holder"), t.contentContainer.append(t.content)
        },
        parseEl: function(n) {
            var r, i = t.items[n];
            if (i.tagName ? i = {
                    el: e(i)
                } : (r = i.type, i = {
                    data: i,
                    src: i.src
                }), i.el) {
                for (var a = t.types, o = 0; o < a.length; o++)
                    if (i.el.hasClass("jm-mfp-" + a[o])) {
                        r = a[o];
                        break
                    }
                i.src = i.el.attr("data-mfp-src"), i.src || (i.src = i.el.attr("href"))
            }
            return i.type = r || t.st.type || "inline", i.index = n, i.parsed = !0, t.items[n] = i, S("ElementParse", i), t.items[n]
        },
        addGroup: function(e, n) {
            var r = function(r) {
                r.mfpEl = this, t._openClick(r, e, n)
            };
            n || (n = {});
            var i = "click.magnificPopup";
            n.mainEl = e, n.items ? (n.isObj = !0, e.off(i).on(i, r)) : (n.isObj = !1, n.delegate ? e.off(i).on(i, n.delegate, r) : (n.items = e, e.off(i).on(i, r)))
        },
        _openClick: function(n, r, i) {
            var a = void 0 !== i.midClick ? i.midClick : e.magnificPopup.defaults.midClick;
            if (a || !(2 === n.which || n.ctrlKey || n.metaKey || n.altKey || n.shiftKey)) {
                var o = void 0 !== i.disableOn ? i.disableOn : e.magnificPopup.defaults.disableOn;
                if (o)
                    if (e.isFunction(o)) {
                        if (!o.call(t)) return !0
                    } else if (b.width() < o) return !0;
                n.type && (n.preventDefault(), t.isOpen && n.stopPropagation()), i.el = e(n.mfpEl), i.delegate && (i.items = r.find(i.delegate)), t.open(i)
            }
        },
        updateStatus: function(e, r) {
            if (t.preloader) {
                n !== e && t.container.removeClass("jm-mfp-s-" + n), r || "loading" !== e || (r = t.st.tLoading);
                var i = {
                    status: e,
                    text: r
                };
                S("UpdateStatus", i), e = i.status, r = i.text, t.preloader.html(r), t.preloader.find("a").on("click", function(e) {
                    e.stopImmediatePropagation()
                }), t.container.addClass("jm-mfp-s-" + e), n = e
            }
        },
        _checkIfClose: function(n) {
            if (!e(n).hasClass(h)) {
                var r = t.st.closeOnContentClick,
                    i = t.st.closeOnBgClick;
                if (r && i) return !0;
                if (!t.content || e(n).hasClass("jm-mfp-close") || t.preloader && n === t.preloader[0]) return !0;
                if (n === t.content[0] || e.contains(t.content[0], n)) {
                    if (r) return !0
                } else if (i && e.contains(document, n)) return !0;
                return !1
            }
        },
        _addClassToMFP: function(e) {
            t.bgOverlay.addClass(e), t.wrap.addClass(e)
        },
        _removeClassFromMFP: function(e) {
            this.bgOverlay.removeClass(e), t.wrap.removeClass(e)
        },
        _hasScrollBar: function(e) {
            return (t.isIE7 ? r.height() : document.body.scrollHeight) > (e || b.height())
        },
        _setFocus: function() {
            (t.st.focus ? t.content.find(t.st.focus).eq(0) : t.wrap).focus()
        },
        _onFocusIn: function(n) {
            return n.target === t.wrap[0] || e.contains(t.wrap[0], n.target) ? void 0 : (t._setFocus(), !1)
        },
        _parseMarkup: function(t, n, r) {
            var i;
            r.data && (n = e.extend(r.data, n)), S(c, [t, n, r]), e.each(n, function(n, r) {
                if (void 0 === r || r === !1) return !0;
                if (i = n.split("_"), i.length > 1) {
                    var a = t.find(f + "-" + i[0]);
                    if (a.length > 0) {
                        var o = i[1];
                        "replaceWith" === o ? a[0] !== r[0] && a.replaceWith(r) : "img" === o ? a.is("img") ? a.attr("src", r) : a.replaceWith(e("<img>").attr("src", r).attr("class", a.attr("class"))) : a.attr(i[1], r)
                    }
                } else t.find(f + "-" + n).html(r)
            })
        },
        _getScrollbarSize: function() {
            if (void 0 === t.scrollbarSize) {
                var e = document.createElement("div");
                e.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(e), t.scrollbarSize = e.offsetWidth - e.clientWidth, document.body.removeChild(e)
            }
            return t.scrollbarSize
        }
    }, e.magnificPopup = {
        instance: null,
        proto: j.prototype,
        modules: [],
        open: function(t, n) {
            return C(), t = t ? e.extend(!0, {}, t) : {}, t.isObj = !0, t.index = n || 0, this.instance.open(t)
        },
        close: function() {
            return e.magnificPopup.instance && e.magnificPopup.instance.close()
        },
        registerModule: function(t, n) {
            n.options && (e.magnificPopup.defaults[t] = n.options), e.extend(this.proto, n.proto), this.modules.push(t)
        },
        defaults: {
            disableOn: 0,
            key: null,
            midClick: !1,
            mainClass: "",
            preloader: !0,
            focus: "",
            closeOnContentClick: !1,
            closeOnBgClick: !0,
            closeBtnInside: !0,
            showCloseBtn: !0,
            enableEscapeKey: !0,
            modal: !1,
            alignTop: !1,
            removalDelay: 0,
            prependTo: null,
            fixedContentPos: "auto",
            fixedBgPos: "auto",
            overflowY: "auto",
            closeMarkup: '<button title="%title%" type="button" class="jm-mfp-close">&#215;</button>',
            tClose: "Close (Esc)",
            tLoading: "Loading...",
            autoFocusLast: !0
        }
    }, e.fn.magnificPopup = function(n) {
        C();
        var r = e(this);
        if ("string" == typeof n)
            if ("open" === n) {
                var i, a = w ? r.data("magnificPopup") : r[0].magnificPopup,
                    o = parseInt(arguments[1], 10) || 0;
                a.items ? i = a.items[o] : (i = r, a.delegate && (i = i.find(a.delegate)), i = i.eq(o)), t._openClick({
                    mfpEl: i
                }, r, a)
            } else t.isOpen && t[n].apply(t, Array.prototype.slice.call(arguments, 1));
        else n = e.extend(!0, {}, n), w ? r.data("magnificPopup", n) : r[0].magnificPopup = n, t.addGroup(r, n);
        return r
    };
    var F, E, R, P = "inline",
        q = function() {
            R && (E.after(R.addClass(F)).detach(), R = null)
        };
    e.magnificPopup.registerModule(P, {
        options: {
            hiddenClass: "hide",
            markup: "",
            tNotFound: "Content not found"
        },
        proto: {
            initInline: function() {
                t.types.push(P), y(s + "." + P, function() {
                    q()
                })
            },
            getInline: function(n, r) {
                if (q(), n.src) {
                    var i = t.st.inline,
                        a = e(n.src);
                    if (a.length) {
                        var o = a[0].parentNode;
                        o && o.tagName && (E || (F = i.hiddenClass, E = x(F), F = "jm-mfp-" + F), R = a.after(E).detach().removeClass(F)), t.updateStatus("ready")
                    } else t.updateStatus("error", i.tNotFound), a = e("<div>");
                    return n.inlineElement = a, a
                }
                return t.updateStatus("ready"), t._parseMarkup(r, {}, n), r
            }
        }
    });
    var A, L = function(n, r) {
        if (n.data && void 0 !== n.data.title) return n.data.title;
        var i = t.st.image.titleSrc;
        if ("iframe" == r && (i = t.st.iframe.titleSrc), i) {
            if (e.isFunction(i)) return i.call(t, n);
            if (n.el) return n.el.attr(i) || ""
        }
        return ""
    };
    e.magnificPopup.registerModule("image", {
        options: {
            markup: '<div class="jm-mfp-figure"><div class="jm-mfp-close"></div><figure><div class="jm-mfp-img"></div><figcaption><div class="jm-mfp-bottom-bar"><div class="jm-mfp-title"></div><div class="jm-mfp-counter"></div></div></figcaption></figure></div>',
            cursor: "jm-mfp-zoom-out-cur",
            titleSrc: "title",
            verticalFit: !0,
            tError: '<a href="%url%">The image</a> could not be loaded.'
        },
        proto: {
            initImage: function() {
                var n = t.st.image,
                    r = ".image";
                t.types.push("image"), y(g + r, function() {
                    "image" === t.currItem.type && n.cursor && e(document.body).addClass(n.cursor)
                }), y(s + r, function() {
                    n.cursor && e(document.body).removeClass(n.cursor), b.off("resize" + f)
                }), y("Resize" + r, t.resizeImage), t.isLowIE && y("AfterChange", t.resizeImage)
            },
            resizeImage: function() {
                var e = t.currItem;
                if (e && e.img && t.st.image.verticalFit) {
                    var n = 0;
                    t.isLowIE && (n = parseInt(e.img.css("padding-top"), 10) + parseInt(e.img.css("padding-bottom"), 10)), e.img.css("max-height", t.wH - n)
                }
            },
            _onImageHasSize: function(e) {
                e.img && (e.hasSize = !0, A && clearInterval(A), e.isCheckingImgSize = !1, S("ImageHasSize", e), e.imgHidden && (t.content && t.content.removeClass("jm-mfp-loading"), e.imgHidden = !1))
            },
            findImageSize: function(e) {
                var n = 0,
                    r = e.img[0],
                    i = function(a) {
                        A && clearInterval(A), A = setInterval(function() {
                            return r.naturalWidth > 0 ? void t._onImageHasSize(e) : (n > 200 && clearInterval(A), n++, void(3 === n ? i(10) : 40 === n ? i(50) : 100 === n && i(500)))
                        }, a)
                    };
                i(1)
            },
            getImage: function(n, r) {
                var i = 0,
                    a = function() {
                        n && (n.img[0].complete ? (n.img.off(".mfploader"), n === t.currItem && (t._onImageHasSize(n), t.updateStatus("ready")), n.hasSize = !0, n.loaded = !0, S("ImageLoadComplete")) : (i++, 200 > i ? setTimeout(a, 100) : o()))
                    },
                    o = function() {
                        n && (n.img.off(".mfploader"), n === t.currItem && (t._onImageHasSize(n), t.updateStatus("error", s.tError.replace("%url%", n.src))), n.hasSize = !0, n.loaded = !0, n.loadError = !0)
                    },
                    s = t.st.image,
                    d = r.find(".jm-mfp-img");
                if (d.length) {
                    var l = document.createElement("img");
                    l.className = "jm-mfp-img", n.el && n.el.find("img").length && (l.alt = n.el.find("img").attr("alt")), n.img = e(l).on("load.mfploader", a).on("error.mfploader", o), l.src = n.src, d.is("img") && (n.img = n.img.clone()), l = n.img[0], l.naturalWidth > 0 ? n.hasSize = !0 : l.width || (n.hasSize = !1)
                }
                return t._parseMarkup(r, {
                    title: L(n),
                    img_replaceWith: n.img
                }, n), t.resizeImage(), n.hasSize ? (A && clearInterval(A), n.loadError ? (r.addClass("jm-mfp-loading"), t.updateStatus("error", s.tError.replace("%url%", n.src))) : (r.removeClass("jm-mfp-loading"), t.updateStatus("ready")), r) : (t.updateStatus("loading"), n.loading = !0, n.hasSize || (n.imgHidden = !0, r.addClass("jm-mfp-loading"), t.findImageSize(n)), r)
            }
        }
    });
    var I, D = function() {
        return void 0 === I && (I = void 0 !== document.createElement("p").style.MozTransform), I
    };
    e.magnificPopup.registerModule("zoom", {
        options: {
            enabled: !1,
            easing: "ease-in-out",
            duration: 300,
            opener: function(e) {
                return e.is("img") ? e : e.find("img")
            }
        },
        proto: {
            initZoom: function() {
                var e, n = t.st.zoom,
                    r = ".zoom";
                if (n.enabled && t.supportsTransition) {
                    var i, a, o = n.duration,
                        l = function(e) {
                            var t = e.clone().removeAttr("style").removeAttr("class").addClass("jm-mfp-animated-image"),
                                r = "all " + n.duration / 1e3 + "s " + n.easing,
                                i = {
                                    position: "fixed",
                                    zIndex: 9999,
                                    left: 0,
                                    top: 0,
                                    "-webkit-backface-visibility": "hidden"
                                },
                                a = "transition";
                            return i["-webkit-" + a] = i["-moz-" + a] = i["-o-" + a] = i[a] = r, t.css(i), t
                        },
                        u = function() {
                            t.content.css("visibility", "visible")
                        };
                    y("BuildControls" + r, function() {
                        if (t._allowZoom()) {
                            if (clearTimeout(i), t.content.css("visibility", "hidden"), e = t._getItemToZoom(), !e) return void u();
                            a = l(e), a.css(t._getOffset()), t.wrap.append(a), i = setTimeout(function() {
                                a.css(t._getOffset(!0)), i = setTimeout(function() {
                                    u(), setTimeout(function() {
                                        a.remove(), e = a = null, S("ZoomAnimationEnded")
                                    }, 16)
                                }, o)
                            }, 16)
                        }
                    }), y(d + r, function() {
                        if (t._allowZoom()) {
                            if (clearTimeout(i), t.st.removalDelay = o, !e) {
                                if (e = t._getItemToZoom(), !e) return;
                                a = l(e)
                            }
                            a.css(t._getOffset(!0)), t.wrap.append(a), t.content.css("visibility", "hidden"), setTimeout(function() {
                                a.css(t._getOffset())
                            }, 16)
                        }
                    }), y(s + r, function() {
                        t._allowZoom() && (u(), a && a.remove(), e = null)
                    })
                }
            },
            _allowZoom: function() {
                return "image" === t.currItem.type
            },
            _getItemToZoom: function() {
                return t.currItem.hasSize ? t.currItem.img : !1
            },
            _getOffset: function(n) {
                var r;
                r = n ? t.currItem.img : t.st.zoom.opener(t.currItem.el || t.currItem);
                var i = r.offset(),
                    a = parseInt(r.css("padding-top"), 10),
                    o = parseInt(r.css("padding-bottom"), 10);
                i.top -= e(window).scrollTop() - a;
                var s = {
                    width: r.width(),
                    height: (w ? r.innerHeight() : r[0].offsetHeight) - o - a
                };
                return D() ? s["-moz-transform"] = s.transform = "translate(" + i.left + "px," + i.top + "px)" : (s.left = i.left, s.top = i.top), s
            }
        }
    });
    var O = "iframe",
        N = "//about:blank",
        M = function(e) {
            if (t.currTemplate[O]) {
                var n = t.currTemplate[O].find("iframe");
                n.length && (e || (n[0].src = N), t.isIE8 && n.css("display", e ? "block" : "none"))
            }
        };
    e.magnificPopup.registerModule(O, {
        options: {
            markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
            srcAction: "iframe_src",
            posterAction: "iframe_poster",
            titleSrc: "title",
            patterns: {
                youtube: {
                    index: "youtube.com",
                    id: "v=",
                    src: "//www.youtube.com/embed/%id%"
                },
                vimeo: {
                    index: "vimeo.com/",
                    id: "/",
                    src: "//player.vimeo.com/video/%id%"
                },
                cloudflare: {
                    index: "cloudflarestream.com/",
                    id: "/",
                    src: "//iframe.videodelivery.net/%id%"
                }
            }
        },
        proto: {
            initIframe: function() {
                t.types.push(O), y("BeforeChange", function(e, t, n) {
                    t !== n && (t === O ? M() : n === O && M(!0))
                }), y(s + "." + O, function() {
                    M()
                })
            },
            getIframe: function(n, r) {
                var i = n.el.attr("data-iframe-src"),
                    a = t.st.iframe;
                e.each(a.patterns, function() {
                    return i.indexOf(this.index) > -1 ? (this.id && (i = "string" == typeof this.id ? i.substr(i.lastIndexOf(this.id) + this.id.length, i.length) : this.id.call(this, i)), i = this.src.replace("%id%", i), !1) : void 0
                });
                var o = {};
                return a.srcAction && (o[a.srcAction] = i), a.posterAction && (o[a.posterAction] = n.el.attr("src")), a.titleSrc && (o.title = L(n, "iframe")), t._parseMarkup(r, o, n), t.updateStatus("ready"), r
            }
        }
    });
    var W = function(e) {
            var n = t.items.length;
            return e > n - 1 ? e - n : 0 > e ? n + e : e
        },
        B = function(e, t, n) {
            return e.replace(/%curr%/gi, t + 1).replace(/%total%/gi, n)
        };
    e.magnificPopup.registerModule("gallery", {
        options: {
            enabled: !1,
            arrowMarkup: '<button title="%title%" type="button" class="jm-mfp-arrow jm-mfp-arrow-%dir%"></button>',
            preload: [0, 2],
            navigateByImgClick: !0,
            arrows: !0,
            tPrev: "Previous (Left arrow key)",
            tNext: "Next (Right arrow key)",
            tCounter: "%curr% of %total%"
        },
        proto: {
            initGallery: function() {
                var n = t.st.gallery,
                    i = ".jm-mfp-gallery";
                return t.direction = !0, n && n.enabled ? (a += " jm-mfp-gallery", y(g + i, function() {
                    n.navigateByImgClick && t.wrap.on("click" + i, ".jm-mfp-img", function() {
                        return t.items.length > 1 ? (t.next(), !1) : void 0
                    }), r.on("keydown" + i, function(e) {
                        37 === e.keyCode ? t.prev() : 39 === e.keyCode && t.next()
                    })
                }), y("UpdateStatus" + i, function(e, n) {
                    n.text && (n.text = B(n.text, t.currItem.index, t.items.length))
                }), y(c + i, function(e, r, i, a) {
                    var o = t.items.length;
                    i.counter = o > 1 ? B(n.tCounter, a.index, o) : ""
                }), y("BuildControls" + i, function() {
                    if (t.items.length > 1 && n.arrows && !t.arrowLeft) {
                        var r = n.arrowMarkup,
                            i = t.arrowLeft = e(r.replace(/%title%/gi, n.tPrev).replace(/%dir%/gi, "left")).addClass(h),
                            a = t.arrowRight = e(r.replace(/%title%/gi, n.tNext).replace(/%dir%/gi, "right")).addClass(h);
                        i.click(function() {
                            t.prev()
                        }), a.click(function() {
                            t.next()
                        }), t.container.append(i.add(a))
                    }
                }), y(p + i, function() {
                    t._preloadTimeout && clearTimeout(t._preloadTimeout), t._preloadTimeout = setTimeout(function() {
                        t.preloadNearbyImages(), t._preloadTimeout = null
                    }, 16)
                }), void y(s + i, function() {
                    r.off(i), t.wrap.off("click" + i), t.arrowRight = t.arrowLeft = null
                })) : !1
            },
            next: function() {
                t.direction = !0, t.index = W(t.index + 1), t.updateItemHTML()
            },
            prev: function() {
                t.direction = !1, t.index = W(t.index - 1), t.updateItemHTML()
            },
            goTo: function(e) {
                t.direction = e >= t.index, t.index = e, t.updateItemHTML()
            },
            preloadNearbyImages: function() {
                var e, n = t.st.gallery.preload,
                    r = Math.min(n[0], t.items.length),
                    i = Math.min(n[1], t.items.length);
                for (e = 1; e <= (t.direction ? i : r); e++) t._preloadItem(t.index + e);
                for (e = 1; e <= (t.direction ? r : i); e++) t._preloadItem(t.index - e)
            },
            _preloadItem: function(n) {
                if (n = W(n), !t.items[n].preloaded) {
                    var r = t.items[n];
                    r.parsed || (r = t.parseEl(n)), S("LazyLoad", r), "image" === r.type && (r.img = e('<img class="jm-mfp-img" />').on("load.mfploader", function() {
                        r.hasSize = !0
                    }).on("error.mfploader", function() {
                        r.hasSize = !0, r.loadError = !0, S("LazyLoadError", r)
                    }).attr("src", r.src)), r.preloaded = !0
                }
            }
        }
    });
    var H = "retina";
    e.magnificPopup.registerModule(H, {
        options: {
            replaceSrc: function(e) {
                return e.src.replace(/\.\w+$/, function(e) {
                    return "@2x" + e
                })
            },
            ratio: 1
        },
        proto: {
            initRetina: function() {
                if (window.devicePixelRatio > 1) {
                    var e = t.st.retina,
                        n = e.ratio;
                    n = isNaN(n) ? n() : n, n > 1 && (y("ImageHasSize." + H, function(e, t) {
                        t.img.css({
                            "max-width": t.img[0].naturalWidth / n,
                            width: "100%"
                        })
                    }), y("ElementParse." + H, function(t, r) {
                        r.src = e.replaceSrc(r, n)
                    }))
                }
            }
        }
    }), C()
}),
function() {
    this.JST || (this.JST = {}), this.JST["templates/shopify_v2/photo_gallery_popup"] = function(obj) {
        var __p = [];
        with(obj || {}) __p.push('<div class="jm-mfp-main">\n  <div class="jm-mfp-carousel-wrapper">\n    <div class="jm-mfp-content-wrapper"></div>\n    <div class="jm-mfp-carousel"></div>\n  </div>\n  <div class="jm-mfp-review-wrapper">\n    <div class="jm-mfp-close">\xd7</div>\n    <div class="jdgm-rev"></div>\n  </div>\n</div>\n');
        return __p.join("")
    }
}.call(this),
    function() {
        this.JST || (this.JST = {}), this.JST["templates/shopify_v2/photo_gallery_thumbnail"] = function(obj) {
            var __p = [];
            with(obj || {}) {
                __p.push("");
                var imgSrc, iframeSrc, preloadThumbnail = "undefined" != typeof preload && preload === !0,
                    wrapperClass = preloadThumbnail ? "jdgm-gallery__thumbnail-wrapper jdgm--loading" : "jdgm-gallery__thumbnail-wrapper";
                __p.push("\n\n"), review.pictures_urls && (__p.push("\n  "), review.pictures_urls.forEach(function(e) {
                    __p.push("\n    "), imgSrc = e.compact, __p.push("\n    <div class='jdgm-gallery__thumbnail-link'>\n      <div class='", ("" + wrapperClass).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"), "'>\n        <img class='jdgm-gallery__thumbnail' alt='User picture'\n            "), preloadThumbnail ? __p.push("\n              data-src='", ("" + imgSrc).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"), "'\n            ") : __p.push("\n              src='", ("" + imgSrc).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"), "'\n            "), __p.push("\n            data-mfp-src='", ("" + e.original).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"), "'\n            data-review-id='", ("" + review.uuid).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"), "' />\n      </div>\n    </div>\n  ")
                }), __p.push("\n")), __p.push("\n\n"), review.video_external_data && (__p.push("\n  "), jdgm.$.each(review.video_external_data, function(e, t) {
                    __p.push("\n    <div class='jdgm-gallery__thumbnail-link'>\n      <div class='", ("" + wrapperClass).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"), "' data-media-type='video'>\n        <img class='jdgm-gallery__thumbnail' alt='User video' preload='", ("" + preloadThumbnail).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"), "'\n            "), t.img_src && (__p.push("\n              "), preloadThumbnail ? __p.push("\n                data-src='", ("" + t.img_src).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"), "'\n              ") : __p.push("\n                src='", ("" + t.img_src).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"), "'\n              "), __p.push("\n            ")), __p.push("\n            data-iframe-src='", ("" + t.iframe_src).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"), "'\n            data-external-id='", ("" + e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"), "' data-review-id='", ("" + review.uuid).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"), "' data-media-type='video' />\n      </div>\n    </div>\n  ")
                }), __p.push("\n")), __p.push("\n\n"), review.media_platform_hosted_video_infos && (__p.push("\n  "), review.media_platform_hosted_video_infos.forEach(function(e) {
                    __p.push("\n    "), "yt" == e.media_platform_name && (__p.push("\n      "), imgSrc = "https://img.youtube.com/vi/" + e.media_platform_url + "/sddefault.jpg", iframeSrc = "https://www.youtube.com/watch?v=" + e.media_platform_url, __p.push("\n      <div class='jdgm-gallery__thumbnail-link'>\n        <div class='", ("" + wrapperClass).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"), "' data-media-type='video'>\n          <img class='jdgm-gallery__thumbnail' alt='User video'\n              "), preloadThumbnail ? __p.push("\n                data-src='", ("" + imgSrc).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"), "'\n              ") : __p.push("\n                src='", ("" + imgSrc).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"), "'\n              "), __p.push("\n              data-iframe-src='", ("" + iframeSrc).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"), "'\n              data-platform-name='", ("" + e.media_platform_name).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"), "' data-platform-url='", ("" + e.media_platform_url).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"), "'\n              data-review-id='", ("" + review.uuid).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"), "' data-media-type='video'>\n        </div>\n      </div>\n    ")), __p.push("\n  ")
                }), __p.push("\n")), __p.push("\n")
            }
            return __p.join("")
        }
    }.call(this),
    function() {
        this.JST || (this.JST = {}), this.JST["templates/shopify_v2/review_for_photo_gallery"] = function(obj) {
            var __p = [];
            with(obj || {}) __p.push("<div class='jdgm-rev jdgm-divider-top' data-verified-buyer='", review.verified_buyer, "'>\n  <div class='jdgm-rev__header'>\n    "), jdgm.isVersion3 ? (__p.push("\n      "), review.product_title && __p.push("\n        <div class='jdgm-row-product'>\n          <span class='jdgm-rev__prod-info-wrapper'>\n            <span class='jdgm-rev__prod-link-prefix'></span>\n            <a href='", review.product_url, "#judgeme_product_reviews' target='_blank' class='jdgm-rev__prod-link'>", review.product_title, "</a>\n          </span>\n        </div>\n      "), __p.push("\n\n      <div class='jdgm-row-rating'>\n        "), review.rating && __p.push("\n          <span class='jdgm-rev__rating' data-score='", review.rating, "' aria-label='", review.rating, " star review' role='img'></span>\n        "), __p.push("\n        <span class='jdgm-rev__timestamp jdgm-spinner' data-content='", review.created_at, "'></span>\n      </div>\n\n      "), review.avatar_image_url ? __p.push("\n        <div class='jdgm-rev__icon jdgm--loading jdgm-rev__avatar'>\n          <img data-src='", review.avatar_image_url.normal, "'\n            data-src-retina='", review.avatar_image_url.retina, "'\n            class='jdgm-rev__avatar-image'\n            alt='Reviewer avatar' />\n        </div>\n      ") : review.gravatar_hash ? __p.push("\n        <div class='jdgm-rev__icon jdgm--loading jdgm-rev__avatar'>\n          <img data-src='https://secure.gravatar.com/avatar/", review.gravatar_hash, ".png?default=mp&filetype=png&rating=pg&secure=true'\n            class='jdgm-rev__avatar-image'\n            alt='Reviewer avatar' />\n        </div>\n      ") : __p.push("\n        <div class='jdgm-rev__icon'>\n        </div>\n      "), __p.push("\n\n      <div class='jdgm-row-profile'>\n        <span class='jdgm-rev__author'>", review.reviewer_name, "</span>\n        "), review.verified_buyer && __p.push("\n          <span class='jdgm-rev__buyer-badge'></span>\n        "), __p.push("\n      </div>\n      <div class='jdgm-row-extra'>\n        "), jdgmSettings.widget_review_location_show && review.location && __p.push("\n          <span class='jdgm-rev__location'>", review.location.replace(/\(|\)/g, ""), "</span>\n        "), __p.push("\n        "), jdgmSettings.widget_show_country_flag && review.country_code_show_flag && __p.push("\n          <img class='jdgm-rev__location-country-flag-img' alt='", review.country_code_show_flag, "' src='https://judgeme-public-images.imgix.net/judgeme/flags/", review.country_code_show_flag, ".svg' />\n        "), __p.push("\n      </div>\n    ")) : (__p.push("\n      "), review.avatar_image_url ? __p.push("\n        <div class='jdgm-rev__icon jdgm--loading'>\n          <img data-src='", review.avatar_image_url.normal, "'\n            data-src-retina='", review.avatar_image_url.retina, "'\n            class='jdgm-rev__avatar-image'\n            alt='Reviewer avatar' />\n        </div>\n      ") : review.gravatar_hash ? __p.push("\n        <div class='jdgm-rev__icon jdgm--loading'>\n          <img data-src='https://secure.gravatar.com/avatar/", review.gravatar_hash, ".png?default=mp&filetype=png&rating=pg&secure=true'\n            class='jdgm-rev__avatar-image'\n            alt='Reviewer avatar' />\n        </div>\n      ") : __p.push("\n        <div class='jdgm-rev__icon'>\n          ", review.reviewer_name.charAt(0), "\n        </div>\n      "), __p.push("\n      "), review.rating && __p.push("\n      <span class='jdgm-rev__rating' data-score='", review.rating, "' aria-label='", review.rating, " star review' role='img'></span>\n      "), __p.push("\n      "), jdgmSettings.review_dates && __p.push("\n        <span class='jdgm-rev__timestamp jdgm-spinner' data-content='", review.created_at, "'></span>\n        "), __p.push("\n      "), review.product_title && __p.push("\n        <span class='jdgm-rev__prod-info-wrapper'>\n          <span class='jdgm-rev__prod-link-prefix'></span>\n          <a href='", review.product_url, "#judgeme_product_reviews' target='_blank' class='jdgm-rev__prod-link'>", review.product_title, "</a>\n        </span>\n      "), __p.push("\n\n      <span class='jdgm-rev__author-wrapper'>\n        "), review.verified_buyer && __p.push("\n          <span class='jdgm-rev__buyer-badge-wrapper'>\n            <span class='jdgm-rev__buyer-badge'></span>\n          </span>\n        "), __p.push("\n        <span class='jdgm-rev__author'>", review.reviewer_name, "</span>\n        "), jdgmSettings.widget_show_country_flag && review.country_code_show_flag && __p.push("\n          <img class='jdgm-rev__location-country-flag-img' alt='", review.country_code_show_flag, "' src='https://judgeme-public-images.imgix.net/judgeme/flags/", review.country_code_show_flag, ".svg' />\n        "), __p.push("\n        "), jdgmSettings.widget_review_location_show && review.location && __p.push("\n          <span class='jdgm-rev__location'>", review.location, "</span>\n        "), __p.push("\n      </span>\n    ")), __p.push("\n  </div>\n\n  <div class='jdgm-rev__content "), review.title && __p.push("jdgm-rev__content--has-title"), __p.push("'>\n    "), jdgm.isVersion3 && (__p.push("\n      "), review.title && __p.push("\n        <div class='jdgm-rev__title'>", review.title, "</div>\n      "), __p.push("\n      <div class='jdgm-rev__body'>", review.body_html, "</div>\n    ")), __p.push("\n    "), review.cf_answers && (__p.push("\n      <div class='jdgm-rev__custom-form'>\n        "), jdgm.asyncEach(review.cf_answers, function(e) {
                if (__p.push("\n          "), jdgm.isVersion3 || "slider" != e.question_type) {
                    if (__p.push("\n            <div class='jdgm-rev__cf-ans'>\n              <b class='jdgm-rev__cf-ans__title'>", e.question_title, ":</b>\n              "), "scale" == e.question_type) {
                        for (__p.push("\n                <div class='jdgm-cf-bars-wrapper' data-value='", e.value, "'>\n                  <div class='jdgm-rev__scale-range'>\n                    "), numberOfFilledBars = e.value.split("/")[0], __p.push("\n                    "), totalNumberOfBars = e.value.split("/")[1], __p.push("\n                    "), i = 1; i <= totalNumberOfBars; i++) __p.push("\n                      "), i <= numberOfFilledBars ? __p.push('\n                        <a href="#" rel="nofollow" class="jdgm-cf-bar jdgm--filled"></a>\n                      ') : __p.push('\n                        <a href="#" rel="nofollow" class="jdgm-cf-bar jdgm--empty"></a>\n                      '), __p.push("\n                    ");
                        __p.push("\n                  </div>\n                  "), jdgm.isVersion3 && __p.push("\n                    <div class='jdgm-rev__scale-first'>", e.lower_value, "</div>\n                    <div class='jdgm-rev__scale-last'>", e.top_value, "</div>\n                  "), __p.push("\n                </div>\n              ")
                    } else jdgm.isVersion3 && "slider" == e.question_type ? __p.push("\n                <div class='jdgm-rev__slider-wrapper'>\n                  <div class='jdgm-rev__slider-range'>\n                    <div class='jdgm-rev__slider-pointer' style='left: ", e.value, "%'></div>\n                  </div>\n                  <div class='jdgm-rev__slider-first'>", e.lower_value, "</div>\n                  <div class='jdgm-rev__slider-last'>", e.top_value, "</div>\n                </div>\n              ") : (jdgm.isVersion3 || "slider" != e.question_type) && __p.push("\n                <span class='jdgm-rev__cf-ans__value'>", e.value, "</span>\n              ");
                    __p.push("\n            </div>\n          ")
                }
                __p.push("\n        ")
            }), __p.push("\n      </div>\n    ")), __p.push("\n    "), jdgm.isVersion3 || (__p.push("\n      "), review.title && __p.push("\n        <div class='jdgm-rev__title'>", review.title, "</div>\n      "), __p.push("\n      <div class='jdgm-rev__body'>", review.body_html, "</div>\n    ")), __p.push("\n  </div>\n</div>\n");
            return __p.join("")
        }
    }.call(this),
    function() {
        this.JST || (this.JST = {}), this.JST["templates/shopify_v2/photo_gallery_popup_content"] = function(obj) {
            var __p = [];
            with(obj || {}) __p.push('<div class="jm-mfp-figure">\n  <figure>\n    '), "undefined" == typeof mediaType ? __p.push('\n      <div class="jm-mfp-img"></div>\n    ') : "video" == mediaType ? __p.push('\n      <div class="jm-mfp-iframe-wrapper">\n        <iframe class="jm-mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe>\n      </div>\n    ') : "video-native" == mediaType && __p.push('\n      <div class="jm-mfp-video-wrapper">\n        <video controls class="jm-mfp-iframe" poster="" src=""></video>\n      </div>\n    '), __p.push('\n  </figure>\n  <div class="jm-mfp-title"></div>\n</div>\n');
            return __p.join("")
        }
    }.call(this),
    function() {
        this.JST || (this.JST = {}), this.JST["templates/shopify_v2/photo_gallery_popup_thumbnail"] = function(obj) {
            var __p = [];
            with(obj || {}) __p.push("<div class='jdgm-gallery__thumbnail-link'>\n  <div class='jdgm-gallery__thumbnail-wrapper' data-media-type='", ("" + object.media_type.toLowerCase()).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"), "'>\n    <img class='jdgm-gallery__thumbnail' alt='User picture'\n        src='", ("" + object.thumbnail_url).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"), "'\n        "), "VIDEO" == object.media_type ? __p.push("\n          data-iframe-src='", ("" + object.media_url).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"), "'\n        ") : __p.push("\n          data-mfp-src='", ("" + object.media_url).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"), "'\n        "), __p.push("\n        data-object-id='", ("" + object.id || object.uuid).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"), "'\n        data-media-type='", ("" + object.media_type.toLowerCase()).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"), "' />\n  </div>\n</div>\n");
            return __p.join("")
        }
    }.call(this),
    function() {
        this.JST || (this.JST = {}), this.JST["templates/shopify_v2/ugc_media_grid_popup"] = function(obj) {
            var __p = [];
            with(obj || {}) {
                __p.push("<div class='jdgm-rev'>\n  <div class='jdgm-rev__header'>\n    <div class='jdgm-rev__icon'>\n      "), post.avatar_image_url ? __p.push("\n        <img src='", ("" + post.avatar_image_url).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"), "' class='jdgm-rev__avatar-image' alt='Reviewer avatar' />\n      ") : __p.push("\n        ", ("" + post.username ? post.username.charAt(0).toUpperCase() : "A").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"), "\n      "), __p.push("\n    </div>\n    <div class='jdgm-rev__author-wrapper'>\n      <span class='jdgm-rev__author'>", ("" + post.username ? "@" + post.username : "Anonymous").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"), "</span>\n    </div>\n    "), jdgmSettings.widget_ugc_show_post_date && __p.push("\n      <div class='jdgm-rev__timestamp'>", ("" + post.timestamp).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"), "</div>\n    "), __p.push("\n  </div>\n  <div class='jdgm-rev__content "), post.products.length > 0 && __p.push("jdgm-rev__content--has-attachments"), __p.push("'>\n    <div class='jdgm-rev__body jdgm-rev__body--no-readmore'>\n      ");
                var _paragraphs = post.html_safe_caption.split("\n");
                __p.push("\n      ");
                for (var i = 0; i < _paragraphs.length; i++) __p.push("\n        <div>", _paragraphs[i] || "&nbsp;", "</div>\n      ");
                if (__p.push("\n    </div>\n    "), post.products.length > 0) {
                    __p.push("\n      <div class='jdgm-rev-attachments'>\n        ");
                    for (var i = 0; i < post.products.length; i++) {
                        __p.push("\n          ");
                        var product = post.products[i];
                        __p.push("\n          <div class='jdgm-rev-attachment'>\n            <div class='jdgm-rev-attachment__cover'>\n              "), product.image_url ? __p.push("\n                <img class='jdgm-rev-attachment__thumbnail' src='", ("" + product.image_url).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"), "' />\n              ") : __p.push("\n                <div class='jdgm-rev-attachment__thumbnail'></div>\n              "), __p.push("\n            </div>\n            <div class='jdgm-rev-attachment__content'>\n              <div class='jdgm-rev-attachment__title'>", ("" + product.title).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"), "</div>\n              <div class='jdgm-rev-attachment__review'>\n                <span class='jdgm-rev-attachment__review-stars' data-score='", ("" + product.average_rating).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"), "'></span>\n                <span class='jdgm-rev-attachment__review-text' data-reviews='", ("" + product.number_of_reviews).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"), "'></span>\n              </div>\n              <div class='jdgm-rev-attachment__price'>", ("" + product.price).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"), "</div>\n              <div class='jdgm-rev-attachment__actions'>\n                <a class='jdgm-rev-attachment__btn jdgm-ugc-media__primary-btn' data-url='", ("" + product.url + "?ref=judge.me&jdgm_referral_location=ugc_media_grid").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"), "'>\n                  ", ("" + jdgmSettings.widget_ugc_primary_button_text).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"), "\n                </a>\n                ");
                        var viewReviewsLink = "store-product-page" == jdgmSettings.widget_ugc_reviews_button_link_to ? product.url + "#judgeme_product_reviews" : product.judgeme_url;
                        __p.push("\n                <a class='jdgm-rev-attachment__btn jdgm-ugc-media__reviews-btn' data-url='", ("" + viewReviewsLink).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"), "'>\n                  ", ("" + jdgmSettings.widget_ugc_reviews_button_text).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"), "\n                </a>\n              </div>\n            </div>\n          </div>\n        ")
                    }
                    __p.push("\n      </div>\n    ")
                }
                __p.push("\n  </div>\n</div>\n")
            }
            return __p.join("")
        }
    }.call(this), jdgm.$(function(e) {
        jdgm.templates = jdgm.templates || {}, jdgm.templates.photoGalleryPopup = JST["templates/shopify_v2/photo_gallery_popup"], jdgm.templates.photoGalleryThumbnail = JST["templates/shopify_v2/photo_gallery_thumbnail"], jdgm.templates.reviewForPhotoGallery = JST["templates/shopify_v2/review_for_photo_gallery"], jdgm.templates.photoGalleryPopupContent = JST["templates/shopify_v2/photo_gallery_popup_content"], jdgm.templates.photoGalleryPopupThumbnail = JST["templates/shopify_v2/photo_gallery_popup_thumbnail"], jdgm.templates.ugcMediaGridPopup = JST["templates/shopify_v2/ugc_media_grid_popup"]
    }),
    function() {
        jdgm.$(function(e) {
            var t, n;
            return n = jdgm._safeRun, t = function() {
                return {}
            }, n(function() {
                return jdgm._htmlFor("photo_gallery_thumbnail", {
                    review: {
                        pictures_urls: [""],
                        video_external_data: [{}],
                        media_platform_hosted_video_infos: [{}],
                        preload: !1
                    }
                })
            }), n(function() {
                return jdgm._htmlFor("review_for_photo_gallery", {
                    review: {}
                })
            }), n(function() {
                return jdgm._htmlFor("photo_gallery_popup")
            }), n(function() {
                return jdgm._htmlFor("photo_gallery_popup_thumbnail", {
                    object: {}
                })
            }), n(function() {
                return jdgm._htmlFor("ugc_media_grid_popup", {
                    post: {}
                })
            }), n(function() {
                return jdgm._htmlFor("ugc_media_grid_thumbnail", {
                    object: {},
                    preload: !0
                })
            }), 0 === e(".jdgm-widget [data-execute-after-load=true]").length ? (n(function() {
                return jdgm.$.magnificPopup.open()
            }), n(function() {
                return jdgm.$.magnificPopup.close()
            })) : void 0
        })
    }.call(this),
    function() {
        jdgm.$(function(e) {
            var t, n, r, i, a, o, s, d, l, u, c, g, p, m, f, _;
            return n = /(\/.+)(&#39;)(.+\/)/, r = 16, jdgm.preloadedUrls = [], jdgm.preload = function() {
                var e, t;
                for (e = 0, t = []; e < arguments.length;)(new Image).src = arguments[e], jdgm.preloadedUrls.push(arguments[e]), t.push(e++);
                return t
            }, jdgm.setupPictures = jdgm.setupMediaGallery = function(t) {
                return t.find(".jdgm-rev__pic-img").each(function() {
                    return g(e(this))
                }), jdgm.setupLazyLoadPicture(t.find(".jdgm-rev__pic-img")), jdgm.eachWidgetWithReviews(function(e) {
                    return c(e.find(".jdgm-rev__pic-link:not([data-popup=false])"))
                }), jdgm.triggerEvent("doneSetupPictures", {
                    $reviews: t
                }), jdgm._shouldSetUpVideo ? jdgm._setupVideoPlayers(t.find(".jdgm-vid-player")) : void 0
            }, jdgm._setupVideoPlayers = function(t) {
                return e.each(t, function(t, n) {
                    var i, a;
                    return i = e(n), (a = i.data("external-id")) ? a.length > r ? s(i, a) : d(i, a) : void 0
                }), jdgm.triggerEvent("doneSetupVideos", {
                    $reviews: t.closest(".jdgm-rev")
                })
            }, g = function(e) {
                var t, r;
                return r = e.attr("data-src"), n.test(r) ? (r = r.replace(n, "$1'$3"), e.attr({
                    src: r,
                    "data-src": r
                }), t = e.closest(".jdgm-rev__pic-link"), t.attr({
                    href: t.attr("href").replace(n, "$1'$3"),
                    "data-mfp-src": t.attr("data-mfp-src").replace(n, "$1'$3")
                })) : void 0
            }, _ = function(e) {
                return jdgm._shouldSetUpVideo || jdgm._setupVideoPlayers(e.find(".jdgm-vid-player")), jdgm._shouldSetUpVideo = !0
            }, u = function(t) {
                return jdgm.ScrollEvent.attach(function() {
                    return _(t), jdgm.ScrollEvent.dettach("deferredLoadingVideos")
                }, "deferredLoadingVideos"), e(document).one("mousemove", function(e) {
                    return _(t)
                })
            }, s = function(e, t) {
                var n, r, i, a, o;
                if (t && (n = e.height() || 240, i = e.closest(".jdgm-rev__vids").width() || 360, o = Math.min(1.5 * n, i), a = jdgmSettings.mute_video_by_default ? "muted='true'" : "", r = "<iframe src='https://iframe.videodelivery.net/" + t + "?" + a + "' title='Review video' height='" + n + "px' width='" + o + "px' allow='fullscreen'></iframe>", !(e.find(".jdgm-vid-player__wrapper > iframe").length > 0))) return e.find(".jdgm-vid-player__wrapper").html(r).removeClass("jdgm--loading")
            }, d = function(t, n) {
                var r;
                if (n) return r = t.find(".jdgm-vid-player__wrapper"), e.ajax({
                    url: "https://vimeo.com/api/oembed.json",
                    data: {
                        url: "https://vimeo.com/" + n,
                        maxheight: t.height(),
                        title: !1,
                        muted: jdgmSettings.mute_video_by_default,
                        byline: !jdgmSettings.remove_judgeme_branding,
                        portrait: !jdgmSettings.remove_judgeme_branding
                    },
                    success: function(e) {
                        return r.html(e.html)
                    },
                    error: function(e) {
                        return t.remove(), console.log("Video is processing. It will be available shortly. Please refresh the page after a few seconds.")
                    },
                    complete: function() {
                        return r.removeClass("jdgm--loading")
                    }
                })
            }, f = 0, m = 0, i = !1, a = function() {
                f > m && e.magnificPopup.instance.next(), m > f && e.magnificPopup.instance.prev()
            }, p = function() {
                var t;
                return i ? void 0 : (i = !0, t = document.getElementsByClassName("jm-mfp-gallery"), e.each(t, function(e, t) {
                    return t.addEventListener("touchstart", function(e) {
                        f = e.changedTouches[0].screenX
                    }, {
                        passive: !0
                    }), t.addEventListener("touchend", function(e) {
                        m = e.changedTouches[0].screenX, a()
                    }, {
                        passive: !0
                    })
                }))
            }, l = 0, o = function(t) {
                var n;
                return null == t && (t = !0), n = e("body"), t ? (l = window.pageYOffset, n.css("overflow", "hidden"), n.css("position", "fixed"), n.css("top", "-" + l + "px"), n.css("width", "100%")) : (n.css("overflow", ""), n.css("position", ""), n.css("top", ""), n.css("width", ""), window.scrollTo(0, l))
            }, c = function(t) {
                var n, r, i;
                return jdgmSettings.remove_judgeme_branding || !jdgmSettings.can_be_branded ? n = "" : (i = window.jdgmSettings.branding_url, r = window.jdgmSettings.branding_text, n = "<a href='" + i + "' class='jdgm-branding-footer' target='_blank'>" + r + "</a>"), t.magnificPopup({
                    type: "image",
                    image: {
                        cursor: null
                    },
                    tLoading: "",
                    gallery: {
                        enabled: !0,
                        preload: [1, 10],
                        tCounter: "" + n + " <span class='jm-mfp-counter__number'>%curr% / %total%</span>"
                    },
                    zoom: {
                        enabled: !0,
                        duration: 200
                    },
                    callbacks: {
                        open: function() {
                            return e("body").addClass("jm-mfp-is-open"), o(!0), p()
                        },
                        close: function() {
                            return e("body").removeClass("jm-mfp-is-open"), o(!1)
                        }
                    }
                })
            }, jdgm.setupMediaGallery(e(".jdgm-rev")), u(e(".jdgm-rev")), t = e(), jdgm._safeRun(function() {
                return jdgm.preload()
            }), jdgm._safeRun(function() {
                return jdgm._setupVideoPlayers(t)
            }), jdgm._safeRun(function() {
                return s(t)
            }), jdgm._safeRun(function() {
                return d(t)
            }), jdgm._safeRun(function() {
                return rotateImage(t)
            })
        }), jdgm.$(window).on("load", function() {
            return jdgmSettings.preloadPictures && !jdgmSettings.lazyloadCardImages ? jdgm.$(".jdgm-rev__pic-link").slice(0, 10).each(function(e, t) {
                return jdgm.preload(jdgm.$(t).data("mfp-src"))
            }) : void 0
        })
    }.call(this),
    function() {
        jdgm.$(function(e) {
            var t, n, r, i;
            return n = e("html"), r = function() {
                return jdgm.ScrollEvent.attach(jdgm._insertIframesToYoutubeContainers)
            }, jdgm._insertIframesToYoutubeContainers = function(t, r) {
                return null == r && (r = !1), t || (t = e(".jdgm-yt-video")), t.not(".done-setup").each(function() {
                    var t;
                    return t = e(this), r || n.scrollTop() >= t.offset().top - 1e3 ? i(t) : void 0
                })
            }, i = function(t) {
                var n, r, i, a, o;
                return i = t.data("id"), i && (r = t.data("class"), a = t.data("title"), o = "https://www.youtube.com/embed/" + i + "?rel=0&showinfo=0&autoplay=0&cc_load_policy=1", jdgmSettings.mute_video_by_default && (o += "&mute=1"), n = e('<iframe frameborder="0" allow="autoplay; fullscreen" allowfullscreen>'), n.attr("src", o), n.addClass(r), n.attr("title", a), t.html(n)), t.addClass("done-setup")
            }, r(), t = e(), jdgm._safeRun(function() {
                return jdgm._insertIframesToYoutubeContainers(t)
            }), jdgm._safeRun(function() {
                return i(t)
            })
        })
    }.call(this),
    function() {
        jdgm.$(function(e) {
            var t, n, r, i, a, o, s, d, l, u, c, g, p, m;
            return n = jdgm.JM_PUBLIC_IMAGE_URL + "medals-v2/", i = jdgm.JM_PUBLIC_IMAGE_URL + "medals-mono/", r = 96, a = function() {
                var t;
                return jdgmSettings.widget_show_product_medals ? (t = e(".jdgm-medals"), g(t) ? void 0 : (jdgm.asyncEach(t, function(t) {
                    var n, r, i;
                    return n = e(t), l(n), r = n.closest(".jdgm-widget"), r.hasClass("jdgm-medals-wrapper") ? (p(r), i = r.closest(":visible").width(), 680 > i ? c(r) : void 0) : o(r, n)
                }), setTimeout(function() {
                    return e(".jdgm-medals-wrapper").removeClass("jdgm-hidden")
                }, 300))) : e(".jdgm-medals-wrapper").remove()
            }, l = function(t) {
                return jdgm.asyncEach(t.find(".jdgm-medal__image"), function(r) {
                    var a;
                    return a = e(r), jdgm._loadSvg(a, n, i, jdgmSettings.medals_widget_use_monochromatic_version), jdgmSettings.can_be_branded ? a.parent().attr("target", "_blank").attr("href", t.data("link")) : void 0
                }), jdgmSettings.medals_widget_use_monochromatic_version && e(".jdgm-medals-style").length <= 0 ? t.before(u()) : void 0
            }, u = function(e) {
                var t, n;
                return n = jdgmSettings.medals_widget_elements_color, t = jdgmSettings.medals_widget_background_color, ['<style class="jdgm-medals-style">', ".jdgm-medals-wrapper.jdgm-widget { background-color: " + t + " !important; color: " + n + " !important; }", ".jdgm-medals-wrapper .jdgm-verified-wrapper { border-color: " + n + " !important; }", ".jdgm-medal__value, .jdgm-medals-wrapper .jdgm-star { color: " + n + " !important; }", ".jdgm-medals-wrapper .jdgm-svg__mono svg path, .jdgm-medals-wrapper .jdgm-svg__mono svg circle { fill: " + n + "; }", "</style>"].join("")
            }, p = function(e) {
                return jdgm._renderVerifiedByJudgeme(e, jdgmSettings.medals_widget_use_monochromatic_version, !0, !1)
            }, c = function(e) {
                var t, n, i, a;
                return e.addClass("jdgm-medals-wrapper--small"), e.find(".jdgm-medals").before(e.find(".jdgm-rating").detach()), e.find(".jdgm-medals").after(e.find(".jdgm-verified-by").detach()), n = e.find(".jdgm-medal-wrapper"), a = n.length, t = e.find(".jdgm-medals__container"), t.width(r * a), a > 3 ? (i = e.find(".jdgm-medals"), i.data("current-slide", 1).data("total-slides", a - 2), setInterval(function() {
                    return m(i)
                }, 3e3)) : void 0
            }, m = function(e) {
                var t, n;
                return t = e.data("current-slide"), n = (t - 1) * r, e.animate({
                    scrollLeft: n
                }, 400), t === e.data("total-slides") && (t = 0), e.data("current-slide", t + 1)
            }, o = function(e, t) {
                var n, r;
                return n = d(e), jdgmSettings.can_be_branded && (r = jdgmSettings.widget_verified_by_judgeme_text_in_store_medals, e.hasClass("jdgm-review-widget") && (r = jdgmSettings.widget_verified_by_judgeme_text), s(t, t.data("link"), r)), n.append(t.closest(".jdgm-medals-wrapper").detach())
            }, d = function(t) {
                var n;
                return n = t.find(".jdgm-row-media"), 0 === n.length && (n = e("<div>", {
                    "class": "jdgm-row-media"
                }), t.find(".jdgm-form-wrapper").length > 0 ? t.find(".jdgm-form-wrapper").after(n) : t.find(".jdgm-row-stars").after(n)), n
            }, s = function(e, t, n) {
                var r;
                return r = "<a class='jdgm-link' href='" + t + "' target='_blank'>" + n + "</a>", e.append(r), e.find(".jdgm-medal").prop("href", t)
            }, g = function(t) {
                var n, r;
                return r = !1, n = t.find(".jdgm-medals__title-wrapper"), n.length > 0 ? (jdgmSettings.medals_widget_title && e(".jdgm-medals__title").text(jdgmSettings.medals_widget_title), jdgm.setupLazyLoadPicture(e(".jdgm-medal__image")), !0) : r
            }, e(document).on("jdgm.doneLoadingMediaCss", function(t, n) {
                return e(".jdgm-medals-wrapper").removeClass("jdgm-hidden")
            }), a(), t = e(), jdgm._safeRun(function() {
                return g(t)
            }), jdgm._safeRun(function() {
                return l(t)
            }), jdgm._safeRun(function() {
                return p(t)
            }), jdgm._safeRun(function() {
                return c(t)
            }), jdgm._safeRun(function() {
                return m(t)
            }), jdgm._safeRun(function() {
                return o(t)
            })
        })
    }.call(this),
    function() {
        jdgm.$(function(e) {
            var t, n, r, i, a, o, s, d, l, u, c, g, p, m, f, _, v, h, j, w, b, y, x, S, T;
            return r = "gallery-data", a = {
                widget: ".jdgm-widget",
                gallery: ".jdgm-gallery",
                galleryThumbnail: ".jdgm-gallery__thumbnail",
                galleryThumbnailLink: ".jdgm-gallery__thumbnail-link",
                galleryPopup: ".jdgm-gallery-popup",
                galleryPopupData: ".jdgm-gallery--" + r
            }, i = {
                closeOnBgClick: !1,
                image: {
                    cursor: null,
                    markup: jdgm.templates.photoGalleryPopupContent(),
                    titleSrc: function(e) {
                        return j(e)
                    }
                },
                iframe: {
                    markup: jdgm.templates.photoGalleryPopupContent({
                        mediaType: "video"
                    }),
                    titleSrc: function(e) {
                        return j(e)
                    }
                },
                tLoading: "",
                gallery: {
                    enabled: !0
                },
                callbacks: {
                    open: function() {
                        return setTimeout(function(e) {
                            return function() {
                                return l(), d()
                            }
                        }(this), 0), e("body").addClass("jm-mfp-is-open")
                    },
                    close: function() {
                        return e("body").removeClass("jm-mfp-is-open")
                    },
                    elementParse: function(t) {
                        var n;
                        return n = e(t.el[0]), "video" === n.data("media-type") ? t.type = "iframe" : t.type = "image"
                    },
                    change: function(e) {
                        return setTimeout(function(e) {
                            return function() {
                                return c(), s(), T(), e.index >= e.items.length - 4 ? g() : void 0
                            }
                        }(this), 0)
                    }
                }
            }, l = function() {
                var t;
                return t = e(e.magnificPopup.instance.wrap), t.attr("id", "" + a.galleryPopup.substring(1) + "--" + e.magnificPopup.instance.st.key), t.find(".jm-mfp-container").append(jdgm.templates.photoGalleryPopup())
            }, c = function() {
                var t, n, r, i;
                return i = e(e.magnificPopup.instance.wrap), n = i.find(".jm-mfp-main"), n.length > 0 ? (t = i.find(".jm-mfp-container > .jm-mfp-content"), r = t.find(".jdgm-rev").detach(), t = t.detach(), n.find(".jm-mfp-content-wrapper").prepend(t), n.find(".jdgm-rev").replaceWith(r), jdgm.customizeTimestamp(i), jdgm.setupLazyLoadPicture(i.find(".jdgm-rev__avatar-image")), jdgm.buildStarsFor(i.find(".jdgm-rev__rating"))) : void 0
            }, j = function(e) {
                var t, n, i;
                return i = e.el.closest(a.gallery).data("id"), t = p(i).data(r), t && (n = t.reviews[e.el.data("review-id")]) ? jdgm.templates.reviewForPhotoGallery({
                    review: n
                }) : void 0
            }, t = null, s = function() {
                var n;
                return n = e(e.magnificPopup.instance.wrap), t || (t = n.find(".jm-mfp-arrow").clone()), n.find(".jm-mfp-arrow").remove(), t ? n.find(".jm-mfp-figure figure").append(t) : void 0
            }, d = function() {
                var t, n, i;
                return i = e(e.magnificPopup.instance.wrap), t = p(e.magnificPopup.instance.st.key), n = e("<div>", {
                    "class": a.gallery.substring(1),
                    "data-id": e.magnificPopup.instance.st.key
                }), e.each(t.data(r).reviews, function(e, t) {
                    return n.append(jdgm.templates.photoGalleryThumbnail({
                        review: t
                    }))
                }), i.find(".jm-mfp-carousel").html(n), e.magnificPopup.instance.items = n.find(a.galleryThumbnail).toArray()
            }, T = function() {
                var t, n, r, i, o;
                return o = e.magnificPopup.instance.currItem.el, r = e(e.magnificPopup.instance.wrap), n = r.find("" + a.galleryThumbnail + "[data-review-id='" + o.attr("data-review-id") + "'][src='" + o.attr("src") + "']"), n.length <= 0 ? void 0 : (i = a.galleryThumbnailLink + "--current", e(i).removeClass(i.substring(1)), n.closest(a.galleryThumbnailLink).addClass(i.substring(1)), t = r.find(a.gallery), t.scrollLeft(n.outerWidth() * (e.magnificPopup.instance.index + 3) - t.width()))
            }, g = function() {
                var t, n, i, o;
                return t = p(e.magnificPopup.instance.st.key), i = t.data(r), !i || i.fetching || i.canNotFetch ? void 0 : (i.fetching = !0, t.data(r, i), n = t.closest(a.widget), o = e.extend(jdgm.ajaxParamsFor(n), {
                    review_type: "all-reviews",
                    sort_by: "with_media",
                    per_page: i.perPage,
                    page: i.page + 1
                }), e.ajax({
                    method: "GET",
                    url: "" + jdgm.HTTPS_HOST + "/" + i.url,
                    data: o,
                    success: function(e) {
                        return x(e.html)
                    },
                    complete: function() {
                        return i = t.data(r), i.fetching = !1, t.data(r, i), T()
                    }
                }))
            }, x = function(t) {
                var n, i, a, o, s, l;
                return a = e(e.magnificPopup.instance.wrap), n = p(e.magnificPopup.instance.st.key), o = n.data(r), t.length <= 0 ? (o.canNotFetch = !0, void n.data(r, o)) : (l = [], s = e.parseHTML(t), i = e(s[0]).hasClass("jdgm-rev") ? e(s) : e(s).find(".jdgm-rev"), e.each(i, function(e, t) {
                    var r;
                    return r = v(t), o.reviews[r.uuid] ? void 0 : (r = m(n, r), l.push(r))
                }), 0 === l.length ? o.canNotFetch = !0 : (o.page += 1, l.forEach(function(e) {
                    return o.reviews[e.uuid] = e
                })), n.data(r, o), d())
            }, v = function(t) {
                var n, r, i, a, o, s, d;
                return n = e(t), o = [], e.each(n.find(".jdgm-rev__pic-link:not(.jdgm-rev__product-picture)"), function(t, n) {
                    var r;
                    return r = e(n), o.push({
                        compact: r.find("img.jdgm-rev__pic-img").data("src"),
                        huge: r.data("mfp-src"),
                        original: r.attr("href")
                    })
                }), s = [], e.each(n.find(".jdgm-rev__vids > .jdgm-vid-player"), function(t, n) {
                    var r;
                    return r = e(n), s.push(r.data("external-id"))
                }), d = [], e.each(n.find("jdgm-rev__vids > .jdgm-yt-video"), function(t, n) {
                    var r;
                    return r = e(n), d.push({
                        media_platform_name: "yt",
                        media_platform_url: r.data("id")
                    })
                }), n.find(".jdgm-rev__avatar-image").length > 0 && (i = {
                    normal: n.find(".jdgm-rev__avatar-image").data("src"),
                    retina: n.find(".jdgm-rev__avatar-image").data("src-retina")
                }), a = [], e.each(n.find(".jdgm-rev__cf-ans"), function(t, n) {
                    var r;
                    return r = e(n), a.push(u(r))
                }), r = {
                    uuid: n.data("review-id"),
                    rating: n.find(".jdgm-rev__rating").data("score"),
                    created_at: n.find(".jdgm-rev__timestamp").data("content"),
                    reviewer_name: n.find(".jdgm-rev__author").text(),
                    title: n.find(".jdgm-rev__title").html(),
                    body_html: n.find(".jdgm-rev__body").html(),
                    avatar_image_url: i,
                    gravatar_hash: n.find(".jdgm-rev__icon").data("gravatar-hash"),
                    verified_buyer: n.data("verified-buyer"),
                    product_title: n.data("product-title"),
                    product_url: n.data("product-url"),
                    country_code_show_flag: n.find(".jdgm-rev__location").data("country-code"),
                    location: n.find(".jdgm-rev__location").text(),
                    pictures_urls: o,
                    video_external_ids: s,
                    media_platform_hosted_video_infos: d,
                    cf_answers: a
                }
            }, u = function(e) {
                var t, n, r, i, a, o, s, d, l, u;
                return t = e.find(".jdgm-cf-bars-wrapper"), n = e.find(".jdgm-rev__slider-wrapper"), o = e.find(".jdgm-rev__cf-ans__title").text().slice(0, -1), t.length > 0 ? (a = t.find(".jdgm-cf-bar.jdgm--filled").length, d = t.find(".jdgm-cf-bar").length, u = "" + a + "/" + d, l = "scale", i = t.find(".jdgm-rev__scale-first").text(), s = t.find(".jdgm-rev__scale-last").text()) : n.length > 0 ? (u = n.find(".jdgm-rev__slider-pointer").attr("style").match(/\d{1,3}/g)[0], l = "slider", i = n.find(".jdgm-rev__slider-first").text(), s = n.find(".jdgm-rev__slider-last").text()) : u = e.find(".jdgm-rev__cf-ans__value").text(), r = {
                    value: u,
                    question_title: o,
                    question_type: l,
                    lower_value: i,
                    top_value: s
                }, Object.fromEntries(Object.entries(r).filter(function(e) {
                    return function(e) {
                        var t, n;
                        return n = e[0], t = e[1], void 0 !== t
                    }
                }(this)))
            }, _ = function(t, n) {
                return e.magnificPopup.open(e.extend({}, i, {
                    items: t.find(a.galleryThumbnail).toArray()
                }), n)
            }, b = function(t) {
                var n;
                return n = t.data("id"), t.find(a.galleryThumbnailLink).magnificPopup(e.extend({}, i, {
                    key: n,
                    mainClass: "" + a.galleryPopup.substring(1) + " " + a.galleryPopupData.substring(1) + " " + a.galleryPopup.substring(1) + "--" + n,
                    items: t.find(a.galleryThumbnail).toArray()
                }))
            }, w = function() {
                return e(document).on("click", "" + a.widget + " " + a.galleryThumbnailLink + ", " + a.galleryPopupData + " " + a.galleryThumbnailLink, function(t) {
                    return t.preventDefault(), t.stopPropagation(), _(e(this).parent(), e(this).index())
                }), e(document).on("click", "" + a.galleryPopupData + " .jm-mfp-main", function(t) {
                    return e(t.target).is("a") || t.preventDefault(), t.stopPropagation()
                }), e(document).on("click", ".jm-mfp-bg, " + a.galleryPopupData + " .jm-mfp-container, " + a.galleryPopupData + " .jm-mfp-close", function(t) {
                    return e.magnificPopup.instance.close()
                }), e(document).on("click", "" + a.galleryPopupData + " .jm-mfp-arrow-left", function(t) {
                    return e.magnificPopup.instance.prev()
                }), e(document).on("click", "" + a.galleryPopupData + " .jm-mfp-arrow-right", function(t) {
                    return e.magnificPopup.instance.next()
                })
            }, y = function(e) {
                return S(e), b(e)
            }, S = function(e) {
                var t, n;
                return n = {
                    reviews: {},
                    url: e.data("url"),
                    perPage: e.data("per-page"),
                    page: 1,
                    fetching: !1,
                    canNotFetch: !1
                }, t = e.find(".jdgm-gallery-data"), t.data("json").forEach(function(t) {
                    return t && t.uuid ? (t = m(e, t), n.reviews[t.uuid] = t, e.append(jdgm.templates.photoGalleryThumbnail({
                        review: t,
                        preload: !0
                    }))) : void 0
                }), t.remove(), 0 === Object.keys(n.reviews).length ? h(e) : (o(e), jdgm.setupLazyLoadPicture(e.find(a.galleryThumbnail)), n.canNotFetch = Object.keys(n.reviews).length < n.perPage, e.data(r, n))
            }, o = function(t) {
                var n, r, i;
                return jdgm.isVersion3 ? (i = t.closest(a.widget), r = i.find(".jdgm-row-media"), 0 === r.length && (r = e("<div>", {
                    "class": "jdgm-row-media"
                })), t.wrap('<div class="jdgm-gallery-wrapper"></div>'), n = t.closest(".jdgm-gallery-wrapper").detach(), n.prepend("<div class='jdgm-gallery-title'>" + jdgmSettings.widget_media_grid_title + "</div>"), r.prepend(n), i.find(".jdgm-custom-forms-avg-responses").length > 0 ? i.find(".jdgm-custom-forms-avg-responses").after(r.detach()) : i.find(".jdgm-form-wrapper").length > 0 ? i.find(".jdgm-form-wrapper").after(r.detach()) : i.find(".jdgm-row-stars").after(r.detach())) : void 0
            }, m = function(t, n) {
                var r, i, a, o, s;
                for (n.video_external_data = {}, s = n.video_external_ids, a = 0, o = s.length; o > a; a++) r = s[a], i = {
                    external_id: r
                }, r.length > 16 ? (i.img_src = "https://cloudflarestream.com/" + r + "/thumbnails/thumb_5_0.jpg", i.iframe_src = "https://iframe.videodelivery.net/" + r) : e.ajax({
                    url: "https://vimeo.com/api/oembed.json",
                    data: {
                        url: "https://vimeo.com/" + r
                    },
                    success: function(e) {
                        return f(t, e, n)
                    }
                }), n.video_external_data[r] = i;
                return n
            }, f = function(e, t, n) {
                var i, o;
                return o = e.data(r), o.reviews[n.uuid].video_external_data[t.video_id].img_src = t.thumbnail_url, o.reviews[n.uuid].video_external_data[t.video_id].iframe_src = "https://player.vimeo.com" + t.uri, e.data(r, o), i = e.find("" + a.galleryThumbnail + "[data-external-id=" + t.video_id + "]"), i.attr("src", t.thumbnail_url), i.attr("data-src", t.thumbnail_url), i.attr("data-iframe-src", "https://player.vimeo.com" + t.uri), i.parent().removeClass("jdgm--loading")
            }, p = function(t) {
                return e("" + a.widget + " " + a.gallery + "[data-id=" + t + "]")
            }, h = function(t) {
                return null == t && (t = null), null === t && (t = e("" + a.widget + " " + a.gallery)), t.closest(a.widget).attr("data-display-media", "false"), t.remove()
            }, jdgmSettings.widget_show_photo_gallery ? (e.each(e("" + a.widget + " " + a.gallery), function(t, n) {
                var i;
                return i = e(n), i.data("loaded") ? void 0 : (i.attr("data-loaded", !0), i.attr("data-id", "" + r + "-" + t), y(i))
            }), e("" + a.widget + " " + a.gallery).data("setup-event") || (e("" + a.widget + " " + a.gallery).attr("data-setup-event", !0), w())) : h(), n = e(), jdgm._safeRun(function() {
                return S(n)
            }), jdgm._safeRun(function() {
                return b(n)
            }), jdgm._safeRun(function() {
                return f(n, {}, {})
            }), jdgm._safeRun(function() {
                return c()
            }), jdgm._safeRun(function() {
                return j(n)
            }), jdgm._safeRun(function() {
                return s()
            }), jdgm._safeRun(function() {
                return d()
            }), jdgm._safeRun(function() {
                return T()
            }), jdgm._safeRun(function() {
                return g()
            }), jdgm._safeRun(function() {
                return x("")
            }), jdgm._safeRun(function() {
                return v("")
            })
        })
    }.call(this),
    function() {
        jdgm.$(function(e) {
            var t, n, r, i, a, o, s, d, l, u, c, g, p, m, f, _, v, h, j, w;
            return i = "ugc-media", o = {
                mediaGrid: ".jdgm-ugc-media",
                mediaThumbnail: ".jdgm-ugc-media__thumbnail",
                review: ".jdgm-rev",
                reviewAttachment: ".jdgm-rev-attachment"
            }, r = "jdgm-gallery", a = {
                closeOnBgClick: !1,
                image: {
                    cursor: null,
                    markup: jdgm.templates.photoGalleryPopupContent(),
                    titleSrc: function(e) {
                        return m(e)
                    }
                },
                iframe: {
                    markup: jdgm.templates.photoGalleryPopupContent({
                        mediaType: "video-native"
                    }),
                    titleSrc: function(e) {
                        return m(e)
                    }
                },
                tLoading: "",
                gallery: {
                    enabled: !0
                },
                callbacks: {
                    open: function() {
                        return setTimeout(function(e) {
                            return function() {
                                return l(e), d(e)
                            }
                        }(this), 0), e("body").addClass("jm-mfp-is-open")
                    },
                    close: function() {
                        return e("body").removeClass("jm-mfp-is-open")
                    },
                    elementParse: function(t) {
                        var n;
                        return n = e(t.el[0]), "video" === n.data("media-type") ? t.type = "iframe" : t.type = "image"
                    },
                    change: function(e) {
                        return setTimeout(function(e) {
                            return function() {
                                return u(e), s(e), w(e), e.index >= e.items.length - 2 ? c(e.st.key, e) : void 0
                            }
                        }(this), 0)
                    }
                }
            }, l = function(t) {
                var n;
                return t.wrap ? (n = e(t.wrap), n.attr("id", "jdgm-gallery-popup--" + t.st.key), n.find(".jm-mfp-container").append(jdgm.templates.photoGalleryPopup())) : void 0
            }, d = function(t) {
                var n, a, o;
                return t.wrap ? (o = e(t.wrap), n = g(t.st.key), a = e("<div>", {
                    "class": r,
                    "data-id": t.st.key
                }), e.each(n.data(i).objects, function(e, t) {
                    return a.append(jdgm.templates.photoGalleryPopupThumbnail({
                        object: t
                    }))
                }), o.find(".jm-mfp-carousel").html(a), e.magnificPopup.instance.items = a.find("." + r + "__thumbnail").toArray()) : void 0
            }, m = function(e) {
                var t, n, r, a;
                return e.el && (a = e.el.attr("class").split("__")[0], n = e.el.closest("." + a).data("id"), t = g(n).data(i), t && (r = t.objects[e.el.data("object-id")])) ? jdgm.templates.ugcMediaGridPopup({
                    post: r
                }) : void 0
            }, u = function(t) {
                var n, r, i, a;
                return t.wrap && (a = e(t.wrap), i = a.find(".jm-mfp-main"), i.length > 0) ? (n = a.find(".jm-mfp-container > .jm-mfp-content"), r = n.find(o.review).detach(), n = n.detach(), i.find(".jm-mfp-content-wrapper").prepend(n), i.find(o.review).replaceWith(r), jdgm.asyncEach(i.find(o.reviewAttachment), function(t) {
                    var n, r, i;
                    return i = e(t), n = i.find("" + o.reviewAttachment + "__review-stars"), jdgm.buildStarsFor(n), r = i.find("" + o.reviewAttachment + "__review-text"), jdgm._customizeBadgeTexts(r, r.data("reviews"), n.data("score"))
                })) : void 0
            }, t = null, s = function(n) {
                var r;
                return n.wrap && (r = e(n.wrap), t || (t = r.find(".jm-mfp-arrow").clone()), r.find(".jm-mfp-arrow").remove(), t) ? r.find(".jm-mfp-figure figure").append(t) : void 0
            }, w = function(t) {
                var n, i, a, o, s;
                if (t.wrap) {
                    if (a = e(t.wrap), s = t.currItem.el.attr("src"), o = "." + r, i = a.find("" + o + "__thumbnail[src='" + s + "']"), i.length <= 0) return;
                    return e("" + o + "__thumbnail-link--current").removeClass("" + r + "__thumbnail-link--current"), i.closest("" + o + "__thumbnail-link").addClass("" + r + "__thumbnail-link--current"), n = a.find(o), n.scrollLeft(i.outerWidth() * (t.index + 3) - n.width())
                }
            }, p = function(t, n, r) {
                return e.magnificPopup.open(e.extend({}, a, {
                    items: t.find(n).toArray()
                }), r)
            }, c = function(t, n) {
                var r, a, s, l;
                return null == n && (n = null), a = g(t), s = a.data(i), !s || s.fetching || s.canNotFetch ? void 0 : (s.fetching = !0, a.data(i, s), r = e("" + o.mediaGrid + "__load-more-btn"), r.attr("disabled", "disabled"), l = e.extend(jdgm.ajaxParamsFor(a), {
                    per_page: s.perPage,
                    page: s.page + 1
                }), e.ajax({
                    method: "GET",
                    url: "" + jdgm.HTTPS_HOST + "/reviews/social_posts",
                    data: l,
                    success: function(e) {
                        return jdgm._transformJsonData(a, e)
                    },
                    complete: function() {
                        return s = a.data(i), s.fetching = !1, a.data(i, s), _(), n && (d(n), w(n)), r.removeAttr("disabled")
                    }
                }))
            }, v = function(t) {
                var n;
                return n = t.data("id"), t.find("" + o.mediaGrid + "__thumbnail-link").magnificPopup(e.extend({}, a, {
                    key: n,
                    mainClass: "jdgm-gallery-popup jdgm-gallery-popup__" + i + " jdgm-gallery-popup--" + n,
                    items: t.find(o.mediaThumbnail).toArray()
                }))
            }, f = function() {
                return e(document).off("click", "" + o.mediaGrid + "__thumbnail-link"), e(document).on("click", "" + o.mediaGrid + "__thumbnail-link", function(t) {
                    return p(e(this).parent(), o.mediaThumbnail, e(this).index() - 1)
                }), e(document).on("click", ".jdgm-gallery-popup__" + i + " .jdgm-gallery__thumbnail-link", function(t) {
                    return t.preventDefault(), t.stopPropagation(), p(e(this).parent(), "." + r + "__thumbnail", e(this).index())
                }), e(document).off("click", "" + o.mediaGrid + "__load-more-btn"), e(document).on("click", "" + o.mediaGrid + "__load-more-btn", function(t) {
                    var n;
                    return n = e(this).siblings(o.mediaGrid).data("id"), c(n)
                }), e(document).on("click", "" + o.mediaGrid + "__primary-btn[data-url], " + o.mediaGrid + "__reviews-btn[data-url]", function(t) {
                    return window.open(e(t.target).data("url"), "_blank")
                }), e(document).on("click", ".jdgm-gallery-popup__" + i + " .jm-mfp-main", function(t) {
                    return e(t.target).is("a") || t.preventDefault(), t.stopPropagation()
                }), e(document).on("click", ".jm-mfp-bg, .jdgm-gallery-popup__" + i + " .jm-mfp-container, .jdgm-gallery-popup__" + i + " .jm-mfp-close", function(t) {
                    return e.magnificPopup.instance.close()
                }), e(document).on("click", ".jdgm-gallery-popup__" + i + " .jm-mfp-arrow-left", function(t) {
                    return e.magnificPopup.instance.prev()
                }), e(document).on("click", ".jdgm-gallery-popup__" + i + " .jm-mfp-arrow-right", function(t) {
                    return e.magnificPopup.instance.next()
                })
            }, g = function(t) {
                return e("" + o.mediaGrid + "[data-id=" + t + "]")
            }, j = function() {
                return h("" + o.mediaGrid + "__thumbnail-link[data-execute-after-load=true]"), h("" + o.mediaGrid + "__load-more-btn[data-execute-after-load=true]")
            }, h = function(t) {
                var n;
                return n = e(t), n.length > 0 ? (n.trigger("click"), n.removeAttr("data-execute-after-load")) : void 0
            }, _ = function() {
                return e.each(e(o.mediaGrid), function(t, n) {
                    return v(e(n))
                })
            }, _(), e(o.mediaGrid).data("setup-event") || (e(o.mediaGrid).attr("data-setup-event", !0), f(), j()), n = e(), jdgm._safeRun(function() {
                return l({})
            }), jdgm._safeRun(function() {
                return d({})
            }), jdgm._safeRun(function() {
                return m({})
            }), jdgm._safeRun(function() {
                return u({})
            }), jdgm._safeRun(function() {
                return s({})
            }), jdgm._safeRun(function() {
                return w({})
            }), jdgm._safeRun(function() {
                return c(1)
            })
        })
    }.call(this),
    function() {
        jdgm.$(function(e) {
            return jdgm.triggerEvent("doneLoadingMediaJs")
        })
    }.call(this);