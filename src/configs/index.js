const databaseConfigs = {
    mariadb: {
        database: process.env["DB_NAME"],
        user: process.env["DB_USER"],
        password: process.env["DB_PASSWORD"],
        connectionLimit: 5
    }
};

export default {
    databaseConfigs
};
