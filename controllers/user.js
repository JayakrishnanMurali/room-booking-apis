import Users from "../models/Users.js";

export const UpdateUser = async (req, res, next) => {
  try {
    const updatedUser = await Users.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    next(err);
  }
};

export const DeleteUser = async (req, res, next) => {
  try {
    await Users.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: "Success",
      message: "User deleted successfully",
    });
  } catch (err) {
    next(err);
  }
};

export const GetUser = async (req, res, next) => {
  try {
    const user = await Users.findById(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};

export const ListUser = async (req, res, next) => {
  try {
    const users = await Users.find();
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
};
