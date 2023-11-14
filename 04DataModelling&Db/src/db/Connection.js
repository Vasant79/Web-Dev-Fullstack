import mongoose, { connect } from "mongoose";

/**
 * connecting to mongo db
 * key points -- db connection can give error , it takes time
 */

const ConnectionToDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGO_URI}/${process.env.DB_NAME}`
    );
    console.log(
      "Mongoose Connected DB HOST: " + connectionInstance.connection.host
    );
  } catch (error) {
    console.log(`${error} at connection`);
  }
};

export default ConnectionToDB;
