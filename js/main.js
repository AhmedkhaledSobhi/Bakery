$(document).ready(function(){
    $('#loading i').fadeOut(1000,function(){
        $('#loading').fadeOut(1000,function(){
            $('#loading').remove();
            $('body').css('overflow-y','auto');
        })
    })
});

let woffset=$('#about').offset().top;

$(window).scroll(function(){
    let wScroll=$(window).scrollTop();
    if( wScroll > woffset -650)
    {
        $("#scrollNave").css('background-color','#8e7754');
        $("a.nav-link").css('color','black');
        $("#scrollImg").attr('src','images/bakery-color.png');
        $('#slideUp').fadeIn(1000);
    }
    else
    {
        $('#scrollNave').css('background-color','transparent');
        $("a.nav-link").css('color','#fff');
        $("#scrollImg").attr('src','images/bakery-light-1.png');
        $('#slideUp').fadeOut(500)

    }

})

