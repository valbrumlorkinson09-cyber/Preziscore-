
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


liveContainer.innerHTML = `

<div class="card">

<h2>🔄 Ap chèche match yo...</h2>

<p>
Koneksyon PreziScore ap fèt
</p>

</div>

`;


// Tès ak Barcelona ID TheSportsDB

const matches = await getEvents("133739");


if(!matches || !matches.events){

liveContainer.innerHTML = `

<div class="card">

<h2>⚽ Pa gen match disponib</h2>

<p>
Nou pa jwenn match pou kounya.
</p>

</div>

`;

return;

}



liveContainer.innerHTML="";


matches.events.forEach(match=>{


liveContainer.innerHTML += `

<div class="card">

<h2>${match.strHomeTeam}</h2>

<h3>
${match.intHomeScore ?? 0} - ${match.intAwayScore ?? 0}
</h3>

<h2>${match.strAwayTeam}</h2>

<p>
🏆 ${match.strLeague}
</p>

<p>
📅 ${match.dateEvent}
</p>

</div>

`;

});


}

loadLiveMatches();

