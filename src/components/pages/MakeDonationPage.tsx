import VolunteerDonationTemplate from "../templates/MakeDonationTemplate";
import Header from "../UI/organisms/Header";
import VolunteerDonation from "../UI/organisms/MakeDonation";

const MakeDonationPage = (): JSX.Element => {
    return (
        <VolunteerDonationTemplate 
            header={ <Header /> }
            volunteerDonationBox = { <VolunteerDonation /> }
        />
    );
};

export default MakeDonationPage;