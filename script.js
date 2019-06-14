window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log('sidenVises');
    document.querySelector("#mere").addEventListener("click", readMore);
}

function readMore() {
    console.log('readMore:');
    document.querySelector("#box").classList.toggle("stor");
    document.querySelector("#box").classList.toggle("lille");
}
