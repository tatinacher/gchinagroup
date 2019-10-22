document.addEventListener('DOMContentLoaded', function(){ 
    document.addEventListener('scroll', function() {
        var menu = document.getElementById('main-menu');
        var top = window.pageYOffset || document.documentElement.scrollTop;
        if (top > 0) {
            menu.classList.add('menu__gray');
            menu.style.top = window.innerHeight + 'px';
        } else {
            menu.classList.remove('menu__gray');
            menu.style.top = 0 + 'px';
        }
    });
});