const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    challengeId: mongoose.Schema.Types.ObjectId,
    userId: mongoose.Schema.Types.ObjectId,
    commentText: String,
});

module.exports = mongoose.model('comment', commentSchema);