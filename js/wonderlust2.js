let input = document.getElementById("inp")
const getTemp = async ()=> {let response = await fetch(`https://api.foursquare.com/v2/venues/search?ll=40.7,-74&client_id=TLP4ASNT2YWSZC1DZGH3PH2DLTJQGNJW1PDLLPEPTN3KPIUR

&client_secret=SBR2MUEBXN5U4RKETTTIWPEJCVGB3RGODTOLNFRZ2LMYUVFQ`);
const data = await  response.json()
console.log(data)
}; 
