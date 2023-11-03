import {
    readAllTerminals,
    readTerminalById,
    insertTerminal,
    updateTerminalById,
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

export const editTerminal = async ({ db }, data) => {
    return await updateTerminalById({ db }, data);
}
