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
