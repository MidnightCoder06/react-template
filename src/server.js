const express = require('express')
const cors = require('cors')
const uuid = require('uuid').v4

const app = express()
app.use(express.json())
app.use(cors())

app.listen(5000, () => console.log(
    'Task server listening on port 5000!',
));
