// Preziscore🇭🇹

console.log("PreziScore🇭🇹 pare!");

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


function homeButton(){

    return `
    <button onclick="homePage()" class="home">
    🏠 Akèy
    </button>
    `;
}


function showPage(page){

    let content = document.querySelector(".matches");


    if(page === "Match"){

        content.innerHTML = homeButton() + "<h2>Match an dirèk</h2>";

        matches.forEach(match => {

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


    if(page === "Live"){

        content.innerHTML = homeButton() + `
        <h2>🔥 Match Live</h2>

        <div class="match">
            <span class="live">🔴 LIVE</span>

            <h3>🇭🇹 Haiti</h3>
            <p>0 - 0</p>
            <h3>🇲🇦 Maroc</h3>

            <span>⏱️ 25'</span>
        </div>
        `;
    }


    if(page === "Klasman"){

        content.innerHTML = homeButton() + `
        <h2>🏆 Klasman</h2>

        <div class="match">
            🥇 1 - Haiti<br>
            🥈 2 - Maroc<br>
            🥉 3 - France
        </div>
        `;
    }


    if(page === "Favori"){

        content.innerHTML = homeButton() + `
        <h2>⭐ Favori</h2>

        <div class="match">
            Pa gen match favori pou kounya ⭐
        </div>
        `;
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
