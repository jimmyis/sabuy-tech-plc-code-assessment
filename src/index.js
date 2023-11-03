import 'dotenv/config';
import express from "express";
import router from "./routes/index.js";
import database from "./dependencies/db.js";

database.init().then().catch(console.error);

const app = express();

app.use(express.json({ limit: '1mb' }));

// Dependency Injected Services as Context via Middleware
app.use((req, res, next) => {
    req.context = {
        db: database.db
    };
    next();
})

router({ app });

app.listen(3000);
