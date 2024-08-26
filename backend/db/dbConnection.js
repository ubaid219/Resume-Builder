import mongoose from "mongoose";

mongoose.set('strictQuery', false);

const mongoURI = "mongodb://localhost:27017/ResumeBuilder";

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURI)
    console.log("Connection Established");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1); // Exit process with failure
  }
};

export default connectToMongo;
