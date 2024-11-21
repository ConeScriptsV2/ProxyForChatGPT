const express = require("express");
const axios = require("axios");

const app = express();

app.get("/", async (req, res) => {
    const targetUrl = req.query.url; // URL passed as a query parameter
    if (!targetUrl) {
        return res.status(400).send("Missing 'url' query parameter.");
    }

    try {
        const response = await axios.get(targetUrl);
        res.send(response.data); // Forward the response back to the client
    } catch (error) {
        console.error("Error fetching URL:", error.message);
        res.status(500).send("Failed to fetch the URL.");
    }
});

module.exports = app;
