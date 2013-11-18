使用 XTemplate 预编译机制
-------------------------------------

author: `承玉 <yiminghe@gmail.com>`_

Refer
```````````````````````````````````````````````````

:mod:`API<xtemplate>`

:ref:`Demo <xtemplate_demo>`


运行
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

将模板写入单独的模板文件，然后用 kissy-nodejs 的 kissy-xtemplate 命令生成对应的模板函数。
不仅有利于代码的清晰，更省去了客户端生成模板函数的消耗，例如


x.xtpl.html:

.. code-block:: html

    <div>
        {{title}}
    </div>

运行命令： ``kissy-xtemplate -p ./ -w`` 后生成模板函数.
(-w 表示监控包目录内的 tpl 文件变化, -n 表示包名, -p 表示对应包所在的目录)


x.js:

.. code-block:: javascript

    KISSY.add(function(){
        return function(){
          // ...
        };
    });

.. note::

    kissy-xtemplate 安装步鄹：

    #. npm install -g kissy

    通常测试版不会发送到 npm，这时推荐下载指定的 git 版本到本地目录安装，
    例如下载 `主干 <https://github.com/kissyteam/kissy/archive/master.zip>`_ 到 d:/code

    #. cd d:/code
    #. npm link

使用
``````````````````````````````


注意 :class:`~xtemplate.XTemplate` 的第一个参数可以是预先生成的函数，那么当由第一步生成模板后，
直接 new 并 render 即可。 例如


.. code-block:: javascript

    KISSY.use('xtemplate/runtime,tests/x',function(S,XTemplate,tpl){
        var data={
            title: 'm'
        };
        alert(new XTemplate(tpl).render(data)); // => '<div>m</div>'
    });