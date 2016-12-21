import express from 'express';
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
    res.json({
        Id: 0,
        Name: '',
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
});

app.post('/save', function(req, res) {
    res.sendStatus(200);
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