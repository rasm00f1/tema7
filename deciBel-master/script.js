window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log(sidenVises);

    document.querySelector(".closebtn").addEventListener("click", closeNav);
    document.getElementById("openbtn").addEventListener("click", openNav);


    startHoverLogo ();
}

function openNav() {
    document.getElementById("myNav").style.width = "60%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

function startHoverLogo () {
    console.log("startHoverLogo");

    document.querySelector(".sh").addEventListener("mouseover", shiftLogo);
}

function shiftLogo() {
    console.log ("shiftLogo");

    /* fjerne og sæt eventlistenere */
    document.querySelector(".farve").addEventListener("mouseout", shiftLogoHover);
    document.querySelector(".sh").removeEventListener("mouseover", shiftLogo);

    document.querySelector(".farve").classList.remove("shownone");
    document.querySelector(".sh").classList.add("shownone");
}

function shiftLogoHover () {
    console.log ("shiftLogoHover");

    /* fjerne og sæt eventlistenere */
    document.querySelector(".farve").removeEventListener("mouseout", shiftLogoHover);
    document.querySelector(".sh").addEventListener("mouseover", shiftLogo);

    document.querySelector(".farve").classList.add("shownone");
    document.querySelector(".sh").classList.remove("shownone");
}
