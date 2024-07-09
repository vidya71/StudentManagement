const bodyParser = require('body-parser');
const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");
const multer = require('multer');
const path = require('path');

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "root",
    database: "student_management"
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Set up storage for multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}_${file.originalname}`);
    }
});

const upload = multer({ storage });

// Serve static files from the "uploads" directory
app.use('/uploads', express.static('uploads'));

// Get all students
app.get("/api/get", (req, res) => {
    const sqlGet = "SELECT * FROM student";
    db.query(sqlGet, (error, result) => {
        if (error) {
            console.error("Error executing query:", error);
            res.status(500).send("Internal Server Error");
        } else {
            res.send(result);
        }
    });
});

// Get individual student by ID
app.get("/api/student/:id", (req, res) => {
    const { id } = req.params;
    const sqlGet = "SELECT * FROM student WHERE id = ?";
    db.query(sqlGet, [id], (error, result) => {
        if (error) {
            console.error("Error executing query:", error);
            res.status(500).send("Internal Server Error");
        } else {
            res.send(result[0]);
        }
    });
});

// Update student profile image
app.post("/api/student/:id/upload", upload.single('profileImage'), (req, res) => {
    const { id } = req.params;
    const profileImage = req.file.path;
    const sqlUpdate = "UPDATE student SET image = ? WHERE id = ?";
    db.query(sqlUpdate, [profileImage, id], (error, result) => {
        if (error) {
            console.error("Error executing query:", error);
            res.status(500).send("Internal Server Error");
        } else {
            res.send("Profile image updated successfully");
        }
    });
});

// Default route
app.get("/", (req, res) => {
    res.send("Hello everyone");
});

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});
