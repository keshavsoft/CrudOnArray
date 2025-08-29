import { configDotenv } from "dotenv";
import { MongoClient } from "mongodb";
// import ParamsJson from '../../../CommonFuncs/params.json' with {type: 'json'};
configDotenv();

const uri = process.env.MONGODB_URI || "mongodb://localhost:27017/";
const db_name = process.env.MONGODB_DB || "demo";
const collection_name = process.env.MONGODB_COLLECTION || "users";

const StartFunc = async ({ inRequestBody }) => {
  let LocalReturnObject = { KTF: false };
  const client = new MongoClient(uri);
  try {
    await client.connect();
    const db = client.db(db_name);
    const collection = db.collection(collection_name);
    const result = await collection.insertOne(inRequestBody);
    
    LocalReturnObject.KTF = true;
    LocalReturnObject.InsertedId = result.insertedId;
    LocalReturnObject.SuccessText = `Inserted document with _id ${result.insertedId} into ${collection_name} collection successfully.`;
  } catch (err) {
    LocalReturnObject.KReason = `Error inserting into MongoDB: ${err.message}`;
    console.error('Error at MongoDB insert:', err);
  } finally {
    await client.close();
  }
  return LocalReturnObject;
};

export { StartFunc };