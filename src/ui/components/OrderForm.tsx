import { Box, TextField, Stack, Button } from "@mui/material"
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useState } from "react"
import dayjs from 'dayjs';


export default function OrderForm(){
    const [date, setDate] = useState(dayjs());
    const handleDateChange = (newDate: any) => {
        setDate(newDate)
    }

    const [firstName, setFirstName] = useState("");
    const handleFirstNameChange = (event: any) => {
        setFirstName(event.target.value)
    }

    const [lastName, setLastName] = useState("");
    const handleLastNameChange = (event: any) => {
        setLastName(event.target.value)
    }

    const [email, setEmail] = useState("");
    const handleEmailChange = (event: any) => {
        setEmail(event.target.value)
    }

    const [phoneNumber, setPhoneNumber] = useState("");
    const handlePhoneNumberChange = (event: any) => {
        setPhoneNumber(event.target.value)
    }

    const handleSubmit = () => {
        console.log(date, firstName, lastName, email, phoneNumber)
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
                // onSubmit={handleSubmit}
            >
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DatePicker']}>
                        <DatePicker value={date} defaultValue={dayjs() }onChange={(newValue) => handleDateChange(newValue)} />
                    </DemoContainer>
                </LocalizationProvider>
                
                <Stack direction="row" spacing={2}>
                    <TextField
                        required
                        label="First Name"
                        value={firstName}
                        onChange={handleFirstNameChange}
                    />

                    <TextField
                        required
                        label="Last Name"
                        value={lastName}
                        onChange={handleLastNameChange}
                    />
                </Stack>
                
                <Stack direction="row" spacing={2}>
                    <TextField
                        required
                        label="Email"
                        value={email}
                        onChange={handleEmailChange}
                    />
                    
                    <TextField
                        label="Phone Number"
                        value={phoneNumber}
                        onChange={handlePhoneNumberChange}
                    />
                </Stack>
                
                <Button  variant="contained" sx={{backgroundColor:"green"}} onClick={handleSubmit}>
                    Submit
                </Button>

            </Box>

            

        </>
    )
}