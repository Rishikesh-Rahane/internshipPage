// utils/mongodb.js
import { MongoClient } from 'mongodb';

export const uri = 'mongodb+srv://rishi:rishi@productdb.uzffnsi.mongodb.net/formdata';
const dbName = 'formdata';

let cachedClient = null;

export async function connectToDatabase() {
  if (cachedClient) {
    return cachedClient;
  }

  const client = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  cachedClient = client;

  return client;
}

