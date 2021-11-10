import Agent from '../models/agent.js'

export async function getAgentsByCity(req,res,next){
	const city = req.query.city;

	const agents = await Agent.find({city});
	res.send(agents)
}
export async function editAgentCity(req,res,next){
}
