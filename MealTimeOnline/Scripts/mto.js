/*
*   Created by AK4TRL ‎2016-‎11‎-‎29‎ 00:50:50
*/
function addLoginAttr() {
    if ($('#nav-left')[0].innerText == "Log in") {
        $('#nav-left').attr("data-toggle", "modal");
        $('#nav-left').attr("data-target", "#loginModal");
    }
}
function addAboutAttr() {
    if ($('#about')[0].innerText == "ABOUT") {
        $('#about').attr("data-toggle", "modal");
        $('#about').attr("data-target", "#myModal");
    }
}