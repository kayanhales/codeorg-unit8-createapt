var stateOrRegion = getColumn("US Incarcerated Population, Per Race, Ethnicity, and Region", "State or region");
var total = getColumn("US Incarcerated Population, Per Race, Ethnicity, and Region", "Total adults in correctional facilities");
var blacks = getColumn("US Incarcerated Population, Per Race, Ethnicity, and Region", "Black or African American adults in correctional facilities");
var whites = getColumn("US Incarcerated Population, Per Race, Ethnicity, and Region", "White adults in correctional facilities");
var indians = getColumn("US Incarcerated Population, Per Race, Ethnicity, and Region", "American Indian and Alaska Native adults in correctional facilities");
var asians = getColumn("US Incarcerated Population, Per Race, Ethnicity, and Region", "Asian adults in correctional facilities");
var pacifics = getColumn("US Incarcerated Population, Per Race, Ethnicity, and Region", "Native Hawaiian and other Pacific Islander adults in correctional facilities");
var hispanics = getColumn("US Incarcerated Population, Per Race, Ethnicity, and Region", "Hispanic or Latino adults in correctional facilities");

var filteredStateOrRegion = [];
var filteredRace = [];
var filteredPopulation=[];

onEvent("stateChoice", "input", function() {
  filter(getText("stateChoice"), getText("raceChoice"));
  updateScreen(filteredStateOrRegion, filteredRace, filteredPopulation);
});

onEvent("raceChoice", "input", function() {
  filter(getText("stateChoice"), getText("raceChoice"));
  updateScreen(filteredStateOrRegion, filteredRace, filteredPopulation);
});

function filter (stateInput, raceInput){
  resetLists();
  for(var i=0; i<stateOrRegion.length; i++){
    if (stateInput == stateOrRegion[i]){
      appendItem(filteredStateOrRegion, stateInput);
      appendItem(filteredRace, raceInput);
      appendItem(filteredPopulation, getRacePopulation(raceInput)[i]);
    }
  }
}

function resetLists(){
  filteredStateOrRegion = [];
  filteredRace = [];
  filteredPopulation=[];
}

function getRacePopulation(raceInput){
  if (raceInput == "White"){
    return whites;
  } else if(raceInput == "Black or African American"){
    return blacks;
  } else if(raceInput == "American Indian and Alaska Native"){
    return indians;
  } else if(raceInput == "Asian"){
    return asians;
  } else if(raceInput == "Native Hawaiian and other Pacific Islander"){
    return pacifics;
  } else if(raceInput == "Hispanic or Latino"){
    return hispanics;
  } else return total;
}

function updateScreen(stateFilter, raceFilter, popFilter){
  var textOutput = "State: " + stateFilter + "\nRace: " + raceFilter + "\nIncarcerated Population: " + popFilter;
  setText("output", textOutput);
}
