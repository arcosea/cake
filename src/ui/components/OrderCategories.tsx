import { useState, useEffect} from "react";
import { Box, TextField, Stack, Stepper, Step, StepLabel, Typography, Button} from "@mui/material"
import Selector from "./Selector";
import { CakeBaseFlavors, CakeBaseStyles, CakeFruit, CakePeopleSize, Headers} from "../../utils/data";
import RadioButtonsGroup from "./RadioButtonsGroup";
import CheckboxGroup from "./CheckboxGroup";



interface IOrderCategoriesProp{
    defaultValues: Map<string, any>
    onChange: Function
}
export default function OrderCategories({defaultValues, onChange}: IOrderCategoriesProp){
    const [cakeSize, setCakeSize] = useState(defaultValues.get(Headers.CAKE_SIZE))
    const handleCakePeopleSizeChange = (value: string) =>{
        setCakeSize(value);
        onChange(Headers.CAKE_SIZE, value);
    }

    const [cakeBaseStyle, setCakeBaseStyle] = useState(defaultValues.get(Headers.CAKE_BASE_STYLE))
    const handleCakeBaseStyleChange = (value: string) => {
        setCakeBaseStyle(value);
        onChange(Headers.CAKE_BASE_STYLE, value);
    }

    const [cakeBaseFlavor, setCakeBaseFlavor] = useState(defaultValues.get(Headers.CAKE_BASE_FLAVOR))
    const handleCakeBaseFlavorChange = (value: string) => {
        setCakeBaseFlavor(value);
        onChange(Headers.CAKE_BASE_FLAVOR, value);
    }

    const [cakeFruit, setCakeFruit] = useState()
    const handleCakeFruitChange = (value: any) => {
        setCakeFruit(value);
        onChange(Headers.ADD_FRUIT, value);
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
                    <Selector label={Headers.CAKE_SIZE} options={CakePeopleSize} defaultValue={defaultValues.get(Headers.CAKE_SIZE)} onChange={handleCakePeopleSizeChange} />
                    
                    <RadioButtonsGroup label={Headers.CAKE_BASE_STYLE} options={CakeBaseStyles} defaultValue={defaultValues.get(Headers.CAKE_BASE_STYLE)} onChange={handleCakeBaseStyleChange} />

                    <RadioButtonsGroup label={Headers.CAKE_BASE_FLAVOR} options={CakeBaseFlavors} defaultValue={defaultValues.get(Headers.CAKE_BASE_FLAVOR)} onChange={handleCakeBaseFlavorChange} />

                    <CheckboxGroup label={Headers.ADD_FRUIT} options={CakeFruit} defaultValue={defaultValues.get(Headers.ADD_FRUIT)} onChange={handleCakeFruitChange} />
                </Stack>
                
            </Box>
        </>
    )
}