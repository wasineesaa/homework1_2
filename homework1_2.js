const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

// URL ที่ 1
app.get('/about', (req, res) => {
    res.send('<body style="background-color: blue;">This is about page.</body>');
});

// URL ที่ 2
app.get('/my-json-api3', (req, res) => {
    res.json({
        University: "PIM"
    });
});

// URL ที่ 3
app.get('/users2', (req, res) => {
    res.json([
        {
            id: 1,
            firstname: 'Somchai',
            lastname: 'Jaidee'
        },
        {
            id: 2,
            firstname: 'Tony',
            lastname: 'Stark'
        }
    ]);
});

// URL ที่ 4
app.get('/read-users', (req, res) => {
    fs.readFile(__dirname + '/users.json', 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Error reading file');
        }

        res.json(JSON.parse(data));
    });
});

// Start Server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});