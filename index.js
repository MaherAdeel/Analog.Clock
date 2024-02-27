// how we calculate that our mint hour or sceond kitni moved karni chaye .12hours=360 deg
// 1 hour =360/12 =30
// h hour =30h 
// =====================mints calculation
/*
hum ny uper dehka agar 1 hour me 30 deg move kar rahi hai  to
60mint =30 to 1mint =30/60=1/2
m mint=1/2 m */

// ===================second calculation
/* 60mint =360deg
1min=360/60=6deg
m mint =6 m  */   

let hours =document.getElementById("hours");
let mint =document.getElementById("mint");
let sec =document.getElementById("sec");

function displayTime(){
    let date=new Date();
    let hh=date.getHours();
    let mm=date.getMinutes();
    let ss=date.getSeconds();

    let hRotation = 30*hh+mm/2;
    let mRotation = 6*mm;
    let secRotation = 6*ss;

    hours.style.transform=`rotate(${hRotation}deg)`;
    mint.style.transform=`rotate(${mRotation}deg)`;
    sec.style.transform=`rotate(${secRotation}deg)`;


}
setInterval(displayTime,1000);