const mongoose = require('mongoose');

const solutionSchema = new mongoose.Schema({
    challengeId: mongoose.Schema.Types.ObjectId,
    userId: mongoose.Schema.Types.ObjectId,
    solutionText: String,
});

module.exports = mongoose.model('solution', solutionSchema);