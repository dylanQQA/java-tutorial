(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{535:function(t,a,s){"use strict";s.r(a);var n=s(27),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"日期时间设计原则"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#日期时间设计原则"}},[t._v("#")]),t._v(" 日期时间设计原则")]),t._v(" "),s("p",[t._v("Date-Time API 是使用多种设计原则开发的。")]),t._v(" "),s("h2",{attrs:{id:"明确-clear"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#明确-clear"}},[t._v("#")]),t._v(" 明确 / Clear")]),t._v(" "),s("p",[t._v("API 中的方法定义明确，行为清晰明了。例如，使用 null 参数值调用 Date-Time 方法通常会触发 NullPointerException。")]),t._v(" "),s("h2",{attrs:{id:"流式-fluent"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#流式-fluent"}},[t._v("#")]),t._v(" 流式 / Fluent")]),t._v(" "),s("p",[t._v("Date-Time API 提供流式接口，使代码易于阅读。因为大多数方法不允许带有空值的参数并且不返回空值，\n所以可以将方法调用链接在一起，并且可以快速理解结果代码。例如：")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LocalDate")]),t._v(" today "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LocalDate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("now")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LocalDate")]),t._v(" payday "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" today"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("with")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TemporalAdjusters")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("lastDayOfMonth")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("minusDays")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("h2",{attrs:{id:"不可变-immutable"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#不可变-immutable"}},[t._v("#")]),t._v(" 不可变 / Immutable")]),t._v(" "),s("p",[t._v("Date-Time API 中的大多数类都创建了不可变的对象，这意味着在创建对象之后，它不能被修改。\n要改变 "),s("RouterLink",{attrs:{to:"/essential/concurrency/immutable.html"}},[t._v("不可变对象")]),t._v(" 的值，必须将新对象构造为原始对象的修改副本。\n这也意味着根据定义，Date-Time API 是线程安全的。这会影响大部分用于创建日期或时间对象的方法的 API 的前缀 of，from 或者 with，\n而不是构造函数，并且没有 set 方法。例如：")],1),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LocalDate")]),t._v(" dateOfBirth "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LocalDate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("of")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2012")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Month")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("MAY"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("14")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LocalDate")]),t._v(" firstBirthday "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" dateOfBirth"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("plusYears")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("h2",{attrs:{id:"扩展-extensible"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#扩展-extensible"}},[t._v("#")]),t._v(" 扩展 / Extensible")]),t._v(" "),s("p",[t._v("只要有可能，Date-Time API 都是可扩展的。例如，您可以定义自己的时间调节器和查询，或者构建您自己的日历系统。")])])}),[],!1,null,null,null);a.default=e.exports}}]);