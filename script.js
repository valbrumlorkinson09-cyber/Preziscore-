/* ==========================
   ⚽ PREZISCORE 🇭🇹
   GLOBAL SCRIPT
   SPORTSC0RE SYSTEM
   PARTIE 1
========================== */


/* ==========================
   🔴 LOAD LIVE MATCH
========================== */

async function loadLiveMatches(){

const containers = document.querySelectorAll(
"#live-container"
);


if(containers.length === 0) return;



const data = await getLiveMatches();



console.log(
"LIVE DATA:",
data
);



let matches = data.matches || [];



containers.forEach(container=>{


if(matches.length === 0){

container.innerHTML = `

<div class="match-card">

<h3>
⚠️ Pa gen match LIVE disponib kounye a.
</h3>

</div>

`;

return;

}



container.innerHTML = "";



matches.forEach(match=>{


container.innerHTML += `

<div class="match-card">

<h4>
🔴 LIVE
</h4>


<div class="teams">


<h3>
${match.home_team || "Ekip A"}
</h3>


<h2>
${match.home_score ?? 0}
-
${match.away_score ?? 0}
</h2>


<h3>
${match.away_team || "Ekip B"}
</h3>


</div>


<p>
⏱ ${match.status || "An dirèk"}
</p>


</div>

`;

});


});


}
/* ==========================
   ⚽ LOAD MATCHES
========================== */

async function loadMatches(){

const container =
document.querySelector("#matches-container");


if(!container) return;



const data = await getLiveMatches();



console.log(
"MATCH DATA:",
data
);



let matches = data.matches || [];



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


container.innerHTML += `

<div class="match-card">


<h4>
⚽ Match
</h4>


<div class="teams">


<h3>
${match.home_team || "Ekip A"}
</h3>


<h2>
${match.home_score ?? 0}
-
${match.away_score ?? 0}
</h2>


<h3>
${match.away_team || "Ekip B"}
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
   🏆 LOAD STANDINGS
========================== */


async function loadStandings(){

const container =
document.querySelector("#standings-container");


if(!container) return;



const data = await getStandings(
"premier-league"
);



console.log(
"STANDINGS DATA:",
data
);



if(!data){


container.innerHTML = `

<div class="match-card">

<h3>
⚠️ Pa gen klasman disponib.
</h3>

</div>

`;

return;

}



let standings =
data.standings || [];



container.innerHTML = "";



standings.forEach(team=>{


container.innerHTML += `

<div class="match-card">


<h3>

${team.position || "--"} 
-
${team.team || "Ekip"}

</h3>


<p>
Pwen: ${team.points || 0}
</p>


</div>

`;

});


}






/* ==========================
   👑 LOAD TOP PLAYERS
========================== */


async function loadPlayers(){


const container =
document.querySelector("#players-container");


if(!container) return;



const data = await getTopScorers(
"premier-league"
);



console.log(
"PLAYERS DATA:",
data
);



if(!data){


container.innerHTML = `

<div class="match-card">

<h3>
⚠️ Pa gen jwè disponib.
</h3>

</div>

`;

return;

}



let players =
data.players || [];



container.innerHTML = "";



players.forEach(player=>{


container.innerHTML += `

<div class="match-card">


<h3>
👑 ${player.name || "Jwè"}
</h3>


<p>
⚽ Gòl: ${player.goals || 0}
</p>


</div>

`;

});


}
 
/* ==========================
   🚀 PREZISCORE START SYSTEM
========================== */


document.addEventListener(
"DOMContentLoaded",
()=>{


console.log(
"⚽ PREZISCORE SYSTEM AKTIF"
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
