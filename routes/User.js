const express = require('express')
const router = express.Router()
const path = require('path');
var Scraper = require('../scraper')

const google = new Scraper();

router.post('/search', async (req,res) => {
    try {
        const search = req.query.q
        const results = await google.scrape(`${search}`, 100); // Or ['banana', 'strawberry'] for multi-queries
      
        res.status(200).send(results);

    } catch (err) {
        res.status(500).json({ message: err.message})
    }
})

module.exports = router