KISSY.use("tabs", function (S, Tabs) {

    var tabs = new Tabs({
        render: "#tabs",
        listeners:{
            afterSelectedTabChange:function(e){
                S.log('1 changed to: '+ e.newVal.get('content'))
            }
        },
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
        ]
    }).render();


    var tabs2 = new Tabs({
        render: "#tabs2",
        changeType: 'mouse',
        listeners:{
            afterSelectedTabChange:function(e){
                S.log('2 changed to: '+ e.newVal.get('content'))
            }
        },
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
        ]
    }).render();

});