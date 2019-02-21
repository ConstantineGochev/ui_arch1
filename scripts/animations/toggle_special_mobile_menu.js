function toggle_special_mobile_menu() {
    let toggle_special_btn = $('.fa-ellipsis-v')

    let modal_window = $('#modal-window')

    toggle_special_btn.click(() => open_special_toggle_menu(modal_window))
    modal_window.click(close_special_toggle_menu)

    function open_special_toggle_menu(modal) {
        if (modal.css('display') === 'none') {
            modal.fadeIn('slow');
            $('#special-mobile-items').fadeIn('slow')
        }
        else {
            modal.fadeOut('slow');
            $('#special-mobile-items').fadeOut('slow')
        }
        
    }
    function close_special_toggle_menu() {
        $(this).fadeOut('slow');
            $('#special-mobile-items').fadeOut('slow')
    }
}

export {
    toggle_special_mobile_menu
}