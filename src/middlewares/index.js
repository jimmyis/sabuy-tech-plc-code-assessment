export const idParamCheck = (req, res, next) => {
    try {
        const { id } = req.params;

        if (!id) throw("Invalid data");

        next();

    } catch (e) {
        res.status(400).send(e);
    }
}
