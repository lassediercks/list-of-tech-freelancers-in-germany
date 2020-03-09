function jsonToTable(json, classes) {
  var cols = Object.keys(json[0]);
  var headingCols = cols.slice(0, -1);
  var headerRow = "";
  var bodyRows = "";

  classes = classes || "";

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  headingCols.map(function(headingCols) {
    headerRow += "<th>" + capitalizeFirstLetter(headingCols) + "</th>";
  });

  json.map(function(row) {
    bodyRows += "<tr>";

    cols.slice(0, -1).map(function(colName) {
      if (row[colName] == undefined) {
        bodyRows += "<td></td>";
      } else {
        bodyRows += "<td>" + row[colName] + "</td>";
      }
    });

    bodyRows += "</tr>";
  });

  return (
    '<table class="' +
    classes +
    '"><thead><tr>' +
    headerRow +
    "</tr></thead><tbody>" +
    bodyRows +
    "</tbody></table>"
  );
}

document.getElementById("table").innerHTML = jsonToTable(freelancers, "table");
