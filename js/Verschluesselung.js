var encryptionResult = new String("");

function encryptionFunction(decrypt, inputString) {
  //inString = new String(inputString)

  encryptionResult = "";

  var encryptOffset = 3;

  for (let index = 0; index < inputString.length; index++) {
    let charNumber = inputString.charCodeAt(index);
    //console.log(charNumber);

    if (!decrypt) {
      charNumber += encryptOffset;
    } else {
      charNumber -= encryptOffset;
    }

    //console.log(charNumber);

    encryptionResult += String.fromCharCode(charNumber);
    console.log("encrypt: " + encryptionResult);
  }
}

function encrypt() {
  var inputUnverschluesselt = document.getElementById("unverschluesseltId")
    .value;
  ///console.log("Input: " + inputUnverschluesselt);

  encryptionFunction(false, inputUnverschluesselt);

  document.getElementById("verschluesseltId").value = encryptionResult;
}

function decrypt() {
  var inputVerschluesselt = document.getElementById("verschluesseltId").value;
  encryptionFunction(true, inputVerschluesselt);

  document.getElementById("unverschluesseltId").value = encryptionResult;
}
