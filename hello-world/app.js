const express = require('express');
const app = express();
const PORT = 1338;

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
})

