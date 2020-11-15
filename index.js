
//If they fail to click the coin they are sent to the actual homepage
function heresTheActualPage(){
    window.location = "data/index.html"
}

//Triggers when they click the coin
function ohNo() {
    //Clears the timeout and sends them to the actual page
    clearTimeout(theCountHasBegun);
    window.location = "data/youFuckedUp/welp.html"
}

//Set the timeout for the time the user has to click the coin
let theCountHasBegun = setTimeout(heresTheActualPage, 2000);