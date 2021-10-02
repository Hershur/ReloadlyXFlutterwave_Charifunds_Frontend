import { FormatQuote } from "@mui/icons-material";

const Testimonials = (): JSX.Element => {
    return (
        <div className="testimonials-box">
            <div className="testimonials">
                <div style={{display: "flex", justifyContent: 'space-between', paddingBlock: '1rem'}}>
                    <h1 style={{color: '#2F5349', width: '25rem', fontWeight: 700}}>
                        Testimonials
                    </h1>
                </div>

                <div className="testimonial-grid" style={{display: 'grid', gridTemplateColumns: '1.5fr 1fr'}}>
                    <div>
                        <div className="testimonial-img-box">  
                            <div className="testimonial-img"></div>
                        </div>
                    </div>

                    <div>
                        <div style={{display: 'flex', justifyContent: 'space-between'}}>
                            <FormatQuote sx={{color: '#EDC974', transform: 'rotate(180deg) translate(2rem, -1rem)'}} />
                            <FormatQuote sx={{color: '#EDC974', transform: 'translate(1rem, 1.4rem)'}} />
                        </div>
                        <h2 className="main-color">ChariFunds help children feed in my country</h2>

                        <div className="main-color">
                            Thank you for the generous contributions throughout the years. Donors like you 
                            make it possible for the expansion and development of facilities. This Organisation
                            makes college education both accessible and affordable. Donors like you help us transform 
                            our community, one student at at time.
                        </div>

                        <div className="testimonial-name">John Dumelo. Lagos, Nigeria</div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Testimonials