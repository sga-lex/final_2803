const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: {
    type: String
  },
  content: {
    type: String
  }
});

const projectArchiveSchema = new mongoose.Schema({
  title: {
    type: String
  },
  content: {
    type: String
  }
});

module.exports = ProjectDetails = mongoose.model('ProjectDetails', projectSchema);
