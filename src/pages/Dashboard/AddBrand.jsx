import React, { useState } from "react";
import ReactQuill from "react-quill"; // Make sure you have installed react-quill
import "react-quill/dist/quill.snow.css";
import "./AddBrand.css"; // Import CSS file

const AddBrand = () => {
  // State for form data
  const [formData, setFormData] = useState({
    brandName: "",
    brandDescription: "",

    brandLogo: null, // Changed from "" to null for file inputs
    brandStatus: "",
    productName: "", // Fixed missing field
    productDescription: "",
    brandImage: null,
  });

  // State to manage dynamic product list
  const [productInputs, setProductInputs] = useState([{ id: Date.now(), name: "", image: null }]);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle file change
  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] }); // Store the first selected file
  };

  // Handle Quill input change
  const handleQuillChange = (value) => {
    setFormData({ ...formData, productDescription: value });
  };

  // Handle form submission
  const handleSubmitData = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData, productInputs);

    // Reset form data after submission
    setFormData({
      brandName: "",
      brandDescription: "",
      brandLogo: null,
      brandStatus: "",
      productName: "",
      productDescription: "",
      brandImage: null,
    });

    setProductInputs([{ id: Date.now(), name: "", image: null }]); // Reset dynamic fields
  };

  // Add new product input
  const addProductInput = () => {
    setProductInputs([...productInputs, { id: Date.now(), name: "", image: null }]);
  };

  // Remove product input
  const removeProductInput = (id) => {
    setProductInputs(productInputs.filter((input) => input.id !== id));
  };

  // Handle dynamic product input change
  const handleProductChange = (id, field, value) => {
    setProductInputs((prev) =>
      prev.map((input) => (input.id === id ? { ...input, [field]: value } : input))
    );
  };

  return (
    <div className="form-container">
      <h2>Add Brand</h2>

      <form onSubmit={handleSubmitData}>
        {/* Brand Name Field */}
        <div className="form-group">
          <label>Brand Name</label>
          <input
            type="text"
            name="brandName"
            value={formData.brandName}
            onChange={handleChange}
            placeholder="Enter brand name"
          />
        </div>

        {/* Product Name Field */}
        <div className="form-group">
          <label>Product Name</label>
          <input
            type="text"
            name="productName"
            value={formData.productName}
            onChange={handleChange}
            placeholder="Enter the product name"
          />
        </div>

        {/* Product Description (Rich Text Editor) */}
        <div className="form-group">
          <label>Product Description</label>
          <ReactQuill value={formData.productDescription} onChange={handleQuillChange} theme="snow" />
        </div>

        {/* Brand Logo & Status Fields */}
        <div className="form-group-row">
          <div className="form-group half-width">
            <label>Brand Logo</label>
            <input type="file" name="brandLogo" onChange={handleFileChange} />
          </div>
          <div className="form-group half-width">
            <label>Brand Status</label>
            <input
              className="status"
              type="text"
              name="brandStatus"
              value={formData.brandStatus}
              onChange={handleChange}
              placeholder="Status"
            />
          </div>
        </div>

        {/* Brand Product List Section */}
        <div className="form-group">
          <label>Brand Product List</label>
        </div>

        {/* Dynamic Product Inputs */}
        {productInputs.map((product) => (
          <div key={product.id} className="form-group-row product-row">
            {/* Product Name Field */}
            <div className="form-group half-width">
              <label>Product Name</label>
              <input
                type="text"
                value={product.name}
                onChange={(e) => handleProductChange(product.id, "name", e.target.value)}
                placeholder="Enter product name"
              />
            </div>

            {/* Product Image Field */}
            <div className="form-group half-width">
              <label>Upload Images</label>
              <input
                type="file"
                onChange={(e) => handleProductChange(product.id, "image", e.target.files[0])}
              />
            </div>

            {/* Buttons Container (Right-aligned) */}
            <div className="button-group">
              <button type="button" className="add-remove-btn" onClick={addProductInput}>
                +
              </button>
              {productInputs.length > 1 && (
                <button
                  type="button"
                  className="add-remove-btn remove-btn"
                  onClick={() => removeProductInput(product.id)}
                >
                  -
                </button>
              )}
            </div>
          </div>
        ))}

        {/* Submit Button */}
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddBrand;
