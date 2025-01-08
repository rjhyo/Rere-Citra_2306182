import {Sequelize} from "sequelize";

const db = new Sequelize('auth_db', 'root', '', {
    host: "localhost",
    dialect: "mysql",
    logging: console.log 
});

try {
    await db.authenticate();
    console.log('Database Connected...');
} catch (error) {
    console.error('Connection error:', error);
}

export default db;