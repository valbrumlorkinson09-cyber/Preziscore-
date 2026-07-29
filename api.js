const API_KEY = "3"; // TheSportsDB public key

const BASE_URL = "https://www.thesportsdb.com/api/v1/json/";

async function loadMatches() {

    const matchBox = document.getElementById("match-api");

    if(!matchBox){
        return;
    }

    matchBox.innerHTML = "⏳ Chajman match yo...";

    try {

        const response = await fetch(
            `${BASE_URL}${API_KEY}/eventsnextleague.php?id=4328`
        );

        const data = await response.json();

        matchBox.innerHTML = "";

        if(!data.events){

            matchBox.innerHTML = "⚽ Pa gen match disponib";

            return;
        }


        data.events.forEach(match => {

            matchBox.innerHTML += `

            <div class="match-card">

                <h3>${match.strLeague}</h3>

                <p>
                ${match.strHomeTeam}
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


    } catch(error){

        console.log(error);

        matchBox.innerHTML =
        "❌ Erè koneksyon API";

    }

}


loadMatches();
