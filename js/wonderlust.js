let input = document.getElementById("inp")


const getTemp = async ()=> {let response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=d7085e16a4f596f2a4c2257f0348ae50`);
const data = await  response.json()
let temp = Math.floor(data.main.temp - 273);
let wind = data.wind.speed;
let today = new Date();
let days =['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
let weekday = days[today.getDay()];

let cloudEmoji =String.fromCodePoint(0x00026C5)
let sunEmoji =String.fromCodePoint(0x0001F31E)
let windEmoji =String.fromCodePoint(0x0001F4A8)
let lightRainEmoji =String.fromCodePoint(0x0002614)
let weekEmoji =String.fromCodePoint(0x0002705)
let cEmoji =String.fromCodePoint(0x00002103)
let skyEmoji =String.fromCodePoint(0x00001F30E)

document.getElementById("weatherInfo").innerHTML = "";
document.getElementById("description").innerHTML = "";



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
let inner6 = document.createTextNode(`Cond: ${data.weather[0].description} ${skyEmoji}`);
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
box.appendChild(paragraph3)
box.appendChild(paragraph4)
box.appendChild(paragraph5)
box.appendChild(paragraph6)
box.setAttribute("class","weather")


}; 


//second function

const getPlace = async ()=> {let response = await fetch(`https://api.foursquare.com/v2/venues/explore?near=${input.value}&client_id=TLP4ASNT2YWSZC1DZGH3PH2DLTJQGNJW1PDLLPEPTN3KPIUR&client_secret=QQMECI5FCKTKD0IEKUHPIDJX5AP4ZEBQ2AOLB5U5B1U5RKRH
&v=20210611`);
const data = await  response.json()

let whiteStarEmoji =String.fromCodePoint(0x0002606)
let blackStarEmoji =String.fromCodePoint(0x0002605)




let name1 =data.response.groups[0].items[0].venue.name
let address1 =data.response.groups[0].items[0].venue.location.address
let city1 =data.response.groups[0].items[0].venue.location.city
let country1 = data.response.groups[0].items[0].venue.location.country


let name2 =data.response.groups[0].items[1].venue.name
let address2 =data.response.groups[0].items[1].venue.location.address
let city2 =data.response.groups[0].items[0].venue.location.city
let country2 = data.response.groups[0].items[1].venue.location.country


let name3 =data.response.groups[0].items[2].venue.name
let address3 =data.response.groups[0].items[2].venue.location.address
let city3 =data.response.groups[0].items[0].venue.location.city
let country3 = data.response.groups[0].items[2].venue.location.country


document.getElementById("topPlace1").innerHTML = "";
document.getElementById("topPlace2").innerHTML = "";
document.getElementById("topPlace3").innerHTML = "";
document.getElementById("Top").innerHTML = "";

document.getElementById("topPlace1").addEventListener("click", (e)=>bookmark({name:name1,address1,city1,country1}) )
document.getElementById("topPlace2").addEventListener("click", (e)=>bookmark({name:name2,address2,city2,country2}) )
document.getElementById("topPlace3").addEventListener("click", (e)=>bookmark({name:name3,address3,city3,country3}) )



let Top=document.createElement("span")
let TopInner =document.createTextNode("TOP  ATTRACTIONS")
Top.appendChild(TopInner)
Top.setAttribute("class","TopAttraction")
let TopAtractions= document.getElementById("Top")
TopAtractions.appendChild(Top)


let firstPlace = document.createElement("h4")
let firstPlaceInner =document.createTextNode(`${name1} `)
firstPlace.appendChild(firstPlaceInner)
let firstStar =document.createElement("span")
let firstStarInner =document.createTextNode(whiteStarEmoji)
firstStar.appendChild(firstStarInner)
let Address1 =document.createElement("p")
let Address1Inner =document.createTextNode("Address:")
Address1.appendChild(Address1Inner)
let firstPlaceAddres= document.createElement("p")
let firstPlaceAddressInner =document.createTextNode(address1)
firstPlaceAddres.appendChild(firstPlaceAddressInner)
let firstPlaceCity =document.createElement("p")
let firstPlaceCityInner = document.createTextNode(city1)
firstPlaceCity.appendChild(firstPlaceCityInner)
let firstPlaceCountry =document.createElement("p")
let firstPlaceCountryInner =document.createTextNode(country1)
firstPlaceCountry.appendChild(firstPlaceCountryInner )


let secondPlace = document.createElement("h4")
let secondPlaceInner =document.createTextNode(name2)
secondPlace.appendChild(secondPlaceInner)
let secondStar =document.createElement("span")
let secondStarInner =document.createTextNode(whiteStarEmoji)
secondStar.appendChild(secondStarInner)
let Address2 =document.createElement("p")
let Address2Inner =document.createTextNode("Address:")
Address2.appendChild(Address2Inner)
let secondPlaceAddres= document.createElement("p")
let secondPlaceAddressInner =document.createTextNode(address2)
secondPlaceAddres.appendChild(secondPlaceAddressInner)
let secondPlaceCity =document.createElement("p")
let secondPlaceCityInner = document.createTextNode(city2)
secondPlaceCity.appendChild(secondPlaceCityInner)
let secondPlaceCountry =document.createElement("p")
let secondPlaceCountryInner =document.createTextNode(country2)
secondPlaceCountry.appendChild(secondPlaceCountryInner )


let thirdPlace = document.createElement("h4")
let thirdPlaceInner =document.createTextNode(name3)
thirdPlace.appendChild(thirdPlaceInner)
let thirdStar =document.createElement("span")
let thirdStarInner =document.createTextNode(whiteStarEmoji)
thirdStar.appendChild(thirdStarInner)
let Address3 =document.createElement("p")
let Address3Inner =document.createTextNode("Address:")
Address3.appendChild(Address3Inner)
let thirdPlaceAddres= document.createElement("p")
let thirdPlaceAddressInner =document.createTextNode(address3)
thirdPlaceAddres.appendChild(thirdPlaceAddressInner)
let thirdPlaceCity =document.createElement("p")
let thirdPlaceCityInner = document.createTextNode(city3)
thirdPlaceCity.appendChild(thirdPlaceCityInner)
let thirdPlaceCountry =document.createElement("p")
let thirdPlaceCountryInner =document.createTextNode(country3)
thirdPlaceCountry.appendChild(thirdPlaceCountryInner )


let placeBox1 =document.getElementById("topPlace1")
placeBox1.appendChild(firstStar)
firstStar.setAttribute("id","span")
placeBox1.appendChild(firstPlace)
placeBox1.appendChild(Address1)
placeBox1.appendChild(firstPlaceAddres)
placeBox1.appendChild(firstPlaceCity)
placeBox1.appendChild(firstPlaceCountry)
placeBox1.setAttribute("class","places")

let placeBox2 =document.getElementById("topPlace2")
placeBox2.appendChild(secondStar)
placeBox2.appendChild(secondPlace)
placeBox2.appendChild(Address2)
placeBox2.appendChild(secondPlaceAddres)
placeBox2.appendChild(secondPlaceCity)
placeBox2.appendChild(secondPlaceCountry)
placeBox2.setAttribute("class","places")


let placeBox3 =document.getElementById("topPlace3")
placeBox3.appendChild(thirdStar)
placeBox3.appendChild(thirdPlace)
placeBox3.appendChild(Address3)
placeBox3.appendChild(thirdPlaceAddres)
placeBox3.appendChild(thirdPlaceCity)
placeBox3.appendChild(thirdPlaceCountry)
placeBox3.setAttribute("class","places")



}; 


function bookmark(data){ 


        const myFavorite=localStorage.getItem("My favorite")

        if (!myFavorite){
                localStorage.setItem("My favorite",JSON.stringify([data]))
                return}
        const temp =JSON.parse(myFavorite)
        const names = temp.map(e=>e.name)
       
        if ( names.includes(
                data.name
        ))return

        localStorage.setItem("My favorite",JSON.stringify([...temp,data]))

        
}


