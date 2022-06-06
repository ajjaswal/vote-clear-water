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



// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});


app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});