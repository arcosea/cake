import { Box, TextField, Stack, Button, Typography } from "@mui/material"
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useEffect, useState } from "react"
import dayjs from 'dayjs';
import { Headers } from "../../utils/data";


interface IContactFormProp{
    defaultValues: Map<string, any>,
    disableDatesBefore: Date,
    onChange: Function
    onFormFilledChange: Function
}
export default function ContactForm({defaultValues, disableDatesBefore, onChange, onFormFilledChange}: IContactFormProp){
    const [date, setDate] = useState(defaultValues.get(Headers.PICKUP_DATE));
    const handleDateChange = (newDate: any) => {
        setDate(newDate);
        onChange(Headers.PICKUP_DATE, newDate);

    }

    // Auto scrolls to the top after rendering
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    const isDateDisabled = (date: Date) => {
        // Define your logic to disable specific days here
        const dayOfWeek = dayjs(date).day();
        const daysBefore = dayjs(date).isBefore(disableDatesBefore); // Get the day of the week (0 = Sunday, 1 = Monday, ...)
        // Disable Saturdays (dayOfWeek === 6) and Sundays (dayOfWeek === 0)
        return daysBefore || dayOfWeek === 2; 
    };

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

    useEffect(() => {
        // Check if all fields are filled and notify the parent
        const formFilled = !!(date && firstName && lastName && email.includes('@') && phoneNumber.length >= 10);
        onFormFilledChange(formFilled);
      }, [date, firstName, lastName, email, phoneNumber, onFormFilledChange]);

    const handleSubmit = () => {
        console.log(date, firstName, lastName, email, phoneNumber)
    }

    return (
        <>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                    border: 1
                }}
                noValidate={true}
                autoComplete="off"
            >       
                <Typography sx={{backgroundColor: "#1976d2", margin: 3, paddingLeft: 1, color: "whitesmoke"}}> Enter Contact Information </Typography>
                <Stack spacing={2} sx={{alignItems: "center", justifyContent: "center", display: "flex"}}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={['DatePicker']}>
                            <DatePicker value={date} label={Headers.PICKUP_DATE} defaultValue={dayjs()} onChange={(newValue: any) => handleDateChange(newValue)}
                               shouldDisableDate={(date: Date) => isDateDisabled(date as Date)}
                            
                            />
                        </DemoContainer>
                    </LocalizationProvider>

                    <TextField
                            required
                            label={Headers.FIRST_NAME}
                            value={firstName}
                            onChange={handleFirstNameChange}
                        />

                    <TextField
                        required
                        label={Headers.LAST_NAME}
                        value={lastName}
                        onChange={handleLastNameChange}
                    />
                    <TextField
                        required
                        label={Headers.EMAIL}
                        value={email}
                        onChange={handleEmailChange}
                        placeholder="example@example.com"
                    />
                    
                    <TextField
                        required
                        label={Headers.PHONE_NUMBER}
                        value={phoneNumber}
                        onChange={handlePhoneNumberChange}
                        placeholder="(253) 474-5110"
                    />
                </Stack>
                
            </Box>

            

        </>
    )
}