1. **Clone the Repository**:
   git clone https://github.com/chepenasaikumari/flow.git
   cd personal-financial-records-api


2. **Install Dependencies: Run the following command to install the necessary packages**:
   npm install express sqlite3 body-parser

   
3. **Setup Database**:
    A SQLite database will be created automatically when you run the application for the first time.
    Ensure that the database file can be created in your project directory.
    Start the Server:

    node app.js
    The server should start on http://localhost:3000.

   
4. **Open Postman: You can now test the API using Postman**.


 **API Endpoints**
1. Create a Transaction
Method: POST
Endpoint: /api/transactions
Request Body:
{
    "type": "income",
    "category": "Salary",
    "amount": 5000,
    "date": "2024-01-15",
    "description": "Monthly salary"
}


2. Retrieve All Transactions
Method: GET
Endpoint: /api/transactions


4. Retrieve a Transaction by ID
Method: GET
Endpoint: /api/transactions/:id
Example URL: /api/transactions/1


5. Update a Transaction by ID
Method: PUT
Endpoint: /api/transactions/:id
Request Body:
{
    "type": "expense",
    "category": "Groceries",
    "amount": 1500,
    "date": "2024-01-20",
    "description": "Weekly groceries"
}


6. Delete a Transaction by ID
Method: DELETE
Endpoint: /api/transactions/:id
Example URL: /api/transactions/1


7. Get Summary of Transactions
Method: GET
Endpoint: /api/summary


**Postman Demonstration**
1. **Create a Transaction**
Method: POST
URL: http://localhost:3000/api/transactions
Body:
{
    "type": "income",
    "category": "Salary",
    "amount": 5000,
    "date": "2024-01-15",
    "description": "Monthly salary"
}

Response:
{
    "message": "Transaction added successfully!"
}


2. **Retrieve All Transactions**
Method: GET
URL: http://localhost:3000/api/transactions
Response:
{
    "transactions": [
        {
            "id": 1,
            "type": "income",
            "category": "Salary",
            "amount": 5000,
            "date": "2024-01-15",
            "description": "Monthly salary"
        }
    ]
}


3. **Retrieve a Transaction by ID**
Method: GET
URL: http://localhost:3000/api/transactions/1
Response:
{
    "transaction": {
        "id": 1,
        "type": "income",
        "category": "Salary",
        "amount": 5000,
        "date": "2024-01-15",
        "description": "Monthly salary"
    }
}


4. **Update a Transaction by ID**
Method: PUT
URL: http://localhost:3000/api/transactions/1
Body:
{
    "type": "expense",
    "category": "Groceries",
    "amount": 1500,
    "date": "2024-01-20",
    "description": "Weekly groceries"
}
Response:
{
    "message": "Transaction updated successfully!"
}


5. **Delete a Transaction by ID**
Method: DELETE
URL: http://localhost:3000/api/transactions/1
Response:
{
    "message": "Transaction deleted successfully!"
}


6. **Get Summary of Transactions**
Method: GET
URL: http://localhost:3000/api/summary?startDate=2024-01-01&endDate=2024-01-31
Response:
{
    "summary": {
        "totalIncome": 5000,
        "totalExpense": 1500,
        "balance": 3500
    }
}






