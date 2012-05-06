.. currentmodule:: io



io.serialize
=================================

Module
-----------------------------------------------

  * :mod:`io`


Method
-----------------------------------------------

.. method:: serialize

    | string **serialize** ( elements )
    | 序列化一系列表单元素为可提交的字符串
    
    :param string|Array<HTMLElement>|HTMLElement|KISSY.NodeList elements: 代表表单元素（input form select ...）的集合，参数格式同 :func:`~dom.query`   
    :returns: 序列化后的字符串
    :rtype: string
    
    
    .. note::

        是否真的要使用该方法？ ``ajax`` 提交的话可以直接设置 :data:`~io.cfg.form` 参数


    该方法返回一个将表单元素 url 编码过的字符串，表单元素通常包括 <input> <textarea> <select> ，或者直接对整个 <form> 元素的所有表单子孙元素进行序列化


    | 例如以下 html :

    .. code-block:: html

        <form id='f'>
          <div><input type="text" name="a" value="1" id="a" /></div>
          <div><input type="text" name="b" value="2" id="b" /></div>
          <div><input type="hidden" name="c" value="3" id="c" /></div>
          <div>
            <textarea name="d" rows="8" cols="40">4</textarea>
          </div>
          <div><select name="e">
            <option value="5" selected="selected">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
          </select></div>
          <div>
            <input type="checkbox" name="f" value="8" id="f" />
          </div>
          <div>
            <input type="submit" name="g" value="Submit" id="g" />
          </div>
        </form>

    运行

    .. code-block:: javascript

        KISSY.ready(function(S){
            S.log(S.io.serialize("#f"));
        });

    可得到如下字符串:

    .. code-block:: javascript

        a=1&b=2&c=3&d=4&e=5

    也可以只序列化一部分

    .. code-block:: javascript

        KISSY.ready(function(S){
            S.log(S.io.serialize(S.all("#f").all("input")));
        });

    可得到如下字符串:

    .. code-block:: javascript

        a=1&b=2&c=3

    .. note::

        #. 该方法不会自动去重，重复的元素会产生具有重复部分的产生串
        #. 只有 `successful controls <http://www.w3.org/TR/html401/interact/forms.html#h-17.13.2>`_ 会被序列化为字符串. 因为表单不是用提交按钮提交的，那么提交按钮不会被序列化。只有具备 ``name`` 属性的元素才可能被序列化。文件上传元素不会被序列化
    
Demo
------------------------------------

    **实时动态序列化整个 form**

    .. raw:: html

         <iframe width="100%" height="200" class="iframe-demo"  src="../../../static/api/core/ajax/serialize.html"></iframe>


    .. literalinclude:: /_static/api/core/ajax/serialize.html
       :language: html

