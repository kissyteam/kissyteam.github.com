/**
 * KISSY Docs Server
 * @author yiminghe@gmail.com
 */

var path = require('path');
var fs = require('fs');
//noinspection JSUnresolvedVariable
var cwd = process.cwd();

function startServer(port) {
    var express = require('express');
    var app = express();
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