function show_languages_container() {
    let languages_container = $('#languages-container');
    $('#pc_special_items_ul > li:nth-child(3) > a').click(() => {
        if (languages_container.css('display') === 'none') {
            languages_container.fadeIn('slow')
        }
        else {
            languages_container.fadeOut('slow')
        }
    })
}
export {
    show_languages_container
}