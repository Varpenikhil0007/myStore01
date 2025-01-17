! function(e) {
    "use strict";
    const n = {
            TRACKING_ACCEPTED: "trackingConsentAccepted",
            TRACKING_DECLINED: "trackingConsentDeclined",
            MARKETING_ACCEPTED: "firstPartyMarketingConsentAccepted",
            SALE_OF_DATA_ACCEPTED: "thirdPartyMarketingConsentAccepted",
            ANALYTICS_ACCEPTED: "analyticsConsentAccepted",
            PREFERENCES_ACCEPTED: "preferencesConsentAccepted",
            MARKETING_DECLINED: "firstPartyMarketingConsentDeclined",
            SALE_OF_DATA_DECLINED: "thirdPartyMarketingConsentDeclined",
            ANALYTICS_DECLINED: "analyticsConsentDeclined",
            PREFERENCES_DECLINED: "preferencesConsentDeclined",
            CONSENT_COLLECTED: "visitorConsentCollected",
            CONSENT_TRACKING_API_LOADED: "consentTrackingApiLoaded"
        },
        t = "2.1",
        o = {
            ACCEPTED: "yes",
            DECLINED: "no",
            NO_INTERACTION: "no_interaction",
            NO_VALUE: ""
        },
        r = {
            NO_VALUE: "",
            ACCEPTED: "1",
            DECLINED: "0"
        },
        c = {
            PREFERENCES: "p",
            ANALYTICS: "a",
            MARKETING: "m",
            SALE_OF_DATA: "t"
        },
        i = {
            MARKETING: "m",
            ANALYTICS: "a",
            PREFERENCES: "p",
            SALE_OF_DATA: "s"
        },
        a = {
            MARKETING: "marketing",
            ANALYTICS: "analytics",
            PREFERENCES: "preferences",
            SALE_OF_DATA: "sale_of_data",
            EMAIL: "email"
        },
        s = {
            HEADLESS_STOREFRONT: "headlessStorefront",
            ROOT_DOMAIN: "rootDomain",
            CHECKOUT_ROOT_DOMAIN: "checkoutRootDomain",
            STOREFRONT_ROOT_DOMAIN: "storefrontRootDomain",
            STOREFRONT_ACCESS_TOKEN: "storefrontAccessToken",
            IS_EXTENSION_TOKEN: "isExtensionToken",
            METAFIELDS: "metafields"
        };

    function l(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            n && (o = o.filter((function(n) {
                return Object.getOwnPropertyDescriptor(e, n).enumerable
            }))), t.push.apply(t, o)
        }
        return t
    }

    function u(e) {
        for (var n = 1; n < arguments.length; n++) {
            var t = null != arguments[n] ? arguments[n] : {};
            n % 2 ? l(Object(t), !0).forEach((function(n) {
                E(e, n, t[n])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : l(Object(t)).forEach((function(n) {
                Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
            }))
        }
        return e
    }

    function E(e, n, t) {
        return n in e ? Object.defineProperty(e, n, {
            value: t,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[n] = t, e
    }

    function f(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const t = document.cookie ? document.cookie.split("; ") : [];
        for (let n = 0; n < t.length; n++) {
            const [o, r] = t[n].split("=");
            if (e === decodeURIComponent(o)) {
                return JSON.parse(decodeURIComponent(r))
            }
        }
        if (n && "_cmp_a" === e && !window.localStorage.getItem("cmp_a_fetched")) return console.debug("_cmp_a missing"),
            function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "/";
                const n = new XMLHttpRequest;
                n.open("HEAD", e, !1), n.withCredentials = !0, n.send()
            }(), window.localStorage.setItem("cmp_a_fetched", "true"), f(e, !1)
    }

    function d(e) {
        return f(e)
    }

    function A(e) {
        return e === encodeURIComponent(decodeURIComponent(e))
    }

    function C(e, n, t, o) {
        if (!A(o)) throw new TypeError("Cookie value is not correctly URI encoded.");
        if (!A(e)) throw new TypeError("Cookie name is not correctly URI encoded.");
        let r = "".concat(e, "=").concat(o);
        r += "; path=/", n && (r += "; domain=".concat(n)), r += "; expires=".concat(new Date((new Date).getTime() + t).toUTCString()), document.cookie = r
    }
    const T = "_tracking_consent",
        p = 31536e6;

    function N() {
        const e = d(T);
        if (void 0 !== e && ! function(e) {
                var n;
                if (e.v !== t) return !0;
                if (null == e || null === (n = e.con) || void 0 === n || !n.CMP) return !0;
                return !1
            }(e)) return e
    }

    function g() {
        try {
            let e = N();
            if (!e) return;
            return e
        } catch (e) {
            return
        }
    }

    function _() {
        return {
            m: I(i.MARKETING),
            a: I(i.ANALYTICS),
            p: I(i.PREFERENCES),
            s: I(i.SALE_OF_DATA)
        }
    }

    function D() {
        return _()[i.SALE_OF_DATA]
    }

    function O() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        return null === e && (e = g()), void 0 === e
    }

    function R(e) {
        switch (e) {
            case r.ACCEPTED:
                return o.ACCEPTED;
            case r.DECLINED:
                return o.DECLINED;
            default:
                return o.NO_VALUE
        }
    }

    function S(e) {
        switch (e) {
            case i.ANALYTICS:
                return a.ANALYTICS;
            case i.MARKETING:
                return a.MARKETING;
            case i.PREFERENCES:
                return a.PREFERENCES;
            case i.SALE_OF_DATA:
                return a.SALE_OF_DATA
        }
    }

    function I(e) {
        const n = g();
        if (!n) return r.NO_VALUE;
        const t = n.con.CMP;
        return t ? t[e] : r.NO_VALUE
    }

    function h() {
        const e = g();
        return O(e) ? "" : e.region || ""
    }
    const w = "_cmp_a";

    function y() {
        return d(w)
    }

    function m(e) {
        const n = y();
        if (!n) return !0;
        const t = n.purposes[e];
        return "boolean" != typeof t || t
    }

    function P() {
        return m(c.PREFERENCES)
    }

    function L() {
        return m(c.ANALYTICS)
    }

    function k() {
        return m(c.MARKETING)
    }

    function b() {
        return m(c.SALE_OF_DATA)
    }

    function v() {
        const e = y();
        return !!e && ("boolean" == typeof e.display_banner && e.display_banner)
    }

    function M() {
        const e = y();
        return e && e.sale_of_data_region || !1
    }

    function F(e) {
        void 0 !== e.granular_consent && function(e) {
            const t = e[c.MARKETING],
                o = e[c.SALE_OF_DATA],
                r = e[c.ANALYTICS],
                i = e[c.PREFERENCES];
            !0 === t ? K(n.MARKETING_ACCEPTED) : !1 === t && K(n.MARKETING_DECLINED);
            !0 === o ? K(n.SALE_OF_DATA_ACCEPTED) : !1 === o && K(n.SALE_OF_DATA_DECLINED);
            !0 === r ? K(n.ANALYTICS_ACCEPTED) : !1 === r && K(n.ANALYTICS_DECLINED);
            !0 === i ? K(n.PREFERENCES_ACCEPTED) : !1 === i && K(n.PREFERENCES_DECLINED);
            const a = function(e) {
                const n = {
                    marketingAllowed: e[c.MARKETING],
                    saleOfDataAllowed: e[c.SALE_OF_DATA],
                    analyticsAllowed: e[c.ANALYTICS],
                    preferencesAllowed: e[c.PREFERENCES],
                    firstPartyMarketingAllowed: e[c.MARKETING],
                    thirdPartyMarketingAllowed: e[c.SALE_OF_DATA]
                };
                return n
            }(e);
            K(n.CONSENT_COLLECTED, a);
            const s = [r, i, t, o];
            s.every((e => !0 === e)) && K(n.TRACKING_ACCEPTED);
            s.every((e => !1 === e)) && K(n.TRACKING_DECLINED)
        }({
            [c.PREFERENCES]: P(),
            [c.ANALYTICS]: L(),
            [c.MARKETING]: k(),
            [c.SALE_OF_DATA]: b()
        })
    }

    function K(e, n) {
        document.dispatchEvent(new CustomEvent(e, {
            detail: n || {}
        }))
    }

    function G(e, n) {
        if (null === e) return "null";
        if (Array.isArray(e)) {
            const n = e.map((e => G(e, !0))).join(",");
            return "[".concat(n, "]")
        }
        if ("object" == typeof e) {
            let t = [];
            for (const n in e) e.hasOwnProperty(n) && void 0 !== e[n] && t.push("".concat(n, ":").concat(G(e[n], !0)));
            const o = t.join(",");
            return n ? "{".concat(o, "}") : o
        }
        return "string" == typeof e ? '"'.concat(e, '"') : "".concat(e)
    }
    const j = "_landing_page",
        U = "_orig_referrer";

    function Y(e) {
        const n = e.granular_consent,
            t = G(u(u({
                visitorConsent: u({
                    marketing: n.marketing,
                    analytics: n.analytics,
                    preferences: n.preferences,
                    saleOfData: n.sale_of_data
                }, n.metafields && {
                    metafields: n.metafields
                })
            }, n.email && {
                visitorEmail: n.email
            }), {}, {
                origReferrer: e.referrer,
                landingPage: e.landing_page
            }));
        return {
            query: "query { consentManagement { cookies(".concat(t, ") { answersCookie trackingConsentCookie cookieDomain landingPageCookie origReferrerCookie } } }"),
            variables: {}
        }
    }

    function B(e, n) {
        const t = e.granular_consent,
            o = t.storefrontAccessToken || function() {
                const e = document.documentElement.querySelector("#shopify-features"),
                    n = "Could not find liquid access token";
                if (!e) return void console.warn(n);
                const t = JSON.parse(e.textContent || "").accessToken;
                if (!t) return void console.warn(n);
                return t
            }(),
            r = t.checkoutRootDomain || window.location.host,
            c = t.isExtensionToken ? "Shopify-Storefront-Extension-Token" : "x-shopify-storefront-access-token",
            i = {
                headers: {
                    "content-type": "application/json",
                    [c]: o
                },
                body: JSON.stringify(Y(e)),
                method: "POST"
            };
        return fetch("https://".concat(r, "/api/unstable/graphql.json"), i).then((e => {
            if (e.ok) return e.json();
            throw new Error("Server error")
        })).then((o => {
            const r = 31536e6,
                c = 12096e5,
                i = o.data.consentManagement.cookies.cookieDomain,
                a = i || t.checkoutRootDomain || window.location.hostname,
                s = t.storefrontRootDomain || i || window.location.hostname,
                l = o.data.consentManagement.cookies.trackingConsentCookie,
                u = o.data.consentManagement.cookies.answersCookie,
                E = o.data.consentManagement.cookies.landingPageCookie,
                f = o.data.consentManagement.cookies.origReferrerCookie;
            return C(T, a, r, l), C(w, a, r, u), E && f && (C(j, a, c, E), C(U, a, c, f)), s !== a && (C(T, s, r, l), C(w, s, r, u), E && f && (C(j, s, c, E), C(U, s, c, f))), F(e), void 0 !== n && n(null, o), o
        })).catch((e => {
            const t = "Error while setting storefront API consent: " + e.message;
            if (void 0 === n) throw {
                error: t
            };
            n({
                error: t
            })
        }))
    }

    function V(e, n) {
        if (function(e) {
                if ("boolean" != typeof e && "object" != typeof e) throw TypeError("setTrackingConsent must be called with a boolean or object consent value");
                if ("object" == typeof e) {
                    const n = Object.keys(e);
                    if (0 === n.length) throw TypeError("The submitted consent object is empty.");
                    const t = [a.MARKETING, a.ANALYTICS, a.PREFERENCES, a.SALE_OF_DATA, a.EMAIL, s.ROOT_DOMAIN, s.CHECKOUT_ROOT_DOMAIN, s.STOREFRONT_ROOT_DOMAIN, s.STOREFRONT_ACCESS_TOKEN, s.HEADLESS_STOREFRONT, s.IS_EXTENSION_TOKEN, s.METAFIELDS];
                    for (const e of n)
                        if (!t.includes(e)) throw TypeError("The submitted consent object should only contain the following keys: ".concat(t.join(", "), ". Extraneous key: ").concat(e, "."))
                }
            }(e), void 0 !== n && "function" != typeof n) throw TypeError("setTrackingConsent must be called with a callback function if the callback argument is provided");
        let t;
        if (!0 === e || !1 === e) {
            console.warn("Binary consent is deprecated. Please update to granular consent (shopify.dev/docs/api/consent-tracking)");
            t = {
                analytics: e,
                preferences: e,
                marketing: e
            }
        } else t = e;
        const o = function(e) {
                if (!e) return null;
                return Z() ? document.referrer : ""
            }(t.analytics),
            r = function(e) {
                if (!e) return null;
                return Z() ? window.location.pathname + window.location.search : "/"
            }(t.analytics);
        return B(u(u({
            granular_consent: t
        }, null !== o && {
            referrer: o
        }), null !== r && {
            landing_page: r
        }), n)
    }

    function H(e, n) {
        if (console.warn("This method is deprecated. Please read shopify.dev/docs/api/customer-privacy for the latest information."), "boolean" != typeof e) throw TypeError("setCCPAConsent must be called with a boolean consent value");
        if ("function" != typeof n) throw TypeError("setCCPAConsent must be called with a callback function");
        return B({
            granular_consent: {
                sale_of_data: e
            }
        }, n)
    }

    function x() {
        if (O()) return o.NO_VALUE;
        const e = _();
        return e[i.MARKETING] === r.ACCEPTED && e[i.ANALYTICS] === r.ACCEPTED ? o.ACCEPTED : e[i.MARKETING] === r.DECLINED || e[i.ANALYTICS] === r.DECLINED ? o.DECLINED : o.NO_INTERACTION
    }

    function q() {
        console.warn("getRegulation is deprecated and will be removed.");
        const e = h();
        return "" === e ? "" : ["AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR", "DE", "GR", "HU", "IS", "IE", "IT", "LV", "LI", "LT", "LU", "MT", "NL", "NO", "PL", "PT", "RO", "SI", "SK", "ES", "SE", "GB"].includes(e.slice(0, 2)) ? "GDPR" : "US" === e.slice(0, 2) && ["CA", "VA"].includes(e.slice(2, 4)) ? "CCPA" : ""
    }

    function J() {
        return console.warn("getShopPrefs is deprecated and will be removed."), {
            limit: []
        }
    }

    function X() {
        return h()
    }

    function Z() {
        if ("" === document.referrer) return !0;
        const e = document.createElement("a");
        return e.href = document.referrer, window.location.hostname != e.hostname
    }

    function z() {
        return console.warn("isRegulationEnforced is deprecated and will be removed."), !0
    }

    function Q() {
        return !!O() || k() && L()
    }

    function W() {
        return M() ? "string" == typeof navigator.globalPrivacyControl ? "1" !== navigator.globalPrivacyControl : "boolean" == typeof navigator.globalPrivacyControl ? !navigator.globalPrivacyControl : null : null
    }

    function $() {
        return console.warn("userDataCanBeSold is deprecated and will be replaced with saleOfDataAllowed."), b()
    }

    function ee() {
        return v() && x() === o.NO_INTERACTION
    }

    function ne() {
        return !1 === W() ? o.DECLINED : (e = D(), O() ? o.NO_VALUE : e === r.NO_VALUE ? o.NO_INTERACTION : R(e));
        var e
    }

    function te() {
        return console.warn("shouldShowCCPABanner is deprecated and will be removed."), M() && ne() === o.NO_INTERACTION
    }

    function oe() {
        return !0
    }

    function re(e) {
        return function(e) {
            const n = g();
            if (O(n) || !n.cus) return;
            const t = n.cus[encodeURIComponent(e)];
            return t ? decodeURIComponent(t) : t
        }(e)
    }
    const ce = "95ba910bcec4542ef2a0b64cd7ca666c";

    function ie(e, n, t) {
        try {
            var o;
            ! function(e) {
                const n = new XMLHttpRequest;
                n.open("POST", "https://notify.bugsnag.com/", !0), n.setRequestHeader("Content-Type", "application/json"), n.setRequestHeader("Bugsnag-Api-Key", ce), n.setRequestHeader("Bugsnag-Payload-Version", "5");
                const t = function(e) {
                    const n = function(e) {
                            return e.stackTrace || e.stack || e.description || e.name
                        }(e.error),
                        [t, o] = (n || "unknown error").split("\n")[0].split(":");
                    return JSON.stringify({
                        payloadVersion: 5,
                        notifier: {
                            name: "ConsentTrackingAPI",
                            version: "latest",
                            url: "-"
                        },
                        events: [{
                            exceptions: [{
                                errorClass: (t || "").trim(),
                                message: (o || "").trim(),
                                stacktrace: [{
                                    file: "consent-tracking-api.js",
                                    lineNumber: "1",
                                    method: n
                                }],
                                type: "browserjs"
                            }],
                            context: e.context || "general",
                            app: {
                                id: "ConsentTrackingAPI",
                                version: "latest"
                            },
                            metaData: {
                                request: {
                                    shopId: e.shopId,
                                    shopUrl: window.location.href
                                },
                                device: {
                                    userAgent: window.navigator.userAgent
                                },
                                "Additional Notes": e.notes
                            },
                            unhandled: !1
                        }]
                    })
                }(e);
                n.send(t)
            }({
                error: e,
                context: n,
                shopId: se() || (null === (o = window.Shopify) || void 0 === o ? void 0 : o.shop),
                notes: t
            })
        } catch (e) {}
    }

    function ae(e) {
        return function() {
            try {
                return e(...arguments)
            } catch (e) {
                throw ie(e), e
            }
        }
    }

    function se() {
        try {
            const e = document.getElementById("shopify-features").textContent;
            return JSON.parse(e).shopId
        } catch (e) {
            return null
        }
    }

    function le() {
        return k()
    }

    function ue() {
        return b()
    }

    function Ee() {
        const e = {},
            n = _();
        for (const t of Object.keys(n)) e[S(t)] = R(n[t]);
        return e
    }

    function fe(e, n) {
        return "object" == typeof e && e.headlessStorefront && !e.storefrontAccessToken ? (console.warn("Headless consent has been updated. Please read shopify.dev/docs/api/customer-privacy to integrate."), function(e, n) {
            function o(e) {
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.NO_VALUE;
                return !0 === e ? r.ACCEPTED : !1 === e ? r.DECLINED : n
            }
            const c = {
                    [i.ANALYTICS]: o(e[a.ANALYTICS], r.DECLINED),
                    [i.MARKETING]: o(e[a.MARKETING], r.DECLINED),
                    [i.PREFERENCES]: o(e[a.PREFERENCES], r.DECLINED),
                    [i.SALE_OF_DATA]: o(e[a.SALE_OF_DATA])
                },
                s = {
                    v: t,
                    reg: "",
                    con: {
                        CMP: c
                    }
                },
                l = encodeURIComponent(JSON.stringify(s));
            return C(T, e.rootDomain, p, l), n(null), new Promise(((e, n) => {}))
        }(e, n || (() => {}))) : V(e, n)
    }
    const de = e => {
        let {
            useBugsnagReporting: n
        } = e;
        D() != r.DECLINED && !1 === W() && H(!1, (() => !1));
        const t = {
            getTrackingConsent: x,
            setTrackingConsent: fe,
            userCanBeTracked: Q,
            getRegulation: q,
            isRegulationEnforced: z,
            getShopPrefs: J,
            shouldShowGDPRBanner: ee,
            userDataCanBeSold: $,
            setCCPAConsent: H,
            getCCPAConsent: ne,
            shouldShowCCPABanner: te,
            doesMerchantSupportGranularConsent: oe,
            analyticsProcessingAllowed: L,
            preferencesProcessingAllowed: P,
            marketingAllowed: le,
            firstPartyMarketingAllowed: le,
            saleOfDataAllowed: ue,
            thirdPartyMarketingAllowed: ue,
            currentVisitorConsent: Ee,
            shouldShowBanner: v,
            saleOfDataRegion: M,
            getRegion: X,
            getTrackingConsentMetafield: re,
            unstable: {
                analyticsProcessingAllowed: L,
                preferencesProcessingAllowed: P,
                marketingAllowed: le,
                saleOfDataAllowed: ue,
                currentVisitorConsent: Ee,
                shouldShowBanner: v,
                saleOfDataRegion: M
            }
        };
        if (!n) return t;
        const o = ["unstable"];
        for (const e in t) t.hasOwnProperty(e) && (t[e] = o.includes(e) ? t[e] : ae(t[e]));
        return t
    };

    function Ae() {
        return de(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            useBugsnagReporting: !1
        })
    }

    function Ce() {
        window.Shopify.customerPrivacy = window.Shopify.trackingConsent = Ae({
            useBugsnagReporting: !0
        }), K(n.CONSENT_TRACKING_API_LOADED)
    }
    window.Shopify = window.Shopify ? window.Shopify : {}, Ce(), e.default = Ae, e.setGlobalObject = Ce, Object.defineProperty(e, "__esModule", {
        value: !0
    })
}({});
//# sourceMappingURL=consent-tracking-api.js.map