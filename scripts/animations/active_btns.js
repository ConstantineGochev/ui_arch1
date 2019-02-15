function active_btns(selector, className) {
    let nav_items = selector
    $('a[href="#banner-container"]').addClass(className)
    nav_items.each(function (index) {

        $(this).click(() => {

            nav_items.each(function () {
                $(this).removeClass(`${className}`)
            })
            if (!$(this).hasClass('special-btn')) {
                $(this).addClass(`${className}`)
            }
        })
    })
}

export {
    active_btns,
}