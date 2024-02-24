import { MongoClient, Db } from 'mongodb';
import mongoose from 'mongoose';

const mongodbUri: string = process.env.MONGODB_URI || 'default-mongodb-uri';
const dbName: string = process.env.DB_NAME || 'default-db-name';
console.log(mongodbUri);
console.log(dbName);

const connectDB = async () => {
  try {
    await mongoose.connect(`${mongodbUri}${dbName}`, {
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
};

export default connectDB;