
function active_btns(selector) {
    let nav_items = selector

    nav_items.each(function (index) {

        $(this).click(() => {
            nav_items.each(function () {
                $(this).removeClass('active')
            })
            $(this).addClass('active')
        })
    })
}

export {
    active_btns,
}