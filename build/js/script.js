document.addEventListener('DOMContentLoaded', function(){ 
    var slideIndex = 1;
    showSlide(slideIndex);

    document.querySelector('.prev').addEventListener('click', function(){
        showSlide(slideIndex -= 1);  
    });
    document.querySelector('.next').addEventListener('click', function(){
        showSlide(slideIndex += 1);
    });

    function showSlide(index){
        var allSlides = document.getElementsByClassName('video_preview'),
        length = allSlides.length;
        if (index > length) {
            slideIndex = 1;
        }

        if (index < 1) {
            slideIndex = length
        }

        for(var i = 0; i < length; i++) {
            allSlides[i].style.display = 'none';
        }
        allSlides[slideIndex - 1].style.display = 'flex';
    }
});