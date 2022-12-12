const db = require('../config/index')


const createTableTeam = async () => {
  try {
    await db.query(
      `
        CREATE or REPLACE PROCEDURE proc_test1(test varchar)
        LANGUAGE SQL
        AS $$
        INSERT INTO teams (name_team) values ("test");
        select * from teams
        $$;
      `
    )
  } catch(err) {
    console.log(err, 'ini err')
    return err
  }
}

module.exports = createTableTeam;