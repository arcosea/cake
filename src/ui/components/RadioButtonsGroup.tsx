import { Box, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup} from '@mui/material';
import { useState } from "react";

interface IRadioButtonsGroupProp{
    label: string,
    options: string[],
    defaultValue: string,
    onChange: Function
}
export default function RadioButtonsGroup({label, options, defaultValue, onChange}: IRadioButtonsGroupProp){
    const [value, setValue] = useState(defaultValue);

    const handleRadioButtonChange = (event: any) => {
        setValue(event.target.value as string);
        onChange(event.target.value)
    };

    function displayOptions(){
        return (
            options.map((value) => {
                return <FormControlLabel key={value} value={value} control={<Radio />} label={value} />
            })
        )
    }

    return (
        <>
            
                <FormLabel id="demo-radio-buttons-group-label" >{label}</FormLabel>
                <RadioGroup
                    row
                    aria-labelledby="demo-radio-buttons-group-label"
                    value={value}
                    name="radio-buttons-group"
                    onChange={handleRadioButtonChange}
                >
                    {displayOptions()}
                </RadioGroup>
            
        </>
    )
}