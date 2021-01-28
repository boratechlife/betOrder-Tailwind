$(document).ready(function() {
    //Append side conteent to main areas


    var owl = $('.owl-one');
    var owlTwo = $('.owl-two');
    var owlThree = $('.owl-three');
    var fadeOut = $('.fadeOut');
    var owlright = $('.owl-right');


    owl.owlCarousel({
        margin: 10,
        nav: false,
        navContainerClass: "nav-owl w-full flex justify-between absolute top-0 h-full items-center",
        loop: true,
        navClass: ['owl-prev h-5 w-5 font-bold text-white', 'nav-next h-5 w-5 font-bold text-white'],
        dotsClass: "  w-full flex justify-end -mt-10 z-50 absolute dot",
        dotClass: "w-5 h-5  bg-secondary mx-1",
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    //owl right 
    owlright.owlCarousel({
        margin: 5,
        nav: true,
        dots: false,
        navContainerClass: "nav-owl w-full flex justify-between absolute top-0 h-full items-center",
        loop: true,
        navClass: ['owl-prev h-5 w-5 font-bold text-white', 'owl-next h-5 w-5 font-bold text-white'],
        autoplay: false,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    })


    //owl-two
    owlTwo.owlCarousel({
        margin: 10,
        nav: true,
        dots: false,
        navContainerClass: "nav-owl w-full flex justify-between absolute top-0 h-full items-center",
        loop: true,
        navClass: ['owl-prev h-5 w-5 font-bold text-white', 'owl-next h-5 w-5 font-bold text-white'],
        dotsClass: "  w-full flex justify-end -mt-10 z-50 absolute dot",
        dotClass: "w-5 h-5  bg-secondary mx-1",
        autoplay: false,
        responsive: {
            0: {
                items: 4
            },
            600: {
                items: 8
            },
            1000: {
                items: 10
            }
        }
    })


    //owl-two
    owlThree.owlCarousel({
        margin: 10,
        nav: true,
        dots: false,
        navContainerClass: "nav-owl w-full flex justify-between absolute top-0 h-full items-center",
        loop: true,
        navContainer: "#navcontainer",
        navClass: ['owl-prev h-5 w-5 font-bold text-white', 'owl-next h-5 w-5 font-bold text-white'],
        dotsClass: "  w-full flex justify-end -mt-10 z-50 absolute dot",
        dotClass: "w-5 h-5  bg-secondary mx-1",
        autoplay: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 2
            }
        }
    })


    // fadeout
    fadeOut.owlCarousel({
        margin: 10,
        nav: false,
        dots: false,
        animateOut: 'fadeOut',
        loop: true,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });


})

// Circle progress

$('.first.circle').circleProgress({
    startAngle: -Math.PI / 4 * 3,
    value: 0.5,
    lineCap: 'round',
    fill: { color: '#1017d9' }
});