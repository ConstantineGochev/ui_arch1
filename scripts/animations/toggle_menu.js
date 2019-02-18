function toggle_menu() {
    let toggle_btn = $('#menu-container > .toggle-icon')
    let modal_and_close_icon = $('#close-icon-container > i, #modal-window')

    let mobile_menu = $('#mobile-menu');
    let modal_window = $('#modal-window')

    toggle_btn.click(() => open_mobile_menu(modal_window, mobile_menu))
    modal_and_close_icon.click(() => { close_mobile_menu(modal_window, mobile_menu) })

    function open_mobile_menu(modal_window, mobile_menu) {
        modal_window.show()

        mobile_menu.animate({
            left: '0%',
            top: '0%'
        }, 'slow')

        let top_percent = 40;
        for (let i = 0; i < 5; i++) {
            $(`#mobile-items > li:nth-child(${i + 1})`).animate({
                top: `${top_percent}%`
            }, 'slow')

            top_percent -= 6;
        }
    }
    function close_mobile_menu(modal_window, mobile_menu) {
        modal_window.hide()
        mobile_menu.animate({
            left: '-53%'
        }, 'slow')

        for (let i = 0; i < 5; i++) {
            $(`#mobile-items > li:nth-child(${i + 1})`).animate({
                top: `-10%`
            }, 'slow')
        }
    }
}

export {
    toggle_menu,
}