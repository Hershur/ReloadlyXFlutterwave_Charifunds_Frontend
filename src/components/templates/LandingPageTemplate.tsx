import { ReactElement } from "react";

type OutlineProp = {
    outlineBox: JSX.Element;
    causesDonationBox: JSX.Element;
    donorCompaniesBox: JSX.Element;
    donationsBox: JSX.Element;
    testimonialsBox: JSX.Element;
    registerVolBox: JSX.Element;
    registerNGOBox: JSX.Element;
    footer: JSX.Element;
    divider: ReactElement<any, any>;
};

const LandingPageTemplate = ({
        outlineBox, 
        causesDonationBox, 
        donorCompaniesBox, 
        donationsBox,
        testimonialsBox,
        registerVolBox,
        registerNGOBox,
        divider,
        footer
    }: OutlineProp): JSX.Element => {

    return (
        <>
            <>{ outlineBox }</>
            <>{ causesDonationBox }</>
            <>{ donorCompaniesBox }</>
            <>{ donationsBox }</>
            <>{ divider }</>
            <>{ registerVolBox }</>
            <>{ testimonialsBox }</>
            <>{ registerNGOBox }</>
            <>{ footer }</>
        </>
           
    ); 
}

export default LandingPageTemplate;