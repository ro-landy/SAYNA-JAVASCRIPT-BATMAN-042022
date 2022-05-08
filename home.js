$(document).ready(function(){

    // Test

    $('h1').mouseover(()=>{
        $('h1')
    })

    // Scroll event
    window.onscroll = function() {
        // Scroll aside
        $('aside').addClass('aside_move')
        setTimeout(() => {
                $('aside').removeClass('aside_move')
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
})