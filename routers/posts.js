// IMPORTED DATA
const express = require("express");
const router = express.Router();
const posts = require("../data/posts-data");

// ROUTERS
// Router "index"
router.get("/", (req, res) => {
    res.send("Leggo tutti i dati")
})