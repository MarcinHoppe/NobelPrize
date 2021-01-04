const app = require('express');

const NobelPrizeLaureatesParser = require('../lib');

app.post('/', (req, res) => {
    const input = req.body.replace(/^\s+|\s+$/g, '');
    eval(input);
    const parser = new NobelPrizeLaureatesParser(input);
    res.json(parser.inYear(2001));
});

app.listen(3000, () => {
    console.log('Running!');
});
