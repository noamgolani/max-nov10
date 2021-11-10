import Agent from "../models/agent.js";

export async function getAgentsByCity(req, res, next) {
	try {
		const city = req.query.city;
		const agents = await Agent.find({ city });
		res.send(agents);
	} catch (err) {
		next(err);
	}
}
export async function editAgentCity(req, res, next) {
	try {
		const { id } = req.params;
		const newCity = req.body.city;
		if (!newCity) throw { status: 400, message: "Must provide a city" };
		const oldAgent = await Agent.findOneAndUpdate(
			{ _id: id },
			{ city: newCity }
		);
		const newAgent = await Agent.findById(id);
		
		res.send({newAgent, oldAgent});
	} catch (err) {
		next(err);
	}
}
