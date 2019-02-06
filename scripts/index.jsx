require("expose-loader?$!jquery");
require("../sass/main.scss")

import { FullScreenNav } from './elements/header/full_screen_nav.jsx'
import { MobileNav } from './elements/header/mobile_navigation.jsx'
import {base_button } from './elements/button/index.jsx'
import {menu_items} from './constants.jsx'



function get_menu_items () {
   var menu_btns = []

   for(let i = 0; i <menu_items.length; i++) {
      menu_btns.push(base_button(menu_items[i]))
   }
   return menu_btns
}

function _init() {
   console.log(menu_items)


    
    new FullScreenNav(get_menu_items())
    new MobileNav(get_menu_items())
}

_init()



