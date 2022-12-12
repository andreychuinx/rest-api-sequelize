const tableBarang = require('./barang')
const tablePlayer = require('./player')
const tableTeam = require('./team')
const test = require('./testProcedure')
const tableCountry = require('./country')

const dbInit = async () => {
  try {
    // await tableBarang()
    // await tablePlayer()
    // await tableTeam()
    await tableCountry()
    // await test()
    process.exit(0)
  } catch (err) {
    console.log(err)
    process.exit(1)
  }
}

dbInit()