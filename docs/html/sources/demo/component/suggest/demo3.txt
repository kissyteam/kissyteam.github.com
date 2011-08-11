.. currentmodule:: Suggest

Demo - 百度的搜索提示
======================================

|  `源码 <https://github.com/kissyteam/kissy/tree/master/src/suggest/>`_

Class
-----------------------------------------------

  * :class:`Suggest`

Demo - 百度的搜索提示
--------------------------------------------------

    .. raw:: html

        <iframe width="100%" height="300" class="iframe-demo" src="../../../static/demo/suggest/demo3.html"></iframe>


    .. code-block:: javascript

        KISSY.use("suggest", function(S,Suggest) {
            // 1.1.6
            Suggest = S.Suggest;

            // Baidu
            var dataUrl = 'http://suggestion.baidu.com/su?p=3&cb=window.bdsug.sug';
            var sug = new Suggest('#kw', dataUrl, {
                resultFormat: '',
                containerCls: 'bd-sug',
                charset: 'gb2312',
                queryName: 'wd',
                callbackFn: 'bdsug.sug'
            });

            // baidu: window.bdsug.sug({q:"nike",p:true,s:["nike官网","妮可基德曼","妮可","妮可罗宾","妮可里奇","nike鞋","nike 官网","尼可","nike女","nike360"]});
            // taobao: g_ks_suggest_callback({"result": [["nike 正品", "2170000"], ["nike 专柜 正品", "834000"], ["nike 短袖", "242000"], ["nike 板 鞋", "989000"], ["nike 女鞋", "253000"], ["nike 运动鞋", "550000"], ["nike 包", "295000"], ["nike 鞋", "3160000"], ["nike 单肩包", "38500"], ["nike 09", "786000"]]})
            sug.on('dataReturn', function() {
                this.returnedData = this.returnedData.s || [];
            });
        });
