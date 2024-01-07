import { MongoClient, Db, MongoClientOptions } from 'mongodb';
import nextConfig from '../next.config';

let cachedClient: MongoClient | null = null;

async function connectToDatabase(): Promise<Db> {
  if (cachedClient && await cachedClient.connect()) {
    return cachedClient.db(process.env.DB_NAME);
  }

  const clientOptions: MongoClientOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // Other options...
  };

  const client = new MongoClient(nextConfig.MONGO_URI, {useUnifiedTopology: true });

  await client.connect();

  cachedClient = client;

  return client.db(process.env.DB_NAME);
}

export async function fetchDataFromMongoDB(collectionName: string): Promise<any[]> {
  const db = await connectToDatabase();
  const collection = db.collection(collectionName);

  const result = await collection.find().toArray();

  return result;
}