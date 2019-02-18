import { root } from '../../../constants.jsx'
import Get_In_Touch_Form from './form.jsx'

export default class Get_In_Touch {
    constructor() {
        this.container = $('<div id="get-in-touch-container"></div>')
        this.heading = $('<h2>Get in Touch</h2>')
        this.info = $('<p>Feel Free To Get In Touch If You Need Any Additional Information</p>')
        this.form = new Get_In_Touch_Form().create_form()
        this.submit_btn = $('<button type="submit" value="submit" form="get-in-touch-form">Submit</button>')
        this.init()
    }
    init(force = true) {
        this.container
            .append(this.heading)
            .append(this.info)
            .append(this.form)
            .append(this.submit_btn)

        root.append(this.container)
    }
}