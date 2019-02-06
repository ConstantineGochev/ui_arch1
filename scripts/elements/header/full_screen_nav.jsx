import {root} from '../.././constants.jsx'
import {Navigation} from './nav.jsx'

class FullScreenNav implements Navigation  {
    constructor(_nav_items : Array<Elements>, options : Object) {
        this.nav_items = _nav_items
        this.menu_container = $('<div id="menu-container"></div>')
        this.nav_items_wrapper = $('<ul id="nav-items-wrapper"></ul>')
        this.toggle_menu_icon_container = $('<p class="toggle-icon"></p>')
        this.create_nav_items = this.create_nav_items.bind(this)
        this.init()
    }
    init (force = true) {
     
        root.append(this.menu_container)
        this.create_nav_items()
   
    }

    create_nav_items() : void {
  
        this.menu_container.append(this.nav_items_wrapper)
         for(let i = 0; i < this.nav_items.length; i++) {
    
            this.nav_items_wrapper.append(this.nav_items[i])
         }
         this.menu_container.append(this.nav_items_wrapper)
    }

}


export {
    FullScreenNav,
}