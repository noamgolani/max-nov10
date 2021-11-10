import axios from "axios";
setTimeout(() => {
	const hebrewCity = 'איתן'
	axios
		.get(`http://localhost:8080/agents/?city=${hebrewCity}`)
		.then((res) => {
			console.log(`SUCCESS: agents ${res}`);
		})
		.catch((err) => {
			console.log(`ERROR: agents ${err.message}`);
		});
}, 400);

//.get("http://localhost:8080/cities")
//.then((res) => {
//	console.log(`SUCCESS: cities`);
//	console.log(res.data);
//})
//.catch((err) => {
//	console.log(`ERROR: cities ${err.message}`);
//});
//axios
//	.get("http://localhost:8080/")
//	.then((res) => {
//		console.log(`SUCCESS: cities ${res}`);
//	})
//	.catch((err) => {
//		console.log(`ERROR: cities ${err.message}`);
//	});
//
//apiRouter.get("/cities", getAllCities);
//apiRouter.get("/agents", getAgentsByCity);
//apiRouter.put("/agent/:id/edit", editAgentCity);
