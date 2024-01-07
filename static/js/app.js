async function fetchData(file) {
    const response = await fetch(file);
    if (!response.ok) {
        console.error('Failed to load file:', file);
        return [];
    }
    return await response.json();
}

function sortDataDescending(data, property) {
    return data.sort((a, b) => b[property] - a[property]);
}

function createChart(data, canvasId, label, chartVariable) {
    const ctx = document.getElementById(canvasId).getContext('2d');

    // Clear previous chart if it exists
    if (window[chartVariable]) {
        window[chartVariable].destroy();
    }

    let dataProperty = '';
    let chartColor = '';
    if (label === 'Overs' || label === 'Moneyline Wins' || label === 'Covers') {
        dataProperty = label === 'Overs' ? "Overs hit" : (label === 'Moneyline Wins' ? "Moneyline wins" : "Spreads covered");
        chartColor = 'rgba(0, 128, 0, 0.2)'; // Greenish hue
    } else {
        dataProperty = label === 'Unders' ? "Unders hit" : (label === 'Moneyline Losses' ? "Moneyline losses" : "Spreads not covered");
        chartColor = 'rgba(255, 0, 0, 0.2)'; // Reddish hue
    }

    let sortedData = sortDataDescending(data, dataProperty);

    window[chartVariable] = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: sortedData.map(item => item.Team),
            datasets: [{
                label: label,
                data: sortedData.map(item => item[dataProperty]),
                backgroundColor: chartColor,
                borderColor: chartColor.replace('0.2', '1'), // More solid color for border
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

document.getElementById('data-dropdown').addEventListener('change', async function() {
    // Hide all canvases initially
    document.getElementById('oversChart').style.display = 'none';
    document.getElementById('undersChart').style.display = 'none';
    document.getElementById('coversChart').style.display = 'none';
    document.getElementById('nonCoversChart').style.display = 'none';
    document.getElementById('moneylineWinsChart').style.display = 'none';
    document.getElementById('moneylineLossesChart').style.display = 'none';

    const selectedOption = this.value;

    if (selectedOption === 'over_under') {
        const oversData = await fetchData('json-files/modified_overs_df.json');
        document.getElementById('oversChart').style.display = 'block';
        createChart(oversData, 'oversChart', 'Overs', 'oversChartInstance');

        const undersData = await fetchData('json-files/modified_unders_df.json');
        document.getElementById('undersChart').style.display = 'block';
        createChart(undersData, 'undersChart', 'Unders', 'undersChartInstance');
    } else if (selectedOption === 'spreads') {
        const coversData = await fetchData('json-files/modified_covers.json');
        document.getElementById('coversChart').style.display = 'block';
        createChart(coversData, 'coversChart', 'Covers', 'coversChartInstance');

        const nonCoversData = await fetchData('json-files/modified_non_covers.json');
        document.getElementById('nonCoversChart').style.display = 'block';
        createChart(nonCoversData, 'nonCoversChart', 'Non-Covers', 'nonCoversChartInstance');
    } else if (selectedOption === 'moneylines') {
        const moneylineWinsData = await fetchData('json-files/modified_moneyline_wins.json');
        document.getElementById('moneylineWinsChart').style.display = 'block';
        createChart(moneylineWinsData, 'moneylineWinsChart', 'Moneyline Wins', 'moneylineWinsChartInstance');

        const moneylineLossesData = await fetchData('json-files/modified_moneyline_losses.json');
        document.getElementById('moneylineLossesChart').style.display = 'block';
        createChart(moneylineLossesData, 'moneylineLossesChart', 'Moneyline Losses', 'moneylineLossesChartInstance');
    }
});
