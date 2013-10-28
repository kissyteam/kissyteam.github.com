KISSY.use('node, event', function(S, Node, Event) {
    var $ = Node.all;
    var logger = [S.getLogger('kissy:')];

    $('#warn').on('click', function(event) {
        S.each(logger, function(item) {
            item.warn('This is Warn');
        });
    });

    $('#info').on('click', function(event) {
        S.each(logger, function(item) {
            item.info('This is Info');
        });
    });

    $('#debug').on('click', function(event) {
        S.each(logger, function(item) {
            item.debug('This is Debug');
        });
    });

    $('#error').on('click', function(event) {
        S.each(logger, function(item) {
            item.error('This is Error');
        });
    });

    $('#set').on('click', function(event) {

        S.config('logger', {
            excludes: [
                {
                    logger: /^xx\//,
                    maxLevel: 'info'
                }
            ]
        });

        logger.push(S.getLogger('xx:'));
        logger.push(S.getLogger('yy:'));
        logger.push(S.getLogger('zz:'));
        logger.push(S.getLogger('xx/y:'));
    });
});


