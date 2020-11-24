console.log("background script working");
var t = null;
// var l = null;
let a = {};

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

function rtntime() {
    var myDate = new Date();
    var hours = myDate.getHours();
    var minutes = myDate.getMinutes();
    if (hours < 10) { hours = "0" + hours };
    if (minutes < 10) { minutes = "0" + minutes; }
    var timetrigger = (hours + ":" + minutes);
    return timetrigger;
}


chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.message === "tickbtnclicked") {
            a = request.object;
            console.log(a);

            if (t != null) {
                clearTimeout(t);
                t = null;
            }
            // if (l != null) {
            //     clearTimeout(l);
            //     l = null;
            // }

            checker();
            // if(a.checkbox=="true"){
            //     leavetime=a.time
            //     leaver();
            // }

        }
        if (request.message === "stopbtnclicked") {
            console.log("Stop btn clicked")
        }
    }

);


function checker() {
    if (a.time == rtntime()) {
        location.replace(a.link);
    } else {
        t = setTimeout(checker, 60000);
    }
}

// function leaver() {
//     try {
//         if (document.querySelector(".gV3Svc>span").nextElementSibling.innerText < 10) {
//             console.log("i did it");
//             //leave btn
//             try {
//                 window.document.querySelector(".FbBiwc").click();
//             } catch {
//                 console.log("ERROR");
//             }

//         }
//     } catch {
//         console.log("Error");
//     }
    
// }