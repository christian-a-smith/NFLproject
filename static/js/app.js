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

    // Sorting data in descending order based on the count
    let dataProperty = label === 'Overs' ? "Overs hit" : "Unders hit";
    let sortedData = sortDataDescending(data, dataProperty);

    window[chartVariable] = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: sortedData.map(item => item.Team),
            datasets: [{
                label: label,
                data: sortedData.map(item => item[dataProperty]),
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
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
    const selectedOption = this.value;
    if (selectedOption === 'over_under') {
        // Handle Overs Chart
        const oversData = await fetchData('json-files/modified_overs_df.json');
        document.getElementById('oversChart').style.display = 'block';
        createChart(oversData, 'oversChart', 'Overs', 'oversChartInstance');

        // Handle Unders Chart
        const undersData = await fetchData('json-files/modified_unders_df.json');
        document.getElementById('undersChart').style.display = 'block';
        createChart(undersData, 'undersChart', 'Unders', 'undersChartInstance');
    } else {
        // Hide the canvases if another option is selected
        document.getElementById('oversChart').style.display = 'none';
        document.getElementById('undersChart').style.display = 'none';
    }
});
