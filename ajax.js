function ajax(gewicht, lengte) {
  let debug = true; //Maak false als script werkt
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
      resultaat.innerHTML = httpResponse;
    }
  }
}
