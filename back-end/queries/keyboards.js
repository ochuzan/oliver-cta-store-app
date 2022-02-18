const db = require("../db/dbConfig.js");

const getAllKeyboards = async() => {
    try {
        const allKeyboards = await db.any("SELECT * FROM keyboards");
        return allKeyboards;
    } catch (error) {
        return error;
    }
};

const getKeyboard = async(id) => {
    try {
        const keyboard = await db.one("SELECT * FROM keyboards WHERE id=$1", id);
        return keyboard;
    } catch (error) {
        return error;
    }
};

const createKeyboard = async(keyboard) => {
    try {
        const newKeyboard = db.one(
            "INSERT INTO keyboards (name, description, price, rating, featured) VALUES($1, $2, $3, $4, $5) RETURNING *",
            [keyboard.name, keyboard.description, keyboard.price, keyboard.rating, keyboard.featured]
        );
        return newKeyboard;
    } catch (error) {
        return error;
    }
};

const deleteKeyboard = async(id) => {
    try {
        const deletedKeyboard = await db.one(
            "DELETE FROM keyboards WHERE id=$1 RETURNING *",
            id
        );
        return deletedKeyboard;
    } catch (error) {
        return error;
    }
};

const updateKeyboard = async(id, keyboard) => {
    try {
        const updatedKeyboard = await db.one(
            "UPDATE keyboards SET name=$1, description=$2, price=$3, rating=$4, featured=$5 WHERE id=$6 RETURNING *",
            [keyboard.name, keyboard.description, keyboard.price, keyboard.rating, keyboard.featured, id]
        );
        return updatedKeyboard;
    } catch (error) {
        return error;
    };
}

module.exports = {
    getAllKeyboards,
    getKeyboard,
    createKeyboard,
    deleteKeyboard,
    updateKeyboard
}

