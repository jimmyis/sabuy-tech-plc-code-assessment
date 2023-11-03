import { Router } from "express";


const router = Router();


export default function () {
    router.route('/status')
        .get(routeServiceStatus);


    router.route('*')
        .all((req, res) => res.status(404).send("Not Found"));

    return router
}

const routeServiceStatus = async (req, res) => res.send("OK");

