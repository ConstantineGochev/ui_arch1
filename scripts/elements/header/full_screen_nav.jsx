import { root } from '../.././constants.jsx'
import { Navigation } from './nav.jsx'
import { active_btns } from '../../animations/active_btns'
import { stretch_menu } from '../../animations/stretch_menu'

class FullScreenNav implements Navigation {
    constructor(_nav_items: Array<Elements>, options: Object) {
        this.nav_items = _nav_items
        this.pc_menu_container = $('<div id="menu-container" class="shrink-nav"></div>')
        this.nav_items_wrapper = $('<ul id="pc_items_ul"></ul>')
        this.toggle_menu_icon_container = $('<p class="toggle-icon"><i class="fas fa-bars"></i></p>')
        this.site_title_icon = $('<i class="fas fa-anchor"></i>')
        this.init()
    }
    init(force = true) {

        root.append(this.pc_menu_container)
        this.create_nav_items()

        stretch_menu($('#menu-container'), $('#pc_items_ul > li'));
        active_btns($('#pc_items_ul > li'), 'active');
    }

    create_nav_items(): void {
        this.pc_menu_container.append(this.toggle_menu_icon_container)
        this.pc_menu_container.append(this.nav_items_wrapper)
        
        this.nav_items_wrapper.append(this.site_title_icon)
        for (let i = 0; i < this.nav_items.length; i++) {

            this.nav_items_wrapper.append(this.nav_items[i])
        }
        this.pc_menu_container.append(this.nav_items_wrapper)
    }

}


export {
    FullScreenNav,
}