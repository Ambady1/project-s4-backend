import mysql from 'mysql'
//creating connection pool to database
const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'mymess'
});

export default db;
