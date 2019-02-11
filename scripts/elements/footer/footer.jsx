import { root } from '../../constants.jsx'
import { Container } from './container.jsx'
import { Contacts } from './contacts.jsx'
import { Social_Media_Links } from './social_media_links.jsx'

export default class Footer{
    constructor() {
        this.container = Container()
        this.contacts = Contacts()
        this.social_media_links = Social_Media_Links()
        this.init()
    }

    init(force = true) {
        this.container
        .append(this.contacts)
        .append(this.social_media_links)

        root.append(this.container)
    }
}