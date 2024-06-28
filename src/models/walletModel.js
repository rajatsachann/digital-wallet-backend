const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
  walletId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Wallet",
    required: true,
  },
  amount: { type: Number, required: true },
  description: { type: String, required: true },
  balance: { type: Number, required: true },
  date: { type: Date, default: Date.now },
  type: { type: String, enum: ["CREDIT", "DEBIT"], required: true },
});

const walletSchema = new mongoose.Schema(
  {
    balance: { type: Number, required: true, default: 0 },
    name: { type: String, required: true },
    transactions: [transactionSchema],
  },
  { timestamps: true }
);

const Wallet = mongoose.model("Wallet", walletSchema);

module.exports = Wallet;
``;
