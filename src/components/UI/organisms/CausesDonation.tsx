const CausesDonation = (): JSX.Element => {
    return (
        <div className="causes">
            <div className="causes-title">Causes You Can Donate To</div>

            <div className="causes-box">
                <div>
                    <img loading="lazy" className="path-svg" src='https://svgshare.com/i/aNo.svg' alt="path1" />

                    <div><img loading="lazy" className="image-icon" src='https://svgshare.com/i/aPG.svg' alt='hf' /></div>
                    <h3 className="causes-header">Healthy food</h3>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                    sed diam nonumy eirmod tempor invidunt ut labore et dolore magna 
                    aliquyam erat, sed diam voluptua. 
                </div>
                <div className="center-box">
                    <img loading="lazy" className="path-svg2" src='https://svgshare.com/i/aNd.svg' alt="path2" />

                    <div><img loading="lazy" className="image-icon" src='https://svgshare.com/i/aPy.svg' alt='med' /></div>
                    <h3 className="causes-header">Medication</h3>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                    sed diam nonumy eirmod tempor invidunt ut labore et dolore magna 
                    aliquyam erat, sed diam voluptua. 
                </div>
                <div>
                    <img loading="lazy" className="path-svg3" src='https://svgshare.com/i/aNo.svg' alt="path3" />

                    <div><img loading="lazy" className="image-icon" src='https://svgshare.com/i/aQJ.svg' alt='edu' /></div>
                    <h3 className="causes-header">Education</h3>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                    sed diam nonumy eirmod tempor invidunt ut labore et dolore magna 
                    aliquyam erat, sed diam voluptua. 
                </div>
                <div className="center-box">
                    <div><img loading="lazy" className="image-icon" src='https://svgshare.com/i/aPb.svg' alt='water' /></div>
                    <h3 className="causes-header">Clean water</h3>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                    sed diam nonumy eirmod tempor invidunt ut labore et dolore magna 
                    aliquyam erat, sed diam voluptua. 
                </div>
            </div>
        </div>
    )
};

export default CausesDonation;