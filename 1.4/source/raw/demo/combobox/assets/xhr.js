KISSY.use("event,combobox", function (S, Event, ComboBox, SearchMenuItem) {

    /*
     remote dataSource
     */
    (function () {

        var tmpl = "<div class='item-wrapper'>" +
            "<span class='item-text'>{text}</span>" +
            "<span class='item-count'>约{count}个宝贝</span>" +
            "</div>";

        var basicComboBox = new ComboBox({
            prefixCls: 'search-',
            placeholder: '点我搜索',
            srcNode: S.one("#combobox"),
            // width: 500,
            dataSource: new ComboBox.RemoteDataSource({
                xhrCfg: {
                    url: 'http://suggest.taobao.com/sug',
                    dataType: 'jsonp',
                    data: {
                        k: 1,
                        code: "utf-8"
                    }
                },
                paramName: "q",
                parse: function (query, results) {
                    // 返回结果对象数组
                    return results.result;
                },
                cache: true
            }),
            format: function (query, results) {
                var ret = [];
                S.each(results, function (r) {
                    var item = {
                        // 点击菜单项后要放入 input 中的内容
                        textContent: r[0],
                        // 菜单项的
                        content: S.substitute(tmpl, {
                            text: r[0],
                            count: r[1]
                        })
                    };
                    ret.push(item);
                });
                return ret;
            }
        });
        basicComboBox.render();

        var html = '<div class="item-wrapper tdg-box">' +
            '<form method="get" action="http://s.taobao.com/search" class="clearfix">' +
            '<input type="hidden" class="tdg-query" name="q" value="gs">' +
            '<input type="hidden" value="tdg1" name="from"><h5>同店购：</h5>' +
            '<input type="text" value="gs" class="tdg-input" tabindex="0"' +
            ' placeholder="第一件宝贝"><em>+</em>' +
            '<input type="text" value="" class="tdg-input" ' +
            'tabindex="1" placeholder="另一宝贝"><em>+</em>' +
            '<input type="text" value="" class="tdg-input" tabindex="2"' +
            ' placeholder="另一宝贝">' +
            '<button class="tdg-btn" type="submit" ' +
            'tabindex="3">搜索</button></form></div>';

        basicComboBox.on("afterCollapsedChange", function (e) {
            var self = this;
            if (!e.newVal) {
                var menu = self.get('menu');
                var menuEl = menu.get('el'), footer;
                if (!(footer = menuEl.one(".search-combobox-menu-footer"))) {
                    footer = new S.Node("<div class='search-combobox-menu-footer'></div>").appendTo(menuEl);
                }
                if (!footer.children().length) {
                    footer.append(html);
                }
                footer.one(".tdg-input")
                    .val(basicComboBox.get('input').val())
            }
        });

        basicComboBox.on('afterRenderData', function () {
            S.log('afterRenderData');
        });

        basicComboBox.on('click', function (e) {
            S.log('search: ' + basicComboBox.get('value'));
            //S.all('#search')[0].click();
        });

        S.all('#search').on('click', function () {
            //location.hash = '#!q=' + basicComboBox.get('input').val();
        });
    })();
});