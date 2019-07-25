const express = require('express'),
    router = express.Router(),
    ScoresModel = require('../models/scores');

/* GET home page. */
router.get('/', async (req, res, next) => {
    res.send('welcome to my api').status(200);
});

router.get('/all', async (req, res, next) => {
    const allScores = await ScoresModel.getAll();

    res.json(allScores).status(200);
});

module.exports = router;