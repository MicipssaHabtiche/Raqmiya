import React, { useState } from 'react';

const AddProductModal = ({ isOpen, onClose, onAddProduct }) => {
  const [productData, setProductData] = useState({
    name: '',
    category: '',
    price: '',
    details: ''
  });
  const [imagePreview, setImagePreview] = useState(null);

  const categories = [
    'Gaming Chairs',
    'Office Chairs',
    'Laptops',
    'Desktops',
    'Accessories',
    'Monitors',
    'Keyboards',
    'Mouse'
  ];

  if (!isOpen) return null;

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    if (productData.name && productData.category && productData.price && productData.details && imagePreview) {
      onAddProduct({
        ...productData,
        imagePreview
      });
      
      // Réinitialiser le formulaire
      setProductData({ name: '', category: '', price: '', details: '' });
      setImagePreview(null);
    } else {
      alert('Please fill all fields and upload an image');
    }
  };

  const handleClose = () => {
    setProductData({ name: '', category: '', price: '', details: '' });
    setImagePreview(null);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-content-new" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-new" onClick={handleClose}>×</button>
        
        <h2 className="modal-title-new">Add a product</h2>
        
        <div className="modal-form-new">
          <div className="form-left-new">
            {/* Product Name */}
            <div className="form-group-new">
              <label>Product Name</label>
              <input
                type="text"
                placeholder="Enter product name"
                value={productData.name}
                onChange={(e) => setProductData({ ...productData, name: e.target.value })}
              />
            </div>

            {/* Category et Price sur la même ligne */}
            <div className="form-row-new">
              <div className="form-group-new half-width">
                <label>Category</label>
                <select
                  value={productData.category}
                  onChange={(e) => setProductData({ ...productData, category: e.target.value })}
                  className="category-select"
                >
                  <option value="">Select category</option>
                  {categories.map((cat, index) => (
                    <option key={index} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              <div className="form-group-new half-width">
                <label>Price</label>
                <input
                  type="number"
                  placeholder="Enter price"
                  value={productData.price}
                  onChange={(e) => setProductData({ ...productData, price: e.target.value })}
                />
              </div>
            </div>

            {/* Details */}
            <div className="form-group-new">
              <label>Details</label>
              <textarea
                placeholder="Enter product details"
                value={productData.details}
                onChange={(e) => setProductData({ ...productData, details: e.target.value })}
                rows="4"
              />
            </div>

            {/* Bouton Submit en bas à gauche */}
            <button onClick={handleSubmit} className="modal-submit-btn-new">
              Add a Product
            </button>
          </div>

          {/* Image Upload à droite */}
          <div className="form-right-new">
            <div className="image-upload-container-new">
              <label htmlFor="image-upload" className="image-upload-label-new">
                {imagePreview ? (
                  <img src={imagePreview} alt="Preview" className="image-preview-new" />
                ) : (
                  <div className="image-placeholder-new">
                    <span className="upload-icon-new">📷</span>
                  </div>
                )}
              </label>
              <input
                id="image-upload"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                style={{ display: 'none' }}
              />
              <button 
                onClick={() => document.getElementById('image-upload').click()}
                className="add-pic-btn"
              >
                Add a pic +
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProductModal;