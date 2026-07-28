
/* ==========================
   PREZISCORE 🇭🇹
   GLOBAL API.JS
   PARTIE 1
========================== */


/* ==========================
   API CONFIGURATION
========================== */


const API_KEY = "9ffcd813946b3dd7151dbf7b1702a4b4";


const API_URL = 
"https://v3.football.api-sports.io/";





/* ==========================
   HEADERS
========================== */


const apiHeaders = {

    "x-apisports-key": API_KEY

};





/* ==========================
   GET MATCH LIVE
========================== */


async function getLiveMatches(){


    try{


        const response =
        await fetch(
        API_URL + "fixtures?live=all",
        {
            method:"GET",
            headers:apiHeaders
        }
        );



        const data =
        await response.json();



        console.log(
        "Match Live:",
        data
        );



        return data.response;



    }catch(error){


        console.log(
        "Erreur API:",
        error
        );


    }


}





/* ==========================
   GET MATCH JODI A
========================== */


async function getTodayMatches(date){


    try{


        const response =
        await fetch(
        API_URL + 
        "fixtures?date=" + date,
        {

            method:"GET",

            headers:apiHeaders

        }
        );



        const data =
        await response.json();



        return data.response;



    }catch(error){


        console.log(error);


    }


}

/* ==========================
   PREZISCORE 🇭🇹
   GLOBAL API.JS
   PARTIE 2A
========================== */


/* ==========================
   GET STANDINGS
   KLASMAN EKIP
========================== */


async function getStandings(league, season){


    try{


        const response = await fetch(

        API_URL +
        "standings?league=" +
        league +
        "&season=" +
        season,

        {

            method:"GET",

            headers:apiHeaders

        }

        );



        const data =
        await response.json();



        console.log(
        "Klasman:",
        data
        );



        return data.response;



    }catch(error){


        console.log(
        "Erreur classement:",
        error
        );


    }


}






/* ==========================
   GET TEAM INFO
   ENFÒMASYON EKIP
========================== */


async function getTeam(teamId){


    try{


        const response =
        await fetch(

        API_URL +
        "teams?id=" +
        teamId,

        {

            method:"GET",

            headers:apiHeaders

        }

        );



        const data =
        await response.json();



        return data.response;



    }catch(error){


        console.log(
        "Erreur ekip:",
        error
        );


    }


}






/* ==========================
   GET PLAYER INFO
   ENFÒMASYON JWÈ
========================== */


async function getPlayer(playerId, season){


    try{


        const response =
        await fetch(

        API_URL +
        "players?id=" +
        playerId +
        "&season=" +
        season,

        {

            method:"GET",

            headers:apiHeaders

        }

        );



        const data =
        await response.json();



        return data.response;



    }catch(error){


        console.log(
        "Erreur jwè:",
        error
        );


    }


}

/* ==========================
   PREZISCORE 🇭🇹
   GLOBAL API.JS
   PARTIE 2B
========================== */


/* ==========================
   AFFICHE MATCH LIVE
========================== */


async function displayLiveMatches(){


    const matches = await getLiveMatches();


    const container =
    document.getElementById("live-container");



    if(!container || !matches) return;



    container.innerHTML = "";



    matches.forEach(match=>{


        container.innerHTML += `

        <div class="match-card live">


            <div class="league">

            🔴 LIVE

            <span>
            ${match.fixture.status.elapsed || 0}'
            </span>

            </div>



            <div class="teams">


                <div>

                <img src="${match.teams.home.logo}">

                <p>
                ${match.teams.home.name}
                </p>

                </div>



                <h2>

                ${match.goals.home}
                -
                ${match.goals.away}

                </h2>



                <div>

                <img src="${match.teams.away.logo}">

                <p>
                ${match.teams.away.name}
                </p>

                </div>


            </div>


        </div>

        `;


    });


}






/* ==========================
   AFFICHE MATCH JODI A
========================== */


async function displayTodayMatches(date){


    const matches =
    await getTodayMatches(date);



    const container =
    document.getElementById("today-container");



    if(!container || !matches) return;



    container.innerHTML = "";



    matches.slice(0,10).forEach(match=>{


        container.innerHTML += `

        <div class="match-card">


        <div class="league">

        ${match.league.name}

        <span>
        ${match.fixture.status.short}
        </span>

        </div>



        <div class="teams">


        <div>

        <img src="${match.teams.home.logo}">

        <p>${match.teams.home.name}</p>

        </div>



        <h3>
        VS
        </h3>



        <div>

        <img src="${match.teams.away.logo}">

        <p>${match.teams.away.name}</p>

        </div>


        </div>


        </div>

        `;


    });


}






/* ==========================
   START API
========================== */


document.addEventListener(
"DOMContentLoaded",
()=>{


    console.log(
    "⚽ PreziScore API pare"
    );


});

/* ==========================
   PREZISCORE 🇭🇹
   STANDINGS API
   PARTIE 1
========================== */


/* ==========================
   GET LEAGUE STANDINGS
========================== */


async function getLeagueStandings(leagueId, season){


    try{


        const response = await fetch(

        API_URL +
        "standings?league=" +
        leagueId +
        "&season=" +
        season,

        {

            method:"GET",

            headers:apiHeaders

        }

        );



        const data =
        await response.json();



        console.log(
        "Standings API:",
        data
        );



        return data.response;



    }catch(error){


        console.log(
        "Erreur standings:",
        error
        );


    }


}







/* ==========================
   AFFICHER KLASMAN
========================== */


function displayStandings(tableId, teams){


    const table =
    document.getElementById(tableId);



    if(!table || !teams) return;



    table.innerHTML = "";



    teams.forEach((item)=>{


        let team =
        item.team;



        let stats =
        item.all;



        table.innerHTML += `


        <tr>


        <td>

        ${item.rank}

        </td>



        <td>

        ${team.name}

        </td>



        <td>

        ${stats.played}

        </td>



        <td>

        ${item.points}

        </td>


        </tr>


        `;


    });


/* ==========================
   PREZISCORE 🇭🇹
   STANDINGS API
   PARTIE 2A
========================== */


/* ==========================
   CHARGE LALIGA
========================== */


async function loadLaLiga(){


    const season = 2025;

    const league = 140; // LaLiga



    const data =
    await getLeagueStandings(
        league,
        season
    );



    if(data && data[0]){


        const teams =
        data[0].league.standings[0];


        displayStandings(
            "laliga-table",
            teams
        );


    }


}






/* ==========================
   CHARGE PREMIER LEAGUE
========================== */


async function loadPremierLeague(){


    const season = 2025;

    const league = 39; // Premier League



    const data =
    await getLeagueStandings(
        league,
        season
    );



    if(data && data[0]){


        const teams =
        data[0].league.standings[0];


        displayStandings(
            "premier-table",
            teams
        );


    }


}





/* ==========================
   DEMARAGE STANDINGS
========================== */


document.addEventListener(
"DOMContentLoaded",
()=>{


    loadLaLiga();


    loadPremierLeague();


});
}

/* ==========================
   PREZISCORE 🇭🇹
   STANDINGS API
   PARTIE 2B
========================== */


/* ==========================
   CHARGE SERIE A
========================== */


async function loadSerieA(){


    const season = 2025;

    const league = 135; // Serie A



    const data =
    await getLeagueStandings(
        league,
        season
    );



    if(data && data[0]){


        displayStandings(
            "seriea-table",
            data[0].league.standings[0]
        );


    }


}






/* ==========================
   CHARGE BUNDESLIGA
========================== */


async function loadBundesliga(){


    const season = 2025;

    const league = 78; // Bundesliga



    const data =
    await getLeagueStandings(
        league,
        season
    );



    if(data && data[0]){


        displayStandings(
            "bundes-table",
            data[0].league.standings[0]
        );


    }


}






/* ==========================
   CHARGE CHAMPIONS LEAGUE
========================== */


async function loadChampionsLeague(){


    const season = 2025;

    const league = 2; // Champions League



    const data =
    await getLeagueStandings(
        league,
        season
    );



    if(data && data[0]){


        displayStandings(
            "ucl-table",
            data[0].league.standings[0]
        );


    }


}






/* ==========================
   REFRESH STANDINGS
========================== */


function refreshStandings(){


    loadLaLiga();

    loadPremierLeague();

    loadSerieA();

    loadBundesliga();

    loadChampionsLeague();


}




document.addEventListener(
"DOMContentLoaded",
()=>{


    refreshStandings();


});
