import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AddProductModal from '../components/AddProductModal';
import adminImage from "../assets/raqmiya.png"; 

const Products = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [menuOpen, setMenuOpen] = useState(null);

  // Fermer le menu au clic extérieur
  useEffect(() => {
    const handleClickOutside = () => {
      if (menuOpen) setMenuOpen(null);
    };
    
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [menuOpen]);

  // Fonction pour ajouter un produit
  const handleAddProduct = (productData) => {
    const newProduct = {
      id: Date.now(),
      ...productData
    };
    setProducts([...products, newProduct]);
    setIsModalOpen(false);
  };

  // Fonction pour supprimer un produit
  const handleDeleteProduct = (productId) => {
    setProducts(products.filter(product => product.id !== productId));
    setMenuOpen(null);
  };

  // Fonction pour ouvrir/fermer le menu
  const toggleMenu = (e, productId) => {
    e.stopPropagation();
    setMenuOpen(menuOpen === productId ? null : productId);
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="admin-profile">
          <div className="admin-avatar">
           <img src={adminImage} alt="Admin" />
          </div>
          <h3 className="admin-name">Admin.Raqmiya</h3>
        </div>

        <nav className="sidebar-nav">
          <button className="nav-item" onClick={() => navigate('/dashboard')}>
            <span className="icon">⊞</span>
            Dashboard
          </button>
          <button className="nav-item active">
            <span className="icon">🛒</span>
            Products
          </button>
          <button className="nav-item">
            <span className="icon">✏️</span>
            Feedback
          </button>
          <button className="nav-item">
            <span className="icon">👥</span>
            Clients
          </button>
          <button className="nav-item">
            <span className="icon">📦</span>
            Orders
          </button>
          <button className="nav-item logout">
            <span className="icon">⎋</span>
            Logout
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Header Rectangle Blanc */}
        <div className="products-header-bar">
          <div className="products-title-bar">
            <h1>Products<span className="subtitle-separator">/</span><span className="subtitle-text">Click the button to add a product</span></h1>
          </div>
          <button className="add-product-btn" onClick={() => setIsModalOpen(true)}>
            Add Product
          </button>
        </div>

        {/* Products Grid ou Empty State */}
        {products.length === 0 ? (
          <div className="empty-state">
            <div className="empty-state-image">
              <img 
                src="https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Penguin/3D/penguin_3d.png"
                alt="No products" 
                className="penguin-sleep"
              />
            </div>
            <h2 className="empty-state-title">No Products at this time</h2>
            <p className="empty-state-text">Products will appear here after you add them to your store</p>
          </div>
        ) : (
          <div className="products-grid">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-menu-container">
                  <button 
                    className="product-menu-btn"
                    onClick={(e) => toggleMenu(e, product.id)}
                  >
                    ⋯
                  </button>
                  {menuOpen === product.id && (
                    <div className="product-menu-dropdown">
                      <button 
                        className="menu-delete-btn"
                        onClick={() => handleDeleteProduct(product.id)}
                      >
                        Delete
                      </button>
                    </div>
                  )}
                </div>

                <div className="product-image-container">
                  <img 
                    src={product.imagePreview} 
                    alt={product.name}
                    className="product-image"
                  />
                </div>

                <div className="product-info">
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-category">{product.category}</p>
                  <p className="product-details">{product.details}</p>
                  <p className="product-price">{product.price} DA</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Modal */}
      <AddProductModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        onAddProduct={handleAddProduct}
      />
    </div>
  );
};

export default Products;