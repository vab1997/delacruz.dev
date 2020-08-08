
// Credits to Miguel Ángel Durán:
// https://midu.dev/cargar-google-analytics-de-forma-optima/
(function (a, b, c) {
  var d = a.history,
    e = document,
    f = navigator || {},
    g = localStorage,
    h = encodeURIComponent,
    i = d.pushState,
    k = function () {
      return Math.random().toString(36);
    },
    l = function () {
      return g.cid || (g.cid = k()), g.cid;
    },
    m = function (r) {
      var s = [];
      for (var t in r)
        r.hasOwnProperty(t) && void 0 !== r[t] && s.push(h(t) + "=" + h(r[t]));
      return s.join("&");
    },
    n = function (r, s, t, u, v, w, x) {
      var z = "https://www.google-analytics.com/collect",
        A = m({
          v: "1",
          ds: "web",
          aip: c.anonymizeIp ? 1 : void 0,
          tid: b,
          cid: l(),
          t: r || "pageview",
          sd:
            c.colorDepth && screen.colorDepth
              ? screen.colorDepth + "-bits"
              : void 0,
          dr: e.referrer || void 0,
          dt: e.title,
          dl: e.location.origin + e.location.pathname + e.location.search,
          ul: c.language ? (f.language || "").toLowerCase() : void 0,
          de: c.characterSet ? e.characterSet : void 0,
          sr: c.screenSize
            ? (a.screen || {}).width + "x" + (a.screen || {}).height
            : void 0,
          vp:
            c.screenSize && a.visualViewport
              ? (a.visualViewport || {}).width +
              "x" +
              (a.visualViewport || {}).height
              : void 0,
          ec: s,
          ea: t,
          el: u,
          ev: v,
          exd: w,
          exf: "undefined" != typeof x && !1 == !!x ? 0 : void 0
        });
      if (f.sendBeacon) f.sendBeacon(z, A);
      else {
        var y = new XMLHttpRequest();
        y.open("POST", z, !0), y.send(A);
      }
    };
  (d.pushState = function (r) {
    return (
      "function" == typeof d.onpushstate && d.onpushstate({ state: r }),
      setTimeout(n, c.delay || 10),
      i.apply(d, arguments)
    );
  }),
    n()
})(window, "UA-141784503-1", {
  anonymizeIp: false,
  colorDepth: true,
  characterSet: true,
  screenSize: true,
  language: true
});

var callToActions = window.document.querySelectorAll("[data-tracking]");

if (callToActions && callToActions.length) {
  callToActions.forEach(function (trackedElement) {
    trackedElement.addEventListener("click", function () {
      gtag("event", "click", {
        event_category: "Call to Action",
        event_label: trackedElement.dataset.tracking,
      });
    });
  });
}

WebFontConfig = {
  google: { families: ['Open+Sans:300,400,600,700', 'PT+Serif:400,700'] }
};
(function () {
  var wf = document.createElement('script');
  wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
  wf.type = 'text/javascript';
  wf.async = 'true';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(wf, s);
})();