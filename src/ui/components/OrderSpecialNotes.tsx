import { useState } from "react"
import {Stack, Typography, TextField, Box} from "@mui/material"
import InputFileUpload from "./InputFileUpload"

export default function OrderSpecialNotes(){
    const [specialNotes, setSpecialNotes] = useState("")

    const handleSpecialNotesChange = (event : any) => {
        setSpecialNotes(event.target.value)
    }

    return (
        <>
            <Stack spacing={2}> 
                <Typography >
                    Enter any special requests (e.g. Name of Birthday)
                </Typography>
                <TextField
                    id="outlined-textarea"
                    label="Special Request"
                    placeholder="'Happy Birthday Juan' on Spiderman themed cake with figurines "
                    multiline
                    rows={5}
                    value={specialNotes}
                    onChange={handleSpecialNotesChange}
                />
                <Box sx={{width: "40%"}}>
                    <InputFileUpload />
                </Box>
                
            </Stack>
        </>
    )
}