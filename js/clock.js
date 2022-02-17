let userName = prompt("Adiniz: ")

let name = document.querySelector("#myName")
let clock = document.querySelector("#myClock")

name.innerHTML = userName

const weekday = ["Pazar","Pazartesi","Sali","Carsamba","Persembe","Cuma","Cumartesi"];

const today = new Date();
let h = today.getHours();
let m = today.getMinutes();
let s = today.getSeconds();
let day = weekday[today.getDay()];
if (m < 10) 
    {
        m = "0" + m
    };
if (s < 10) 
{
    s = "0" + s
};

clock.innerHTML =  h + ":" + m + ":" + s + " " + day;
