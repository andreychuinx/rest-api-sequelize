const express = require('express')
const app = express()
const itemRoutes = require('./routes/item')
const port = 3000
// const port = process.env.PORT
app.use(express.json())


//Routes
app.use('/item', itemRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})