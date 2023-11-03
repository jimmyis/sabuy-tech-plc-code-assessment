import {
    readAllTerminals,
} from "../../models/terminals/index.js";

export const getAllTerminals = async ({ db }) => {
    return await readAllTerminals({ db });
}
