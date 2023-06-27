import mysql from 'mysql'
//creating connection pool to database
const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'mymess',
    multipleStatements: true, // Enable multi-statements

});

export default db;
