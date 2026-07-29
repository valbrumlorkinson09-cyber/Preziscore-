
// ==============================
// PREZISCORE MAIN SCRIPT
// ===============================


document.addEventListener("DOMContentLoaded", function(){


console.log("⚽ PreziScore lanse avèk siksè");



// BOUTON HERO

const liveButton = document.querySelector(".hero button");


if(liveButton){

liveButton.addEventListener("click", function(){

window.location.href = "live.html";

});

}



// ANIMATION CARDS

const cards = document.querySelectorAll(".card");


cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-8px)";
card.style.transition="0.3s";

});


card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0)";

});


});



// MESSAGE DEMARAJ

setTimeout(()=>{

console.log("🔥 Byenveni sou PreziScore Football Intelligence");

},1000);



});
// ===============================
// PREZISCORE LIVE MATCH
// ===============================


async function loadLiveMatches(){


const liveContainer = document.getElementById("live-container");


if(!liveContainer){
    return;
}


try{


// Egzanp ekip pou teste API a
const data = await searchTeam("Barcelona");


if(!data || !data.teams){


liveContainer.innerHTML = `

<div class="card">

<h2>🔴 Pa gen match LIVE</h2>

<p>
Nou pa jwenn done pou kounya.
</p>

</div>

`;

return;

}



liveContainer.innerHTML = "";


data.teams.forEach(team=>{


liveContainer.innerHTML += `


<div class="card">


<img src="${team.strTeamBadge || ''}" width="80">


<h2>${team.strTeam}</h2>


<p>
🏟️ ${team.strStadium || "Stad pa disponib"}
</p>


<p>
🌍 ${team.strCountry || ""}
</p>


</div>


`;


});


}catch(error){


console.log("Live Error:", error);


liveContainer.innerHTML = `

<div class="card">

<h2>❌ Erè koneksyon</h2>

<p>
Tcheke API a.
</p>

</div>

`;

}


}



// Lanse Live otomatikman

loadLiveMatches();
