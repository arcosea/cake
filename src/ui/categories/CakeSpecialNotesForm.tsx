import { useEffect, useState } from "react"
import {Stack, Typography, TextField, Box} from "@mui/material"
import InputFileUpload from "../components/InputFileUpload"
import { Headers } from "../../utils/data"


interface ICakeSpecialNotesFormProp{
    defaultValue: Map<string, any>,
    onChange: Function

}
export default function CakeSpecialNotesForm({defaultValue, onChange}: ICakeSpecialNotesFormProp){
    
    const [colors, setColors] = useState(defaultValue.get(Headers.COLOR));
    const handleColorsChange = (event: any) => {
        setColors(event.target.value);
        onChange(Headers.COLOR, event.target.value)
    }

    const [cakeMessage, setCakeMessage] = useState(defaultValue.get(Headers.CAKE_MESSAGE));
    const handleCakeMessageChange = (event: any) => {
        setCakeMessage(event.target.value);
        onChange(Headers.CAKE_MESSAGE, event.target.value)
    }

    const [specialInstructions, setSpecialInstructions] = useState(defaultValue.get(Headers.SPECIAL_INSTRUCTIONS))
    const handleSpecialInstructionsChange = (event : any) => {
        setSpecialInstructions(event.target.value)
        onChange(Headers.SPECIAL_INSTRUCTIONS, event.target.value);
    }

    const handleInputFileUpload = (file: any, dataURL: string) => {
        const fileUpload = [file, dataURL];
        onChange(Headers.FILE_UPLOAD, fileUpload);

    }

    // Auto scrolls to the top after rendering
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <>
            <Stack spacing={2}> 
                <TextField
                    label={Headers.COLOR}
                    value={colors}
                    onChange={handleColorsChange}
                />

                <TextField
                    id="outlined-textarea"
                    label={Headers.CAKE_MESSAGE}
                    placeholder= "Happy Birthday"
                    multiline
                    rows={3}
                    value={cakeMessage}
                    onChange={handleCakeMessageChange}
                />
                
                <TextField
                    id="outlined-textarea"
                    label={Headers.SPECIAL_INSTRUCTIONS}
                    placeholder="Add Spiderman figurines "
                    multiline
                    rows={5}
                    value={specialInstructions}
                    onChange={handleSpecialInstructionsChange}
                />
                <Box sx={{width: "20%"}}>
                    <InputFileUpload onChange={(file: any, dataURL: string) => handleInputFileUpload(file, dataURL)} defaultValue={defaultValue.get(Headers.FILE_UPLOAD)}/>
                </Box>
                
            </Stack>
        </>
    )
}