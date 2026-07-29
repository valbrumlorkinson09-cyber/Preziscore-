/* ==========================
   ⚽ PREZISCORE 🇭🇹
   SPORTSC0RE SCRIPT
   ETAP 14 - PATI 1
========================== */


/* ==========================
   🔴 CHAJ LIVE MATCH
========================== */


async function loadLiveMatches(){

const data = await getLiveMatches();

console.log("SPORTSCORE REPONS KONPLÈ:", data);


const container =
document.getElementById("live-container");


if(!container) return;


container.innerHTML = `

<div class="match-card">

<h3>
API konekte ✅
</h3>

<p>
${JSON.stringify(data)}
</p>

</div>

`;

}



console.log(
"LIVE SPORTSC0RE:",
data
);



if(!data || !data.matches || data.matches.length === 0){


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



data.matches.forEach(match=>{


container.innerHTML += `

<div class="match-card">


<div class="league">

🔴 LIVE

</div>



<div class="teams">


<div>

<h3>
${match.home_team || "Home"}
</h3>

</div>



<h2>

${match.home_score ?? 0}

-

${match.away_score ?? 0}

</h2>



<div>

<h3>
${match.away_team || "Away"}
</h3>

</div>


</div>



<p>

⏱ ${match.status || "Live"}

</p>



</div>

`;

});


}






/* ==========================
   START PREZISCORE
========================== */


document.addEventListener(
"DOMContentLoaded",
()=>{


loadLiveMatches();


console.log(
"🔥 PREZISCORE SPORTSC0RE AKTIF"
);


});
