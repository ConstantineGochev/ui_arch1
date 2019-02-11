function hover_btns(regular_btns, special_btns) {

    regular_btns.hover(
        function () {
            $(this).addClass('reg-btn-hover-effect')
        }, function () {
            $(this).removeClass('reg-btn-hover-effect')
        })
}

export {
    hover_btns
}