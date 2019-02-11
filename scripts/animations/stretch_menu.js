function stretch_menu(selector, btns_selector) {
    $(window).scroll(function() {

        if ($(window).scrollTop() > 50) {
            
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