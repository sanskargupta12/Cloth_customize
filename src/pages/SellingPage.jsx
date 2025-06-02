import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';
import { CustomButton, BuyerForm } from '../components';
import state from '../store';
import { fadeAnimation } from '../config/motion';

const SellingPage = () => {
  const snap = useSnapshot(state);
  const [listings, setListings] = useState([
    // Sample data - replace with actual API data later
    {
      id: 1,
      price: 29.99,
      description: "Custom designed t-shirt with unique pattern",
      color: "#EFBD48",
      isLogoTexture: true,
      isFullTexture: false,
      logoDecal: './threejs.png',
      fullDecal: './threejs.png',
    }
  ]);

  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleBuyNow = (listing) => {
    setSelectedProduct(listing);
  };

  const handleCloseForm = () => {
    setSelectedProduct(null);
  };

  const handlePurchase = (buyerData) => {
    // Here you would typically make an API call to process the purchase
    console.log('Purchase data:', {
      buyer: buyerData,
      product: selectedProduct
    });
    
    // Show success message or redirect
    alert('Thank you for your purchase! We will process your order shortly.');
    handleCloseForm();
  };

  return (
    <motion.div
      className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8"
      {...fadeAnimation}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Custom T-Shirt Marketplace</h1>
          <CustomButton
            type="filled"
            title="Back to Customizer"
            handleClick={() => state.intro = true}
            customStyles="w-fit px-4 py-2.5 font-bold text-sm"
          />
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {listings.map((listing) => (
            <motion.div
              key={listing.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="aspect-w-1 aspect-h-1 w-full">
                <div 
                  className="w-full h-64 bg-cover bg-center"
                  style={{
                    backgroundColor: listing.color,
                    backgroundImage: listing.isLogoTexture ? `url(${listing.logoDecal})` : 
                                   listing.isFullTexture ? `url(${listing.fullDecal})` : 'none',
                    backgroundSize: listing.isFullTexture ? 'cover' : 'contain',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center'
                  }}
                />
              </div>
              
              <div className="p-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Custom T-Shirt Design
                  </h3>
                  <p className="text-xl font-bold text-indigo-600">
                    ${listing.price}
                  </p>
                </div>
                
                <p className="mt-2 text-gray-600">
                  {listing.description}
                </p>
                
                <div className="mt-4 flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <div 
                      className="w-6 h-6 rounded-full border border-gray-300"
                      style={{ backgroundColor: listing.color }}
                    />
                    <span className="text-sm text-gray-500">
                      {listing.isLogoTexture ? 'Logo Design' : 'Full Design'}
                    </span>
                  </div>
                  
                  <CustomButton
                    type="filled"
                    title="Buy Now"
                    handleClick={() => handleBuyNow(listing)}
                    customStyles="w-fit px-4 py-2 font-bold text-sm"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProduct && (
          <BuyerForm
            onClose={handleCloseForm}
            onSubmit={handlePurchase}
            productDetails={selectedProduct}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default SellingPage; 