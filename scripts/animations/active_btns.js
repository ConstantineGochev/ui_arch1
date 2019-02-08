
function active_btns(selector,className) {
    let nav_items = selector

    nav_items.each(function (index) {

        $(this).click(() => {
            nav_items.each(function () {
                $(this).removeClass(`${className}`)
            })
            $(this).addClass(`${className}`)
        })
    })
}

export {
    active_btns,
}