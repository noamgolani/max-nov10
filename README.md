## Agent API

- GET / home page 
-	GET /api/cities -> responds with all the cities
- GET /api/agents/?city=<cityName> -> reqponds with all the agents under that city
- PUT /api/agent/<id>/edit {city:<newCity>} -> responds with an object containing `oldAgent`,	`newAgent`

## Scripts

-	`populateDB.js` run to read the `assets/agents.csv` and insert to the DB
- `cleanDB.js` run to clear the DB **IT WILL REMOVE ALL DOCUMENTS IN THE DB**

