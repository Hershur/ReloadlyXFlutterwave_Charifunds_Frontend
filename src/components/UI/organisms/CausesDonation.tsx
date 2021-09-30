const CausesDonation = (): JSX.Element => {
    return (
        <div className="causes">
            <div className="causes-title">Causes You Can Donate To</div>

            <div className="causes-box main-color">
                <div>
                    <img loading="lazy" className="path-svg" src='https://svgshare.com/i/aNo.svg' alt="path1" />

                    <div><img loading="lazy" className="image-icon" src='https://svgshare.com/i/aPG.svg' alt='hf' /></div>
                    <h3 className="causes-header">Healthy food</h3>
                        1 in 9 children goes to bed hungry every night. Start giving with Hope for all foundation. 
                        Be part of the generation that ends hunger. 
                </div>
                <div className="center-box main-color">
                    <img loading="lazy" className="path-svg2" src='https://svgshare.com/i/aNd.svg' alt="path2" />

                    <div><img loading="lazy" className="image-icon" src='https://svgshare.com/i/aPy.svg' alt='med' /></div>
                    <h3 className="causes-header">Medication</h3>
                        Did you know 40% of the world’s population die due to lack of access to medical care? 
                        Every dollar makes a difference. Contribute today to create a better tomorrow. 
                </div>
                <div>
                    <img loading="lazy" className="path-svg3" src='https://svgshare.com/i/aNo.svg' alt="path3" />

                    <div><img loading="lazy" className="image-icon" src='https://svgshare.com/i/aQJ.svg' alt='edu' /></div>
                    <h3 className="causes-header">Education</h3>
                        &quot;No money, no education&quot;. Many young adults do not finish school due to 
                        lack of funds or insufficient funds. And we know education plays a crucial role in the 
                        future earning potential and living conditions as well giving young adults greater agency 
                        and decision making power.
                </div>
                <div className="center-box main-color">
                    <div><img loading="lazy" className="image-icon" src='https://svgshare.com/i/aPb.svg' alt='water' /></div>
                    <h3 className="causes-header">Clean water</h3>
                        Donate to charity: water and join us in our mission to end the water crisis. 
                        100% of your donation brings clean water to people in need. 
                </div>
            </div>
        </div>
    )
};

export default CausesDonation;