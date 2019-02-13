function hover_btns(regular_btns) {

    regular_btns.hover(
        function () {
            if (!$(this).hasClass('active-reg-nav-btn')){
                $(this).addClass('reg-btn-hover-effect')
            }
        }, function () {
            $(this).removeClass('reg-btn-hover-effect')
        })
}

export {
    hover_btns
}