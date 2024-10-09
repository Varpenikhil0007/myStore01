(function() {
    var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
    var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/polyfills.IegWBDja.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/app.DsH9QYNm.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/OnePage.Di4S0HRo.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/DeliveryMethodSelectorSection.CYuMZ-Es.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/useUnauthenticatedErrorModal.Y1cf8G1s.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/LegacyVaultedShippingMethods.tkGGLsxl.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/Rollup.Cv7dA9-W.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/SubscriptionPriceBreakdown.DLfvByH6.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/RageClickCapture.DlpMbH-7.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/ShopPayLogo.rVma1zey.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/PurchaseOptionsAgreement.Dp_DSl7d.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/PickupPointCarrierLogo.lgq6dLqw.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/hooks.BbxvSlLb.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/VaultedPayment.DaR8TrUs.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/Option.bemVuxKj.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/OnePageModal.C1CkXjH-.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/useShowShopPayOptin.D2KeHv8d.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/Section.CKG_FtOy.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/useGooglePaySdk.NEW9P-GG.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/ShopPayLoginLoader.C4iYiBYS.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/publishMessage.BYl0cg7Q.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/PayButtonSection.BTwj57Nt.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/context.COU0L3aE.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/DutyOptions.CzMHx4lv.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/useAmazonContact.Dc1hr5Ut.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/StockProblemsLineItemList.DTM5ve1Z.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/component-ShopPayVerificationSwitch.BCoa4Npm.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/index.CoVPx_4k.js"];
    var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/app.C5brhKqI.css", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/OnePage.BL1uXB7_.css", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/DeliveryMethodSelectorSection.B4_rfmEs.css", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/Rollup.o9Mx-fKL.css", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/SubscriptionPriceBreakdown.Bqs0s4oM.css", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/RageClickCapture.DnkQ4tsk.css", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/ShopPayLogo.D_HPU8Dh.css", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/PickupPointCarrierLogo.C0wRU6wV.css", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/VaultedPayment.-UsM8FFz.css", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/Option.CFr5yw-q.css", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/Section.sQehCocD.css", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/ShopPayLoginLoader.CjGSo8kt.css", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/PayButtonSection.DF7trkKf.css", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/DutyOptions.Bd1Z60K2.css", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/useAmazonContact.D-Ox6Dnf.css", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/StockProblemsLineItemList.CxdIQKjw.css", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/ShopPayVerificationSwitch.CAxiAssW.css"];
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