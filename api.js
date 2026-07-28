/* ==========================
   PREZISCORE 🇭🇹
   API.JS FINAL
   PARTIE 1
========================== */


/* ==========================
   API CONFIGURATION
========================== */


const API_KEY = "9ffcd813946b3dd7151dbf7b1702a4b4";

const API_URL = "https://v3.football.api-sports.io/";



const apiHeaders = {

    "x-apisports-key": API_KEY

};





/* ==========================
   API TEST
========================== */


async function testAPI(){


    try{


        const response = await fetch(

            API_URL + "status",

            {

                method:"GET",

                headers:apiHeaders

            }

        );


        const data = await response.json();


        console.log(
            "API STATUS:",
            data
        );


        return data;



    }catch(error){


        console.log(
            "API ERROR:",
            error
        );


    }


}





/* ==========================
   GET LIVE MATCH
========================== */


async function getLiveMatches(){


    try{


        const response = await fetch(

            API_URL + "fixtures?live=all",

            {

                method:"GET",

                headers:apiHeaders

            }

        );


        const data = await response.json();



        console.log(
            "LIVE MATCH:",
            data
        );



        return data.response || [];



    }catch(error){


        console.log(
            "LIVE ERROR:",
            error
        );


        return [];


    }


}






/* ==========================
   GET MATCH JODI A
========================== */


async function getTodayMatches(date){


    try{


        const response = await fetch(

            API_URL + "fixtures?date=" + date,

            {

                method:"GET",

                headers:apiHeaders

            }

        );


        const data = await response.json();



        console.log(
            "TODAY MATCH:",
            data
        );



        return data.response || [];



    }catch(error){


        console.log(
            "TODAY ERROR:",
            error
        );


        return [];


    }


}
/* ==========================
   PREZISCORE 🇭🇹
   API.JS FINAL
   PARTIE 2
========================== */


/* ==========================
   DISPLAY LIVE MATCH
========================== */


async function displayLiveMatches(){


    const container =
    document.getElementById("live-container");



    if(!container) return;



    const matches =
    await getLiveMatches();



    if(matches.length === 0){


        container.innerHTML = `

        <div class="match-card">

        ⚽ Pa gen match LIVE kounye a

        </div>

        `;


        return;


    }




    container.innerHTML = "";



    matches.forEach(match=>{


        container.innerHTML += `

        <div class="match-card live">


            <div class="league">

            🔴 ${match.league.name}

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

                ${match.goals.home ?? 0}

                -

                ${match.goals.away ?? 0}

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
   DISPLAY MATCH JODI A
========================== */


async function displayTodayMatches(date){


    const container =
    document.getElementById("today-container");



    if(!container) return;



    const matches =
    await getTodayMatches(date);



    if(matches.length === 0){


        container.innerHTML = `

        <div class="match-card">

        📅 Pa gen match disponib jodi a

        </div>

        `;


        return;


    }




    container.innerHTML = "";



    matches.slice(0,20).forEach(match=>{


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

                <p>
                ${match.teams.home.name}
                </p>

                </div>



                <h3>

                VS

                </h3>



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
   AUTO START MATCH
========================== */


document.addEventListener(
"DOMContentLoaded",
()=>{


    console.log(
    "⚽ PreziScore API FINAL pare"
    );


});
/* ==========================
   PREZISCORE 🇭🇹
   API.JS FINAL
   PARTIE 3
   STANDINGS
========================== */


/* ==========================
   GET STANDINGS
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
            "STANDINGS:",
            data
        );



        return data.response || [];



    }catch(error){


        console.log(
            "STANDINGS ERROR:",
            error
        );


        return [];


    }


}






/* ==========================
   DISPLAY STANDINGS
========================== */


function displayStandings(tableId, teams){


    const table =
    document.getElementById(tableId);



    if(!table || !teams) return;



    table.innerHTML = "";



    teams.forEach(item=>{


        table.innerHTML += `

        <tr>

            <td>
            ${item.rank}
            </td>


            <td>
            ${item.team.name}
            </td>


            <td>
            ${item.all.played}
            </td>


            <td>
            ${item.points}
            </td>


        </tr>

        `;


    });


}







/* ==========================
   LOAD ALL LEAGUES
========================== */


async function loadLeague(table, league){


    const season = 2025;



    const data =
    await getLeagueStandings(
        league,
        season
    );



    if(data[0]){


        const teams =
        data[0].league.standings[0];



        displayStandings(
            table,
            teams
        );


    }


}







/* ==========================
   ALL BIG LEAGUES
========================== */


function loadAllStandings(){


    loadLeague(
        "laliga-table",
        140
    );



    loadLeague(
        "premier-table",
        39
    );



    loadLeague(
        "seriea-table",
        135
    );



    loadLeague(
        "bundes-table",
        78
    );



    loadLeague(
        "ligue1-table",
        61
    );



    loadLeague(
        "ucl-table",
        2
    );


}





document.addEventListener(
"DOMContentLoaded",
()=>{


    loadAllStandings();


});
