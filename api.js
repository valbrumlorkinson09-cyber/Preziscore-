/* ==========================
   ⚽ PREZISCORE 🇭🇹
   SPORTSC0RE GLOBAL API
========================== */


const SPORT_API = 
"https://sportscore.com/api/widget";


console.log("⚽ PREZISCORE SPORTSC0RE API AKTIF");



/* ==========================
   API REQUEST GLOBAL
========================== */

async function apiRequest(url){

try{

const response = await fetch(url);

if(!response.ok){
throw new Error("API ERROR: " + response.status);
}


const data = await response.json();


console.log("SPORTSCORE DATA:", data);


return data;


}catch(error){

console.log("SPORTSCORE ERROR:", error);

return {
success:false,
error:error.message
};

}

}





/* ==========================
   🔴 MATCH LIVE
========================== */

async function getLiveMatches(){

const data = await apiRequest(
SPORT_API + "/matches/?sport=football&limit=20"
);


return data;

}





/* ==========================
   ⚽ MATCH DETAY
========================== */

async function getMatchDetails(slug){

return await apiRequest(
SPORT_API +
"/match/?sport=football&slug=" +
slug
);

}





/* ==========================
   🏆 KLASMAN
========================== */

async function getStandings(league){

return await apiRequest(
SPORT_API +
"/standings/?sport=football&slug=" +
league
);

}





/* ==========================
   👑 TOP JWÈ
========================== */

async function getTopScorers(league){

return await apiRequest(
SPORT_API +
"/topscorers/?sport=football&slug=" +
league +
"&limit=20&stat=goals"
);

}





/* ==========================
   👤 JWÈ DETAY
========================== */

async function getPlayer(player){

return await apiRequest(
SPORT_API +
"/player/?sport=football&slug=" +
player
);

}
