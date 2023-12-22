import { useState } from "react"
import { Box, Stepper, Step, StepLabel, Typography, Button} from "@mui/material"
import OrderForm from "./OrderForm";
import OrderSpecialNotes from "./OrderSpecialNotes";
import OrderList from "./OrderList";


const steps: string[] = ["Verify Items", "Special Requests", "Contact Information", "Order Summary"]

interface IOrderConfirmationStepper{
    orders: Map<string, number>
    prices: Map<string, number>
}
export default function OrderConfirmationStepper({orders, prices}: IOrderConfirmationStepper){
    const [activeStep, setActiveStep] = useState(0)
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    }

    const handleReset = () => {
        setActiveStep(0);
    };

    function addNextBackButtons(){
        return (
            <>        
                <Button
                    color="inherit"
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    sx={{ mr: 1 }}
                > 
                    Back
                    </Button>
                <Button onClick={handleNext}>
                        {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
                </Button>
            </>
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
                    <OrderList 
                        orders={orders}
                        prices={prices}
                    />
                    {addNextBackButtons()}
                </>
            )
        } else if (activeStep === 1){
            return (
                <>
                    {/* <OrderSpecialNotes onChange={handleOrderSpecialNotesChanges}/> */}
                    {addNextBackButtons()}
                </>
            )
        } else if (activeStep === 2){
            return (
                <>
                    <OrderForm />
                    {addNextBackButtons()}
                </>
            )
            
        } else{
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
                <Stepper activeStep={activeStep} orientation="vertical">
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
                
                {addContent(activeStep)}
                
             
            </Box>         
        </>
    )
}