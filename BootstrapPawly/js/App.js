/**
 * Created with JetBrains WebStorm.
 * User: yunan.zhao
 * Date: 2013-12-20
 * Time: 3:09 PM
 * To change this template use File | Settings | File Templates.
 */
var navbar_top = 0;


var adjustsize = function(windowwidth){
    navbar_top = $("#last-value-prop").offset().top + $("#last-value-prop").height() - $(window).height() + $("#signup").height();
    console.log(navbar_top);

    if(windowwidth < 768){
        $("#signup-text").css('float', 'none');
        $("#value-prop-1-text").css('width', '100%');
        $("#value-prop-1-img").css('width', '100%');
        $("#value-prop-3-text").css('width', '100%');
        $("#value-prop-3-img").css('width', '100%');
    } else {
        $("#signup-text").css('float', 'right');
        $("#value-prop-1-text").css('width', '50%');
        $("#value-prop-1-img").css('width', '50%');
        $("#value-prop-3-text").css('width', '50%');
        $("#value-prop-3-img").css('width', '50%');
    }

    if(windowwidth >= 352 && windowwidth < 400){
        $("#social-icons").css("display", "none");
    }

    var titlesize = 14 + (windowwidth-300)*0.04;
    $("#tagline-title").css('font-size', titlesize+"px");
    var textsize = 12 + (windowwidth-300)*0.02;
    $("#tagline").css('font-size', textsize+"px");
    $(".left-text h2").css('font-size', titlesize+"px");
    $(".left-text p").css('font-size', textsize+"px");

    var heroHeight = 200 + (windowwidth-300)*(150/725);
    $("#imgHolder").css('height', heroHeight);

    if(windowwidth < 352){
        $("#tagline-title").css('font-size', '13px');
        $("#navbar-winner").css('font-size', '14px');
//        $("#navbar-bottom-text").css('height', '82px');
        $("#tagline").css('width', '90%');
        $("#social-icons").css("display", "none");
        $("#playbutton").css('width', '30px');
        $("#playbutton").css('height', '24px');
        $("#play-button-text").css('margin-left', '50px');
        $("#play-button-text").css('margin-top', '-25px');

    } else if(windowwidth >= 400 && windowwidth < 597){
        $("#navbar-winner").css('font-size', '14px');
//        $("#navbar-bottom-text").css('height', '62px');
        $("#tagline").css('width', '80%');
        $("#social-icons").css("display", "block");
        $("#playbutton").css('width', '36px');
        $("#playbutton").css('height', '30px');
        $("#play-button-text").css('margin-left', '50px');
        $("#play-button-text").css('margin-top', '-27px');
    } else if(windowwidth >= 597 && windowwidth < 685){
        $("#social-icons").css("display", "block");
        $("#navbar-winner").css('font-size', '18px');
//        $("#navbar-bottom-text").css('height', '42px');
        $("#tagline").css('width', '60%');
        $("#playbutton").css('width', '36px');
        $("#playbutton").css('height', '30px');
        $("#play-button-text").css('margin-left', '70px');
        $("#play-button-text").css('margin-top', '-35px');
    } else if(windowwidth >= 685 && windowwidth < 833){
        $("#navbar-readmore").css('float', 'left');
        $("#navbar-winner").css('font-size', '18px');
        $("#tagline").css('width', '60%');
        $("#playbutton").css('width', '58px');
        $("#playbutton").css('height', '42px');
    } else {
        $("#navbar-readmore").css('float', 'right');
        $("#tagline-title").css('letter-spacing', '-0.25px');
//        $("#navbar-bottom-text").css('height', '22px');
        $("#tagline").css('width', '50%');
        $("#playbutton").css('width', '62px');
        $("#playbutton").css('height', '49px');
    }
}

$(document).ready(function () {
    var initwidth = $(window).width();
    adjustsize(initwidth);

    $("#playbutton").hover(function(){
        $("#playbutton").attr("src","img/playbutton_hover@4x.png");
    }, function(){
        $("#playbutton").attr("src","img/playbutton@4x.png");
    })

    $("#email_icon").hover(function(){
        $("#email_icon").attr("src","img/email_icon_hover@2x.png");
    }, function(){
        $("#email_icon").attr("src","img/email_icon@2x.png");
    })

    $("#youtube_icon").hover(function(){
        $("#youtube_icon").attr("src","img/youtube_icon_hover@2x.png");
    }, function(){
        $("#youtube_icon").attr("src","img/youtube_icon@2x.png");
    })

    $("#twitter_icon").hover(function(){
        $("#twitter_icon").attr("src","img/twitter_icon_hover@2x.png");
    }, function(){
        $("#twitter_icon").attr("src","img/twitter_icon@2x.png");
    })

    $("#facebook_icon").hover(function(){
        $("#facebook_icon").attr("src","img/facebook_icon_hover@2x.png");
    }, function(){
        $("#facebook_icon").attr("src","img/facebook_icon@2x.png");
    })

    $( window ).resize(function() {
        var windowwidth = $(window).width();
        console.log(windowwidth);
        adjustsize(windowwidth);

        var signupLeft = $("#signup-form").offset().left + $("#signup-form").width() - 20;
//        var signupTop = $("#signup-form").offset().top + 3;
        if(signupLeft > windowwidth){
            signupLeft = signupLeft - windowwidth/2;
        }
//        $("#input-button").css("left", signupLeft+"px");
//        $("#input-button").css("top", signupTop+"px");
    });
    adjustsize($(window).width());

    $(window).scroll(function (event) {
        var y = $(this).scrollTop();
        navbar_top = $("#specs").offset().top + $("#specs").height() - $(window).height() + $("#signup").height();

        console.log(y+" "+navbar_top);

        if(y>=64 && y<navbar_top){
            $("#signup").addClass("navbar navbar-default navbar-fixed-bottom");
        } else {
            $("#signup").removeClass("navbar navbar-default navbar-fixed-bottom");
        }

    });
});

