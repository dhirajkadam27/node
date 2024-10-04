const Category = require('../models/Category'); // Import the Category model

// Controller function to add a category
exports.addCategory = async (req, res) => {
  const { name, subcategories } = req.body; // Destructure name and subcategories from the request body

  // Validate request body
  if (!name || !Array.isArray(subcategories)) {
    return res.status(400).json({ message: 'Invalid request data' });
  }

  // Validate subcategories and subclassifications
  for (const subcategory of subcategories) {
    if (!subcategory.name || !Array.isArray(subcategory.subclassifications)) {
      return res.status(400).json({ message: 'Invalid subcategory data' });
    }

    for (const subclassification of subcategory.subclassifications) {
      if (!subclassification.name) {
        return res.status(400).json({ message: 'Invalid subclassification data' });
      }
    }
  }

  // Create a new category
  const newCategory = new Category({
    name,
    subcategories,
  });

  try {
    // Save the category to the database
    await newCategory.save();
    return res.status(201).json({ message: 'Category added successfully', category: newCategory });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Controller function to fetch all categories
exports.getCategories = async (req, res) => {
    try {
      const categories = await Category.find(); // Retrieve all categories from the database
      return res.status(200).json({ categories }); // Return the categories in the response
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Server error', error: error.message });
    }
  };
  

  exports.addSubcategory = async (req, res) => {
    const { id } = req.params; // Get the category ID from the URL parameters
    const { name, subclassifications } = req.body; // Get the subcategory data from the request body
  
    try {
      const category = await Category.findById(id);
      if (!category) {
        return res.status(404).json({ message: 'Category not found' });
      }
  
      // Create a new subcategory
      const newSubcategory = { name, subclassifications };
      category.subcategories.push(newSubcategory); // Append new subcategory to the existing category's subcategories
      await category.save(); // Save the updated category
  
      return res.status(201).json({ message: 'Subcategory added successfully', category });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Server error', error: error.message });
    }
  };
  

  exports.addSubclassification = async (req, res) => {
    const { categoryId, subcategoryId } = req.params; // Get the category and subcategory IDs from the URL parameters
    const { name } = req.body; // Get the subclassification name from the request body
  
    // Validate the request
    if (!name) {
      return res.status(400).json({ message: 'Invalid request data' });
    }
  
    try {
      // Find the category
      const category = await Category.findById(categoryId);
      if (!category) {
        return res.status(404).json({ message: 'Category not found' });
      }
  
      // Find the subcategory
      const subcategory = category.subcategories.id(subcategoryId);
      if (!subcategory) {
        return res.status(404).json({ message: 'Subcategory not found' });
      }
  
      // Create a new subclassification
      const newSubclassification = { name };
      subcategory.subclassifications.push(newSubclassification); // Add the subclassification to the subcategory's subclassifications
  
      await category.save(); // Save the updated category
  
      return res.status(201).json({ message: 'Subclassification added successfully', category });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Server error', error: error.message });
    }
  };
  
  