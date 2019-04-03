<?php
  $gewicht = $_GET["gewicht"];
  $lengte  = $_GET["lengte"];
  BMIcalc($gewicht, $lengte);

  function BMIcalc($gewicht, $lengte){
    $lengte         = $lengte / 100;
    $bmi            = $gewicht / ($lengte * $lengte);
    $bmi            = round($bmi,1);
    switch ($bmi){
      case $bmi < 18.5:
        $text = "je hebt ondergewicht";
        break;
      case $bmi < 25:
        $text = "je hebt een normaal gewicht";
        break;
      case $bmi < 27:
        $text = "je hebt licht overgewicht";
        break;
      case $bmi < 30:
        $text = "je hebt licht overgewicht";
        break;
      case $bmi < 40:
        $text = "je hebt licht overgewicht";
        break;
      default:
        $text = "je hebt morbide obesitas";
        break;
    }
    echo "Uw BMI is: $bmi" . " - " . "$text";
  }
?>
