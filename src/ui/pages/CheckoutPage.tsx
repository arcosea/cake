import { useEffect, useState } from "react"
import { Box, Stepper, Step, StepLabel, Stack, Typography, Button, Divider, Paper, Snackbar, AlertProps, createMuiTheme} from "@mui/material"
import { DataManager } from "../../utils/DataManager";
import { Headers, NoYesOptions, ProductAddOns, createAsanaEvent, fetchAsanaTasks } from "../../utils/data";
import SwitchController from "../components/SwitchController";
import AddItemsForm from "../categories/AddItemsForm";
import CakeCustomizationForm from "../categories/CakeCustomizationForm";
import CakeSpecialNotesForm from "../categories/CakeSpecialNotesForm";
import ContactForm from "../categories/ContactForm";
import OrderSummaryCard from "../categories/OrderSummaryCard";
import emailjs from '@emailjs/browser';
import React from "react";
import MuiAlert from '@mui/material/Alert';
export { createAsanaEvent } from "../../utils/data"

const steps: string[] = ["Order", "Add-Ons", "Contact Info", "Summary"];
let manager: DataManager = new DataManager();
const SERVICE_ID: string = process.env.REACT_APP_EJS_SERVICE_ID!;
const TEMPLATE_ID: string = process.env.REACT_APP_EJS_TEMPLATE_ID!;
const USER_ID: string = process.env.REACT_APP_EJS_USER_ID!;
const ASANA_PROJECT_ID: string = process.env.REACT_APP_ASANA_PROJECT_ID!;
const ASANA_API_URL: string = process.env.REACT_APP_ASANA_API_URL!;
const ASANA_ACCESS_TOKEN: string = process.env.REACT_APP_ASANA_ACCESS_TOKEN!;

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
  ) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
  
interface ICheckoutPageProp{
    defaultValue: number,
    onChange: Function
}
export default function CheckoutPage({defaultValue, onChange}: ICheckoutPageProp){
    /**
     * Handle movements between different steps
     */
    const [activeStep, setActiveStep] = useState(defaultValue)
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    }
    const handleReset = () => {
        setActiveStep(0);
        manager.resetData();
        handleOrderingCakeChanges(false);
    };

    // fetchAsanaTasks(ASANA_API_URL, ASANA_PROJECT_ID, ASANA_ACCESS_TOKEN);

    
    const handleSubmit = (e: any) => {
        e.preventDefault();
        // createAsanaEvent(ASANA_API_URL, ASANA_PROJECT_ID, ASANA_ACCESS_TOKEN, manager.getTask());
        emailjs.send(SERVICE_ID, TEMPLATE_ID, manager.getDetails() as Record<string, unknown>, USER_ID)
            .then((response) => {
                createAsanaEvent(ASANA_API_URL, ASANA_PROJECT_ID, ASANA_ACCESS_TOKEN, manager.getTask()).then( () => {
                    setSnackbarConfig({severity: 'success', message: 'Success: Your order was submitted! Check your email for confirmation.', open: true});      
                    handleReset();
                });
                
            })
            .catch((error) => {
                setSnackbarConfig({severity: 'error', message: 'Error: Failed to submit your order. Please try again.', open: true});
            });
    }

    function handleNextClick(e: any){
        if(activeStep === steps.length - 1){
            handleSubmit(e);
        } else{
            handleNext();
        }
    }

    // Auto scrolls to the top after rendering
    useEffect(() => {
        window.scrollTo(0, 0);
        onChange(activeStep);
    }, [activeStep]);

    // Determine if form is filled properly
    const [isFormFilled, setIsFormFilled] = useState(false);
    const handleFormFilledChange = (isFilled: boolean) => {
        setIsFormFilled(isFilled);
    };

    /**
     * Updates to data manager
     */
    const handleOrderCriteriaChanges = (criteriaType: string, value: any) => {
        manager.updateOrderCriteria(criteriaType, value);
    }

    const handleOrderSpecialNotesChanges = (criteriaType: string, value: any) => {
        if(criteriaType === Headers.FILE_UPLOAD){
            manager.updateFileUpload(value[0], value[1]);
        } else{
            manager.updateSpecialNotes(criteriaType, value);
        }     
    }

    const handleContactOrderFormChanges = (criteriaType: string, value: any) => {
        manager.updateContactInfo(criteriaType, value);
    }

    const [isOrderingCake, setIsOrderingCake] = useState(manager.isOrderingCake);
    const handleOrderingCakeChanges = (isOrdering: boolean) => {
        setIsOrderingCake(isOrdering);
        manager.updateOrderingCake(isOrdering);
    }

    const handleProductAddOnChanges = (itemName: string, quantity: number) => {
        manager.updateAdditionalAddOns(itemName, quantity);
    }

    const handleSummaryEditClick = (type: string) => {
        if(type === Headers.CAKE){
            setActiveStep(0)
        } else if(type === Headers.ADDITIONAL_ITEMS){
            setActiveStep(1);
        }
    }

    /**
     * Snack bar
     */
    const [snackbarConfig, setSnackbarConfig] = useState<{open: boolean, message: string, severity: 'success' | 'error'}>({open: false, message: '', severity: 'success'});
    const handleSnackbarClose = (event?: React.SyntheticEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setSnackbarConfig(prevState => ({
            ...prevState,  
            open: false   
        }));
    };

    /**
     * Function to display orders in summary page
     */
    function displayCakeOrderingForm(){
        if(isOrderingCake){
            return (
                <Paper elevation={5} sx={{marginBottom: 2, border: 1, padding: 2}}>
                    <Typography sx={{backgroundColor: "#1976d2", marginBottom: 3, color: "whitesmoke"}}> Customize Your Cake</Typography>
                    <CakeCustomizationForm onChange={handleOrderCriteriaChanges} defaultValues={manager.orderCriteria}/>
                    <Divider sx={{border: 1, margin: 2}}/>
                    <Typography sx={{backgroundColor: "#1976d2", marginBottom: 3, color: "whitesmoke"}}> Special Requests</Typography>
                    <CakeSpecialNotesForm onChange={handleOrderSpecialNotesChanges} defaultValue={manager.additionalRequests}/>
                </Paper>
            )
        } else{
            return <></>
        }
    }

    /** 
     * Next and Previous buttons
     */
    function disableNextButton(){
        if(activeStep === 2){
            return !isFormFilled
        } else if(activeStep === 3){
            return manager.noOrder;
        } else {
            return false;
        }
    }
    
    function addNextBackButtons(){
        return (
            <Box sx={{marginTop: 5, marginBottom: 5, justifyContent: "center", position: "flex", textAlign: "center", height: "4rem"}}>  
                <Paper elevation={3} sx={{display: "inline-block"}}>
                    <Button
                        color="inherit"
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        sx={{ mr: 1, border: 1, backgroundColor: "#d3d3d3"}}
                    > 
                        Back
                        </Button>
                    <Button 
                        id="nextButton"
                        onClick={(e) => handleNextClick(e)} 
                        disabled={disableNextButton()} 
                        sx={{border: 1}}
                    >
                        {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
                    </Button>
                </Paper>
                
            </Box>
        )
    }
    
    function addContent(step: any ){
        if(activeStep === steps.length){
            return (
                <>
                    <Typography sx={{ mt: 2, mb: 1 }}>
                        Your order was submitted! 
                        Check your email for confirmation.
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Box sx={{ flex: '1 1 auto' }} />
                        <Button onClick={handleReset} sx={{border: 1}}>Reset</Button>
                    </Box>
                    
                </>
            )
            
        } else if (activeStep === 0){
            return (
                <>
                    <SwitchController label={Headers.ORDERING_A_CAKE} options={NoYesOptions} defaultValue={manager.isOrderingCake} onChange={handleOrderingCakeChanges} />                 
                    {displayCakeOrderingForm()}
                    {addNextBackButtons()}
                </>
            )
        } else if (activeStep === 1){
            return (
                <>
                    <AddItemsForm values={manager.additionalAddOns} onChange={handleProductAddOnChanges} />
                    {addNextBackButtons()}
                </>
            )
        } else if (activeStep === 2){
            return (
                <>
                    <Paper
                       elevation={5}
                    >
                        <ContactForm onChange={handleContactOrderFormChanges} defaultValues={manager.contactInfo} disableDatesBefore={manager.earliestPickupDate} disabledHours={manager.unavailableHours} onFormFilledChange={handleFormFilledChange}/>
                    </Paper>
                    
                    {addNextBackButtons()}
                </>
            )
            
        } else if (activeStep === 3){
            return (
                <>
                    <OrderSummaryCard  
                        cakeDescription={manager.isOrderingCake? manager.getCakeOrderSummary(): ""}
                        addItems={manager.getItemSummary()} 
                        onClick={handleSummaryEditClick}
                    />
                    {addNextBackButtons()}
                    
                </>
            )
            
        } else {
            return (
                <>
                    <Typography> Step {activeStep} </Typography>
                    {addNextBackButtons()}
                </>
            )
        }
    }


    return (
        <>
            <Box sx={{ width: '100%',  height: "100%"}}>
                <Stepper activeStep={activeStep} sx={{backgroundColor: "#F5EDE673", height: "4rem", width: "100%"}}>
                    {steps.map((label, index) => {
                        const stepProps: { completed?: boolean } = {};
                        const labelProps: {
                            optional?: React.ReactNode;
                        } = {};
            
                    return (
                        <Step key={label} {...stepProps}
                            sx={{
                                '& .MuiStepLabel-root .Mui-completed svg': {
                                    color: "green"
                                }
                            }}>
                            <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>
                    );
                    })}
                </Stepper>
                <Divider sx={{paddingTop: 2}}/>
            </Box>

            <Box sx={{width: "100%", justifyContent: "center", alignItems: "center", display: "flex"}}>    
                <Box sx={{marginTop: 2}}>
                    {addContent(activeStep)}
                </Box>
            </Box> 
                <Snackbar
                    open={snackbarConfig.open}
                    autoHideDuration={6000}
                    onClose={(e) => handleSnackbarClose}
                    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                >
                    <Alert onClose={handleSnackbarClose} severity={snackbarConfig.severity}>
                        {snackbarConfig.message}
                    </Alert>
                </Snackbar>
                
             
                    
        </>
    )
}