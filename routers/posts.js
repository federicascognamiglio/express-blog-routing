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

// Router "update"
router.put("/:id", (req, res) => {
    const postId = req.params.id;
    res.send("Aggiorno tutti i dati dell'elemento con id " + postId)
})

// Router "modify"
router.patch("/:id", (req, res) => {
    const postId = req.params.id;
    res.send("Aggiorno solo i dati modificati dell'elemento con id " + postId)
})



module.exports = router;