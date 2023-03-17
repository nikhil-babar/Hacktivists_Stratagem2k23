const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const path = require('path')

app.use(cors({
    'origin': 'http://localhost:3000',
    'methods': ['GET', 'PUT', 'POST', 'PATCH']
}))

app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
   
})

app.listen(5000, () => console.log("Server listening on port 5000"))
