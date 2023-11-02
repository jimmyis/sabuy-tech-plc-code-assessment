import { Router } from "express";
import terminalsApis from "./terminals/index.js";

const router = Router();

export default function ({ app }) {
    
    router.route('/')
        .get(apiBase);

    router.use('/terminals', terminalsApis())
    
    return router
}

const apiBase = (req, res) => {
    res.send("API route");
}
