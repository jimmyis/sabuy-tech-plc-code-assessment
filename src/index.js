import express from "express";
import router from "./routes/index.js";

const app = express();

app.use(express.json({ limit: '1mb' }));

router({ app });

app.get("/status", (req, res) => {
    res.send("OK");
})

app.listen(3000);
