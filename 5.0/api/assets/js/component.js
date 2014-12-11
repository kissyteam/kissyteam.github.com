//tab和autocomplete的js
KISSY.use("node,tabs,filter-menu,io", function (S, Node, Tabs, FilterMenu, Io) {
    var $ = Node.all;

    //api sidebar tabs
    var sideBarTab = new Tabs({
        srcNode: '#api-tabview',
        listeners : {
            afterSelectedTabChange : function(){
                filterMenu.reset();
                $('.ks-filter-menu-content .ks-menuitem').each(function(menuItem$){
                    menuItem$.parent().show();
                    menuItem$.html(menuItem$.attr('content'));
                });
            }
        }
    }).render();

    $('#api-tabview').on('mouseenter', function(ev){
        ev.halt();
    })

    var classdocsTab = null;
    if($('#classdocs').length){
        //index|methods|events|properties tabs
        classdocsTab = new Tabs({
            srcNode: '#classdocs'
        }).render();
        //例如用户收藏了地址 http://docs.kissyui.com/classes/Button.html##method_addAttr，需要更新tab状态
        if(location.hash){
            updateApiTabWithHash(location.hash);
        }
    }


    //autocomplete
    var filterMenu = new FilterMenu({
        srcNode : '#api-tabview'
    }).render();
    filterMenu.filterItems = function(str){
        str = str.toLowerCase();
        var menuItem$ = $('.ks-tabs-tab-selected').hasClass('tab-class')? $('.classes .ks-menuitem') : $('.modules .ks-menuitem');
        menuItem$.each(function(item$){
            var index,
                content = item$.attr('content').toLowerCase();
            if((index = content.indexOf(str)) > -1){
                item$.parent().show();
                content = item$.attr('content');
                content = str === "" ? content : content.substring(0, index) + '<b class="yui3-highlight">' + content.substring(index, index + str.length) + '</b>' + content.substring(index + str.length);
                item$.html(content);
            }else{
                item$.parent().hide();
            }
        });
    };

    function updateApiTabWithHash(hash){
        var selectedTab = 'index';
        if(hash.indexOf('method') > -1){
            selectedTab = 'methods';
        }else if(hash.indexOf('attr') > -1){
            selectedTab = 'attrs';
        }else if(hash.indexOf('event') > -1){
            selectedTab = 'events'
        }else if(hash.indexOf('property') > -1){
            selectedTab = 'properties';
        }

        var tabsArr = classdocsTab.getTabs(),
            shouldBeShowTab = null;
        for(var i = 0;i < tabsArr.length; i++){
            if(tabsArr[i].$el.hasClass(selectedTab)){
                shouldBeShowTab = tabsArr[i];
                break;
            }
        }
        classdocsTab.setSelectedTab(shouldBeShowTab);
        window.scrollTo(0, $(hash).offset().top - 50);
    }

    function syncApidocsUi(href){
        Io.get(href,{
            r : Math.random()
        },function(res){
            var reg = /(<div\sclass="apidocs">[\s\S]*)<div\stag="apidocs-end"/;
            var newApidocsHtml = res.match(reg)[1],
                newApidocsDom$ = $(newApidocsHtml);

            $('.apidocs').replaceWith(newApidocsDom$);

            if(href.indexOf('classes') > -1){  //如果是class的页面的话需要重新初始化tabs
                classdocsTab = new Tabs({
                    srcNode: '#classdocs'
                }).render();
            }

            //部分刷新时，更新api-options的选择状态
            (function(){
                $('#api-options label').each(function(label$){
                    var checked = label$.all('input').prop('checked'),
                        optionvalue = label$.attr('optionvalue'),
                        selector = '#classdocs .' + optionvalue;
                    checked ? $(selector).show() : $(selector).hide();
                });
            })();

            var hash = location.hash;
            hash && updateApiTabWithHash(hash);
        });
    }

    if(window.history.pushState && window.history.replaceState){
        $('#api-tabview-panel a').on('click', function(ev){
            ev.halt();
            var target$ = $(ev.currentTarget),
                href = target$.attr('href');
            syncApidocsUi(href);
            window.history.pushState({ url : href },null,href);
        });
        window.onpopstate = function(ev){
            if(ev.state){
                syncApidocsUi(ev.state.url);
            }
        }
        window.history.replaceState({ url : location.href },null,location.href);
    }

    //methods|attrs|events|properties 被点击时的跳转处理
    $('#api-doc').delegate('click', '#index .index-item a', function(ev){
        var target$ = $(ev.currentTarget),
            hash = target$.attr('href');
        if(window.history.pushState && window.history.replaceState){
            ev.halt();
            syncApidocsUi(location.href);
            updateApiTabWithHash(hash);
            var realHref = location.origin + location.pathname + hash;
            window.history.pushState({ url : realHref },null,realHref);
        }else{
            window.location.href = window.location.href + hash;
        }
    });
    //api-optional的事件处理
    $('#api-options label').on('click', function(ev){
        var target$ = $(ev.currentTarget);

        var checked = target$.all('input').prop('checked'),
            optionvalue = target$.attr('optionvalue'),
            selector = '#classdocs .' + optionvalue;
        checked ? $(selector).show() : $(selector).hide();
    });
});