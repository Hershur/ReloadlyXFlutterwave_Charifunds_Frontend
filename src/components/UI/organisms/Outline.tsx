import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Button, Drawer } from '@mui/material';
import { Link } from 'react-router-dom';
import ButtonP from "../atoms/Button";
import Logo from "../atoms/Logo";
import HeaderNav from '../molecules/HeaderNav';
import HeaderNavMobile from '../molecules/HeaderNavMobile';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

const Outline = (): JSX.Element => {
    const [openDrawer, setOpenDrawer] = useState(false);

    return (
        <div className="page-outline">
            <div className="page-outline-left">
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <Logo />

                    <div className="menu-icon-box">
                        <Button onClick={()=> setOpenDrawer(!openDrawer)}>
                            <MenuIcon sx={{color: '#2f5349', fontSize: '2.5rem'}} />
                        </Button>
                    </div>
                </div>

                <div className="page-outline-details">
                    Fundraising for the Charities and causes you care about
                </div>

                <div className="page-outline-details-sub">
                    An impact driven global non profit that puts compassion into action;
                    uplifting and uniting communities locally and globally: online and offline.
                </div>

                <div style={{marginBottom: '4rem'}}>
                    <Link to="/foundation">
                        <ButtonP text="Donate now" textStyle={{fontWeight: '600', background: '#EDC974', color: '#2f5349', padding: '1rem 2rem', border: 'none'}} />
                    </Link>
                    <Button style={{cursor: 'pointer', padding: '1rem 1rem', color: '#2f5349'}} variant="text" startIcon={<PlayArrowIcon />}>
                        How it works
                    </Button>
                    {/* <Button text={<span><PlayArrowIcon sx={{color: '#2f5349'}} /> How it works</span>} textStyle={{fontWeight: '700', background: 'transparent', color: '#2f5349', padding: '0.8rem 2rem', border: 'none'}} /> */}
                </div>

            </div>

            <Drawer
                anchor='right'
                open={openDrawer}
                onClose={()=> setOpenDrawer(!openDrawer)}
            >
                <HeaderNavMobile isLandingPage  />
            </Drawer>

            <div className="page-outline-right">
                <HeaderNav isLandingPage />

                <div className="page-outline-image">
                </div>
            </div>
        </div>
    );
};

export default Outline