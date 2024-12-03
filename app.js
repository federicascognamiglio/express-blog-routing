// EXPRESS DATA
const express = require("express");
const app = express();
const port = 3000;

// ROUTER
const postsRouter = require("./routers/posts");
app.use("/posts", postsRouter);

// Server activation
app.listen(port, () => {
   console.log("Il Server è in ascolto");
})