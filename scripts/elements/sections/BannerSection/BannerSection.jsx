import { root } from '../../../constants.jsx'

export default class BannerSection {
    constructor() {
        this.container = $('<div id="banner-container"></div>')
        this.banner = $(`<div class="banner"></div>`)
        this.content = $(`<p class="banner-content" data-aos="fade-right" data-aos-duration="800" data-aos-offset="300" data-aos-easing="ease-in-sine">Content Lorem impsum content test text.</p>`)
        this.btns = $('<ul class="banner-btns-ul" data-aos="fade-right" data-aos-duration="800" data-aos-offset="300" data-aos-easing="ease-in-sine"><li>One</li><li>Two</li><li>Three</li></ul>')
        this.img_holder = $('<p class="banner-img" data-aos="fade-left" data-aos-duration="800" data-aos-offset="300" data-aos-easing="ease-in-sine">Banner-Image</p>')
        this.init()
    }
    init(foce = true) {
        
        this.container
            .append(this.banner)
            .append(this.img_holder)

        this.banner.append(this.content)
        this.banner.append(this.btns)

        root.append(this.container)
    }
}
