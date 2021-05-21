$(document).ready(function () {

    $('.showmenu').on('click' , function(e){
        e.preventDefault();
        $('.menu').toggleClass('menu-active');
    });
    $('.fa-heart').on('click' , function(e){
        e.preventDefault();
        $(this).toggleClass('far');
        $(this).toggleClass('fas');
    });
});