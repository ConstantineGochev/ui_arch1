import BannerSection from './BannerSection/BannerSection.jsx'
import TabmenuSection from './TabmenuSection/TabmenuSection.jsx'


const auto_maker = { BannerSection, TabmenuSection };


export default function SectionFactory(alias: string) {
    return new auto_maker[alias]();

}
