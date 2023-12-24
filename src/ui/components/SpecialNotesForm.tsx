import { useEffect, useState } from "react"
import {Stack, Typography, TextField, Box} from "@mui/material"
import InputFileUpload from "./InputFileUpload"
import { Headers } from "../../utils/data"


interface ISpecialNotesFormProp{
    defaultValue: Map<string, any>,
    onChange: Function

}
export default function SpecialNotesForm({defaultValue, onChange}: ISpecialNotesFormProp){
    const [specialNotes, setSpecialNotes] = useState(defaultValue.get(Headers.SPECIAL_REQUEST))

    const handleSpecialNotesChange = (event : any) => {
        setSpecialNotes(event.target.value)
        onChange(Headers.SPECIAL_REQUEST, event.target.value);
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
                <Typography >
                    Enter any special requests (e.g. Name of Birthday, Age, specific figurines)
                </Typography>
                <TextField
                    id="outlined-textarea"
                    label="Additional Notes"
                    placeholder="'Happy Birthday Juan' on Spiderman themed cake with figurines "
                    multiline
                    rows={5}
                    value={specialNotes}
                    onChange={handleSpecialNotesChange}
                />
                <Box sx={{width: "20%"}}>
                    <InputFileUpload onChange={(file: any, dataURL: string) => handleInputFileUpload(file, dataURL)} defaultValue={defaultValue.get(Headers.FILE_UPLOAD)}/>
                </Box>
                
            </Stack>
        </>
    )
}