const express = require('express');
const app = express();

const PORT = 1338;

const indexRouter = require('./routes/index');

app.use('/', indexRouter);

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
})
