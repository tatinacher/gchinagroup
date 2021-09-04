document.addEventListener('DOMContentLoaded', function(){ 
    var slider = new Slider('slider_reviews', '.reviews');
    slider.init();

    var videoSlider = new VideoSlider('video_preview', '.video');
    videoSlider.init();

});

class Slider {
    constructor(sliderName, blockName) {
        this.slideIndex = 1;
        this.slideName = sliderName;
        this.blockName = blockName;
    }
    init(){
        this.showSlide(this.slideIndex);
        document.querySelector(this.blockName + ' .prev').addEventListener('click', () => this.showSlide(this.slideIndex -= 1));
        document.querySelector(this.blockName + ' .next').addEventListener('click', () => this.showSlide(this.slideIndex += 1));
    }

    showSlide(index){
        var allSlides = document.getElementsByClassName(this.slideName),
        length = allSlides.length;
        if (index > length) {
            this.slideIndex = 1;
        }
    
        if (index < 1) {
            this.slideIndex = length
        }
    
        for(var i = 0; i < length; i++) {
            allSlides[i].style.display = 'none';
        }
        allSlides[this.slideIndex - 1].style.display = 'flex';
    }
}

class VideoSlider {
    constructor(sliderName, blockName) {
        this.slideIndex = 1;
        this.slideName = sliderName;
        this.blockName = blockName;
    }
    init(){
        this.showSlide(this.slideIndex);
        document.querySelector(this.blockName + ' .prev').addEventListener('click', () => this.showSlide(this.slideIndex -= 1));
        document.querySelector(this.blockName + ' .next').addEventListener('click', () => this.showSlide(this.slideIndex += 1));
    }

    showSlide(index){
        var allSlides = document.getElementsByClassName(this.slideName),
        length = allSlides.length;
        if (index > length) {
            this.slideIndex = 1;
        }
    
        if (index < 1) {
            this.slideIndex = length
        }
    
        for(var i = 0; i < length; i++) {
            allSlides[i].style.display = 'none';
        }
        if (this.slideIndex < length) {
            allSlides[this.slideIndex].style.display = 'flex';
            allSlides[this.slideIndex].style.opacity = '0.3';
        }
        allSlides[this.slideIndex - 1].style.display = 'flex';
        allSlides[this.slideIndex - 1].style.opacity = '1';
    }
}