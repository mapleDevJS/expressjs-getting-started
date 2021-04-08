const express = require('express');
const dotenv = require('dotenv');

const PORT = process.env.PORT || 1338;
const app = express();

dotenv.config();

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
})
