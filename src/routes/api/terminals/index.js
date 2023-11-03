import { Router } from "express";
import { idParamCheck } from "../../../middlewares/index.js";
import { 
    getAllTerminals,
    getTerminalById,
    addTerminal,
    editTerminal,
    removeTerminalById
} from "../../../controllers/terminals/index.js"


const router = Router();


export default function () {
    router.route('/')
        .get(routeGetAllTerminals)
        .post(routeAddTerminal)
        .put(routeEditTerminal)

    router
        .use('/:id', idParamCheck)
        .route('/:id')
        .get(routeGetTerminalById)
        .delete(routeRemoveTerminalById)

    return router
}

const routeGetAllTerminals = async (req, res) => {
    try {
        const result = await getAllTerminals(req.context);

        res.json(result);

    } catch (e) {
        res.status(500).send("Error")
    }
}

const routeGetTerminalById = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await getTerminalById(req.context, id);
    
        res.json(result);

    } catch (e) {
        res.status(500).send("Error")
    }
}

const routeAddTerminal = async (req, res) => {
    try {

        await addTerminal(req.context, req.body);
    
        res.send("New terminal added");

    } catch (e) {
        res.status(500).send("Error")
    }
}

const routeEditTerminal = async (req, res) => {    
    try {
        const { TERM_ID: id } = req.body;

        if (!id) throw("Invalid data");
        
        await editTerminal(req.context, req.body);

        res.send(`Edited terminal ${id} data`);

    } catch (e) {
        res.status(500).send("Error");
    }
}

const routeRemoveTerminalById = async (req, res) => {
    try {
        const { id } = req.params;

        await removeTerminalById(req.context, id);
 
        res.send(`Deleted terminal: ${id}`);

    } catch (e) {
        res.status(500).send("Error");
    }
}
