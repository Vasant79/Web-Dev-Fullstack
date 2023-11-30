import mongoose from "mongoose";

/**
 * mistake -- dotenv package to be installed and configured for provind url at appliction start
 */

const mongoConnection = async () => {
  console.log(`${process.env.MONGO_URI}/${process.env.DB_NAME}`);
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGO_URI}/${process.env.DB_NAME}`
    );
    console.log(
      `Connection Completed Host : ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log(`Error in db connection ${error}`);
  }
};

export default mongoConnection;
