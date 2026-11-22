/* QUREXION Besucherstatistik – ohne Cookies, ohne lokale Speicherung, keine IP wird gespeichert. */
(function () {
  var URL_ = 'https://saqrxqanucedbwpsvhxl.supabase.co/functions/v1/track?apikey=sb_publishable_YjMx-VPZD6ChDy9OgX9IEQ_XEbd2-pt';
  if (navigator.webdriver || /^(localhost|127\.)/.test(location.hostname)) return;
  function send(e) {
    try {
      var q = new URLSearchParams(location.search);
      var tz = ''; try { tz = Intl.DateTimeFormat().resolvedOptions().timeZone || ''; } catch (x) {}
      var body = JSON.stringify({ e: e, p: location.pathname, r: document.referrer || '', u: q.get('utm_source') || q.get('ref') || '', l: navigator.language || '', tz: tz, w: window.innerWidth || 0 });
      if (navigator.sendBeacon) { navigator.sendBeacon(URL_, new Blob([body], { type: 'text/plain' })); return; }
      fetch(URL_, { method: 'POST', body: body, keepalive: true, mode: 'no-cors' });
    } catch (x) {}
  }
  send('view');
  document.addEventListener('click', function (ev) {
    var a = ev.target && ev.target.closest ? ev.target.closest('a[href]') : null;
    if (!a) return;
    var h = a.getAttribute('href') || '';
    if (/\.exe(\?|$)|\/releases/i.test(h)) send('download');
    else if (/app\.qurexion\.com|konto(\.html)?(#|\?|$)/i.test(h)) send('cta');
  }, true);
})();
