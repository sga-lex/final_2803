const mongoose = require('mongoose');

const ticketArchive = new mongoose.Schema({
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

module.exports = TicketArchive = mongoose.model('TicketArchive', ticketArchive);
