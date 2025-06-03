const mongoose = require("mongoose");
const mongoURI = "mongodb://localhost:27017/food";
const mongoDBConnect = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ Connected to MongoDB successfully");

    const collection = mongoose.connection.db.collection("foodItem");
    const data = await collection.find({}).toArray();
    console.log();
  } catch (error) {
    console.error("❌ MongoDB connection error:", err);
  }
};

module.exports = mongoDBConnect;
