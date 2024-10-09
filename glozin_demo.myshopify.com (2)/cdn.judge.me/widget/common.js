(function() {
    this.JST || (this.JST = {}), this.JST["templates/shopify_v2/widget_actions_wrapper"] = function(obj) {
        var __p = [];
        with(obj || {}) __p.push('<div class="jdgm-widget-actions-wrapper">\n  '), jdgmSettings.widget_add_search_bar && addSearch && __p.push('\n    <input type="text" name=\'', jdgmSettings.widget_search_bar_placeholder, "' class=\"jdgm-review-search\" placeholder='", jdgmSettings.widget_search_bar_placeholder, "' aria-label='", jdgmSettings.widget_search_bar_placeholder, "'>\n  "), __p.push("\n</div>\n");
        return __p.join("")
    }
}).call(this),
    function() {
        this.JST || (this.JST = {}), this.JST["templates/shopify_v2/sort_dropdown"] = function(obj) {
            var __p = [];
            with(obj || {}) __p.push("<div class='jdgm-sort-dropdown-wrapper'>\n  <select class='jdgm-sort-dropdown' aria-label='Sort dropdown'>\n    <option value='most-recent'>", jdgmSettings.widget_sorting_most_recent_text, "</option>\n    <option value='highest-rating'>", jdgmSettings.widget_sorting_highest_rating_text, "</option>\n    <option value='lowest-rating'>", jdgmSettings.widget_sorting_lowest_rating_text, "</option>\n    <option value='with-pictures'>", jdgmSettings.widget_sorting_with_pictures_text, "</option>\n    <option value='pictures-first'>", jdgmSettings.widget_sorting_pictures_first_text, "</option>\n    <option value='videos-first'>", jdgmSettings.widget_sorting_videos_first_text || "Videos first", "</option>\n    <option value='most-helpful'>", jdgmSettings.widget_sorting_most_helpful_text, "</option>\n  </select><span class='jdgm-sort-dropdown-arrow'></span>\n</div>\n");
            return __p.join("")
        }
    }.call(this),
    function() {
        this.JST || (this.JST = {}), this.JST["templates/shopify_v2/setting_css_style"] = function(obj) {
            var __p = [];
            with(obj || {}) __p.push("<style>\n.jdgm-rev__icon::after { content: '\\e001'; }\n.jdgm-rev__icon::after,\n.jdgm-rev__buyer-badge {\n  display: inline-block;\n  color: ", verifiedBadgeOpts.color, ";\n  background-color: ", verifiedBadgeOpts.bgColor, ";\n}\n.jdgm-rev__buyer-badge:before { content: '", verifiedBadgeOpts.text, "'; }\n\n.jdgm-rev-widg__title { visibility: unset; }\n.jdgm-rev-widg__summary-text { visibility: unset; }\n.jdgm-prev-badge__text { visibility: unset; }\n\n.jdgm-quest__body:before { content: '", questionLabel, ":'; }\n.jdgm-ans__body:before { content: '", answerLabel, ":'; }\n\n.jdgm-star { color: ", linkColor, "; }\n\n.jdgm-ask-question-btn,\n.jdgm-write-rev-link,\n.jdgm-all-reviews-rating-wrapper,\n.jdgm-carousel-wrapper a,\n.jdgm-rev__prod-link,\n.jdgm-all-reviews-text a,\n.jdgm-carousel-item__product,\n.jdgm-carousel-number-of-reviews,\n.jdgm-revs-tab__url { color: ", buttonColor, "; }\n\na.jdgm-write-rev-link {\n    color: ", writeReviewTextColor, ";\n    background-color: ", writeReviewBgColor, ";\n}\n\n/* Legacy selectors, to keep old CSS specificities */\n.jdgm-preview-badge .jdgm-star { color: ", linkColor, "; }\n.jdgm-histogram .jdgm-star { color: ", linkColor, "; }\n</style>\n");
            return __p.join("")
        }
    }.call(this),
    function() {
        this.JST || (this.JST = {}), this.JST["templates/shopify_v2/header"] = function(obj) {
            var __p = [];
            with(obj || {}) __p.push("<div class='jdgm-rev-widg jdgm--js' data-number-of-reviews='0' data-average-rating='0.00'>\n  <div class='jdgm-rev-widg__header'>\n    <h2 class='jdgm-rev-widg__title'>Customer Reviews</h2>\n    <div class='jdgm-rev-widg__summary'>\n      <div class='jdgm-rev-widg__summary-stars'></div>\n      <div class='jdgm-rev-widg__summary-text'>No reviews yet</div>\n    </div>\n    <a href='#' class='jdgm-write-rev-link'>Write a review</a>\n  </div>\n</div>\n");
            return __p.join("")
        }
    }.call(this),
    function() {
        this.JST || (this.JST = {}), this.JST["templates/shopify_v2/badge"] = function(obj) {
            var __p = [];
            with(obj || {}) __p.push("<div class='jdgm-prev-badge jdgm--js' data-average-rating='", averageRating, "' data-number-of-reviews='", reviewCount, "'>\n  <span class='jdgm-prev-badge__stars' data-score='", averageRating, "'></span>\n  <span class='jdgm-prev-badge__text'>", previewBadgeText, "</span>\n</div>\n");
            return __p.join("")
        }
    }.call(this),
    function() {
        this.JST || (this.JST = {}), this.JST["templates/shopify_v2/review_keywords"] = function(obj) {
            var __p = [];
            with(obj || {}) {
                __p.push("<div class='jdgm-keywords'>\n  ");
                for (var i = 0; i < keywordData.length; i++) {
                    __p.push("\n    ");
                    var _item = keywordData[i];
                    __p.push('\n    <span role="button" class="jdgm-chip" data-text="', ("" + _item.content).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"), '">\n      ', ("" + _item.content).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"), "\n      "), _item.quantity > 1 && __p.push("\n        (", ("" + _item.quantity).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"), ")\n      "), __p.push("\n    </span>\n  ")
                }
                __p.push("\n</div>\n")
            }
            return __p.join("")
        }
    }.call(this),
    function() {
        this.JST || (this.JST = {}), this.JST["templates/shopify_v3/custom_forms_avg_responses"] = function(obj) {
            var __p = [];
            with(obj || {}) __p.push(""), cf_answers && (__p.push("\n  "), jdgm.asyncEach(cf_answers, function(e) {
                if (__p.push("\n    <div class='jdgm-rev__cf-ans'>\n      <b class='jdgm-rev__cf-ans__title'>", ("" + e.title).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"), ":</b>\n      "), "scale" == e.question_type) {
                    __p.push("\n        <div class='jdgm-cf-bars-wrapper' data-value='", ("" + e.value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"), "'>\n          <div class='jdgm-rev__scale-range'>\n            ");
                    var t = e.value.split("/")[0];
                    __p.push("\n            ");
                    var n = e.value.split("/")[1];
                    __p.push("\n            ");
                    for (var r = 1; n >= r; r++) __p.push("\n              "), t >= r ? __p.push('\n                <a href="#" rel="nofollow" class="jdgm-cf-bar jdgm--filled"></a>\n              ') : __p.push('\n                <a href="#" rel="nofollow" class="jdgm-cf-bar jdgm--empty"></a>\n              '), __p.push("\n            ");
                    __p.push("\n          </div>\n          <div class='jdgm-rev__scale-first'>", ("" + e.lower_value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"), "</div>\n          <div class='jdgm-rev__scale-last'>", ("" + e.top_value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"), "</div>\n        </div>\n      ")
                } else "slider" == e.question_type && __p.push("\n        <div class='jdgm-rev__slider-wrapper'>\n          <div class='jdgm-rev__slider-range'>\n            <div class='jdgm-rev__slider-pointer' style='left: ", ("" + e.value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"), "%'></div>\n          </div>\n          <div class='jdgm-rev__slider-first'>", ("" + e.lower_value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"), "</div>\n          <div class='jdgm-rev__slider-last'>", ("" + e.top_value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"), "</div>\n        </div>\n      ");
                __p.push("\n    </div>\n  ")
            }), __p.push("\n")), __p.push("\n");
            return __p.join("")
        }
    }.call(this),
    function() {
        this.JST || (this.JST = {}), this.JST["templates/shopify_v3/custom_forms_filters"] = function(obj) {
            var __p = [];
            with(obj || {}) __p.push(""), cf_questions && (__p.push("\n  "), jdgm.asyncEach(cf_questions, function(e) {
                __p.push("\n    <div class='jdgm-rev__cf-ans' data-question-id='", ("" + e.id).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"), "'>\n      <b class='jdgm-rev__cf-ans__title'>", ("" + e.title).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"), ":</b>\n      <div class='jdgm-rev__cf-options-wrapper'>\n        ");
                for (var t = 0; t < e.cf_options.length; t++) __p.push('\n          <span role="button" class="jdgm-rev__cf-option jdgm-chip">\n            ', ("" + e.cf_options[t]).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"), "\n          </span>\n        ");
                __p.push("\n      </div>\n    </div>\n  ")
            }), __p.push('\n  <div class="jdgm-custom-forms-filters__button jdgm-chip" role="button" aria-expanded="false">', ("" + jdgmSettings.widget_custom_forms_filter_button).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"), "</div>\n")), __p.push("\n");
            return __p.join("")
        }
    }.call(this), jdgm.$(function(e) {
        jdgm.templates = jdgm.templates || {}, jdgm.templates.header = JST["templates/shopify_v2/header"], jdgm.templates.badge = JST["templates/shopify_v2/badge"], jdgm.templates.reviewKeywords = JST["templates/shopify_v2/review_keywords"], jdgm.templates.customFormsAvgResponses = JST["templates/shopify_v3/custom_forms_avg_responses"], jdgm.templates.customFormsFilters = JST["templates/shopify_v3/custom_forms_filters"], jdgm.templates.emptyBadge = function() {
            return jdgm.templates.badge({
                averageRating: "0.00",
                reviewCount: 0,
                previewBadgeText: "No reviews"
            })
        }
    }),
    function() {
        jdgm.$(function(e) {
            var t, n, r, i, a;
            return a = jdgm._safeRun, r = function() {
                return {}
            }, t = e(), i = function() {
                var t, n;
                return t = new Date, n = "" + t.getFullYear() + "-" + t.getMonth() + "-" + t.getDate() + " ", e("<i><span class='jdgm-rev__timestamp' data-content='" + n + "'></span></i>")
            }, n = function(t) {
                var n, r;
                return n = new Date, r = "" + n.getMonth() + "/" + n.getDate() + "/" + n.getFullYear(), e("<i><span class='jdgm-carousel-item__timestamp' data-time='" + r + "'></span></i>")
            }, a(function() {
                return e(jdgm._htmlFor("sort_dropdown")).dotdotdot({
                    height: 0
                }), jdgm._htmlFor("header"), jdgm.templates.emptyBadge()
            }), a(function() {
                return jdgm.visibleRevWidget(), jdgm.visibleAllReviewsPage(), jdgm.eachRevWidgets(r), jdgm.eachPrevBadges(r), jdgm.ajaxParamsFor(t), jdgm.setupLazyLoadPicture(t), jdgm.changeToRefreshBtn(t), jdgm.renderAskQuestionBtn(t)
            }), a(function() {
                return jdgm.initializeWidgets(e("<i><i class='jdgm-review-widget'></i></i>"))
            }), a(function() {
                return jdgm.pluralizeLongText("review/reviews", 1), jdgm.customizeTimestamp(i(), "mm/dd/yyyy"), jdgm.customizeCarouselTimestamp(n(), "timestamp"), jdgm._renderSubtab([{}]), jdgm._renderAllRevsSubtab(0, 0), jdgm.openSubtab(t), jdgm._fixAuthorNameIfFromShop(t), jdgm._customizeReviewWidget(t)
            }), a(function() {
                return jdgm.batchRenderBadges(t), jdgm.batchRenderBadgesWithCallback(t, void 0), jdgm.renderJsBadge(0, 0, "")
            })
        })
    }.call(this),
    function() {
        var e, t, n, r;
        e = jdgm.$, jdgm.forceShowHideRevWidget = function(e, t) {
            return e.toggle(t), e.find(".jdgm-rev-widg").toggle(t)
        }, jdgm.visibleRevWidget = function() {
            return e(".jdgm-review-widget:visible").filter(t)
        }, t = function() {
            return "hidden" !== e(this).css("visibility")
        }, jdgm.visibleAllReviewsPage = function() {
            return e(".jdgm-all-reviews-widget:visible").filter(t)
        }, jdgm.getWidgetPrefix = function(e) {
            var t, n;
            return n = {
                "jdgm-review-widget": "jdgm-rev-widg",
                "jdgm-revs-tab": "jdgm-revs-tab",
                "jdgm-all-reviews-widget": "jdgm-all-reviews"
            }, t = null, Object.keys(n).forEach(function(r) {
                return e.hasClass(r) ? t = n[r] : void 0
            }), t
        }, jdgm.eachWidgetWithReviews = function(t) {
            return jdgm.asyncEach(jdgm.caches.$widgetWithReviews, function(n) {
                var r;
                return r = e(n), r.data("unique-string") || (r.data("unique-string", "" + Date.now().toString(36) + "-" + jdgm.random(1e6).toString(36)), r.data("class-prefix", jdgm.getWidgetPrefix(r))), t(r)
            })
        }, jdgm.eachRevWidgets = function(t) {
            return jdgm.asyncEach(jdgm.caches.$revWidgets, function(n) {
                return t(e(n))
            })
        }, jdgm.eachPrevBadges = function(t) {
            return jdgm.asyncEach(jdgm.caches.$prevBadges, function(n) {
                return t(e(n))
            })
        }, jdgm.ajaxParamsFor = function(t) {
            var i, a, o;
            return a = (o = t.find(".jdgm-rev-widg").data("updated-at")) ? Date.parse(o) / 1e3 : Date.now() / 1e3 / jdgmSettings.ajaxCdnCacheTtl, i = e.extend(jdgm.shopParams(), {
                per_page: t.find(".jdgm-paginate").data("per-page"),
                product_id: t.data("id"),
                sort_by: t.data("sort-by"),
                sort_dir: t.data("sort-dir"),
                filter_rating: t.data("filter-rating"),
                search: t.find(".jdgm-review-search").val() || null,
                keyword: n(t),
                cf_answer: r(t),
                ts: jdgmSettings.enable_ajax_cdn_cache && parseInt(a) || null
            }), jdgm.compactHash(i)
        }, r = function(e) {
            var t, n;
            return t = e.find(".jdgm-rev__cf-option.jdgm-chip.active"), 0 === t.length ? null : (n = t.closest(".jdgm-rev__cf-ans").data("question-id"), [n, t.text().trim()])
        }, n = function(e) {
            var t;
            return t = e.find(".jdgm-keywords .jdgm-chip.active"), 0 === t.length ? null : t.data("text") || t.text().trim().replace(/\(\d+\)/, "").trim()
        }, jdgm.changeToRefreshBtn = function(e) {
            var t;
            return e.find(".jdgm-ask-question-btn").hide(), t = e.find(".jdgm-write-rev-link"), t.text(jdgmSettings.widget_refresh_page_text).off().on("click", function() {
                return window.location = window.location.pathname, !1
            })
        }, jdgm.renderAskQuestionBtn = function(t) {
            var n;
            if (!(t.find(".jdgm-ask-question-btn").length > 0)) return n = e("<a style='display: none' href='#' class='jdgm-ask-question-btn' role='button' aria-expanded='false'>" + jdgmSettings.widget_open_question_form_text + "</a>"), n.insertAfter(t.find(".jdgm-write-rev-link"))
        }, jdgm.initializeWidgets = function(t) {
            return null == t && (t = e("body")), t.find(".jdgm-review-widget:not(." + jdgm.DONE_SETUP_WIDGET_CLASS + ")").each(function(t, n) {
                var r;
                return r = e(n), jdgm._addEmptyWidgetHeader(r), jdgm._customizeReviewWidget(r), jdgm.setupMediaGallery(r), jdgm._renderAndSetupReviewForm(r), jdgm._setupQuestionsForm(r), jdgm._setupLoadReviewsEventsFor(r), jdgm._setupFormsSubmit(r), r.addClass(jdgm.DONE_SETUP_WIDGET_CLASS)
            }), jdgm.customizeReviews()
        }, jdgm.$(function(e) {
            return jdgm.caches = {
                $widgetWithReviews: e(".jdgm-review-widget, .jdgm-revs-tab, .jdgm-all-reviews-widget"),
                $revWidgets: e(".jdgm-review-widget"),
                $prevBadges: e(".jdgm-preview-badge")
            }
        })
    }.call(this),
    function() {
        var e, t, n, r, i, a, o, s, d, l, u, c, g, m, p, f, _;
        e = jdgm.$, t = "[^\\s}{/]+", g = "[^<]/", _ = /_/g, m = new RegExp(t + g), c = new RegExp(g + t), n = new RegExp(t + g + t), l = 864e5, p = new Date, f = new Date(p.getUTCFullYear(), p.getUTCMonth(), p.getUTCDate()), jdgm.pluralizeLongText = function(e, t) {
            var r, i;
            return e.match(n) ? (i = t > 1 ? c : m, r = e.match(i)[0].replace(_, " ").replace("/", ""), t > 1 && (r = r.substr(1)), e.replace(n, r)) : e
        }, jdgm.customizeTimestamp = function(t, n) {
            return jdgm.asyncEach(t.find(".jdgm-rev__timestamp"), function(t) {
                var r, i, a;
                return r = e(t), (a = r.data("content")) ? (i = s(a, n), r.text(i).removeClass("jdgm-spinner")) : void 0
            })
        }, jdgm.customizeCarouselTimestamp = function(t, n, r) {
            return null == n && (n = null), null == r && (r = ".jdgm-carousel-item__timestamp"), jdgm.asyncEach(t.find(r), function(t) {
                var i, a, o;
                return i = e(t), (o = ".jdgm-full-rev__timestamp" === r ? i.data("content") : i.data("time")) ? (o = o.split("/"), o = o[2] + "-" + o[0] + "-" + o[1], a = s(o, n), i.text(a).removeClass("jdgm-spinner")) : void 0
            })
        }, jdgm._customizeBadgeTexts = function(e, t, n) {
            return t ? i(e, t, n) : e.text(jdgmSettings.badge_no_review_text)
        }, i = function(e, t, n) {
            var r, i;
            return (i = jdgmSettings.badge_n_reviews_text) ? (r = i.replace("{{ n }}", t), r = jdgm.pluralizeLongText(r, t), r = r.replace("{{ average_rating }}", n), r = r.replace("{{ average_rating_1_decimal }}", parseFloat(n).toPrecision(2)), e.html(r)) : void 0
        }, o = function(e, t) {
            return new Date(e, t + 1, 0).getDate()
        }, d = function(e, t) {
            var n;
            return n = 12 * (t.getFullYear() - e.getFullYear()), n += t.getMonth() - e.getMonth() - 1, t.getDate() >= e.getDate() && (n += 1), 0 >= n ? 0 : n
        }, u = function(e) {
            var t, n, r, i, a, s, u, c;
            return c = e.substr(0, 10).split("-"), s = new Date(c[0], c[1] - 1, c[2]), n = Math.floor((f - s) / l), i = Math.floor(n / 7), r = d(s, f), a = Math.floor(r / 12), t = o(f.getFullYear(), f.getMonth()), u = 0 === n ? jdgmSettings.widget_today_text : 7 > n ? 1 === n ? jdgmSettings.widget_yesterday_text : n + " days ago" : t >= n ? 1 === i ? "1 week ago" : i + " weeks ago" : 12 > r ? 1 === r ? "1 month ago" : r + " months ago" : 1 === a ? "1 year ago" : a + " years ago", "0 months ago" === u && (u = "1 month ago"), u
        }, r = function(e) {
            return e.indexOf("year") >= 0 ? e = a(e, "years") : e.indexOf("month") >= 0 ? e = a(e, "months") : e.indexOf("week") >= 0 ? e = a(e, "weeks") : e.indexOf("days") >= 0 && (e = a(e, "days")), e
        }, a = function(e, t) {
            var n, r;
            return r = e.match(/\d+/)[0], (n = jdgmSettings["widget_" + t + "_text"]) ? (e = n.replace("{{ n }}", r), jdgm.pluralizeLongText(e, r)) : e
        }, s = function(e, t) {
            var n;
            return n = e.substr(0, 10).split("-"), t || (t = jdgmSettings.review_date_format), t && "timestamp" !== t ? t.replace("yyyy", n[0].toString()).replace("yy", n[0].toString().substr(2, 3)).replace("mm", n[1].toString()).replace("dd", n[2].toString()) : r(u(e))
        }
    }.call(this),
    function() {
        var e, t, n;
        e = jdgm.$, t = function(t, n, r, i) {
            var a;
            return a = t.data("url") || n.data("url"), jdgmSettings.enable_ajax_cdn_cache && (a = a.replace(jdgm.HTTPS_HOST, jdgm.CDN_HOST.slice(0, -1))), e.ajax({
                url: a,
                data: r,
                success: function(e) {
                    return i && i(e), n.find('[data-tabname="reviews"] .jdgm-subtab__count').text(e.total_count), n.find(".jdgm-paginate__page[data-page='" + r.page + "']").focus()
                }
            })
        }, n = function(n, r, i, a) {
            var o, s;
            return null == a && (a = e.noop), r && r(), o = n.find(".jdgm-paginate"), s = e.extend(jdgm.shopParams(), a()), jdgm.triggerEvent("beforeFetchingReviews"), t(o, n, s, i)
        }, jdgm.setupPaginate = function(n, r, i, a) {
            return null == a && (a = e.noop), n.on("click", ".jdgm-paginate__page:not(.jdgm-curt), .jdgm-paginate__load-more", function(o) {
                var s, d, l;
                return r && r(), s = e(this), d = s.closest(".jdgm-paginate"), l = e.extend(jdgm.shopParams(), {
                    page: s.data("page"),
                    per_page: d.data("per-page")
                }, a()), jdgm.triggerEvent("beforeFetchingReviews"), t(d, n, l, i)
            })
        }, jdgm.setupSearch = function(t, r, i, a) {
            return null == a && (a = e.noop), t.on("change", ".jdgm-review-search", function(e) {
                return t.trigger("jdgm.searchReviews", [{
                    resetFilterKeyword: !0
                }])
            }), t.on("jdgm.searchReviews", function(e, o) {
                return o && Object.keys(o).length > 0 && jdgm._resetFilterAndSearch(t, o), n(t, r, i, a)
            }), t.on("jdgm.filterReviewsByCustomForms", function(e) {
                return n(t, r, i, a)
            })
        }, jdgm.fetchSingleReview = function(n, r, i, a, o) {
            var s, d;
            return null == o && (o = e.noop), i && i(), s = n.find(".jdgm-paginate"), d = e.extend(jdgm.shopParams(), {
                page: 1,
                per_page: s.data("per-page"),
                review_uuid: r
            }, o()), jdgm.triggerEvent("beforeFetchingReviews", {
                single: !0
            }), t(s, n, d, a)
        }, jdgm._appendPaginateResultToBody = function(t, n, r, i, a) {
            var o, s, d, l, u;
            return d = e(t.html), l = d.find(r), s = n.find(i), s.append(l), jdgm.triggerEvent("doneAppendMoreReviews", {
                $reviews: l,
                $widget: n
            }), o = s.siblings(".jdgm-paginate"), u = d.filter(".jdgm-paginate"), 0 === u.length && (u = d.find(".jdgm-paginate")), u.text().length <= 0 ? o.find(".jdgm-paginate__load-more").remove() : (o.html(u.html()), o.show()), a ? a(n) : void 0
        }
    }.call(this),
    function() {
        var e, t, n, r, i, a, o, s, d;
        e = jdgm.$, t = "jdgm-histogram__row--selected", n = {
            "most-recent": {
                by: "created_at",
                dir: "desc"
            },
            "highest-rating": {
                by: "rating",
                dir: "desc"
            },
            "lowest-rating": {
                by: "rating",
                dir: "asc"
            },
            "with-pictures": {
                by: "with_pictures",
                dir: null
            },
            "pictures-first": {
                by: "pictures_first",
                dir: null
            },
            "videos-first": {
                by: "videos_first",
                dir: null
            },
            "most-helpful": {
                by: "most_helpful",
                dir: null
            },
            "verified-only": {
                by: "verified_only",
                dir: null
            }
        }, jdgm.filterReviewsByRating = function(e, n) {
            var r;
            return n.find("." + t).removeClass(t), r = n.find(".jdgm-histogram__row[data-rating=" + e + "]"), r.addClass(t), n.data("filter-rating", e), n.data("before-callback")(n), jdgm._resetFilterAndSearch(n, {
                resetFilterKeyword: !0
            }), a(n)
        }, jdgm._setupSortAndFilterFor = function(t, n, r, i) {
            return null == i && (i = e.noop), t.data("before-callback", n), t.data("success-callback", r), t.data("extra-params-getter", i), s(t), o(t), setTimeout(function() {
                return d(t)
            })
        }, s = function(t) {
            return t.find(".jdgm-histogram__row").on("click", function(n) {
                return jdgm.filterReviewsByRating(e(this).data("rating"), t)
            })
        }, d = function(e) {
            var t;
            return e.find(".jdgm-rev-widg__sort-wrapper").html(JST["templates/shopify_v2/sort_dropdown"]()), t = e.find(".jdgm-rev-widg__sort-wrapper .jdgm-sort-dropdown"), t.on("change", function(r) {
                var i;
                return i = n[t.val()], e.data("sort-by", i.by), e.data("sort-dir", i.dir), e.data("before-callback")(e), a(e)
            }), i(t)
        }, i = function(e) {
            var t;
            return t = jdgmSettings.default_sort_method, e.val(t)
        }, o = function(e) {
            return e.find(".jdgm-histogram__clear-filter").text(jdgmSettings.widget_rating_filter_see_all_text)
        }, r = function(e) {
            return e.find(".jdgm-histogram__clear-filter").toggle(!!e.data("filter-rating"))
        }, a = function(t) {
            var n, i;
            return i = t.find(".jdgm-paginate").data("url") || t.data("url"), jdgmSettings.enable_ajax_cdn_cache && (i = i.replace(jdgm.HTTPS_HOST, jdgm.CDN_HOST.slice(0, -1))), n = e.extend(jdgm.ajaxParamsFor(t), t.data("extra-params-getter")()), jdgm.triggerEvent("beforeFetchingReviews"), e.ajax({
                url: i,
                data: n,
                success: function(e) {
                    return r(t), t.find('[data-tabname="reviews"] .jdgm-subtab__count').text(e.total_count), t.data("success-callback")(e, t)
                }
            })
        }
    }.call(this),
    function() {
        jdgm.$(function(e) {
            var t, n, r, i;
            return jdgm._widgetActionsWrapper = function(e) {
                return null == e && (e = !0), jdgm._htmlFor("widget_actions_wrapper", {
                    addSearch: e
                })
            }, jdgm._widgetSearchRow = function(t, n) {
                var i, a;
                return null == n && (n = !1), i = e("<div class='jdgm-row-search'></div>"), a = "", jdgmSettings.widget_add_search_bar && (a += r()), n && (a += jdgm._widgetReviewKeywords(t)), 0 === a.length ? "" : i.append(a)
            }, jdgm._widgetReviewKeywords = function(e) {
                return jdgmSettings.widget_show_review_keywords ? (i(e), n(e)) : ""
            }, jdgm._resetFilterAndSearch = function(e, t) {
                return null == t && (t = {}), t && (t.resetAll || t.resetSearch) && e.find(".jdgm-review-search").val(null), t && (t.resetAll || t.resetFilterRating) && (e.data("filter-rating", null), e.find(".jdgm-histogram__row").removeClass("jdgm-histogram__row--selected"), e.find(".jdgm-histogram__clear-filter").hide()), t && (t.resetAll || t.resetFilterKeyword) ? e.find(".jdgm-keywords .jdgm-chip").removeClass("active") : void 0
            }, r = function() {
                var t, n;
                return t = e("<input type='text' />").attr({
                    "class": "jdgm-review-search",
                    name: jdgmSettings.widget_search_bar_placeholder,
                    placeholder: jdgmSettings.widget_search_bar_placeholder,
                    "aria-label": jdgmSettings.widget_search_bar_placeholder
                }), n = e("<div class='jdgm-review-search-wrapper'></div>"), n.append(t), n[0].outerHTML
            }, n = function(e) {
                var t, n;
                return t = e.find(".jdgm-keyword-data"), 0 === t.length ? "" : (n = jdgm.templates.reviewKeywords({
                    keywordData: t.data("json")
                }), t.remove(), n)
            }, i = function(t) {
                return t.on("click", ".jdgm-keywords .jdgm-chip", function(n) {
                    var r;
                    return n.preventDefault(), n.stopPropagation(), r = e(n.currentTarget).addClass("current"), t.find(".jdgm-keywords .jdgm-chip:not(.current)").removeClass("active"), r.toggleClass("active").removeClass("current"), t.trigger("jdgm.searchReviews", [{
                        resetSearch: !0,
                        resetFilterRating: !0
                    }])
                })
            }, t = e(), jdgm._safeRun(function() {
                return jdgm._widgetActionsWrapper(!0), jdgm._widgetSearchRow(), jdgm._widgetReviewKeywords(t)
            }), jdgm._safeRun(function() {
                return r(), n(t), i(t)
            })
        })
    }.call(this),
    function() {
        jdgm.$(function(e) {
            var t;
            if (!jdgm.__hasSetUpSubtab) return jdgm.__hasSetUpSubtab = !0, jdgm._renderSubtab = function(n) {
                var r;
                return r = "", e.each(n, function(e, n) {
                    return r += t(n.key, n.title, n.count, 0 === e)
                }), "<div class='jdgm-subtab'>" + r + "</div>"
            }, jdgm._renderAllRevsSubtab = function(t, n) {
                var r;
                return r = [{
                    key: "product-reviews",
                    title: jdgmSettings.widget_product_reviews_subtab_text,
                    count: n
                }, {
                    key: "shop-reviews",
                    title: jdgmSettings.widget_shop_reviews_subtab_text,
                    count: t
                }], "shop-reviews" === jdgmSettings.widget_first_sub_tab && (r = r.reverse()), e(jdgm._renderSubtab(r))
            }, jdgm.openSubtab = function(e, t, n) {
                var r;
                return null == t && (t = "reviews"), null == n && (n = null), e.find(".jdgm-subtab__name.jdgm--active").removeClass("jdgm--active"), e.find(".jdgm-subtab__name[data-tabname=" + t + "]").addClass("jdgm--active"), n || (n = e.find(".jdgm-subtab")), r = n.data("open-tab-callback"), r ? r(t, e) : void 0
            }, t = function(e, t, n, r) {
                var i;
                return i = r && "jdgm--active" || "", "<span class='jdgm-subtab__name " + i + "' data-tabname='" + e + "' tabindex='0'>" + t + " (<span class='jdgm-subtab__count'>" + n + "</span>)</span>"
            }, e("body").on("click", ".jdgm-subtab__name", function(t) {
                var n, r, i, a;
                return r = e(this), n = r.closest(".jdgm-subtab"), a = r.data("tabname"), i = n.closest(".jdgm-widget"), "questions" === a && i.find(".jdgm-row-actions, .jdgm-sort-dropdown-wrapper").hide(), "reviews" === a && i.find(".jdgm-row-actions, .jdgm-sort-dropdown-wrapper").show(), jdgm.openSubtab(i, r.data("tabname"), n)
            })
        })
    }.call(this),
    function() {
        jdgm.$(function(e) {
            var t;
            return jdgm._templateVerifiedByJudgeme = function(e, t) {
                return null == e && (e = 0), null == t && (t = 0), ['<div class="jdgm-verified-by-judgeme">', '<div class="jdgm-verified-wrapper">', '<div class="jdgm-rating">', "<span class='jdgm-rating__stars' data-score='" + e + "' />", "<span class='jdgm-rating__count' data-value='" + t + "' />", "</div>", '<div class="jdgm-verified-by">', '<span class="jdgm-verified-by__text"></span>', '<span class="jdgm-verified-by__image"></span>', "</div>", "</div>", "</div>"].join("")
            }, jdgm._renderVerifiedByJudgeme = function(e, n, r, i) {
                var a, o, s;
                return null == n && (n = !1), null == r && (r = !0), null == i && (i = !0), r ? (jdgm.buildStarsFor(e.find(".jdgm-rating__stars")), a = e.find(".jdgm-rating__count"), a.text(jdgmSettings.widget_number_of_reviews_text.replace("{{ number_of_reviews }}", a.data("value")))) : e.find(".jdgm-rating").remove(), jdgmSettings.can_be_branded ? (s = e.find(".jdgm-verified-by__text"), e.hasClass("jdgm-verified-badge") || s.text(jdgmSettings.widget_verified_by_text), o = e.find(".jdgm-verified-by__image"), o.length > 0 && (o.data("url", n ? "logos/logo-judgeme_mono.svg" : "logos/logo-judgeme.svg"), o.data("alt", "Judge.me Logo"), jdgm._loadSvg(o, jdgm.JM_PUBLIC_IMAGE_URL, jdgm.JM_PUBLIC_IMAGE_URL, n), i) ? t(e, n) : void 0) : e.find(".jdgm-verified-by").remove()
            }, t = function(e, t) {
                var n, r, i, a;
                return a = e.data("widget-selector"), i = e.data("color"), r = "", t && (r = ["." + a + " .jdgm-verified-wrapper .jdgm-svg__mono svg path { fill: " + i + "; }", "." + a + " .jdgm-verified-wrapper .jdgm-svg__mono svg circle { fill: " + i + "; }"].join("")), n = ["<style>", ".jdgm-verified-by-judgeme { text-align: center; }", "." + a + " .jdgm-verified-wrapper { color: " + i + "; }", r, "</style>"].join(""), e.before(n)
            }
        })
    }.call(this),
    function() {
        jdgm.$(function(e) {
            var t, n, r, i, a, o, s, d, l, u;
            return r = location.origin + "/products/", t = "jdgm-widget jdgm-preview-badge jdgm--from-js", a = "jdgm--waiting-for-batch-done", n = new DOMParser, i = 3e3, jdgm.batchRenderBadges = function(t, n) {
                var r;
                return t && e.isArray(t) ? (r = e.map(t, function(e, t) {
                    return u(e.productHandle, e.badgePlaceholder, n)
                }), e.when.apply(this, r).then(o(t), function() {
                    return setTimeout(o(t), i)
                })) : void 0
            }, jdgm.batchRenderBadgesWithCallback = function(e, t) {
                return jdgm.batchRenderBadges(e, t)
            }, jdgm.renderJsBadge = function(n, r, i) {
                var a, o;
                return o = l(n, r), a = e(i), a.addClass(t).html(o), jdgm.buildStarsFor(a.find(".jdgm-prev-badge__stars"), n), a
            }, u = function(t, n, i) {
                var o;
                return o = jdgmSettings.productUrlBuilder && jdgmSettings.productUrlBuilder({
                    handle: t
                }) || r + t, e.ajax({
                    url: o,
                    success: function(r) {
                        var o;
                        return d(r, n, t, i), o = e(n), o.find(".jdgm-prev-badge").addClass(a)
                    }
                })
            }, d = function(t, r, i, a) {
                var o, s, d, l;
                return d = n.parseFromString(t, "text/html"), o = e(d).find(".jdgm-rev-widg"), s = o.data("average-rating") || 0, l = o.data("number-of-reviews") || 0, a ? a(s, l, r, i) : jdgm.renderJsBadge(s, l, r), jdgmSettings.renderBadge ? jdgmSettings.renderBadge(s, l, r, i) : void 0
            }, o = function(t) {
                return function() {
                    return jdgm.customizeBadges(), jdgm.asyncEach(t, function(t) {
                        return e(t.badgePlaceholder).find(".jdgm-prev-badge").removeClass(a)
                    })
                }
            }, l = function(e, t) {
                var n;
                return 0 === t ? jdgm.templates.emptyBadge() : (n = s(t), jdgm.templates.badge({
                    averageRating: e,
                    reviewCount: t,
                    previewBadgeText: n
                }))
            }, s = function(e) {
                var t;
                return t = 1 === e && " review" || " reviews", e + t
            }
        })
    }.call(this),
    function() {
        jdgm.$(function(e) {
            var t, n, r, i, a, o, s;
            return t = ['.jdgm-widget.jdgm-review-widget[data-auto-install="true"]', '.jdgm-carousel-wrapper[data-auto-install="true"]', '.jdgm-widget.jdgm-ugc-media-wrapper[data-auto-install="true"]'], r = {
                review_widget: {
                    all: ".jdgm-widget.jdgm-review-widget",
                    app_block_auto_install: "[id^=shopify-block-judgeme_review_widget_] > .jdgm-widget.jdgm-review-widget"
                },
                preview_badge: {
                    all: ".jdgm-widget.jdgm-preview-badge",
                    app_block_auto_install: "[id^=shopify-block-judgeme_preview_badge_product_page_] > .jdgm-widget.jdgm-preview-badge"
                }
            }, n = ["shopify"], i = function(t, n) {
                var i;
                return (i = e("" + r[t].app_block_auto_install + "[data-id=" + n + "]").length) > 0 && i < e("" + r[t].all + "[data-id=" + n + "]").length
            }, a = function() {
                return jdgm.asyncEach(Object.keys(r), function(t) {
                    var n, a;
                    return a = e(r[t].all).data("id"), n = !window.BOOMR || "Impulse" !== window.BOOMR.themeName, n && a && i(t, a) ? e("" + r[t].app_block_auto_install + "[data-id=" + a + "]").closest(".shopify-app-block").remove() : void 0
                })
            }, o = function() {
                return jdgm.asyncEach(t, function(t) {
                    var n, r, i;
                    return r = e(t), r.length > 0 ? (i = t.replace('[data-auto-install="true"]', ""), n = e(i), r.length === n.length ? e(t + ":not(:first)").remove() : r.remove()) : void 0
                })
            }, s = function() {
                return jdgm.asyncEach(t, function(t) {
                    return e(t).attr("data-auto-install", "processed")
                })
            }, n.indexOf(jdgmSettings.platform) >= 0 ? (o(), a(), s()) : void 0
        })
    }.call(this),
    function() {
        jdgm.$(function(e) {
            var t, n, r, i, a, o;
            return n = {
                "left-of-reviewer-name": "",
                "right-of-timestamp": "jdgm-buyer-badge--right-of-timestamp",
                "top-right-of-review": "jdgm-buyer-badge--top-right",
                removed: "jdgm-buyer-badge--removed"
            }, o = {
                bgColor: jdgmSettings.verified_badge_bg_color || jdgmSettings.linkColor,
                color: jdgmSettings.verified_badge_text_color || jdgmSettings.bgColor,
                text: jdgmSettings.verified_badge_text,
                placement: jdgmSettings.verified_badge_placement
            }, t = e("body"), a = function() {
                var e;
                return e = n[o.placement], t.addClass(e)
            }, r = function() {
                return "transparent" === jdgmSettings.verified_badge_bg_color ? t.addClass("jdgm-buyer-badge--text-only") : void 0
            }, i = function() {
                var e, n;
                return n = jdgmSettings.widget_star_color || jdgmSettings.linkColor, jdgm.isVersion3 && (n = jdgmSettings.widget_star_color || jdgmSettings.widget_primary_color), e = JST["templates/shopify_v2/setting_css_style"]({
                    verifiedBadgeOpts: o,
                    linkColor: n,
                    bgColor: jdgmSettings.bgColor,
                    answerLabel: jdgmSettings.widget_answer_label_text,
                    questionLabel: jdgmSettings.widget_question_label_text,
                    buttonColor: jdgmSettings.buttonColor,
                    writeReviewBgColor: jdgmSettings.widget_write_review_bg_color || jdgmSettings.bgColor,
                    writeReviewTextColor: jdgmSettings.widget_write_review_text_color || jdgmSettings.buttonColor
                }), t.append(e)
            }, a(), r(), i()
        })
    }.call(this),
    function() {
        jdgm.$(function(e) {
            return jdgm._addEmptyPreviewBadge = function(e) {
                var t;
                return t = e.find(".judgeme-badge").length > 0, e.find(".jdgm-prev-badge__stars").length <= 0 && !t ? (e.append(jdgm.templates.emptyBadge()), jdgm.buildStarsFor(e.find(".jdgm-prev-badge__stars"), 0)) : void 0
            }, jdgm._addEmptyWidgetHeader = function(e) {
                var t;
                return t = e.find(".judgeme-reviews").length > 0, e.find(".jdgm-rev-widg").length <= 0 && !t ? (e.append(jdgm.templates.header()), jdgm.buildStarsFor(e.find(".jdgm-rev-widg__summary-stars"), 0)) : void 0
            }, jdgm.eachRevWidgets(jdgm._addEmptyWidgetHeader), jdgm.eachPrevBadges(jdgm._addEmptyPreviewBadge)
        })
    }.call(this),
    function() {
        jdgm.$(function(e) {
            var t, n, r, i;
            return t = function() {
                return jdgmSettings.disable_web_reviews ? jdgm.caches.$revWidgets.each(function(t, n) {
                    var r, i;
                    return r = e(n), i = r.find(".jdgm-rev-widg").data("number-of-reviews"), r.find(".jdgm-rev-widg .jdgm-rev-widg__summary").toggle(i > 0), jdgmSettings.enable_question_anwser ? void 0 : jdgm.forceShowHideRevWidget(r, i > 0)
                }) : void 0
            }, r = function() {
                return jdgmSettings.hide_badge_preview_if_no_reviews ? jdgm.eachPrevBadges(function(e) {
                    var t;
                    return t = e.find(".jdgm-prev-badge").data("number-of-reviews"), e.toggle(t > 0)
                }) : void 0
            }, i = function() {
                return "show" === e.urlParam("judgeme_badge") ? jdgm.eachPrevBadges(function(e) {
                    var t;
                    return t = e.find(".jdgm-prev-badge"), e.show(), t.length > 0 ? t[0].style.setProperty("display", "block", "important") : void 0
                }) : void 0
            }, n = function() {
                return e(".judgeme-badge, .judgeme-badge + span").hide()
            }, t(), r(), i(), n()
        })
    }.call(this),
    function() {
        jdgm.$(function(e) {
            var t, n, r, i, a, o, s, d, l, u, c, g, m, p, f, _, v, h, j, w, b, y, x;
            return l = ".jdgm-rev__social", u = function() {
                return "\u2605"
            }, n = "https://www.facebook.com/dialog/share?", t = {
                app_id: "141224836283514",
                display: "popup"
            }, s = "https://judge.me//facebook/reviews/", m = "https://twitter.com/intent/tweet?", c = {
                via: "judgedotme"
            }, g = 140, o = 500, r = "https://plus.google.com/share?", a = "https://pinterest.com/pin/create/button/?", i = "https://www.linkedin.com/shareArticle?", d = {
                Facebook: "jdgm-rev__share-fb",
                Twitter: "jdgm-rev__share-twitter",
                Pinterest: "jdgm-rev__share-pinterest",
                LinkedIn: "jdgm-rev__share-linkedin"
            }, jdgm.shareReviewFor = function(e, t) {
                var n, r;
                return r = w(e), n = jdgm._shareUrlFor(r, t), window.open(n, null, "height=500,width=600,status=yes,toolbar=no,menubar=no,location=no")
            }, jdgm._shareUrlFor = function(e, t) {
                switch (t) {
                    case "Google":
                        return _(e);
                    case "Twitter":
                        return x(e);
                    case "Instagram":
                        return instagramShareUrlFor(e);
                    case "LinkedIn":
                        return v(e);
                    case "Pinterest":
                        return h(e);
                    default:
                        return f(e)
                }
            }, jdgm.renderShareBtns = function(t) {
                var n;
                return n = e("<div class='jdgm-rev__social-inner'></div>"), j(n), e.each(t, function(t, r) {
                    var i, a;
                    return i = e(r), a = i.find(".jdgm-rev__source"), "shop-app" === a.attr("data-source") || i.find(".jdgm-rev__social-inner").length > 0 ? void 0 : i.find(".jdgm-rev__social").append(n.clone())
                })
            }, j = function(t) {
                return e.each(jdgmSettings.social_share_options_order.split(","), function(e, n) {
                    return t.append(b(n, d[n]))
                })
            }, b = function(e, t) {
                return "<span class='jdgm-rev__share-btn " + t + "' title='" + e + "' data-social-media='" + e + "' tabindex='0'></span>"
            }, w = function(t) {
                var n, r, i, a, o, s;
                return a = t.find(".jdgm-rev__rating").data("score") || 5, s = t.find(".jdgm-rev__title").text(), n = t.find(".jdgm-rev__body"), r = jdgmSettings.widget_review_max_height ? n.trigger("originalContent.dot")[0].innerText : n.text(), o = y(a), i = t.find(".jdgm-rev__pic-img").first().prop("src") || e("head").find('meta[property="og:image"]').prop("content"), {
                    rating: a,
                    title: s,
                    body: r,
                    starText: o,
                    textToShare: "" + o + " " + s + " " + r,
                    uuid: t.data("review-id"),
                    media: i
                }
            }, y = function(t) {
                return e.map(new Array(t), u).join("")
            }, p = function() {
                return window.location.origin + window.location.pathname
            }, f = function(r) {
                return n + e.param(e.extend({}, t, {
                    redirect_uri: s + r.uuid,
                    href: p(),
                    quote: r.textToShare
                }))
            }, x = function(t) {
                var n, r;
                return r = jdgm.truncate(t.textToShare, g), n = e.extend({}, c, {
                    url: p(),
                    text: r
                }), m + e.param(n)
            }, _ = function(t) {
                return r + e.param({
                    url: p()
                })
            }, h = function(t) {
                var n;
                return n = {
                    url: p(),
                    description: jdgm.truncate(t.textToShare, o),
                    media: t.media
                }, a + e.param(n)
            }, v = function(t) {
                var n;
                return n = {
                    mini: !0,
                    url: p(),
                    title: t.title,
                    summary: t.textToShare,
                    source: "Judge.me"
                }, i + e.param(n)
            }, e("body").on("click", ".jdgm-rev__share-btn", function(t) {
                var n, r, i;
                return r = e(t.currentTarget), n = r.closest(".jdgm-rev"), i = r.data("social-media"), jdgm.shareReviewFor(n, i)
            })
        })
    }.call(this),
    function() {
        jdgm.$(function(e) {
            var t, n, r, i, a, o, s, d, l, u, c, g, m, p, f, _, v;
            return t = ".jdgm-rev__votes", r = "submitted", a = "up", i = "down", n = "jdgm_thumb_votes", jdgm.createVote = function(t, n) {
                return e.ajax({
                    url: "https://judge.me/thumbs",
                    method: "POST",
                    data: {
                        review_uuid: d(t),
                        thumb_type: n
                    },
                    success: function() {
                        return _(t) ? void 0 : o(t, n)
                    }
                })
            }, jdgm.renderThumbBtns = function(n) {
                return e.each(n, function(n, r) {
                    var o, s, d, u;
                    return o = e(r), o.find(".jdgm-rev__votes-inner").length > 0 ? void 0 : (u = f(o, a), s = f(o, i), d = l(u, s), o.find(t).append(d))
                }), g()
            }, d = function(e) {
                return e.data("review-id")
            }, l = function(e, t) {
                return ["<div class='jdgm-rev__votes-inner'>", m("up", "jdgm-rev_thumb-up"), p(e, "jdgm-rev_thump-up-count"), m("down", "jdgm-rev_thumb-down"), p(t, "jdgm-rev_thump-down-count"), "</div>"].join("")
            }, m = function(e, t) {
                return "<span class='jdgm-rev__thumb-btn " + t + "' title='" + e + "' data-thumb-vote='" + e + "' tabindex='0'></span>"
            }, p = function(e, t) {
                return "<span class='jdgm-rev__thumb-count " + t + "' data-thumb-count='" + e + "'>" + e + "</span>"
            }, f = function(e, t) {
                var n, r, i;
                return r = e.data("thumb-" + t + "-count") || 0, i = u(s(e)[t]), n = Math.max(r, i), s(e)[t] = n, n
            }, s = function(e) {
                var t, n;
                return (t = v())[n = d(e)] || (t[n] = {
                    up: 0,
                    down: 0
                })
            }, _ = function(e) {
                return s(e)[r]
            }, u = function(e, t) {
                return null == t && (t = 0), (parseInt(e) || 0) + t
            }, o = function(e, t) {
                return s(e)[t] += 1, s(e)[r] = !0, e.find(".jdgm-rev_thump-" + t + "-count").html(s(e)[t]), g()
            }, v = function() {
                return jdgm._existingThumbVotes || (jdgm._existingThumbVotes = c())
            }, c = function() {
                var e, t;
                if (e = localStorage.getItem(n), !e || e.length <= 0) return {};
                try {
                    return t = JSON.parse(e)
                } catch (r) {
                    return console.log("Judge.me could not process thumbs data. Reseting thumbs data"), {}
                }
            }, g = function() {
                return localStorage.setItem(n, JSON.stringify(v()))
            }, e("body").on("click", ".jdgm-rev__thumb-btn", function(t) {
                var n, r, i;
                return r = e(t.currentTarget), n = r.closest(".jdgm-rev"), i = r.data("thumb-vote"), _(n) ? void 0 : jdgm.createVote(n, i)
            })
        })
    }.call(this),
    function() {
        jdgm.$(function(e) {
            var t, n, r, i, a, o, s;
            return n = "data", r = {
                cFsAvgResponses: ".jdgm-custom-forms-avg-responses",
                cFsFilters: ".jdgm-custom-forms-filters"
            }, jdgm._setupCustomForms = function(e) {
                return i(e), a(e)
            }, i = function(e) {
                var t, n;
                return t = e.find(r.cFsAvgResponses), 0 !== t.length ? (n = s(t, r.cFsAvgResponses), n ? t.append(jdgm.templates.customFormsAvgResponses({
                    cf_answers: n
                })) : t.remove()) : void 0
            }, a = function(e) {
                var t, n, i, a;
                return t = e.find(r.cFsFilters), 0 !== t.length ? (a = s(t, r.cFsFilters)) ? (t.append(jdgm.templates.customFormsFilters({
                    cf_questions: a
                })), n = t.find("" + r.cFsFilters + "__button.jdgm-chip"), i = e.find(".jdgm-row-actions"), i.append(t.detach()), i.append(n)) : t.remove() : void 0
            }, s = function(e, t) {
                var r, i;
                return r = e.find("" + t + "-" + n), i = r.data("json"), r.remove(), i
            }, o = function() {
                return e(document).on("click", "" + r.cFsFilters + "__button.jdgm-chip", function(t) {
                    var n, i, a;
                    return n = e(t.currentTarget), a = n.closest(".jdgm-review-widget"), "carousel" === jdgmSettings.widget_theme && (a = n.closest(".jdgm-widget__popup-content.jdgm-rev-widg__popup-content")), i = a.find(r.cFsFilters), "false" === n.attr("aria-expanded") ? (i.slideDown(), n.attr("aria-expanded", !0)) : "true" === n.attr("aria-expanded") ? (i.slideUp(), n.attr("aria-expanded", !1)) : void 0
                }), e(document).on("click", ".jdgm-rev__cf-option.jdgm-chip", function(t) {
                    var n, r;
                    return t.preventDefault(), t.stopPropagation(), n = e(t.currentTarget).addClass("current"), r = n.closest(".jdgm-review-widget"), "carousel" === jdgmSettings.widget_theme && (r = n.closest(".jdgm-widget__popup-content.jdgm-rev-widg__popup-content")), r.find(".jdgm-rev__cf-option.jdgm-chip:not(.current)").removeClass("active"), n.toggleClass("active").removeClass("current"), r.trigger("jdgm.filterReviewsByCustomForms")
                })
            }, o(), t = e(), jdgm._safeRun(function() {
                return jdgm._setupCustomForms(t), i(t), a(t), s(t, "")
            })
        })
    }.call(this),
    function() {
        jdgm.$(function(e) {
            var t, n, r, i, a, o, s, d;
            return t = {}, jdgm._customizeReviewWidget = function(e) {
                return s(e, "updateNumberOfReviews"), s(e, "customizeWidgetTitle"), s(e, "customizeSummary"), s(e, "customizeHistogram"), s(e, "customizeWidgetActions"), s(e, "customizeRowStars"), s(e, "customizeWidgetSort"), s(e, "customizePagination"), s(e, "customizeFooter"), s(e, "setupCFsFiltersAndAvgResponses")
            }, s = function(e, n) {
                var r;
                return t[n] ? t[n].call(this, e) : (r = {
                    "jdgm-review-widget": "_inREV",
                    "jdgm-revs-tab": "_inFRT",
                    "jdgm-all-reviews-widget": "_inARP"
                }, Object.keys(r).forEach(function(t) {
                    return e.hasClass(t) ? n += r[t] : void 0
                }), t[n] ? t[n].call(this, e) : void 0)
            }, t.updateNumberOfReviews_inREV = function(e) {
                var t;
                return t = e.find(".jdgm-rev-widg"), e.data("number-of-reviews", t.data("number-of-reviews")), e.data("number-of-questions", t.data("number-of-questions"))
            }, t.updateNumberOfReviews_inFRT = function(e) {
                return d(e, ".jdgm-revs-tab__content-header")
            }, t.updateNumberOfReviews_inARP = function(e) {
                return d(e, ".jdgm-all-reviews__header")
            }, t.customizeWidgetTitle_inREV = function(e) {
                var t, n;
                return n = e.data("product-title"), t = jdgmSettings.widget_title.replace("{{ product_name }}", n), e.find(".jdgm-rev-widg__title").text(t)
            }, t.customizeWidgetTitle_inFRT = function(e) {
                var t;
                return t = e.find(".jdgm-revs-tab__title + a, .jdgm-revs-tab__url"), jdgmSettings.floating_tab_title && e.find(".jdgm-revs-tab__title").text(jdgmSettings.floating_tab_title), jdgmSettings.floating_tab_url && jdgmSettings.floating_tab_url_enabled ? (e.find(".jdgm-revs-tab__title + a, .jdgm-revs-tab__url").attr("href", jdgmSettings.floating_tab_url), t.attr("href", jdgmSettings.floating_tab_url)) : t.removeAttr("href")
            }, t.customizeSummary_inREV = function(e) {
                return a(e, "jdgm-rev-widg", ".jdgm-rev-widg")
            }, t.customizeSummary_inFRT = function(e) {
                var t, n, r, i, a, o;
                return n = e.find(".jdgm-revs-tab__url"), o = e.data("number-of-product-reviews") + e.data("number-of-shop-reviews"), t = e.find(".jdgm-all-reviews-rating"), r = t.data("score"), i = jdgmSettings.widget_summary_average_rating_text.replace("{{ average_rating }}", r), t.append("<span class='jdgm-link'>" + i + "</span>"), t.detach(), a = jdgmSettings.widget_summary_text.replace("{{ average_rating }}", r).replace("{{ number_of_reviews }}", o), a = a.replace("{{ average_rating_1_decimal }}", parseFloat(r).toPrecision(2)), a = jdgm.pluralizeLongText(a, o), n.html("<span>" + a + "</span>"), n.prepend(t)
            }, t.customizeSummary_inARP = function(e) {
                return e.find(".jdgm-all-reviews__summary").addClass("jdgm-rev-widg__summary"), a(e, "jdgm-all-reviews", ".jdgm-all-reviews__header")
            }, t.customizeHistogram_inREV = function(e) {
                var t;
                return jdgm.isVersion3 ? (t = r(e), e.find(".jdgm-rev-widg__summary").after(t.detach())) : void 0
            }, t.customizeHistogram_inFRT = function(e) {
                var t;
                return jdgm.isVersion3 ? (t = r(e), t.wrap('<div class="jdgm-histogram-wrapper"></div>')) : void 0
            }, t.customizeHistogram_inARP = function(e) {
                var t;
                return jdgm.isVersion3 ? (t = r(e), e.find(".jdgm-all-reviews__summary").after(t.detach())) : void 0
            }, t.customizeWidgetActions_inREV = function(e) {
                var t;
                return t = e.data("number-of-reviews"), o(e, "jdgm-rev-widg", t, !0)
            }, t.customizeWidgetActions_inFRT = function(t) {
                var n, r, i;
                return n = t.find(".jdgm-revs-tab__content-header"), jdgm.isVersion3 ? (r = e('<div class="jdgm-row-stars"></div>'), i = e('<div class="jdgm-revs-tab__actions"></div>'), i.append(n.find(".jdgm-write-rev-link").detach()), r.append(n.find(".jdgm-histogram-wrapper").detach()), r.append(i), n.prepend(r), n.find(".jdgm-row-stars").after(jdgm._widgetSearchRow(t))) : (n.prepend(jdgm._widgetActionsWrapper()), n.prepend(n.find(".jdgm-review-search").detach()), n.find(".jdgm-widget-actions-wrapper").append(n.find(".jdgm-write-rev-link").detach()))
            }, t.customizeWidgetActions_inARP = function(e) {
                var t;
                return t = e.data("number-of-product-reviews") + e.data("number-of-shop-reviews"), o(e, "jdgm-all-reviews", t)
            }, t.customizeRowStars = function(e) {
                var t;
                return t = e.find(".jdgm-row-stars"), jdgmSettings.widget_show_histogram || !jdgmSettings.disable_web_reviews || jdgmSettings.enable_question_anwser || (e.hasClass("jdgm-revs-tab") ? t.remove() : t.addClass("jdgm-row-stars--only-summary")), jdgmSettings.widget_show_histogram || t.find(".jdgm-histogram").remove(), jdgmSettings.disable_web_reviews && !jdgmSettings.enable_question_anwser ? t.find(".jdgm-widget-actions-wrapper").remove() : void 0
            }, t.customizeWidgetSort = function(t) {
                var n, r, i;
                return jdgm.isVersion3 ? (n = e('<div class="jdgm-row-actions"></div>'), n.append(t.find(".jdgm-rev-widg__sort-wrapper").detach()), i = "." + t.data("class-prefix") + "__body", "jdgm-revs-tab" === t.data("class-prefix") && (i = ".jdgm-revs-tab__content-body"), "leex" === jdgmSettings.widget_theme ? (r = e('<div class="jdgm-rev-widg__actions"></div>'), r.append(n), t.find(i).before(r)) : t.find(i).before(n)) : void 0
            }, t.setupCFsFiltersAndAvgResponses_inREV = function(e) {
                return jdgm.isVersion3 ? jdgm._setupCustomForms(e) : void 0
            }, t.customizePagination_inREV = function(e) {
                var t;
                return t = e.find(".jdgm-rev-widg").data("number-of-reviews"), i(e, t)
            }, t.customizePagination_inFRT = function(e) {
                var t;
                return t = e.find(".jdgm-revs-tab__content-header").data("data-number-of-product-reviews"), i(e, t)
            }, t.customizeFooter_inREV = function(e) {
                var t;
                return jdgmSettings.widget_show_review_information ? (t = '<div class="jdgm-collected-link"><a class="jdgm-link" href="https://judge.me/authenticity" target="_blank">' + jdgmSettings.how_reviews_are_collected + "</a></div>", e.find(".jdgm-rev-widg__body").append(t)) : void 0
            }, i = function(e, t) {
                var n;
                return n = e.find(".jdgm-paginate"), n.length > 0 && jdgm.isWidgetLoadMore() && 0 === n.find(".jdgm-paginate__load-more").length && t > e.find(".jdgm-rev").length ? n.html("<a class='jdgm-btn jdgm-btn--solid jdgm-paginate__load-more' data-page='2' role='button'>" + jdgmSettings.widget_load_more_text + "</a>") : void 0
            }, o = function(e, t, n, r) {
                var i;
                return null == r && (r = !1), jdgm.isVersion3 ? (e.find("." + t + "__summary").wrap('<div class="jdgm-row-stars"></div>'), i = e.find(".jdgm-row-stars"), i.append(e.find(".jdgm-histogram").detach()), i.append(jdgm._widgetActionsWrapper(!1)), e.find("." + t + "__header").append(jdgm._widgetSearchRow(e, !0))) : (e.find("." + t + "__summary").after(jdgm._widgetActionsWrapper(n > 0)), e.find(".jdgm-rev-widg__sort-wrapper").before(jdgm._widgetReviewKeywords(e))), e.find(".jdgm-widget-actions-wrapper").append(e.find(".jdgm-write-rev-link").detach()), r && jdgmSettings.enable_question_anwser ? jdgm.renderAskQuestionBtn(e) : void 0
            }, a = function(t, r, i) {
                var a, o, s, d, l, u, c, g, m, p;
                return t.find(".jdgm-rev-widg__summary").wrapInner('<div class="jdgm-rev-widg__summary-inner"></div>'), c = t.find(i).data("number-of-reviews"), o = t.find(i).data("average-rating"), a = t.find("." + r + "__summary-text"), c ? (u = jdgmSettings.widget_summary_text.replace("{{ average_rating }}", o).replace("{{ number_of_reviews }}", c), u = u.replace("{{ average_rating_1_decimal }}", parseFloat(o).toPrecision(2)), u = jdgm.pluralizeLongText(u, c), u = e("<i>" + u + "</i>").text(), a.text(u), jdgm.isVersion3 ? (s = jdgmSettings.widget_summary_average_rating_text.replace("{{ average_rating }}", o), d = s, jdgmSettings.can_be_branded && (d = "<a class='jdgm-link' target='_blank' href='" + jdgmSettings.branding_url + "'>" + s + "</a>"), p = "<span class='" + r + "__summary-average'>" + d + "</span>", t.find("." + r + "__summary-stars").append(p)) : (m = window.location.pathname.split("/products/"), jdgmSettings.can_be_branded && jdgmSettings.shop_use_review_site && 2 === m.length && (g = m[1] ? "/products/" + m[1] : "", l = "<a class='jdgm-rev__prod-link' target='_blank' href='" + (jdgmSettings.branding_url + g) + "'>" + u + "</a>", a.html(l))), n(t, r)) : a.text(jdgmSettings.widget_no_review_text)
            }, n = function(e, t) {
                var n;
                return jdgmSettings.can_be_branded && jdgmSettings.widget_show_collected_by_judgeme ? (n = "<a class='jdgm-link' target='_blank' href='https://judge.me/trust'>" + jdgmSettings.widget_collected_by_judgeme_text + "</a>", e.find("." + t + "__summary-text").after(n)) : void 0
            }, r = function(t) {
                var n;
                return n = t.find(".jdgm-histogram"), n.find(".jdgm-histogram__percentage").remove(), jdgm.asyncEach(n.find(".jdgm-histogram__frequency"), function(t) {
                    var n, r;
                    return n = e(t), r = n.text().replace(/\(|\)/g, ""), n.text(r)
                }), n
            }, d = function(e, t) {
                var n;
                return n = e.find(t), e.data("number-of-product-reviews", n.data("number-of-product-reviews")), e.data("number-of-shop-reviews", n.data("number-of-shop-reviews")), e.data("number-of-reviews", n.data("number-of-product-reviews") + n.data("number-of-shop-reviews"))
            }, jdgm.eachWidgetWithReviews(function(e) {
                return e.hasClass(jdgm.DONE_SETUP_WIDGET_CLASS) || jdgm._customizeReviewWidget(e), e.addClass(jdgm.DONE_SETUP_WIDGET_CLASS)
            })
        })
    }.call(this),
    function() {
        jdgm.$(function(e) {
            var t, n, r, i, a, o, s, d, l, u, c, g, m, p, f, _, v, h, j, w, b, y, x, S, T, C, k, F, R, E, q, A, P;
            return a = "<b class='jdgm-rev__replier'></b>", r = "jdgm-rev__body-read-more", i = "." + r, t = "1528", s = "https://judgeme-public-images.imgix.net/judgeme/flags", o = "https://judgeme-public-images.imgix.net/judgeme/verified-badge-v2", n = {
                "": "fullname",
                all_initials: "all-initials",
                last_initial: "last-initial"
            }, jdgm.customizeReviews = function() {
                var t;
                return t = e(".jdgm-rev:not(." + jdgm.DONE_SETUP_CLASS + ")"), f(t), _(t), T(t), jdgmSettings.show_product_url_for_grouped_product && v(t), jdgmSettings.widget_review_max_height && jdgm.setupLimitingReviewHeight(t), E(t.find(".jdgm-rev__avatar-image")), R(t), F(t), A(t), jdgm.isVersion3 && p(t), g(t), j(t), jdgm.customizeTimestamp(t), jdgmSettings.widget_social_share && jdgm.renderShareBtns(t), jdgmSettings.widget_thumb && jdgm.renderThumbBtns(t), jdgm.triggerEvent("doneCustomizeReviews", {
                    $reviews: t
                }), t.addClass(jdgm.DONE_SETUP_CLASS)
            }, jdgm.customizeQuestions = function() {
                var t;
                return t = e(".jdgm-quest:not(." + jdgm.DONE_SETUP_CLASS + ")"), _(t), jdgmSettings.widget_review_max_height && jdgm.setupLimitingReviewHeight(t), E(t.find(".jdgm-rev__avatar-image")), R(t), jdgm.isVersion3 && p(t), jdgm.customizeTimestamp(t), jdgm.customizeAnswers(), jdgm.triggerEvent("doneCustomizeQuestions", {
                    $questions: t
                }), t.addClass(jdgm.DONE_SETUP_CLASS)
            }, jdgm.customizeAnswers = function() {
                var t;
                return t = e(".jdgm-ans:not(." + jdgm.DONE_SETUP_CLASS + ")"), _(t), jdgmSettings.widget_review_max_height && jdgm.setupLimitingReviewHeight(t), jdgm.customizeTimestamp(t), jdgm.isVersion3 && f(t), t.addClass(jdgm.DONE_SETUP_CLASS)
            }, jdgm._fixAuthorNameIfFromShop = function(e) {
                var t, n;
                return n = e.find(".jdgm-quest[data-from-shop=true] .jdgm-quest__asker"), n.find(".jdgm-rev__author").html(a), S(n), t = e.find(".jdgm-ans[data-from-shop=true] .jdgm-ans__answerer"), t.find(".jdgm-rev__author").html(a), S(t)
            }, f = function(e) {
                var t;
                return t = jdgmSettings.widget_replied_text.replace("{{ shop_name }}", a), e.find(".jdgm-rev__replier-wrapper, .jdgm-ans__answerer").html(t)
            }, _ = function(t) {
                var r, i;
                return i = n[jdgmSettings.widget_reviewer_name_as_initial] || "fullname", r = t.find(".jdgm-rev__author-wrapper"), r.each(function(t, n) {
                    var r;
                    return r = e(n), c(r, i), jdgmSettings.widget_review_location_show ? u(r) : void 0
                }), S(r), k(t), C(r)
            }, c = function(e, t) {
                var n;
                return (n = e.data(t)) ? e.find(".jdgm-rev__author").text(n) : void 0
            }, u = function(e) {
                var t, n, r, i, a, o, s;
                return n = e.data("location-city"), i = e.data("location-country-code"), r = e.data("location-country"), o = e.data("location-state-code"), a = e.data("location-state"), n && r && i ? (t = {
                    city_only: "(" + n + ")",
                    full_country_state_name: "(" + ["" + n, "" + a, "" + r].filter(Boolean).join(", ") + ")",
                    country_state_iso_code: "(" + ["" + n, "" + o, "" + i].filter(Boolean).join(", ") + ")",
                    full_country_name: "(" + n + ", " + r + ")",
                    country_iso_code: "(" + n + ", " + i + ")",
                    country_only: "(" + r + ")",
                    country_code_only: "(" + i + ")",
                    city_state_only: "(" + ["" + n, "" + a].filter(Boolean).join(", ") + ")",
                    city_state_code_only: "(" + ["" + n, "" + o].filter(Boolean).join(", ") + ")",
                    state_only: "(" + a + ")",
                    state_country_only: "(" + ["" + a, "" + r].filter(Boolean).join(", ") + ")",
                    state_iso_code: "(" + o + ")"
                }, s = t[jdgmSettings.widget_location_format], e.find(".jdgm-rev__location").text(s)) : void 0
            }, C = function(e) {
                return e.removeAttr("data-location-city"), e.removeAttr("data-location-country-code"), e.removeAttr("data-location-country"), e.removeAttr("data-location-state-code"), e.removeAttr("data-location-state")
            }, S = function(e) {
                return e.removeAttr("data-fullname"), e.removeAttr("data-all-initials"), e.removeAttr("data-last-initial")
            }, k = function(e) {
                var t;
                return t = jdgmSettings.widget_reviewer_name_as_initial, "" !== t && e.find(".jdgm-author-fullname").remove(), "all_initials" !== t && e.find(".jdgm-author-all-initials").remove(), "last_initial" !== t ? e.find(".jdgm-author-last-initial").remove() : void 0
            }, p = function(t) {
                var n, r;
                return r = {
                    "jdgm-row-extra": ["jdgm-rev__location", "jdgm-rev__location-country-flag-img"],
                    "jdgm-row-profile": ["jdgm-rev__pinned", "jdgm-rev__icon", "jdgm-rev__author-wrapper", "jdgm-rev__buyer-badge-wrapper"],
                    "jdgm-row-rating": ["jdgm-rev__rating", "jdgm-rev__timestamp"],
                    "jdgm-row-product": ["jdgm-rev__prod-info-wrapper"]
                }, n = ".jdgm-rev__pics, .jdgm-rev__vids, .jdgm-rev__buyer-badge-wrapper, .jdgm-rev__reply", jdgm.asyncEach(t, function(t) {
                    var i, a, o, s;
                    return o = e(t), l(o.find(".jdgm-rev__header"), r), o.find(".jdgm-rev__icon:not(.jdgm--loading, .jdgm-rev__avatar)").text(""), a = o.find(".jdgm-rev__location"), s = a.text().replace(/\(|\)/g, ""), a.text(s), jdgm.asyncEach(o.find(n), function(t) {
                        var n;
                        return n = e(t), 0 === n.children().length && "" === n.text().trim() ? n.remove() : void 0
                    }), o.find(".jdgm-rev__author-wrapper").append(o.find(".jdgm-rev__buyer-badge-wrapper").detach()), "align" === jdgmSettings.widget_theme && x(o), i = o.find(".jdgm-rev__custom-form"), i.length > 0 && o.find(".jdgm-rev__body").after(i.detach()), m(o)
                })
            }, x = function(e) {
                var t;
                return t = e.find(".jdgm-row-rating"), e.find(".jdgm-rev__content").prepend(t), e.find(".jdgm-rev__author-wrapper").append(e.find(".jdgm-row-extra"))
            }, g = function(t) {
                return jdgm.asyncEach(t, function(t) {
                    var n, r, i, a, o, s;
                    if (o = e(t), a = o.find(".jdgm-rev__custom-form"), a.length > 0 && a.children().length > 0) {
                        if (!jdgm.isVersion3) return a.find(".jdgm-rev__slider-wrapper").closest(".jdgm-rev__cf-ans").remove(), a.find(".jdgm-rev__scale-first").remove(), a.find(".jdgm-rev__scale-last").remove();
                        if (a.append('<div class="jdgm-rev__cf-ans--type jdgm-rev__cf-ans--text-type"></div>'), a.append('<div class="jdgm-rev__cf-ans--type jdgm-rev__cf-ans--graphic-type"></div>'), i = a.find(".jdgm-rev__cf-ans--text-type"), r = a.find(".jdgm-rev__cf-ans--graphic-type"), n = a.find(".jdgm-rev__cf-ans"), jdgm.asyncEach(n, function(t) {
                                var n;
                                return n = e(t), n.find(".jdgm-cf-bars-wrapper").length > 0 || n.find(".jdgm-rev__slider-wrapper").length > 0 ? (n.find(".jdgm-cf-bars-wrapper .jdgm-cf-bar").wrapAll('<div class="jdgm-rev__scale-range"></div>'), r.append(t)) : i.append(t)
                            }), "horizontal" === jdgmSettings.custom_forms_style && a.addClass("custom-form--horizontal-style"), "align" === jdgmSettings.widget_theme && (a.find(".jdgm-rev__cf-ans--text-type").wrap('<div class="jdgm-rev__header-custom-form"></div>'), s = a.find(".jdgm-rev__header-custom-form"), o.find(".jdgm-rev__header .jdgm-row-profile").append(s), "horizontal" === jdgmSettings.custom_forms_style)) return s.addClass("custom-form--horizontal-style")
                    }
                })
            }, m = function(e) {
                return e.find(".jdgm-rev_all-rev-page-picture-separator").remove(), jdgm.setupLazyLoadPicture(e.find(".jdgm-rev__product-picture .jdgm-rev__pic-img"))
            }, l = function(t, n) {
                return Object.keys(n).forEach(function(r) {
                    var i;
                    return i = e("<div>", {
                        "class": r
                    }), n[r].forEach(function(e) {
                        var n;
                        return n = t.find("." + e).detach(), i.append(n)
                    }), t.prepend(i)
                })
            }, jdgm.setupLimitingReviewHeight = function(e, t) {
                var n;
                return null == t && (t = !1), n = e.find(".jdgm-rev__body:not(.jdgm-rev__body--no-readmore):not(.is-truncated), .jdgm-ans__body"), setTimeout(function() {
                    return d(n), w(n, t)
                }, 0)
            }, d = function(t) {
                return e.each(t, function(t, n) {
                    var a, o;
                    return a = e(n), 0 === a.find(i).length ? (o = "<a class='" + r + "' tabindex='0' aria-label='" + jdgmSettings.widget_read_more_text + "' role='button'>" + jdgmSettings.widget_read_more_text + "</a>", a.append(o)) : void 0
                })
            }, w = function(t, n) {
                var r;
                return null == n && (n = !1), t.length <= 0 && !n ? void 0 : (r = t.css("lineHeight").replace("px", ""), t.dotdotdot({
                    height: jdgmSettings.widget_review_max_height * r,
                    after: i
                }).on("click", i, function(t) {
                    var n, r;
                    return n = e(this), r = n.closest(".jdgm-rev__body, .jdgm-ans__body"), r.trigger("destroy.dot").removeClass("is-truncated"), jdgm.triggerEvent("doneDestroyDot", {
                        $reviewBody: r
                    })
                }))
            }, v = function(t) {
                var n;
                return n = window.location.pathname, t.each(function(t, r) {
                    var i, a, o, s, d;
                    return i = e(r), s = i.data("product-url"), o = i.data("product-title"), s ? (d = s.indexOf(n) > -1, a = b(s, o, d), d || i.addClass("jdgm-rev-extra-padding")) : o && (a = y(o)), i.find(".jdgm-rev__timestamp").after(a)
                })
            }, b = function(e, t, n) {
                return [" <span class='jdgm-rev__prod-info-wrapper" + (n && " jdgm-hidden" || "") + "'>", "<span class='jdgm-rev__prod-link-prefix'></span>", " <a href='" + jdgm.escapeHTML(e) + "' target='_blank' class='jdgm-rev__prod-link'>", t, "</a>", "</span>"].join("")
            }, y = function(e) {
                return [" <span class='jdgm-rev__prod-info-wrapper'>", "<span class='jdgm-rev__prod-link-prefix'></span> ", e, " <span class='jdgm-rev__out-of-store-text'></span>", "</span>"].join("")
            }, T = function(t) {
                return t.find(".jdgm-rev__cf-ans__title").each(function(t, n) {
                    return n = e(n), n.text(n.text().replace("?:", "?").replace(".:", ".").replace("!:", "!"))
                })
            }, E = function(t) {
                return t.unveil(200, function() {
                    return e(this).parent(".jdgm-rev__icon").removeClass("jdgm--loading").addClass("jdgm-rev__avatar")
                }), setTimeout(function() {
                    return jdgm.ScrollEvent.trigger("unveil")
                })
            }, R = function(t) {
                var n;
                return n = t.find(".jdgm-rev__icon[data-gravatar-hash]"), n.each(function(t, n) {
                    return h(e(n))
                })
            }, h = function(n) {
                var r, i, a, o;
                return (r = n.data("gravatar-hash")) ? (o = "https://secure.gravatar.com/avatar/" + r + ".png?default=mp&filetype=png&rating=pg&secure=true", i = o + "&size=48", a = o + "&size=96", e.ajax({
                    url: a,
                    type: "HEAD",
                    crossDomain: !0,
                    success: function(r, o, s) {
                        var d;
                        if (s.getResponseHeader("content-length") !== t) return d = e("<img data-src='" + i + "' data-src-retina='" + a + "' class='jdgm-rev__avatar-image' alt='Reviewer avatar'>"), n.html(d), n.addClass("jdgm--loading"), E(d)
                    },
                    complete: function() {
                        return n.removeAttr("data-gravatar-hash"), jdgm.triggerEvent("doneFetchGravatar", {
                            $gravatarIcon: n
                        })
                    }
                })) : void 0
            }, F = function(t) {
                return jdgmSettings.widget_show_country_flag ? jdgm.asyncEach(t, function(t) {
                    var n, r, i, a, o, d;
                    return i = e(t), n = i.find(".jdgm-rev__location"), a = n.attr("data-country-code"), a ? (o = a.toUpperCase(), d = "" + s + "/" + o + ".svg", r = e("<img class='jdgm-rev__location-country-flag-img jdgm--loading' alt='" + o + "'>"), n.before(r), r.attr("data-src", d), q(r)) : void 0
                }) : void 0
            }, A = function(t) {
                return jdgmSettings.widget_show_collected_via_shop_app ? jdgm.asyncEach(t, function(t) {
                    var n, r, i, a, s;
                    return r = e(t), i = r.find(".jdgm-rev__source"), "shop-app" === i.attr("data-source") ? "light" === (s = jdgmSettings.widget_verified_by_shop_badge_style) || "dark" === s ? (a = "" + o + "/verified-by-shop_" + jdgmSettings.widget_verified_by_shop_badge_style + ".svg", n = e("<img class='jdgm-rev__verification-badge-img jdgm--loading' alt='Verified by Shop'>"), i.append(n), n.attr("data-src", a), q(n), r.find(".jdgm-rev__buyer-badge-wrapper").hide()) : i.text(jdgmSettings.widget_verified_by_shop_text || "Verified by Shop") : void 0
                }) : void 0
            }, q = function(t) {
                return t.unveil(200, function() {
                    return e(this).removeClass("jdgm--loading")
                }), setTimeout(function() {
                    return jdgm.ScrollEvent.trigger("unveil")
                })
            }, j = function(t) {
                var n, r;
                return n = e(".jdgm-keywords .jdgm-chip.active").data("text"), r = e(".jdgm-review-search").val(), n || r ? jdgm.asyncEach(t, function(t) {
                    var i;
                    return i = e(t), P(i.find(".jdgm-rev__title"), n || r, null === r), P(i.find(".jdgm-rev__body"), n || r, null === r), e.each(i.find(".jdgm-rev__cf-ans__value, .jdgm-rev__reply-content"), function(t, i) {
                        return P(e(i), n || r, null === r)
                    })
                }) : void 0
            }, P = function(e, t, n) {
                var r, i, a;
                return null == n && (n = !0), t = (t + "").trim(), n || (t = t.split(" ").join("|")), r = "\\b(" + t + ")\\b", t.match(/[^\u0000-\u007F]+/) && (r = "(" + t + ")"), a = e.html(), i = new RegExp(r, "gi"), e.html(a.replace(i, "<mark>$1</mark>"))
            }, e(document).on("jdgm.beforeReLayoutGrids", function(e, t) {
                return jdgmSettings.widget_load_with_code_splitting ? jdgm.setupLimitingReviewHeight(t.$reviewWrappers) : void 0
            }), e(document).on("jdgm.doneShowReviewsTab", function(e, t) {
                return "carousel" !== jdgmSettings.widget_theme ? jdgm.setupLimitingReviewHeight(t.$tabModal, !0) : void 0
            }), jdgm.customizeReviews()
        })
    }.call(this);