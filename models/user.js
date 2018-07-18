const Sequelize = require('sequelize');
const sequelizeBase = require('../lib/dataUtil');
const User = sequelizeBase.define('user',{
    id: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull : false
    },
    birth_day : {
        type : Sequelize.DATE,
        allowNull : true
    },
    create_date : {
        type : Sequelize.DATE,
        allowNull : true
    },
    enabled : {
        type : Sequelize.BOOLEAN,
        allowNull : true
    },
    gender : {
        type : Sequelize.INTEGER,
        allowNull : true
    },
    is_deleted : {
        type : Sequelize.BOOLEAN,
        allowNull : true
    },
    last_login_date : {
        type : Sequelize.DATE,
        defaultValue : 'CURRENT_TIMESTAMP',
        allowNull : true
    },
    last_login_device : {
        type : Sequelize.STRING,
        allowNull : true
    },
    last_login_ip : {
        type : Sequelize.STRING,
        allowNull : true
    },
    name : {
        type : Sequelize.STRING,
        allowNull : true
    },
    nickname : {
        type : Sequelize.STRING,
        allowNull : true
    },
    openId : {
        type : Sequelize.STRING,
        allowNull : true
    },
    password : {
        type : Sequelize.STRING,
        allowNull : true
    },
    phone_number : {
        type : Sequelize.STRING,
        allowNull : true
    },
    session_id : {
        type : Sequelize.STRING,
        allowNull : true
    },
    unionId : {
        type : Sequelize.STRING,
        allowNull : true
    },
    open_id : {
        type : Sequelize.STRING,
        allowNull : true
    },
    union_id : {
        type : Sequelize.STRING,
        allowNull : true
    },
    city : {
        type : Sequelize.STRING,
        allowNull : true
    },
    country : {
        type : Sequelize.STRING,
        allowNull : true
    },
    portrait_url : {
        type : Sequelize.STRING,
        allowNull : true
    },
    province : {
        type : Sequelize.STRING,
        allowNull : true
    },
    ali_pay_user_id : {
        type : Sequelize.STRING,
        allowNull : true
    },
    wechat_subscribed : {
        type : Sequelize.INTEGER,
        allowNull : true
    },
    mini_open_id : {
        type : Sequelize.STRING,
        allowNull : true
    },
    subscribe_date : {
        type : Sequelize.DATE,
        allowNull : true
    },
    zone_id : {
        type : Sequelize.STRING,
        allowNull : true
    },
    mini_session_key : {
        type : Sequelize.STRING,
        allowNull : true
    },
    user_source : {
        type : Sequelize.INTEGER,
        allowNull : true
    },
    member_number : {
        type : Sequelize.STRING,
        allowNull : true
    },
    agree : {
        type : Sequelize.BOOLEAN,
        allowNull : true
    }
},{
    freezeTableName : true,
    timestamps : false
})

module.exports = User;