import apiRoutes from "./api/index.js";

export default function (context) {
    const { app } = context;

    app.use("/api", apiRoutes(context));
}
