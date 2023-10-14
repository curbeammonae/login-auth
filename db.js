const mongoose = require('mongoose')
const connectDB = async () => {
    Mongoose.connect(remoteDB)
    .then(client => {
        console.log('monggo db connection succesful')
    })
}

module.exports = connectDB