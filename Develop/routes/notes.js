//Global Variables
const router = require("express").Router();
const fs = require("fs");
const { v4: uuidv4 } = require("uuid")
const express = require('express');

//Get route for data
router.get("/", (req, res) => {
    fs.readFile("./Develop/db/db.json", (err,data) => {
        if (err) throw err;
        res.json(JSON.parse(data));
    });
});

//posting data for new notes
router.post("/add-notes", (req,res) => {
    const { title, text } = req.body;
    if(title && text) {
        const newNote = {
            title, 
            text,
            id: uuidv4(),
        };
    fs.readFile ("./Develop/db/db.json", "utf8", (err, data) => {
        if(err) {
            console.error(err);
            res.status(500).json("Error, note not added");
            return;
        }
    const notes = JSON.parse(data);
    notes.push(newNote);

    fs.writeFile("./Develop/db/db.json", JSON.stringify(notes), (err) => {
        if (err) {
            console.error("Error adding note", err);
            res.status(500).json("Error adding note");
        } else {
            console.info("Note added successfully!");
            res.json(`Note added successfully!`);
        }
    });
    }); 
        } else {
            res.status(400).json("Title and text are required for a new note");
        }
    });

    router.delete("/delete-note/:noteID", (req, res) => {
        const noteID = req.params.noteID;
        console.log(noteID);
        res.send(`Deleting note with ID ${noteID}`);
    });
    
module.exports = router;