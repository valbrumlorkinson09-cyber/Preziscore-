/* ==========================
   PREZISCORE 🇭🇹
   API.JS - PART 1
========================== */

const API_KEY = "9ffcd813946b3dd7151dbf7b1702a4b4";
const BASE_URL = "https://v3.football.api-sports.io";

const headers = {
    "x-apisports-key": API_KEY
};

// Dat jodi a
function getToday() {
    const d = new Date();
    return d.toISOString().split("T")[0];
}

// Rechèch API
async function apiRequest(endpoint) {

    try {

        const res = await fetch(BASE_URL + endpoint, {
            headers: headers
        });

        const data = await res.json();

        return data.response;

    } catch (err) {

        console.error("API Error:", err);
        return [];

    }

}
/* ==========================
   MATCH LIVE
========================== */

async function getLiveMatches(){

    const matches = await apiRequest("/fixtures?live=all");

    console.log("🔴 Match Live:", matches);

    return matches;

}


/* ==========================
   MATCH JOUNEN AN
========================== */

async function getTodayMatches(){

    const today = getToday();

    const matches = await apiRequest(
        `/fixtures?date=${today}`
    );

    console.log("📅 Match Jodi a:", matches);

    return matches;

}


/* ==========================
   AFFICHE MATCH LIVE
========================== */

async function displayLiveMatches(){

    const container = document.querySelector(".cards");

    if(!container) return;


    const matches = await getLiveMatches();


    if(matches.length === 0){

        container.innerHTML = `
        <div class="match-card">
            <h3>Pa gen match LIVE kounye a ⚽</h3>
        </div>
        `;

        return;
    }


    container.innerHTML = "";


    matches.slice(0,5).forEach(match=>{


        const home = match.teams.home.name;

        const away = match.teams.away.name;

        const homeLogo = match.teams.home.logo;

        const awayLogo = match.teams.away.logo;


        const scoreHome = match.goals.home ?? 0;

        const scoreAway = match.goals.away ?? 0;


        container.innerHTML += `

        <div class="match-card live">

            <div class="league">

                🔴 LIVE

                <span class="minute">
                ${match.fixture.status.elapsed || 0}'
                </span>

            </div>


            <div class="teams">

                <div>

                    <img src="${homeLogo}">

                    <p>${home}</p>

                </div>


                <h2>
                ${scoreHome} - ${scoreAway}
                </h2>


                <div>

                    <img src="${awayLogo}">

                    <p>${away}</p>

                </div>

            </div>

        </div>

        `;


    });

}
/* ==========================
   KLASMAN LIG
========================== */

async function getStandings(leagueId, season){

    const data = await apiRequest(
        `/standings?league=${leagueId}&season=${season}`
    );

    console.log("🏆 Klasman:", data);

    return data;

}


/* ==========================
   ENFO EKIP
========================== */

async function getTeam(teamId){

    const data = await apiRequest(
        `/teams?id=${teamId}`
    );

    console.log("👕 Ekip:", data);

    return data;

}


/* ==========================
   LIS JWÈ
========================== */

async function getPlayers(teamId, season){

    const data = await apiRequest(
        `/players?team=${teamId}&season=${season}`
    );

    console.log("👤 Jwè yo:", data);

    return data;

}


/* ==========================
   DETAIL MATCH
========================== */

async function getFixtureDetails(fixtureId){

    const data = await apiRequest(
        `/fixtures?id=${fixtureId}`
    );

    console.log("📊 Detay match:", data);

    return data;

}


/* ==========================
   AUTO REFRESH LIVE
========================== */

function startLiveRefresh(){

    displayLiveMatches();

    setInterval(()=>{

        displayLiveMatches();

    },60000);

}


/* ==========================
   DEMARA API
========================== */

document.addEventListener("DOMContentLoaded",()=>{

    startLiveRefresh();

});
