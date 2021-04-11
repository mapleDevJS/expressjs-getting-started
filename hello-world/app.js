const express = require('express');
const dotenv = require('dotenv');
const indexRouter = require('./routes/index');

const PORT = process.env.PORT || 1338;
const app = express();

dotenv.config();

const app = express();

app.use('/', indexRouter);

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
})
