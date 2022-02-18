const express = require("express");
const keyboards = express.Router();
const { getAllKeyboards, getKeyboard, deleteKeyboard, createKeyboard, updateKeyboard } = require("../queries/keyboards.js");


keyboards.get("/", async(req, res) => {
    try {
        const allKeyboards = await getAllKeyboards();
        if(Array.isArray(allKeyboards)){
            res.status(200).json(allKeyboards);
        } else {
            res.status(500).json({error: "Server Error"});
        }
    } catch (error) {
        console.log(error);
    }
})

keyboards.get("/:id", async(req, res) => {
    const { id } = req.params;

    try {
        const keyboard = await getKeyboard(id);
        if(keyboard.id){
            res.status(200).json(keyboard);
        } else {
            res.status(500).json({error: "Keyboard not found"});
        }
    } catch (error) {
        console.log(error);
    }
});

keyboards.post("/", async(req, res) => {
    const keyboard = req.body;

    try {
        const createdKeyboard = await createKeyboard(keyboard);
        if(createdKeyboard.id){
            res.status(200).json(createdKeyboard);
        } else {
            res.status(500).json({error: "Keyboard not created"})
        }
    } catch (error) {
        console.log(error);
    }
});


keyboards.delete("/:id", async(req, res) => {
    const { id } = req.params;
    try {
        const deletedKeyboard = await deleteKeyboard(id);
        if(deletedKeyboard.id){
            res.status(200).json(deletedKeyboard);
        } else {
            res.status(404).json({error: "Keyboard not found"});
        }
    } catch (error) {
        console.log(error);
    }
});

keyboards.put("/:id", async(req, res) => {
    const { id } = req.params;
    const keyboard = req.body;
    
    const updatedKeyboard = await updateKeyboard(id, keyboard);
    if(updatedKeyboard.id){
        res.status(200).json(updatedKeyboard);
    } else {
        res.status(404).json({error: "Keyboard not found"});
    }
});

module.exports = keyboards;
