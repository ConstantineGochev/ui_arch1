function stretch_menu(selector) {
    let catch_first_page_load = true;

    $(window).scroll(function() {

        if ($(window).scrollTop() > 50) {
            catch_first_page_load = false;

            if (selector.hasClass('shrink-nav')) {
                selector.removeClass('shrink-nav')
            }
            selector.addClass('enlarge-nav')
        }
        else {
            if (!catch_first_page_load ) {
                selector.removeClass('enlarge-nav')
                selector.addClass('shrink-nav') 
            }
        }

        
    })
}

export {
    stretch_menu,
}