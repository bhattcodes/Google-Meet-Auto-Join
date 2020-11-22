console.log("background script working");
xp = location.href;
if (xp.includes("meet.google.com")) {
    setTimeout(joinmeeting, 2000);
}

function joinmeeting() {
    if (document.readyState == "complete") {
        try {
            // Mic Button
            window.document.querySelectorAll(".DPvwYc.JnDFsc.dMzo5")[0].click();
            // Webcam Button
            window.document.querySelectorAll(".DPvwYc.JnDFsc.dMzo5")[1].click();
        } catch (err) {
            console.log("EROOR");
        }
        setTimeout(joinmeet, 5500);
    }
}
function joinmeet() {
    try {
        window.document.querySelector(".NPEfkd").click();
    } catch (error) {
        console.log("ERROR");
    }
}

