const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");

//
const api = require("./routes");
const PORT = process.env.PORT || 3001

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/api, api");

//get routes for notes page
app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/notes.html"));
});

