function scroll_active_btns() {
    
    $(window).scroll(() => {
        let scrollTop = $(window).scrollTop();
        
        $('#pc_items_ul > li > a').each(function () {
            $(this).removeClass('active-reg-nav-btn')
        })

        if (scrollTop >= 0 && scrollTop <= 600) {
            $('a[href="#banner-container"]').addClass('active-reg-nav-btn')
        }
        else if (scrollTop >= 601 && scrollTop <= 900){
            $('a[href="#tabs"]').addClass('active-reg-nav-btn')
        }
    })
}

export {
    scroll_active_btns
}