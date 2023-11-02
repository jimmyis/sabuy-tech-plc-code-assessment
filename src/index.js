import express from "express";
import router from "./routes/index.js";

const app = express();

router({ app });

app.get("/status", (req, res) => {
    res.send("OK");
})

app.listen(3000);
