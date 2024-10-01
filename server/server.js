
// server/server.js
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const expensesRouter = require('./routes/expenses');
const budgetsRouter = require('./routes/budgets');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/expenses', expensesRouter);
app.use('/api/budgets', budgetsRouter);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));