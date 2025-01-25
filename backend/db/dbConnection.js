import mongoose from "mongoose";

mongoose.set('strictQuery', false);

const mongoURI = "mongodb+srv://ubaidshafi00:Hdu2nheSaMSnM3Fl@resumoo.xd6rx.mongodb.net/?retryWrites=true&w=majority&appName=Resumoo";

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURI)
    console.log("Connection Established Sucessfully");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1); // Exit process with failure
  }
};

export default connectToMongo;
