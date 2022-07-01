import Rooms from "../models/Rooms.js";
import { createError } from "../utils/error.js";
import Hotels from "../models/Hotels.js";

export const CreateRoom = async (req, res, next) => {
  const hotelId = req.params.hotelId;
  const newRoom = new Rooms(req.body);

  try {
    const savedRoom = await newRoom.save();
    await Hotels.findByIdAndUpdate(hotelId, {
      $push: { rooms: savedRoom._id },
    });

    res.status(200).json(savedRoom);
  } catch (error) {
    next(error);
  }
};

export const UpdateRoom = async (req, res, next) => {
  try {
    const updatedRoom = await Rooms.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedRoom);
  } catch (err) {
    next(err);
  }
};

export const DeleteRoom = async (req, res, next) => {
  try {
    const hotelId = req.params.hotelId;
    await Rooms.findByIdAndDelete(req.params.id);
    await Hotels.findByIdAndUpdate(hotelId, {
      $pull: { rooms: req.params.id },
    });

    res.status(200).json({
      status: "Success",
      message: "Room deleted successfully",
    });
  } catch (err) {
    next(err);
  }
};

export const GetRoom = async (req, res, next) => {
  try {
    const room = await Rooms.findById(req.params.id);
    res.status(200).json(room);
  } catch (err) {
    next(err);
  }
};

export const ListRoom = async (req, res, next) => {
  try {
    const rooms = await Rooms.find();
    res.status(200).json(rooms);
  } catch (err) {
    next(err);
  }
};
