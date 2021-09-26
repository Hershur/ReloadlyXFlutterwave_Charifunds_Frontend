type IDonationSuccessfulProps = {
    header: JSX.Element;
    donationSuccessfulBox: JSX.Element;
};

const DonationSuccessfulTemplate = ( { header, donationSuccessfulBox }: IDonationSuccessfulProps )=> {
    return (
        <>
            {header}
            {donationSuccessfulBox}
        </>
    );
};

export default DonationSuccessfulTemplate;