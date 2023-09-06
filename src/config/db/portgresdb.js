import { Pool, Client } from 'pg'

const pool = new Pool({
    user: 'portgres',
    host: 'localhost',
    database: 'tailieu',
    password: 'caovan1234',
    port: 5432,
})

console.log(await pool.query('SELECT * FROM CONTACT'));