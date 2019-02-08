import BannerSection from './BannerSection/BannerSection.jsx'


const auto_maker = { BannerSection };


export default function SectionFactory(alias: string) {
    return new auto_maker[alias]();

}
