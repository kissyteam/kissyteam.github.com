.. currentmodule:: datalazyload


textarea 延迟加载
=====================================================




Class
-----------------------------------------------

  * :class:`DataLazyload`

textarea 延迟加载
----------------------------------------------

  .. raw:: html
	
	  <iframe width="100%" height="250" class="iframe-demo" src="../../../_static/demo/datalazyload/textarea_demo.html"></iframe>


  .. important::

      **这种情况下和模式的手动自动没关系!**


  将页面中需要延迟的 DOM 节点, 放在textarea里. 可以添加 hidden 等 class, 但建议用 invisible (visiblity:hidden), 并设定 height = '实际高度', 这样可以保证滚动时无缝连接.当滚动导致该 textarea 出现在当前视窗时会将该 textarea 内的 html 添加到新生成的 div 中, 并用新生成的 div 替换该 textarea .

  .. code-block:: html

      <textarea class='ks-datalazyload invisible'/>dom code</textarea>

    

  .. note::

      #. 延迟 callback 约定：dataLazyload.addCallback(el, fn) 表示当 el 即将出现时, 触发 fn.
      #. 所有操作都是最多触发一次, 比如来回拖动滚动条时, 只有 el 第一次出现时会触发 fn 回调.
