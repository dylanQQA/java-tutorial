(window.webpackJsonp=window.webpackJsonp||[]).push([[146],{607:function(e,v,t){"use strict";t.r(v);var o=t(27),r=Object(o.a)({},(function(){var e=this,v=e.$createElement,t=e._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"线程池"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#线程池"}},[e._v("#")]),e._v(" 线程池")]),e._v(" "),t("p",[e._v("大多数执行器实现 "),t("code",[e._v("java.util.concurrent")]),e._v(" 使用的线程池，由工作线程组成。这种线程从单独存在 "),t("code",[e._v("Runnable")]),e._v(" 和 "),t("code",[e._v("Callable")]),e._v(" 它执行，通常用于执行多个任务的任务。")]),e._v(" "),t("p",[e._v("使用工作线程可以最大限度地减少由于线程创建而导致的开销。线程对象使用大量内存，而在大规模应用程序中，分配和释放许多线程对象会创建显着的内存管理开销。")]),e._v(" "),t("p",[e._v("一种常见类型的线程池是固定线程池。这种类型的池总是具有指定数量的线程运行; 如果一个线程在某种程度上仍然在使用中被终止，它将被一个新的线程自动替换。任务通过内部队列提交到池中，每当有比线程更多的活动任务时，它将保存额外的任务。")]),e._v(" "),t("p",[e._v("固定线程池的一个重要优点是使用它的应用程序正常地降级。要了解这一点，请考虑一个 Web 服务器应用程序，其中每个 HTTP 请求由单独的线程处理。如果应用程序只是为每个新的 HTTP 请求创建一个新的线程，并且系统接收到的请求超过它可以立即处理的请求，那么当所有这些线程的开销超过系统的容量时，应用程序将突然停止对所有请求的响应。对于可以创建的线程数量的限制，应用程序将不会尽快为 HTTP 请求提供服务，但是它将尽可能快地对系统进行维护。")]),e._v(" "),t("p",[e._v("创建使用固定线程池的执行器的简单方法是调用 "),t("code",[e._v("newFixedThreadPool")]),e._v(" 工厂方法， "),t("code",[e._v("java.util.concurrent.Executors")]),e._v(" 此类还提供以下工厂方法：")]),e._v(" "),t("ul",[t("li",[e._v("newCachedThreadPool 方法创建一个具有可扩展线程池的执行器。这个执行器适用于启动许多短暂任务的应用程序。")]),e._v(" "),t("li",[e._v("newSingleThreadExecutor 方法创建一次执行单个任务的执行器。")]),e._v(" "),t("li",[e._v("几种工厂方法是 ScheduledExecutorService 上述执行器的版本。")])]),e._v(" "),t("p",[e._v("如果上述工厂方法提供的任何执行者都不满足您的需求，则构建实例 "),t("code",[e._v("java.util.concurrent.ThreadPoolExecutor")]),e._v(" 或  "),t("code",[e._v("java.util.concurrent.ScheduledThreadPoolExecutor")]),e._v(" 将为您提供其他选项。")])])}),[],!1,null,null,null);v.default=r.exports}}]);