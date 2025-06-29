const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_CONNECTTION_URI)
    .then(res =>  console.log('✅ MongoDB connected to DB:', mongoose.connection.name) )
    .catch(err => console.log('Error Occured', err.message))


module.exports = mongoose;