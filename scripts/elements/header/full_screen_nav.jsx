import { root } from '../.././constants.jsx'
import { Navigation } from './nav.jsx'
import { active_btns } from '../../animations/active_btns'
import { stretch_menu } from '../../animations/stretch_menu'
import { hover_btns } from '../../animations/hover_btns'

class FullScreenNav implements Navigation {
    constructor(_nav_items: Array<Elements>,_nav_special_items: Array<Elements> , options: Object) {
        this.nav_items = _nav_items
        this.nav_special_items = _nav_special_items
        this.pc_menu_container = $('<div id="menu-container"></div>')
        this.nav_items_wrapper = $('<ul id="pc_items_ul"></ul>')
        this.nav_special_items_wrapper = $('<ul id="pc_special_items_ul"></ul>')

        this.toggle_menu_icon_container = $('<p class="toggle-icon"><i class="fas fa-bars"></i></p>')
        this.site_title_icon = $('<p id="site-title-container"><img src="../../../images/drawing-1.svg"></p>')

        this.init()
    }
    init(force = true) {

        root.append(this.pc_menu_container)
        this.create_nav_items()

        stretch_menu($('#menu-container'));
        hover_btns($('.regular-btn'))
        active_btns($('#pc_items_ul > li > a'), 'active-reg-nav-btn');
    }

    create_nav_items(): void {
        this.pc_menu_container.append(this.toggle_menu_icon_container)
        this.pc_menu_container.append(this.site_title_icon)
        this.pc_menu_container.append(this.nav_items_wrapper)
        this.pc_menu_container.append(this.nav_special_items_wrapper)

        this.nav_items.forEach(item => this.nav_items_wrapper.append(item))

        this.nav_special_items
        .forEach(special_item => this.nav_special_items_wrapper.append(special_item))

        this.pc_menu_container.append(this.nav_items_wrapper)
        this.pc_menu_container.append(this.nav_special_items_wrapper)
    }
}

export {
    FullScreenNav,
}