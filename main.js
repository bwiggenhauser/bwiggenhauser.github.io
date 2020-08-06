window.onload = function () {
    document.getElementById("rangePopulationText").value = population;
    document.getElementById("rangeInfDaysText").value = anzahlKrankeTage;
    document.getElementById("range1ofXText").value = krankNachKontakt;
    document.getElementById("rangeInfectionText").value = rangeOfInfection;
    document.getElementById("rangeWalkingSpeedText").value = (distancePerTick * 10);
}


function update(){
  let rangePopulationValue = document.getElementById("rangePopulation").value;
  document.getElementById("rangePopulationText").value = rangePopulationValue;

  let rangeInfDaysValue = document.getElementById("rangeInfDays").value;
  document.getElementById("rangeInfDaysText").value = rangeInfDaysValue;

  let range1ofXValue = document.getElementById("range1ofX").value;
  document.getElementById("range1ofXText").value = range1ofXValue;

  let rangeInfectionValue = document.getElementById("rangeInfection").value;
  document.getElementById("rangeInfectionText").value = rangeInfectionValue;

  let rangeWalkingSpeedValue = document.getElementById("rangeWalkingSpeed").value;
  document.getElementById("rangeWalkingSpeedText").value = rangeWalkingSpeedValue;
}

function startNew(){
  people = [];
  ersterKrank = false;
  setNewValues();
  setup();
}

function setNewValues() {
  population = Number(document.getElementById("rangePopulationText").value);
  anzahlKrankeTage = Number(document.getElementById("rangeInfDaysText").value);
  krankNachKontakt = Number(document.getElementById("range1ofXText").value);
  rangeOfInfection = Number(document.getElementById("rangeInfectionText").value);
  distancePerTick = 0.1*(Number(document.getElementById("rangeWalkingSpeedText").value));
}
