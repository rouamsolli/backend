const mongoose = require('mongoose');

const challengeSchema = new mongoose.Schema({
    title: String,
    description: String,
});

module.exports = mongoose.model('Challenge', challengeSchema);