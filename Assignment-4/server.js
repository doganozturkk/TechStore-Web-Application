const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

/* =========================================================
   MIDDLEWARE
========================================================= */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* Static files (HTML, CSS, JS, JSON) */
app.use(express.static(__dirname));

/* =========================================================
   LOGIN API
   POST /login
========================================================= */
app.post("/login", (req, res) => {
    const { username, password } = req.body;

    const usersPath = path.join(__dirname, "users.json");

    fs.readFile(usersPath, "utf8", (err, data) => {
        if (err) {
            return res.status(500).json({
                error: "Cannot read users file."
            });
        }

        let jsonData;

        try {
            jsonData = JSON.parse(data);
        } catch (parseError) {
            return res.status(500).json({
                error: "Invalid users.json format."
            });
        }

        const users = jsonData.users || [];

        const user = users.find(
            u =>
                u.username === username &&
                u.password === password
        );

        if (user) {
            res.json({
                userId: user.id,
                message: "Login successful."
            });
        } else {
            res.status(401).json({
                error: "Invalid username or password."
            });
        }
    });
});

/* =========================================================
   GET PRODUCTS
   GET /products
========================================================= */
app.get("/products", (req, res) => {
    const itemsPath = path.join(__dirname, "items.json");

    fs.readFile(itemsPath, "utf8", (err, data) => {
        if (err) {
            return res.status(500).json({
                error: "Cannot read items file."
            });
        }

        try {
            const jsonData = JSON.parse(data);
            res.json(jsonData.items || []);
        } catch (parseError) {
            res.status(500).json({
                error: "Invalid items.json format."
            });
        }
    });
});

/* =========================================================
   ADD PRODUCT
   POST /products
========================================================= */
app.post("/products", (req, res) => {

    console.log("POST /products HIT");

    console.log("BODY:", req.body);

    const itemsPath = path.join(__dirname, "items.json");

    console.log("ITEMS PATH:", itemsPath);

    fs.readFile(itemsPath, "utf8", (err, data) => {

        if (err) {

            console.log("READ ERROR:", err);

            return res.status(500).json({
                error: "Cannot read items file."
            });
        }

        let jsonData;

        try {

            jsonData = JSON.parse(data);

        } catch (parseError) {

            console.log("PARSE ERROR:", parseError);

            return res.status(500).json({
                error: "Invalid items.json format."
            });
        }

        const items = jsonData.items || [];

        const newProduct = req.body;

        const maxId =
            items.length > 0
                ? Math.max(...items.map(item => item.id))
                : 0;

        newProduct.id = maxId + 1;

        items.push(newProduct);

        jsonData.items = items;

        fs.writeFile(
            itemsPath,
            JSON.stringify(jsonData, null, 2),
            "utf8",
            err => {

                if (err) {

                    console.log("WRITE ERROR:", err);

                    return res.status(500).json({
                        error: "Cannot save product."
                    });
                }

                console.log("PRODUCT SAVED");

                res.status(201).json({
                    message: "Product added successfully.",
                    product: newProduct
                });
            }
        );
    });
});

/* =========================================================
   TEST ROUTE
========================================================= */
app.get("/", (req, res) => {
    res.send("TechStore API is running.");
});

/* =========================================================
   START SERVER
========================================================= */
app.listen(PORT, () => {
    console.log(
        `TechStore server running at http://localhost:${PORT}`
    );
});