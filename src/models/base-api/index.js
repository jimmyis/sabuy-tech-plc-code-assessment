export const updateTestTable = async ({ db }) => {
    const result = await db
        .query(`UPDATE TEST_TABLE 
            SET MIN = MIN + 1
            WHERE MIN < MAX`)

    if (result.affectedRows == 0) {
        return {
            error: true,
            code: 'LIMIT_EXCEEDED'
        }
    }

    return {
        error: false,
        code: 'SUCCESS'
    }
}
