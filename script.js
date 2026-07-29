/* ==========================
   ⚽ PREZISCORE 🇭🇹
   GLOBAL SCRIPT.JS
========================== */


/* ==========================
   AFFICHAGE LIVE
========================== */


async function showLiveMatches(){


const container =
document.getElementById("live-container");


if(!container) return;



const data =
await getLiveMatches();



if(!data){


container.innerHTML = `

<div class="match-card">

⚠️ Erè koneksyon API

</div>

`;

return;

}



container.innerHTML = `

<div class="match-card live">

<div class="league">

🔴 LIVE CONNECTE

</div>


<div class="teams">

<h3>
PreziScore ap resevwa done yo...
</h3>

</div>

</div>

`;

}





/* ==========================
   AFFICHAGE MATCH JODI A
========================== */


async function showTodayMatches(){


const container =
document.getElementById("today-container");


if(!container) return;



const data =
await getTodayMatches();



if(!data){


container.innerHTML = `

<div class="match-card">

⚠️ Pa gen done match

</div>

`;

return;

}



container.innerHTML = `

<div class="match-card">

<div class="league">

⚽ MATCH JODI A

</div>


<div class="teams">

<h3>
Done API resevwa ✅
</h3>

</div>


</div>

`;

}





/* ==========================
   START PREZISCORE
========================== */


document.addEventListener(

"DOMContentLoaded",

()=>{


showLiveMatches();


showTodayMatches();


console.log(
"⚽ PreziScore Script aktif"
);


});
