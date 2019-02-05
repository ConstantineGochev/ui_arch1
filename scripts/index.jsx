require("expose-loader?$!jquery");
require("../sass/main.scss")

import { FullScreenNav } from './elements/header/full_screen_nav.jsx'
import { _init_mobile_navigation } from './elements/header/mobile_navigation'
import {_init_toggle_menu} from './animations/toggle_menu'




function _init() {
   new FullScreenNav(['Project', 'Token Sale', 'Road Map', 'About', 'Team & Advisors', 'WhitePaper'])
}

_init()



