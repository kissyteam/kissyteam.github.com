combo 多个包
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

author: 阿古

Refer
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

| :ref:`api <Loader>`

| :ref:`demo <loader_demo>`

针对 1.3.1+

简单使用
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

如果想将多个包combo到一起，需要通过配置参数group来实现。例如，对于以下包进行combo：

* pkg-a

.. code-block:: javascript

    {
        name: "pkg-a",
        path: "http://example.com/pkg-a",
        group: "group1",
        combine: true,
        tag: "20120222"
    }


* pkg-b

.. code-block:: javascript

    {
        name: "pkg-b",
        path: "http://example.com/pkg-b",
        group: "group1",
        combine: true,
        tag: "20130303"
    }
    

* pkg-c

.. code-block:: javascript

    {
        name: "pkg-c",
        path: "http://example.com/pkg-c",
        combine: true,
        tag: "20111111"
    }
    

由于pkg-a和pkg-b的group设置为"group1"，则KISSY会对这两个包的模块进行combo。而pkg-c则单独combo。产生URL如下：

.. code-block:: javascript

    http://example.com/??pkg-a/mod1.js,pkg-a/mod2.js,pkg-b/mod1.js,...?t=-389697156.js
    http://example.com/pkg-c/??mod1.js,...?t=20111111.js


其中，时间戳?t=-389697156.js是根据pkg-a和pkg-b的时间戳tag来计算的。如果修改了其中一个包的时间戳，则combo后的时间戳也会变化。

容错
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

极端情况下，即使要combo的包路径path没有统一的前缀，也没有关系，KISSY可以自动识别和容错，分别对两个包进行combo。例如：

* pkg-a

.. code-block:: javascript

    {
        name: "pkg-a",
        path: "http://example.com/pkg-a",
        group: "group2",
        combine: true,
        tag: "20120222"
    }
    

* test

.. code-block:: javascript

    {
        name: "test",
        path: "http://g.tbcdn.cn",
        group: "group2",
        combine: true,
        tag: "20130303"
    }
    

combo后的URL如下：

.. code-block:: javascript

    http://example.com/pkg-a/??mod1.js,mod2.js,...
    http://g.tbcdn.cn/test/??mod1.js,...
    

另外，如果要combo的各个包字符集charset不同，则会针对每种字符集分别combo。例如：

* pkg-a

.. code-block:: javascript

    {
        name: "pkg-a",
        path: "http://example.com/pkg-a",
        charset: "utf-8",
        group: "my",
        combine: true
    }
    

* pkg-b

.. code-block:: javascript

    {
        name: "pkg-b",
        path: "http://example.com/pkg-b",
        charset: "gbk",
        group: "my",
        combine: true
    }
    

combo后的URL如下：

.. code-block:: javascript

    http://example.com/pkg-a/??mod1.js,...
    http://example.com/pkg-b/??mod1.js,...
    

和 kissy 一起 combo
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

如果你的应用代码和 kissy 部署在同一台机器上，那么应用代码还可以和 kissy 一起 combo

.. code-block:: javascript

    // 所有包都 combo 到 tb 组
    KISSY.config('group','tb');
    