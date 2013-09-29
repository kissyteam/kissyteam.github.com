/**
 build docs for kissy
 @author yiminghe@gmail.com
 */
var options = {
    'html': {
        help: 'to make standalone HTML files',
        postInfo: 'The HTML pages are in {buildDir}/html.'
    },
    'dirhtml': {
        help: 'to make HTML files named index.html in directories',
        'postInfo': 'The HTML pages are in {buildDir}/dirhtml.'
    },
    'singlehtml': {
        help: 'to make a single large HTML file',
        'postInfo': 'The HTML pages are in {buildDir}/singlehtml.'
    },
    'pickle': {
        help: 'to make pickle files',
        'postInfo': 'The pickle pages are in {buildDir}/pickle.'
    },
    'json': {
        help: 'to make JSON files',
        'postInfo': 'The json pages are in {buildDir}/json.'
    },
    'htmlhelp': {
        help: 'to make HTML files and a HTML help project',
        'postInfo': 'you can run HTML Help Workshop with the .hhp project file in {buildDir}/htmlhelp.'
    },
    'qthelp': {
        help: 'to make HTML files and a qthelp project',
        'postInfo': 'you can run "qcollectiongenerator" with the ' +
            '.qhcp project file in {buildDir}/qthelp, like this:' +
            '> qcollectiongenerator {buildDir} qthelp KISSYDOCS.qhcp' +
            'To view the help file:' +
            '> assistant -collectionFile {buildDir} qthelp KISSYDOCS.ghc'
    },
    'devhelp': {
        help: 'to make HTML files and a Devhelp project',
        'postInfo': ''
    },
    'epub': {
        help: 'to make an epub',
        'postInfo': 'The epub file is in {buildDir}/epub.'
    },
    'latex': {
        help: 'to make LaTeX files, you can set PAPER=a4 or PAPER=letter',
        'postInfo': 'the LaTeX files are in {buildDir}/latex.'
    },
    'text': {
        help: 'to make text files',
        'postInfo': 'The text files are in {buildDir}/text.'
    },
    'man': {
        help: 'to make manual pages',
        'postInfo': 'The manual pages are in {buildDir}/man.'
    },
    'changes': {
        help: 'to make an overview over all changed/added/deprecated items',
        'postInfo': 'The overview file is in {buildDir}/changes.'
    },
    'linkcheck': {
        help: 'to check all external links for integrity',
        'postInfo': 'Link check complete; look for any errors in the above output or in {buildDir}/linkcheck/output.txt.'
    },
    'doctest': {
        help: 'to run all doctests embedded in the documentation if enabled',
        'postInfo': 'look at the results in {buildDir}/doctest/output.txt.'
    }
};
var SUBSTITUTE_REG = /\\?\{([^{}]+)\}/g;
function substitute(str, o, regexp) {
    return str.replace(regexp || SUBSTITUTE_REG, function (match, name) {
        if (match.charAt(0) === '\\') {
            return match.slice(1);
        }
        return (o[name] === undefined) ? EMPTY : o[name];
    });
}
var child_process = require('child_process');
var fs = require('fs-extra');
var program = require('./tools/commander/');
program.version(require('./package.json').version);
program.option('-b, --build-version <buildVersion>', 'Set build version of kissy docs')
    .option('--stable', 'Set current docs stable')
    .option('-c, --clean', 'clean current build');
for (var o in options) {
    program.option('--' + o, options[o].help);
}
program.parse(process.argv);

var buildVersion = program.buildVersion;
var sphinxBuild = 'sphinx-build';
var buildDir = buildVersion + '/docs/';
var sourceDir = buildVersion + '/source/';
var stableBuildDir = './docs/';
var sphinxOptions = ['-d', buildDir + 'doctrees', sourceDir ];
(function () {
    if (program.clean) {
        fs.rmdirSync(buildDir);
        if (program.stable) {
            fs.rmdirSync(stableBuildDir);
        }
        return;
    }
    var option = 'html';
    var postInfo = 'Build finished. ';
    for (var o in options) {
        if (program[o]) {
            console.log(o);
            option = o;
            postInfo += substitute(options[o].postInfo, {
                buildDir: buildDir
            });
            break;
        }
    }
    sphinxOptions.unshift('-b', option);
    sphinxOptions.push(buildDir + option);

    child_process.spawn(sphinxBuild, sphinxOptions, {
        stdio: 'inherit'
    }).on('close', function (code) {
            if (!code && program.stable) {
                fs.copy(buildDir, stableBuildDir);
            }
            console.log(postInfo);
        });
})();

