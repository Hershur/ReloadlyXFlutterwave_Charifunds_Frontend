import { OutlinedInput } from "@material-ui/core";
import { CardGiftcardOutlined, LocalAtmSharp, LocalOfferSharp, LocationOnSharp, VerifiedUser } from "@mui/icons-material";
import { Backdrop, Box, Button, Fade, FormControl, InputAdornment, Modal, Tab, Tabs, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { DonationContext } from "../../../contexts/donationContext";
import ButtonP from "../atoms/Button";
import TabPanel from "../molecules/TabPanel";


const amountList: number[] = [5, 10, 50, 100, 200, 500, 1000];

const FoundationDonation = (): JSX.Element => {
    const { addDonation } = useContext(DonationContext);
    const [value, setValue] = useState(0);
    const [amount, setAmount] = useState<string | number>('');
    const [confirmDonation, setConfirmDonation] = useState(false);
    const [open, setOpen] = useState(false);
    const handleModalOpen = () => setOpen(true);
    const handleModalClose = () => setOpen(false);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>)=> {
        setAmount(event.target.value);
    };

    const populateAmount = (amt: number)=> {
        setAmount(prevAmt => +(prevAmt) + amt);
    };



    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '50vw',
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
    };


    return (

        <>
            <div className="foundation-details" style={{}}>
                <div>
                    <h1 className="bold main-color">Hope for all Foundation</h1>

                    <div className="foundation-image"></div>
                    
                    <div className="foundation-description" style={{background: '#f5f5f5'}}>
                        <h3 className="bold no-margin main-color">Children Education Needs For Change The World Project</h3>
                        <div className="foundation-description-tab">
                            <Box sx={{ width: '100%' }}>
                                <Box sx={{maxWidth: 500, borderBottom: 1, borderColor: 'divider' }}>
                                    <Tabs 
                                        value={value} 
                                        onChange={handleChange} 
                                        variant="scrollable"
                                        scrollButtons="auto"
                                        aria-label="scrollable auto tabs example"
                                    >
                                        <Tab label="Description" sx={{color: "#2F5349", opacity: '0.5', '&.Mui-selected': {color: "#2F5349", opacity: '1', fontWeight: 700}}} />
                                        <Tab label="Events" sx={{color: "#2F5349", opacity: '0.5', '&.Mui-selected': {color: "#2F5349", opacity: '1', fontWeight: 700}}}  />
                                        <Tab label="Videos" sx={{color: "#2F5349", opacity: '0.5', '&.Mui-selected': {color: "#2F5349", opacity: '1', fontWeight: 700}}} />
                                        <Tab label="Gallery" sx={{color: "#2F5349", opacity: '0.5', '&.Mui-selected': {color: "#2F5349", opacity: '1', fontWeight: 700}}} />
                                    </Tabs>
                                </Box>
                                <TabPanel {...({className:"main-color"})}  value={value} index={0}>
                                    Hope for all Foundation is a private, non-profit organization 
                                    that provides 24-hour residential, emergency triage care for children throughout 
                                    Nigeria who are victims of abandonment, abuse or neglect. 
                                    With support from the Walton Family Foundation, Rogue Trails LLC recently 
                                    completed trail construction at the Northwest Nigeria Children???s Shelter 
                                    that includes accessible mountain bike trails and a skills course for children who find 
                                    themselves in need of a safe haven.The Team has identified a significant need for quality, 
                                    teen and adult sized food arrangement for their older children to have the opportunity to 
                                    experience the trails. For those that know the mental and physical benefits associated with 
                                    trail riding, helping gift the mountain bike experience to these kids is something our community 
                                    must deliver on.There will be no flashy photos. No testimonies or stories.

                                    <div className="bold" style={{padding: '1vw'}}>
                                        "When I give food to the poor, they call me a saint. When I sk why the poor have no food, they call me a communist."
                                    </div>
                                    <div className="bold" style={{display: 'flex', justifyContent: 'flex-end'}}>-Hope for all Foundation Team</div>
                                </TabPanel>
                                <TabPanel {...({className:"main-color"})} value={value} index={1}>
                                    Events coming soon...
                                </TabPanel>
                                <TabPanel {...({className:"main-color"})} value={value} index={2}>
                                    Videos coming soon...
                                </TabPanel>
                                <TabPanel {...({className:"main-color"})} value={value} index={3}>
                                    Gallery coming soon...
                                </TabPanel>
                            </Box>
                        </div>

                    </div>

                    <div style={{display: 'grid', gap: '15px', gridTemplateColumns: '1fr 1fr 1fr', marginTop: '1vw'}}>
                        <Button onClick={handleModalOpen} style={{cursor: 'pointer', fontWeight: 600, background: '#EDC974', color: '#2f5349', padding: '1vw 2vw', border: 'none'}}>
                            Donate now
                        </Button>
                        <ButtonP text="Share" textStyle={{fontWeight: '600', background: '#ffffff',  color: '#EDC974', padding: '1vw 2vw', border: '2px solid #EDC974'}} />
                        <ButtonP text="Follow Foundation" textStyle={{fontWeight: '600', background: '#ffffff',   color: '#EDC974', padding: '1vw 2vw', border: '2px solid #EDC974'}} />
                    </div>


                    
                </div>

                <div className="foundation-join-deatils-box">
                    <div className="foundation-join-deatils main-color">
                        <div>Joined</div>
                        <div className="bold" style={{fontSize: '26px', marginTop: '0.2vw'}}>26 days ago</div>

                        <div style={{width: '90%', margin: '1vw 2vw'}}>
                            <div style={{display: 'grid', gridTemplateColumns: '0fr 0.8fr', margin: '8px'}}>
                                <VerifiedUser sx={{ color: '#EDC974' }} /> 
                                <div>Verified</div>
                            </div>
                            <div style={{display: 'grid', gridTemplateColumns: '0fr 0.8fr', margin: '8px'}}>
                                <LocalOfferSharp sx={{ color: '#EDC974' }} /> 
                                <div>Education</div>
                            </div>
                            <div style={{display: 'grid', gridTemplateColumns: '0fr 0.8fr', margin: '8px'}}>
                                <LocationOnSharp sx={{ color: '#EDC974' }} /> 
                                <div>Lagos, Nigeria</div>
                            </div>
                        </div>
                        
                    </div>
                    <br/><br/>

                    <div>

                        <div  onClick={handleModalOpen}>
                            <ButtonP  text="Donate" textStyle={{width: '100%', cursor: 'pointer', background: '#EDC974', fontSize: '18px', fontWeight: '800', paddingBlock: '0.8vw', color: '#2F5349', border: 'none'}} />
                        </div>
                        <br/>
                        <div >
                            <Link to="/foundation">
                                <ButtonP text="Share" textStyle={{width: '100%', cursor: 'pointer', background: '#fff', fontSize: '18px', fontWeight: '800', paddingBlock: '0.8vw', color: '#EDC974', border: '2px solid #EDC974'}} />
                            </Link>
                        </div>

                        <div style={{display: "flex", gap: '3vw', marginTop: '1vw'}}>
                            <LocalAtmSharp sx={{ color: '#2F5349' }} />
                            
                            <div style={{fontSize: '16px', color: '#2F5349'}} className="bold">60 Donors</div>
                        </div>
                        <div style={{display: "flex", gap: '3vw', marginTop: '1vw'}}>
                            <CardGiftcardOutlined sx={{ color: '#2F5349' }} />
                            
                            <div style={{fontSize: '16px', color: '#2F5349'}} className="bold">$8, 463 raised</div>
                        </div>
                    </div>

                </div>
                

                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    open={open}
                    onClose={handleModalClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                    timeout: 500,
                    }}
                >
                    <Fade in={open}>
                        <Box sx={style}>
                            {
                                confirmDonation ?
                                
                                <>
                                    <Typography className="bold main-color">
                                        Are you sure you want to Donate <span style={{color: '#EDC974'}}>${amount}</span> to Hope for all Foundation?  
                                    </Typography>

                                    <Box sx={{margin: '2vw', display: 'flex', justifyContent: 'center'}}>
                                        <Link to="/donate">
                                            <Button onClick={()=> addDonation({amount: `${amount}`, donorName: ''})} disabled={amount < 5} variant="contained" sx={{background: '#2F5349', padding: '1vw 5vw'}}>Confirm</Button>
                                        </Link>
                                    </Box>

                                    <Box sx={{margin: '2vw', display: 'flex', justifyContent: 'center'}}>
                                        <Button onClick={()=> setConfirmDonation(false)} variant="contained" sx={{border: '2px solid #EDC974', background: '#ffffff', color: '#2F5349', padding: '1vw 5vw'}}>Cancel</Button>
                                    </Box>
                                </> :

                                <>
                                    <Typography className="bold main-color">
                                        How much are you willing to Donate To Hope for all Foundation
                                    </Typography>
                                    <Box>
                                        <FormControl fullWidth sx={{mt: 1}} >
                                            <OutlinedInput
                                                // style={{border: '1px solid #2F5349'}}
                                                id="outlined-adornment-amount"
                                                value={amount}
                                                onChange={handleAmountChange}
                                                endAdornment={<InputAdornment position="end">Min 5$</InputAdornment>}
                                                startAdornment={<InputAdornment className="main-color bold" position="start">$</InputAdornment>}
                                            />
                                        </FormControl>
                                    </Box>
                                    <div style={{marginTop: '1vw', display: 'flex', justifyContent: 'space-around', gap: '1vw', flexWrap: 'wrap'}}>
                                        {
                                            amountList.map((amount, i)=> (
                                                <Button key={i} onClick={()=> populateAmount(amount)} className="main-color" sx={{border: '0.5px solid', background: '#f5f5f5'}}>+{amount}</Button>
                                            ))
                                        }
                                    </div>

                                    <Box sx={{margin: '2vw', display: 'flex', justifyContent: 'center'}}>
                                        <Button onClick={()=> setConfirmDonation(true)} disabled={amount < 5} variant="contained" sx={{background: '#2F5349', padding: '1vw 5vw'}}>Proceed</Button>
                                    </Box>
                                </>
                            }
                        </Box>
                    </Fade>
                </Modal>
            </div>
            
            <div className="similar-foundation-box">

                <div className="similar-foundation">
                    <div>
                        <div style={{gap: '2vw'}}>  
                            <div className="img-health"></div>
                        </div>
                        <div style={{display: 'flex', justifyContent: 'space-between', paddingBlock: '0.5vw'}}>
                            <div style={{color: '#2F5349', fontWeight: 700}}>Operation Feed the nation</div>
                            <div style={{color: '#2F5349'}}>Healthy Foods</div>
                        </div>
                        <div style={{display: 'flex', justifyContent: 'space-between', paddingBottom: '0.5vw'}}>
                            <div style={{color: '#858585'}}>Hope for all NGO</div>
                            <div style={{color: '#858585'}}>Nigeria</div>
                        </div>
                        <Link to="/foundation">
                            <ButtonP text="View Foundation" textStyle={{width: '100%', cursor: 'pointer', background: '#fff', fontSize: '18px', fontWeight: '800', padding: '1vw 0 1vw 0', color: '#EDC974', border: '2px solid #EDC974'}} />
                        </Link>
                    </div>
                    <div>
                        <div style={{gap: '2vw'}}>  
                            <div className="img-health2"></div>
                        </div>
                        <div style={{display: 'flex', justifyContent: 'space-between', paddingBlock: '0.5vw'}}>
                            <div style={{color: '#2F5349', fontWeight: 700}}>Operation Feed the nation</div>
                            <div style={{color: '#2F5349'}}>Education</div>
                        </div>
                        <div style={{display: 'flex', justifyContent: 'space-between', paddingBottom: '0.5vw'}}>
                            <div style={{color: '#858585'}}>Hope for all NGO</div>
                            <div style={{color: '#858585'}}>Nigeria</div>
                        </div>
                        <Link to="/foundation">
                            <ButtonP text="View Foundation" textStyle={{width: '100%', cursor: 'pointer', background: '#fff', fontSize: '18px', fontWeight: '800', padding: '1vw 0 1vw 0', color: '#EDC974', border: '2px solid #EDC974'}} />
                        </Link>
                    </div>
                    <div>
                        <div style={{gap: '2vw'}}>  
                            <div className="img-health3"></div>
                        </div>
                        <div style={{display: 'flex', justifyContent: 'space-between', paddingBlock: '0.5vw'}}>
                            <div style={{color: '#2F5349', fontWeight: 700}}>Operation Feed the nation</div>
                            <div style={{color: '#2F5349'}}>Medicals</div>
                        </div>
                        <div style={{display: 'flex', justifyContent: 'space-between', paddingBottom: '0.5vw'}}>
                            <div style={{color: '#858585'}}>Hope for all NGO</div>
                            <div style={{color: '#858585'}}>Nigeria</div>
                        </div>
                        <Link to="/foundation">
                            <ButtonP text="View Foundation" textStyle={{width: '100%', cursor: 'pointer', background: '#fff', fontSize: '18px', fontWeight: '800', padding: '1vw 0 1vw 0', color: '#EDC974', border: '2px solid #EDC974'}} />
                        </Link>
                    </div>
                    <div>
                        <div style={{gap: '2vw'}}>  
                            <div className="img-health3"></div>
                        </div>
                        <div style={{display: 'flex', justifyContent: 'space-between', paddingBlock: '0.5vw'}}>
                            <div style={{color: '#2F5349', fontWeight: 700}}>Operation Feed the nation</div>
                            <div style={{color: '#2F5349'}}>Medicals</div>
                        </div>
                        <div style={{display: 'flex', justifyContent: 'space-between', paddingBottom: '0.5vw'}}>
                            <div style={{color: '#858585'}}>Hope for all NGO</div>
                            <div style={{color: '#858585'}}>Nigeria</div>
                        </div>
                        <Link to="/foundation">
                            <ButtonP text="View Foundation" textStyle={{width: '100%', cursor: 'pointer', background: '#fff', fontSize: '18px', fontWeight: '800', padding: '1vw 0 1vw 0', color: '#EDC974', border: '2px solid #EDC974'}} />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FoundationDonation;