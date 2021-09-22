import { Divider } from "@mui/material";
import LandingPageTemplate from "../templates/LandingPageTemplate";
import CausesDonation from "../UI/organisms/CausesDonation";
import Donations from "../UI/organisms/Donations";
import DonorCompanies from "../UI/organisms/DonorCompanies";
import Footer from "../UI/organisms/Footer";
import Outline from "../UI/organisms/Outline";
import RegisterNGO from "../UI/organisms/RegisterNGO";
import RegisterVolunteer from "../UI/organisms/RegisterVolunteer";
import Testimonials from "../UI/organisms/Testimonials";

const LandingPage = (): JSX.Element => {
    return (
        <LandingPageTemplate 
            outlineBox={<Outline />}
            causesDonationBox= { <CausesDonation /> }
            donorCompaniesBox= { <DonorCompanies /> }
            donationsBox= { <Donations /> }
            testimonialsBox= { <Testimonials /> }
            registerVolBox= { <RegisterVolunteer /> }
            registerNGOBox= { <RegisterNGO /> }
            divider = { <Divider sx={{height: '3rem'}} /> }
            footer = { <Footer /> }
        />
    )
};

export default LandingPage;