const db = require('../config/index')


const createTablePlayer = async () => {
  try {
    await db.query(
      `
        CREATE TABLE IF NOT EXISTS players (
        id_players serial PRIMARY KEY,
        id_team serial not null,
        name_player varchar(30) not null,
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

module.exports = createTablePlayer;