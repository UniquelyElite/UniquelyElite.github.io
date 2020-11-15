function heresTheActualPage(){
    window.location = "data/index.html"
}

function ohNo() {
    clearTimeout(theCountHasBegun);
    window.location = "data/youFuckedUp/welp.html"
}

let theCountHasBegun = setTimeout(heresTheActualPage, 2000);