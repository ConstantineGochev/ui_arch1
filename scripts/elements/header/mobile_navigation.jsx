import Button from '../button/index.jsx'
import { Navigation } from './nav.jsx'
import { root } from '../../constants.jsx'
import { toggle_menu } from '../../animations/toggle_menu'
import { toggle_special_mobile_menu } from '../../animations/toggle_special_mobile_menu'
import { active_btns } from '../../animations/active_btns'

class MobileNav implements Navigation {
    constructor(_nav_items: Array<Element>, options: Object) {

        this.nav_items = _nav_items
        this.mobile_nav_container = $('<div id="mobile-menu"></div>')
        this.close_button_container = $('<p id="close-icon-container"><i class="fas fa-times"></i></p>')
        this.mobile_list = $('<ul id="mobile-items"></ul>')
        this.modal_window = $('<div id="modal-window"></div>')
        this.init()
    }

    init(force = true): void {
        root.append(this.mobile_nav_container)
        root.append(this.modal_window)

        this.mobile_nav_container.append(this.close_button_container)
        this.mobile_nav_container.append(this.mobile_list)
        this.create_nav_items()
        //active_btns($('#mobile-items > li'), 'mobile-active');
        toggle_special_mobile_menu()
        toggle_menu()
    }

    create_nav_items(): void {

        this.nav_items.forEach(item => this.mobile_list.append(item))
    }
}
export {
    MobileNav
}
