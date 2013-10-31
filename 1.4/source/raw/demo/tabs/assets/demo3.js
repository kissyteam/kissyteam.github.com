KISSY.use("tabs", function (S, Tabs) {
    var $ = S.all;
    window.tabs = new Tabs({
        render: "#tabs",
        lazyRender: true,
        items: [
            {
                title: 'tab-1',
                selected: true,
                content: '<p>panel-1</p>'
            },
            {
                title: 'tab-2',
                content: '<p>panel-2</p>'
            }
        ],
        listeners: {
            afterRenderUI: function (e) {
                if (e.target.isTabsPanel) {
                    alert(e.target.get('content'));
                }
            }
        }
    }).render();
    var index = 2;
    $('#add').on('click', function () {
        ++index;
        tabs.addItem({
            title: 'tab-' + index,
            content: '<p>panel-' + index + '</p>'
        });
    });
    $('#add-select').on('click', function () {
        ++index;
        tabs.addItem({
            title: 'tab-' + index,
            selected: true,
            content: '<p>panel-' + index + '</p>'
        });
    });
});