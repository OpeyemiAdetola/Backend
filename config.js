const Sequelize = require ('sequelize');
const config = new Sequelize('abc-resturant', 'Opeyemi', 'password1234@',{ dialect: 'mysql' });

module.exports = config;