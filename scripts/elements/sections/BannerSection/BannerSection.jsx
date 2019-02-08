import { root } from '../../../constants.jsx'
import { Banner_Img } from './Banner_Img.jsx';
import { Banner } from './Banner.jsx';
import { BannerBtns } from './BannerBtns.jsx';
import { BannerContent } from './BannerContent.jsx';
import { BannerContainer } from './BannerContainer.jsx';

export default class BannerSection {
    constructor() {
        this.container = BannerContainer()
        this.banner = Banner()
        this.content = BannerContent('Content Lorem impsum content test text.')
        this.btns = BannerBtns()
        this.img_holder = Banner_Img()
        this.init()
    }
    init(foce = true) {
        // const container = BannerContainer()
        // const banner = Banner()
        // const content = BannerContent('Content Lorem impsum content test text.')
        // const btns = BannerBtns()
        // const img_holder = Banner_Img()
        this.container
            .append(this.banner)
            .append(this.img_holder)

        this.banner.append(this.content)
        this.banner.append(this.btns)

        root.append(this.container)
    }
}
