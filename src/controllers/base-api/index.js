import { updateTestTable as updateTestTableModel } from "../../models/base-api/index.js";

export const updateTestTable = async (context) => {
    return await updateTestTableModel(context)
}
