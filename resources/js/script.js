
$(document).ready(function(){

    // Mobile Navigation

    const mainNav = $('#main-nav ul');
    const mainNav_toggler = $('#mobile-nav-toggler');
    const mobileLogo = $('#mobile-main-logo');

    const menuBreakpoint = 760;

    function navConfig() {

        const docWidth = $(document).width();

        if (docWidth <= menuBreakpoint) {
            mainNav.hide();
            mobileLogo.show();
            mainNav_toggler.show();
        } else {
            mainNav.show();
            mobileLogo.hide();
            mainNav_toggler.hide();
        }

    }

    mainNav_toggler.on('click', function(){

        if (mainNav.css('display') === 'none' ) {

            mobileLogo.hide();
            mainNav.show();

        } else {

            mainNav.hide();
            mobileLogo.show();

        }

    });

    $(window).resize(function(){ navConfig(); });

    AOS.init({
        // Global settings:
        disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
        initClassName: 'aos-init', // class applied after initialization
        animatedClassName: 'aos-animate', // class applied on animation
        useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
        disableMutationObserver: false, // disables automatic mutations' detections (advanced)
        debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
        throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
        

        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        offset: 50, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 400, // values from 0 to 3000, with step 50ms
        easing: 'linear', // default easing for AOS animations
        once: true, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    });

});
