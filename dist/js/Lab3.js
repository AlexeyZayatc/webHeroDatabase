function drawDiagramm() {
    let table = getOriginalTable();
    let ox = document.getElementById("ox1");
    if (!ox.checked)
        ox = document.getElementById("ox2");
    ox = ox.value;
    let oy = document.getElementById("oy1");
    if (!oy.checked)
        oy = document.getElementById("oy2");
    oy = oy.value;

    //range for oy, ox
    let oxRange = [];
    let oyRange = [];
    let oxCounts = {};
    for (let i = 0; i < table.length; ++i) {
        if (!oxRange.includes(table[i][ox]))
            oxRange.push(table[i][ox]);
        if (!(table[i][ox] in oxCounts)) {
            oxCounts[table[i][ox]] = {};
        }
        if (!(table[i][oy] in oxCounts[table[i][ox]])) {
            oxCounts[table[i][ox]][table[i][oy]] = 1;
        }
        else {
            oxCounts[table[i][ox]][table[i][oy]] += 1;
        }
        if (!oyRange.includes(table[i][oy]))
            oyRange.push(table[i][oy]);
    }
    oyRange.sort();
    let min = oxCounts[table[0][ox]][table[0][oy]];
    let max = oxCounts[table[0][ox]][table[0][oy]];
    for (let xKey of Object.keys(oxCounts)) {
        for (let yKey of Object.keys(oxCounts[xKey])) {
            if (oxCounts[xKey][yKey] > max)
                max = oxCounts[xKey][yKey];
            if (oxCounts[xKey][yKey] < min)
                min = oxCounts[xKey][yKey];
        }
    }
    let marginX = 50;
    let marginY = 50;
    let height = 400;
    let width = 1200;
    let svg = d3.select("svg")
        .attr("height", height)
        .attr("width", width)
        .style("border", "red");
    svg.selectAll("*").remove();

    let xAxisLen = width - 2 * marginX;
    let yAxisLen = height - 2 * marginY;
    min *= 0.95;
    max *= 1.05;
    let xLabels = Object.keys(oxCounts);
    let scaleX = d3.scaleBand()
        .domain(xLabels)
        .range([0, xAxisLen])
        .padding(0.2);

    let scaleY = d3.scaleLinear()
        .domain([min, max])
        .range([yAxisLen, 0]);

    let axisX = d3.axisBottom(scaleX); // горизонтальная
    let axisY = d3.axisLeft(scaleY);// вертикальная 

    svg.append("g")
        .attr("transform", `translate(${marginX}, ${height - marginY})`)
        .attr("class", "x-axis")
        .call(axisX);
    svg.append("g")
        .attr("transform", `translate(${marginX}, ${marginY})`)
        .attr("class", "y-axis")
        .call(axisY);
    let colors = [];
    let step = 255 / oyRange.length;
    for (let i = 0; i < oyRange.length; i++) {
        colors.push("rgb(" + (i + 1) * step + ',' + (i + 1) * step + ',' + (i + 1) * step + ')');
    }
    let legendLabels = oxRange;;
    let legendSize = legendLabels.length;
    let segmentWidth = scaleX.bandwidth();
    let legendWidth = segmentWidth / legendSize;



}