/* ==========================
   PREZISCORE 🇭🇹
   SCRIPT.JS - PART 1
========================== */

// Lè paj la fin chaje
document.addEventListener("DOMContentLoaded", () => {

    initSearch();
    initNotification();
    initCards();
    initBottomMenu();

});

// ==========================
// RECHÈCH
// ==========================

function initSearch(){

    const input = document.getElementById("search");

    if(!input) return;

    input.addEventListener("keyup", function(){

        let value = this.value.toLowerCase();

        document.querySelectorAll(".match-card").forEach(card=>{

            let text = card.innerText.toLowerCase();

            if(text.includes(value)){

                card.style.display="block";

            }else{

                card.style.display="none";

            }

        });

    });

}

// ==========================
// NOTIFIKASYON
// ==========================

function initNotification(){

    const bell=document.querySelector(".notif");

    if(!bell) return;

    bell.addEventListener("click",()=>{

        alert("🔔 Byento ou ap resevwa notifikasyon pou match LIVE yo.");

    });

}

// ==========================
// ANIMASYON KAT YO
// ==========================

function initCards(){

    document.querySelectorAll(".match-card").forEach(card=>{

        card.addEventListener("click",()=>{

            card.classList.add("fade");

            setTimeout(()=>{

                card.classList.remove("fade");

            },400);

        });

    });

}

// ==========================
// MENU ANBA
// ==========================

function initBottomMenu(){

    const links=document.querySelectorAll(".bottom-nav a");

    links.forEach(link=>{

        link.addEventListener("click",()=>{

            links.forEach(item=>item.classList.remove("active"));

            link.classList.add("active");

        });

    });

}

// ==========================
// FAVORI
// ==========================

let favorites=[];

function addFavorite(team){

    if(!favorites.includes(team)){

        favorites.push(team);

    }

    localStorage.setItem("favorites",JSON.stringify(favorites));

}

function loadFavorites(){

    const data=localStorage.getItem("favorites");

    if(data){

        favorites=JSON.parse(data);

    }

}

loadFavorites();

// ==========================
// PREDIKSYON AI (DEMO)
// ==========================

function randomPrediction(){

    return{

        home:Math.floor(Math.random()*60)+20,

        draw:Math.floor(Math.random()*20)+10,

        away:Math.floor(Math.random()*40)+10

    };

}

function updatePrediction(){

    const box=document.querySelector(".predict-card");

    if(!box) return;

    const p=randomPrediction();

    box.innerHTML=`

<h3>🤖 Prediksyon AI</h3>

<p>🏠 Ekip lakay : <b>${p.home}%</b></p>

<p>🤝 Match Nul : <b>${p.draw}%</b></p>

<p>✈️ Ekip vizitè : <b>${p.away}%</b></p>

`;

}

setInterval(updatePrediction,15000);

// ==========================
// DAT AK LÈ
// ==========================

function getCurrentTime(){

    const now=new Date();

    return now.toLocaleTimeString();

}

console.log("PREZISCORE demare:",getCurrentTime());
// ==========================
// LIVE SCORE (DEMO)
// ==========================

function updateLiveMinutes(){

    const minutes=document.querySelectorAll(".minute");

    minutes.forEach(item=>{

        let value=parseInt(item.innerText);

        if(!isNaN(value) && value<90){

            value++;

            item.innerText=value+"'";

        }

    });

}

setInterval(updateLiveMinutes,60000);

// ==========================
// RAFRECHI MATCH YO
// ==========================

function refreshMatches(){

    console.log("🔄 Rafrechisman match...");

}

setInterval(refreshMatches,30000);

// ==========================
// STATISTIK DEMO
// ==========================

function generateStats(){

    return{

        possessionA:Math.floor(Math.random()*41)+30,

        possessionB:Math.floor(Math.random()*41)+30,

        shotsA:Math.floor(Math.random()*20),

        shotsB:Math.floor(Math.random()*20),

        cornersA:Math.floor(Math.random()*10),

        cornersB:Math.floor(Math.random()*10)

    };

}

console.log(generateStats());
// ==========================
// OUVRI DETAY MATCH
// ==========================

document.querySelectorAll(".match-card").forEach(card=>{

    card.addEventListener("dblclick",()=>{

        alert("📊 Paj detay match la ap disponib byento.");

    });

});

// ==========================
// FAVORI
// ==========================

document.querySelectorAll(".match-card").forEach(card=>{

    card.addEventListener("contextmenu",(e)=>{

        e.preventDefault();

        alert("⭐ Match sa ajoute nan Favori.");

    });

});

// ==========================
// CHANJMAN TIT LIVE
// ==========================

setInterval(()=>{

    if(document.title.includes("🔴")){

        document.title="PREZISCORE 🇭🇹";

    }else{

        document.title="🔴 PREZISCORE LIVE";

    }

},5000);

// ==========================
// KONEKSYON ENTÈNÈT
// ==========================

window.addEventListener("offline",()=>{

    alert("📡 Pa gen koneksyon entènèt.");

});

window.addEventListener("online",()=>{

    alert("✅ Entènèt retounen.");

});

// ==========================
// CHAJMAN APP
// ==========================

window.addEventListener("load",()=>{

    console.log("✅ PREZISCORE pare.");

});

// ==========================
// FONKSYON ITIL
// ==========================

function formatScore(home,away){

    return home + " - " + away;

}

function randomNumber(max){

    return Math.floor(Math.random()*max);

}

console.log("🚀 PREZISCORE Script Loaded");
