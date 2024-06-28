const Wallet = require("../models/walletModel");

const createWallet = async (name, balance) => {
  const wallet = new Wallet({ name, balance });
  await wallet.save();
  return wallet;
};

const createTransaction = async (walletId, amount, description) => {
  const wallet = await Wallet.findById(walletId);
  if (!wallet) throw new Error("Wallet not found");

  const newBalance = parseFloat((wallet.balance + amount).toFixed(4));
  const transaction = {
    walletId,
    amount: parseFloat(amount.toFixed(4)), // Ensure the amount has 4 decimal places
    description,
    balance: newBalance,
    type: amount > 0 ? "CREDIT" : "DEBIT",
  };

  wallet.transactions.push(transaction);
  wallet.balance = newBalance;
  await wallet.save();

  // Return the last transaction
  return wallet.transactions[wallet.transactions.length - 1];
};

const fetchTransactions = async (walletId, skip, limit) => {
  const wallet = await Wallet.findById(walletId);
  if (!wallet) throw new Error("Wallet not found");

  return wallet.transactions.slice(skip, skip + limit);
};

const getWalletById = async (id) => {
  const wallet = await Wallet.findById(id);
  if (!wallet) throw new Error("Wallet not found");
  return wallet;
};

module.exports = {
  createWallet,
  createTransaction,
  fetchTransactions,
  getWalletById,
};
