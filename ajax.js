let lengte = document.getElementById('lengte');
let gewicht = document.getElementById('gewicht');
let button = document.getElementById('button');
button.addEventListener("click", function() {
  if (!missing()) {
    ajax(gewicht.value, lengte.value);
  }

});

//Ajax functie
function ajax(gewicht, lengte) {
  let debug = false; //Maak false als script werkt
  let controlScript = "bmi.php"; //PHP script met berekeningen
  let xmlhttp = new XMLHttpRequest(); //Maak een instance
  let httpString = controlScript + "?gewicht=" + gewicht + "&lengte=" + lengte;
  let httpResponse = "";
  if (debug) console.log(httpString); //debug
  xmlhttp.open("GET", httpString, true);
  xmlhttp.send();
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      if (debug) console.log("http response = " + xmlhttp.responseText);
      httpResponse = xmlhttp.responseText;
      document.getElementById('resultaat').innerHTML = httpResponse;
    }
  }
}

function missing() {
  let nonInput = false;
  if (document.getElementById("gewicht").value == "" && document.getElementById("lengte").value == "") {
    nonInput = true;
    alert("Je hebt geen lengte of gewicht ingevuld!");
  } else if (document.getElementById("gewicht").value == "") {
    alert("Je hebt geen gewicht ingevuld!");
  } else if (document.getElementById("lengte").value == "") {
    alert("Je hebt geen lengte ingevuld!");
  }
  if (nonInput) {
    return true;
  } else {
    return false;
  }
}
