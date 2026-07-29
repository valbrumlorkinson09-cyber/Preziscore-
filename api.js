/* ==========================
   PREZISCORE 🇭🇹
   RAPID API FOOTBALL
========================== */


const RAPID_API_KEY ="fe08bb1ed4mshd1a647c90e2c802p172617jsn1f453b26a050";


const RAPID_HOST =
"free-api-live-football-data.p.rapidapi.com";


const RAPID_URL =
"https://free-api-live-football-data.p.rapidapi.com";



const headers = {

"x-rapidapi-host": RAPID_HOST,

"x-rapidapi-key": RAPID_API_KEY,

"Content-Type":"application/json"

};





async function getLiveMatches(){


try{


const res = await fetch(

RAPID_URL + 
"/football-current-live",

{

method:"GET",

headers:headers

}

);



const data = await res.json();



console.log(
"PreziScore Live:",
data
);



return data;



}catch(error){


console.log(
"Erreur API:",
error
);


}


}





document.addEventListener(
"DOMContentLoaded",
()=>{

getLiveMatches();

});
/* ==========================
   AFFICHE MATCH LIVE
========================== */


async function displayLiveMatches(){


const data = await getLiveMatches();


const container =
document.getElementById("live-container");


if(!container) return;



if(!data || !data.response || data.response.length === 0){


container.innerHTML = `

<div class="match-card">

<div class="league">

⚠️ Pa gen match LIVE disponib kounye a.

</div>

</div>

`;


return;

}




container.innerHTML = "";



data.response.forEach(match=>{


container.innerHTML += `

<div class="match-card live">


<div class="league">

🔴 LIVE

</div>



<div class="teams">


<div>

<p>${match.home?.name || "Ekip A"}</p>

</div>



<h2>

${match.home?.score ?? 0}

-

${match.away?.score ?? 0}

</h2>



<div>

<p>${match.away?.name || "Ekip B"}</p>

</div>


</div>


</div>


`;


});


}
