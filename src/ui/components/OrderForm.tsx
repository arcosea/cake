import { Box, TextField, Stack, Button, Typography } from "@mui/material"
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useState } from "react"
import dayjs from 'dayjs';
import { Headers } from "../../utils/data";

interface IOrderFormProp{
    defaultValues: Map<string, any>,
    onChange: Function
}
export default function OrderForm({defaultValues, onChange}: IOrderFormProp){
    const [date, setDate] = useState(defaultValues.get(Headers.PICKUP_DATE));
    const handleDateChange = (newDate: any) => {
        setDate(newDate);
        onChange(Headers.PICKUP_DATE, newDate);

    }

    const [firstName, setFirstName] = useState(defaultValues.get(Headers.FIRST_NAME));
    const handleFirstNameChange = (event: any) => {
        setFirstName(event.target.value);
        onChange(Headers.FIRST_NAME, event.target.value);
    }

    const [lastName, setLastName] = useState(defaultValues.get(Headers.LAST_NAME));
    const handleLastNameChange = (event: any) => {
        setLastName(event.target.value);
        onChange(Headers.LAST_NAME, event.target.value);
    }

    const [email, setEmail] = useState(defaultValues.get(Headers.EMAIL));
    const handleEmailChange = (event: any) => {
        setEmail(event.target.value);
        onChange(Headers.EMAIL, event.target.value);
    }

    const [phoneNumber, setPhoneNumber] = useState(defaultValues.get(Headers.PHONE_NUMBER));
    const handlePhoneNumberChange = (event: any) => {
        setPhoneNumber(event?.target.value);
        onChange(Headers.PHONE_NUMBER, event.target.value);
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
            >       
                <Stack spacing={2}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={['DatePicker']}>
                            <DatePicker value={date} label="Pickup Date" defaultValue={dayjs()} onChange={(newValue) => handleDateChange(newValue)} />
                        </DemoContainer>
                    </LocalizationProvider>
                
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
                        placeholder="(253) 474-5110"
                    />
                </Stack>
                
            </Box>

            

        </>
    )
}