const mongoose = require("mongoose");
const Order = require("../models/Order");

// GET all
const getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find();
        res.status(200).json(orders);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// GET one
const getOrderById = async (req, res) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({
                message: "Invalid Order ID"
            });
        }

        const order = await Order.findById(req.params.id);

        if (!order) {
            return res.status(404).json({
                message: "Order not found"
            });
        }

        res.status(200).json(order);

    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
};

// POST
const createOrder = async (req, res) => {
    try {
        const order = new Order(req.body);
        const savedOrder = await order.save();
        res.status(201).json({
            id: savedOrder._id
        });
    } catch (err) {
        res.status(400).json({
            message: err.message
        });
    }
};

// PUT
const updateOrder = async (req, res) => {
    try {
        const updatedOrder = await Order.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!updatedOrder) {
            return res.status(404).json({
                message: "Order not found"
            });
        }

        res.status(200).json(updatedOrder);

    } catch (err) {
        res.status(400).json({
            message: err.message
        });
    }
};

// DELETE
const deleteOrder = async (req, res) => {
    try {
        const deletedOrder = await Order.findByIdAndDelete(req.params.id);

        if (!deletedOrder) {
            return res.status(404).json({
                message: "Order not found"
            });
        }

        res.sendStatus(204);

    } catch (err) {
        res.status(400).json({
            message: err.message
        });
    }
};

module.exports = {
    getAllOrders,
    getOrderById,
    createOrder,
    updateOrder,
    deleteOrder
};