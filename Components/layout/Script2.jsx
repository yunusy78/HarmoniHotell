import React from 'react';
import Script from 'next/script';

const Script2 = () => {
  return (
    <div>
    <Script src="https://code.jquery.com/jquery-3.6.0.min.js"></Script>
    <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></Script>
    <Script src="/lib/wow/wow.min.js"></Script>
    <Script src="/lib/easing/easing.min.js"></Script>
    <Script src="/lib/waypoints/waypoints.min.js"></Script>
    <Script src="/lib/counterup/counterup.min.js"></Script>
    <Script src="/lib/owlcarousel/owl.carousel.min.js"></Script>
    <Script src="/lib/tempusdominus/js/moment.min.js"></Script>
    <Script src="/lib/tempusdominus/js/moment-timezone.min.js"></Script>
    <Script src="/lib/tempusdominus/js/tempusdominus-bootstrap-4.min.js"></Script>
    <Script src="/js/main.js"></Script>
    </div>
  );
};

export default Script2;
