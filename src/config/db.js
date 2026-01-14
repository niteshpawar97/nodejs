import mysql from "mysql2/promise"
import "dotenv/config";

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    passeord: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    waitForConnections: true,
    connectionLimit: 10,
})

console.log("Database pool created");

export default pool;
