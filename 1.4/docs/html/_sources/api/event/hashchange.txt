.. currentmodule:: event



hashchange
====================================

目前除了 ie67 外都原生支持 `hashchange <https://developer.mozilla.org/en/DOM/window.onhashchange>`_ 事件，kissy 对 ie67 也模拟兼容了该事件.

当浏览器的 hash 值发生变化时会触发此事件，常常被用来实现单页面应用（ `存在广泛争议 <http://danwebb.net/2011/5/28/it-is-about-the-hashbangs>`_ ）.

.. note::
    当用户点击后退与前进进行浏览器导航时会引起 hash 变化.

语法
-------------------------------------

.. note::
    此事件只能在当前 window 上注册，注册到其他类型元素上无效！
    hash 值推荐为 `!/xx/ <http://www.google.com/support/webmasters/bin/answer.py?hl=cn&answer=174992>`_ 形式, 前面用 ``!/`` 后面用 ``/`` 包起来，否则 ``ie67`` 可能有诡异现象.

.. code-block:: javascript

    var $=KISSY.all;
    $(window).on("hashchange",function(){
        // location.hash -> 当前 hash 值
    });
    
示例
-------------------------------

hash 驱动的单页面应用设计

.. raw:: html

    <iframe width="100%" height="135" class="iframe-demo" src="/1.4/source/raw/api/event/hashchange.html"></iframe>

.. literalinclude:: /raw/api/event/hashchange.html
       :language: html

