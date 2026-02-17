let StartFunc = ({ inResponseAsJson }) => {
    const items = inResponseAsJson;
    const selectElement = document.getElementById('nativeSelect');

    items.forEach(itemText => {
        const option = document.createElement('option');
        option.value = itemText;
        option.textContent = itemText;
        selectElement.appendChild(option);
    });

};

export { StartFunc };