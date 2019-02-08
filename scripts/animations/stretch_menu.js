function stretch_menu(selector, btns_selector) {
    $(window).scroll(function() {

        if ($(window).scrollTop() > 50) {
            selector.removeClass('shrink-nav')
            selector.addClass('enlarge-nav')

            btns_selector.addClass('transform-text')
            btns_selector.removeClass('not-transform-text')
        }
        else {
            selector.removeClass('enlarge-nav')
            selector.addClass('shrink-nav')   

            btns_selector.addClass('not-transform-text')
            btns_selector.removeClass('transform-text')
        }
    })
}

export {
    stretch_menu,
}