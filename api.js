/* ==========================
   PREZISCORE 🇭🇹
   RAPID API GLOBAL
========================== */


const RAPID_API_KEY = "fe08bb1ed4mshd1a647c90e2c802p172617jsn1f453b26a050";


const RAPID_HOST =
"free-api-live-football-data.p.rapidapi.com";


const RAPID_URL =
"https://free-api-live-football-data.p.rapidapi.com";


const headers = {

"x-rapidapi-host": RAPID_HOST,

"x-rapidapi-key": RAPID_API_KEY,

"Content-Type":"application/json"

};



console.log(
"⚽ PreziScore nouvo API pare"
);
/* ==========================
   PREZISCORE 🇭🇹
   LIVE MATCH
========================== */


async function getLiveMatches(){


try{


const response = await fetch(

RAPID_URL + "/football-current-live",

{

method:"GET",

headers:headers

}

);



const data = await response.json();



console.log(
"🔴 LIVE MATCH:",
data
);



return data;



}catch(error){


console.log(
"Erreur Live API:",
error
);


return null;


}

}
document.addEventListener(
"DOMContentLoaded",
()=>{


getLiveMatches();


});
