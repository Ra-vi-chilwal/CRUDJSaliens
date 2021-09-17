const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/CRUDapi'

const app = express()

mongoose.connect(url, { useNewUrlParser: true }, () => {
	console.log("connect to Database");
});
app.use(express.json())

const alienRouter = require('./routes/aliens')
app.use('/aliens',alienRouter)

app.listen(9000, () => {
    console.log('Server started')
})