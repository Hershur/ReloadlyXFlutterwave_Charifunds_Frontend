import Button from "../atoms/Button";

const RegisterVolunteer = (): JSX.Element => {
    return (
        <div className="volunteer">
            <h2 className="main-color" style={{textAlign: 'center'}}>Help Us Now</h2>

            <div className="register-box">
                <h3 className="main-color bold">Become A Volunteer Of ChariFunds</h3>

                <div className="register-form">
                    <div>
                        <input className="volunteer-input" type="text" placeholder="Full name"/>
                    </div>
                    <div>
                        <input className="volunteer-input" type="text" placeholder="Email Address"/>
                    </div>
                    <div>
                        <Button text="Register" textStyle={{fontWeight: '600', background: '#EDC974', color: '#fff', padding: '0.8rem 3rem', border: 'none'}} />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default RegisterVolunteer;