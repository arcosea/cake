import { useState, useEffect} from "react";
import { Box, TextField, Stack, Stepper, Step, StepLabel, Typography, Button} from "@mui/material"
import Selector from "./Selector";
import { CakeBaseFlavors, CakeBaseStyles, CakeFruit, CakePeopleSize } from "../../utils/data";
import RadioButtonsGroup from "./RadioButtonsGroup";
import CheckboxGroup from "./CheckboxGroup";

export default function OrderCategories(){
    const [cakeSize, setCakeSize] = useState(CakePeopleSize[0])
    const handleCakePeopleSizeChange = (value: string) =>{
        setCakeSize(value);
    }

    const [cakeBaseStyle, setCakeBaseStyle] = useState(CakeBaseStyles[0])
    const handleCakeBaseStyleChange = (value: string) => {
        setCakeBaseStyle(value);
    }

    const [cakeBaseFlavor, setCakeBaseFlavor] = useState(CakeBaseFlavors[0])
    const handleCakeBaseFlavorChange = (value: string) => {
        setCakeBaseStyle(value);
    }

    const [cakeFruit, setCakeFruit] = useState()
    const handleCakeFruitChange = (value: any) => {
        setCakeFruit(value);
    }
    
    return (
        <>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate={true}
                autoComplete="off"
            >       
                <Stack spacing={2}>
                    <Selector label={"Cake Size"} options={CakePeopleSize} defaultValue={CakePeopleSize[0]} onChange={handleCakePeopleSizeChange} />
                    
                    <RadioButtonsGroup label={"Cake Base Style"} options={CakeBaseStyles} defaultValue={CakeBaseStyles[0]} onChange={handleCakeBaseStyleChange} />

                    <RadioButtonsGroup label={"Cake Base Flavor"} options={CakeBaseFlavors} defaultValue={CakeBaseFlavors[0]} onChange={handleCakeBaseFlavorChange} />

                    <CheckboxGroup label={"Add Fruit in Cake"} options={CakeFruit} defaultValue={""} onChange={handleCakeFruitChange} />
                </Stack>
                
            </Box>
        </>
    )
}