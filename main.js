const express = require('express')
const app = express()
const itemRoutes = require('./routes/item')
const teamRoutes = require('./routes/team')
const playerRoutes = require('./routes/player')
const port = 3000
// const port = process.env.PORT
app.use(express.json())


//Routes
app.use('/item', itemRoutes);
app.use('/team', teamRoutes);
app.use('/player', playerRoutes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})