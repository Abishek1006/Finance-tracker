const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('your MongoDB URL here', {
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
