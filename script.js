// Preziscore🇭🇹 - premye fonksyon yo

console.log("PreziScore🇭🇹 pare!");

function updateScore(team1, score1, team2, score2) {
    console.log(team1 + " " + score1 + " - " + score2 + " " + team2);
}

// Egzanp mizajou match
updateScore("Haiti", 1, "Maroc", 0);

const matches = [
    {
        league: "🌍 Coupe du Monde",
        home: "🇭🇹 Haiti",
        away: "🇲🇦 Maroc",
        score: "0 - 0",
        time: "⏱️ 25'",
        live: true
    },

    {
        league: "🏆 Ligue des Champions",
        home: "🇫🇷 France",
        away: "🇧🇷 Brazil",
        score: "2 - 1",
        time: "Terminé",
        live: false
    },

    {
        league: "🏴 Premier League",
        home: "🇬🇧 Arsenal",
        away: "🇪🇸 Real Madrid",
        score: "1 - 0",
        time: "⏱️ 60'",
        live: true
    }
];


function showPage(page) {
    // ansyen kòd la rete anba
}
function showPage(page) {

    let content = document.querySelector(".matches");

    if (page === "Match") {
<button onclick="homePage()" class="home">🏠 Akèy</button>
    content.innerHTML = "<h2>Match an dirèk</h2>";

    matches.forEach(match => {
<button onclick="homePage()" class="home">🏠 Akèy</button>
        content.innerHTML += `
        <div class="match">

            <small>${match.league}</small>

            ${match.live ? '<span class="live">🔴 LIVE</span>' : ''}

            <h3>${match.home}</h3>
            <p>${match.score}</p>
            <h3>${match.away}</h3>

            <span>${match.time}</span>

        </div>
        `;

    });

    }

    if (page<button onclick="homePage()" class="home">🏠 Akèy</button> === "Live") {
        content.innerHTML = `
        <h2>🔥 Match Live</h2>

        <div class="match">
            <span class="live">🔴 LIVE</span>
            <h3>🇭🇹 Haiti vs 🇲🇦 Maroc</h3>
            <p>0 - 0</p>
            <span>⏱️ 25'</span>
        </div>`;
    }

<button onclick="homePage()" class="home">🏠 Akèy</button>
    if (page === "Klasman") {
        content.innerHTML = `
        <h2>🏆 Klasman</h2>

        <div class="match">
            🥇 1 - Haiti<br>
            🥈 2 - Maroc<br>
            🥉 3 - France
        </div>`;
    }

<button onclick="homePage()" class="home">🏠 Akèy</button>
    if (page === "Favori") {
        content.innerHTML = `
        <h2>⭐ Favori</h2>

        <div class="match">
            Pa gen match favori pou kounya ⭐
        </div>`;
    }

}
function homePage(){

    let content = document.querySelector(".matches");

    content.innerHTML = `
    <h2>Match an dirèk</h2>

    <div class="match">
        <small>🌍 Coupe du Monde</small>
        <span class="live">🔴 LIVE</span>

        <h3>🇭🇹 Haiti</h3>
        <p>0 - 0</p>
        <h3>🇲🇦 Maroc</h3>

        <span>⏱️ 25'</span>
    </div>

    `;
}
