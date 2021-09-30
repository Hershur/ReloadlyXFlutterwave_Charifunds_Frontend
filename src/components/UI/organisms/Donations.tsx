import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import Button from '../atoms/Button';
import { Link } from 'react-router-dom';

const Donations = (): JSX.Element => {
    return (
        <div className="donations">
            <div style={{display: "flex", justifyContent: 'space-between', padding: '1rem 0 1rem 0'}}>
                <h1 style={{color: '#2F5349', width: '25rem', fontWeight: 700}}>
                    You can help lots of people by donating little
                </h1>

                <div style={{display: "flex", gap: '3rem', padding: '1rem 0 1rem 0'}}>
                    <div>
                        <ArrowBackOutlinedIcon sx={{p: 1, color: '#2F5349', border: '1px solid #2F5349'}} />
                    </div>
                    <div>
                       <ArrowForwardOutlinedIcon sx={{p: 1, color: '#fff', background: '#2F5349', border: '1px solid #2F5349'}}/> 
                    </div>
                </div>
            </div>

            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '3rem'}}>
                <div>
                    <div style={{gap: '2rem'}}>  
                        <div className="img-health"></div>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0 0.5rem 0'}}>
                        <div style={{color: '#2F5349', fontWeight: 700}}>Operation Feed the nation</div>
                        <div style={{color: '#2F5349'}}>Healthy Foods</div>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'space-between', paddingBottom: '0.5rem'}}>
                        <div style={{color: '#858585'}}>Hope for all foundation</div>
                        <div style={{color: '#858585'}}>Nigeria</div>
                    </div>
                    <Link to="/foundation">
                        <Button text="View Foundation" textStyle={{width: '100%', cursor: 'pointer', background: '#fff', fontSize: '18px', fontWeight: '800', padding: '1rem 0 1rem 0', color: '#EDC974', border: '2px solid #EDC974'}} />
                    </Link>
                </div>
                <div>
                    <div style={{gap: '2rem'}}>  
                        <div className="img-health2"></div>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0 0.5rem 0'}}>
                        <div style={{color: '#2F5349', fontWeight: 700}}>School for All People</div>
                        <div style={{color: '#2F5349'}}>Education</div>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'space-between', paddingBottom: '0.5rem'}}>
                        <div style={{color: '#858585'}}>Blessed seeds foundation</div>
                        <div style={{color: '#858585'}}>Nigeria</div>
                    </div>
                    <Link to="/foundation">
                        <Button text="View Foundation" textStyle={{width: '100%', cursor: 'pointer', background: '#fff', fontSize: '18px', fontWeight: '800', padding: '1rem 0 1rem 0', color: '#EDC974', border: '2px solid #EDC974'}} />
                    </Link>
                </div>
                <div>
                    <div style={{gap: '2rem'}}>  
                        <div className="img-health3"></div>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0 0.5rem 0'}}>
                        <div style={{color: '#2F5349', fontWeight: 700}}>Free medicals for the sick</div>
                        <div style={{color: '#2F5349'}}>Medicals</div>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'space-between', paddingBottom: '0.5rem'}}>
                        <div style={{color: '#858585'}}>Hope for all NGO</div>
                        <div style={{color: '#858585'}}>Nigeria</div>
                    </div>
                    <Link to="/foundation">
                        <Button text="View Foundation" textStyle={{width: '100%', cursor: 'pointer', background: '#fff', fontSize: '18px', fontWeight: '800', padding: '1rem 0 1rem 0', color: '#EDC974', border: '2px solid #EDC974'}} />
                    </Link>
                </div>
            </div>
        </div>
    )
};

export default Donations;