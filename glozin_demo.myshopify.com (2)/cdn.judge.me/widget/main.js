(function() {
    jdgm.$(function(e) {
        var t;
        return e(".jdgm-fake-sample-review-widget").length > 0 && (t = e(".jdgm-fake-sample-review-widget").html(), e(".jdgm-review-widget").each(function(n, r) {
            var i, o;
            return o = e(r), i = o.find(".jdgm-rev-widg"), i.length <= 0 || parseInt(i.data("number-of-reviews")) <= 0 ? o.html(t) : void 0
        })), e(".jdgm-fake-sample-preview-badge").length > 0 ? (t = e(".jdgm-fake-sample-preview-badge").html(), e(".jdgm-preview-badge:lt(3)").each(function(n, r) {
            var i, o;
            return o = e(r), i = o.find(".jdgm-prev-badge"), i.length <= 0 || parseInt(i.data("number-of-reviews")) <= 0 ? (o.html(t), o.addClass("jdgm--with-fake-sample-content"), o.show()) : void 0
        })) : void 0
    })
}).call(this),
    function() {
        this.JST || (this.JST = {}), this.JST["templates/shopify_v2/qa_badge"] = function(obj) {
            var __p = [];
            with(obj || {}) {
                __p.push("");
                var badgePlacementClass = bottomPlacement ? "jdgm-qa-badge__pos-below" : "";
                __p.push("\n<span class='jdgm-qa-badge ", badgePlacementClass, "'>\n  "), showIcon && __p.push("\n    <span class='jdgm-qa-badge__icon' style='color: ", iconColor, ";'>\n    </span>\n  "), __p.push("\n  <span class='jdgm-qa-badge__text'>\n    ", text, "\n  </span>\n</span>\n")
            }
            return __p.join("")
        }
    }.call(this), jdgm.$(function(e) {
        jdgm.templates = jdgm.templates || {}
    }),
    function() {
        var e, t, n;
        e = jdgm.$, t = ["Customer reviews", "Customer Reviews", "Review", "Reviews", "REVIEWS", "REVIEWS for this Product", "Q&A"], jdgm.isWidgetVisible || (jdgm.isWidgetVisible = function() {
            return jdgm.visibleRevWidget().length > 0
        }), jdgm._scrollDownToWidget || (jdgm._scrollDownToWidget = function() {
            var e;
            return e = jdgm.isWidgetVisible() ? 0 : 500, setTimeout(function() {
                return jdgm.isWidgetVisible() ? jdgm.scrollTo(jdgm.visibleRevWidget(), jdgmSettings.scrollTopOffset) : void 0
            }, e)
        }), jdgm._clickEasyTabsApp || (jdgm._clickEasyTabsApp = function() {
            return setTimeout(function() {
                var t;
                return t = e("#" + e(".jdgm-review-widget").parent().attr("aria-labelledby"))[0], t ? t.click() : void 0
            }, 1500)
        }), jdgm._openTabAndScrollToRevWidget || (jdgm._openTabAndScrollToRevWidget = function() {
            return jdgm._openReviewTab(), jdgm._scrollDownToWidget()
        }), jdgm.clickElement = function(t, r) {
            return e(t + ":contains('" + r + "')").each(function(e, t) {
                return n(t.getAttribute("href")) ? void 0 : t.click()
            })
        }, n = function(e) {
            return null === e || void 0 === e ? !1 : "" === e || 0 !== e.indexOf("#") && 0 !== e.indexOf("javascript:void")
        }, jdgm._openReviewTab || (jdgm._openReviewTab = jdgmSettings.openReviewTab || function() {
            return !jdgm.isWidgetVisible() && jdgmSettings.revTabSelector && e(jdgmSettings.revTabSelector)[0].click(), jdgm.isWidgetVisible() || jdgm._clickEasyTabsApp(), e.each(t, function(e, t) {
                return jdgm.isWidgetVisible() ? !1 : (jdgm.clickElement("a", t), jdgm.isWidgetVisible() ? !1 : jdgm.clickElement("li.tab__item", t))
            })
        })
    }.call(this),
    function() {
        jdgm.$(function(e) {
            var t, n, r, i, o, a, s, l, c, u, d, p, h, f, m;
            return r = '.jdgm-widget.jdgm-preview-badge[data-auto-install="true"]', s = ["shopify"], a = [".page-width", ".wrapper", ".shopify-section"], t = e('[itemtype="http://schema.org/Product"] [itemtype="http://schema.org/Offer"]').first(), n = e('[itemtype="http://schema.org/Product"] :not(meta)[itemprop="name"]').first(), o = ".product-single__title, .ProductMeta__Title", i = '<div style="clear:both"></div>', c = function() {
                var i, a, s, c;
                return a = e(r), a.length <= 0 ? void 0 : (c = a.data("id"), i = e('.jdgm-preview-badge[data-id="' + c + '"]'), s = e(o), l(a.length, i.length, t.length || n.length || s.length) ? (e(r + ":not(:first)").remove(), p(s)) : a.remove())
            }, p = function(i) {
                return i.length > 0 ? i.after(e(r)) : n.length > 0 ? n.after(e(r)) : t.length > 0 ? t.before(e(r)) : void 0
            }, m = function() {
                return e(r).attr("data-auto-install", "processed")
            }, l = function(e, t, n) {
                return e && n && e === t
            }, h = function() {
                var t;
                return t = d(), t ? t.append(i).append(e('.jdgm-review-widget[data-auto-install="true"]')) : void 0
            }, d = function() {
                var t, n;
                return t = f(), n = a.find(function(e) {
                    return t.find(e).length > 0
                }), n ? e(t.find(n).last()) : t
            }, f = function() {
                var n;
                return t.length > 0 ? t.parents('[itemtype="http://schema.org/Product"]') : (n = e('[itemtype="http://schema.org/Product"]:not([itemprop="itemReviewed"])').first(), n.length > 0 ? n : e("main, body").last())
            }, (u = function() {
                return s.indexOf(jdgmSettings.platform) >= 0 ? (h(), c(), m()) : void 0
            })()
        })
    }.call(this),
    function() {
        jdgm.$(function(e) {
            var t, n, r, i, o, a, s, l, c, u;
            return n = ".jdgm-rev-widg__paginate-spinner-wrapper", r = ".jdgm-rev-widg__body", t = ".jdgm-rev-widg__body .jdgm-paginate", s = function(e) {
                var i, s, l;
                return s = function() {
                    return jdgm.ajaxParamsFor(e)
                }, i = function() {
                    return jdgm.isWidgetLoadMore() ? (e.find(t).hide(), e.find(n).show()) : o(e)
                }, l = function(t) {
                    return jdgm.isWidgetLoadMore() ? jdgm._appendPaginateResultToBody(t, e, ".jdgm-rev", ".jdgm-rev-widg__reviews", c) : a(t, e)
                }, jdgm.setupPaginate(e.find(r), i, l, s)
            }, a = function(e, t, n) {
                var i;
                return null == n && (n = null), i = t.find(r), i.html(e.html), c(t), i.slideDown(), u(t, n)
            }, c = function(e) {
                return jdgm.customizeReviews(), jdgm.setupMediaGallery && jdgm.setupMediaGallery(e), e.find(n).hide()
            }, o = function(e, t) {
                return null == t && (t = null), jdgm.openSubtab(e, "reviews"), u(e, t), e.find(n).show(), e.find(r).hide()
            }, u = function(e, t) {
                var n, i;
                return null == t && (t = null), i = e.find(r), e.data("not-scroll-to") ? void 0 : (n = e, i.length > 0 && (n = i), null !== t && t.length > 0 && (n = t), jdgm.scrollTo(n))
            }, l = function(t) {
                var n, r, i, s;
                return jdgm.isVersion3 && (n = e(".jdgm-row-search")), i = function() {
                    return jdgm.ajaxParamsFor(t)
                }, r = function() {
                    return o(t, n)
                }, s = function(e) {
                    return a(e, t, n)
                }, jdgm.setupSearch(t, r, s, i)
            }, i = function(e, t) {
                var n, r, i;
                return r = function() {
                    return jdgm.ajaxParamsFor(t)
                }, n = function() {
                    return o(t)
                }, i = function(e) {
                    return a(e, t)
                }, jdgm.fetchSingleReview(t, e, n, i, r)
            }, jdgm._setupLoadReviewsEventsFor = function(e) {
                return jdgm._setupSortAndFilterFor(e, o, a), s(e), l(e)
            }, jdgm.eachRevWidgets(function(t) {
                return jdgm._setupLoadReviewsEventsFor(t), e.urlParam("judgeme_review_uuid") ? setTimeout(function() {
                    return i(e.urlParam("judgeme_review_uuid"), t)
                }, 0) : void 0
            })
        })
    }.call(this),
    function() {
        jdgm.$(function(e) {
            var t;
            return t = function(e) {
                return "0px" === e.css("fontSize") ? e.css("fontSize", "14px") : void 0
            }, jdgm.eachRevWidgets(function(e) {
                var t;
                return t = e.closest(":visible").width(), (t > 420 && 680 >= t || jdgmSettings.smallReviewWidget) && e.addClass("jdgm-review-widget--medium"), 420 >= t ? e.addClass("jdgm-review-widget--small") : void 0
            }), jdgm.asyncEach(e(".jdgm-widget"), function(n) {
                return t(e(n))
            })
        })
    }.call(this),
    function() {
        jdgm.$(function(e) {
            var t, n, r, i, o;
            return jdgm.badge = function() {
                return console.log("This function is no longer needed. Please remove it.")
            }, jdgm.customizeBadges = function() {
                var n;
                return n = e(".jdgm-preview-badge:not(." + jdgm.DONE_SETUP_CLASS + ")"), jdgm.asyncEach(n, function(n) {
                    var r, a, s, l, c;
                    return a = e(n), jdgm._addEmptyPreviewBadge(a), r = a.find(".jdgm-prev-badge__text"), c = a.find(".jdgm-prev-badge").data("number-of-reviews"), s = parseFloat(a.find(".jdgm-prev-badge").data("average-rating")), l = a.find(".jdgm-prev-badge").data("number-of-questions"), a.hasClass("jdgm--with-fake-sample-content") || jdgm._customizeBadgeTexts(r, c, s), jdgmSettings.preview_badge_show_question_text && jdgmSettings.enable_question_anwser && t(a.find(".jdgm-prev-badge"), l), o(a), i(a)
                }), n.addClass(jdgm.DONE_SETUP_CLASS)
            }, t = function(e, t) {
                var r, i, o;
                return o = n(t), r = "same-row" !== jdgmSettings.qa_badge_position, i = JST["templates/shopify_v2/qa_badge"]({
                    text: o,
                    bottomPlacement: r,
                    showIcon: jdgmSettings.qa_badge_show_icon,
                    iconColor: jdgmSettings.qa_badge_icon_color || "inherit"
                }), e.append(i)
            }, n = function(e) {
                return e ? r(e) : jdgmSettings.preview_badge_no_question_text
            }, r = function(e) {
                var t, n;
                return (n = jdgmSettings.preview_badge_n_question_text) ? (t = n.replace("{{ number_of_questions }}", e), jdgm.pluralizeLongText(t, e)) : void 0
            }, o = function(e) {
                var t, n;
                return t = e.closest("a").attr("href") || "", n = e.data("id") === jdgm.caches.$revWidgets.data("id"), e.on("click", function(e) {
                    return n ? (jdgm._openTabAndScrollToRevWidget(), !1) : t ? (window.location.href = t.split("#")[0] + "#judgeme_product_reviews", !1) : void 0
                }), n || t ? e.addClass("jdgm-preview-badge--with-link") : void 0
            }, i = function(e) {
                var t, n;
                return t = e.css("text-align").indexOf("center") >= 0, n = jdgmSettings.enforce_center_preview_badge && t, e.toggleClass("enforce-center-preview-badge", n)
            }, jdgm.customizeBadges()
        })
    }.call(this),
    function() {
        jdgm.$(function(e) {
            var t, n, r, i, o, a, s, l, c, u;
            return t = "<div class='jdgm-quest-widg__body'></div>", i = ".jdgm-quest-widg__body", r = ".jdgm-rev-widg__paginate-spinner-wrapper", n = ".jdgm-quest-widg__body .jdgm-paginate", jdgm.fetchQuestsFirstTime = function(t) {
                var n, r, i, o, s;
                return o = t.find(".jdgm-rev-widg").data("number-of-questions") || t.data("number-of-questions") || 0, t.data("first-time-quests-load") || 0 >= o ? void 0 : (t.data("first-time-quests-load", !0), n = t.find(".jdgm-subtab__name.jdgm--active").data("tabname"), "questions" === n && c(t), r = t.data("id"), i = "api/questions/questions_for_widget", "example-product-id" === r && (i = "api/questions/fake_question_widget"), s = jdgmSettings.enable_ajax_cdn_cache && jdgm.CDN_HOST || "" + jdgm.HTTPS_HOST + "/", e.ajax({
                    url: "" + s + i,
                    data: {
                        product_id: r,
                        shop_domain: jdgm.shopDomain(),
                        platform: jdgmSettings.platform
                    },
                    success: function(e) {
                        return a(e, t)
                    }
                }))
            }, l = function(e) {
                var t, n, r;
                return t = e.find(".jdgm-rev-widg"), r = t.data("number-of-reviews") || 0, n = t.data("number-of-questions") || 0, 0 >= n ? void 0 : s(e, r, n)
            }, s = function(n, r, i) {
                var a, s;
                return s = [{
                    key: "reviews",
                    title: jdgmSettings.widget_reviews_subtab_text,
                    count: r
                }, {
                    key: "questions",
                    title: jdgmSettings.widget_questions_subtab_text,
                    count: i
                }], a = e(jdgm._renderSubtab(s)), jdgm.isVersion3 && "leex" === jdgmSettings.widget_theme ? n.find(".jdgm-rev-widg__actions").prepend(a) : a.insertAfter(n.find(".jdgm-rev-widg__header")), a.data("open-tab-callback", function(e) {
                    return o(n, e)
                }), e(t).insertAfter(n.find(".jdgm-rev-widg__body"))
            }, o = function(e, t) {
                return null == t && (t = "reviews"), e.find(".jdgm-rev-widg__body").toggle("reviews" === t), e.find(i).toggle("questions" === t), "questions" === t ? jdgm.fetchQuestsFirstTime(e) : void 0
            }, a = function(e, t) {
                return t.find(i).html(e.html), u(t), t.find(i).slideDown()
            }, u = function(e) {
                return jdgm._fixAuthorNameIfFromShop(e), jdgm.customizeQuestions(), e.find(n).text() <= 0 && e.find(n).remove(), e.find(r).hide()
            }, jdgm._setupPaginateForQuestionWidget = function(e) {
                var t, o, s;
                return o = function() {
                    return {
                        product_id: e.data("id")
                    }
                }, t = function() {
                    return jdgm.isWidgetLoadMore() ? (e.find(n).hide(), e.find(r).show()) : c(e)
                }, s = function(t) {
                    return jdgm.isWidgetLoadMore() ? jdgm._appendPaginateResultToBody(t, e, ".jdgm-quest", ".jdgm-quest-widg__questions", u) : a(t, e)
                }, jdgm.setupPaginate(e.find(i), t, s, o)
            }, c = function(e) {
                return e.find(r).show(), e.find(i).slideUp(), e.data("not-scroll-to") ? void 0 : jdgm.scrollTo(e)
            }, jdgmSettings.enable_question_anwser ? jdgm.eachRevWidgets(function(e) {
                return l(e), jdgm._setupPaginateForQuestionWidget(e)
            }) : void 0
        })
    }.call(this),
    function() {
        jdgm.$(function(e) {
            var t, n;
            return t = "jdgm.doneSetup", n = document.createEvent("Event"), n.initEvent(t, !0, !0), document.dispatchEvent(n), jdgm._doneSetup = !0
        })
    }.call(this),
    function() {
        jdgm.$(function(e) {
            var t;
            return t = jdgm._safeRun, e.each(jdgm.templates, function(e, n) {
                return t(n)
            })
        })
    }.call(this),
    function() {
        jdgm.$(function(e) {
            var t, n, r, i, o, a, s;
            return n = jdgm.CDN_HOST + "widget/form.js", t = ["judgeme_token", "judgeme_review_uuid", "judgeme_dynamic_form", "judgeme_follow_up_token", "judgeme_upload_pictures"], a = function() {
                return jdgm.loadScript(n), jdgm.loadCSS(jdgm.widgetPath("form.css"))
            }, o = function() {
                return jdgm.loadScript.requestedUrls.indexOf(n) >= 0
            }, s = function() {
                var e, n;
                return e = window.location, n = "#judgeme" === e.hash || "#judgeme_product_reviews" === e.hash, t.forEach(function(t) {
                    return n || (n = e.search.indexOf(t) >= 0)
                }), n
            }, r = function() {
                return e(document).on("click", ".jdgm-write-rev-link, .jdgm-ask-question-btn", function(e) {
                    return o() ? void 0 : (a(), !1)
                })
            }, i = function() {
                var t;
                return o() ? void jdgm.ScrollEvent.dettach("checkToLoadFormJsFile") : (t = !1, jdgm.asyncEach(e(".jdgm-write-rev-link, .jdgm-ask-question-btn"), function(n) {
                    return t ? void 0 : jdgm.isInViewport(e(n).closest(":visible")[0]) ? (t = !0, a()) : void 0
                }))
            }, s() ? a() : (r(), i(), jdgm.ScrollEvent.attach(i, "checkToLoadFormJsFile"))
        })
    }.call(this),
    function() {
        jdgm.$(function(e) {
            var t, n, r, i, o, a;
            return n = ".jdgm-yt-video, .jdgm-rev__pic-link, .jdgm-rev__pic-img, .jdgm-vid-player, .jdgm-medal__image, .jdgm-gallery, .jdgm-ugc-media", t = jdgm.widgetPath("media.css"), a = function() {
                return jdgm.loadCSS(t, function() {
                    return jdgm.triggerEvent("doneLoadingMediaCss")
                }), jdgm.loadScript(jdgm.CDN_HOST + "widget/media.js")
            }, e(n).length > 0 && a(), r = e(".jdgm-gallery-data").data("json"), i = jdgmSettings.widget_show_photo_gallery && r && r.length > 0, o = "carousel" === jdgmSettings.widget_theme, (o || i) && a(), e(document).on("jdgm.beforeFetchingReviews", function(e, t) {
                return a()
            }), e(document).on("click", ".jdgm-ugc-media__thumbnail-link, .jdgm-ugc-media__load-more-btn", function(t) {
                return e(this).attr("data-execute-after-load", !0), a()
            })
        })
    }.call(this),
    function() {
        jdgm.$(function(e) {
            var t, n, r, i, o, a, s, l, c, u, d, p, h;
            return jdgm.addProductJld = function(t, n) {
                var r, i, o, a, s, c;
                if (!l()) return r = e(".jdgm-rev-widg"), a = r.data("number-of-reviews"), s = r.data("average-rating"), t || (t = e("link[rel='canonical']").prop("href") + "#product"), n || (n = e(".jdgm-review-widget").data("product-title")), c = e(".jdgm-rev-widg .jdgm-rev").map(function() {
                    var t, n, r, i;
                    return i = e(this).find(".jdgm-rev__body").text().trim(), r = e(this).find(".jdgm-rev__rating").data("score"), t = e(this).find(".jdgm-rev__author").text().trim(), n = e(this).find(".jdgm-rev__timestamp").data("content"), {
                        "@type": "Review",
                        reviewRating: {
                            "@type": "Rating",
                            ratingValue: r
                        },
                        author: {
                            "@type": "Person",
                            name: t
                        },
                        reviewBody: i,
                        datePublished: n
                    }
                }).get(), a > 0 && s && t && n ? (i = document.createElement("script"), i.className = "jdgm-aggregate-rating-jld", i.type = "application/ld+json", o = {
                    "@context": "http://schema.org",
                    "@type": "Product",
                    "@id": t,
                    name: n,
                    aggregateRating: {
                        "@type": "AggregateRating",
                        ratingValue: s,
                        reviewCount: a
                    }
                }, jdgmSettings.enable_json_ld_products && (o.review = c), i.text = JSON.stringify(o), document.querySelector("body").appendChild(i)) : void 0
            }, jdgm.addProductJldIdToExistingSchema = function() {
                var e, t, n, r, i, o;
                for (o = document.querySelectorAll("script[type='application/ld+json']"), t = 0; t < o.length;) o[t].innerHTML.indexOf('"@type": "Product"') >= 0 && (i = o[t], -1 === i.innerHTML.indexOf("@id") && (e = window.location.pathname + "#product", n = '     "@id" : "' + e + '",\n', r = '"@type": "Product",\n', i.innerHTML = i.innerHTML.replace(r, r + n))), t++
            }, jdgm.addJldToAllReviewsPage = function(t) {
                var n, r, i, o, a;
                if (!l()) return n = e(".jdgm-all-reviews__header"), i = n.data("number-of-reviews"), o = n.data("average-rating"), t || (t = e('meta[property="og:site_name"]').attr("content") || e("title").text()), a = jdgmSettings.allReviewsPageStructuredDataType || "Product", i > 0 && o && t ? (r = document.createElement("script"), r.className = "jdgm-aggregate-rating-jld", r.type = "application/ld+json", r.text = JSON.stringify({
                    "@context": "http://schema.org",
                    "@type": a,
                    name: t,
                    aggregateRating: {
                        "@type": "AggregateRating",
                        ratingValue: o,
                        reviewCount: i
                    }
                }), document.querySelector("body").appendChild(r)) : void 0
            }, t = function() {
                return e.map(e('script[type="application/ld+json"]'), function(e) {
                    var t;
                    try {
                        return JSON.parse(e.innerHTML)
                    } catch (n) {
                        return t = n, {}
                    }
                })
            }, n = t(), jdgm.productJldUriId = function() {
                var e, t, l, c;
                return c = n.filter(o).filter(i), t = c[0], t ? t["@id"] : (e = a(n.filter(r).map(s)), (l = e[0]) ? l["@id"] : void 0)
            }, c = function(e) {
                return e.aggregateRating && "Product" === e["@type"]
            }, r = function(e) {
                return !!e["@graph"]
            }, o = function(e) {
                return "Product" === e["@type"]
            }, i = function(e) {
                return !!e["@id"]
            }, s = function(e) {
                return function(e) {
                    return e["@graph"].filter(o).filter(i)
                }
            }(this), a = function(e) {
                return [].concat.apply([], e)
            }, l = function() {
                return n.filter(c).length > 0
            }, d = function() {
                return 0 === e('[itemtype="http://schema.org/Product"]').length || 0 === e('[itemtype="https://schema.org/Product"]').length
            }, h = e(".jdgm-rich-snippet.jdgm--old").length <= 0, jdgmSettings.jldDisable || jdgmSettings.disable_json_ld || !h || (u = jdgmSettings.jldCanonicalUrl || jdgm.productJldUriId(), jdgm.addProductJld(u, jdgmSettings.jldProductTitle), p = window.location.href, p.indexOf("/products/") >= 0 && jdgm.addProductJldIdToExistingSchema()), jdgmSettings.add_json_ld_snippet_on_all_reviews_page && h && jdgm.addJldToAllReviewsPage(jdgmSettings.shopName), jdgmSettings.removeMicrodata || jdgmSettings.remove_microdata_snippet || d() ? e(".jdgm-rich-snippet").remove() : void 0
        })
    }.call(this),
    function() {
        jdgm.$(function(e) {
            var t, n, r, i, o, a, s, l, c, u;
            return t = 18e5, n = "jdgm_rs_referral", r = ["ref", "utm_source", "utm_campaign", "utm_medium"], i = r.slice().concat(["jdgm_referral_location", "jdgm_referral_influencer", "jdgm_referral_manager", "jdgm_ref_id"]), u = function() {
                var e, r, i, s;
                if (e = Date.now(), "judgeme-review-site" === jdgm.$.urlParam("utm_campaign")) s = c(e), i = localStorage.getItem(n), i && i.length > 0 && (r = JSON.parse(i).trackingAllowed), s.trackingAllowed = a(r);
                else {
                    if (s = localStorage.getItem(n), !(s && s.length > 0)) return;
                    s = JSON.parse(s), l() && o(s), s.hasExpired || (s.hasExpired = e - s.lastActivityAt > t), s.trackingAllowed = a(s.trackingAllowed)
                }
                return s.lastActivityAt = e, localStorage.setItem(n, JSON.stringify(s))
            }, l = function() {
                var e;
                return e = 0 === document.referrer.indexOf(jdgm.HTTPS_HOST) || 0 === document.referrer.indexOf(window.location.origin), document.referrer.length > 0 && !e || s()
            }, c = function(t) {
                var n;
                return n = {
                    createdAt: t,
                    referralData: {
                        landing: window.location.pathname,
                        referrer: document.referrer
                    },
                    otherReferralCount: 0,
                    lastOtherReferralData: {},
                    hasExpired: !1,
                    id: (1e16 * Math.random()).toString(36).substring(0, 10)
                }, e.each(i, function(e, t) {
                    return n.referralData[t] = jdgm.$.urlParam(t)
                }), n
            }, o = function(t) {
                return t.otherReferralCount = (parseInt(t.otherReferralCount) || 0) + 1, t.lastOtherReferralData = {
                    landing: window.location.pathname,
                    referrer: document.referrer
                }, e.each(r, function(e, n) {
                    return t.lastOtherReferralData[n] = jdgm.$.urlParam(n)
                })
            }, s = function() {
                var t;
                return t = !1, e.each(r, function(e, n) {
                    return jdgm.$.urlParam(n) ? t = !0 : void 0
                }), t
            }, a = function(e) {
                try {
                    return window.Shopify && window.Shopify.customerPrivacy ? window.Shopify.customerPrivacy.analyticsProcessingAllowed() : e
                } catch (t) {
                    return console.log("Something went wrong with Shopify.customerPrivacy API"), e
                }
            }, u()
        })
    }.call(this);