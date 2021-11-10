import axios from "axios";
setTimeout(() => {
	const cityH = "%D7%AA%D7%9C%20%D7%90%D7%91%D7%99%D7%91";
	axios
		.get(`http://localhost:8080/agents/?city=${cityH}`)
		.then((res) => {
			console.log(res.data)
			console.log(`SUCCESS: agents ${res}`);
		})
		.catch((err) => {
			console.log(err.response.data);
			console.log(`ERROR: agents ${err.message}`);
		});
}, 1000);

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
