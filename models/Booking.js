const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String },
  guests: { type: Number, default: 1 },
  checkin: { type: Date, required: true },
  checkout: { type: Date, required: true },
  room: { type: String, required: true },
  request: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Booking', bookingSchema);
