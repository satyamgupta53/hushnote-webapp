import * as dotenv from "dotenv";
import mongoose from "mongoose";

type ConnectionObject = {
  isConnected?: number;
};

dotenv.config({ path: "../../.env.development" });
const connectionObject: ConnectionObject = {};
const MONGODB_URI = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_CLUSTER}/?${process.env.MONGODB_OPTIONS}`;

export default async function databaseConnection(): Promise<void> {
  if (connectionObject.isConnected) {
    console.log(
      "DatabaseConnection: Existing connection of database found with running instance."
    );
    return;
  }

  try {
    const databaseInstance = await mongoose.connect(MONGODB_URI || "");
    connectionObject.isConnected = databaseInstance.connections[0].readyState;

    console.log(
      "DatabaseConnection: Connection with database established with running instance."
    );
  } catch (error) {
    console.log(
      "DatabaseConnection: Database Connection failed with error message: ",
      error
    );
    process.exit(1);
  }
}
