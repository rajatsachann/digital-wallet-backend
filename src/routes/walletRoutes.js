const express = require("express");
const router = express.Router();
const walletController = require("../controllers/walletController");

// Walet Setup
router.post("/setup", walletController.setupWallet);

// CREDIT/DEBIT transactions
router.post("/transact/:walletId", walletController.transact);

// Fetch transactions
router.get("/transactions", walletController.getTransactions);

// Get wallet details
router.get("/wallet/:id", walletController.getWalletDetails);

module.exports = router;
