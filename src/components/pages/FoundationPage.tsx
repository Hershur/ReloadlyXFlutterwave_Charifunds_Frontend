import FoundationTemplate from "../templates/FoundationTemplate";
import Footer from "../UI/organisms/Footer";
import FoundationDonation from "../UI/organisms/FoundationDonation";
import Header from "../UI/organisms/Header";

const FoundationPage = (): JSX.Element => {
    return (
        <FoundationTemplate 
            header={ <Header /> }
            foundationDonation={ <FoundationDonation /> }
            footer = { <Footer /> }
        />
    )
};

export default FoundationPage;