const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "root",
    localhost: 5432,
    database: "permtodo"
})

module.exports = pool