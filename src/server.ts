import mongoose from "mongoose";
import app from "./app";
import config from "./config";

async function main() {
  try {
    const port = 3000; //config.port
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });

    await mongoose.connect(config.db_url as string);
    console.log("MongoDB Connection  buildup has been successful");
  } catch (err) {
    console.log("Failed to buildup MongoDB Connection", err);
  }
}

main();
