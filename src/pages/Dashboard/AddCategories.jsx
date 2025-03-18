import React, { useState } from "react";
import "./AddCategories.css"; // Import CSS file

const AddCategories = () => {
  const [subCategories, setSubCategories] = useState([{ id: 1 }]);

  // Function to add a new sub-category
  const addSubCategory = () => {
    setSubCategories([...subCategories, { id: Date.now() }]);
  };

  // Function to remove a sub-category by id
  const removeSubCategory = (id) => {
    setSubCategories(subCategories.filter((sub) => sub.id !== id));
  };

  return (
    <div className="form-container">
      <h2>Category Form</h2>

      {/* Category Name Field */}
      <div className="form-group">
        <label>Category Name</label>
        <input type="text" placeholder="Enter the category name" />
      </div>

      {/* Sub Categories Field */}
      <div className="form-group">
        <label>Sub Category</label>
        {subCategories.map((sub) => (
          <div key={sub.id} className="sub-category-container">
            <input type="text" placeholder="Enter the sub category name" />
            {/* <select>
              <option>Select</option>
              <option>Sub Category 1</option>
              <option>Sub Category 2</option>
            </select> */}
            <button type="button" className="add-remove-btn" onClick={addSubCategory}>+</button>
            {subCategories.length > 1 && (
              <button type="button" className="add-remove-btn remove-btn" onClick={() => removeSubCategory(sub.id)}>-</button>
            )}
          </div>
        ))}
      </div>

      {/* Upload Image Field */}
      {/* <div className="form-group">
        <label>Upload Images</label>
        <input type="file" />
      </div> */}

      {/* Submit Button */}
      <button className="submit-btn">Submit</button>
    </div>
  );
};

export default AddCategories;
