
/* ==========================
   PREZISCORE 🇭🇹
   GLOBAL SCRIPT.JS
   PARTIE 1
========================== */


/* ==========================
   RECHÈCH GLOBAL
========================== */

function searchPreziScore(inputId, itemsClass){

    const input = document.getElementById(inputId);

    if(!input) return;


    input.addEventListener("keyup", function(){


        let value = input.value.toLowerCase();


        const items = document.querySelectorAll(itemsClass);



        items.forEach(item=>{


            let text = item.innerText.toLowerCase();


            if(text.includes(value)){

                item.style.display="block";

            }else{

                item.style.display="none";

            }


        });


    });


}





/* ==========================
   DARK MODE
========================== */


function darkMode(){


    document.body.classList.toggle("dark");


    localStorage.setItem(
        "preziscore-dark",
        document.body.classList.contains("dark")
    );


}





window.addEventListener("load",()=>{


    let dark =
    localStorage.getItem("preziscore-dark");


    if(dark==="true"){

        document.body.classList.add("dark");

    }


});





/* ==========================
   FAVORI
========================== */


function addFavorite(name){


    let favorites =
    JSON.parse(
        localStorage.getItem("preziscore-favorites")
    ) || [];



    if(!favorites.includes(name)){


        favorites.push(name);


        localStorage.setItem(
            "preziscore-favorites",
            JSON.stringify(favorites)
        );


        alert(
        name + " ajoute nan favori ⭐"
        );


    }else{


        alert(
        name + " deja nan favori"
        );


    }


}

/* ==========================
   PREZISCORE 🇭🇹
   SCRIPT.JS
   PARTIE 2A
========================== */


/* ==========================
   NOTIFICATION
========================== */

function showNotification(message){


    const box = document.createElement("div");


    box.className = "notification-box";


    box.innerHTML = `
        🔔 ${message}
    `;


    document.body.appendChild(box);



    setTimeout(()=>{


        box.remove();


    },3000);


}





/* ==========================
   LIVE REFRESH
========================== */


function refreshLive(){


    const live =
    document.querySelector(".live");



    if(live){


        live.style.animation =
        "pulse 1s infinite";


    }


}





/* ==========================
   CARD ANIMATION
========================== */


function animateCards(){


    const cards =
    document.querySelectorAll(
        ".match-card, .news-card"
    );



    cards.forEach((card,index)=>{


        card.style.opacity="0";


        card.style.transform=
        "translateY(20px)";



        setTimeout(()=>{


            card.style.transition=
            "0.5s";


            card.style.opacity="1";


            card.style.transform=
            "translateY(0)";



        },index * 100);



    });


}





/* ==========================
   AUTO START
========================== */


document.addEventListener(
"DOMContentLoaded",
()=>{


    animateCards();


    refreshLive();


});

/* ==========================
   PREZISCORE 🇭🇹
   SCRIPT.JS
   PARTIE 2B
========================== */


/* ==========================
   FAVORI BUTTON
========================== */

function favoriteButton(element, name){


    element.addEventListener(
    "click",
    ()=>{


        addFavorite(name);


        showNotification(
        name + " ajoute nan favori ⭐"
        );


    });


}





/* ==========================
   GO TO PAGE
========================== */


function openPage(page){


    window.location.href = page;


}





/* ==========================
   LIVE SCORE UPDATE
========================== */


function updateScore(id, score){


    const box =
    document.getElementById(id);



    if(box){

        box.innerHTML = score;

    }


}





/* ==========================
   API READY FUNCTION
========================== */


function loadMatches(){


    console.log(
    "PreziScore ap prepare match yo ⚽"
    );


}





/* ==========================
   START APP
========================== */


window.addEventListener(
"load",
()=>{


    loadMatches();


    console.log(
    "🔥 PreziScore pare!"
    );


});
