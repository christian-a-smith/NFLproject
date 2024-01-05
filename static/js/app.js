document.addEventListener('DOMContentLoaded', function() {
    const dropdown = d3.select("#data-dropdown");

    dropdown.on("change", function(event) {
        const selectedValue = this.value;
        updateChart(selectedValue);
    });

    function updateChart(selectedValue) {
        d3.select("#chart").html(""); // Clear previous charts

        if (selectedValue === "spreads") {
            d3.json("database-files/cleaned_spreads.json").then(data => {
                const teamStats = processData(data);
                createChart(teamStats, "covered", "Chart: Times Team Covered the Spread");
                createChart(teamStats, "notCovered", "Chart: Times Team Did Not Cover the Spread");
            });
        }
    }

    function processData(data) {
        let teamStats = {};

        data.forEach(d => {
            const homeTeam = d['home_team'];
            const awayTeam = d['away_team'];
            let [spreadTeam, spreadValue] = d['spread'].split(' -');
            spreadValue = parseFloat(spreadValue);

            // Initialize the team stats if they don't exist
            [homeTeam, awayTeam].forEach(team => {
                if (!teamStats[team]) {
                    teamStats[team] = { team: team, covered: 0, notCovered: 0 };
                }
            });

            // Determine if the spread team covered and increment the counts
            const isSpreadCovered = (spreadTeam === homeTeam && spreadValue < 0) || (spreadTeam === awayTeam && spreadValue > 0);
            if (spreadTeam === homeTeam || spreadTeam === awayTeam) {
                if (isSpreadCovered) {
                    teamStats[spreadTeam].covered += 1;
                } else {
                    teamStats[spreadTeam].notCovered += 1;
                }
            }
        });

        return Object.values(teamStats);
    }

    function createChart(data, key, title) {
        // Chart creation logic (as previously provided)
        // Sort data in descending order of the count
        data.sort((a, b) => b[key] - a[key]);

        const margin = {top: 20, right: 30, bottom: 100, left: 40};
        const width = 1000 - margin.left - margin.right;
        const height = 500 - margin.top - margin.bottom;

        const x = d3.scaleBand()
            .range([0, width])
            .padding(0.1);
        const y = d3.scaleLinear()
            .range([height, 0]);

        const svg = d3.select("#chart").append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        // Append a title to the chart
        svg.append("text")
            .attr("x", (width / 2))             
            .attr("y", 0 - (margin.top / 2))
            .attr("text-anchor", "middle")  
            .style("font-size", "16px") 
            .style("text-decoration", "underline")  
            .text(title);

        x.domain(data.map(d => d.team));
        y.domain([0, d3.max(data, d => d[key])]);

        svg.selectAll(".bar")
            .data(data)
            .enter().append("rect")
            .attr("class", "bar")
            .attr("x", d => x(d.team))
            .attr("width", x.bandwidth())
            .attr("y", d => y(d[key]))
            .attr("height", d => height - y(d[key]));

        svg.append("g")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x))
            .selectAll("text")  
                .style("text-anchor", "end")
                .attr("dx", "-.8em")
                .attr("dy", ".15em")
                .attr("transform", "rotate(-65)");

        svg.append("g")
            .call(d3.axisLeft(y));
    }

    updateChart("moneylines");
});
