import { Router } from "express";

const router = Router();

export default function ({ app }) {
    
    router.route('/')
        .get(apiBase);
    
    return router
}

const apiBase = (req, res) => {
    res.send("API route");
}
