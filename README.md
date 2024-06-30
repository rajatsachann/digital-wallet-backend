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
The application will start on http://localhost:5173.

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

### 2. Credit/Debit Amount

- Endpoint: /api/transact/:walletId
- Method: POST

Request Body:

```json
{
  "amount": 100.1234,
  "description": "Deposit"
}
```

Response:

```json
{
  "success": true,
  "data": {
    "balance": 1100.2468,
    "transactionId": "string"
  }
}
```

### 3. Fetch Transactions

- Endpoint: /api/transactions
- Method: GET

Query Parameters:

- walletId (required)
- skip (optional, default: 0)
- limit (optional, default: 10)

Response:

```json
{
  "success": true,
  "data": [
    {
      "id": "string",
      "walletId": "string",
      "amount": 100.1234,
      "balance": 1100.2468,
      "description": "Deposit",
      "date": "ISO Date String",
      "type": "CREDIT"
    },
    ...
  ]
}
```

### 4. Get Wallet Details

- Endpoint: /api/wallet/:id
- Method: GET

Response:

```json
{
  "success": true,
  "data": {
    "id": "string",
    "balance": 1100.2468,
    "name": "John Doe",
    "date": "ISO Date String"
  }
}
```

## Code Structure
``` markdown
app.js: Entry point of the application.
src/controllers: Contains the controller logic for handling API requests.
src/models: Defines the MongoDB schemas and models.
src/routes: Contains the route definitions.
src/services: Contains the business logic for wallet operations.
src/utils: Contains utility functions.
```


