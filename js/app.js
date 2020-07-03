$(document).ready(function(){


    $('#profile_ripple').ripples({
        resolution: 512,
        dropRadius:10
    });

    const bars = document.querySelectorAll('.progress_bar');

    bars.forEach(function(bar){
        let percentage = bar.dataset.percent;
        let tooltip = bar.children[0];
        tooltip.innerText = percentage + '%';
        bar.style.width = percentage + '%';
    })

    // image filter

    var $wrapper = $('.portfolio_wrapper');

    // Intialize isotope

    $wrapper.isotope({
        filter : '*',
        layoutMode: 'masonry',
        animationOptions: {
            duration: 750,
            easing: 'linear'   
        }
    });

    let links = document.querySelectorAll('.tabs a');

    links.forEach(link => {
        let seletor = link.dataset.filter;
        link.addEventListener('click', function(e){
            e.preventDefault();



            $wrapper.isotope({
                filter : seletor,
                layoutMode: 'masonry',
                animationOptions: {
                    duration: 750,
                    easing: 'linear'   
                }
            });

            links.forEach(link => {
                link.classList.remove('active');
            })

            e.target.classList.add('active');
        
        });
    })



    //magnify pop up
    $('.magnify').magnificPopup({
        type: 'image',
        gallery: {
            enable : true
        },
        zoom: {
            enable : true
        }
    });


    //Slider


    $('.slider').slick({
        arrows: false,
        autoplay:true
    });

 });