import apiRoutes from "./api/index.js";

export default function ({ app }) {
    app.use("/api", apiRoutes({ app }));
}
