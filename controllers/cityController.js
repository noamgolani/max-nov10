import Agent from '../models/agent.js'
export async function getAllCities(req,res,next){
	const cities = await Agent.find({}).distinct('city');
	res.send(cities)
}
