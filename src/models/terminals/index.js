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

export const insertTerminal = async ({ db }, data) => {
    try {
        const {
            TERM_ID,
            BRANCH,
            VENDORNO,
            PRODUCTNO,
            PMINO,
            BATCH,
            SLIPNO,
            TERM_NAME,
            TERM_FOOD,
            PAYPERCENT,
            PAYPERDAY,
            INCLUDEVAT,
            INV_PRINT,
            INV_NAME,
            INV_ADDR,
            TERM_FLAG,
            TYPEPAY,
            STAFFOFCHARGE,
            STAFFPRODUCTNO,
            CUSTOMER_REF,
            RENTAL_ID,
            HORIZON_SENT,
            LEASE_TYPE,
            CLUBCARD_CODE,
            CLUBCARD_AMT,
            CLUBCARD_POINT,
            TERMINAL_TYPE,
        } = data;

        const result = await db
            .query(`
                INSERT
                    INTO TERMINAL_INFO (
                        TERM_ID,
                        BRANCH,
                        VENDORNO,
                        PRODUCTNO,
                        PMINO,
                        BATCH,
                        SLIPNO,
                        TERM_NAME,
                        TERM_FOOD,
                        PAYPERCENT,
                        PAYPERDAY,
                        INCLUDEVAT,
                        INV_PRINT,
                        INV_NAME,
                        INV_ADDR,
                        TERM_FLAG,
                        TYPEPAY,
                        STAFFOFCHARGE,
                        STAFFPRODUCTNO,
                        CUSTOMER_REF,
                        RENTAL_ID,
                        HORIZON_SENT,
                        LEASE_TYPE,
                        CLUBCARD_CODE,
                        CLUBCARD_AMT,
                        CLUBCARD_POINT,
                        TERMINAL_TYPE
                    )
                    VALUES
                        (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`, 
                [
                    TERM_ID,
                    BRANCH,
                    VENDORNO,
                    PRODUCTNO,
                    PMINO,
                    BATCH,
                    SLIPNO,
                    TERM_NAME,
                    TERM_FOOD,
                    PAYPERCENT,
                    PAYPERDAY,
                    INCLUDEVAT,
                    INV_PRINT,
                    INV_NAME,
                    INV_ADDR,
                    TERM_FLAG,
                    TYPEPAY,
                    STAFFOFCHARGE,
                    STAFFPRODUCTNO,
                    CUSTOMER_REF,
                    RENTAL_ID,
                    HORIZON_SENT,
                    LEASE_TYPE,
                    CLUBCARD_CODE,
                    CLUBCARD_AMT,
                    CLUBCARD_POINT,
                    TERMINAL_TYPE
                ]);

        console.log(
            `Add a new terminal.\n`, result);

    } catch (e) {
        if (e.code === "ER_DUP_ENTRY") {
            const error_message = `ERROR: ${e.code} - ${e.sqlMessage}`;
            console.error(error_message);
            throw(error_message);
        }
    }
}

export const updateTerminalById = async ({ db }, data) => {
    try {
        const { TERM_ID: id, TERMINAL_TYPE } = data;

        const result = await db
            .query(`
                UPDATE TERMINAL_INFO 
                SET
                    TERMINAL_TYPE = ?
                WHERE TERM_ID = ?`, 
            [TERMINAL_TYPE, id]);

        return result
    } catch (e) {
        console.error(e);
        throw (e);
    }
}

export const deleteTerminalById = async ({ db }, id) => {
    try {
        const result = await db
            .query(`DELETE FROM TERMINAL_INFO WHERE TERM_ID = ?`, 
            [id]);

        console.log(result);

        return
    } catch (e) {
        console.error(e);
        throw (e);
    }
}
