const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/user');
const router = express.Router();

router.post('/signup', async (req, res) => {
    try {
        const { username, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ username, password: hashedPassword });
        await newUser.save();
        res.status(201).json({ message: 'Utilisateur enregistré avec succès' });
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de l\'inscription' });
    }
});

module.exports = router;
