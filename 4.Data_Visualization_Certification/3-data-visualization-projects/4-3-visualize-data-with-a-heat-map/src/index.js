import * as d3 from "d3";
import d3Tip from "d3-tip";
import { format } from "d3-format";
import { colorbrewer } from "./constants";

const buildVisualization = (dataset) => {
  console.log(dataset);

  var section = d3.select("body").append("section");
  var fontSize = 16;
  var width = 5 * Math.ceil(dataset.monthlyVariance.length / 12);
  var height = 33 * 12;
  var padding = {
    left: 9 * fontSize,
    right: 9 * fontSize,
    top: 1 * fontSize,
    bottom: 8 * fontSize
  };

  const svg = d3
    .select("body")
    .append("svg")
    .attr("width", width + padding.left + padding.right)
    .attr("height", height + padding.top + padding.bottom);

  var yScale = d3
    .scaleBand()
    // months
    .domain([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])
    .rangeRound([0, height], 0, 0);
  var yAxis = d3
    .axisLeft()
    .scale(yScale)
    /*
      User Story #11: My heat map should have multiple tick labels on the
      y-axis with the full month name.
    */
    .tickValues(yScale.domain())
    .tickFormat(function (month) {
      var date = new Date(0);
      date.setUTCMonth(month);
      return d3.utcFormat("%B")(date);
    })
    .tickSize(10, 1);
  svg
    .append("g")
    .classed("y-axis", true)
    /*
      User Story #4: My heat map should have a y-axis with a corresponding
      id="y-axis".
    */
    .attr("id", "y-axis")
    .attr("transform", "translate(" + padding.left + "," + padding.top + ")")
    .call(yAxis)
    .append("text")
    .text("Months")
    .style("text-anchor", "middle")
    .attr(
      "transform",
      "translate(" + -7 * fontSize + "," + height / 2 + ") + rotate(-90)"
    );

  var xScale = d3
    .scaleBand()
    .domain(
      dataset.monthlyVariance.map(function (val) {
        return val.year;
      })
    )
    .rangeRound([0, width], 0, 0);
  var xAxis = d3
    .axisBottom()
    .scale(xScale)
    /*
      User Story #12: My heat map should have multiple tick labels on the
      x-axis with the years between 1754 and 2015.
    */
    .tickValues(
      xScale.domain().filter(function (year) {
        // set ticks to years divisible by 10
        return year % 10 === 0;
      })
    )
    .tickFormat(function (year) {
      var date = new Date(0);
      date.setUTCFullYear(year);
      return d3.utcFormat("%Y")(date);
    })
    .tickSize(10, 1);
  svg
    .append("g")
    .classed("x-axis", true)
    /*
      User Story #3: My heat map should have an x-axis with a corresponding
      id="x-axis".
    */
    .attr("id", "x-axis")
    .attr(
      "transform",
      "translate(" + padding.left + "," + (height + padding.top) + ")"
    )
    .call(xAxis)
    .append("text")
    .text("Years")
    .style("text-anchor", "middle")
    .attr("transform", "translate(" + width / 2 + "," + 3 * fontSize + ")");

  /*
    User Story #6: There should be at least 4 different fill colors used
    for the cells.
  */
  var legendColors = colorbrewer.RdYlBu[11].reverse();
  var variance = dataset.monthlyVariance.map(function (val) {
    return val.variance;
  });
  var minTemp = dataset.baseTemperature + Math.min.apply(null, variance);
  var maxTemp = dataset.baseTemperature + Math.max.apply(null, variance);
  var legendThreshold = d3
    .scaleThreshold()
    .domain(
      (function (min, max, count) {
        var array = [];
        var step = (max - min) / count;
        var base = min;
        for (var i = 1; i < count; i++) {
          array.push(base + i * step);
        }
        return array;
      })(minTemp, maxTemp, legendColors.length)
    )
    .range(legendColors);

  var tip = d3Tip()
    .attr("class", "d3-tip")
    .attr("id", "tooltip")
    .html(function (d) {
      return d;
    })
    .direction("n")
    .offset([-10, 0]);

  svg.call(tip);

  svg
    .append("g")
    .classed("map", true)
    .attr("transform", "translate(" + padding.left + "," + padding.top + ")")
    .selectAll("rect")
    .data(dataset.monthlyVariance)
    .enter()
    .append("rect")
    /*
      User Story #5: My heat map should have rect elements with a class="cell"
      that represent the data.
    */

    .attr("class", "cell")
    /*
      User Story #7: Each cell will have the properties data-month, data-year,
      data-temp containing their corresponding month, year, and temperature values.
    */
    .attr("data-month", function (d) {
      /*
        User Story #8: The data-month, data-year of each cell should be within
        the range of the data.
      */
      return d.month - 1;
    })
    .attr("data-year", function (d) {
      return d.year;
    })
    .attr("data-temp", function (d) {
      return dataset.baseTemperature + d.variance;
    })
    .attr("x", function (d) {
      /*
        User Story #10: My heat map should have cells that align with the
        corresponding year on the x-axis.
      */
      return xScale(d.year);
    })
    .attr("y", function (d) {
      /*
        User Story #9: My heat map should have cells that align with the
        corresponding month on the y-axis.
      */
      return yScale(d.month - 1);
    })
    .attr("width", xScale.bandwidth())
    .attr("height", yScale.bandwidth())
    .style("fill", function (d) {
      return legendThreshold(dataset.baseTemperature + d.variance);
    })
    /*
      User Story #16: I can mouse over an area and see a tooltip with a
      corresponding id="tooltip" which displays more information about the area.
    */
    .on("mouseover", function (event, d) {
      var date = new Date(d.year, d.month);
      var str =
        "<span class='date'>" +
        d3.timeFormat("%Y - %B")(date) +
        "</span>" +
        "<br />" +
        "<span class='temperature'>" +
        format(".1f")(dataset.baseTemperature + d.variance) +
        "&#8451;" +
        "</span>" +
        "<br />" +
        "<span class='variance'>" +
        format("+.1f")(d.variance) +
        "&#8451;" +
        "</span>";
      /*
        User Story #17: My tooltip should have a data-year property that
        corresponds to the data-year of the active area.
      */
      tip.attr("data-year", d.year);
      tip.show(str, this);
    })
    .on("mouseout", tip.hide);

  /*
    User Story #2: My heat map should have a description with a corresponding
    id="description".
  */
  var heading = section.append("heading");
  heading
    .append("h1")
    .attr("id", "title")
    .text("Monthly Global Land-Surface Temperature");
  heading
    .append("h3")
    .attr("id", "description")
    .html(
      `${dataset.monthlyVariance[0].year}
        - ${dataset.monthlyVariance[dataset.monthlyVariance.length - 1].year}
        : base temperature
        ${dataset.baseTemperature}
        &#8451;`
    );

  var legendWidth = 400;
  var legendHeight = 300 / legendColors.length;

  var legendX = d3
    .scaleLinear()
    .domain([minTemp, maxTemp])
    .range([0, legendWidth]);

  var legendXAxis = d3
    .axisBottom()
    .scale(legendX)
    .tickSize(10, 0)
    .tickValues(legendThreshold.domain())
    .tickFormat(d3.format(".1f"));

  var legend = svg
    .append("g")
    .classed("legend", true)
    /*
      User Story #13: My heat map should have a legend with a corresponding
      id="legend".
    */
    .attr("id", "legend")
    .attr(
      "transform",
      "translate(" +
        padding.left +
        "," +
        (padding.top + height + padding.bottom - 2 * legendHeight) +
        ")"
    );

  /*
    User Story #14: My legend should contain rect elements.
  */
  legend
    .append("g")
    .selectAll("rect")
    .data(
      /*
        User Story #15: The rect elements in the legend should use at least
        4 different fill colors.
      */
      legendThreshold.range().map(function (color) {
        var d = legendThreshold.invertExtent(color);
        if (d[0] === null) {
          d[0] = legendX.domain()[0];
        }
        if (d[1] === null) {
          d[1] = legendX.domain()[1];
        }
        return d;
      })
    )
    .enter()
    .append("rect")
    .style("fill", function (d) {
      return legendThreshold(d[0]);
    })
    .attr({
      x: function (d) {
        return legendX(d[0]);
      },
      y: 0,
      width: function (d) {
        return legendX(d[1]) - legendX(d[0]);
      },
      height: legendHeight
    });

  legend
    .append("g")
    .attr("transform", "translate(" + 0 + "," + legendHeight + ")")
    .call(legendXAxis);
};

const buildVisualizationWithFccDataset = async () => {
  /*
    Here is the dataset you will need to complete this project:
    https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json

    example: https://codepen.io/freeCodeCamp/full/JEXgeY
  */
  const response = await fetch(
    "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/global-temperature.json"
  );

  let fccDataset = await response.json();
  buildVisualization(fccDataset);
};

buildVisualizationWithFccDataset();
