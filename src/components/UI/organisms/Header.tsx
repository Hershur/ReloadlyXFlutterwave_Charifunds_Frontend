import { Button, Drawer } from "@mui/material";
import { useState } from "react";
import Logo from "../atoms/Logo";
import HeaderNav from "../molecules/HeaderNav";
import HeaderNavMobile from "../molecules/HeaderNavMobile";
import MenuIcon from '@mui/icons-material/Menu';


const Header = ():JSX.Element => {
    const [openDrawer, setOpenDrawer] = useState(false);

    return (
        <div className="page-header">
            <Logo />

            {/* <div style={{display: 'flex', justifyContent: 'space-between'}}> */}

                <div className="menu-icon-box">
                    <Button onClick={()=> setOpenDrawer(!openDrawer)}>
                        <MenuIcon sx={{color: '#2f5349', fontSize: '2.5rem'}} />
                    </Button>
                </div>
            {/* </div> */}


            <HeaderNav />


            <Drawer
                anchor='right'
                open={openDrawer}
                onClose={()=> setOpenDrawer(!openDrawer)}
            >
                <HeaderNavMobile isLandingPage  />
            </Drawer>
        </div>
    )
};

export default Header;