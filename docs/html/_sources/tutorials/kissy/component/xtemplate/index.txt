.. _xtemplate_tutorial:

XTemplate
=============================

使用 XTemplate
-------------------------------------

Refer
```````````````````````````````````````````````````

:mod:`API<xtemplate>`

:ref:`Demo <xtemplate_demo>`


构建模板
```````````````````````````````````````````````

构建模板一般来说有三种方式：


放在页面上的模板
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

可以将模版放入页面中 type 为 kissy/xtemplate 的 script 标签中， 例如

.. code-block:: html

    <script type='kissy/xtemplate' id='tpl'>
        my first xtemplate: {{title}}
    </script>

然后在 javascript 中取出模版字符串

.. code-block:: javascript

    var tpl = KISSY.all('#tpl').html();

javascript 中的模板
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

也可以直接在 javascript 中写入模版字符串， 例如

.. code-block:: javascript

    var  tpl='<div>{{title}}</div>';



推荐：单独的模板文件
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

推荐：将模板写入单独的模板文件，然后用 kissy-nodejs 的 kissy-xtemplate 命令生成对应的模板函数。
不仅有利于代码的清晰，更省去了客户端生成模板函数的消耗，例如


x-tpl.html:

.. code-block:: html

    <div>
        {{title}}
    </div>

运行命令： ``kissy-xtemplate -t x-tpl.html -m tests/x -w`` (-w 表示监控 tpl 文件变化) 后生成


x.js:

.. code-block:: javascript

    KISSY.add('tests/x',function(){
        return function(){
          // ...
        };
    });


使用模版
``````````````````````````````


注意 :class:`~xtemplate.XTemplate` 的第一个参数既可以是预先生成的函数也可以模版字符串，那么当由第一步生成模板后，
直接 new 并 render 即可。 例如


字符串：

.. code-block:: javascript

    new XTemplate('<div>{{title}}</div>').render({title:'m'}) // => <div>m</div>


或预先函数：

.. code-block:: javascript

    KISSY.use('xtemplate,tests/x',function(S,XTemplate,tpl){
        var data={
            title: 'm'
        };
        alert(new XTemplate(tpl).render(data)); // => '<div>m</div>'
    })








