const express = require("express")

const cities = require('./routes/cities')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(require('express-session')({
    secret: '96EC915B-3937-4609-818A-2E1F57A5F12D',
    resave: true,
    saveUninitialized: true
}));

app.use('/api', cities);

app.listen(8080)