let StartFunc = () => {
    const select = document.getElementById("nativeSelect");

    if (!select.value) {
        alert("No option selected");
    } else {
        window.location.href = `/V1/${select.value}/Protected/pages/Crud/crateOnly.html`;
        // alert("Selected value: " + select.value);
        // console.log(select.value);
    };
};

export { StartFunc };