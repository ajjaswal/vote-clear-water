const express = require('express')
const PORT = process.env.PORT || 3001;
const app = express();
const mysql = require('mysql2');

// Express middleware
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// Connect to the database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // Your MySQL username,
        user: 'root',
        // Your MySQL password
        password: '!Baku7boss',
        database: 'election'
    },
    console.log('Conected to the election database.')
);

// Create a candidate
const sql = `INSERT INTO candidates (id, first_name, last_name, industry_connected) values (?, ?, ?, ?)`;
const params = [1, 'Ronald', 'Firbank', 1];

// db.query(sql, params, (err, result) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(result);
// });

// // Delete a candidate 
// db.query(`DELETE FROM candidates WHERE id = ?`, 1, (err, result) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(result);
// });

// // GET a single candidate
// db.query(`SELECT * FROM candidates WHERE id = 1`, (err, row) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(row);
// });

// db.query(`SELECT * FROM candidates`, (err, rows) => {
//     console.log(rows);
// });

// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});


app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});