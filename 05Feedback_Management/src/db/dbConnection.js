import mongoose from "mongoose";

const connection = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      "mongodb+srv://test:vasant@cluster0.ykknklv.mongodb.net/test"
    );
    console.log(`connection successfull `);
  } catch (error) {
    console.log(`error in db connection ${error}`);
  }
};

export default connection;
