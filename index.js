const app = require('express')();

const Parser = require('./lib');

app.post('/', (req, res) => {
    let resBody;
    try {
        resBody = new Parser(req.body).inYear(2001);
    }
    catch (error) {
        res.statusCode = 500;
        res.setHeader("Content-Type", "text/plain");
        res.end(error.stack);
        return;
    }
    res.statusCode = 200;
    res.json(resBody);
});

app.listen(3000, () => {
    console.log('Running!');
});
