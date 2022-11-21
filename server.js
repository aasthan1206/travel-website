
const express = require("express")
const app = express()
const mysql = require("mysql")
const cors = require('cors')

app.use(cors())
app.use(express.json())

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'root',
    database: 'travelManagement',
})

app.listen(3001, () => {
    console.log("Server is running...")
})

app.get('/destination', (req, res) => {
    db.query("SELECT * FROM Destination", (err, result) => {
        if(err) {
            console.log(err)
        } else {
            console.log(result)
            res.send(result)
        }
    })
})
