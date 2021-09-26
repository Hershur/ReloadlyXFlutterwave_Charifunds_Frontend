import DonationSuccessfulTemplate from "../templates/DonationSuccessfulTemplate";
import DonationSuccessful from "../UI/organisms/DonationSuccessful";
import Header from "../UI/organisms/Header";


const DonationSuccessfulPage = (): JSX.Element => {
    return (
        <DonationSuccessfulTemplate 
            header={ <Header /> }
            donationSuccessfulBox = { <DonationSuccessful /> }
        />
    );
};

export default DonationSuccessfulPage;