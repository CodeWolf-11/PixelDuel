export const getUserController = async (req, res) => {
    const user = req.user;
    return res.json({
        data: user
    });
};
