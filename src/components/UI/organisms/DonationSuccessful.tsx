import { Language } from "@mui/icons-material";
import { Button, Modal, Box, Zoom, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import ButtonP from "../atoms/Button";
import confetti from "canvas-confetti";

const DonationSuccessful = (): JSX.Element => {
    const [open, setOpen] = useState(false);
    const getDonorNameFromStorage = localStorage.getItem('donorName');
    const getTopUpFromStorage = localStorage.getItem('topUpResponse');
    const topUp = JSON.parse(getTopUpFromStorage || '{}');


    const style = {
        position: 'absolute' as 'absolute',
        top: '30%',
        left: '30%',
        transform: 'translate(-50%, -50%)',
        width: 500,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    useEffect(() => {
        setTimeout(()=> {
            
            const duration = 20 * 1000;
            const animationEnd = Date.now() + duration;
            const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

            function randomInRange(min: number, max: number) {
                return Math.random() * (max - min) + min;
            }

            const interval: ReturnType<typeof setInterval> = setInterval(function() {
                const timeLeft = animationEnd - Date.now();

                if (timeLeft <= 0) {
                    return clearInterval(interval);
                }

                var particleCount = 50 * (timeLeft / duration);
                // since particles fall down, start a bit higher than random
                confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
                confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
            }, 250);


            setOpen(true);

        }, 2500)
    }, []);


    if(!getDonorNameFromStorage){
        return <Redirect to="/foundation" />
    }
    
    return (
        <>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={()=> setOpen(false)}
                // closeAfterTransition
                // BackdropComponent={Backdrop}
                // BackdropProps={{
                //     timeout: 500,
                // }}
            >
                <Zoom in={open} style={{ transitionDelay: true ? '500ms' : '0ms', border: 'none' }}>
                    <Box sx={style}>
                        <Typography className="bold main-color" sx={{textAlign: 'justify'}}>
                            Thank you for your generous donation, you've been gifted airtime
                            worth {topUp?.data?.deliveredAmountCurrencyCode} {topUp?.data.requestedAmount} on 
                             your {topUp?.data.operatorName} line {topUp?.data.recipientPhone}
                        </Typography>

                        <Box sx={{margin: '2rem', display: 'flex', justifyContent: 'center'}}>
                            <Button onClick={()=> setOpen(false)}  variant="contained" sx={{border: '2px solid #EDC974', background: '#ffffff', color: '#2F5349', padding: '1rem 5rem'}}>Ok</Button>
                        </Box>
                    </Box>
                </Zoom>

            </Modal>

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