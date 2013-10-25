.. _xtemplate_tutorial:

使用 XTemplate
-------------------------------------

author: `承玉 <yiminghe@gmail.com>`_

Refer
```````````````````````````````````````````````````

:mod:`API<xtemplate>`

:ref:`Demo <xtemplate_demo>`


构建模板
```````````````````````````````````````````````


页面中的模板
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



单独的模板文件
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

将模板写入单独的模板文件，然后用 kissy-pie 等工具生成模版字符串模块，例如


x-tpl.html:

.. code-block:: html

    <div>
        {{title}}
    </div>


运行工具后生成


x.js:

.. code-block:: javascript

    KISSY.add('tests/x',function(){
        return '<div>.....';
    });


使用模版
``````````````````````````````

注意 :class:`~xtemplate.XTemplate` 的第一个参数是模版字符串，那么当由第一步生成模板后，
直接 new 并 render 即可。 例如


字符串：

.. code-block:: javascript

    new XTemplate('<div>{{title}}</div>').render({title:'m'}) // => <div>m</div>


或预先的模版文件：

.. code-block:: javascript

    KISSY.use('xtemplate,tests/x',function(S,XTemplate,tpl){
        var data={
            title: 'm'
        };
        alert(new XTemplate(tpl).render(data)); // => '<div>m</div>'
    })








