import LandingPageTemplate from "../templates/LandingPageTemplate";
import CausesDonation from "../UI/organisms/CausesDonation";
import Donations from "../UI/organisms/Donations";
import DonorCompanies from "../UI/organisms/DonorCompanies";
import Outline from "../UI/organisms/Outline";
import Register from "../UI/organisms/Register";
import Testimonials from "../UI/organisms/Testimonials";
import Volunteer from "../UI/organisms/Volunteer";

const LandingPage = (): JSX.Element => {
    return (
        <LandingPageTemplate 
            outlineBox={<Outline />}
            causesDonationBox= { <CausesDonation /> }
            donorCompaniesBox= { <DonorCompanies /> }
            volunteerBox= { <Volunteer /> }
            donationsBox= { <Donations /> }
            testimonialsBox= { <Testimonials /> }
            registerBox= { <Register /> }
        />
    )
};

export default LandingPage;