(window.webpackJsonp=window.webpackJsonp||[]).push([[424],{530:function(t,a,n){"use strict";n.r(a);var r=n(27),s=Object(r.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"数据报-datagrams"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#数据报-datagrams"}},[t._v("#")]),t._v(" 数据报 / datagrams")]),t._v(" "),n("p",[t._v("通过网络进行通信的某些应用程序不需要 TCP 提供的可靠的点对点通道。相反，您的应用程序可能会受益于一种通信模式，\n该模式提供独立的信息包，其到达和到达顺序无法保证。")]),t._v(" "),n("p",[t._v("UDP 协议提供了一种网络通信模式，由此应用程序将数据包（称为数据报）彼此发送。\n数据报是独立的，通过网络发送的自包含消息，其到达时间和内容不能得到保证。\njava.net 包中的 DatagramPacket 和 DatagramSocket 类使用 UDP 实现与系统无关的数据报通信。")]),t._v(" "),n("ul",[n("li",[n("p",[n("RouterLink",{attrs:{to:"/networking/datagrams/definition.html"}},[t._v("什么是数据报？")])],1),t._v(" "),n("p",[t._v("数据报是独立的，通过网络发送的自包含消息，其到达时间和内容不能得到保证。")])]),t._v(" "),n("li",[n("p",[n("RouterLink",{attrs:{to:"/networking/datagrams/clientServer.html"}},[t._v("编写数据报客户端和服务器")])],1),t._v(" "),n("p",[t._v("本节将向您介绍一个示例，其中包含两个使用数据报进行通信的 Java 程序。\n服务端是一个报价服务，客户端是一个简单的请求程序，只要连接服务端，服务端就推送一次报价信息")])]),t._v(" "),n("li",[n("p",[n("RouterLink",{attrs:{to:"/networking/datagrams/broadcasting.html"}},[t._v("广播给多个收件人")])],1),t._v(" "),n("p",[t._v("此部分修改报价服务器，以便报价服务器不会在请求时向单个客户端发送报价，\n而是每分钟向正在收听的客户端广播报价。必须相应地修改客户端程序。")])])]),t._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),n("p",[t._v("许多防火墙和路由器配置为不允许 UDP 数据包。如果连接到防火墙外的服务时遇到问题，\n或者客户端无法连接到您的服务，请询问系统管理员是否允许 UDP。")])])])}),[],!1,null,null,null);a.default=s.exports}}]);