var toggled = false;
const button = document.getElementById("menu-toggle");

function toggleSidebar() {
    console.log(toggled);
    if (toggled) {
        button.innerHTML = "&lt;"
        toggled = false;
    } else if (!toggled) {
        button.innerHTML = "&gt;"
        toggled = true;
    }
}