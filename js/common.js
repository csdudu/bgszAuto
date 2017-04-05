$(function() {
    dd = 0;
    $('nav>ul>li').mouseenter(function() {
        $(this).children(".sub").slideDown(200);
    });

    $('nav>ul>li').mouseleave(function() {
        $(this).children(".sub").slideUp(100);
    });

    // 产品左侧导航
    $('.product_nav>.AAA>a').click(function() {
        console.log('ddd');
        $(this).next(".sub").slideDown(200);
        $(this).parent().siblings().children('.sub').slideUp(100);
    });


    /*var resizeTimer = null;
    $(window).on('scroll', function() {
        if (resizeTimer) {
            clearTimeout(resizeTimer)
        }
        resizeTimer = setTimeout(function() {
            //console.log($(document).scrollTop());
            if($(document).scrollTop()>76){
            	$('.wide').addClass('black');
            }else{
            	$('.wide').removeClass('black');

            }

        }, 0);
    });*/


});
