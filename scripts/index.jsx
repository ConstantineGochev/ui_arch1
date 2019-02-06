require("expose-loader?$!jquery");
require("../sass/main.scss")

import { FullScreenNav } from './elements/header/full_screen_nav.jsx'
import { MobileNav } from './elements/header/mobile_navigation.jsx'



const menu_items = ['Project', 'Token Sale', 'Road Map', 'About', 'Team & Advisors', 'WhitePaper']

function _init() {
   new FullScreenNav(menu_items)
   new MobileNav(menu_items)
}

_init()



