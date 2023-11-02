import { Router } from "express";
const router = Router();

export default function () {
    router.route('/')
        .get(getAllTerminals)
        .post(addTerminal)

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

const addTerminal = (req, res) => {
    console.log(
        `Add a new terminal
        \n${JSON.stringify(req.body, null, 2)}`);
        
    res.send("New terminal added");
}
