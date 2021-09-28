import { Language } from "@mui/icons-material";
import { Button } from "@mui/material";
import { Redirect } from "react-router-dom";
import ButtonP from "../atoms/Button";

const DonationSuccessful = (): JSX.Element => {
    const getDonorNameFromStorage = localStorage.getItem('donorName');

    if(!getDonorNameFromStorage){
        return <Redirect to="/foundation" />
    }
    
    return (
        <>
            <div className="returning-customer">
                <Language sx={{color: '#2F5349'}} /> <span className="main-color bold">Donation succesful!!!</span>
            </div>

            <div className="donation-successful main-color">
                <div>
                    <h1>Dear Amazing {getDonorNameFromStorage},</h1>

                    <div>
                        Thank you for your donation to Hope for all foundation. 
                        We are blessed to have you as a donor and know that you care about 
                        helping people as much as we do. This year, we have been able to help so many people through your help.
                    </div>

                    <div className="regards-note">
                        Regards,
                        <div className="main-color bold">ChariFunds Team</div>
                    </div>

                    <div>
                        You can share this Project with your family, friends and all colleagues
                    </div>

                    <div style={{gap: '2rem', display: 'flex', margin: '1rem 0rem 6rem 0rem'}}>
                        <Button style={{cursor: 'pointer', fontWeight: 600, background: '#EDC974', color: '#2f5349', padding: '0.8rem 5rem', border: 'none'}}>
                            Share
                        </Button>
                        <ButtonP text="Follow Foundation" textStyle={{fontWeight: '600', background: '#ffffff',  color: '#EDC974', padding: '1rem 2rem', border: '2px solid #EDC974'}} />
                    </div>
                </div>
                

                <div className="thank-you-image">
                    
                </div>
            </div>
        </>
    );
};

export default DonationSuccessful;