import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import Button from '../atoms/Button';

const Donations = (): JSX.Element => {
    return (
        <div className="donations">
            <div style={{display: "flex", justifyContent: 'space-between', paddingBlock: '1rem'}}>
                <h1 style={{color: '#2F5349', width: '25rem', fontWeight: 700}}>
                    You can help lots of people by donating little
                </h1>

                <div style={{display: "flex", gap: '3rem', paddingBlock: '1rem'}}>
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
                    <div style={{display: 'flex', justifyContent: 'space-between', paddingBlock: '0.5rem'}}>
                        <div style={{color: '#2F5349', fontWeight: 700}}>Operation Feed the nation</div>
                        <div style={{color: '#2F5349'}}>Healthy Foods</div>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'space-between', paddingBottom: '0.5rem'}}>
                        <div style={{color: 'grey'}}>Hope for all NGO</div>
                        <div style={{color: 'grey'}}>Nigeria</div>
                    </div>
                    <Button text="View Foundation" textStyle={{width: '100%', background: '#fff', fontSize: '16px', paddingBlock: '1rem', color: '#EDC974', border: '2px solid #EDC974'}} />
                </div>
                <div>
                    <div style={{gap: '2rem'}}>  
                        <div className="img-health2"></div>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'space-between', paddingBlock: '0.5rem'}}>
                        <div style={{color: '#2F5349', fontWeight: 700}}>Operation Feed the nation</div>
                        <div style={{color: '#2F5349'}}>Education</div>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'space-between', paddingBottom: '0.5rem'}}>
                        <div style={{color: 'grey'}}>Hope for all NGO</div>
                        <div style={{color: 'grey'}}>Nigeria</div>
                    </div>
                    <Button text="View Foundation" textStyle={{width: '100%', background: '#fff', fontSize: '16px', paddingBlock: '1rem', color: '#EDC974', border: '2px solid #EDC974'}} />
                </div>
                <div>
                    <div style={{gap: '2rem'}}>  
                        <div className="img-health3"></div>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'space-between', paddingBlock: '0.5rem'}}>
                        <div style={{color: '#2F5349', fontWeight: 700}}>Operation Feed the nation</div>
                        <div style={{color: '#2F5349'}}>Healthy Foods</div>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'space-between', paddingBottom: '0.5rem'}}>
                        <div style={{color: 'grey'}}>Medicals</div>
                        <div style={{color: 'grey'}}>Nigeria</div>
                    </div>
                    <Button text="View Foundation" textStyle={{width: '100%', background: '#fff', fontSize: '16px', paddingBlock: '1rem', color: '#EDC974', border: '2px solid #EDC974'}} />
                </div>
            </div>
        </div>
    )
};

export default Donations;