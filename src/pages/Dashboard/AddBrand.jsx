  import React, { useState } from "react";
  import "./AddBrand.css"; // Import CSS file

  const AddBrand = () => {
    const [productInputs, setProductInputs] = useState([{ id: Date.now() }]);
const [brandFormData, setBrandFormData]=useState({
  brandName:"",
  brandDescription:"",
  brandLogo:"",
  brandStatus:"",
  brandProductName: "",
  brandImage:"",
});
const handleSubmitData =(e)=>{
e.preventDefault();
console.log("form data:", brandFormData);
}

    // Function to add a new product input
    const addProductInput = () => {
      setProductInputs([...productInputs, { id: Date.now() }]);
    };

    // Function to remove a product input
    const removeProductInput = (id) => {
      setProductInputs(productInputs.filter((input) => input.id !== id));
    };

    return (
      <div className="form-container">
        <h2>Add Brand</h2>

        {/* Brand Name Field */}
        <div className="form-group">
          <label>Brand Name</label>
          <input type="text" placeholder="Enter the brand name" />
        </div>

        {/* Brand Description Field */}
        <div className="form-group">
          <label>Brand Description</label>
          <textarea placeholder="Enter the brand description"></textarea>
        </div>

        {/* Brand Logo & Status Fields */}
        <div className="form-group-row">
          <div className="form-group half-width">
            <label>Brand Logo</label>
            <input type="file" />
          </div>
          <div className="form-group half-width">
            <label>Brand Status</label>
            <input className="status" type="text" placeholder="Status" />
          </div>
        </div>

        {/* Brand Product List Section */}
        <div className="form-group">
          <label>Brand Product List</label>
        </div>

        {/* Product Inputs */}
        {productInputs.map((product) => (
          <div key={product.id} className="form-group-row product-row">
            {/* Product Name Field */}
            <div className="form-group half-width">
              <label>Product Name</label>
              <input className="status" type="text" placeholder="Enter product name" />
            </div>

            {/* Product Image Field */}
            <div className="form-group half-width">
              <label>Upload Images</label>
              <input type="file" />
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
        <button className="submit-btn" onClick={handleSubmitData}>Submit</button>
      </div>
    );
  };

  export default AddBrand;

