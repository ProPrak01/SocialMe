import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js';
import userRouter from "./routes/user.js";
const app = express();

app.use(express.json({ limit: '30mb', extended: true }))
app.use(express.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());
app.get('/',()=>{
    alert("server runnning");
    
})
app.use('/posts', postRoutes);
app.use("/user", userRouter);

const CONNECTION_URL= 'mongodb+srv://ph1010ishard:CiIa22qt8pmCXJrD@socialmediacluster.usym5ew.mongodb.net/'
const PORT= 5004;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);