import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { userRouter } from "./routes/user.js";
import { recipesRouter } from "./routes/recipes.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);
app.use("/recipes", recipesRouter);

mongoose.connect(
  "mongodb+srv://rakshithavasanthrajs:6uL2px89LLbHbzEJ@cluster0.uskau0t.mongodb.net/rashh_db?retryWrites=true&w=majority&appName=Cluster0"
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(
    console.log("DB connected...")
  )

app.listen(3001, () => console.log("Server started"));
