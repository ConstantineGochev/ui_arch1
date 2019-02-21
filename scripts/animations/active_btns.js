function active_btns(selector, className) {
    let nav_items = selector
    $('a[href="#banner-container"]').addClass(className)

}

export {
    active_btns,
}