import mysql from 'mysql2/promise';
import 'dotenv/config';

class Database {
    static #instance = null;
    #pool;

    constructor() {
        this.#pool = mysql.createPool({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE,
            port: process.env.DB_PORT,
            waitForConnections: true,
            connectionLimit: 10,
            queueLimit: 0
        });
    }

    static getInstance() {
        if (!Database.#instance) {
            Database.#instance = new Database();
        }
        return Database.#instance;
    }

    getPool() {
        return this.#pool;
    }
}

const connection = Database.getInstance().getPool();

export default connection;