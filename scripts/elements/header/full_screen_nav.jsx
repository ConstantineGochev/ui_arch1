// function _init_regular_navigation() {
//     console.log($)
//     create_container()
// }
// const elements = {
//     menu_container: '<div id="menu-container"></div>',
//     nav_items_container: '<ul id="nav-items-wrapper"></ul>',
//     toggle_menu_icon_container: '<p class="toggle-icon"></p>',
//     nav_item: (name) => `<li class="nav-item">${name}</li>`,
//     root: () => $('#root'),
//     react_btn: () => '<div id="react_button"></div>'
// }
// function create_container() {
//     let menu_container = $(elements.menu_container)
//     let nav_items_wrapper = $(elements.nav_items_container)
//     let toggle_menu_icon_container = $(elements.toggle_menu_icon_container)

//     // Appending the list items to the unordered-list.
//     nav_items_wrapper
//         .append(elements.nav_item('Home'))
//         .append(elements.nav_item('About'))
//         .append(elements.nav_item('Contacts'))
//         .append(elements.nav_item('FAQ'))

//     // Appending the toggle button and the list to the mobile container
//     menu_container.append(toggle_menu_icon_container)
//     menu_container.append(nav_items_wrapper);

//     // Append the filled mobile container to the #root
//     menu_container.appendTo(elements.root())
// }
import {root} from '../.././constants.jsx'


class FullScreenNav {
    constructor(_nav_items_texts : Array<string>, options : Object) {
        this.nav_items_texts = _nav_items_texts
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
         for(let i = 0; i < this.nav_items_texts.length; i++) {
             //if(nav_items_wrapper[i] === 'WHITEPAPER')
            this.nav_items_wrapper.append(`<li class="nav-item">${this.nav_items_texts[i]}</li>`)
         }
         this.menu_container.append(this.nav_items_wrapper)
    }

}


export {
    FullScreenNav,
}