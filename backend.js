const PORT = 8000
const express = require('express')
const cors = require('cors')
const axios = require('axios')
require('dotenv').config()
const bodyParser = require('body-parser')
const emailjs = require('@emailjs/browser');

const app = express();
app.use(cors())
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json('hello')
})

app.get('/fetchasanatasks', (req, res) => {
    const today = new Date()
    const earliestDate = new Date(today);
    earliestDate.setDate(today.getDate() + 7);
    const earliestDateString = earliestDate.toISOString().split('T')[0];

    const options = {
        method: 'GET',
        url: `${process.env.REACT_APP_ASANA_API_URL}/projects/${process.env.REACT_APP_ASANA_PROJECT_ID}/tasks`,
        params: {
            opt_fields: 'name,notes,due_on,due_at,completed'
        },
        headers: {
            accept: 'application/json',
            authorization: `Bearer ${process.env.REACT_APP_ASANA_ACCESS_TOKEN}`
        }
    };

    axios
        .request(options)
        .then(function (response) {
            let tasks = response.data.data;
            let remaining = []

            tasks.forEach((task) => {
                if (task.due_on >= earliestDateString) {
                    remaining.push(task)
                }
            })
            res.json(remaining)

        })
        .catch(function (error) {
        });

});

app.post('/postasanatask', (req, res) => {
    // Handle the POST request data on the server side
    const receivedData = req.body;
    console.log('Received Data:', receivedData);

    axios.post(
        `${process.env.REACT_APP_ASANA_API_URL}/tasks`,
        {
            data: {
                projects: [process.env.REACT_APP_ASANA_PROJECT_ID],
                name: receivedData.name,
                due_at: receivedData.due_at,
                notes: receivedData.notes
            },
        },
        {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${process.env.REACT_APP_ASANA_ACCESS_TOKEN}`,
            },
        }
    );

    res.json({ message: 'POST request received successfully' });
});

app.post('/email', (req, res) => {
    const receivedData = req.body;
    console.log("received", receivedData)
    emailjs.send(process.env.REACT_APP_EJS_SERVICE_ID, process.env.REACT_APP_EJS_TEMPLATE_ID, receivedData, process.env.REACT_APP_EJS_USER_ID)
        .then((response) => {
            res.json({ message: 'POST request received successfully' });

        })
        .catch((error) => {
            console.log(error)
        });

})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})