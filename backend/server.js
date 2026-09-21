const express = require("express");
const db = require("./database");
const bcrypt = require("bcryptjs");

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

app.post("/login", async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({
            message: "Email and password are required."
        });
    }

    try {
        const user = db
            .prepare("SELECT * FROM users WHERE email = ?")
            .get(email);

        if (!user) {
            return res.status(401).json({
                message: "Invalid email or password."
            });
        }

        const passwordMatches = await bcrypt.compare(
            password,
            user.password
        );

        if (!passwordMatches) {
            return res.status(401).json({
                message: "Invalid email or password."
            });
        }

        res.status(200).json({
            message: "Login successful.",
            userId: user.id,
            username: user.username
        });
    } catch (error) {
        res.status(500).json({
            message: "Unable to log in.",
            error: error.message
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});