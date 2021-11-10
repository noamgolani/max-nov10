import mongoose from "mongoose";
import Agent from "../models/agent.js";

import dotenv from "dotenv";
dotenv.config();

const url = process.env.MONGO_URI;

mongoose
  .connect(url)
  .then(() => {
    console.log("DB connetion made");

    Agent.remove({})
      .then((msg) => {
        console.log("DB cleared", msg);
      })
      .catch(console.log)
      .finally(() => {
        mongoose.close();
      });
  })
  .catch(console.log);
