const express = require("express");  // requring express


// server create ho gya yha pe
const app = express();


// middle-ware
app.use(express.json());

// notes array
var notes = []


// API POST
app.post("/notes", (req, res) => {
    notes.push(req.body);
    res.json("note added sucessfully!")
})

// API GET
app.get("/notes", (req,res)=>{
    res.json(notes)
})

//API PATCH
app.patch("/notes/:index", (req, res) => {
    const index = req.params.index;

    const{title} = req.body;

    notes[index].title = title;
    res.json("note updated")
})

// API DELETE
app.delete("/notes/:index", (req,res) => {
    const index = req.params.index;

    delete notes[index];

    res.json("note deleted")
})

//listen on port - 4000
app.listen(4000, ()=>{});