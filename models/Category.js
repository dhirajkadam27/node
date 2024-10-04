const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define Subclassification schema
const SubclassificationSchema = new Schema({
  name: {
    type: String,
    required: true,
  }
});

// Define Subcategory schema
const SubcategorySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  subclassifications: [SubclassificationSchema]  // Embedding subclassifications
});

// Define Category schema
const CategorySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  subcategories: [SubcategorySchema]  // Embedding subcategories
});

// Create Category model
const Category = mongoose.model('Category', CategorySchema);

module.exports = Category;
