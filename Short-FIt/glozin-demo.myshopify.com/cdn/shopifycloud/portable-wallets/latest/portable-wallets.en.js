import.meta;
var Mn = Object.defineProperty,
    Fn = Object.defineProperties,
    Un = Object.getOwnPropertyDescriptors,
    ar = Object.getOwnPropertySymbols,
    Bn = Object.prototype.hasOwnProperty,
    $n = Object.prototype.propertyIsEnumerable,
    fe = (e, t) => (t = Symbol[e]) ? t : Symbol.for("Symbol." + e),
    be = (e, t, n) => t in e ? Mn(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : e[t] = n,
    A = (e, t) => {
        for (var n in t || (t = {})) Bn.call(t, n) && be(e, n, t[n]);
        if (ar)
            for (var n of ar(t)) $n.call(t, n) && be(e, n, t[n]);
        return e
    },
    D = (e, t) => Fn(e, Un(t)),
    c = (e, t, n) => (be(e, typeof t != "symbol" ? t + "" : t, n), n),
    ir = (e, t, n) => {
        if (!t.has(e)) throw TypeError("Cannot " + n)
    },
    I = (e, t, n) => (ir(e, t, "read from private field"), n ? n.call(e) : t.get(e)),
    j = (e, t, n) => {
        if (t.has(e)) throw TypeError("Cannot add the same private member more than once");
        t instanceof WeakSet ? t.add(e) : t.set(e, n)
    },
    J = (e, t, n, r) => (ir(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n),
    G = function(e, t) {
        this[0] = e, this[1] = t
    },
    ft = (e, t, n) => {
        var r = (o, s, l, u) => {
                try {
                    var d = n[o](s),
                        p = (s = d.value) instanceof G,
                        y = d.done;
                    Promise.resolve(p ? s[0] : s).then(m => p ? r(o === "return" ? o : "next", s[1] ? {
                        done: m.done,
                        value: m.value
                    } : m, l, u) : l({
                        value: m,
                        done: y
                    })).catch(m => r("throw", m, l, u))
                } catch (m) {
                    u(m)
                }
            },
            a = o => i[o] = s => new Promise((l, u) => r(o, s, l, u)),
            i = {};
        return n = n.apply(e, t), i[fe("asyncIterator")] = () => i, a("next"), a("throw"), a("return"), i
    },
    z = (e, t, n) => (t = e[fe("asyncIterator")]) ? t.call(e) : (e = e[fe("iterator")](), t = {}, n = (r, a) => (a = e[r]) && (t[r] = i => new Promise((o, s, l) => (i = a.call(e, i), l = i.done, Promise.resolve(i.value).then(u => o({
        value: u,
        done: l
    }), s)))), n("next"), n("return"), t);
const Hn = ":host{display:flex;align-items:center;justify-content:center}";
class Gn extends HTMLElement {
    constructor() {
        var t, n;
        super(), c(this, "size"), c(this, "color"), this.size = (t = this.getAttribute("size")) != null ? t : "18px", this.color = (n = this.getAttribute("color")) != null ? n : "gray", this.attachShadow({
            mode: "open"
        })
    }
    connectedCallback() {
        this.render();
        const t = document.createElement("style");
        t.textContent = Hn, this.shadowRoot.appendChild(t)
    }
    render() {
        const t = this.shadowRoot,
            n = '\n      width="'.concat(this.size, '"\n      height="').concat(this.size, '"\n      xmlns="http://www.w3.org/2000/svg"\n      aria-hidden="true"\n    ');
        t.innerHTML = "\n      <svg ".concat(n, ' viewBox="0 0 20 20" fill="').concat(this.color, '">\n        <path d="M17.1 4.3l-1.4-1.4-5.7 5.7-5.7-5.7-1.4 1.4 5.7 5.7-5.7 5.7 1.4 1.4 5.7-5.7 5.7 5.7 1.4-1.4-5.7-5.7z"/>\n      </svg>\n    ')
    }
}
const zn = "#overlay{position:fixed;width:100%;height:100%;background:#0006;top:0;left:0;z-index:2147483647;animation:modalPop .3s ease-out}#modal{position:fixed;top:20%;left:50%;width:100%;max-width:383px;transform:translate(-50%,-100%);background:#fff;color:#000;border-radius:5px;animation:modalSlideInFromTop .3s forwards}@keyframes modalPop{0%{opacity:0}to{opacity:1}}@keyframes modalSlideInFromTop{0%{transform:translate(-50%,-100%)}to{transform:translate(-50%)}}@keyframes modalSlideInFromBottom{0%{transform:translate(-50%,100%)}to{transform:translate(-50%)}}@media only screen and (max-width: 640px){#modal{top:auto;bottom:0;animation:modalSlideInFromBottom .3s forwards}}#modal footer{padding:0 21px 21px}#modal header{display:flex;justify-content:space-between;padding:21px 21px 16px}#title{font-size:21px;font-weight:600;line-height:25.2px;margin:0}.capitalize:first-letter{display:inline-block;text-transform:capitalize}#content{text-align:left;padding:0 21px 16px;overflow:auto;max-height:50vh}#modal #content p{margin:0;font-size:14px;line-height:21px}#close-icon,#close-button{cursor:pointer}#close-icon{min-width:24px;background:transparent;padding:0;border:none}#close-button{width:100%;padding:16px 21px;color:#fff;background-color:#1773b0;border:none;border-radius:5px;font-size:14px;line-height:21px;font-family:inherit}#close-button:hover,#close-button:active{background:#136f99}#close-button:active,#close-button:focus{box-shadow:0 0 0 4px #1990c640}";
var Mr = /^\s*at .*(\S+:\d+|\(native\))/m,
    Vn = /^(eval@)?(\[native code])?$/;

function qn(e) {
    return e.stack ? e.stack.match(Mr) ? jn(e) : Wn(e) : []
}

function Fr(e) {
    if (e.indexOf(":") === -1) return [e];
    let t = /(.+?)(?::(\d+))?(?::(\d+))?$/.exec(e.replace(/[()]/g, ""));
    return [t[1], t[2] ? Number(t[2]) : void 0, t[3] ? Number(t[3]) : void 0]
}

function jn(e) {
    return e.stack.split("\n").filter(t => !!t.match(Mr)).map(t => {
        let n = t.replace(/^\s+/, "").replace(/^.*?\s+/, ""),
            r = n.match(/ (\(.+\)$)/);
        n = r ? n.replace(r[0], "") : n;
        let a = Fr(r ? r[1] : n),
            i = r && n || void 0,
            o = ["eval", "<anonymous>"].indexOf(a[0]) > -1 ? void 0 : a[0];
        return {
            method: i,
            file: o,
            lineNumber: a[1],
            columnNumber: a[2]
        }
    })
}

function Wn(e) {
    return e.stack.split("\n").filter(t => !t.match(Vn)).map(t => {
        if (t.indexOf("@") === -1 && t.indexOf(":") === -1) return {
            method: t
        };
        let n = /((.*".+"[^@]*)?[^@]*)(?:@)/,
            r = t.match(n),
            a = r && r[1] ? r[1] : void 0,
            i = Fr(t.replace(n, ""));
        return {
            method: a,
            file: i[0],
            lineNumber: i[1],
            columnNumber: i[2]
        }
    })
}
var or = "5",
    Yn = class {
        constructor(e) {
            c(this, "breadcrumbs", []), c(this, "apiKey"), c(this, "plugins"), c(this, "appId"), c(this, "appType"), c(this, "appVersion"), c(this, "releaseStage"), c(this, "locale"), c(this, "userAgent"), c(this, "metadata"), c(this, "persistedMetadata"), c(this, "onError"), c(this, "onPostErrorListeners", []);
            var t;
            this.apiKey = e.apiKey, this.appType = e.appType, this.appId = e.appId, this.appVersion = e.appVersion, this.releaseStage = e.releaseStage, this.locale = e.locale, this.userAgent = e.userAgent, this.metadata = e.metadata, this.onError = e.onError, this.persistedMetadata = {}, this.plugins = (t = e.plugins) != null ? t : [], this.plugins.forEach(n => n.load(this)), this.leaveBreadcrumb("Bugsnag started", void 0, "state")
        }
        addMetadata(e) {
            for (let t of Object.keys(e)) this.persistedMetadata[t] = e[t]
        }
        leaveBreadcrumb(e, t, n = "manual") {
            this.breadcrumbs.push({
                name: e,
                metaData: t,
                type: n,
                timestamp: new Date().toISOString()
            })
        }
        notify(e, {
            errorClass: t,
            severity: n,
            severityType: r,
            handled: a = !0,
            metadata: i,
            context: o
        } = {}) {
            var s, l;
            let u = A(A(A({}, this.metadata), this.persistedMetadata), i),
                d = this.buildBugsnagEvent({
                    error: e,
                    errorClass: t,
                    severityType: r,
                    handled: a,
                    severity: n,
                    metadata: u,
                    context: o
                });
            if (((l = (s = this.onError) == null ? void 0 : s.call(this, d, e)) == null || l) && this.releaseStage !== "development") {
                let p = this.sendToBugsnag(d);
                return this.onPostErrorListeners.forEach(y => y(d)), p
            }
            return Promise.resolve()
        }
        addOnPostError(e) {
            this.onPostErrorListeners.push(e)
        }
        buildBugsnagEvent({
            error: e,
            errorClass: t,
            severity: n = "error",
            severityType: r = "handledException",
            handled: a,
            metadata: i = {},
            context: o
        }) {
            let s = new Date().toISOString(),
                {
                    breadcrumbs: l,
                    appId: u,
                    appType: d,
                    appVersion: p,
                    releaseStage: y,
                    locale: m,
                    userAgent: v
                } = this;
            return {
                payloadVersion: or,
                exceptions: [{
                    errorClass: t != null ? t : e.name,
                    stacktrace: Ur(u, e),
                    message: e.message
                }],
                severity: n,
                severityReason: {
                    type: r
                },
                unhandled: !a,
                app: {
                    id: u,
                    type: d,
                    version: p,
                    releaseStage: y
                },
                device: {
                    time: s,
                    locale: m,
                    userAgent: v
                },
                breadcrumbs: l,
                context: o,
                metaData: i
            }
        }
        async sendToBugsnag(e) {
            let {
                apiKey: t
            } = this, n = {
                apiKey: t,
                notifier: {
                    name: "Bugsnag JavaScript",
                    version: "7.22.2",
                    url: "https://github.com/bugsnag/bugsnag-js"
                },
                events: [e]
            };
            try {
                await fetch("https://notify.bugsnag.com/", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Bugsnag-Api-Key": t,
                        "Bugsnag-Payload-Version": or,
                        "Bugsnag-Sent-At": e.device.time
                    },
                    body: JSON.stringify(n)
                })
            } catch (r) {
                console.warn("[bugsnag-light] failed to send an event"), console.warn(r)
            }
        }
    };

function Ur(e, t) {
    return qn(t).map(n => {
        var r, a, i, o;
        let s = (r = n.file) == null ? void 0 : r.includes(e);
        return {
            method: (a = n.method) != null ? a : "",
            file: (i = n.file) != null ? i : "",
            lineNumber: (o = n.lineNumber) != null ? o : 0,
            columnNumber: n.columnNumber,
            inProject: s
        }
    })
}

function Kn(e) {
    let t = window.onerror;
    window.onerror = (n, r, a, i, o) => {
        o && e.notify(o, {
            severityType: "unhandledException",
            handled: !1
        }), typeof t == "function" && t.apply(window.onerror, [n, r, a, i, o])
    }
}

function Jn(e) {
    window.addEventListener("unhandledrejection", ({
        reason: t
    }) => {
        t && e.notify(t, {
            severityType: "unhandledPromiseRejection",
            handled: !1
        })
    })
}

function $t(e) {
    try {
        const t = new RegExp("(^| )".concat(e, "=([^;]+)")).exec(document.cookie);
        if (t) {
            const n = t[2];
            try {
                return decodeURIComponent(n)
            } catch (r) {
                return n
            }
        }
        return null
    } catch (t) {
        return null
    }
}
const De = {
        BRANDED_BUTTON: "shopify-payment-button__button shopify-payment-button__button--branded",
        UNBRANDED_BUTTON: "shopify-payment-button__button shopify-payment-button__button--unbranded",
        MORE_PAYMENT_OPTION_BUTTON: "shopify-payment-button__more-options",
        HIDDEN: "shopify-payment-button__button--hidden"
    },
    Qn = {
        DARK: "apple-pay--dark",
        LIGHT: "apple-pay--light"
    },
    Xn = 44,
    Zn = "_shopify_y",
    Br = 6,
    ta = "discount_code",
    ze = "https://static-na.payments-amazon.com/checkout.js",
    ea = {
        CURRENCY_CHANGE: "wallet_currency_change"
    },
    Qt = "VALIDATION_CUSTOM",
    $r = "portable-wallets",
    pt = {
        BUTTON: "accelerated-checkout-button",
        BUTTON_ON_CART: "accelerated-checkout-button-cart",
        CONTAINER: "accelerated-checkout-button-container"
    };
class Dt extends Error {
    constructor({
        code: t,
        message: n
    }) {
        const r = "An unexpected error happened likely because of customizations made to HTML/JavaScript on this site ".concat(n);
        super("[".concat(t, "]: ").concat(r)), c(this, "name", "DeveloperError"), c(this, "code", "unknown"), this.code = t
    }
}
class Vt extends Error {
    constructor() {
        super(...arguments), c(this, "name", "SilencedError")
    }
}
class ra extends Error {
    constructor() {
        super(...arguments), c(this, "name", "MissingConfigError")
    }
}
const na = ["Load failed", "Failed to fetch", "when attempting to fetch resource"],
    aa = ["Chrome-Lighthouse"],
    Te = {};

function ia(e, t) {
    if (!e.exceptions[0]) return !1;
    oa(e);
    try {
        return sa(e, t)
    } catch (n) {
        const r = n;
        console.error(r);
        const a = {
            errorClass: "UnfilterableError",
            message: "Could not properly filter error with message: ".concat(r.message),
            stacktrace: Ur($r, r)
        };
        return e.exceptions.unshift(a), !0
    }
}

function oa(e) {
    var t, n;
    e.context = window.location.pathname, e.request || (e.request = {}), e.request.url = window.location.href, e.device.orientation = (n = (t = window.screen) == null ? void 0 : t.orientation) == null ? void 0 : n.type, e.metaData = A(A({}, Te), e.metaData);
    const r = e.exceptions[0].stacktrace[0];
    r && !r.inProject && e.unhandled && (e.severity = "warning")
}

function sa(e, t) {
    var n, r, a, i;
    if (aa.some(s => navigator.userAgent.includes(s))) return !1;
    const o = e.exceptions[0];
    return na.some(s => {
        var l, u;
        return (u = (l = o.message) == null ? void 0 : l.includes(s)) != null ? u : !1
    }) ? !1 : t instanceof Dt ? (console.error(t), !1) : o.errorClass === Vt.name || (n = o.message) != null && n.includes("Component closed") || o.stacktrace.some(s => {
        var l;
        return (l = s.file) == null ? void 0 : l.includes("spin.dev")
    }) || o.errorClass === "OpenTelemetryClientError" && ((r = o.message) != null && r.match(/Server responded with ([45]\d\d|undefined)/) || (a = o.message) != null && a.includes("error found in #10 byte")) || (i = o.message) != null && i.includes("GraphQL mutation failed with status 404") ? !1 : o.stacktrace.some(s => !!(s != null && s.inProject))
}
var xr;
const la = {
        apiKey: "cb577dc231be1c7494db8a63441ef66b",
        appId: $r,
        appVersion: "0.0.0-c5cb7bd0f9a502832343cbe36bc00a0785d61864",
        releaseStage: "production",
        locale: "en",
        userAgent: navigator.userAgent,
        metadata: {
            user: {
                id: (xr = $t(Zn)) != null ? xr : "unknown"
            }
        },
        onError: ia
    },
    w = new Yn(la);

function Ve(e) {
    for (const [t, n] of Object.entries(e)) Te[t] = A(A({}, Te[t]), n)
}
var ca = {
    en: {
        instruments_copy: {
            checkout: {
                buy_now: "Buy it now"
            }
        },
        error_dialogs: {
            checkout: {
                title: "Transaction failed",
                generic_error: "Checkout is currently unavailable due to technical problems. Please try again in a few minutes.",
                button_text: "Close"
            },
            product: {
                out_of_stock: "This item is no longer available."
            },
            wallet: {
                title: "%{wallet} unavailable",
                generic_error: "There was an issue with %{wallet}. Try again or use a different payment method.",
                buy_with_prime: {
                    empty_line_items: {
                        title: "Buy with Prime no longer available",
                        content: "Items that were eligible for Buy with Prime are no longer in your cart."
                    }
                }
            }
        },
        more_payment_options: "More payment options",
        action: {
            view: "View %{content}"
        },
        subscriptions: {
            cancellation_policy: "Cancellation policy",
            policy_not_found: "The subscription policy could not be found. Refresh the page or contact us for more information."
        },
        shipping_methods: {
            connect_shipping_methods: "%{methodOne} and %{methodTwo}",
            choose_delivery_strategy: "Choose a delivery method"
        },
        order_summary: {
            total: "Total",
            subtotal: "Subtotal",
            duties: "Duties",
            taxes: "Taxes",
            shipping: "Shipping",
            shipping_one_time_purchase: "Shipping (One-time purchase)",
            shipping_subscription: "Shipping (Subscription)",
            discount: "Discount",
            subscriptions: {
                recurring_total_tooltip_line: "Does not include shipping, tax, duties, or any applicable discounts",
                recurring_totals: "%{fixedPrice} every %{interval}",
                recurring_totals_with_policies: {
                    one: "First payment %{fixedPrice}, then %{recurringPrice} every %{interval}",
                    other: "First %{count} payments %{fixedPrice} each, then %{recurringPrice} every %{interval}"
                },
                recurring_total_intervals: {
                    day: {
                        one: "day",
                        other: "%{count} days"
                    },
                    month: {
                        one: "month",
                        other: "%{count} months"
                    },
                    week: {
                        one: "week",
                        other: "%{count} weeks"
                    },
                    year: {
                        one: "year",
                        other: "%{count} years"
                    }
                }
            }
        },
        brand: {
            amazon_pay: "Amazon Pay",
            apple_pay: "Apple Pay",
            buy_with_prime: "Buy with Prime",
            paypal: "PayPal",
            google_pay: "Google Pay",
            shop_pay: "Shop Pay"
        },
        buy_with_button_content: "Buy with %{wallet}",
        shop_promise_delivery: {
            same_day: "Same-day delivery",
            next_day: "Next-day delivery",
            two_day: "2-day delivery"
        },
        errors: {
            address_unserviceable: "%{shopName} does not currently deliver to this address. Use a different address to complete your purchase.",
            missing: {
                email: "Enter an email address",
                first_name: "Enter a first name",
                last_name: "Enter a last name",
                address1: "Enter an address",
                address2: "Enter an apartment, suite, etc.",
                city: "Enter a city",
                zone: "Select a state / province",
                phone: "Enter a phone number",
                postal_code: "Enter a ZIP / postal code",
                shipping_option: "Select a shipping method"
            },
            invalid: {
                email: "Enter a valid email",
                first_name: "Enter a valid first name",
                last_name: "Enter a valid last name",
                address1: "Enter a valid address",
                address2: "Enter a valid apartment, suite, etc.",
                city: "Enter a valid city",
                zone: "Select a valid state / province",
                country: "Select a country / region",
                phone: "Enter a valid phone number",
                postal_code: "Enter a valid zip / postal code",
                billing_address: "Invalid billing address",
                shipping_address: "Invalid shipping address",
                payment_method: "Invalid payment method"
            },
            emojis: {
                first_name: "First name cannot contain emojis",
                last_name: "Last name cannot contain emojis",
                city: "City cannot contain emojis",
                address1: "Address line cannot contain emojis",
                address2: "Second address line cannot contain emojis",
                postal_code: "Postal code/zip cannot contain emojis"
            },
            too_long: {
                address1: "Address line is too long",
                address2: "Second address line is too long",
                first_name: "First name is too long",
                last_name: "Last name is too long",
                city: "City is too long"
            },
            url: {
                first_name: "First name cannot contain a URL",
                last_name: "Last name cannot contain a URL"
            },
            html_tags: {
                first_name: "First name cannot contain HTML tags",
                last_name: "Last name cannot contain HTML tags",
                city: "City cannot contain HTML tags",
                address1: "Address line cannot contain HTML tags",
                address2: "Second address line cannot contain HTML tags"
            },
            currency: {
                mismatch: "Your cart and currency has been updated based on your shipping country."
            }
        }
    }
};
let we;
class sr extends Error {
    constructor(t, n) {
        const r = "i18n: Missing or invalid translation '".concat(t, "' in '").concat(n, "'");
        super(r)
    }
}
class da extends Error {
    constructor(t, n, r) {
        const a = "i18n: Missing translation template key '".concat(t, "' for '").concat(n, "' in '").concat(r, "'");
        super(a)
    }
}
class ua extends Error {
    constructor(t, n, r) {
        const a = "i18n: Invalid pluralization for '".concat(t, "':'").concat(n, "' in '").concat(r, "'");
        super(a)
    }
}

function ie() {
    return we == null && (we = ha(ca)), we
}

function ha(e) {
    const t = (i, o) => typeof i != "string" && o.count !== "undefined",
        n = (i, o) => {
            let s = o === 1 ? "one" : "other";
            return o === 0 && typeof i != "string" && i.zero !== "undefined" && (s = "zero"), s
        },
        r = (i, o = {}) => {
            const s = i.match(/%\{.+?\}/g);
            return s ? s.reduce((l, u) => {
                const d = u.replace(/%\{(.*)\}/, "$1");
                return o[d] ? l.replace(u, o[d]) : (w.notify(new da(d, i, a)), l)
            }, i) : i
        },
        a = pa();
    return {
        locale: a,
        translate(i, o = {}) {
            var s;
            const l = i.split(".");
            let u = e[a];
            try {
                for (const d of l) switch (typeof u) {
                    case "object":
                        u = u[d];
                        break;
                    case "string":
                    case "undefined":
                        throw new sr(i, a)
                }
                if (t(u, o)) {
                    if (typeof u == "string") throw new ua(i, u, a);
                    u = u[n(u, o.count)]
                }
                if (typeof u != "string") throw new sr(i, a);
                return r(u, o)
            } catch (d) {
                return w.notify(d), (s = o.defaultValue) != null ? s : i
            }
        }
    }
}

function pa() {
    return "en"
}
var b = (e => (e.BuyItNow = "BuyItNow", e.MoreOptions = "MoreOptions", e.ApplePay = "ApplePay", e.PayPal = "PayPal", e.Venmo = "Venmo", e.GooglePay = "GooglePay", e.ShopPay = "ShopPay", e.MetaPay = "FacebookPay", e.BuyWithPrime = "BuyWithPrime", e.AmazonPay = "AmazonPay", e.Unknown = "Unknown", e))(b || {}),
    C = (e => (e.CartPage = "cart_page", e.CartAjax = "cart_ajax", e.ProductPage = "product", e.Checkout = "checkout", e.Unknown = "unknown", e))(C || {}),
    xt = (e => (e.CartChange = "/cart/change", e.CartUpdate = "/cart/update", e.CartAdd = "/cart/add", e.CartClear = "/cart/clear", e))(xt || {}),
    Ht = (e => (e.OneTimePurchase = "ONE_TIME_PURCHASE", e.Subscription = "SUBSCRIPTION", e))(Ht || {});

function ma(e) {
    const t = document.querySelectorAll("shopify-accelerated-checkout .shopify-payment-button__skeleton, shopify-accelerated-checkout-cart .wallet-cart-button__skeleton"),
        n = document.getElementById("shopify-buyer-consent");
    for (let r = 0; r < t.length; r++) t[r].remove();
    n && n.remove()
}

function Hr(e) {
    !(e instanceof ErrorEvent) || !(typeof e.message == "string" && e.message.includes("import.meta")) || !(typeof e.filename == "string" && e.filename.includes("portable-wallets")) || (window.removeEventListener("error", Hr), window.Shopify.PaymentButton.failedToLoad = e, document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", window.Shopify.PaymentButton.init) : window.Shopify.PaymentButton.init())
}
window.addEventListener("error", Hr);

function E(e, t) {
    if (!{}.hasOwnProperty.call(e, t)) throw new TypeError("attempted to use private field on non-instance");
    return e
}
var ya = 0;

function mt(e) {
    return "__private_" + ya++ + "_" + e
}

function oe(e) {
    return Object.entries(e).map(([t, n]) => ({
        key: t,
        value: {
            stringValue: String(n)
        }
    }))
}

function ga(e) {
    return Object.entries(e).map(([t, n]) => ({
        key: t,
        value: fa(n)
    }))
}

function fa(e) {
    switch (typeof e) {
        case "boolean":
            return {
                boolValue: !!e
            };
        case "number":
            return Number.isInteger(e) ? {
                intValue: Number(e)
            } : {
                doubleValue: Number(e)
            };
        case "string":
        default:
            return {
                stringValue: String(e)
            }
    }
}
const qe = 1,
    ba = wa(5, 2, 12);

function wa(e, t, n) {
    const r = [0];
    for (let a = 0; a < n; a++) {
        const i = Math.floor(e * t ** a);
        r.push(i)
    }
    return r
}
var it = mt("exporter"),
    $ = mt("attributes"),
    x = mt("metrics"),
    ot = mt("logs");
class _a {
    constructor({
        exporter: t,
        attributes: n
    }) {
        Object.defineProperty(this, it, {
            writable: !0,
            value: void 0
        }), Object.defineProperty(this, $, {
            writable: !0,
            value: void 0
        }), Object.defineProperty(this, x, {
            writable: !0,
            value: []
        }), Object.defineProperty(this, ot, {
            writable: !0,
            value: []
        }), E(this, it)[it] = t, E(this, $)[$] = n != null ? n : {}
    }
    addAttributes(t) {
        E(this, $)[$] = A(A({}, E(this, $)[$]), t)
    }
    histogram({
        name: t,
        value: n,
        unit: r,
        bounds: a,
        attributes: i,
        scale: o
    }) {
        const s = Date.now() * 1e6;
        a ? E(this, x)[x].push({
            name: t,
            type: "histogram",
            value: n,
            unit: r,
            timeUnixNano: s,
            attributes: i,
            bounds: a
        }) : E(this, x)[x].push({
            name: t,
            type: "exponential_histogram",
            value: n,
            unit: r,
            timeUnixNano: s,
            attributes: i,
            scale: o
        })
    }
    counter({
        name: t,
        value: n,
        unit: r,
        attributes: a
    }) {
        const i = Date.now() * 1e6;
        E(this, x)[x].push({
            name: t,
            type: "counter",
            value: n,
            unit: r,
            timeUnixNano: i,
            attributes: a
        })
    }
    gauge({
        name: t,
        value: n,
        unit: r,
        attributes: a
    }) {
        const i = Date.now() * 1e6;
        E(this, x)[x].push({
            name: t,
            type: "gauge",
            value: n,
            unit: r,
            timeUnixNano: i,
            attributes: a
        })
    }
    log({
        body: t,
        attributes: n
    }) {
        const r = Date.now() * 1e6;
        E(this, ot)[ot].push({
            timeUnixNano: r,
            body: t,
            attributes: n
        })
    }
    async exportMetrics() {
        const t = {};
        E(this, x)[x].forEach(r => {
            switch (r.attributes = A(A({}, E(this, $)[$]), r.attributes), r.type) {
                case "histogram":
                    Aa(t, r);
                    break;
                case "exponential_histogram":
                    Sa(t, r);
                    break;
                case "counter":
                    Ca(t, r);
                    break;
                case "gauge":
                    Ea(t, r);
                    break
            }
        });
        const n = Object.values(t);
        n.length !== 0 && (E(this, x)[x] = [], await E(this, it)[it].exportMetrics(n))
    }
    async exportLogs() {
        const t = E(this, ot)[ot].map(n => {
            const r = {
                timeUnixNano: n.timeUnixNano,
                observedTimeUnixNano: n.timeUnixNano,
                attributes: ga(A(A({}, E(this, $)[$]), n.attributes))
            };
            return n.body && (r.body = {
                stringValue: n.body
            }), r
        });
        t.length !== 0 && (E(this, ot)[ot] = [], await E(this, it)[it].exportLogs(t))
    }
}

function Aa(e, t) {
    var n;
    const {
        name: r,
        value: a,
        unit: i,
        timeUnixNano: o,
        attributes: s
    } = t, l = (n = t.bounds) !== null && n !== void 0 ? n : ba, u = new Array(l.length + 1).fill(0);
    e[r] || (e[r] = {
        name: r,
        unit: i || "1",
        histogram: {
            aggregationTemporality: qe,
            dataPoints: []
        }
    });
    for (let d = 0; d < u.length; d++) {
        const p = l[d];
        if (p === void 0) u[d] = 1;
        else if (a <= p) {
            u[d] = 1;
            break
        }
    }
    e[r].histogram.dataPoints.push({
        startTimeUnixNano: o,
        timeUnixNano: o,
        count: 1,
        sum: a,
        min: a,
        max: a,
        bucketCounts: u,
        explicitBounds: l,
        attributes: oe(s != null ? s : {})
    })
}

function Sa(e, t) {
    const {
        name: n,
        value: r,
        unit: a,
        timeUnixNano: i,
        attributes: o,
        scale: s
    } = t;
    e[n] || (e[n] = {
        name: n,
        unit: a || "1",
        exponentialHistogram: {
            aggregationTemporality: qe,
            dataPoints: []
        }
    });
    const l = r <= 0 ? 0 : r,
        u = s || 3,
        d = 2 ** u / Math.log(2),
        p = Math.ceil(Math.log(r) * d) - 1,
        y = r <= 0 ? 1 : 0,
        m = {
            offset: 0,
            bucketCounts: []
        },
        v = {
            offset: r > 0 ? p : 0,
            bucketCounts: r > 0 ? [1] : []
        };
    e[n].exponentialHistogram.dataPoints.push({
        attributes: oe(o != null ? o : {}),
        startTimeUnixNano: i,
        timeUnixNano: i,
        count: 1,
        sum: l,
        scale: u,
        zeroCount: y,
        positive: v,
        negative: m,
        min: l,
        max: l,
        zeroThreshold: 0
    })
}

function Ca(e, t) {
    const {
        name: n,
        value: r,
        unit: a,
        timeUnixNano: i,
        attributes: o
    } = t;
    e[n] || (e[n] = {
        name: n,
        unit: a || "1",
        sum: {
            aggregationTemporality: qe,
            isMonotonic: !0,
            dataPoints: []
        }
    }), e[n].sum.dataPoints.push({
        startTimeUnixNano: i,
        timeUnixNano: i,
        asDouble: r,
        attributes: oe(o != null ? o : {})
    })
}

function Ea(e, t) {
    const {
        name: n,
        value: r,
        unit: a,
        timeUnixNano: i,
        attributes: o
    } = t;
    e[n] || (e[n] = {
        name: n,
        unit: a || "1",
        gauge: {
            dataPoints: []
        }
    }), e[n].gauge.dataPoints.push({
        startTimeUnixNano: i,
        timeUnixNano: i,
        asDouble: r,
        attributes: oe(o != null ? o : {})
    })
}
var Lt = mt("url"),
    st = mt("serviceName"),
    kt = mt("logger");
class va {
    constructor(t, n, r) {
        Object.defineProperty(this, Lt, {
            writable: !0,
            value: void 0
        }), Object.defineProperty(this, st, {
            writable: !0,
            value: void 0
        }), Object.defineProperty(this, kt, {
            writable: !0,
            value: void 0
        }), E(this, Lt)[Lt] = t.replace(/\/v1\/(logs|metrics|traces)\/?$/, ""), E(this, st)[st] = n, E(this, kt)[kt] = r == null ? void 0 : r.logger
    }
    async exportMetrics(t) {
        const n = {
            resourceMetrics: [{
                resource: {
                    attributes: [{
                        key: "service.name",
                        value: {
                            stringValue: E(this, st)[st]
                        }
                    }]
                },
                scopeMetrics: [{
                    scope: {
                        name: "open-telemetry-mini-client",
                        version: "1.1.0",
                        attributes: []
                    },
                    metrics: t
                }]
            }]
        };
        await this.exportTo(n, "/v1/metrics")
    }
    async exportLogs(t) {
        const n = {
            resourceLogs: [{
                resource: {
                    attributes: [{
                        key: "service.name",
                        value: {
                            stringValue: E(this, st)[st]
                        }
                    }]
                },
                scopeLogs: [{
                    scope: {
                        name: "open-telemetry-mini-client",
                        version: "1.1.0",
                        attributes: []
                    },
                    logRecords: t
                }]
            }]
        };
        await this.exportTo(n, "/v1/logs")
    }
    async exportTo(t, n) {
        var r;
        const a = await fetch("".concat(E(this, Lt)[Lt]).concat(n), {
            method: "POST",
            keepalive: !0,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(t)
        });
        if ((r = E(this, kt)[kt]) === null || r === void 0 || r.log({
                status: a.status
            }), !a.ok) {
            if (a.status === 400) {
                const i = await a.text();
                throw new Kt("Invalid OpenTelemetry Data: ".concat(i))
            }
            if (a.status === 429 || a.status === 503) {
                const i = await a.json(),
                    o = a.headers.get("Retry-After"),
                    s = o ? {
                        seconds: Number(o)
                    } : void 0;
                throw new Kt("Server did not accept data", {
                    errorData: i,
                    retryAfter: s,
                    body: t
                })
            }
            throw new Kt("Server responded with ".concat(a.status))
        }
    }
}
class Kt extends Error {
    constructor(t, n) {
        super(t), this.metadata = void 0, this.name = "OpenTelemetryClientError", this.metadata = n
    }
}
const Ia = "https://otlp-http-production.shopifysvc.com/v1/metrics",
    Pa = "portable_wallets";
class Da {
    constructor(t) {
        this.exporter = t
    }
    async exportMetrics(t) {
        var n;
        try {
            await this.exporter.exportMetrics(t)
        } catch (r) {
            if (r instanceof Kt) {
                const a = (n = r.metadata) == null ? void 0 : n.retryAfter;
                if (a) {
                    await new Promise(i => {
                        setTimeout(() => {
                            this.exportMetrics(t), i()
                        }, a.seconds * 1e3)
                    });
                    return
                }
            }
            throw r
        }
    }
    async exportLogs() {}
}
const Ta = new va(Ia, Pa),
    Na = new Da(Ta),
    P = new _a({
        exporter: Na
    }),
    Mt = [];

function Z(e, t, n) {
    if (window.customElements != null) try {
        const r = t;
        window.customElements.get(e) || (window.customElements.define(e, r), n != null && n.isChildCustomElement && Mt.push(e))
    } catch (r) {
        w.notify(r), ma()
    }
}

function Xt() {
    const e = new URLSearchParams(window.location.search);
    return function(t) {
        return !!e.get(t)
    }
}

function Ra() {
    var e, t, n, r;
    const a = (e = window.Shopify) == null ? void 0 : e.CartType;
    if (a === C.CartAjax) return C.CartAjax;
    if (a === C.CartPage) return C.CartPage;
    const i = (r = (n = (t = window.ShopifyAnalytics) == null ? void 0 : t.meta) == null ? void 0 : n.page) == null ? void 0 : r.pageType;
    if (i) switch (i.toLowerCase()) {
        case "product":
            return C.ProductPage;
        case "cart":
            return C.CartPage
    }
    const o = document.querySelector("#shop-js-analytics");
    if (o) try {
        const s = JSON.parse(o.textContent || "{}");
        if (s.pageType) switch (s.pageType.toLowerCase()) {
            case "product":
                return C.ProductPage;
            case "cart":
                return C.CartPage
        }
    } catch (s) {
        console.error("Error parsing JSON script tag:", s)
    }
    return C.Unknown
}

function ut(e) {
    return Number(e).toFixed(2)
}

function se(e) {
    if (!(!e || !e.id || !e.id.includes("gid://shopify/Cart/"))) return e.id.replace("gid://shopify/Cart/", "").split("?")[0]
}

function Q() {
    let e;
    return [new Promise(t => e = t), e]
}
const La = {
    force_shop_pay_product: "direct_checkout_product",
    force_shop_pay_cart: "direct_checkout_cart"
};

function tt(e, t = "no_redirect_for_checkout") {
    P.exportMetrics();
    const n = new URL(e);
    switch (t) {
        case "skip_shop_pay":
            n.searchParams.set("skip_shop_pay", "true");
            break;
        case "no_redirect_for_checkout":
            n.searchParams.set("storefront_wallet", "true");
            break;
        case "force_shop_pay_cart":
        case "force_shop_pay_product":
        case "force_shop_pay":
            {
                n.searchParams.set("payment", "shop_pay");
                const r = La[t];r && n.searchParams.set("redirect_source", r);
                break
            }
    }
    window.location.assign(n.toString())
}

function Gr() {
    return !!document.querySelector('[data-source-attribution="shopify.shop-promise-pdp"]')
}

function Ft() {
    return new Date().getTime()
}
class ka extends HTMLElement {
    constructor() {
        super(), c(this, "overflow"), c(this, "formerFocus"), this.attachShadow({
            mode: "open"
        }), this.overflow = "", this.formerFocus = document.activeElement
    }
    connectedCallback() {
        const t = ie();
        this.render(t);
        const n = this.shadowRoot,
            r = n.getElementById("modal");
        n.querySelectorAll("button").forEach(o => o.addEventListener("click", this.closeModal.bind(this)));
        const a = n.getElementById("overlay");
        a == null || a.addEventListener("click", o => this.handleOutsideClick(o, r)), document.addEventListener("keydown", this.handleEscapeKey.bind(this));
        const i = document.createElement("style");
        i.textContent = zn, n.appendChild(i), this.overflow = document.body.style.overflow, document.body.style.overflow = "hidden", this.trapFocus(r, n), Z("svg-icon", Gn)
    }
    trapFocus(t, n) {
        if (!t) return;
        const r = t.querySelectorAll("a[href], button"),
            a = Array.from(r),
            i = a[0],
            o = a[a.length - 1];
        t.addEventListener("keydown", s => {
            s.key === "Tab" && !s.shiftKey && n.activeElement === o && (s.preventDefault(), i.focus()), s.key === "Tab" && s.shiftKey && n.activeElement === i && (s.preventDefault(), o.focus())
        }), i.focus()
    }
    handleOutsideClick(t, n) {
        n && (n.contains(t.target) || this.closeModal())
    }
    handleEscapeKey(t) {
        t.key === "Escape" && this.closeModal()
    }
    closeModal() {
        var t;
        document.body.style.overflow = this.overflow, this.remove(), this.formerFocus && "focus" in (this == null ? void 0 : this.formerFocus) && typeof this.formerFocus.focus == "function" && ((t = this.formerFocus) == null || t.focus())
    }
    render(t) {
        const n = this.getAttribute("title"),
            r = this.getAttribute("has-close-button"),
            a = t.translate("error_dialogs.checkout.button_text"),
            i = '\n      <footer>\n        <button type="button" id="close-button" tabindex="0">'.concat(a, "</button>\n      </footer>\n    ");
        this.shadowRoot.innerHTML = '\n      <div id="overlay">\n        <div id="modal" role="dialog" aria-modal="true" aria-labelledby="title">\n          <header>\n            <h2 id="title">\n              <span class="capitalize">'.concat(n, '</span>\n            </h2>\n            <button type="button" id="close-icon" aria-label=').concat(a, ' tabindex="0">\n              <svg-icon color="gray"></svg-icon>\n            </button>\n          </header>\n          <div id="content">\n            <p><slot></slot></p>\n          </div>\n          ').concat(r ? i : "", "\n        </div>\n      </div>\n    ")
    }
}
const Oa = "@keyframes topLevelModalLoadingSkeleton{50%{opacity:1}75%{opacity:.5}to{opacity:1}}top-level-modal .text-skeleton{display:inline-block;width:100%;height:14px;margin-bottom:7px;animation:topLevelModalLoadingSkeleton 4s ease infinite;animation-delay:-.168s;text-decoration:none!important;background-color:#dedede}top-level-modal .text-skeleton:last-of-type{width:50%}";

function le({
    type: e = "button",
    label: t = void 0
} = {}) {
    const n = document.createElement("button");
    return n.type = e, t && n.setAttribute("aria-label", t), n
}

function ce(e, t) {
    for (const [n, r] of Object.entries(t)) e.setAttribute(n, r)
}

function lr(e, t) {
    for (const [n, r] of Object.entries(t)) e.style.setProperty(n, r)
}

function yt(e, t) {
    const n = document.createElement("top-level-modal");
    n.textContent = t, ce(n, {
        "data-testid": "top-level-modal",
        "has-close-button": "true",
        title: e
    }), document.body.appendChild(n)
}

function je(e, t, n) {
    const r = document.createElement("top-level-modal");
    ce(r, {
        "data-testid": "top-level-modal",
        title: e
    }), t instanceof Promise ? (r.innerHTML = "\n      <style>".concat(Oa, '</style>\n      <span class="text-skeleton">&nbsp;</span>\n      <span class="text-skeleton">&nbsp;</span>\n      <span class="text-skeleton">&nbsp;</span>\n      <span class="text-skeleton">&nbsp;</span>\n      <span class="text-skeleton">&nbsp;</span>\n    '), t.then(a => {
        a && a !== "" ? r.innerHTML = a : r.innerHTML = n != null ? n : ""
    }).catch(() => {
        r.innerHTML = n != null ? n : ""
    })) : r.innerHTML = t, document.body.appendChild(r)
}

function et(e) {
    yt(e.translate("error_dialogs.checkout.title"), e.translate("error_dialogs.product.out_of_stock"))
}

function W(e, t) {
    yt(t.translate("error_dialogs.wallet.title", {
        wallet: e
    }), t.translate("error_dialogs.wallet.generic_error", {
        wallet: e
    }))
}
Z("top-level-modal", ka);
class de extends HTMLElement {
    get buyerCountry() {
        return this.getAttribute("buyer-country")
    }
    get recommendedInstrument() {
        return this.getAttribute("recommended-instrument")
    }
    get buyerCurrency() {
        const t = this.getAttribute("buyer-currency");
        if (t == null) throw new Error("WalletElement buyer-currency is null");
        return t
    }
    get accessToken() {
        return this.getAttribute("access-token")
    }
    get disabled() {
        return this.hasAttribute("disabled")
    }
    set disabled(t) {
        t ? this.setAttribute("disabled", "") : this.removeAttribute("disabled")
    }
    get hasSellingPlan() {
        const t = this.getAttribute("has-selling-plan");
        return t === "true" || t === ""
    }
    set hasSellingPlan(t) {
        t ? this.setAttribute("has-selling-plan", "") : this.removeAttribute("has-selling-plan")
    }
    get isShippingRequired() {
        const t = this.getAttribute("requires-shipping");
        return t === "true" || t === ""
    }
    set isShippingRequired(t) {
        t ? this.setAttribute("requires-shipping", "") : this.removeAttribute("requires-shipping")
    }
}
const xa = "#more-payment-options-link{cursor:pointer}",
    Ma = "https://monorail-edge.shopifysvc.com",
    Fa = "/v1/produce";

function Ua() {
    if (typeof crypto < "u" && crypto && typeof crypto.randomUUID == "function") return crypto.randomUUID();
    const e = new Array(36);
    for (let t = 0; t < 36; t++) e[t] = Math.floor(Math.random() * 16);
    return e[14] = 4, e[19] = e[19] &= -5, e[19] = e[19] |= 8, e[8] = e[13] = e[18] = e[23] = "-", e.map(t => t.toString(16)).join("")
}

function Ba(e) {
    const t = {
        "Content-Type": "application/json; charset=utf-8",
        "X-Monorail-Edge-Event-Created-At-Ms": (e && e.eventCreatedAtMs || Date.now()).toString(),
        "X-Monorail-Edge-Event-Sent-At-Ms": Date.now().toString(),
        "X-Monorail-Edge-Client-Message-Id": (e && e.clientMessageId || Ua()).toString()
    };
    return e && e.userAgent && (t["User-Agent"] = e.userAgent), e && e.remoteIp && (t["X-Forwarded-For"] = e.remoteIp), t
}
async function $a({
    endpoint: e,
    event: t,
    keepalive: n
}) {
    return fetch(e != null ? e : Ma + Fa, {
        method: "post",
        headers: Ba(t.metadata),
        body: JSON.stringify({
            schema_id: t.schemaId,
            payload: t.payload
        }),
        keepalive: n
    })
}
var R = (e => (e.Decelerated = "portable_wallets_decelerated", e.InitCompleted = "portable_wallets_init_completed", e.InstrumentLoadEligibility = "portable_wallets_instrument_load_eligibility", e.InstrumentLoadTime = "portable_wallets_instrument_load_time", e.InstrumentLoadTimeFromPageLoad = "portable_wallets_instrument_load_time_from_page_load", e.MonorailProduceError = "portable_wallets_monorail_produce_error", e.SheetClicked = "portable_wallets_sheet_clicked", e.SheetCancelled = "portable_wallets_sheet_cancelled", e.SheetFailed = "portable_wallets_sheet_failed", e.AuthorizationAttempt = "portable_wallets_authorization_attempt", e.AuthorizationComplete = "portable_wallets_authorization_complete", e.CartTokenMissing = "portable_wallets_cart_token_missing", e.GooglePayNotEligibleWebview = "portable_wallets_google_pay_not_eligible_webview", e.WalletConfigDeveloperError = "portable_wallets_wallet_config_developer_error", e.LegacyCartCookie = "portable_wallets_legacy_cart_cookie", e))(R || {}),
    ht = (e => (e.InstrumentSdkLoaded = "portable_wallets_instrument_sdk_loaded", e.InstrumentSdkFailed = "portable_wallets_instrument_sdk_failed", e.InstrumentSdkEligible = "portable_wallets_instrument_sdk_eligible", e.InstrumentSdkNotEligible = "portable_wallets_instrument_sdk_not_eligible", e))(ht || {});
const Ha = ["Chrome-Lighthouse"];

function Ga() {
    const e = navigator.userAgent;
    return Ha.some(t => e.includes(t))
}
async function za(e) {
    if (Ga()) return;
    w.leaveBreadcrumb("monorail event produced to ".concat(e.schemaId), e);
    let t;
    try {
        t = await $a({
            event: e
        })
    } catch (n) {}
    if (!(t != null && t.ok)) try {
        P.counter({
            name: R.MonorailProduceError,
            value: 1,
            attributes: {
                schemaId: e.schemaId
            }
        })
    } catch (n) {}
}
const cr = "shopify_wallet_checkout_track/6.2";
async function U(e) {
    var t, n, r, a, i, o, s;
    let l = null;
    try {
        const u = await Va();
        if (l = {
                schemaId: cr,
                payload: {
                    app_name: "storefront",
                    page_type: Ra(),
                    checkout_one: !0,
                    event: e.event,
                    event_subtype: e.eventSubtype,
                    checkout_token: e.checkoutToken,
                    instrument_id: e.instrumentId,
                    ttl: e.ttl,
                    error_reason: e.errorReason,
                    uniq_token: (t = u == null ? void 0 : u.uniqToken) != null ? t : "",
                    visit_token: (n = u == null ? void 0 : u.visitToken) != null ? n : "",
                    micro_session_id: (r = u == null ? void 0 : u.microSessionId) != null ? r : "",
                    micro_session_count: (a = u == null ? void 0 : u.microSessionCount) != null ? a : 0,
                    shop_id: (i = u == null ? void 0 : u.shopId) != null ? i : 0,
                    theme_id: u == null ? void 0 : u.themeId,
                    theme_city_hash: (o = u == null ? void 0 : u.themeCityHash) != null ? o : "",
                    content_language: (s = u == null ? void 0 : u.contentLanguage) != null ? s : "",
                    referer: u == null ? void 0 : u.referer
                }
            }, !(e != null && e.event)) {
            w.notify(new Error("Event is required"), {
                metadata: {
                    request: {
                        monorail: {
                            schemaId: cr,
                            payload: JSON.stringify(l)
                        }
                    }
                }
            });
            return
        }
        await za(l)
    } catch (u) {
        w.notify(new Error("Failed to send monorail event: ".concat(u)), {
            metadata: {
                request: {
                    monorail: {
                        payload: JSON.stringify(l != null ? l : e)
                    }
                }
            }
        })
    }
}
async function Va() {
    var e, t, n, r, a;
    return (t = (e = window == null ? void 0 : window.ShopifyAnalytics) == null ? void 0 : e.lib) != null && t.trekkie || await new Promise(i => {
        const o = setInterval(() => {
                var l, u;
                (u = (l = window == null ? void 0 : window.ShopifyAnalytics) == null ? void 0 : l.lib) != null && u.trekkie && (clearInterval(o), i())
            }, 100),
            s = setTimeout(() => {
                clearInterval(o), clearTimeout(s), i()
            }, 7e3)
    }), (a = (r = (n = window.ShopifyAnalytics) == null ? void 0 : n.lib) == null ? void 0 : r.trekkie) == null ? void 0 : a.defaultAttributes
}
var k = (e => (e.CartInitCalled = "portable_wallets_cart_init_called", e.ClickSheetCancelled = "portable_wallets_instrument_click_sheet_cancelled", e.ClickSheetFailed = "portable_wallets_instrument_click_sheet_failure", e.ClickSheetSuccess = "portable_wallets_instrument_click_sheet_success", e.SheetFailed = "portable_wallets_instrument_sheet_failed", e.AuthorizationAttempt = "portable_wallets_authorization_attempt", e.AuthorizationComplete = "portable_wallets_authorization_complete", e.InitCalled = "portable_wallets_init_called", e.InitFailed = "portable_wallets_init_failed", e.InitSuccess = "portable_wallets_init_success", e.UpdateFailed = "portable_wallets_instrument_update_failed", e.InstrumentLoaded = "portable_wallets_instrument_loaded", e.InstrumentLoadFailed = "portable_wallets_instrument_load_failed", e))(k || {});
const dr = {
    [C.Checkout]: "bwp_checkout_widget_click",
    [C.CartAjax]: "bwp_cart_widget_click",
    [C.CartPage]: "bwp_cart_widget_click",
    [C.ProductPage]: "bwp_widget_click",
    [C.Unknown]: "bwp_widget_click"
};

function qa({
    apiClientId: e,
    skus: t,
    pageType: n
}) {
    var r;
    if (!((r = window.Shopify) != null && r.analytics)) return;
    const a = n && dr[n] || "bwp_widget_click";
    a === dr[C.Checkout] && window.Shopify.analytics.publish("shopify:app:pixels:load:".concat(e), {}, {
        sendTo: "PIXEL-LOADER"
    }), window.Shopify.analytics.publish(a, {
        skus: t
    }, {
        sendTo: e
    })
}

function ja() {
    U({
        event: k.InitCalled
    })
}

function Wa(e) {
    var t, n;
    const r = "error" in e ? "failed" : e.result,
        a = "error" in e && ci(e.error) ? "[".concat(e.error.name, "]: ").concat(e.error.code) : "eventType" in e && e.eventType || void 0;
    U({
        event: r === "success" ? k.InitSuccess : k.InitFailed,
        eventSubtype: a
    }), P.counter({
        name: R.InitCompleted,
        value: 1,
        attributes: {
            result: r,
            eventType: a,
            recoveredFailure: !!((n = (t = window.Shopify) == null ? void 0 : t.PaymentButton) != null && n.failedToLoad)
        }
    })
}

function Ya({
    instrumentOrComponentName: e,
    result: t,
    measurement: n
}) {
    U({
        event: t === "success" ? k.InstrumentLoaded : k.InstrumentLoadFailed,
        instrumentId: e,
        ttl: n
    }), n != null && (P.histogram({
        name: R.InstrumentLoadTime,
        value: n,
        attributes: {
            instrument: e
        },
        unit: "ms"
    }), P.histogram({
        name: R.InstrumentLoadTimeFromPageLoad,
        value: window.performance.now(),
        attributes: {
            instrument: e
        },
        unit: "ms"
    }))
}

function Ka({
    instrument: e,
    measurement: t,
    result: n
}) {
    const r = n === "success" ? ht.InstrumentSdkLoaded : ht.InstrumentSdkFailed;
    U({
        event: r,
        instrumentId: e,
        ttl: t,
        errorReason: n === "success" ? void 0 : n
    }), t != null && P.histogram({
        name: ht.InstrumentSdkLoaded,
        value: t,
        attributes: {
            instrument: e,
            result: n
        },
        unit: "ms"
    })
}

function Ja({
    instrument: e,
    result: t,
    reason: n
}) {
    const r = t === "success" ? ht.InstrumentSdkEligible : ht.InstrumentSdkNotEligible;
    U({
        event: r,
        instrumentId: e
    }), P.counter({
        name: ht.InstrumentSdkEligible,
        value: 1,
        attributes: {
            instrument: e,
            reason: n,
            result: t
        }
    })
}

function Qa({
    instrument: e,
    result: t,
    reason: n
}) {
    P.counter({
        name: R.InstrumentLoadEligibility,
        value: 1,
        attributes: {
            instrument: e,
            result: t,
            reason: n
        }
    })
}

function Xa({
    instrument: e,
    result: t,
    checkoutToken: n,
    webPixelMetaData: r
}) {
    U({
        event: t === "success" ? k.ClickSheetSuccess : k.ClickSheetFailed,
        checkoutToken: n,
        instrumentId: e
    }), P.counter({
        name: R.SheetClicked,
        value: 1,
        attributes: {
            instrument: e,
            result: t
        }
    }), e === b.BuyWithPrime && r && qa(r)
}

function Za(e, t) {
    U({
        event: "".concat(k.UpdateFailed, "-").concat(t),
        instrumentId: e
    })
}

function ti(e) {
    U({
        event: k.ClickSheetCancelled,
        instrumentId: e
    }), P.counter({
        name: R.SheetCancelled,
        value: 1,
        attributes: {
            instrument: e
        }
    })
}

function ei(e, t) {
    U({
        event: k.SheetFailed,
        instrumentId: e,
        errorReason: t == null ? void 0 : t.message
    }), P.counter({
        name: R.SheetFailed,
        value: 1,
        attributes: {
            instrument: e
        }
    })
}

function ri(e) {
    U({
        event: k.AuthorizationAttempt,
        instrumentId: e
    }), P.counter({
        name: R.AuthorizationAttempt,
        value: 1,
        attributes: {
            instrument: e
        }
    })
}

function ni({
    instrument: e,
    measurement: t,
    result: n
}) {
    U({
        event: k.AuthorizationComplete,
        eventSubtype: n,
        ttl: t,
        instrumentId: e
    }), t != null && P.histogram({
        name: R.AuthorizationComplete,
        value: t,
        attributes: {
            instrument: e,
            result: n
        },
        unit: "ms"
    })
}

function ai({
    instrument: e,
    reason: t
}) {
    P.counter({
        name: R.Decelerated,
        value: 1,
        attributes: {
            instrument: e,
            reason: t
        }
    }), P.exportMetrics()
}

function ii({
    reason: e
}) {
    P.counter({
        name: R.CartTokenMissing,
        value: 1,
        attributes: {
            reason: e
        }
    })
}

function oi() {
    P.counter({
        name: R.WalletConfigDeveloperError,
        value: 1
    })
}

function si() {
    P.counter({
        name: R.LegacyCartCookie,
        value: 1
    })
}

function li() {
    window.setInterval(() => {
        P.exportMetrics()
    }, 1e3)
}

function ci(e) {
    return (e == null ? void 0 : e.name) === Dt.name
}
const g = {
    initStarted: T(ja),
    initCompleted: T(Wa),
    instrumentLoaded: T(Ya),
    instrumentLoadEligibility: T(Qa),
    instrumentSDKLoaded: T(Ka),
    instrumentSDKEligible: T(Ja),
    sheetClicked: T(Xa),
    sheetCancelled: T(ti),
    sheetFailed: T(ei),
    updateFailed: T(Za),
    authorizationAttempt: T(ri),
    authorizationComplete: T(ni),
    startExporter: T(li),
    decelerated: T(ai),
    cartTokenMissing: T(ii),
    walletConfigDeveloperError: T(oi),
    legacyCartCookie: T(si)
};

function T(e) {
    return (...t) => {
        try {
            e(...t)
        } catch (n) {
            w.notify(n)
        }
    }
}

function rt(e) {
    const t = e === b.MetaPay ? "MetaPay" : e,
        n = new CustomEvent("acceleratedCheckoutStarted", {
            detail: {
                acceleratedCheckoutName: t
            }
        });
    document.dispatchEvent(n)
}

function di(e) {
    const t = n => {
        n.persisted && (e(), window.removeEventListener("pageshow", t))
    };
    window.addEventListener("pageshow", t)
}
var h = (e => (e.InvalidLanguage = "Variable $language of type LanguageCode was provided invalid value", e.InvalidCountry = "Variable $country of type CountryCode was provided invalid value", e.MissingCartId = "Variable $cartId of type ID! was provided invalid value", e.BuyerIdentityInvalidCountry = "Variable $buyerIdentity of type CartBuyerIdentityInput! was provided invalid value for countryCode", e.BuyerIdentityInvalidPhone = "INVALID: buyerIdentity.phone", e.BuyerIdentityEmailRequired = "BUYER_IDENTITY_EMAIL_REQUIRED", e.BuyerIdentityEmailDomainInvalid = "BUYER_IDENTITY_EMAIL_DOMAIN_IS_INVALID", e.BuyerIdentityEmailNotExpectedPattern = "BUYER_IDENTITY_EMAIL_DOES_NOT_MATCH_EXPECTED_PATTERN", e.BuyerIdentityEmailInvalid = "INVALID: buyerIdentity.email", e.DeliveryFirstNameInvalid = "DELIVERY_FIRST_NAME_INVALID", e.DeliveryFirstNameRequired = "DELIVERY_FIRST_NAME_REQUIRED", e.DeliveryFirstNameContainsEmojis = "ADDRESS_FIELD_CONTAINS_EMOJIS: buyerIdentity.deliveryAddressPreferences.0.deliveryAddress.firstName", e.DeliveryFirstNameTooLong = "ADDRESS_FIELD_IS_TOO_LONG: buyerIdentity.deliveryAddressPreferences.0.deliveryAddress.firstName", e.DeliveryFirstNameContainsUrl = "ADDRESS_FIELD_CONTAINS_URL: buyerIdentity.deliveryAddressPreferences.0.deliveryAddress.firstName", e.DeliveryFirstNameContainsHtmlTags = "ADDRESS_FIELD_CONTAINS_HTML_TAGS: buyerIdentity.deliveryAddressPreferences.0.deliveryAddress.firstName", e.DeliveryLastNameInvalid = "DELIVERY_LAST_NAME_INVALID", e.DeliveryLastNameRequired = "DELIVERY_LAST_NAME_REQUIRED", e.DeliveryLastNameContainsEmojis = "ADDRESS_FIELD_CONTAINS_EMOJIS: buyerIdentity.deliveryAddressPreferences.0.deliveryAddress.lastName", e.DeliveryLastNameTooLong = "ADDRESS_FIELD_IS_TOO_LONG: buyerIdentity.deliveryAddressPreferences.0.deliveryAddress.lastName", e.DeliveryLastNameContainsUrl = "ADDRESS_FIELD_CONTAINS_URL: buyerIdentity.deliveryAddressPreferences.0.deliveryAddress.lastName", e.DeliveryLastNameContainsHtmlTags = "ADDRESS_FIELD_CONTAINS_HTML_TAGS: buyerIdentity.deliveryAddressPreferences.0.deliveryAddress.lastName", e.DeliveryAddress1Required = "DELIVERY_ADDRESS1_REQUIRED", e.DeliveryAddress1Invalid = "DELIVERY_ADDRESS1_INVALID", e.DeliveryAddress1TooLong = "ADDRESS_FIELD_IS_TOO_LONG: buyerIdentity.deliveryAddressPreferences.0.deliveryAddress.address1", e.DeliveryAddress1ContainsHtmlTags = "ADDRESS_FIELD_CONTAINS_HTML_TAGS: buyerIdentity.deliveryAddressPreferences.0.deliveryAddress.address1", e.DeliveryAddress1ContainsEmojis = "ADDRESS_FIELD_CONTAINS_EMOJIS: buyerIdentity.deliveryAddressPreferences.0.deliveryAddress.address1", e.DeliveryAddress2Required = "DELIVERY_ADDRESS2_REQUIRED", e.DeliveryAddress2Invalid = "DELIVERY_ADDRESS2_INVALID", e.DeliveryAddress2TooLong = "ADDRESS_FIELD_IS_TOO_LONG: buyerIdentity.deliveryAddressPreferences.0.deliveryAddress.address2", e.DeliveryAddress2ContainsHtmlTags = "ADDRESS_FIELD_CONTAINS_HTML_TAGS: buyerIdentity.deliveryAddressPreferences.0.deliveryAddress.address2", e.DeliveryAddress2ContainsEmojis = "ADDRESS_FIELD_CONTAINS_EMOJIS: buyerIdentity.deliveryAddressPreferences.0.deliveryAddress.address2", e.DeliveryAddress2AddressFieldRequired = "ADDRESS_FIELD_IS_REQUIRED: buyerIdentity.deliveryAddressPreferences.0.deliveryAddress.address2", e.DeliveryCityRequired = "DELIVERY_CITY_REQUIRED", e.DeliveryCityInvalid = "DELIVERY_CITY_INVALID", e.DeliveryCityTooLong = "ADDRESS_FIELD_IS_TOO_LONG: buyerIdentity.deliveryAddressPreferences.0.deliveryAddress.city", e.DeliveryCityContainsHtmlTags = "ADDRESS_FIELD_CONTAINS_HTML_TAGS: buyerIdentity.deliveryAddressPreferences.0.deliveryAddress.city", e.DeliveryCityContainsEmojis = "ADDRESS_FIELD_CONTAINS_EMOJIS: buyerIdentity.deliveryAddressPreferences.0.deliveryAddress.city", e.DeliveryCityAddressFieldRequired = "ADDRESS_FIELD_IS_REQUIRED: buyerIdentity.deliveryAddressPreferences.0.deliveryAddress.city", e.DeliveryZoneNotFound = "DELIVERY_ZONE_NOT_FOUND", e.DeliveryZoneRequiredForCountry = "DELIVERY_ZONE_REQUIRED_FOR_COUNTRY", e.DeliveryPostalCodeInvalid = "DELIVERY_POSTAL_CODE_INVALID", e.DeliveryInvalidPostalCodeForZone = "DELIVERY_INVALID_POSTAL_CODE_FOR_ZONE", e.DeliveryInvalidPostalCodeForCountry = "DELIVERY_INVALID_POSTAL_CODE_FOR_COUNTRY", e.DeliveryPostalCodeRequired = "DELIVERY_POSTAL_CODE_REQUIRED", e.DeliveryZipInvalidForCountry = "INVALID_ZIP_CODE_FOR_COUNTRY: buyerIdentity.deliveryAddressPreferences.0.deliveryAddress.zip", e.DeliveryPostalCodeContainsEmojis = "ADDRESS_FIELD_CONTAINS_EMOJIS: buyerIdentity.deliveryAddressPreferences.0.deliveryAddress.zip", e.DeliveryPostalCodeAddressFieldRequired = "ADDRESS_FIELD_IS_REQUIRED: buyerIdentity.deliveryAddressPreferences.0.deliveryAddress.zip", e.DeliveryCountryInvalid = "INVALID: buyerIdentity.deliveryAddressPreferences.0.deliveryAddress.country", e.DeliveryPhoneNumberRequired = "DELIVERY_PHONE_NUMBER_REQUIRED", e.DeliveryOptionsPhoneNumberRequired = "DELIVERY_OPTIONS_PHONE_NUMBER_REQUIRED", e.DeliveryPhoneNumberInvalid = "DELIVERY_PHONE_NUMBER_INVALID", e.DeliveryPhoneDoesNotMatchExpectedPattern = "ADDRESS_FIELD_DOES_NOT_MATCH_EXPECTED_PATTERN: buyerIdentity.deliveryAddressPreferences.0.deliveryAddress.phone", e.MerchandiseOutOfStock = "MERCHANDISE_OUT_OF_STOCK", e.InvalidQuantity = "INVALID: input.lines.0.quantity", e.DeliveryOutOfStockAtOrigin = "DELIVERY_OUT_OF_STOCK_AT_ORIGIN_LOCATION", e.DeliveryExternalPromiseUnfulfillable = "DELIVERY_EXTERNAL_PROMISE_UNFULFILLABLE", e.MerchandiseNotApplicable = "MERCHANDISE_NOT_APPLICABLE", e.MerchandiseVariantNotFound = "MERCHANDISE_PRODUCT_VARIANT_NOT_FOUND", e.MerchandiseNotFound = "MERCHANDISE_NOT_FOUND", e.MerchandiseNotPublished = "MERCHANDISE_PRODUCT_NOT_PUBLISHED", e.MerchandiseNotSupportedForB2B = "MERCHANDISE_SELLING_PLANS_NOT_SUPPORTED_FOR_B2B", e.MerchandiseBundleRequiresComponents = "MERCHANDISE_BUNDLE_REQUIRES_COMPONENTS", e.MerchandiseGiftCardsNotSupported = "MERCHANDISE_GIFT_CARDS_COMPONENTS_NOT_SUPPORTED", e.MerchandiseGiftCardGreaterThanZero = "MERCHANDISE_GIFT_CARD_PRICE_MUST_BE_GREATER_THAN_ZERO", e.MerchandiseGiftCardCannotExceedLimit = "MERCHANDISE_GIFT_CARD_PRICE_MUST_NOT_EXCEED_LIMIT", e.UnacceptablePaymentsAmount = "PAYMENTS_UNACCEPTABLE_PAYMENT_AMOUNT", e.DeliveryNotAvailable = "DELIVERY_NO_DELIVERY_AVAILABLE", e.DeliveryNoStrategyAvailable = "DELIVERY_NO_DELIVERY_STRATEGY_AVAILABLE", e.DeliveryNoLocalPickupStrategyAvailable = "DELIVERY_LOCAL_PICKUP_NO_DELIVERY_STRATEGY_AVAILABLE", e.DeliveryLineChanged = "DELIVERY_DELIVERY_LINE_DETAIL_CHANGED", e.DeliveryLocalPickupLineChanged = "DELIVERY_LOCAL_PICKUP_DELIVERY_LINE_DETAIL_CHANGED", e.DeliveryNoDeliveryAvailableForMerchandise = "DELIVERY_NO_DELIVERY_STRATEGY_AVAILABLE_FOR_MERCHANDISE_LINE", e.DeliveryFulfillmentConstraintNotSatisfied = "DELIVERY_MUST_FULFILL_FROM_CONSTRAINT_NOT_SATISFIED", e.DeliveryFulfillmentLocationConstraint = "DELIVERY_MUST_FULFILL_FROM_SAME_LOCATION_CONSTRAINT_NOT_SATISFIED", e.NoDeliveryGroupSelected = "NO_DELIVERY_GROUP_SELECTED", e.PendingDeliveryGroups = "PENDING_DELIVERY_GROUPS", e.InvalidPaymentAmount = "INVALID_PAYMENT: amount", e.InvalidPaymentPaymentAmount = "INVALID_PAYMENT: payment.amount", e.NewTaxMustBeAccepted = "TAX_NEW_TAX_MUST_BE_ACCEPTED", e.MerchandiseExpectedPriceMismatch = "MERCHANDISE_EXPECTED_PRICE_MISMATCH", e.InvalidPaymentApplePayBillingAddress = "INVALID_PAYMENT: payment.walletPaymentMethod.applePayWalletContent.billingAddress", e.InvalidPaymentGooglePayBillingAddress = "INVALID_PAYMENT: payment.walletPaymentMethod.googlePayWalletContent.billingAddress", e.UnsupportedGooglePayPaymentMethod = "PAYMENT_METHOD_NOT_SUPPORTED: payment.walletPaymentMethod.googlePayWalletContent", e))(h || {});
const zr = ["INVALID_PAYMENT: amount", "INVALID_PAYMENT: payment.amount"],
    Vr = ["DELIVERY_NO_DELIVERY_STRATEGY_AVAILABLE_FOR_MERCHANDISE_LINE", "DELIVERY_OUT_OF_STOCK_AT_ORIGIN_LOCATION", "DELIVERY_MUST_FULFILL_FROM_CONSTRAINT_NOT_SATISFIED", "DELIVERY_MUST_FULFILL_FROM_SAME_LOCATION_CONSTRAINT_NOT_SATISFIED", "DELIVERY_EXTERNAL_PROMISE_UNFULFILLABLE", "MERCHANDISE_OUT_OF_STOCK", "MERCHANDISE_PRODUCT_VARIANT_NOT_FOUND", "MERCHANDISE_NOT_FOUND", "MERCHANDISE_PRODUCT_NOT_PUBLISHED", "MERCHANDISE_SELLING_PLANS_NOT_SUPPORTED_FOR_B2B", "MERCHANDISE_BUNDLE_REQUIRES_COMPONENTS", "MERCHANDISE_GIFT_CARDS_COMPONENTS_NOT_SUPPORTED", "MERCHANDISE_GIFT_CARD_PRICE_MUST_BE_GREATER_THAN_ZERO", "MERCHANDISE_GIFT_CARD_PRICE_MUST_NOT_EXCEED_LIMIT", "INVALID: input.lines.0.quantity", "MERCHANDISE_NOT_APPLICABLE"];
class ui extends Error {
    constructor(t) {
        super("[".concat(t.name, "] ").concat(t.message)), this.stack = t.stack, this.name = "HandleCreateCartError"
    }
}
async function nt({
    element: e,
    instrumentName: t,
    dataSource: n
}) {
    try {
        const r = await n.getInitialCart(t),
            {
                cart: a,
                errors: i
            } = r;
        if (di(() => {
                e && (e.disabled = !1)
            }), !a || !a.id) throw new Error("[".concat(t, "] received invalid cart"));
        if (!a.checkoutUrl) throw new Error("[".concat(t, "] Created cart with no checkout URL"));
        const o = i.length === 1 && i[0] === h.InvalidQuantity;
        if (i.length > 0 && !o) throw new Error("Failed to create cart: ".concat(JSON.stringify(i)));
        const s = o && a.lineItems.every(l => l.quantity === 0);
        return {
            cart: a,
            errors: i,
            outOfStock: s
        }
    } catch (r) {
        throw new ui(r)
    } finally {
        e.disabled = !1
    }
}
class hi extends de {
    constructor() {
        super(), c(this, "anchor"), c(this, "i18n"), c(this, "dataSource"), c(this, "classNames"), c(this, "setI18n"), c(this, "setDataSource"), c(this, "setClassNames"), [this.i18n, this.setI18n] = Q(), [this.dataSource, this.setDataSource] = Q(), [this.classNames, this.setClassNames] = Q()
    }
    static get observedAttributes() {
        return ["disabled"]
    }
    connectedCallback() {
        this.anchor || this.render()
    }
    attributeChangedCallback(t, n, r) {
        n !== r && t === "disabled" && this.anchor && (r === "" ? this.anchor.setAttribute("aria-disabled", "true") : this.anchor.removeAttribute("aria-disabled"), this.setAccessibilityAttributes())
    }
    async handleClick(t) {
        if (t.preventDefault(), this.disabled || !this.anchor) return;
        this.disabled = !0;
        const [n, r] = await Promise.all([this.i18n, this.dataSource]);
        try {
            const {
                outOfStock: a,
                cart: i
            } = await nt({
                element: this,
                instrumentName: b.MoreOptions,
                dataSource: r
            });
            if (a) {
                et(n);
                return
            }
            const o = this.recommendedInstrument === b.ShopPay ? "skip_shop_pay" : "allow_redirect";
            g.sheetClicked({
                instrument: b.MoreOptions,
                result: "success"
            }), rt(b.MoreOptions), tt(i.checkoutUrl, o)
        } catch (a) {
            g.sheetClicked({
                instrument: b.MoreOptions,
                result: "failed"
            }), w.notify(a), yt(n.translate("error_dialogs.checkout.title"), n.translate("error_dialogs.checkout.generic_error"))
        }
    }
    async render() {
        const t = await this.i18n,
            n = await this.classNames;
        this.anchor = document.createElement("a"), this.anchor.textContent = t.translate("more_payment_options"), this.anchor.className = n, this.anchor.setAttribute("id", "more-payment-options-link"), this.anchor.onclick = a => this.handleClick(a), this.setAccessibilityAttributes(), this.appendChild(this.anchor);
        const r = document.createElement("style");
        r.textContent = xa, this.appendChild(r)
    }
    setAccessibilityAttributes() {
        this.anchor && (this.disabled ? (this.anchor.removeAttribute("href"), this.anchor.role = "link") : (this.anchor.removeAttribute("role"), this.anchor.href = "#"))
    }
}
var N = (e => (e.ButtonDisplay = "buttonDisplay", e.LoadInstrument = "loadInstrument", e.LoadSdk = "loadSDK", e.AuthorizationLatency = "authorizationLatency", e))(N || {});

function qr() {
    var e, t;
    return !!((e = window.performance) != null && e.mark) && !!((t = window.performance) != null && t.measure)
}

function ue(e, t) {
    return qt(e, t), () => Y(e, t)
}

function qt(e, t) {
    qr() && window.performance.mark("".concat(e, "-").concat(t, "-start"))
}

function Y(e, t) {
    var n, r;
    if (qr()) try {
        const a = "".concat(e, "-").concat(t, "-start"),
            i = "".concat(e, "-").concat(t, "-end"),
            o = "".concat(e, "-").concat(t, "-duration");
        window.performance.mark(i);
        const s = (r = window.performance.measure(o, a, i)) != null ? r : (n = window.performance.getEntriesByName(o, "measure")) == null ? void 0 : n[0],
            l = s == null ? void 0 : s.duration;
        if (l == null) {
            w.notify(new ur("Could not measure performance of ".concat(e, " ").concat(t)), {
                severity: "warning"
            });
            return
        }
        return l
    } catch (a) {
        a instanceof SyntaxError || w.notify(new ur("An error occurred when attempting to measure benchmark duration ".concat(e, " with context ").concat(t, ": ").concat(a)));
        return
    }
}
class ur extends Error {
    constructor() {
        super(...arguments), c(this, "name", "BenchmarkError")
    }
}

function We(e, t, n) {
    if (Mt != null && Mt.length) {
        const r = Mt.join(",");
        e.querySelectorAll(r).forEach(a => {
            n === null ? a.removeAttribute(t) : a.setAttribute(t, n)
        })
    }
}

function pi(e, t) {
    try {
        const n = JSON.parse(e != null ? e : "[]");
        if (!(n instanceof Array)) throw new Error("[".concat(t, "] invalid walletConfigs found"));
        return n
    } catch (n) {
        throw new Error("[".concat(t, "] Error while parsing walletConfigs JSON: ").concat(n))
    }
}

function mi(e, t) {
    try {
        return e ? JSON.parse(e) : null
    } catch (n) {
        throw new Error("[".concat(t, "] Error while parsing walletConfig JSON: ").concat(n))
    }
}

function Ye(e) {
    var t;
    const n = e == null ? void 0 : e.getLoadEligibility();
    return g.instrumentLoadEligibility({
        instrument: e == null ? void 0 : e.getInstrumentName(),
        result: n != null && n.eligible ? "success" : "failed",
        reason: n != null && n.eligible || n == null ? void 0 : n.reason
    }), (t = n == null ? void 0 : n.eligible) != null ? t : !1
}

function yi(e) {
    return e.filter(Ye)
}
async function Ne({
    walletInstrument: e,
    instanceNumber: t
}) {
    const n = e.getInstrumentName(),
        r = ue(N.LoadSdk, "".concat(n, ":").concat(t));
    try {
        await e.loadWalletSDK(), g.instrumentSDKLoaded({
            instrument: n,
            measurement: r(),
            result: "success"
        })
    } catch (i) {
        return w.notify(i), g.instrumentSDKLoaded({
            instrument: n,
            measurement: r(),
            result: "failed"
        }), null
    }
    let a;
    try {
        a = e.getPartnerSDKEligibility()
    } catch (i) {
        w.notify(i), a = {
            eligible: !1,
            reason: "uncaught exception"
        }
    }
    return a.eligible ? (g.instrumentSDKEligible({
        instrument: n,
        result: "success"
    }), e) : (g.instrumentSDKEligible({
        instrument: n,
        reason: a.reason,
        result: "failed"
    }), null)
}
class Ke extends de {
    constructor() {
        super(...arguments), c(this, "name", null), c(this, "apiClient"), c(this, "i18n"), c(this, "policy"), c(this, "isFetchingPolicy", !1)
    }
    get shopId() {
        return this.getAttribute("shop-id")
    }
    get cartId() {
        return this.getAttribute("cart-id")
    }
    get walletConfigs() {
        return this.getAttribute("wallet-configs")
    }
    get recommendedWallet() {
        return this.getAttribute("recommended")
    }
    get fallbackWallet() {
        return this.getAttribute("fallback")
    }
    get variantParams() {
        var t;
        try {
            return JSON.parse((t = this.getAttribute("variant-params")) != null ? t : "[]")
        } catch (n) {
            throw new Dt({
                code: "invalid-variant-params",
                message: "variant-params must be a valid JSON string. Received variant-params: ".concat(this.getAttribute("variant-params"), ", received error: ").concat(n)
            })
        }
    }
    get styleExtractorDisabled() {
        return this.hasAttribute("disable-compat")
    }
    triggerLoadedEvent() {
        document.dispatchEvent(new Event("shopify:payment_button:loaded", {
            bubbles: !0,
            cancelable: !0
        }))
    }
    async attributeChangedCallback(t, n, r) {
        n !== r && We(this, t, r)
    }
    showBuyerConsent(t, n) {
        var r, a, i;
        !t || !n || (i = (a = (r = window.Shopify) == null ? void 0 : r.PaymentButton) == null ? void 0 : a.showBuyerConsent) == null || i.call(a, o => this.onClickSubscriptionPolicy(o, t, n))
    }
    hideBuyerConsent() {
        var t, n, r;
        (r = (n = (t = window.Shopify) == null ? void 0 : t.PaymentButton) == null ? void 0 : n.hideBuyerConsent) == null || r.call(n)
    }
    clearUI() {
        this.innerHTML = ""
    }
    async onClickSubscriptionPolicy(t, n, r) {
        if (t.preventDefault(), this.isFetchingPolicy) return;
        if (this.policy) {
            this.showPolicy(this.policy, r);
            return
        }
        this.isFetchingPolicy = !0;
        const a = this.fetchSubscriptionPolicy(n).then(i => (this.policy = i, i)).catch(i => (w.notify(i), r.translate("subscriptions.policy_not_found"))).finally(() => {
            this.isFetchingPolicy = !1
        });
        this.showPolicy(a, r)
    }
    async fetchSubscriptionPolicy(t) {
        const n = await t.fetchSubscriptionPolicy();
        return this.policy = n, n
    }
    showPolicy(t, n) {
        je(n.translate("subscriptions.cancellation_policy"), t, n.translate("subscriptions.policy_not_found"))
    }
}

function jr({
    type: e,
    form: t
}) {
    if (!t) return [];
    const n = document.querySelectorAll('[name^="'.concat(e, '"][form^="').concat(CSS.escape(t.getAttribute("id") || ""), '"]')),
        r = t.querySelectorAll('[name^="'.concat(e, '"]')),
        a = [...n, ...r],
        i = {};
    return a.forEach(o => {
        const s = gi(o),
            l = fi(o);
        s && typeof l < "u" && (i[s] = l)
    }), Object.entries(i != null ? i : {}).map(([o, s]) => ({
        key: o,
        value: s
    }))
}

function he({
    page: e,
    element: t
}) {
    const n = e === "product" ? '[data-shopify="payment-button"]' : '[data-shopify="dynamic-checkout-cart"]',
        r = hr(t, n) || document.querySelector(n);
    return hr(r, "form")
}
const Ot = Element.prototype;

function hr(e, t) {
    if (Ot.matches = Ot.matches || Ot.webkitMatchesSelector || Ot.msMatchesSelector || Ot.mozMatchesSelector, !e || e.matches(t)) return e;
    let n = e;
    for (; n && n !== document.body;)
        if (n = n.parentElement, n && n.matches(t)) return n;
    return null
}

function gi(e) {
    const t = e.getAttribute("name");
    if (t === null) return null;
    const n = t.indexOf("["),
        r = t.lastIndexOf("]");
    return n === -1 || r === -1 ? null : t.substring(n + 1, r)
}

function fi(e) {
    if (!(["radio", "checkbox"].includes(e.type) && !e.checked) && !(e.value === "" || typeof e.value > "u")) return e.value
}

function Je(e) {
    const t = he({
        page: "product",
        element: e
    });
    return Wr(t)
}

function Wr(e) {
    var t;
    const n = e == null ? void 0 : e.elements;
    if (!n) return null;
    const r = Jt(n, "id");
    if (!r || isNaN(Number(r))) return null;
    const a = Number((t = Jt(n, "quantity")) != null ? t : "1"),
        i = "gid://shopify/ProductVariant/".concat(r),
        o = Jt(n, "selling_plan"),
        s = o ? "gid://shopify/SellingPlan/".concat(o) : void 0,
        l = jr({
            type: "properties",
            form: e
        });
    return {
        variantId: r,
        quantity: a,
        merchandiseId: i,
        sellingPlanId: s,
        lineItemProperties: l
    }
}

function bi(e) {
    const t = e == null ? void 0 : e.elements;
    return t ? !!Jt(t, "selling_plan") : !1
}

function Jt(e, t) {
    var n;
    const r = e.namedItem(t);
    return r && "value" in r && (n = r.value) != null ? n : null
}
class Yr {
    constructor(t, n) {
        c(this, "addToCartMutationObserver"), c(this, "addToCartForm"), c(this, "addToCartButtons"), this.element = t, this.onFormChanged = n, this.addToCartMutationObserver = null, this.addToCartForm = null, this.addToCartButtons = []
    }
    setupMutationObservers() {
        if (this.findAndSetAddToCartButtons(), !this.addToCartForm) return;
        this.syncComponentStateWithForm();
        const t = new MutationObserver(() => this.reobserveOnFormChanges());
        this.addToCartMutationObserver = new MutationObserver(() => this.syncComponentStateWithForm()), t.observe(this.addToCartForm, {
            childList: !0,
            subtree: !0,
            attributes: !0,
            attributeFilter: ["value"]
        }), this.observeAddToCartButtons()
    }
    syncComponentStateWithForm() {
        if (!this.addToCartForm) {
            this.onFormChanged({
                disabled: !0,
                hasSellingPlan: !1
            });
            return
        }
        const t = Wr(this.addToCartForm),
            n = !!(this.addToCartButtons.length > 0 && this.addToCartButtons.every(r => r.hasAttribute("disabled") || r.getAttribute("aria-disabled") === "true"));
        this.onFormChanged({
            disabled: n || t === null,
            hasSellingPlan: bi(this.addToCartForm),
            variantId: t == null ? void 0 : t.variantId,
            sellingPlanId: t == null ? void 0 : t.sellingPlanId
        })
    }
    observeAddToCartButtons() {
        this.addToCartButtons.forEach(t => {
            this.addToCartMutationObserver.observe(t, {
                attributes: !0
            })
        })
    }
    reobserveOnFormChanges() {
        var t;
        (t = this.addToCartMutationObserver) == null || t.disconnect(), this.findAndSetAddToCartButtons(), this.observeAddToCartButtons(), this.syncComponentStateWithForm()
    }
    findAndSetAddToCartButtons() {
        this.addToCartForm = he({
            page: "product",
            element: this.element
        }), this.addToCartForm && (this.addToCartButtons = [...this.addToCartForm.querySelectorAll("[type=submit]")])
    }
}

function wi(e, t, n) {
    try {
        const r = JSON.parse(e != null ? e : "{}"),
            a = JSON.parse(t != null ? t : JSON.stringify({
                name: "buy_it_now",
                wallet_params: {}
            }));
        if (r === null || Object.keys(r).length === 0) {
            if (!(a instanceof Object)) throw new Error("[".concat(n, "] Invalid fallback wallet configs JSON"));
            return {
                recommendedWallet: null,
                fallbackWallet: a
            }
        }
        return {
            recommendedWallet: r,
            fallbackWallet: a
        }
    } catch (r) {
        throw r instanceof SyntaxError ? (g.walletConfigDeveloperError(), new Dt({
            code: "invalid-recommended-fallback-json",
            message: "recommended / fallback must be valid JSON"
        })) : new Error("[".concat(n, "] Error while parsing recommended/fallback JSON: ").concat(r))
    }
}
const _i = ".shopify-payment-button__button--hidden{visibility:hidden}.shopify-payment-button__button{height:clamp(25px,var(--shopify-accelerated-checkout-button-block-size, 44px),55px);min-height:clamp(25px,var(--shopify-accelerated-checkout-button-block-size, 44px),55px);border-radius:var(--shopify-accelerated-checkout-button-border-radius, 0px);width:100%;border:none;box-shadow:0 0 0 0 transparent;color:#fff;cursor:pointer;display:block;font-size:1em;font-weight:500;line-height:1;text-align:center;transition:background .2s ease-in-out}.shopify-payment-button__button[disabled]{opacity:.6;cursor:default}.shopify-payment-button__button--unbranded{background-color:#1990c6;padding:1em 2em}.shopify-payment-button__button--unbranded:hover:not([disabled]){background-color:#136f99}.shopify-payment-button__more-options{background:transparent;border:0 none;cursor:pointer;display:block;font-size:1em;margin-top:1em;text-align:center;text-decoration:underline;width:100%}.shopify-payment-button__more-options.shopify-payment-button__skeleton{height:auto!important;min-height:0!important;border-radius:4px!important;width:50%;margin-left:25%;margin-right:25%}.shopify-payment-button__more-options[disabled]{opacity:.6;cursor:default!important}.shopify-payment-button__button.shopify-payment-button__button--branded{display:flex;flex-direction:column;position:relative;z-index:1}.shopify-payment-button__button.shopify-payment-button__button--branded .shopify-cleanslate{flex:1!important;display:flex!important;flex-direction:column!important}.shopify-payment-button__button.button.loading{position:relative;color:transparent}.shopify-payment-button__button.button.loading>.loading-overlay__spinner{top:50%;left:50%;transform:translate(-50%,-50%);position:absolute;height:100%;display:flex;align-items:center}.shopify-payment-button__button.button.loading>.loading-overlay__spinner .spinner{width:-moz-fit-content;width:-webkit-fit-content;width:fit-content}.button.loading>.loading-overlay__spinner .path{stroke:#fff}.shopify-payment-button__button .loading-overlay__spinner{width:1.8rem;display:inline-block}.shopify-payment-button__button .spinner{animation:shopify-rotator 1.4s linear infinite}@keyframes shopify-rotator{0%{transform:rotate(0)}to{transform:rotate(270deg)}}.shopify-payment-button__button .path{stroke-dasharray:280;stroke-dashoffset:0;transform-origin:center;stroke:#121212;animation:shopify-dash 1.4s ease-in-out infinite}@media screen and (forced-colors: active){.shopify-payment-button__button .path{stroke:CanvasText}}@keyframes shopify-dash{0%{stroke-dashoffset:280}50%{stroke-dashoffset:75;transform:rotate(135deg)}to{stroke-dashoffset:280;transform:rotate(450deg)}}@keyframes acceleratedCheckoutLoadingSkeleton{50%{opacity:var(--shopify-accelerated-checkout-skeleton-animation-opacity-start, 1)}75%{opacity:var(--shopify-accelerated-checkout-skeleton-animation-opacity-end, .5)}to{opacity:var(--shopify-accelerated-checkout-skeleton-animation-opacity-start, 1)}}.shopify-payment-button__skeleton{animation:acceleratedCheckoutLoadingSkeleton var(--shopify-accelerated-checkout-skeleton-animation-duration, 4s) var(--shopify-accelerated-checkout-skeleton-animation-timing-function, ease) infinite;animation-delay:-.168s;background-color:var(--shopify-accelerated-checkout-skeleton-background-color, #dedede);box-sizing:border-box;text-decoration:none!important;height:var(--shopify-accelerated-checkout-button-block-size, inherit);min-height:25px;max-height:55px;border-radius:var(--shopify-accelerated-checkout-button-border-radius, inherit)}.shopify-payment-button__button{border-radius:0}#shopify-buyer-consent{margin-top:1em;display:inline-block;width:100%}#shopify-buyer-consent.hidden{display:none}#shopify-subscription-policy-button{background:none;border:none;padding:0;text-decoration:underline;font-size:inherit;cursor:pointer}#shopify-subscription-policy-button:before{box-shadow:none}",
    Kr = '.accelerated-checkout-button{height:clamp(25px,var(--shopify-accelerated-checkout-button-block-size, 44px),55px);min-height:clamp(25px,var(--shopify-accelerated-checkout-button-block-size, 44px),55px);border-radius:var(--shopify-accelerated-checkout-button-border-radius, 0px);box-shadow:var(--shopify-accelerated-checkout-button-box-shadow);min-width:150px}:host([page-type="cart_page"]) .accelerated-checkout-button{height:100%;width:100%;border-radius:var(--shopify-accelerated-checkout-button-border-radius, 4px);box-shadow:var(--shopify-accelerated-checkout-button-box-shadow)}',
    Ai = 70;
class Bt {
    constructor(t, n, r, a) {
        c(this, "red"), c(this, "green"), c(this, "blue"), c(this, "opacity"), this.red = t || 0, this.green = n || 0, this.blue = r || 0, this.opacity = typeof a > "u" ? 1 : a
    }
    getLuminance() {
        const t = this.red & 255,
            n = this.green & 255,
            r = this.blue & 255;
        return t * .2126 + n * .7152 + r * .0722
    }
    isDark() {
        return this.opacity === 0 ? !1 : this.getLuminance() / this.opacity < Ai
    }
    blendWith(t, n) {
        this.opacity = 1 - (1 - t.opacity) * (1 - n.opacity), this.red = this.blend(t.red, n.red, t, n), this.green = this.blend(t.green, n.green, t, n), this.blue = this.blend(t.blue, n.blue, t, n)
    }
    blend(t, n, r, a) {
        return Math.round(t * r.opacity / this.opacity + n * a.opacity * (1 - r.opacity) / this.opacity)
    }
}

function Si(e) {
    const t = [...e];
    let n = new Bt(0, 0, 0, 0),
        r = new Bt(255, 255, 255, 1),
        a = t.shift();
    for (; a;) n.opacity > 0 && a.opacity > 0 ? (r = new Bt(0, 0, 0, 0), r.blendWith(a, n)) : a.opacity > 0 ? r = a : r = n, n = r, a = t.shift();
    return r
}
const Re = new Bt(255, 255, 255, 1);

function Ci(e) {
    const t = [];
    let n = e;
    for (; n.parentElement;) {
        n = n.parentElement;
        const r = window.getComputedStyle(n).backgroundColor,
            a = Ei(r);
        if (r && t.push(a), a.opacity === 1) break
    }
    try {
        return Si(t.reverse())
    } catch (r) {
        return w.notify(new Error("[BackgroundDetection] Failed to blend colors for element ".concat(e.outerHTML))), Re
    }
}

function Ei(e) {
    if (!e) return Re;
    try {
        const t = e.split("(")[1].split(")")[0].replace(" ", "").split(",");
        return new Bt(Number(t[0]), Number(t[1]), Number(t[2]), typeof t[3] > "u" ? 1 : Number(t[3]))
    } catch (t) {
        w.notify(new Error("[BackgroundDetection] Failed to convert rgbString to array ".concat(e)))
    }
    return Re
}
class gt extends de {
    constructor() {
        super(), c(this, "name", null), c(this, "i18n"), c(this, "dataSource"), c(this, "apiClient"), c(this, "classNames"), c(this, "containerInstanceNumber"), c(this, "onRendered"), c(this, "setI18n"), c(this, "setDataSource"), c(this, "setApiClient"), c(this, "setClassNames"), c(this, "setContainerInstanceNumber"), c(this, "parsedWalletParams"), this.onRendered = () => {}, [this.i18n, this.setI18n] = Q(), [this.dataSource, this.setDataSource] = Q(), [this.apiClient, this.setApiClient] = Q(), [this.classNames, this.setClassNames] = Q(), [this.containerInstanceNumber, this.setContainerInstanceNumber] = Q()
    }
    async cleanupOnFailure(t, n) {
        var r;
        try {
            await t()
        } catch (a) {
            w.notify(new vi("An error occurred requiring cleanup when attempting to a render the ".concat(n, " instrument : ").concat(a)));
            const i = await this.containerInstanceNumber;
            g.instrumentLoaded({
                instrumentOrComponentName: n,
                result: "failed",
                measurement: Y(N.ButtonDisplay, "".concat(n, ":").concat(i))
            }), (r = this.parentElement) == null || r.remove()
        }
    }
    attributeChangedCallback(t, n, r, a) {
        n !== r && t === "disabled" && a && (r === "" ? (a.setAttribute("aria-disabled", "true"), a.setAttribute("disabled", "")) : (a.removeAttribute("aria-disabled"), a.removeAttribute("disabled")))
    }
    get pageType() {
        return this.getAttribute("page-type") || C.Unknown
    }
    get buttonTheme() {
        return Ci(this).isDark() ? "LIGHT" : "DARK"
    }
    get isCTA() {
        return this.hasAttribute("call-to-action")
    }
    get walletParams() {
        var t;
        if (this.parsedWalletParams === void 0) try {
            this.parsedWalletParams = JSON.parse((t = this.getAttribute("wallet-params")) != null ? t : "{}")
        } catch (n) {
            throw new Error("Error while parsing wallet-params JSON: ".concat(n))
        }
        return this.parsedWalletParams
    }
    async initializeShadowStyles(t, n = "") {
        const r = document.createElement("style");
        r.innerHTML = [Kr, n].join("\n"), t.appendChild(r)
    }
}
class vi extends Error {
    constructor() {
        super(...arguments), c(this, "name", "CleanupOnFailureError")
    }
}
class Ii extends gt {
    constructor() {
        super(...arguments), c(this, "name", b.BuyItNow), c(this, "button", null)
    }
    static get observedAttributes() {
        return ["disabled"]
    }
    connectedCallback() {
        this.cleanupOnFailure(this.render.bind(this), this.name)
    }
    attributeChangedCallback(t, n, r) {
        super.attributeChangedCallback(t, n, r, this.button)
    }
    async handleClick() {
        if (this.disabled || !this.button || this.button.getAttribute("aria-disabled")) return;
        this.disabled = !0;
        const [t, n] = await Promise.all([this.i18n, this.dataSource]);
        try {
            const {
                outOfStock: r,
                cart: a
            } = await nt({
                element: this,
                instrumentName: this.name,
                dataSource: n
            });
            if (g.sheetClicked({
                    instrument: this.name,
                    checkoutToken: se(a),
                    result: "success"
                }), r) {
                et(t);
                return
            }
            rt(this.name), tt(a.checkoutUrl, "allow_redirect")
        } catch (r) {
            w.notify(r), g.sheetClicked({
                instrument: this.name,
                result: "failed"
            }), yt(t.translate("error_dialogs.checkout.title"), t.translate("error_dialogs.checkout.generic_error"))
        }
    }
    async render() {
        var t;
        this.button || (this.button = le());
        const n = await this.classNames;
        this.button.textContent = (await this.i18n).translate("instruments_copy.checkout.buy_now"), this.button.className = n, this.disabled && this.button.setAttribute("aria-disabled", "true"), this.button.onclick = () => this.handleClick(), this.appendChild(this.button), (t = this.onRendered) == null || t.call(this)
    }
}

function Pi() {
    const e = navigator.userAgent,
        t = e.indexOf("Android") > -1,
        n = e.indexOf("Chrome/") > -1,
        r = parseInt((/Chrome\/([0-9]+)/.exec(e) || ["0", "0"])[1], 10);
    return t && n && r === 114
}
class at {
    constructor(t) {
        c(this, "walletParams"), this.walletParams = t.wallet_params
    }
    static walletName() {
        throw new Error("Must define walletName for WalletInstrument subclass")
    }
    createWebComponent({
        walletContainer: t,
        dataSource: n,
        i18n: r,
        apiClient: a,
        containerInstanceNumber: i,
        classNames: o = "",
        callToAction: s,
        pageType: l = C.ProductPage,
        slot: u = "button",
        onRendered: d = () => {}
    }) {
        var p, y, m;
        const v = this.getWebComponentName();
        Z(v, this.getWebComponentClass(), {
            isChildCustomElement: !0
        });
        const f = document.createElement(v),
            S = {
                "access-token": (p = t.accessToken) != null ? p : "",
                "buyer-country": (y = t.buyerCountry) != null ? y : "",
                "buyer-currency": t.buyerCurrency,
                "wallet-params": JSON.stringify((m = this.walletParams) != null ? m : {}),
                "page-type": l,
                slot: u
            };
        try {
            t.disabled && f.setAttribute("disabled", ""), ce(f, S), t.isShippingRequired && f.setAttribute("requires-shipping", ""), t.hasSellingPlan && f.setAttribute("has-selling-plan", "")
        } catch (B) {
            const K = B;
            throw K.message.includes("setAttribute is not a function") && Pi() ? new Vt(K.message) : K
        }
        return s && f.setAttribute("call-to-action", ""), f.setDataSource(n), f.setApiClient(a), f.setI18n(r), f.setClassNames(o), f.setContainerInstanceNumber(i), f.onRendered = d, f
    }
    loadWalletSDK() {
        return Promise.resolve()
    }
    getLoadEligibility() {
        return {
            eligible: !0
        }
    }
    getPartnerSDKEligibility() {
        return {
            eligible: !0
        }
    }
}
class Di extends at {
    static walletName() {
        return "buy_it_now"
    }
    getWebComponentName() {
        return "shopify-buy-it-now-button"
    }
    getInstrumentName() {
        return b.BuyItNow
    }
    getWebComponentClass() {
        return Ii
    }
}
const Ti = "shopify-paypal-button[disabled]{opacity:.5;cursor:not-allowed}shopify-paypal-button div.paypal-buttons>iframe{z-index:auto!important;border-radius:0!important;box-shadow:none}",
    Ni = "::slotted(div){height:100%}";
async function St(e) {
    const {
        cartClient: t,
        instrumentName: n
    } = e;
    try {
        if (!e.cartId) throw new Error("[".concat(n, "] provided no cart ID when updating buyer identity"));
        if (!t) throw new Error("[".concat(n, "] provided invalid cart client when updating buyer identity"));
        return await t.updateCartBuyerIdentity(e)
    } catch (r) {
        throw g.updateFailed(n, "updateBuyerIdentity"), r
    }
}
async function Qe({
    cartId: e,
    totalAmount: t,
    paymentMethod: n,
    billingAddress: r,
    cartClient: a,
    instrumentName: i,
    abortSignal: o,
    hasSellingPlan: s,
    canUsePaymentMethodForFreeOrder: l
}) {
    try {
        if (!e) throw new Error("[".concat(i, "] provided no cart ID when updating payment"));
        if (!t) throw new Error("[".concat(i, "] provided no total amount when updating payment"));
        if (!n) throw new Error("[".concat(i, "] provided no apple pay wallet content when updating payment"));
        if (!a) throw new Error("[".concat(i, "] provided invalid cart client when updating payment"));
        const u = {
            freePaymentMethod: {
                billingAddress: r
            }
        };
        return await a.updateCartPayment(e, A({
            amount: {
                amount: t.amount,
                currencyCode: t.currencyCode
            }
        }, Number(t.amount) <= 0 && !l && !s ? u : n), i, o)
    } catch (u) {
        throw g.updateFailed(i, "updatePayment"), u
    }
}

function Xe({
    checkoutUrl: e,
    instrumentName: t,
    currentCartTotal: n,
    initialBuyerCurrency: r
}) {
    if (!e) return !1;
    const a = n.amount;
    if (!a || Number(a) === 0 || r.toUpperCase() === n.currencyCode.toUpperCase()) return !1;
    const i = new URL(e);
    return i.searchParams.set(ea.CURRENCY_CHANGE, "true"), g.decelerated({
        instrument: t,
        reason: "currency_changed"
    }), tt(i.toString()), !0
}

function Jr(e) {
    return window[Qr(e)]
}

function Qr(e) {
    return "paypal-".concat(e.replace(/[^a-zA-Z0-9]/g, ""))
}

function pr(e) {
    if (!e) return null;
    const t = getComputedStyle(e).borderRadius;
    return t.includes("px") ? parseInt(t, 10) : null
}

function Le(e) {
    if (!e) return null;
    const t = getComputedStyle(e).height;
    return t.includes("px") ? parseInt(t, 10) : null
}

function Ze() {
    return typeof AbortController == "function" && new AbortController || null
}
const _e = 25,
    mr = 55;
var ct;
class Ri extends gt {
    constructor() {
        super(), c(this, "name", b.PayPal), c(this, "abortController"), c(this, "cartId"), c(this, "sdkButtonsComponent"), c(this, "container", null), c(this, "resizeObserver", null), c(this, "buttonHeight"), c(this, "rendering", !1), c(this, "prevBorderRadius", 0), c(this, "prevHeight", 0), j(this, ct, void 0), J(this, ct, this.attachShadow({
            mode: "closed"
        })), this.abortController = Ze(), this.resizeObserver = typeof ResizeObserver == "function" && new ResizeObserver(() => this.onResize()) || null
    }
    connectedCallback() {
        this.cleanupOnFailure(this.render.bind(this), this.name)
    }
    async disconnectedCallback() {
        this.innerHTML = "", I(this, ct).innerHTML = "", await this.teardownPayPalButton(), this.resizeObserver && this.resizeObserver.disconnect()
    }
    async teardownPayPalButton() {
        var t;
        try {
            await ((t = this.sdkButtonsComponent) == null ? void 0 : t.close().catch(() => {}))
        } catch (n) {} finally {
            this.sdkButtonsComponent = void 0
        }
    }
    async onResize() {
        const t = pr(this.container),
            n = Le(this.container),
            r = t !== null && this.prevBorderRadius !== t || n !== null && this.prevHeight !== n;
        !this.rendering && r && (await this.teardownPayPalButton(), this.container.innerHTML = "", await this.cleanupOnFailure(() => this.renderFromPayPalSDK(), this.name))
    }
    async render() {
        var t;
        const n = document.createElement("div");
        n.className = pt.BUTTON;
        const r = document.createElement("style");
        r.innerHTML = Ti, this.appendChild(r), await this.initializeShadowStyles(I(this, ct), Ni), I(this, ct).appendChild(n), this.container = n, this.renderFromPayPalSDK(), (t = this.resizeObserver) == null || t.observe(this.container)
    }
    getHeight() {
        const t = Le(this.container);
        return t ? t >= _e && t <= mr ? t : t < _e ? (console.debug("[PayPalButton] Container height is less than the minimum height of the PayPal button. Using the minimum height of 25px."), _e) : (console.debug("[PayPalButton] Container height is greater than the maximum height of the PayPal button. Using the maximum height of 55px."), mr) : Xn
    }
    async renderFromPayPalSDK() {
        var t, n, r;
        if (!this.container) throw new Error("button container not set when attempting to render");
        this.rendering = !0;
        const a = this.walletParams.paymentIntent === "TOKENIZE",
            i = () => this.createToken(this.apiClient);
        let o, s;
        a ? s = i : o = i;
        const l = pr(this.container),
            u = this.getHeight();
        this.prevHeight = u;
        const d = await this.i18n,
            p = {
                color: "gold",
                label: this.isCTA ? "pay" : "paypal",
                disableMaxWidth: !0,
                height: u,
                shape: "sharp"
            };
        l && l > 0 && (p.borderRadius = l, this.prevBorderRadius = l), this.sdkButtonsComponent = (n = (t = Jr(this.walletParams.sdkUrl)) == null ? void 0 : t.Buttons) == null ? void 0 : n.call(t, {
            fundingSource: "paypal",
            style: p,
            createOrder: o,
            createBillingAgreement: s,
            onApprove: async y => {
                await this.onApprove(y)
            },
            onCancel: () => {
                var y;
                g.sheetCancelled(this.name), (y = this.abortController) == null || y.abort()
            },
            onClick: this.onClick.bind(this),
            onError: y => {
                var m;
                if (y.message === "Window is closed, can not determine type") {
                    g.sheetCancelled(this.name), (m = this.abortController) == null || m.abort();
                    return
                }
                w.notify(y);
                const v = d.translate("brand.paypal");
                W(v, d)
            }
        }), await ((r = this.sdkButtonsComponent) == null ? void 0 : r.render(this.container)), this.rendering = !1, this.onRendered()
    }
    async onClick(t, n) {
        if (this.disabled) return n.reject();
        const r = this.getBoundingClientRect(),
            a = r.left + r.width / 2,
            i = r.top + r.height / 2,
            o = new MouseEvent("click", {
                view: window,
                bubbles: !0,
                cancelable: !1,
                clientX: a,
                clientY: i,
                screenX: window.screenX + a,
                screenY: window.screenY + i
            });
        this.dispatchEvent(o);
        const [s, l] = await Promise.all([this.dataSource, this.i18n]);
        try {
            const {
                outOfStock: u,
                cart: d
            } = await nt({
                element: this,
                instrumentName: this.name,
                dataSource: s
            });
            return u ? (et(l), n.reject()) : (rt(this.name), this.cartId = d.id, n.resolve())
        } catch (u) {
            return u instanceof Error && (g.sheetClicked({
                instrument: this.name,
                result: "failed"
            }), w.notify(u), yt(l.translate("error_dialogs.checkout.title"), l.translate("error_dialogs.checkout.generic_error"))), n.reject()
        }
    }
    async createToken(t) {
        const n = await t;
        try {
            if (!this.cartId) throw new Error("cartId not found when creating token");
            const r = await n.paypalTokenCreate(this.cartId);
            return g.sheetClicked({
                instrument: this.name,
                result: "success"
            }), r
        } catch (r) {
            throw g.sheetClicked({
                instrument: this.name,
                result: "failed"
            }), r
        }
    }
    async onApprove({
        orderID: t,
        payerID: n
    }) {
        var r, a, i;
        try {
            if (g.authorizationAttempt(this.name), qt(N.AuthorizationLatency, this.name), !this.cartId) throw new Error("Cart not found");
            const o = await this.apiClient,
                s = await o.paypalBuyerDetailsFetch(t, this.cartId),
                {
                    data: l
                } = await St({
                    cartId: this.cartId,
                    cartClient: o,
                    instrumentName: this.name,
                    emailAddress: s.email,
                    streetAddress: s.destinationAddress
                });
            if (!l) throw new Error("Cart not found");
            const {
                id: u,
                checkoutUrl: d,
                totalAmount: p
            } = l;
            if (await Qe({
                    abortSignal: (r = this.abortController) == null ? void 0 : r.signal,
                    cartClient: o,
                    cartId: u,
                    instrumentName: b.PayPal,
                    billingAddress: (a = s.billingAddress) != null ? a : s.destinationAddress,
                    paymentMethod: {
                        walletPaymentMethod: {
                            paypalWalletContent: {
                                billingAddress: (i = s.billingAddress) != null ? i : s.destinationAddress,
                                email: s.email,
                                expiresAt: s.expiresAt,
                                payerId: n,
                                token: t,
                                acceptedSubscriptionTerms: !1,
                                vaultingAgreement: !1,
                                merchantId: this.walletParams.merchantId
                            }
                        }
                    },
                    canUsePaymentMethodForFreeOrder: !0,
                    totalAmount: p
                }), Xe({
                    checkoutUrl: d,
                    instrumentName: this.name,
                    currentCartTotal: p,
                    initialBuyerCurrency: this.buyerCurrency
                })) return;
            g.authorizationComplete({
                instrument: this.name,
                result: "success",
                measurement: Y(N.AuthorizationLatency, this.name)
            }), tt(d)
        } catch (o) {
            throw g.authorizationComplete({
                instrument: this.name,
                result: "failure",
                measurement: Y(N.AuthorizationLatency, this.name)
            }), o
        }
    }
}
ct = new WeakMap;
const wt = class Ws extends at {
    static walletName() {
        return "paypal"
    }
    constructor(t) {
        super(t)
    }
    getWebComponentName() {
        return "shopify-paypal-button"
    }
    getInstrumentName() {
        return b.PayPal
    }
    getWebComponentClass() {
        return Ri
    }
    loadWalletSDK() {
        let t = Ws.paypalSDKPromiseByUrl.get(this.walletParams.sdkUrl);
        if (t) return t;
        const n = document.createElement("script");
        return n.setAttribute("src", this.walletParams.sdkUrl), t = new Promise((r, a) => {
            n.setAttribute("data-namespace", Qr(this.walletParams.sdkUrl)), n.onload = () => r(), n.onerror = i => {
                Ws.paypalSDKPromiseByUrl.delete(this.walletParams.sdkUrl), n && document.body.contains(n) && document.body.removeChild(n), a(i)
            }, document.body.appendChild(n)
        }), Ws.paypalSDKPromiseByUrl.set(this.walletParams.sdkUrl, t), t
    }
    getLoadEligibility() {
        return {
            eligible: !0
        }
    }
    getPartnerSDKEligibility() {
        var t, n;
        try {
            return (n = (t = Jr(this.walletParams.sdkUrl)) == null ? void 0 : t.Buttons) != null && n.call(t).isEligible() ? {
                eligible: !0
            } : {
                eligible: !1,
                reason: "PayPal SDK not eligible"
            }
        } catch (r) {
            throw new Dt({
                code: "paypal-sdk-eligibility-check-failed",
                message: "PayPal SDK 'isEligible' method failed unexpectedly: ".concat(r)
            })
        }
    }
};
c(wt, "paypalSDKPromiseByUrl", new Map);
let ke = wt;
const Li = ".apple-pay-button{display:flex;align-items:center;justify-content:center;width:100%;padding:0!important;cursor:pointer;border:none}.apple-pay-button:hover:not(:disabled){filter:brightness(92%)}.apple-pay-button:disabled{opacity:.5;cursor:not-allowed}.apple-pay-button svg{height:100%;flex-shrink:0}.apple-pay--content{font-size:16px;font-family:San Francisco,sans-serif;width:100%;height:100%;flex-grow:1;display:flex;align-items:center;justify-content:center;white-space:pre}.apple-pay--light{background:#fff;color:#000}.apple-pay--light svg{fill:#000}.apple-pay--dark{background:#000;color:#fff}.apple-pay--dark svg{fill:#fff}",
    Oe = {
        UK: "GB",
        JA: "JP"
    },
    Xr = ["AS", "GU", "MP", "PR", "VI"];
Xr.forEach(e => {
    Oe[e] = "US"
});

function Wt(e) {
    var t, n;
    const r = e.countryCode,
        a = {
            firstName: e.givenName || void 0,
            lastName: e.familyName || void 0,
            address1: (t = e == null ? void 0 : e.addressLines) == null ? void 0 : t[0],
            address2: ((n = e == null ? void 0 : e.addressLines) == null ? void 0 : n[1]) || void 0,
            city: e.locality || void 0,
            zip: e.postalCode || void 0,
            province: e.administrativeArea || e.subLocality || void 0,
            country: ki(e.countryCode),
            phone: e.phoneNumber || void 0
        };
    return a.country === "HK" && (a.zip = void 0, a.province = e.postalCode), r && Xr.includes(r) && (a.province = r), a.lastName || (a.lastName = a.firstName), a
}

function ki(e) {
    if (!e) return "ZZ";
    const t = e.toUpperCase();
    return Object.keys(Oe).includes(t) ? Oe[t] : t
}

function Zr(e, t) {
    return e.map(n => {
        var r;
        return {
            title: xi(n, t),
            estimatedCost: {
                amount: Oi(n),
                currencyCode: n[0].estimatedCost.currencyCode
            },
            handle: Mi(n),
            description: (r = n[0].description) != null ? r : ""
        }
    })
}

function tn(e) {
    return e.map(t => t.deliveryOptions.map(n => D(A({}, n), {
        groupType: t.groupType
    }))).reduce((t, n) => t.flatMap(r => n.map(a => [...r, a])), [
        []
    ])
}

function Oi(e) {
    return e.reduce((t, n) => t + Number(n.estimatedCost.amount), 0).toFixed(2)
}

function xi(e, t) {
    var n, r;
    const a = (n = e.find(s => s.groupType === Ht.OneTimePurchase)) == null ? void 0 : n.title,
        i = (r = e.find(s => s.groupType === Ht.Subscription)) == null ? void 0 : r.title,
        o = [...new Set([a, i])].filter(Boolean);
    return o.length === 2 ? t.translate("shipping_methods.connect_shipping_methods", {
        methodOne: o[0],
        methodTwo: o[1]
    }) : o[0]
}

function Mi(e) {
    return e.map(t => t.handle).join(",")
}

function en({
    deliveryGroups: e,
    i18n: t
}) {
    const n = e.some(r => r.groupType === Ht.Subscription);
    return e.map(r => {
        var a;
        let i = t.translate("order_summary.shipping");
        return n && (i = r.groupType === Ht.Subscription ? t.translate("order_summary.shipping_subscription") : t.translate("order_summary.shipping_one_time_purchase")), {
            label: i,
            amount: ut(((a = r.selectedDeliveryOption) == null ? void 0 : a.estimatedCost.amount) || 0)
        }
    })
}

function Fi(e, t) {
    return Ut({
        label: e,
        possibleLines: [t]
    })[0]
}

function Ui({
    subtotal: e,
    deliveryGroups: t,
    duties: n,
    taxes: r,
    discountAllocations: a,
    i18n: i,
    formattedRecurringTotals: o
}) {
    var s;
    const l = Ut({
            label: i.translate("order_summary.subtotal"),
            possibleLines: [e]
        }),
        u = en({
            deliveryGroups: t,
            i18n: i
        }),
        d = Ut({
            label: i.translate("order_summary.duties"),
            possibleLines: [n]
        }),
        p = Ut({
            label: i.translate("order_summary.taxes"),
            possibleLines: [r]
        }),
        y = o.map(f => ({
            label: f,
            amount: "0.00",
            type: "pending"
        })),
        m = y.length ? [{
            label: i.translate("order_summary.subscriptions.recurring_total_tooltip_line"),
            amount: "0.00",
            type: "pending"
        }] : [],
        v = (s = a == null ? void 0 : a.flatMap(f => {
            var S;
            const B = (S = f.title) != null ? S : f.code;
            return Ut({
                label: B != null ? B : i.translate("order_summary.discount"),
                possibleLines: [f.discountedAmount],
                isDiscount: !0
            })
        })) != null ? s : [];
    return [...l, ...u, ...d, ...p, ...v, ...y, ...m]
}

function Ut({
    label: e,
    possibleLines: t,
    isDiscount: n = !1
}) {
    return t.filter(r => (r == null ? void 0 : r.amount) !== void 0).map(r => ({
        label: e,
        amount: n ? "-".concat(ut(r.amount)) : ut(r.amount)
    }))
}

function Bi(e, t) {
    if (!e.length) return [];
    const n = tn(e);
    return Zr(n, t).map(r => {
        var a;
        return {
            label: r.title || "",
            amount: r.estimatedCost.amount,
            identifier: r.handle,
            detail: (a = r.description) != null ? a : ""
        }
    })
}
const Ae = async ({
        paymentSheetAction: e,
        onProceed: t,
        terminateSession: n
    }) => {
        switch (e.action) {
            case "abort":
                n();
                break;
            case "show_error":
                await t(e.errors);
                break;
            case "update":
                await t(e.errors);
                break;
            default:
                throw new Error('Missing handler for payment sheet action "'.concat(e.action, '"'))
        }
    },
    $i = ["abort", "show_error", "complete", "update"];
class rn extends Error {
    constructor() {
        super(...arguments), c(this, "name", "UnhandledActionError")
    }
}
class nn {
    constructor() {
        c(this, "generatePrioritizedPaymentSheetAction", (t, n) => {
            let r;
            const a = [],
                i = [],
                o = [],
                s = n.filter(u => u !== h.UnacceptablePaymentsAmount).some(u => t[u] !== void 0);
            for (const u of Object.keys(t))
                if (!(u === h.UnacceptablePaymentsAmount && s)) {
                    const d = t[u]();
                    d.effects && i.push(...d.effects), d.action !== "complete" && d.errors && o.push(...d.errors), a.push(d)
                }
            const l = (u => $i.map(d => u.find(p => p.action === d)).find(d => !!d))(a);
            return l && (r = l, r.effects = i, r.action !== "complete" && (r.errors = o)), r
        })
    }
    getMergedPaymentSheetAction({
        result: t,
        errorActions: n
    }) {
        const r = {};
        n.forEach(i => {
            i.errors.forEach(o => {
                t.errors.includes(o) && (r[o] = i.generateAction)
            })
        });
        let a;
        for (const i of t.errors) {
            const o = r[i];
            if (o) {
                a = o();
                break
            }
        }
        return {
            firstPaymentSheetAction: a,
            prioritizedPaymentSheetAction: this.generatePrioritizedPaymentSheetAction(r, t.errors)
        }
    }
    getUnhandledErrors(t, n) {
        const r = n.flatMap(a => a.errors);
        return t.filter(a => !r.includes(a))
    }
}
class Hi extends nn {
    constructor(t) {
        super(), this.i18n = t
    }
    mapMutationResultToPaymentSheetAction(t, n) {
        var r;
        const a = this.mapCustomValidationFunctionErrorToAction(t.errors);
        if (a) return a;
        const i = this.getErrorActions(),
            o = t.errors,
            s = this.getUnhandledErrors(o, i);
        if (s.forEach(u => {
                w.notify(new rn("[".concat(b.ApplePay, "] mutation result error not handled: ").concat(u)))
            }), ((r = t.data) == null ? void 0 : r.deliveryGroups.length) === 0 && n != null && n.shippingRequired) return {
            action: "show_error",
            errors: [new ApplePayError("addressUnserviceable")]
        };
        const {
            firstPaymentSheetAction: l
        } = this.getMergedPaymentSheetAction({
            result: t,
            errorActions: i
        });
        return l || (s.length > 0 ? {
            action: "abort"
        } : {
            action: "update",
            errors: []
        })
    }
    mapCompletionResultToPaymentSheetAction(t) {
        if (!t.data) throw new Error("[".concat(b.ApplePay, "] completion returned null result"));
        switch (t.data.__typename) {
            case "SubmitSuccess":
                return {
                    action: "complete",
                    redirectUrl: t.data.redirectUrl
                };
            case "SubmitAlreadyAccepted":
            case "SubmitThrottled":
            case "SubmitFailed":
                {
                    const n = this.mapCustomValidationFunctionErrorToAction(t.errors);
                    if (n) return n;
                    const r = this.getErrorActions(),
                        a = t.errors;this.getUnhandledErrors(a, r).forEach(o => {
                        w.notify(new Error("[".concat(b.ApplePay, "] completion result error not handled: ").concat(o)))
                    });
                    const {
                        prioritizedPaymentSheetAction: i
                    } = this.getMergedPaymentSheetAction({
                        result: t,
                        errorActions: r
                    });
                    return i || {
                        action: "abort"
                    }
                }
            default:
                throw new Error("[".concat(b.ApplePay, "] unknown completion result type: ").concat(t.data.__typename))
        }
    }
    getErrorActions() {
        return [{
            errors: [h.InvalidLanguage],
            generateAction: () => ({
                action: "abort",
                effects: [() => {
                    w.notify(new Error("[".concat(b.ApplePay, "] mutation provided invalid language, aborting")))
                }]
            })
        }, {
            errors: [h.InvalidCountry],
            generateAction: () => ({
                action: "abort",
                effects: [() => {
                    w.notify(new Error("[".concat(b.ApplePay, "] mutation provided invalid country, aborting")))
                }]
            })
        }, {
            errors: [h.MissingCartId],
            generateAction: () => ({
                action: "abort",
                effects: [() => {
                    w.notify(new Error("[".concat(b.ApplePay, "] mutation provided invalid cart ID, aborting")))
                }]
            })
        }, {
            errors: [h.UnacceptablePaymentsAmount],
            generateAction: () => ({
                action: "abort"
            })
        }, {
            errors: zr,
            generateAction: () => ({
                action: "abort"
            })
        }, {
            errors: Vr,
            generateAction: () => ({
                action: "abort"
            })
        }, {
            errors: [h.DeliveryNotAvailable, h.NoDeliveryGroupSelected],
            generateAction: () => ({
                action: "show_error",
                errors: [new ApplePayError("addressUnserviceable")]
            })
        }, {
            errors: [h.BuyerIdentityEmailRequired],
            generateAction: () => ({
                action: "show_error",
                errors: [new ApplePayError("shippingContactInvalid", "emailAddress", this.i18n.translate("errors.missing.email"))]
            })
        }, {
            errors: [h.DeliveryFirstNameRequired],
            generateAction: () => ({
                action: "show_error",
                errors: [new ApplePayError("shippingContactInvalid", "name", this.i18n.translate("errors.missing.first_name"))]
            })
        }, {
            errors: [h.DeliveryFirstNameInvalid],
            generateAction: () => ({
                action: "show_error",
                errors: [new ApplePayError("shippingContactInvalid", "name", this.i18n.translate("errors.invalid.first_name"))]
            })
        }, {
            errors: [h.DeliveryLastNameRequired],
            generateAction: () => ({
                action: "show_error",
                errors: [new ApplePayError("shippingContactInvalid", "name", this.i18n.translate("errors.missing.last_name"))]
            })
        }, {
            errors: [h.DeliveryLastNameInvalid],
            generateAction: () => ({
                action: "show_error",
                errors: [new ApplePayError("shippingContactInvalid", "name", this.i18n.translate("errors.invalid.last_name"))]
            })
        }, {
            errors: [h.DeliveryAddress1Required],
            generateAction: () => ({
                action: "show_error",
                errors: [new ApplePayError("shippingContactInvalid", "addressLines", this.i18n.translate("errors.missing.address1"))]
            })
        }, {
            errors: [h.DeliveryAddress1Invalid],
            generateAction: () => ({
                action: "show_error",
                errors: [new ApplePayError("shippingContactInvalid", "addressLines", this.i18n.translate("errors.invalid.address1"))]
            })
        }, {
            errors: [h.DeliveryAddress2Required, h.DeliveryAddress2AddressFieldRequired],
            generateAction: () => ({
                action: "show_error",
                errors: [new ApplePayError("shippingContactInvalid", "addressLines", this.i18n.translate("errors.missing.address2"))]
            })
        }, {
            errors: [h.DeliveryAddress2Invalid],
            generateAction: () => ({
                action: "show_error",
                errors: [new ApplePayError("shippingContactInvalid", "addressLines", this.i18n.translate("errors.invalid.address2"))]
            })
        }, {
            errors: [h.DeliveryCityRequired, h.DeliveryCityAddressFieldRequired],
            generateAction: () => ({
                action: "show_error",
                errors: [new ApplePayError("shippingContactInvalid", "locality", this.i18n.translate("errors.missing.city"))]
            })
        }, {
            errors: [h.DeliveryCityInvalid],
            generateAction: () => ({
                action: "show_error",
                errors: [new ApplePayError("shippingContactInvalid", "locality", this.i18n.translate("errors.invalid.city"))]
            })
        }, {
            errors: [h.DeliveryZoneRequiredForCountry],
            generateAction: () => ({
                action: "show_error",
                errors: [new ApplePayError("shippingContactInvalid", "administrativeArea", this.i18n.translate("errors.missing.zone"))]
            })
        }, {
            errors: [h.DeliveryZoneNotFound],
            generateAction: () => ({
                action: "show_error",
                errors: [new ApplePayError("shippingContactInvalid", "administrativeArea", this.i18n.translate("errors.invalid.zone"))]
            })
        }, {
            errors: [h.DeliveryPostalCodeRequired, h.DeliveryPostalCodeAddressFieldRequired],
            generateAction: () => ({
                action: "show_error",
                errors: [new ApplePayError("shippingContactInvalid", "postalCode", this.i18n.translate("errors.missing.postal_code"))]
            })
        }, {
            errors: [h.DeliveryPostalCodeInvalid, h.DeliveryInvalidPostalCodeForZone, h.DeliveryInvalidPostalCodeForCountry, h.DeliveryZipInvalidForCountry],
            generateAction: () => ({
                action: "show_error",
                errors: [new ApplePayError("shippingContactInvalid", "postalCode", this.i18n.translate("errors.invalid.postal_code"))]
            })
        }, {
            errors: [h.DeliveryPhoneNumberRequired],
            generateAction: () => ({
                action: "show_error",
                errors: [new ApplePayError("shippingContactInvalid", "phoneNumber", this.i18n.translate("errors.missing.phone"))]
            })
        }, {
            errors: [h.DeliveryPhoneNumberInvalid, h.BuyerIdentityInvalidPhone, h.DeliveryPhoneDoesNotMatchExpectedPattern],
            generateAction: () => ({
                action: "show_error",
                errors: [new ApplePayError("shippingContactInvalid", "phoneNumber", this.i18n.translate("errors.invalid.phone"))]
            })
        }, {
            errors: [h.BuyerIdentityInvalidCountry, h.DeliveryCountryInvalid],
            generateAction: () => ({
                action: "show_error",
                errors: [new ApplePayError("shippingContactInvalid", "country", this.i18n.translate("errors.invalid.country"))]
            })
        }, {
            errors: [h.InvalidPaymentApplePayBillingAddress],
            generateAction: () => ({
                action: "show_error",
                errors: [new ApplePayError("billingContactInvalid")]
            })
        }, {
            errors: [h.DeliveryLastNameContainsEmojis],
            generateAction: () => ({
                action: "show_error",
                errors: [new ApplePayError("shippingContactInvalid", "name", this.i18n.translate("errors.emojis.last_name"))]
            })
        }, {
            errors: [h.DeliveryFirstNameContainsEmojis],
            generateAction: () => ({
                action: "show_error",
                errors: [new ApplePayError("shippingContactInvalid", "name", this.i18n.translate("errors.emojis.first_name"))]
            })
        }, {
            errors: [h.DeliveryAddress1TooLong],
            generateAction: () => ({
                action: "show_error",
                errors: [new ApplePayError("shippingContactInvalid", "addressLines", this.i18n.translate("errors.too_long.address1"))]
            })
        }, {
            errors: [h.DeliveryAddress2TooLong],
            generateAction: () => ({
                action: "show_error",
                errors: [new ApplePayError("shippingContactInvalid", "addressLines", this.i18n.translate("errors.too_long.address2"))]
            })
        }, {
            errors: [h.DeliveryFirstNameTooLong],
            generateAction: () => ({
                action: "show_error",
                errors: [new ApplePayError("shippingContactInvalid", "name", this.i18n.translate("errors.too_long.first_name"))]
            })
        }, {
            errors: [h.DeliveryLastNameTooLong],
            generateAction: () => ({
                action: "show_error",
                errors: [new ApplePayError("shippingContactInvalid", "name", this.i18n.translate("errors.too_long.last_name"))]
            })
        }, {
            errors: [h.DeliveryCityTooLong],
            generateAction: () => ({
                action: "show_error",
                errors: [new ApplePayError("shippingContactInvalid", "locality", this.i18n.translate("errors.too_long.city"))]
            })
        }, {
            errors: [h.DeliveryFirstNameContainsUrl],
            generateAction: () => ({
                action: "show_error",
                errors: [new ApplePayError("shippingContactInvalid", "name", this.i18n.translate("errors.url.first_name"))]
            })
        }, {
            errors: [h.DeliveryLastNameContainsUrl],
            generateAction: () => ({
                action: "show_error",
                errors: [new ApplePayError("shippingContactInvalid", "name", this.i18n.translate("errors.url.last_name"))]
            })
        }, {
            errors: [h.DeliveryAddress1ContainsHtmlTags],
            generateAction: () => ({
                action: "show_error",
                errors: [new ApplePayError("shippingContactInvalid", "addressLines", this.i18n.translate("errors.html_tags.address1"))]
            })
        }, {
            errors: [h.DeliveryAddress2ContainsHtmlTags],
            generateAction: () => ({
                action: "show_error",
                errors: [new ApplePayError("shippingContactInvalid", "addressLines", this.i18n.translate("errors.html_tags.address2"))]
            })
        }, {
            errors: [h.DeliveryCityContainsHtmlTags],
            generateAction: () => ({
                action: "show_error",
                errors: [new ApplePayError("shippingContactInvalid", "locality", this.i18n.translate("errors.html_tags.city"))]
            })
        }, {
            errors: [h.DeliveryFirstNameContainsHtmlTags],
            generateAction: () => ({
                action: "show_error",
                errors: [new ApplePayError("shippingContactInvalid", "name", this.i18n.translate("errors.html_tags.first_name"))]
            })
        }, {
            errors: [h.DeliveryLastNameContainsHtmlTags],
            generateAction: () => ({
                action: "show_error",
                errors: [new ApplePayError("shippingContactInvalid", "name", this.i18n.translate("errors.html_tags.last_name"))]
            })
        }, {
            errors: [h.DeliveryCityContainsEmojis],
            generateAction: () => ({
                action: "show_error",
                errors: [new ApplePayError("shippingContactInvalid", "locality", this.i18n.translate("errors.emojis.city"))]
            })
        }, {
            errors: [h.DeliveryAddress1ContainsEmojis],
            generateAction: () => ({
                action: "show_error",
                errors: [new ApplePayError("shippingContactInvalid", "addressLines", this.i18n.translate("errors.emojis.address1"))]
            })
        }, {
            errors: [h.DeliveryAddress2ContainsEmojis],
            generateAction: () => ({
                action: "show_error",
                errors: [new ApplePayError("shippingContactInvalid", "addressLines", this.i18n.translate("errors.emojis.address2"))]
            })
        }, {
            errors: [h.DeliveryPostalCodeContainsEmojis],
            generateAction: () => ({
                action: "show_error",
                errors: [new ApplePayError("shippingContactInvalid", "postalCode", this.i18n.translate("errors.emojis.postal_code"))]
            })
        }, {
            errors: [h.BuyerIdentityEmailInvalid],
            generateAction: () => ({
                action: "show_error",
                errors: [new ApplePayError("shippingContactInvalid", "emailAddress", this.i18n.translate("errors.invalid.email"))]
            })
        }]
    }
    mapCustomValidationFunctionErrorToAction(t) {
        const n = t.find(r => typeof r == "object" && (r == null ? void 0 : r.code) === Qt);
        return n ? {
            action: "abort",
            effects: [() => {
                const r = this.i18n.translate("brand.apple_pay");
                je(this.i18n.translate("error_dialogs.wallet.title", {
                    wallet: r
                }), n.message)
            }]
        } : null
    }
}
const yr = ["name", "postalAddress"];

function Gi({
    shippingRequired: e,
    walletParams: t,
    buyerCurrency: n
}) {
    const {
        phoneRequired: r,
        emailRequired: a
    } = t, i = [...a ? ["email"] : [], ...r ? ["phone"] : []], o = e ? [...yr, ...i] : i;
    return {
        countryCode: t.countryCode,
        currencyCode: n,
        merchantCapabilities: t.merchantCapabilities,
        supportedNetworks: t.supportedNetworks,
        total: {
            type: "pending",
            label: t.merchantName,
            amount: "1.00"
        },
        requiredBillingContactFields: yr,
        requiredShippingContactFields: o,
        shippingType: t.shippingType
    }
}
const zi = e => {
        const t = e.lineItems.flatMap(n => n.discountAllocations);
        return [...e.discountCodes.filter(n => n.applicable && e.discountAllocations.findIndex(r => r.code === n.code) === -1 && t.findIndex(r => r.code === n.code) === -1).map(n => ({
            code: n.code,
            discountedAmount: {
                amount: "0",
                currencyCode: e.totalAmount.currencyCode
            }
        })), ...e.discountAllocations, ...t]
    },
    an = e => {
        const t = e.lineItems.reduce((n, r) => n + Number(r.subtotalAmount.amount), 0);
        return {
            amount: String(t),
            currencyCode: e.totalAmount.currencyCode
        }
    };

function Vi(e, t) {
    return e.reduce((n, r) => {
        if (!r.sellingPlanAllocation) return n;
        const {
            sellingPlanAllocation: {
                sellingPlan: a,
                priceAdjustments: i
            },
            quantity: o
        } = r;
        if (!a.recurringDeliveries || !a.billingPolicy) return n;
        const s = qi({
            billingPolicy: a.billingPolicy,
            i18n: t
        });
        if (i.length === 0) {
            const l = Yt({
                price: Number(r.subtotalAmount.amount) * o,
                currencyCode: r.subtotalAmount.currencyCode,
                locale: t.locale
            });
            return [...n, t.translate("order_summary.subscriptions.recurring_totals", {
                fixedPrice: l,
                interval: s
            })]
        } else if (i.length === 1) {
            const l = Yt({
                price: Number(i[0].price.amount) * o,
                currencyCode: i[0].price.currencyCode,
                locale: t.locale
            });
            return [...n, t.translate("order_summary.subscriptions.recurring_totals", {
                fixedPrice: l,
                interval: s
            })]
        } else if (i.length === 2) {
            const l = Yt({
                    price: Number(i[0].price.amount) * o,
                    currencyCode: i[0].price.currencyCode,
                    locale: t.locale
                }),
                u = Yt({
                    price: Number(i[1].price.amount) * o,
                    currencyCode: i[1].price.currencyCode,
                    locale: t.locale
                }),
                d = a.priceAdjustments[0].orderCount;
            return [...n, t.translate("order_summary.subscriptions.recurring_totals_with_policies", {
                count: d,
                fixedPrice: l,
                recurringPrice: u,
                interval: s
            })]
        }
        return n
    }, [])
}

function Yt({
    price: e,
    currencyCode: t,
    locale: n
}) {
    return Intl.NumberFormat(n, {
        style: "currency",
        currency: t,
        currencyDisplay: "narrowSymbol"
    }).format(e)
}

function qi({
    billingPolicy: e,
    i18n: t
}) {
    const {
        interval: n,
        intervalCount: r
    } = e, a = {
        YEAR: "order_summary.subscriptions.recurring_total_intervals.year",
        MONTH: "order_summary.subscriptions.recurring_total_intervals.month",
        WEEK: "order_summary.subscriptions.recurring_total_intervals.week",
        DAY: "order_summary.subscriptions.recurring_total_intervals.day"
    }[n];
    if (!a) throw new Error("Unknown selling plan interval provided: ".concat(n));
    return t.translate(a, {
        count: r
    })
}
const pe = "GraphQL Client",
    gr = 0,
    fr = 3,
    on = "An error occurred while fetching from the API. Review 'graphQLErrors' for details.",
    sn = "Response returned unexpected Content-Type:",
    ln = "An unknown error has occurred. The API did not return a data object or any errors in its response.",
    xe = {
        json: "application/json",
        multipart: "multipart/mixed"
    },
    br = "X-SDK-Variant",
    wr = "X-SDK-Version",
    ji = "shopify-graphql-client",
    Wi = "1.2.0",
    cn = 1e3,
    Yi = [429, 503],
    dn = /@(defer)\b/i,
    _r = "\r\n",
    Ki = /boundary="?([^=";]+)"?/i,
    Ar = _r + _r;

function X(e, t = pe) {
    return e.startsWith("".concat(t)) ? e : "".concat(t, ": ").concat(e)
}

function Tt(e) {
    return e instanceof Error ? e.message : JSON.stringify(e)
}

function un(e) {
    return e instanceof Error && e.cause ? e.cause : void 0
}

function hn(e) {
    return e.flatMap(({
        errors: t
    }) => t != null ? t : [])
}

function pn({
    client: e,
    retries: t
}) {
    if (t !== void 0 && (typeof t != "number" || t < gr || t > fr)) throw new Error("".concat(e, ': The provided "retries" value (').concat(t, ") is invalid - it cannot be less than ").concat(gr, " or greater than ").concat(fr))
}

function L(e, t) {
    return t && (typeof t != "object" || Array.isArray(t) || typeof t == "object" && Object.keys(t).length > 0) ? {
        [e]: t
    } : {}
}

function mn(e, t) {
    if (e.length === 0) return t;
    const n = {
        [e.pop()]: t
    };
    return e.length === 0 ? n : mn(e, n)
}

function yn(e, t) {
    return Object.keys(t || {}).reduce((n, r) => (typeof t[r] == "object" || Array.isArray(t[r])) && e[r] ? (n[r] = yn(e[r], t[r]), n) : (n[r] = t[r], n), Array.isArray(e) ? [...e] : A({}, e))
}

function gn([e, ...t]) {
    return t.reduce(yn, A({}, e))
}

function Ji({
    clientLogger: e,
    customFetchApi: t = fetch,
    client: n = pe,
    defaultRetryWaitTime: r = cn,
    retriableCodes: a = Yi
}) {
    const i = async (o, s, l) => {
        const u = s + 1,
            d = l + 1;
        let p;
        try {
            if (p = await t(...o), e({
                    type: "HTTP-Response",
                    content: {
                        requestParams: o,
                        response: p
                    }
                }), !p.ok && a.includes(p.status) && u <= d) throw new Error;
            return p
        } catch (y) {
            if (u <= d) {
                const m = p == null ? void 0 : p.headers.get("Retry-After");
                return await Qi(m ? parseInt(m, 10) : r), e({
                    type: "HTTP-Retry",
                    content: {
                        requestParams: o,
                        lastResponse: p,
                        retryAttempt: s,
                        maxRetries: l
                    }
                }), i(o, u, l)
            }
            throw new Error(X("".concat(l > 0 ? "Attempted maximum number of ".concat(l, " network retries. Last message - ") : "").concat(Tt(y)), n))
        }
    };
    return i
}
async function Qi(e) {
    return new Promise(t => setTimeout(t, e))
}

function Xi({
    headers: e,
    url: t,
    customFetchApi: n = fetch,
    retries: r = 0,
    logger: a
}) {
    pn({
        client: pe,
        retries: r
    });
    const i = {
            headers: e,
            url: t,
            retries: r
        },
        o = Zi(a),
        s = Ji({
            customFetchApi: n,
            clientLogger: o,
            defaultRetryWaitTime: cn
        }),
        l = to(s, i),
        u = eo(l),
        d = lo(l);
    return {
        config: i,
        fetch: l,
        request: u,
        requestStream: d
    }
}

function Zi(e) {
    return t => {
        e && e(t)
    }
}
async function fn(e) {
    const {
        errors: t,
        data: n,
        extensions: r
    } = await e.json();
    return A(D(A(A({}, L("data", n)), L("extensions", r)), {
        headers: e.headers
    }), t || !n ? {
        errors: D(A({
            networkStatusCode: e.status,
            message: X(t ? on : ln)
        }, L("graphQLErrors", t)), {
            response: e
        })
    } : {})
}

function to(e, {
    url: t,
    headers: n,
    retries: r
}) {
    return async (a, i = {}) => {
        const {
            variables: o,
            headers: s,
            url: l,
            retries: u,
            signal: d
        } = i, p = JSON.stringify({
            query: a,
            variables: o
        });
        pn({
            client: pe,
            retries: u
        });
        const y = Object.entries(A(A({}, n), s)).reduce((v, [f, S]) => (v[f] = Array.isArray(S) ? S.join(", ") : S.toString(), v), {});
        !y[br] && !y[wr] && (y[br] = ji, y[wr] = Wi);
        const m = [l != null ? l : t, {
            method: "POST",
            headers: y,
            body: p,
            signal: d
        }];
        return e(m, 1, u != null ? u : r)
    }
}

function eo(e) {
    return async (...t) => {
        if (dn.test(t[0])) throw new Error(X("This operation will result in a streamable response - use requestStream() instead."));
        try {
            const n = await e(...t),
                {
                    status: r,
                    statusText: a
                } = n,
                i = n.headers.get("content-type") || "";
            return n.ok ? i.includes(xe.json) ? fn(n) : {
                errors: {
                    networkStatusCode: r,
                    message: X("".concat(sn, " ").concat(i)),
                    response: n
                }
            } : {
                errors: {
                    networkStatusCode: r,
                    message: X(a),
                    response: n
                }
            }
        } catch (n) {
            return {
                errors: {
                    message: Tt(n)
                }
            }
        }
    }
}

function ro(e) {
    return ft(this, null, function*() {
        const t = new TextDecoder;
        if (e.body[Symbol.asyncIterator]) try {
            for (var n = z(e.body), r, a, i; r = !(a = yield new G(n.next())).done; r = !1) {
                const o = a.value;
                yield t.decode(o)
            }
        } catch (o) {
            i = [o]
        } finally {
            try {
                r && (a = n.return) && (yield new G(a.call(n)))
            } finally {
                if (i) throw i[0]
            }
        } else {
            const o = e.body.getReader();
            let s;
            try {
                for (; !(s = yield new G(o.read())).done;) yield t.decode(s.value)
            } finally {
                o.cancel()
            }
        }
    })
}

function no(e, t) {
    return {
        [Symbol.asyncIterator]() {
            return ft(this, null, function*() {
                try {
                    let o = "";
                    try {
                        for (var n = z(e), r, a, i; r = !(a = yield new G(n.next())).done; r = !1) {
                            const s = a.value;
                            if (o += s, o.indexOf(t) > -1) {
                                const l = o.lastIndexOf(t),
                                    u = o.slice(0, l).split(t).filter(d => d.trim().length > 0).map(d => d.slice(d.indexOf(Ar) + Ar.length).trim());
                                u.length > 0 && (yield u), o = o.slice(l + t.length), o.trim() === "--" && (o = "")
                            }
                        }
                    } catch (s) {
                        i = [s]
                    } finally {
                        try {
                            r && (a = n.return) && (yield new G(a.call(n)))
                        } finally {
                            if (i) throw i[0]
                        }
                    }
                } catch (o) {
                    throw new Error("Error occured while processing stream payload - ".concat(Tt(o)))
                }
            })
        }
    }
}

function ao(e) {
    return {
        [Symbol.asyncIterator]() {
            return ft(this, null, function*() {
                const t = yield new G(fn(e));
                yield D(A({}, t), {
                    hasNext: !1
                })
            })
        }
    }
}

function io(e) {
    return e.map(t => {
        try {
            return JSON.parse(t)
        } catch (n) {
            throw new Error("Error in parsing multipart response - ".concat(Tt(n)))
        }
    }).map(t => {
        const {
            data: n,
            incremental: r,
            hasNext: a,
            extensions: i,
            errors: o
        } = t;
        if (!r) return D(A(A({
            data: n || {}
        }, L("errors", o)), L("extensions", i)), {
            hasNext: a
        });
        const s = r.map(({
            data: l,
            path: u,
            errors: d
        }) => A({
            data: l && u ? mn(u, l) : {}
        }, L("errors", d)));
        return D(A({
            data: s.length === 1 ? s[0].data : gn([...s.map(({
                data: l
            }) => l)])
        }, L("errors", hn(s))), {
            hasNext: a
        })
    })
}

function oo(e, t) {
    if (e.length > 0) throw new Error(on, {
        cause: {
            graphQLErrors: e
        }
    });
    if (Object.keys(t).length === 0) throw new Error(ln)
}

function so(e, t) {
    var n;
    const r = (t != null ? t : "").match(Ki),
        a = "--".concat(r ? r[1] : "-");
    if (!((n = e.body) != null && n.getReader) && !e.body[Symbol.asyncIterator]) throw new Error("API multipart response did not return an iterable body", {
        cause: e
    });
    const i = ro(e);
    let o = {},
        s;
    return {
        [Symbol.asyncIterator]() {
            return ft(this, null, function*() {
                var l, u;
                try {
                    let v = !0;
                    try {
                        for (var d = z(no(i, a)), p, y, m; p = !(y = yield new G(d.next())).done; p = !1) {
                            const f = y.value,
                                S = io(f);
                            s = (u = (l = S.find(K => K.extensions)) == null ? void 0 : l.extensions) != null ? u : s;
                            const B = hn(S);
                            o = gn([o, ...S.map(({
                                data: K
                            }) => K)]), v = S.slice(-1)[0].hasNext, oo(B, o), yield D(A(A({}, L("data", o)), L("extensions", s)), {
                                hasNext: v
                            })
                        }
                    } catch (f) {
                        m = [f]
                    } finally {
                        try {
                            p && (y = d.return) && (yield new G(y.call(d)))
                        } finally {
                            if (m) throw m[0]
                        }
                    }
                    if (v) throw new Error("Response stream terminated unexpectedly")
                } catch (v) {
                    const f = un(v);
                    yield D(A(A({}, L("data", o)), L("extensions", s)), {
                        errors: D(A({
                            message: X(Tt(v)),
                            networkStatusCode: e.status
                        }, L("graphQLErrors", f == null ? void 0 : f.graphQLErrors)), {
                            response: e
                        }),
                        hasNext: !1
                    })
                }
            })
        }
    }
}

function lo(e) {
    return async (...t) => {
        if (!dn.test(t[0])) throw new Error(X("This operation does not result in a streamable response - use request() instead."));
        try {
            const n = await e(...t),
                {
                    statusText: r
                } = n;
            if (!n.ok) throw new Error(r, {
                cause: n
            });
            const a = n.headers.get("content-type") || "";
            switch (!0) {
                case a.includes(xe.json):
                    return ao(n);
                case a.includes(xe.multipart):
                    return so(n, a);
                default:
                    throw new Error("".concat(sn, " ").concat(a), {
                        cause: n
                    })
            }
        } catch (n) {
            return {
                [Symbol.asyncIterator]() {
                    return ft(this, null, function*() {
                        const r = un(n);
                        yield {
                            errors: A(A({
                                message: X(Tt(n))
                            }, L("networkStatusCode", r == null ? void 0 : r.status)), L("response", r)),
                            hasNext: !1
                        }
                    })
                }
            }
        }
    }
}
const co = "mutation cartCreate($input:CartInput!$country:CountryCode$language:LanguageCode$withCarrierRates:Boolean=false)@inContext(country:$country language:$language){result:cartCreate(input:$input){...@defer(if:$withCarrierRates){cart{...CartParts}errors:userErrors{...on CartUserError{message field code}}}}}",
    uo = "mutation cartAttributesUpdate($cartId:ID!$attributes:[AttributeInput!]!$country:CountryCode=CA$language:LanguageCode=EN$withCarrierRates:Boolean=false)@inContext(country:$country language:$language){result:cartAttributesUpdate(cartId:$cartId attributes:$attributes){...@defer(if:$withCarrierRates){cart{...CartParts}errors:userErrors{...on CartUserError{message field code}}}}}",
    ho = "mutation cartBillingAddressUpdate($cartId:ID!$billingAddress:MailingAddressInput$country:CountryCode$language:LanguageCode$withCarrierRates:Boolean=false)@inContext(country:$country language:$language){result:cartBillingAddressUpdate(cartId:$cartId billingAddress:$billingAddress){...@defer(if:$withCarrierRates){cart{...CartParts}errors:userErrors{...on CartUserError{message field code}}}}}",
    po = "mutation cartBuyerIdentityUpdate($cartId:ID!$buyerIdentity:CartBuyerIdentityInput!$country:CountryCode$language:LanguageCode$withCarrierRates:Boolean=false)@inContext(country:$country language:$language){result:cartBuyerIdentityUpdate(cartId:$cartId buyerIdentity:$buyerIdentity){...@defer(if:$withCarrierRates){cart{...CartParts}errors:userErrors{...on CartUserError{message field code}}}}}",
    mo = "mutation cartSelectedDeliveryOptionsUpdate($cartId:ID!$selectedDeliveryOptions:[CartSelectedDeliveryOptionInput!]!$country:CountryCode=CA$language:LanguageCode=EN$withCarrierRates:Boolean=false)@inContext(country:$country language:$language){result:cartSelectedDeliveryOptionsUpdate(cartId:$cartId selectedDeliveryOptions:$selectedDeliveryOptions){...@defer(if:$withCarrierRates){cart{...CartParts}errors:userErrors{...on CartUserError{message field code}}}}}",
    yo = "mutation applePaySessionCreate($validationUrl:URL!){applePaySessionCreate(validationUrl:$validationUrl){...@defer{applePaySession{body}}}}",
    go = "mutation PayPalBuyerDetailsFetch($token:String!$cartId:ID){paypalBuyerDetailsFetch(token:$token cartId:$cartId){...@defer{paypalDetails{email expiresAt destinationAddress{...on MailingAddress{address1 address2 city company country firstName lastName phone province zip}}billingAddress{...on MailingAddress{address1 address2 city company country firstName lastName phone province zip}}}}}}",
    fo = "mutation PayPalTokenCreate($cartId:ID!){paypalTokenCreate(cartId:$cartId){...@defer{paypalToken{token}}}}",
    bo = "query cartQuery($id:ID!$country:CountryCode$language:LanguageCode$withCarrierRates:Boolean=false)@inContext(country:$country language:$language){cart(id:$id){...@defer(if:$withCarrierRates){...CartParts}}}",
    wo = "query subscriptionPolicyQuery($country:CountryCode$language:LanguageCode)@inContext(country:$country language:$language){shop{subscriptionPolicy(sanitized:true){body}}}",
    _o = "mutation cartPaymentUpdate($cartId:ID!$input:CartPaymentInput!$country:CountryCode$language:LanguageCode$withCarrierRates:Boolean=false)@inContext(country:$country language:$language){result:cartPaymentUpdate(cartId:$cartId payment:$input){...@defer(if:$withCarrierRates){cart{...CartParts}errors:userErrors{...on CartUserError{message field code}}}}}",
    Se = "fragment CartParts on Cart{id checkoutUrl buyerIdentity{deliveryAddressPreferences{...on MailingAddress{address1 address2 city province phone country firstName lastName zip}}}deliveryGroups(first:10 withCarrierRates:$withCarrierRates){edges{node{id groupType selectedDeliveryOption{code title description handle estimatedCost{amount currencyCode}}deliveryOptions{code title description estimatedCost{amount currencyCode}handle}}}}cost{subtotalAmount{amount currencyCode}totalAmount{amount currencyCode}totalTaxAmount{amount currencyCode}totalDutyAmount{amount currencyCode}}discountAllocations{discountedAmount{amount currencyCode}...on CartCodeDiscountAllocation{code}...on CartAutomaticDiscountAllocation{title}...on CartCustomDiscountAllocation{title}}discountCodes{code applicable}lines(first:10){edges{node{quantity cost{subtotalAmount{amount currencyCode}totalAmount{amount currencyCode}}discountAllocations{discountedAmount{amount currencyCode}...on CartCodeDiscountAllocation{code}...on CartAutomaticDiscountAllocation{title}...on CartCustomDiscountAllocation{title}}merchandise{...on ProductVariant{requiresShipping}}sellingPlanAllocation{priceAdjustments{price{amount currencyCode}}sellingPlan{billingPolicy{...on SellingPlanRecurringBillingPolicy{interval intervalCount}}priceAdjustments{orderCount}recurringDeliveries}}}}}}",
    Ao = "mutation cartSubmitForCompletion($cartId:ID!$attemptToken:String!$country:CountryCode$language:LanguageCode)@inContext(country:$country language:$language){cartSubmitForCompletion(cartId:$cartId attemptToken:$attemptToken){result{__typename ...on SubmitSuccess{redirectUrl}...on SubmitThrottled{pollAfterV2:pollAfter}...on SubmitFailed{errors{code message}}}errors:userErrors{...on CartUserError{code field message}}}}",
    So = "unstable",
    Sr = "RESTRICTED_WALLET_ACCOUNT";
class bt extends Error {
    constructor(t = "No response") {
        super(t), this.name = "NoResponseError"
    }
}
class me {
    constructor({
        accessToken: t,
        country: n,
        locale: r,
        apiVersion: a = So,
        withCarrierRates: i = !1
    }) {
        if (c(this, "OPERATION_NAME_REGEX", /[^ ]+ (\w+)/), c(this, "client"), c(this, "country"), c(this, "url"), c(this, "locale"), c(this, "withCarrierRates"), c(this, "lastValidCart"), !t) throw new Error("StorefrontApiClient constructed with no access token");
        if (!n) throw new Error("StorefrontApiClient constructed with no buyer country");
        if (!r) throw new Error("StorefrontApiClient constructed with no locale");
        this.country = n, this.locale = r, this.withCarrierRates = i, this.url = "/api/".concat(a, "/graphql.json"), this.client = Xi({
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "X-Shopify-Storefront-Access-Token": t,
                "X-SDK-Variant": "portable-wallets"
            },
            url: this.url,
            retries: 0,
            logger: o => {
                if (o.type === "HTTP-Response") {
                    const [s, l] = o.content.requestParams;
                    w.leaveBreadcrumb("POST: ".concat(s), {
                        statusCode: o.content.response.status,
                        statusText: o.content.response.statusText,
                        url: s,
                        method: l == null ? void 0 : l.method,
                        headers: l == null ? void 0 : l.headers,
                        body: l == null ? void 0 : l.body
                    }, "request")
                }
            }
        })
    }
    async createCart(t) {
        var n, r, a, i, o, s;
        const l = await this.requestStream([co, Se], {
            input: {
                lines: [{
                    merchandiseId: t.merchandiseId,
                    quantity: t.quantity,
                    sellingPlanId: t.sellingPlanId,
                    attributes: t.lineItemProperties
                }],
                discountCodes: t.discountCodes,
                buyerIdentity: t.buyerIdentity
            },
            country: this.country,
            language: this.formatLanguage(this.locale)
        }, {
            instrumentName: t.instrumentName,
            startingCheckout: !0
        });
        try {
            for (var u = z(l), d, p, y; d = !(p = await u.next()).done; d = !1) {
                const m = p.value;
                m.errors && this.onError(m.errors);
                const v = (r = (n = m.data) == null ? void 0 : n.result) == null ? void 0 : r.cart;
                if (v && !m.hasNext) return (i = (a = m.data) == null ? void 0 : a.result) != null && i.errors && this.onResultError((s = (o = m.data) == null ? void 0 : o.result) == null ? void 0 : s.errors), {
                    data: this.parseCartResponse(v),
                    errors: this.parseMutationErrors(m, "result")
                }
            }
        } catch (m) {
            y = [m]
        } finally {
            try {
                d && (p = u.return) && await p.call(u)
            } finally {
                if (y) throw y[0]
            }
        }
        throw new bt("Cart create operation returned no response")
    }
    async updateCartBillingAddress(t) {
        const {
            cartId: n,
            billingAddress: r,
            instrumentName: a
        } = t;
        return this.requestDeferredCart(ho, {
            cartId: n,
            billingAddress: r
        }, {
            instrumentName: a
        })
    }
    async updateCartBuyerIdentity(t, n) {
        const {
            cartId: r,
            emailAddress: a,
            streetAddress: i,
            countryCode: o,
            phone: s,
            preferences: l,
            instrumentName: u
        } = t;
        return this.requestDeferredCart(po, {
            cartId: r,
            buyerIdentity: {
                email: a,
                countryCode: o != null ? o : i == null ? void 0 : i.country,
                phone: s != null ? s : i == null ? void 0 : i.phone,
                deliveryAddressPreferences: i ? [{
                    deliveryAddressValidationStrategy: t.validateAddress ? "STRICT" : "COUNTRY_CODE_ONLY",
                    deliveryAddress: i
                }] : [],
                preferences: l
            }
        }, {
            instrumentName: u,
            abortSignal: n
        })
    }
    async updateSelectedDeliveryOptions(t, n, r, a) {
        let i = n;
        const o = Ft() + 2e4;
        for (; Ft() < o;) {
            const s = await this.requestDeferredCart(mo, {
                cartId: t,
                selectedDeliveryOptions: i
            }, {
                instrumentName: r,
                abortSignal: a
            });
            if (!s.errors.some(u => typeof u == "string" && u.startsWith(h.PendingDeliveryGroups))) return s;
            const l = s.data.deliveryGroups.flatMap(u => u.deliveryOptions.map(d => ({
                deliveryOptionHandle: d.handle,
                deliveryGroupId: u.id
            })));
            i = i.map(u => {
                var d;
                return (d = l.find(p => p.deliveryOptionHandle === u.deliveryOptionHandle)) != null ? d : u
            })
        }
        throw new Error("Selected delivery options update operation timed out")
    }
    async applePaySessionCreate(t) {
        var n, r, a;
        const i = await this.requestStream([yo], {
            validationUrl: t.toString()
        }, {
            instrumentName: b.ApplePay
        });
        try {
            for (var o = z(i), s, l, u; s = !(l = await o.next()).done; s = !1) {
                const d = l.value;
                d.errors && this.onError(d.errors);
                const p = (a = (r = (n = d.data) == null ? void 0 : n.applePaySessionCreate) == null ? void 0 : r.applePaySession) == null ? void 0 : a.body;
                if (p) return p
            }
        } catch (d) {
            u = [d]
        } finally {
            try {
                s && (l = o.return) && await l.call(o)
            } finally {
                if (u) throw u[0]
            }
        }
        throw new bt("Apple Pay session create operation returned no response")
    }
    async paypalBuyerDetailsFetch(t, n) {
        var r, a;
        const i = await this.requestStream([go], {
            token: t,
            cartId: n
        }, {
            instrumentName: b.PayPal
        });
        try {
            for (var o = z(i), s, l, u; s = !(l = await o.next()).done; s = !1) {
                const d = l.value;
                if (d.hasNext) continue;
                d.errors && this.onError(d.errors);
                const p = (a = (r = d.data) == null ? void 0 : r.paypalBuyerDetailsFetch) == null ? void 0 : a.paypalDetails;
                if (p) return p
            }
        } catch (d) {
            u = [d]
        } finally {
            try {
                s && (l = o.return) && await l.call(o)
            } finally {
                if (u) throw u[0]
            }
        }
        throw new bt("PayPal buyer details fetch operation returned no response")
    }
    async paypalTokenCreate(t) {
        var n, r, a, i;
        const o = await this.requestStream([fo], {
            cartId: t
        }, {
            instrumentName: b.PayPal
        });
        try {
            for (var s = z(o), l, u, d; l = !(u = await s.next()).done; l = !1) {
                const p = u.value;
                if (p.errors) {
                    if ((n = p.errors.graphQLErrors) != null && n.find(m => {
                            var v;
                            return ((v = m.extensions) == null ? void 0 : v.code) === Sr
                        })) throw new Vt(Sr);
                    this.onError(p.errors)
                }
                const y = (i = (a = (r = p.data) == null ? void 0 : r.paypalTokenCreate) == null ? void 0 : a.paypalToken) == null ? void 0 : i.token;
                if (y) return y
            }
        } catch (p) {
            d = [p]
        } finally {
            try {
                l && (u = s.return) && await u.call(s)
            } finally {
                if (d) throw d[0]
            }
        }
        throw new bt("PayPal token create operation returned no response")
    }
    async fetchCart({
        id: t,
        startingCheckout: n,
        instrumentName: r
    }) {
        var a;
        const i = this.formatLanguage(this.locale),
            o = await this.requestStream([bo, Se], {
                id: t,
                country: this.country,
                language: i,
                withCarrierRates: this.withCarrierRates
            }, {
                instrumentName: r,
                startingCheckout: n
            });
        try {
            for (var s = z(o), l, u, d; l = !(u = await s.next()).done; l = !1) {
                const p = u.value;
                p.errors && this.onError(p.errors);
                const y = (a = p.data) == null ? void 0 : a.cart;
                if (w.leaveBreadcrumb("Fetch cart response", {
                        body: y,
                        hasNext: p.hasNext
                    }, "log"), y && !p.hasNext) {
                    const m = this.parseCartResponse(y);
                    return this.lastValidCart = m, m
                }
            }
        } catch (p) {
            d = [p]
        } finally {
            try {
                l && (u = s.return) && await u.call(s)
            } finally {
                if (d) throw d[0]
            }
        }
        throw new bt("Cart fetch operation returned no response")
    }
    async updateCartPayment(t, n, r, a) {
        var i, o;
        const s = {
                cartId: t,
                input: n
            },
            {
                amount: l,
                currencyCode: u
            } = n.amount;
        let d;
        const p = Ft() + 1e4;
        for (; Ft() < p;) {
            const y = await this.requestDeferredCart(_o, s, {
                instrumentName: r,
                abortSignal: a
            });
            if (d || (d = y), y.errors.includes(h.InvalidPaymentAmount)) {
                parseFloat((o = (i = y.data.totalTaxAmount) == null ? void 0 : i.amount) != null ? o : "0") === 0 && await new Promise(m => setTimeout(m, 500)), s.input.amount = {
                    amount: y.data.totalAmount.amount,
                    currencyCode: y.data.totalAmount.currencyCode
                };
                continue
            }
            return (y.data.totalAmount.amount === l || parseFloat(y.data.totalAmount.amount) <= parseFloat(l)) && y.data.totalAmount.currencyCode === u ? y : d
        }
        throw new Error("Payment update operation timed out")
    }
    async updateCartAttributes({
        cartId: t,
        attributes: n,
        instrumentName: r,
        startingCheckout: a
    }) {
        const i = {
            cartId: t,
            attributes: n
        };
        return await this.requestDeferredCart(uo, i, {
            instrumentName: r,
            startingCheckout: a
        })
    }
    async submitForCompletion(t, n, r) {
        var a, i;
        const o = this.formatLanguage(this.locale),
            s = await this.request([Ao], {
                cartId: t,
                attemptToken: n,
                country: this.country,
                language: o,
                withCarrierRates: this.withCarrierRates
            }, {
                instrumentName: r
            });
        return {
            data: (i = (a = s.data) == null ? void 0 : a.cartSubmitForCompletion) == null ? void 0 : i.result,
            errors: this.parseCompletionErrors(s)
        }
    }
    async fetchSubscriptionPolicy() {
        var t, n;
        const {
            data: r
        } = await this.request([wo], {
            country: this.country,
            language: this.formatLanguage(this.locale)
        }, {});
        return (n = (t = r == null ? void 0 : r.shop) == null ? void 0 : t.subscriptionPolicy) == null ? void 0 : n.body
    }
    generateURLWithOperationName(t) {
        const n = t.match(this.OPERATION_NAME_REGEX);
        if (n) {
            const r = this.url.includes("?") ? "&" : "?",
                a = "operation_name=".concat(n[1]);
            return "".concat(this.url).concat(r).concat(a)
        }
        return this.url
    }
    async request(t, n, r) {
        return this.client.request(t.join(""), {
            variables: n,
            headers: Cr(r),
            url: this.generateURLWithOperationName(t[0])
        })
    }
    async requestStream(t, n, r) {
        return this.client.requestStream(t.join(""), {
            variables: n,
            headers: Cr(r),
            url: this.generateURLWithOperationName(t[0]),
            signal: r.abortSignal
        })
    }
    async requestDeferredCart(t, n, r) {
        var a, i, o, s, l, u;
        const d = this.formatLanguage(this.locale),
            p = await this.requestStream([t, Se], D(A({}, n), {
                country: this.country,
                language: d,
                withCarrierRates: this.withCarrierRates
            }), r);
        try {
            for (var y = z(p), m, v, f; m = !(v = await y.next()).done; m = !1) {
                const S = v.value;
                S.errors && this.onError(S.errors);
                const B = (i = (a = S.data) == null ? void 0 : a.result) == null ? void 0 : i.cart;
                if (B && !S.hasNext) return {
                    data: await this.fetchCart({
                        id: B.id,
                        instrumentName: r.instrumentName,
                        startingCheckout: !1
                    }),
                    errors: this.parseMutationErrors(S, "result")
                };
                if (this.lastValidCart && (s = (o = S.data) == null ? void 0 : o.result) != null && s.errors) return this.onResultError((u = (l = S.data) == null ? void 0 : l.result) == null ? void 0 : u.errors), {
                    data: this.lastValidCart,
                    errors: this.parseMutationErrors(S, "result")
                }
            }
        } catch (S) {
            f = [S]
        } finally {
            try {
                m && (v = y.return) && await v.call(y)
            } finally {
                if (f) throw f[0]
            }
        }
        throw new bt("Deferred cart operation returned no response")
    }
    onError(t) {
        var n, r;
        if (!t) return;
        w.leaveBreadcrumb("GraphQL response error", t, "error");
        const a = (r = (n = t.graphQLErrors) == null ? void 0 : n.map(s => s.message).join(", ")) != null ? r : "",
            i = "".concat(t.message).concat(a.length > 0 ? " - ".concat(a) : ""),
            o = t != null && t.networkStatusCode ? "with status ".concat(t.networkStatusCode, " => ").concat(i) : "=> ".concat(i);
        throw new Error("GraphQL mutation failed ".concat(o))
    }
    onResultError(t) {
        w.leaveBreadcrumb("GraphQL result error", t, "error")
    }
    formatLanguage(t) {
        return t.includes("-") ? t.split("-")[0].toUpperCase() : t.toUpperCase()
    }
    parseCartResponse(t) {
        var n, r, a;
        const i = t.lines.edges.map(s => {
                var l, u;
                const d = s.node;
                return {
                    quantity: d.quantity,
                    totalAmount: {
                        amount: d.cost.totalAmount.amount,
                        currencyCode: d.cost.totalAmount.currencyCode
                    },
                    subtotalAmount: {
                        amount: (l = d.cost.subtotalAmount) == null ? void 0 : l.amount,
                        currencyCode: (u = d.cost.subtotalAmount) == null ? void 0 : u.currencyCode
                    },
                    merchandise: {
                        requiresShipping: d.merchandise.requiresShipping
                    },
                    discountAllocations: d.discountAllocations,
                    sellingPlanAllocation: d.sellingPlanAllocation
                }
            }),
            o = t.deliveryGroups.edges.map(s => s.node);
        return {
            id: t.id,
            totalAmount: t.cost.totalAmount,
            subtotalAmount: (n = t.cost.subtotalAmount) != null ? n : void 0,
            totalTaxAmount: (r = t.cost.totalTaxAmount) != null ? r : void 0,
            totalDutyAmount: (a = t.cost.totalDutyAmount) != null ? a : void 0,
            discountAllocations: t.discountAllocations,
            discountCodes: t.discountCodes,
            lineItems: i,
            deliveryGroups: o,
            checkoutUrl: t.checkoutUrl
        }
    }
    parseGraphQlErrors(t) {
        var n, r;
        return (r = (n = t == null ? void 0 : t.graphQLErrors) == null ? void 0 : n.map(a => a.message.replace(/\(Expected.*\)/, "").trim())) != null ? r : []
    }
    parseMutationErrors(t, n) {
        var r, a, i;
        const o = this.parseGraphQlErrors(t.errors),
            s = ((i = (a = (r = t.data) == null ? void 0 : r[n]) == null ? void 0 : a.errors) == null ? void 0 : i.map(u => u.code === Qt ? {
                code: Qt,
                message: u.message
            } : u.field && u.field.length > 0 ? "".concat(u.code, ": ").concat(u.field.join(".")) : u.code).filter(u => u)) || [],
            l = [...o, ...s];
        return w.leaveBreadcrumb("GraphQL errors on mutation", l, "error"), l
    }
    parseCompletionErrors(t) {
        var n, r, a, i;
        const o = this.parseGraphQlErrors(t.errors);
        let s = [];
        ((a = (r = (n = t.data) == null ? void 0 : n.cartSubmitForCompletion) == null ? void 0 : r.result) == null ? void 0 : a.__typename) === "SubmitFailed" && (s = (i = t.data.cartSubmitForCompletion.result.errors.map(u => u.code)) != null ? i : []);
        const l = [...o, ...s];
        return w.leaveBreadcrumb("GraphQL errors on completion", l, "error"), l
    }
}

function Cr({
    instrumentName: e,
    startingCheckout: t
}) {
    const n = {};
    return e && (n["X-Wallet-Name"] = "".concat(e)), t && (n["X-Start-Wallet-Checkout"] = "".concat(t)), n
}
async function bn({
    cartId: e,
    cartClient: t,
    instrumentName: n,
    selectedDeliveryOptions: r,
    abortSignal: a
}) {
    try {
        if (!e) throw new Error("[".concat(n, "] provided no cart ID when updating shipping method"));
        if (!t) throw new Error("[".concat(n, "] provided invalid cart client when updating shipping method"));
        return await t.updateSelectedDeliveryOptions(e, r, n, a)
    } catch (i) {
        throw g.updateFailed(n, "updateSelectedDeliveryOptions"), i
    }
}
async function wn({
    cartId: e,
    token: t,
    cartClient: n,
    instrumentName: r
}) {
    try {
        if (!e) throw new Error("[".concat(r, "] provided no cart ID when submitting for completion"));
        if (!n) throw new Error("[".concat(r, "] provided invalid cart client when submitting for completion"));
        if (!t) throw new Error("[".concat(r, "] provided no token when submitting for completion"));
        return await n.submitForCompletion(e, t, r)
    } catch (a) {
        throw g.updateFailed(r, "submitForCompletion"), a
    }
}

function _n({
    selectedDeliveryOptionHandles: e,
    deliveryGroups: t,
    instrumentName: n
}) {
    return t.map(r => {
        const a = r.deliveryOptions.filter(i => e.includes(i.handle));
        if (!a.length) throw new Error("[".concat(n, "] could not find delivery option for group: ").concat(r.id));
        if (a.length > 1) throw new Error("[".concat(n, "] found multiple delivery options with selectedDeliverOptionHandle in group: ").concat(r.id));
        return {
            deliveryGroupId: r.id,
            deliveryOptionHandle: a[0].handle
        }
    })
}
async function Co(e) {
    const {
        cartClient: t,
        instrumentName: n
    } = e;
    try {
        if (!e.cartId) throw new Error("[".concat(n, "] provided no cart ID when updating billing address"));
        if (!t) throw new Error("[".concat(n, "] provided invalid cart client when updating billing address"));
        return await t.updateCartBillingAddress(e)
    } catch (r) {
        throw g.updateFailed(n, "updateBillingAddress"), r
    }
}
class Eo {
    constructor({
        accessToken: t,
        buyerCountry: n,
        buyerCurrency: r,
        button: a,
        i18n: i,
        merchantName: o,
        dataSource: s,
        apiClient: l,
        walletParams: u
    }) {
        c(this, "name", b.ApplePay), c(this, "accessToken"), c(this, "button"), c(this, "buyerCountry"), c(this, "cart"), c(this, "apiClient"), c(this, "dataSource"), c(this, "i18n"), c(this, "merchantName"), c(this, "session"), c(this, "paymentSheetActionGenerator"), c(this, "cancelled"), c(this, "buyerCurrency"), c(this, "customerAccountEmail"), c(this, "abortController", null), c(this, "onvalidatemerchant", async d => {
            try {
                const p = new URL(d.validationURL),
                    y = this.getMerchantSession(p),
                    {
                        cart: m,
                        outOfStock: v
                    } = await nt({
                        element: this.button,
                        instrumentName: this.name,
                        dataSource: this.dataSource
                    });
                this.cart = m;
                const f = await y;
                if (w.leaveBreadcrumb("ApplePay Session completeMerchantValidation", {
                        session: f
                    }, "log"), v) {
                    this.abortAndShowOutOfStockError();
                    return
                }
                if (this.sessionIsCancelled()) return;
                this.session.completeMerchantValidation(f)
            } catch (p) {
                g.sheetClicked({
                    instrument: b.ApplePay,
                    result: "failed"
                }), this.terminateSession(p)
            }
        }), c(this, "onshippingcontactselected", async d => {
            try {
                const p = Wt(d.shippingContact),
                    y = await St({
                        cartId: this.cart.id,
                        streetAddress: p,
                        cartClient: this.apiClient,
                        instrumentName: this.name
                    });
                if (!y.data) throw new Error("Missing cart during Apple Pay Session creation");
                if (this.shouldDecelerate(y.data)) return;
                await this.applyPaymentSheetActions(y, m => this.completeShippingContactSelection(y.data, m), {
                    shippingRequired: this.isShippingRequired
                })
            } catch (p) {
                this.terminateSession(p)
            }
        }), c(this, "onshippingmethodselected", async d => {
            var p;
            try {
                const y = d.shippingMethod.identifier.split(","),
                    m = _n({
                        selectedDeliveryOptionHandles: y,
                        deliveryGroups: this.cart.deliveryGroups,
                        instrumentName: this.name
                    }),
                    v = await bn({
                        cartId: this.cart.id,
                        cartClient: this.apiClient,
                        instrumentName: this.name,
                        selectedDeliveryOptions: m,
                        abortSignal: (p = this.abortController) == null ? void 0 : p.signal
                    });
                await this.applyPaymentSheetActions(v, () => this.completeShippingMethodSelection(v.data))
            } catch (y) {
                this.terminateSession(y)
            }
        }), c(this, "onpaymentmethodselected", async d => {
            try {
                const {
                    billingContact: p
                } = d.paymentMethod;
                if (!this.isShippingRequired && p) {
                    const v = Wt(p),
                        f = await St({
                            cartId: this.cart.id,
                            countryCode: v.country,
                            cartClient: this.apiClient,
                            instrumentName: this.name
                        });
                    if (!f.data) throw new Error("Missing cart during Apple Pay Session creation");
                    if (this.shouldDecelerate(f.data)) return;
                    await this.applyPaymentSheetActions(f, () => this.cart = f.data);
                    const S = await Co({
                        billingAddress: v,
                        cartId: this.cart.id,
                        cartClient: this.apiClient,
                        instrumentName: this.name
                    });
                    await this.applyPaymentSheetActions(S, () => this.cart = S.data)
                }
                const {
                    newTotal: y,
                    newLineItems: m
                } = this.getNewTotalAndLineItems(this.cart);
                if (w.leaveBreadcrumb("ApplePay Session completePaymentMethodSelection", {
                        newTotal: y,
                        newLineItems: m
                    }, "log"), this.sessionIsCancelled()) return;
                this.session.completePaymentMethodSelection({
                    newTotal: y,
                    newLineItems: m
                })
            } catch (p) {
                this.terminateSession(p)
            }
        }), c(this, "oncancel", () => {
            var d;
            this.cancelled = !0, g.sheetCancelled(this.name), this.button.disabled = !1, (d = this.abortController) == null || d.abort()
        }), c(this, "onpaymentauthorized", async d => {
            g.authorizationAttempt(this.name), qt(N.AuthorizationLatency, this.name);
            const p = O => {
                    g.authorizationComplete({
                        instrument: this.name,
                        measurement: Y(N.AuthorizationLatency, this.name),
                        result: "failure"
                    }), this.terminateSession(O)
                },
                y = async O => {
                    var F, Nt;
                    switch ((F = O.effects) == null || F.forEach(_ => _()), O.action) {
                        case "complete":
                            {
                                const _ = ApplePaySession.STATUS_SUCCESS;
                                try {
                                    await this.completePayment(_), tt(O.redirectUrl)
                                } catch (M) {
                                    p(M)
                                }
                                break
                            }
                        case "show_error":
                            {
                                const _ = (Nt = O.errors) != null ? Nt : [];
                                try {
                                    await this.completePayment(ApplePaySession.STATUS_FAILURE, _)
                                } catch (M) {
                                    p(M)
                                }
                                break
                            }
                        case "abort":
                            {
                                try {
                                    await this.completePayment(ApplePaySession.STATUS_FAILURE), this.button.disabled = !1
                                } catch (_) {
                                    p(_)
                                }
                                break
                            }
                        default:
                            p(new Error("[".concat(this.name, "] completion action not handled: ").concat(O.action)))
                    }
                },
                {
                    token: m,
                    billingContact: v,
                    shippingContact: f
                } = d.payment;
            let S = null,
                B = null;
            try {
                if (!v) {
                    await this.completePayment(ApplePaySession.STATUS_FAILURE);
                    return
                }
                if (S = Wt(D(A({}, v), {
                        phoneNumber: f == null ? void 0 : f.phoneNumber
                    })), this.isShippingRequired) {
                    if (!f) {
                        await this.completePayment(ApplePaySession.STATUS_FAILURE);
                        return
                    }
                    B = Wt(f)
                }
            } catch (O) {
                p(O);
                return
            }
            const K = async () => {
                    var O;
                    try {
                        const F = this.isShippingRequired ? {
                                validateAddress: !0,
                                streetAddress: B
                            } : {},
                            Nt = (O = this.customerAccountEmail) != null ? O : f == null ? void 0 : f.emailAddress,
                            _ = await St(A({
                                cartId: this.cart.id,
                                emailAddress: Nt,
                                cartClient: this.apiClient,
                                instrumentName: this.name
                            }, F)),
                            M = this.paymentSheetActionGenerator.mapMutationResultToPaymentSheetAction(_);
                        await Ae({
                            paymentSheetAction: M,
                            onProceed: async Rt => {
                                Rt && Rt.length > 0 ? await this.completePayment(ApplePaySession.STATUS_FAILURE, Rt) : await jt()
                            },
                            terminateSession: p
                        })
                    } catch (F) {
                        p(F)
                    }
                },
                jt = async () => {
                    var O;
                    try {
                        const F = this.cart.lineItems.some(M => !!M.sellingPlanAllocation),
                            Nt = await Qe({
                                cartId: this.cart.id,
                                totalAmount: this.cart.totalAmount,
                                paymentMethod: {
                                    walletPaymentMethod: {
                                        applePayWalletContent: {
                                            billingAddress: S,
                                            data: m.paymentData.data,
                                            header: m.paymentData.header,
                                            lastDigits: m.paymentMethod.displayName.split(" ")[1],
                                            signature: m.paymentData.signature,
                                            version: m.paymentData.version
                                        }
                                    }
                                },
                                canUsePaymentMethodForFreeOrder: !1,
                                billingAddress: S,
                                cartClient: this.apiClient,
                                instrumentName: this.name,
                                hasSellingPlan: F,
                                abortSignal: (O = this.abortController) == null ? void 0 : O.signal
                            }),
                            _ = this.paymentSheetActionGenerator.mapMutationResultToPaymentSheetAction(Nt);
                        await Ae({
                            paymentSheetAction: _,
                            onProceed: async M => {
                                M && M.length > 0 ? await this.completePayment(ApplePaySession.STATUS_FAILURE, M) : await ye()
                            },
                            terminateSession: p
                        })
                    } catch (F) {
                        p(F)
                    }
                },
                ye = async () => {
                    try {
                        const O = await wn({
                                cartId: this.cart.id,
                                token: m.transactionIdentifier,
                                cartClient: this.apiClient,
                                instrumentName: this.name
                            }),
                            F = this.paymentSheetActionGenerator.mapCompletionResultToPaymentSheetAction(O);
                        await y(F)
                    } catch (O) {
                        p(O)
                    }
                };
            await K()
        }), c(this, "terminateSession", d => {
            var p;
            this.button.disabled = !1, d && w.notify(d), g.sheetFailed(this.name, d);
            try {
                w.leaveBreadcrumb("ApplePay Session abort", {}, "log"), this.session.abort(), (p = this.abortController) == null || p.abort()
            } catch (y) {
                console.debug("[DEBUG] InvalidAccessError occurred during Apple Pay terminateSession")
            }
            if (d) {
                const y = this.i18n.translate("brand.apple_pay");
                W(y, this.i18n)
            }
        }), c(this, "abortAndShowOutOfStockError", () => {
            var d;
            this.session.abort(), (d = this.abortController) == null || d.abort(), et(this.i18n)
        }), c(this, "getMostRecentNonNullCart", (d, p) => d ? (this.cart = d, d) : p), c(this, "handleNullCart", d => {
            if (!d) throw new Error("[".concat(this.name, "] no cart returned on mutation, aborting"))
        }), c(this, "completeShippingContactSelection", (d, p) => {
            try {
                const y = this.getMostRecentNonNullCart(d, this.cart),
                    {
                        newTotal: m,
                        newLineItems: v
                    } = this.getNewTotalAndLineItems(y),
                    f = Bi(y.deliveryGroups, this.i18n);
                w.leaveBreadcrumb("ApplePay Session completeShippingContactSelection", {
                    errors: p,
                    newTotal: m,
                    newLineItems: v,
                    newShippingMethods: f
                }, "log"), this.session.completeShippingContactSelection({
                    errors: p != null ? p : [],
                    newTotal: m,
                    newLineItems: v,
                    newShippingMethods: f
                })
            } catch (y) {
                this.terminateSession(y)
            }
        }), c(this, "completeShippingMethodSelection", d => {
            try {
                this.handleNullCart(d), this.cart = d;
                const {
                    newTotal: p,
                    newLineItems: y
                } = this.getNewTotalAndLineItems(d);
                w.leaveBreadcrumb("ApplePay Session completeShippingContactSelection", {
                    newTotal: p,
                    newLineItems: y
                }, "log"), this.session.completeShippingMethodSelection({
                    newTotal: p,
                    newLineItems: y
                })
            } catch (p) {
                this.terminateSession(p)
            }
        }), c(this, "sessionIsCancelled", () => this.cancelled), this.accessToken = t, this.buyerCountry = n, this.button = a, this.cart = null, this.apiClient = l, this.dataSource = s, this.i18n = i, this.merchantName = o, this.cancelled = !1, this.buyerCurrency = r, this.customerAccountEmail = u.customerAccountEmail, this.session = new ApplePaySession(Br, Gi({
            shippingRequired: this.isShippingRequired,
            walletParams: u,
            buyerCurrency: r
        })), this.session.onvalidatemerchant = this.onvalidatemerchant, this.session.onshippingcontactselected = this.onshippingcontactselected, this.session.onshippingmethodselected = this.onshippingmethodselected, this.session.onpaymentmethodselected = this.onpaymentmethodselected, this.session.oncancel = this.oncancel, this.session.onpaymentauthorized = this.onpaymentauthorized, this.paymentSheetActionGenerator = new Hi(i)
    }
    begin() {
        w.leaveBreadcrumb("ApplePay Session begin", {}, "log"), this.abortController = Ze(), this.session.begin()
    }
    async applyPaymentSheetActions(t, n, r) {
        var a;
        const i = this.paymentSheetActionGenerator.mapMutationResultToPaymentSheetAction(t, r);
        (a = i.effects) == null || a.forEach(o => o()), !this.sessionIsCancelled() && await Ae({
            paymentSheetAction: i,
            onProceed: n,
            terminateSession: this.terminateSession
        })
    }
    async getMerchantSession(t) {
        const n = await new me({
            accessToken: this.accessToken,
            country: this.buyerCountry,
            locale: this.i18n.locale,
            apiVersion: "unstable"
        }).applePaySessionCreate(t);
        return JSON.parse(n)
    }
    async completePayment(t, n = void 0) {
        w.leaveBreadcrumb("ApplePay Session completePayment", {
            status: t,
            errors: n
        }, "log"), this.session.completePayment({
            status: t,
            errors: n
        }), g.authorizationComplete({
            instrument: this.name,
            measurement: Y(N.AuthorizationLatency, this.name),
            result: t === ApplePaySession.STATUS_SUCCESS ? "success" : "failure"
        })
    }
    getNewTotalAndLineItems(t) {
        return {
            newTotal: Fi(this.merchantName, t.totalAmount),
            newLineItems: Ui({
                subtotal: an(t),
                discountAllocations: zi(t),
                deliveryGroups: t.deliveryGroups,
                duties: t.totalDutyAmount,
                taxes: t.totalTaxAmount,
                i18n: this.i18n,
                formattedRecurringTotals: Vi(this.cart.lineItems, this.i18n)
            })
        }
    }
    shouldDecelerate(t) {
        const {
            checkoutUrl: n,
            totalAmount: r
        } = t;
        return Xe({
            checkoutUrl: n,
            instrumentName: this.name,
            currentCartTotal: r,
            initialBuyerCurrency: this.buyerCurrency
        }) ? (this.terminateSession(), !0) : !1
    }
    get isShippingRequired() {
        return this.button.isShippingRequired
    }
}
const vo = '<svg viewBox="0 0 43 19" xmlns="http://www.w3.org/2000/svg" width="45px" style="width: 45px;">\n  <path d="M6.948 1.409C7.934.147 9.305.147 9.305.147s.193 1.18-.771 2.316c-1.05 1.2-2.228.993-2.228.993s-.236-.93.642-2.047zM3.82 3.663c-1.735 0-3.6 1.51-3.6 4.363 0 2.916 2.186 6.555 3.943 6.555.6 0 1.543-.6 2.485-.6.922 0 1.607.559 2.464.559 1.907 0 3.322-3.826 3.322-3.826s-2.015-.744-2.015-2.936c0-1.944 1.629-2.73 1.629-2.73s-.836-1.447-2.936-1.447c-1.22 0-2.164.661-2.656.661-.622.021-1.5-.6-2.636-.6zM19.64 1.426c2.453 0 4.188 1.788 4.188 4.396 0 2.608-1.755 4.417-4.248 4.417h-2.932v4.564h-1.974V1.426h4.966zm-2.992 7.067h2.473c1.695 0 2.693-.967 2.693-2.65 0-1.683-.978-2.671-2.693-2.671h-2.473v5.321zm7.559 3.429c0-1.767 1.296-2.777 3.65-2.945l2.572-.147v-.78c0-1.156-.738-1.787-1.994-1.787-1.037 0-1.795.568-1.955 1.43h-1.775c.06-1.788 1.656-3.092 3.79-3.092 2.333 0 3.829 1.304 3.829 3.281v6.9h-1.815v-1.684h-.04c-.519 1.094-1.715 1.788-3.012 1.788-1.934.021-3.25-1.178-3.25-2.965zm6.222-.905v-.778l-2.313.168c-1.297.084-1.975.59-1.975 1.494 0 .862.718 1.409 1.815 1.409 1.396-.021 2.473-.968 2.473-2.293zm3.969 7.383v-1.64c.14.041.438.041.598.041.897 0 1.416-.4 1.735-1.472l.14-.526L33.4 4.707h2.054l2.453 8.224h.04L40.4 4.707h1.994l-3.57 10.538c-.818 2.419-1.715 3.197-3.67 3.197-.14.02-.598-.021-.757-.042z"/>\n</svg>\n';

function tr({
    translate: e,
    logoElement: t,
    setAriaHidden: n
}) {
    const r = document.createElement("div");
    return e("buy_with_button_content", {
        wallet: "LOGO_PLACEHOLDER"
    }).split(new RegExp("(LOGO_PLACEHOLDER)")).filter(Boolean).forEach(a => {
        let i;
        a === "LOGO_PLACEHOLDER" ? i = t : (i = document.createElement("span"), i.innerText = a, n && i.setAttribute("aria-hidden", "true")), r.appendChild(i)
    }), r
}
var Ct;
class Io extends gt {
    constructor() {
        super(), c(this, "name", b.ApplePay), c(this, "button", null), c(this, "logoElement"), j(this, Ct, void 0), J(this, Ct, this.attachShadow({
            mode: "closed"
        })), this.logoElement = new DOMParser().parseFromString(vo, "image/svg+xml").documentElement
    }
    static get observedAttributes() {
        return ["disabled"]
    }
    get merchantName() {
        return this.walletParams.merchantName
    }
    connectedCallback() {
        this.cleanupOnFailure(this.render.bind(this), this.name)
    }
    attributeChangedCallback(t, n, r) {
        super.attributeChangedCallback(t, n, r, this.button)
    }
    async handleClick(t) {
        if (t.preventDefault(), this.disabled || !this.button || this.button.hasAttribute("aria-disabled")) return;
        this.disabled = !0;
        const [n, r, a] = await Promise.all([this.i18n, this.dataSource, this.apiClient]);
        let i;
        try {
            if (i = new Eo({
                    accessToken: this.accessToken,
                    buyerCountry: this.buyerCountry,
                    buyerCurrency: this.buyerCurrency,
                    button: this,
                    i18n: n,
                    merchantName: this.merchantName,
                    dataSource: r,
                    apiClient: a,
                    walletParams: this.walletParams
                }), !i) throw new Error("missing ApplePaySession");
            i.begin(), g.sheetClicked({
                instrument: this.name,
                result: "success"
            }), rt(this.name)
        } catch (o) {
            w.notify(o), g.sheetClicked({
                instrument: this.name,
                result: "failed"
            }), i == null || i.terminateSession()
        }
    }
    async render() {
        var t;
        const {
            translate: n
        } = await this.i18n;
        if (!this.button) {
            if (this.button = le({
                    label: n("buy_with_button_content", {
                        wallet: n("brand.apple_pay")
                    })
                }), this.button.onclick = r => this.handleClick(r), this.button.classList.add("apple-pay-button", Qn[this.buttonTheme], pt.BUTTON), this.isCTA) {
                const r = tr({
                    translate: n,
                    logoElement: this.logoElement,
                    setAriaHidden: !0
                });
                r.classList.add("apple-pay--content"), this.button.appendChild(r)
            } else this.button.appendChild(this.logoElement);
            this.initializeShadowStyles(I(this, Ct), Li), I(this, Ct).appendChild(this.button), (t = this.onRendered) == null || t.call(this)
        }
        this.disabled && (this.button.setAttribute("disabled", ""), this.button.setAttribute("aria-disabled", "true"))
    }
}
Ct = new WeakMap;

function er(e) {
    return function(t, n, r) {
        const a = r.value;
        return r.value = function(...i) {
            const o = a.apply(this, i);
            return o.eligible || console.debug("[DEBUG] ".concat(e, " could not be rendered. Reason: ").concat(o.reason)), o
        }, r
    }
}
var Po = Object.defineProperty,
    Do = Object.getOwnPropertyDescriptor,
    An = (e, t, n, r) => {
        for (var a = Do(t, n), i = e.length - 1, o; i >= 0; i--)(o = e[i]) && (a = o(t, n, a) || a);
        return a && Po(t, n, a), a
    };
class rr extends at {
    constructor(t) {
        super(t), c(this, "companyFieldRequired"), this.companyFieldRequired = !!this.walletParams.companyRequired
    }
    static walletName() {
        return "apple_pay"
    }
    getWebComponentName() {
        return "shopify-apple-pay-button"
    }
    getWebComponentClass() {
        return Io
    }
    getInstrumentName() {
        return b.ApplePay
    }
    applePayInIframe() {
        return typeof window > "u" || window.self !== window.top
    }
    getLoadEligibility() {
        return this.applePayInIframe() ? {
            eligible: !1,
            reason: "cannot be loaded in an iframe"
        } : {
            eligible: !0
        }
    }
    getPartnerSDKEligibility() {
        var t, n, r, a;
        return typeof window > "u" || window.ApplePaySession === void 0 ? {
            eligible: !1,
            reason: "window or ApplePaySession is undefined"
        } : (n = (t = window.ApplePaySession).supportsVersion) != null && n.call(t, Br) ? (a = (r = window.ApplePaySession).canMakePayments) != null && a.call(r) ? {
            eligible: !0
        } : {
            eligible: !1,
            reason: "failed SDK eligibility check"
        } : {
            eligible: !1,
            reason: "SDK does not meet minimum version requirement"
        }
    }
}
An([er("Apple Pay")], rr.prototype, "getLoadEligibility"), An([er("Apple Pay")], rr.prototype, "getPartnerSDKEligibility");
const To = ".buy-with-prime-button{width:100%;height:100%;padding:12px 10px 8px;display:flex;align-items:center;justify-content:center;gap:5px;opacity:1;border-width:0px}.buy-with-prime-button:hover:enabled{background-color:#0684eb!important}.buy-with-prime-button:focus{box-shadow:0 0 0 2px #1a98ff,inset 0 0 0 2px rgb(var(--color-background))!important;outline:none!important}.buy-with-prime-button:active,.buy-with-prime-button:hover:enabled:active{background-color:#0066cd!important;box-shadow:none!important}";
class Zt extends Error {
    constructor() {
        super(...arguments), c(this, "name", "MissingAccessTokenError")
    }
}
class nr extends Error {
    constructor() {
        super(...arguments), c(this, "name", "FetchingWalletsPlatformConfigError")
    }
}
class Sn extends Error {
    constructor() {
        super(...arguments), c(this, "name", "EmptyLineItemsWalletsPlatformConfigError")
    }
}
async function Cn({
    configOptionsEndpoint: e,
    checkoutUrl: t,
    sourceId: n,
    accessToken: r,
    instrument: a
}) {
    try {
        const i = JSON.stringify({
                checkout_url: t,
                checkout_cancel_url: window.location.href,
                cart_id: n
            }),
            o = await fetch(e, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "X-Shopify-Storefront-Access-Token": r
                },
                body: i
            });
        if (o.ok) return o.json();
        const s = await o.json();
        throw s.error ? new Error(s.error) : new Error("Could not fetch wallets platform configs: [".concat(o.status, "] ").concat(o.statusText))
    } catch (i) {
        const {
            message: o
        } = i != null ? i : {};
        switch (o) {
            case "empty_line_items":
                throw new Sn("[Fetch Pay Config][".concat(a, "] No eligible line items provided in the config request."));
            default:
                throw new nr("[Fetch Pay Config][".concat(a, "] ").concat(o))
        }
    }
}
const No = {
    [C.Checkout]: "Checkout",
    [C.CartAjax]: "Cart",
    [C.CartPage]: "Cart",
    [C.ProductPage]: "Product",
    [C.Unknown]: "Product"
};
var zt;
const _t = class Ys extends gt {
    constructor() {
        super(...arguments), c(this, "name", b.BuyWithPrime), c(this, "button", null), c(this, "apiClientId", ""), j(this, zt, this.attachShadow({
            mode: "closed"
        }))
    }
    connectedCallback() {
        this.cleanupOnFailure(this.render.bind(this), this.name)
    }
    async createButton() {
        const {
            translate: t
        } = await this.i18n, n = le({
            label: t("buy_with_button_content", {
                wallet: t("brand.buy_with_prime")
            })
        });
        return n.type = "button", n.className = "buy-with-prime-button", this.applyEnabledStyles(n), n
    }
    applyEnabledStyles(t) {
        t.innerHTML = Gt.primeLogo, t.disabled = !1, lr(t, {
            "background-color": "#1A98FF",
            color: "#FFFFFF",
            cursor: "pointer"
        })
    }
    applyDisabledStyles(t) {
        t.innerHTML = Gt.primeLogoDark, t.disabled = !0, lr(t, {
            "background-color": "#C0E3FF",
            color: "#7292AC",
            cursor: "not-allowed"
        })
    }
    async handleClick() {
        var t;
        if (!this.button) return;
        const [n, r] = await Promise.all([this.i18n, this.dataSource]);
        let a = [];
        try {
            this.applyDisabledStyles(this.button);
            let i = this.walletParams;
            if (this.apiClientId = this.apiClientId || i.appId || "", !i.createCheckoutSessionConfig) {
                const {
                    cart: o,
                    outOfStock: s
                } = await nt({
                    element: this,
                    instrumentName: this.name,
                    dataSource: r
                });
                if (s) {
                    et(n);
                    return
                }
                if (!this.accessToken) throw new Zt("[Fetch Pay Config] could not fetch pay configs since required accessToken is missing.");
                i = A({}, await Cn({
                    configOptionsEndpoint: Ys.OPTIMUS_CONFIG_REST_API_URL,
                    checkoutUrl: o.checkoutUrl,
                    sourceId: (t = se(o)) != null ? t : "",
                    accessToken: this.accessToken,
                    instrument: this.name
                }))
            }
            i.placement = this.getPlacement(), a = this.extractSKUs(i), delete i.checkoutSupportsSplitCart, delete i.appId, window.amazon.buywithprime.initCheckout({
                amazonPayOptions: i
            }), g.sheetClicked({
                instrument: this.name,
                result: "success",
                webPixelMetaData: this.apiClientId ? {
                    apiClientId: this.apiClientId,
                    skus: a,
                    pageType: this.pageType
                } : void 0
            }), rt(this.name)
        } catch (i) {
            const {
                name: o
            } = i != null ? i : {};
            Ys.EXPECTED_ERRORS.includes(o) || w.notify(i), g.sheetClicked({
                instrument: this.name,
                result: "failed",
                webPixelMetaData: this.apiClientId ? {
                    apiClientId: this.apiClientId,
                    skus: a,
                    pageType: this.pageType
                } : void 0
            });
            const {
                title: s,
                content: l
            } = this.getErrorCopies(o, n);
            yt(s, l)
        } finally {
            this.applyEnabledStyles(this.button)
        }
    }
    getErrorCopies(t, n) {
        const r = n.translate("brand.buy_with_prime");
        switch (t) {
            case "EmptyLineItemsWalletsPlatformConfigError":
                return {
                    title: n.translate("error_dialogs.wallet.buy_with_prime.empty_line_items.title"),
                    content: n.translate("error_dialogs.wallet.buy_with_prime.empty_line_items.content")
                };
            default:
                return {
                    title: n.translate("error_dialogs.wallet.title", {
                        wallet: r
                    }),
                    content: n.translate("error_dialogs.wallet.generic_error", {
                        wallet: r
                    })
                }
        }
    }
    extractSKUs(t) {
        var n;
        return (n = t.createCheckoutSessionConfig) != null && n.payloadJSON ? JSON.parse(t.createCheckoutSessionConfig.payloadJSON).cartDetails.lineItems.map(r => r && r.sku).filter(r => r) : []
    }
    getPlacement() {
        return this.pageType && No[this.pageType] || "Other"
    }
    async render() {
        var t;
        this.button || (this.button = await this.createButton(), this.button.onclick = () => this.handleClick(), this.button.classList.add("buy-with-prime-button"), this.getPlacement().includes("Checkout") || this.button.classList.add(pt.BUTTON), await this.initializeShadowStyles(I(this, zt), To), I(this, zt).appendChild(this.button), (t = this.onRendered) == null || t.call(this))
    }
};
zt = new WeakMap, c(_t, "OPTIMUS_CONFIG_REST_API_URL", "".concat(window.location.origin, "/wallets/config/optimus")), c(_t, "EXPECTED_ERRORS", [nr.name, Zt.name, Sn.name]);
let Me = _t;

function En(e, t = 3, n = 1e3, r = () => !0) {
    const a = () => new Promise(o => {
            setTimeout(o, n)
        }),
        i = async o => {
            try {
                return await e()
            } catch (s) {
                if (o > 0 && r(s)) return await a(), i(o - 1);
                throw s
            }
        };
    return i(t - 1)
}
async function Ce(e) {
    const t = e.createCheckoutSessionConfig,
        n = JSON.parse(t.payloadJSON),
        r = new URL(n.webCheckoutDetails.checkoutReviewReturnUrl),
        a = await (await fetch("https:///sandbox/v2/checkoutSessions", {
            method: "POST",
            body: JSON.stringify(e),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json;charset=UTF-8"
            }
        })).json();
    r.searchParams.set("amazonCheckoutSessionId", a.checkoutSessionId || "testCheckoutSessionId"), r.searchParams.set("promiseId", "testPromiseId"), tt(r.toString())
}
const vn = {
    buywithprime: {
        initCheckout: async e => {
            Ce(e.amazonPayOptions)
        }
    },
    Pay: {
        initCheckout: async e => {
            Ce(e)
        },
        renderButton: () => ({
            initCheckout: Ce,
            onClick: () => {}
        })
    }
};
async function Ro() {
    return window.amazon = vn, "loaded"
}
async function Lo(e) {
    return new Promise((t, n) => {
        if (document.querySelector('script[src="'.concat(e, '"]')) && window.amazon) {
            t();
            return
        }
        const r = document.createElement("script");
        r.src = e, r.onload = () => {
            window.amazon ? t() : n(new Error("Amazon SDK not present after loading"))
        }, r.onerror = () => {
            n(new Vt("Error loading Amazon SDK"))
        }, document.head.append(r)
    })
}
async function In({
    sdkUrl: e = ze,
    maxRetries: t = 3,
    shouldMock: n = !1
}) {
    if (n) {
        await Ro();
        return
    }
    await En(() => Lo(e), t, 200)
}
const V = class qs extends at {
    static walletName() {
        return "buy_with_prime"
    }
    constructor(t) {
        super(t)
    }
    getWebComponentName() {
        return "shopify-buy-with-prime-button"
    }
    getInstrumentName() {
        return b.BuyWithPrime
    }
    isMockedAmazonServiceUsed() {
        return !1
    }
    getWebComponentClass() {
        return Me
    }
    async loadWalletSDK() {
        await In({
            sdkUrl: qs.SDK_URL,
            shouldMock: this.isMockedAmazonServiceUsed(),
            maxRetries: qs.MAX_RETRIES
        }), await this.loadLogos()
    }
    async loadLogos() {
        await Promise.all([this.loadPrimeLogo(), this.loadPrimeLogoDark()])
    }
    async loadPrimeLogo() {
        qs.primeLogo = (await
            import ("./prime-logo-DoVHKBSO.js")).default
    }
    async loadPrimeLogoDark() {
        qs.primeLogoDark = (await
            import ("./prime-logo-dark-DJIA6J0w.js")).default
    }
};
c(V, "MAX_RETRIES", 3), c(V, "SDK_URL", ze), c(V, "primeLogo"), c(V, "primeLogoDark");
let Gt = V;
const ko = "shopify-amazon-pay-button div[role=button][slot=amazon-pay-slot][data-testid=amazon-pay-button]{border-radius:0!important}",
    Oo = [nr.name, Zt.name],
    Er = "amazon-pay-slot";
var Et;
const ee = class Qs extends gt {
    constructor() {
        super(), c(this, "name", b.AmazonPay), c(this, "container", null), j(this, Et, void 0), J(this, Et, this.attachShadow({
            mode: "closed"
        }))
    }
    connectedCallback() {
        this.cleanupOnFailure(this.render.bind(this), this.name)
    }
    async handleClick(t) {
        var n;
        const [r, a] = await Promise.all([this.i18n, this.dataSource]);
        try {
            const {
                cart: i,
                outOfStock: o
            } = await nt({
                element: this,
                instrumentName: this.name,
                dataSource: a
            });
            if (o) {
                et(r);
                return
            }
            const {
                totalAmount: {
                    amount: s
                },
                checkoutUrl: l
            } = i;
            let u = this.walletParams;
            if (!u.createCheckoutSessionConfig) {
                if (!this.accessToken) throw new Zt("[Fetch Pay Config] could not fetch pay configs since required accessToken is missing.");
                u = D(A({}, await Cn({
                    configOptionsEndpoint: Qs.CV2_CONFIG_REST_API_URL,
                    checkoutUrl: l,
                    sourceId: (n = se(i)) != null ? n : "",
                    accessToken: this.accessToken,
                    instrument: this.name
                })), {
                    placement: this.pageType === C.ProductPage ? "Product" : "Cart"
                })
            }
            delete u.appId, t.initCheckout(A(A({}, u), Number(s) !== 0 && {
                estimatedOrderAmount: {
                    amount: s,
                    currencyCode: this.buyerCurrency
                }
            })), g.sheetClicked({
                instrument: this.name,
                result: "success"
            }), rt(this.name)
        } catch (i) {
            const {
                name: o
            } = i != null ? i : {};
            Oo.includes(o) || w.notify(i), g.sheetClicked({
                instrument: this.name,
                result: "failed"
            });
            const s = r.translate("brand.amazon_pay");
            W(s, r)
        }
    }
    createContainer({
        containerID: t,
        height: n
    }) {
        const r = document.createElement("div");
        return r.id = t, r.style.display = "flex", n != null && (r.style.height = "".concat(n, "px")), r.slot = Er, r.setAttribute("data-testid", "amazon-pay-button"), r
    }
    async render() {
        var t;
        try {
            if (!this.container) {
                const n = document.createElement("slot");
                n.name = Er;
                const r = document.createElement("style");
                r.textContent = ko, this.appendChild(r), await this.initializeShadowStyles(I(this, Et));
                const a = await this.containerInstanceNumber,
                    i = "AcceleratedCheckoutAmazonPayButtonContainer".concat(this.pageType).concat(a),
                    o = document.createElement("div");
                o.classList.add(pt.BUTTON), o.style.overflow = "hidden", o.appendChild(n), I(this, Et).appendChild(o);
                const s = Le(o);
                this.container = this.createContainer({
                    containerID: i,
                    height: s
                }), this.appendChild(this.container);
                const l = window.amazon.Pay.renderButton("#".concat(i), D(A({}, this.walletParams), {
                    placement: this.pageType === C.ProductPage ? "Product" : "Cart"
                }));
                l == null || l.onClick(() => this.handleClick(l)), (t = this.onRendered) == null || t.call(this)
            }
        } catch (n) {
            w.notify(n)
        }
    }
};
Et = new WeakMap, c(ee, "CV2_CONFIG_REST_API_URL", "".concat(window.location.origin, "/wallets/config/amazon_pay"));
let Fe = ee;
const At = class Ks extends at {
    static walletName() {
        return "amazon_pay"
    }
    constructor(t) {
        super(t)
    }
    getWebComponentName() {
        return "shopify-amazon-pay-button"
    }
    getInstrumentName() {
        return b.AmazonPay
    }
    isMockedAmazonServiceUsed() {
        return !1
    }
    getWebComponentClass() {
        return Fe
    }
    async loadWalletSDK() {
        if (await In({
                sdkUrl: Ks.SDK_URL,
                shouldMock: !1,
                maxRetries: Ks.MAX_RETRIES
            }), this.isMockedAmazonServiceUsed()) {
            const t = window.amazon.Pay.renderButton;
            window.amazon.Pay.renderButton = (n, r) => {
                const a = t(n, r);
                return a.initCheckout = vn.Pay.initCheckout, a
            }
        }
    }
};
c(At, "MAX_RETRIES", 3), c(At, "SDK_URL", ze);
let Ue = At;
var Ee = {
        Purple: {
            D0: "#4524DB",
            D1: "#30368D",
            D2: "#1C234C",
            L0: "#6445ED",
            L1: "#9C83F8",
            L2: "#EEEAFF",
            L3: "#F7F5FF",
            Primary: "#5433EB",
            PrimaryLight: "#DBD1FF"
        },
        Grayscale: {
            Black: "#000000",
            D0: "#666666",
            D1: "#404040",
            D2: "#121212",
            D3: "#0B0B0C",
            D2D: "#2A2A2A",
            PrimaryLight: "#707070",
            L1: "#A8A8A7",
            L2: "#CBCBCA",
            L2L: "#E3E3E3",
            L3: "#F0F0F0",
            L4: "#F2F4F5",
            White: "#FFFFFF"
        },
        Green: {
            D1: "#008552",
            D2: "#004839",
            L1: "#BAEBCB",
            L2: "#D2F2DE",
            L3: "#E4F6EB",
            Primary: "#92D08D"
        },
        Poppy: {
            D0: "#F05D38",
            D1: "#D92A0F",
            D2: "#832711",
            L1: "#FFD2C2",
            L2: "#FFECE9",
            Primary: "#FF967D"
        },
        Ochre: {
            D0: "#F8DB67",
            D1: "#E3BE2B",
            D2: "#C29D05",
            D4: "#443600",
            L1: "#FFF4CB",
            L2: "#FFF9E2",
            Primary: "#FFEC9F"
        },
        Brand: {
            Aqua: "#8DC0C6",
            Lime: "#C7DE00",
            Magenta: "#D354FF",
            Olive: "#8B8F01",
            Sage: "#D8E59D",
            Sand: "#F4F4ED",
            Violet: "#A327C2"
        }
    },
    xo = {
        0: 0,
        none: 0,
        xxxs: 2,
        xxs: 4,
        xs: 8,
        "xs-s": 12,
        s: 16,
        gutter: 20,
        m: 24,
        l: 32,
        section: 36,
        xl: 40,
        xxl: 48,
        xxxl: 64,
        auto: "auto"
    },
    Mo = class extends HTMLElement {
        static get observedAttributes() {
            return ["disabled"]
        }
        constructor() {
            super(), this.attachShadow({
                mode: "open"
            })
        }
        connectedCallback() {
            this._updateButton()
        }
        attributeChangedCallback() {
            this._updateButton()
        }
        _updateButton() {
            var e;
            let t = this.shadowRoot;
            t && (t.innerHTML = Uo, this.hasAttribute("disabled") && ((e = this.shadowRoot.querySelector("button")) == null || e.setAttribute("disabled", "")))
        }
    };

function Fo() {
    window.customElements && (customElements.get("gravity-button") || customElements.define("gravity-button", Mo))
}
var Uo = "\n<style>\n  * {\n    box-sizing: border-box;\n    border-width: 0;\n    border-style: solid;\n    border-color: currentColor;\n    --focused-box-shadow: 0 0 0 3px #DBD1FF, 0 0 #0000;\n  }\n\n  button {\n    text-transform: none;\n    -webkit-appearance: button;\n    background-color: transparent;\n    background-image: none;\n    font-family: inherit;\n    font-feature-settings: inherit;\n    font-variation-settings: inherit;\n    font-size: 100%;\n    font-weight: inherit;\n    line-height: inherit;\n    letter-spacing: inherit;\n    color: inherit;\n    margin: 0;\n    padding: 0;\n    cursor: pointer;\n  }\n\n  button:disabled {\n    cursor: default;\n    opacity: 0.5;\n  }\n\n  .gravity-button {\n    position: relative;\n    display: flex;\n    min-height: var(--gravity-button-min-height);\n    height: var(--gravity-button-height);\n    width: var(--gravity-button-width, 260px);\n    justify-content: center;\n    color: ".concat(Ee.Grayscale.White, ";\n    align-items: center;\n    overflow: visible;\n    padding: var(--gravity-button-padding, ").concat(xo.s, "px 10px);\n    border-radius: var(--gravity-button-border-radius);\n    border: none;\n    background-color: ").concat(Ee.Purple.Primary, ";\n    transition: all;\n  }\n\n  .gravity-button:not([disabled]):focus-visible {\n    box-shadow: var(--focused-base-box-shadow, var(--focused-box-shadow));\n    outline: var(--focused-base-outline, 2px solid transparent);\n    outline-offset: var(--focused-base-outline-offset, 2px);\n  }\n\n  .gravity-button:not([disabled]):hover {\n    background-color: ").concat(Ee.Purple.D0, ';\n  }\n</style>\n\n<button class="gravity-button">\n  <slot id="button-content"></slot>\n</button>\n');
const Bo = ".button-content{display:flex;align-items:center;justify-content:center;width:100%;height:100%;gap:3px;white-space:nowrap;container-type:inline-size;container-name:bc}.ShopPromise>.separator{margin:0 8px}@container bc (width <= 338px){.ShopPromise{display:none!important}}gravity-button{display:block}",
    $o = '.accelerated-checkout-button{--gravity-button-height: clamp( 25px, var(--shopify-accelerated-checkout-button-block-size, 44px), 55px );--gravity-button-min-height: clamp( 25px, var(--shopify-accelerated-checkout-button-block-size, 44px), 55px );--gravity-button-border-radius: var( --shopify-accelerated-checkout-button-border-radius, 0px );--gravity-button-padding: 0px 10px;--gravity-button-width: 100%}:host([page-type="cart_page"]) .accelerated-checkout-button{--gravity-button-height: 100%;--gravity-button-min-height: 100%;--gravity-button-border-radius: var( --shopify-accelerated-checkout-button-border-radius, 4px );--gravity-button-width: 100%}';
class Pn extends Error {
    constructor() {
        const t = "DeliveryEstimatesResponseIsNullError";
        super("deliveryEstimates is null or undefined"), this.name = t
    }
}
class ve extends Error {
    constructor() {
        const t = "DeliveryPromiseAPIClientError";
        super("window.Shopify.ShopPromise.deliveryPromiseAPIClient is undefined"), this.name = t
    }
}
const Ho = 15,
    Go = 200;
class zo {
    constructor(t) {
        c(this, "storefrontAPIToken"), this.storefrontAPIToken = t
    }
    async fetchDeliveryPromise({
        variant: t,
        postalCode: n,
        defaultPostalCode: r,
        sellingPlanId: a
    }) {
        const i = await En(async () => this.fetchDeliveryOptions(t, n, r, a), Ho, Go, o => o instanceof ve).catch(o => {
            if (o instanceof ve) throw o;
            return null
        });
        if (!i) throw new Pn;
        return i
    }
    async fetchDeliveryOptions(t, n, r, a) {
        var i, o;
        const s = {
                variantId: t,
                sellingPlanId: a,
                postalCode: n || r,
                isPostalCodeOverride: !!n
            },
            l = (o = (i = window == null ? void 0 : window.Shopify) == null ? void 0 : i.ShopPromise) == null ? void 0 : o.deliveryPromiseAPIClient;
        if (!l) throw new ve;
        return l(s, this.storefrontAPIToken)
    }
}

function Vo(e, t) {
    switch (e) {
        case 0:
            return (t == null ? void 0 : t.translate("shop_promise_delivery.same_day")) || null;
        case 1:
            return (t == null ? void 0 : t.translate("shop_promise_delivery.next_day")) || null;
        case 2:
            return (t == null ? void 0 : t.translate("shop_promise_delivery.two_day")) || null;
        default:
            return null
    }
}
const qo = "delivery_promise_default_address",
    jo = "delivery_promise_postal_code";
class Wo extends de {
    constructor() {
        super(...arguments), c(this, "lastFetchedProductVariantId"), c(this, "lastFetchSellingPlan"), c(this, "fetching", !1), c(this, "i18n", null), c(this, "daysToDelivery"), c(this, "formObserver", null)
    }
    async connectedCallback() {
        this.formObserver = new Yr(this, ({
            variantId: t,
            sellingPlanId: n
        }) => {
            this.fetchDeliveryPromise(t, n)
        }), this.formObserver.setupMutationObservers()
    }
    setTranslations(t) {
        this.i18n = t, this.render()
    }
    get postalCode() {
        try {
            return JSON.parse($t(jo) || "null") || null
        } catch (t) {
            return null
        }
    }
    get defaultDeliveryAddress() {
        try {
            return JSON.parse($t(qo) || "null")
        } catch (t) {
            return null
        }
    }
    async fetchDeliveryPromise(t, n) {
        var r, a, i, o;
        if (!(!t || !this.accessToken) && !(t === this.lastFetchedProductVariantId && n === this.lastFetchSellingPlan)) try {
            this.lastFetchedProductVariantId = t, this.lastFetchSellingPlan = n;
            const s = ((r = this.defaultDeliveryAddress) == null ? void 0 : r.zip) || "",
                l = await new zo(this.accessToken).fetchDeliveryPromise({
                    variant: t,
                    postalCode: this.postalCode || "",
                    defaultPostalCode: s,
                    sellingPlanId: n || ""
                }),
                u = Je(this),
                d = (i = (a = l == null ? void 0 : l.selectedShippingOption) == null ? void 0 : a.brandedPromise) == null ? void 0 : i.handle;
            if ((u == null ? void 0 : u.sellingPlanId) !== n || (u == null ? void 0 : u.variantId) !== t || d !== "shop_promise") return;
            this.daysToDelivery = (o = l == null ? void 0 : l.selectedShippingOption) == null ? void 0 : o.maxCalendarDaysToDelivery, this.render()
        } catch (s) {
            s instanceof Pn && (this.daysToDelivery = null)
        }
    }
    render() {
        const t = Vo(this.daysToDelivery, this.i18n);
        this.classList.add("ShopPromise"), this.innerHTML = t ? '<span class="separator">|</span><span>'.concat(t, "</span>") : ""
    }
}
var dt;
class Yo extends gt {
    constructor() {
        super(), c(this, "name", b.ShopPay), c(this, "button", null), c(this, "shopPromiseProductPageContent", null), c(this, "shopPromiseEligible", !1), j(this, dt, void 0), J(this, dt, this.attachShadow({
            mode: "closed"
        }))
    }
    static get observedAttributes() {
        return ["disabled"]
    }
    connectedCallback() {
        this.shopPromiseEligible = Gr(), this.cleanupOnFailure(async () => {
            Fo(), await this.render()
        }, this.name)
    }
    attributeChangedCallback(t, n, r) {
        super.attributeChangedCallback(t, n, r, this.button)
    }
    async addButtonContent() {
        if (!this.button) return;
        let t;
        const n = await this.i18n,
            r = new DOMParser().parseFromString(Tn.shopPayLogoElement, "image/svg+xml").documentElement;
        this.isCTA ? t = tr({
            translate: n.translate,
            logoElement: r,
            setAriaHidden: !1
        }) : (t = document.createElement("div"), t.appendChild(r)), t.classList.add("button-content"), this.shopPromiseEligible && !this.shopPromiseProductPageContent && (this.shopPromiseProductPageContent = document.createElement("shop-promise-product-page-content"), this.shopPromiseProductPageContent.setTranslations(n), this.shopPromiseProductPageContent.setAttribute("access-token", this.accessToken || ""), t.appendChild(this.shopPromiseProductPageContent)), this.button.appendChild(t)
    }
    getShopPayBehavior() {
        return this.pageType === C.ProductPage ? "force_shop_pay_product" : this.pageType === C.CartPage ? "force_shop_pay_cart" : "force_shop_pay"
    }
    async handleClick(t) {
        if (t.preventDefault(), this.disabled || !this.button || this.button.getAttribute("disabled")) return;
        this.disabled = !0;
        const [n, r] = await Promise.all([this.i18n, this.dataSource]);
        try {
            const {
                outOfStock: a,
                cart: i
            } = await nt({
                element: this,
                instrumentName: b.ShopPay,
                dataSource: r
            });
            if (g.sheetClicked({
                    instrument: this.name,
                    checkoutToken: se(i),
                    result: "success"
                }), a) {
                et(n);
                return
            }
            rt(this.name), tt(i.checkoutUrl, this.getShopPayBehavior())
        } catch (a) {
            w.notify(new Ko("An error occurred when attempting to a cart using the Shop Pay Button. Details: ".concat(a))), g.sheetClicked({
                instrument: this.name,
                result: "failed"
            }), yt(n.translate("error_dialogs.checkout.title"), n.translate("error_dialogs.checkout.generic_error"))
        }
    }
    async render() {
        if (I(this, dt).innerHTML) return;
        this.button || (this.button = document.createElement("gravity-button"));
        const t = document.createElement("style");
        t.innerHTML = [Kr, $o, Bo].join("\n"), I(this, dt).appendChild(t), await this.addButtonContent(), this.disabled && this.button.setAttribute("disabled", ""), this.button.setAttribute("aria-hidden", "true"), this.button.classList.add(pt.BUTTON), this.button.onclick = n => this.handleClick(n), I(this, dt).appendChild(this.button), this.onRendered()
    }
}
dt = new WeakMap, Z("shop-promise-product-page-content", Wo);
class Ko extends Error {
    constructor() {
        super(...arguments), c(this, "name", "ShopPayButtonError")
    }
}
var Jo = Object.defineProperty,
    Qo = Object.getOwnPropertyDescriptor,
    Xo = (e, t, n, r) => {
        for (var a = Qo(t, n), i = e.length - 1, o; i >= 0; i--)(o = e[i]) && (a = o(t, n, a) || a);
        return a && Jo(t, n, a), a
    },
    vt;
const Dn = (vt = class extends at {
    static walletName() {
        return "shop_pay"
    }
    constructor(e) {
        super(e)
    }
    getWebComponentName() {
        return "shop-pay-wallet-button"
    }
    getWebComponentClass() {
        return Yo
    }
    getInstrumentName() {
        return b.ShopPay
    }
    async loadWalletSDK() {
        await this.loadLogo()
    }
    getLoadEligibility() {
        return {
            eligible: !0
        }
    }
    async loadLogo() {
        vt.shopPayLogoElement = (await
            import ("./shop-pay-logo-CYhOC7ye.js")).default
    }
}, c(vt, "shopPayLogoElement"), vt);
Xo([er("Shop Pay")], Dn.prototype, "getLoadEligibility");
let Tn = Dn;
const Zo = ".button{display:flex;justify-content:center;align-items:center;width:100%;border:none}.button:hover:not(:disabled){filter:brightness(92%);cursor:pointer}.button:disabled{opacity:.5;cursor:not-allowed}.logo-only>svg{width:50px}.dark{background:#000;color:#fff}.dark svg{fill:#fff}.light{background:#fff;outline:1px solid #3c4043;color:#000}.light svg{fill:#0000008c}.content{display:flex;justify-content:center;align-items:center;white-space:pre}";

function Ie({
    cart: e,
    i18n: t
}) {
    const n = an(e),
        r = {
            label: t.translate("order_summary.subtotal"),
            type: "SUBTOTAL",
            price: ut(n.amount)
        },
        a = en({
            deliveryGroups: e.deliveryGroups,
            i18n: t
        }).map(s => ts({
            lineItem: s,
            type: "LINE_ITEM"
        })),
        i = es(e, t),
        o = [r, ...a, ...i];
    if (e.totalDutyAmount) {
        const s = {
            label: t.translate("order_summary.duties"),
            type: "LINE_ITEM",
            price: ut(e.totalDutyAmount.amount)
        };
        o.push(s)
    }
    if (e.totalTaxAmount) {
        const s = {
            label: t.translate("order_summary.taxes"),
            type: "TAX",
            price: ut(e.totalTaxAmount.amount)
        };
        o.push(s)
    }
    return {
        totalPrice: e.totalAmount.amount,
        currencyCode: e.totalAmount.currencyCode,
        totalPriceStatus: "ESTIMATED",
        totalPriceLabel: t.translate("order_summary.total"),
        displayItems: o
    }
}

function ts({
    lineItem: e,
    type: t,
    status: n = "FINAL"
}) {
    return {
        label: e.label,
        type: t,
        price: e.amount,
        status: n
    }
}

function es(e, t) {
    return [...e.lineItems.flatMap(n => n.discountAllocations), ...e.discountAllocations].flatMap(n => {
        var r;
        const a = (r = n.title) != null ? r : n.code;
        return {
            label: a != null ? a : t.translate("order_summary.discount"),
            type: "LINE_ITEM",
            price: "-".concat(ut(Number(n.discountedAmount.amount)))
        }
    })
}
const Nn = ["PAYMENT_AUTHORIZATION"],
    rs = Nn.concat(["SHIPPING_ADDRESS", "SHIPPING_OPTION"]),
    ns = ["PAN_ONLY"];

function as({
    walletParams: e,
    isShippingRequired: t,
    hasSellingPlan: n,
    i18n: r,
    buyerCurrency: a
}) {
    const i = {
            totalPrice: "0.01",
            currencyCode: a,
            totalPriceStatus: "ESTIMATED",
            totalPriceLabel: r.translate("order_summary.total"),
            displayItems: [{
                label: r.translate("order_summary.subtotal"),
                type: "SUBTOTAL",
                price: "0.01"
            }]
        },
        o = D(A({}, e.paymentData), {
            shippingAddressRequired: t,
            shippingOptionRequired: t,
            transactionInfo: i
        });
    return t || delete o.shippingAddressParameters, o.callbackIntents = t ? rs : Nn, n && is(o), o
}

function is(e) {
    e.allowedPaymentMethods.forEach(t => {
        t.parameters.allowedAuthMethods = t.parameters.allowedAuthMethods.filter(n => ns.includes(n))
    })
}
class os extends nn {
    constructor(t) {
        super(), c(this, "brandName"), this.i18n = t, this.brandName = this.i18n.translate("brand.google_pay")
    }
    mapMutationResultToPaymentSheetAction(t) {
        const n = this.mapCustomValidationFunctionErrorToAction(t.errors);
        if (n) return n;
        const r = this.getErrorActions(),
            a = t.errors,
            i = this.getUnhandledErrors(a, r);
        i.forEach(s => {
            w.notify(new rn("[".concat(b.GooglePay, "] mutation result error not handled: ").concat(s)))
        });
        const {
            firstPaymentSheetAction: o
        } = this.getMergedPaymentSheetAction({
            result: t,
            errorActions: r
        });
        return o || (i.length > 0 ? {
            action: "abort"
        } : {
            action: "update",
            errors: []
        })
    }
    mapCompletionResultToPaymentSheetAction(t) {
        if (!t.data) throw new Error("[".concat(b.GooglePay, "] completion returned null result"));
        switch (t.data.__typename) {
            case "SubmitSuccess":
                return {
                    action: "complete",
                    redirectUrl: t.data.redirectUrl
                };
            case "SubmitAlreadyAccepted":
            case "SubmitThrottled":
            case "SubmitFailed":
                {
                    const n = this.mapCustomValidationFunctionErrorToAction(t.errors);
                    if (n) return n;
                    const r = this.getErrorActions(),
                        a = t.errors;this.getUnhandledErrors(a, r).forEach(o => {
                        w.notify(new Error("[".concat(b.GooglePay, "] completion result error not handled: ").concat(o)))
                    });
                    const {
                        prioritizedPaymentSheetAction: i
                    } = this.getMergedPaymentSheetAction({
                        result: t,
                        errorActions: r
                    });
                    return i || (W(this.brandName, this.i18n), {
                        action: "abort"
                    })
                }
            default:
                throw new Error("[".concat(b.GooglePay, "] unknown completion result type: ").concat(t.data.__typename))
        }
    }
    getErrorActions() {
        return [{
            errors: [h.InvalidLanguage],
            generateAction: () => ({
                action: "abort",
                effects: [() => {
                    w.notify(new Error("[".concat(b.GooglePay, "] mutation provided invalid language, aborting")))
                }, () => W(this.brandName, this.i18n)]
            })
        }, {
            errors: [h.InvalidCountry],
            generateAction: () => ({
                action: "abort",
                effects: [() => {
                    w.notify(new Error("[".concat(b.GooglePay, "] mutation provided invalid country, aborting")))
                }, () => W(this.brandName, this.i18n)]
            })
        }, {
            errors: [h.MissingCartId],
            generateAction: () => ({
                action: "abort",
                effects: [() => {
                    w.notify(new Error("[".concat(b.GooglePay, "] mutation provided invalid cart ID, aborting")))
                }, () => W(this.brandName, this.i18n)]
            })
        }, {
            errors: [h.UnacceptablePaymentsAmount, h.NewTaxMustBeAccepted, h.MerchandiseExpectedPriceMismatch, h.DeliveryLineChanged, h.DeliveryLocalPickupLineChanged, ...zr],
            generateAction: () => ({
                action: "abort",
                effects: [() => W(this.brandName, this.i18n)]
            })
        }, {
            errors: Vr,
            generateAction: () => ({
                action: "abort",
                effects: [() => et(this.i18n)]
            })
        }, {
            errors: [h.DeliveryNoStrategyAvailable, h.DeliveryNoLocalPickupStrategyAvailable, h.DeliveryNotAvailable],
            generateAction: () => ({
                action: "show_error",
                errors: [{
                    reason: "SHIPPING_ADDRESS_UNSERVICEABLE",
                    intent: "SHIPPING_ADDRESS",
                    message: this.i18n.translate("errors.invalid.shipping_address")
                }]
            })
        }, {
            errors: [h.NoDeliveryGroupSelected],
            generateAction: () => ({
                action: "show_error",
                errors: [{
                    reason: "SHIPPING_OPTION_INVALID",
                    intent: "SHIPPING_OPTION",
                    message: this.i18n.translate("errors.missing.shipping_option")
                }]
            })
        }, {
            errors: [h.BuyerIdentityEmailDomainInvalid, h.BuyerIdentityEmailNotExpectedPattern, h.BuyerIdentityEmailInvalid],
            generateAction: () => ({
                action: "show_error",
                errors: [{
                    reason: "OTHER_ERROR",
                    intent: "SHIPPING_ADDRESS",
                    message: this.i18n.translate("errors.invalid.email")
                }]
            })
        }, {
            errors: [h.BuyerIdentityEmailRequired],
            generateAction: () => ({
                action: "show_error",
                errors: [{
                    reason: "SHIPPING_ADDRESS_INVALID",
                    intent: "SHIPPING_ADDRESS",
                    message: this.i18n.translate("errors.missing.email")
                }]
            })
        }, {
            errors: [h.DeliveryAddress2Required, h.DeliveryAddress2AddressFieldRequired],
            generateAction: () => ({
                action: "show_error",
                errors: [{
                    reason: "SHIPPING_ADDRESS_INVALID",
                    intent: "SHIPPING_ADDRESS",
                    message: this.i18n.translate("errors.missing.address2")
                }]
            })
        }, {
            errors: [h.DeliveryAddress2Invalid],
            generateAction: () => ({
                action: "show_error",
                errors: [{
                    reason: "SHIPPING_ADDRESS_INVALID",
                    intent: "SHIPPING_ADDRESS",
                    message: this.i18n.translate("errors.invalid.address2")
                }]
            })
        }, {
            errors: [h.DeliveryCityAddressFieldRequired, h.DeliveryCityRequired],
            generateAction: () => ({
                action: "show_error",
                errors: [{
                    reason: "SHIPPING_ADDRESS_INVALID",
                    intent: "SHIPPING_ADDRESS",
                    message: this.i18n.translate("errors.missing.city")
                }]
            })
        }, {
            errors: [h.DeliveryCityInvalid],
            generateAction: () => ({
                action: "show_error",
                errors: [{
                    reason: "SHIPPING_ADDRESS_INVALID",
                    intent: "SHIPPING_ADDRESS",
                    message: this.i18n.translate("errors.invalid.city")
                }]
            })
        }, {
            errors: [h.DeliveryZoneRequiredForCountry],
            generateAction: () => ({
                action: "show_error",
                errors: [{
                    reason: "SHIPPING_ADDRESS_INVALID",
                    intent: "SHIPPING_ADDRESS",
                    message: this.i18n.translate("errors.missing.zone")
                }]
            })
        }, {
            errors: [h.DeliveryZoneNotFound],
            generateAction: () => ({
                action: "show_error",
                errors: [{
                    reason: "SHIPPING_ADDRESS_INVALID",
                    intent: "SHIPPING_ADDRESS",
                    message: this.i18n.translate("errors.invalid.zone")
                }]
            })
        }, {
            errors: [h.DeliveryPostalCodeRequired, h.DeliveryPostalCodeAddressFieldRequired],
            generateAction: () => ({
                action: "show_error",
                errors: [{
                    reason: "SHIPPING_ADDRESS_INVALID",
                    intent: "SHIPPING_ADDRESS",
                    message: this.i18n.translate("errors.missing.postal_code")
                }]
            })
        }, {
            errors: [h.DeliveryPostalCodeInvalid, h.DeliveryInvalidPostalCodeForZone, h.DeliveryInvalidPostalCodeForCountry, h.DeliveryZipInvalidForCountry],
            generateAction: () => ({
                action: "show_error",
                errors: [{
                    reason: "SHIPPING_ADDRESS_INVALID",
                    intent: "SHIPPING_ADDRESS",
                    message: this.i18n.translate("errors.invalid.postal_code")
                }]
            })
        }, {
            errors: [h.DeliveryPhoneNumberRequired],
            generateAction: () => ({
                action: "show_error",
                errors: [{
                    reason: "OTHER_ERROR",
                    intent: "SHIPPING_ADDRESS",
                    message: this.i18n.translate("errors.missing.phone_number")
                }]
            })
        }, {
            errors: [h.DeliveryPhoneNumberInvalid, h.BuyerIdentityInvalidPhone, h.DeliveryPhoneDoesNotMatchExpectedPattern],
            generateAction: () => ({
                action: "show_error",
                errors: [{
                    reason: "OTHER_ERROR",
                    intent: "SHIPPING_ADDRESS",
                    message: this.i18n.translate("errors.invalid.phone_number")
                }]
            })
        }, {
            errors: [h.BuyerIdentityInvalidCountry, h.DeliveryCountryInvalid],
            generateAction: () => ({
                action: "show_error",
                errors: [{
                    reason: "SHIPPING_ADDRESS_INVALID",
                    intent: "SHIPPING_ADDRESS",
                    message: this.i18n.translate("errors.invalid.country")
                }]
            })
        }, {
            errors: [h.DeliveryFirstNameRequired],
            generateAction: () => ({
                action: "show_error",
                errors: [{
                    reason: "SHIPPING_ADDRESS_INVALID",
                    intent: "SHIPPING_ADDRESS",
                    message: this.i18n.translate("errors.missing.first_name")
                }]
            })
        }, {
            errors: [h.DeliveryFirstNameInvalid],
            generateAction: () => ({
                action: "show_error",
                errors: [{
                    reason: "SHIPPING_ADDRESS_INVALID",
                    intent: "SHIPPING_ADDRESS",
                    message: this.i18n.translate("errors.invalid.first_name")
                }]
            })
        }, {
            errors: [h.DeliveryLastNameRequired],
            generateAction: () => ({
                action: "show_error",
                errors: [{
                    reason: "SHIPPING_ADDRESS_INVALID",
                    intent: "SHIPPING_ADDRESS",
                    message: this.i18n.translate("errors.missing.last_name")
                }]
            })
        }, {
            errors: [h.DeliveryLastNameInvalid],
            generateAction: () => ({
                action: "show_error",
                errors: [{
                    reason: "SHIPPING_ADDRESS_INVALID",
                    intent: "SHIPPING_ADDRESS",
                    message: this.i18n.translate("errors.invalid.last_name")
                }]
            })
        }, {
            errors: [h.DeliveryAddress1Required],
            generateAction: () => ({
                action: "show_error",
                errors: [{
                    reason: "SHIPPING_ADDRESS_INVALID",
                    intent: "SHIPPING_ADDRESS",
                    message: this.i18n.translate("errors.missing.address1")
                }]
            })
        }, {
            errors: [h.DeliveryAddress1Invalid],
            generateAction: () => ({
                action: "show_error",
                errors: [{
                    reason: "SHIPPING_ADDRESS_INVALID",
                    intent: "SHIPPING_ADDRESS",
                    message: this.i18n.translate("errors.invalid.address1")
                }]
            })
        }, {
            errors: [h.DeliveryLastNameContainsEmojis],
            generateAction: () => ({
                action: "show_error",
                errors: [{
                    reason: "SHIPPING_ADDRESS_INVALID",
                    intent: "SHIPPING_ADDRESS",
                    message: this.i18n.translate("errors.emojis.last_name")
                }]
            })
        }, {
            errors: [h.DeliveryCityContainsEmojis],
            generateAction: () => ({
                action: "show_error",
                errors: [{
                    reason: "SHIPPING_ADDRESS_INVALID",
                    intent: "SHIPPING_ADDRESS",
                    message: this.i18n.translate("errors.emojis.city")
                }]
            })
        }, {
            errors: [h.DeliveryAddress1ContainsEmojis],
            generateAction: () => ({
                action: "show_error",
                errors: [{
                    reason: "SHIPPING_ADDRESS_INVALID",
                    intent: "SHIPPING_ADDRESS",
                    message: this.i18n.translate("errors.emojis.address1")
                }]
            })
        }, {
            errors: [h.DeliveryAddress2ContainsEmojis],
            generateAction: () => ({
                action: "show_error",
                errors: [{
                    reason: "SHIPPING_ADDRESS_INVALID",
                    intent: "SHIPPING_ADDRESS",
                    message: this.i18n.translate("errors.emojis.address2")
                }]
            })
        }, {
            errors: [h.DeliveryPostalCodeContainsEmojis],
            generateAction: () => ({
                action: "show_error",
                errors: [{
                    reason: "SHIPPING_ADDRESS_INVALID",
                    intent: "SHIPPING_ADDRESS",
                    message: this.i18n.translate("errors.emojis.postal_code")
                }]
            })
        }, {
            errors: [h.DeliveryAddress1TooLong],
            generateAction: () => ({
                action: "show_error",
                errors: [{
                    reason: "SHIPPING_ADDRESS_INVALID",
                    intent: "SHIPPING_ADDRESS",
                    message: this.i18n.translate("errors.too_long.address1")
                }]
            })
        }, {
            errors: [h.DeliveryAddress2TooLong],
            generateAction: () => ({
                action: "show_error",
                errors: [{
                    reason: "SHIPPING_ADDRESS_INVALID",
                    intent: "SHIPPING_ADDRESS",
                    message: this.i18n.translate("errors.too_long.address2")
                }]
            })
        }, {
            errors: [h.DeliveryFirstNameTooLong],
            generateAction: () => ({
                action: "show_error",
                errors: [{
                    reason: "SHIPPING_ADDRESS_INVALID",
                    intent: "SHIPPING_ADDRESS",
                    message: this.i18n.translate("errors.too_long.first_name")
                }]
            })
        }, {
            errors: [h.DeliveryLastNameTooLong],
            generateAction: () => ({
                action: "show_error",
                errors: [{
                    reason: "SHIPPING_ADDRESS_INVALID",
                    intent: "SHIPPING_ADDRESS",
                    message: this.i18n.translate("errors.too_long.last_name")
                }]
            })
        }, {
            errors: [h.DeliveryCityTooLong],
            generateAction: () => ({
                action: "show_error",
                errors: [{
                    reason: "SHIPPING_ADDRESS_INVALID",
                    intent: "SHIPPING_ADDRESS",
                    message: this.i18n.translate("errors.too_long.city")
                }]
            })
        }, {
            errors: [h.DeliveryFirstNameContainsUrl],
            generateAction: () => ({
                action: "show_error",
                errors: [{
                    reason: "SHIPPING_ADDRESS_INVALID",
                    intent: "SHIPPING_ADDRESS",
                    message: this.i18n.translate("errors.url.first_name")
                }]
            })
        }, {
            errors: [h.DeliveryLastNameContainsUrl],
            generateAction: () => ({
                action: "show_error",
                errors: [{
                    reason: "SHIPPING_ADDRESS_INVALID",
                    intent: "SHIPPING_ADDRESS",
                    message: this.i18n.translate("errors.url.last_name")
                }]
            })
        }, {
            errors: [h.DeliveryAddress1ContainsHtmlTags],
            generateAction: () => ({
                action: "show_error",
                errors: [{
                    reason: "SHIPPING_ADDRESS_INVALID",
                    intent: "SHIPPING_ADDRESS",
                    message: this.i18n.translate("errors.html_tags.address1")
                }]
            })
        }, {
            errors: [h.DeliveryAddress2ContainsHtmlTags],
            generateAction: () => ({
                action: "show_error",
                errors: [{
                    reason: "SHIPPING_ADDRESS_INVALID",
                    intent: "SHIPPING_ADDRESS",
                    message: this.i18n.translate("errors.html_tags.address2")
                }]
            })
        }, {
            errors: [h.DeliveryCityContainsHtmlTags],
            generateAction: () => ({
                action: "show_error",
                errors: [{
                    reason: "SHIPPING_ADDRESS_INVALID",
                    intent: "SHIPPING_ADDRESS",
                    message: this.i18n.translate("errors.html_tags.city")
                }]
            })
        }, {
            errors: [h.DeliveryFirstNameContainsHtmlTags],
            generateAction: () => ({
                action: "show_error",
                errors: [{
                    reason: "SHIPPING_ADDRESS_INVALID",
                    intent: "SHIPPING_ADDRESS",
                    message: this.i18n.translate("errors.html_tags.first_name")
                }]
            })
        }, {
            errors: [h.DeliveryLastNameContainsHtmlTags],
            generateAction: () => ({
                action: "show_error",
                errors: [{
                    reason: "SHIPPING_ADDRESS_INVALID",
                    intent: "SHIPPING_ADDRESS",
                    message: this.i18n.translate("errors.html_tags.last_name")
                }]
            })
        }, {
            errors: [h.InvalidPaymentGooglePayBillingAddress],
            generateAction: () => ({
                action: "show_error",
                errors: [{
                    reason: "PAYMENT_DATA_INVALID",
                    intent: "PAYMENT_METHOD",
                    message: this.i18n.translate("errors.invalid.billing_address")
                }]
            })
        }, {
            errors: [h.UnsupportedGooglePayPaymentMethod],
            generateAction: () => ({
                action: "show_error",
                errors: [{
                    reason: "PAYMENT_DATA_INVALID",
                    intent: "PAYMENT_METHOD",
                    message: this.i18n.translate("errors.invalid.payment_method")
                }]
            })
        }]
    }
    mapCustomValidationFunctionErrorToAction(t) {
        const n = t.find(r => typeof r == "object" && (r == null ? void 0 : r.code) === Qt);
        return n ? (w.notify(new Error("[".concat(b.GooglePay, "] custom validation function error: ").concat(t))), je(this.i18n.translate("error_dialogs.wallet.title", {
            wallet: this.brandName
        }), n.message), {
            action: "show_error",
            errors: [{
                reason: "OTHER_ERROR",
                intent: "PAYMENT_AUTHORIZATION",
                message: this.i18n.translate("paymentSheet.errors.unknown")
            }]
        }) : null
    }
}

function ss({
    deliveryGroups: e,
    i18n: t
}) {
    var n;
    const r = Zr(tn(e), t),
        a = r.map(o => ({
            id: o.handle,
            label: o.title || "",
            description: o.estimatedCost ? "".concat(o.estimatedCost.amount.toString(), " ").concat(o.estimatedCost.currencyCode) : ""
        })),
        i = (n = r.find(o => {
            var s;
            return o.handle.includes(((s = e[0].selectedDeliveryOption) == null ? void 0 : s.handle) || "")
        })) == null ? void 0 : n.handle;
    return {
        shippingOptions: a,
        defaultSelectedOptionId: i
    }
}

function Pe(e) {
    let t = e.administrativeArea,
        n = e.locality;
    e.countryCode === "AE" && (n = e.administrativeArea, e.administrativeArea in vr && (t = vr[e.administrativeArea]));
    let r, a;
    if (e.name) {
        const [i, ...o] = (e.name || "").split(" ");
        o.length === 0 ? a = i : a = o.join(" "), r = i
    }
    return {
        firstName: r,
        lastName: a,
        address1: e.address1,
        address2: e.address2,
        city: n,
        province: t,
        country: e.countryCode,
        phone: e.phoneNumber,
        zip: e.postalCode
    }
}
const vr = {
        "\u0623\u0628\u0648 \u0638\u0628\u064A": "AZ",
        "\u0625\u0645\u0627\u0631\u0629 \u0627\u0644\u0634\u0627\u0631\u0642\u0629\u0651": "SH",
        \u0627\ u0644\ u0641\ u062C\ u064A\ u0631\ u0629: "FU",
        \u0639\ u062C\ u0645\ u0627\ u0646: "AJ",
        "\u0631\u0623\u0633 \u0627\u0644\u062E\u064A\u0645\u0629": "RK",
        "\u0623\u0645 \u0627\u0644\u0642\u064A\u0648\u064A\u0646": "UQ",
        \u062F\ u0628\ u064A: "DU"
    },
    ls = 27e3;
class cs extends Error {
    constructor() {
        super(...arguments), c(this, "name", "GooglePayError")
    }
}
var q;
class ds {
    constructor({
        walletParams: t,
        isShippingRequired: n,
        hasSellingPlan: r,
        dataSource: a,
        button: i,
        i18n: o,
        cartClient: s,
        buyerCurrency: l,
        abortController: u
    }) {
        c(this, "name", b.GooglePay), c(this, "walletParams"), c(this, "cart", null), c(this, "isShippingRequired"), c(this, "hasSellingPlan"), c(this, "dataSource"), c(this, "button"), c(this, "paymentsClient"), c(this, "i18n"), c(this, "actionGenerator"), c(this, "cartClient"), c(this, "initialBuyerCurrency"), j(this, q, void 0), c(this, "onPaymentDataChanged", async p => {
            var y;
            const {
                callbackTrigger: m,
                shippingAddress: v,
                shippingOptionData: f
            } = p, {
                translate: S
            } = this.i18n;
            switch (m) {
                case "INITIALIZE":
                    {
                        if (!this.cart) try {
                            const {
                                cart: B
                            } = await nt({
                                element: this.button,
                                instrumentName: b.GooglePay,
                                dataSource: this.dataSource
                            });
                            this.cart = B, g.sheetClicked({
                                instrument: this.name,
                                result: "success"
                            })
                        } catch (B) {
                            return g.sheetClicked({
                                instrument: this.name,
                                result: "failed"
                            }), this.showGooglePayError("SHIPPING_ADDRESS")
                        }
                        return v ? this.handleShippingAddress(this.cart.id, v) : {
                            newTransactionInfo: Ie({
                                cart: this.cart,
                                i18n: this.i18n
                            })
                        }
                    }
                case "SHIPPING_ADDRESS":
                    return this.cart ? v ? this.handleShippingAddress(this.cart.id, v) : {
                        newTransactionInfo: Ie({
                            cart: this.cart,
                            i18n: this.i18n
                        })
                    } : this.showGooglePayError(m);
                case "SHIPPING_OPTION":
                    {
                        if (!this.cart) return this.showGooglePayError(m);
                        if (!f || !f.id) return {
                            error: {
                                reason: "SHIPPING_OPTION_INVALID",
                                message: S("shipping_methods.choose_delivery_strategy"),
                                intent: "SHIPPING_OPTION"
                            }
                        };
                        const B = _n({
                                deliveryGroups: this.cart.deliveryGroups,
                                instrumentName: b.GooglePay,
                                selectedDeliveryOptionHandles: f.id.split(",")
                            }),
                            K = await bn({
                                cartClient: this.cartClient,
                                cartId: this.cart.id,
                                instrumentName: b.GooglePay,
                                selectedDeliveryOptions: B,
                                abortSignal: (y = I(this, q)) == null ? void 0 : y.signal
                            });
                        return K.data ? (this.cart = K.data, this.updatePaymentSheet({
                            result: K,
                            intent: m
                        })) : this.showGooglePayError(m)
                    }
                default:
                    return this.logException("Payment data changed callback returned unexpected intent: ".concat(m), {
                        severity: "warning"
                    }), this.showGooglePayError("SHIPPING_ADDRESS")
            }
        }), c(this, "onPaymentAuthorized", async p => {
            var y, m, v;
            g.authorizationAttempt(this.name), qt(N.AuthorizationLatency, this.name);
            const f = async _ => {
                    var M, Rt;
                    switch ((M = _.effects) == null || M.forEach(ge => ge()), _.action) {
                        case "complete":
                            return g.authorizationComplete({
                                instrument: this.name,
                                measurement: Y(N.AuthorizationLatency, this.name),
                                result: "success"
                            }), tt(_.redirectUrl), {
                                transactionState: "SUCCESS"
                            };
                        case "show_error":
                            return this.handlePaymentFailure((Rt = _.errors) == null ? void 0 : Rt[0]);
                        case "abort":
                            return {
                                transactionState: "SUCCESS"
                            };
                        default:
                            throw new Error("[".concat(this.name, "] completion action not handled: ").concat(_.action))
                    }
                },
                S = _ => "error" in _ && _.error !== void 0,
                B = (y = p.paymentMethodData.info) == null ? void 0 : y.billingAddress,
                K = p.shippingAddress,
                {
                    signature: jt,
                    signedMessage: ye,
                    protocolVersion: O
                } = JSON.parse(p.paymentMethodData.tokenizationData.token);
            if (!B) return this.handlePaymentFailure();
            if (this.isShippingRequired && !K) return this.handlePaymentFailure();
            const F = async () => {
                    var _;
                    const M = p.email,
                        Rt = this.isShippingRequired ? {
                            validateAddress: !0,
                            streetAddress: Pe(K)
                        } : {},
                        ge = await St(A({
                            cartClient: this.cartClient,
                            cartId: this.cart.id,
                            instrumentName: this.name,
                            emailAddress: M,
                            abortSignal: (_ = I(this, q)) == null ? void 0 : _.signal
                        }, Rt));
                    return this.updatePaymentSheet({
                        result: ge,
                        intent: "PAYMENT_AUTHORIZATION"
                    })
                },
                Nt = async () => {
                    var _;
                    const M = Pe(B),
                        Rt = await Qe({
                            cartId: this.cart.id,
                            totalAmount: this.cart.totalAmount,
                            paymentMethod: {
                                walletPaymentMethod: {
                                    googlePayWalletContent: {
                                        billingAddress: M,
                                        signature: jt,
                                        signedMessage: ye,
                                        protocolVersion: O
                                    }
                                }
                            },
                            canUsePaymentMethodForFreeOrder: !1,
                            billingAddress: M,
                            cartClient: this.cartClient,
                            instrumentName: this.name,
                            hasSellingPlan: this.hasSellingPlan,
                            abortSignal: (_ = I(this, q)) == null ? void 0 : _.signal
                        });
                    return this.updatePaymentSheet({
                        result: Rt,
                        intent: "PAYMENT_AUTHORIZATION"
                    })
                };
            try {
                const _ = setTimeout(() => {
                        var Js;
                        (Js = I(this, q)) == null || Js.abort("Google Pay Timeout")
                    }, ls),
                    M = await F();
                if (S(M)) return this.handlePaymentFailure(M.error);
                const Rt = await Nt();
                if (S(Rt)) return this.handlePaymentFailure(Rt.error);
                if (clearTimeout(_), (v = (m = I(this, q)) == null ? void 0 : m.signal) != null && v.aborted) return this.handlePaymentFailure();
                const ge = await wn({
                        cartId: this.cart.id,
                        token: jt,
                        cartClient: this.cartClient,
                        instrumentName: this.name
                    }),
                    el = this.actionGenerator.mapCompletionResultToPaymentSheetAction(ge);
                return f(el)
            } catch (_) {
                const {
                    message: M
                } = _;
                return this.logException(M), this.handlePaymentFailure()
            }
        }), this.walletParams = t, this.isShippingRequired = n, this.hasSellingPlan = r, this.dataSource = a, this.button = i, this.i18n = o, this.cartClient = s, this.initialBuyerCurrency = l, J(this, q, u);
        const d = {
            environment: this.walletParams.environment,
            merchantInfo: this.walletParams.paymentData.merchantInfo,
            paymentDataCallbacks: {
                onPaymentDataChanged: this.isShippingRequired ? this.onPaymentDataChanged : void 0,
                onPaymentAuthorized: this.onPaymentAuthorized
            }
        };
        this.paymentsClient = new window.google.payments.api.PaymentsClient(d), this.actionGenerator = new os(this.i18n)
    }
    async handleClick() {
        if (!this.isShippingRequired) throw new Vt("Google Pay checkout started for digital cart");
        const t = as({
            walletParams: this.walletParams,
            isShippingRequired: this.isShippingRequired,
            hasSellingPlan: this.hasSellingPlan,
            i18n: this.i18n,
            buyerCurrency: this.initialBuyerCurrency
        });
        await this.paymentsClient.loadPaymentData(t)
    }
    showGooglePayError(t, {
        error: n
    } = {}) {
        return n ? {
            error: n
        } : {
            error: {
                reason: "OTHER_ERROR",
                message: this.i18n.translate("error_dialogs.wallet.generic_error", {
                    wallet: this.i18n.translate("brand.google_pay")
                }),
                intent: t != null ? t : "SHIPPING_ADDRESS"
            }
        }
    }
    updatePaymentSheet({
        result: t,
        intent: n
    }) {
        var r, a;
        const i = this.actionGenerator.mapMutationResultToPaymentSheetAction(t);
        switch (i.action) {
            case "update":
                {
                    const o = i,
                        {
                            data: s
                        } = t;
                    return s ? this.isShippingRequired && s.deliveryGroups.length === 0 ? this.showGooglePayError("SHIPPING_ADDRESS", {
                        error: {
                            reason: "SHIPPING_ADDRESS_INVALID",
                            message: this.i18n.translate("errors.address_unserviceable", {
                                shopName: this.walletParams.paymentData.merchantInfo.merchantName
                            }),
                            intent: "SHIPPING_ADDRESS"
                        }
                    }) : {
                        newTransactionInfo: Ie({
                            cart: s,
                            i18n: this.i18n
                        }),
                        newShippingOptionParameters: this.isShippingRequired ? ss({
                            deliveryGroups: s.deliveryGroups,
                            i18n: this.i18n
                        }) : void 0,
                        error: (r = o.errors) == null ? void 0 : r[0]
                    } : this.showGooglePayError(n)
                }
            case "show_error":
                return {
                    error: (a = i.errors) == null ? void 0 : a[0]
                };
            case "abort":
                return this.showGooglePayError(n);
            default:
                return this.logException("Payment sheet update returned unexpected action (see request tab for details)", {
                    metadata: {
                        request: {
                            action: i.action,
                            intent: n
                        }
                    }
                }), this.showGooglePayError(n)
        }
    }
    shouldDecelerate(t, n) {
        return Xe({
            checkoutUrl: t,
            instrumentName: this.name,
            currentCartTotal: n,
            initialBuyerCurrency: this.initialBuyerCurrency
        })
    }
    async handleShippingAddress(t, n) {
        var r;
        const a = await St({
            cartClient: this.cartClient,
            cartId: t,
            streetAddress: n ? Pe(n) : {},
            instrumentName: b.GooglePay,
            abortSignal: (r = I(this, q)) == null ? void 0 : r.signal
        });
        return a.data ? (this.cart = a.data, this.shouldDecelerate(this.cart.checkoutUrl, this.cart.totalAmount) ? {
            error: {
                reason: "OTHER_ERROR",
                message: this.i18n.translate("errors.currency.mismatch"),
                intent: "SHIPPING_ADDRESS"
            }
        } : this.updatePaymentSheet({
            result: a,
            intent: "SHIPPING_ADDRESS"
        })) : this.showGooglePayError("SHIPPING_ADDRESS")
    }
    handlePaymentFailure(t) {
        return g.authorizationComplete({
            instrument: this.name,
            measurement: Y(N.AuthorizationLatency, this.name),
            result: "failure"
        }), A({
            transactionState: "ERROR"
        }, t ? {
            error: t
        } : this.showGooglePayError("PAYMENT_AUTHORIZATION"))
    }
    logException(t, {
        severity: n,
        metadata: r
    } = {}) {
        w.notify(new cs(t), {
            severity: n != null ? n : "error",
            metadata: r
        })
    }
}
q = new WeakMap;
const us = '<svg viewBox="0 0 41 17" xmlns="http://www.w3.org/2000/svg" width="45px">\n  <path\n    d="M19.526 2.635v4.083h2.518q.9 0 1.488-.605.605-.604.605-1.437 0-.816-.605-1.422-.588-.62-1.488-.62h-2.518zm0 5.52v4.736h-1.504V1.198h3.99q1.519 0 2.582 1.012 1.08 1.013 1.08 2.466 0 1.487-1.08 2.482-1.046.997-2.583.996zm7.668 2.287q0 .587.499.98.498.39 1.168.391.949 0 1.692-.701.745-.703.744-1.65-.704-.555-1.962-.555-.916 0-1.528.442-.613.44-.613 1.093m1.946-5.815q1.668 0 2.633.89.964.891.964 2.442v4.932h-1.439v-1.11h-.065q-.933 1.372-2.486 1.372-1.323 0-2.215-.784t-.891-1.96q0-1.242.94-1.976c.94-.734 1.463-.735 2.51-.735q1.34 0 2.206.49v-.344q0-.784-.621-1.33a2.13 2.13 0 0 0-1.455-.547q-1.26 0-1.995 1.062l-1.324-.834q1.095-1.568 3.238-1.568m11.853.262-5.02 11.53H34.42l1.864-4.034-3.302-7.496h1.635l2.387 5.749h.032l2.322-5.75z"\n  />\n  <path\n    d="M13.448 7.134q-.001-.71-.116-1.366H6.988v2.588h3.634a3.1 3.1 0 0 1-1.344 2.042v1.68h2.169c1.27-1.17 2.001-2.9 2.001-4.944"\n    style="fill: #4285f4"\n  />\n  <path\n    d="M6.988 13.7c1.816 0 3.344-.595 4.459-1.621l-2.169-1.681c-.603.406-1.38.643-2.29.643-1.754 0-3.244-1.182-3.776-2.774H.978v1.731a6.73 6.73 0 0 0 6.01 3.703"\n    style="fill: #34a853"\n  />\n  <path\n    d="M3.212 8.267a4.03 4.03 0 0 1 0-2.572V3.964H.978A6.7 6.7 0 0 0 .261 6.98c0 1.085.26 2.11.717 3.017z"\n    style="fill: #fbbc05"\n  />\n  <path\n    d="M6.988 2.921c.992 0 1.88.34 2.58 1.008v.001l1.92-1.918C10.324.928 8.804.262 6.989.262a6.73 6.73 0 0 0-6.01 3.702l2.234 1.731c.532-1.592 2.022-2.774 3.776-2.774"\n    style="fill: #ea4335"\n  />\n</svg>\n',
    hs = {
        LIGHT: "light",
        DARK: "dark"
    };
var It;
class ps extends gt {
    constructor() {
        super(), c(this, "name", b.GooglePay), c(this, "paymentsClient", null), c(this, "button", null), j(this, It, void 0), c(this, "handleClick", async () => {
            if (this.disabled) return;
            this.disabled = !0;
            const t = Ze();
            try {
                await this.createPaymentsClient(t), await this.paymentsClient.handleClick(), rt(this.name)
            } catch (n) {
                if (this.disabled = !1, n.statusCode === "CANCELED") {
                    t == null || t.abort("Payment sheet cancelled"), g.sheetCancelled(b.GooglePay);
                    return
                }
                t == null || t.abort("Payment sheet failure"), w.notify(n), g.sheetClicked({
                    instrument: this.name,
                    result: "failed"
                });
                const r = await this.i18n,
                    a = r.translate("brand.google_pay");
                W(a, r)
            }
        }), J(this, It, this.attachShadow({
            mode: "closed"
        }))
    }
    static get observedAttributes() {
        return ["disabled"]
    }
    attributeChangedCallback(t, n, r) {
        super.attributeChangedCallback(t, n, r, this.button)
    }
    async connectedCallback() {
        this.cleanupOnFailure(this.render.bind(this), this.name)
    }
    async createPaymentsClient(t) {
        this.paymentsClient = new ds({
            walletParams: this.walletParams,
            isShippingRequired: this.isShippingRequired,
            hasSellingPlan: this.hasSellingPlan,
            dataSource: await this.dataSource,
            button: this,
            cartClient: await this.apiClient,
            i18n: await this.i18n,
            buyerCurrency: this.buyerCurrency,
            abortController: t
        })
    }
    async render() {
        if (this.button) return;
        await this.initializeShadowStyles(I(this, It), Zo);
        const {
            translate: t
        } = await this.i18n, n = le({
            label: t("buy_with_button_content", {
                wallet: t("brand.google_pay")
            })
        });
        this.disabled && n.setAttribute("disabled", ""), n.classList.add("button", pt.BUTTON, hs[this.buttonTheme]), n.onclick = this.handleClick, await this.renderButtonContent(n, t), this.button = n, I(this, It).appendChild(n), this.onRendered()
    }
    async renderButtonContent(t, n) {
        const r = new DOMParser().parseFromString(us, "image/svg+xml").documentElement;
        if (t.style.font = window.getComputedStyle(this).font, this.isCTA) {
            const a = tr({
                translate: n,
                logoElement: r,
                setAriaHidden: !0
            });
            a.classList.add("content"), t.appendChild(a)
        } else t.classList.add("logo-only"), t.appendChild(r)
    }
}
It = new WeakMap;
const lt = class js extends at {
    static walletName() {
        return "google_pay"
    }
    constructor(t) {
        super(t)
    }
    getWebComponentName() {
        return "shopify-google-pay-button"
    }
    getInstrumentName() {
        return b.GooglePay
    }
    getWebComponentClass() {
        return ps
    }
    async loadWalletSDK() {
        if (js.googlePaySDKPromise) return js.googlePaySDKPromise;
        const t = document.createElement("script");
        return t.setAttribute("src", this.walletParams.sdkUrl), js.googlePaySDKPromise = new Promise((n, r) => {
            t.onload = () => n(), t.onerror = a => {
                document.body.removeChild(t), r(a)
            }, document.body.appendChild(t)
        }), js.googlePaySDKPromise
    }
    getLoadEligibility() {
        const t = this.walletParams.expiresAt * 1e3;
        return Ft() <= t ? {
            eligible: !0
        } : {
            eligible: !1,
            reason: "authJwtExpired"
        }
    }
    getPartnerSDKEligibility() {
        return {
            eligible: !0
        }
    }
};
c(lt, "googlePaySDKPromise");
let Be = lt;
const ms = [Di, ke, rr, Be, Gt, Ue, Tn],
    ys = new Map(ms.map(e => [e.walletName(), t => new e(t)]));

function te(e) {
    const t = ys.get(e.name);
    return t ? t(e) : (console.debug("Can't build wallet with name ".concat(e.name)), null)
}

function gs(e) {
    return e.map(t => te(t)).filter(t => t != null)
}
const Rn = "*{box-sizing:border-box}.wallet-button-fade-in{animation:animation-fade-in .3s cubic-bezier(.1,.79,1,1)}@keyframes animation-fade-in{0%{opacity:0}to{opacity:1}}button[aria-disabled=true]{opacity:.5;cursor:not-allowed}";
class fs {
    constructor(t, n, r) {
        this.element = t, this.apiClient = n, this.instrumentName = r
    }
    async getInitialCart(t) {
        const n = Je(this.element);
        if (!n) throw new Error("[".concat(this.instrumentName, "] unable to find product form"));
        const r = $t(ta),
            {
                data: a,
                errors: i
            } = await this.apiClient.createCart(D(A({}, n), {
                discountCodes: r ? [r] : [],
                instrumentName: t
            }));
        return {
            cart: a,
            errors: i
        }
    }
}

function bs({
    instanceNumber: e,
    styleId: t,
    styles: n,
    cssFileName: r
}) {
    var a, i;
    e === 1 && (i = (a = window.Shopify) == null ? void 0 : a.PaymentButton) != null && i.isStorefrontPortableWallets && (ws({
        styleId: t,
        styles: n,
        cssFileName: r
    }) || _s({
        styleId: t,
        styles: n
    }))
}

function ws({
    styleId: e,
    styles: t,
    cssFileName: n
}) {
    return !!document.querySelector("style#".concat(e))
}

function _s({
    styleId: e,
    styles: t
}) {
    const n = document.createElement("style");
    n.id = e, n.innerHTML = t, document.head.appendChild(n)
}
const H = {
    buttonBlockSize: "--shopify-accelerated-checkout-button-block-size",
    buttonBorderRadius: "--shopify-accelerated-checkout-button-border-radius",
    buttonBoxShadow: "--shopify-accelerated-checkout-button-box-shadow",
    inlineAlignment: "--shopify-accelerated-checkout-inline-alignment"
};

function Ir(e) {
    let t = 0,
        n = 0,
        r = 0;
    const a = e.split(/\s+/);
    for (let i = 0; i < a.length; i++) {
        const o = a[i];
        o !== ">" && (o.includes("#") && (t += (o.match(/#/g) || []).length), o.includes(".") && (n += (o.match(/\./g) || []).length), o.includes("[") && (n += (o.match(/\[/g) || []).length), o.includes(":") && (n += (o.match(/:[^:]/g) || []).length), /^[A-Za-z]/.test(o) && (r += 1))
    }
    return [t, n, r]
}

function As(e, t) {
    for (let n = 0; n < 3; n++)
        if (e[n] !== t[n]) return t[n] - e[n];
    return 0
}

function Pr(e) {
    return [...e].sort((t, n) => {
        const r = Ir(t.selector),
            a = Ir(n.selector);
        return As(r, a)
    })
}
const Ss = /\.cart__dynamic-checkout-buttons|\.dynamic-checkout-buttons\s*(>\s*)?li(?![a-zA-Z0-9_.:#-])/,
    Cs = /\.cart__dynamic-checkout-buttons|\.dynamic-checkout-buttons\s*\[role="?button"?\](?![:\w-])/,
    Es = /\.additional-checkout-buttons\s*(?:div\s*)?\[role="?button"?\](?![:\w-])/,
    Ln = /\[data-shopify-buttoncontainer\](?![:\w-])/,
    kn = /.dynamic-checkout-buttons .shopify-payment-button__button/,
    vs = /(?!.*\.shopify-cleanslate)\.shopify-payment-button__button(?:--branded)?(?![\w-:.#>])/,
    Is = /\.(shopify-payment-button|shopify-payment-button__button|shopify-payment-button__button--branded)\s*\[role="?button"?\](?![:\w-])/,
    Ps = /(?:only\s+)?(?:screen\s+and\s+)?\((?:min|max)-(?:width|height):\s*\d+px\)/,
    Ds = [Cs, Ln, Ss, Es, kn],
    Ts = [vs, Is, kn];

function On(e) {
    const t = e.pageType,
        n = [...document.styleSheets].filter(Ns),
        r = [],
        a = [];
    n.forEach(O => {
        try {
            const F = [...O.cssRules].filter(_ => _ instanceof CSSMediaRule),
                Nt = [...O.cssRules].filter(_ => _ instanceof CSSStyleRule);
            a.push(...F.filter(_ => Ps.test(_.conditionText)).flatMap(_ => [..._.cssRules].filter(M => M instanceof CSSStyleRule).flatMap(M => M.selectorText.split(",").map(Rt => Rt.trim()).map(Rt => A({
                selector: Rt,
                conditionText: _.conditionText
            }, Lr(M)))))), r.push(...Nt.flatMap(_ => _.selectorText.split(",").map(M => M.trim()).map(M => A({
                selector: M
            }, Lr(_)))))
        } catch (F) {
            Xt()("shopify-support-debug") && (console.debug("[shopify-support-debug] stylesheet origin: ".concat(O.href)), console.debug(F))
        }
    });
    const i = t === C.ProductPage ? Ts : Ds,
        o = new Set;

    function s(O, F) {
        const Nt = F.selector.match(O);
        return Nt ? (o.add(Nt[0]), !0) : !1
    }
    const l = r.filter(O => i.some(F => s(F, O))).reverse(),
        u = a.filter(O => i.some(F => s(F, O))).reverse(),
        d = Xt()("shopify-support-debug");
    d && console.table(Array.from(o));
    const p = Pr(l),
        y = Pr(u),
        m = {},
        v = Dr(t) ? document.querySelector(".cart__blocks .button") : document.querySelector(".product-form__buttons .button");
    v && (m.boxShadow = getComputedStyle(v, ":before").boxShadow);
    for (const O of p) {
        const F = ["height", "minHeight", "borderRadius", "marginTop"];
        Dr(t) && O.selector.match(Ln) && F.push("justifyContent");
        for (const Nt of F) m[Nt] = ks({
            rule: O,
            property: Nt,
            currentPropertyValue: m[Nt]
        })
    }
    const {
        height: f,
        borderRadius: S,
        minHeight: B,
        marginTop: K,
        justifyContent: jt,
        boxShadow: ye
    } = m;
    return d && console.table([{
        property: "height",
        value: f
    }, {
        property: "borderRadius",
        value: S
    }, {
        property: "minHeight",
        value: B
    }, {
        property: "marginTop",
        value: K
    }, {
        property: "justifyContent",
        value: jt
    }, {
        property: "boxShadow",
        value: ye
    }]), t === C.ProductPage ? Rr({
        styles: {
            height: f,
            minHeight: B,
            borderRadius: S,
            marginTop: K,
            boxShadow: ye
        },
        mediaRules: y,
        element: e
    }) : Rr({
        styles: {
            borderRadius: S,
            boxShadow: ye,
            justifyContent: jt
        },
        mediaRules: y,
        element: e
    })
}

function xn(e, t) {
    if (!t) return;
    const n = "global-".concat(e.tagName.toLowerCase(), "-styles");
    if (document.head.querySelector("style#".concat(n)) == null) {
        const r = document.createElement("style");
        r.id = n, r.innerHTML = t, document.head.appendChild(r)
    }
}

function Ns(e) {
    const t = e.ownerNode instanceof HTMLLinkElement && (e.ownerNode.getAttribute("crossorigin") === "anonymous" || e.ownerNode.getAttribute("crossorigin") === "");
    return e.href == null || e.href.startsWith(window.location.origin) || t
}

function Dr(e) {
    return e === C.CartPage || e === C.CartAjax
}

function Tr({
    height: e,
    minHeight: t
}) {
    let n = e,
        r = t;
    return (n != null && n.includes("var(".concat(H.buttonBlockSize)) || n === "auto") && (n = null), (r != null && r.includes("var(".concat(H.buttonBlockSize)) || r === "auto") && (r = null), n === r ? n : r && n ? "max(".concat(n, ",").concat(r, ")") : n || r
}

function Nr({
    existingProperties: e,
    mediaCondition: t,
    selector: n,
    styles: r
}) {
    const a = A({}, r);
    for (const i of e) delete a[i];
    for (const [i, o] of Object.entries(a)) o != null && o.startsWith("var(".concat(i)) && delete a[i];
    return Object.keys(a).length === 0 ? "" : Rs({
        mediaCondition: t,
        selector: n,
        styles: a
    })
}

function Rs({
    mediaCondition: e,
    selector: t,
    styles: n
}) {
    let r = "".concat(e ? "@media ".concat(e, " { ") : "").concat(t, " {");
    for (const [a, i] of Object.entries(n)) i && (r += "\n  ".concat(a, ": ").concat(i, ";"));
    return r += "\n}", e && (r += "}"), r += "\n", r
}

function Rr({
    styles: e,
    element: t,
    mediaRules: n
}) {
    const {
        height: r,
        minHeight: a,
        borderRadius: i,
        marginTop: o,
        justifyContent: s,
        boxShadow: l
    } = e, u = t.tagName.toLowerCase(), d = getComputedStyle(t), p = new Set;
    for (const m of Object.values(H)) d.getPropertyValue(m) && p.add(m);
    let y = Nr({
        existingProperties: p,
        selector: u,
        styles: {
            [H.buttonBlockSize]: Tr({
                height: r,
                minHeight: a
            }),
            [H.buttonBorderRadius]: i,
            [H.buttonBoxShadow]: l,
            [H.inlineAlignment]: s,
            "margin-top": o,
            display: o ? "block" : void 0
        }
    });
    return n.forEach(m => {
        (m.height || m.minHeight || m.borderRadius || m.boxShadow || m.justifyContent || m.marginTop) && (y += Nr({
            existingProperties: p,
            mediaCondition: m.conditionText,
            selector: u,
            styles: {
                [H.buttonBlockSize]: Tr({
                    height: m.height,
                    minHeight: m.minHeight
                }),
                [H.buttonBorderRadius]: m.borderRadius,
                [H.buttonBoxShadow]: m.boxShadow,
                [H.inlineAlignment]: m.justifyContent,
                "margin-top": m.marginTop,
                display: m.marginTop ? "block" : void 0
            }
        }))
    }), y.trim()
}

function Lr(e) {
    return [
        ["height"],
        ["minHeight", "min-height"],
        ["borderRadius", "border-radius"],
        ["marginTop", "margin-top"],
        ["justifyContent", "justify-content"]
    ].reduce((t, [n, r]) => (t[n] = Ls({
        rule: e,
        property: r != null ? r : n
    }), t), {})
}

function Ls({
    rule: e,
    property: t
}) {
    const n = e.style.getPropertyValue(t);
    return e.style.getPropertyPriority(t) ? "".concat(n, " !important") : n || null
}

function ks({
    rule: e,
    property: t,
    currentPropertyValue: n
}) {
    const r = e[t];
    return !(n != null && n.includes("!important")) && r != null && r.includes("!important") ? r : n != null ? n : r
}
const kr = 2e3;
class Or extends Error {
    constructor() {
        super(...arguments), c(this, "name", "AcceleratedCheckoutError")
    }
}
const re = class Xs extends Ke {
    constructor() {
        super(), c(this, "instanceNumber", ++Xs.instanceCount), c(this, "pageType", C.ProductPage), c(this, "formObserver"), c(this, "dataSource"), c(this, "wrapper"), c(this, "shopPromiseEligible"), c(this, "didInitiateRender", !1), this.wrapper = document.createElement("div"), Ve({
            shop: {
                shopId: this.shopId
            }
        }), bs({
            instanceNumber: this.instanceNumber,
            styleId: "shopify-accelerated-checkout",
            styles: _i,
            cssFileName: "AcceleratedCheckout.css"
        }), this.shopPromiseEligible = Gr()
    }
    static get observedAttributes() {
        return ["access-token", "disabled", "has-selling-plan", "requires-shipping"]
    }
    async connectedCallback() {
        var t, n, r;
        try {
            if ((n = (t = this.wrapper) == null ? void 0 : t.children) != null && n.length || this.didInitiateRender) return;
            if (!this.validateRenderingSurface()) {
                this.clearUI();
                return
            }
            this.instanceNumber === 1 && g.initStarted();
            const a = ue(N.ButtonDisplay, "dc:".concat(this.instanceNumber));
            this.i18n = ie(), this.setupFormObserver(), this.didInitiateRender = !0;
            const i = await this.loadWallet(),
                o = (r = i == null ? void 0 : i.getInstrumentName()) != null ? r : b.BuyItNow,
                s = o === b.ApplePay || o === b.GooglePay;
            this.apiClient = new me({
                accessToken: this.accessToken,
                country: this.buyerCountry,
                locale: this.i18n.locale,
                withCarrierRates: s
            }), this.dataSource = new fs(this, this.apiClient, o), this.extractStyles();
            const l = i == null ? void 0 : i.createWebComponent({
                walletContainer: this,
                dataSource: this.dataSource,
                i18n: this.i18n,
                apiClient: this.apiClient,
                classNames: Os(o),
                callToAction: "true",
                pageType: this.pageType,
                containerInstanceNumber: this.instanceNumber,
                onRendered: () => g.instrumentLoaded({
                    instrumentOrComponentName: o,
                    result: "success",
                    measurement: a()
                })
            });
            if (!l) throw new Or("No web component found");
            this.render(l, o), g.initCompleted({
                result: "success"
            }), this.instanceNumber === 1 && this.triggerLoadedEvent()
        } catch (a) {
            if (this.clearUI(), g.initCompleted({
                    error: a
                }), a.name === Dt.name) throw a;
            w.notify(new Or("An error occurred while attempting to render the AcceleratedCheckout: ".concat(a)))
        }
    }
    async attributeChangedCallback(t, n, r) {
        n !== r && (We(this, t, r), t === "has-selling-plan" && r === "" ? this.showBuyerConsent(this.apiClient, this.i18n) : t === "has-selling-plan" && r === null && this.hideBuyerConsent())
    }
    async render(t, n) {
        this.clearUI();
        const r = this.attachShadow({
                mode: "closed"
            }),
            a = document.createElement("style");
        a.innerHTML = Rn, r.appendChild(a), this.wrapper.className = "wallet-button-fade-in";
        const i = document.createElement("slot");
        i.name = "button", this.wrapper.appendChild(i);
        const o = document.createElement("slot");
        o.name = "promise", this.wrapper.appendChild(o);
        const s = document.createElement("slot");
        s.name = "more-options", this.wrapper.appendChild(s), r == null || r.appendChild(this.wrapper), this.hasSellingPlan ? this.showBuyerConsent(this.apiClient, this.i18n) : this.hideBuyerConsent();
        const l = new DocumentFragment;
        l.appendChild(t);
        const u = this.getShopPromiseSlot();
        u && l.appendChild(u);
        const d = this.getMorePaymentOptionsLink(n);
        d && l.appendChild(d), this.appendChild(l)
    }
    getMorePaymentOptionsLink(t) {
        var n, r;
        if (t === b.BuyItNow) return null;
        const a = document.createElement("more-payment-options-link");
        return ce(a, {
            "buyer-country": (n = this.buyerCountry) != null ? n : "",
            "access-token": (r = this.accessToken) != null ? r : "",
            "recommended-instrument": t,
            slot: "more-options"
        }), a.disabled = this.disabled, a.setDataSource(this.dataSource), a.setI18n(this.i18n), a.setClassNames(De.MORE_PAYMENT_OPTION_BUTTON), a
    }
    getShopPromiseSlot() {
        if (!this.shopPromiseEligible) return null;
        const t = document.createElement("div");
        return t.setAttribute("data-shopify", "shop-promise-payment-button-slot"), t.style.height = "100%", t.slot = "promise", t
    }
    validateRenderingSurface() {
        return he({
            page: "product",
            element: this
        }) != null
    }
    async loadWallet() {
        const t = wi(this.recommendedWallet, this.fallbackWallet, "AcceleratedCheckout");
        return await Ms(D(A({}, t), {
            instanceNumber: this.instanceNumber
        }))
    }
    setupFormObserver() {
        this.formObserver || (this.formObserver = new Yr(this, ({
            disabled: t,
            hasSellingPlan: n
        }) => {
            this.disabled = t, this.hasSellingPlan = n, this.isShippingRequired = xs(this, this.variantParams)
        }), this.formObserver.setupMutationObservers())
    }
    extractStyles() {
        if (this.styleExtractorDisabled) {
            Xt()("shopify-support-debug") && console.debug("[shopify-support-debug] styling backward compatibility disabled");
            return
        }
        const t = On(this);
        t && xn(this, t)
    }
};
c(re, "instanceCount", 0);
let $e = re;

function Os(e) {
    return e === b.BuyItNow ? De.UNBRANDED_BUTTON : De.BRANDED_BUTTON
}

function xs(e, t) {
    var n;
    const r = Je(e);
    return !!((n = t.find(a => a.id === Number(r == null ? void 0 : r.variantId))) != null && n.requiresShipping)
}
async function Ms({
    recommendedWallet: e,
    fallbackWallet: t,
    instanceNumber: n
}) {
    const r = e ? te(e) : null,
        a = te(t);
    if (Ye(r)) {
        const i = Ne({
                walletInstrument: r,
                instanceNumber: n
            }),
            o = "timeout",
            s = await Promise.race([i, new Promise(l => setTimeout(() => l(o), kr))]);
        if (s === o) g.instrumentSDKLoaded({
            instrument: r.getInstrumentName(),
            measurement: kr,
            result: "timeout"
        });
        else if (s instanceof at) return s
    }
    return a && Ne({
        walletInstrument: a,
        instanceNumber: n
    })
}
Z("shopify-accelerated-checkout", $e), Z("more-payment-options-link", hi, {
    isChildCustomElement: !0
});
const Fs = e => {
        const t = new PerformanceObserver(n => {
            n.getEntriesByType("resource").some(r => r.name.includes(xt.CartUpdate) || r.name.includes(xt.CartChange) || r.name.includes(xt.CartAdd) || r.name.includes(xt.CartClear)) && e()
        });
        return t.observe({
            entryTypes: ["resource"]
        }), t
    },
    Us = ".wallet-cart-wrapper{--wallet-button-height-horizontal: clamp( 25px, var(--shopify-accelerated-checkout-button-inline-size, 42px), 55px );--wallet-button-height-vertical: clamp( 25px, var(--shopify-accelerated-checkout-button-block-size, 54px), 55px );--wallet-button-width-horizontal: 150px;--wallet-button-width-vertical: 100%;--wallet-button-border-radius: var( --shopify-accelerated-checkout-button-border-radius, 4px );--wallet-grid-margin-horizontal: 0 -5px -5px -5px;--wallet-button-container-margin-horizontal: 0 5px 5px;--wallet-button-container-margin-vertical: var( --shopify-accelerated-checkout-row-gap, 8px ) 0 0}.wallet-cart-wrapper{container-type:inline-size;container-name:wrapper}.wallet-cart-grid{margin:var(--wallet-grid-margin-horizontal);padding:0;display:flex;justify-content:var(--shopify-accelerated-checkout-inline-alignment, start);flex-direction:row}.wallet-cart-grid.wallet-cart-grid--vertical{justify-content:flex-start;flex-direction:column;margin:0}.wallet-cart-grid.wallet-cart-grid--vertical .wallet-cart-button-container{width:var(--wallet-button-width-vertical);height:var(--wallet-button-height-vertical);margin:var(--wallet-button-container-margin-vertical)}.wallet-cart-grid.wallet-cart-grid--vertical .wallet-cart-button-container:first-child{margin-top:0}.wallet-cart-grid.wallet-cart-grid--vertical .wallet-cart-button{width:var(--wallet-button-width-vertical);height:var(--wallet-button-height-vertical)}.wallet-cart-button-container{position:relative;margin:var(--wallet-button-container-margin-horizontal)}.wallet-cart-button-container,.wallet-cart-button{width:var(--wallet-button-width-horizontal);height:var(--wallet-button-height-horizontal);border-radius:var(--wallet-button-border-radius);list-style-type:none!important;text-align:center;flex-shrink:0;flex-grow:0}@container wrapper (width >= 150px) and (width <= 500px){.wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(1)).wallet-cart-grid:not(:has(>.wallet-cart-button-container:nth-of-type(2))){justify-content:flex-start;flex-direction:column;margin:0}.wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(1)).wallet-cart-grid:not(:has(>.wallet-cart-button-container:nth-of-type(2))) .wallet-cart-button-container{width:var(--wallet-button-width-vertical);height:var(--wallet-button-height-vertical);margin:var(--wallet-button-container-margin-vertical)}.wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(1)).wallet-cart-grid:not(:has(>.wallet-cart-button-container:nth-of-type(2))) .wallet-cart-button-container:first-child{margin-top:0}.wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(1)).wallet-cart-grid:not(:has(>.wallet-cart-button-container:nth-of-type(2))) .wallet-cart-button{width:var(--wallet-button-width-vertical);height:var(--wallet-button-height-vertical)}}@container wrapper (width <= 310px){.wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(2)).wallet-cart-grid:not(:has(>.wallet-cart-button-container:nth-of-type(3))){justify-content:flex-start;flex-direction:column;margin:0}.wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(2)).wallet-cart-grid:not(:has(>.wallet-cart-button-container:nth-of-type(3))) .wallet-cart-button-container{width:var(--wallet-button-width-vertical);height:var(--wallet-button-height-vertical);margin:var(--wallet-button-container-margin-vertical)}.wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(2)).wallet-cart-grid:not(:has(>.wallet-cart-button-container:nth-of-type(3))) .wallet-cart-button-container:first-child{margin-top:0}.wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(2)).wallet-cart-grid:not(:has(>.wallet-cart-button-container:nth-of-type(3))) .wallet-cart-button{width:var(--wallet-button-width-vertical);height:var(--wallet-button-height-vertical)}}@container wrapper (width <= 470px){.wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(3)).wallet-cart-grid:not(:has(>.wallet-cart-button-container:nth-of-type(4))){justify-content:flex-start;flex-direction:column;margin:0}.wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(3)).wallet-cart-grid:not(:has(>.wallet-cart-button-container:nth-of-type(4))) .wallet-cart-button-container{width:var(--wallet-button-width-vertical);height:var(--wallet-button-height-vertical);margin:var(--wallet-button-container-margin-vertical)}.wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(3)).wallet-cart-grid:not(:has(>.wallet-cart-button-container:nth-of-type(4))) .wallet-cart-button-container:first-child{margin-top:0}.wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(3)).wallet-cart-grid:not(:has(>.wallet-cart-button-container:nth-of-type(4))) .wallet-cart-button{width:var(--wallet-button-width-vertical);height:var(--wallet-button-height-vertical)}}@container wrapper (width <= 630px){.wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(4)).wallet-cart-grid:not(:has(>.wallet-cart-button-container:nth-of-type(5))){justify-content:flex-start;flex-direction:column;margin:0}.wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(4)).wallet-cart-grid:not(:has(>.wallet-cart-button-container:nth-of-type(5))) .wallet-cart-button-container{width:var(--wallet-button-width-vertical);height:var(--wallet-button-height-vertical);margin:var(--wallet-button-container-margin-vertical)}.wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(4)).wallet-cart-grid:not(:has(>.wallet-cart-button-container:nth-of-type(5))) .wallet-cart-button-container:first-child{margin-top:0}.wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(4)).wallet-cart-grid:not(:has(>.wallet-cart-button-container:nth-of-type(5))) .wallet-cart-button{width:var(--wallet-button-width-vertical);height:var(--wallet-button-height-vertical)}}@container wrapper (width <= 790px){.wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(5)).wallet-cart-grid:not(:has(>.wallet-cart-button-container:nth-of-type(6))){justify-content:flex-start;flex-direction:column;margin:0}.wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(5)).wallet-cart-grid:not(:has(>.wallet-cart-button-container:nth-of-type(6))) .wallet-cart-button-container{width:var(--wallet-button-width-vertical);height:var(--wallet-button-height-vertical);margin:var(--wallet-button-container-margin-vertical)}.wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(5)).wallet-cart-grid:not(:has(>.wallet-cart-button-container:nth-of-type(6))) .wallet-cart-button-container:first-child{margin-top:0}.wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(5)).wallet-cart-grid:not(:has(>.wallet-cart-button-container:nth-of-type(6))) .wallet-cart-button{width:var(--wallet-button-width-vertical);height:var(--wallet-button-height-vertical)}}.wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(6)){justify-content:flex-start;flex-direction:column;margin:0}.wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(6)) .wallet-cart-button-container{width:var(--wallet-button-width-vertical);height:var(--wallet-button-height-vertical);margin:var(--wallet-button-container-margin-vertical)}.wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(6)) .wallet-cart-button-container:first-child{margin-top:0}.wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(6)) .wallet-cart-button{width:var(--wallet-button-width-vertical);height:var(--wallet-button-height-vertical)}@media screen and (max-width: 750px){.wallet-cart-grid{justify-content:flex-start;flex-direction:column;max-width:none;margin:0}.wallet-cart-grid .wallet-cart-button-container{max-width:none;width:var(--wallet-button-width-vertical);height:var(--wallet-button-height-vertical);margin:var(--wallet-button-container-margin-vertical)}.wallet-cart-grid .wallet-cart-button-container:first-child{margin-top:0}.wallet-cart-grid .wallet-cart-button{width:var(--wallet-button-width-vertical);height:var(--wallet-button-height-vertical)}}@supports (not (container-type: inline-size)) or (not (selector(:has(*)))){.wallet-cart-grid{justify-content:flex-start;flex-direction:column;margin:0}.wallet-cart-button-container{width:var(--wallet-button-width-vertical);height:var(--wallet-button-height-vertical);margin:var(--wallet-button-container-margin-vertical)}.wallet-cart-button-container:first-child{margin-top:0}.wallet-cart-grid .wallet-cart-button{width:var(--wallet-button-width-vertical);height:var(--wallet-button-height-vertical)}}",
    Bs = ".wallet-cart-grid.wallet-cart-grid--vertical .wallet-cart-button-container:first-child{margin-top:8px}@container wrapper (width >= 150px) and (width <= 500px){.wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(1)).wallet-cart-grid:not(:has(>.wallet-cart-button-container:nth-of-type(2))) .wallet-cart-button-container:first-child{margin-top:8px}}@container wrapper (width <= 310px){.wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(2)).wallet-cart-grid:not(:has(>.wallet-cart-button-container:nth-of-type(3))) .wallet-cart-button-container:first-child{margin-top:8px}}@container wrapper (width <= 470px){.wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(3)).wallet-cart-grid:not(:has(>.wallet-cart-button-container:nth-of-type(4))) .wallet-cart-button-container:first-child{margin-top:8px}}@container wrapper (width <= 630px){.wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(4)).wallet-cart-grid:not(:has(>.wallet-cart-button-container:nth-of-type(5))) .wallet-cart-button-container:first-child{margin-top:8px}}@container wrapper (width <= 790px){.wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(5)).wallet-cart-grid:not(:has(>.wallet-cart-button-container:nth-of-type(6))) .wallet-cart-button-container:first-child{margin-top:8px}}.wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(6)) .wallet-cart-button-container:first-child{margin-top:8px}@media screen and (max-width: 750px){.wallet-cart-grid .wallet-cart-button-container:first-child{margin-top:8px}}@supports (not (container-type: inline-size)) or (not (selector(:has(*)))){.wallet-cart-button-container:first-child{margin-top:8px}}";

function $s(e) {
    const t = he({
        page: "cart",
        element: e
    });
    return jr({
        type: "attributes",
        form: t
    })
}
class Hs {
    constructor(t, n, r) {
        this.element = t, this.cartToken = n, this.apiClient = r
    }
    async getInitialCart(t) {
        const n = "gid://shopify/Cart/".concat(this.cartToken),
            r = $s(this.element);
        let a, i = [];
        if (r.length) {
            const o = await this.apiClient.updateCartAttributes({
                cartId: n,
                attributes: r,
                instrumentName: t,
                startingCheckout: !0
            });
            a = o.data, i = o.errors
        } else a = await this.apiClient.fetchCart({
            id: n,
            instrumentName: t,
            startingCheckout: !0
        });
        return {
            cart: a,
            errors: i
        }
    }
}
var Pt;
const ne = class Zs extends Ke {
    constructor() {
        super(), c(this, "instanceNumber", ++Zs.instanceCount), c(this, "pageType", C.CartPage), c(this, "cartObserver", null), c(this, "dataSource", null), c(this, "wrapper"), c(this, "didInitiateRender", !1), j(this, Pt, void 0), Ve({
            shop: {
                shopId: this.shopId,
                cartId: this.cartId
            }
        }), this.wrapper = document.createElement("div")
    }
    static get observedAttributes() {
        return ["access-token", "has-selling-plan", "requires-shipping"]
    }
    createDataSource(t) {
        if (!this.cartToken) throw new Error("[AcceleratedCheckoutCart] cart cookie does not exist");
        const n = ie(),
            r = new me({
                accessToken: this.accessToken,
                country: this.buyerCountry,
                locale: n.locale,
                withCarrierRates: t
            }),
            a = new Hs(this, this.cartToken, r);
        this.dataSource = a, this.apiClient = r, this.i18n = n
    }
    async createWebComponents({
        shouldRefetchCartAttributes: t
    }) {
        if (!this.walletConfigs) throw new Error("[AcceleratedCheckoutCart] walletConfigs does not exist");
        const n = pi(this.walletConfigs, "AcceleratedCheckoutCart");
        if (!(n instanceof Array)) throw new Error("[AcceleratedCheckoutCart] invalid walletConfigs found");
        const r = N.ButtonDisplay,
            a = l => "".concat(l, ":").concat(this.instanceNumber),
            i = await Gs({
                walletConfigs: n,
                instanceNumber: this.instanceNumber,
                startButtonDisplayBenchmark: l => qt(r, a(l))
            }),
            o = new Set([b.ApplePay, b.GooglePay]),
            s = i.some(l => o.has(l.getInstrumentName()));
        return this.createDataSource(s), t && await this.updateAttributes(), i.map(l => {
            const u = l.getInstrumentName();
            return l.createWebComponent({
                walletContainer: this,
                dataSource: this.dataSource,
                i18n: this.i18n,
                apiClient: this.apiClient,
                pageType: this.pageType,
                containerInstanceNumber: this.instanceNumber,
                slot: "button-".concat(l.getInstrumentName()),
                onRendered: () => g.instrumentLoaded({
                    instrumentOrComponentName: u,
                    result: "success",
                    measurement: Y(r, a(u))
                })
            })
        })
    }
    async cartChangedCallback() {
        try {
            if (!this.dataSource && this.cartToken) {
                await this.render({
                    shouldRefetchCartAttributes: !0
                });
                return
            } else if (!this.cartToken) {
                g.cartTokenMissing({
                    reason: "cartChangedCallback"
                });
                return
            }
            await this.updateAttributes()
        } catch (t) {
            this.clearUI(), w.notify(t)
        }
    }
    async updateAttributes() {
        var t;
        if (!this.cartToken) return;
        const n = await ((t = this.apiClient) == null ? void 0 : t.fetchCart({
            id: "gid://shopify/Cart/".concat(this.cartToken),
            instrumentName: b.Unknown
        }));
        if (!(n != null && n.id)) throw new Error("[".concat(this.updateAttributes, "] received invalid cart"));
        this.hasSellingPlan = n.lineItems.some(r => r.sellingPlanAllocation != null), this.isShippingRequired = n.lineItems.some(r => r.merchandise.requiresShipping)
    }
    async connectedCallback() {
        try {
            if (this.didInitiateRender) return;
            if (U({
                    event: k.CartInitCalled
                }), this.cartObserver = Fs(() => this.cartChangedCallback()), !this.cartToken) {
                g.cartTokenMissing({
                    reason: "connectedCallback"
                });
                return
            }
            await this.render({
                shouldRefetchCartAttributes: !1
            })
        } catch (t) {
            this.clearUI(), w.notify(t)
        }
    }
    disconnectedCallback() {
        var t;
        (t = this.cartObserver) == null || t.disconnect()
    }
    async attributeChangedCallback(t, n, r) {
        n !== r && (We(this, t, r), t === "has-selling-plan" && r === "" ? this.showBuyerConsent(this.apiClient, this.i18n) : t === "has-selling-plan" && r === null && this.hideBuyerConsent())
    }
    get cartToken() {
        return $t("cart")
    }
    async render({
        shouldRefetchCartAttributes: t
    }) {
        if (this.hasLegacyCartCookie()) {
            g.legacyCartCookie(), this.clearUI();
            return
        }
        this.didInitiateRender = !0;
        const n = ue(N.ButtonDisplay, "cart:".concat(this.instanceNumber)),
            r = await this.createWebComponents({
                shouldRefetchCartAttributes: t
            });
        if (this.clearUI(), r.length === 0) return;
        const a = new DocumentFragment,
            i = this.getOrCreateShadowRoot(),
            o = document.createElement("style");
        o.innerHTML = [Rn, Us].join("\n"), i.appendChild(o), this.extractStyles(), this.wrapper = document.createElement("div"), this.wrapper.className = "wallet-cart-wrapper wallet-button-fade-in";
        const s = document.createElement("ul");
        s.className = "wallet-cart-grid ".concat(pt.CONTAINER), s.setAttribute("role", "list"), zs() && s.classList.add("wallet-cart-grid--vertical"), r.forEach(l => {
            const u = document.createElement("li"),
                d = document.createElement("div"),
                p = document.createElement("slot");
            p.name = "button-".concat(l.name), u.className = "wallet-cart-button-container", d.className = "wallet-cart-button", u.setAttribute("data-testid", "grid-cell"), u.appendChild(d), d.appendChild(p), s.appendChild(u), a.appendChild(l)
        }), this.wrapper.appendChild(s), this.hasSellingPlan ? this.showBuyerConsent(this.apiClient, this.i18n) : this.hideBuyerConsent(), i.appendChild(this.wrapper), this.appendChild(a), g.instrumentLoaded({
            instrumentOrComponentName: "AcceleratedCheckoutCart",
            result: "success",
            measurement: n()
        })
    }
    getOrCreateShadowRoot() {
        return I(this, Pt) || J(this, Pt, this.attachShadow({
            mode: "closed"
        })), I(this, Pt)
    }
    hasLegacyCartCookie() {
        var t;
        return this.cartToken ? (t = this.cartToken) == null ? void 0 : t.match(/^[a-z0-9]+$/) : !1
    }
    extractStyles() {
        if (this.styleExtractorDisabled) {
            Xt()("shopify-support-debug") && console.debug("[shopify-support-debug] styling backward compatibility disabled");
            return
        }
        const t = On(this);
        if (t) {
            xn(this, t);
            const n = this.getOrCreateShadowRoot(),
                r = document.createElement("style");
            r.innerHTML = Bs, n.appendChild(r)
        }
    }
};
Pt = new WeakMap, c(ne, "instanceCount", 0);
let He = ne;
async function Gs({
    walletConfigs: e,
    instanceNumber: t,
    startButtonDisplayBenchmark: n = () => {}
}) {
    const r = yi(gs(e));
    return (await Promise.all(r.map(a => (n(a.getInstrumentName()), Ne({
        walletInstrument: a,
        instanceNumber: t
    }))))).filter(a => a != null)
}

function zs() {
    return !!document.querySelector(".additional-checkout-buttons--vertical shopify-accelerated-checkout-cart")
}
Z("shopify-accelerated-checkout-cart", He);
class Vs {
    getInitialCart() {
        throw new Error('[NoOpDataSource] Unexpected call to "getCart"')
    }
}
const ae = class tl extends Ke {
    constructor() {
        super(), c(this, "instanceNumber", ++tl.instanceCount), Ve({
            shop: {
                shopId: this.shopId
            }
        })
    }
    get walletConfig() {
        return this.getAttribute("wallet-config")
    }
    get pageType() {
        return this.getAttribute("page-type") || C.Unknown
    }
    async connectedCallback() {
        try {
            if (this.children.length) return;
            this.instanceNumber === 1 && g.initStarted();
            const t = ue(N.ButtonDisplay, "dc:".concat(this.instanceNumber)),
                n = mi(this.walletConfig, "WalletButton");
            if (!n) throw new ra("[WalletButton] No config provided.");
            const r = te(n);
            if (!r || !await this.eligibleToShow(r)) return;
            const a = r.getInstrumentName();
            this.i18n = ie(), this.apiClient = new me({
                accessToken: this.accessToken,
                country: this.buyerCountry,
                locale: this.i18n.locale
            });
            const i = this.createWebComponent(r, this.i18n, this.apiClient, a, t);
            this.innerHTML = "", this.appendChild(i), g.initCompleted({
                result: "success"
            }), this.instanceNumber === 1 && this.triggerLoadedEvent()
        } catch (t) {
            this.innerHTML = "", g.initCompleted({
                error: t
            }), w.notify(t)
        }
    }
    createWebComponent(t, n, r, a, i) {
        const o = t.createWebComponent({
            walletContainer: this,
            dataSource: new Vs,
            i18n: n,
            apiClient: r,
            containerInstanceNumber: this.instanceNumber,
            pageType: this.pageType
        });
        return o.onRendered = () => {
            g.instrumentLoaded({
                instrumentOrComponentName: a,
                result: "success",
                measurement: i()
            })
        }, o
    }
    async eligibleToShow(t) {
        return !(!Ye(t) || (await t.loadWalletSDK(), !t.getPartnerSDKEligibility().eligible))
    }
};
c(ae, "instanceCount", 0);
let Ge = ae;
Z("shopify-wallet-button", Ge), Kn(w), Jn(w), g.startExporter();