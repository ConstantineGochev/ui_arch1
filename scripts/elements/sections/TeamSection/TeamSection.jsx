import { root } from '../../../constants.jsx'
import { Teamcard_Avatars, Teamcard_Headings, Teamcard_Job_Positions, Teamcard_Personal_Infos } from '../../../constants.jsx'
import { move_teamcards } from '../../../animations/muuri_effect_teamcards'
import { team_card } from '../../../utils.jsx'

export default class TeamSection {
    constructor() {
        this.section_container = $('<div id="team-advisors" class="grid"></div>')
        this.section_header = $('<p><h2 id="our-team">Our Team</h2></p>')
        this.init()
    }
    add_cards_to_teamsection() {

        for (let i = 0; i < Teamcard_Avatars.length; i++) {
            this.section_container.append(team_card(
                Teamcard_Avatars[i],
                Teamcard_Headings[i],
                Teamcard_Job_Positions[i],
                Teamcard_Personal_Infos[i],
            ))
        }

        root.append(this.section_header)
        root.append(this.section_container)
        move_teamcards()
    }
    init(force = true) {
        this.add_cards_to_teamsection()
    }
}
