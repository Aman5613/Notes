const express = require("express");  // requring express
const connectToDB = require("./SRC/DB/db");
const noteModel = require("./SRC/Models/notes.model");


// DB connection
connectToDB();

// server create ho gya yha pe
const app = express();


// middle-ware
app.use(express.json());


// API POST
app.post("/notes",async (req, res) => {

    const{title, description} = req.body;  // destructring of note data

    console.log(title, description);

    // atlas ke database me direct note ka data send karne ke liye
    await noteModel.create({
        title,description
    })
    .then(()=>{console.log("model sahi hai bhai");
    })
    .catch(()=>{console.log("model pe kaam karo");
    })

    // response send karne ke liye
    res.json("note added sucessfully!")
})

// API GET
app.get("/notes",async (req,res)=>{
    var note = await noteModel.find()
    res.json(note);
    
})

//API PATCH ->  for updating 
app.patch("/notes/:id", async (req, res) => {
    const id = req.params.id

    const user = await noteModel.findByIdAndUpdate(id, req.body)
    console.log("note : ",user);

    res.json("updated sucessfully!")
})

// API DELETE
app.delete("/notes/:id",async (req,res) => {
    const id = req.params.id
    await noteModel.findOneAndDelete(id)
    res.json("Deleted sucessfully!")
})

//listen on port - 3000
app.listen(3000, ()=>{});