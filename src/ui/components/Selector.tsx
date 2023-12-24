import { useState } from "react";
import { Box, InputLabel, MenuItem, FormControl, Select} from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';


interface ISelectorProp{
    label: string,
    options: string[],
    defaultValue: string,
    onChange: Function
}
export default function Selector({label, options, defaultValue, onChange}: ISelectorProp) {
    const [value, setValue] = useState(defaultValue);
    const handleSelectorChange = (event: SelectChangeEvent) => {
        setValue(event.target.value as string);
        onChange(event.target.value)
    };

    function displayOptions(){
        return (
            options.map((value) => {
                return <MenuItem key={value} value={value}> {value} </MenuItem>
            })
        )
    }

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">{label}</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={value}
                label={label}
                onChange={handleSelectorChange}
                >
                {displayOptions()}
                </Select>
            </FormControl>
        </Box>
    );
}