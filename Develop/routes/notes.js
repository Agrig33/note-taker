//Global Variables

const router = require("express").Router();
const fs = require("fs");
const { v4: uuidv4 } = require("uuid")

//Get route for data
router.get("/", (req, res) => {
    fs.readFile("./Develop/db/db.json", (err,data) => {
        if (err) throw err;
        res.json(JSON.parse(data));
    });
});

