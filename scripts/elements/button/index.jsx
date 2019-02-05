'use strict'
export default class Button {
   constructor(content : string, parent : Element, settings : Object) {
         
   
      this.init()
   }

   init() : void  {
       let elem = $(`<div class= "btn">${content}<div>`)
       parent.append(elem)
   }


}