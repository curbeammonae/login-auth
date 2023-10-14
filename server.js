const express = require('express')
const app = express()
const PORT = 5500
const ConnectDB = require('./db')


connectDB()



app.listen(PORT, () => console.log(`server connect to ${PORT}`))