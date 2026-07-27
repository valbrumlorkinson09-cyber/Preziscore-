// Preziscore live - premye fonksyon yo

console.log("PreziScore Live pare!");

function updateScore(team1, score1, team2, score2) {
    console.log(team1 + " " + score1 + " - " + score2 + " " + team2);
}

// Egzanp mizajou match
updateScore("Haiti", 1, "Maroc", 0);
function showPage(page) {

    if(page === "Match"){
        alert("Tout match yo");
    }

    if(page === "Live"){
        alert("Match an dirèk 🔴");
    }

    if(page === "Klasman"){
        alert("Klasman ekip yo 🏆");
    }

    if(page === "Favori"){
        alert("Match favori yo ⭐");
    }

}
