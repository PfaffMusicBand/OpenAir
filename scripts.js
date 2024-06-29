document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed');

    const scrollToTopButton = document.getElementById('header a[href="#programme"]');
    const acceptCookiesButton = document.getElementById('accept-cookies');
    const cookieBanner = document.getElementById('cookie-banner');
    const logoLink = document.querySelector('header a[href="#presentation-pfaff"]');

    if (acceptCookiesButton) {
        acceptCookiesButton.addEventListener('click', function() {
            console.log('Accept cookies button clicked');
            if (cookieBanner) {
                cookieBanner.style.display = 'none';
                console.log('Cookie banner hidden');
            } else {
                console.error('Cookie banner not found');
            }
        });
    } else {
        console.error('Accept cookies button not found');
    }

    if (logoLink) {
        logoLink.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = logoLink.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    } else {
        console.error('Logo link not found');
    }
});
