export const readAllTerminals = async ({ db }) => {
    try {
        const result = await db
            .query(`SELECT * from TERMINAL_INFO`);

        return serializeEscaper(result)
    } catch (e) {
        console.error(e);
        throw (e);
    }
}

export const readTerminalById = async ({ db }, id) => {
    try {
        const result = await db
            .query(`SELECT * from TERMINAL_INFO WHERE TERM_ID = ?`, 
            [id]);

        return serializeEscaper(result)
    } catch (e) {
        console.error(e);
        throw (e)
    }
}
