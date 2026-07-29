
// ===============================
// PREZISCORE API CONFIG
// ===============================


const API_KEY = "3"; // TheSportsDB free key

const API_URL = `https://www.thesportsdb.com/api/v1/json/${API_KEY}`;



// ===============================
// CHERCHE EKIP
// ===============================

async function searchTeam(teamName){

try{

const response = await fetch(
`${API_URL}/searchteams.php?t=${teamName}`
);


const data = await response.json();


console.log("Ekip:", data);


return data;


}catch(error){

console.error("API Error:", error);

}

}



// ===============================
// MATCH EKIP
// ===============================

async function getTeamMatches(teamId){

try{

const response = await fetch(
`${API_URL}/eventslast.php?id=${teamId}`
);


const data = await response.json();


console.log("Match:", data);


return data;


}catch(error){

console.error("API Error:", error);

}

}



// ===============================
// CHERCHE LIG
// ===============================

async function searchLeague(leagueName){

try{

const response = await fetch(
`${API_URL}/search_all_leagues.php?s=Soccer&c=${leagueName}`
);


const data = await response.json();


console.log("Lig:", data);


return data;


}catch(error){

console.error("API Error:", error);

}

}
// ===============================
// PREZISCORE EVENTS
// ===============================

async function getEvents(teamId){

try{

const response = await fetch(
`${API_URL}/eventslast.php?id=${teamId}`
);

const data = await response.json();

console.log("Events:", data);

return data;


}catch(error){

console.error("Events Error:", error);

}

}
