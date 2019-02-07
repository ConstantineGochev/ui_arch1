import {root} from '../../constants.jsx'

export default class BannerSection {
        constructor() {
          this.container = $('<div class="banner-contaner"></div>')
          this.init()

	}
	init(){
          root.append(this.container)
	}

    }
