const mongoose = require("mongoose");
const Cake = require("../models/Cake");

// GET all cakes
const getAllCakes = async (req, res) => {
    try {
        const cakes = await Cake.find();
        res.status(200).json(cakes);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

// POST a new cake
const createCake = async (req, res) => {
    try {
        const cake = new Cake(req.body);
        const savedCake = await cake.save();
        res.status(201).json({
            id: savedCake._id
        });
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
};

// GET one cake
const getSingleCake = async (req, res) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({
                message: "Invalid cake ID"
            });
        }

        const cake = await Cake.findById(req.params.id);

        if (!cake) {
            return res.status(404).json({
                message: "Cake not found"
            });
        }

        res.status(200).json(cake);

    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
};

// PUT - Update a cake
const updateCake = async (req, res) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({
                message: "Invalid cake ID"
            });
        }

        const updatedCake = await Cake.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!updatedCake) {
            return res.status(404).json({
                message: "Cake not found"
            });
        }

        res.status(200).json(updatedCake);

    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
};

// DELETE a cake
const deleteCake = async (req, res) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({
                message: "Invalid cake ID"
            });
        }

        const deletedCake = await Cake.findByIdAndDelete(req.params.id);

        if (!deletedCake) {
            return res.status(404).json({
                message: "Cake not found"
            });
        }

        res.sendStatus(204);

    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
};

module.exports = {
    getAllCakes,
    createCake,
    getSingleCake,
    updateCake,
    deleteCake
};