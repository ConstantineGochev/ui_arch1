import { root } from "../../../constants.jsx"

export default class RoadmapSection {
    constructor() {
        this.container = $('<div id="roadmap-container" class="page-section" data-aos="zoom-in" data-aos-duration="1500"></div>')
        this.heading = $('<h2>Road-Map</h2>')
        this.info = $('<p>Plan for project development as follow</p>')
        this.map_img = $('<p class="roadmap-img"></p>')
        this.init()
    }
    init(force = true) {
        this.container
        .append(this.heading)
        .append(this.info)
        .append(this.map_img)

        root.append(this.container)
    }
}