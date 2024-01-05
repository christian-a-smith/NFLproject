function processLineDelimitedJSON(response) {
    return response.text().then(text => {
        return text.trim().split('\n').map(JSON.parse);
    });
}

function loadAndCreateChart(jsonFile, chartId, valueKey) {
    fetch(jsonFile)
        .then(processLineDelimitedJSON)
        .then(data => {
            // ... rest of your code to create the chart ...
            // Use 'data' which is now an array of JSON objects
        })
        .catch(error => {
            console.error('Error loading or parsing JSON:', error);
        });
}

// Load and create the charts
loadAndCreateChart('python-files/overs_df.json', 'oversChart', 'Overs hit');
loadAndCreateChart('python-files/unders_df.json', 'undersChart', 'Unders hit');
