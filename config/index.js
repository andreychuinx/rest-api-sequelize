const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('training', 'training_admin', 'training_admin2022', {
  host: '194.163.34.217',
  dialect: 'postgres',
  port: '5490'
});

// const test = async () => {
//   try {
//     await sequelize.authenticate();
//     console.log('Connection has been established successfully.');
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }
// }

// test()


module.exports = sequelize