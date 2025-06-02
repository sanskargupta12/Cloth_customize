import { useState } from 'react';
import { CustomButton } from './';
import state from '../store';

const SellOption = () => {
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState('');

  const handleSell = () => {
    // Update the state with the current product details
    state.currentPrice = price;
    state.currentDescription = description;
    
    // Navigate to the selling page
    state.showSellingPage = true;
  };

  return (
    <div className="sell-option-container">
      <div className="flex flex-col gap-4 p-4 bg-white rounded-lg shadow-md">
        <h2 className="text-xl font-bold">Sell Your Custom Design</h2>
        
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">Price ($)</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            className="p-2 border rounded-md"
            min="0"
            step="0.01"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="p-2 border rounded-md h-24"
            placeholder="Describe your custom design..."
          />
        </div>

        <CustomButton
          type="filled"
          title="List for Sale"
          handleClick={handleSell}
          customStyles="w-full"
        />
      </div>
    </div>
  );
};

export default SellOption; 