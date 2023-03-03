;const express = require('express')
const bodyParser = require('body-parser');
const port = process.env.PORT || 8080

const app = express()

app.use(bodyParser.json());

const User = require('./routes/User')
app.use('/api', User)

app.listen(port, () => console.log(`Server on port ${port}`))