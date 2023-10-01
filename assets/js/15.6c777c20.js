(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{289:function(t,e,a){"use strict";a.r(e);var o=a(14),l=Object(o.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"plugin-api"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#plugin-api"}},[t._v("#")]),t._v(" Plugin API")]),t._v(" "),e("p",[t._v("The Plugin API consists of a global JavaScript object on the window, called, very simply, "),e("code",[t._v("PluginAPI")]),t._v(".")]),t._v(" "),e("p",[t._v("It has the following properties:")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("player: LocalPlayerData")]),t._v(" "),e("ul",[e("li",[t._v("A "),e("RouterLink",{attrs:{to:"/plugindocs/globals/LocalPlayerData.html"}},[e("code",[t._v("LocalPlayerData")])]),t._v(" made from "),e("code",[t._v("EntityPlayerSP")]),t._v(".")],1)])]),t._v(" "),e("li",[e("code",[t._v("items: ItemData{}")]),t._v(" "),e("ul",[e("li",[t._v("A "),e("RouterLink",{attrs:{to:"/plugindocs/globals/ItemData.html"}},[e("code",[t._v("ItemData")])]),t._v(" dictionary of all item types, and block-item types. [Auto]")],1)])]),t._v(" "),e("li",[e("code",[t._v("blocks: BlockData{}")]),t._v(" "),e("ul",[e("li",[t._v("A "),e("RouterLink",{attrs:{to:"/plugindocs/globals/BlockData.html"}},[e("code",[t._v("BlockData")])]),t._v(" dictionary of all block types. [Auto]")],1)])]),t._v(" "),e("li",[e("code",[t._v("materials: MaterialData{}")]),t._v(" "),e("ul",[e("li",[t._v("A "),e("RouterLink",{attrs:{to:"/plugindocs/globals/MaterialData.html"}},[e("code",[t._v("MaterialData")])]),t._v(" dictionary of all the block materials. [Auto]")],1)])]),t._v(" "),e("li",[e("code",[t._v("enchantments: EnchantmentData{}")]),t._v(" "),e("ul",[e("li",[t._v("An "),e("RouterLink",{attrs:{to:"/plugindocs/EnchantmentData.html"}},[e("code",[t._v("EnchantmentData")])]),t._v(" dictionary of all the in-game enchantments. [Auto]")],1)])]),t._v(" "),e("li",[e("code",[t._v("constructors: Object")]),t._v("\nA object containing constructors to make some Java objects from within JavaScript. [Auto]")]),t._v(" "),e("li",[e("code",[t._v("javaClient: Object")]),t._v("\nThis is the "),e("code",[t._v("Minecraft")]),t._v(" instance exposed to JavaScript. It has no wrapping, and so many properties will be illegible. To use it, I would recommend editing the "),e("code",[t._v("build.gradle")]),t._v(" in the worspace to set "),e("code",[t._v("minifying: false;")]),t._v(" [Auto]")]),t._v(" "),e("li",[e("code",[t._v("version: String")])])]),t._v(" "),e("p",[t._v("It has the following methods:")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("addEventListener(eventName: String, callback: Function) : void")]),t._v(" "),e("ul",[e("li",[t._v("Documentation "),e("RouterLink",{attrs:{to:"/plugindocs/events/addEventListener.html"}},[t._v("here")])],1)])]),t._v(" "),e("li",[e("code",[t._v("require(componentName: String)")]),t._v(" "),e("ul",[e("li",[t._v("Documentation "),e("RouterLink",{attrs:{to:"/plugindocs/globals/require.html"}},[t._v("here")])],1)])]),t._v(" "),e("li",[e("code",[t._v("updateComponent(componentName: String)")]),t._v(" "),e("ul",[e("li",[t._v("[Deprecated, use "),e("code",[t._v("reload()")]),t._v(" instead]")]),t._v(" "),e("li",[t._v("Documentation "),e("RouterLink",{attrs:{to:"/plugindocs/globals/updateComponent.html"}},[t._v("here")])],1)])]),t._v(" "),e("li",[e("code",[t._v("displayToChat({msg: String})")]),t._v(" "),e("ul",[e("li",[t._v("Displays client-side message to user's ingame chat gui.")])])])]),t._v(" "),e("h3",{attrs:{id:"using-non-auto-properties"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#using-non-auto-properties"}},[t._v("#")]),t._v(" Using non-auto properties")]),t._v(" "),e("p",[t._v("In order to use non-auto properties like "),e("code",[t._v("PluginAPI.player")]),t._v(", they must be "),e("RouterLink",{attrs:{to:"/plugindocs/globals/require.html"}},[t._v("required")])],1),t._v(" "),e("h3",{attrs:{id:"triggering-data-updates-reload"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#triggering-data-updates-reload"}},[t._v("#")]),t._v(" Triggering data updates ("),e("code",[t._v("reload()")]),t._v(")")]),t._v(" "),e("p",[t._v("To trigger the game to read your updated values, call the "),e("code",[t._v("reload()")]),t._v(" method on the object.")]),t._v(" "),e("p",[t._v("Eg:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("PluginAPI.player.motionY += 1;\nPluginAPI.player.reload();\n")])])]),e("p",[t._v("Frequent calls to "),e("code",[t._v("reload()")]),t._v(" may cause lag, so try to limit them.")])])}),[],!1,null,null,null);e.default=l.exports}}]);