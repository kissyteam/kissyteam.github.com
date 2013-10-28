/**
 * KISSY Docs Server
 * @author yiminghe@gmail.com
 */

var path = require('path');
var fs = require('fs');
//noinspection JSUnresolvedVariable
var cwd = process.cwd();

function startsWith(str, prefix) {
    return str.lastIndexOf(prefix, 0) === 0;
}

function endsWith(str, suffix) {
    var ind = str.length - suffix.length;
    return ind >= 0 && str.indexOf(suffix, ind) == ind;
}

function startServer(port) {
    var express = require('express');
    var app = express();
    // combo
    app.use('/', function (req, res, next) {
        var query = req.query, k,
            combo = "",
            path = cwd + req.path;

        for (k in query) {
            if (startsWith(k, '?')) {
                combo = k;
                break;
            }
        }

        var codes = [];

        if (startsWith(combo, '?')) {
            var nextQ = combo.slice(1).indexOf('?');
            if (nextQ == -1) {
                nextQ = combo.length;
            } else {
                nextQ++;
            }
            combo = combo.slice(1, nextQ);
            var files = combo.split(',');
            var f = files[0];
            files.forEach(function (f) {
                codes.push(fs.readFileSync(path + f));
            });
            if (endsWith(f, '.js')) {
                res.setHeader("Content-Type", "application/x-javascript");
            } else {
                res.setHeader("Content-Type", "text/css");
            }
            res.send(codes.join('\n'));
        } else {
            next();
        }
    });
    // app.use(express.compress());
    //noinspection JSUnresolvedFunction
    app.use(express.cookieParser());
    //noinspection JSUnresolvedFunction
    app.use(express.bodyParser());
    //noinspection JSUnresolvedFunction
    app.use(express.static(cwd));
    app.use(express.directory(cwd));
    app.listen(port);
}

startServer(7777);