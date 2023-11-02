import { Router } from "express";
const router = Router();

export default function () {
    router.route('/')
        .get(getAllTerminals)
        .post(addTerminal)
        .put(updateTerminal)

    router.use('/:id', idParamCheckMiddleware)
        .route('/:id')
        .get(getTerminalById)
        .delete(deleteTerminalById)

    return router
}

const idParamCheckMiddleware = (req, res, next) => {
    try {
        const { id } = req.params;

        if (!id) throw("Invalid data");

        next();
    } catch (e) {
        res.send(e);
    }
}

const getAllTerminals = (req, res) => {
    res.send("All Terminals");
}

const getTerminalById = (req, res) => {
    const { id } = req.params;

    res.send(`Get terminal: ${id}`);
}

const addTerminal = (req, res) => {
    console.log(
        `Add a new terminal
        \n${JSON.stringify(req.body, null, 2)}`);
        
    res.send("New terminal added");
}

const updateTerminal = (req, res) => {    
    try {
        const { TERM_ID: id } = req.body;

        if (!id) throw("Invalid data");

        res.send(`Edited terminal ${id} data`);
    } catch (e) {
        res.send(e);
    }
}

const deleteTerminalById = (req, res) => {
    const { id } = req.params;

    res.send(`Deleted terminal: ${id}`);
}
