const db = require('../config/index')


const createTableCountry = async () => {
  try {
    await db.query(
      `
        CREATE TABLE IF NOT EXISTS countries (
        id_country serial PRIMARY KEY,
        name_country varchar(50) not null,
        createdAt timestamp,
        updatedAt timestamp
      );
      `
    )
  } catch(err) {
    console.log(err, 'ini err')
    return err
  }
}

module.exports = createTableCountry;