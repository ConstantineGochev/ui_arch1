'use strict'
const base_button = (_href_id, _content: string) => $(`<li><a href=${_href_id} class="regular-btn">${_content}</a></li>`)
const special_button = (_content: string) => $(`<li><a class="special-btn">${_content}</a></li>`)
const tabmenu_button = (_content: string) => $(`<li class="tabmenu-item" data-aos="zoom-in" data-aos-duration="1000"><a>${_content}</a></li>`)
const mobile_tabmenu_button = (_content: string) => $(`<li><a>${_content}</a></li>`)
const toggle_special_button = () => $('<i class="fas fa-ellipsis-v"></i>')
const mobile_special_button = (_content: string) => $(`<li class="mobile-special-item"><a href="#">${_content}</a></li>`)
const bring_to_top_button = () => $('<i class="fas fa-arrow-up"></i>')
export {
   base_button,
   special_button,
   tabmenu_button,
   mobile_tabmenu_button,
   toggle_special_button,
   mobile_special_button,
   bring_to_top_button
}