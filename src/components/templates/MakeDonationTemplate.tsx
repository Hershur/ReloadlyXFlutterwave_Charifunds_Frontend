type IVolunteerDonationProps = {
    header: JSX.Element;
    volunteerDonationBox: JSX.Element;
};

const MakeDonationTemplate = ( { header, volunteerDonationBox }: IVolunteerDonationProps )=> {
    return (
        <div className="volunteer-donation">
            {header}
            {volunteerDonationBox}
        </div>
    );
};

export default MakeDonationTemplate;