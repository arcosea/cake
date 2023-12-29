import { useEffect, useState } from "react"
import { Box, Stepper, Step, StepLabel, FormControl, FormLabel, FormGroup, Stack, Switch, Typography, Button, Divider, Paper} from "@mui/material"
import { DataManager } from "../../utils/DataManager";
import { Headers, NoYesOptions, ProductAddOns } from "../../utils/data";
import DisplayDetails from "../components/DisplayDetails";
import SwitchController from "../components/SwitchController";
import AddItemsForm from "../categories/AddItemsForm";
import CakeCustomizationForm from "../categories/CakeCustomizationForm";
import CakeSpecialNotesForm from "../categories/CakeSpecialNotesForm";
import ContactForm from "../categories/ContactForm";
import OrderSummaryCard from "../categories/OrderSummaryCard";
import emailjs from '@emailjs/browser';


const steps: string[] = ["Order a Cake", "Additional Add-Ons", "Contact Information", "Order Summary"];
let manager: DataManager = new DataManager();
const SERVICE_ID: string = process.env.REACT_APP_EJS_SERVICE_ID!;
const TEMPLATE_ID: string = process.env.REACT_APP_EJS_TEMPLATE_ID!;
const USER_ID: string = process.env.REACT_APP_EJS_USER_ID!;

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

    const handleSubmit = (e: any) => {
        e.preventDefault();
        let fileUp: any = manager.getFileUpload()!;
        console.log(fileUp)
        var canvas = document.createElement("canvas");
        
        let ctx: CanvasRenderingContext2D= canvas.getContext("2d")!;
        ctx.drawImage(fileUp, 10, 10)!;
        var encodedBase = canvas.toDataURL();

        const details = {
            order_number: manager.confirmationNumber,
            user_first_name: manager.getContactInfo(Headers.FIRST_NAME),
            user_last_name: manager.getContactInfo(Headers.LAST_NAME),
            user_email: manager.getContactInfo(Headers.EMAIL),
            user_phone_number: manager.getContactInfo(Headers.PHONE_NUMBER),
            pick_up_date: manager.getContactInfo(Headers.PICKUP_DATE),
            cake_order: manager.getCakeOrderSummary(),
            other_items: manager.getItemSummary(),
            file: encodedBase
        }

        

        emailjs.send(SERVICE_ID, TEMPLATE_ID, details, USER_ID)
            .then((response) => {
              console.log('Email sent!', response);
              handleNext();
            })
            .catch((error) => {
              console.error('Error sending email:', error);
        });

    }

    function handleNextClick(e: any){
        if(activeStep === steps.length - 1){
            handleSubmit(e);
            handleNext();
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
                        disabled={activeStep === 2? !isFormFilled : false} 
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
                        All steps completed - you&apos;re finished
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
                    {/* <DisplayDetails details={manager.orderDetails()} /> */}
                    <OrderSummaryCard cakeTitle={manager.isOrderingCake? manager.getCakeOrderTitle(): "Not Ordering Cake"} 
                        cakeDescription={manager.isOrderingCake? manager.getCakeOrderSummary(): ""}
                        addItems={manager.getAdditionalItemOrderSummary()} 
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
                <Stepper activeStep={activeStep} orientation="vertical" sx={{backgroundColor: "#F5EDE673"}}>
                    {steps.map((label, index) => {
                    const stepProps: { completed?: boolean } = {};
                    const labelProps: {
                        optional?: React.ReactNode;
                    } = {};
            
                    return (
                        <Step key={label} {...stepProps}>
                            <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>
                    );
                    })}
                </Stepper>
                
                <Box sx={{marginTop: 2}}>
                    {addContent(activeStep)}
                </Box>
                
                
             
            </Box>         
        </>
    )
}