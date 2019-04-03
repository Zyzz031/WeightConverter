// SELECT ELEMENTS
const output = document.getElementById("output");
const select = document.getElementById("type");
const typeInput = document.getElementById("typeInput");
const grams = document.getElementById("gramsOutput");
const kilograms = document.getElementById("kgOutput");
const ounces = document.getElementById("ozOutput");
const pounds = document.getElementById("poundsOutput");

// Variable declaration
let inputValue;
let typeValue = "pounds";

// Set UI on onload
output.style.visibility = "hidden";
resetValues("pounds");

// EVENT
typeInput.addEventListener("input", outputToUi);
select.addEventListener("change", changeType);

// FUNCTIONS
// Output to UI
function outputToUi(event) {
  // change visibility when value change
  output.style.visibility = "visible";

  // Get current input value
  inputValue = event.target.value;

  // Set Input placeholder
  if (typeValue === "pounds") {
    setConversion("pounds", inputValue, ["grams", "kilograms", "ounces"]);
  } else if (typeValue === "kilograms") {
    setConversion("kilograms", inputValue, ["grams", "ounces", "pounds"]);
  } else if (typeValue === "grams") {
    setConversion("grams", inputValue, ["kilograms", "ounces", "pounds"]);
  } else if (typeValue === "ounces") {
    setConversion("ounces", inputValue, ["kilograms", "grams", "pounds"]);
  } else {
    // Do Nothiing...
  }
}

// Change type of conversion
function changeType(event) {
  // Get select value
  typeValue = event.target.value;
  typeInput.placeholder = `Enter ${typeValue}...`;
  resetValues(typeValue);
}

// Set computation in UI
function setConversion(type, valueType, formulas) {
  // Grams
  if (type === "grams") {
    formulas.forEach(el => {
      if (el === "kilograms") {
        // If the value of elements is kilograms
        kilograms.innerHTML = valueType / 1000;
      } else if (el === "ounces") {
        // If the value of elements is ounces
        ounces.innerHTML = valueType / 28.35;
      } else if (el === "pounds") {
        // If the value of elements is pounds
        pounds.innerHTML = valueType / 453.592;
      } else {
        //Do nothing...
      }
    });
  }
  // Kilograms
  if (type === "kilograms") {
    formulas.forEach(el => {
      if (el === "grams") {
        // If the value of elements is kilograms
        grams.innerHTML = valueType * 1000;
      } else if (el === "ounces") {
        // If the value of elements is ounces
        ounces.innerHTML = valueType * 35.274;
      } else if (el === "pounds") {
        // If the value of elements is pounds
        pounds.innerHTML = valueType * 2.205;
      } else {
        //Do nothing...
      }
    });
  }
  // Ounces
  if (type === "ounces") {
    formulas.forEach(el => {
      if (el === "grams") {
        // If the value of elements is kilograms
        grams.innerHTML = valueType * 28.35;
      } else if (el === "kilograms") {
        // If the value of elements is ounces
        kilograms.innerHTML = valueType / 35.274;
      } else if (el === "pounds") {
        // If the value of elements is pounds
        pounds.innerHTML = valueType / 16;
      } else {
        //Do nothing...
      }
    });
  }
  // Pounds
  if (type === "pounds") {
    formulas.forEach(el => {
      if (el === "grams") {
        // If the value of elements is kilograms
        grams.innerHTML = valueType / 0.0022046;
      } else if (el === "kilograms") {
        // If the value of elements is ounces
        kilograms.innerHTML = valueType / 2.2046;
      } else if (el === "ounces") {
        // If the value of elements is pounds
        ounces.innerHTML = valueType / 16;
      } else {
        //Do nothing...
      }
    });
  }
}

// Reset Values
function resetValues(elementsToBeRemoved) {
  // Set output to view
  document.getElementById("grams").style.display = "block";
  document.getElementById("kilograms").style.display = "block";
  document.getElementById("ounces").style.display = "block";
  document.getElementById("pounds").style.display = "block";

  // Set current type to display none
  document.getElementById(elementsToBeRemoved).style.display = "none";

  typeInput.value = "";
  grams.innerHTML = "";
  kilograms.innerHTML = "";
  ounces.innerHTML = "";
  pounds.innerHTML = "";
}
