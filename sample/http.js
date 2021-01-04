const app = require('express');

const NobelPrizeLaureatesParser = require('../lib');

app.post('/', (req, res) => {
    const input = req.body;
    eval(input);
    const parser = new NobelPrizeLaureatesParser(input);
    res.json(parser.inYear(2001));
});
