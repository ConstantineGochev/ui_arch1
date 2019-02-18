import { root } from '../../../constants.jsx'
import { Tabmenu_Items, Tabmenu_Headings, Tabmenu_Infos, Tabmenu_imgs } from '../../../constants.jsx'
import { tab_item_click } from '../../../animations/tabmenu'
import { create_inner_tabmenu_container } from '../../../utils.jsx'
import { tabmenu_button } from '../../button/index.jsx'

export default class TabmenuSection {
    constructor() {
        this.tabmenu_container = $('<div id="tabs"></div>')
        this.tabmenu = $('<ul id="tabmenu"></ul>')
        this.tabmenu_content = $('<div class="tabmenu-content-container"></div>')
        this.init()
    }

    create_tabmenu() {
        this.tabmenu_container.append(this.tabmenu)

        for (let i = 0; i < Tabmenu_Items.length; i++) {
            const btn_text = Tabmenu_Items[i]

            this.tabmenu.append(tabmenu_button(btn_text))
            this.tabmenu_container
                .append(create_inner_tabmenu_container(`tabs_item`, Tabmenu_imgs[i], Tabmenu_Headings[i], Tabmenu_Infos[i]))
        }
        root.append(this.tabmenu_container)
        tab_item_click();
    }

    init(force = true) {
        this.create_tabmenu()
    }
}
