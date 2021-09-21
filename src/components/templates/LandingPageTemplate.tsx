type OutlineProp = {
    outlineBox: JSX.Element;
    causesDonationBox: JSX.Element;
    donorCompaniesBox: JSX.Element;
    donationsBox: JSX.Element;
    volunteerBox: JSX.Element;
    testimonialsBox: JSX.Element;
    registerBox: JSX.Element;
}

const LandingPageTemplate = ({
        outlineBox, 
        causesDonationBox, 
        donorCompaniesBox, 
        donationsBox,
        testimonialsBox,
        volunteerBox,
        registerBox
    }: OutlineProp): JSX.Element => {

    return (
        <>
            <>{ outlineBox }</>
            <>{ causesDonationBox }</>
            <>{ donorCompaniesBox }</>
            <>{ donationsBox }</>
            <>{ volunteerBox }</>
            <>{ testimonialsBox }</>
            <>{ registerBox }</>
        </>
           
    ); 
}

export default LandingPageTemplate;