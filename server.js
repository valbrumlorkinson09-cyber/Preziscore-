const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");

const app = express();

app.use(cors());

const API_KEY = process.env.API_KEY;

app.get("/live", async (req, res) => {
    try {
        const response = await fetch(
            "https://v3.football.api-sports.io/fixtures?live=all",
            {
                headers: {
                    "x-apisports-key": API_KEY
                }
            }
        );

        const data = await response.json();

        res.json(data);

    } catch (err) {
        res.status(500).json({
            error: err.message
        });
    }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Preziscore API ap mache sou port", PORT);
});
