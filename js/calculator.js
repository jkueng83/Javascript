function addToCalculation(toAdd) {
    var calculation = document.getElementById("calculationString").value;
    if (calculation == "?") {
      calculation = "";
    }
    calculation = calculation + toAdd;
    document.getElementById("calculationString").innerHTML = calculation;

    console.log('add');
  }

  function makeCalculation() {
    var calc = document.getElementById("calculationString").value;
    var result = eval(calc);
    document.getElementById("calculationResult").innerHTML = result;
  }

  function resetField() {
    document.getElementById("calculationString").innerHTML = "?";
    document.getElementById("calculationResult").innerHTML = "?";
    
  }