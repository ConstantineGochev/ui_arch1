import BannerSection from './BannerSection/BannerSection.jsx'
import TabmenuSection from './TabmenuSection/TabmenuSection.jsx'
import RoadmapSection from './RoadmapSection/RoadmapSection.jsx'
import AboutSection from './AboutSection/AboutSection.jsx'
import TeamSection from './TeamSection/TeamSection.jsx'
import Get_In_Touch from './Get_In_Touch_Section/Get_In_Touch.jsx'

const auto_maker = {
    BannerSection,
    TabmenuSection,
    RoadmapSection,
    AboutSection,
    TeamSection,
    Get_In_Touch
};


export default function SectionFactory(alias: string) {
    return new auto_maker[alias]();

}
