function groupData(data, groupField) {
    // Группировка по полю groupField 
    return d3.group(data, row => row[groupField]);
}

function processGroup(groupRows, yField) {
    // Обрабатывает сгруппированную группу строк groupRows в зависимости от значения yField 
    // Возвращает числовое значение
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
    /*
    Преобразовывает изначальные данные в массив
    [{<Поле по оси X>: <Сгрупированное значение по оси Y>}]
    */
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
    // Находит размах данных по оси Y
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

    // очищаем svg перед построением 
    svg.selectAll("*").remove();

    // определяем минимальное и максимальное значение по оси OY 
    let yRange = getDataRange(graphData);
    let min = yRange[0] * 0.95;
    let max = yRange[1] * 1.05;

    // Вычисляем длины осей в пикселях
    let xAxisLen = width - 2 * marginX;
    let yAxisLen = height - 2 * marginY;

    // Получаем все значения по оси X
    let xLabels = Object.keys(graphData);

    // определяем шкалы для осей 
    let scaleX = d3.scaleBand()
        .domain(xLabels)
        .range([0, xAxisLen])
        .padding(0.2);
    let scaleY = d3.scaleLinear()
        .domain([min, max])
        .range([yAxisLen, 0]);

    // создаем оси 
    let axisX = d3.axisBottom(scaleX); // горизонтальная
    let axisY = d3.axisLeft(scaleY); // вертикальная 

    // отображаем ось OX, устанавливаем подписи оси ОX и угол их наклона 
    svg.append("g")
        .attr("transform", `translate(${marginX}, ${height - marginY})`)
        .call(axisX)
        .attr("class", "x-axis")
        .selectAll("text")
        .style("text-anchor", "end")
        .attr("dx", "-.8em")
        .attr("dy", ".15em")
        .attr("transform", "rotate(-45)");
    
    // отображаем ось OY 
    svg.append("g")
        .attr("transform", `translate(${marginX}, ${marginY})`)
        .attr("class", "y-axis")
        .call(axisY);
    
    // отображаем данные в виде диаграммы 
    let segmentWidth = scaleX.bandwidth()
    svg.selectAll(".dot")
        .data(xLabels)
        .enter()
        .append("rect")
        .attr("x", function(xLabel) { return scaleX(xLabel) })
        .attr("width", segmentWidth)
        .attr("y", function (xLabel) { return scaleY(graphData[xLabel]) })
        .attr("height", function (xLabel) { return yAxisLen - scaleY(graphData[xLabel]); })
        .attr("transform", `translate(${marginX}, ${marginY})`)
        .attr("fill", "red");
}