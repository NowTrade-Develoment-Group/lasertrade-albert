const dotenv = require("dotenv");
dotenv.config();

module.exports = {
    port: process.env.PORT || 80,

    database: {
        type: process.env.DB_TYPE || "mysql",
        host: process.env.DB_HOST || "127.0.0.1",
        name: process.env.DB_NAME || "trading",
        user: process.env.DB_USER || "root",
        port: process.env.DB_PORT || "3306",
        pass: process.env.DB_PASS || "your_password", //this is real password, not replace your password.
        logging: process.env.DB_LOGGING === "true",
    },

    siteEndpoint: process.env.WW_SiteEndpoint,
}