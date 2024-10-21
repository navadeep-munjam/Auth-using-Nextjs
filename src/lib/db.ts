import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI || 'your_mongodb_connection_string';

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable in the .env.local file');
}

export const connectDB = async () => {
  if (mongoose.connection.readyState >= 1) return;

  try {
    await mongoose.connect(MONGODB_URI); // Mongoose no longer requires additional options
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};
