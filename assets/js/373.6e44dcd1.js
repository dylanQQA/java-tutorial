(window.webpackJsonp=window.webpackJsonp||[]).push([[373],{658:function(t,a,s){"use strict";s.r(a);var n=s(27),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"使用对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用对象"}},[t._v("#")]),t._v(" 使用对象")]),t._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#引用对象的字段"}},[t._v("引用对象的字段")])]),s("li",[s("a",{attrs:{href:"#调用对象的方法"}},[t._v("调用对象的方法")])]),s("li",[s("a",{attrs:{href:"#垃圾收集器"}},[t._v("垃圾收集器")])])])]),s("p"),t._v(" "),s("p",[t._v("创建对象后，您可能希望将其用于某个对象。您可能需要使用其中一个字段的值，更改其中一个字段，或者调用其中一个方法来执行操作。")]),t._v(" "),s("h2",{attrs:{id:"引用对象的字段"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#引用对象的字段"}},[t._v("#")]),t._v(" 引用对象的字段")]),t._v(" "),s("p",[t._v("对象字段以其名称访问。您必须使用明确的名称。")]),t._v(" "),s("p",[t._v("您可以在自己的类中为一个字段使用一个简单的名称。例如，我们可以在 Rectangle 中添加一个声明打印类 width 和 height：")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Width and height are: "')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" width "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('", "')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" height"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("在这种情况下，width 和 height 只是简单的名字。")]),t._v(" "),s("p",[t._v("对象类外的代码必须使用对象引用或表达式，后跟点（.）运算符，后跟一个简单的字段名称，如：")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("objectReference"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fieldName\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("例如，CreateObjectDemo 类中的代码不在 Rectangle 类的代码之外。因此，要引用名为 rectOne 的 Rectangle 对象中的 origin、width 和 height 字段，CreateObjectDemo 类必须分别使用名称 rectOne.origin、rectOne.width 和 rectOne.height。该方案使用两个这些名称来显示的宽度和高度的 rectOne：")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Width of rectOne: "')]),t._v("  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" rectOne"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("width"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Height of rectOne: "')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" rectOne"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("height"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("p",[t._v("尝试从 CreateObjectDemo 类中的代码使用简单的名称宽度和高度是没有意义的 - 这些字段只存在于对象内，并导致编译器错误。")]),t._v(" "),s("p",[t._v("之后，程序使用相似的代码显示有关 rectTwo 的信息。相同类型的对象具有自己的相同实例字段的副本。因此，每个 Rectangle 对象都有名为 origin、width 和 height的字段。通过对象引用访问实例字段时，可以引用该特定对象的字段。两个对象 rectOne 和 rectTwo 在 CreateObjectDemo 程序具有不同的 origin、width 和 height。")]),t._v(" "),s("p",[t._v("要访问某个字段，可以使用对象的 "),s("strong",[t._v("命名引用")]),t._v(" ，如上例所示，也可以使用返回对象引用的任何表达式。回想一下 new 操作符返回对对象的引用。所以你可以使用从 new 返回的值来访问一个新的对象的字段：")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" height "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Rectangle")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("height"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("此语句创建一个新的 Rectangle 对象，并立即获取其高度。实际上，该语句计算一个 Rectangle 的默认高度。请注意，在执行此语句之后，该程序不再具有对创建的 Rectangle 的引用，因为该程序从未在任何地方存储引用。该对象未被引用，其资源可以由 Java 虚拟机自由回收。")]),t._v(" "),s("h2",{attrs:{id:"调用对象的方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#调用对象的方法"}},[t._v("#")]),t._v(" 调用对象的方法")]),t._v(" "),s("p",[t._v("您还可以使用对象引用来调用对象的方法。您将方法的简单名称附加到对象引用中，并使用中间点运算符（.）。此外，您在封闭括号内提供该方法的任何参数。如果该方法不需要任何参数，请使用空括号。")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("objectReference"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("methodName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("argumentList"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nor"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n\nobjectReference"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("methodName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("p",[t._v("该矩形类有两个方法："),s("code",[t._v("getArea()")]),t._v(" 来计算矩形的面积和 "),s("code",[t._v("move()")]),t._v(" 来改变矩形的原点。这是调用这两个方法的 CreateObjectDemo 代码：")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Area of rectOne: "')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" rectOne"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getArea")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\nrectTwo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("move")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("40")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("72")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("p",[t._v("第一个语句调用 rectOne 的 "),s("code",[t._v("getArea()")]),t._v(" 方法并显示结果。第二行移动 rectTwo，因为 "),s("code",[t._v("move()")]),t._v(" 方法为对象的 origin.x 和 origin.y 分配新值。")]),t._v(" "),s("p",[t._v("与实例字段一样，objectReference 必须是对象的引用。您可以使用变量名称，但也可以使用返回对象引用的任何表达式。在 new 操作符返回一个对象引用，所以你可以使用从新返回的值来调用一个新的对象的方法：")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Rectangle")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getArea")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("表达式 "),s("code",[t._v("new Rectangle(100,50)")]),t._v(" 返回引用 Rectangle 对象的对象引用。如上所示，您可以使用点符号来调用新的 Rectangle 的 "),s("code",[t._v("getArea()")]),t._v(" 方法来计算新矩形的面积。")]),t._v(" "),s("p",[t._v("一些方法，如 "),s("code",[t._v("getArea()")]),t._v("，返回一个值。对于返回值的方法，可以在表达式中使用方法调用。您可以将返回值分配给变量，使用它作出决定或控制循环。此代码将 "),s("code",[t._v("getArea()")]),t._v(" 返回的值分配给变量 areaOfRectangle：")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" areaOfRectangle "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Rectangle")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getArea")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("记住，调用特定对象上的方法与向该对象发送消息相同。在这种情况下，调用 "),s("code",[t._v("getArea()")]),t._v(" 的对象是构造函数返回的矩形。")]),t._v(" "),s("h2",{attrs:{id:"垃圾收集器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#垃圾收集器"}},[t._v("#")]),t._v(" 垃圾收集器")]),t._v(" "),s("p",[t._v("一些面向对象的语言要求您跟踪所创建的所有对象，并且在不再需要时明确地销毁它们。明确管理内存是乏味且容易出错的。Java 平台允许您根据需要创建尽可能多的对象（当然，受限于系统可以处理的内容），您不必担心会破坏它们。当 Java 运行时环境确定它们不再被使用时，它将删除对象。这个过程叫做 "),s("strong",[t._v("垃圾收集")]),t._v("。")]),t._v(" "),s("p",[t._v("当没有更多的对该对象的引用时，对象有资格进行垃圾回收。当变量超出范围时，保存在变量中的引用通常会被丢弃。或者，您可以通过将变量设置为特殊值为 null 来显式删除对象引用。记住程序可以有多个对同一个对象的引用Z；在对象有资格进行垃圾回收之前，必须删除对对象的所有引用。")]),t._v(" "),s("p",[t._v("Java 运行时环境有一个垃圾回收器，可以周期性地释放不再被引用的对象使用的内存。当垃圾收集器确定时间是正确的时候，垃圾收集器会自动执行它的工作。")])])}),[],!1,null,null,null);a.default=e.exports}}]);