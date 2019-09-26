/* SECOND MENU */
var second_menu_item = document.querySelectorAll('.second-nav__list > .menu-list__item'); 
var overlay = document.querySelector('.overlay');


var count = 0;

[].forEach.call(second_menu_item,function(el){

    function menuOpen() {
        if (el.classList.contains('focus')){
            el.classList.add('active');
            el.classList.remove('focus');
            count = 1;
            overlay.classList.add('active');
        }
    };

    el.addEventListener('mouseover', function(e){
        var second_menu_item_active = document.querySelector('.second-nav__list > .menu-list__item.active'); 

        if( count === 1){
            e.preventDefault(); 

        }
        else{
            e.preventDefault(); 
            el.classList.add('focus');
            setTimeout(menuOpen, 800);
        }
    });

    el.addEventListener('mouseout', function(e){
        e.preventDefault(); 
        el.classList.remove('focus');
    });

});



overlay.addEventListener('click', function(e){
    var second_menu_item_active = document.querySelector('.second-nav__list > .menu-list__item.active'); 
    e.preventDefault(); 
    count = 0;
    second_menu_item_active.classList.remove('active');
    overlay.classList.remove('active');
});







/* Меню моб.версия */

/*
var menu_toogle = document.querySelector('.main-nav__toggle');
var menu_wrapper = document.querySelector('.main-nav__wrapper');
var section_stats = document.querySelector('.stats');

menu_toogle.addEventListener('click', function(e){
    e.preventDefault(); 
    if(menu_toogle.classList.contains('main-nav__toggle--active')){
        menu_toogle.classList.remove('main-nav__toggle--active');
        menu_wrapper.classList.remove('main-nav--open');
        menu_wrapper.classList.add('main-nav--close');
        section_stats.classList.remove('stats--margin-top');
    }
   
    else{
        menu_toogle.classList.add('main-nav__toggle--active');
        menu_wrapper.classList.remove('main-nav--close');
        menu_wrapper.classList.add('main-nav--open');
        section_stats.classList.add('stats--margin-top');
        
    }
});

*/

/* Новости */

/*
var news_list = document.querySelector(".news__list--not-all");
var btn_news = document.querySelector(".news__to-all");

btn_news.addEventListener('click', function(e){
    e.preventDefault(); 
    if(news_list.classList.contains('news__list--full')){
        news_list.classList.remove('news__list--full');
        news_list.classList.add('news__list--not-all');
        btn_news.textContent = "Показать все";        

    }
    
    else{
        news_list.classList.add('news__list--full');
        news_list.classList.remove('news__list--not-all');
        btn_news.textContent = "Скрыть";
    }
});

*/



/* обновить страницу, если ширина окна браузера изменилась */
var oldWidth = window.innerWidth;
window.onresize = function () {
    var newWidth = window.innerWidth;
    if (newWidth != oldWidth) {
        location.reload();
        oldWidth = newWidth;
    }
};
