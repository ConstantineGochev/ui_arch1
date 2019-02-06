'use strict'
const base_button = (_content : string) =>  $(`<li class= "btn"><span>${_content}<span></li>`)





// class IButton {
//    constructor(_content : string) {
//       this.content = _content
//    }
//    init () {
//       return `<li class= "btn"><span>${this.content}<span></li>`
//    }
// }
// class SpecialButton extends IButton {
//    constructor(_content : string,  options : Object) {
//       super(_content : string)
//       this.content = _content
//       this.options = {...options}
//       this.init()
//    }
//    init() : Element {
//       let elem = $(this.content)

//       return elem;
//    }
// }

// console.log(SpecialButton)


export {
   base_button,
  
}