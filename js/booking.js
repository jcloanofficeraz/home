/* Book a Call — Calendly height management
   ---------------------------------------------------------
   Goal: the Calendly inline widget should never show its own
   internal vertical scrollbar, on mobile, tablet, or desktop.
   Calendly's script posts a "calendly.page_height" message with
   the real content height every time the view changes (date
   picker open, time slots shown, confirmation screen, etc).
   We read that and set #calendly-embed's height to match, so
   the widget always grows/shrinks to fit its content instead of
   scrolling inside a fixed box. The page itself may scroll —
   only the widget's own inner scrollbar is what we're avoiding. */

(function () {
  var embed = document.getElementById('calendly-embed');
  if (!embed) return;

  function setStartingHeight() {
    // Reasonable height before Calendly's first page_height message
    // arrives, sized to the viewport so there's no big empty gap or
    // premature scrollbar while the widget loads.
    var available = window.innerHeight - 220;
    var starting = Math.max(620, Math.min(available, 900));
    embed.style.height = starting + 'px';
  }

  setStartingHeight();
  window.addEventListener('resize', setStartingHeight);

  window.addEventListener('message', function (event) {
    if (typeof event.origin !== 'string' || event.origin.indexOf('calendly.com') === -1) return;
    var data = event.data;
    if (data && data.event === 'calendly.page_height' && data.payload && data.payload.height) {
      embed.style.height = data.payload.height + 'px';
    }
  });
})();
