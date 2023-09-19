import React, { useState } from 'react';
import { useDispatch } from 'react-redux'

import { createProduct }from '../../redux/actions/store/createProduct'

const AdminProductAdder = () => {
  
    const dispatch = useDispatch();
  
    // STATES
  const [newProduct, setNewProduct] = useState({
    name: '',
    brand: '',
    price: '',
    description: '',
    stock: '',
    category: '',
    image_path: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    brand: '',
    price: '',
    description: '',
    stock: '',
    category: '',
    image_path: '',
  });

  // FUNCTIONS
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validations go here (you can update the errors state accordingly)
    // For example, check if the fields are not empty
    const newErrors = {};

    if (!newProduct.name) {
      newErrors.name = 'Name is required';
    }
    if (!newProduct.brand) {
      newErrors.brand = 'Brand is required';
    }
    // Add more validations for other fields as needed

    // If there are errors, update the errors state and prevent form submission
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // If there are no errors, you can proceed with handling the form data
    // For example, you can send the newProduct data to your backend API
    // and reset the form
    console.log('Form submitted with data:', newProduct);

    dispatch(createProduct(newProduct))

    // Reset the form and errors
    setNewProduct({
      name: '',
      brand: '',
      price: '',
      description: '',
      stock: '',
      category: '',
      image_path: '',
    });
    setErrors({});
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({
      ...newProduct,
      [name]: value,
    });
  };

  return (
    <div>
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={newProduct.name}
            onChange={handleInputChange}
          />
          <div className="error">{errors.name}</div>
        </div>

        <div>
          <label htmlFor="brand">Brand:</label>
          <input
            type="text"
            id="brand"
            name="brand"
            value={newProduct.brand}
            onChange={handleInputChange}
          />
          <div className="error">{errors.brand}</div>
        </div>

        <div>
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            name="price"
            value={newProduct.price}
            onChange={handleInputChange}
          />
          <div className="error">{errors.price}</div>
        </div>

        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={newProduct.description}
            onChange={handleInputChange}
          />
          <div className="error">{errors.description}</div>
        </div>

        <div>
          <label htmlFor="stock">Stock:</label>
          <input
            type="number"
            id="stock"
            name="stock"
            value={newProduct.stock}
            onChange={handleInputChange}
          />
          <div className="error">{errors.stock}</div>
        </div>

        <div>
          <label htmlFor="category">Category:</label>
          <input
            type="text"
            id="category"
            name="category"
            value={newProduct.category}
            onChange={handleInputChange}
          />
          <div className="error">{errors.category}</div>
        </div>

        <div>
          <label htmlFor="image_path">Image Path:</label>
          <input
            type="text"
            id="image_path"
            name="image_path"
            value={newProduct.image_path}
            onChange={handleInputChange}
          />
          <div className="error">{errors.image_path}</div>
        </div>

        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AdminProductAdder;
