
// ===============================
// PREZISCORE API SYSTEM
// ===============================


// Fonksyon prensipal pou voye demann API

async function apiRequest(endpoint){


try{


const response = await fetch(
`${API_CONFIG.BASE_URL}${endpoint}`,
{

method:"GET",

headers:{

"x-apisports-key": API_CONFIG.API_KEY

}

}

);



const data = await response.json();


console.log("API DATA:", data);


return data;



}catch(error){


console.error("API ERROR:", error);


return null;


}


}




// ===============================
// MATCH JODI A
// ===============================


async function getTodayMatches(){


return await apiRequest(

"/fixtures?date=" + new Date().toISOString().split("T")[0]

);


}





// ===============================
// MATCH LIVE
// ===============================


async function getLiveMatches(){


return await apiRequest(

"/fixtures?live=all"

);


}





// ===============================
// DETAY MATCH
// ===============================


async function getMatchDetails(id){


return await apiRequest(

"/fixtures?id=" + id

);


}





// ===============================
// LIG YO
// ===============================


async function getLeagues(){


return await apiRequest(

"/leagues"

);


}





// ===============================
// KLASMAN
// ===============================


async function getStandings(league,season){


return await apiRequest(

`/standings?league=${league}&season=${season}`

);


}





// ===============================
// JWÈ
// ===============================


async function getPlayers(team,season){


return await apiRequest(

`/players?team=${team}&season=${season}`

);


}





console.log("🔥 PreziScore API System Ready");
