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
// START
// =======================

document.addEventListener(
"DOMContentLoaded",
loadMatches
);
