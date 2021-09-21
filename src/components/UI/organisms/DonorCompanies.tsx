import Button from "../atoms/Button";

const DonorCompanies = (): JSX.Element => {
    return (
        <div className="donors-companies">
            <div className="donors-companies-image"></div>

            <div className="donor-counts-box">
                <div className="donor-counts">
                    <div style={{display: "flex", justifyContent: 'space-between'}}>
                        <div style={{display: "flex", gap: '6px'}}>
                            <div><img loading="lazy" src='https://svgshare.com/i/aPG.svg' alt='card' /></div>
                            <div style={{display: "flex", flexDirection: "column"}}>
                                <div style={{fontSize: '22px', color: '#fff'}}>1700+</div>
                                <div style={{fontSize: '13px', color: '#EBEEED'}}>Donation Received</div>
                            </div>
                        </div>

                        <div style={{display: "flex", gap: '6px'}}>
                            <div><img loading="lazy" src='https://svgshare.com/i/aPG.svg' alt='card' /></div>
                            <div style={{display: "flex", flexDirection: "column"}}>
                                <div style={{fontSize: '22px', color: '#fff'}}>$1M+</div>
                                <div style={{fontSize: '13px', color: '#EBEEED'}}>Money Donated</div>
                            </div>
                        </div>
                    </div>

                    <div style={{display: "flex", justifyContent: 'space-between'}}>
                        <div style={{display: "flex", gap: '6px'}}>
                            <div><img loading="lazy" src='https://svgshare.com/i/aPG.svg' alt='card' /></div>
                            <div style={{display: "flex", flexDirection: "column"}}>
                                <div style={{fontSize: '22px', color: '#fff'}}>1000+</div>
                                <div style={{fontSize: '13px', color: '#EBEEED'}}>Donors</div>
                            </div>
                        </div>

                        <div style={{display: "flex", gap: '6px'}}>
                            <div><img loading="lazy" src='https://svgshare.com/i/aPG.svg' alt='card' /></div>
                            <div style={{display: "flex", flexDirection: "column"}}>
                                <div style={{fontSize: '22px', color: '#fff'}}>35+</div>
                                <div style={{fontSize: '13px', color: '#EBEEED'}}>Verified NGOs</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{width: '70%', margin: 'auto', textAlign: 'center', marginTop: '1rem', paddingBlock: '1.5rem', fontSize: '18px', color: '#EDC974', fontWeight: 700}}>
                    We connect Non-Profits, Donors and Companies in every country <br/>
                    <div>
                        <Button text="Learn more" textStyle={{fontWeight: '600', marginTop: '1rem', background: 'transparent',  color: '#EDC974', padding: '1rem 2rem', border: '1px solid #EDC974'}} />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default DonorCompanies;