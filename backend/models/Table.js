const { Schema, model } = require('mongoose');

const userData = model("Table", new Schema({
    tableNo: { type: Number, required: true },
    capacity: { type: Number, required: true },
    bookings: { type: Map, default: new Map() },
}))

module.exports = userData;