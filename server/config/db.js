const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://abishek2201006:a0QtLBxI3JEmcc9A@financetracker.dabhg.mongodb.net/finance_tracker?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1); // Exit process with failure code
  }
};

module.exports = connectDB;
