const { Schema, model } = require('mongoose');

const userData = model("User", new Schema({
    userId: { type: String, required: true },
    email: { type: String, require: true },
    password: { type: String, require: true },
    name: { type: String },
    mobileNumber: { type: String },
    admin: { type: Boolean, default: false }
}))

module.exports = userData;