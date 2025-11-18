const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

const myScript = `
print("Hello from Render hosted script!")
`;

app.get('/script', (req, res) => {
    res.type('text/plain');
    res.send(myScript);
});

app.listen(port, () => {
    console.log('Server running');
});
