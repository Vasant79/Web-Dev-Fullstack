import dotenv from "dotenv";
import app from "./app.js";
import ConnectionToDB from "./db/Connection.js";

/**
 * was making mistake in .env file & after connection call
 */
dotenv.config({
  path: "../env",
});

const PORT = process.env.PORT || 3001;

// asyn function returns a promises
ConnectionToDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`⚙️   Server is running at port : ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
  });
