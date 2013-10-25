.. currentmodule:: scroll-view

ScrollView.Plugin.PullToRefresh
================================

| ScrollView的下拉刷新插件

Class
-------------------------------

    * :data:`PullToRefresh`

Configs
-------------------------------

    * :data:`pullingHtml`
    * :data:`releasingHtml`
    * :data:`loadingHtml`
    * :meth:`loadFn`

Class Details
-------------------------------

.. class:: PullToRefresh

    | **PullToRefresh()**
    | 扩展自 :class:`~base.Base` ，包含其全部配置,属性,方法,事件.
    | 插件 id ：scroll-view/plugin/pull-to-refresh

Configs Details
-------------------------------

.. data:: pullingHtml

    | 下拉时提示内容 {String}
    | 默认 'Pull down to refresh...'

.. data:: releasingHtml

    | 释放操作的提示内容 {String}
    | 默认 'release to refresh...'

.. data:: loadingHtml

    | 加载内容时的提示内容 {String}
    | 默认 `loading...`

.. method:: loadFn

    | **loadFn(callback)**
    | 加载内容的具体函数实现，自行实现，如果不给出，则无操作，只完成动画
    | callback参数在是组件内部传进来的，在加载完事之后执行这个callback即可

    :param {Function} callback: 加载完成的callback

    .. code-block:: javascript

        function loadFn(callback) {
            //load something
            //...
            //load finish
            callback();
        }


使用示例
-------------------------------

.. code-block:: javascript

    KISSY.use('scroll-view, scroll-view/plugin/pull-to-refresh', function (S, ScrollView, PullToRefresh) {
        window.scrollView = new ScrollView({
            srcNode: '#wrapper',
            plugins: [
                new PullToRefresh({
                    loadFn: function (callback) {
                        setTimeout(function () {
                            scrollView.get('contentEl').prepend('<p>line ' + i++ + '</p>');
                            scrollView.sync();
                            callback();
                        }, 500);
                    }
                })
            ]
        }).render();
    }