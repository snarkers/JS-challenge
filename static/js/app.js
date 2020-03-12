var tableData = data;
var tbody = d3.select("tbody");

//generate table
tableData.forEach(function (ufo) {

  var row = tbody.append("tr")
  Object.entries(ufo).forEach(function ([key, value]) {

    var cell = row.append("td");
    cell.text(value);
  });
});


// Filter by date
var button = d3.select("#filter-btn");
button.on("click", function () {

  tbody.html("");

  var date = d3.select("#datetime").property("value");
  var filterData = tableData.filter(e => e.datetime === date)
    filterData.forEach(e => {
      let row = d3.select("tbody").append("tr")
      row.append("td").text(e.datetime)
      row.append("td").text(e.city)
      row.append("td").text(e.state)
      row.append("td").text(e.country)
      row.append("td").text(e.shape)
      row.append("td").text(e.durationMinutes)
      row.append("td").text(e.comments)

    })
})


