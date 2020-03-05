var data = [
   {
      "name": "Linus Rogge",
      "title": "FE Dev / UI/UX Design",
      "website": "https://linuscodes.com",
      "mail": "moin@linuscodes.com",
      "city": "Hamburg"
   },
   {
      "name": "Karsten Buckstegge",
      "title": "Illustration & Development",
      "website": "https://karstenbuckstegge.de",
      "city": "Hamburg"
   },
   {
      "name": "Hannes Diercks",
      "title": "JavaScript architect",
      "website": "https://xiphe.ne",
      "city": "Hamburg"
   },
   {
      "name": "Justin Schueler",
      "title": "Digital Designer",
      "website": "https://jschueler.com",
      "mail": "hej@jschueler.com",
      "city": "Leipzig"
   }
];

function jsonToTable(json, classes) {
   var cols = Object.keys(json[0]);
   var headingCols = cols.slice(0, -1);
   var headerRow = "";
   var bodyRows = "";

   classes = classes || '';

   function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
   }
   
   headingCols.map(function(headingCols) {
      headerRow += "<th>" + capitalizeFirstLetter(headingCols) + "</th>";
   });

   json.map(function(row) {
      bodyRows += "<tr>";

      cols.slice(0, -1).map(function(colName) {
         if(row[colName] == undefined) {
            bodyRows += "<td></td>";
         } else {
            bodyRows += "<td>" + row[colName] + "</td>";
         }
      })

      bodyRows += "</tr>";
   });

   return '<table class="' + classes + '"><thead><tr>' + headerRow + '</tr></thead><tbody>' + bodyRows + '</tbody></table>';
}

document.getElementById('table').innerHTML = jsonToTable(data, 'table');