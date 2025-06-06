require("dotenv").config(); //Loads environment variables
const mongoose = require("mongoose"); //Mongoose is like a translator between your app and the MongoDB kitchen.
const mongoURI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_CLUSTER}/${process.env.DB_NAME}?retryWrites=true&w=majority&appName=food-cluster-01`;

const mongoDBConnect = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ Connected to MongoDB successfully");

    const collection = mongoose.connection.db.collection("fooditem");
    const data = await collection.find({}).toArray();
    console.log();
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
  }
};

module.exports = mongoDBConnect;
