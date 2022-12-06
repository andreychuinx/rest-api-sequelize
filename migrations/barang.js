const db = require('../config/index')


const createTableBarang = async () => {
  try {
    await db.query(
      `
        CREATE TABLE IF NOT EXISTS Barang (
        id_barang serial PRIMARY KEY,
        nama_barang varchar(30) not null,
        harga int,
        stock int,
        createdAt datetime,
        updatedAt datetime
      );
      `
    )
  } catch(err) {
    console.log(err, 'ini err')
    return err
  }
}

module.exports = createTableBarang;