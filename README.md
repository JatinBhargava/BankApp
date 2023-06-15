## BRIDGE BANK APP

# Description
This is a full-stack web application built with React, Node.js, Express, and MongoDB. 
The application provides several functionalities to manage user accounts and transactions. 
Users can add themselves to the database, view existing users and their account balances, and send money to other users.

# Prerequisites
Before running the application, ensure that you have the following software installed on your machine:

Node.js: https://nodejs.org
MongoDB: https://www.mongodb.com

# Installation
Clone the repository to your local machine.
Navigate to the project directory.
Run npm install to install the dependencies for both the frontend and backend.

# Configuration
In the root folder, create a file named .env.
Inside the .env file, add the following configuration variables:
1. makefile
2. Copy code
3. MONGODB_URI=<your_mongodb_uri>
4. Replace <your_mongodb_uri> with the URI for your MongoDB database.

# Running the Application
Open a terminal and navigate to the project directory.
Run npm run dev to start both the frontend and backend servers concurrently.

# Usage
Adding Users Open your web browser and navigate to http://localhost:3000.
On the homepage, you will find a form to add a new user.
Enter the user's name, amount, and email address.
Click the "Add User" button.
The user will be added to the database with an auto-generated account number.
Viewing Users and Account Balances
On the homepage, scroll down to the "Users" section.
Here, you can see a list of existing users along with their account balances.
Sending Money
On the homepage, find the "Send Money" section.
Enter the recipient's account number and the amount you want to send.
Click the "Send" button.
The specified amount will be deducted from your account and added to the recipient's account.

# Technologies Used
React: A JavaScript library for building user interfaces.
Node.js: A JavaScript runtime environment.
Express: A web application framework for Node.js.
MongoDB: A NoSQL database for storing application data.

# Ends Hosted on Servers
FrontEnd : Netlify
BackEnd : Render
Database : MONGODB Atlas

# Project Structure
backend: Contains the server-side code.
frontend: Contains the client-side React code.
routes: Defines the API routes for user management and transactions.
models: Contains the MongoDB schema definitions.
controllers: Implements the logic for handling API requests.

# Tasks

- [:heavy_check_mark:] Add User to the Application via database
- [:heavy_check_mark:] Fetch data from the database to show on feed
- [:heavy_check_mark:] Able to send money from one user to another using Id of the sender and reciver 

# Contributing
If you would like to contribute to this project, you can fork the repository, make your changes, and submit a pull request. Please ensure that your code follows the project's coding standards and includes appropriate tests.

License
This project is licensed under the MIT License.

Contact
If you have any questions or suggestions regarding this project, please feel free to contact me at jatinbhargava4@gmail.com.
