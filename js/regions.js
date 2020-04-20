//TODO: Fix this mess!
async function getData() {
  progressBar = document.getElementById("progressBar");

  // Riyadh cases:
  var api_url = "https://datasource.kapsarc.org/api/records/1.0/search/?dataset=saudi-arabia-coronavirus-disease-covid-19-situation&rows=19&sort=date&refine.daily_cumulative=Cumulative&refine.indicator=Cases&refine.region=Riyadh";
  var response = await fetch(api_url);
  var data = await response.json();

  var date = data.records[0].fields.date; // this holds the most recent date in the api
  var cases = 0;
  for (let i = 0; data.records[i].fields.date == date; i++) {
    cases += data.records[i].fields.cases;
  }
  document.getElementById("RiyadhTotalCases").textContent = cases;
  progressBar.style.width = "2%";

  // Riyadh active cases
  api_url = "https://datasource.kapsarc.org/api/records/1.0/search/?dataset=saudi-arabia-coronavirus-disease-covid-19-situation&rows=19&sort=date&refine.daily_cumulative=Cumulative&refine.region=Riyadh&refine.indicator=Active+cases";
  response = await fetch(api_url);
  data = await response.json();
  cases = 0;
  for (let i = 0; data.records[i].fields.date == date; i++) {
    cases += data.records[i].fields.cases;
  }
  document.getElementById("RiyadhActiveCases").textContent = cases;
  progressBar.style.width = "4%";

  // Riyadh mortalities
  api_url = "https://datasource.kapsarc.org/api/records/1.0/search/?dataset=saudi-arabia-coronavirus-disease-covid-19-situation&rows=19&sort=date&refine.daily_cumulative=Cumulative&refine.region=Riyadh&refine.indicator=Mortalities";
  response = await fetch(api_url);
  data = await response.json();
  cases = 0;
  for (let i = 0; data.records[i].fields.date == date; i++) {
    cases += data.records[i].fields.cases;
  }
  document.getElementById("RiyadhMortalities").textContent = cases;
  progressBar.style.width = "6%";

  // Riyadh recoveries
  api_url = "https://datasource.kapsarc.org/api/records/1.0/search/?dataset=saudi-arabia-coronavirus-disease-covid-19-situation&rows=19&sort=date&refine.daily_cumulative=Cumulative&refine.region=Riyadh&refine.indicator=Recoveries";
  response = await fetch(api_url);
  data = await response.json();
  cases = 0;
  for (let i = 0; data.records[i].fields.date == date; i++) {
    cases += data.records[i].fields.cases;
  }
  document.getElementById("RiyadhRecovered").textContent = cases;
  progressBar.style.width = "8%";

  // Makkah cases
  api_url = "https://datasource.kapsarc.org/api/records/1.0/search/?dataset=saudi-arabia-coronavirus-disease-covid-19-situation&rows=19&sort=date&refine.daily_cumulative=Cumulative&refine.indicator=Cases&refine.region=Makkah";
  response = await fetch(api_url);
  data = await response.json();
  cases = 0;
  for (let i = 0; data.records[i].fields.date == date; i++) {
    cases += data.records[i].fields.cases;
  }
  document.getElementById("MakkahTotalCases").textContent = cases;
  progressBar.style.width = "10%";

  // Makkah active
  api_url = "https://datasource.kapsarc.org/api/records/1.0/search/?dataset=saudi-arabia-coronavirus-disease-covid-19-situation&rows=19&sort=date&refine.daily_cumulative=Cumulative&refine.indicator=Active+cases&refine.region=Makkah";
  response = await fetch(api_url);
  data = await response.json();
  cases = 0;
  for (let i = 0; data.records[i].fields.date == date; i++) {
    cases += data.records[i].fields.cases;
  }
  document.getElementById("MakkahActiveCases").textContent = cases;
  progressBar.style.width = "12%";

  // Makkah mortalities
  api_url = "https://datasource.kapsarc.org/api/records/1.0/search/?dataset=saudi-arabia-coronavirus-disease-covid-19-situation&rows=19&sort=date&refine.daily_cumulative=Cumulative&refine.indicator=Mortalities&refine.region=Makkah";
  response = await fetch(api_url);
  data = await response.json();
  cases = 0;
  for (let i = 0; data.records[i].fields.date == date; i++) {
    cases += data.records[i].fields.cases;
  }
  document.getElementById("MakkahMortalities").textContent = cases;
  progressBar.style.width = "14%";

  // Makkah recoveries
  api_url = "https://datasource.kapsarc.org/api/records/1.0/search/?dataset=saudi-arabia-coronavirus-disease-covid-19-situation&rows=19&sort=date&refine.daily_cumulative=Cumulative&refine.indicator=Recoveries&refine.region=Makkah";
  response = await fetch(api_url);
  data = await response.json();
  cases = 0;
  for (let i = 0; data.records[i].fields.date == date; i++) {
    cases += data.records[i].fields.cases;
  }
  document.getElementById("MakkahRecovered").textContent = cases;
  progressBar.style.width = "16%";

  // Medina cases
  api_url = "https://datasource.kapsarc.org/api/records/1.0/search/?dataset=saudi-arabia-coronavirus-disease-covid-19-situation&rows=19&sort=date&refine.daily_cumulative=Cumulative&refine.indicator=Cases&refine.region=Medina";
  response = await fetch(api_url);
  data = await response.json();
  cases = 0;
  for (let i = 0; data.records[i].fields.date == date; i++) {
    cases += data.records[i].fields.cases;
  }
  document.getElementById("MedinaTotalCases").textContent = cases;
  progressBar.style.width = "18%";

  // Medina active
  api_url = "https://datasource.kapsarc.org/api/records/1.0/search/?dataset=saudi-arabia-coronavirus-disease-covid-19-situation&rows=19&sort=date&refine.daily_cumulative=Cumulative&refine.indicator=Active+cases&refine.region=Medina";
  response = await fetch(api_url);
  data = await response.json();
  cases = 0;
  for (let i = 0; data.records[i].fields.date == date; i++) {
    cases += data.records[i].fields.cases;
  }
  document.getElementById("MedinaActiveCases").textContent = cases;
  progressBar.style.width = "20%";

  // Medina mortalities
  api_url = "https://datasource.kapsarc.org/api/records/1.0/search/?dataset=saudi-arabia-coronavirus-disease-covid-19-situation&rows=19&sort=date&refine.daily_cumulative=Cumulative&refine.indicator=Mortalities&refine.region=Medina";
  response = await fetch(api_url);
  data = await response.json();
  cases = 0;
  for (let i = 0; data.records[i].fields.date == date; i++) {
    cases += data.records[i].fields.cases;
  }
  document.getElementById("MedinaMortalities").textContent = cases;
  progressBar.style.width = "22%";

  // Medina recoveries
  api_url = "https://datasource.kapsarc.org/api/records/1.0/search/?dataset=saudi-arabia-coronavirus-disease-covid-19-situation&rows=19&sort=date&refine.daily_cumulative=Cumulative&refine.region=Medina&refine.indicator=Recoveries";
  response = await fetch(api_url);
  data = await response.json();
  cases = 0;
  for (let i = 0; data.records[i].fields.date == date; i++) {
    cases += data.records[i].fields.cases;
  }
  document.getElementById("MedinaRecovered").textContent = cases;
  progressBar.style.width = "24%";

  // Qassim cases
  api_url = "https://datasource.kapsarc.org/api/records/1.0/search/?dataset=saudi-arabia-coronavirus-disease-covid-19-situation&rows=19&sort=date&refine.daily_cumulative=Cumulative&refine.indicator=Cases&refine.region=Qassim";
  response = await fetch(api_url);
  data = await response.json();
  cases = 0;
  for (let i = 0; data.records[i].fields.date == date; i++) {
    cases += data.records[i].fields.cases;
  }
  document.getElementById("QassimTotalCases").textContent = cases;
  progressBar.style.width = "26%";

  // Qassim active
  api_url = "https://datasource.kapsarc.org/api/records/1.0/search/?dataset=saudi-arabia-coronavirus-disease-covid-19-situation&rows=19&sort=date&refine.daily_cumulative=Cumulative&refine.indicator=Active+cases&refine.region=Qassim";
  response = await fetch(api_url);
  data = await response.json();
  cases = 0;
  for (let i = 0; data.records[i].fields.date == date; i++) {
    cases += data.records[i].fields.cases;
  }
  document.getElementById("QassimActiveCases").textContent = cases;
  progressBar.style.width = "28%";

  // Qassim mortalities
  api_url = "https://datasource.kapsarc.org/api/records/1.0/search/?dataset=saudi-arabia-coronavirus-disease-covid-19-situation&rows=19&sort=date&refine.daily_cumulative=Cumulative&refine.indicator=Mortalities&refine.region=Qassim";
  response = await fetch(api_url);
  data = await response.json();
  cases = 0;
  for (let i = 0; data.records[i].fields.date == date; i++) {
    cases += data.records[i].fields.cases;
  }
  document.getElementById("QassimMortalities").textContent = cases;
  progressBar.style.width = "30%";

  // Qassim recoveries
  api_url = "https://datasource.kapsarc.org/api/records/1.0/search/?dataset=saudi-arabia-coronavirus-disease-covid-19-situation&rows=19&sort=date&refine.daily_cumulative=Cumulative&refine.indicator=Recoveries&refine.region=Qassim";
  response = await fetch(api_url);
  data = await response.json();
  cases = 0;
  for (let i = 0; data.records[i].fields.date == date; i++) {
    cases += data.records[i].fields.cases;
  }
  document.getElementById("QassimRecovered").textContent = cases;
  progressBar.style.width = "32%";

  // Eastern Region cases
  api_url = "https://datasource.kapsarc.org/api/records/1.0/search/?dataset=saudi-arabia-coronavirus-disease-covid-19-situation&rows=19&sort=date&refine.daily_cumulative=Cumulative&refine.indicator=Cases&refine.region=Eastern+Region";
  response = await fetch(api_url);
  data = await response.json();
  cases = 0;
  for (let i = 0; data.records[i].fields.date == date; i++) {
    cases += data.records[i].fields.cases;
  }
  document.getElementById("EasternRegionTotalCases").textContent = cases;
  progressBar.style.width = "34%";

  // Eastern Region active cases
  api_url = "https://datasource.kapsarc.org/api/records/1.0/search/?dataset=saudi-arabia-coronavirus-disease-covid-19-situation&rows=19&sort=date&refine.daily_cumulative=Cumulative&refine.indicator=Active+cases&refine.region=Eastern+Region";
  response = await fetch(api_url);
  data = await response.json();
  cases = 0;
  for (let i = 0; data.records[i].fields.date == date; i++) {
    cases += data.records[i].fields.cases;
  }
  document.getElementById("EasternRegionActiveCases").textContent = cases;
  progressBar.style.width = "36%";

  // Eastern Region mortalities
  api_url = "https://datasource.kapsarc.org/api/records/1.0/search/?dataset=saudi-arabia-coronavirus-disease-covid-19-situation&rows=19&sort=date&refine.daily_cumulative=Cumulative&refine.indicator=Mortalities&refine.region=Eastern+Region";
  response = await fetch(api_url);
  data = await response.json();
  cases = 0;
  for (let i = 0; data.records[i].fields.date == date; i++) {
    cases += data.records[i].fields.cases;
  }
  document.getElementById("EasternRegionMortalities").textContent = cases;
  progressBar.style.width = "38%";

  // Eastern Region recoveries
  api_url = "https://datasource.kapsarc.org/api/records/1.0/search/?dataset=saudi-arabia-coronavirus-disease-covid-19-situation&rows=19&sort=date&refine.daily_cumulative=Cumulative&refine.indicator=Recoveries&refine.region=Eastern+Region";
  response = await fetch(api_url);
  data = await response.json();
  cases = 0;
  for (let i = 0; data.records[i].fields.date == date; i++) {
    cases += data.records[i].fields.cases;
  }
  document.getElementById("EasternRegionRecovered").textContent = cases;
  progressBar.style.width = "40%";

  // Aseer cases
  api_url = "https://datasource.kapsarc.org/api/records/1.0/search/?dataset=saudi-arabia-coronavirus-disease-covid-19-situation&rows=19&sort=date&refine.daily_cumulative=Cumulative&refine.indicator=Cases&refine.region=Asir";
  response = await fetch(api_url);
  data = await response.json();
  cases = 0;
  for (let i = 0; data.records[i].fields.date == date; i++) {
    cases += data.records[i].fields.cases;
  }
  document.getElementById("AseerTotalCases").textContent = cases;
  progressBar.style.width = "42%";

  // Aseer active cases
  api_url = "https://datasource.kapsarc.org/api/records/1.0/search/?dataset=saudi-arabia-coronavirus-disease-covid-19-situation&rows=19&sort=date&refine.daily_cumulative=Cumulative&refine.indicator=Active+cases&refine.region=Asir";
  response = await fetch(api_url);
  data = await response.json();
  cases = 0;
  for (let i = 0; data.records[i].fields.date == date; i++) {
    cases += data.records[i].fields.cases;
  }
  document.getElementById("AseerActiveCases").textContent = cases;
  progressBar.style.width = "44%";

  // Aseer mortalities
  api_url = "https://datasource.kapsarc.org/api/records/1.0/search/?dataset=saudi-arabia-coronavirus-disease-covid-19-situation&rows=19&sort=date&refine.daily_cumulative=Cumulative&refine.indicator=Mortalities&refine.region=Asir";
  response = await fetch(api_url);
  data = await response.json();
  cases = 0;
  for (let i = 0; data.records[i].fields.date == date; i++) {
    cases += data.records[i].fields.cases;
  }
  document.getElementById("AseerMortalities").textContent = cases;
  progressBar.style.width = "46%";

  // Aseer recoveries
  api_url = "https://datasource.kapsarc.org/api/records/1.0/search/?dataset=saudi-arabia-coronavirus-disease-covid-19-situation&rows=19&sort=date&refine.daily_cumulative=Cumulative&refine.region=Asir&refine.indicator=Recoveries";
  response = await fetch(api_url);
  data = await response.json();
  cases = 0;
  for (let i = 0; data.records[i].fields.date == date; i++) {
    cases += data.records[i].fields.cases;
  }
  document.getElementById("AseerRecovered").textContent = cases;
  progressBar.style.width = "48%";

  // Tabuk cases
  api_url = "https://datasource.kapsarc.org/api/records/1.0/search/?dataset=saudi-arabia-coronavirus-disease-covid-19-situation&rows=19&sort=date&refine.daily_cumulative=Cumulative&refine.indicator=Cases&refine.region=Tabuk";
  response = await fetch(api_url);
  data = await response.json();
  cases = 0;
  for (let i = 0; data.records[i].fields.date == date; i++) {
    cases += data.records[i].fields.cases;
  }
  document.getElementById("TabukTotalCases").textContent = cases;
  progressBar.style.width = "50%";

  // Tabuk active cases
  api_url = "https://datasource.kapsarc.org/api/records/1.0/search/?dataset=saudi-arabia-coronavirus-disease-covid-19-situation&rows=19&sort=date&refine.daily_cumulative=Cumulative&refine.indicator=Active+cases&refine.region=Tabuk";
  response = await fetch(api_url);
  data = await response.json();
  cases = 0;
  for (let i = 0; data.records[i].fields.date == date; i++) {
    cases += data.records[i].fields.cases;
  }
  document.getElementById("TabukActiveCases").textContent = cases;
  progressBar.style.width = "52%";

  // Tabuk mortalities
  api_url = "https://datasource.kapsarc.org/api/records/1.0/search/?dataset=saudi-arabia-coronavirus-disease-covid-19-situation&rows=19&sort=date&refine.daily_cumulative=Cumulative&refine.indicator=Mortalities&refine.region=Tabuk";
  response = await fetch(api_url);
  data = await response.json();
  cases = 0;
  for (let i = 0; data.records[i].fields.date == date; i++) {
    cases += data.records[i].fields.cases;
  }
  document.getElementById("TabukMortalities").textContent = cases;
  progressBar.style.width = "54%";

  // Tabuk recoveries
  api_url = "https://datasource.kapsarc.org/api/records/1.0/search/?dataset=saudi-arabia-coronavirus-disease-covid-19-situation&rows=19&sort=date&refine.daily_cumulative=Cumulative&refine.indicator=Recoveries&refine.region=Tabuk";
  response = await fetch(api_url);
  data = await response.json();
  cases = 0;
  for (let i = 0; data.records[i].fields.date == date; i++) {
    cases += data.records[i].fields.cases;
  }
  document.getElementById("TabukRecovered").textContent = cases;
  progressBar.style.width = "56%";

  // Hail cases
  api_url = "https://datasource.kapsarc.org/api/records/1.0/search/?dataset=saudi-arabia-coronavirus-disease-covid-19-situation&rows=19&sort=date&refine.daily_cumulative=Cumulative&refine.indicator=Cases&refine.region=Hail";
  response = await fetch(api_url);
  data = await response.json();
  cases = 0;
  for (let i = 0; data.records[i].fields.date == date; i++) {
    cases += data.records[i].fields.cases;
  }
  document.getElementById("HailTotalCases").textContent = cases;
  progressBar.style.width = "58%";

  // Hail active cases
  api_url = "https://datasource.kapsarc.org/api/records/1.0/search/?dataset=saudi-arabia-coronavirus-disease-covid-19-situation&rows=19&sort=date&refine.daily_cumulative=Cumulative&refine.indicator=Active+cases&refine.region=Hail";
  response = await fetch(api_url);
  data = await response.json();
  cases = 0;
  for (let i = 0; data.records[i].fields.date == date; i++) {
    cases += data.records[i].fields.cases;
  }
  document.getElementById("HailActiveCases").textContent = cases;
  progressBar.style.width = "60%";

  // Hail mortalities
  api_url = "https://datasource.kapsarc.org/api/records/1.0/search/?dataset=saudi-arabia-coronavirus-disease-covid-19-situation&rows=19&sort=date&refine.daily_cumulative=Cumulative&refine.indicator=Mortalities&refine.region=Hail";
  response = await fetch(api_url);
  data = await response.json();
  cases = 0;
  for (let i = 0; data.records[i].fields.date == date; i++) {
    cases += data.records[i].fields.cases;
  }
  document.getElementById("HailMortalities").textContent = cases;
  progressBar.style.width = "62%";

  // Hail recoveries
  api_url = "https://datasource.kapsarc.org/api/records/1.0/search/?dataset=saudi-arabia-coronavirus-disease-covid-19-situation&rows=19&sort=date&refine.daily_cumulative=Cumulative&refine.indicator=Recoveries&refine.region=Hail";
  response = await fetch(api_url);
  data = await response.json();
  cases = 0;
  for (let i = 0; data.records[i].fields.date == date; i++) {
    cases += data.records[i].fields.cases;
  }
  document.getElementById("HailRecovered").textContent = cases;
  progressBar.style.width = "64%";

  // Northern borders cases
  api_url = "https://datasource.kapsarc.org/api/records/1.0/search/?dataset=saudi-arabia-coronavirus-disease-covid-19-situation&rows=19&sort=date&refine.daily_cumulative=Cumulative&refine.region=Northern+Borders&refine.indicator=Cases";
  response = await fetch(api_url);
  data = await response.json();
  cases = 0;
  for (let i = 0; data.records[i].fields.date == date; i++) {
    cases += data.records[i].fields.cases;
  }
  document.getElementById("NorthernBordersTotalCases").textContent = cases;
  progressBar.style.width = "66%";

  // Northern borders active cases
  api_url = "https://datasource.kapsarc.org/api/records/1.0/search/?dataset=saudi-arabia-coronavirus-disease-covid-19-situation&rows=19&sort=date&refine.daily_cumulative=Cumulative&refine.region=Northern+Borders&refine.indicator=Active+cases";
  response = await fetch(api_url);
  data = await response.json();
  cases = 0;
  for (let i = 0; data.records[i].fields.date == date; i++) {
    cases += data.records[i].fields.cases;
  }
  document.getElementById("NorthernBordersActiveCases").textContent = cases;
  progressBar.style.width = "68%";

  // Northern borders mortalities
  api_url = "https://datasource.kapsarc.org/api/records/1.0/search/?dataset=saudi-arabia-coronavirus-disease-covid-19-situation&rows=19&sort=date&refine.daily_cumulative=Cumulative&refine.region=Northern+Borders&refine.indicator=Mortalities";
  response = await fetch(api_url);
  data = await response.json();
  cases = 0;
  for (let i = 0; data.records[i].fields.date == date; i++) {
    cases += data.records[i].fields.cases;
  }
  document.getElementById("NorthernBordersMortalities").textContent = cases;
  progressBar.style.width = "70%";

  // Northern borders recoveries
  api_url = "https://datasource.kapsarc.org/api/records/1.0/search/?dataset=saudi-arabia-coronavirus-disease-covid-19-situation&rows=19&sort=date&refine.daily_cumulative=Cumulative&refine.region=Northern+Borders&refine.indicator=Recoveries";
  response = await fetch(api_url);
  data = await response.json();
  cases = 0;
  for (let i = 0; data.records[i].fields.date == date; i++) {
    cases += data.records[i].fields.cases;
  }
  document.getElementById("NorthernBordersRecovered").textContent = cases;
  progressBar.style.width = "72%";

  // Jazan cases
  api_url = "https://datasource.kapsarc.org/api/records/1.0/search/?dataset=saudi-arabia-coronavirus-disease-covid-19-situation&rows=19&sort=date&refine.daily_cumulative=Cumulative&refine.indicator=Cases&refine.region=Jazan";
  response = await fetch(api_url);
  data = await response.json();
  cases = 0;
  for (let i = 0; data.records[i].fields.date == date; i++) {
    cases += data.records[i].fields.cases;
  }
  document.getElementById("JazanTotalCases").textContent = cases;
  progressBar.style.width = "74%";

  // Jazan active cases
  api_url = "https://datasource.kapsarc.org/api/records/1.0/search/?dataset=saudi-arabia-coronavirus-disease-covid-19-situation&rows=19&sort=date&refine.daily_cumulative=Cumulative&refine.indicator=Active+cases&refine.region=Jazan";
  response = await fetch(api_url);
  data = await response.json();
  cases = 0;
  for (let i = 0; data.records[i].fields.date == date; i++) {
    cases += data.records[i].fields.cases;
  }
  document.getElementById("JazanActiveCases").textContent = cases;
  progressBar.style.width = "76%";

  // Jazan mortalities
  api_url = "https://datasource.kapsarc.org/api/records/1.0/search/?dataset=saudi-arabia-coronavirus-disease-covid-19-situation&rows=19&sort=date&refine.daily_cumulative=Cumulative&refine.indicator=Mortalities&refine.region=Jazan";
  response = await fetch(api_url);
  data = await response.json();
  cases = 0;
  for (let i = 0; data.records[i].fields.date == date; i++) {
    cases += data.records[i].fields.cases;
  }
  document.getElementById("JazanMortalities").textContent = cases;
  progressBar.style.width = "78%";

  // Jazan recoveries
  api_url = "https://datasource.kapsarc.org/api/records/1.0/search/?dataset=saudi-arabia-coronavirus-disease-covid-19-situation&rows=19&sort=date&refine.daily_cumulative=Cumulative&refine.indicator=Recoveries&refine.region=Jazan";
  response = await fetch(api_url);
  data = await response.json();
  cases = 0;
  for (let i = 0; data.records[i].fields.date == date; i++) {
    cases += data.records[i].fields.cases;
  }
  document.getElementById("JazanRecovered").textContent = cases;
  progressBar.style.width = "80%";

  // Najran cases
  api_url = "https://datasource.kapsarc.org/api/records/1.0/search/?dataset=saudi-arabia-coronavirus-disease-covid-19-situation&rows=19&sort=date&refine.daily_cumulative=Cumulative&refine.indicator=Cases&refine.region=Najran";
  response = await fetch(api_url);
  data = await response.json();
  cases = 0;
  for (let i = 0; data.records[i].fields.date == date; i++) {
    cases += data.records[i].fields.cases;
  }
  document.getElementById("NajranTotalCases").textContent = cases;
  progressBar.style.width = "82%";

  // Najran active cases
  api_url = "https://datasource.kapsarc.org/api/records/1.0/search/?dataset=saudi-arabia-coronavirus-disease-covid-19-situation&rows=19&sort=date&refine.daily_cumulative=Cumulative&refine.indicator=Active+cases&refine.region=Najran";
  response = await fetch(api_url);
  data = await response.json();
  cases = 0;
  for (let i = 0; data.records[i].fields.date == date; i++) {
    cases += data.records[i].fields.cases;
  }
  document.getElementById("NajranActiveCases").textContent = cases;
  progressBar.style.width = "84%";

  // Najran mortalities
  api_url = "https://datasource.kapsarc.org/api/records/1.0/search/?dataset=saudi-arabia-coronavirus-disease-covid-19-situation&rows=19&sort=date&refine.daily_cumulative=Cumulative&refine.indicator=Mortalities&refine.region=Najran";
  response = await fetch(api_url);
  data = await response.json();
  cases = 0;
  for (let i = 0; data.records[i].fields.date == date; i++) {
    cases += data.records[i].fields.cases;
  }
  document.getElementById("NajranMortalities").textContent = cases;
  progressBar.style.width = "86%";

  // Najran recoveries
  api_url = "https://datasource.kapsarc.org/api/records/1.0/search/?dataset=saudi-arabia-coronavirus-disease-covid-19-situation&rows=19&sort=date&refine.daily_cumulative=Cumulative&refine.indicator=Recoveries&refine.region=Najran";
  response = await fetch(api_url);
  data = await response.json();
  cases = 0;
  for (let i = 0; data.records[i].fields.date == date; i++) {
    cases += data.records[i].fields.cases;
  }
  document.getElementById("NajranRecovered").textContent = cases;
  progressBar.style.width = "88%";

  // Al Baha cases
  api_url = "https://datasource.kapsarc.org/api/records/1.0/search/?dataset=saudi-arabia-coronavirus-disease-covid-19-situation&rows=19&sort=date&refine.daily_cumulative=Cumulative&refine.indicator=Cases&refine.region=Al+Baha";
  response = await fetch(api_url);
  data = await response.json();
  cases = 0;
  for (let i = 0; data.records[i].fields.date == date; i++) {
    cases += data.records[i].fields.cases;
  }
  document.getElementById("AlBahaTotalCases").textContent = cases;
  progressBar.style.width = "93%";

  // Al Baha active cases
  api_url = "https://datasource.kapsarc.org/api/records/1.0/search/?dataset=saudi-arabia-coronavirus-disease-covid-19-situation&rows=19&sort=date&refine.daily_cumulative=Cumulative&refine.indicator=Active+cases&refine.region=Al+Baha";
  response = await fetch(api_url);
  data = await response.json();
  cases = 0;
  for (let i = 0; data.records[i].fields.date == date; i++) {
    cases += data.records[i].fields.cases;
  }
  document.getElementById("AlBahaActiveCases").textContent = cases;
  progressBar.style.width = "96%";

  // Al Baha mortalities
  api_url = "https://datasource.kapsarc.org/api/records/1.0/search/?dataset=saudi-arabia-coronavirus-disease-covid-19-situation&rows=19&sort=date&refine.daily_cumulative=Cumulative&refine.indicator=Mortalities&refine.region=Al+Baha";
  response = await fetch(api_url);
  data = await response.json();
  cases = 0;
  for (let i = 0; data.records[i].fields.date == date; i++) {
    cases += data.records[i].fields.cases;
  }
  document.getElementById("AlBahaMortalities").textContent = cases;
  progressBar.style.width = "98%";

  // Al Baha recoveries
  api_url = "https://datasource.kapsarc.org/api/records/1.0/search/?dataset=saudi-arabia-coronavirus-disease-covid-19-situation&rows=19&sort=date&refine.daily_cumulative=Cumulative&refine.indicator=Recoveries&refine.region=Al+Baha";
  response = await fetch(api_url);
  data = await response.json();
  cases = 0;
  for (let i = 0; data.records[i].fields.date == date; i++) {
    cases += data.records[i].fields.cases;
  }
  document.getElementById("AlBahaRecovered").textContent = cases;
  progressBar.style.width = "100%";

  // hide the progress bar and show the body
  document.getElementById("progressDiv").style.display = "none";
  document.getElementById("regionBody").style.display = "inline";
}

getData();