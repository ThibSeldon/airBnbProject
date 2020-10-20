// Connexion a MongoDB avec Mongoose 
const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
    {
        role: {type: String, required: true},
        first_name: {type: String, required: true},
        last_name: {type: String },
        email: {type: String},   
        password: {type: Number, required: true},

      }
)

module.exports = mongoose.model('User', userSchema)