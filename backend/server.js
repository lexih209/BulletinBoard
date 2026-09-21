const express = require("express");
const db = require("./database");
const bcrypt = require("bcrypt");

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("BulletinBoard backend is running!");
});

app.post("/register", async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({
            message: "Username, email, and password are required."
        });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);

        const statement = db.prepare(`
            INSERT INTO users (username, email, password)
            VALUES (?, ?, ?)
        `);

        const result = statement.run(username, email, hashedPassword);

        res.status(201).json({
            message: "User registered successfully.",
            userId: result.lastInsertRowid
        });
    } catch (error) {
        res.status(400).json({
            message: "Unable to register user.",
            error: error.message
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});