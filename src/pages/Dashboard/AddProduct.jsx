import React, { useState} from "react";
import ReactQuill from "react-quill";
import "quill/dist/quill.snow.css"; // Ensure this is correctly imported
import "./AddProduct.css";

const AddProduct = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    productName: "",
    productDescription: "",
    brand: "",
    category: "",
    subCategory: "",
    retailPrice: "",
    businessPrice: "",
    quantity: "",
    stockStatus: "",
    compatibleBrand: "",
    compatibleProduct: "",
    productImage: null,
    additionalImage: null,
  });

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle File Uploads
  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
  };

  // Handle Quill Input Change
  const handleQuillChange = (value) => {
    setFormData({ ...formData, productDescription: value });
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents page refresh
  
    console.log("Form Data Submitted:", formData); // Logs form data in console
  
    // Reset form data after submission
    setFormData({
      productName: "",
      productDescription: "",
      brand: "",
      category: "",
      subCategory: "",
      retailPrice: "",
      businessPrice: "",
      quantity: "",
      stockStatus: "",
      compatibleBrand: "",
      compatibleProduct: "",
      productImage: null,
      additionalImage: null,
    });
  };
  return (
    <div className="form-container">
      <h2>Product Form</h2>
      <form onSubmit={handleSubmit}>
        {/* Product Name */}
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
          <ReactQuill
            value={formData.productDescription}
            onChange={handleQuillChange}
            theme="snow"
          />
        </div>

        {/* Dropdown Fields */}
        <div className="form-group">
          <label>Brand</label>
          <select name="brand" value={formData.brand} onChange={handleChange}>
            <option value="">Select</option>
            <option value="Brand1">Brand1</option>
            <option value="Brand2">Brand2</option>
          </select>
        </div>

        <div className="form-group">
          <label>Product Category</label>
          <select name="category" value={formData.category} onChange={handleChange}>
            <option value="">Select</option>
            <option value="Electronics">Electronics</option>
            <option value="Clothing">Clothing</option>
          </select>
        </div>

        <div className="form-group">
          <label>Sub Category</label>
          <select name="subCategory" value={formData.subCategory} onChange={handleChange}>
            <option value="">Select</option>
            <option value="Phones">Phones</option>
            <option value="Shoes">Shoes</option>
          </select>
        </div>

        {/* Price Fields */}
        <div className="form-group-row">
          <div className="form-group half-width">
            <label>Retail Price</label>
            <input
              type="text"
              name="retailPrice"
              value={formData.retailPrice}
              onChange={handleChange}
              placeholder="Enter the retail price"
            />
          </div>
          <div className="form-group half-width">
            <label>Business Price</label>
            <input
              type="text"
              name="businessPrice"
              value={formData.businessPrice}
              onChange={handleChange}
              placeholder="Enter the business price"
            />
          </div>
        </div>

        {/* Quantity & Stock Status */}
        <div className="form-group">
          <label>Quantity</label>
          <select name="quantity" value={formData.quantity} onChange={handleChange}>
            <option value="">Select</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
            <option value="40">40</option>
            <option value="50">50</option>
          </select>
        </div>

        <div className="form-group">
          <label>Stock Status</label>
          <select name="stockStatus" value={formData.stockStatus} onChange={handleChange}>
            <option value="">Select</option>
            <option value="In Stock">In Stock</option>
            <option value="Out of Stock">Out of Stock</option>
          </select>
        </div>

        {/* Compatible Brand & Product */}
        <div className="form-group-row">
          <div className="form-group half-width">
            <label>Compatible Brand</label>
            <input
              type="text"
              name="compatibleBrand"
              value={formData.compatibleBrand}
              onChange={handleChange}
              placeholder="Enter brand"
            />
          </div>
          <div className="form-group half-width">
            <label>Compatible Product</label>
            <input
              type="text"
              name="compatibleProduct"
              value={formData.compatibleProduct}
              onChange={handleChange}
              placeholder="Enter product"
            />
          </div>
        </div>

        {/* Image Upload Fields */}
        <div className="form-group-row">
          <div className="form-group half-width">
            <label>Upload Image</label>
            <input type="file" name="productImage" onChange={handleFileChange} />
          </div>
          <div className="form-group half-width">
            <label>Additional Images</label>
            <input type="file" name="additionalImage" onChange={handleFileChange} />
          </div>
        </div>

        {/* Submit Button */}
        <button type="submit" className="submit-btn">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
