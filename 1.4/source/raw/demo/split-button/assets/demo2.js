KISSY.use('split-button', function (S, SplitButton) {
    var $ = S.all;
    $(".ks-split-button").each(function (n) {
        new SplitButton({
            srcNode: n,
            listeners: {
                'click': function (e) {
                    alert('click: ' + e.target.get('content'));
                }
            }
        }).render();
    });

    new SplitButton({
        render: "#para2",
        button: {
            xclass: 'button',
            content: 'action'
        },
        alignWithEl: false,
        menuButton: {
            xclass: 'menu-button',
            matchElWidth: false,
            collapseOnClick: true,
            menu: {
                xclass: 'popupmenu',

                children: [
                    {
                        content: 'some action'
                    },
                    {
                        content: 'more action'
                    }
                ]
            },
            listeners: {
                'click': function (e) {
                    this.get('parent').get('button')
                            .set('content', e.target.get('content'));
                }
            }
        },
        listeners: {
            'click': function (e) {
                alert('click: ' + e.target.get('content'));
            }
        }
    }).render();
});