const { Schema, model } = require('mongoose');

const userData = model("Table", new Schema({
    tableNo: { type: Number, required: true },
    capacity: { type: Number, require: true },
    booking: { type: Array }
}))

module.exports = userData;