function hover_btns(regular_btns, special_btns) {

    regular_btns.hover(
        function () {
            if (!$(this).hasClass('active-reg-nav-btn')) {
                $(this).addClass('reg-btn-hover-effect')
            }
        }, function () {
            $(this).removeClass('reg-btn-hover-effect')
        })

    special_btns.hover(
        function () {
            $(this).addClass('active-special-btn')
        }, function () {
            $(this).removeClass('active-special-btn')
        })
}

export {
    hover_btns
}