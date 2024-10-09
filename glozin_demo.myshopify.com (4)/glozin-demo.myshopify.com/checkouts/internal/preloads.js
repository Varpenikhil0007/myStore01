(function() {
    var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
    var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/polyfills.IegWBDja.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/app.bKMNKYPa.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/VaultedContact.xAwtcw-8.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/DeliveryMethodSelectorSection.lgvCyni-.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/useUnauthenticatedErrorModal.pFYKNY64.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/LegacyVaultedShippingMethods.Befd3GmA.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/Rollup.DoJwnsru.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/SubscriptionPriceBreakdown.CkMhPX6f.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/RageClickCapture.hFzCsHQv.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/ShopPayLogo.BywXb6ye.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/PurchaseOptionsAgreement.C6kGQgnN.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/PickupPointCarrierLogo.CvBAG85Q.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/hooks.gtsudqAT.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/VaultedPayment.Cmuqv9pa.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/Option.eC3rWt4S.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/OnePageModal.cInNI9G_.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/useShowShopPayOptin.D1ZfFalr.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/Section.hPK-P1w3.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/useGooglePaySdk.C2Q2SkRu.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/PayButtonSection.7vtgKpJj.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/context.CpyQXvqf.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/publishMessage.BiJPzK3D.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/DutyOptions.DWPwhG32.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/useAmazonContact.BC1PoWhs.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/StockProblemsLineItemList.CuPk_mps.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/component-ShopPayVerificationSwitch.B8oW6ukM.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/index.DVUj03_w.js"];
    var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/app.DhHGJHcF.css", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/VaultedContact.BL1uXB7_.css", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/DeliveryMethodSelectorSection.B4_rfmEs.css", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/Rollup.o9Mx-fKL.css", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/SubscriptionPriceBreakdown.Bqs0s4oM.css", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/RageClickCapture.DnkQ4tsk.css", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/ShopPayLogo.D_HPU8Dh.css", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/PickupPointCarrierLogo.C0wRU6wV.css", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/VaultedPayment.-UsM8FFz.css", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/Option.CFr5yw-q.css", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/Section.sQehCocD.css", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/PayButtonSection.DF7trkKf.css", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/DutyOptions.Bd1Z60K2.css", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/useAmazonContact.D-Ox6Dnf.css", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/StockProblemsLineItemList.CxdIQKjw.css", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/ShopPayVerificationSwitch.CAxiAssW.css"];
    var fontPreconnectUrls = [];
    var fontPrefetchUrls = [];
    var imgPrefetchUrls = [];

    function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
    }

    function preconnectAssets() {
        var resources = [baseURL].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
            var res = resources[index++];
            if (res) preconnect(res, next);
        })();
    }

    function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
            link.rel = 'prefetch';
            link.fetchPriority = 'low';
            link.as = as;
            if (as === 'font') link.type = 'font/woff2';
            link.href = url;
            link.crossOrigin = '';
            link.onload = link.onerror = callback;
            document.head.appendChild(link);
        } else {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', url, true);
            xhr.onloadend = callback;
            xhr.send();
        }
    }

    function prefetchAssets() {
        var resources = [].concat(
            scripts.map(function(url) {
                return [url, 'script'];
            }),
            styles.map(function(url) {
                return [url, 'style'];
            }),
            fontPrefetchUrls.map(function(url) {
                return [url, 'font'];
            }),
            imgPrefetchUrls.map(function(url) {
                return [url, 'image'];
            })
        );
        var index = 0;
        (function next() {
            var res = resources[index++];
            if (res) prefetch(res[0], res[1], next);
        })();
    }

    function onLoaded() {
        preconnectAssets();
        prefetchAssets();
    }

    if (document.readyState === 'complete') {
        onLoaded();
    } else {
        addEventListener('load', onLoaded);
    }
})();