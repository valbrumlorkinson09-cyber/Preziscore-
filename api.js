/* ==========================
   ⚽ PREZISCORE 🇭🇹
   GLOBAL API.JS
   RAPID API FOOTBALL
   PARTIE 1
========================== */


/* ==========================
   CONFIGURATION API
========================== */


const RAPID_API_KEY = "METE_NOUVO_KEY_LA";


const RAPID_HOST =
"free-api-live-football-data.p.rapidapi.com";


const RAPID_URL =
"https://free-api-live-football-data.p.rapidapi.com";





/* ==========================
   HEADERS
========================== */


const apiHeaders = {

"x-rapidapi-host": RAPID_HOST,

"x-rapidapi-key": RAPID_API_KEY,

"Content-Type":"application/json"

};





/* ==========================
   API STATUS
========================== */


console.log(
"⚽ PREZISCORE API GLOBAL AKTIVE"
);





/* ==========================
   FUNCTION API GENERALE
========================== */


async function apiRequest(endpoint){


try{


const response = await fetch(

RAPID_URL + endpoint,

{

method:"GET",

headers:apiHeaders

}

);



const data =
await response.json();



console.log(
"API RESPONSE:",
data
);



return data;



}catch(error){


console.log(
"API ERROR:",
error
);



return null;


}


}
