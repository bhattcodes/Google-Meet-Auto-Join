backgroundcheck();
document.getElementById("checkbox").disabled =true;
function backgroundcheck() {
    if (localStorage.getItem("checkbox")=="true"){
        document.getElementById("checkbox").checked=true;
    }else{
        document.getElementById("checkbox").checked=false;
    }

    let backgroundwork = localStorage.getItem("backgroundwork");
    if (backgroundwork == "yes") {
        document.querySelector(".linkinput").disabled = true;
        document.querySelector(".timeinput").disabled = true;
        document.querySelector(".tickbtn").disabled = true;
        document.querySelector(".linkinput").value = localStorage.getItem("link");
        document.querySelector(".timeinput").value = localStorage.getItem("time");
    } else if (backgroundwork == "no") {
        document.querySelector(".linkinput").value = "";
        document.querySelector(".timeinput").value = "";
        document.querySelector(".linkinput").disabled = false;
        document.querySelector(".timeinput").disabled = false;
    }
}

tickbtn = document.querySelector(".tickbtn");
tickbtn.addEventListener('click',()=>{
    let obj={
        "time": document.getElementById("timeinput").value,
        "link": document.getElementById("linkinput").value,
        "checkbox": document.getElementById("checkbox").checked
    }
    if(obj.link!=""){
        chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
            var activeTab = tabs[0];
            chrome.tabs.sendMessage(activeTab.id, { "message": "tickbtnclicked", "object": obj });
        });
        localStorage.setItem("backgroundwork","yes");
        localStorage.setItem("time",obj.time);
        localStorage.setItem("link",obj.link);

    }else{
        document.querySelector(".linkinput").style.border = "2px solid red";
        document.querySelector(".timeinput").style.border = "2px solid red";
        setTimeout(() => {
            document.querySelector(".linkinput").style.border = "2px solid black";
            document.querySelector(".timeinput").style.border = "2px solid black";
        }, 2000);
    }
    backgroundcheck();
})

document.querySelector(".stopbtn").addEventListener("click", () => {

    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
        var activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, { "message": "stopbtnclicked" });
    });
    localStorage.clear();
    localStorage.setItem("backgroundwork","no");
    backgroundcheck();

})

document.querySelector("#checkbox").addEventListener("click", () => {
    // console.log(document.getElementById("checkbox").checked);
    localStorage.setItem("checkbox",document.getElementById("checkbox").checked);
})