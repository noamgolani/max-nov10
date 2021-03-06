import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import path from "path";

import apiRouter from "./routes/apiRouter.js";

dotenv.config();

const app = new express();

//mongoose connection
const uri = process.env.MONGO_URI;
mongoose
	.connect(uri)
	.then(() => {
		console.log("Connected succesfully to the DB");
	})
	.catch((err) => {
		console.log(`DB connection failed: ${err.message}`);
	});

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(morgan("tiny"));

app.use("/", express.static("./public"));
app.get("/", (req, res) => {
	res.sendFile(path.resolve("./public/index.html"));
});

app.use("/api/", apiRouter);

// Error handler
app.use((err, req, res, next) => {
	if (err.status) {
		console.log(`WARNING: ${err.message}`);
		res.status(err.status);
		res.send(err.message);
	} else {
		console.log(`ERROR: ${err.message}`);
		console.log(err);
		res.status(500);
		res.send("Internal server error");
	}
});

// Spin server
const port = process.env.PORT || 8080;

app.listen(port, () => {
	console.log(`Listening on port: ${port}`);
});
