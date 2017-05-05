$(document).foundation()

$(document).ready(function () {
    $('div.hidden').fadeIn(2000).removeClass('hidden');
});

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
function myFunction(x) {
    x.classList.toggle("change");
}
