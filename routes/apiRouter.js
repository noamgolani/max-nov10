import express from "express";

const apiRouter = express.Router();

import { getAllCities } from "../controllers/cityController.js";
import { getAgentsByCity, editAgentCity } from "../controllers/agentController.js";

apiRouter.get("/cities", getAllCities);
apiRouter.get("/agents", getAgentsByCity);
apiRouter.put("/agent/:id/edit", editAgentCity);

export default apiRouter;
