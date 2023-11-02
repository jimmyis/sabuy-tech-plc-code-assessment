import { Router } from "express";
const router = Router();

export default function () {
    router.route('/')
        .get(getAllTerminals)

    router.route('/:id')
        .get(getTerminalById)

    return router
}

const getAllTerminals = (req, res) => {
    res.send("All Terminals");
}

const getTerminalById = (req, res) => {
    const { params } = req;
    const { id } = params;

    res.send(`Get terminal: ${id}`);
}
