const express = require('express');
const router = express.Router();

// add new reviews
router.get('/', async (req, res, next) => {
    res.send("GET REVIEWS");
});

module.exports = router;
