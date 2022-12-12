const db = require('../config/index')


const createTableTeam = async () => {
  try {
    await db.query(
      `
        CREATE or REPLACE PROCEDURE team_insert_data("nameTeam" character varying)
        LANGUAGE SQL
        AS $$
        INSERT INTO teams (name_team) values ("nameTeam")
        $$;
      `
    )
  } catch(err) {
    console.log(err, 'ini err')
    return err
  }
}

module.exports = createTableTeam;