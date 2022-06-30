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
    if( wScroll > woffset -750)
    {
        $("#scrollNave").css('background-color','#969696');
        $("a.nav-link").css('color','black');
        $("#scrollImg").attr('src','images/bakery-color.png');

    }
    else
    {
        $('#scrollNave').css('background-color','transparent');
        $("a.nav-link").css('color','#fff');
        $("#scrollImg").attr('src','images/bakery-light-1.png');
    }

})

