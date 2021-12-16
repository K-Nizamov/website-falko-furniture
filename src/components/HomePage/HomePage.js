import ContactInfo from "./ContactInfo/ContactInfo"
import HomeContentView from "./HomeContentView/HomeContentView"
import MaterialSection from "./MaterialSection/MaterialSection"
import WhoAreWe from "./WhoAreWe/WhoAreWe"


function HomePage() {
    return (
        <>
        <HomeContentView />
        <MaterialSection />
        <WhoAreWe/>
        <ContactInfo/>
        </>
    )
}
export default HomePage