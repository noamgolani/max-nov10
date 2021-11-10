import csv from "csvtojson";
import path from "path";
import mongoose from "mongoose";
import Agent from "../models/agent.js";

import dotenv from "dotenv";
dotenv.config();

const url = process.env.MONGO_URI;

mongoose
  .connect(url)
  .then(() => {
    console.log("DB connetion made");
  })
  .catch(console.log);

const csvFilePath = path.resolve("./assets/agents.csv");

csv()
  .fromFile(csvFilePath)
  .then((agents) => {
    const agentsCollection = agents
      .map((agent) => {
        const licenseId = Object.values(agent)[0].trim();
        const fullName = Object.values(agent)[1].trim();
        const city = Object.values(agent)[2].trim();

        return {
          license_id: licenseId,
          city: city,
          full_name: fullName,
        };
      })
      .filter(({ city, full_name, license_id }) => {
        return city && full_name && license_id;
      });

    Agent.insertMany(agentsCollection)
      .then(function () {
        console.log("Data inserted"); // Success
      })
      .catch(function (error) {
        console.log(error); // Failure
      })
      .finally(() => {
        mongoose.close();
      });
  });
