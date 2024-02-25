import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { generateMultipleWallets, walletsToCsv } from '../utils/utils'; // Adjust the import path as necessary

const SpawnCard: React.FC = () => {
  const [walletCount, setWalletCount] = useState<number>(1);

  const handleGenerateAndDownload = (): void => {
    const wallets = generateMultipleWallets(walletCount);
    const csvData = walletsToCsv(wallets);
    const link = document.createElement('a');
    link.href = csvData;
    link.download = 'wallets.csv';
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 w-[807px] sm:p-6 dark:bg-gray-800 flex flex-col items-center justify-center space-y-4">
      <h3 className="text-xl text-gray-900 dark:text-white font-bold">Generate Wallets</h3>
      <div className="flex items-center">
        <button
          onClick={() => setWalletCount(Math.max(walletCount - 1, 1))}
          className="text-white bg-pink-500 hover:bg-pink-600 focus:ring-pink-700 font-medium bg-opacity-75 rounded-lg text-sm px-4 py-2"
        >
          <FaMinus />
        </button>
        <input
          type="text" // Changed to text to remove arrows
          pattern="\d*" // Ensures only numbers can be entered
          className="mx-2 border text-center w-20"
          value={walletCount}
          onChange={(e) => setWalletCount(parseInt(e.target.value, 10) || 1)}
        />
        <button
          onClick={() => setWalletCount(walletCount + 1)}
          className="text-white bg-pink-500 hover:bg-pink-600 focus:ring-pink-700 bg-opacity-75 font-medium rounded-lg text-sm px-4 py-2"
        >
          <FaPlus />
        </button>
      </div>
      <button
        className="text-white font-bold focus:ring-4 focus:outline-none rounded-lg text-sm px-4 py-2 bg-pink-500 bg-opacity-75 hover:bg-pink-600 focus:ring-pink-700"
        onClick={handleGenerateAndDownload}
      >
        Generate and Download
      </button>
    </div>
  );
};

export default SpawnCard;
