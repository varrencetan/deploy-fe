import {Sequelize} from "sequelize";

const db = new Sequelize('people','people','people',{
    host: 'localhost',
    dialect: 'mysql'
});

export default db;