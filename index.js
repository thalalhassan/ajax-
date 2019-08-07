// XMLHttpRequest
// open
// onload
// send
// error handling

// strn=JSON.stringify(jsn)
// console.log(jsn);
// console.log(strn);
// document.write(strn);

let uname = document.forms["myForm"]["name"];
let uname1 = document.forms["myForm"]["name1"];
let rslt = document.getElementById("rslt");
let rslt1 = document.getElementById("rslt1");


var drop = document.getElementById("dropdown");


let ajaxReq = new XMLHttpRequest();
ajaxReq.open("GET", "https://LearnWebCode.github.io/json-example/animals-1.json");
ajaxReq.onload = function(e) {
    jsn = JSON.parse(ajaxReq.responseText);
    console.log(jsn)

    for (i = 0; i < jsn.length; i++) {
        var option = document.createElement("option");
        data = jsn[i].name;
        option.text = data;
        option.id = data;
        console.log(data);
        drop.appendChild(option);
    }
}
ajaxReq.send();

function getdata() {
    console.clear();
    // document.getElementById("")
    sname = jsn[drop.selectedIndex].name
    sspecies = jsn[drop.selectedIndex].species
    f = jsn[drop.selectedIndex].foods
    dislike = f.dislikes;
    likes = f.likes;


    console.log(sname, sspecies)
    console.log("Likes")
    for (i = 0; i < likes.length; i++) {
        console.log(likes[i])
    }
    console.log("Dislikes")
    for (i = 0; i < dislike.length; i++) {
        console.log(dislike[i])
    }
}
// uname.onkeyup = function() {
//     for (i = 0; i < jsn.length; i++) {
//         if (uname.value == jsn[i].name) {
//             rslt.innerHTML = " username already exist";
//             return false;
//         } else if (uname.value.toUpperCase() == jsn[i].name.toUpperCase()) {
//             rslt.innerHTML = " username already exist in diff case";
//             return false;
//         } else {
//             rslt.innerHTML = "";
//         }
//     }
// }