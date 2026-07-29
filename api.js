const API_KEY = "3";
const BASE_URL = "https://www.thesportsdb.com/api/v1/json/";


// =======================
// GET NEXT MATCHES
// =======================

async function getMatches(leagueID = "4328") {

    try {

        const response = await fetch(
            `${BASE_URL}${API_KEY}/eventsnextleague.php?id=${leagueID}`
        );

        const data = await response.json();

        return data.events || [];

    } catch(error){

        console.log("Match API Error:", error);

        return [];
    }
}



// =======================
// DISPLAY MATCHES
// =======================

async function loadMatches(){

    const matchBox = document.getElementById("match-api");

    if(!matchBox) return;


    matchBox.innerHTML = "⏳ Chajman match yo...";


    const matches = await getMatches();


    if(matches.length === 0){

        matchBox.innerHTML =
        "⚽ Pa gen match disponib";

        return;
    }


    matchBox.innerHTML = "";


    matches.forEach(match => {


        matchBox.innerHTML += `

        <div class="match-card">

            <h3>
            ${match.strLeague || "Football"}
            </h3>

            <p>
            ⚽ ${match.strHomeTeam}
            🆚
            ${match.strAwayTeam}
            </p>


            <p>
            📅 ${match.dateEvent}
            ⏰ ${match.strTime || "--"}
            </p>

        </div>

        `;


    });


}

// =======================
// LIVE MATCHES
// =======================

async function loadLiveMatches(){

    const liveBox = document.getElementById("live-container");

    if(!liveBox) return;


    liveBox.innerHTML = "🔄 Ap chèche match LIVE yo...";


    try {

        // TheSportsDB pa bay tout live score gratis
        // n ap itilize eventsday la pou tès

        const today = new Date()
        .toISOString()
        .split("T")[0];


        const response = await fetch(
        `${BASE_URL}${API_KEY}/eventsday.php?d=${today}&s=Soccer`
        );


        const data = await response.json();


        liveBox.innerHTML = "";


        if(!data.events){

            liveBox.innerHTML = `
            <div class="match-card">
            ⚽ Pa gen match LIVE kounye a
            </div>
            `;

            return;
        }


        data.events.forEach(match=>{


            liveBox.innerHTML += `

            <div class="match-card">

            <h3>🔴 LIVE</h3>

            <p>
            ${match.strHomeTeam}
            🆚
            ${match.strAwayTeam}
            </p>

            <p>
            ⚽ ${match.intHomeScore ?? 0}
            -
            ${match.intAwayScore ?? 0}
            </p>

            </div>

            `;


        });


    }catch(error){

        console.log(error);

        liveBox.innerHTML =
        "❌ Erè chajman LIVE";

    }

}



// =======================
// STATS
// =======================

function loadStats(){

const statsBox = document.getElementById("stats-container");

if(!statsBox) return;


statsBox.innerHTML = `

<div class="match-card">

<p>
⚽ Gòl : --
</p>

<p>
🎯 Tir : --
</p>

<p>
🚩 Kònè : --
</p>

<p>
🟨 Kat jòn : --
</p>

</div>

`;

    }

// =======================
// START
// =======================

document.addEventListener(
"DOMContentLoaded",
()=>{

loadMatches();

loadLiveMatches();

loadStats();

}
);
