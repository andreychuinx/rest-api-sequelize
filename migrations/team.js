const db = require('../config/index')


const createTableTeam = async () => {
  try {
    await db.query(
      `
        CREATE TABLE IF NOT EXISTS teams (
        id_team serial PRIMARY KEY,
        name_team varchar(50) not null,
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

module.exports = createTableTeam;