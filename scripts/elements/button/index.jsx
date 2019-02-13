'use strict'
const base_button = (_href_id,_content : string) =>  $(`<li><a href=${_href_id} class="regular-btn">${_content}</a></li>`)
const special_button = (_content : string) => $(`<li><a class="special-btn">${_content}</a></li>`)

export {
   base_button,
   special_button
  
}