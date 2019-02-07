function stretch_menu(selector) {
    $(window).scroll(function() {

        if ($(window).scrollTop() > 60) {
            selector.removeClass('shrink-nav')
            selector.addClass('enlarge-nav')
        }
        else {
            selector.removeClass('enlarge-nav')
            selector.addClass('shrink-nav')   
        }
    })
}

export {
    stretch_menu,
}