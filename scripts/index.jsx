require("expose-loader?$!jquery");
require("../sass/main.scss")
import AOS from 'aos'
import { FullScreenNav } from './elements/header/full_screen_nav.jsx'
import { MobileNav } from './elements/header/mobile_navigation.jsx'
import SectionFactory from './elements/sections/factory.jsx'
import { base_button, special_button } from './elements/button/index.jsx'
import { menu_items, special_menu_items } from './constants.jsx'
import Footer from './elements/footer/footer.jsx';

function get_regular_menu_items() {
   let menu_btns = []

   menu_items.forEach((item, index) => {
      let href_id = "#";

      if (index === 0) { href_id = "#banner-container" }
      else if (index === 1) { href_id = "#tabs" }
      else if (index === 4) { href_id = "#our-team" }

      menu_btns.push(base_button(href_id, item))
   })
   return menu_btns
}
function get_special_menu_items() {
   let special_menu_btns = []

   special_menu_items.forEach(item => special_menu_btns.push(special_button(item)))
   return special_menu_btns;
}
function initialize_AOS() {
   return AOS.init();
}
function _init() {
   //setTimeout(() => { $('#modal-window').show() }, 5000) // Open Modal in 5s.
   initialize_AOS();
   new FullScreenNav(get_regular_menu_items(), get_special_menu_items())
   new MobileNav(get_regular_menu_items())

   SectionFactory("BannerSection")
   SectionFactory("TabmenuSection")
   SectionFactory("TeamSection")
   new Footer()
}

_init()