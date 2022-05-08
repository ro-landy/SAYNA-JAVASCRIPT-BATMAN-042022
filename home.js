$(document).ready(function(){

    // Test

    // Scroll event
    window.onscroll = function() {

        // Scroll aside
        $('aside').addClass('aside_move')
        $('h1').addClass('translate_title')

        setTimeout(() => {
            $('aside').removeClass('aside_move')
            $('h1').removeClass('translate_title')
        }, 1000)
    };
    
    // Change hover logohome
    $('#logohome').on('mouseenter',function(){
        $('#logohome img').attr('src', 'assets/logos/logohome_yellow.png')
    })
    $('#logohome').on('mouseleave',function(){
        $('#logohome img').attr('src', 'assets/logos/logohome.png')
    })

    // Change hover aside
    $('aside img').on('mouseenter',function(){
        $('aside a:first-child img').mouseenter(() => $('aside a:first-child img').attr('src', 'assets/logos/logo_bat_flèche_yellow.png'))
        $('aside img:nth-child(2)').mouseenter(() => $('aside img:nth-child(2)').attr('src', 'assets/logos/icon_facebook_yellow.png'))
        $('aside img:nth-child(3)').mouseenter(() => $('aside img:nth-child(3)').attr('src', 'assets/logos/icon_ig_yellow.png'))
        $('aside img:nth-child(4)').mouseenter(() => $('aside img:nth-child(4)').attr('src', 'assets/logos/icon_tw_yellow.png'))
        $('aside a:last-child img').mouseenter(() => $('aside a:last-child img').attr('src', 'assets/logos/logo_bat_flèche_2_yellow.png'))
    })
    $('aside img').on('mouseleave',function(){
        $('aside a:first-child img').mouseleave(() => $('aside a:first-child img').attr('src', 'assets/logos/logo_bat_flèche.png'))
        $('aside img:nth-child(2)').mouseleave(() => $('aside img:nth-child(2)').attr('src', 'assets/logos/icon_facebook.png'))
        $('aside img:nth-child(3)').mouseleave(() => $('aside img:nth-child(3)').attr('src', 'assets/logos/icon_ig.png'))
        $('aside img:nth-child(4)').mouseleave(() => $('aside img:nth-child(4)').attr('src', 'assets/logos/icon_tw.png'))
        $('aside a:last-child img').mouseleave(() => $('aside a:last-child img').attr('src', 'assets/logos/logo_bat_flèche_2.png'))
    })

    // Change hover footer
    $('figure #icon').on('mouseenter', () => {
        $('#icon img:nth-child(1)').mouseenter(() => $('#icon img:nth-child(1)').attr('src', 'assets/logos/logo_sayna_yellow.png'))
        $('#icon img:nth-child(2)').mouseenter(() => $('#icon img:nth-child(2)').attr('src', 'assets/logos/icon_x_yellow.png'))
        $('#icon img:nth-child(3)').mouseenter(() => $('#icon img:nth-child(3)').attr('src', 'assets/logos/icon_DC_yellow.png'))
        $('#icon img:nth-child(4)').mouseenter(() => $('#icon img:nth-child(4)').attr('src', 'assets/logos/icon_facebook_yellow.png'))
        $('#icon img:nth-child(5)').mouseenter(() => $('#icon img:nth-child(5)').attr('src', 'assets/logos/icon_ig_yellow.png'))
        $('#icon img:nth-child(6)').mouseenter(() => $('#icon img:nth-child(6)').attr('src', 'assets/logos/icon_tw_yellow.png'))
    })
    $('figure #icon').on('mouseleave', () => {
        $('#icon img:nth-child(1)').mouseleave(() => $('#icon img:nth-child(1)').attr('src', 'assets/logos/logo_sayna_white.png'))
        $('#icon img:nth-child(2)').mouseleave(() => $('#icon img:nth-child(2)').attr('src', 'assets/logos/icon_x.png'))
        $('#icon img:nth-child(3)').mouseleave(() => $('#icon img:nth-child(3)').attr('src', 'assets/logos/icon_DC.png'))
        $('#icon img:nth-child(4)').mouseleave(() => $('#icon img:nth-child(4)').attr('src', 'assets/logos/icon_facebook.png'))
        $('#icon img:nth-child(5)').mouseleave(() => $('#icon img:nth-child(5)').attr('src', 'assets/logos/icon_ig.png'))
        $('#icon img:nth-child(6)').mouseleave(() => $('#icon img:nth-child(6)').attr('src', 'assets/logos/icon_tw.png'))
    })

    // Cinema mouse enter 
    $('main .cinema article').mouseenter(() => {
        // robert_pattinson
        $('main .cinema article:nth-child(1) img').mouseenter(() => {
            setTimeout(()=>{
                $('#robert_pattinson').addClass('d-flex justify-content-around align-items-center')
                $('#robert_pattinson').removeClass('d-none')
            }, 100)
        });
        // christian_bale
        $('main .cinema article:nth-child(2) img').mouseenter(() => {
            setTimeout(()=>{
                $('#christian_bale').addClass('d-flex justify-content-around align-items-center')
                $('#christian_bale').removeClass('d-none')
            }, 100)
        });
         // ben_affleck
         $('main .cinema article:nth-child(3) img').mouseenter(() => {
            setTimeout(()=>{
                $('#ben_affleck').addClass('d-flex justify-content-around align-items-center')
                $('#ben_affleck').removeClass('d-none')
            }, 100)
        });
    })

    // cinema mouse leave
    $('main .cinema article').mouseleave(() => {
        $('main .cinema article:nth-child(1)').mouseleave(() => {
            $('#robert_pattinson').addClass('d-none')
            $('#robert_pattinson').removeClass('d-flex justify-content-around align-items-center')
        });
        $('main .cinema article:nth-child(2)').mouseleave(() => {
            $('#christian_bale').addClass('d-none')
            $('#christian_bale').removeClass('d-flex justify-content-around align-items-center')
        });
        $('main .cinema article:nth-child(3)').mouseleave(() => {
            $('#ben_affleck').addClass('d-none')
            $('#ben_affleck').removeClass('d-flex justify-content-around align-items-center')
        });
    })

    // Carousel cinema
    $("#slider_image").carousel({interval: 3000}); 

    // Cinema mouse enter 
    $('main .nemesis article').mouseenter(() => {
        // robert_pattinson
        $('main .nemesis article:nth-child(1) img').mouseenter(() => {
            setTimeout(()=>{
                $('#paul_dano').addClass('d-flex justify-content-around align-items-center')
                $('#paul_dano').removeClass('d-none')
            }, 100)
        });
        // christian_bale
        $('main .nemesis article:nth-child(2) img').mouseenter(() => {
            setTimeout(()=>{
                $('#heath_ledger').addClass('d-flex justify-content-around align-items-center')
                $('#heath_ledger').removeClass('d-none')
            }, 100)
        });
         // ben_affleck
         $('main .nemesis article:nth-child(3) img').mouseenter(() => {
            setTimeout(()=>{
                $('#ray_porter').addClass('d-flex justify-content-around align-items-center')
                $('#ray_porter').removeClass('d-none')
            }, 100)
        });
    })

    // nemesis mouse leave
    $('main .nemesis article').mouseleave(() => {
        $('main .nemesis article:nth-child(1)').mouseleave(() => {
            $('#paul_dano').addClass('d-none')
            $('#paul_dano').removeClass('d-flex justify-content-around align-items-center')
        });
        $('main .nemesis article:nth-child(2)').mouseleave(() => {
            $('#heath_ledger').addClass('d-none')
            $('#heath_ledger').removeClass('d-flex justify-content-around align-items-center')
        });
        $('main .nemesis article:nth-child(3)').mouseleave(() => {
            $('#ray_porter').addClass('d-none')
            $('#ray_porter').removeClass('d-flex justify-content-around align-items-center')
        });
    })

    // Carousel multimedia
    $('#icon_next').click(function(){
        $("#slider_multimedia").carousel('next'); 
    })
    $('#icon_prev').click(() => {
        $("#slider_multimedia").carousel('prev'); 
    })

    // checkbox
    $('#check').click(() => {
        $('#check').hide()
        $('#envelop').removeClass('d-none')
    })

    // slider text footer
    $("#slider_footer").carousel({interval: 3000}); 
    
})