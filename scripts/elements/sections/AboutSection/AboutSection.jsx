import { root, About_Sponsor_Imgs } from '../../../constants.jsx'

export default class AboutSection {
    constructor() {
        this.container = $('<div id="about-container" class="page-section" data-aos="zoom-out" data-aos-duration="1500"></div>')
        this.heading = $('<h2 class="about-heading">About Section Heading Content</h1>')
        this.info = $('<p class="about-info">About Section Info Content</p>')
        this.sponsor_imgs_container = $('<ul id="about-imgs-container"></ul>')
        this.sponsor_img = (_content) => $(`<li class="about-sponsor-img">${_content}</li>`)
        this.init()
    }

    init(force = true) {
        this.container
            .append(this.heading)
            .append(this.info)
            .append(this.sponsor_imgs_container)
        console.log(About_Sponsor_Imgs)
        About_Sponsor_Imgs
        .forEach(item => this.sponsor_imgs_container.append(this.sponsor_img(item)))

        root.append(this.container)
    }
}