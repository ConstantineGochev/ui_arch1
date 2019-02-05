require("expose-loader?$!jquery");
require("../sass/main.scss")

import { _init_regular_navigation } from './create_elements/header/regular_navigation'
import { _init_mobile_navigation } from './create_elements/header/mobile_navigation'
import {_init_toggle_menu} from './animations/toggle_menu'

_init_regular_navigation()
_init_mobile_navigation()
_init_toggle_menu()


