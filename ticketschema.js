const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  project: {
    type: String,
  },
  assignedTo: {
    type: String,
  },
  urgency: {
    type: String,
  }
});

module.exports = TicketSchema = mongoose.model('TicketDetails', ticketSchema);
