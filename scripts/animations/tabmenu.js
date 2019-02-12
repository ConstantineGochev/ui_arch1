function tab_item_click() {
    $('#tabs > div:nth-child(2)').addClass('active')
    $('.tabmenu-item:nth-child(1)').css({ 'background': 'blue' })

    for (let i = 2; i < 8; i++) {
        $(`.tabmenu-item:nth-child(${i - 1})`).click(function () {

            if (!$(`#tabs > div:nth-child(${i})`).hasClass('active')) {

                $('.tabs_item').removeClass('active')
                $(`#tabs > div:nth-child(${i})`).addClass('active')

                $('.tabmenu-item').css({ 'background': '#005661' })
                $(`.tabmenu-item:nth-child(${i - 1})`).css({
                    'background': 'blue',
                    'transition': 'background 1s'
                })
            }
        })
    }
}

export {
    tab_item_click,
}