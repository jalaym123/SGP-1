const { Schema, model } = require('mongoose');
const dayjs = require('dayjs')
const restroData = model("Restaurant", new Schema({
    id: {type: Number, default: 1},
    minTime: { type: Date, default: dayjs('01/01/1970 15:00:00') },
    maxTime: { type: Date, default: dayjs('01/01/1970 22:00:00') },
    reservationCharge: { type: Number, default: 1000 },
    liveBookingCharge: { type: Number, default: 100 },
    maxGuests: { type: Number, default: 4 }
}))

module.exports = restroData;