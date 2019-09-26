/* Меню моб.версия */
var menu_toogle = document.querySelector('.main-nav__toggle');
var menu_wrapper = document.querySelector('.main-nav__wrapper');
var section_stats = document.querySelector('.stats');

menu_toogle.addEventListener('click', function(e){
    e.preventDefault(); /* отменит действие по умолчанию */
    /*если меню открыто - закрываем */
    if(menu_toogle.classList.contains('main-nav__toggle--active')){
        menu_toogle.classList.remove('main-nav__toggle--active');
        menu_wrapper.classList.remove('main-nav--open');
        menu_wrapper.classList.add('main-nav--close');
        section_stats.classList.remove('stats--margin-top');
    }
    /*если нет - открываем */
    else{
        menu_toogle.classList.add('main-nav__toggle--active');
        menu_wrapper.classList.remove('main-nav--close');
        menu_wrapper.classList.add('main-nav--open');
        section_stats.classList.add('stats--margin-top');
        
    }
});

/* Новости */
var news_list = document.querySelector(".news__list--not-all");
var btn_news = document.querySelector(".news__to-all");

btn_news.addEventListener('click', function(e){
    e.preventDefault(); /* отменит действие по умолчанию */
    /*если открыты все новости - закрываем */
    if(news_list.classList.contains('news__list--full')){
        news_list.classList.remove('news__list--full');
        news_list.classList.add('news__list--not-all');
        btn_news.textContent = "Показать все";        

    }
    /*если нет - открываем */
    else{
        news_list.classList.add('news__list--full');
        news_list.classList.remove('news__list--not-all');
        btn_news.textContent = "Скрыть";
    }
});

/* Слайдер отзывы */


var slideIndexReview = 1;
showSlidesReview(slideIndexReview);

function currentSlideReview(n) {
    showSlidesReview(slideIndexReview = n);
}

/* Основная функция слайдера */
function showSlidesReview(n) {
    var i;
    var slidesReview = document.querySelectorAll(".review__item");
    var dotsReview = document.querySelectorAll(".reviews__toogles .slider__toogle");






    if (n > slidesReview.length) {
      slideIndexReview = 1
    }
    if (n < 1) {
        slideIndexReview = slidesReview.length
    }
    for (i = 0; i < slidesReview.length; i++) {
        slidesReview[i].style.display = "none";
    }
    for (i = 0; i < dotsReview.length; i++) {
        dotsReview[i].className = dotsReview[i].className.replace(" active", "");
    }
    slidesReview[slideIndexReview - 1].style.display = "flex";
    dotsReview[slideIndexReview - 1].className += " active";
}

var viewport = document.querySelector(".page-wrapper");
var viewportWidth = viewport.clientWidth;
if (viewportWidth < 767){
    /*********************************** Слайдер преимуществ *********************************** /
    /* Индекс слайда по умолчанию */
    var slideIndexAdvantages = 1;
    showSlidesAdvantages(slideIndexAdvantages);
    /* Устанавливает текущий слайд */
    function currentSlideAdvantages(n) {
        showSlidesAdvantages(slideIndexAdvantages = n);
    }
    /* Основная функция слайдера */
    function showSlidesAdvantages(n) {
        var i;
        var slidesAdvantages = document.querySelectorAll(".advantages__item.slider__item");
        var dotsAdvantages = document.getElementsByClassName("slider__toogle");
        if (n > slidesAdvantages.length) {
        slideIndexAdvantages = 1
        }
        if (n < 1) {
            slideIndexAdvantages = slidesAdvantages.length
        }
        for (i = 0; i < slidesAdvantages.length; i++) {
            slidesAdvantages[i].style.display = "none";
        }
        for (i = 0; i < dotsAdvantages.length; i++) {
            dotsAdvantages[i].className = dotsAdvantages[i].className.replace(" active", "");
        }
        slidesAdvantages[slideIndexAdvantages - 1].style.display = "block";
        dotsAdvantages[slideIndexAdvantages - 1].className += " active";
    }
}

/* обновить страницу, если ширина окна браузера изменилась */
var oldWidth = window.innerWidth;
window.onresize = function () {
    var newWidth = window.innerWidth;
    if (newWidth != oldWidth) {
        location.reload();
        oldWidth = newWidth;
    }
};
