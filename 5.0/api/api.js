YUI.add("yuidoc-meta", function(Y) {
   Y.YUIDoc = { meta: {
    "classes": [
        "Anim",
        "Attribute",
        "Base",
        "Button",
        "Color",
        "ComboBox",
        "ComboBox.LocalDataSource",
        "ComboBox.RemoteDataSource",
        "ComboBoxMultiWord",
        "Component.Container",
        "Component.Control",
        "Component.Extension.Align",
        "Component.Extension.ContentBox",
        "Component.Extension.DelegateChildren",
        "Component.Extension.Shim",
        "Component.Plugin.Drag",
        "Component.Plugin.Resize",
        "Cookie",
        "CustomEvent.Target",
        "DD.DDM",
        "DD.Draggable",
        "DD.DraggableDelegate",
        "DD.Droppable",
        "DD.DroppableDelegate",
        "DD.Plugin.Constrain",
        "DD.Plugin.Proxy",
        "DD.Plugin.Scroll",
        "DatePicker",
        "DatePicker.Popup",
        "Dom",
        "DomEvent",
        "Editor",
        "Feature",
        "FilterMenu",
        "GestureBasic",
        "GestureEdgePan",
        "GesturePan",
        "GesturePinch",
        "GestureRotate",
        "GestureShake",
        "GestureSwipe",
        "GestureTap",
        "GregorianCalendar",
        "GregorianCalendarFormat",
        "IO",
        "Json",
        "LoggerManager",
        "Menu",
        "Menu.CheckItem",
        "Menu.Item",
        "Menu.PopupMenu",
        "Menu.RadioItem",
        "Menu.SubMenu",
        "MenuButton",
        "MenuButton.Option",
        "MenuButton.Select",
        "Modulex",
        "NavigationView",
        "NavigationViewBar",
        "Node",
        "Overlay",
        "Overlay.Dialog",
        "Overlay.Popup",
        "Path",
        "Promise",
        "Promise.Defer",
        "Querystring",
        "Resizable",
        "Resizable.Plugin.Proxy",
        "Router",
        "SWF",
        "ScrollView",
        "ScrollView.Plugin.PullToRefresh",
        "ScrollView.Plugin.ScrollBar",
        "SplitButton",
        "StyleSheet",
        "Tabs",
        "Toolbar",
        "Tree",
        "Tree.CheckNode",
        "Tree.CheckTree",
        "Tree.Manager",
        "Tree.Node",
        "UA",
        "Url",
        "Util"
    ],
    "modules": [
        "anim",
        "attribute",
        "base",
        "button",
        "color",
        "combobox",
        "combobox_multi-word",
        "component_container",
        "component_control",
        "component_extension_align",
        "component_extension_content-box",
        "component_extension_delegate-children",
        "component_extension_shim",
        "component_plugin_drag",
        "component_plugin_resize",
        "cookie",
        "date-picker",
        "dd",
        "dd_plugin_constrain",
        "dd_plugin_proxy",
        "dd_plugin_scroll",
        "dom",
        "editor",
        "event-custom",
        "event-dom",
        "event-dom_gesture_basic",
        "event-dom_gesture_edge-pan",
        "event-dom_gesture_pan",
        "event-dom_gesture_pinch",
        "event-dom_gesture_rotate",
        "event-dom_gesture_shake",
        "event-dom_gesture_swipe",
        "event-dom_gesture_tap",
        "feature",
        "filter-menu",
        "gregorian-calendar",
        "gregorian-calendar-format",
        "io",
        "json",
        "logger-manager",
        "menu",
        "menubutton",
        "modulex",
        "navigation-view",
        "navigation-view_bar",
        "node",
        "overlay",
        "path",
        "promise",
        "querystring",
        "resizable",
        "resizable_plugin_proxy",
        "router",
        "scroll-view",
        "scroll-view_plugin_pull-to-refresh",
        "scroll-view_plugin_scrollbar",
        "split-button",
        "stylesheet",
        "swf",
        "tabs",
        "toolbar",
        "tree",
        "ua",
        "url",
        "util"
    ],
    "allModules": [
        {
            "displayName": "anim",
            "name": "anim",
            "description": "提供动画支持"
        },
        {
            "displayName": "attribute",
            "name": "attribute"
        },
        {
            "displayName": "base",
            "name": "base",
            "description": "KISSY 的base模块提供给我们一个基类Base, 整合了 attribute 功能, 让继承 Base 的子类自动具有 attribute 的功能.如果你想让自定义类默认就支持 attribute 功能, 请直接继承 Base"
        },
        {
            "displayName": "button",
            "name": "button"
        },
        {
            "displayName": "color",
            "name": "color",
            "description": "颜色封装"
        },
        {
            "displayName": "combobox",
            "name": "combobox"
        },
        {
            "displayName": "combobox/multi-word",
            "name": "combobox_multi-word"
        },
        {
            "displayName": "component/container",
            "name": "component_container"
        },
        {
            "displayName": "component/control",
            "name": "component_control",
            "description": "合并了原来的 box\n组件基类.仅用于 KISSY 内部组件继承，目前不建议外部使用，欢迎 review"
        },
        {
            "displayName": "component/extension/align",
            "name": "component_extension_align"
        },
        {
            "displayName": "component/extension/content-box",
            "name": "component_extension_content-box"
        },
        {
            "displayName": "component/extension/delegate-children",
            "name": "component_extension_delegate-children"
        },
        {
            "displayName": "component/extension/shim",
            "name": "component_extension_shim"
        },
        {
            "displayName": "component/plugin/drag",
            "name": "component_plugin_drag",
            "description": "组件拖拽插件"
        },
        {
            "displayName": "component/plugin/resize",
            "name": "component_plugin_resize",
            "description": "调整大小插件"
        },
        {
            "displayName": "cookie",
            "name": "cookie",
            "description": "提供类Cookie"
        },
        {
            "displayName": "date-picker",
            "name": "date-picker",
            "description": "嵌入式日历控件，支持基本的日期选择、时间选择、范围选择、日期格式化输出等常用功能"
        },
        {
            "displayName": "dd",
            "name": "dd",
            "description": "拖放功能\n\n#Note \n支持 win8 的触摸事件"
        },
        {
            "displayName": "dd/plugin/constrain",
            "name": "dd_plugin_constrain"
        },
        {
            "displayName": "dd/plugin/proxy",
            "name": "dd_plugin_proxy"
        },
        {
            "displayName": "dd/plugin/scroll",
            "name": "dd_plugin_scroll"
        },
        {
            "displayName": "dom",
            "name": "dom",
            "description": "提供类DOM"
        },
        {
            "displayName": "editor",
            "name": "editor"
        },
        {
            "displayName": "event-custom",
            "name": "event-custom",
            "description": "自定义事件模块"
        },
        {
            "displayName": "event-dom",
            "name": "event-dom",
            "description": "根据设备环境加载响应的子模块来处理 DOM 的事件模块"
        },
        {
            "displayName": "event-dom/gesture/basic",
            "name": "event-dom_gesture_basic",
            "description": "基本手势事件"
        },
        {
            "displayName": "event-dom/gesture/edge-pan",
            "name": "event-dom_gesture_edge-pan",
            "description": "在窗口边缘区域往窗口中心区域拖进的拖动手势事件"
        },
        {
            "displayName": "event-dom/gesture/pan",
            "name": "event-dom_gesture_pan",
            "description": "拖动手势事件"
        },
        {
            "displayName": "event-dom/gesture/pinch",
            "name": "event-dom_gesture_pinch",
            "description": "pinch手势事件"
        },
        {
            "displayName": "event-dom/gesture/rotate",
            "name": "event-dom_gesture_rotate",
            "description": "旋转手势事件"
        },
        {
            "displayName": "event-dom/gesture/shake",
            "name": "event-dom_gesture_shake",
            "description": "摇动手势事件"
        },
        {
            "displayName": "event-dom/gesture/swipe",
            "name": "event-dom_gesture_swipe",
            "description": "滑动手势事件"
        },
        {
            "displayName": "event-dom/gesture/tap",
            "name": "event-dom_gesture_tap",
            "description": "点击手势事件"
        },
        {
            "displayName": "feature",
            "name": "feature",
            "description": "features模块提供了Features来进行硬件环境关键特性检测，直接通过KISSY全局对象调用"
        },
        {
            "displayName": "filter-menu",
            "name": "filter-menu"
        },
        {
            "displayName": "gregorian-calendar",
            "name": "gregorian-calendar",
            "description": "公历模块,提供了时间转换，范围计算等功能。"
        },
        {
            "displayName": "gregorian-calendar-format",
            "name": "gregorian-calendar-format"
        },
        {
            "displayName": "io",
            "name": "io",
            "description": "提供类IO"
        },
        {
            "displayName": "json",
            "name": "json"
        },
        {
            "displayName": "logger-manager",
            "name": "logger-manager"
        },
        {
            "displayName": "menu",
            "name": "menu"
        },
        {
            "displayName": "menubutton",
            "name": "menubutton"
        },
        {
            "displayName": "modulex",
            "name": "modulex",
            "description": "modulex 是新一代的模块加载器，可独立使用。"
        },
        {
            "displayName": "navigation-view",
            "name": "navigation-view"
        },
        {
            "displayName": "navigation-view/bar",
            "name": "navigation-view_bar",
            "description": "视图工具栏模块"
        },
        {
            "displayName": "node",
            "name": "node",
            "description": "node 包括 dom , event-dom , anim 模块的所有功能, 推荐采用 Node 模块"
        },
        {
            "displayName": "overlay",
            "name": "overlay"
        },
        {
            "displayName": "path",
            "name": "path"
        },
        {
            "displayName": "promise",
            "name": "promise"
        },
        {
            "displayName": "querystring",
            "name": "querystring",
            "description": "提供JSON对象与querystring相互转换的方法"
        },
        {
            "displayName": "resizable",
            "name": "resizable"
        },
        {
            "displayName": "resizable/plugin/proxy",
            "name": "resizable_plugin_proxy"
        },
        {
            "displayName": "router",
            "name": "router",
            "description": "一个类似express的路由模块"
        },
        {
            "displayName": "scroll-view",
            "name": "scroll-view"
        },
        {
            "displayName": "scroll-view/plugin/pull-to-refresh",
            "name": "scroll-view_plugin_pull-to-refresh"
        },
        {
            "displayName": "scroll-view/plugin/scrollbar",
            "name": "scroll-view_plugin_scrollbar",
            "description": "ScrollView的插件ScrollBar"
        },
        {
            "displayName": "split-button",
            "name": "split-button"
        },
        {
            "displayName": "stylesheet",
            "name": "stylesheet"
        },
        {
            "displayName": "swf",
            "name": "swf"
        },
        {
            "displayName": "tabs",
            "name": "tabs"
        },
        {
            "displayName": "toolbar",
            "name": "toolbar",
            "description": "Toolbar菜单栏组件"
        },
        {
            "displayName": "tree",
            "name": "tree"
        },
        {
            "displayName": "ua",
            "name": "ua",
            "description": "UA模块可以获取浏览器等用户代理的信息。"
        },
        {
            "displayName": "url",
            "name": "url",
            "description": "操作url"
        },
        {
            "displayName": "util",
            "name": "util",
            "description": "util模块，包含类Util"
        }
    ]
} };
});