export default class Get_In_Touch_Form {
    constructor() {
        this.container = $('<form id="get-in-touch-form"></form>')
        this.input_fullname= $('<input type="text" placeholder="Full Name"></input>')
        this.input_email = $('<input type="email" placeholder="Email Address"></input>')
        this.textarea = $('<textarea placeholder="Write your message here..."></textarea>')


        this.create_form()
    }
    create_form() {
        this.container
        .append(this.input_fullname)
        .append(this.input_email)
        .append(this.textarea)

        return this.container
    }
}