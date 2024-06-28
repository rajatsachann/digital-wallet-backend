const walletService = require("../services/walletService");
const response = require("../utils/response");

const setupWallet = async (req, res) => {
  try {
    const { name, balance } = req.body;
    const wallet = await walletService.createWallet(name, balance);
    const formattedWallet = {
      id: wallet._id.toString(),
      balance: parseFloat(wallet.balance.toFixed(4)),
      transactionId: null, // No transaction at wallet setup
      name: wallet.name,
      date: wallet.createdAt,
    };
    response.success(res, formattedWallet);
  } catch (error) {
    response.error(res, error.message);
  }
};

const transact = async (req, res) => {
  try {
    const { walletId } = req.params;
    const { amount, description } = req.body;
    const transaction = await walletService.createTransaction(
      walletId,
      amount,
      description
    );

    if (!transaction) {
      throw new Error("Transaction creation failed");
    }

    const formattedTransaction = {
      balance: parseFloat(transaction.balance.toFixed(4)),
      transactionId: transaction._id.toString(),
    };

    response.success(res, formattedTransaction);
  } catch (error) {
    response.error(res, error.message);
  }
};

const getTransactions = async (req, res) => {
  try {
    const { walletId, skip, limit } = req.query;
    const transactions = await walletService.fetchTransactions(
      walletId,
      parseInt(skip),
      parseInt(limit)
    );
    response.success(res, transactions);
  } catch (error) {
    response.error(res, error.message);
  }
};

const getWalletDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const wallet = await walletService.getWalletById(id);
    const formattedWallet = {
      id: wallet._id.toString(),
      balance: parseFloat(wallet.balance.toFixed(4)),
      name: wallet.name,
      date: wallet.createdAt,
    };
    response.success(res, formattedWallet);
  } catch (error) {
    response.error(res, error.message);
  }
};

module.exports = {
  setupWallet,
  transact,
  getTransactions,
  getWalletDetails,
};
