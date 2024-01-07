import { MongoClient, Db } from 'mongodb';
import mongoose from 'mongoose';

const mongodbUri: string = process.env.MONGODB_URI || 'default-mongodb-uri';
const dbName: string = process.env.DB_NAME || 'default-db-name';
console.log(mongodbUri);
console.log(dbName);

// let cachedClient: MongoClient | null = null;

// export async function connectToDatabase(): Promise<Db> {
//   if (cachedClient && await cachedClient.connect()) {
//     return cachedClient.db(dbName);
//   }

//   // const clientOptions: MongoClientOptions = {
//   //   useNewUrlParser: true,
//   //   useUnifiedTopology: true,
//   //   // Other options...
//   // };

//   const client = new MongoClient(mongodbUri);

//   await client.connect();

//   cachedClient = client;

//   return client.db(dbName);
// }

// export async function fetchDataFromMongoDB(collectionName: string): Promise<any[]> {
//   const db = await connectToDatabase();
//   const collection = db.collection(collectionName);

//   const result = await collection.find().toArray();

//   return result;
// }

const connectDB = async () => {
  try {
    await mongoose.connect(mongodbUri + dbName, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
};

export default connectDB;