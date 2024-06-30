# HighLevel Digital Wallet (Backend)

This is a Node.js backend service for a Wallet system, which supports the following functionalities:

- Setup wallet
- Credit/Debit transactions
- Fetch transactions on wallet
- Get wallet details

## Prerequisites

- Node.js (>= 12.x)
- MongoDB (running instance)

## Project Setup

### 1. Clone the repository

```bash
git clone https://github.com/rajatsachann/wallet-backend.git
cd wallet-backend
```
### 2. Install Dependencies
```bash
npm install
```
### 3. Environment Variables
Create a .env file in root directory
```
VITE_APP_API_BASE_URL=https://wallet-backend-a8km.onrender.com
```
### 4. Start the application
```bash
npm run dev
```
The server will start on http://localhost:3000.

## API Endpoints 

### 1. Initialize Wallet

- Endpoint: /api/setup
- Method: POST

Request Body:

```json
{
  "balance": 1000.1234,
  "name": "Rajat"
}
```
Response:

``` json
{
  "success": true,
  "data": {
    "id": "string",
    "balance": 1000.1234,
    "transactionId": "string",
    "name": "Rajat",
    "date": "ISO Date String"
  }
}
```

