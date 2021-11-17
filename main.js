var icon = document.getElementById("icon");
var icon_img = document.querySelector("#icon img");

icon.onclick = function() {
    document.body.classList.toggle("dark_theme")

    if (document.body.classList.contains("dark_theme")) {
        icon_img.src = "./image/sun.png";
    } else {
        icon_img.src = "./image/moon.png";
    }
}