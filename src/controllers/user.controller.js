let users = [];

export const getUsers = (req, res) => {
    res.json({
        success: true,
        data: users,
    })
}

export const createUser = async (req, res, next) => {
    try{
        const user = req.body;

        if(!user.name) {
            throw new Error("Name required")
        }

        users.push(user);
        res.status(201).json({
            success: true,
            data: user
        });

    }catch(error){
        next(error)
    }
}

export const deleteUser = (req, res) => {
    const { id } = req.params;
    users.splice(id, 1);
    res.json({
        success: true,
        message: "User Deleted"
    })
}