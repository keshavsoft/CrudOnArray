import { configDotenv } from "dotenv";
import { MongoClient, ObjectId } from "mongodb";
configDotenv();

const uri = process.env.MONGODB_URI || "mongodb://localhost:27017/";
const db_name = process.env.MONGODB_DB || "demo";
const collection_name = process.env.MONGODB_COLLECTION || "users";

const StartFunc = async ({ inPk, inBody }) => {
  let LocalReturnObject = { KTF: false };
  const client = new MongoClient(uri);
  try {
    await client.connect();
    const db = client.db(db_name);
    const collection = db.collection(collection_name);
    let objectId;
    try {
      objectId = new ObjectId(inPk);
    } catch (e) {
      LocalReturnObject.KReason = `Invalid _id format: '${inPk}'.`;
      return LocalReturnObject;
    }
    const result = await collection.updateOne(
      { _id: objectId },
      { $set: inBody }
    );
    if (result.matchedCount === 0) {
      LocalReturnObject.KReason = `Record not found with _id:'${inPk}'.`;
    } else if (result.modifiedCount === 1) {
      LocalReturnObject.KTF = true;
      LocalReturnObject.JsonData = `Record updated successfully with _id :'${inPk}'.`;
    } else {
      LocalReturnObject.KReason = `No changes made to record with _id:'${inPk}'.`;
    }
  } catch (err) {
    LocalReturnObject.KReason = `Error: ${err.message}`;
    console.error("Error:", err);
  } finally {
    await client.close();
  }
  return LocalReturnObject;
};

export { StartFunc };