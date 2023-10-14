const mongoose = require('mongoose')
const remoteDB = 'mongodb+srv://curbeammonae:mongodb331@cluster0.9rwwbvu.mongodb.net/?retryWrites=true&w=majority'
const connectDB = async () => {
    Mongoose.connect(remoteDB)
    .then(client => {
        console.log('monggo db connection succesful')
    })
}

module.exports = connectDB