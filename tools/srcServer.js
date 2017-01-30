import express from 'express';
import fs from 'fs';
import webpack from 'webpack';
import path from 'path';
import config from '../webpack.config.dev';
import open from 'open';

/* eslint-disable no-console */

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('/get', function(req, res) {
    setTimeout(function() {
        res.json({
            Id: 1,
            Name: 'Rule',
            OperationType: 0,
            Keywords: [],
            Kontragents: [
                { Id: 1, Name: 'Kontragent1' },
                { Id: 2, Name: 'Kontragent2' },
                { Id: 3, Name: 'Kontragent3' },
                { Id: 4, Name: 'Kontragent4' }
            ],
            KontragentUsageMode: 0,
            SettlementAccounts: [],
            SettlementAccountUsageMode: 0
        });
    }, 1000);
});

app.get('/getList', function(req, res) {
    setTimeout(function() {
        res.json(getFile());
    }, 1000);
});

app.post('/save', function(req, res) {
    setTimeout(function() {
        res.sendStatus(200);
    }, 1000);
});

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function(err) {
    if (err) {
        console.log(err);
    } else {
        open(`http://localhost:${port}`);
    }
});

function getFile() {
    return JSON.parse(fs.readFileSync('db/file.json', 'utf8'));
}