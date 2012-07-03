.. currentmodule:: datalazyload

DataLazyload 手动模式
=====================================================

Class
-----------------------------------------------

  * :class:`DataLazyload`

DataLazyload 手动模式
-------------------------------
  .. raw:: html
	
	  <iframe width="100%" height="450" class="iframe-demo" src="../../../static/demo/datalazyload/manual_demo.html"></iframe>
		
		
  页面加载的时候采用了懒加载，向下滚动的时候才会加载后面的图片，网速快的时候不很明显，网速慢的时候就会显示出懒加载的优点。你可以使用firefox或者ie开发工具中的网络工具查看懒加载过程。

	
  **载入1.2的 kissy**

  .. code-block:: html

	  <script src="http://a.tbcdn.cn/s/kissy/1.2.0/kissy-min.js"></script>
		
	
  **使用DataLazyload**
	
  .. code-block:: js
	
	  KISSY.use('datalazyload', function(S, DataLazyload) {
		  S.ready(function(S) {
			  var dataLazyload= DataLazyload();
		  });
	  });
	
		
  **注意事项**
	
      采用手动模式时, 需要自行在输出页面时, 可以不设置 img 的 src 属性, 但是必须设置 img 的 ``data-ks-lazyload`` 自定义属性为真实图片地址,当滚动导致该图片出现在当前视窗时会将 src 设置为真实地址,  如:

  .. code-block:: html

	  <img data-ks-lazyload="xx.jpg" />

	
  **使用回调函数**
	
  使用回调函数 addCallback() 方法可以让我们定义的部分将要显示的时候出发函数，执行我们的代码,如：
	
  .. code-block:: js
	
	  dataLazyload.addCallback('#test-callback', function() {
		  alert('#test-callback will come!');
	  });


  .. note:

      * 在任何浏览器下都可以完美实现, 不增加额外http连接数.
      * 缺点是不渐进增强, 无 JS 时, 图片不能展示.