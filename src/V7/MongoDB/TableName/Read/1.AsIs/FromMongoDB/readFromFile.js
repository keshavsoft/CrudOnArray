import fs from "fs";
import { configDotenv } from "dotenv";
import {MongoClient} from "mongodb";
configDotenv();

// import ParamsJson from '../../../CommonFuncs/params.json' with {type: 'json'};
const uri = process.env.MONGODB_URI || "mongodb://localhost:27017/";
const db_name = process.env.MONGODB_DB || "demo";
const collection_name =  process.env.MONGODB_COLLECTION || "users";

let StartFunc = async () =>{
    let LocalReturnData = {KTF: false};
    const client = new MongoClient(uri);

    try{
        await client.connect();
        console.log("Mongodb connected");
        
        const db = client.db(db_name);
        const collection = db.collection(collection_name);

        const alldocuments = await collection.find({}).toArray();
        LocalReturnData.KTF = true;
        LocalReturnData.JsonData =  alldocuments;
    }
    catch(err){
        LocalReturnData.KReason = `Error Connecting to MongoDB: ${err.message}`;
        console.log('error at mongodb:',err)

    }
    return LocalReturnData;

}

export { StartFunc };





//let StartFunc = async () => {
//     const LocalFileName = ParamsJson.TableName;
//     const LocalDataPath = ParamsJson.DataPath;

//     let LocalReturnData = { KTF: false };
//     let filePath = `${LocalDataPath}/${LocalFileName}.json`;

//     try {
//         if (!fs.existsSync(filePath)) {
//             LocalReturnData.KReason = `${LocalFileName}.json File does not exist in ${LocalDataPath} Folder.`;
//             console.warn(LocalReturnData.KReason);
//             return LocalReturnData;
//         };

//         const data = fs.readFileSync(`${LocalDataPath}/${LocalFileName}.json`, 'utf8');

//         LocalReturnData.KTF = true;
//         LocalReturnData.JsonData = JSON.parse(data);
//     } catch (err) {
//         LocalReturnData.KReason = `Error reading ${LocalFileName} file .`;
//         console.warn(LocalReturnData.KReason);
//         return LocalReturnData;
//     };

//     return await LocalReturnData;
// };
