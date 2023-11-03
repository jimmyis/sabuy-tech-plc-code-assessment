import { Router } from "express";
import baseApiRoutes from "./base/index.js";
import terminalsApiRoutes from "./terminals/index.js";

const router = Router();

export default function (/* context */) {
    router.use('/', baseApiRoutes());
    router.use('/terminals', terminalsApiRoutes());
    
    return router
}
