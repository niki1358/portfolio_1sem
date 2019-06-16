window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log('sidenVises');
    document.querySelector("#mere").addEventListener("click", readMore);
    document.querySelector("#burger_knap").addEventListener("click", openMenu);

}

function openMenu() {
    console.log("openMenu");
    document.querySelector("#burger_knap").classList.toggle("open");
    document.querySelector("#menu").classList.toggle("toggle_menu");

    document.querySelector("#forside_link").addEventListener("mouseup", toggleMenu);
    document.querySelector("#om_mig_link").addEventListener("mouseup", toggleMenu);
    document.querySelector("#web_link").addEventListener("mouseup", toggleMenu);
    document.querySelector("#animation_link").addEventListener("mouseup", toggleMenu);
    document.querySelector("#indhold_link").addEventListener("mouseup", toggleMenu);
    document.querySelector("#ux_link").addEventListener("mouseup", toggleMenu);
}

function toggleMenu() {
    console.log("toggleMenu");
    document.querySelector("#burger_knap").classList.toggle("open");
    document.querySelector("#menu").classList.toggle("toggle_menu");
}

function readMore() {
    console.log('readMore:');
    document.querySelector("#box").classList.toggle("stor");
    document.querySelector("#box").classList.toggle("lille");
}

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
        document.getElementById("opKnap").style.display = "block";
    } else {
        document.getElementById("opKnap").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
