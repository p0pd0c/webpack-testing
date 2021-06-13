const express = require('express')
const app = express()

app.use(express.static(__dirname + '/dist'))

app.get('/', (req, res) => {

    console.log(req)
    return res.sendFile(__dirname + '/index.html')
})

app.listen(3000, () => {
    console.log(`Dev server started on ${process.env.PORT || 3000}`)
})