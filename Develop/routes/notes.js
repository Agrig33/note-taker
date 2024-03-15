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

router.post("/", (req,res) => {
    const { title, text } = req.body;
    if(req.body) {
        const newNote = {
            title, 
            text,
            id: uuidv4(),
        };
    fs.readFile("./Develop/db/db.json", "utf8", (err, data) => {
        if(err) {
            console.error(err);
            res.status(500).json("Error, note not added");
            return;
        }
    const notes = JSON.parse(data);
    notes.push(newNote);
    });

    router.delete("/noteID", (req, res) => {
        const noteID = req.params.noteID;
        console.log(noteID)

    })
    }
})