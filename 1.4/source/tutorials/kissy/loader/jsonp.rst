使用 KISSY Loader 载入一次性的 JSONP 数据
==============================================

author: `承玉 <yiminghe@gmail.com>`_

Refer
```````````````````````````````````````````````````

| :ref:`api <Loader>`

| :ref:`demo <loader_demo>`

概述
`````````````````````````````````

通过 KISSY Loader 可以把一些一次性的 JSONP 数据也当做一个模块，通过 require 和 use 将数据和逻辑紧密绑定在一起，
提供了一个统一的数据使用方式，并且通过和逻辑代码的并行加载，提高了页面性能。

前提
```````````````````````````````````

1. 该 JSONP 数据为整个应用只取一次的数据，例如首屏广告请求。
2. 后端可以为此做出修改。



应用
```````````````````````````````````````

``http://www.x.com/jsonp/data`` 为数据提供方， ``http://www.x.com/index.html`` 为数据使用者，另外存在一个逻辑模块对数据进行处理。


数据提供方
--------------------------------

``http://www.x.com/jsonp/data?callback=KISSY.add`` 返回数据应为 jsonp 格式：


.. code-block:: javascript

    KISSY.add({
      test: '<?php echo $_GET['test'] ?>'
    });

.. note::

    此处为 php 举例.


逻辑代码
--------------------------------------

``http://x.cdn.cn/logic/process.js`` 应接收数据处理后，结合模版返回 html 字符串：


.. code-block:: javascript

    KISSY.add(function(S){

        var tpl = 'woo: {test}';

        return function(data){
            data.test+=' ok';
            return S.substitute(tpl,data);
        }

    });

配置
---------------------------------

首先页面 ``http://www.x.com/index.html`` 会配置数据源为 KISSY 模块和逻辑代码的包地址：

.. code-block:: javascript

    KISSY.config({
        modules:{
            'x-com/data':{
                fullpath: 'http://www.x.com/jsonp/data?test=success-test&callback=KISSY.add'
            }
        },

        packages:{
            logic:{
                base:'http://x.cdn.cn/'
            }
        }
    });


.. note::

    请只在这种方式下使用 ``fullpath`` 配置。


使用
---------------------------------------------

最终页面 ``http://www.x.com/index.html`` 会并行取数据和逻辑代码后渲染页面：

.. code-block:: javascript

    KISSY.use('x-com/data,logic/process',function(S, data, process){
        S.ready(function(){
            document.body.innerHTML=process(data);
        });
    })


.. note::

    推荐在这段代码放入头部 <head> 中加快执行。







