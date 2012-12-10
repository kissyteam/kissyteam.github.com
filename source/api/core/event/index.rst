.. module:: event

Event
====================================

|  事件机制

.. code-block:: javascript

    KISSY.use('event',function(S,Event){
        // use Event
    });

Module
-----------------------------------------------

  :mod:`event`


Methods
-----------------------------------------------

.. toctree::
   :titlesonly:


   on.rst
   delegate.rst   
   detach.rst
   undelegate.rst
   fire.rst
   fireHandler.rst
   event-target.rst
   event-object.rst


特殊事件支持
----------------------------------------------------

对于 DOM 节点， ``kissy`` 支持以下特殊事件


.. toctree::
   :titlesonly:


   focusin.rst
   focusout.rst
   hashchange.rst
   valuechange.rst
   mouseenter.rst
   mouseleave.rst
   mousewheel.rst
    
.. note::

    部分文档与例子来自 `jquery <http://api.jquery.com>`_   