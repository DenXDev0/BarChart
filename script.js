const url = "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json";
const svg = d3.select("svg");
const w = +svg.attr("width");
const h = +svg.attr("height");
const padding = 60;

const tooltip = d3.select("#tooltip");

d3.json(url).then(data => {
  const dataset = data.data;
  const xScale = d3.scaleTime()
    .domain([new Date(dataset[0][0]), new Date(dataset[dataset.length - 1][0])])
    .range([padding, w - padding]);

  const yScale = d3.scaleLinear()
    .domain([0, d3.max(dataset, d => d[1])])
    .range([h - padding, padding]);

  svg.append("defs").append("linearGradient")
    .attr("id", "barGradient")
    .attr("x1", "0%")
    .attr("x2", "0%")
    .attr("y1", "0%")
    .attr("y2", "100%")
    .selectAll("stop")
    .data([{ offset: "0%", color: "#60a5fa" }, { offset: "100%", color: "#2563eb" }])
    .enter().append("stop")
    .attr("offset", d => d.offset)
    .attr("stop-color", d => d.color);

  svg.append("g")
    .attr("id", "x-axis")
    .attr("transform", `translate(0, ${h - padding})`)
    .call(d3.axisBottom(xScale));

  svg.append("g")
    .attr("id", "y-axis")
    .attr("transform", `translate(${padding}, 0)`)
    .call(d3.axisLeft(yScale));

  // Axis Labels
  svg.append("text")
    .attr("class", "axis-label")
    .attr("x", w / 2)
    .attr("y", h - 20)
    .attr("text-anchor", "middle")
    .text("Year");

  svg.append("text")
    .attr("class", "axis-label")
    .attr("transform", "rotate(-90)")
    .attr("x", -h / 2)
    .attr("y", 20)
    .attr("text-anchor", "middle")
    .text("GDP in Billion USD");

  const barWidth = (w - 2 * padding) / dataset.length;

  svg.selectAll(".bar")
    .data(dataset)
    .enter().append("rect")
    .attr("class", "bar")
    .attr("data-date", d => d[0])
    .attr("data-gdp", d => d[1])
    .attr("x", d => xScale(new Date(d[0])))
    .attr("y", h - padding)
    .attr("width", barWidth)
    .attr("height", 0)
    .on("mouseover", (event, d) => tooltip
      .style("opacity", 1)
      .style("transform", "translateY(-5px)")
      .style("left", event.pageX + 15 + "px")
      .style("top", event.pageY - 50 + "px")
      .attr("data-date", d[0])
      .html(`<strong>${new Date(d[0]).toLocaleDateString("en-US", { year: "numeric", month: "short" })}</strong><br>GDP: $${d[1].toLocaleString()} Billion`))
    .on("mouseout", () => tooltip.style("opacity", 0).style("transform", "translateY(0)"))
    .transition()
    .duration(1000)
    .attr("y", d => yScale(d[1]))
    .attr("height", d => h - padding - yScale(d[1]));
});
