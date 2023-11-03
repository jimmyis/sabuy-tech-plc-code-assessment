import {
    readAllTerminals,
    readTerminalById,
} from "../../models/terminals/index.js";

export const getAllTerminals = async ({ db }) => {
    return await readAllTerminals({ db });
}

export const getTerminalById = async ({ db }, id) => {
    return await readTerminalById({ db }, id);
}
