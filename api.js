const API_KEY = "7172cfb71994762ee5e6b525ed41d571";

async function getLiveMatches(){

    const response = await fetch(
    "https://v3.football.api-sports.io/fixtures?live=all",
    {
        headers:{
            "x-apisports-key": API_KEY
        }
    });

    const data = await response.json();

    console.log(data);

}

getLiveMatches();
