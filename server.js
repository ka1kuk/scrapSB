var Scraper = require('./scraper');
const express = require('express')
const cors = require('cors')
const PORT = 8080
const app = express()


const google = new Scraper();

app.get('/api',async (req,res) => {
  const search = req.query.search
  console.log(search)
  const results = await google.scrape(`${search}`, 100); // Or ['banana', 'strawberry'] for multi-queries
  console.log('results', results);

  res.send(results);
})


// Enable cors
app.use(cors({
    origin: '*'
})
)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))