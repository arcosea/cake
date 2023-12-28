import { useState, useEffect} from "react";
import { Box, TextField, Stack, Stepper, Step, StepLabel, Typography, Button} from "@mui/material"
import Selector from "../components/Selector";
import { CakeFlavors, CakeFillings, CakeFruit, CakeOccasions, CakePeopleSize, Genders, Headers, CakeIcing} from "../../utils/data";
import RadioButtonsGroup from "../components/RadioButtonsGroup";
import CheckboxGroup from "../components/CheckboxGroup";


interface ICakeCustomizationFormProp{
    defaultValues: Map<string, any>
    onChange: Function
}
export default function CakeCustomizationForm({defaultValues, onChange}: ICakeCustomizationFormProp){
    const [cakeSize, setCakeSize] = useState(defaultValues.get(Headers.CAKE_SIZE))
    const handleCakePeopleSizeChange = (value: string) => {
        setCakeSize(value);
        onChange(Headers.CAKE_SIZE, value);
    }

    const [CakeOccasion, setCakeOccasion] = useState(defaultValues.get(Headers.CAKE_OCCASION));
    const handleCakeOccasionChange = (value: string) => {
        setCakeOccasion(value);
        onChange(Headers.CAKE_OCCASION, value);
    }

    const [cakeFilling, setCakeFilling] = useState(defaultValues.get(Headers.CAKE_FILLING))
    const handleCakeFillingChange = (value: string) => {
        setCakeFilling(value);
        onChange(Headers.CAKE_FILLING, value);
    }

    const [cakeFlavor, setCakeFlavor] = useState(defaultValues.get(Headers.CAKE_FLAVOR))
    const handleCakeFlavorChange = (value: string) => {
        setCakeFlavor(value);
        onChange(Headers.CAKE_FLAVOR, value);
    }

    const [cakeIcing, setCakeIcing] = useState(defaultValues.get(Headers.CAKE_ICING))
    const handleCakeIcingChange = (value: string) => {
        setCakeIcing(value);
        onChange(Headers.CAKE_ICING, value);
    }

    const [cakeFruit, setCakeFruit] = useState()
    const handleCakeFruitChange = (value: any) => {
        setCakeFruit(value);
        onChange(Headers.ADD_FRUIT, value);
    }

    const [gender, setGender] = useState()
    const handleGenderChange = (value: any) => {
        setGender(value);
        onChange(Headers.GENDER, value);
    }

    // Auto scrolls to the top after rendering
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

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
                <Stack spacing={2} sx={{paddingBottom: 1}}>
                    <Selector label={Headers.CAKE_SIZE} options={CakePeopleSize} defaultValue={defaultValues.get(Headers.CAKE_SIZE)} onChange={handleCakePeopleSizeChange} />
                    
                    <Selector label={Headers.CAKE_OCCASION} options={CakeOccasions} defaultValue={defaultValues.get(Headers.CAKE_OCCASION)} onChange={handleCakeOccasionChange} />

                    <Selector label={Headers.CAKE_FILLING} options={CakeFillings} defaultValue={defaultValues.get(Headers.CAKE_FILLING)} onChange={handleCakeFillingChange} />

                    <Selector label={Headers.CAKE_FLAVOR} options={CakeFlavors} defaultValue={defaultValues.get(Headers.CAKE_FLAVOR)} onChange={handleCakeFlavorChange} />

                    <Selector label={Headers.CAKE_ICING} options={CakeIcing} defaultValue={defaultValues.get(Headers.CAKE_ICING)} onChange={handleCakeIcingChange} />

                    <CheckboxGroup label={Headers.ADD_FRUIT} options={CakeFruit} defaultValue={defaultValues.get(Headers.ADD_FRUIT)} onChange={handleCakeFruitChange} />

                    {/* <RadioButtonsGroup label={Headers.GENDER} options={Genders} defaultValue={defaultValues.get(Headers.GENDER)} onChange={handleGenderChange} /> */}
                </Stack>
                
            </Box>
        </>
    )
}