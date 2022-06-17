const Sequelize = require ('sequelize');
const config = require('../config');
const { formatBeverage } = require('../myModule');

const Beverage= config.define('beverage',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    food_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    },
    price: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    foodtype_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
}, { timestamps: false });
 
module.exports = formatBeverage;
