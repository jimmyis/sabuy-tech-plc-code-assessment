import { Router } from "express";
import { updateTestTable } from "../../../controllers/base-api/index.js"


const router = Router();


export default function () {
    router.route('/status')
        .get(routeServiceStatus);

    router.route('/update')
        .put(routeUpdateTestTable);

    router.route('*')
        .all((req, res) => res.status(404).send("Not Found"));

    return router
}

const routeServiceStatus = async (req, res) => res.send("OK");

const routeUpdateTestTable = async (req, res) => {
    try {
        const result = await updateTestTable(req.context);

        if (result.error) {
            switch (result.code) {
                case 'LIMIT_EXCEEDED':
                    return res.status(410).send("ERROR: Update Limit Exceeded");
                default:
                    return res.status(500).send("ERROR");
            }
        }

        res.send("The MIN field update successfully.");

    } catch (e) {
        console.error(e);
        res.status(500).send("ERROR");
    }
}
