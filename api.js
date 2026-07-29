/* ==========================
   ⚽ PREZISCORE 🇭🇹
   GLOBAL API.JS
   RAPID API FOOTBALL
   PARTIE 1
========================== */


/* ==========================
   CONFIGURATION API
========================== */


const RAPID_API_KEY = "fe08bb1ed4mshd1a647c90e2c802p172617jsn1f453b26a050";


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



const data = await response.json();

console.log("API DATA:", data);

return data;

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

    const result = await apiRequest(
        "/football-current-live"
    );

    console.log("LIVE RESULTAT KONPLÈ:", result);

    return result;

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
