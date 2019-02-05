function _init_toggle_menu() {
    toggle_menu()
}
// Creating Toggle Menu.

function toggle_menu() {
    console.log('asd')
    
    let toggle_btn = $('#menu-container > p')
    console.log(toggle_btn)
    let modal_and_close_icon = $('#close-icon-container > i, #modal-window')

    let mobile_menu = $('#mobile-menu');
    let modal_window = $('#modal-window')
    console.log(modal_window)
    toggle_btn.click(() => { open_mobile_menu(modal_window, mobile_menu) })
    modal_and_close_icon.click(() => { close_mobile_menu(modal_window, mobile_menu) })

    function open_mobile_menu(modal_window, mobile_menu) {
        modal_window.show()

        mobile_menu.animate({
            left: '0%'
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
    _init_toggle_menu,
}