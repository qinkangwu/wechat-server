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
    console.log('Sequelize orm 链接数据库成功');
})
  .catch((err)=>{
    console.error('链接数据库失败', err);
})

module.exports = sequelizeBase;