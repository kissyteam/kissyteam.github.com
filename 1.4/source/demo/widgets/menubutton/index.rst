.. currentmodule:: menubutton

MenuButton 使用示例
======================================

Class
-----------------------------------------------

  * :class:`MenuButton`
  * :class:`Select`
  * :class:`Option`


Demos
--------------------------------------------------

    .. toctree::
       :titlesonly:

       demo1
       xclass
       demo2
       demo3
       demo4 


Tips
----------------------------------------------------

Q. 如何提高性能
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

#. 线上使用自动 combo

#. 使用 xclass 批量设置数据

#. setTimeout 来渲染多个组件，

    每个组件渲染都需要 cpu ，为了减少界面僵死时间，可用 setTimeout 来分隔每个组件的渲染过程.