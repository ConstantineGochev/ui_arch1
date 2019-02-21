function bring_to_top() {

    let scrolltop_btn = $('#root > i');

    scrolltop_btn.click(() => document.documentElement.scrollTop = 0)

    window.onscroll = (() => {
        if (document.documentElement.scrollTop > 50) {
            scrolltop_btn.fadeIn('slow')
        }
        else {
            scrolltop_btn.fadeOut('slow')
        }
    })
}
export {
    bring_to_top
}