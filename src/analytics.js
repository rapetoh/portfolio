// analytics.js
export function trackOutboundLink(label) {
  if (window.gtag) {
    window.gtag('event', 'click', {
      event_category: 'Outbound Link',
      event_label: label,
    });
  } else {
    console.warn('gtag not defined');
  }
}
