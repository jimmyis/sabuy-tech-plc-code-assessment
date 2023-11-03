import mariadb from "mariadb";
import { databaseConfigs } from "../configs/index.js";

const pool = mariadb.createPool(databaseConfigs.mariadb);  

const DB = {
    init,
    pool,
    db: null
}


export default DB
export const db = () => DB.db

function init() {
    console.log("Initializing database connection...");

    try {
        return pool.getConnection()
            .then((db) => {
                console.log("Done");
                DB.db = db;

                return DB.db
            })
            .catch((error) => {
                console.errpr("Error initializing database connection");

                throw(error)
            })

    } catch (e) {
        if (DB.db) DB.db.release();
    }
}
