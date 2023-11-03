import { Router } from "express";


const router = Router();


export default function () {
    router.route('/status')
        .get(routeServiceStatus);


    return router
}

const routeServiceStatus = async (req, res) => res.send("OK");

