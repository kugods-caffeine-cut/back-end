import mongoose from "mongoose";

mongoose.connect(
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PWD}@${process.env.DB_NAME}.awwmmyt.mongodb.net/?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
  },
);

const connectMongoDB = mongoose.connection;

const handleOpen = () => console.log("✅ Connected to DB");
const handleError = error => console.log("❌ DB Error", error);

connectMongoDB.on("error", handleError);
connectMongoDB.once("open", handleOpen);
