function active_btns(selector, className) {
    let nav_items = selector

    nav_items.each(function (index) {

        $(this).click(() => {
            console.log(6)
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