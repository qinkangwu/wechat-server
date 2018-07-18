const Sequelize = require('sequelize');
const config = require('../config');
const sequelizeBase = new Sequelize(config.dataBaseConf.dataBase, config.dataBaseConf.user, config.dataBaseConf.password, {
    host: config.dataBaseConf.host,
    dialect: 'mysql',
    operatorsAliases: false,
  
    pool: {
      max: config.dataBaseConf.maxPool,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
});
sequelizeBase
  .authenticate()
  .then((res)=>{
    console.log('Sequelize connection successfully.');
})
  .catch((err)=>{
    console.error('Unable to connect to the database:', err);
})

module.exports = sequelizeBase;