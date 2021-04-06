(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{478:function(t,s,r){"use strict";r.r(s);var a=r(27),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,r=t._self._c||s;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"list-实现"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#list-实现"}},[t._v("#")]),t._v(" list 实现")]),t._v(" "),r("p",[t._v("list 实现也分为通用实现和专用实现")]),t._v(" "),r("h2",{attrs:{id:"通用实现"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#通用实现"}},[t._v("#")]),t._v(" 通用实现")]),t._v(" "),r("ul",[r("li",[t._v("ArrayList")]),t._v(" "),r("li",[t._v("LinkedList")])]),t._v(" "),r("p",[t._v("大多数时候，你可能会使用 ArrayList，他提供位置访问，速度快。它不必为每个元素分配一个节点。\n可它可以利用 "),r("code",[t._v("System.arraycopy")]),t._v(" 移动多个元素。没有同步的开销，而 Vector 有")]),t._v(" "),r("p",[t._v("如果你进程在元素的开头和在中间随机位置操作元素，你应该考虑使用 LinkedList。这些操作需要恒定的时间。")]),t._v(" "),r("p",[t._v("ArrayList 具有一个调整参数 - 初始容量。表示在扩容之前所能保存元素的容量\nLinkedList 没有调整参数，但多了 6 个可选操作：addFirst，getFirst，removeFirst，addLast，getLast，和 removeLast。\nLinkedList 也实现了 Queue 接口。")]),t._v(" "),r("h2",{attrs:{id:"专用实现"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#专用实现"}},[t._v("#")]),t._v(" 专用实现")]),t._v(" "),r("p",[t._v("CopyOnWriteArrayList")]),t._v(" "),r("p",[t._v("如果你 List 是固定的大小 - 也就是说，你永远不会使用 remove，add 或任何批量操作除了 containsAll- 你有第三个选择，绝对值得考虑：Arrays.asList 方便实施”部分。")])])}),[],!1,null,null,null);s.default=e.exports}}]);