import * as moment from './moment.min.js';
// import * as say from './say.js';
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


chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.message === "tickbtnclicked") {
            a = request.object;
            console.log(a);
             let y = a.time.split(":");
            let inputhours = parseInt(y[0].trim());
            let inputminutes = parseInt(y[1].trim());
        //     var myDate = new Date();
        //     var hours = myDate.getHours();
        //     var minutes = myDate.getMinutes();
        //     if (hours < 10) { hours = "0" + hours };
        //     if (minutes < 10) { minutes = "0" + minutes; }
        //     let hoursdiff = hours-inputhours;
        //     let minutesdiff = Maths.abs(minutes-inputminutes);
        // console.log(hoursdiff,minutesdiff);

        console.log(moment().startOf(inputhours).fromNow()); 



        }
        if (request.message === "stopbtnclicked") {
            console.log("Stop btn clicked")
        }
    }

);

function leaver() {
    try {
        if (document.querySelector(".gV3Svc>span").nextElementSibling.innerText < 10) {
            console.log("i did it");
            //leave btn
            try {
                window.document.querySelector(".FbBiwc").click();
            } catch {
                console.log("ERROR");
            }

        }
    } catch {
        console.log("Error");
    }

}