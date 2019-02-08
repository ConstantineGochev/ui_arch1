'use strict'
const base_button = (_content : string) =>  $(`<li class= "btn not-transform-text">${_content}<span></span></li>`)
const special_button = (_content : string) => $(`<li class="special-btn not-transform-text">${_content}</li>`)

export {
   base_button,
   special_button
  
}