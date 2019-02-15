import BannerSection from './BannerSection/BannerSection.jsx'
import TabmenuSection from './TabmenuSection/TabmenuSection.jsx'
import TeamSection from './TeamSection/TeamSection.jsx'


const auto_maker = { BannerSection, TabmenuSection, TeamSection };


export default function SectionFactory(alias: string) {
    return new auto_maker[alias]();

}
