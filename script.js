// Preziscore live - premye fonksyon yo

console.log("PreziScore Live pare!");

function updateScore(team1, score1, team2, score2) {
    console.log(team1 + " " + score1 + " - " + score2 + " " + team2);
}

// Egzanp mizajou match
updateScore("Haiti", 1, "Maroc", 0);
function showPage(page) {

    let content = document.querySelector(".matches");

    if (page === "Match") {
        content.innerHTML = `
        <h2>Match an dirèk</h2>

        <div class="match">
            <small>🌍 Coupe du Monde</small>
            <span class="live">🔴 LIVE</span>

            <h3>🇭🇹 Haiti</h3>
            <p>0 - 0</p>
            <h3>🇲🇦 Maroc</h3>

            <span>⏱️ 25'</span>
        </div>`;
    }


    if (page === "Live") {
        content.innerHTML = `
        <h2>🔥 Match Live</h2>

        <div class="match">
            <span class="live">🔴 LIVE</span>
            <h3>🇭🇹 Haiti vs 🇲🇦 Maroc</h3>
            <p>0 - 0</p>
            <span>⏱️ 25'</span>
        </div>`;
    }


    if (page === "Klasman") {
        content.innerHTML = `
        <h2>🏆 Klasman</h2>

        <div class="match">
            🥇 1 - Haiti<br>
            🥈 2 - Maroc<br>
            🥉 3 - France
        </div>`;
    }


    if (page === "Favori") {
        content.innerHTML = `
        <h2>⭐ Favori</h2>

        <div class="match">
            Pa gen match favori pou kounya ⭐
        </div>`;
    }

}
