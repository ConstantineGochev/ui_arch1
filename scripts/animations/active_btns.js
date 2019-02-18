function active_btns(selector, className) {
    let nav_items = selector
    $('a[href="#banner-container"]').addClass(className)

    nav_items.each(function () {

        $(this).click(() => {
            nav_items.removeClass(className)

            $(this).addClass(className)
        })
    })

    function active_mobile_menu_btns(selector) {
        
    }
}

export {
    active_btns,
}