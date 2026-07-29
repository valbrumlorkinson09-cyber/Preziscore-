
// ===============================
// PREZISCORE APP SYSTEM
// ===============================


document.addEventListener("DOMContentLoaded", () => {


console.log("⚽ PreziScore App Started");



// ===============================
// DETEKTE PAJ AKTYÈL LA
// ===============================


const page = window.location.pathname.split("/").pop();



console.log("Current Page:", page);




// ===============================
// SYSTEM MESSAGE
// ===============================


function showMessage(message){


console.log(message);


}




// ===============================
// INDEX PAGE
// ===============================


if(page === "" || page === "index.html"){


showMessage(
"🏠 PreziScore Home Loaded"
);


}





// ===============================
// LIVE PAGE
// ===============================


if(page === "live.html"){


showMessage(
"🔴 Live Page Ready"
);


}





// ===============================
// MATCH PAGE
// ===============================


if(page === "matches.html"){


showMessage(
"⚽ Matches Page Ready"
);


}





// ===============================
// LEAGUES PAGE
// ===============================


if(page === "leagues.html"){


showMessage(
"🏆 Leagues Page Ready"
);


}





// ===============================
// PLAYERS PAGE
// ===============================


if(page === "players.html"){


showMessage(
"⭐ Players Page Ready"
);


}





// ===============================
// AI PAGE
// ===============================


if(page === "ai.html"){


showMessage(
"🤖 AI System Ready"
);


}




});
