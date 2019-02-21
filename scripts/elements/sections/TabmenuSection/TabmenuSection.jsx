import { root } from '../../../constants.jsx'
import { Tabmenu_Items, Tabmenu_Headings, Tabmenu_Infos, Tabmenu_imgs } from '../../../constants.jsx'
import { tab_reg_item_click, tab_mobile_item_click } from '../../../animations/tabmenu'
import { create_inner_tabmenu_container } from '../../../utils.jsx'
import { tabmenu_button, mobile_tabmenu_button } from '../../button/index.jsx'

export default class TabmenuSection {
    constructor() {
        this.tabmenu_container = $('<div id="tabs" class="page-section"></div>')
        this.tabmenu = $('<ul id="tabmenu"></ul>')
        this.mobile_tabmenu_container = $('<div id="mobile_tabmenu_container"></div>')
        this.mobile_tabmenu_dropdown = $(`<p class="mobile_tabmenu_dropdown"><span>20% lower yacht charter prices</span><i class="far fa-arrow-alt-circle-down"></i></p>`)
        this.mobile_tabmenu = $('<ul id="mobile_tabmenu"></ul>')
        this.init()
    }

    create_tabmenu() {
        this.tabmenu_container.append(this.tabmenu)
        this.mobile_tabmenu_container
            .append(this.mobile_tabmenu_dropdown)
            .append(this.mobile_tabmenu)

        for (let i = 0; i < Tabmenu_Items.length; i++) {
            const btn_text = Tabmenu_Items[i]

            this.tabmenu.append(tabmenu_button(btn_text))
            this.tabmenu_container
                .append(create_inner_tabmenu_container(`tabs_item`, Tabmenu_imgs[i], Tabmenu_Headings[i], Tabmenu_Infos[i]))

            this.mobile_tabmenu.append(mobile_tabmenu_button(btn_text))
        }
        root
            .append(this.mobile_tabmenu_container)
            .append(this.tabmenu_container)

        tab_reg_item_click();
        tab_mobile_item_click();
    }

    init(force = true) {
        this.create_tabmenu()
    }
}
