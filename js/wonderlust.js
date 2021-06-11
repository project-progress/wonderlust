let input = document.getElementById("inp")
const getTemp = async ()=> {let response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=d7085e16a4f596f2a4c2257f0348ae50`);
const data = await  response.json()
let temp = Math.floor(data.main.temp - 273);
let wind = data.wind.speed;
let today = new Date();
let year = today.getFullYear()
let month = today.getMonth() +1
let day = today.getDate()
let days =['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
let weekday = days[today.getDay()];
let time = `${today.getHours()}:${today.getMinutes()}`

let timemoji =String.fromCodePoint(0x0001F555)
let cloudEmoji =String.fromCodePoint(0x00026C5)
let sunEmoji =String.fromCodePoint(0x0001F31E)
let windEmoji =String.fromCodePoint(0x0001F4A8)
let lightRainEmoji =String.fromCodePoint(0x0002614)
let calendarEmoji =String.fromCodePoint(0x0001F4C6)
let weekEmoji =String.fromCodePoint(0x0002705)
let cEmoji =String.fromCodePoint(0x00002103)
let skyEmoji =String.fromCodePoint(0x00001F30E)

document.getElementById("weatherInfo").innerHTML = "";
document.getElementById("description").innerHTML = "";


let paragraph1 =document.createElement("p");
let inner1 = document.createTextNode(`${day}/${month}/${year} ${calendarEmoji} `);
paragraph1.appendChild(inner1)

let paragraph2 =document.createElement("p");
let inner2 = document.createTextNode(`${time} ${timemoji}  `);
paragraph2.appendChild(inner2)

let paragraph3 =document.createElement("p");
let inner3 = document.createTextNode(`${weekday} ${weekEmoji}`);
paragraph3.appendChild(inner3);

let paragraph4 =document.createElement("p");
let inner4 = document.createTextNode(`tempreture: ${temp} ${cEmoji}`);
paragraph4.appendChild(inner4);

let paragraph5 =document.createElement("p");
let inner5 = document.createTextNode(`wind speed: ${wind} ${windEmoji}`);
paragraph5.appendChild(inner5);

let paragraph6 =document.createElement("p");
let inner6 = document.createTextNode(`Condition: ${data.weather[0].description} ${skyEmoji}`);
paragraph6.appendChild(inner6);




let desc = document.getElementById("description")

let p1 =document.createElement("p");
let pI =document.createTextNode(input.value);
p1.appendChild(pI);
p1.setAttribute("class","blue");
desc.appendChild(p1);

let p2 = document.createElement("p");
let pI2 = document.createTextNode("CURRENT WEATHER")
p2.appendChild(pI2);
desc.appendChild(p2);




if(data.weather[0].description =="clear sky"){
        let p3 = document.createElement("p");
        let pI3 = document.createTextNode(sunEmoji)
        p3.appendChild(pI3);
        desc.appendChild(p3);
}else if(data.weather[0].description == "light rain"){
        let p3 = document.createElement("p");
        let pI3 = document.createTextNode(lightRainEmoji)
        p3.appendChild(pI3);
        desc.appendChild(p3);

}else if(data.weather[0].description == "rain"){
        let p3 = document.createElement("p");
        let pI3 = document.createTextNode(lightRainEmoji)
        p3.appendChild(pI3);
        desc.appendChild(p3);
}else{
        let p3 = document.createElement("p");
        let pI3 = document.createTextNode(cloudEmoji)
        p3.appendChild(pI3);
        desc.appendChild(p3);}

        
let box = document.getElementById("weatherInfo");
box.appendChild(paragraph1)
box.appendChild(paragraph2)
box.appendChild(paragraph3)
box.appendChild(paragraph4)
box.appendChild(paragraph5)
box.appendChild(paragraph6)
box.setAttribute("class","weather")

}; 
