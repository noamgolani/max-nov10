axios.get("/api/cities").then(({ data: cities }) => {
  cities.forEach((city) => {
    const optionEl = document.createElement("option");
    optionEl.setAttribute("value", city);
    optionEl.innerText = city;
    optionEl.addEventListener("click", () => {
      renderNew(city);
    });
    document.getElementById("cities").append(optionEl);
  });
});

async function renderNew(city) {
  const res = await axios.get(`/api/agents/?city=${city}`);

  const table = document.getElementById("agentsTable");
  table.innerHTML = "";
  res.data.forEach((agent) => {
    const agentEl = document.createElement("tr");
    const nameEl = document.createElement("td");
    const idEl = document.createElement("td");
    nameEl.innerText = agent.full_name;
    idEl.innerText = agent.license_id;
    agentEl.append(idEl, nameEl);
    table.append(agentEl);
  });
}
