function calculate() {
  let area = Number(document.querySelector("#one").value);
  if (
    (document.querySelector("#pt").value == "lbi" ||
      document.querySelector("#pt").value == "lbu" ||
      document.querySelector("#pt").value == "eth") &&
    document.querySelector("#sf").value == "int"
  ) {
    document.getElementById("answer3").value = "Not Applicable (N/A)";
    document.getElementById("answer1").value = "Not Applicable (N/A)";
    document.getElementById("answer2").value = "Not Applicable (N/A)";
    if(document.querySelector("#pm").value == "JT"){document.getElementById("answer4").value = "Not Applicable (N/A)";}
  } else if (
    document.querySelector("#pt").value == "wt" &&
    document.querySelector("#sf").value == "int"
  ) {
    document.getElementById("answer3").value = "ST3";
    if(document.querySelector("#pm").value == "JT"){document.getElementById("answer4").value = "Primer - Penguard E20 \nIntermediate - Not Applicable (N/A) \nFinish Coat - ";}
    document.getElementById("answer1").value =
      "Primer - Polyamide cured epoxy zinc phosphate primer DFT 75 micron \nIntermediate - Not Applicable (N/A) \nFinish Coat - Solvent less HB epoxy liner 2 coats each of 250 micron (total 575 micron)";
    var primer1 = parseFloat(area / (0.6 * 7.5)).toFixed(2);
    var finish1 = parseFloat(area / (0.6 * 2)).toFixed(2);
    document.getElementById(
      "answer2"
    ).value = `Primer - ${primer1}\nIntermediate - 0\nFinish Coat - ${finish1}`;

  } else if (
    document.querySelector("#pt").value != "wt" &&
    document.querySelector("#sf").value == "int" &&
    document.querySelector("#ts").value == "is"
  ) {
    document.getElementById("answer3").value = "Not Applicable (N/A)";
    document.getElementById("answer1").value = "Not Applicable (N/A)";
    document.getElementById("answer2").value = "Not Applicable (N/A)";
    if(document.querySelector("#pm").value == "JT"){document.getElementById("answer4").value = "Not Applicable (N/A)";}
  } else if (
    document.querySelector("#pt").value != "wt" &&
    document.querySelector("#sf").value == "int" &&
    document.querySelector("#ts").value == "os"
  ) {
    document.getElementById("answer3").value = "ST3";
    document.getElementById("answer1").value =
      "Primer - Polyamide cured epoxy zinc phosphate primer DFT 75 micron \nIntermediate - Not Applicable (N/A) \nFinish Coat - Amine adduct cured HB epoxy liner, 2 coats each of DFT 125 micron";
    var primer2 = parseFloat(area / (0.6 * 7.5)).toFixed(2);
    var finish2 = parseFloat(area / (0.6 * 3.3)).toFixed(2);
    document.getElementById(
      "answer2"
    ).value = `Primer - ${primer2}\nIntermediate - 0\nFinish Coat - ${finish2}`;
    
  } else if (
    document.querySelector("#zone").value == "A" &&
    document.querySelector("#tt").value != "ug" &&
    document.querySelector("#sf").value == "ext" &&
    document.querySelector("#ts").value == "is"
  ) {
    document.getElementById("answer3").value = "ST2";
    document.getElementById("answer1").value =
      "Primer - HB epoxy mastic coating \nIntermediate - Self Priming HB epoxy Mastic Coating (P4) \nFinish Coat - Two pack acrylic Polyurethane";
    var primer3 = parseFloat(area / (0.6 * 6)).toFixed(2);
    var finish3 = parseFloat(area / (0.6 * 11)).toFixed(2);
    var imt3 = parseFloat(area / (0.6 * 6)).toFixed(2);
    document.getElementById(
      "answer2"
    ).value = `Primer - ${primer3}\nIntermediate - ${imt3}\nFinish Coat - ${finish3}`;
  } else if (
    document.querySelector("#zone").value == "A" &&
    document.querySelector("#tt").value != "ug" &&
    document.querySelector("#sf").value == "ext" &&
    document.querySelector("#ts").value == "os"
  ) {
    document.getElementById("answer3").value = "ST3";
    document.getElementById("answer1").value =
      "Primer - HB epoxy mastic coating \nIntermediate - Self Priming HB epoxy Mastic Coating (P4) \nFinish Coat - Two pack acrylic Polyurethane";
    var primer4 = parseFloat(area / (0.6 * 6)).toFixed(2);
    var finish4 = parseFloat(area / (0.6 * 11)).toFixed(2);
    var imt4 = parseFloat(area / (0.6 * 6)).toFixed(2);
    document.getElementById(
      "answer2"
    ).value = `Primer - ${primer4}\nIntermediate - ${imt4}\nFinish Coat - ${finish4}`;
  } else if (
    document.querySelector("#zone").value == "B" &&
    document.querySelector("#tt").value != "ug" &&
    document.querySelector("#sf").value == "ext" &&
    document.querySelector("#ts").value == "is"
  ) {
    document.getElementById("answer3").value = "ST2";
    document.getElementById("answer1").value =
      "Primer - Red Oxide Zinc Phosphate Primer \nIntermediate - Not Applicable (N/A) \nFinish Coat - Aluminium Finish Paint, two coats each of DFT 15-20 micron";
    var primer5 = parseFloat(area / (0.6 * 11)).toFixed(2);
    var finish5 = parseFloat(area / (0.6 * 13)).toFixed(2);
    document.getElementById(
      "answer2"
    ).value = `Primer - ${primer5}\nIntermediate - 0\nFinish Coat - ${finish5}`;
  } else if (
    document.querySelector("#zone").value == "B" &&
    document.querySelector("#tt").value != "ug" &&
    document.querySelector("#sf").value == "ext" &&
    document.querySelector("#ts").value == "os"
  ) {
    document.getElementById("answer3").value = "ST3";
    document.getElementById("answer1").value =
      "Primer - Red Oxide Zinc Phosphate Primer \nIntermediate - Not Applicable (N/A) \nFinish Coat - Aluminium Finish Paint, two coats each of DFT 15-20 micron";
    var primer6 = parseFloat(area / (0.6 * 11)).toFixed(2);
    var finish6 = parseFloat(area / (0.6 * 13)).toFixed(2);
    document.getElementById(
      "answer2"
    ).value = `Primer - ${primer6}\nIntermediate - 0\nFinish Coat - ${finish6}`;
  } else if (
    document.querySelector("#tt").value == "ug" &&
    document.querySelector("#sf").value == "ext"
  ) {
    document.getElementById("answer3").value = "SA 2.5";
    document.getElementById("answer1").value =
      "Primer - Inorganic zinc ethyl silicate \nIntermediate - Not Applicable (N/A) \nFinish Coat - Amine adduct cured HB epoxy liner, two coats each of DFT 125 micron";
    var primer7 = parseFloat(area / (0.6 * 8.5)).toFixed(2);
    var finish7 = parseFloat(area / (0.6 * 3.3)).toFixed(2);
    document.getElementById(
      "answer2"
    ).value = `Primer - ${primer7}\nIntermediate - 0\nFinish Coat - ${finish7}`;
  }
}
