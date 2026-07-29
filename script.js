/* ==========================
   ⚽ PREZISCORE 🇭🇹
   NOUVO GLOBAL SCRIPT
   SPORTSCORE SYSTEM
   PARTIE 1
========================== */

/* ==========================
   🔴 LIVE MATCH SYSTEM
========================== */


async function loadLiveMatches(){


const containers = document.querySelectorAll(
"#live-container"
);


if(containers.length === 0) return;



const data = await getLiveMatches();



console.log(
"SPORTSCORE LIVE DATA:",
data
);



const matches =
data?.matches ||
data?.data ||
data?.results ||
data?.events ||
[];




containers.forEach(container=>{


if(matches.length === 0){


container.innerHTML = `

<div class="match-card">

<h3>
⚠️ Pa gen match disponib kounye a.
</h3>

</div>

`;

return;

}



container.innerHTML = "";



matches.forEach(match=>{


const home =
match.homeTeam?.name ||
match.teams?.home?.name ||
match.home?.name ||
match.home_name ||
"Match";


const away =
match.awayTeam?.name ||
match.teams?.away?.name ||
match.away?.name ||
match.away_name ||
"Match";



const homeScore =
match.score?.home ??
match.home_score ??
match.scores?.home ??
0;



const awayScore =
match.score?.away ??
match.away_score ??
match.scores?.away ??
0;



let status =
match.status ||
match.state ||
match.period ||
"Live";


// Si status la se yon objè
if(typeof status === "object"){
status =
status.type ||
status.name ||
"Live";
}



container.innerHTML += `

<div class="match-card">


<h4>
🔴 ${status}
</h4>


<div class="teams">


<h3>
${home}
</h3>


<h2>
${homeScore} - ${awayScore}
</h2>


<h3>
${away}
</h3>


</div>


<p>
⏱ ${status}
</p>


</div>

`;

});


});


   }

 
/* ==========================
   ⚽ MATCH SYSTEM
========================== */


async function loadMatches(){


const container =
document.querySelector("#matches-container");


if(!container) return;



const data = await getLiveMatches();



console.log(
"SPORTSCORE MATCH DATA:",
data
);



const matches =
data?.matches || [];



if(matches.length === 0){


container.innerHTML = `

<div class="match-card">

<h3>
⚠️ Pa gen match disponib.
</h3>

</div>

`;

return;

}



container.innerHTML = "";



matches.forEach(match=>{


const home =
match.homeTeam?.name ||
match.teams?.home?.name ||
match.home_name ||
"Équipe";


const away =
match.awayTeam?.name ||
match.teams?.away?.name ||
match.away_name ||
"Équipe";



const homeScore =
match.score?.home ??
match.home_score ??
0;



const awayScore =
match.score?.away ??
match.away_score ??
0;



container.innerHTML += `

<div class="match-card">

<h4>
⚽ Match
</h4>


<div class="teams">

<h3>
${home}
</h3>


<h2>
${homeScore} - ${awayScore}
</h2>


<h3>
${away}
</h3>

</div>


<p>
${match.status || "Ap vini"}
</p>


</div>

`;

});


}

 
/* ==========================
   🏆 STANDINGS SYSTEM
========================== */


async function loadStandings(){


const container =
document.querySelector("#standings-container");


if(!container) return;



const data = await getStandings(
"premier-league"
);



console.log(
"SPORTSCORE STANDINGS:",
data
);



const standings =
data?.standings ||
data?.table ||
[];




if(standings.length === 0){


container.innerHTML = `

<div class="match-card">

<h3>
⚠️ Klasman pa disponib.
</h3>

</div>

`;

return;

}



container.innerHTML = "";



standings.forEach(team=>{


container.innerHTML += `

<div class="match-card">


<h3>
${team.position || "--"}
-
${team.team?.name || team.name || "Ekip"}
</h3>


<p>
Pwen: ${team.points || 0}
</p>


</div>

`;

});


}





/* ==========================
   👑 PLAYERS SYSTEM
========================== */


async function loadPlayers(){


const container =
document.querySelector("#players-container");


if(!container) return;



console.log(
"PREZISCORE PLAYERS SYSTEM AKTIF"
);



container.innerHTML = `

<div class="match-card">

<h3>
👑 Top jwè yo ap pare...
</h3>


<p>
Estatistik jwè yo ap vini ak done SportScore.
</p>

</div>

`;



}

/* ==========================
   🚀 PREZISCORE START
========================== */


document.addEventListener(
"DOMContentLoaded",
()=>{


console.log(
"⚽ PREZISCORE SPORTSC0RE SYSTEM AKTIF"
);



/* LIVE */

loadLiveMatches();



/* MATCH */

loadMatches();



/* STANDINGS */

loadStandings();



/* PLAYERS */

loadPlayers();



});
