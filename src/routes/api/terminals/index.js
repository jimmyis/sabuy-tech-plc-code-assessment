import { Router } from "express";
const router = Router();

export default function () {
    router.route('/')
        .get(getAllTerminals)

    return router
}

const getAllTerminals = (req, res) => {
    res.send("All Terminals");
}
