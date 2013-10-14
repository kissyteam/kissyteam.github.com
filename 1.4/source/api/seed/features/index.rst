.. module:: seed

features
===============================

硬件环境关键特性检测，直接通过KISSY全局对象调用

.. code-block:: javascript

    KISSY.use('features',function(S,F){
        F.isXXX();
    });

这类功能通常在判断硬件环境时使用，比如在KISSY的modules定义的代码：

.. code-block:: javascript

	KISSY.config('modules',{
		"dom/basic": {
			"alias": [
				'dom/base',
				KISSY.Features.isIELessThan(9) ? 'dom/ie' : '',
				KISSY.Features.isClassListSupported() ? '' : 'dom/class-list'
			]
		},
		"dom": {
			"alias": [
				'dom/basic',
				!KISSY.Features.isQuerySelectorSupported() ? 'dom/selector' : ''
			]
		}
	});

Methods
-----------------------------------------------

* :meth:`~isDeviceMotionSupported()`  <static>
* :meth:`~isMsPointerSupported()`  <static>
* :meth:`~isTouchEventSupported()`  <static>
* :meth:`~isHashChangeSupported()`  <static>
* :meth:`~isTransitionSupported()`  <static>
* :meth:`~isTransformSupported()`  <static>
* :meth:`~isClassListSupported()`  <static>
* :meth:`~isQuerySelectorSupported()`  <static>
* :meth:`~getTransitionPrefix()`  <static>
* :meth:`~getTransformPrefix()`  <static>

Methods Detail
-----------------------------------------------

.. method:: isDeviceMotionSupported

    | void **isDeviceMotionSupported** ()
    | 判断当前宿主环境是否支持手势事件

.. method:: isMsPointerSupported 

    | void **isMsPointerSupported** ()
    | 判断当前宿主环境是否支持ie8的Pointer事件

.. method:: isTouchEventSupported 

    | void **isTouchEventSupported** ()
    | 判断当前宿主环境是否支持触屏事件

.. method:: isHashChangeSupported

    | void **isHashChangeSupported** ()
    | 判断当前环境是否支持hashChange事件

.. method:: isTransitionSupported

    | void **isTransitionSupported** ()
    | 判断当前环境是否支持Transition动画

.. method:: isTransformSupported

    | void **isTransformSupported** ()
    | 判断当前环境是否支持Transform动画

.. method:: isClassListSupported

    | void **isClassListSupported** ()
    | 判断当前环境是否支持ClassList

.. method:: isQuerySelectorSupported

    | void **isQuerySelectorSupported** ()
    | 判断当前环境是否支持QuerySelector方法

.. method:: getTransitionPrefix

    | void **getTransitionPrefix** ()
    | 得到Transition属性的前缀

.. method:: getTransformPrefix

    | void **getTransformPrefix** ()
    | 得到Transform属性的前缀

