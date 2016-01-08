/* 
   CTA SLIDER CONSTRUCTOR FUNCTION 
   ========================================================================== */


function ctaSlider(el) {

    this.el = el;
    el = $(el);
    var maxSlides = 3;
    var init = 0;

    this.slideWidthFunction = function() {
        var sliderParentWidth = $(el).parent().width();
        var slideWidth = sliderParentWidth / maxSlides;
        return slideWidth;
    }

    this.sliderConfig = function() {
        var slideWidth = this.slideWidthFunction();
        var config = {
            auto: true,
            controls: true,
            pager: false,
            speed: 1500,
            pause: 6000,
            minSlides: 2,
            maxSlides: maxSlides,
            slideWidth: slideWidth,
            slideMargin: 0,
            moveSlides: maxSlides,
            infiniteLoop: true
        }
        return config;
    }

    this.sliderInit = function() {
        var config = this.sliderConfig();
        var slider = el.bxSlider(config);
        return slider;
    }

    this.sliderReload = function(sliderObject) {
        var config = this.sliderConfig();
        sliderObject.reloadSlider(config);
        console.log(sliderObject);
    }
}


/* 
   Combine all functions above into one function to be called on load and resize
   ========================================================================== */


var ctaSlider1 = new ctaSlider('.ctaSlider .sliderContainer');
var slider1 = ctaSlider1.sliderInit();

loadAndResizeFunctions = function() {
    equalHeights('.equalHeight');
    halfHeightFunction('.cta_box_1 .halfHeight');
    // ctaSlider('.ctaSlider .sliderContainer');

}

loadFunctions = function() {

}

resizeFunctions = function() {
    ctaSlider1.sliderReload(slider1);
}


/* ==========================================================================
   
   Document ready & Resize functions

   ========================================================================== */


$(document).ready(function() {
    loadAndResizeFunctions();
    loadFunctions();
})


$(window).on('resize', function() {
    loadAndResizeFunctions();
    resizeFunctions();
})