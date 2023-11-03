import 'dotenv/config';
import express from "express";
import router from "./routes/index.js";
import database from "./dependencies/db.js";

database.init().then().catch(console.error);

const app = express();

app.use(express.json({ limit: '1mb' }));

})

router({ app });

app.listen(3000);
