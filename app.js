(() => {
    /*******************
     * Toggle Navigation
     *******************/

    const nav = document.querySelector('.heading .navigation'),
        overlay = document.querySelector('.overlay'),
        toggleContainer = document.querySelector('.heading .navigation-toggle'),
        toggleIcon  = document.querySelector('.heading .navigation-toggle img');

    toggleContainer.addEventListener('click', () => {
        if(nav.classList.contains('active')) {
            nav.classList.remove('active');
            overlay.classList.remove('active');
            toggleIcon.src = './images/vectors/icons/icon-hamburger.svg';
            document.body.style.overflow = 'auto';
        } else {
            toggleIcon.src = './images/vectors/icons/icon-close.svg';
            nav.classList.add('active');
            overlay.classList.add('active');
            document.body.style.overflow = 'hidden'
        }
    })

    window.addEventListener('resize', () => {
        if(window.innerWidth > 1000) {
            if(nav.classList.contains('active')) {
                nav.classList.remove('active');
                overlay.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        }
    })
})();



/**************************
 * ************************
 * Testimonials Slider*****
 * ************************
 **************************/

(() => {
    const slideBox = document.querySelector('.slider-container .slides-box'),
     indicatorBox = document.querySelector('.section-slider .slider-controls');

    const slides = [...slideBox.children];
    const indicators = [...indicatorBox.children];

    let index = 0;

    const moveToSlide = (activeSlide, activeIndicator, targetSlide, targetIndicator) => {
        //remove active slide from both indicators and slides
        activeSlide.classList.remove('active');
        activeIndicator.classList.remove('active');

        //Add active class to target slides and indicators
        targetSlide.classList.add('active');
        targetIndicator.classList.add('active');
    }

    const moveToNextSlide = (totalSlides, index) => {
        let activeSlide = slideBox.querySelector('.active');
        let activeIndicator = indicatorBox.querySelector('.active');

        if(index === totalSlides.length) {
            index = 0;
        } else {
            index++;
        }
        
        moveToSlide(activeSlide, activeIndicator, slides[index], indicators[index]);
    }

    indicatorBox.addEventListener('click', (e) => {
        if(!e.target.closest('.slider-controls div')) return;
        targetIndex = indicators.findIndex(indicator => e.target === indicator);
        index = targetIndex;

        let targetIndicator = indicators[targetIndex];
        let targetSlide = slides[targetIndex];

        let activeSlide = slideBox.querySelector('.active');
        let activeIndicator = indicatorBox.querySelector('.active');

        moveToSlide(activeSlide, activeIndicator, targetSlide, targetIndicator);

    })

    const autoSlide = setInterval(() => {
        let activeSlide = slideBox.querySelector('.active');
        let activeIndicator = indicatorBox.querySelector('.active');

        index++
        if(index === slides.length) index = 0;

        moveToSlide(activeSlide, activeIndicator, slides[index], indicators[index]);
    }, 8000);

})();

/**
 * Subscription form validation
 */

(() => {
    const email = document.querySelector('.main-footer input');
    const errorNotice = document.querySelector('.email-input .validation-error');
    const submitForm = document.querySelector('.main-footer form');

    function validateEmail(email) {
        return (/^\w([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(email);
    }


    function submitSuccess(message) {
        let div = document.createElement('div');
        div.setAttribute('style', `
            position: fixed;
            text-align: center;
            font-size: 2rem;
            bottom: 40%;
            left: 10%;
            z-index: 1000;
            background-color: hsl(13, 44%, 81%);
        `);
        div.innerHTML = message;

        setTimeout(() => {
            div.parentNode.removeChild(div)
        }, 5000);

        document.body.appendChild(div)
    }


    submitForm.addEventListener('submit', (e) => {
        e.preventDefault();

        if(validateEmail(email.value)) {
            submitSuccess('...Subscribed thank you...');
            email.classList.remove('error');
            errorNotice.innerHTML = '';
            email.value = '';
        } else if(email.value === '') {
            errorNotice.innerHTML = `The 'input' field is empty`;
            email.classList.add('error');
        } else {
            errorNotice.innerHTML = 'please enter a valid email';
            email.classList.add('error');
        }
    })


})();
    