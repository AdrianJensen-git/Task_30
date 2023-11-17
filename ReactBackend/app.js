const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const helmet = require('helmet');
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.json())
app.use(helmet());
const http = require('http');

function userSearch(url= ``, data = {name: ""}) {

    const api = fetch("https://docs.github.com/en/rest?apiVersion=2022-11-28");

    app.get('/', function (req, res) {
        api(req.params.name)
        .then((data) => {
            console.log(data);
        });
    });

    return fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json());
}

userSearch(`/result`, {})
.then(data => console.log(JSON.stringify(data)))
.catch(error => console.log(error));


app.listen(8000, function() {
    console.log('App listening on port 8000')
})

module.exports = app;