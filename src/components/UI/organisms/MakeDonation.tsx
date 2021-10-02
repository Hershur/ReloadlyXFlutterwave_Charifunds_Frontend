import { 
    Box, 
    Backdrop, 
    CircularProgress, 
    IconButton, 
    InputAdornment, 
    Radio, 
    RadioGroup,
    Dialog,
    DialogActions,
    DialogTitle,
    DialogContent,
    DialogContentText 
} from "@mui/material";
import { Language, Visibility, VisibilityOff } from '@mui/icons-material';
import {
    Button,
    MenuItem,
    FormControl,
    FormControlLabel,
} from '@material-ui/core';
import { Field, Form, Formik } from "formik";
import { TextField, Switch } from 'formik-material-ui';
import * as Yup from 'yup';
import  { useContext, useState } from "react";
import { DonationContext } from "../../../contexts/donationContext";
import { Redirect } from "react-router-dom";
import axios from 'axios';


const ranges = [
    {
        value: 'Nigeria',
        label: 'Nigeria',
    },
    {
        value: 'Uganda',
        label: 'Uganda',
    }
];

enum PaymentType {
    cardPayment = "Card Payment",
    directTransfer = "Direct Transfer"
}


const api = axios.create({baseURL: 'https://charribackend.herokuapp.com/api/'});

type IDialogProps = {
    open: boolean;
    title?: string;
    description?: string;
    okText?: string;
    redirectURL?: string;
    respClass?: string;
}

const MakeDonation = (): JSX.Element => {
    const { donation } = useContext(DonationContext);
    const [ showPassword, setShowPassword ] = useState(false);
    const [ successful ] = useState(false);
    const [ dialogProps, setDialogProps] = useState<IDialogProps>({
        open: false,
        title: '',
        description: '',
        okText: ''
    });

    const handleDialogOkClick = ()=> {
        setDialogProps({open: false});
        if(dialogProps.redirectURL) {
            window.location.href = dialogProps.redirectURL || '';
        }
    }

    if(successful){
        return <Redirect to="/success" />
    } else if (!(donation.amount)){
        return <Redirect to="/foundation" />
    }
    
    console.log(donation.amount);
    return (
        <>
            <div className="returning-customer">
                <Language sx={{color: '#2F5349'}} /> Returning Customer? <a href="/" className="main-color bold">Click here to login</a>
            </div>


            <Dialog
                open={dialogProps.open}
                onClose={handleDialogOkClick}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle className={dialogProps.respClass} id="alert-dialog-title">
                    {/* {"Error occured while processing payment"} */}
                    {dialogProps.title}
                </DialogTitle>

                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <div>
                            {dialogProps.description}
                        </div>
                    </DialogContentText>
                </DialogContent>

                <DialogActions>
                    {/* <a {} href= {dialogProps.redirectURL}> */}
                        <Button onClick={handleDialogOkClick}>
                            {dialogProps.okText}
                        </Button>
                    {/* </a> */}
                </DialogActions>
            </Dialog>
            

            <Formik
                initialValues={{
                    email: '',
                    state: '',
                    country: 'Nigeria',
                    firstname: '',
                    lastname: '',
                    card_number: '',
                    phone_number: '',
                    cvv: '',
                    expirydate: '',
                    rememberMe: false,
                    paymentType: PaymentType.cardPayment.toString()
                }}
                // validate={(values) => {
                // const errors: Partial<Values> = {};
                // if (!values.email) {
                //     errors.email = 'Required';
                // } else if (
                //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
                // ) {
                //     errors.email = 'Invalid email address';
                // }
                // return errors;
                // }}
                validationSchema={Yup.object().shape({
                    email: Yup.string()
                      .email('Invalid Email Address')
                      .required('Required'),
                    firstname: Yup.string()
                      .required('Required'),
                    phone_number: Yup.string()
                      .required('Required'),
                    lastname: Yup.string()
                      .required('Required'),
                    country: Yup.string()
                      .required('Required'),
                    card_number: Yup.string()
                      .max(19, 'Maximum 19 digits')
                      .required('Required'),
                    cvv: Yup.string()
                      .required('Required')
                      .min(3, 'Minimum 3 digits')
                      .max(4, 'Maximum 4 digits'),
                    expirydate: Yup.string()
                      .matches(
                        /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/,
                        'Not a valid expiration date. Example: MM/YY'
                      )
                      .required('Required')
                      .min(5, 'Format MM/YY')
                      .max(5, 'Invalid format')
                    // comment: Yup.string()
                    //   .required('Required'),
                })}
                

                onSubmit={(values, {setSubmitting}) => {
                    setSubmitting(true);

                    const mapValues = {
                        card_number: values.card_number.toString().replace(/\s/g,''),
                        cvv: values.cvv,
                        expiry_month: values?.expirydate?.split('/')[0], 
                        expiry_year: values?.expirydate?.split('/')[1],
                        amount: `${donation.amount}`,
                        fullname: `${values.firstname} ${values.lastname}`,
                        email: values.email,
                        phone_number: values.phone_number,

                    };

                    console.log(JSON.stringify(mapValues));


                    api.post('flutterwave/charge-card', mapValues)
                    .then(response => {
                        setSubmitting(false);
                        setDialogProps({open: true, title: response.data.chargeCardResponse.data.message, description: `Charge has been initiated on your card, kindly proceed 
                        to provide the OTP sent to your email '${response.data.chargeCardResponse.data.data.customer.email}' to complete this transaction`, okText: 'Proceed', redirectURL: response.data.chargeCardResponse.data.meta.authorization.redirect})

                        localStorage.setItem('donorName', mapValues?.fullname);
                        localStorage.setItem('topUpResponse', JSON.stringify(response.data.topUpResponse));
                        // console.log(response)
                    })
                    .catch(error => {
                        setSubmitting(false);

                        // console.log(error.response.data);

                        setDialogProps({open: true, title: "Error occured while processing payment", description: `We encountered an error while processing your payment,
                        kindly check that your card details are correctly entered and try again.
                        We apologize for any inconvenience this may have caused you.`, okText: 'OK', respClass: 'error-response'});
                        
                    })
                    .finally(()=> {
                        console.log(dialogProps)
                    });

                    // setTimeout(() => {
                    //     addDonation({amount: donation.amount, donorName: values.firstname})
                    //     setSuccessful(true);
                    //     // alert(JSON.stringify(values, null, 2));
                    // }, 500);
                }}
            >
                {({submitForm, setFieldValue, isSubmitting, values, touched, errors, handleChange}) => (
                    <Form key="1">
                        <div style={{display: 'grid', gap: '2rem', gridTemplateColumns: '1.5fr 1fr', width: '90%', margin: 'auto'}}>

                            <div className="billing-details">
                                <h2 className="main-color">Billing Details</h2>

                                <Box sx={{marginBottom: '1.5rem', display: 'grid', gap: '1rem', gridTemplateColumns: '1fr 1fr'}}>
                                    <Field
                                        component={TextField}
                                        type="text"
                                        label="First name"
                                        name="firstname"
                                        variant="outlined"
                                        size="small"
                                        helperText={(errors.firstname && touched.firstname) && errors.firstname}
                                        />
                                    <Field
                                        component={TextField}
                                        type="text"
                                        label="Last name"
                                        name="lastname"
                                        variant="outlined"
                                        size="small"
                                        helperText={(errors.lastname && touched.lastname) && errors.lastname}
                                    />
                                </Box>

                                <Box sx={{marginBottom: '1.5rem'}}>
                                    <Field
                                        value={values.country}
                                        component={TextField}
                                        type="text"
                                        name="country"
                                        label="Country"
                                        select
                                        variant="outlined"
                                        size="small"
                                        // margin="normal"
                                        // InputLabelProps={{
                                        //     shrink: true,
                                        // }}
                                        fullWidth
                                    >
                                        {ranges.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                        </MenuItem>
                                    ))}
                                    </Field>
                                </Box>

                                <Box sx={{marginBottom: '1.5rem'}}>
                                    <Field
                                        component={TextField}
                                        name="address"
                                        type="text"
                                        label="Street address"
                                        variant="outlined"
                                        size="small"
                                        fullWidth
                                    />
                                </Box>


                                <Box sx={{marginBottom: '1.5rem', display: 'grid', gap: '1rem', gridTemplateColumns: '1fr 1fr'}}>
                                    <Field
                                        component={TextField}
                                        type="text"
                                        label="Town"
                                        name="town"
                                        variant="outlined"
                                        size="small"
                                    />
                                    <Field
                                        component={TextField}
                                        type="text"
                                        name="state"
                                        label="State"
                                        // select
                                        variant="outlined"
                                        size="small"
                                    />
                                        {/* {ranges.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </Field> */}
                                </Box>

                                <Box sx={{marginBottom: '1.5rem', display: 'grid', gap: '1rem', gridTemplateColumns: '1fr 1fr'}}>
                                    <Field
                                        component={TextField}
                                        type="text"
                                        label="ZIP"
                                        name="countryZip"
                                        variant="outlined"
                                        size="small"
                                    />
                                    <Field
                                        component={TextField}
                                        type="text"
                                        label="Phone no"
                                        name="phone_number"
                                        variant="outlined"
                                        size="small"
                                    />
                                </Box>

                                <Box sx={{marginBottom: '1.5rem'}}>
                                    <Field
                                        component={TextField}
                                        name="email"
                                        type="text"
                                        label="Email address"
                                        variant="outlined"
                                        size="small"
                                        fullWidth
                                    />
                                </Box>

                                <Backdrop
                                    sx={{ color: '#fff', zIndex: 1000 }}
                                    open={isSubmitting}
                                >
                                    <CircularProgress color="inherit" />
                                </Backdrop>
                                
                            </div>

                            <div className="donation-details main-color">
                                <h2>Your Donation - ${Intl.NumberFormat().format(+donation.amount)}</h2>
                                <div className="main-color">Donation Details</div>

                                <div className="donation-details-box">
                                    <div className="donation-details-item">
                                        <div>
                                            Donation Amount -
                                        </div>
                                        <div className="bold">
                                            ${Intl.NumberFormat().format(+donation.amount)}
                                        </div>
                                    </div>
                                    <div className="donation-details-item">
                                        <div>
                                            Donation To -
                                        </div>
                                        <div className="bold">
                                            Hope for All NGO
                                        </div>
                                    </div>
                                    <div className="donation-details-item">
                                        <div>
                                            Project -
                                        </div>
                                        <div className="bold">
                                            Operation Feed the nation
                                        </div>
                                    </div>
                                </div>


                                <Box sx={{marginBlock: '0.8rem'}}>
                                    <FormControlLabel
                                        control={
                                            <Field  component={Switch} type="checkbox" name="rememberMe" />
                                        }
                                        label="Make me anonymous"
                                    />
                                </Box>

                                <Box sx={{margin: '0.8rem'}}>
                                    <FormControl component="fieldset">
                                        <RadioGroup sx={{display: 'grid', gridTemplateColumns: '1.3fr 1.1fr', fontWeight: 700}} row name="paymentType" value={values.paymentType.toString()} onChange={(event) => {
                                            setFieldValue("paymentType", event.currentTarget.value)
                                            }}>
                                            {
                                                Object.values(PaymentType).map(paymentType => (
                                                    <>
                                                        <FormControlLabel key={paymentType} value={paymentType} control={<Radio sx={{'&.Mui-checked': {color: "#2F5349"}}} />} label={paymentType} />
                                                    </>

                                                ))
                                            }
                                        </RadioGroup>
                                    </FormControl>
                                </Box>

                                <Box sx={{marginBottom: '1.5rem'}}>
                                    <Field
                                        component={TextField}
                                        name="card_number"
                                        type="number"
                                        label="Card number"
                                        variant="outlined"
                                        size="small"
                                        fullWidth
                                    />
                                </Box>

                                <Box sx={{marginBottom: '1.5rem', display: 'grid', gap: '1rem', gridTemplateColumns: '1fr 1fr'}}>
                                    <Field
                                        component={TextField}
                                        type="text"
                                        label="Expiry date"
                                        name="expirydate"
                                        variant="outlined"
                                        size="small"
                                        onChange={(event: any) => {
                                            console.log(!(String(event.currentTarget.value).indexOf('/') > 0));
                                            setFieldValue("expirydate", String(event.currentTarget.value).length === 2 && !(String(event.currentTarget.value).indexOf('/') > 0) ? `${event.currentTarget.value}/` : event.currentTarget.value  )
                                        }}
                                    />

                                    <Field
                                        component={TextField}
                                        type={showPassword ? 'text' : 'password'}
                                        label="CVV"
                                        name="cvv"
                                        variant="outlined"
                                        size="small"
                                        InputProps={{
                                            endAdornment:
                                                <InputAdornment position="end">
                                                  <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={()=> setShowPassword(!showPassword)}
                                                    onMouseDown={()=> setShowPassword(!showPassword)}
                                                    edge="end"
                                                  >
                                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                                  </IconButton>
                                                </InputAdornment>,
                                        }}
                                    />
                                </Box>

                                <Box sx={{marginBottom: '1.5rem'}}>
                                    <Button
                                        variant="contained"
                                        disabled={isSubmitting}
                                        onClick={submitForm}
                                        fullWidth
                                        className="second-color-background main-color bold"
                                    >
                                        Make Donation
                                    </Button>
                                </Box>

                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </>
    );
};

export default MakeDonation;