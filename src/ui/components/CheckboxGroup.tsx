import { Box, FormControl, FormControlLabel, FormLabel, Radio, Checkbox, FormGroup} from '@mui/material';
import { useState } from "react";


interface ICheckboxGroupProp{
    label: string,
    options: string[],
    defaultValue: any,
    onChange: Function
}
export default function CheckboxGroup({label, options, defaultValue, onChange}: ICheckboxGroupProp){
    const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>(defaultValue);

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCheckedItems({
          ...checkedItems,
          [event.target.name]: event.target.checked,
        });
        onChange({
            ...checkedItems,
            [event.target.name]: event.target.checked,
          })
    };

    
    return (
        <>

            <FormGroup>
                <FormLabel id="demo-radio-buttons-group-label" >{label}</FormLabel>
                {options.map((option) => (
                <FormControlLabel
                    key={option}
                    control={
                    <Checkbox
                        checked={checkedItems[option]}
                        onChange={handleCheckboxChange}
                        name={option}
                    />
                    }
                    label={option}
                />
                ))}
            </FormGroup>
            
        </>
    )
}


