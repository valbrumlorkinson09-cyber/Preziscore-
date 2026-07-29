
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
