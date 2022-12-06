const tableBarang = require('./barang')

const dbInit = async () => {
  try {
    await tableBarang()
    process.exit(0)
  } catch (err) {
    console.log(err)
    process.exit(1)
  }
}

dbInit()