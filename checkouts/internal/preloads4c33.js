
    (function() {
      var cdnOrigin = "https://cdn.shopify.com";
      var scripts = ["/cdn/shopifycloud/checkout-web/assets/c1/polyfills-legacy.CO4mfZCN.js","/cdn/shopifycloud/checkout-web/assets/c1/app-legacy.B21m_jHo.js","/cdn/shopifycloud/checkout-web/assets/c1/pt-BR-legacy.BWC2x0x_.js","/cdn/shopifycloud/checkout-web/assets/c1/page-OnePage-legacy.bNhMiJDP.js","/cdn/shopifycloud/checkout-web/assets/c1/LocalizationExtensionField-legacy.psvJ2vnt.js","/cdn/shopifycloud/checkout-web/assets/c1/ShopPayOptInDisclaimer-legacy.CLPxoF5Y.js","/cdn/shopifycloud/checkout-web/assets/c1/DeliveryMethodSelectorSection-legacy.BfJXC394.js","/cdn/shopifycloud/checkout-web/assets/c1/useEditorShopPayNavigation-legacy.8PBWn4B8.js","/cdn/shopifycloud/checkout-web/assets/c1/VaultedPayment-legacy.DgIYO8ud.js","/cdn/shopifycloud/checkout-web/assets/c1/Section-legacy.TGnb3XPf.js","/cdn/shopifycloud/checkout-web/assets/c1/SeparatePaymentsNotice-legacy.CyW4ecH8.js","/cdn/shopifycloud/checkout-web/assets/c1/ShipmentBreakdown-legacy.C2OCWclb.js","/cdn/shopifycloud/checkout-web/assets/c1/MerchandiseModal-legacy.CauHMNFJ.js","/cdn/shopifycloud/checkout-web/assets/c1/StackedMerchandisePreview-legacy.BfqMMJ_E.js","/cdn/shopifycloud/checkout-web/assets/c1/component-ShopPayVerificationSwitch-legacy.BZLUBwFp.js","/cdn/shopifycloud/checkout-web/assets/c1/useSubscribeMessenger-legacy.BSeM_3y1.js","/cdn/shopifycloud/checkout-web/assets/c1/index-legacy.MwY_ZeF0.js","/cdn/shopifycloud/checkout-web/assets/c1/PayButtonSection-legacy.BWmtXNjf.js"];
      var styles = [];
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
        var resources = [cdnOrigin].concat(fontPreconnectUrls);
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
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        function run() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        }
        var next = (self.requestIdleCallback || setTimeout).bind(self, run);
        next();
      }

      function onLoaded() {
        try {
          if (parseFloat(navigator.connection.effectiveType) > 2 && !navigator.connection.saveData) {
            preconnectAssets();
            prefetchAssets();
          }
        } catch (e) {}
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  