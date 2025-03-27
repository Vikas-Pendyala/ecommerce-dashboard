import React, { useState, useEffect } from "react";
import "./AddCategories.css"; // Import CSS file

const AddCategories = () => {
  const [categoryName, setCategoryName] = useState("");
  const [subCategories, setSubCategories] = useState([{ id: 1, name: "" }]);
  const [tempSubCategory, setTempSubCategory] = useState({});

  // Function to add a new sub-category
  const addSubCategory = () => {
    setSubCategories([...subCategories, { id: Date.now(), name: "" }]);
  };

  // Function to remove a sub-category by id
  const removeSubCategory = (id) => {
    setSubCategories(subCategories.filter((sub) => sub.id !== id));
  };

  // Function to handle input change for category name
  const handleCategoryChange = (e) => {
    setCategoryName(e.target.value);
  };

  // Function to handle input change locally for subcategories
  const handleTempSubCategoryChange = (id, value) => {
    setTempSubCategory({ ...tempSubCategory, [id]: value });
  };

  // Function to update state only when input loses focus
  const handleSubCategoryBlur = (id) => {
    setSubCategories((prevSubCategories) =>
      prevSubCategories.map((sub) =>
        sub.id === id ? { ...sub, name: tempSubCategory[id] || sub.name } : sub
      )
    );
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Category Submitted:", categoryName);
    console.log("Subcategories Submitted:", subCategories);

    // Reset form
    setCategoryName("");
    setSubCategories([{ id: 1, name: "" }]);
    setTempSubCategory({});
  };

  // useEffect to log when subCategories change
  useEffect(() => {
    console.log("SubCategories Updated:", subCategories);
  }, [subCategories]);

  return (
    <div className="form-container">
      <h2>Category Form</h2>

      <form onSubmit={handleSubmit}>
        {/* Category Name Field */}
        <div className="form-group">
          <label>Category Name</label>
          
          <input
            type="text"
            value={categoryName}
            onChange={handleCategoryChange} 
            placeholder="Enter the category name"
            
          />
        </div>

        {/* Sub Categories Field */}
        <div className="form-group">
          <label>Sub Category</label>
          {subCategories.map((sub) => ( 
            <div key={sub.id} className="sub-category-container">
              <input
                type="text"
                defaultValue={sub.name}
                onChange={(e) => handleTempSubCategoryChange(sub.id, e.target.value)}
                onBlur={() => handleSubCategoryBlur(sub.id)}
                placeholder="Enter the sub-category name"
              />

              <button type="button" className="add-remove-btn" onClick={addSubCategory}>
                +
              </button>
              {subCategories.length > 1 && (
                <button
                  type="button"
                  className="add-remove-btn remove-btn"
                  onClick={() => removeSubCategory(sub.id)}
                >
                  -
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Submit Button */}
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddCategories;
