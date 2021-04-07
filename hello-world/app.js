const express = require('express');
const indexRouter = require('./routes/index');

const PORT = 1338;

const app = express();

app.use('/', indexRouter);

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
})
