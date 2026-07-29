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
/* ==========================
   PREZISCORE 🇭🇹
   API GLOBAL
   PARTIE 2
========================== */


/* ==========================
   GET LIVE MATCH
========================== */


async function getLiveMatches(){


return await apiRequest(
"/football-current-live"
);


}





/* ==========================
   GET MATCH JODI A
========================== */


async function getTodayMatches(){


let date = new Date()

.toISOString()

.split("T")[0];



return await apiRequest(

"/football-fixtures?date=" + date

);


}





/* ==========================
   GET POPULAR LEAGUES
========================== */


async function getPopularLeagues(){


return await apiRequest(

"/football-popular-leagues"

);


}
/* ==========================
   PREZISCORE 🇭🇹
   API GLOBAL
   PARTIE 3
========================== */


/* ==========================
   GET STANDINGS
   KLASMAN
========================== */


async function getStandings(leagueId){


return await apiRequest(

"/football-standings?league=" + leagueId

);


}





/* ==========================
   GET TEAMS
========================== */


async function getTeams(){


return await apiRequest(

"/football-teams"

);


}





/* ==========================
   GET PLAYERS
   JWÈ
========================== */


async function getPlayers(){


return await apiRequest(

"/football-players"

);


}





/* ==========================
   GET STATISTICS
========================== */


async function getStatistics(matchId){


return await apiRequest(

"/football-statistics?match=" + matchId

);


}
