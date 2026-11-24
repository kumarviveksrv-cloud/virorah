/* Microsoft Clarity (session recordings and heatmaps) for virorah.com.
 * Skipped for: anyone who opened a page with ?noclarity=1 (remembered on that browser),
 * and visitors whose browser timezone is in Europe/*, so no Clarity cookie is ever set
 * for EEA, UK or Swiss visitors without a consent banner. */
(function () {
  var CLARITY_ID = 'ziizr88ybh';
  if (window.__vrClarityLoaded) return;
  try {
    if (/[?&]noclarity=1\b/.test(location.search)) localStorage.setItem('vr_no_clarity', '1');
    if (localStorage.getItem('vr_no_clarity')) return;
    var tz = '';
    try { tz = Intl.DateTimeFormat().resolvedOptions().timeZone || ''; } catch (e) {}
    if (/^Europe\//.test(tz)) return;
  } catch (e) { return; }
  window.__vrClarityLoaded = true;
  (function (c, l, a, r, i, t, y) {
    c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments); };
    t = l.createElement(r); t.async = 1; t.src = 'https://www.clarity.ms/tag/' + i;
    y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y);
  })(window, document, 'clarity', 'script', CLARITY_ID);
})();
