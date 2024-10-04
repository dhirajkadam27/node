const Block = require('../models/Block'); // Make sure to adjust the path as needed

exports.addBlock = async (req, res) => {
    try {
        console.log("Block:", req.body);
        const { label, library, media, content, category, subcategory, subclassification } = req.body;

        // Validate required fields
        if (!label || !library || !media || !content || !category || !subcategory || !subclassification) {
            return res.status(400).json({ success: false, message: "All fields are required." });
        }

        // Create the new block with subcategory and subclassification
        const response = await Block.create({
            label,
            library, 
            media,
            content,
            category,
            subcategory,
            subclassification
        });

        return res.status(201).json({
            success: true,
            message: "Block created successfully",
            _id: response._id // Return the newly created block's _id
        });
    } catch (error) {
        console.error("Error adding block:", error); // Log the error for debugging
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message
        });
    }
};

exports.deleteBlock = async (req, res) => {
    try {
        const { _id } = req.body; // Extract the _id from the request body
        if (!_id) {
            return res.status(400).json({ success: false, message: "Block ID is required." });
        }

        // Delete the block by its ID directly
        const deletedBlock = await Block.findByIdAndDelete(_id);

        if (!deletedBlock) {
            return res.status(404).json({ success: false, message: "Block not found." });
        }

        return res.status(200).json({
            success: true,
            message: "Deleted"
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message
        });
    }
};

exports.getAllBlocks = async (req, res) => {
    try {
        const blocks = await Block.find({});
        return res.status(200).json({
            success: true,
            data: blocks
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message
        });
    }
};



exports.updateBlock = async (req, res) => {
    const { _id, label, media, content, category, subcategory, subclassification } = req.body;
  
    // Validate required fields
    if (!label || !media || !content || !category || !subcategory || !subclassification) {
      return res.status(400).json({ message: 'All fields are required.' });
    }
  
    try {
      // Find the block by ID and update it
      const updatedBlock = await Block.findByIdAndUpdate(
        _id,
        { label, media, content, category, subcategory, subclassification },
        { new: true } // This option returns the updated document
      );
  
      if (!updatedBlock) {
        return res.status(404).json({ message: 'Block not found' });
      }
  
      res.status(200).json({ message: 'Block updated successfully', data: updatedBlock });
    } catch (error) {
      console.error("Error updating block:", error);
      res.status(500).json({ message: 'Server error' });
    }
};

  
