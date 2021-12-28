const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        username:{
            type: String,
            required: true,
            trim: true
        },
        password:{
            type: String,
            required: true,
            trim: true
        }
    },
    {
        timestamps : true,
    }
);

const users = mongoose.model('users',userSchema);

module.exports = users;