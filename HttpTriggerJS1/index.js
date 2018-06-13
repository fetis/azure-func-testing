var json = require('./test.json');
var oneLinerJoke = require('one-liner-joke');

module.exports = function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');


    if (req.query.name || (req.body && req.body.name)) {
        const name = req.query.name || req.body.name;
        const joke = oneLinerJoke.getRandomJokeWithTag('stupid');

        const result = {
            data: `Hello ${name}. Here's joke for you?`,
            json,
            joke: joke.body 
        }

        context.res = {
            headers: {
                "Content-Type": 'application/json',
            },
            body: result
        };
    }
    else {
        context.res = {
            status: 400,
            body: "Please pass a name on the query string or in the request body"
        };
    }
    context.done();
};