import { ethers } from 'ethers';
import { Wallet } from '../common/common';

// Function to generate a single Ethereum wallet
const generateWallet = (): Wallet => {
  const wallet = ethers.Wallet.createRandom();
  return {
    address: wallet.address,
    privateKey: wallet.privateKey,
    mnemonic: wallet.mnemonic.phrase,
  };
};

// Function to generate multiple wallets
export const generateMultipleWallets = (count: number): Wallet[] => {
  const wallets: Wallet[] = [];
  for (let i = 0; i < count; i++) {
    wallets.push(generateWallet());
  }
  return wallets;
};

// Function to convert wallet data to CSV format
export const walletsToCsv = (wallets: Wallet[]): string => {
  let csvContent = 'data:text/csv;charset=utf-8,';
  csvContent += 'Address,Private Key,Mnemonic Phrase\n'; // CSV Header

  wallets.forEach((wallet) => {
    csvContent += `${wallet.address},${wallet.privateKey},"${wallet.mnemonic}"\n`;
  });

  return encodeURI(csvContent);
};
