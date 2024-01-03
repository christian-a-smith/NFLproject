// Assuming the JSON data is loaded into a variable named `data`
// You need to load your JSON data here
const data = /* your JSON data */;

// Function to populate the dropdown
function populateDropdown() {
    const dropdown = document.getElementById('data-dropdown');
    // Assuming data.names contains the list of items to populate
    data.names.forEach(name => {
        const option = document.createElement('option');
        option.value = name;
        option.textContent = name;
        dropdown.appendChild(option);
    });
}

// Function to show information
function showInfo(event) {
    const selectedName = event.target.value;
    const infoBox = document.getElementById('info-box');
    // Find the corresponding data and display it
    // Modify this part to suit how your JSON data is structured
    const selectedItem = data.items.find(item => item.name === selectedName);
    if (selectedItem) {
        infoBox.textContent = `Details: ${JSON.stringify(selectedItem)}`;
    }
}

// Event listener for dropdown change
document.getElementById('data-dropdown').addEventListener('change', showInfo);

// Initial population of dropdown
populateDropdown();