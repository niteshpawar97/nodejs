import User from "../models/user.model.js";

export const getUsers = async (req, res, next) => {
  try {
    const users = await User.findAll();

    res.json({
      success: true,
      data: users
    });
  } catch (err) {
    next(err);
  }
};

export const createUser = async (req, res, next) => {
  try {
    const { name, email } = req.body;

    if (!name) {
      return res.status(400).json({
        success: false,
        message: "Name is required"
      });
    }

    const user = await User.create({ name, email });

    res.status(201).json({
      success: true,
      data: user
    });
  } catch (err) {
    next(err);
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;

    await User.destroy({ where: { id } });

    res.json({
      success: true,
      message: "User deleted"
    });
  } catch (err) {
    next(err);
  }
};
