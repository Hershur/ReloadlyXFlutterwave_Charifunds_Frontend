import Logo from "../atoms/Logo";
import { 
    Instagram, 
    FacebookOutlined, 
    Twitter,
    WhatsApp,
    Telegram 
} from '@mui/icons-material';

const Footer = (): JSX.Element => {
    return (
        <div className="footer">
            <div>
                <Logo />
                <div className="social-media">
                    <div className="main-color">
                        Follow us on social media and stay updated with the latest
                        information about our services.
                    </div>
                    <div className="icons">
                        <FacebookOutlined className="round-icon"/>
                        <Twitter className="round-icon"/>
                        <WhatsApp className="round-icon"/>
                        <Telegram className="round-icon"/>
                        <Instagram className="round-icon"/>
                    </div>
                </div>
            </div>

            <div className="main-color footer-item">
                <h3 className="bold no-margin">Explore</h3>
                <div>
                    <a referrerPolicy="no-referrer" href="/">About us</a>
                </div>
                <div>
                    <a referrerPolicy="no-referrer" href="/">Contact us</a>
                </div>
                <div>
                    <a referrerPolicy="no-referrer" href="/">Services</a>
                </div>
                <div>
                    <a referrerPolicy="no-referrer" href="/">Support</a>
                </div>
            </div>

            <div className="main-color footer-item">
                <h3 className="bold no-margin">Information</h3>
                <div>
                    <a referrerPolicy="no-referrer" href="/">Medical</a>
                </div>
                <div>
                    <a referrerPolicy="no-referrer" href="/">Emergency</a>
                </div>
                <div>
                    <a referrerPolicy="no-referrer" href="/">Memorial</a>
                </div>
                <div>
                    <a referrerPolicy="no-referrer" href="/">Education</a>
                </div>
                <div>
                    <a referrerPolicy="no-referrer" href="/">Charity</a>
                </div>
            </div>

            <div className="main-color footer-item">
                <h3 className="bold no-margin">Company</h3>
                <div>
                    <a referrerPolicy="no-referrer" href="/">Partnership</a>
                </div>
                <div>
                    <a referrerPolicy="no-referrer" href="/">Terms of use</a>
                </div>
                <div>
                    <a referrerPolicy="no-referrer" href="/">About</a>
                </div>
                <div>
                    <a referrerPolicy="no-referrer" href="/">Contact</a>
                </div>
            </div>

            <div className="main-color footer-item">
                <h3 className="bold no-margin">Subscribe to our newsletter</h3>
                <div>
                    <a referrerPolicy="no-referrer" href="/">Partnership</a>
                </div>
            </div>
        </div>
    )
};

export default Footer;