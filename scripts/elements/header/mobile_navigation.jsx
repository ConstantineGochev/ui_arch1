import Button from '../button/index.jsx'
import {Navigation} from './nav.jsx'
import {root} from '../../constants.jsx'
import {toggle_menu} from '../.././animations/toggle_menu'

class MobileNav implements Navigation {
    constructor(_nav_items_texts : Array<string>, options : Object) {
  
       this.nav_items_texts = _nav_items_texts
       this.mobile_nav_container = $('<div id="mobile-menu"></div>')
       this.close_button_container = $('<p id="close-icon-container"><i class="fas fa-times"></i></p>')
       this.mobile_list = $('<ul id="mobile-items"></ul>')
       this.create_nav_items = this.create_nav_items.bind(this)
       this.modal_window = $('<div id="modal-window"></div>')
       this.get_mobile_item = (text) => $(`<li><a class="test">${text}</a></li>`)
       this.init()
    }

   init (force = true) : void {
       root.append(this.mobile_nav_container)
       root.append(this.modal_window)
       //debugger;
       console.log(this)
       console.log(this.mobile_nav_container)
       this.mobile_nav_container.append(this.close_button_container)
       this.mobile_nav_container.append(this.mobile_list)
       this.create_nav_items()
       toggle_menu()
   }

   create_nav_items() : void {

       for(let i = 0; i < this.nav_items_texts.length; i++) {

           this.mobile_list.append(this.get_mobile_item(this.nav_items_texts[i]))
       }

   }
}
export {
    MobileNav
}
