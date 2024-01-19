const { Pool } = require("pg");
const pool = new Pool({
  host: process.env.HOST || "rajje.db.elephantsql.com",
  user: process.env.USER || "kihxsvhq",
  database: process.env.DB_NAME || "kihxsvhq",
  password: process.env.DB_PASSWORD || "VLozqEc8I2-9FErGzXMTKF4POw6rfLfs",
  port: process.env.DB_PORT || "5432",
});
module.exports = pool;
