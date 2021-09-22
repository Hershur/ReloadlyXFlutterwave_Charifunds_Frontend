import Button from "../atoms/Button"

const RegisterNGO = (): JSX.Element => {
    return (
        <div className="register-ngo second-color-background">
            <div className="register-ngo-text">
                <h2 className="bold main-color">Register As NGO</h2>
                <div className="main-color register-ngo-text-sub">
                    Are you a NON Profit Organisation doing great work
                    looking for funding. Register as  NGO below
                </div>

                <div>
                    <Button text="Register" textStyle={{border: 'none', padding: '0.8rem 3rem', color: '#fff', background: '#2f5349', fontWeight: '700'}} />
                </div>
            </div>

            <div className="register-ngo-img"></div>
        </div>
    )
};

export default RegisterNGO;