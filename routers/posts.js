// IMPORTED DATA
const express = require("express");
const router = express.Router();
const posts = require("../data/posts-data");

// ROUTERS
// Router "index"
router.get("/", (req, res) => {
    res.send("Leggo tutti i dati")
})

// Router "show"
router.get("/:id", (req, res) => {
    const postId = req.params.id;
    res.send("Leggo i dati dell'elemento con id " + postId)
})

// Router "create"
router.post("/", (req, res) => {
    res.send("Creo un nuovo elemento")
})

module.exports = router;