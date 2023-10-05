(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{311:function(e,o,t){"use strict";t.r(o);var v=t(14),_=Object(v.a)({},(function(){var e=this,o=e._self._c;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"networkdata"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#networkdata"}},[e._v("#")]),e._v(" NetworkData")]),e._v(" "),o("p",[e._v("Represents the network handler. Has many built-in functions to easily send packets to the server..")]),e._v(" "),o("p",[e._v("Properties:")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("doneLoadingTerrain")]),e._v(": Boolean")]),e._v(" "),o("li",[o("code",[e._v("currentServerMaxPlayers")]),e._v(": Integer")])]),e._v(" "),o("p",[e._v("Methods:")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("sendPacketAnimation() : void")])]),e._v(" "),o("li",[o("code",[e._v("sendPacketEntityAction({entityRef: EntityRef, action: String, auxData: Integer}) : void")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("action")]),e._v(" can be one of: "),o("code",[e._v("START_SNEAKING")]),e._v(", "),o("code",[e._v("STOP_SNEAKING")]),e._v(", "),o("code",[e._v("STOP_SLEEPING")]),e._v(", "),o("code",[e._v("START_SPRINTING")]),e._v(", "),o("code",[e._v("STOP_SPRINTING")]),e._v(", "),o("code",[e._v("RIDING_JUMP")]),e._v(" or "),o("code",[e._v("OPEN_INVENTORY")])])])]),e._v(" "),o("li",[o("code",[e._v("sendPacketInput({strafeSpeed: Number, forwardSpeed: Number, jumping: Boolean, sneaking: Boolean}) : void")])]),e._v(" "),o("li",[o("code",[e._v("sendPacketCloseWindow({windowId: Integer}) : void")])]),e._v(" "),o("li",[o("code",[e._v("sendPacketClickWindow({windowId: Integer, slotId: Integer, usedButton: Integer, mode: Integer, clickedItemRef: ItemStackRef?, actionNumber: Short}) : void")])]),e._v(" "),o("li",[o("code",[e._v("sendPacketConfirmTransaction({windowId: Integer, uid: Short, accepted: Boolean}) : void")])]),e._v(" "),o("li",[o("code",[e._v("sendPacketKeepAlive({key: Integer}) : void")])]),e._v(" "),o("li",[o("code",[e._v("sendPacketChatMessage({messageIn: String}) : void")])]),e._v(" "),o("li",[o("code",[e._v("sendPacketUseEntity({entityRef: EntityRef, hitVec: Vec3}) : void")])]),e._v(" "),o("li",[o("code",[e._v("sendPacketUseEntity({entityRef: EntityRef, action: String}) : void")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("action")]),e._v(" can be one of: "),o("code",[e._v("INTERACT")]),e._v(", "),o("code",[e._v("ATTACK")]),e._v(" or "),o("code",[e._v("INTERACT_AT")])])])]),e._v(" "),o("li",[o("code",[e._v("sendPacketPlayer({isOnGround: Boolean}) : void")])]),e._v(" "),o("li",[o("code",[e._v("sendPacketPlayerDigging({action: String, pos: BlockPos, facing: String}) : void")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("action")]),e._v(" can be one of: "),o("code",[e._v("START_DESTROY_BLOCK")]),e._v(", "),o("code",[e._v("ABORT_DESTROY_BLOCK")]),e._v(", "),o("code",[e._v("STOP_DESTROY_BLOCK")]),e._v(", "),o("code",[e._v("DROP_ALL_ITEMS")]),e._v(", "),o("code",[e._v("DROP_ITEM")]),e._v(" or "),o("code",[e._v("RELEASE_USE_ITEM")])]),e._v(" "),o("li",[o("code",[e._v("facing")]),e._v(" can be one of: "),o("code",[e._v("UP")]),e._v(", "),o("code",[e._v("DOWN")]),e._v(", "),o("code",[e._v("NORTH")]),e._v(", "),o("code",[e._v("SOUTH")]),e._v(", "),o("code",[e._v("EAST")]),e._v(" or "),o("code",[e._v("WEST")])])])]),e._v(" "),o("li",[o("code",[e._v("sendPacketPlayerBlockPlacement({stackRef: ItemStackRef}) : void")])]),e._v(" "),o("li",[o("code",[e._v("sendPacketHeldItemChange({slotId: Integer}) : void")])]),e._v(" "),o("li",[o("code",[e._v("sendPacketCreativeInventoryAction({slotId: Integer, stackRef: ItemStackRef}) : void")])]),e._v(" "),o("li",[o("code",[e._v("sendPacketEnchantItem({windowId: Integer, button: Integer}) : void")])]),e._v(" "),o("li",[o("code",[e._v("sendPacketUpdateSign({pos: BlockPos, lines: String[]}) : void")])]),e._v(" "),o("li",[o("code",[e._v("sendPacketPlayerAbilities({capabilitiesRef: PlayerCapabilitiesRef}) : void")])]),e._v(" "),o("li",[o("code",[e._v("sendPacketTabComplete({msg: String}) : void")])]),e._v(" "),o("li",[o("code",[e._v("sendPacketTabComplete({msg: String, target: BlockPos}) : void")])]),e._v(" "),o("li",[o("code",[e._v("sendPacketClientSettings({lang: String, view: Integer, chatVisibility: String, enableColors: Boolean, modelPartFlags: Integer}) : void")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("chatVisibility")]),e._v(" can be one of: "),o("code",[e._v("FULL")]),e._v(", "),o("code",[e._v("SYSTEM")]),e._v(" or "),o("code",[e._v("HIDDEN")])])])]),e._v(" "),o("li",[o("code",[e._v("sendPacketClientStatus({status: String}) : void")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("status")]),e._v(" can be one of: "),o("code",[e._v("PERFORM_RESPAWN")]),e._v(", "),o("code",[e._v("REQUEST_STATS")]),e._v(" or "),o("code",[e._v("OPEN_INVENTORY_ACHIEVEMENT")])])])]),e._v(" "),o("li",[o("code",[e._v("sendPacketSpectate({uuid: String}) : void")])]),e._v(" "),o("li",[o("code",[e._v("sendPacketResourcePackStatus({hash: String, status: String}) : void")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("status")]),e._v(" can be one of: "),o("code",[e._v("SUCCESSFULLY_LOADED")]),e._v(", "),o("code",[e._v("DECLINED")]),e._v(", "),o("code",[e._v("FAILED_DOWNLOAD")]),e._v(" or "),o("code",[e._v("ACCEPTED")])])])])])])}),[],!1,null,null,null);o.default=_.exports}}]);