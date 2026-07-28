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


    if (page === "Klasman") {

    content.innerHTML = homeButton() + `
    <h2>🏆 Klasman Mondyal</h2>

    <div class="match">
        <table class="table">
            <tr>
                <th>#</th>
                <th>Ekip</th>
                <th>Pwen</th>
            </tr>

            <tr>
                <td>1</td>
                <td>🇭🇹 Haiti</td>
                <td>9</td>
            </tr>

            <tr>
                <td>2</td>
                <td>🇲🇦 Maroc</td>
                <td>6</td>
            </tr>

            <tr>
                <td>3</td>
                <td>🇫🇷 France</td>
                <td>3</td>
            </tr>

            <tr>
                <td>4</td>
                <td>🇧🇷 Brazil</td>
                <td>0</td>
            </tr>
        </table>
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

function teamPage(team){

    let content = document.querySelector(".matches");

    content.innerHTML = homeButton() + `

    <h2>${team}</h2>

    <div class="match">
        <h3>📊 Enfòmasyon</h3>

        <p>🏆 Match jwe: 3</p>
        <p>✅ Viktwa: 2</p>
        <p>🤝 Nul: 1</p>
        <p>❌ Defèt: 0</p>

        <hr>

        <h3>Dènye Match</h3>

        <p>${team} 2 - 1 Brazil</p>
        <p>${team} 1 - 1 Maroc</p>
        <p>${team} 3 - 0 France</p>

    </div>

    `;
}
function matchDetails(){

let content = document.querySelector(".matches");

content.innerHTML = `

<button onclick="homePage()" class="home">
🏠 Akèy
</button>

<h2>⚽ Haiti vs Maroc</h2>

<div class="match">

<h3>🇭🇹 Haiti 0 - 0 🇲🇦 Maroc</h3>

<p>⏱️ 25'</p>

<hr>

<h3>🥅 Gòl</h3>
<p>Pa gen gòl ankò</p>

<h3>🟨 Kat jòn</h3>
<p>Okenn</p>

<h3>📊 Statistik</h3>
<p>Posesyon: 50% - 50%</p>

</div>

`;

}
