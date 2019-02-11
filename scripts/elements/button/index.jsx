'use strict'
const base_button = (_content : string) =>  $(`<li><button class= "regular-btn">${_content}</button></li>`)
const special_button = (_content : string) => $(`<li><button class="special-btn">${_content}</button></li>`)

export {
   base_button,
   special_button
  
}