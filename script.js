/* ==========================
   ⚽ PREZISCORE 🇭🇹
   SCRIPT GLOBAL
   ETAP 13 - PATI 1
========================== */


/* ==========================
   AFFICHE MATCH LIVE
========================== */


async function loadLiveMatches(){


const container =
document.getElementById("live-container");


if(!container) return;



const result =
await getLiveMatches();



if(!result || !result.response){


container.innerHTML = `

<div class="match-card live">

<div class="league">

⚠️ Pa gen match LIVE disponib

</div>

</div>

`;

return;

}



const matches =
result.response;



container.innerHTML = "";



matches.forEach(match=>{


container.innerHTML += `


<div class="match-card live">


<div class="league">

🔴 LIVE

<span>

${match.status?.elapsed || 0}'

</span>

</div>



<div class="teams">


<div>

<img src="${match.home?.logo || ''}">

<p>

${match.home?.name || "Ekip"}

</p>

</div>




<h2>

${match.home?.score ?? 0}

-

${match.away?.score ?? 0}

</h2>




<div>

<img src="${match.away?.logo || ''}">

<p>

${match.away?.name || "Ekip"}

</p>

</div>



</div>


</div>


`;

});


}





/* ==========================
   DEMARA LIVE
========================== */


document.addEventListener(

"DOMContentLoaded",

()=>{


loadLiveMatches();
console.log("DONE API LIVE:", result);


"🔴 PreziScore Live aktif"
);


});
