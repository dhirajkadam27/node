// feedbackController.js
const Feedback = require('../models/Feedback'); // Ensure correct path to your Feedback model

exports.addFeedback = async (req, res) => {
    try {
        console.log("Feedback:", req.body);
        const { rating, improvement, bugs } = req.body;

        // Create the new feedback entry
        const response = await Feedback.create({ rating, improvement, bugs });

        return res.status(201).json({
            success: true,
            message: "Feedback saved successfully!",
            _id: response._id // Return the newly created feedback's _id
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message
        });
    }
};
