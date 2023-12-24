import { FormControl, FormLabel, FormGroup, FormControlLabel, Stack, Switch, Typography} from "@mui/material";
import { useState} from "react";


interface ISwitchControllerProp{
    label: string,
    defaultValue: boolean,
    options: string[],
    onChange: Function
}
export default function SwitchController({label, options, defaultValue, onChange}: ISwitchControllerProp){
    let [value, setValue] = useState(defaultValue);
    const handleSwitchChange = (event: any) =>{
        setValue(Boolean(event.target.checked));
        onChange(Boolean(event.target.checked));
    }

    return (
        <>
            <FormControl component="fieldset" sx={{marginBottom: 2}}>
                <FormLabel component="legend"> {label} </FormLabel>
                <FormGroup aria-label="position" row>
                    <Stack direction="row" spacing={1} alignItems="center">
                        <Typography> {options[0]}</Typography>
                        <Switch 
                            inputProps={{ 'aria-label': 'ant design' }} 
                            checked={value}
                            onChange={handleSwitchChange}
                        />
                        <Typography>{options[1]}</Typography>
                    </Stack>
                </FormGroup>
            </FormControl>
            
        </>
    )
}