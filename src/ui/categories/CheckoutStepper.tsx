import { useEffect, useState } from "react"
import { Box, Stepper, Step, StepLabel, Typography, Button} from "@mui/material"
import OrderForm from "../components/OrderForm";
import OrderSpecialNotes from "../components/OrderSpecialNotes";
import OrderList from "../components/OrderList";
import OrderCategories from "../components/OrderCategories";
import { DataManager } from "../../utils/DataManager";
import { Headers } from "../../utils/data";
import DisplayDetails from "../components/DisplayDetails";


const steps: string[] = ["Customize Order", "Special Requests", "Contact Information", "Order Summary"];
let manager: DataManager = new DataManager();

export default function CheckoutStepper(){
    /**
     * Handle movements between different steps
     */
    const [activeStep, setActiveStep] = useState(0)
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    }
    const handleReset = () => {
        setActiveStep(0);
        manager.resetData();
    };

    // Auto scrolls to the top after rendering
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

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
        if(criteriaType ===  Headers.SPECIAL_REQUEST){
            manager.updateSpecialNotes(value);
        } else if(criteriaType === Headers.FILE_UPLOAD){
            manager.updateFileUpload(value[0], value[1]);
        }        
    }

    const handleContactOrderFormChanges = (criteriaType: string, value: any) => {
        manager.updateContactInfo(criteriaType, value);
    }

    
    /** 
     * Next and Previous buttons
     */
    function addNextBackButtons(){
        return (
            <Box sx={{marginTop: 5, marginBottom: 5, justifyContent: "center", position: "flex", textAlign: "center", height: "4rem"}}>  
                
                <Button
                    color="inherit"
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    sx={{ mr: 1 }}
                > 
                    Back
                    </Button>
                <Button onClick={handleNext} disabled={activeStep === 2? !isFormFilled : false}>
                        {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
                </Button>
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
                        <Button onClick={handleReset}>Reset</Button>
                    </Box>
                </>
            )
            
        } else if (activeStep === 0){
            return (
                <>
                    <OrderCategories onChange={handleOrderCriteriaChanges} defaultValues={manager.orderCriteria}/>
                    {addNextBackButtons()}
                </>
            )
        } else if (activeStep === 1){
            return (
                <>
                    <OrderSpecialNotes onChange={handleOrderSpecialNotesChanges} defaultValue={manager.additionalRequests}/>
                    {addNextBackButtons()}
                </>
            )
        } else if (activeStep === 2){
            return (
                <>
                    <OrderForm onChange={handleContactOrderFormChanges} defaultValues={manager.contactInfo} disableDatesBefore={manager.earliestPickupDate} onFormFilledChange={handleFormFilledChange}/>
                    {addNextBackButtons()}
                </>
            )
            
        } else if (activeStep === 3){
            return (
                <>
                    <DisplayDetails details={manager.orderDetails()} />
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