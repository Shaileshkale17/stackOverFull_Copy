import mongoose from "mongoose";

const connectDB = async () => {
  try {

    // todo dotENV variable is not working 
    // const conn = await mongoose.connect(process.env.CONNECTION_URL, {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    // });

    const defaultConnectionURL = "mongodb+srv://shaileshkale87730:GNBlt4y7qOz22KlG@stockoverfull.rq4mvm8.mongodb.net/stockoverFull?retryWrites=true&w=majority";
    const conn = await mongoose.connect(defaultConnectionURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.log("error");
    console.error(error);
    process.exit(1);
  }
};

export default connectDB;
