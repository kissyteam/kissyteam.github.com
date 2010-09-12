.. _extendwidgets:


扩展已有组件
===============================================
KISSY 提供的现有组件, 大体能够满足80%以上的需求, 但不可避免地, 在某些特殊场景下, 并没有考虑及实现特定的功能. 所以需要我们在已有组件的基础上进行, 针对某些情况下的功能扩展.

下面, 通过介绍如何实现 kwicks 效果, 以此来介绍如何对 KISSY 已有组件进行扩展.


扩展 Switchable
----------------------

先看效果: 

.. raw:: html
   
    <div class="demo">
        <script src="http://github.com/kissyteam/kissy/raw/master/src/switchable/switchable.js"></script>
        <script src="demo/kwicks.js"></script>
        
        <style>
            .kwicks {
                width: 600px;
                height: 420px;
                overflow: hidden;
                position: relative;
            }
            .kwicks li {
                position: absolute;
                left: 0;
                top: 0;
                cursor: pointer;
            }
        </style>
        <div class="kwicks">
            <ul id="J_kwicks">
                <li class="ks-switchable-trigger ks-switchable-panel"><img height="420" width="450" src="http://eyedraw.eu/wp-content/uploads/2009/05/squidchef2.png"></li>
                <li class="ks-switchable-trigger ks-switchable-panel"><img height="420" width="450" src="http://eyedraw.eu/wp-content/uploads/2009/05/photomoose.png"></li>
                <li class="ks-switchable-trigger ks-switchable-panel"><img height="420" width="450" src="http://eyedraw.eu/wp-content/uploads/2009/01/hackfest1.png"></li>
            </ul>
        </div>
        <script>
            KISSY.ready(function(S) {
                new S.Kwicks('#J_kwicks');
            });
        </script>
        
    </div>
        

一组图片, 鼠标 hover 或者 click 某张图片时, 这张图片完整显示, 余下图片稍加压缩显示. 这样的效果, 也常能在一些网站 [1]_ 上见到. 这与 Switchable 的切换效果很类似. 所以我们可以基于 Switchable 来实现这个 kwicks 效果.

完整代码:

.. literalinclude:: demo/kwicks.js
   :language: javascript
   :lines: 5-
   :linenos:


这样扩展之后, 引入 ``kwicks.js`` , 通过 ``new S.Kwicks('#J_kwicks');`` 调用即可~~

.. note::

    在 KISSY 中, 写扩展和写组件, 其实代码结构很类似. 只是扩展组件是在已有组件的基础上进行的, 有很多代码都是可以重用的, 这边, 需要注意的是:
    
     #. 可以使用 ``S.extend()`` 进行扩展, 或者以插件形式, 如 ``Switchable.Plugins.push()`` 来组织代码, 具体参考 ``S.Swichable.Plugins`` ;
     #. 配置选项的提供, 如果父类已经有了, 本身就不必提供了.


发布你的扩展
----------------------
当你写完扩展之后, 可以把她放在 Kissyteam 的 KISSY Gallery [2]_ 中, 这个项目空间专门用于存放社区贡献的正式组件. 
所以你可以把 **自己写的 KISSY 组件/扩展** 都可以提交到这里, 这样别人也可以使用你的组件/扩展了. 

下面, 就拿  kwicks 组件的发布来举个例子,
 #. 在下步之前, 需要你会使用 git 的一些最基本操作, 如果你还不知道, 请先看 git 的基本使用文档吧 [2]_ ;
 #. 首先进入到 KISSY Gallery [3]_ 的 github 网页上, 将这个工程 Fork 到自己的 github 账户中, 这样, github 会帮你建立一个 如 [4]_ 的 gallary 工程空间, 且你有权进行读写操作;
 #. 当 Fork 到本地之后, 进入 kissy-gallery 目录, 新建一个以你的组件名字小写的目录, 如 ``kwicks``;
 #. 将你的代码组织好后, 放入这个目录, 目录结构一般包含:
    
    * 说明文件, 如 ``README``, 写一些说明等;
    * 源代码文件, 如 ``kwicks.js``, 源代码代码组织请尽量遵循 :ref:`KISSY组件开发流程 <kissyflow>` ;
    * 测试文件, 如 ``kwicks.html``, 给出你的组件的基本使用方式;
    
 #. 提交并 Push 到你的 gallery 工程上;
 #. 如果你觉得这个组件/扩展非常稳定了, 就可以到你的 gallery 工程, 如 [4]_ 上发起合并请求(Pull Request), 等待审核后就可以合并到 kissyteam 的 kissy-gallery 中了.

这样发布之后, 其他同学也能 Fork 你的代码并很有可能会发邮件向你询问某某某东西了, 赶快试一下吧~




这节讲述了组件扩展及其发布的相关内容, 我们可以通过扩展满足 99% 的需求, 还有 1% 的那些, 估计就得从头开始实现了. 

所以还是得多多练习, 才能逐渐深入! :ref:`下一步 <nextstep>` ...

.. rubric:: 参考链接

.. [1] `kwicks <http://eyedraw.eu/>`_ ;
.. [2] `GIT 文档 <http://www.slideshare.net/chacon/getting-git>`_ ;
.. [3] `KISSY Gallery <http://github.com/kissyteam/kissy-gallery>`_ ;
.. [4] `My Gallery <http://github.com/lizzie/kissy-gallery>`_ ;


