// Name
function e_name(a) {
    const elements = document.querySelectorAll(".e_name");
    elements.forEach((e) => {
        e.innerHTML = a.value;
    })
}
