const Sequelize = require('sequelize');
const sequelizeBase = require('../lib/dataUtil');

const UserFeedback = sequelizeBase.define('user_feedback',{
    id: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull : false
    },
    connection : {
        type : Sequelize.STRING,
        allowNull : true
    },
    message : {
        type : Sequelize.STRING,
        allowNull : true
    },
    user_id : {
        type : Sequelize.STRING,
        allowNull : true
    },
    create_date : {
        type : Sequelize.DATE,
        allowNull : true
    },
    is_deleted : {
        type : Sequelize.BOOLEAN,
        allowNull : true
    },
    user_source : {
        type : Sequelize.INTEGER,
        allowNull : true
    }
},{
    freezeTableName : true,
    timestamps : false
})

module.exports = UserFeedback;