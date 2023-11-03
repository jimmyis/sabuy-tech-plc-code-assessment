import {
    readAllTerminals,
    readTerminalById,
    insertTerminal,
} from "../../models/terminals/index.js";

export const getAllTerminals = async ({ db }) => {
    return await readAllTerminals({ db });
}

export const getTerminalById = async ({ db }, id) => {
    return await readTerminalById({ db }, id);
}

export const addTerminal = async ({ db }, data) => {
    return await insertTerminal({ db }, data);
}
