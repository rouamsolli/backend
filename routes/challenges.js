
const express = require('express');
const router = express.Router();
const Challenge = require('../models/challenge');
const Solution = require('../models/solution');
const Comment = require('../models/comment');

// Récupération de tous les défis
router.get('/challenges', async (req, res) => {
    try {
        const challenges = await Challenge.find();
        res.json(challenges);
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la récupération des défis' });
    }
});

// Soumission d'une solution
router.post('/solutions', async (req, res) => {
    try {
        const { challengeId, userId, solutionText } = req.body;
        const solution = new Solution({ challengeId, userId, solutionText });
        await solution.save();
        res.status(201).json({ message: 'Solution soumise avec succès' });
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la soumission de la solution' });
    }
});

// Affichage des commentaires pour un défi
router.get('/comments/:challengeId', async (req, res) => {
    try {
        const challengeId = req.params.challengeId;
        const comments = await Comment.find({ challengeId });
        res.json(comments);
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la récupération des commentaires' });
    }
});

module.exports = router;
