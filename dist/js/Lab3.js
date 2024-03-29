function groupData(data, groupField) {
    return d3.group(data, row => row[groupField]);
}

function processGroup(groupRows, yField) {
    if (yField == "minHP") {
        let minHP = d3.min(groupRows.map((row) => row.maxHp));
        return minHP;
    } else if (yField == "maxArmor") {
        let maxArmor = d3.max(groupRows.map((row) => row.maxArmor));
        return maxArmor;
    } else if (yField == "avgMana") {
        let maxArmor = d3.mean(groupRows.map((row) => row.maxMana));
        return maxArmor;
    }
}

function getGraphData(xField, yField) {
    let rows = getOriginalTable();
    let groupedData = groupData(rows, xField);
    let result = {};
    for (let group of groupedData) {
        let groupField = group[0];
        let groupRows = group[1];
        result[groupField] = processGroup(groupRows, yField);
    }
    return result
}

function getDataRange(graphData) {
    let values = Object.values(graphData);
    let dataMin = d3.min(values);
    let dataMax = d3.max(values);
    return [dataMin, dataMax];
}


function drawDiagramm() {
    let form = document.forms["graph"];
    let ox = form.ox.value;
    let oy = form.oy.value;

    let graphData = getGraphData(ox, oy);

    let marginX = 50;
    let marginY = 75;
    let height = 400;
    let width = 1200;
    let svg = d3.select("svg")
        .attr("height", height)
        .attr("width", width)
        .style("border", "red");

    svg.selectAll("*").remove();

    let yRange = getDataRange(graphData);
    let min = yRange[0] * 0.95;
    let max = yRange[1] * 1.05;

    let xAxisLen = width - 2 * marginX;
    let yAxisLen = height - 2 * marginY;

    let xLabels = Object.keys(graphData);

    let scaleX = d3.scaleBand()
        .domain(xLabels)
        .range([0, xAxisLen])
        .padding(0.2);
    let scaleY = d3.scaleLinear()
        .domain([min, max])
        .range([yAxisLen, 0]);


    let axisX = d3.axisBottom(scaleX);
    let axisY = d3.axisLeft(scaleY);


    svg.append("g")
        .attr("transform", `translate(${marginX}, ${height - marginY})`)
        .call(axisX)
        .attr("class", "x-axis")
        .selectAll("text")
        .style("text-anchor", "end")
        .attr("dx", "-.8em")
        .attr("dy", ".15em")
        .attr("transform", "rotate(-45)");

    svg.append("g")
        .attr("transform", `translate(${marginX}, ${marginY})`)
        .attr("class", "y-axis")
        .call(axisY);

    d3.selectAll("g.x-axis g.tick")
        .append("line")
        .classed("grid-line", true)
        .attr("x1", 0)
        .attr("y1", 0)
        .attr("x2", 0)
        .attr("y2", - (yAxisLen));
    d3.selectAll("g.y-axis g.tick")
        .append("line")
        .classed("grid-line", true)
        .attr("x1", 0)
        .attr("y1", 0)
        .attr("x2", xAxisLen)
        .attr("y2", 0);
    let segmentWidth = scaleX.bandwidth()
    svg.selectAll(".dot")
        .data(xLabels)
        .enter()
        .append("rect")
        .attr("x", function (xLabel) { return scaleX(xLabel) })
        .attr("width", segmentWidth)
        .attr("y", function (xLabel) { return scaleY(graphData[xLabel]) })
        .attr("height", function (xLabel) { return yAxisLen - scaleY(graphData[xLabel]); })
        .attr("transform", `translate(${marginX}, ${marginY})`)
        .attr("fill", "red");
}