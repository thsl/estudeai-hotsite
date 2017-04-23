// jQuery: collapse navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 900, 'easeInOutExpo');
        event.preventDefault();
    });
});


// inicia o wow - gerenciar as animações no scroll
new WOW().init();

// inicia o rellax - efeitos paralax
var rellax = new Rellax('.rellax', {
    center: true
});

//jQuery para a página rolar suavemente (requer jquerye-asing)
$(function () {
    $('a.page-scroll').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});


// Efeito paralax (este jquery usa os atributos: data-type="background" data-speed="xx")

$(document).ready(function(){

    var $window = $(window); //You forgot this line in the above example

    $('section[data-type="background"]').each(function(){
        var $bgobj = $(this); // assigning the object
        $(window).scroll(function() {
            var yPos = -($window.scrollTop() / $bgobj.data('speed'));
// Put together our final background position
            var coords = '50% '+ yPos + 'px';
// Move the background
            $bgobj.css({ backgroundPosition: coords });
        });
    });
});



$(document).ready(function() {
    $('.carousel').carousel({
        interval: false
    });
});