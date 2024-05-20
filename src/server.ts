import mongoose from "mongoose";
import app from "./app";

async function main() {
  const port = 5000;
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
  try {
    await mongoose.connect(
      "mongodb+srv://e-com-product-data:qWM5JXiKrvC0SKy1@cluster0.qiowubl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("MongoDB Connection  buildup has been successful");
  } catch (error) {
    console.log("Failed to buildup MongoDB Connection");
  }
}

main();
