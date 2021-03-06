var finished = 0;

getRegion("Ar+Riyad");
getRegion("Makkah+Al+Mukarramah");
getRegion("Al+Madinah+Al+Munawwarah");
getRegion("Al+Qaseem");
getRegion("Eastern+Region");
getRegion("Aseer");
getRegion("Tabuk");
getRegion("Hail");
getRegion("Northern+Borders");
getRegion("Jazan");
getRegion("Najran");
getRegion("Al+Bahah");
getRegion("Al+Jawf");

async function getRegion(region) {
    try {
        rows = 150;
        const api_url = "https://datasource.kapsarc.org/api/records/1.0/search/?dataset=saudi-arabia-coronavirus-disease-covid-19-situation&rows=" + rows + "&sort=date&refine.daily_cumulative=Cumulative&refine.region_en=" + region;
        const response = await fetch(api_url);
        const data = await response.json();

        console.log()
        const date = data.records[0].fields.date; // this holds the most recent date in the api
        var cases = 0; activeCases = 0; mortalities = 0; recoveries = 0;
        for (let i = 0; i < rows; i++) {
            if (data.records[i].fields.date != date) {
                break;
            }
            switch (data.records[i].fields.indicator) {
                case "Cases":
                    cases += data.records[i].fields.case_value;
                    break;
                case "Active":
                    activeCases += data.records[i].fields.case_value;
                    break;
                case "Mortalities":
                    mortalities += data.records[i].fields.case_value;
                    break;
                case "Recoveries":
                    recoveries += data.records[i].fields.case_value;
                    break;
                default:
                    console.error("Unkown indicator:" + data.records[i].fields.indicator);
                    break;
            }
        }
        
        region = region.split("+").join(""); //remove all the plus signs from the region string

        document.getElementById(region + "TotalCases").textContent = cases;
        document.getElementById(region + "ActiveCases").textContent = activeCases;
        document.getElementById(region + "Mortalities").textContent = mortalities;
        document.getElementById(region + "Recovered").textContent = recoveries;

    } catch (error) {
        console.error(error);
        document.getElementById("spinner").style.display = "none";
        document.getElementById("regionBody").style.display = "inline";
    }
    finished++;
    if (finished == 13) { // if this is the last region to load
        // hide the loading spinner and show the body
        document.getElementById("spinner").style.display = "none";
        document.getElementById("regionBody").style.display = "inline";
    }
}


