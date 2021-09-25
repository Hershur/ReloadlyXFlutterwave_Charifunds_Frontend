type IFoundationProps = {
    header: JSX.Element;
    foundationDonation: JSX.Element;
    footer: JSX.Element;
};

const FoundationTemplate = ( { header, foundationDonation, footer }: IFoundationProps )=> {
    return (
        <div className="foundation">
            {header}
            {foundationDonation}
            {footer}
        </div>
    );
};

export default FoundationTemplate;