.. currentmodule:: switchable


使用普通标签页
========================================================

Class
-----------------------------------------------

  * :class:`Switchable`


使用普通标签页
--------------------------------------------------

    .. raw:: html

        <iframe width="100%" height="200" class="iframe-demo" src="../../../_static/demo/switchable/demo2.html"></iframe>


    **组织 HTML 结构**

    .. code-block:: html

       <div id="demo2" class="s-demo">
            <ul class="ks-switchable-nav">
                <li aria-labelledby='a_tip' title="标题的title">
                    <span style="display:none" id="a_tip">标题 A，可左右键切换操作</span>
                    <a href="http://www.taobao.com">标题 A</a></li>
                <li><a href="http://www.taobao.com">标题 B</a></li>
                <li>标题 C</li>
                <li>标题 D</li>
                <li>标题 E</li>
            </ul>
            <div class="ks-switchable-content">
                <div style="display: none"><a href="#"> 内容 a</a></div>
                <div style="display: none"><a href="#">内容 B</a></div>
                <div style="display: none"><a href="#">内容 C</a></div>
                <div style="display: none"><a href="#">内容 D</a></div>
                <div style="display: none">
                    <!-- 使用textarea实现延迟内容加载 -->
                    <textarea class="ks-datalazyload-custom">
                        <a href="#">我是延迟内容</a>
                        <script>alert('我是延迟内容中的脚本，仅在第一次加载时执行。');</script>
                    </textarea>
                </div>
            </div>
        </div>


    **JS 初始化**

    .. literalinclude:: /_static/demo/switchable/assets/demo2.js
           :language: javascript
         
    
    **标签切换触发规则**
  
    - \- 在当前 trigger 中 mouseover/mouseout, click, focus, 不触发
    - \- 鼠标快速滑过非当前 trigger, 不触发
    - \- mouseover 到非当前 trigger, 停留时间到达延迟时，触发
    - \- click 或 Tab 切换到 trigger, 立即触发
    - \- beforeSwitch/switch 事件的触发
    - \- 延迟的内容能正确加载
    
    **快捷键说明**

    * \- 左/上键:当焦点在标签时转到上一个标签
    * \- 右/下键:当焦点在标签时转到下一个标签
    * \- Control + PgUp : 当然焦点在容器内时转到当前标签上一个标签
    * \- Control + PgDn : 当然焦点在容器内时转到当前标签下一个标签


