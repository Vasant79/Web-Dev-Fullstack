import dotenv from "dotenv";

import app from "./app.js"; //mistake in imports using extensions also
import mongoConnection from "./db/mongoConnection.js";

dotenv.config();

//async await fn return a promise
const PORT = process.env.PORT || 3001;

mongoConnection()
  .then(() => {
    app.listen(PORT);
    console.log(`listening on port ${PORT}`);
  })
  .catch((error) => {
    console.log(error);
  });
