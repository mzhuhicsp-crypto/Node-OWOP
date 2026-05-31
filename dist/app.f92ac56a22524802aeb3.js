!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=2)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.eventSys=t.PublicAPI=void 0;var o=n(17);t.PublicAPI=window.OWOP=window.WorldOfPixels={},t.eventSys=new o.EventEmitter},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.options=t.EVENTS=t.RANK=t.protocol=void 0;var o=n(0),r=n(3),i=s(n(18)),a=s(n(19));function s(e){return e&&e.__esModule?e:{default:e}}t.protocol=null;var l=6666666,c=t.RANK={NONE:0,USER:1,MODERATOR:2,ADMIN:3};o.PublicAPI.RANK=c;var u=t.EVENTS={loaded:++l,init:++l,tick:++l,misc:{toolsRendered:++l,toolsInitialized:++l,logoMakeRoom:++l,worldInitialized:++l,windowAdded:++l,captchaToken:++l,loadingCaptcha:++l},renderer:{addChunk:++l,rmChunk:++l,updateChunk:++l},camera:{moved:++l,zoom:++l},net:{connecting:++l,connected:++l,disconnected:++l,playerCount:++l,chat:++l,devChat:++l,world:{leave:++l,join:++l,joining:++l,setId:++l,playersMoved:++l,playersLeft:++l,tilesUpdated:++l,teleported:++l},chunk:{load:++l,unload:++l,set:++l,lock:++l,allLoaded:++l},sec:{rank:++l},maxCount:++l}};o.PublicAPI.events=u;var d={};if((0,r.storageEnabled)())try{d=JSON.parse(localStorage.getItem("owopOptions")||"{}")}catch(e){console.error("Error while parsing user options!",e)}var h,f=3==(h=new Date).getMonth()&&1==h.getDate(),p=t.options=(0,r.propertyDefaults)(d,{serverAddress:[{default:!0,title:"Official server",proto:"old",url:"wss://icsp.up.railway.app/"}],fallbackFps:30,maxChatBuffer:256,tickSpeed:30,minGridZoom:1,movementSpeed:1,defaultWorld:f?"aprilfools":"main",enableSounds:!0,enableIdView:!0,defaultZoom:16,zoomStrength:1,zoomLimitMin:1,zoomLimitMax:32,unloadDistance:10,toolSetUrl:i.default,unloadedPatternUrl:a.default,noUi:!1,fool:f,backgroundUrl:null,chunkBugWorkaround:!1,hexCoords:!1});p.chunkBugWorkaround&&console.debug("Chunk bug workaround enabled!"),o.PublicAPI.options=p,o.eventSys.on(u.net.connecting,(function(e){t.protocol=e.proto}))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.playerListWindow=t.playerListTable=t.playerList=t.sounds=t.misc=t.elements=t.mouse=t.keysDown=t.statusMsg=t.showPlayerList=t.showDevChat=void 0,t.revealSecrets=function(e){e?s.PublicAPI.net=u.net:delete s.PublicAPI.net};var o=n(15),r=y(n(16)),i=n(1),a=(n(9),n(3)),s=n(0),l=n(12),c=n(5),u=n(8),d=n(6),h=n(21),f=n(11),p=n(25),m=y(n(26)),v=y(n(27)),g=y(n(28));function y(e){return e&&e.__esModule?e:{default:e}}t.showDevChat=R,t.showPlayerList=function(e){e?f.windowSys.addWindow(T):f.windowSys.delWindow(T)},t.statusMsg=V;var w=t.keysDown={},b=t.mouse={x:0,y:0,lastX:0,lastY:0,get worldX(){return 16*c.camera.x+this.x/(c.camera.zoom/16)},get worldY(){return 16*c.camera.y+this.y/(c.camera.zoom/16)},mouseDownWorldX:0,mouseDownWorldY:0,get tileX(){return Math.floor(this.worldX/16)},get tileY(){return Math.floor(this.worldY/16)},buttons:0,validTile:!1,insideViewport:!1,touches:[],cancelMouseDown:function(){this.buttons=0}},k=t.elements={viewport:null,xyDisplay:null,chatInput:null,chat:null,devChat:null},x=t.misc={localStorage:(0,a.storageEnabled)()&&window.localStorage,_world:null,lastXYDisplay:[-1,-1],devRecvReader:function(e){},chatPostFormatRecvModifier:function(e){return e},chatRecvModifier:function(e){return e},chatSendModifier:function(e){return e},exceptionTimeout:null,worldPasswords:{},tick:0,urlWorldName:null,connecting:!1,tickInterval:null,lastMessage:null,lastCleanup:0,set world(e){return s.PublicAPI.world=N(),this._world=e},get world(){return this._world},guiShown:!1,cookiesEnabled:(0,a.cookiesEnabled)(),storageEnabled:(0,a.storageEnabled)(),showEUCookieNag:!i.options.noUi&&(0,a.cookiesEnabled)()&&"true"!==(0,a.getCookie)("nagAccepted"),usingFirefox:-1!==navigator.userAgent.indexOf("Firefox")},E=t.sounds={play:function(e){e.currentTime=0,i.options.enableSounds&&e.play()}};E.launch=new Audio,E.launch.src=m.default,E.place=new Audio,E.place.src=v.default,E.click=new Audio,E.click.src=g.default;t.playerList={};var S=t.playerListTable=document.createElement("table"),T=t.playerListWindow=new f.GUIWindow("Players",{closeable:!0},(function(e){var t=document.createElement("tr");t.innerHTML="<th>Id</th><th>X</th><th>Y</th>",S.appendChild(t),e.container.appendChild(S),e.container.id="player-list"})).move(window.innerWidth-240,32);function N(){var e={get name(){return x.world.name}},t=function(t){Object.defineProperty(e,t,{get:function(){return x.world&&this["_"+t]||(this["_"+t]=x.world[t].bind(x.world))}})};return t("getPixel"),t("setPixel"),t("undo"),t("unloadFarChunks"),e}function C(e){if(console.log(e),e=x.chatRecvModifier(e)){var t=document.createElement("li"),n=e,o=!1;if(e.startsWith("[D]")){t.className="discord",(d=document.createElement("span")).className="nick";var l=e.split(": ")[0]+": ";d.innerHTML=(0,a.escapeHTML)(l),t.appendChild(d),e=e.slice(l.length)}else if(e.startsWith("[Server]")||e.startsWith("Server:")||e.startsWith("Nickname set to")||e.startsWith("User: "))t.className="server";else if(e.startsWith("->")){var c=e.slice(3),u=parseInt(c);if((c=c.slice(u.toString().length)).startsWith(" tells you: ")){if(s.PublicAPI.muted.includes(u))return;(d=document.createElement("span")).className="tell",d.innerHTML=(0,a.escapeHTML)("-> "+u+" tells you: "),function(e,t,n){e.addEventListener("click",(function(e){(0,p.createContextMenu)(e.clientX,e.clientY,[["Mute "+t,function(){s.PublicAPI.muted.push(n),C('<span style="color: #ffa71f">Muted '+n+"</span>")}]]),e.stopPropagation()}))}(d,u,u),t.appendChild(d),e=c.slice(12)}else t.className="tell"}else if(e.startsWith("(M)"))t.className="moderator";else if(isNaN(e.split(": ")[0])&&"["!=e.split(": ")[0].charAt(0))t.className="admin",o=!0;else{var d;(d=document.createElement("span")).className="nick";u=(l=e.split(": ")[0]).startsWith("[")?l.split(" ")[0].slice(1,-1):l;if(u=parseInt(u),s.PublicAPI.muted.includes(u))return;d.innerHTML=(0,a.escapeHTML)(l+": "),d.addEventListener("click",(function(e){(0,p.createContextMenu)(e.clientX,e.clientY,[["Mute "+l,function(){s.PublicAPI.muted.push(u),C('<span style="color: #ffa71f">Muted '+u+"</span>")}]]),e.stopPropagation()})),t.appendChild(d),e=e.slice(l.length+2)}var h=e.indexOf(": ");if(-1!==h){var f=e.substr(0,h);n=f.replace(/\d+/g,"")+e.slice(h+2)}if(x.lastMessage&&x.lastMessage.text===n)x.lastMessage.incCount();else{var m=document.createElement("span");x.lastMessage={get text(){return n},incCount:function(){var n=m.recvTimes||1;m.innerHTML=(0,r.default)(e,{attributes:[{name:"target",value:"blank"}]})+" [x"+ ++n+"]",m.recvTimes=n,t.style.animation="none",t.offsetHeight,t.style.animation=null}},o||(e=(0,a.escapeHTML)(e).replace(/\&\#x2F;/g,"/")),e=e.replace(/(?:&lt;|<):(.+?):([0-9]+)(?:&gt;|>)/g,'<img class="emote" title="$1" src="https://cdn.discordapp.com/emojis/$2.png?v=1">'),e=x.chatPostFormatRecvModifier(e),m.innerHTML=(0,r.default)(e,{attributes:[{name:"target",value:"blank"}]}),t.appendChild(m),L((function(){k.chatMessages.appendChild(t);var e=k.chatMessages.children;e.length>i.options.maxChatBuffer&&e[0].remove()}),!0)}}}function M(e){try{x.devRecvReader(e)}catch(e){}var t=document.createElement("li"),n=document.createElement("span");n.innerHTML=e,t.appendChild(n),k.devChatMessages.appendChild(t),k.devChatMessages.scrollTop=k.devChatMessages.scrollHeight}function L(e){var t=!(arguments.length>1&&void 0!==arguments[1]&&arguments[1])||k.chatMessages.scrollHeight-k.chatMessages.scrollTop===k.chatMessages.clientHeight;e&&e(),t&&(k.chatMessages.scrollTop=k.chatMessages.scrollHeight)}function P(){k.chatMessages.innerHTML="",k.devChatMessages.innerHTML=""}function A(){var e=++x.tick,t=Math.max(Math.min(i.options.movementSpeed,64),0),n=0,o=0;w[38]&&(o-=t),w[37]&&(n-=t),w[40]&&(o+=t),w[39]&&(n+=t),0===n&&0===o||((0,c.moveCameraBy)(n,o),_(null,"mousemove",b.x,b.y)),s.eventSys.emit(i.EVENTS.tick,e),null!==d.player.tool&&null!==x.world&&d.player.tool.call("tick",b)}function _(e,t,n,o){b.x=n,b.y=o;var r=0;return null!==x.world&&(b.validTile=x.world.validMousePos(b.tileX,b.tileY),null!==d.player.tool&&(r=d.player.tool.call(t,[b,e])),O(b.tileX,b.tileY)&&(0,d.updateClientFx)()),r}function z(){k.chat.className="",k.devChat.className="",k.chatMessages.className="",k.chatInput.blur(),L()}function R(e){k.devChat.style.display=e?"":"none"}function O(e,t){return(x.lastXYDisplay[0]!==e||x.lastXYDisplay[1]!==t)&&(x.lastXYDisplay=[e,t],i.options.hexCoords?k.xyDisplay.innerHTML="X: 0x"+e.toString(16)+", Y: 0x"+t.toString(16):k.xyDisplay.innerHTML="X: "+e+", Y: "+t,!0)}function F(){var e=" cursor"+(1!==x.playerCount?"s online":" online"),t=""+x.playerCount;x.world&&"maxCount"in x.world&&(t+="/"+x.world.maxCount);var n=t+e;k.playerCountDisplay.innerHTML=n;var o="World of Pixels";x.world&&(o="("+t+"/"+x.world.name+") "+o),document.title=o}function I(e){k.loadUl.style.transform=e?"translateY(-75%) scale(0.5)":""}function D(e){x.guiShown=e,k.xyDisplay.style.transform=e?"initial":"",k.playerCountDisplay.style.transform=e?"initial":"",k.palette.style.transform=e?"translateY(-50%)":"",k.chat.style.transform=e?"initial":"",k.chatInput.disabled=!e,k.chatInput.style.display="initial",k.paletteBg.style.visibility=e?"":"hidden",k.helpButton.style.visibility=e?"":"hidden"}function j(e,t){k.loadOptions.className=t?"framed":"hide",e?(k.loadScr.className="",k.loadScr.style.transform=""):(k.loadScr.style.transform="translateY(-110%)",(0,a.eventOnce)(k.loadScr,"transitionend webkitTransitionEnd oTransitionEnd msTransitionEnd",(function(){u.net.isConnected()&&(k.loadScr.className="hide")})))}function V(e,t){k.status.isConnected;null!==t?(k.status.style.display="",k.statusMsg.innerHTML=t,k.spinner.style.display=e?"":"none"):k.status.style.display="none"}function W(){D(!1),j(!0,!0),V(!1,"Lost connection with the server."),x.world=null,k.chat.style.transform="initial",k.chatInput.style.display=""}function U(e,t){if(!x.connecting||u.net.isConnected()){x.connecting=!0;var n=e(!1);!function o(r){if(r>=(n.maxRetries||3)){var a=e(!0);a!=n&&(n=a,r=0)}s.eventSys.once(i.EVENTS.net.connecting,(function(){console.debug("Trying '"+n.title+"'..."),V(!0,"Connecting to '"+n.title+"'..."),j(!0,!1)})),u.net.connect(n,t);var l=function(){V(!0,"Couldn't connect to server, retrying... ("+ ++r+")"),setTimeout(o,Math.min(2e3*r,1e4),r),s.eventSys.removeListener(i.EVENTS.net.connected,c)},c=function(){V(!1,"Connected!"),s.eventSys.removeListener(i.EVENTS.net.disconnected,l),s.eventSys.once(i.EVENTS.net.disconnected,W),x.connecting=!1};s.eventSys.once(i.EVENTS.net.connected,c),s.eventSys.once(i.EVENTS.net.disconnected,l)}(0)}}function X(){x.storageEnabled&&(x.localStorage.worldPasswords=JSON.stringify(x.worldPasswords))}function Y(){var e=k.viewport,t=k.chatInput;if(x.storageEnabled&&x.localStorage.worldPasswords)try{x.worldPasswords=JSON.parse(x.localStorage.worldPasswords)}catch(e){}x.lastCleanup=0,e.oncontextmenu=function(){return!1},e.addEventListener("mouseenter",(function(){b.insideViewport=!0,(0,d.updateClientFx)()})),e.addEventListener("mouseleave",(function(){b.insideViewport=!1,(0,d.updateClientFx)()}));var n=[],r=0;t.addEventListener("keydown",(function(e){e.stopPropagation();var o=e.which||e.keyCode;switch((0===r||13==o&&!e.shiftKey)&&(n[0]=t.value),o){case 27:z();break;case 13:if(!e.shiftKey){e.preventDefault();var i=t.value;if(r=0,n.unshift(i),x.storageEnabled)if(i.startsWith("/adminlogin "))x.localStorage.adminlogin=i.slice(12);else if(i.startsWith("/modlogin "))x.localStorage.modlogin=i.slice(10);else if(i.startsWith("/nick")){var a=i.slice(6);a.length?x.localStorage.nick=a:delete x.localStorage.nick}else if(i.startsWith("/pass ")&&x.world){var s=i.slice(6);x.worldPasswords[u.net.protocol.worldName]=s,X()}e.ctrlKey||(i=x.chatSendModifier(i)),u.net.protocol.sendMessage(i),t.value="",t.style.height="16px",e.stopPropagation()}break;case 38:e.shiftKey&&r<n.length-1&&(r++,t.value=n[r],t.style.height=0,t.style.height=Math.min(t.scrollHeight-8,64)+"px");break;case 40:e.shiftKey&&r>0&&(r--,t.value=n[r],t.style.height=0,t.style.height=Math.min(t.scrollHeight-8,64)+"px")}})),t.addEventListener("keyup",(function(e){e.stopPropagation(),13!=(e.which||e.keyCode)||e.shiftKey||z()})),t.addEventListener("input",(function(e){t.style.height=0,t.style.height=Math.min(t.scrollHeight-8,64)+"px"})),t.addEventListener("focus",(function(e){b.buttons?t.blur():(k.chat.className="active selectable",k.devChat.className="active selectable",k.chatMessages.className="active",L())})),window.addEventListener("keydown",(function(e){var t=e.which||e.keyCode;if("INPUT"!==document.activeElement.tagName&&null!==x.world){w[t]=!0;var n=d.player.tool;if(null!==n&&null!==x.world&&n.isEventDefined("keydown")&&n.call("keydown",[w,e]))return!1;switch(t){case 80:d.player.tool="pipette";break;case 79:d.player.tool="cursor";break;case 77:case 16:d.player.tool="move";break;case 90:if(!e.ctrlKey||!x.world)break;x.world.undo(e.shiftKey),e.preventDefault();break;case 70:var o=function(e){var t=e.split(","),n=null;if(3==t.length){n=t;for(var o=0;o<t.length;o++)if(t[o]=+t[o],!(t[o]>=0&&t[o]<256))return null}else if("#"==e[0]&&7==e.length){var r=parseInt(e.replace("#","0x"));n=[r>>16&255,r>>8&255,255&r]}return n},r=prompt("Custom color\nType three values separated by a comma: r,g,b\n(...or the hex string: #RRGGBB)\nYou can add multiple colors at a time separating them with a space.");if(!r)break;r=r.split(" ");for(var i=0;i<r.length;i++){var a=o(r[i]);a&&(d.player.selectedColor=a)}break;case 71:c.renderer.showGrid(!c.renderer.gridShown);break;case 112:D(!x.guiShown),e.preventDefault();break;case 107:case 187:++c.camera.zoom;break;case 109:case 189:--c.camera.zoom;break;default:return!0}return!1}})),window.addEventListener("keyup",(function(e){var t=e.which||e.keyCode;if(delete w[t],"INPUT"!==document.activeElement.tagName){var n=d.player.tool;if(null!==n&&null!==x.world&&n.isEventDefined("keyup")&&n.call("keyup",[w,e]))return!1;13==t?k.chatInput.focus():16==t&&(d.player.tool="cursor")}})),e.addEventListener("mousedown",(function(e){if(z(),b.lastX=b.x,b.lastY=b.y,b.x=e.pageX,b.y=e.pageY,b.mouseDownWorldX=b.worldX,b.mouseDownWorldY=b.worldY,"buttons"in e)b.buttons=e.buttons;else{var t=e.button;2===t?t=1:1===t&&(t=2),b.buttons|=1<<t}null!==d.player.tool&&null!==x.world&&d.player.tool.call("mousedown",[b,e])})),window.addEventListener("mouseup",(function(e){if("buttons"in e&&!x.usingFirefox)b.buttons=e.buttons;else{var t=e.button;2===t?t=1:1===t&&(t=2),b.buttons&=~(1<<t)}null!==d.player.tool&&null!==x.world&&d.player.tool.call("mouseup",[b,e])})),window.addEventListener("mousemove",(function(e){var t=_(e,"mousemove",e.pageX,e.pageY);4&(b.buttons&~t)&&(0,c.moveCameraBy)((b.mouseDownWorldX-b.worldX)/16,(b.mouseDownWorldY-b.worldY)/16)}));var a="onwheel"in document?"wheel":"onmousewheel"in document?"mousewheel":"DOMMouseScroll";e.addEventListener(a,(function(e){var t=(0,o.normalizeWheel)(e);if(null===d.player.tool||null===x.world||!d.player.tool.isEventDefined("scroll")||!d.player.tool.call("scroll",[b,t,e]))if(e.ctrlKey)c.camera.zoom+=Math.max(-1,Math.min(1,-t.pixelY));else{var n=Math.max(-1,Math.min(1,t.spinY)),r=d.player.paletteIndex;n>0?r++:n<0&&r--,d.player.paletteIndex=r}}),{passive:!0}),e.addEventListener(a,(function(e){return e.preventDefault(),!1}),{passive:!1});var l=function(e){return function(t){var n=d.player.tool;b.buttons=0,null!==n&&null!==x.world&&d.player.tool.call(e,[b,t])}};e.addEventListener("touchstart",(function(e){var t=e.changedTouches[0];b.buttons=1,t&&(_(e,"touchstart",t.pageX,t.pageY),b.mouseDownWorldX=b.worldX,b.mouseDownWorldY=b.worldY)}),{passive:!0}),e.addEventListener("touchmove",(function(e){var t=e.changedTouches[0];t&&_(e,"touchmove",t.pageX,t.pageY)}),{passive:!0}),e.addEventListener("touchend",l("touchend"),{passive:!0}),e.addEventListener("touchcancel",l("touchcancel"),{passive:!0}),k.soundToggle.addEventListener("change",(function(e){i.options.enableSounds=!k.soundToggle.checked})),i.options.enableSounds=!k.soundToggle.checked,k.hexToggle.addEventListener("change",(function(e){i.options.hexCoords=k.hexToggle.checked})),i.options.hexCoords=k.hexToggle.checked,console.log("%c _ _ _         _   _    _____ ___    _____ _         _     \n| | | |___ ___| |_| |  |     |  _|  |  _  |_|_ _ ___| |___ \n| | | | . |  _| | . |  |  |  |  _|  |   __| |_'_| -_| |_ -|\n|_____|___|_| |_|___|  |_____|_|    |__|  |_|_,_|___|_|___|","font-size: 15px; font-weight: bold;"),console.log("%cWelcome to the developer console!","font-size: 20px; font-weight: bold; color: #F0F;"),(0,h.resolveProtocols)(),s.eventSys.emit(i.EVENTS.init),O(0,0),window.onhashchange=function(e){window.location.reload(!0)};var f=window.location.hash;"#"===f[0]&&(f=f.slice(1)),x.urlWorldName=f}function H(){var e=function(e){for(var t=[],n=[],o=0;o<e.length;o++)e[o].default&&t.push(e[o]),n.push(e[o]);var r=0;return function(e){if(e&&(t.length?t.shift():++r),t.length){var o=t[0];return n.push(o),o}return n[r%n.length]}}(i.options.serverAddress);U(e,x.urlWorldName),k.reconnectBtn.onclick=function(){return U(e,x.urlWorldName)},x.tickInterval=setInterval(A,1e3/i.options.tickSpeed)}s.eventSys.once(i.EVENTS.loaded,(function(){return V(!0,"Initializing...")})),s.eventSys.once(i.EVENTS.misc.loadingCaptcha,(function(){return V(!0,"Trying to load captcha...")})),s.eventSys.once(i.EVENTS.misc.logoMakeRoom,(function(){V(!1,null),I()})),s.eventSys.once(i.EVENTS.loaded,(function(){Y(),x.showEUCookieNag?f.windowSys.addWindow(new f.UtilDialog("Cookie notice","This box alerts you that we're going to use cookies!\nIf you don't accept their usage, disable cookies and reload the page.",!1,(function(){(0,a.setCookie)("nagAccepted","true"),x.showEUCookieNag=!1,I(!1),H()}))):H()})),s.eventSys.on(i.EVENTS.net.maxCount,(function(e){x.world.maxCount=e,F()})),s.eventSys.on(i.EVENTS.net.playerCount,(function(e){x.playerCount=e,F()})),s.eventSys.on(i.EVENTS.net.chat,C),s.eventSys.on(i.EVENTS.net.devChat,M),s.eventSys.on(i.EVENTS.net.world.setId,(function(e){if(x.storageEnabled){var t=x.localStorage.adminlogin?i.RANK.ADMIN:x.localStorage.modlogin?i.RANK.MODERATOR:u.net.protocol.worldName in x.worldPasswords?i.RANK.USER:i.RANK.NONE;if(t>i.RANK.NONE){var n,o=!1,r=function(){console.log("WRONG"),s.eventSys.removeListener(i.EVENTS.net.sec.rank,a),t==i.RANK.ADMIN?delete x.localStorage.adminlogin:t==i.RANK.MODERATOR?delete x.localStorage.modlogin:t==i.RANK.USER&&(delete x.worldPasswords[u.net.protocol.worldName],X()),U((function(){return u.net.currentServer}),u.net.protocol.worldName)},a=function e(n){(n==t||o&&n==i.RANK.MODERATOR)&&(setTimeout((function(){s.eventSys.removeListener(i.EVENTS.net.disconnected,r)}),1e3),s.eventSys.removeListener(i.EVENTS.net.sec.rank,e),l())};s.eventSys.once(i.EVENTS.net.disconnected,r),s.eventSys.on(i.EVENTS.net.sec.rank,a),t==i.RANK.ADMIN?n="/adminlogin "+x.localStorage.adminlogin:t==i.RANK.MODERATOR?n="/modlogin "+x.localStorage.modlogin:t==i.RANK.USER&&(n="/pass "+x.worldPasswords[u.net.protocol.worldName],o=!0),u.net.protocol.sendMessage(n)}else l()}function l(){x.localStorage.nick&&u.net.protocol.sendMessage("/nick "+x.localStorage.nick)}})),s.eventSys.on(i.EVENTS.misc.windowAdded,(function(e){null===x.world&&(V(!1,null),I(!0))})),s.eventSys.on(i.EVENTS.net.world.joining,(function(e){I(!1),console.log("Joining world: "+e)})),s.eventSys.on(i.EVENTS.net.world.join,(function(e){j(!1,!1),D(!i.options.noUi),c.renderer.showGrid(!i.options.noUi),E.play(E.launch),x.world=new l.World(e),s.eventSys.emit(i.EVENTS.misc.worldInitialized)})),s.eventSys.on(i.EVENTS.net.connected,(function(){P()})),s.eventSys.on(i.EVENTS.camera.moved,(function(e){var t=(0,a.getTime)();null!==x.world&&t-x.lastCleanup>1e3&&(x.lastCleanup=t,c.renderer.unloadFarClusters()),O(b.tileX,b.tileY)&&(0,d.updateClientFx)()})),s.eventSys.on(i.EVENTS.camera.zoom,(function(e){O(b.tileX,b.tileY)&&(0,d.updateClientFx)()})),window.addEventListener("error",(function(e){R(!0);var t=e&&e.error?e.error.message||e.error.stack:e.message||"Unknown error occurred";t=(t=(0,a.escapeHTML)(t)).split("\n");for(var n=0;n<t.length;n++)M(t[n]);d.player.rank!==i.RANK.ADMIN&&(x.exceptionTimeout&&clearTimeout(x.exceptionTimeout),x.exceptionTimeout=setTimeout((function(){return R(!1)}),5e3))})),window.addEventListener("load",(function(){var e;k.loadScr=document.getElementById("load-scr"),k.loadUl=document.getElementById("load-ul"),k.loadOptions=document.getElementById("load-options"),k.reconnectBtn=document.getElementById("reconnect-btn"),k.spinner=document.getElementById("spinner"),k.statusMsg=document.getElementById("status-msg"),k.status=document.getElementById("status"),k.logo=document.getElementById("logo"),k.xyDisplay=document.getElementById("xy-display"),k.devChat=document.getElementById("dev-chat"),k.chat=document.getElementById("chat"),k.devChatMessages=document.getElementById("dev-chat-messages"),k.chatMessages=document.getElementById("chat-messages"),k.playerCountDisplay=document.getElementById("playercount-display"),k.palette=document.getElementById("palette"),k.paletteColors=document.getElementById("palette-colors"),k.paletteCreate=document.getElementById("palette-create"),k.paletteInput=document.getElementById("palette-input"),k.paletteBg=document.getElementById("palette-bg"),k.animCanvas=document.getElementById("animations"),k.viewport=document.getElementById("viewport"),k.windows=document.getElementById("windows"),k.chatInput=document.getElementById("chat-input"),k.soundToggle=document.getElementById("no-sound"),k.hexToggle=document.getElementById("hex-coords"),k.helpButton=document.getElementById("help-button"),k.helpButton.addEventListener("click",(function(){document.getElementById("help").className=""})),document.getElementById("help-close").addEventListener("click",(function(){document.getElementById("help").className="hidden"})),e=function(){return s.eventSys.emit(i.EVENTS.loaded)},window.requestAnimationFrame=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame||function(e){setTimeout(e,1e3/i.options.fallbackFps)},Number.isInteger=Number.isInteger||function(e){return Math.floor(e)===e&&Math.abs(e)!==1/0},Math.trunc=Math.trunc||function(e){return 0|e},(HTMLCanvasElement.prototype.toBlob=HTMLCanvasElement.prototype.toBlob||HTMLCanvasElement.prototype.msToBlob)?e():(0,a.loadScript)(n(29),e)})),s.PublicAPI.emit=s.eventSys.emit.bind(s.eventSys),s.PublicAPI.on=s.eventSys.on.bind(s.eventSys),s.PublicAPI.once=s.eventSys.once.bind(s.eventSys),s.PublicAPI.removeListener=s.eventSys.removeListener.bind(s.eventSys),s.PublicAPI.elements=k,s.PublicAPI.mouse=b,s.PublicAPI.world=N(),s.PublicAPI.chat={send:function(e){return u.net.protocol&&u.net.protocol.sendMessage(e)},clear:P,local:C,get onDevMsg(){return x.devRecvReader},set onDevMsg(e){x.devRecvReader=e},get postFormatRecvModifier(){return x.chatPostFormatRecvModifier},set postFormatRecvModifier(e){x.chatPostFormatRecvModifier=e},get recvModifier(){return x.chatRecvModifier},set recvModifier(e){x.chatRecvModifier=e},get sendModifier(){return x.chatSendModifier},set sendModifier(e){x.chatSendModifier=e}},s.PublicAPI.sounds=E,s.PublicAPI.poke=function(){u.net.protocol&&(u.net.protocol.lastSentX=1/0)},s.PublicAPI.muted=[]},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getTime=r,t.setCookie=function(e,t){document.cookie=e+"="+t+"; expires=Fri, 31 Dec 9999 23:59:59 GMT"},t.getCookie=function(e){for(var t=document.cookie.split(";"),n=0;n<t.length;n++){var o=t[n].indexOf(e+"=");if(0===o||1===o&&" "===t[n][0]){var r=o+e.length+1;return t[n].substring(r,t[n].length)}}return null},t.cookiesEnabled=i,t.storageEnabled=a,t.propertyDefaults=function(e,t){if(e)for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t},t.absMod=s,t.htmlToElement=function(e){return c("template",{innerHTML:e}).content.firstChild},t.escapeHTML=l,t.mkHTML=c,t.loadScript=u,t.eventOnce=function(e,t,n){for(var o=t.split(" "),r=function t(r){for(var i=0;i<o.length;i++)e.removeEventListener(o[i],t);return n()},i=0;i<o.length;i++)e.addEventListener(o[i],r)},t.setTooltip=d,t.waitFrames=h,t.decompress=function(e){for(var t=e[1]<<8|e[0],n=new Uint8Array(t),o=e[3]<<8|e[2],r=2*o+4,i=0,a=r,s=0;s<o;s++){for(var l=(e[4+2*s+1]<<8|e[4+2*s])+r;a<l;)n[i++]=e[a++];var c=e[a+1]<<8|e[a],u=e[a+2],d=e[a+3],h=e[a+4];for(a+=5;c--;)n[i]=u,n[i+1]=d,n[i+2]=h,i+=3}for(;a<e.length;)n[i++]=e[a++];return n},t.line=f;n(4);n(0).PublicAPI.util={getTime:r,cookiesEnabled:i,storageEnabled:a,absMod:s,escapeHTML:l,mkHTML:c,setTooltip:d,waitFrames:h,line:f,loadScript:u};var o=Date.now();function r(e){return e?o=Date.now():o}function i(){return navigator.cookieEnabled}function a(){try{return!!window.localStorage}catch(e){return!1}}function s(e,t){return(e%t+t)%t}function l(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\"/g,"&quot;").replace(/\'/g,"&#39;").replace(/\//g,"&#x2F;")}function c(e,t){var n=document.createElement(e);for(var o in t)n[o]=t[o];return n}function u(e,t){document.getElementsByTagName("head")[0].appendChild(c("script",{type:"text/javascript",src:e,onload:t}))}function d(e,t){var n=10,o=0,r=null;function i(){var i=e.getBoundingClientRect(),a=i.top+i.height/2;r=c("span",{innerHTML:t,className:"framed tooltip whitetext"}),document.body.appendChild(r);var s=r.getBoundingClientRect();a-=s.height/2;var l=i.left-s.width-n;l<n&&(l=i.right+n),r.style.transform="translate("+Math.round(l)+"px,"+Math.round(a)+"px)",o=0}var a=function t(n){clearTimeout(o),o=0,e.removeEventListener("mouseleave",t),e.removeEventListener("click",t),e.removeEventListener("DOMNodeRemoved",t),null!==r&&(r.remove(),r=null)};e.addEventListener("mouseenter",(function(t){null===r&&0===o&&(o=setTimeout(i,500),e.addEventListener("click",a),e.addEventListener("mouseleave",a),e.addEventListener("DOMNodeRemoved",a))}))}function h(e,t){window.requestAnimationFrame((function(){return e>0?h(--e,t):t()}))}function f(e,t,n,o,r,i){for(var a,s=Math.abs(n-e),l=e<n?1:-1,c=-Math.abs(o-t),u=t<o?1:-1,d=s+c;i(e,t),e!=n||t!=o;)(a=2*d)>=c&&(d+=c,e+=l),a<=s&&(d+=s,t+=u)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=t.colorUtils={to888:function(e,t,n){return[527*e+23>>6,259*t+33>>6,527*n+23>>6]},to565:function(e,t,n){return[249*e+1014>>11,253*t+505>>10,249*n+1014>>11]},u16_565:function(e,t,n){return n<<11|t<<5|e},u24_888:function(e,t,n){return n<<16|t<<8|e},u32_888:function(e,t,n){return 4278190080|o.u24_888(e,t,n)},u16_565_to_888:function(e){return 527*(e>>11&31)+23>>6<<16|527*(e>>5&31)+23>>6<<8|527*(31&e)+23>>6},arrFrom565:function(e){return[31&e,e>>5&63,e>>11&31]},toHTML:function(e){return"#"+("000000"+(e=(e>>16&255|65280&e|e<<16&16711680).toString(16))).substring(e.length)}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.renderer=t.camera=t.isVisible=t.moveCameraTo=t.moveCameraBy=t.centerCameraTo=void 0;var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();t.drawText=y,t.unloadFarClusters=b;var r=n(1),i=n(0),a=n(2),s=(n(6),n(7)),l=n(3),c=n(4),u=(n(14),n(10));function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}t.centerCameraTo=M,t.moveCameraBy=function(e,t){h.x+=e,h.y+=t,C()},t.moveCameraTo=function(e,t){h.x=e,h.y=t,C()},t.isVisible=w;var h={x:0,y:0,zoom:-1},f=t.camera={get x(){return h.x},get y(){return h.y},get zoom(){return h.zoom},set zoom(e){if((e=Math.min(r.options.zoomLimitMax,Math.max(r.options.zoomLimitMin,e)))!==h.zoom){var t=(n=Math.round(h.x+window.innerWidth/f.zoom/2),o=Math.round(h.y+window.innerHeight/f.zoom/2),[n,o]);h.zoom=e,M(t[0],t[1]),i.eventSys.emit(r.EVENTS.camera.zoom,e)}var n,o},isVisible:w},p={updateRequired:3,animContext:null,gridShown:!0,gridPattern:null,unloadedPattern:null,worldBackground:null,minGridZoom:r.options.minGridZoom,updatedClusters:[],clusters:{},visibleClusters:[],currentFontSize:-1},m=t.renderer={rendertype:{ALL:3,FX:1,WORLD:2},patterns:{get unloaded(){return p.unloadedPattern}},render:x,showGrid:function(e){p.gridShown=e,x(m.rendertype.FX)},get gridShown(){return p.gridShown},updateCamera:C,unloadFarClusters:b};i.PublicAPI.camera=f,i.PublicAPI.renderer=m;var v=function(){function e(t,n,o,i,a,s){d(this,e),this.data=t,r.options.chunkBugWorkaround&&(this.changes=[]),this.offx=n,this.offy=o,this.realwidth=s,this.width=i,this.height=a}return o(e,[{key:"get",value:function(e,t){return this.data[this.offx+e+(this.offy+t)*this.realwidth]}},{key:"set",value:function(e,t,n){this.data[this.offx+e+(this.offy+t)*this.realwidth]=n,r.options.chunkBugWorkaround&&this.changes.push([0,e,t,n])}},{key:"fill",value:function(e){for(var t=0;t<this.height;t++)for(var n=0;n<this.width;n++)this.data[this.offx+n+(this.offy+t)*this.realwidth]=e;r.options.chunkBugWorkaround&&this.changes.push([1,0,0,e])}},{key:"fillFromBuf",value:function(e){for(var t=0;t<this.height;t++)for(var n=0;n<this.width;n++)this.data[this.offx+n+(this.offy+t)*this.realwidth]=e[n+t*this.width],r.options.chunkBugWorkaround&&this.changes.push([0,n,t,e[n+t*this.width]])}}]),e}(),g=function(){function e(t,n){d(this,e),this.removed=!1,this.toUpdate=!1,this.shown=!1,this.x=t,this.y=n,this.canvas=document.createElement("canvas"),this.canvas.width=r.protocol.chunkSize*r.protocol.clusterChunkAmount,this.canvas.height=r.protocol.chunkSize*r.protocol.clusterChunkAmount,this.ctx=this.canvas.getContext("2d"),this.data=this.ctx.createImageData(this.canvas.width,this.canvas.height),this.u32data=new Uint32Array(this.data.data.buffer),this.chunks=[],r.options.chunkBugWorkaround&&(this.currentColor=0)}return o(e,[{key:"render",value:function(){this.toUpdate=!1;for(var e=this.chunks.length;e--;){var t=this.chunks[e];if(t.needsRedraw)if(t.needsRedraw=!1,r.options.chunkBugWorkaround){for(var n=t.view.changes,o=r.protocol.chunkSize,i=0;i<n.length;i++){var a=n[i];switch(this.currentColor!==a[3]&&(this.currentColor=a[3],this.ctx.fillStyle=c.colorUtils.toHTML(a[3])),a[0]){case 0:this.ctx.fillRect(t.view.offx+a[1],t.view.offy+a[2],1,1);break;case 1:this.ctx.fillRect(t.view.offx,t.view.offy,o,o)}}t.view.changes=[]}else this.ctx.putImageData(this.data,0,0,t.view.offx,t.view.offy,t.view.width,t.view.height)}}},{key:"remove",value:function(){if(this.removed=!0,this.shown){var e=p.visibleClusters;e.splice(e.indexOf(this),1),this.shown=!1}this.canvas.width=0,this.u32data=this.data=null,delete p.clusters[this.x+","+this.y];for(var t=0;t<this.chunks.length;t++)this.chunks[t].view=null,this.chunks[t].remove();this.chunks=[]}},{key:"addChunk",value:function(e){var t=e.x&r.protocol.clusterChunkAmount-1,n=e.y&r.protocol.clusterChunkAmount-1,o=r.protocol.chunkSize,i=new v(this.u32data,t*o,n*o,o,o,r.protocol.clusterChunkAmount*o);e.tmpChunkBuf&&(i.fillFromBuf(e.tmpChunkBuf),e.tmpChunkBuf=null),e.view=i,this.chunks.push(e),e.needsRedraw=!0}},{key:"delChunk",value:function(e){e.view=null;var t=this.chunks.indexOf(e);-1!==t&&this.chunks.splice(t,1),this.chunks.length||this.remove()}}]),e}();function y(e,t,n,o,r){e.strokeStyle="#000000",e.fillStyle="#FFFFFF",e.lineWidth=2.5,e.globalAlpha=.5,r&&(n-=e.measureText(t).width>>1),e.strokeText(t,n,o),e.globalAlpha=1,e.fillText(t,n,o)}function w(e,t,n,o){var r=f.x,i=f.y,a=f.zoom,s=window.innerWidth,l=window.innerHeight;return e+n>r&&t+o>i&&e<=r+s/a&&t<=i+l/a}function b(){var e=f.x,t=f.y,n=f.zoom,o=e+(window.innerWidth/n|0)/2,i=t+(window.innerHeight/n|0)/2,a=r.protocol.clusterChunkAmount*r.protocol.chunkSize;for(var s in p.clusters){if(!w((s=p.clusters[s]).x*a,s.y*a,a,a))(0|Math.abs(o/a-s.x))+(0|Math.abs(i/a-s.y))>r.options.unloadDistance&&s.remove()}}function k(e,t){var n=16*f.x,o=16*f.y,r=f.zoom,i=p.animContext,a=i.canvas,s=e.tool;s||(s=u.tools.cursor);var l=s.cursor.width/16*r,c=s.cursor.height/16*r,d=e.x,h=e.y,m=(d-n-s.offset[0])*(r/16)|0,v=(h-o-s.offset[1])*(r/16)|0;if(m<-l||v<-c||m>a.width||v>a.height)return!0;if(t>3){var g=e.id,w=i.measureText(g).width+r/2;i.globalAlpha=1,i.fillStyle=e.clr,i.fillRect(m,v+c,w,r),i.globalAlpha=.2,i.lineWidth=3,i.strokeStyle="#000000",i.strokeRect(m,v+c,w,r),i.globalAlpha=1,y(i,g,m+r/4,v+t+c+r/8)}return i.drawImage(s.cursor,m,v,l,c),d===e.endX&&h===e.endY}function x(e){p.updateRequired|=e}function E(e){e>=p.minGridZoom?p.gridPattern=function(e){var t=document.createElement("canvas"),n=t.getContext("2d"),o=t.width=t.height=Math.round(16*e);if(n.setLineDash([1]),n.globalAlpha=.2,e>=4){var r=Math.min(1,e-4);r<1&&(n.globalAlpha=.2*r),n.beginPath();for(var i=16;--i;)n.moveTo(i*e+.5,0),n.lineTo(i*e+.5,o),n.moveTo(0,i*e+.5),n.lineTo(o,i*e+.5);n.stroke(),n.globalAlpha=Math.max(.2,1*r)}return n.beginPath(),n.moveTo(0,0),n.lineTo(0,o),n.lineTo(o,o),n.stroke(),n.createPattern(t,"repeat")}(e):p.gridPattern=null}function S(){var e=p.clusters,t=p.visibleClusters;for(var n in e){n=e[n];var o=r.protocol.chunkSize*r.protocol.clusterChunkAmount,i=w(n.x*o,n.y*o,o,o);!i&&n.shown?(n.shown=!1,t.splice(t.indexOf(n),1)):i&&!n.shown&&(n.shown=!0,t.push(n),x(m.rendertype.WORLD))}}function T(){a.elements.animCanvas.width=window.innerWidth,a.elements.animCanvas.height=window.innerHeight;var e=p.animContext;e.imageSmoothingEnabled=!1,e.webkitImageSmoothingEnabled=!1,e.mozImageSmoothingEnabled=!1,e.msImageSmoothingEnabled=!1,e.oImageSmoothingEnabled=!1,p.currentFontSize=-1,C()}function N(){for(var e=f.x/r.protocol.chunkSize-2|0,t=f.x/r.protocol.chunkSize+window.innerWidth/f.zoom/r.protocol.chunkSize|0,n=f.y/r.protocol.chunkSize-2|0,o=f.y/r.protocol.chunkSize+window.innerHeight/f.zoom/r.protocol.chunkSize|0;++e<=t;)for(var i=n;++i<=o;)a.misc.world.loadChunk(e,i)}function C(){var e,t,n;i.eventSys.emit(r.EVENTS.camera.moved,f),e=h.zoom,t=Math.round(h.x*e)/e,n=Math.round(h.y*e)/e,h.x=t,h.y=n,S(),null!==a.misc.world&&N(),x(m.rendertype.FX)}function M(e,t){h.x=-window.innerWidth/f.zoom/2+e,h.y=-window.innerHeight/f.zoom/2+t,C()}i.eventSys.on(r.EVENTS.net.world.teleported,(function(e,t){M(e,t)})),i.eventSys.on(r.EVENTS.camera.zoom,(function(e){E(e),x(m.rendertype.FX)})),i.eventSys.on(r.EVENTS.renderer.addChunk,(function(e){var t=Math.floor(e.x/r.protocol.clusterChunkAmount),n=Math.floor(e.y/r.protocol.clusterChunkAmount),o=t+","+n,i=p.clusters,a=i[o];a||(a=i[o]=new g(t,n),S()),a.addChunk(e),a.toUpdate||(a.toUpdate=!0,p.updatedClusters.push(a));var s=r.protocol.chunkSize;(a.toUpdate||w(e.x*s,e.y*s,s,s))&&x(m.rendertype.WORLD|m.rendertype.FX)})),i.eventSys.on(r.EVENTS.renderer.rmChunk,(function(e){var t=Math.floor(e.x/r.protocol.clusterChunkAmount)+","+Math.floor(e.y/r.protocol.clusterChunkAmount),n=p.clusters[t];n&&(n.delChunk(e),n.removed||n.toUpdate||(n.toUpdate=!0,p.updatedClusters.push(n)))})),i.eventSys.on(r.EVENTS.renderer.updateChunk,(function(e){var t=Math.floor(e.x/r.protocol.clusterChunkAmount)+","+Math.floor(e.y/r.protocol.clusterChunkAmount),n=p.clusters[t];n&&!n.toUpdate&&(n.toUpdate=!0,p.updatedClusters.push(n));var o=r.protocol.chunkSize;w(e.x*o,e.y*o,o,o)&&x(m.rendertype.WORLD|m.rendertype.FX)})),i.eventSys.on(r.EVENTS.misc.worldInitialized,(function(){N()})),i.eventSys.once(r.EVENTS.init,(function(){p.animContext=a.elements.animCanvas.getContext("2d",{alpha:!1}),window.addEventListener("resize",T),T(),f.zoom=r.options.defaultZoom,M(0,0);var e=function(e,t){var n=new Image;n.onload=function(){var e=p.animContext.createPattern(n,"repeat");e.width=n.width,e.height=n.height,t(e)},n.src=e};e(r.options.unloadedPatternUrl,(function(e){p.unloadedPattern=e})),null!=r.options.backgroundUrl&&e(r.options.backgroundUrl,(function(e){p.worldBackground=e})),i.eventSys.once(r.EVENTS.misc.toolsInitialized,(function e(){var t;0!==(t=p.updateRequired)&&(p.updateRequired=0,function(e){var t=(0,l.getTime)(!0),n=f.x,o=f.y,i=f.zoom,c=0;if(e&m.rendertype.WORLD){for(var u=p.updatedClusters,d=0;d<u.length;d++){u[d].render()}p.updatedClusters=[]}if(e&m.rendertype.FX&&null!==a.misc.world){var h=p.animContext,v=p.visibleClusters,g=r.protocol.chunkSize*r.protocol.clusterChunkAmount,y=window.innerWidth,w=window.innerHeight,b=p.worldBackground,E=a.misc.world.allChunksLoaded();E||h.clearRect(0,0,h.canvas.width,h.canvas.height),h.lineWidth=.15625*i,h.scale(i,i);for(d=0;d<v.length;d++){var S=v[d],T=(z=-(n-S.x*g))<0?-z:0,N=(R=-(o-S.y*g))<0?-R:0,C=z<0?0:z,M=R<0?0:R,L=g-T,P=g-N;P=(P=P+M<w/i?P:w/i-M)+1|0,(L=(L=L+C<y/i?L:y/i-C)+1|0)>0&&P>0&&h.drawImage(S.canvas,T,N,L,P,C,M,L,P)}if(h.scale(1/i,1/i),null!=b){var A=i/r.options.defaultZoom,_=r.options.defaultZoom/i,z=-n*i%(b.width*A),R=-o*i%(b.height*A);h.translate(z,R),h.fillStyle=b,h.globalCompositeOperation="destination-over",h.scale(A,A),h.fillRect(-z/A,-R/A,h.canvas.width*_,h.canvas.height*_),h.scale(_,_),h.translate(-z,-R)}z=-n*i%(16*i),R=-o*i%(16*i);h.translate(z,R),p.gridShown&&p.gridPattern&&(h.fillStyle=p.gridPattern,E||(h.globalCompositeOperation="source-atop"),h.fillRect(-z,-R,h.canvas.width,h.canvas.height)),null==p.unloadedPattern||E&&null==b||(h.fillStyle=p.unloadedPattern,h.globalCompositeOperation="destination-over",h.fillRect(-z,-R,h.canvas.width,h.canvas.height)),h.translate(-z,-R),h.globalCompositeOperation="source-over";for(d=0;d<s.activeFx.length;d++)switch(s.activeFx[d].render(h,t)){case 0:c|=m.rendertype.FX;break;case 2:--d}h.globalAlpha=1;var O=a.misc.world.players,F=.625*i|0;for(var I in p.currentFontSize!=F&&(h.font=F+"px sans-serif",p.currentFontSize=F),O){k(O[I],F)||(c|=m.rendertype.FX)}}x(c)}(t)),window.requestAnimationFrame(e)}))}))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.player=t.networkRankVerification=t.undoHistory=t.updateClientFx=void 0,t.shouldUpdate=function(){return y?!(y=!1):y},t.getDefaultTool=S;var o=n(0),r=n(1),i=n(3),a=n(2),s=n(4),l=n(5),c=(n(13),n(10)),u=n(7),d=n(8);n(9);t.updateClientFx=T;var h=null,f=[[228,166,114],[184,111,80],[116,63,57],[63,40,50],[158,40,53],[229,59,68],[251,146,43],[255,231,98],[99,198,77],[50,115,69],[25,61,63],[79,103,129],[175,191,210],[255,255,255],[44,232,244],[4,132,209]],p=0,m=(t.undoHistory=[],new u.Fx(u.PLAYERFX.NONE,{isLocalPlayer:!0,player:{get tileX(){return a.mouse.tileX},get tileY(){return a.mouse.tileY},get x(){return a.mouse.worldX},get y(){return a.mouse.worldY},get htmlRgb(){return b.htmlRgb},get tool(){return b.tool}}}));m.setVisibleFunc((function(){return a.mouse.insideViewport&&a.mouse.validTile}));var v=t.networkRankVerification=[r.RANK.NONE],g=r.RANK.NONE,y=!1,w=[null,""],b=t.player={get paletteIndex(){return p},set paletteIndex(e){p=(0,i.absMod)(e,f.length),x()},get htmlRgb(){var e=b.selectedColor;if(w[0]===e)return w[1];var t=s.colorUtils.toHTML(s.colorUtils.u24_888(e[0],e[1],e[2]));return w[0]=e,w[1]=t,t},get selectedColor(){return f[p]},set selectedColor(e){E(e)},get palette(){return f},get rank(){return g},get tool(){return h},set tool(e){!function(e){var t=c.tools[e];if(!t||t===h||t.rankRequired>b.rank)return!1;h&&h.call("deselect");h=t,a.mouse.cancelMouseDown(),t.call("select"),(0,c.updateToolWindow)(e),a.mouse.validClick=!1,m.setRenderer(t.fxRenderer),y=!0,T()}(e)},get toolId(){return d.net.currentServer.proto.tools.id[h.id]},get tools(){return c.tools},get id(){return d.net.protocol.id}};function k(){T(),a.elements.paletteColors.style.transform="translateY("+40*-p+"px)",y=!0}function x(){var e=a.elements.paletteColors;e.innerHTML="";for(var t=function(e){return function(){p=e,k()}},n=function(e){return function(){f.length>1&&(f.splice(e,1),(p>e||p===f.length)&&--p,x(),k())}},o=0;o<f.length;o++){var r=document.createElement("div"),l=f[o];r.style.backgroundColor="rgb("+l[0]+","+l[1]+","+l[2]+")",(0,i.setTooltip)(r,s.colorUtils.toHTML(s.colorUtils.u24_888(l[0],l[1],l[2]))),r.onmouseup=function(e){switch(e.button){case 0:this.sel();break;case 2:this.del()}return!1}.bind({sel:t(o),del:n(o)}),r.oncontextmenu=function(){return!1},e.appendChild(r)}k()}function E(e){for(var t=0;t<f.length;t++)if(f[t][0]===e[0]&&f[t][1]===e[1]&&f[t][2]===e[2])return p=t,void k();p=f.length,f.push(e),x()}function S(){for(var e in c.tools)if(c.tools[e].rankRequired<=b.rank)return e;return null}function T(){l.renderer.render(l.renderer.rendertype.FX)}o.PublicAPI.player=b,o.eventSys.once(r.EVENTS.misc.toolsInitialized,(function(){b.tool=S()})),o.eventSys.on(r.EVENTS.net.sec.rank,(function(e){if(!(v[0]<e)){switch(g=e,console.log("Got rank:",e),d.net.isConnected()&&d.net.protocol.ws.send(new Uint8Array([e]).buffer),e){case r.RANK.USER:case r.RANK.NONE:(0,a.showDevChat)(!1),(0,a.showPlayerList)(!1),(0,a.revealSecrets)(!1);break;case r.RANK.MODERATOR:case r.RANK.ADMIN:(0,a.showDevChat)(!0),(0,a.showPlayerList)(!0),(0,a.revealSecrets)(!0)}(0,c.updateToolbar)()}})),o.eventSys.once(r.EVENTS.init,(function(){a.elements.paletteInput.onclick=function(){var e=b.selectedColor;this.value=s.colorUtils.toHTML(s.colorUtils.u24_888(e[0],e[1],e[2]))},a.elements.paletteInput.onchange=function(){var e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(this.value);E([parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16)])},a.elements.paletteCreate.onclick=function(){return a.elements.paletteInput.click()},(0,i.setTooltip)(a.elements.paletteCreate,"Add color"),x()}))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Fx=t.activeFx=t.WORLDFX=t.PLAYERFX=void 0;var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=n(4),i=n(1),a=n(3),s=n(0),l=n(5),c=n(6);n(2);var u=t.PLAYERFX={NONE:null,RECT_SELECT_ALIGNED:function(e,t){return function(n,o,r){var i=n.extra.player.x,a=n.extra.player.y,s=(Math.floor(i/(16*e))*e-l.camera.x)*l.camera.zoom,c=(Math.floor(a/(16*e))*e-l.camera.y)*l.camera.zoom;return o.globalAlpha=.8,o.strokeStyle=t||n.extra.player.htmlRgb,o.strokeRect(s,c,l.camera.zoom*e,l.camera.zoom*e),1}}},d=t.WORLDFX={NONE:null,RECT_FADE_ALIGNED:function(e,t,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:(0,a.getTime)();return function(r,a,s){var u=1-(s-o)/1e3;if(u<=0)return r.delete(),2;var d=(t*e-l.camera.x)*l.camera.zoom,h=(n*e-l.camera.y)*l.camera.zoom,f=l.camera.zoom*e;if(a.globalAlpha=u,a.strokeStyle=r.extra.htmlRgb||"#000000",a.strokeRect(d,h,f,f),i.options.enableIdView&&c.player.rank>=i.RANK.MODERATOR&&l.camera.zoom>=8&&r.extra.tag){d+=f;var p=r.extra.tag;a.measureText(p).width;a.fillStyle="#FFFFFF",a.strokeStyle="#000000",a.strokeText(p,d,h),a.fillText(p,d,h)}return 0}}},h=t.activeFx=[],f=t.Fx=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.visible=!0,this.renderFunc=t,this.extra=n||{},h.push(this)}return o(e,[{key:"render",value:function(e,t){return this.renderFunc&&this.visible?this.renderFunc(this,e,t):1}},{key:"setVisibleFunc",value:function(e){Object.defineProperty(this,"visible",{get:e})}},{key:"setVisible",value:function(e){this.visible=e}},{key:"setRenderer",value:function(e){this.renderFunc=e}},{key:"update",value:function(e){this.extra=e}},{key:"delete",value:function(){var e=h.indexOf(this);-1!==e&&h.splice(e,1)}}]),e}();s.PublicAPI.fx={world:d,player:u,class:f},s.eventSys.on(i.EVENTS.net.world.tilesUpdated,(function(e){(0,a.getTime)(!0);for(var t=!1,n=0;n<e.length;n++){var o=e[n];l.camera.isVisible(o.x,o.y,1,1)&&(new f(d.RECT_FADE_ALIGNED(1,o.x,o.y),{htmlRgb:r.colorUtils.toHTML(16777215^o.rgb),tag:""+o.id}),t=!0)}t&&l.renderer.render(l.renderer.rendertype.FX)})),s.eventSys.on(i.EVENTS.net.chunk.set,(function(e,t,n){var o=e*i.protocol.chunkSize,r=t*i.protocol.chunkSize;l.camera.isVisible(o,r,i.protocol.chunkSize,i.protocol.chunkSize)&&(new f(d.RECT_FADE_ALIGNED(16,e,t)),l.renderer.render(l.renderer.rendertype.FX))})),s.eventSys.on(i.EVENTS.net.chunk.lock,(function(e,t,n,o){var r=e*i.protocol.chunkSize,a=t*i.protocol.chunkSize;!o&&l.camera.isVisible(r,a,i.protocol.chunkSize,i.protocol.chunkSize)&&(new f(d.RECT_FADE_ALIGNED(16,e,t),{htmlRgb:n?"#00FF00":"#FF0000"}),l.renderer.render(l.renderer.rendertype.FX))}))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.net=void 0;var o=n(1),r=n(0),i=t.net={currentServer:null,protocol:null,isConnected:function(){return null!==i.protocol&&i.protocol.isConnected()},connect:function(e,t){r.eventSys.emit(o.EVENTS.net.connecting,e),i.connection=new WebSocket(e.url),i.connection.binaryType="arraybuffer",i.currentServer=e,i.protocol=new e.proto.class(i.connection,t)}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();t.Bucket=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.lastCheck=Date.now(),this.allowance=t,this.rate=t,this.time=n,this.infinite=!1}return o(e,[{key:"canSpend",value:function(e){return!!this.infinite||(this.allowance+=(Date.now()-this.lastCheck)/1e3*(this.rate/this.time),this.lastCheck=Date.now(),this.allowance>this.rate&&(this.allowance=this.rate),!(this.allowance<e)&&(this.allowance-=e,!0))}}]),e}()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.toolsWindow=t.tools=void 0;var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();t.updateToolWindow=function(e){if(!m)return;for(var t=p[e],n=m.container.children,o=0;o<n.length;o++){var r=n[o],i=r.id.split("-")[1]===e;r.className=i?"selected":"",r.children[0].style.backgroundImage="url("+(i?s.cursors.slotset:s.cursors.set.src)+")"}h.elements.viewport.style.cursor="url("+t.cursorblob+") "+t.offset[0]+" "+t.offset[1]+", pointer"},t.updateToolbar=g,t.showToolsWindow=y,t.addTool=w;var r=n(0),i=n(1),a=n(3),s=n(13),l=n(8),c=n(6),u=n(5),d=n(11),h=n(2),f=n(7);var p=t.tools={},m=t.toolsWindow=null,v=!1;function g(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m;if(e){var t=e.container,n=function(e){return function(t){c.player.tool=e,h.sounds.play(h.sounds.click)}};for(var o in t.innerHTML="",p){var r=p[o];if(c.player.rank>=r.rankRequired){var i=document.createElement("button"),l=document.createElement("div");(0,a.setTooltip)(i,r.name+" tool"),i.id="tool-"+o,i.addEventListener("click",n(o)),r===c.player.tool?(l.style.backgroundImage="url("+s.cursors.slotset+")",i.className="selected"):l.style.backgroundImage="url("+s.cursors.set.src+")",l.style.backgroundPosition=r.setposition,i.appendChild(l),t.appendChild(i)}}}}function y(e){v!==e&&(e&&m?d.windowSys.addWindow(m):m&&d.windowSys.delWindow(m),v=e)}function w(e){e.id=e.name.toLowerCase(),p[e.id]=e,g()}var b=function(){function e(t,n,o,r,i){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.name=t,this.id=null,this.fxRenderer=o,this.cursorblob=n.img.shadowblob,this.cursor=n.img.shadowed,this.setposition=36*-n.imgpos[0]+"px "+36*-n.imgpos[1]+"px",this.offset=n.hotspot,this.rankRequired=r,this.extra={},this.events={mouseup:null,mousedown:null,mousemove:null,touchstart:null,touchmove:null,touchend:null,touchcancel:null,select:null,deselect:null,keydown:null,keyup:null,scroll:null,tick:null},i(this)}return o(e,[{key:"setFxRenderer",value:function(e){this.fxRenderer=e}},{key:"isEventDefined",value:function(e){return e in this.events}},{key:"setEvent",value:function(e,t){for(var n=e.split(" "),o=0;o<n.length;o++)this.events[n[o]]=t||null}},{key:"call",value:function(e,t){var n=this.events[e];return n?n.apply(this,t):0===e.indexOf("touch")&&this.defaultTouchHandler(e.slice(5),t)}},{key:"defaultTouchHandler",value:function(e,t){var n=t[0],o=t[1],r={start:this.events.mousedown,move:this.events.mousemove,end:this.events.mouseup,cancel:this.events.mouseup}[e];if(r)for(var i=o.changedTouches,a=0;a<i.length;a++)n.x=i[a].pageX,n.y=i[a].pageY,r.apply(this,t)}}]),e}();r.PublicAPI.tool={class:b,addToolObject:w,updateToolbar:g,allTools:p,showToolsWindow:y},r.eventSys.once(i.EVENTS.misc.toolsRendered,(function(){w(new b("Cursor",s.cursors.cursor,f.PLAYERFX.RECT_SELECT_ALIGNED(1),i.RANK.USER,(function(e){var t,n;e.setEvent("mousedown mousemove",(function(e,o){var r=3,i=2===e.buttons?[255,255,255]:c.player.selectedColor;switch(e.buttons){case 1:case 2:t&&n||(t=e.tileX,n=e.tileY),(0,a.line)(t,n,e.tileX,e.tileY,1,(function(e,t){var n=h.misc.world.getPixel(e,t);null===n||i[0]===n[0]&&i[1]===n[1]&&i[2]===n[2]||h.misc.world.setPixel(e,t,i)})),t=e.tileX,n=e.tileY;break;case 4:if(o.ctrlKey)r|=4,(i=h.misc.world.getPixel(e.tileX,e.tileY))&&(c.player.selectedColor=i)}return r})),e.setEvent("mouseup",(function(e){t=null,n=null}))}))),w(new b("Move",s.cursors.move,f.PLAYERFX.NONE,i.RANK.NONE,(function(e){e.setEvent("mousemove",(function(e,t){if(0!==e.buttons)return n=e.worldX,o=e.worldY,r=e.mouseDownWorldX,i=e.mouseDownWorldY,(0,u.moveCameraBy)((r-n)/16,(i-o)/16),e.buttons;var n,o,r,i})),e.setEvent("scroll",(function(e,t,n){if(!n.ctrlKey){var o=Math.max(-500,Math.min(16*t.spinX,500)),r=Math.max(-500,Math.min(16*t.spinY,500)),i=u.camera.zoom;return(0,u.moveCameraBy)(o/i,r/i),!0}}))}))),w(new b("Pipette",s.cursors.pipette,f.PLAYERFX.NONE,i.RANK.NONE,(function(e){e.setEvent("mousedown mousemove",(function(e,t){if(0!==e.buttons&&!(4&e.buttons)){var n=h.misc.world.getPixel(e.tileX,e.tileY);return n&&(c.player.selectedColor=n),e.buttons}}))}))),w(new b("Eraser",s.cursors.erase,f.PLAYERFX.RECT_SELECT_ALIGNED(16),i.RANK.MODERATOR,(function(e){function t(e,t,n){var o=n[2]<<16|n[1]<<8|n[0],r=h.misc.world.getChunkAt(e,t);if(r){var a=!0;e:for(var s=0;s<i.protocol.chunkSize;s++)for(var c=0;c<i.protocol.chunkSize;c++)if((16777215&r.get(c,s))!=o){a=!1;break e}a||l.net.protocol.clearChunk(e,t,n)&&r.set(o)}}e.setEvent("mousedown mousemove",(function(e,n){return 1&e.buttons?(t(Math.floor(e.tileX/i.protocol.chunkSize),Math.floor(e.tileY/i.protocol.chunkSize),c.player.selectedColor),1):2&e.buttons?(t(Math.floor(e.tileX/i.protocol.chunkSize),Math.floor(e.tileY/i.protocol.chunkSize),[255,255,255]),1):void 0}))}))),w(new b("Zoom",s.cursors.zoom,f.PLAYERFX.NONE,i.RANK.NONE,(function(e){function t(e,t){var n=u.camera.zoom,o=u.camera.zoom,r=0,a=0,s=window.innerWidth,l=window.innerHeight;1===t?(o*=1+i.options.zoomStrength,r=(e.x-s/2)/o,a=(e.y-l/2)/o):2===t?(o/=1+i.options.zoomStrength,r=(e.x-s/2)*(3/n-2/o),a=(e.y-l/2)*(3/n-2/o)):3===t&&(o=i.options.defaultZoom),o=Math.round(o),u.camera.zoom=o,u.camera.zoom!==n&&(0,u.moveCameraBy)(r,a)}e.setEvent("mousedown",(function(e,n){t(e,e.buttons)})),e.setEvent("touchstart",(function(t,n){e.extra.maxTouches=Math.max(e.extra.maxTouches||0,n.touches.length)})),e.setEvent("touchend",(function(n,o){0===o.touches.length&&(e.extra.maxTouches>1&&t(n,e.extra.maxTouches),e.extra.maxTouches=0)}))}))),w(new b("Export",s.cursors.select,f.PLAYERFX.NONE,i.RANK.NONE,(function(e){e.setFxRenderer((function(t,n,o){if(!t.extra.isLocalPlayer)return 1;var r=t.extra.player.x,i=t.extra.player.y,a=(Math.floor(r/16)-u.camera.x)*u.camera.zoom,s=(Math.floor(i/16)-u.camera.y)*u.camera.zoom,l=n.lineWidth;if(n.lineWidth=1,e.extra.end){var c=e.extra.start,d=e.extra.end,h=(r=(c[0]-u.camera.x)*u.camera.zoom+.5,i=(c[1]-u.camera.y)*u.camera.zoom+.5,d[0]-c[0]),f=d[1]-c[1];n.beginPath(),n.rect(r,i,h*u.camera.zoom,f*u.camera.zoom),n.globalAlpha=1,n.strokeStyle="#FFFFFF",n.stroke(),n.setLineDash([3,4]),n.strokeStyle="#000000",n.stroke(),n.globalAlpha=.25+Math.sin(o/500)/4,n.fillStyle=u.renderer.patterns.unloaded,n.fill(),n.setLineDash([]);var p=n.font;n.font="16px sans-serif";var m=(e.extra.clicking?"":"Right click to screenshot ")+"("+Math.abs(h)+"x"+Math.abs(f)+")",v=window.innerWidth>>1,g=window.innerHeight>>1;return v=Math.max(r,Math.min(v,r+h*u.camera.zoom)),g=Math.max(i,Math.min(g,i+f*u.camera.zoom)),(0,u.drawText)(n,m,v,g,!0),n.font=p,n.lineWidth=l,0}return n.beginPath(),n.moveTo(0,s+.5),n.lineTo(window.innerWidth,s+.5),n.moveTo(a+.5,0),n.lineTo(a+.5,window.innerHeight),n.globalAlpha=1,n.strokeStyle="#FFFFFF",n.stroke(),n.setLineDash([3]),n.strokeStyle="#000000",n.stroke(),n.setLineDash([]),n.lineWidth=l,1})),e.extra.start=null,e.extra.end=null,e.extra.clicking=!1,e.setEvent("mousedown",(function(t,n){var o=e.extra.start,r=e.extra.end,i=function(){return t.tileX>=o[0]&&t.tileX<r[0]&&t.tileY>=o[1]&&t.tileY<r[1]};if(1!==t.buttons||e.extra.end){if(1===t.buttons&&e.extra.end)if(i()){var s=t.tileX,l=t.tileY;e.setEvent("mousemove",(function(t,n){var i=t.tileX-s,a=t.tileY-l;e.extra.start=[o[0]+i,o[1]+a],e.extra.end=[r[0]+i,r[1]+a]}));var c=function(){e.setEvent("mouseup deselect mousemove",null)};e.setEvent("deselect",c),e.setEvent("mouseup",(function(e,t){1&e.buttons||c()}))}else e.extra.start=null,e.extra.end=null;else if(2===t.buttons&&e.extra.end&&i()){e.extra.start=null,e.extra.end=null;(function(e,t,n,o,r){var i=document.createElement("canvas");i.width=n,i.height=o;for(var a=i.getContext("2d"),s=a.createImageData(n,o),l=t;l<t+o;l++)for(var c=e;c<e+n;c++){var u=h.misc.world.getPixel(c,l);u&&(s.data[4*((l-t)*n+(c-e))]=u[0],s.data[4*((l-t)*n+(c-e))+1]=u[1],s.data[4*((l-t)*n+(c-e))+2]=u[2],s.data[4*((l-t)*n+(c-e))+3]=255)}a.putImageData(s,0,0),i.toBlob(r)})(o[0],o[1],r[0]-o[0],r[1]-o[1],(function(e){var t=URL.createObjectURL(e),n=new Image;n.onload=function(){d.windowSys.addWindow(new d.GUIWindow("Resulting image",{centerOnce:!0,closeable:!0},(function(e){var t=["width","height"];n.width>n.height&&t.reverse();var o=n[t[0]]/n[t[1]],r=n[t[1]]>=128?256:128;n[t[0]]=o*r,n[t[1]]=r,e.container.classList.add("centeredChilds");e.addObj(n);(0,a.setTooltip)(n,"Right click to copy/save!")})))},n.src=t}))}}else{e.extra.start=[t.tileX,t.tileY],e.extra.clicking=!0,e.setEvent("mousemove",(function(t,n){if(e.extra.start&&1===t.buttons)return e.extra.end=[t.tileX,t.tileY],1}));var f=function(){e.setEvent("mousemove mouseup deselect",null),e.extra.clicking=!1;var t=e.extra.start,n=e.extra.end;if(n){if(t[0]!==n[0]&&t[1]!==n[1]||(e.extra.start=null,e.extra.end=null),t[0]>n[0]){var o=n[0];n[0]=t[0],t[0]=o}if(t[1]>n[1]){o=n[1];n[1]=t[1],t[1]=o}}u.renderer.render(u.renderer.rendertype.FX)};e.setEvent("deselect",f),e.setEvent("mouseup",(function(e,t){1&e.buttons||f()}))}}))}))),w(new b("Fill",s.cursors.fill,f.PLAYERFX.NONE,i.RANK.USER,(function(e){e.extra.tickAmount=9;var t=[],n=null,o=f.PLAYERFX.RECT_SELECT_ALIGNED(1);function r(){var o=function(e,t){return e&&t&&e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]},r=function(e,r){return!!o(h.misc.world.getPixel(e,r),n)&&(t.unshift([e,r]),!0)};if(t.length&&n){var i=c.player.selectedColor,a=0,s=e.extra.tickAmount;h.keysDown[17]&&(s*=3);for(a=0;a<s&&t.length;a++){var l=t.pop(),u=l[0],d=l[1],f=h.misc.world.getPixel(u,d);if(o(f,n)&&!o(f,i)){if(!h.misc.world.setPixel(u,d,i)){t.push(l);break}var p=r(u,d-1),m=r(u,d+1),v=r(u-1,d),g=r(u+1,d);p&&v&&r(u-1,d-1),p&&g&&r(u+1,d-1),m&&v&&r(u-1,d+1),m&&g&&r(u+1,d+1)}}}}e.setFxRenderer((function(e,r,i){r.globalAlpha=.8,r.strokeStyle=e.extra.player.htmlRgb;var a=u.camera.zoom;if(n&&e.extra.isLocalPlayer){r.beginPath();for(var s=0;s<t.length;s++)r.rect((t[s][0]-u.camera.x)*a,(t[s][1]-u.camera.y)*a,a,a);r.stroke()}else o(e,r,i)})),e.setEvent("mousedown",(function(o){4&o.buttons||(n=h.misc.world.getPixel(o.tileX,o.tileY))&&(t.push([o.tileX,o.tileY]),e.setEvent("tick",r))})),e.setEvent("mouseup deselect",(function(o){o&&1&o.buttons||(n=null,t=[],e.setEvent("tick",null))}))}))),w(new b("Line",s.cursors.wand,f.PLAYERFX.NONE,i.RANK.USER,(function(e){var t=null,n=null,o=[];function r(e,t,n,o,r){for(var i,a=Math.abs(n-e),s=e<n?1:-1,l=-Math.abs(o-t),c=t<o?1:-1,u=a+l;r(e,t),e!=n||t!=o;)(i=2*u)>=l&&(u+=l,e+=s),i<=a&&(u+=a,t+=c)}var a=f.PLAYERFX.RECT_SELECT_ALIGNED(1);function s(){for(var r=0;r<3&&o.length;r++){var i=o.pop(),a=h.misc.world.getPixel(i[0],i[1]),s=c.player.selectedColor;if((a[0]!=s[0]||a[1]!=s[1]||a[2]!=s[2])&&!h.misc.world.setPixel(i[0],i[1],c.player.selectedColor)){o.push(i);break}}if(!o.length)return t=null,n=null,void e.setEvent("tick",null)}e.setFxRenderer((function(e,o,i){o.globalAlpha=.8,o.strokeStyle=e.extra.player.htmlRgb;u.camera.zoom;t&&n&&e.extra.isLocalPlayer?(o.beginPath(),r(t[0],t[1],n[0],n[1],(function(e,t){o.rect((e-u.camera.x)*u.camera.zoom,(t-u.camera.y)*u.camera.zoom,u.camera.zoom,u.camera.zoom)})),o.stroke()):a(e,o,i)})),e.setEvent("mousedown",(function(r){4&r.buttons||(o=[],e.setEvent("tick",null),t=[r.tileX,r.tileY],n=[r.tileX,r.tileY])})),e.setEvent("mousemove",(function(e){o.length||(n=[e.tileX,e.tileY])})),e.setEvent("mouseup",(function(a){if(!(3&a.buttons||o.length)){if(n=[a.tileX,a.tileY],!t)return void(n=null);c.player.rank==i.RANK.ADMIN?(r(t[0],t[1],n[0],n[1],(function(e,t){h.misc.world.setPixel(e,t,c.player.selectedColor)})),t=null,n=null):(r(t[0],t[1],n[0],n[1],(function(e,t){o.push([e,t])})),e.setEvent("tick",s))}})),e.setEvent("deselect",(function(r){o=[],t=null,n=null,e.setEvent("tick",null)}))}))),w(new b("Protect",s.cursors.shield,f.PLAYERFX.RECT_SELECT_ALIGNED(16,"#000000"),i.RANK.MODERATOR,(function(e){e.setFxRenderer((function(e,t,n){var o=e.extra.player.x,r=e.extra.player.y,a=(16*Math.floor(o/256)-u.camera.x)*u.camera.zoom,s=(16*Math.floor(r/256)-u.camera.y)*u.camera.zoom;t.globalAlpha=.5;var l=Math.floor(e.extra.player.tileX/i.protocol.chunkSize),c=Math.floor(e.extra.player.tileY/i.protocol.chunkSize),d=h.misc.world.getChunkAt(l,c);return d&&(t.fillStyle=d.locked?"#00FF00":"#FF0000",t.fillRect(a,s,16*u.camera.zoom,16*u.camera.zoom)),1})),e.setEvent("mousedown mousemove",(function(e){var t=Math.floor(e.tileX/i.protocol.chunkSize),n=Math.floor(e.tileY/i.protocol.chunkSize),o=h.misc.world.getChunkAt(t,n);switch(e.buttons){case 1:o.locked||l.net.protocol.protectChunk(t,n,1);break;case 2:o.locked&&l.net.protocol.protectChunk(t,n,0)}}))}))),w(new b("Area Protect",s.cursors.selectprotect,f.PLAYERFX.NONE,i.RANK.MODERATOR,(function(e){e.setFxRenderer((function(t,n,o){if(!t.extra.isLocalPlayer)return 1;var r=t.extra.player.x,a=t.extra.player.y,s=(Math.round(r/256)*i.protocol.chunkSize-u.camera.x)*u.camera.zoom,l=(Math.round(a/256)*i.protocol.chunkSize-u.camera.y)*u.camera.zoom,c=n.lineWidth;if(n.lineWidth=1,e.extra.end){var d=e.extra.start,h=e.extra.end,f=(r=(d[0]*i.protocol.chunkSize-u.camera.x)*u.camera.zoom+.5,a=(d[1]*i.protocol.chunkSize-u.camera.y)*u.camera.zoom+.5,h[0]-d[0]),p=h[1]-d[1],m=f*u.camera.zoom*i.protocol.chunkSize,v=p*u.camera.zoom*i.protocol.chunkSize;n.beginPath(),n.rect(r,a,m,v),n.globalAlpha=1,n.strokeStyle="#FFFFFF",n.stroke(),n.setLineDash([3,4]),n.strokeStyle="#000000",n.stroke(),e.extra.isSure&&(n.globalAlpha=.6,n.fillStyle="#00EE00",n.fill()),n.globalAlpha=.25+Math.sin(o/500)/4,n.fillStyle=u.renderer.patterns.unloaded,n.fill(),n.setLineDash([]);var g=n.font;n.font="16px sans-serif";var y=(e.extra.isSure?"Click again to confirm. ":e.extra.clicking?"":"Left/Right click to add/remove protection, respectively. ")+"("+Math.abs(f)+"x"+Math.abs(p)+")",w=window.innerWidth>>1,b=window.innerHeight>>1;return w=Math.max(r,Math.min(w,r+m)),b=Math.max(a,Math.min(b,a+v)),(0,u.drawText)(n,y,w,b,!0),n.font=g,n.lineWidth=c,0}return n.beginPath(),n.moveTo(0,l+.5),n.lineTo(window.innerWidth,l+.5),n.moveTo(s+.5,0),n.lineTo(s+.5,window.innerHeight),n.globalAlpha=1,n.strokeStyle="#FFFFFF",n.stroke(),n.setLineDash([3]),n.strokeStyle="#000000",n.stroke(),n.setLineDash([]),n.lineWidth=c,1})),e.extra.start=null,e.extra.end=null,e.extra.clicking=!1,e.extra.isSure=!1;var t=null,n=function(){return e.extra.isSure?(clearTimeout(t),t=null,e.extra.isSure=!1,!0):(e.extra.isSure=!0,setTimeout((function(){e.extra.isSure=!1,t=null}),1e3),!1)};e.setEvent("mousedown",(function(t,o){var r=function(){return t.tileX/i.protocol.chunkSize},a=function(){return t.tileY/i.protocol.chunkSize},s=function(){return Math.round(t.tileX/i.protocol.chunkSize)},c=function(){return Math.round(t.tileY/i.protocol.chunkSize)},d=e.extra.start,f=e.extra.end,p=function(){return r()>=d[0]&&r()<f[0]&&a()>=d[1]&&a()<f[1]},m=function(e){var t=e.get(0,0);return e.forEach((function(e,n,o){return o===t}))};if(1!==t.buttons||e.extra.end){if(1===t.buttons&&e.extra.end)if(p()&&n()){e.extra.start=null,e.extra.end=null;for(var v=[d[0],d[1],f[0]-d[0],f[1]-d[1]],g=v[1],y=v[2],w=v[3],b=x=v[0];b<x+y;b++)for(var k=g;k<g+w;k++){if((S=h.misc.world.getChunkAt(b,k))&&!S.locked){if(h.keysDown[17]&&m(S))continue;l.net.protocol.protectChunk(b,k,1)}}}else p()||(e.extra.start=null,e.extra.end=null);else if(2===t.buttons&&e.extra.end&&p()&&n()){e.extra.start=null,e.extra.end=null;var x,E=[d[0],d[1],f[0]-d[0],f[1]-d[1]];for(g=E[1],y=E[2],w=E[3],b=x=E[0];b<x+y;b++)for(k=g;k<g+w;k++){var S;if((S=h.misc.world.getChunkAt(b,k))&&S.locked){if(h.keysDown[17]&&!m(S))continue;l.net.protocol.protectChunk(b,k,0)}}}}else{e.extra.start=[s(),c()],e.extra.clicking=!0,e.setEvent("mousemove",(function(t,n){if(e.extra.start&&1===t.buttons)return e.extra.end=[s(),c()],1}));var T=function(){e.setEvent("mousemove mouseup deselect",null),e.extra.clicking=!1;var t=e.extra.start,n=e.extra.end;if(n){if(t[0]!==n[0]&&t[1]!==n[1]||(e.extra.start=null,e.extra.end=null),t[0]>n[0]){var o=n[0];n[0]=t[0],t[0]=o}if(t[1]>n[1]){o=n[1];n[1]=t[1],t[1]=o}}u.renderer.render(u.renderer.rendertype.FX)};e.setEvent("deselect",T),e.setEvent("mouseup",(function(e,t){1&e.buttons||T()}))}}))}))),w(new b("Area Delete",s.cursors.areadelete,f.PLAYERFX.NONE,i.RANK.ADMIN,(function(e){e.setFxRenderer((function(t,n,o){if(!t.extra.isLocalPlayer)return 1;var r=t.extra.player.x,a=t.extra.player.y,s=(Math.round(r/256)*i.protocol.chunkSize-u.camera.x)*u.camera.zoom,l=(Math.round(a/256)*i.protocol.chunkSize-u.camera.y)*u.camera.zoom,c=n.lineWidth;if(n.lineWidth=1,e.extra.end){var d=e.extra.start,h=e.extra.end,f=(r=(d[0]*i.protocol.chunkSize-u.camera.x)*u.camera.zoom+.5,a=(d[1]*i.protocol.chunkSize-u.camera.y)*u.camera.zoom+.5,h[0]-d[0]),p=h[1]-d[1],m=f*u.camera.zoom*i.protocol.chunkSize,v=p*u.camera.zoom*i.protocol.chunkSize;n.beginPath(),n.rect(r,a,m,v),n.globalAlpha=1,n.strokeStyle="#FFFFFF",n.stroke(),n.setLineDash([3,4]),n.strokeStyle="#000000",n.stroke(),e.extra.isSure&&(n.globalAlpha=.6,n.fillStyle="#00EE00",n.fill()),n.globalAlpha=.25+Math.sin(o/500)/4,n.fillStyle=u.renderer.patterns.unloaded,n.fill(),n.setLineDash([]);var g=n.font;n.font="16px sans-serif";var y=(e.extra.isSure?"Click again to confirm. ":e.extra.clicking?"":"Double click to delete. ")+"("+Math.abs(f)+"x"+Math.abs(p)+")",w=window.innerWidth>>1,b=window.innerHeight>>1;return w=Math.max(r,Math.min(w,r+m)),b=Math.max(a,Math.min(b,a+v)),(0,u.drawText)(n,y,w,b,!0),n.font=g,n.lineWidth=c,0}return n.beginPath(),n.moveTo(0,l+.5),n.lineTo(window.innerWidth,l+.5),n.moveTo(s+.5,0),n.lineTo(s+.5,window.innerHeight),n.globalAlpha=1,n.strokeStyle="#FFFFFF",n.stroke(),n.setLineDash([3]),n.strokeStyle="#000000",n.stroke(),n.setLineDash([]),n.lineWidth=c,1})),e.extra.start=null,e.extra.end=null,e.extra.clicking=!1,e.extra.isSure=!1;var t=null,n=function(){return e.extra.isSure?(clearTimeout(t),t=null,e.extra.isSure=!1,!0):(e.extra.isSure=!0,setTimeout((function(){e.extra.isSure=!1,t=null}),1e3),!1)};e.setEvent("mousedown",(function(t,o){var r=function(){return t.tileX/i.protocol.chunkSize},a=function(){return t.tileY/i.protocol.chunkSize},s=function(){return Math.round(t.tileX/i.protocol.chunkSize)},d=function(){return Math.round(t.tileY/i.protocol.chunkSize)},f=e.extra.start,p=e.extra.end,m=function(){return r()>=f[0]&&r()<p[0]&&a()>=f[1]&&a()<p[1]};if(1!==t.buttons||e.extra.end){if(1===t.buttons&&e.extra.end)if(m()&&n()){e.extra.start=null,e.extra.end=null;for(var v=[f[0],f[1],p[0]-f[0],p[1]-f[1]],g=v[1],y=v[2],w=v[3],b=x=v[0];b<x+y;b++)for(var k=g;k<g+w;k++){(S=h.misc.world.getChunkAt(b,k))&&!S.locked&&l.net.protocol.clearChunk(b,k,[255,255,255])}}else m()||(e.extra.start=null,e.extra.end=null);else if(2===t.buttons&&e.extra.end)if(m()&&n()){e.extra.start=null,e.extra.end=null;var x,E=[f[0],f[1],p[0]-f[0],p[1]-f[1]];for(g=E[1],y=E[2],w=E[3],b=x=E[0];b<x+y;b++)for(k=g;k<g+w;k++){var S;(S=h.misc.world.getChunkAt(b,k))&&!S.locked&&l.net.protocol.clearChunk(b,k,c.player.selectedColor)}}else m()||(e.extra.start=null,e.extra.end=null)}else{e.extra.start=[s(),d()],e.extra.clicking=!0,e.setEvent("mousemove",(function(t,n){if(e.extra.start&&1===t.buttons)return e.extra.end=[s(),d()],1}));var T=function(){e.setEvent("mousemove mouseup deselect",null),e.extra.clicking=!1;var t=e.extra.start,n=e.extra.end;if(n){if(t[0]!==n[0]&&t[1]!==n[1]||(e.extra.start=null,e.extra.end=null),t[0]>n[0]){var o=n[0];n[0]=t[0],t[0]=o}if(t[1]>n[1]){o=n[1];n[1]=t[1],t[1]=o}}u.renderer.render(u.renderer.rendertype.FX)};e.setEvent("deselect",T),e.setEvent("mouseup",(function(e,t){1&e.buttons||T()}))}}))}))),w(new b("Paste",s.cursors.paste,f.PLAYERFX.NONE,i.RANK.ADMIN,(function(e){e.extra.sendQueue=[],e.setFxRenderer((function(t,n,o){var r=u.camera.zoom,a=t.extra.player.x,s=t.extra.player.y,l=Math.floor(a/16)-u.camera.x,c=Math.floor(s/16)-u.camera.y,d=e.extra.sendQueue;if(d.length){var h=i.protocol.chunkSize;n.strokeStyle="#000000",n.globalAlpha=.8,n.beginPath();for(var f=0;f<d.length;f++)n.rect((d[f].x*h-u.camera.x)*r,(d[f].y*h-u.camera.y)*r,r*h,r*h);return n.stroke(),0}if(e.extra.canvas&&t.extra.isLocalPlayer)return n.globalAlpha=.5+Math.sin(o/500)/4,n.strokeStyle="#000000",n.scale(r,r),n.drawImage(e.extra.canvas,l,c),n.scale(1/r,1/r),n.globalAlpha=.8,n.strokeRect(l*r,c*r,e.extra.canvas.width*r,e.extra.canvas.height*r),0}));e.setEvent("tick",(function(){var t=e.extra.sendQueue;t.length&&l.net.protocol.setChunk(t[0].x,t[0].y,t[0].buf)&&t.shift()})),e.setEvent("mousedown",(function(t){if(1&t.buttons){if(e.extra.canvas){if(e.extra.sendQueue.length)throw new Error("Wait until pasting finishes, or cancel with right click!");!function(t,n){var o=new Uint32Array(i.protocol.chunkSize*i.protocol.chunkSize),r=e.extra.canvas.getContext("2d").getImageData(0,0,e.extra.canvas.width,e.extra.canvas.height),s=new Uint32Array(r.data.buffer),c=Math.ceil(((0,a.absMod)(t,i.protocol.chunkSize)+r.width)/i.protocol.chunkSize),u=Math.ceil(((0,a.absMod)(n,i.protocol.chunkSize)+r.height)/i.protocol.chunkSize),d=function(e,o){var i=o-n,a=e-t;if(i<0||a<0||i>=r.height||a>=r.width){var l=h.misc.world.getPixel(e,o);return l?l[2]<<16|l[1]<<8|l[0]:null}var c=s[i*r.width+a],u=h.misc.world.getPixel(e,o),d=c>>24&255;if(!u)return null;var f=(1-d/255)*u[0]+d/255*(255&c),p=(1-d/255)*u[1]+d/255*(c>>8&255),m=(1-d/255)*u[2]+d/255*(c>>16&255),v=m<<16|p<<8|f;return f==u[0]&&p==u[1]&&m==u[2]?v:4278190080|v},f=function(e,t){for(var n=0,r=e*i.protocol.chunkSize,a=t*i.protocol.chunkSize,s=0;s<i.protocol.chunkSize;s++)for(var l=0;l<i.protocol.chunkSize;l++){var c=d(l+r,s+a);if(null===c)throw new Error("Couldn't paste -- chunk ("+e+", "+t+") is unloaded");4278190080&c&&++n,o[s*i.protocol.chunkSize+l]=16777215&c}return n?o:null};if(!l.net.protocol.setChunk)throw new Error("Protocol doesn't support pasting");for(var p=Math.floor(n/i.protocol.chunkSize),m=u;--m>=0;p++)for(var v=Math.floor(t/i.protocol.chunkSize),g=c;--g>=0;v++){var y=f(v,p);if(y&&!l.net.protocol.setChunk(v,p,y)){var w=new Uint32Array(y.length);w.set(y),e.extra.sendQueue.push({x:v,y:p,buf:w})}}}(t.tileX,t.tileY)}}else 2&t.buttons&&(e.extra.sendQueue=[])}));var t=document.createElement("input");t.type="file",t.accept="image/*",e.setEvent("select",(function(){t.onchange=function(n){if(t.files&&t.files[0]){var o=new FileReader;o.onload=function(t){var n=new Image;n.onload=function(){e.extra.canvas=document.createElement("canvas"),e.extra.canvas.width=n.width,e.extra.canvas.height=n.height,e.extra.canvas.getContext("2d").drawImage(n,0,0),console.log("Loaded image")},n.src=t.target.result},o.readAsDataURL(t.files[0])}},t.click()}))}))),w(new b("Copy",s.cursors.copy,f.PLAYERFX.NONE,i.RANK.ADMIN,(function(e){e.setFxRenderer((function(t,n,o){if(!t.extra.isLocalPlayer)return 1;var r=t.extra.player.x,i=t.extra.player.y,a=(Math.floor(r/16)-u.camera.x)*u.camera.zoom,s=(Math.floor(i/16)-u.camera.y)*u.camera.zoom,l=n.lineWidth;if(n.lineWidth=1,e.extra.end){var c=e.extra.start,d=e.extra.end,h=(r=(c[0]-u.camera.x)*u.camera.zoom+.5,i=(c[1]-u.camera.y)*u.camera.zoom+.5,d[0]-c[0]),f=d[1]-c[1];n.beginPath(),n.rect(r,i,h*u.camera.zoom,f*u.camera.zoom),n.globalAlpha=1,n.strokeStyle="#FFFFFF",n.stroke(),n.setLineDash([3,4]),n.strokeStyle="#000000",n.stroke(),n.globalAlpha=.25+Math.sin(o/500)/4,n.fillStyle=u.renderer.patterns.unloaded,n.fill(),n.setLineDash([]);var p=n.font;n.font="16px sans-serif";var m=(e.extra.clicking?"":"Right click to copy ")+"("+Math.abs(h)+"x"+Math.abs(f)+")",v=window.innerWidth>>1,g=window.innerHeight>>1;return function(e,t,n,o,r){e.strokeStyle="#000000",e.fillStyle="#FFFFFF",e.lineWidth=2.5,e.globalAlpha=.5,r&&(n-=e.measureText(t).width>>1),e.strokeText(t,n,o),e.globalAlpha=1,e.fillText(t,n,o)}(n,m,v=Math.max(r,Math.min(v,r+h*u.camera.zoom)),g=Math.max(i,Math.min(g,i+f*u.camera.zoom)),!0),n.font=p,n.lineWidth=l,0}return n.beginPath(),n.moveTo(0,s+.5),n.lineTo(window.innerWidth,s+.5),n.moveTo(a+.5,0),n.lineTo(a+.5,window.innerHeight),n.globalAlpha=1,n.strokeStyle="#FFFFFF",n.stroke(),n.setLineDash([3]),n.strokeStyle="#000000",n.stroke(),n.setLineDash([]),n.lineWidth=l,1})),e.extra.start=null,e.extra.end=null,e.extra.clicking=!1,e.setEvent("mousedown",(function(t,n){var o=e.extra.start,r=e.extra.end,i=function(){return t.tileX>=o[0]&&t.tileX<r[0]&&t.tileY>=o[1]&&t.tileY<r[1]};if(1!==t.buttons||e.extra.end){if(1===t.buttons&&e.extra.end)if(i()){var a=t.tileX,s=t.tileY;e.setEvent("mousemove",(function(t,n){var i=t.tileX-a,l=t.tileY-s;e.extra.start=[o[0]+i,o[1]+l],e.extra.end=[r[0]+i,r[1]+l]}));var l=function(){e.setEvent("mouseup deselect mousemove",null)};e.setEvent("deselect",l),e.setEvent("mouseup",(function(e,t){1&e.buttons||l()}))}else e.extra.start=null,e.extra.end=null;else if(2===t.buttons&&e.extra.end&&i()){e.extra.start=null,e.extra.end=null;var d=o[0],f=o[1],m=r[0]-o[0],v=r[1]-o[1],g=document.createElement("canvas");g.width=m,g.height=v;for(var y=g.getContext("2d"),w=y.createImageData(m,v),b=f;b<f+v;b++)for(var k=d;k<d+m;k++){var x=h.misc.world.getPixel(k,b);x&&(w.data[4*((b-f)*m+(k-d))]=x[0],w.data[4*((b-f)*m+(k-d))+1]=x[1],w.data[4*((b-f)*m+(k-d))+2]=x[2],w.data[4*((b-f)*m+(k-d))+3]=255)}y.putImageData(w,0,0);var E=p.paste;E.extra.canvas=g;var S=E.events.select;E.events.select=function(){E.events.select=S},c.player.tool="paste"}}else{e.extra.start=[t.tileX,t.tileY],e.extra.clicking=!0,e.setEvent("mousemove",(function(t,n){if(e.extra.start&&1===t.buttons)return e.extra.end=[t.tileX,t.tileY],1}));var T=function(){e.setEvent("mousemove mouseup deselect",null),e.extra.clicking=!1;var t=e.extra.start,n=e.extra.end;if(n){if(t[0]!==n[0]&&t[1]!==n[1]||(e.extra.start=null,e.extra.end=null),t[0]>n[0]){var o=n[0];n[0]=t[0],t[0]=o}if(t[1]>n[1]){o=n[1];n[1]=t[1],t[1]=o}}u.renderer.render(u.renderer.rendertype.FX)};e.setEvent("deselect",T),e.setEvent("mouseup",(function(e,t){1&e.buttons||T()}))}}))}))),r.eventSys.emit(i.EVENTS.misc.toolsInitialized)})),r.eventSys.once(i.EVENTS.init,(function(){t.toolsWindow=m=new d.GUIWindow("Tools",{},(function(e){e.container.id="toole-container",e.container.style.cssText="max-width: 40px"})).move(5,32)})),r.eventSys.once(i.EVENTS.misc.toolsInitialized,(function(){g(),v&&d.windowSys.addWindow(m)})),r.eventSys.on(i.EVENTS.net.disconnected,(function(){y(!1)})),r.eventSys.on(i.EVENTS.misc.worldInitialized,(function(){y(!0)}))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.windowSys=void 0,t.UtilInput=l,t.UtilDialog=c,t.OWOPDropDown=u,t.GUIWindow=d,t.addWindow=h,t.delWindow=f,t.centerWindow=p;var o=n(2),r=n(1),i=n(0),a=n(3),s=t.windowSys={windows:{},class:{input:l,dialog:c,dropDown:u,window:d},addWindow:h,delWindow:f,centerWindow:p,closeAllWindows:function(){for(var e in s.windows)s.windows[e].close()}};function l(e,t,n,o){this.win=new d(e,{centerOnce:!0,closeable:!0},function(e){this.inputField=e.addObj((0,a.mkHTML)("input",{style:"width: 100%; height: 50%;",type:n,placeholder:t,onkeyup:function(e){13==(e.which||e.keyCode)&&this.okButton.click()}.bind(this)})),this.okButton=e.addObj((0,a.mkHTML)("button",{innerHTML:"OK",style:"width: 100%; height: 50%;",onclick:function(){o(this.inputField.value),this.getWindow().close()}.bind(this)}))}.bind(this)).resize(200,60)}function c(e,t,n,o){this.win=new d(e,{centered:!0,closeable:n},function(e){this.messageBox=e.addObj((0,a.mkHTML)("span",{className:"whitetext",style:"display: block; padding-bottom: 4px;",innerHTML:t})),this.okButton=e.addObj((0,a.mkHTML)("button",{innerHTML:"OK",style:"display: block; width: 80px; height: 30px; margin: auto;",onclick:function(){o(),this.getWindow().close()}.bind(this)}))}.bind(this))}function u(){this.win=new d(null,{immobile:!0},(function(e){e.frame.className="owopdropdown",e.container.style.cssText="border: none;\t\t\tbackground-color: initial;\t\t\tpointer-events: none;\t\t\tmargin: 0;";var t=e.addObj((0,a.mkHTML)("div",{className:"winframe",style:"padding: 0;\t\t\t\twidth: 68px; height: 64px;"})),n=(e.addObj((0,a.mkHTML)("button",{innerHTML:"hi"})),(0,a.mkHTML)("div",{className:"wincontainer",style:"margin-top: -5px;"}));t.appendChild(n),n.appendChild((0,a.mkHTML)("button",{style:"background-image: url(img/gui.png);\t\t\t\tbackground-position: -64px 4px;\t\t\t\tbackground-origin: border-box;\t\t\t\tbackground-repeat: no-repeat;\t\t\t\twidth: 100%; height: 100%;",onclick:function(){console.log("help")}.bind(this)}))})).resize(68,64)}function d(e,t,n){var o=this;t=t||{},this.wm=WorldOfPixels.windowsys,this.opt=t,this.title=e,this.frame=document.createElement("div"),this.container=document.createElement("div"),this.container.className="wincontainer",e&&(this.titlespan=document.createElement("span"),this.titlespan.innerHTML=e,this.frame.appendChild(this.titlespan)),this.frame.appendChild(this.container),t.centered&&(t.immobile=!0,this.frame.className="centered"),Object.defineProperty(this,"realw",{get:function(){return this.frame.offsetWidth}.bind(this)}),Object.defineProperty(this,"realh",{get:function(){return this.frame.offsetHeight}.bind(this)}),this.elements=[],this.creationtime=Date.now(),this.currentaction=null,n&&n(this),this.mdownfunc=function(e){var t=e.clientX-this.x,n=e.clientY-this.y;e.target!==this.frame||this.opt.immobile||(this.currentaction=function(e,o){e=e<=0?0:e>window.innerWidth?window.innerWidth:e,o=o<=0?0:o>window.innerHeight?window.innerHeight:o,this.move(e-t,o-n)})}.bind(this),t.centerOnce&&(this.move(window.innerWidth,window.innerHeight),(0,a.waitFrames)(2,(function(){return p(o)}))),this.frame.addEventListener("mousedown",this.mdownfunc),this.mupfunc=function(e){this.currentaction=null}.bind(this),window.addEventListener("mouseup",this.mupfunc),this.mmovefunc=function(e){this.currentaction&&this.currentaction(e.clientX,e.clientY)}.bind(this),window.addEventListener("mousemove",this.mmovefunc),this.touchfuncbuilder=function(e){var t=this;return function(n){var o={start:t.mdownfunc,move:t.mmovefunc,end:t.mupfunc,cancel:t.mupfunc}[e];if(o){var r=n.changedTouches;r.length>0&&o(r[0])}}}.bind(this),this.frame.addEventListener("touchstart",this.touchfuncbuilder("start")),this.frame.addEventListener("touchmove",this.touchfuncbuilder("move")),this.frame.addEventListener("touchend",this.touchfuncbuilder("end")),this.frame.addEventListener("touchcancel",this.touchfuncbuilder("cancel")),t.closeable&&this.frame.appendChild((0,a.mkHTML)("button",{onclick:function(){this.close()}.bind(this),className:"windowCloseButton"}))}function h(e){if(r.options.noUi)return e;var t=e.getWindow();return s.windows[t.title]||(o.elements.windows.appendChild(t.frame),s.windows[t.title]=t),i.eventSys.emit(r.EVENTS.misc.windowAdded,e),e}function f(e){var t=e.getWindow();return s.windows[t.title]&&(o.elements.windows.removeChild(t.frame),delete s.windows[t.title]),e}function p(e){(e=e.getWindow()).move(window.innerWidth/2-e.realw/2|0,window.innerHeight/2-e.realh/2|0)}i.PublicAPI.windowSys=s,l.prototype.getWindow=function(){return this.win},c.prototype.getWindow=function(){return this.win},u.prototype.getWindow=function(){return this.win},d.prototype.getWindow=function(){return this},d.prototype.addObj=function(e){return this.elements.push(e),this.container.appendChild(e),e},d.prototype.delObj=function(e){var t=this.elements.indexOf(e);-1!=t&&(this.elements.splice(t,1),this.container.removeChild(e))},d.prototype.move=function(e,t){return this.opt.immobile||(this.frame.style.transform="translate("+e+"px,"+t+"px)",this.x=e,this.y=t),this},d.prototype.resize=function(e,t){return this.w=e,this.h=t,this.container.style.width=e+"px",this.container.style.height=t+"px",this},d.prototype.close=function(){f(this),window.removeEventListener("mousemove",this.mmovefunc),window.removeEventListener("mouseup",this.mupfunc),this.frame.removeEventListener("mousedown",this.mdownfunc),this.onclose&&this.onclose()}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.World=t.Chunk=void 0;var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=n(1),i=n(0),a=n(4),s=n(8),l=n(5),c=n(2),u=n(6),d=n(20),h=n(7);function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var p=0,m=t.Chunk=function(){function e(t,n,o,r){f(this,e),this.needsRedraw=!1,this.x=t,this.y=n,this.tmpChunkBuf=o,this.view=null,this.locked=r,this.lockedNeighbors=0}return o(e,[{key:"update",value:function(e,t,n){e&=r.protocol.chunkSize-1,t&=r.protocol.chunkSize-1,this.view.set(e,t,4278190080|n),this.needsRedraw=!0}},{key:"forEach",value:function(e){for(var t=r.protocol.chunkSize,n=0;n<t;n++)for(var o=0;o<t;o++)if(!e(o,n,this.get(o,n)))return!1;return!0}},{key:"get",value:function(e,t){return e&=r.protocol.chunkSize-1,t&=r.protocol.chunkSize-1,this.view.get(e,t)}},{key:"set",value:function(e){Number.isInteger(e)?this.view.fill(4278190080|e):this.view.fillFromBuf(e),this.needsRedraw=!0}},{key:"remove",value:function(){i.eventSys.emit(r.EVENTS.net.chunk.unload,this)}}]),e}();m.dir={UP:8,RIGHT:4,DOWN:2,LEFT:1};t.World=function(){function e(t){var n=this;f(this,e),this.name=t,this.chunks={},this.protectedChunks={},this.players={},this.undoHistory=[],this.pathUpdaterTimeout=-1,this.pathFx=new h.Fx((function(e,t,n){var o=1;if(e.extra.path){t.strokeStyle="#525252";var r=t.lineWidth;t.lineWidth=3/l.camera.zoom,t.setTransform(l.camera.zoom,0,0,l.camera.zoom,-l.camera.x*l.camera.zoom,-l.camera.y*l.camera.zoom),n-e.extra.placeTime<1500&&(t.globalAlpha=.5*(1-(n-e.extra.placeTime)/1500),t.fillStyle=l.renderer.patterns.unloaded,t.fill(e.extra.path),o=0),t.globalAlpha=.75,t.stroke(e.extra.path),t.setTransform(1,0,0,1,0,0),t.lineWidth=r}return o}));var o=function(e){return n.chunkLoaded(e)},a=function(e){return n.chunkUnloaded(e)},s=function(e,t,o){return n.chunkPasted(e,t,o)},c=function(e,t,o){return n.chunkLocked(e,t,o)},u=function(){return i.eventSys.emit(r.EVENTS.net.world.leave)},d=function(e){return n.tilesUpdated(e)},p=function(e){return n.playersMoved(e)},m=function(e){return n.playersLeft(e)};i.eventSys.on(r.EVENTS.net.chunk.load,o),i.eventSys.on(r.EVENTS.net.chunk.unload,a),i.eventSys.on(r.EVENTS.net.chunk.set,s),i.eventSys.on(r.EVENTS.net.chunk.lock,c),i.eventSys.on(r.EVENTS.net.world.tilesUpdated,d),i.eventSys.on(r.EVENTS.net.world.playersMoved,p),i.eventSys.on(r.EVENTS.net.world.playersLeft,m),i.eventSys.once(r.EVENTS.net.world.leave,(function(){n.pathFx.delete(),n.unloadAllChunks(),n.playersLeft(Object.keys(n.players)),i.eventSys.removeListener(r.EVENTS.net.chunk.load,o),i.eventSys.removeListener(r.EVENTS.net.chunk.unload,a),i.eventSys.removeListener(r.EVENTS.net.chunk.set,s),i.eventSys.removeListener(r.EVENTS.net.chunk.lock,c),i.eventSys.removeListener(r.EVENTS.net.disconnected,u),i.eventSys.removeListener(r.EVENTS.net.world.tilesUpdated,d),i.eventSys.removeListener(r.EVENTS.net.world.playersMoved,p),i.eventSys.removeListener(r.EVENTS.net.world.playersLeft,m)})),i.eventSys.once(r.EVENTS.net.disconnected,u)}return o(e,[{key:"makeLockedChunksPath",value:function(){var e=m.dir,t=new Path2D,n={},o={},r=function(e,t,n,o,r){var i=e+","+t,a=n+","+o;if(a in r&&i in r)r[r[i]]=r[a],r[r[a]]=r[i],delete r[a],delete r[i];else if(a in r){var s=r[a];r[s]=i,delete r[a],r[i]=s}else if(i in r){var l=r[i];r[l]=a,delete r[i],r[a]=l}else r[i]=a,r[a]=i};for(var i in this.protectedChunks){var a=this.protectedChunks[i],s=a.lockedNeighbors;s!==(e.LEFT|e.DOWN|e.UP|e.RIGHT)&&(s&e.UP||r(a.x+1,a.y,a.x,a.y,o),s&e.DOWN||r(a.x,a.y+1,a.x+1,a.y+1,o),s&e.LEFT||r(a.x,a.y+1,a.x,a.y,n),s&e.RIGHT||r(a.x+1,a.y+1,a.x+1,a.y,n))}var l=0,c=[n,o];for(var u in n){var d=u.split(",");t.moveTo(16*d[0],16*d[1]),delete n[n[u]],delete n[u],u=o[u];for(var h=0;u&&(d=u.split(","));h++){var f=c[h+1&1],p=c[1&h];t.lineTo(16*d[0],16*d[1]),delete f[f[u]],delete f[u],u=p[u]}t.closePath(),++l}return 0===l?null:t}},{key:"findNeighborLockedChunks",value:function(e,t){var n=this,o=m.dir,r=function(o,r,i,a){var s=n.getChunkAt(e.x+o,e.y+r);s&&s.locked&&(t?(e.lockedNeighbors|=i,s.lockedNeighbors|=a):(e.lockedNeighbors&=~i,s.lockedNeighbors&=~a))};r(0,-1,o.UP,o.DOWN),r(1,0,o.RIGHT,o.LEFT),r(-1,0,o.LEFT,o.RIGHT),r(0,1,o.DOWN,o.UP),clearTimeout(this.pathUpdaterTimeout),this.pathUpdaterTimeout=setTimeout((function(){n.pathFx.update({path:n.makeLockedChunksPath()}),l.renderer.render(l.renderer.rendertype.FX)}),100)}},{key:"loadChunk",value:function(e,t){var n=e+","+t;!this.chunks[n]&&s.net.isConnected()&&s.net.protocol.requestChunk(e,t)}},{key:"allChunksLoaded",value:function(){return s.net.protocol.allChunksLoaded()}},{key:"tilesUpdated",value:function(e){for(var t={},n=r.protocol.chunkSize,o=0;o<e.length;o++){var a=e[o],s=Math.floor(a.x/n)+","+Math.floor(a.y/n),l=this.chunks[s];l&&(t[s]=l,l.update(a.x,a.y,a.rgb))}for(var c in t)i.eventSys.emit(r.EVENTS.renderer.updateChunk,t[c])}},{key:"playersMoved",value:function(e){var t=!1;for(var n in e){var o=this.players[n],r=e[n];o?o.update(r.x,r.y,r.rgb,r.tool):o=this.players[n]=new d.Player(r.x,r.y,r.rgb,r.tool,n),t||!(0,l.isVisible)(o.endX/16,o.endY/16,4,4)&&!(0,l.isVisible)(o.x/16,o.y/16,4,4)||(t=!0,l.renderer.render(l.renderer.rendertype.FX))}}},{key:"playersLeft",value:function(e){for(var t=!1,n=0;n<e.length;n++){var o=e[n],r=this.players[o];r&&(r.disconnect(),!t&&(0,l.isVisible)(r.x/16,r.y/16,4,4)&&(t=!0,l.renderer.render(l.renderer.rendertype.FX))),delete this.players[o]}}},{key:"setPixel",value:function(e,t,n,o){var d=Date.now(),h=r.protocol.chunkSize,f=this.chunks[Math.floor(e/h)+","+Math.floor(t/h)];if(f&&(!f.locked||u.player.rank>=r.RANK.MODERATOR)){var m=this.getPixel(e,t,f);return!(!m||m[0]===n[0]&&m[1]===n[1]&&m[2]===n[2]||!s.net.protocol.updatePixel(e,t,n))&&(o||(m.push(e,t,d),this.undoHistory.push(m)),f.update(e,t,a.colorUtils.u24_888(n[0],n[1],n[2])),i.eventSys.emit(r.EVENTS.renderer.updateChunk,f),d-p>30&&(c.sounds.play(c.sounds.place),p=d),!0)}return f&&f.locked&&(this.pathFx.extra.placeTime=d,l.renderer.render(l.renderer.rendertype.FX)),!1}},{key:"undo",value:function(e){if(0===this.undoHistory.length)return!1;for(var t,n,o=null,r=this.undoHistory.length;--r>=0;){var i=this.undoHistory[r];o||(o=i[5]);var a=this.getPixel(i[3],i[4]);if(a){var s=!e||o-i[5]<500,l=(n=i,(t=a)[0]==n[0]&&t[1]==n[1]&&t[2]==n[2]);if(!s)break;if((l||this.setPixel(i[3],i[4],i,!0))&&(this.undoHistory.splice(r,1),!e))break}}}},{key:"getChunkAt",value:function(e,t){return this.chunks[e+","+t]}},{key:"getPixel",value:function(e,t,n){if(!n){var o=r.protocol.chunkSize;n=this.chunks[Math.floor(e/o)+","+Math.floor(t/o)]}if(n){var i=n.get(e,t);return[255&i,i>>8&255,i>>16&255]}return null}},{key:"validMousePos",value:function(e,t){return null!==this.getPixel(e,t)}},{key:"chunkLocked",value:function(e,t,n){var o=e+","+t,r=this.getChunkAt(e,t);r&&(n?(this.protectedChunks[o]=r,r.locked=!0):(delete this.protectedChunks[o],r.locked=!1),this.findNeighborLockedChunks(r,n))}},{key:"chunkLoaded",value:function(e){var t=e.x+","+e.y;this.chunks[t]=e,e.locked&&(this.protectedChunks[t]=e,this.findNeighborLockedChunks(e,e.locked)),i.eventSys.emit(r.EVENTS.renderer.addChunk,e)}},{key:"chunkUnloaded",value:function(e){var t=e.x+","+e.y;delete this.chunks[t],e.locked&&(delete this.protectedChunks[t],e.locked=!1,this.findNeighborLockedChunks(e,e.locked)),i.eventSys.emit(r.EVENTS.renderer.rmChunk,e)}},{key:"chunkPasted",value:function(e,t,n){var o=this.chunks[e+","+t];o&&(o.set(n),i.eventSys.emit(r.EVENTS.renderer.updateChunk,o))}},{key:"unloadAllChunks",value:function(){for(var e in this.chunks)this.chunks[e].remove()}}]),e}()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.cursors=void 0;var o=n(1),r=n(0),i=t.cursors={set:new Image,cursor:{imgpos:[0,0],hotspot:[0,0]},move:{imgpos:[1,0],hotspot:[18,18]},pipette:{imgpos:[0,1],hotspot:[0,28]},erase:{imgpos:[0,2],hotspot:[4,26]},zoom:{imgpos:[1,2],hotspot:[19,10]},fill:{imgpos:[1,1],hotspot:[3,29]},brush:{imgpos:[0,3],hotspot:[0,26]},select:{imgpos:[2,0],hotspot:[0,0]},selectprotect:{imgpos:[4,0],hotspot:[0,0]},areadelete:{imgpos:[4,1],hotspot:[0,0]},copy:{imgpos:[3,0],hotspot:[0,0]},paste:{imgpos:[3,1],hotspot:[0,0]},cut:{imgpos:[3,2],hotspot:[11,5]},wand:{imgpos:[3,3],hotspot:[0,0]},shield:{imgpos:[2,3],hotspot:[18,18]},kick:{imgpos:[2,1],hotspot:[3,6]},ban:{imgpos:[3,0],hotspot:[10,4]},write:{imgpos:[1,3],hotspot:[10,4]}};function a(e){for(var t=e.width,n=e.height,o=e.getContext("2d"),r=o.getImageData(0,0,e.width,e.height),i=new Uint32Array(r.data.buffer),a=0,s=0,l=0,c=0;l<r.height;l++){for(u=r.width;u--;c+=i[l*r.width+u]);if(c)break;s++}var u=0;for(c=0;u<r.width;u++){for(l=n;l--;c+=i[l*r.width+u]);if(c)break;a++}for(l=r.height,c=0;l--;){for(u=r.width;u--;c+=i[l*r.width+u]);if(c)break;n--}for(u=r.width,c=0;u--;){for(l=n;l--;c+=i[l*r.width+u]);if(c)break;t--}e.width=t,e.height=n,o.putImageData(r,-a,-s)}function s(e,t){e.width=2+t.width+6,e.height=2+t.height+6;var n=e.getContext("2d");n.shadowColor="#000000",n.globalAlpha=.5,n.shadowBlur=4,n.shadowOffsetX=2,n.shadowOffsetY=2,n.drawImage(t,2,2),n.globalAlpha=1,n.shadowColor="rgba(0, 0, 0, 0)",n.drawImage(t,2,2)}function l(e){i.set.onload=function(){var t=i.set,n=document.createElement("canvas");!function(e,t){e.width=t.width,e.height=t.height;var n=e.getContext("2d");n.drawImage(t,0,0);for(var o=n.getImageData(0,0,e.width,e.height),r=new Uint32Array(o.data.buffer),i=function(e,t){return e<0||t<0||e>=o.width||t>=o.height?0:r[t*o.width+e]},a=r.length;a--;)0!==r[a]&&(r[a]=4284244862);for(var s=o.height;s--;)for(var l=o.width;l--;)4284244862!==i(l,s)||i(l,s-1)&&i(l-1,s)||i(l-1,s-1)||(r[s*o.width+l]=4282069325);for(s=o.height;s--;)for(l=o.width;l--;)4282069325===i(l,s-1)&&4282069325===i(l-1,s)&&(r[s*o.width+l]=4282069325);n.putImageData(o,0,0)}(n,t);var o=Object.keys(i).length-1+1;for(var r in i)if("set"!==r){r=i[r];var l=document.createElement("canvas"),c=r.img={shadowed:document.createElement("canvas"),shadowblob:null};l.width=l.height=36,l.getContext("2d").drawImage(t,36*r.imgpos[0],36*r.imgpos[1],36,36,0,0,36,36),a(l),s(c.shadowed,l),r.hotspot[0]+=2,r.hotspot[1]+=2,c.shadowed.toBlob(function(t){this.img.shadowblob=URL.createObjectURL(t),--o||e()}.bind(r))}n.toBlob((function(t){i.slotset=URL.createObjectURL(t),--o||e()}))},i.set.src=o.options.toolSetUrl}r.PublicAPI.cursors=i,r.eventSys.once(o.EVENTS.loaded,(function(){l((function(){return r.eventSys.emit(o.EVENTS.misc.toolsRendered)}))}))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Lerp=void 0;var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();var r=n(3).getTime;t.Lerp=function(){function e(t,n,o){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.start=t,this.end=n,this.ms=o,this.time=r()}return o(e,[{key:"val",get:function(){var e=Math.min((r()-this.time)/this.ms,1);return(1-e)*this.start+e*this.end},set:function(e){this.start=this.val,this.end=e,this.time=r(!0)}}]),e}()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.normalizeWheel=function(e){var t=0,n=0,a=0,s=0;"detail"in e&&(n=e.detail);"wheelDelta"in e&&(n=-e.wheelDelta/120);"wheelDeltaY"in e&&(n=-e.wheelDeltaY/120);"wheelDeltaX"in e&&(t=-e.wheelDeltaX/120);"axis"in e&&e.axis===e.HORIZONTAL_AXIS&&(t=n,n=0);a=t*o,s=n*o,"deltaY"in e&&(s=e.deltaY);"deltaX"in e&&(a=e.deltaX);(a||s)&&e.deltaMode&&(1==e.deltaMode?(a*=r,s*=r):(a*=i,s*=i));a&&!t&&(t=a<1?-1:1);s&&!n&&(n=s<1?-1:1);return{spinX:t,spinY:n,pixelX:a,pixelY:s}};var o=10,r=40,i=800},function(e,t,n){"use strict";var o,r,i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(a,s){"object"==i(t)&&void 0!==e?e.exports=s():void 0===(r="function"==typeof(o=s)?o.call(t,n,t,e):o)||(e.exports=r)}(0,(function(){function e(e,t){return e(t={exports:{}},t.exports),t.exports}var t=e((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.defaultOptions=function(e){return e||(e={attributes:[],ips:!0,emails:!0,urls:!0,files:!0,truncate:1/0,defaultProtocol:"http://",list:!1}),"object"!=i(e.attributes)&&(e.attributes=[]),"boolean"!=typeof e.ips&&(e.ips=!0),"boolean"!=typeof e.emails&&(e.emails=!0),"boolean"!=typeof e.urls&&(e.urls=!0),"boolean"!=typeof e.files&&(e.files=!0),"boolean"!=typeof e.list&&(e.list=!1),"string"!=typeof e.defaultProtocol&&"function"!=typeof e.defaultProtocol&&(e.defaultProtocol="http://"),"number"==typeof e.truncate||"object"==i(e.truncate)&&null!==e.truncate||(e.truncate=1/0),e},t.isPort=function(e){return!(isNaN(Number(e))||Number(e)>65535)}})),n=e((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.tlds=["com","org","net","uk","gov","edu","io","cc","co","aaa","aarp","abarth","abb","abbott","abbvie","abc","able","abogado","abudhabi","ac","academy","accenture","accountant","accountants","aco","active","actor","ad","adac","ads","adult","ae","aeg","aero","aetna","af","afamilycompany","afl","africa","ag","agakhan","agency","ai","aig","aigo","airbus","airforce","airtel","akdn","al","alfaromeo","alibaba","alipay","allfinanz","allstate","ally","alsace","alstom","am","americanexpress","americanfamily","amex","amfam","amica","amsterdam","analytics","android","anquan","anz","ao","aol","apartments","app","apple","aq","aquarelle","ar","aramco","archi","army","arpa","art","arte","as","asda","asia","associates","at","athleta","attorney","au","auction","audi","audible","audio","auspost","author","auto","autos","avianca","aw","aws","ax","axa","az","azure","ba","baby","baidu","banamex","bananarepublic","band","bank","bar","barcelona","barclaycard","barclays","barefoot","bargains","baseball","basketball","bauhaus","bayern","bb","bbc","bbt","bbva","bcg","bcn","bd","be","beats","beauty","beer","bentley","berlin","best","bestbuy","bet","bf","bg","bh","bharti","bi","bible","bid","bike","bing","bingo","bio","biz","bj","black","blackfriday","blanco","blockbuster","blog","bloomberg","blue","bm","bms","bmw","bn","bnl","bnpparibas","bo","boats","boehringer","bofa","bom","bond","boo","book","booking","boots","bosch","bostik","boston","bot","boutique","box","br","bradesco","bridgestone","broadway","broker","brother","brussels","bs","bt","budapest","bugatti","build","builders","business","buy","buzz","bv","bw","by","bz","bzh","ca","cab","cafe","cal","call","calvinklein","cam","camera","camp","cancerresearch","canon","capetown","capital","capitalone","car","caravan","cards","care","career","careers","cars","cartier","casa","case","caseih","cash","casino","cat","catering","catholic","cba","cbn","cbre","cbs","cd","ceb","center","ceo","cern","cf","cfa","cfd","cg","ch","chanel","channel","chase","chat","cheap","chintai","chloe","christmas","chrome","chrysler","church","ci","cipriani","circle","cisco","citadel","citi","citic","city","cityeats","ck","cl","claims","cleaning","click","clinic","clinique","clothing","cloud","club","clubmed","cm","cn","coach","codes","coffee","college","cologne","comcast","commbank","community","company","compare","computer","comsec","condos","construction","consulting","contact","contractors","cooking","cookingchannel","cool","coop","corsica","country","coupon","coupons","courses","cr","credit","creditcard","creditunion","cricket","crown","crs","cruise","cruises","csc","cu","cuisinella","cv","cw","cx","cy","cymru","cyou","cz","dabur","dad","dance","data","date","dating","datsun","day","dclk","dds","de","deal","dealer","deals","degree","delivery","dell","deloitte","delta","democrat","dental","dentist","desi","design","dev","dhl","diamonds","diet","digital","direct","directory","discount","discover","dish","diy","dj","dk","dm","dnp","do","docs","doctor","dodge","dog","doha","domains","dot","download","drive","dtv","dubai","duck","dunlop","duns","dupont","durban","dvag","dvr","dz","earth","eat","ec","eco","edeka","education","ee","eg","email","emerck","energy","engineer","engineering","enterprises","epost","epson","equipment","er","ericsson","erni","es","esq","estate","esurance","et","eu","eurovision","eus","events","everbank","exchange","expert","exposed","express","extraspace","fage","fail","fairwinds","faith","family","fan","fans","farm","farmers","fashion","fast","fedex","feedback","ferrari","ferrero","fi","fiat","fidelity","fido","film","final","finance","financial","fire","firestone","firmdale","fish","fishing","fit","fitness","fj","fk","flickr","flights","flir","florist","flowers","fly","fm","fo","foo","food","foodnetwork","football","ford","forex","forsale","forum","foundation","fox","fr","free","fresenius","frl","frogans","frontdoor","frontier","ftr","fujitsu","fujixerox","fun","fund","furniture","futbol","fyi","ga","gal","gallery","gallo","gallup","game","games","gap","garden","gb","gbiz","gd","gdn","ge","gea","gent","genting","george","gf","gg","ggee","gh","gi","gift","gifts","gives","giving","gl","glade","glass","gle","global","globo","gm","gmail","gmbh","gmo","gmx","gn","godaddy","gold","goldpoint","golf","goo","goodhands","goodyear","goog","google","gop","got","gp","gq","gr","grainger","graphics","gratis","green","gripe","group","gs","gt","gu","guardian","gucci","guge","guide","guitars","guru","gw","gy","hair","hamburg","hangout","haus","hbo","hdfc","hdfcbank","health","healthcare","help","helsinki","here","hermes","hgtv","hiphop","hisamitsu","hitachi","hiv","hk","hkt","hm","hn","hockey","holdings","holiday","homedepot","homegoods","homes","homesense","honda","honeywell","horse","hospital","host","hosting","hot","hoteles","hotmail","house","how","hr","hsbc","ht","htc","hu","hughes","hyatt","hyundai","ibm","icbc","ice","icu","id","ie","ieee","ifm","ikano","il","im","imamat","imdb","immo","immobilien","in","industries","infiniti","info","ing","ink","institute","insurance","insure","int","intel","international","intuit","investments","ipiranga","iq","ir","irish","is","iselect","ismaili","ist","istanbul","it","itau","itv","iveco","iwc","jaguar","java","jcb","jcp","je","jeep","jetzt","jewelry","jio","jlc","jll","jm","jmp","jnj","jo","jobs","joburg","jot","joy","jp","jpmorgan","jprs","juegos","juniper","kaufen","kddi","ke","kerryhotels","kerrylogistics","kerryproperties","kfh","kg","kh","ki","kia","kim","kinder","kindle","kitchen","kiwi","km","kn","koeln","komatsu","kosher","kp","kpmg","kpn","kr","krd","kred","kuokgroup","kw","ky","kyoto","kz","la","lacaixa","ladbrokes","lamborghini","lamer","lancaster","lancia","lancome","land","landrover","lanxess","lasalle","lat","latino","latrobe","law","lawyer","lb","lc","lds","lease","leclerc","lefrak","legal","lego","lexus","lgbt","li","liaison","lidl","life","lifeinsurance","lifestyle","lighting","like","lilly","limited","limo","lincoln","linde","link","lipsy","live","living","lixil","lk","loan","loans","locker","locus","loft","lol","london","lotte","lotto","love","lpl","lplfinancial","lr","ls","lt","ltd","ltda","lu","lundbeck","lupin","luxe","luxury","lv","ly","ma","macys","madrid","maif","maison","makeup","man","management","mango","market","marketing","markets","marriott","marshalls","maserati","mattel","mba","mc","mcd","mcdonalds","mckinsey","md","me","med","media","meet","melbourne","meme","memorial","men","menu","meo","metlife","mg","mh","miami","microsoft","mil","mini","mint","mit","mitsubishi","mk","ml","mlb","mls","mm","mma","mn","mo","mobi","mobile","mobily","moda","moe","moi","mom","monash","money","monster","montblanc","mopar","mormon","mortgage","moscow","moto","motorcycles","mov","movie","movistar","mp","mq","mr","ms","msd","mt","mtn","mtpc","mtr","mu","museum","mutual","mv","mw","mx","my","mz","na","nab","nadex","nagoya","name","nationwide","natura","navy","nba","nc","ne","nec","netbank","netflix","network","neustar","new","newholland","news","next","nextdirect","nexus","nf","nfl","ng","ngo","nhk","ni","nico","nike","nikon","ninja","nissan","nissay","nl","no","nokia","northwesternmutual","norton","now","nowruz","nowtv","np","nr","nra","nrw","ntt","nu","nyc","nz","obi","observer","off","office","okinawa","olayan","olayangroup","oldnavy","ollo","om","omega","one","ong","onl","online","onyourside","ooo","open","oracle","orange","organic","orientexpress","origins","osaka","otsuka","ott","ovh","pa","page","pamperedchef","panasonic","panerai","paris","pars","partners","parts","party","passagens","pay","pccw","pe","pet","pf","pfizer","pg","ph","pharmacy","philips","phone","photo","photography","photos","physio","piaget","pics","pictet","pictures","pid","pin","ping","pink","pioneer","pizza","pk","pl","place","play","playstation","plumbing","plus","pm","pn","pnc","pohl","poker","politie","porn","post","pr","pramerica","praxi","press","prime","pro","prod","productions","prof","progressive","promo","properties","property","protection","pru","prudential","ps","pt","pub","pw","pwc","py","qa","qpon","quebec","quest","qvc","racing","radio","raid","re","read","realestate","realtor","realty","recipes","red","redstone","redumbrella","rehab","reise","reisen","reit","reliance","ren","rent","rentals","repair","report","republican","rest","restaurant","review","reviews","rexroth","rich","richardli","ricoh","rightathome","ril","rio","rip","rmit","ro","rocher","rocks","rodeo","rogers","room","rs","rsvp","ru","ruhr","run","rw","rwe","ryukyu","sa","saarland","safe","safety","sakura","sale","salon","samsclub","samsung","sandvik","sandvikcoromant","sanofi","sap","sapo","sarl","sas","save","saxo","sb","sbi","sbs","sc","sca","scb","schaeffler","schmidt","scholarships","school","schule","schwarz","science","scjohnson","scor","scot","sd","se","seat","secure","security","seek","select","sener","services","ses","seven","sew","sex","sexy","sfr","sg","sh","shangrila","sharp","shaw","shell","shia","shiksha","shoes","shop","shopping","shouji","show","showtime","shriram","si","silk","sina","singles","site","sj","sk","ski","skin","sky","skype","sl","sling","sm","smart","smile","sn","sncf","so","soccer","social","softbank","software","sohu","solar","solutions","song","sony","soy","space","spiegel","spot","spreadbetting","sr","srl","srt","st","stada","staples","star","starhub","statebank","statefarm","statoil","stc","stcgroup","stockholm","storage","store","stream","studio","study","style","su","sucks","supplies","supply","support","surf","surgery","suzuki","sv","swatch","swiftcover","swiss","sx","sy","sydney","symantec","systems","sz","tab","taipei","talk","taobao","target","tatamotors","tatar","tattoo","tax","taxi","tc","tci","td","tdk","team","tech","technology","tel","telecity","telefonica","temasek","tennis","teva","tf","tg","th","thd","theater","theatre","tiaa","tickets","tienda","tiffany","tips","tires","tirol","tj","tjmaxx","tjx","tk","tkmaxx","tl","tm","tmall","tn","to","today","tokyo","tools","top","toray","toshiba","total","tours","town","toyota","toys","tr","trade","trading","training","travel","travelchannel","travelers","travelersinsurance","trust","trv","tt","tube","tui","tunes","tushu","tv","tvs","tw","tz","ua","ubank","ubs","uconnect","ug","unicom","university","uno","uol","ups","us","uy","uz","va","vacations","vana","vanguard","vc","ve","vegas","ventures","verisign","versicherung","vet","vg","vi","viajes","video","vig","viking","villas","vin","vip","virgin","visa","vision","vista","vistaprint","viva","vivo","vlaanderen","vn","vodka","volkswagen","volvo","vote","voting","voto","voyage","vu","vuelos","wales","walmart","walter","wang","wanggou","warman","watch","watches","weather","weatherchannel","webcam","weber","website","wed","wedding","weibo","weir","wf","whoswho","wien","wiki","williamhill","win","windows","wine","winners","wme","wolterskluwer","woodside","work","works","world","wow","ws","wtc","wtf","xbox","xerox","xfinity","xihuan","xin","xn--11b4c3d","xn--1ck2e1b","xn--1qqw23a","xn--30rr7y","xn--3bst00m","xn--3ds443g","xn--3e0b707e","xn--3oq18vl8pn36a","xn--3pxu8k","xn--42c2d9a","xn--45brj9c","xn--45q11c","xn--4gbrim","xn--54b7fta0cc","xn--55qw42g","xn--55qx5d","xn--5su34j936bgsg","xn--5tzm5g","xn--6frz82g","xn--6qq986b3xl","xn--80adxhks","xn--80ao21a","xn--80aqecdr1a","xn--80asehdb","xn--80aswg","xn--8y0a063a","xn--90a3ac","xn--90ae","xn--90ais","xn--9dbq2a","xn--9et52u","xn--9krt00a","xn--b4w605ferd","xn--bck1b9a5dre4c","xn--c1avg","xn--c2br7g","xn--cck2b3b","xn--cg4bki","xn--clchc0ea0b2g2a9gcd","xn--czr694b","xn--czrs0t","xn--czru2d","xn--d1acj3b","xn--d1alf","xn--e1a4c","xn--eckvdtc9d","xn--efvy88h","xn--estv75g","xn--fct429k","xn--fhbei","xn--fiq228c5hs","xn--fiq64b","xn--fiqs8s","xn--fiqz9s","xn--fjq720a","xn--flw351e","xn--fpcrj9c3d","xn--fzc2c9e2c","xn--fzys8d69uvgm","xn--g2xx48c","xn--gckr3f0f","xn--gecrj9c","xn--gk3at1e","xn--h2brj9c","xn--hxt814e","xn--i1b6b1a6a2e","xn--imr513n","xn--io0a7i","xn--j1aef","xn--j1amh","xn--j6w193g","xn--jlq61u9w7b","xn--jvr189m","xn--kcrx77d1x4a","xn--kprw13d","xn--kpry57d","xn--kpu716f","xn--kput3i","xn--l1acc","xn--lgbbat1ad8j","xn--mgb9awbf","xn--mgba3a3ejt","xn--mgba3a4f16a","xn--mgba7c0bbn0a","xn--mgbaam7a8h","xn--mgbab2bd","xn--mgbai9azgqp6j","xn--mgbayh7gpa","xn--mgbb9fbpob","xn--mgbbh1a71e","xn--mgbc0a9azcg","xn--mgbca7dzdo","xn--mgberp4a5d4ar","xn--mgbi4ecexp","xn--mgbpl2fh","xn--mgbt3dhd","xn--mgbtx2b","xn--mgbx4cd0ab","xn--mix891f","xn--mk1bu44c","xn--mxtq1m","xn--ngbc5azd","xn--ngbe9e0a","xn--node","xn--nqv7f","xn--nqv7fs00ema","xn--nyqy26a","xn--o3cw4h","xn--ogbpf8fl","xn--p1acf","xn--p1ai","xn--pbt977c","xn--pgbs0dh","xn--pssy2u","xn--q9jyb4c","xn--qcka1pmc","xn--qxam","xn--rhqv96g","xn--rovu88b","xn--s9brj9c","xn--ses554g","xn--t60b56a","xn--tckwe","xn--tiq49xqyj","xn--unup4y","xn--vermgensberater-ctb","xn--vermgensberatung-pwb","xn--vhquv","xn--vuq861b","xn--w4r85el8fhu5dnra","xn--w4rs40l","xn--wgbh1c","xn--wgbl6a","xn--xhq521b","xn--xkc2al3hye2a","xn--xkc2dl3a5ee0h","xn--y9a3aq","xn--yfro4i67o","xn--ygbi2ammx","xn--zfr164b","xperia","xxx","xyz","yachts","yahoo","yamaxun","yandex","ye","yodobashi","yoga","yokohama","you","youtube","yt","yun","za","zappos","zara","zero","zip","zippo","zm","zone","zuerich","zw"],t.htmlAttrs=["src=","data=","href=","cite=","formaction=","icon=","manifest=","poster=","codebase=","background=","profile=","usemap="]})),o=e((function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var o=/^[a-z0-9!#$%&'*+\-\/=?^_`{|}~.]+@([a-z0-9%\-]+\.){1,}([a-z0-9\-]+)?$/i,r=[/^[!#$%&'*+\-\/=?^_`{|}~.]/,/[.]{2,}[a-z0-9!#$%&'*+\-\/=?^_`{|}~.]+@/i,/\.@/];t.default=function(e){var t=e.match(o);if(null===t)return!1;for(var i=r.length-1;i>=0;i--)if(r[i].test(e))return!1;var a=t[2];return!!a&&-1!==n.tlds.indexOf(a)}})),r=e((function(e,n){Object.defineProperty(n,"__esModule",{value:!0});var o=/^(\d{1,3}\.){3}\d{1,3}(:\d{1,5})?(\/([a-z0-9\-._~:\/\?#\[\]@!$&'\(\)\*\+,;=%]+)?)?$/i;n.default=function(e){if(!o.test(e))return!1;var n=e.split("."),r=Number(n[0]);if(isNaN(r)||r>255||r<0)return!1;var i=Number(n[1]);if(isNaN(i)||i>255||i<0)return!1;var a=Number(n[2]);if(isNaN(a)||a>255||a<0)return!1;var s=Number((n[3].match(/^\d+/)||[])[0]);if(isNaN(s)||s>255||s<0)return!1;var l=(n[3].match(/(^\d+)(:)(\d+)/)||[])[3];return!(l&&!t.isPort(l))}})),a=e((function(e,o){Object.defineProperty(o,"__esModule",{value:!0});var r=/^(https?:\/\/|ftps?:\/\/)?([a-z0-9%\-]+\.){1,}([a-z0-9\-]+)?(:(\d{1,5}))?(\/([a-z0-9\-._~:\/\?#\[\]@!$&'\(\)\*\+,;=%]+)?)?$/i;o.default=function(e){var o=e.match(r);return null!==o&&"string"==typeof o[3]&&-1!==n.tlds.indexOf(o[3].toLowerCase())&&!(o[5]&&!t.isPort(o[5]))}})),s=e((function(e,t){function n(e,t,o){return e.forEach((function(r,i){!(r.indexOf(".")>-1)||e[i-1]===t&&e[i+1]===o||e[i+1]!==t&&e[i+1]!==o||(e[i]=e[i]+e[i+1],"string"==typeof e[i+2]&&(e[i]=e[i]+e[i+2]),"string"==typeof e[i+3]&&(e[i]=e[i]+e[i+3]),"string"==typeof e[i+4]&&(e[i]=e[i]+e[i+4]),e.splice(i+1,4),n(e,t,o))})),e}Object.defineProperty(t,"__esModule",{value:!0}),t.fixSeparators=n,t.default=function(e){return e=n(e,"(",")"),e=n(e,"[","]"),e=n(e,'"','"'),n(e,"'","'")}})),l=e((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.separate=function(e){var t=e.replace(/([\s\(\)\[\]<>"'])/g,"\0$1\0").replace(/([?;:,.!]+)(?=(\0|$|\s))/g,"\0$1\0").split("\0");return s.default(t)},t.deSeparate=function(e){return e.join("")}})),c=e((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return 0===(e=e.toLowerCase()).indexOf("http://")?"http://":0===e.indexOf("https://")?"https://":0===e.indexOf("ftp://")?"ftp://":0===e.indexOf("ftps://")?"ftps://":0===e.indexOf("file:///")?"file:///":0===e.indexOf("mailto:")&&"mailto:"}})),u=e((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){return e.map((function(i,s){var l=encodeURI(i);if(l.indexOf(".")<1&&!c.default(l))return i;var u=null,d=c.default(l)||"";return d&&(l=l.substr(d.length)),t.files&&"file:///"===d&&l.split(/\/|\\/).length-1&&(u={reason:"file",protocol:d,raw:i,encoded:l}),!u&&t.urls&&a.default(l)&&(u={reason:"url",protocol:d||("function"==typeof t.defaultProtocol?t.defaultProtocol(i):t.defaultProtocol),raw:i,encoded:l}),!u&&t.emails&&o.default(l)&&(u={reason:"email",protocol:"mailto:",raw:i,encoded:l}),!u&&t.ips&&r.default(l)&&(u={reason:"ip",protocol:d||("function"==typeof t.defaultProtocol?t.defaultProtocol(i):t.defaultProtocol),raw:i,encoded:l}),u&&("'"!==e[s-1]&&'"'!==e[s-1]||!~n.htmlAttrs.indexOf(e[s-2]))?u:i}))}})),d=e((function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=l;t.default=function(e,t){var o=n.separate(e),r=u.default(o,t);if(t.exclude)for(var a=0;a<r.length;a++){var s=r[a];"object"==(void 0===s?"undefined":i(s))&&t.exclude(s)&&(r[a]=s.raw)}if(t.list){for(var c=[],d=0;d<r.length;d++){var h=r[d];"string"!=typeof h&&c.push(h)}return c}return r=r.map((function(e){return"string"==typeof e?e:function(e,t){var n=e.protocol+e.encoded,o=e.raw;return"number"==typeof t.truncate&&o.length>t.truncate&&(o=o.substring(0,t.truncate)+"..."),"object"==i(t.truncate)&&o.length>t.truncate[0]+t.truncate[1]&&(o=o.substr(0,t.truncate[0])+"..."+o.substr(o.length-t.truncate[1])),void 0===t.attributes&&(t.attributes=[]),'<a href="'+n+'" '+t.attributes.map((function(t){if("function"!=typeof t)return" "+t.name+'="'+t.value+'" ';var n=(t(e)||{}).name,o=(t(e)||{}).value;return n&&!o?" name ":n&&o?" "+n+'="'+o+'" ':void 0})).join("")+">"+o+"</a>"}(e,t)})),l.deSeparate(r)}}));return function(e){return e&&e.__esModule?e.default:e}(e((function(e,n){Object.defineProperty(n,"__esModule",{value:!0});var i=function(e,n){return n=t.defaultOptions(n),d.default(e,n)};i.validate={ip:r.default,url:function(e){var t=c.default(e)||"";return e=e.substr(t.length),e=encodeURI(e),a.default(e)},email:o.default},n.default=i})))}))},function(e,t,n){"use strict";var o,r="object"==typeof Reflect?Reflect:null,i=r&&"function"==typeof r.apply?r.apply:function(e,t,n){return Function.prototype.apply.call(e,t,n)};o=r&&"function"==typeof r.ownKeys?r.ownKeys:Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.getOwnPropertyNames(e)};var a=Number.isNaN||function(e){return e!=e};function s(){s.init.call(this)}e.exports=s,s.EventEmitter=s,s.prototype._events=void 0,s.prototype._eventsCount=0,s.prototype._maxListeners=void 0;var l=10;function c(e){return void 0===e._maxListeners?s.defaultMaxListeners:e._maxListeners}function u(e,t,n,o){var r,i,a,s;if("function"!=typeof n)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof n);if(void 0===(i=e._events)?(i=e._events=Object.create(null),e._eventsCount=0):(void 0!==i.newListener&&(e.emit("newListener",t,n.listener?n.listener:n),i=e._events),a=i[t]),void 0===a)a=i[t]=n,++e._eventsCount;else if("function"==typeof a?a=i[t]=o?[n,a]:[a,n]:o?a.unshift(n):a.push(n),(r=c(e))>0&&a.length>r&&!a.warned){a.warned=!0;var l=new Error("Possible EventEmitter memory leak detected. "+a.length+" "+String(t)+" listeners added. Use emitter.setMaxListeners() to increase limit");l.name="MaxListenersExceededWarning",l.emitter=e,l.type=t,l.count=a.length,s=l,console&&console.warn&&console.warn(s)}return e}function d(){for(var e=[],t=0;t<arguments.length;t++)e.push(arguments[t]);this.fired||(this.target.removeListener(this.type,this.wrapFn),this.fired=!0,i(this.listener,this.target,e))}function h(e,t,n){var o={fired:!1,wrapFn:void 0,target:e,type:t,listener:n},r=d.bind(o);return r.listener=n,o.wrapFn=r,r}function f(e,t,n){var o=e._events;if(void 0===o)return[];var r=o[t];return void 0===r?[]:"function"==typeof r?n?[r.listener||r]:[r]:n?function(e){for(var t=new Array(e.length),n=0;n<t.length;++n)t[n]=e[n].listener||e[n];return t}(r):m(r,r.length)}function p(e){var t=this._events;if(void 0!==t){var n=t[e];if("function"==typeof n)return 1;if(void 0!==n)return n.length}return 0}function m(e,t){for(var n=new Array(t),o=0;o<t;++o)n[o]=e[o];return n}Object.defineProperty(s,"defaultMaxListeners",{enumerable:!0,get:function(){return l},set:function(e){if("number"!=typeof e||e<0||a(e))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+e+".");l=e}}),s.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},s.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||a(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this},s.prototype.getMaxListeners=function(){return c(this)},s.prototype.emit=function(e){for(var t=[],n=1;n<arguments.length;n++)t.push(arguments[n]);var o="error"===e,r=this._events;if(void 0!==r)o=o&&void 0===r.error;else if(!o)return!1;if(o){var a;if(t.length>0&&(a=t[0]),a instanceof Error)throw a;var s=new Error("Unhandled error."+(a?" ("+a.message+")":""));throw s.context=a,s}var l=r[e];if(void 0===l)return!1;if("function"==typeof l)i(l,this,t);else{var c=l.length,u=m(l,c);for(n=0;n<c;++n)i(u[n],this,t)}return!0},s.prototype.addListener=function(e,t){return u(this,e,t,!1)},s.prototype.on=s.prototype.addListener,s.prototype.prependListener=function(e,t){return u(this,e,t,!0)},s.prototype.once=function(e,t){if("function"!=typeof t)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof t);return this.on(e,h(this,e,t)),this},s.prototype.prependOnceListener=function(e,t){if("function"!=typeof t)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof t);return this.prependListener(e,h(this,e,t)),this},s.prototype.removeListener=function(e,t){var n,o,r,i,a;if("function"!=typeof t)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof t);if(void 0===(o=this._events))return this;if(void 0===(n=o[e]))return this;if(n===t||n.listener===t)0==--this._eventsCount?this._events=Object.create(null):(delete o[e],o.removeListener&&this.emit("removeListener",e,n.listener||t));else if("function"!=typeof n){for(r=-1,i=n.length-1;i>=0;i--)if(n[i]===t||n[i].listener===t){a=n[i].listener,r=i;break}if(r<0)return this;0===r?n.shift():function(e,t){for(;t+1<e.length;t++)e[t]=e[t+1];e.pop()}(n,r),1===n.length&&(o[e]=n[0]),void 0!==o.removeListener&&this.emit("removeListener",e,a||t)}return this},s.prototype.off=s.prototype.removeListener,s.prototype.removeAllListeners=function(e){var t,n,o;if(void 0===(n=this._events))return this;if(void 0===n.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==n[e]&&(0==--this._eventsCount?this._events=Object.create(null):delete n[e]),this;if(0===arguments.length){var r,i=Object.keys(n);for(o=0;o<i.length;++o)"removeListener"!==(r=i[o])&&this.removeAllListeners(r);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(t=n[e]))this.removeListener(e,t);else if(void 0!==t)for(o=t.length-1;o>=0;o--)this.removeListener(e,t[o]);return this},s.prototype.listeners=function(e){return f(this,e,!0)},s.prototype.rawListeners=function(e){return f(this,e,!1)},s.listenerCount=function(e,t){return"function"==typeof e.listenerCount?e.listenerCount(t):p.call(e,t)},s.prototype.listenerCount=p,s.prototype.eventNames=function(){return this._eventsCount>0?o(this._events):[]}},function(e,t,n){e.exports=n.p+"img/toolset.png"},function(e,t,n){e.exports=n.p+"img/unloaded.png"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Player=void 0;var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=n(14),i=n(4),a=n(2),s=n(7),l=n(10);t.Player=function(){function e(t,n,o,c,u){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.id=u.toString(),this._x=new r.Lerp(t,t,65),this._y=new r.Lerp(n,n,65),this.tool=l.tools[c]||l.tools.cursor,this.fx=new s.Fx(c?c.fxType:s.PLAYERFX.NONE,{player:this}),this.fx.setVisible(a.misc.world.validMousePos(Math.floor(this.endX/16),Math.floor(this.endY/16))),this.rgb=o,this.htmlRgb=i.colorUtils.toHTML(i.colorUtils.u24_888(o[0],o[1],o[2])),this.clr=(67283*(u+75387)+53143)%256<<16|(4673*(u+9283)+7483)%256<<8|3e3*u%256,this.clr=i.colorUtils.toHTML(this.clr);var d=document.createElement("tr");d.innerHTML="<td>"+this.id+"</td><td>"+Math.floor(t/16)+"</td><td>"+Math.floor(n/16)+"</td>",a.playerList[this.id]=d,a.playerListTable.appendChild(d)}return o(e,[{key:"update",value:function(e,t,n,o){this._x.val=e,this._y.val=t,this.tool=l.tools[o]||l.tools.cursor,this.fx.setRenderer((this.tool||{}).fxRenderer),this.fx.setVisible(a.misc.world.validMousePos(Math.floor(this.endX/16),Math.floor(this.endY/16))),this.rgb=n,this.htmlRgb=i.colorUtils.toHTML(i.colorUtils.u24_888(n[0],n[1],n[2])),a.playerList[this.id].childNodes[1].innerHTML=Math.floor(e/16),a.playerList[this.id].childNodes[2].innerHTML=Math.floor(t/16)}},{key:"disconnect",value:function(){this.fx.delete(),a.playerListTable.removeChild(a.playerList[this.id]),delete a.playerList[this.id]}},{key:"tileX",get:function(){return Math.floor(this.x/16)}},{key:"tileY",get:function(){return Math.floor(this.y/16)}},{key:"endX",get:function(){return this._x.end}},{key:"endY",get:function(){return this._y.end}},{key:"x",get:function(){return this._x.val}},{key:"y",get:function(){return this._y.val}}]),e}()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.definedProtos=void 0,t.resolveProtocols=function(){for(var e=0;e<r.options.serverAddress.length;e++){var t=r.options.serverAddress[e];t.proto=i[t.proto]}};var o=n(22),r=n(1),i=t.definedProtos={old:o.OldProtocol}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OldProtocol=t.captchaState=void 0;var o,r,i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=function e(t,n,o){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,n);if(void 0===r){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,o)}if("value"in r)return r.value;var a=r.get;return void 0!==a?a.call(o):void 0},s=n(23),l=n(1),c=n(0),u=n(12),d=n(9),h=n(3),f=n(24),p=(n(4),n(6)),m=(n(5),n(2));function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var g=t.captchaState={CA_WAITING:0,CA_VERIFYING:1,CA_VERIFIED:2,CA_OK:3,CA_INVALID:4},y=t.OldProtocol={class:null,chunkSize:16,netUpdateSpeed:20,clusterChunkAmount:64,maxWorldNameLength:24,worldBorder:1048575,chatBucket:[4,6],placeBucket:(o={},v(o,l.RANK.NONE,[0,1]),v(o,l.RANK.USER,[32,4]),v(o,l.RANK.MODERATOR,[32,2]),v(o,l.RANK.ADMIN,[32,0]),o),maxMessageLength:(r={},v(r,l.RANK.NONE,128),v(r,l.RANK.USER,128),v(r,l.RANK.MODERATOR,512),v(r,l.RANK.ADMIN,16384),r),tools:{id:{},0:"cursor",1:"move",2:"pipette",3:"eraser",4:"zoom",5:"fill",6:"paste",7:"export",8:"line",9:"protect",10:"copy"},misc:{worldVerification:4321,chatVerification:String.fromCharCode(10),tokenVerification:"CaptchA"},opCode:{client:{},server:{setId:0,worldUpdate:1,chunkLoad:2,teleport:3,setRank:4,captcha:5,setPQuota:6,chunkProtected:7,maxCount:8}}};for(var w in y.tools)+w>=0&&(y.tools.id[y.tools[w]]=+w);var b=function(e){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var o=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));a(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"hookEvents",o).call(o,o),o.lastSentX=0,o.lastSentY=0,o.playercount=1,o.worldName=n||l.options.defaultWorld,o.players={},o.chunksLoading={},o.waitingForChunks=0,o.id=null;var r=y.chatBucket;o.chatBucket=new d.Bucket(r[0],r[1]),r=y.placeBucket[p.player.rank],o.placeBucket=new d.Bucket(r[0],r[1]),o.interval=null,o.clet=null,o.joinFunc=function(){o.placeBucket.allowance=0,o.interval=setInterval((function(){return o.sendUpdates()}),1e3/y.netUpdateSpeed)};var i=function(e){o.placeBucket.infinite=e===l.RANK.ADMIN,m.elements.chatInput.maxLength=y.maxMessageLength[e]};return o.leaveFunc=function(){c.eventSys.removeListener(l.EVENTS.net.sec.rank,i)},c.eventSys.once(l.EVENTS.net.world.join,o.joinFunc),c.eventSys.on(l.EVENTS.net.sec.rank,i),o}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),i(t,[{key:"closeHandler",value:function(){a(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"closeHandler",this).call(this),clearInterval(this.interval),c.eventSys.emit(l.EVENTS.net.sec.rank,l.RANK.NONE),c.eventSys.removeListener(l.EVENTS.net.world.join,this.joinFunc),this.leaveFunc()}},{key:"messageHandler",value:function(e){var t=this;if("string"!=typeof(e=e.data)){var n=new DataView(e),o=y.opCode.server;switch(n.getUint8(0)){case o.setId:var r=n.getUint32(1,!0);this.id=r,c.eventSys.emit(l.EVENTS.net.world.join,this.worldName),c.eventSys.emit(l.EVENTS.net.world.setId,r),c.eventSys.emit(l.EVENTS.net.playerCount,this.playercount),c.eventSys.emit(l.EVENTS.net.chat,'[Server] Joined world: "'+this.worldName+'", your ID is: '+r+"!");break;case o.worldUpdate:for(var i=!1,a={},s=n.getUint8(1);s--;){i=!0;var m=n.getUint32(2+16*s,!0);if(m!==this.id){var v=n.getInt32(2+16*s+4,!0),w=n.getInt32(2+16*s+8,!0),b=n.getUint8(2+16*s+12),k=n.getUint8(2+16*s+13),x=n.getUint8(2+16*s+14),E=n.getUint8(2+16*s+15);a[m]={x:v,y:w,rgb:[b,k,x],tool:y.tools[E]},this.players[m]||(++this.playercount,c.eventSys.emit(l.EVENTS.net.playerCount,this.playercount),this.players[m]=!0)}}i&&c.eventSys.emit(l.EVENTS.net.world.playersMoved,a);var S=2+16*n.getUint8(1);i=!1,a=[];s=n.getUint16(S,!0);for(var T=0;T<s;T++){i=!0;var N=n.getUint32(2+S+15*T,!0),C=n.getInt32(2+S+15*T+4,!0),M=n.getInt32(2+S+15*T+8,!0),L=n.getUint8(2+S+15*T+12),P=n.getUint8(2+S+15*T+13),A=n.getUint8(2+S+15*T+14)<<16|P<<8|L;a.push({x:C,y:M,rgb:A,id:N})}i&&c.eventSys.emit(l.EVENTS.net.world.tilesUpdated,a),S+=15*n.getUint16(S,!0)+2;var _=!1;i=!1,a=[];for(var z=n.getUint8(S);z--;){i=!0;var R=n.getUint32(1+S+4*z,!0);a.push(R),this.players[R]&&this.playercount>1&&(_=!0,--this.playercount,delete this.players[R])}i&&(c.eventSys.emit(l.EVENTS.net.world.playersLeft,a),_&&c.eventSys.emit(l.EVENTS.net.playerCount,this.playercount));break;case o.chunkLoad:var O=n.getInt32(1,!0),F=n.getInt32(5,!0),I=n.getUint8(9),D=new Uint8Array(e,10,e.byteLength-10);D=(0,h.decompress)(D);for(var j=O+","+F,V=new Uint32Array(y.chunkSize*y.chunkSize),W=(s=0,0);s<D.length;s+=3){var U=D[s+2]<<16|D[s+1]<<8|D[s];V[W++]=4278190080|U}if(this.chunksLoading[j]){delete this.chunksLoading[j],0==--this.waitingForChunks&&(clearTimeout(this.clet),this.clet=setTimeout((function(){c.eventSys.emit(l.EVENTS.net.chunk.allLoaded)}),100));var X=new u.Chunk(O,F,V,I);c.eventSys.emit(l.EVENTS.net.chunk.load,X)}else c.eventSys.emit(l.EVENTS.net.chunk.set,O,F,V);break;case o.teleport:var Y=n.getInt32(1,!0),H=n.getInt32(5,!0);c.eventSys.emit(l.EVENTS.net.world.teleported,Y,H);break;case o.setRank:p.networkRankVerification[0]=n.getUint8(1),c.eventSys.emit(l.EVENTS.net.sec.rank,n.getUint8(1));break;case o.captcha:switch(n.getUint8(1)){case g.CA_WAITING:(0,f.loadAndRequestCaptcha)(),c.eventSys.once(l.EVENTS.misc.captchaToken,(function(e){var n=y.misc.tokenVerification+e;t.ws.send(n)}));break;case g.CA_OK:this.worldName=this.joinWorld(this.worldName)}break;case o.setPQuota:var B=n.getUint16(1,!0),K=n.getUint16(3,!0);this.placeBucket=new d.Bucket(B,K);break;case o.chunkProtected:var q=n.getInt32(1,!0),G=n.getInt32(5,!0),$=n.getUint8(9);c.eventSys.emit(l.EVENTS.net.chunk.lock,q,G,$);break;case o.maxCount:c.eventSys.emit(l.EVENTS.net.maxCount,n.getUint16(1,!0))}}else 0==e.indexOf("DEV")?c.eventSys.emit(l.EVENTS.net.devChat,e.slice(3)):c.eventSys.emit(l.EVENTS.net.chat,e)}},{key:"joinWorld",value:function(e){var t=function(e,t){var n=[],o="";e=e.toLowerCase();for(var r=0;r<e.length&&r<t;r++){var i=e.charCodeAt(r);(i<123&&i>96||i<58&&i>47||95==i||46==i)&&(o+=String.fromCharCode(i),n.push(i))}return[n,o]}(e,y.maxWorldNameLength);c.eventSys.emit(l.EVENTS.net.world.joining,e);for(var n=new ArrayBuffer(t[0].length+2),o=new DataView(n),r=t[0].length;r--;)o.setUint8(r,t[0][r]);return o.setUint16(t[0].length,y.misc.worldVerification,!0),this.ws.send(n),t[1]}},{key:"requestChunk",value:function(e,t){var n=y.worldBorder,o=e+","+t;if(!(e>n||t>n||e<~n||t<~n||this.chunksLoading[o])){this.chunksLoading[o]=!0,this.waitingForChunks++;var r=new ArrayBuffer(8),i=new DataView(r);i.setInt32(0,e,!0),i.setInt32(4,t,!0),this.ws.send(r)}}},{key:"allChunksLoaded",value:function(){return 0===this.waitingForChunks}},{key:"updatePixel",value:function(e,t,n){var o=Math.trunc(e/y.chunkSize)-Math.trunc(this.lastSentX/(16*y.chunkSize));o*=o;var r=Math.trunc(t/y.chunkSize)-Math.trunc(this.lastSentY/(16*y.chunkSize));r*=r;var i=Math.sqrt(o+r);if(this.isConnected()&&(i<3||p.player.rank==l.RANK.ADMIN)&&this.placeBucket.canSpend(1)){var a=new ArrayBuffer(11),s=new DataView(a);return s.setInt32(0,e,!0),s.setInt32(4,t,!0),s.setUint8(8,n[0]),s.setUint8(9,n[1]),s.setUint8(10,n[2]),this.ws.send(a),!0}return!1}},{key:"sendUpdates",value:function(){var e=m.mouse.worldX,t=m.mouse.worldY,n=this.lastSentX,o=this.lastSentY;if(this.isConnected()&&(0,p.shouldUpdate)()||e!=n||t!=o){var r=p.player.selectedColor;this.lastSentX=e,this.lastSentY=t;var i=new ArrayBuffer(12),a=new DataView(i);a.setInt32(0,e,!0),a.setInt32(4,t,!0),a.setUint8(8,r[0]),a.setUint8(9,r[1]),a.setUint8(10,r[2]);var s=p.player.tool,l=null!==s?+y.tools.id[s.id]:0;a.setUint8(11,l),this.ws.send(i)}}},{key:"sendMessage",value:function(e){if(e.length&&null!==this.id)return p.player.rank==l.RANK.ADMIN||this.chatBucket.canSpend(1)?(this.ws.send(e+y.misc.chatVerification),!0):(c.eventSys.emit(l.EVENTS.net.chat,"Slow down! You're talking too fast!"),!1)}},{key:"protectChunk",value:function(e,t,n){var o=new ArrayBuffer(10),r=new DataView(o);r.setInt32(0,e,!0),r.setInt32(4,t,!0),r.setUint8(8,n),this.ws.send(o),c.eventSys.emit(l.EVENTS.net.chunk.lock,e,t,n,!0)}},{key:"setChunk",value:function(e,t,n){if(!(p.player.rank==l.RANK.ADMIN||p.player.rank==l.RANK.MODERATOR&&this.placeBucket.canSpend(1.25)))return!1;var o=new Uint8Array(8+y.chunkSize*y.chunkSize*3),r=new DataView(o.buffer);r.setInt32(0,e,!0),r.setInt32(4,t,!0);for(var i=0,a=8;i<n.length;i++,a+=3)o[a]=255&n[i],o[a+1]=n[i]>>8&255,o[a+2]=n[i]>>16&255;return this.ws.send(o.buffer),!0}},{key:"clearChunk",value:function(e,t,n){if(p.player.rank==l.RANK.ADMIN||p.player.rank==l.RANK.MODERATOR&&this.placeBucket.canSpend(1)){var o=new ArrayBuffer(13),r=new DataView(o);return r.setInt32(0,e,!0),r.setInt32(4,t,!0),r.setUint8(8,n[0]),r.setUint8(9,n[1]),r.setUint8(10,n[2]),this.ws.send(o),!0}return!1}}]),t}(s.Protocol);y.class=b},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Protocol=void 0;var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=n(1),i=n(0);t.Protocol=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.ws=t}return o(e,[{key:"hookEvents",value:function(e){this.ws.addEventListener("message",e.messageHandler.bind(e)),this.ws.addEventListener("open",e.openHandler.bind(e)),this.ws.addEventListener("close",e.closeHandler.bind(e))}},{key:"isConnected",value:function(){return this.ws.readyState===WebSocket.OPEN}},{key:"openHandler",value:function(){i.eventSys.emit(r.EVENTS.net.connected)}},{key:"closeHandler",value:function(){i.eventSys.emit(r.EVENTS.net.disconnected)}},{key:"messageHandler",value:function(e){}},{key:"joinWorld",value:function(e){}},{key:"requestChunk",value:function(e,t){}},{key:"updatePixel",value:function(e,t,n){}},{key:"sendUpdates",value:function(){}},{key:"sendMessage",value:function(e){}}]),e}()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.loadAndRequestCaptcha=function(){"owopcaptcha"in localStorage?setTimeout((function(){r.eventSys.emit(o.EVENTS.misc.captchaToken,"LETMEINPLZ"+localStorage.owopcaptcha)}),0):(e=l,window.grecaptcha?e():window.callback?window.callback=function(){e(),this()}.bind(window.callback):(window.callback=function(){delete window.callback,e()},r.eventSys.emit(o.EVENTS.misc.loadingCaptcha),(0,i.loadScript)("https://www.google.com/recaptcha/api.js?onload=callback&render=explicit")));var e};var o=n(1),r=n(0),i=n(3),a=n(11),s=(n(2),"6LcgvScUAAAAAARUXtwrM8MP0A0N70z4DHNJh-KI");function l(){a.windowSys.addWindow(new a.GUIWindow("Verification needed",{centered:!0},(function(e){grecaptcha.render(e.addObj((0,i.mkHTML)("div",{id:"captchawdow"})),{theme:"light",sitekey:s,callback:function(t){r.eventSys.emit(o.EVENTS.misc.captchaToken,t),e.close()}});e.frame.style.cssText="",e.container.style.cssText="overflow: hidden; background-color: #F9F9F9"})))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createContextMenu=function(e,t,n){o&&i();r.innerHTML="";for(var a=0;a<n.length;a++){var s=document.createElement("button");s.textContent=n[a][0],s.addEventListener("click",n[a][1]),r.appendChild(s)}document.body.appendChild(r),o=!0;var l=r.offsetHeight;console.log(l),t+l>window.innerHeight-20?r.style.top=t-l+"px":r.style.top=t+"px";r.style.left=e+"px",document.addEventListener("click",i)};var o=!1,r=document.createElement("div");function i(e){document.body.removeChild(r),document.removeEventListener("click",i),o=!1}r.className="context-menu"},function(e,t,n){e.exports=n.p+"audio/launch.mp3"},function(e,t,n){e.exports=n.p+"audio/place.mp3"},function(e,t,n){e.exports=n.p+"audio/click.mp3"},function(e,t,n){"use strict";e.exports=n.p+"polyfill/canvas-toBlob.js"}]);// ==UserScript==
// @name         Neko's Scripts
// @namespace    http://tampermonkey.net/
// @version      1.1.6
// @description  Script for OWOP
// @author       NekoNoka
// @match        https://ourworldofpixels.com/*
// @exclude      https://ourworldofpixels.com/api*
// @run-at       document-start
// @icon         https://www.google.com/s2/favicons?sz=64&domain=ourworldofpixels.com
// @grant        none
// @unwrap
// @downloadURL https://update.greasyfork.org/scripts/445667/Neko%27s%20Scripts.user.js
// @updateURL https://update.greasyfork.org/scripts/445667/Neko%27s%20Scripts.meta.js
// ==/UserScript==

'use strict';

const IMPORTS = (function () {
    let NS = undefined;

    const log = (function () {
        const colors = {
            // background
            // background-color
            // brightness()?
            // box-shadow?
            // color
            // display
            // flex?
            // font-weight
            // grayscale()?
            // hue-rotate()?
            // hsl()?
            // hsla()?
            // height?
            // width?
            // line-height?
            // margin, padding, border?
            // max-height, max-width?
            // outline?
            // position?
            // rgb(), rgba()?
            // rotate?
            // saturate?
            // scale?
            // skew()?
            // top, right, left, bottom?
            // transform?
            // translate?

            // bright: "filter:brightness(1.2);", // apparently doesnt do anything on text
            // dim: "filter:brightness(0.7);",

            black: "color:black;",
            red: "color:red;",
            green: "color:green;",
            yellow: "color:yellow;",
            blue: "color:blue;",
            magenta: "color:magenta;",
            cyan: "color:cyan;",
            white: "color:white;",
            gray: "color:gray;",
            grey: "color:grey;",

            bgblack: "background-color:black",
            bgred: "background-color:red",
            bggreen: "background-color:green",
            bgyellow: "background-color:yellow",
            bgblue: "background-color:blue",
            bgmagenta: "background-color:magenta",
            bgcyan: "background-color:cyan",
            bgwhite: "background-color:white",
            bggray: "background-color:gray",
            bggrey: "background-color:grey"
        }
        return function (modifierList, ...message) {
            message = message.join(" ");
            if (message === "") {
                message = modifierList;
                modifierList = "";
            }
            let styling = "";
            modifierList.toLowerCase().split(" ").forEach(c => (c in colors) ? styling += colors[c] : styling += c);
            console.log(`%c${message}`, `${styling}`);
        }
    })();

    const rangeMap = (a, b) => s => {
        const [a1, a2] = a;
        const [b1, b2] = b;
        // Scaling up an order, and then down, to bypass a potential,
        // precision issue with negative numbers.
        return (((((b2 - b1) * (s - a1)) / (a2 - a1)) * 10) + (10 * b1)) / 10;
    }

    const clamp = v => Math.round(Math.max(Math.min(v, 255), 0));

    const degToRad = d => d * (Math.PI / 180);

    const radToDeg = r => r / (Math.PI / 180);

    const modulo = (i, m) => i - m * Math.floor(i / m);

    const line = (x1, y1, x2, y2, m, e, plot) => {
        if (x1 === undefined || y1 === undefined || x2 === undefined || y2 === undefined) return console.error();
        let dx = Math.abs(x2 - x1);
        let sx = x1 < x2 ? 1 : -1;
        let dy = -Math.abs(y2 - y1);
        let sy = y1 < y2 ? 1 : -1;
        let err = dx + dy;
        let e2 = undefined;

        if (e?.type === "mousemove") {
            if (x1 === x2 && y1 === y2) return;
            e2 = 2 * err;
            if (e2 >= dy) {
                err += dy;
                x1 += sx;
            }
            if (e2 <= dx) {
                err += dx;
                y1 += sy;
            }
        }
        let i = 0;
        while (true) {
            plot(x1, y1, i);
            i++;
            if (x1 === x2 && y1 === y2) break;
            e2 = 2 * err;
            if (e2 >= dy) {
                err += dy;
                x1 += sx;
            }
            if (e2 <= dx) {
                err += dx;
                y1 += sy;
            }
        }
        return [i];
    }

    const mkHTML = (e, t) => {
        let n = document.createElement(e);
        for (let o in t) n[o] = t[o];
        return n;
    }

    const setImageData = data => {
        let c = document.createElement('canvas');
        let w = data[0].length;
        let h = data.length;
        c.width = w;
        c.height = h;
        let ctx = c.getContext('2d');
        let d = ctx.createImageData(w, h);
        for (let j = 0; j < h; j++) {
            for (let i = 0; i < w; i++) {
                let r = data[j][i][0];
                let g = data[j][i][1];
                let b = data[j][i][2];
                let a = r === 255 && g === 255 && b === 255 ? 0 : 255;
                d.data[4 * (j * w + i)] = r;
                d.data[4 * (j * w + i) + 1] = g;
                d.data[4 * (j * w + i) + 2] = b;
                d.data[4 * (j * w + i) + 3] = a;
            }
        }
        ctx.putImageData(d, 0, 0);
        return c;
    }

    const getImageData = image => {
        let c = document.createElement('canvas');
        let ctx = c.getContext('2d');
        if (image instanceof HTMLCanvasElement) {
            c = image;
        } else if (image instanceof Image) {
            c.width = image.width;
            c.height = image.height;
            ctx.drawImage(image, 0, 0);
        } else return false;
        let w = c.width
        let h = c.height;
        let d = ctx.getImageData(0, 0, w, h);
        let data = [];
        for (let j = 0; j < h; j++) {
            data.push([]);
            for (let i = 0; i < w; i++) {
                let c = [];
                c.push(d.data[4 * (j * w + i)]);
                c.push(d.data[4 * (j * w + i) + 1]);
                c.push(d.data[4 * (j * w + i) + 2]);
                c.push(d.data[4 * (j * w + i) + 3]);
                data[j].push(c);
            }
        }
        return data;
    }

    class Point {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.acx = x - 16 * (this.cx = Math.floor(x / 16));
            this.acy = y - 16 * (this.cy = Math.floor(y / 16));
        }
        static distance(p1, p2) {
            if (p1 instanceof Point && p2 instanceof Point) return Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2);
        }
    }

    class BPoint extends Point {
        constructor(x, y) {
            super(x, y);
            this.bottom = false;
            this.right = false;
        }
        static check(bp1, bp2, direction) {
            let p1 = NS.PM.queue[`${bp1.x},${bp1.y}`];
            let p2 = NS.PM.queue[`${bp2.x},${bp2.y}`];
            return bp1[direction] = (!!p1 && !p2) || (!p1 && !!p2);
        }
    }

    class Color {
        constructor(c) {
            this.rgb = c;
            this.int = Color.toInt(c);
            this.hex = Color.toHex(c);
        }
        static hue(d, b = 1) {
            let a = 256 / b; // 1   2   4  8  16 32 64 128 256
            // let b = mul;  // 256 128 64 32 16 8  4  2   1
            d = Math.floor(d); // im not sure this is needed
            // d = d % (b * 6); m_{F}\left(a,b\right)=a-b\operatorname{floor}\left(\frac{a}{b}\right)
            // d = (Math.abs(Math.floor(d / (b * 6)) * ((b * 6))) + (d % (b * 6))) % (b * 6);
            d = modulo(d, b * 6);
            // d = d - (b * 6) * ~~(d/(b * 6));
            let nD = Math.floor(Math.abs(d / b));
            let output = [0, 0, 0];
            if (nD < 1) {
                output = [255, 0, (d % b) * a];
            } else if (nD < 2) {
                output = [255 - ((d % b) * a), 0, 255];
            } else if (nD < 3) {
                output = [0, (d % b) * a, 255];
            } else if (nD < 4) {
                output = [0, 255, 255 - ((d % b) * a)];
            } else if (nD < 5) {
                output = [(d % b) * a, 255, 0];
            } else if (nD < 6) {
                output = [255, 255 - ((d % b) * a), 0];
            }
            return output;
            // return Color.toInt(output);
        }
        static toHex(c) {
            return "#" + c.map(v => {
                return ('0' +
                    Math.min(Math.max(parseInt(v), 0), 255)
                        .toString(16)
                ).slice(-2);
            }).join('');
        }
        static toBGRInt(c) {
            return (c[2] << 16 & 16711680) | (c[1] << 8 & 65280) | (c[0] & 255);
        }
        static toInt(c) {
            return (c[0] << 16 & 16711680) | (c[1] << 8 & 65280) | (c[2] & 255);
        }
        static fromInt(n) {
            return [(n & 16711680) >> 16, (n & 65280) >> 8, n & 255];
        }
    }

    class RGBRotate {
        constructor(degrees) {
            this.matrix = [[1, 0, 0], [0, 1, 0], [0, 0, 1]];
            this.set_hue_rotation(degrees);
        }
        set_hue_rotation(degrees) {
            let cosA = Math.cos(degToRad(degrees));
            let sinA = Math.sin(degToRad(degrees));
            this.matrix[0][0] = cosA + (1 - cosA) / 3;
            this.matrix[0][1] = 1 / 3 * (1 - cosA) - Math.sqrt(1 / 3) * sinA;
            this.matrix[0][2] = 1 / 3 * (1 - cosA) + Math.sqrt(1 / 3) * sinA;
            this.matrix[1][0] = 1 / 3 * (1 - cosA) + Math.sqrt(1 / 3) * sinA;
            this.matrix[1][1] = cosA + 1 / 3 * (1 - cosA);
            this.matrix[1][2] = 1 / 3 * (1 - cosA) - Math.sqrt(1 / 3) * sinA;
            this.matrix[2][0] = 1 / 3 * (1 - cosA) - Math.sqrt(1 / 3) * sinA;
            this.matrix[2][1] = 1 / 3 * (1 - cosA) + Math.sqrt(1 / 3) * sinA;
            this.matrix[2][2] = cosA + 1 / 3 * (1 - cosA);
        }
        apply(r, g, b) {
            let rx = r * this.matrix[0][0] + g * this.matrix[0][1] + b * this.matrix[0][2];
            let gx = r * this.matrix[1][0] + g * this.matrix[1][1] + b * this.matrix[1][2];
            let bx = r * this.matrix[2][0] + g * this.matrix[2][1] + b * this.matrix[2][2];
            return [clamp(rx), clamp(gx), clamp(bx)];
        }
    }

    class Pixel extends Point {
        constructor(x, y, c, o = false) {
            super(x, y);
            this.c = new Color(c);
            this.o = o;
            this.placed = false;
            this.g = false;
            this.time = 0;
        }
    }

    class Chunk {
        constructor(p) {
            this.t = 0;
            this.pixels = Array(256).fill(undefined);
            this.data = Array(256).fill(-1);
            this.placed = true;
            for (let j = 0; j < 16; j++) {
                for (let i = 0; i < 16; i++) {
                    this.data[j * 16 + i] = Color.toBGRInt(OWOP.world.getPixel(p.cx * 16 + i, p.cy * 16 + j));
                }
            }
        }
        setPixel(p) {
            this.pixels[`${p.acx},${p.acy}`] = p;
            if (this.data[p.acy * 16 + p.acx] === Color.toBGRInt(p.c.rgb)) return;
            this.data[p.acy * 16 + p.acx] = Color.toBGRInt(p.c.rgb);
            this.t = new Date().getTime();
            this.placed = false;
        }
        deletePixel(p) {
            this.pixels[`${p.acx},${p.acy}`] = undefined;
        }
        setChunkColor(c) { // i dont think im gonna use this
            this.data.fill(c);
        }
    }

    class Action {
        constructor(p1, p2) {
            this.x = p1.x;
            this.y = p1.y;
            this.before_color = p1.c;
            this.after_color = p2.c;
        }
        undo() {
            return this.before_color;
        }
        redo() {
            return this.after_color;
        }
    }

    class PixelManager {
        constructor() {
            // ! MARK FOR CHANGE
            // NS.chunkize = false;
            this.undoStack = [];
            this.redoStack = [];
            this.actionStack = {};
            this.record = false;
            this.queue = {};
            this.chunkQueue = {};
            this.moveQueue = {};
            this.border = {};
            this.checkMove = true;
            this.renderBorder = false;
            this.autoMove = false;
            this.enableMod = true;
            this.whitelist = {};
            this.enabled = true;
            this.extra = {};
            this.extra.placeData = [];
            this.extra.chunkPlaceData = [];
            let p1 = new Point(0, 0);
            for (let y = -47; y < 47; y++) {
                for (let x = -47; x < 47; x++) {
                    let p2 = new Point(x, y);
                    let d = Point.distance(p1, p2);
                    this.extra.placeData.push([d, p2]);
                }
            }
            for (let y = -25; y < 26; y++) {
                for (let x = -25; x < 26; x++) {
                    let p2 = new Point(x, y);
                    let d = Point.distance(p1, p2);
                    this.extra.chunkPlaceData.push([d, p2]);
                }
            }
            this.extra.placeData.sort((a, b) => a[0] - b[0]);
            this.extra.chunkPlaceData.sort((a, b) => a[0] - b[0]);
        }
        setup() {
            OWOP.on(OWOP.events.tick, function () {
                this.enabled ? this.placePixel() : void 0
            }.bind(this));
            OWOP.on(OWOP.events.net.world.tilesUpdated, function (message) {
                for (let i = 0; i < message.length; i++) {
                    let p = message[i];
                    if (p.id === OWOP.player.id) continue;
                    let placedColor = [(p.rgb & (255 << 0)) >> 0, (p.rgb & (255 << 8)) >> 8, (p.rgb & (255 << 16)) >> 16];
                    if (this.whitelist[p.id]) this.setPixel(p.x, p.y, placedColor);
                    let pixel = this.queue[`${p.x},${p.y}`];
                    if (pixel) {
                        this.checkMove = true;
                        pixel.placed = false;
                        this.moveQueue[`${Math.floor(p.x / 16)},${Math.floor(p.y / 16)}`] = true;
                        this.chunkQueue[`${pixel.cx},${pixel.cy}`].placed = false;
                        this.chunkQueue[`${pixel.cx},${pixel.cy}`].t = new Date().getTime();
                        this.updateBorder(p.x, p.y);
                    }
                }
            }.bind(this));
            OWOP.on(OWOP.events.net.world.leave, function () {
                // OWOP.sounds.play(OWOP.sounds.launch);
                this.disable();
                console.log(arguments, "leave");
            }.bind(this));
            OWOP.on(OWOP.events.net.world.join, function () {
                this.enable();
                console.log(arguments, "join");
            }.bind(this));
        }
        moveToNext() {
            if (!this.autoMove) return;
            if (!this.checkMove) return;
            for (let e in this.moveQueue) {
                if (this.moveQueue[e]) {
                    let [x, y] = e.split(",");
                    for (let i = 0; i < 16; i++) {
                        for (let j = 0; j < 16; j++) {
                            let p = this.queue[`${x * 16 + i},${y * 16 + j}`];
                            if (p)
                                if (!p?.placed) return OWOP.emit(29, x * 16, y * 16);
                        }
                    }
                    this.moveQueue[e] = false;
                }
            }
            this.checkMove = false;
        }
        updateBorder(x, y) {
            let p = this.border[`${x},${y}`];
            if (!p) p = this.border[`${x},${y}`] = new BPoint(x, y);

            let t = this.border[`${x},${y - 1}`];
            let l = this.border[`${x - 1},${y}`];
            let b = this.border[`${x},${y + 1}`];
            let r = this.border[`${x + 1},${y}`];

            if (!t) t = new BPoint(x, y - 1);
            if (!l) l = new BPoint(x - 1, y);
            if (!b) b = new BPoint(x, y + 1);
            if (!r) r = new BPoint(x + 1, y);
            if (BPoint.check(t, p, "bottom") && (t.bottom || t.right)) this.border[`${x},${y - 1}`] = t;
            if (BPoint.check(l, p, "right") && (l.bottom || l.right)) this.border[`${x - 1},${y}`] = l;
            if (BPoint.check(p, b, "bottom") && (b.bottom || b.right)) this.border[`${x},${y + 1}`] = b;
            if (BPoint.check(p, r, "right") && (r.bottom || r.right)) this.border[`${x + 1},${y}`] = r;
        }
        undo() {
            if (!this.enabled) return;
            if (!this.undoStack.length) return;
            let actionList = this.undoStack.pop();
            for (let index in actionList) {
                let action = actionList[index];
                if (!this.queue[`${action.x},${action.y}`] && (delete actionList[index], true)) continue;
                this.setPixel(action.x, action.y, action.undo().rgb);
            }
            if (!Object.keys(actionList).length) {
                this.undo();
                return;
            }
            this.redoStack.push(actionList);
        }
        redo() {
            if (!this.enabled) return;
            if (!this.redoStack.length) return;
            let actionList = this.redoStack.pop();
            for (let index in actionList) {
                let action = actionList[index];
                if (!this.queue[`${action.x},${action.y}`] && (delete actionList[index], true)) continue;
                this.setPixel(action.x, action.y, action.redo().rgb);
            }
            if (!Object.keys(actionList).length) {
                this.redo();
                return;
            }
            this.undoStack.push(actionList);
        }
        startHistory() {
            this.record = true;
        }
        endHistory() {
            if (!this.record) return;
            this.record = false;
            if (Object.keys(this.actionStack).length) this.undoStack.push(this.actionStack);
            this.actionStack = {};
            this.redoStack = [];
        }
        enable() {
            this.enabled = true;
        }
        disable() {
            this.enabled = false;
        }
        clearQueue() {
            this.queue = {};
            this.chunkQueue = {};
            this.moveQueue = {};
            this.border = {};
        }
        unsetPixel(x, y) {
            if (this.queue[`${x},${y}`]) this.deletePixel(new Point(x, y));
            return true;
        }
        deletePixel(p) {
            delete this.queue[`${p.x},${p.y}`];
            this.chunkQueue[`${p.cx},${p.cy}`].deletePixel(p);
            let found = undefined;
            // ! MARK FOR DELETION
            // i can remove this if i develop the chunks system to manage movequeue
            for (let i = 0; i < 16; i++) {
                for (let j = 0; j < 16; j++) {
                    found = this.queue[`${p.cx * 16 + i},${p.cy * 16 + j}`];
                    if (found) break;
                }
                if (found) break;
            }
            if (!found) delete this.moveQueue[`${p.cx},${p.cy}`];
            this.updateBorder(p.x, p.y);
        }
        setPixel(x, y, c, placeOnce = false) {
            if (!this.enabled) return OWOP.world.setPixel(x, y, c);
            if (!Number.isInteger(x) || !Number.isInteger(y)) return false;
            if (!Array.isArray(c) || c.length < 3 || c.length > 4) return false;
            if (c.length === 4) c.pop();
            if (c.find(e => !Number.isInteger(e) || e < 0 || e > 255) !== undefined) return false;
            let p = new Pixel(x, y, c, placeOnce);
            if (!NS.PM.ignoreProtectedChunks && OWOP.misc._world.protectedChunks[`${p.cx},${p.cy}`]) return false;
            if (this.record) {
                let stack = this.actionStack[`${x},${y}`];
                if (!(stack instanceof Action)) {
                    let beforePixel = new Pixel(x, y, this.getPixel(x, y, 1));
                    if (beforePixel.c !== p.c) this.actionStack[`${x},${y}`] = new Action(beforePixel, p);
                } else {
                    stack.after_color = c;
                }
            }
            this.queue[`${p.x},${p.y}`] = p;
            if (!this.chunkQueue[`${p.cx},${p.cy}`]) this.chunkQueue[`${p.cx},${p.cy}`] = new Chunk(p);
            this.chunkQueue[`${p.cx},${p.cy}`].setPixel(p);
            this.moveQueue[`${p.cx},${p.cy}`] = true;
            this.updateBorder(p.x, p.y);
            this.checkMove = true;
            return true;
        }
        getPixel(x, y, a = true) {
            if (!Number.isInteger(x) || !Number.isInteger(y)) return console.error("There is no inputs in \"getPixel\" on PixelManager instance.");
            if (a && this.queue[`${x},${y}`]?.c?.rgb) return this.queue[`${x},${y}`].c.rgb;
            try {
                OWOP.world.getPixel;
            } catch (e) {
                return undefined;
            }
            return OWOP.world.getPixel(x, y);
        }
        placePixel() {
            if (OWOP.player.rank > 1 && this.enableMod) {
                let cx = Math.floor(OWOP.mouse.tileX / 16);
                let cy = Math.floor(OWOP.mouse.tileY / 16);
                for (let i = 0; i < this.extra.chunkPlaceData.length; i++) {
                    let e = this.extra.chunkPlaceData[i][1];
                    let xchunk = cx + e.x;
                    let ychunk = cy + e.y;
                    let currentChunk = this.chunkQueue[`${xchunk},${ychunk}`];
                    if (!currentChunk || currentChunk.placed || (new Date().getTime() - currentChunk.t) <= 1) continue;
                    let k = !OWOP.net.protocol.setChunk(xchunk, ychunk, currentChunk.data);
                    if (k) break;
                    for (let p of currentChunk.pixels) {
                        if (!p) continue;
                        p.placed = true;
                    }
                    currentChunk.placed = true;
                }
            } else {
                for (let i = 0; i < this.extra.placeData.length; i++) {
                    let e = this.extra.placeData[i][1];
                    let tX = OWOP.mouse.tileX;
                    let tY = OWOP.mouse.tileY;
                    let p = this.queue[`${tX + e.x},${tY + e.y}`];
                    if (!p) continue;
                    if (!NS.PM.ignoreProtectedChunks && OWOP.misc._world.protectedChunks[`${p.cx},${p.cy}`]) continue;
                    let xcc = Math.floor(tX / 16) * 16;
                    let ycc = Math.floor(tY / 16) * 16;
                    if (p.x < (xcc - 31) || p.y < (ycc - 31) || p.x > (xcc + 46) || p.y > (ycc + 46)) continue;
                    let c = this.getPixel(p.x, p.y, 0);
                    if (!c) continue;
                    if (p.c.int !== Color.toInt(c)) {
                        if (!p.placed) {
                            if (!(p.placed = OWOP.world.setPixel(p.x, p.y, p.c.rgb))) break;
                        } else {
                            if (!p.time) p.time = new Date().getTime();
                            if (new Date().getTime() - p.time > 0.25e3) {
                                if (p.g) {
                                    p.g = false;
                                    p.placed = false;
                                    p.time = 0;
                                } else {
                                    let c = Color.fromInt(Math.floor(Math.random() * 16777215));
                                    OWOP.world.setPixel(p.x, p.y, c);
                                    p.g = true;
                                    p.time = new Date().getTime();
                                }
                            }
                        }
                    } else if ((p.o && this.deletePixel(p), p.placed = true)) continue;
                }
            }
            this.moveToNext();
        }
    }

    // mouse down, mouse up, mouse move, tick, player join, player leave, pixel placed
    class EventEmitter {
        constructor(name = "Emitter") {
            this.table = {};
            this.name = name;
        }
        on(eventName, callBack) {
            let temp = this.table[eventName];
            if (temp) temp.push(callBack);
            else this.table[eventName] = [callBack];
            log("green", `added event ${eventName} to ${this.name}`);
        }
        emitQuiet(eventName, ...args) {
            this.table[eventName]?.forEach((callBack) => callBack(...args));
        }
        emit(eventName, ...args) {
            log("cyan", eventName, this.table[eventName], args);
            this.table[eventName]?.forEach((callBack) => callBack(...args));
            log("white", `emitted event ${eventName} using ${this.name}`);
        }
    }

    class Tool {
        constructor(name, rank, _callback) {
            this.name = name || Math.floor(Math.random() * 1000 + "");
            // this.cursorblob = cursor.img.shadowblob;
            // this.cursor = cursor.img.shadowed;
            // this.setposition = (-cursor.imgpos[0] * 36) + "px " + (-cursor.imgpos[1] * 36) + "px";
            // this.offset = cursor.hotspot;
            this.rank = rank;
            this.events = [];
            this.fxRenderer = null;
        }
        setFxRenderer(func) {
            this.fxRenderer = func;
        }
        setEvent(type, func) {
            let events = type.split(' ');
            for (let i = 0; i < events.length; i++) {
                this.events[events[i]] = func || null;
            }
        }
    }

    // for making the plain window without features
    class _NSWindows {
        static base() {
            undefined;
        }
    }

    class GUIWindow {
        constructor(title, options = { close: true, lock: true, minimize: false }, initfunc) {
            if (!title) throw Error("Title Required");
            this.title = title;
            this.options = options;
            this.frame = document.createElement("div");
            this.container = document.createElement("div");
            this.settings = NS.localStorage.settings[title];
            if (!this.settings) {
                this.settings = { x: window.innerWidth / 3, y: window.innerHeight / 3 };
            }
            this.x = this.settings.x;
            this.y = this.settings.y;
            this.move(this.x, this.y);
            this.container.className = "wincontainer";
            if (this.title) {
                this.titlespan = document.createElement("span");
                this.titlespan.innerHTML = title;
                this.titlespan.classList.add("windowtitle");
                this.frame.appendChild(this.titlespan);
            }
            this.frame.appendChild(this.container);
            if (this.options.centered) {
                this.options.immobile = !0;
                this.frame.className = "centered";
            }
            this.currentaction = null;
            if (initfunc) initfunc(this);
            if (this.options.centerOnce) {
                this.move(window.innerWidth / 2 - this.realw / 2 | 0, window.innerHeight / 2 - this.realh / 2 | 0);
            }
            this.listeners = [this.mdownfunc.bind(this), this.mupfunc.bind(this), this.mmovefunc.bind(this)];
            this.frame.addEventListener("mousedown", this.listeners[0]);
            window.addEventListener("mouseup", this.listeners[1]);
            window.addEventListener("mousemove", this.listeners[2]);
            this.onclose = undefined;
            this.onlock = undefined;
            this.onminimize = undefined;
            let count = 0;
            if (this.options.close) {
                if (this.settings.closed === undefined) {
                    // this.settings.closed = false;
                }
                this.closed = false;
                this.windowbutton = document.createElement("button");
                this.windowbutton.classList.add("optionButton");
                this.windowbutton.innerHTML = this.settings.closed ? "off" : "on";
                this.windowbutton.onclick = this.toggleclose.bind(this);
                this.closeButton = document.createElement("button");
                this.closeButton.classList.add("ns_button");
                this.closeButton.style["right"] = count * 23 + "px";
                this.closeButton.style["background-image"] = `url(${NS.dataImages.close})`;
                this.closeButton.onclick = this.toggleclose.bind(this);
                this.toggleclose();
                this.frame.appendChild(this.closeButton);
                count++;
            }
            if (this.options.lock) {
                if (this.settings.locked === undefined) {
                    // this.settings.locked = false;
                }
                this.locked = false;
                this.lockButton = document.createElement("button");
                this.lockButton.classList.add("ns_button");
                this.lockButton.style["right"] = count * 23 + "px";
                this.lockButton.style["background-image"] = `url(${NS.dataImages.lock})`;
                this.lockButton.onclick = this.togglelock.bind(this);
                this.frame.appendChild(this.lockButton);
                count++;
            }
            if (this.options.minimize) {
                if (this.settings.minimized === undefined) {
                    // this.settings.minimized = false;
                }
                this.minimized = false;
                this.minimizeButton = document.createElement("button");
                this.minimizeButton.classList.add("ns_button");
                this.minimizeButton.style["right"] = count * 23 + "px";
                this.minimizeButton.style["background-image"] = `url(${NS.dataImages.minimize})`;
                this.minimizeButton.onclick = this.toggleminimize.bind(this);
                this.frame.appendChild(this.minimizeButton);
                count++;
            }
            OWOP.elements.windows.appendChild(this.frame);
            NS.localStorage.settings[this.title] = this.settings;
            localStorage.NS = JSON.stringify(NS.localStorage);
        }
        show() {
            this.visible = true;
            this.frame.style.visibility = "visible";
            return this;
        }
        hide() {
            this.visible = false;
            this.frame.style.visibility = "hidden";
            return this;
        }
        close() {
            OWOP.elements.windows.removeChild(this.frame);
        }
        toggleVisibility() {
            this.visible = !this.visible;
            this.visible ? this.frame.style.visibility = "visible" : this.frame.style.visibility = "hidden";
            return this;
        }
        toggleclose() {
            if (this.options.close) {
                if (this.closed) {
                    this.closed = false;
                    this.windowbutton.classList.add("on");
                    this.windowbutton.innerHTML = "on";
                    this.show();
                    if (onclose) onclose();
                } else {
                    this.closed = true;
                    this.windowbutton.classList.remove("on");
                    this.windowbutton.innerHTML = "off";
                    this.hide();
                    if (onclose) onclose();
                }
            }
            return this;
        }
        togglelock() {
            if (this.options.lock) {
                if (this.locked) {
                    this.locked = false;
                    this.lockButton.style["background-image"] = `url(${NS.dataImages.lock})`;
                    this.options.immobile = false;
                } else {
                    this.locked = true;
                    this.lockButton.style["background-image"] = `url(${NS.dataImages.unlock})`;
                    this.options.immobile = true;
                }
            }
            return this;
        }
        toggleminimize() {
            if (this.options.minimize) {
                if (this.minimized) {
                    this.minimized = false;
                    this.minimizeButton.style["background-image"] = `url(${NS.dataImages.minimize})`;
                    document.getElementById("optionsMaximize").style = "display: none;";
                    document.getElementById("optionsMinimize").style = "display: flex;";
                } else {
                    this.minimized = true;
                    this.minimizeButton.style["background-image"] = `url(${NS.dataImages.maximize})`;
                    document.getElementById("optionsMaximize").style = "display: flex;";
                    document.getElementById("optionsMinimize").style = "display: none;";
                }
            }
            return this;
        }
        addObj(e) {
            this.container.appendChild(e);
            return this;
        }
        move(x, y) {
            if (!this.options.immobile) {
                this.frame.style.transform = 'translate(' + x + 'px,' + y + 'px)';
                this.x = x;
                this.y = y;
            }
            return this;
        }
        mdownfunc(e) {
            let t = e.clientX - this.x;
            let n = e.clientY - this.y;
            if (e.target === this.frame) {
                this.currentaction = function (e, o) {
                    e = e <= 0 ? 0 : e > window.innerWidth ? window.innerWidth : e, o = o <= 0 ? 0 : o > window.innerHeight ? window.innerHeight : o;
                    this.move(e - t, o - n);
                }
            }
        }
        mupfunc(_e) {
            if (!this.options.immobile) {
                this.settings.x = this.x;
                this.settings.y = this.y;
                NS.localStorage.settings[this.title] = this.settings;
                localStorage.NS = JSON.stringify(NS.localStorage);
            }
            this.currentaction = null;
        }
        mmovefunc(e) {
            if (this.currentaction) this.currentaction(e.clientX, e.clientY);
        }
        get realw() {
            return this.frame.offsetWidth;
        }
        get realh() {
            return this.frame.offsetHeight;
        }
    }

    const base64 = {
        // modified from https://stackoverflow.com/questions/6213227/fastest-way-to-convert-a-number-to-radix-64-in-javascript
        fromNumber: function (number) {
            let residual = number;
            let result = '';
            let digits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz+/";
            while (residual !== 0) {
                result = digits.charAt(residual % digits.length) + result;
                residual = Math.floor(residual / digits.length);
            }
            return result;
        }
    }

    const dataImages = {
        "area protect": undefined,
        copy: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAABS0lEQVRYw+2XMQ6CMBSGfwxH8CIOEg2bkx2cOYhxJs6Ggzg74ORGNGXwIt5BpxrAAn3PVzWGPzEpaMLH199CgSFD/iwB5cerSXznXORwLQJxIC4MFYoMpLKUBJKvtySo0JeRaqZRhFJrrCbxvQ8qkIZpGszXW0yjCABQat1rqhNoVxxJMJt4+QJVnTKXToXSf1uVpTUrKktx2+cAgHGiWgFNRj7WEpWlKLXGOFFPEDNml5qbqoGqKQMmBnS6nAEAi9n85diMd8Wxdn4TL53NkIEMiO24bQyg1h8RIHPHNjtNQzZgcUPNO+6z9W5CSndsJmzfvQNIMtR1ISlLIxdD5tPsj0tu+/xZbC8dopqgltrLSv2RUncV+HQ5185/rNR90yhRbJahr05Z2wrNediKAXFAuC/8rA753AaFLq+kP7FRlNp1UOwMGfKXeQBOJJ69p18KUgAAAABJRU5ErkJggg==",
        cursor: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAA00lEQVRYw+3YMQ6DMAwFUPPFhTpCRxaW3qYzQ9f2Nl1YGIGRI8ENShz7W6mEZxwe34kUIXKVoR63+x79TpSGQmlJobTxJYHe8xiGSk4oCgXNwxEoaBvYKOQ0MVHIbew/AwWVDeqaloKCdQFvlAnUNa07Cl5Re6HguSE9UPA+tlaUO8iKMoGmdXFHURKyoJCTxLQuP9OxoGrLeMbnS31H/25zRRmZFpN686ytmLMvpp8yJkYNYmNUoAiMiEil3YBMjHpkbIwKFIFJBkVhivz7cdXf1QFBsW2mhPMCDAAAAABJRU5ErkJggg==",
        eraser: undefined,
        export: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAABCklEQVRYw+2YMQ6CQBBFP4QL2Ql02mDhadQWg+3iaSzcRrsVO4+k1RCNhB3RHdZkfzUJBW//Z4YBIOjPFAHAcpLfpW54uJmoF0gShgOVULHYbwEAs2kKADhfm5/Xm7ywR0YOKaNxvjZOnTmuKqtDsVRM5JJNLZBrd7iKPz3BUHEPHCILkXkdGc0dryIjKG8iU0bjuKr86jJlNOs9Jtplymi/ugwAirqEbf8SHYzzNLNCiUXGdSruGmAE9209BMr5ClvUJeZpBgA4NZe363q9e1nanC/55ESfnqEiVyB0yC4gAhi97W0wh5uJkjFgvFjyOTBiQFyYtstcPtTcT2hRh7gwzjXGf4MgcT0AtrSSgUtEfWEAAAAASUVORK5CYII=",
        fill: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAABjUlEQVRYw+2YsW7DIBCGAfWFMhgpZezCkreJVw9Z7bfpwpLRiYSHPlI6XYSviLszWG2lnJQhGJNP//3HQZR6xT8LzZ14OrgHHvv8mvWvAOVg9oLTXBg/DavxcL7sAqU5MOMcVO/86lln7er7EmMTKC2FwSAYqBbKtICBgLRyPMcG2grTCspwJlEwS4wr09dAaUodjmfgnev9lq1EiaeMRJklxufHT8NTCT8N6nq/qY/je3X63jiTQI3cXpSOAVSqlJ8GFc4XdTq4B0cpQ4FgNVKYcQ4/3qlVylAVg0EwDP7xWqgsUO+8GueQbQ+QpjQtLaGMpCRznmkNpUtdHW+OufRhGFz68Jy7JZhSt4bUlWC2KiVOGRg69VPOU62hWB7qnVedtaqzdncokamXGKuhqJZipDCcKEHlTF+lEO7sUiiq4YqAqGqjoDjdnw0Ei5T8U4KC/YxqsCKFtkJxYUignMRSKOkhTewhCVTzE+NWqHRXl16JNHV1phYsHSW23M+KF0Xughhqjz8hXvFn4xvHckf64m/UhgAAAABJRU5ErkJggg==",
        line: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAABEUlEQVRYw+2XvRGEIBCFkbEDKzGQxAZITK3E2OBiKzG9hAYuweAqsQYvWofjVOB4GPESHRdmP/cHV8aysrLSqrgydnW70f3z/Sp8bUmATIc+QkFx1wI5jUxO48/zRgjWCAFPWem78AhqnRUciLtSoIbHoX2dFVu0vg/IpaqXXykLrTk4EEHJadzBEFBlzGY7bYhO4662p7e3C1gNDziMd8ooEgRlwlH33VZDi9Z7JOxrIwRbZwWFcrb91dlDYEiooLzb3y+7zqpe7ufWvzUVvKmr2810hoaCdAYSCjY2oKBgQCgoKBACCg4UC5UEKAYqGdARlHmYnkHxlEDkNGSQSxqhs+EN+ZcSBYWaCLKysmL0AfZSsN1jloZVAAAAAElFTkSuQmCC",
        move: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAABgklEQVRYw+2YvU7EMAzH/055CYZj6IJ0243Q8ZYs9zbcWgErfZtbTkgdGNqOtyM2Ft7imHKK0g/nw4Ui4S1K7Pzi2q4TQEB2m+K82xRnCVskAWOPD6eGfg3IwLw0RwDAvtDJUCQFYyQViiRhJKBIGiYVilICmPNQTKCrEKCYTxCqo+bcIOYACguTvwMk9SsIta2mFDiofaFRd+1lXHdtL8NCbVOKZ3zTPiTwVUzRAwBdlVFz7mFcB1BMBfYB9l3rVvTMhtFViXy1mjSQrXN2TcjabJ3j4/UNt9c3j+9fn09kwwDA9u7+R9PcJMXx4RkAcDW2YG4wOzt7MeR6iRNf2LFNXTHeOZwaUnZAmQkf5ZCNfGF6dcj2FGdMV+Wop+qu9dJ3YRZZGIn71wy1EPa87SnXM5zu0Lyaoub6GZMEdddeAphLDM62kmyuJBq3/wZNHCgkC2OaPDUXTKxO9EWRy6ahojf7VXoMKhZG5LHBhUqBEXuOMVCpMIt8sBK7Z0nd474B40/4pg5xCDEAAAAASUVORK5CYII=",
        paste: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAABQ0lEQVRYw+2Yvw6CMBDGr4QXYpBA2Jx04GmMs3E2Po2DTmwEggOPhFOTUtvSa6/FGC4xacuf/vjuu1IE2CJg1Fk11Vk1Ud6T+cCI/cfYslWARJDj/QIAAM/TlQyM+cBwELHtC8VsU2JSxTSOhUwwMCoAuY19QDlS08Fdns/672HQQmGucwZSTaRLiQ4GGyn2At8JnTy0ZqAUwnghWspu7Qt1/rk6/F7KeDXalH40D9lCpTFg5KWizqpJt3J7ATV9BwAA+6L86vP2rX3Nxpc85QXEQVR9XZu8ykQlVOrICpkegAxIdWOTWkHXIZ1XVIAqJYMrZJrIRaXEVSH+k/0T/dVB6Zf/e9uryl5n4KbvZuPRTL2URmw6yRRa3UP7oiQFsVLItEOkLPVFoMfYMtO+JYQy6E9p6n85dPsh52/7EDBb2MQHK+ObZIdb/JMAAAAASUVORK5CYII=",
        pipette: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAABAUlEQVRYw+3XvQ6CMBQF4FPiCzHQRDu6uPA2zg6u+jYuLI5ogoOPhFOTpnL7Y3ovDj0jIeRLzyEEoKaGTt+auW/NHLpHSUH8a7f3qFYBuZhOawDAa5pIlJLAWIgbCrXhrmYJI7KhHEyosqYUyH14p3X2ybBtKLSb2OkUB/m1+agYhmVDh+sJADAcz8mvevENWcxlHLDf7uDCLCQ1TUkMANyfD3I37KAQxlYWq6jYhnIxfWvmFJz6l5P5GcSJyQZxY7JAEphkkBQmCSSJiYKkMUHQGhgS5H8o3XBisj8d3JhFkF+VJOarMhdjN2MhEhiysrUw5Aml/GGKgHyUNKampkQ+wWnd9v+Wv9QAAAAASUVORK5CYII=",
        protect: undefined,
        write: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAABTUlEQVRYw+2XPW6DQBCFHyNu4JOktF26oUnrk7hO4TY5CW2abbY0SEvhk3AGp8miMcGEmVmMLPEa/0iGx3xvZsfAqlU2ZdYLvL/tb/zz9/WSLWaobyaFqcxq5vPiAAC+rgAA7nQ2maIU3KOZFKKUZtrSLWOoj8udzh2q4utjNF+zVsjXVWcEAJoQlkcWA2xtd7UhjmsoM23pTNjIgmsIkRWb2tBYR1m6jbS4YiV4duL7JgQ1NrLOntQiC66hzorfabGRBdeYtNhyCy7tNJ59MD59QeO4fF3hsN3dVeyw3d299iVZSXINrv5NfV2hLR38b5g3x6IL9eZYiCokzhA/TP8ohp2FvhAaIgkuTStLz7ZcgmtoOv/3ME0IoiqRZomf44+BqO05Lsnew6d2xJZkDj1aNaZK8luaGkyrpl6DJE+oWVP5SvKSR8eqVVb9AMXs1T0X1uPeAAAAAElFTkSuQmCC",
        zoom: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAABMUlEQVRYw+3Wuw6CMBQG4L+NL+SIjgyy+CSuujo4u/ISri4wdFQTHFx9CScS1zrVNFCgdzThJCRcGvrlHHooMMWfBfH5svV8yVX3z48LiQrqgtjAiE9M14Q6Y7yVSEyWs5I/33XryFnJVeODYVQQGSFHzkoeBCW/VAdigqIuMBnAblds0hWJ3idU2dHJjG6WqCvQd2acQb7LRPFjQV3LZRNpsggDsimX6QIwXmmm8XzX4fpQiOxQm+zI57olyFnJ02SB3TLr/ckSG0x23AMAiu0B8rXqmxIQAIMYI1AT8zoVAIB7VX3HiGfN1SQgOtsP4oJpgqJs0HQwYqLgW1gTTPBN/hiYTtBYGCVoTMxgY4yNaWVIzs4YGACY9WVG7jExMJ2gZrOLhen9qGNDppjCV3wAmp0jyCb9nC4AAAAASUVORK5CYII=",
        untitled1: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAACeElEQVRYw+2XsWsaYRiHH6VRSyGBEwepi5nsIFToWKUKDoVkyl/QIQhZRMdCJqGj0kUoGRw6FqcIGY4qnI6BBBwiFCqBKzcUDxoieMlgB/NdYtN6Z7yzGfyBy3eIj8/3vu/3HayyQGKvPoyX/ZvexwblfWymLIEMrb1UKFuGQk+PMLT2UqC8Vnb0UReAyOblUqBmAumjLlIgDkClpZhQ0edvx/9ty/zhJACdoWFC+cNJ10zNBJICcbR+FYDXz/wU0il2GrKrNeW1siO2rDM0AKhvZam0FPD1XIHy2ml5YUikkE6RPz0DX8/xkWBpSHSZMFRpKaapL9++YwwOHDU1E0jrV80tE+kMDXYa8j1TTkFZFrUwJKIcqrd1BHx8+YJESXYMynIOhaN7f31WSKdMqJP97FRNLTKnbLe9SGo7MgWVKMmmKSlTxhgcLDSnLA3d3SqAz8WjyfmWqxHK1UhtR0wovVk0obR+9UFQnlkPhfrI5iU7DZn6VpZQrsZ5q4veLP7ze4mSzMl+Fq5i6KMuvwaqx3GgUK7Gz0/vqLQUCumUaenPnLdurerNIlzF8IeT9I7fexYG2ghGxlIgDr4e+dMz6ltZAFRVRcqUZ1qammfBXbR+1ZYp222vHKqo6uSTKMnmv9cvrtEvruEqNrER3DXXxZqhtQlH92zVlOVpLwaj2AopU+Zr/s0E5OZ6IsD1Ude8Q4lxIaa9obVtFbplDemjLtL6GlKmPFUXIv0fRx4czBN7F7TePZh5u8eRLtsIRsYA0vraZOGmjaVA3HEzc9fQ3ZpxC8a+oTsnvpswtl+DROu7DTPXli0DxrYhN7rpQRE1tMoqM/Ibi49haAcCegQAAAAASUVORK5CYII=",
        close: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAsElEQVQ4T2P0NbT+z0ABYAQZYGikSLYRcAN0HXTBhlw+cBmvYejqMAzAZwhM8/sPnxieXHgItgjFCzAF2AxB1rx53gEGmLcxwgCbIbg0Y7gA5nlkQ2BiIGcj2wwTxxkLyIbg0ozTBSAJdFfgih2sLkD2s6AAHzxasRmCMxCRnY0vdrBGIzY/4zIEIyHhCzC8CQkkiU8zLCBkDOTBTFiUkpWZzp+7DzYElBrJMgA5twEAg7WDTc6lEvYAAAAASUVORK5CYII=",
        lock: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAlUlEQVQ4T2P0NbT+z0ABYAQZYGikSLYRGAboOujiNezygcso8igGwDS///AJqyGCAnxgcWRDMAwAad487wBWA+KK/HAbgGw7yABs4YKs5smFh2DD4C4AScJsxxeo6OqoawCxcYnsUhQXIBuAHJiwwIPJk2QAKDzQ08YgNUDGQJ7YMASrg6UVlJR4/tx9kgwBhQ/FuREA5HeVTcn2o+EAAAAASUVORK5CYII=",
        unlock: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAh0lEQVQ4T2P0NbT+z0ABYAQZYGikSLYRJBug66CLYhlJBsA0v//wCW4IyQaANG+ed4ByA2DhRrYLMAxADxx80QLyxpMLD8FK4C7AZgAssAQF+FDMg4UDyBU4DUAOrLgiP/INANmC7jqSXEA/A2QM5EnKD6DEhBKIIN3nz90nyRAMA0jSDVUMACJmfc6GilMFAAAAAElFTkSuQmCC",
        // unlock: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAmUlEQVQ4T2P0NbT+z0ABYAQZYGikSLYRGAboOujiNezygcso8igGwDS///AJqyGCAnxgcWRDMAwAad487wBWA+KK/Ig3AFu4ILvwyYWHYMMwwuD8ufsM+AIVZAjMlSB1JMcCTgMIhT5yoGB1AboByIEJCzyYISQZAPInLsNRwgCfIvoYIGMgT1J+ACU2jGgEpQFSAFnpAN0CABDLjE20xQVBAAAAAElFTkSuQmCC",
        minimize: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAWUlEQVQ4T2P0NbT+z0ABYAQZYGikSLYRowYwMFAvDHQddImOifcfPjE8ufAQrB7uAhkDeaINACncPO8AAyj6Ubxw/tx9kgzBMIAk3VDF1AtEcmxHCcShawAAyRMvTcpPIeAAAAAASUVORK5CYII=",
        maximize: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAdUlEQVQ4T2P0NbT+z0ABYAQZYGikSLYReA3QddBleP/hE8OTCw9xWkCUAZvnHWDA5crhZAAowIgFyAELDwMZA3kM/YICfOBYwAZgAYsSiOfP3UdRG1fkBzYApBgbAMXMcIoFbH6EBSzZKRFkKCxgyUrKxKQLAOW9bk2mvNgoAAAAAElFTkSuQmCC"
    }

    const cursors = {
        cursor: { icon: dataImages.cursor, hotspot: [7, 2] },
        move: { icon: dataImages.move, hotspot: [18, 18] },
        pipette: { icon: dataImages.pipette, hotspot: [3, 31] },
        zoom: { icon: dataImages.zoom, hotspot: [22, 13] },
        export: { icon: dataImages.export, hotspot: [0, 3] },
        fill: { icon: dataImages.fill, hotspot: [6, 32] },
        line: { icon: dataImages.line, hotspot: [6, 6] },
        paste: { icon: dataImages.paste, hotspot: [5, 2] },
        copy: { icon: dataImages.copy, hotspot: [5, 5] },
        write: { icon: dataImages.write, hotspot: [17, 8] }
    }

    const textData = {}

    textData.newText = {
        data: {
            gap: 1,
            space: 1,
            height: 8,
            bottom: 6
        },
        " ": {
            width: 1,
            height: 8,
            skip: 0,
            text: "00000000"
        },
        "'": {
            width: 1,
            height: 2,
            skip: 1,
            text: "11"
        },
        "\"": {
            width: 3,
            height: 2,
            skip: 1,
            text: "101101"
        },
        "?": {
            width: 3,
            height: 5,
            skip: 1,
            text: `110001010000010`
        },
        "!": {
            width: 1,
            height: 5,
            skip: 1,
            text: `11101`
        },
        ",": {
            width: 1,
            height: 2,
            skip: 5,
            text: `11`
        },
        ".": {
            width: 1,
            height: 1,
            skip: 5,
            text: `1`
        },
        "&": {
            width: 3,
            height: 5,
            skip: 1,
            text: `010101010101011`
        },
        "[": {
            width: 2,
            height: 5,
            skip: 1,
            text: `1110101011`
        },
        "]": {
            width: 2,
            height: 5,
            skip: 1,
            text: `1101010111`
        },
        "{": {
            width: 3,
            height: 5,
            skip: 1,
            text: `011010110010011`
        },
        "}": {
            width: 3,
            height: 5,
            skip: 1,
            text: `110010011010110`
        },
        "(": {
            width: 2,
            height: 5,
            skip: 1,
            text: `0110101001`
        },
        ")": {
            width: 2,
            height: 5,
            skip: 1,
            text: `1001010110`
        },
        "/": {
            width: 3,
            height: 5,
            skip: 1,
            text: `001001010100100`
        },
        "\\": {
            width: 3,
            height: 5,
            skip: 1,
            text: `100100010001001`
        },
        ":": {
            width: 1,
            height: 3,
            skip: 2,
            text: `101`
        },
        ";": {
            width: 1,
            height: 4,
            skip: 3,
            text: `1011`
        },
        "+": {
            width: 3,
            height: 3,
            skip: 2,
            text: `010111010`
        },
        "-": {
            width: 3,
            height: 1,
            skip: 3,
            text: `111`
        },
        "*": {
            width: 3,
            height: 3,
            skip: 2,
            text: `101010101`
        },
        "%": {
            width: 3,
            height: 5,
            skip: 1,
            text: `101001010100101`
        },
        "$": {
            width: 3,
            height: 7,
            skip: 0,
            text: `010111100010001111010`
        },
        ">": {
            width: 3,
            height: 5,
            skip: 1,
            text: `100010001010100`
        },
        "<": {
            width: 3,
            height: 5,
            skip: 1,
            text: `001010100010001`
        },
        "_": {
            width: 3,
            height: 1,
            skip: 5,
            text: `111`
        },
        "=": {
            width: 3,
            height: 3,
            skip: 2,
            text: `111000111`
        },
        "0": {
            width: 3,
            height: 5,
            skip: 1,
            text: "111101101101111"
        },
        "1": {
            width: 3,
            height: 5,
            skip: 1,
            text: "010110010010111"
        },
        "2": {
            width: 3,
            height: 5,
            skip: 1,
            text: "111001111100111"
        },
        "3": {
            width: 3,
            height: 5,
            skip: 1,
            text: "111001111001111"
        },
        "4": {
            width: 3,
            height: 5,
            skip: 1,
            text: "101101111001001"
        },
        "5": {
            width: 3,
            height: 5,
            skip: 1,
            text: "111100111001111"
        },
        "6": {
            width: 3,
            height: 5,
            skip: 1,
            text: "111100111101111"
        },
        "7": {
            width: 3,
            height: 5,
            skip: 1,
            text: "111001001001001"
        },
        "8": {
            width: 3,
            height: 5,
            skip: 1,
            text: "111101111101111"
        },
        "9": {
            width: 3,
            height: 5,
            skip: 1,
            text: "111101111001111"
        },
        a: {
            width: 3,
            height: 3,
            skip: 3,
            text: "011101011"
        },
        b: {
            width: 3,
            height: 5,
            skip: 1,
            text: `100100110101110`
        },
        c: {
            width: 3,
            height: 3,
            skip: 3,
            text: `011100011`
        },
        d: {
            width: 3,
            height: 5,
            skip: 1,
            text: `001001011101011`
        },
        e: {
            width: 3,
            height: 3,
            skip: 3,
            text: `010110011`
        },
        f: {
            width: 2,
            height: 5,
            skip: 1,
            text: `0110111010`
        },
        g: {
            width: 3,
            height: 5,
            skip: 3,
            text: `011101011001110`
        },
        h: {
            width: 3,
            height: 5,
            skip: 1,
            text: `100100110101101`
        },
        i: {
            width: 1,
            height: 5,
            skip: 1,
            text: `10111`
        },
        j: {
            width: 2,
            height: 7,
            skip: 1,
            text: `01000101010110`
        },
        k: {
            width: 3,
            height: 5,
            skip: 1,
            text: `100100101110101`
        },
        l: {
            width: 2,
            height: 5,
            skip: 1,
            text: `1010101001`
        },
        m: {
            width: 5,
            height: 3,
            skip: 3,
            text: `111101010110101`
        },
        n: {
            width: 3,
            height: 3,
            skip: 3,
            text: `110101101`
        },
        o: {
            width: 3,
            height: 3,
            skip: 3,
            text: `010101010`
        },
        p: {
            width: 3,
            height: 5,
            skip: 3,
            text: `110101110100100`
        },
        q: {
            width: 3,
            height: 5,
            skip: 3,
            text: `011101011001001`
        },
        r: {
            width: 2,
            height: 3,
            skip: 3,
            text: `111010`
        },
        s: {
            width: 3,
            height: 3,
            skip: 3,
            text: `011010110`
        },
        t: {
            width: 2,
            height: 5,
            skip: 1,
            text: `1010111001`
        },
        u: {
            width: 3,
            height: 3,
            skip: 3,
            text: `101101011`
        },
        v: {
            width: 3,
            height: 3,
            skip: 3,
            text: `101101010`
        },
        w: {
            width: 5,
            height: 3,
            skip: 3,
            text: `101011010101010`
        },
        x: {
            width: 3,
            height: 3,
            skip: 3,
            text: `101010101`
        },
        y: {
            width: 3,
            height: 5,
            skip: 3,
            text: `101101011001010`
        },
        z: {
            width: 3,
            height: 3,
            skip: 3,
            text: `110010011`
        },
        A: {
            width: 3,
            height: 5,
            skip: 1,
            text: "010101111101101"
        },
        B: {
            width: 3,
            height: 5,
            skip: 1,
            text: `110101110101110`
        },
        C: {
            width: 3,
            height: 5,
            skip: 1,
            text: `011100100100011`
        },
        D: {
            width: 3,
            height: 5,
            skip: 1,
            text: `110101101101110`
        },
        E: {
            width: 3,
            height: 5,
            skip: 1,
            text: `111100111100111`
        },
        F: {
            width: 3,
            height: 5,
            skip: 1,
            text: `111100111100100`
        },
        G: {
            width: 3,
            height: 5,
            skip: 1,
            text: `011100101101011`
        },
        H: {
            width: 3,
            height: 5,
            skip: 1,
            text: `101101111101101`
        },
        I: {
            width: 3,
            height: 5,
            skip: 1,
            text: `111010010010111`
        },
        J: {
            width: 3,
            height: 5,
            skip: 1,
            text: `111001001001110`
        },
        K: {
            width: 3,
            height: 5,
            skip: 1,
            text: `101101110101101`
        },
        L: {
            width: 3,
            height: 5,
            skip: 1,
            text: `100100100100111`
        },
        M: {
            width: 5,
            height: 5,
            skip: 1,
            text: `1000111011101011000110001`
        },
        N: {
            width: 4,
            height: 5,
            skip: 1,
            text: `10011101101110011001`
        },
        O: {
            width: 3,
            height: 5,
            skip: 1,
            text: `010101101101010`
        },
        P: {
            width: 3,
            height: 5,
            skip: 1,
            text: `110101110100100`
        },
        Q: {
            width: 3,
            height: 6,
            skip: 1,
            text: `010101101101010001`
        },
        R: {
            width: 3,
            height: 5,
            skip: 1,
            text: `110101110101101`
        },
        S: {
            width: 3,
            height: 5,
            skip: 1,
            text: `011100010001110`
        },
        T: {
            width: 3,
            height: 5,
            skip: 1,
            text: `111010010010010`
        },
        U: {
            width: 3,
            height: 5,
            skip: 1,
            text: `101101101101111`
        },
        V: {
            width: 3,
            height: 5,
            skip: 1,
            text: `101101101101010`
        },
        W: {
            width: 5,
            height: 5,
            skip: 1,
            text: `1000110101101011010101010`
        },
        X: {
            width: 3,
            height: 5,
            skip: 1,
            text: `101101010101101`
        },
        Y: {
            width: 3,
            height: 5,
            skip: 1,
            text: `101101010010010`
        },
        Z: {
            width: 3,
            height: 5,
            skip: 1,
            text: `111001010100111`
        }
    }

    textData.cyrillic = {
        'а': {
            width: 3,
            height: 4,
            skip: 2,
            text: `010101111101`
        },
        'б': {
            width: 3,
            height: 4,
            skip: 2,
            text: `111100111111`
        },
        'в': {
            width: 3,
            height: 4,
            skip: 2,
            text: `110111101110`
        },
        'г': {
            width: 3,
            height: 4,
            skip: 2,
            text: `111100100100`
        },
        'д': {
            width: 4,
            height: 4,
            skip: 2,
            text: `0110011011111001`
        },
        'е': {
            width: 3,
            height: 4,
            skip: 2,
            text: `111110100111`
        },
        'ё': {
            width: 3,
            height: 6,
            skip: 0,
            text: `101000111110100111`
        },
        'ж': {
            width: 5,
            height: 4,
            skip: 2,
            text: `10101011100111010101`
        },
        'з': {
            width: 3,
            height: 4,
            skip: 2,
            text: `111011001111`
        },
        'и': {
            width: 3,
            height: 4,
            skip: 2,
            text: `101101101011`
        },
        'й': {
            width: 3,
            height: 7,
            skip: -1,
            text: `100010000101101111101`
        },
        'к': {
            width: 3,
            height: 4,
            skip: 2,
            text: `101110101101`
        },
        'л': {
            width: 3,
            height: 4,
            skip: 2,
            text: `010101101101`
        },
        'м': {
            width: 5,
            height: 4,
            skip: 2,
            text: `10001110111010110001`
        },
        'н': {
            width: 3,
            height: 4,
            skip: 2,
            text: `101111101101`
        },
        'о': {
            width: 3,
            height: 4,
            skip: 2,
            text: `010101101010`
        },
        'п': {
            width: 3,
            height: 4,
            skip: 2,
            text: `111101101101`
        },
        'р': {
            width: 3,
            height: 4,
            skip: 2,
            text: `110101110100`
        },
        'с': {
            width: 3,
            height: 4,
            skip: 2,
            text: `111100100111`
        },
        'т': {
            width: 3,
            height: 4,
            skip: 2,
            text: `111010010010`
        },
        'у': {
            width: 3,
            height: 4,
            skip: 2,
            text: `101101010100`
        },
        'ф': {
            width: 5,
            height: 4,
            skip: 2,
            text: `01110101010111000100`
        },
        'х': {
            width: 3,
            height: 4,
            skip: 2,
            text: `101010010101`
        },
        'ц': {
            width: 4,
            height: 5,
            skip: 2,
            text: `10101010101011100011`
        },
        'ч': {
            width: 3,
            height: 4,
            skip: 2,
            text: `101101111001`
        },
        'ш': {
            width: 5,
            height: 4,
            skip: 2,
            text: `10101101011010111111`
        },
        'щ': {
            width: 6,
            height: 5,
            skip: 2,
            text: `101010101010101010111110000011`
        },
        'ъ': {
            width: 3,
            height: 4,
            skip: 2,
            text: `110010011011`
        },
        'ы': {
            width: 4,
            height: 4,
            skip: 2,
            text: `1001100111011101`
        },
        'ь': {
            width: 2,
            height: 4,
            skip: 2,
            text: `10101111`
        },
        'э': {
            width: 3,
            height: 4,
            skip: 2,
            text: `110011001110`
        },
        'ю': {
            width: 4,
            height: 4,
            skip: 2,
            text: `1011111110111011`
        },
        'я': {
            width: 3,
            height: 4,
            skip: 2,
            text: `011101011101`
        },
        'А': {
            width: 3,
            height: 5,
            skip: 1,
            text: `010101111101101`
        },
        'Б': {
            width: 3,
            height: 5,
            skip: 1,
            text: `111100111101110`
        },
        'В': {
            width: 3,
            height: 5,
            skip: 1,
            text: `110101110101110`
        },
        'Г': {
            width: 3,
            height: 5,
            skip: 1,
            text: `111100100100100`
        },
        'Д': {
            width: 5,
            height: 5,
            skip: 1,
            text: `0111001010010101111110001`
        },
        'Е': {
            width: 3,
            height: 5,
            skip: 1,
            text: `111100111100111`
        },
        'Ё': {
            width: 3,
            height: 7,
            skip: -1,
            text: `101000111100111100111`
        },
        'Ж': {
            width: 5,
            height: 5,
            skip: 1,
            text: `1010110101011101010110101`
        },
        'З': {
            width: 4,
            height: 5,
            skip: 1,
            text: `01101001001010010110`
        },
        'И': {
            width: 4,
            height: 5,
            skip: 1,
            text: `10011001101111011001`
        },
        'Й': {
            width: 4,
            height: 8,
            skip: -2,
            text: `01000010000010011001101111011001`
        },
        'К': {
            width: 3,
            height: 5,
            skip: 1,
            text: `101101110101101`
        },
        'Л': {
            width: 3,
            height: 5,
            skip: 1,
            text: `010101101101101`
        },
        'М': {
            width: 5,
            height: 5,
            skip: 1,
            text: `1000111011101011000110001`
        },
        'Н': {
            width: 3,
            height: 5,
            skip: 1,
            text: `101101111101101`
        },
        'О': {
            width: 3,
            height: 5,
            skip: 1,
            text: `010101101101010`
        },
        'П': {
            width: 3,
            height: 5,
            skip: 1,
            text: `111101101101101`
        },
        'Р': {
            width: 3,
            height: 5,
            skip: 1,
            text: `110101110100100`
        },
        'С': {
            width: 3,
            height: 5,
            skip: 1,
            text: `111100100100111`
        },
        'Т': {
            width: 3,
            height: 5,
            skip: 1,
            text: `111010010010010`
        },
        'У': {
            width: 3,
            height: 5,
            skip: 1,
            text: `101101010010100`
        },
        'Ф': {
            width: 5,
            height: 5,
            skip: 1,
            text: `0010001110101010111000100`
        },
        'Х': {
            width: 3,
            height: 5,
            skip: 1,
            text: `101101010101101`
        },
        'Ц': {
            width: 4,
            height: 6,
            skip: 1,
            text: `101010101010101011100011`
        },
        'Ч': {
            width: 3,
            height: 5,
            skip: 1,
            text: `101101111001001`
        },
        'Ш': {
            width: 5,
            height: 5,
            skip: 1,
            text: `1010110101101011010111111`
        },
        'Щ': {
            width: 6,
            height: 6,
            skip: 1,
            text: `101010101010101010101010111110000011`
        },
        'Ъ': {
            width: 4,
            height: 5,
            skip: 1,
            text: `11000100011101010111`
        },
        'Ы': {
            width: 5,
            height: 5,
            skip: 1,
            text: `1000110001111011010111101`
        },
        'Ь': {
            width: 3,
            height: 5,
            skip: 1,
            text: `100100111101111`
        },
        'Э': {
            width: 4,
            height: 5,
            skip: 1,
            text: `01101001001110010110`
        },
        'Ю': {
            width: 5,
            height: 5,
            skip: 1,
            text: `1011110101111011010110111`
        },
        'Я': {
            width: 3,
            height: 5,
            skip: 1,
            text: `011101011101101`
        }
    }

    const browser = !(new Function("return this"))().global;

    NS = {
        // classes
        Point,
        BPoint,
        Color,
        RGBRotate,
        Pixel,
        Chunk,
        Action,
        PixelManager,
        GUIWindow,
        // functions
        rangeMap,
        clamp,
        degToRad,
        radToDeg,
        modulo,
        line,
        mkHTML,
        setImageData,
        getImageData,
        // objects
        M0: undefined,
        M13: undefined,
        M14: undefined,
        M19: undefined,
        M20: undefined,
        M21: undefined,
        PM: undefined,
        localStorage: browser ? (localStorage.NS ? JSON.parse(localStorage.NS) : {}) : undefined,
        base64,
        dataImages,
        cursors,
        browser: browser,
        node: !browser,
        modules: [],
        NSmodules: [],
        players: {},
        windows: {},
        installed: false
    }

    const EE = new EventEmitter("EE");

    (function () {
        const originalAddEventListener = EventTarget.prototype.addEventListener;

        let wheelEventName = ('onwheel' in document) ? 'wheel' : ('onmousewheel' in document) ? 'mousewheel' : 'DOMMouseScroll';
        EventTarget.prototype.addEventListener = function (type, listener, options) {
            if (type !== wheelEventName) {
                originalAddEventListener.call(this, type, listener, options);
            } else {
                if (options.NS) {
                    originalAddEventListener.call(this, type, listener, options);
                } else {
                }
            }
        };
    })();

    const PM = new PixelManager();
    NS.PM = PM;

    (function () {
        document.addEventListener("mousemove", e => EE.emitQuiet("mousemove", e));
    })();

    // (function () {
    //     const normalInterval = setInterval;
    //     setInterval = function(handler, timeout = 1000, ...args) {
    //         console.log(handler);
    //         normalInterval(handler, timeout, ...args);
    //     }
    // })();

    const EXPORTS = {
        NS,
        PM,
        EE,
        Point,
        BPoint,
        Color,
        Pixel,
        Chunk,
        Action,
        EventEmitter,
        PixelManager,
        Tool,
        GUIWindow,
        textData
    }

    NS.EXPORTS = EXPORTS;

    if (NS.browser && window) window.NS = NS;

    return EXPORTS;
})();

function install() {
    // eslint-disable-next-line no-unused-vars
    const { NS, PM, EE, Point, Color, GUIWindow, Tool, NS: { modulo, line, mkHTML, dataImages, players }, textData } = IMPORTS;

    // event stuff
    ((true) && !function () {
        if (document.getElementById("dev-chat")) document.getElementById("dev-chat").parentNode.removeChild(document.getElementById("dev-chat")); // im so pissed at devchat for screaming at me every time i press a single letter while typing out something in the console its so annoying. thats why its the first thing i delete.

        NS.installed = true;
        NS.keysdown = [];
        NS.extra = {};
        NS.extra.log = false;

        const KeyCode = {
            // Alphabet
            a: 65, b: 66, c: 67, d: 68, e: 69, f: 70, g: 71, h: 72, i: 73,
            j: 74, k: 75, l: 76, m: 77, n: 78, o: 79, p: 80, q: 81, r: 82,
            s: 83, t: 84, u: 85, v: 86, w: 87, x: 88, y: 89, z: 90,

            // Numbers (Top row)
            zero: 48, one: 49, two: 50, three: 51, four: 52,
            five: 53, six: 54, seven: 55, eight: 56, nine: 57,

            // Special characters and symbols
            backtick: 192, tilde: 192, dash: 189, underscore: 189,
            equals: 187, plus: 187, leftBracket: 219, leftCurly: 219,
            rightBracket: 221, rightCurly: 221, backslash: 220, pipe: 220,
            semicolon: 186, colon: 186, quote: 222, doubleQuote: 222,
            comma: 188, lessThan: 188, period: 190, greaterThan: 190,
            slash: 191, question: 191, exclamation: 49, at: 50,
            hash: 51, dollar: 52, percent: 53, caret: 54,
            ampersand: 55, asterisk: 56, leftParen: 57, rightParen: 48,

            // Function keys
            f1: 112, f2: 113, f3: 114, f4: 115, f5: 116, f6: 117,
            f7: 118, f8: 119, f9: 120, f10: 121, f11: 122, f12: 123,

            // Control keys
            enter: 13, space: 32, escape: 27, backspace: 8, tab: 9,
            shift: 16, ctrl: 17, alt: 18, capsLock: 20, pause: 19,

            // Navigation keys
            insert: 45, home: 36, delete: 46, end: 35,
            pageUp: 33, pageDown: 34,

            // Arrow keys
            arrowUp: 38, arrowDown: 40, arrowLeft: 37, arrowRight: 39,

            // Numpad keys
            numpad0: 96, numpad1: 97, numpad2: 98, numpad3: 99,
            numpad4: 100, numpad5: 101, numpad6: 102, numpad7: 103,
            numpad8: 104, numpad9: 105,
            numpadMultiply: 106, numpadAdd: 107, numpadSubtract: 109,
            numpadDecimal: 110, numpadDivide: 111, numpadEnter: 13
        };
        function keydown(event) {
            let e = event.which || event.keyCode;
            if (
                !(e >= 112 && e <= 123) &&
                "TEXTAREA" !== document.activeElement.tagName &&
                "INPUT" !== document.activeElement.tagName &&
                e !== KeyCode.arrowUp &&
                e !== KeyCode.arrowDown &&
                e !== KeyCode.arrowLeft &&
                e !== KeyCode.arrowRight
            ) {
                event.preventDefault();
                event.stopPropagation();
            }
            if ("TEXTAREA" !== document.activeElement.tagName && "INPUT" !== document.activeElement.tagName) {
                NS.keysdown[e] = !0;
                let n = OWOP.player.tool;
                if (undefined !== OWOP?.world && n?.isEventDefined("keydown") && n?.call("keydown", [NS.keysdown, event, true])) return !1;
                switch (e) {
                    case KeyCode.p:
                        OWOP.player.tool = "pipette";
                        break;
                    case KeyCode.m:
                    case KeyCode.q:
                        OWOP.player.tool = "move";
                        break;
                    case KeyCode.o:
                        OWOP.player.tool = "cursor";
                        break;
                    case KeyCode.c:
                        // OWOP.player.tool = "eraser";
                        break;
                    case KeyCode.e:
                        OWOP.player.tool = "export";
                        break;
                    case KeyCode.f:
                        OWOP.player.tool = "fill";
                        break;
                    case KeyCode.l:
                        OWOP.player.tool = "line";
                        break;
                    case KeyCode.p:
                        OWOP.player.tool = "protect";
                        break;
                    // case KeyCode.a:
                    //     OWOP.player.tool = "area protect";
                    //     break;
                    case KeyCode.h:
                        // make options window open/close
                        // options window will include options to switch the behavior of the tools, the game, and open/close all windows
                        break;
                    case KeyCode.g:
                        OWOP.renderer.showGrid(!OWOP.renderer.gridShown);
                        break;
                    case KeyCode.z:
                        if (!event.ctrlKey) {
                            OWOP.player.tool = "zoom";
                            break;
                        }
                        NS.PM.undo(event.shiftKey);
                        event.preventDefault();
                        break;
                    case KeyCode.y:
                        if (!event.ctrlKey) break;
                        NS.PM.redo(event.shiftKey);
                        event.preventDefault();
                        break;
                    case KeyCode.f1: // f1
                        event.preventDefault();
                        break;
                    case KeyCode.numpadAdd:
                        ++OWOP.camera.zoom;
                        break;
                    case KeyCode.numpadSubtract:
                        --OWOP.camera.zoom;
                        break;
                    // case KeyCode.l:
                    //     NS.extra.log = !NS.extra.log;
                    //     break;
                    case KeyCode.escape: // Esc
                        NS.teleport.camera = {};
                        break;
                    case KeyCode.tilde:
                        let userInput = prompt("Custom color\nType three values separated by a comma: r,g,b\n(...or the hex string: #RRGGBB)\nYou can add multiple colors at a time separating them with a space.");
                        if (!userInput) {
                            break;
                        }
                        userInput = userInput.split(' ');
                        for (let j = 0; j < userInput.length; j++) {
                            let elementInput = userInput[j];
                            elementInput = elementInput.split(',');
                            let rgb = null;
                            if (elementInput.length == 3) {
                                rgb = elementInput;
                                for (let i = 0; i < elementInput.length; i++) {
                                    elementInput[i] = +elementInput[i];
                                    if (!(elementInput[i] >= 0 && elementInput[i] < 256)) {
                                        return null;
                                    }
                                }
                            } else if (elementInput[0] == '#' && elementInput.length == 7) {
                                let hexColor = parseInt(elementInput.replace('#', '0x'));
                                /* The parsed HTML color doesn't have red as the first byte, so invert it. */
                                rgb = [hexColor >> 16 & 0xFF, hexColor >> 8 & 0xFF, hexColor & 0xFF];
                            }
                            if (rgb) OWOP.player.selectedColor = rgb;
                        }
                        break;
                }
                (NS.extra.log && console.log(event));
            }
        }
        function keyup(event) {
            let e = event.which || event.keyCode;
            delete NS.keysdown[e];
            if (document.activeElement.tagName !== "INPUT") {
                let n = OWOP.player.tool;
                if (undefined !== OWOP?.world && n?.isEventDefined("keyup") && n?.call("keyup", [NS.keysdown, event])) return !1;
                switch (event.key) {
                    case "Enter":
                    case "`":
                        document.getElementById("chat-input").focus();
                        break;
                }
            }
        }
        window.addEventListener("keydown", keydown, true);
        window.addEventListener("keyup", keyup);

        NS.PM.setup();

        OWOP.tool = OWOP.tools;

        if (!NS.localStorage.cursors) {
            NS.localStorage.cursors = NS.cursors;
            localStorage.NS = JSON.stringify(NS.localStorage);
        }
        if (!NS.localStorage.settings) {
            NS.localStorage.settings = {};
            localStorage.NS = JSON.stringify(NS.localStorage);
        }
        if (!NS.localStorage.settings["Options"]) {
            NS.localStorage.settings["Options"] = { x: 117, y: 60 };
            localStorage.NS = JSON.stringify(NS.localStorage);
        }
    }());

    if (!NS.installed) return;

    // change render player
    ((false) && !function () {
        let camera = undefined;
        let rendererValues = undefined;
        let tools = undefined;
        let id = undefined;
        let drawText = undefined;
        function renderPlayer(targetPlayer, fontsize) {
            let camx = camera.x * 16;
            let camy = camera.y * 16;
            let zoom = camera.zoom;
            let ctx = rendererValues.animContext;
            let cnvs = ctx.canvas;
            let tool = targetPlayer.tool;
            if (!tool) {
                /* Render the default tool if the selected one isn't defined */
                tool = tools['cursor'];
            }
            let toolwidth = tool.cursor.width / 16 * zoom;
            let toolheight = tool.cursor.height / 16 * zoom;

            let x = targetPlayer.x;
            let y = targetPlayer.y;
            let cx = ((x - camx) - tool.offset[0]) * (zoom / 16) | 0;
            let cy = ((y - camy) - tool.offset[1]) * (zoom / 16) | 0;

            if (cx < -toolwidth || cy < -toolheight || cx > cnvs.width || cy > cnvs.height) {
                return true;
            }


            if (fontsize > 3) {
                let text = undefined;
                if (players) {
                    let nick = players.list[id].nick;
                    text = nick ? `[${id}] ${nick}` : id;
                } else text = id;

                let textw = ctx.measureText(text).width + (zoom / 2);

                ctx.globalAlpha = 1;
                ctx.fillStyle = targetPlayer.clr;
                ctx.fillRect(cx, cy + toolheight, textw, zoom);
                ctx.globalAlpha = 0.2;
                ctx.lineWidth = 3;
                ctx.strokeStyle = "#000000";
                ctx.strokeRect(cx, cy + toolheight, textw, zoom);
                ctx.globalAlpha = 1;
                drawText(ctx, text, cx + zoom / 4, cy + fontsize + toolheight + zoom / 8);
            }

            ctx.drawImage(tool.cursor, cx, cy, toolwidth, toolheight);

            return x === targetPlayer.endX && y === targetPlayer.endY;
        }
        void renderPlayer;
    }());

    // tool icons
    ((true) && !function () {
        function holeify(img) {
            let canvas = document.createElement("canvas");
            let shadowcolor = 0xFF3B314D;
            let backgroundcolor = 0xFF5C637E;
            canvas.width = img.width;
            canvas.height = img.height;
            let ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0);
            let idat = ctx.getImageData(0, 0, canvas.width, canvas.height);
            let u32dat = new Uint32Array(idat.data.buffer);
            let clr = (x, y) => {
                return (x < 0 || y < 0 || x >= idat.width || y >= idat.height) ? 0 : u32dat[y * idat.width + x];
            };
            for (let i = u32dat.length; i--;) {
                if (u32dat[i] !== 0) {
                    u32dat[i] = backgroundcolor;
                }
            }
            for (let y = idat.height; y--;) {
                for (let x = idat.width; x--;) {
                    if (clr(x, y) === backgroundcolor && (!clr(x, y - 1) || !clr(x - 1, y)) && !clr(x - 1, y - 1)) {
                        u32dat[y * idat.width + x] = shadowcolor;
                    }
                }
            }
            for (let y = idat.height; y--;) {
                for (let x = idat.width; x--;) {
                    if (clr(x, y - 1) === shadowcolor && clr(x - 1, y) === shadowcolor) {
                        u32dat[y * idat.width + x] = shadowcolor;
                    }
                }
            }
            ctx.putImageData(idat, 0, 0);
            return canvas.toDataURL();
        }
        let iconStyler = document.createElement("style");
        document.getElementById("toole-container").parentElement.appendChild(iconStyler);
        for (let cursor in NS.localStorage.cursors) {
            let cursorURL = NS.localStorage.cursors[cursor].icon;

            iconStyler.innerHTML += `#tool-${cursor}:not(.selected) div { background-image: url("${cursorURL}") !important } `
            let img = new Image();
            img.onload = function () {
                iconStyler.innerHTML += `#tool-${cursor}.selected div { background-image: url("${holeify(img)}") !important } `
            }
            img.src = cursorURL;
        }
        if (false) {
            // fixing all the damn cache issues that i hate cause halloween sucks man i dont want to have to do this again for christmas
            iconStyler.innerHTML += `button { border-image: url("https://www.ourworldofpixels.com/img/button.png") 6 repeat; }`;
            iconStyler.innerHTML += `button:active { border-image: url("https://www.ourworldofpixels.com/img/button_pressed.png") 6 repeat; }`;

            iconStyler.innerHTML += `.wincontainer { border-image: url("https://www.ourworldofpixels.com/img/window_in.png") 6 repeat; }`;
            iconStyler.innerHTML += `#windows > div, .winframe, #help { border-image: url("https://www.ourworldofpixels.com/img/window_out.png") 11 repeat; border-image-outset: 4px; }`;

            iconStyler.innerHTML += `body { background-image: url("https://www.ourworldofpixels.com/img/unloaded.png"); }`;

            iconStyler.innerHTML += `#playercount-display, #xy-display, #palette-create, #palette, .framed, .context-menu { border-image: url("https://www.ourworldofpixels.com/img/small_border.png") 5 repeat; }`;

            document.getElementById("help-button").children[0].src = "https://www.ourworldofpixels.com/img/help.png";
        }
        let mouseStyler = document.createElement("style");
        document.getElementById("viewport").appendChild(mouseStyler);
        {
            let i = NS.localStorage.cursors[OWOP.player.tool.id];
            if (i) mouseStyler.innerHTML = `#viewport { cursor: url("${i.icon}") ${i.hotspot[0]} ${i.hotspot[1]}, pointer !important; }`;
            else mouseStyler.innerHTML = `#viewport { }`;
        }
        let oldFunction = Object.getOwnPropertyDescriptor(OWOP.player, "tool").set;
        Object.defineProperty(OWOP.player, 'tool', {
            set: function (x) {
                let i = NS.localStorage.cursors[x];
                if (i) mouseStyler.innerHTML = `#viewport { cursor: url("${i.icon}") ${i.hotspot[0]} ${i.hotspot[1]}, pointer !important; }`;
                else mouseStyler.innerHTML = `#viewport { }`;
                oldFunction.bind(this)(...arguments);
            }
        });
    }());

    // tools
    ((true) && !function () {
        let camera = OWOP.camera;
        let renderer = OWOP.renderer;
        // ! MARK FOR CHANGE
        // let C = OWOP.require('util/color').colorUtils;
        // let C = NS.colorUtils;
        // ! MARK FOR DELETION
        // if (!localStorage.rSC) localStorage.rSC = JSON.stringify([255, 255, 255]);
        // OWOP.player.rightSelectedColor = JSON.parse(localStorage.rSC);
        OWOP.player.rightSelectedColor = [255, 255, 255];
        const isSame = (a, b) => a && b && a[0] === b[0] && a[1] === b[1] && a[2] === b[2];
        let drawText = (ctx, str, x, y, centered) => {
            ctx.strokeStyle = "#000000";
            ctx.fillStyle = "#FFFFFF";
            ctx.lineWidth = 2.5;
            ctx.globalAlpha = 0.5;
            centered && (x -= ctx.measureText(str).width >> 1);
            ctx.strokeText(str, x, y);
            ctx.globalAlpha = 1;
            ctx.fillText(str, x, y);
        };
        let setColor = (cursor, color) => {
            if (!color) return;
            if (cursor === 1) {
                OWOP.player.selectedColor = color;
            } else if (cursor === 2) {
                OWOP.player.rightSelectedColor = color;
                // ! MARK FOR DELETION
                // localStorage.rSC = JSON.stringify(OWOP.player.rightSelectedColor);
            }
        };
        let patternSieve = function (x, y, color) {
            let t = NS.pattern[modulo(x, NS.pattern.x)][modulo(y, NS.pattern.y)];
            return [t.on, NS.patternColors ? t.a : color];
        }
        const renderRings = function (fx, ctx, _time) {
            let e = 5;
            let i = fx.extra.player.x;
            let a = fx.extra.player.y;
            let camx = OWOP.camera.x * 16;
            let camy = OWOP.camera.y * 16;
            let zoom = OWOP.camera.zoom;
            let tool = fx.extra.player.tool;
            let defaultLine = ctx.lineWidth;
            let x = ((i - camx) - tool.offset[0] + tool.cursor.width / 2) * (zoom / 16) | 0;
            let y = ((a - camy) - tool.offset[1] + tool.cursor.height / 2) * (zoom / 16) | 0;
            ctx.globalAlpha = 1;
            let v = (6 - zoom) / 5;
            let strokeWidth = zoom > 6 ? zoom : 6 + (10 * v);
            let arcRadius = zoom > 6 ? zoom * e : 30 - (22 * v);

            ctx.beginPath();
            ctx.strokeStyle = "#000000";
            ctx.lineWidth = strokeWidth;
            ctx.arc(x, y, arcRadius, 0, Math.PI * 2, false);
            ctx.stroke();
            ctx.closePath();

            ctx.beginPath();
            ctx.strokeStyle = "#FFFFFF";
            ctx.lineWidth = strokeWidth * 13 / 16;
            ctx.arc(x, y, arcRadius, 0, Math.PI * 2, false);
            ctx.stroke();
            ctx.closePath();

            ctx.beginPath();
            ctx.lineWidth = strokeWidth * 9 / 16;
            ctx.fillStyle = ctx.strokeStyle = fx.extra.player.htmlRgb;
            ctx.arc(x, y, arcRadius, 0, Math.PI * 2, false);
            ctx.stroke();
            ctx.closePath();

            ctx.lineWidth = defaultLine;
            ctx.globalAlpha = 0.8;
        }
        const renderBorder = function (fx, ctx, _time) {
            let t = "#00FF00";
            let e = 1;
            ctx.globalAlpha = 1;
            ctx.strokeStyle = t || fx.extra.player.htmlRgb;
            // ctx.strokeRect(i, j, OWOP.camera.zoom * e, OWOP.camera.zoom * e);
            let oldWidth = ctx.lineWidth;
            ctx.lineWidth = 5;
            for (let k in NS.PM.border) {
                if (NS.PM.border[k].right || NS.PM.border[k].bottom) {
                    let x = NS.PM.border[k].x;
                    let y = NS.PM.border[k].y;
                    if (Point.distance(new Point(OWOP.mouse.tileX, OWOP.mouse.tileY), new Point(x, y)) > (16 * 25)) continue;
                    let i = (Math.floor(x / (e)) * e - OWOP.camera.x) * OWOP.camera.zoom;
                    let j = (Math.floor(y / (e)) * e - OWOP.camera.y) * OWOP.camera.zoom;
                    ctx.beginPath();
                    if (NS.PM.border[k].bottom) {
                        ctx.moveTo(i, j + OWOP.camera.zoom);
                        ctx.lineTo(i + OWOP.camera.zoom, j + OWOP.camera.zoom);
                        ctx.stroke();
                    }
                    if (NS.PM.border[k].right) {
                        ctx.moveTo(i + OWOP.camera.zoom, j);
                        ctx.lineTo(i + OWOP.camera.zoom, j + OWOP.camera.zoom);
                        ctx.stroke();
                    }
                } else delete NS.PM.border[k];
            }
            ctx.lineWidth = oldWidth;
        }
        const someRenderer = (fx, ctx, time, defaultFx = () => 1) => {
            if (!fx.extra.isLocalPlayer) {
                if (fx.visible && NS.PM.renderPlayerRings) {
                    renderRings(fx, ctx, time);
                    return 1;
                }
                return defaultFx(fx, ctx, time);
            }
            if (NS.PM.renderBorder) renderBorder(fx, ctx, time);
            return 0;
        }
        const selectionRenderer = function (tool) {
            return function (fx, ctx, time) {
                if (someRenderer(fx, ctx, time, () => 1)) return 1;
                let exitState = 0;
                let oldlinew = ctx.lineWidth;
                ctx.lineWidth = 1;
                if (tool.extra.end) {
                    let s = tool.extra.start;
                    let e = tool.extra.end;
                    let x = s[0];
                    let y = s[1];
                    let w = e[0];
                    let h = e[1];
                    if (s[0] > e[0]) [w, x] = [x, w];
                    if (s[1] > e[1]) [h, y] = [y, h];
                    if (tool.extra.state.chunkize) {
                        x = Math.floor(x / 16) * 16;
                        y = Math.floor(y / 16) * 16;
                        w = Math.floor(w / 16) * 16 + 16;
                        h = Math.floor(h / 16) * 16 + 16;
                    }
                    w = w - x;
                    h = h - y;
                    x = (x - camera.x) * camera.zoom + 0.5;
                    y = (y - camera.y) * camera.zoom + 0.5;

                    ctx.beginPath();
                    ctx.rect(x, y, w * camera.zoom, h * camera.zoom);
                    ctx.globalAlpha = 1;
                    ctx.strokeStyle = "#FFFFFF";
                    ctx.stroke();
                    ctx.setLineDash([3, 4]);
                    ctx.strokeStyle = "#000000";
                    ctx.stroke();
                    ctx.globalAlpha = 0.25 + Math.sin(time / 500) / 4;
                    ctx.fillStyle = renderer.patterns.unloaded;
                    ctx.fill();
                    ctx.setLineDash([]);
                    let oldfont = ctx.font;
                    ctx.font = "16px sans-serif";
                    let txt = `${!tool.extra.clicking ? tool.extra.text : ""}(${Math.abs(w)}x${Math.abs(h)})`;
                    let txtx = window.innerWidth >> 1;
                    let txty = window.innerHeight >> 1;
                    txtx = Math.max(x, Math.min(txtx, x + w * camera.zoom));
                    txty = Math.max(y, Math.min(txty, y + h * camera.zoom));

                    drawText(ctx, txt, txtx, txty, true);
                    ctx.font = oldfont;
                    ctx.lineWidth = oldlinew;
                } else {
                    let x = fx.extra.player.x;
                    let y = fx.extra.player.y;
                    let fxx = Math.floor(x / 16);
                    let fxy = Math.floor(y / 16);
                    if (tool.extra.state.chunkize) {
                        fxx = Math.floor(fxx / 16) * 16;
                        fxy = Math.floor(fxy / 16) * 16;
                    }
                    fxx -= camera.x;
                    fxy -= camera.y;
                    fxx *= camera.zoom;
                    fxy *= camera.zoom;
                    ctx.beginPath();
                    ctx.moveTo(0, fxy + 0.5);
                    ctx.lineTo(window.innerWidth, fxy + 0.5);
                    ctx.moveTo(fxx + 0.5, 0);
                    ctx.lineTo(fxx + 0.5, window.innerHeight);

                    //ctx.lineWidth = 1;
                    ctx.globalAlpha = 1;
                    ctx.strokeStyle = "#FFFFFF";
                    ctx.stroke();
                    ctx.setLineDash([3]);
                    ctx.strokeStyle = "#000000";
                    ctx.stroke();

                    ctx.setLineDash([]);
                    ctx.lineWidth = oldlinew;
                    exitState = 1;
                }
                return exitState;
            }
        }
        const renderSelection = function (tool) {
            return function (mouse, _event) {
                // if (false && tool.extra.state.chunkize) {
                //  x = Math.floor(x / 16) * 16;
                //  y = Math.floor(y / 16) * 16;
                //  w = Math.floor(w / 16) * 16 + 16;
                //  h = Math.floor(h / 16) * 16 + 16;
                // }
                let s = tool.extra.start;
                let e = tool.extra.end;
                const isInside = (s, e) => {
                    let x = s[0];
                    let y = s[1];
                    let w = e[0];
                    let h = e[1];
                    return mouse.tileX >= x && mouse.tileX < w && mouse.tileY >= y && mouse.tileY < h;
                }
                const isCorner = (s, e) => {
                    let x = s[0];
                    let y = s[1];
                    let w = e[0];
                    let h = e[1];
                    let cx = (Math.floor(x) - OWOP.camera.x) * OWOP.camera.zoom;
                    let cy = (Math.floor(y) - OWOP.camera.y) * OWOP.camera.zoom;
                    let cw = (Math.floor(w) - OWOP.camera.x) * OWOP.camera.zoom;
                    let ch = (Math.floor(h) - OWOP.camera.y) * OWOP.camera.zoom;
                    let sizeW = Math.min((cw - cx) / 3, 50);
                    let sizeH = Math.min((ch - cy) / 3, 50);
                    let l = (cx < OWOP.mouse.x) && (OWOP.mouse.x < cx + sizeW);
                    let t = (cy < OWOP.mouse.y) && (OWOP.mouse.y < cy + sizeH);
                    let r = (cw - sizeW < OWOP.mouse.x) && (OWOP.mouse.x < cw);
                    let b = (ch - sizeH < OWOP.mouse.y) && (OWOP.mouse.y < ch);
                    let tl = t && l;
                    let tr = t && r;
                    let bl = b && l;
                    let br = b && r;
                    return (tr && 1) || (br && 2) || (bl && 3) || (tl && 4);
                }
                if (mouse.buttons === 1 && !tool.extra.end) {
                    tool.extra.start = [mouse.tileX, mouse.tileY];
                    tool.extra.clicking = true;
                    tool.setEvent('mousemove', (mouse, _event) => {
                        if (tool.extra.start && mouse.buttons === 1) {
                            tool.extra.end = [mouse.tileX, mouse.tileY];
                            return 1;
                        }
                    });
                    const finish = () => {
                        tool.setEvent('mousemove mouseup deselect', null);
                        tool.extra.clicking = false;
                        let s = tool.extra.start;
                        let e = tool.extra.end;
                        let tmp = undefined;
                        if (e) {
                            if (s[0] === e[0] || s[1] === e[1]) {
                                tool.extra.start = undefined;
                                tool.extra.end = undefined;
                            }
                            if (s[0] > e[0]) {
                                tmp = e[0];
                                e[0] = s[0];
                                s[0] = tmp;
                            }
                            if (s[1] > e[1]) {
                                tmp = e[1];
                                e[1] = s[1];
                                s[1] = tmp;
                            }
                        }
                        renderer.render(renderer.rendertype.FX);
                    }
                    tool.setEvent('deselect', finish);
                    tool.setEvent('mouseup', (mouse, _event) => {
                        if (!(mouse.buttons & 1)) {
                            finish();
                        }
                    });
                } else if (mouse.buttons === 1 && tool.extra.end) {
                    if (isInside(s, e)) {
                        switch (isCorner(s, e)) {
                            case 1: {
                                let offx = mouse.tileX;
                                let offy = mouse.tileY;
                                tool.setEvent('mousemove', (mouse, _event) => {
                                    let dx = mouse.tileX - offx;
                                    let dy = mouse.tileY - offy;
                                    tool.extra.start = [s[0], s[1] + dy];
                                    tool.extra.end = [e[0] + dx, e[1]];
                                    {
                                        let s = tool.extra.start;
                                        let e = tool.extra.end;
                                        if (s[0] > e[0]) [s[0], e[0]] = [e[0], s[0]];
                                        if (s[1] > e[1]) [s[1], e[1]] = [e[1], s[1]];
                                    }
                                });
                                const end = () => {
                                    tool.setEvent('mouseup deselect mousemove', null);
                                }
                                tool.setEvent('deselect', end);
                                tool.setEvent('mouseup', (mouse, _event) => (!(mouse.buttons & 1) && end()));
                            } break;
                            case 2: {
                                let offx = mouse.tileX;
                                let offy = mouse.tileY;
                                tool.setEvent('mousemove', (mouse, _event) => {
                                    let dx = mouse.tileX - offx;
                                    let dy = mouse.tileY - offy;
                                    tool.extra.start = [s[0], s[1]];
                                    tool.extra.end = [e[0] + dx, e[1] + dy];
                                    {
                                        let s = tool.extra.start;
                                        let e = tool.extra.end;
                                        if (s[0] > e[0]) [s[0], e[0]] = [e[0], s[0]];
                                        if (s[1] > e[1]) [s[1], e[1]] = [e[1], s[1]];
                                    }
                                });
                                const end = () => {
                                    tool.setEvent('mouseup deselect mousemove', null);
                                }
                                tool.setEvent('deselect', end);
                                tool.setEvent('mouseup', (mouse, _event) => (!(mouse.buttons & 1) && end()));
                            } break;
                            case 3: {
                                let offx = mouse.tileX;
                                let offy = mouse.tileY;
                                tool.setEvent('mousemove', (mouse, _event) => {
                                    let dx = mouse.tileX - offx;
                                    let dy = mouse.tileY - offy;
                                    tool.extra.start = [s[0] + dx, s[1]];
                                    tool.extra.end = [e[0], e[1] + dy];
                                    {
                                        let s = tool.extra.start;
                                        let e = tool.extra.end;
                                        if (s[0] > e[0]) [s[0], e[0]] = [e[0], s[0]];
                                        if (s[1] > e[1]) [s[1], e[1]] = [e[1], s[1]];
                                    }
                                });
                                const end = () => {
                                    tool.setEvent('mouseup deselect mousemove', null);
                                }
                                tool.setEvent('deselect', end);
                                tool.setEvent('mouseup', (mouse, _event) => (!(mouse.buttons & 1) && end()));
                            } break;
                            case 4: {
                                let offx = mouse.tileX;
                                let offy = mouse.tileY;
                                tool.setEvent('mousemove', (mouse, _event) => {
                                    let dx = mouse.tileX - offx;
                                    let dy = mouse.tileY - offy;
                                    tool.extra.start = [s[0] + dx, s[1] + dy];
                                    tool.extra.end = [e[0], e[1]];
                                    {
                                        let s = tool.extra.start;
                                        let e = tool.extra.end;
                                        if (s[0] > e[0]) [s[0], e[0]] = [e[0], s[0]];
                                        if (s[1] > e[1]) [s[1], e[1]] = [e[1], s[1]];
                                    }
                                });
                                const end = () => {
                                    tool.setEvent('mouseup deselect mousemove', null);
                                }
                                tool.setEvent('deselect', end);
                                tool.setEvent('mouseup', (mouse, _event) => (!(mouse.buttons & 1) && end()));
                            } break;
                            default: {
                                let offx = mouse.tileX;
                                let offy = mouse.tileY;
                                tool.setEvent('mousemove', (mouse, _event) => {
                                    let dx = mouse.tileX - offx;
                                    let dy = mouse.tileY - offy;
                                    tool.extra.start = [s[0] + dx, s[1] + dy];
                                    tool.extra.end = [e[0] + dx, e[1] + dy];
                                });
                                const end = () => {
                                    tool.setEvent('mouseup deselect mousemove', null);
                                }
                                tool.setEvent('deselect', end);
                                tool.setEvent('mouseup', (mouse, _event) => (!(mouse.buttons & 1) && end()));
                            }
                        }
                    } else {
                        tool.extra.start = undefined;
                        tool.extra.end = undefined;
                    }
                } else if (mouse.buttons === 2 && tool.extra.end && isInside(s, e)) {
                    tool.extra.start = undefined;
                    tool.extra.end = undefined;
                    let x = s[0];
                    let y = s[1];
                    let w = e[0];
                    let h = e[1];
                    if (tool.extra.state.chunkize) {
                        x = Math.floor(x / 16) * 16;
                        y = Math.floor(y / 16) * 16;
                        w = Math.floor(w / 16) * 16 + 16;
                        h = Math.floor(h / 16) * 16 + 16;
                    }
                    w -= x;
                    h -= y;
                    switch (tool.name) {
                        case "Export": {
                            let warn = false;
                            switch (tool.extra.state.type) {
                                case "export": {
                                    ((x, y, w, h, onblob) => {
                                        // const width = 32, height = 32;
                                        // const data = new Uint8ClampedArray(width * height * 4);

                                        // let index = 0;
                                        // for (let j = y; j < y + h; j++) {
                                        //     for (let i = x; i < x + w; i++) {
                                        //         let pix = undefined;
                                        //         let tempPix = PM.queue[`${i},${j}`];
                                        //         if (!tempPix) {
                                        //             if ((pix = PM.getPixel(i, j), !pix)) {
                                        //                 warn = true;
                                        //                 pix = [255, 255, 255];
                                        //             }
                                        //         } else {
                                        //             pix = tempPix.c.rgb;
                                        //         }
                                        //         data[index++] = pix[0];
                                        //         data[index++] = pix[1];
                                        //         data[index++] = pix[2];
                                        //         data[index++] = 255;
                                        //     }
                                        // }

                                        // const imageData = new ImageData(data, width, height);

                                        // createImageBitmap(imageData, {
                                        //     imageOrientation: "none",
                                        //     premultiplyAlpha: "none",
                                        // }).then(bitmap => {
                                        //     const c = document.createElement('canvas');
                                        //     c.width = w;
                                        //     c.height = h;
                                        //     const ctx = c.getContext('bitmaprenderer');
                                        //     ctx.transferFromImageBitmap(bitmap);
                                        //     c.toBlob(onblob);
                                        // });

                                        let c = document.createElement('canvas');
                                        c.width = w;
                                        c.height = h;
                                        let ctx = c.getContext('2d');
                                        let d = ctx.createImageData(w, h);
                                        let index = 0;
                                        for (let j = y; j < y + h; j++) {
                                            for (let i = x; i < x + w; i++) {
                                                let pix = undefined;
                                                let tempPix = PM.queue[`${i},${j}`];
                                                if (!tempPix) {
                                                    if ((pix = PM.getPixel(i, j), !pix)) {
                                                        warn = true;
                                                        pix = [255, 255, 255];
                                                    }
                                                } else {
                                                    pix = tempPix.c.rgb;
                                                }
                                                d.data[index++] = pix[0];
                                                d.data[index++] = pix[1];
                                                d.data[index++] = pix[2];
                                                d.data[index++] = 255;
                                            }
                                        }
                                        ctx.putImageData(d, 0, 0);
                                        c.toBlob(onblob);
                                    })(x, y, w, h, b => {
                                        let url = URL.createObjectURL(b);
                                        let img = new Image();
                                        img.onload = () => {
                                            new GUIWindow("Resulting image", {
                                                centerOnce: true,
                                                closeable: true
                                            }, win => {
                                                let props = ['width', 'height'];
                                                if (img.width > img.height) {
                                                    props.reverse();
                                                }
                                                let r = img[props[0]] / img[props[1]];
                                                let shownSize = img[props[1]] >= 128 ? 256 : 128;
                                                img[props[0]] = r * shownSize;
                                                img[props[1]] = shownSize;
                                                //win.container.classList.add('centeredChilds');
                                                //setTooltip(img, "Right click to copy/save!");
                                                img.style = "display:block; margin-left: auto; margin-right: auto; padding-bottom:15px;";
                                                //p1.appendChild(document.createElement("br"));
                                                let closeButton = mkHTML("button", {
                                                    innerHTML: "CLOSE",
                                                    style: "width: 100%; height: 30px; margin: auto; padding-left: 10%;",
                                                    onclick: () => {
                                                        img.remove();
                                                        URL.revokeObjectURL(url);
                                                        win.close();
                                                    }
                                                });
                                                let saveButton = mkHTML("button", {
                                                    innerHTML: "SAVE",
                                                    style: "width: 100%; height: 30px; margin: auto; padding-left: 10%;"
                                                });
                                                saveButton.onclick = () => {
                                                    let a = document.createElement('a');
                                                    a.download = `${NS.base64.fromNumber(Date.now())} OWOP_${OWOP.world.name} at ${s[0]} ${s[1]}.png`;
                                                    a.href = img.src;
                                                    a.click();
                                                }
                                                // ! MARK FOR CHANGE
                                                /*
                                                let scalar = document.createElement("input");
                                                scalar.id = "scalar";
                                                scalar.type = "range";
                                                scalar.style = "width: 100%; margin: auto;";
                                                scalar.value = "1";
                                                scalar.min = "1";
                                                scalar.max = "10";
                                                //<p id="scalar-num" style="margin: auto;top: -8px; right: 12px; user-select: none; color: white;">1</p>
                                                scalar.oninput = () => {
                                                    // scalarNum.textContent = scalar.value;
                                                }
                                                */
                                                win.addObj(img).addObj(saveButton).addObj(closeButton);
                                                // p1.appendChild(scalar);
                                            });
                                        }
                                        img.src = url;
                                    });
                                } break;
                                case "color": {
                                    let test = false;
                                    let totalAdded = 0;
                                    let limit = 50;
                                    for (let i = x; i < x + w; i++) {
                                        for (let j = y; j < y + h; j++) {
                                            if (totalAdded >= limit) continue;
                                            let pix = PM.getPixel(i, j);
                                            if (!pix) continue;
                                            for (let k = 0; k < OWOP.player.palette.length; k++) {
                                                let c = OWOP.player.palette[k];
                                                if (isSame(c, pix)) {
                                                    test = true;
                                                    break;
                                                }
                                            }
                                            if (test) {
                                                test = false;
                                                continue;
                                            }
                                            OWOP.player.palette.push(pix);
                                            totalAdded++;
                                        }
                                    }
                                    OWOP.player.paletteIndex = OWOP.player.palette.length - 1;
                                    if (totalAdded >= limit) OWOP.chat.local(`total colors added limit has been reached (${limit} added)`);
                                } break;
                                case "adder": {
                                    for (let i = x; i < x + w; i++) {
                                        for (let j = y; j < y + h; j++) {
                                            let pix = PM.getPixel(i, j);
                                            if (pix && !PM.queue[`${i},${j}`]) PM.setPixel(i, j, pix);
                                        }
                                    }
                                } break;
                                case "filler": {
                                    let pix = OWOP.player.selectedColor;
                                    PM.startHistory();
                                    for (let i = x; i < x + w; i++) {
                                        for (let j = y; j < y + h; j++) {
                                            if (tool.extra.state.rainbow) {
                                                let pixelColor = undefined;
                                                if ((pixelColor = PM.getPixel(tempx + x1 - offset, tempy + y1 - offset), !pixelColor)) continue;
                                                pix = Color.hue((tempx + x1 - offset) - (tempy + y1 - offset), 8);
                                                if (Color.toInt(pixelColor) === Color.toInt(pix)) continue;
                                            }
                                            PM.setPixel(i, j, pix);
                                        }
                                    }
                                    PM.endHistory();
                                } break;
                                case "clearer": {
                                    for (let i = x; i < x + w; i++) {
                                        for (let j = y; j < y + h; j++) {
                                            if (!!PM.queue[`${i},${j}`]) PM.unsetPixel(i, j);
                                        }
                                    }
                                } break;
                            }
                            if (warn) console.warn("Well something happened, you probably tried getting an area outside of loaded chunks.");
                        } break;
                        case "Copy": {
                            let data = [];
                            for (let j = 0; j < h; j++) {
                                data.push([]);
                                for (let i = 0; i < w; i++) {
                                    let pix = PM.getPixel(x + i, y + j);
                                    if (pix) data[j].push(pix);
                                }
                            }
                            if (tool.extra.tempCallback) {
                                if (tool.extra.tempCallback(data)) {
                                    tool.extra.tempCallback = undefined;
                                    OWOP.player.tool = "move";
                                }
                            } else {
                                OWOP.tool.allTools.paste.extra.k = data;
                                OWOP.player.tool = "paste";
                            }
                        } break;
                        case "Area Protect": {
                            undefined; // intentionally left blank
                        } break;
                    }
                }
            }
        }
        const RECT_SELECT_ALIGNED = function (pixelSize, tool, htmlColor) {
            return function (fx, ctx, _time) {
                if (tool?.extra?.state?.chunkize) pixelSize = 16;
                let x = fx.extra.player.x;
                let y = fx.extra.player.y;
                let fxx = (Math.floor(x / (16 * pixelSize)) * pixelSize - camera.x) * camera.zoom;
                let fxy = (Math.floor(y / (16 * pixelSize)) * pixelSize - camera.y) * camera.zoom;
                ctx.globalAlpha = 0.8;
                ctx.strokeStyle = htmlColor || fx.extra.player.htmlRgb;
                ctx.strokeRect(fxx, fxy, camera.zoom * pixelSize, camera.zoom * pixelSize);
                return 1; /* Rendering finished (won't change on next frame) */
            }
        }
        function setTools() {
            const tools = {
                shape: new Tool("Shape", 1, function () {
                    let sideCount = ~~(Math.random() * 15) + 1; // total vertices on the shape
                    let offset = ~~(Math.random() * sideCount - 1) + 1; // default 1, how many times it should skip vertices to draw a line between
                    sideCount = 6;
                    offset = 1;

                    let start = null;
                    let end = null;
                    function line(x1, y1, x2, y2, plot) {
                        let dx = Math.abs(x2 - x1);
                        let sx = x1 < x2 ? 1 : -1;
                        let dy = -Math.abs(y2 - y1);
                        let sy = y1 < y2 ? 1 : -1;
                        let err = dx + dy
                        let e2 = undefined;

                        while (true) {
                            plot(x1, y1);
                            if (x1 === x2 && y1 === y2) break;
                            e2 = 2 * err;
                            if (e2 >= dy) {
                                err += dy;
                                x1 += sx;
                            }
                            if (e2 <= dx) {
                                err += dx;
                                y1 += sy;
                            }
                        }
                    }
                    function shape(x1, y1, x2, y2, sides, plot) {
                        let sin = Math.sin;
                        let cos = Math.cos;
                        let PI = Math.PI;
                        let l1 = sides;
                        let l2 = (2 * PI) / l1;
                        let someRotationIDFK = 0; // some math stuff for rad to deg conversion if we want it
                        let d2 = someRotationIDFK;
                        let d1 = (l2 / 2) + PI + d2;
                        let s1 = (x2 - x1) / 2;
                        let s2 = (y2 - y1) / 2;
                        let x3 = (x2 + x1) / 2;
                        let y3 = (y2 + y1) / 2;

                        for (let p = 0; p < sides; p++) {
                            let x = sin(d1 + l2 * p) * s1 + x3;
                            let y = cos(d1 + l2 * p) * s2 + y3;
                            let xn = sin(d1 + l2 * (p + offset)) * s1 + x3;
                            let yn = cos(d1 + l2 * (p + offset)) * s2 + y3;
                            line(~~x, ~~y, ~~xn, ~~yn, plot);
                        }
                    }
                    let defaultFx = OWOP.fx.player.RECT_SELECT_ALIGNED(1);
                    this.setFxRenderer((fx, ctx, time) => {
                        ctx.globalAlpha = 0.8;
                        ctx.strokeStyle = fx.extra.player.htmlRgb;
                        if (!start || !end || !fx.extra.isLocalPlayer) {
                            defaultFx(fx, ctx, time);
                        } else {
                            ctx.beginPath();
                            shape(start[0], start[1], end[0], end[1], sideCount, (x, y, _xn, _yn) => {
                                ctx.rect((x - camera.x) * camera.zoom, (y - camera.y) * camera.zoom, camera.zoom, camera.zoom);
                            });
                            ctx.stroke();
                        }
                    });
                    this.setEvent("mousedown", mouse => {
                        if (!(mouse.buttons & 0b100)) {
                            start = [mouse.tileX, mouse.tileY];
                        }
                    });
                    this.setEvent("mouseup", mouse => {
                        if (!(mouse.buttons & 0b11) && !start) {
                            shape(start[0], start[1], mouse.tileX, mouse.tileY, sideCount, (x, y) => {
                                let pixel = mouse.buttons === 1 ? OWOP.player.selectedColor : OWOP.player.rightSelectedColor;
                                OWOP.world.setPixel(x, y, pixel);
                            });
                        }
                    });
                    this.setEvent("deselect", _mouse => {
                        start = null;
                        end = null;
                        this.setEvent("tick", null);
                    });
                })
            }
            OWOP.tool.addToolObject(new OWOP.tool.class('Cursor', OWOP.cursors.cursor, null, 1, tool => {
                (function () {
                    function renderPlayer(fx, ctx, time) {
                        if (NS.PM.renderBorder) renderBorder(fx, ctx, time);
                        RECT_SELECT_ALIGNED(+tool.extra.state.scalar, tool)(fx, ctx, time);
                        return 1;
                    }
                    function renderAmicus(fx, ctx, time) {
                        if (fx.visible && NS.PM.renderPlayerRings) {
                            renderRings(fx, ctx, time);
                            RECT_SELECT_ALIGNED(1)(fx, ctx, time);
                        }
                        return 1;
                    }
                    tool.setFxRenderer((fx, ctx, time) => {
                        if (fx.extra.isLocalPlayer) return renderPlayer(fx, ctx, time);
                        else return renderAmicus(fx, ctx, time);
                    });
                })();
                tool.extra.state = {
                    scalar: "1",
                    rainbow: false,
                    chunkize: false,
                    perfect: false,
                    copyCoords: false
                };
                tool.extra.lastX;
                tool.extra.lastY;
                tool.extra.last1PX;
                tool.extra.last1PY;
                tool.extra.last2PX;
                tool.extra.last2PY;
                tool.extra.start;
                tool.extra.c = 0;
                tool.setEvent('mousedown mousemove', (mouse, event) => {
                    if (mouse.buttons !== 2 && mouse.buttons !== 1) return 3;
                    if (tool.extra.state.copyCoords) return ("👻", navigator.clipboard.writeText(OWOP.mouse.tileX + " " + OWOP.mouse.tileY), 3);
                    if (tool.extra.lastX === mouse.tileX && tool.extra.lastY === mouse.tileY) return 3;
                    if (event?.ctrlKey) return setColor(mouse.buttons, PM.getPixel(mouse.tileX, mouse.tileY));
                    let c = mouse.buttons === 1 ? OWOP.player.selectedColor : OWOP.player.rightSelectedColor;
                    if (isNaN(tool.extra.lastX) || isNaN(tool.extra.lastY)) {
                        tool.extra.lastX = mouse.tileX;
                        tool.extra.lastY = mouse.tileY;
                        tool.extra.last1PX = mouse.tileX;
                        tool.extra.last1PY = mouse.tileY;
                        tool.extra.last2PX = mouse.tileX;
                        tool.extra.last2PY = mouse.tileY;
                        tool.extra.start = true;
                    }
                    PM.startHistory();
                    line(tool.extra.lastX, tool.extra.lastY, mouse.tileX, mouse.tileY, undefined, event, (x, y) => {
                        let tempx = x;
                        let tempy = y;
                        if (tool.extra.state.perfect) {
                            let place = false;
                            // check to place
                            if (tool.extra.start) {
                                tool.extra.start = false;
                                place = true;
                            } else {
                                if (tool.extra.last1PX === x && tool.extra.last1PY === y) {
                                    tool.extra.last2PX = tool.extra.last1PX;
                                    tool.extra.last2PY = tool.extra.last1PY;
                                    tool.extra.last1PX = x;
                                    tool.extra.last1PY = y;
                                    return;
                                }
                            }
                            if (!place) {
                                for (let x1 = -1; x1 < 2; x1++) {
                                    for (let y1 = -1; y1 < 2; y1++) {
                                        if (x1 === 0 && y1 === 0) continue;
                                        if (tool.extra.last2PX === (x + x1) && tool.extra.last2PY === (y + y1)) {
                                            tool.extra.last1PX = x;
                                            tool.extra.last1PY = y;
                                            return;
                                        }
                                    }
                                }
                            }
                            tempx = tool.extra.last1PX;
                            tempy = tool.extra.last1PY;
                        }
                        let size = Number(tool.extra.state.scalar);
                        if (tool.extra.state.chunkize) size = 16;
                        let offset = Math.floor(size / 2);
                        if (tool.extra.state.chunkize) {
                            tempx = Math.floor(tempx / 16) * 16;
                            tempy = Math.floor(tempy / 16) * 16;
                            offset = 0;
                        }
                        for (let x1 = 0; x1 < size; x1++) {
                            for (let y1 = 0; y1 < size; y1++) {
                                if (tool.extra.state.rainbow) {
                                    let pixelColor = undefined;
                                    if ((pixelColor = PM.getPixel(tempx + x1 - offset, tempy + y1 - offset), !pixelColor)) continue;
                                    c = mouse.buttons === 1 ? Color.hue((tempx + x1 - offset) - (tempy + y1 - offset), 8) : Color.hue(tool.extra.c++, 8);
                                    if (Color.toInt(pixelColor) === Color.toInt(c)) continue;
                                }
                                PM.setPixel(tempx + x1 - offset, tempy + y1 - offset, c);
                                // ! MARK FOR DELETION
                                // might be something to do with the border of scaled cursor
                                //[Math.round(OWOP.mouse.worldX/16)-0.5, Math.round(OWOP.mouse.worldY/16)-0.5]
                            }
                        }
                        if (tool.extra.state.perfect) {
                            tool.extra.last2PX = tool.extra.last1PX;
                            tool.extra.last2PY = tool.extra.last1PY;
                            tool.extra.last1PX = x;
                            tool.extra.last1PY = y;
                        }
                    });
                    tool.extra.lastX = mouse.tileX;
                    tool.extra.lastY = mouse.tileY;
                    return 3;
                });
                tool.setEvent('mouseup deselect', () => {
                    PM.endHistory();
                    tool.extra.lastX = undefined;
                    tool.extra.lastY = undefined;
                    tool.extra.last1PX = undefined;
                    tool.extra.last1PY = undefined;
                    tool.extra.last2PX = undefined;
                    tool.extra.last2PY = undefined;
                });
                // change color positions
                tool.setEvent('keydown', keys => {
                    if ((keys["87"] && keys["83"]) || !keys["16"]) return;
                    if (keys["87"]) { // w
                        let i1 = OWOP.player.paletteIndex;
                        let i2 = modulo(i1 - 1, OWOP.player.palette.length);
                        if (i2 === OWOP.player.palette.length - 1) {
                            OWOP.player.palette.push(OWOP.player.palette.shift());
                        } else {
                            [OWOP.player.palette[i1], OWOP.player.palette[i2]] = [OWOP.player.palette[i2], OWOP.player.palette[i1]];
                        }
                        OWOP.player.paletteIndex = i2;
                    }
                    if (keys["83"]) { // s
                        let i1 = OWOP.player.paletteIndex;
                        let i2 = modulo(i1 + 1, OWOP.player.palette.length);
                        if (i2 === 0) {
                            OWOP.player.palette.unshift(OWOP.player.palette.pop());
                        } else {
                            [OWOP.player.palette[i1], OWOP.player.palette[i2]] = [OWOP.player.palette[i2], OWOP.player.palette[i1]];
                        }
                        OWOP.player.paletteIndex = i2;
                    }
                });
            }));
            OWOP.tool.addToolObject(new OWOP.tool.class('Pipette', OWOP.cursors.pipette, null, 0, tool => {
                (function () {
                    function renderPlayer(fx, ctx, time) {
                        if (NS.PM.renderBorder) renderBorder(fx, ctx, time);
                        return 1;
                    }
                    function renderAmicus(fx, ctx, time) {
                        if (fx.visible && NS.PM.renderPlayerRings) {
                            renderRings(fx, ctx, time);
                            RECT_SELECT_ALIGNED(1)(fx, ctx, time);
                        }
                        return 1;
                    }
                    tool.setFxRenderer((fx, ctx, time) => {
                        if (fx.extra.isLocalPlayer) return renderPlayer(fx, ctx, time);
                        else return renderAmicus(fx, ctx, time);
                    });
                })();
                tool.extra.state = {};
                tool.setEvent('mousedown mousemove', mouse => {
                    let c = PM.getPixel(mouse.tileX, mouse.tileY);
                    if (!c) return mouse.buttons;
                    switch (mouse.buttons) {
                        case 1:
                            OWOP.player.selectedColor = c;
                            break;
                        case 2:
                            OWOP.player.rightSelectedColor = c;
                            // ! MARK FOR DELETION
                            // localStorage.rSC = JSON.stringify(OWOP.player.rightSelectedColor);
                            break;
                    }
                    return mouse.buttons;
                });
            }));
            OWOP.tool.addToolObject(new OWOP.tool.class('Export', OWOP.cursors.select, null, 0, tool => {
                tool.extra.state = {
                    type: "export",
                    rainbow: false,
                    chunkize: false
                };
                tool.extra.text = "Right click ";
                tool.extra.start = undefined;
                tool.extra.end = undefined;
                tool.extra.clicking = false;
                tool.setFxRenderer(selectionRenderer(tool));
                tool.setEvent('mousedown', renderSelection(tool));
            }));
            OWOP.tool.addToolObject(new OWOP.tool.class('Fill', OWOP.cursors.fill, null, 1, tool => {
                tool.setFxRenderer((fx, ctx, time) => {
                    let defaultFx = OWOP.fx.player.RECT_SELECT_ALIGNED(1);
                    if (someRenderer(fx, ctx, time, defaultFx)) return;

                    ctx.globalAlpha = 0.8;
                    ctx.strokeStyle = Color.toHex(tool.extra.button === 1 ? OWOP.player.selectedColor : OWOP.player.rightSelectedColor);
                    let z = OWOP.camera.zoom;
                    if (!tool.extra.fillingColor) return defaultFx(fx, ctx, time);
                    ctx.beginPath();
                    for (let current in tool.extra.queue) {
                        current = tool.extra.queue[current];
                        if (tool.extra.state.rainbow) ctx.strokeStyle = Color.toHex(Color.hue(current.x - current.y, 8));
                        let x = current.x
                        let y = current.y;
                        ctx.rect((x - OWOP.camera.x) * z, (y - OWOP.camera.y) * z, z, z);
                    }
                    ctx.stroke();
                    return 0;
                });
                tool.extra.state = {
                    rainbow: false,
                    patterns: false,
                    checkered: false,
                    dither: false,
                    dither2: false,
                    dither3: false,
                    dither4: false,
                    dither5: false,
                    dither6: false
                }
                tool.extra.usedQueue = {};
                tool.extra.queue = {};
                tool.extra.fillingColor = undefined;
                tool.extra.button = 0;
                tool.extra.checkered = 0;
                const isFillColor = (x, y) => isSame(PM.getPixel(x, y), tool.extra.fillingColor) && (!tool.extra.usedQueue[`${x},${y}`]) && (tool.extra.queue[`${x},${y}`] = { x: x, y: y }, true);

                function tick() {
                    let selClr = tool.extra.button === 1 ? OWOP.player.selectedColor : OWOP.player.rightSelectedColor;
                    for (let current in tool.extra.queue) {
                        current = tool.extra.queue[current];
                        let x = current.x;
                        let y = current.y;
                        if (tool.extra.state.rainbow) selClr = Color.hue(x - y, 8);
                        let thisClr = PM.getPixel(x, y);
                        if (isSame(thisClr, tool.extra.fillingColor) && !isSame(thisClr, selClr)) {
                            if (tool.extra.state.patterns) {
                                let pS = patternSieve(x, y, selClr);
                                let pix = PM.getPixel(x, y);
                                if (pS[0]) PM.setPixel(x, y, pS[1]);
                                else if (pix && !PM.queue[`${x},${y}`]) PM.setPixel(x, y, pix);
                            } else {
                                if (tool.extra.state.checkered) {
                                    let pattern = [
                                        [1, 0],
                                        [0, 1]
                                    ];
                                    if (pattern[modulo(x, 2)][modulo(y, 2)]) PM.setPixel(x, y, selClr);
                                } else if (tool.extra.state.dither) {
                                    let pattern = [
                                        [1, 0, 1, 0],
                                        [0, 1, 0, 0],
                                        [1, 0, 1, 0],
                                        [0, 0, 0, 1]
                                    ];
                                    if (pattern[modulo(x, 4)][modulo(y, 4)]) PM.setPixel(x, y, selClr);
                                } else if (tool.extra.state.dither2) {
                                    let pattern = [
                                        [0, 0],
                                        [0, 1],
                                        [0, 0],
                                        [1, 0]
                                    ];
                                    if (pattern[modulo(x, 4)][modulo(y, 2)]) PM.setPixel(x, y, selClr);
                                } else if (tool.extra.state.dither3) {
                                    let pattern = [
                                        [1, 0, 0, 0, 1, 0, 1, 0],
                                        [0, 1, 0, 1, 0, 1, 0, 0],
                                        [1, 0, 1, 0, 0, 0, 1, 0],
                                        [0, 0, 0, 1, 0, 1, 0, 1],
                                        [1, 0, 1, 0, 1, 0, 0, 0],
                                        [0, 1, 0, 0, 0, 1, 0, 1],
                                        [0, 0, 1, 0, 1, 0, 1, 0],
                                        [0, 1, 0, 1, 0, 0, 0, 1]
                                    ];
                                    if (pattern[modulo(x, 8)][modulo(y, 8)]) PM.setPixel(x, y, selClr);
                                } else if (tool.extra.state.dither4) {
                                    let pattern = [
                                        [0, 1, 0, 0],
                                        [1, 1, 0, 0],
                                        [0, 0, 1, 1],
                                        [0, 0, 1, 0]
                                    ];
                                    if (pattern[modulo(x, 4)][modulo(y, 4)]) PM.setPixel(x, y, selClr);
                                } else if (tool.extra.state.dither5) {
                                    let pattern = [
                                        [0, 1, 0, 0, 0, 0, 1, 0],
                                        [1, 1, 0, 0, 0, 0, 1, 1],
                                        [0, 0, 1, 1, 1, 1, 0, 0],
                                        [0, 0, 1, 0, 0, 1, 0, 0],
                                        [0, 0, 1, 0, 0, 1, 0, 0],
                                        [0, 0, 1, 1, 1, 1, 0, 0],
                                        [1, 1, 0, 0, 0, 0, 1, 1],
                                        [0, 1, 0, 0, 0, 0, 1, 0]
                                    ];
                                    if (pattern[modulo(x, 8)][modulo(y, 8)]) PM.setPixel(x, y, selClr);
                                } else if (tool.extra.state.dither6) {
                                    let pattern = [
                                        [0, 1, 1, 0, 0],
                                        [1, 1, 1, 1, 0],
                                        [1, 0, 1, 0, 0],
                                        [1, 0, 1, 1, 0],
                                        [0, 0, 0, 0, 0]
                                    ];
                                    if (pattern[modulo(x, 5)][modulo(y, 5)]) PM.setPixel(x, y, selClr);
                                } else if (tool.extra.state.dither7) {
                                    let pattern = [
                                        [1, 1, 1, 0, 1, 1, 1, 0, 1, 0],
                                        [0, 0, 0, 0, 1, 0, 1, 0, 0, 0],
                                        [1, 0, 1, 0, 1, 1, 1, 0, 1, 1],
                                        [1, 0, 0, 0, 0, 0, 0, 0, 1, 0],
                                        [1, 0, 1, 1, 1, 0, 1, 0, 1, 1],
                                        [0, 0, 1, 0, 1, 0, 0, 0, 0, 0],
                                        [1, 0, 1, 1, 1, 0, 1, 1, 1, 0],
                                        [0, 0, 0, 0, 0, 0, 1, 0, 1, 0],
                                        [1, 1, 1, 0, 1, 0, 1, 1, 1, 0],
                                        [1, 0, 1, 0, 0, 0, 0, 0, 0, 0]
                                    ];
                                    if (pattern[modulo(x, 10)][modulo(y, 10)]) PM.setPixel(x, y, selClr);
                                } else if (tool.extra.state.dither8) {
                                    let pattern = [
                                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                                        [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
                                        [0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0],
                                        [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
                                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
                                        [0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
                                        [0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0],
                                        [0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1],
                                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
                                        [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                                        [0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0],
                                        [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0]
                                    ];
                                    if (pattern[modulo(x, 12)][modulo(y, 12)]) PM.setPixel(x, y, selClr);
                                } else {
                                    PM.setPixel(x, y, selClr);
                                }
                            }

                            let t = isFillColor(x, y - 1);
                            let b = isFillColor(x, y + 1);
                            let l = isFillColor(x - 1, y);
                            let r = isFillColor(x + 1, y);

                            t && l && isFillColor(x - 1, y - 1);
                            t && r && isFillColor(x + 1, y - 1);
                            b && l && isFillColor(x - 1, y + 1);
                            b && r && isFillColor(x + 1, y + 1);
                        }
                        delete tool.extra.queue[`${x},${y}`];
                        tool.extra.usedQueue[`${x},${y}`] = true;
                    }
                }
                tool.setEvent("mousedown", (mouse, event) => {
                    if (event.which !== 1 && event.which !== 3) return;
                    renderer.render(renderer.rendertype.FX);
                    tool.extra.button = event.which;
                    tool.extra.fillingColor = PM.getPixel(mouse.tileX, mouse.tileY);
                    tool.extra.queue[`${mouse.tileX},${mouse.tileY}`] = { x: mouse.tileX, y: mouse.tileY };
                    tool.extra.checkered = (mouse.tileX + mouse.tileY) - 2 * Math.floor((mouse.tileX + mouse.tileY) / 2);
                    PM.startHistory();
                    tool.setEvent("tick", tick);
                });
                tool.setEvent("mouseup deselect", mouse => {
                    PM.endHistory();
                    tool.extra.usedQueue = {};
                    tool.extra.queue = {};
                    tool.extra.fillingColor = undefined;
                    tool.extra.button = 0;
                    tool.extra.checkered = 0;
                    tool.setEvent("tick", null);
                    return mouse && 1 & mouse.buttons;
                });
            }));
            OWOP.tool.addToolObject(new OWOP.tool.class('Line', OWOP.cursors.wand, null, 1, tool => {
                tool.extra.state = {
                    rainbow: false,
                    gradient: false
                };
                tool.extra.start = undefined;
                tool.extra.end = undefined;
                tool.extra.lineLength = 0;
                tool.extra.c = 0;
                tool.setFxRenderer((fx, ctx, time) => {
                    let defaultFx = OWOP.fx.player.RECT_SELECT_ALIGNED(1);
                    if (someRenderer(fx, ctx, time, defaultFx)) return;

                    ctx.globalAlpha = 0.8;
                    ctx.strokeStyle = Color.toHex(tool.extra.button === 1 ? OWOP.player.selectedColor : OWOP.player.rightSelectedColor);
                    if (tool.extra.state.rainbow) ctx.strokeStyle = Color.toHex(Color.hue(~~(time / 100), 8));
                    if ((!tool.extra.start || !tool.extra.end) && (defaultFx(fx, ctx, time), true)) return;
                    if (tool.extra.start) tool.extra.end = [OWOP.mouse.tileX, OWOP.mouse.tileY];
                    tool.extra.lineLength = line(tool.extra.start[0], tool.extra.start[1], tool.extra.end[0], tool.extra.end[1], undefined, undefined, (x, y, i) => {
                        ctx.beginPath();
                        if (tool.extra.state.rainbow) ctx.strokeStyle = Color.toHex(Color.hue(~~(time / 100) + i, 8));
                        ctx.rect((x - camera.x) * camera.zoom, (y - camera.y) * camera.zoom, camera.zoom, camera.zoom);
                        ctx.stroke();
                    })[0];
                    if (tool.extra.state.rainbow) return 0;
                });
                tool.setEvent('mousedown mouseup', (mouse, event) => {
                    if (event.which !== 1 && event.which !== 3) return;
                    tool.extra.button = event.which;
                    if (event.type === "mousedown" && !tool.extra.start) return tool.extra.start = [mouse.tileX, mouse.tileY];
                    if (!tool.extra.start) return;
                    tool.extra.end = [mouse.tileX, mouse.tileY];
                    if (event.type === "mouseup" && tool.extra.start[0] === tool.extra.end[0] && tool.extra.start[1] === tool.extra.end[1]) return;
                    PM.startHistory();
                    let sc = PM.getPixel(tool.extra.start[0], tool.extra.start[1]);
                    line(tool.extra.start[0], tool.extra.start[1], tool.extra.end[0], tool.extra.end[1], undefined, undefined, (x, y, i) => {
                        let c = event.which === 1 ? OWOP.player.selectedColor : OWOP.player.rightSelectedColor;
                        if (tool.extra.state.gradient) {
                            let divisor = (tool.extra.lineLength - 1);
                            let r = sc[0] - ((sc[0] - c[0]) / divisor) * i;
                            let g = sc[1] - ((sc[1] - c[1]) / divisor) * i;
                            let b = sc[2] - ((sc[2] - c[2]) / divisor) * i;
                            c = [~~r, ~~g, ~~b];
                            if (i === 0) c = sc;
                        } else if (tool.extra.state.rainbow) c = event.which === 1 ? Color.hue(x - y, 8) : Color.hue(tool.extra.c++, 8);
                        PM.setPixel(x, y, c);
                    });
                    PM.endHistory();
                    tool.extra.start = undefined;
                    tool.extra.end = undefined;
                });
                tool.setEvent('mousemove', mouse => {
                    if (tool.extra.start) tool.extra.end = [mouse.tileX, mouse.tileY];
                });
                tool.setEvent('deselect', () => {
                    PM.endHistory();
                    tool.extra.start = undefined;
                    tool.extra.end = undefined;
                    tool.extra.c = 0;
                });
            }));
            OWOP.tool.addToolObject(new OWOP.tool.class('Copy', OWOP.cursors.copy, null, 1, tool => {
                tool.extra.state = {
                    chunkize: false,
                    margin: false
                };
                tool.extra.text = "Right click to copy area ";
                tool.extra.start = undefined;
                tool.extra.end = undefined;
                tool.extra.clicking = false;
                tool.extra.tempCallback = undefined;
                tool.setFxRenderer(selectionRenderer(tool));
                tool.setEvent('mousedown', renderSelection(tool));
            }));
            OWOP.tool.addToolObject(new OWOP.tool.class('Paste', OWOP.cursors.paste, null, 1, tool => {
                tool.extra.state = {
                    chunkize: false,
                    rc: () => tool.extra.renderData(0b00),
                    rcc: () => tool.extra.renderData(0b01),
                    fh: () => tool.extra.renderData(0b10),
                    fv: () => tool.extra.renderData(0b11),
                    newButton: false
                };
                tool.extra.img = undefined;
                tool.extra.data = undefined;
                tool.extra.renderData = function (type) {
                    let transpose3 = function (m) {
                        let result = new Array(m[0].length);
                        for (let i = 0; i < m[0].length; i++) {
                            result[i] = new Array(m.length - 1);
                            for (let j = m.length - 1; j > -1; j--) {
                                result[i][j] = m[j][i];
                            }
                        }
                        return result;
                    };

                    let reverseRows = function (m) {
                        return m.reverse();
                    };

                    let reverseCols = function (m) {
                        for (let i = 0; i < m.length; i++) {
                            m[i].reverse();
                        }
                        return m;
                    };

                    let rotateCc = m => transpose3(m).reverse();
                    let rotateCw = m => transpose3(m.reverse());
                    switch (type) {
                        case 0: {
                            tool.extra.data = rotateCw(tool.extra.data);
                        } break;
                        case 1: {
                            tool.extra.data = rotateCc(tool.extra.data);
                        } break;
                        case 2: {
                            reverseCols(tool.extra.data);
                        } break;
                        case 3: {
                            reverseRows(tool.extra.data);
                        } break;
                    }
                    ((arr, onblob) => {
                        let c = document.createElement('canvas');
                        let w = arr[0].length;
                        let h = arr.length;
                        c.width = w;
                        c.height = h;
                        let ctx = c.getContext('2d');
                        let d = ctx.createImageData(w, h);
                        for (let j = 0; j < h; j++) {
                            for (let i = 0; i < w; i++) {
                                let pix = arr[j][i];
                                d.data[4 * (j * w + i)] = pix[0];
                                d.data[4 * (j * w + i) + 1] = pix[1];
                                d.data[4 * (j * w + i) + 2] = pix[2];
                                d.data[4 * (j * w + i) + 3] = 255;
                            }
                        }
                        ctx.putImageData(d, 0, 0);
                        c.toBlob(onblob);
                    })(tool.extra.data, b => {
                        let url = URL.createObjectURL(b);
                        let img = new Image();
                        img.onload = () => tool.extra.img = img;
                        img.src = url;
                    });
                }
                tool.setFxRenderer((fx, ctx, time) => {
                    let defaultFx = OWOP.fx.player.RECT_SELECT_ALIGNED(1);
                    if (someRenderer(fx, ctx, time, defaultFx)) return;

                    let p9 = OWOP.camera.zoom;
                    let pp = OWOP.mouse.tileX;
                    let pD = OWOP.mouse.tileY;

                    if (tool.extra.state.chunkize) {
                        pp = Math.floor(pp / 16) * 16;
                        pD = Math.floor(pD / 16) * 16;
                    }

                    pp -= OWOP.camera.x;
                    pD -= OWOP.camera.y;

                    if (tool.extra.img) {
                        ctx.globalAlpha = 0.5 + Math.sin(time / 500) / 4;
                        ctx.strokeStyle = '#000000';
                        ctx.scale(p9, p9);
                        ctx.drawImage(tool.extra.img, pp, pD);
                        ctx.scale(1 / p9, 1 / p9);
                        ctx.globalAlpha = 0.8;
                        ctx.strokeRect(pp * p9, pD * p9, tool.extra.img.width * p9, tool.extra.img.height * p9);
                        return 0;
                    }
                });
                tool.setEvent('select', () => {
                    if (tool.extra.k) {
                        if (tool.extra.k instanceof Image) tool.extra.k = NS.getImageData(tool.extra.k);
                        tool.extra.data = tool.extra.k;
                        tool.extra.renderData();
                        delete tool.extra.k;
                        return;
                    }
                    let p6 = document.createElement('input');
                    p6.type = 'file';
                    p6.accept = 'image/*';
                    p6.addEventListener('change', () => {
                        if (!p6.files || !p6.files[0]) return;
                        let p7 = new FileReader();
                        p7.addEventListener('load', () => {
                            let p8 = new Image();
                            p8.addEventListener('load', () => {
                                tool.extra.data = NS.getImageData(p8);
                                tool.extra.renderData();
                            });
                            p8.src = p7.result;
                            // ! MARK FOR IMPLEMENTATION
                            // note: read the filereader documentation for memory leak
                            // p7.removeEventListener();
                        });
                        p7.readAsDataURL(p6.files[0]);
                    });
                    p6.click();
                });
                tool.setEvent('mousedown', (mouse, _event) => {
                    if (!(mouse.buttons & 1)) return;
                    if (!tool.extra.data) return;
                    let x = mouse.tileX;
                    let y = mouse.tileY;
                    let data = tool.extra.data;
                    let fix = (p6, p7, p8) => Math.floor(p6 * (1 - p8) + p7 * p8);

                    if (tool.extra.state.chunkize) {
                        x = Math.floor(x / 16) * 16;
                        y = Math.floor(y / 16) * 16;
                    }
                    PM.startHistory();
                    // PM.pasteImage(data, [...OWOP.player.rightSelectedColor]);
                    // break up images into 4x4 chunks of history segments which only calculate when someone gets near enough to the chunk
                    // this functionality should be basically a 3x3 area of 4x4 chunks surrounding the center 4x4 that the player sits on
                    // this can be globally centered or locally centered where it gets pasted on to do these distance calculations (it doesnt matter which one)
                    // for moderators the areas would be bigger and can be calculated faster since we are directly affecting chunks not pixels and can en-masse do calculating of bigger areas easier, the sizes can be determined later
                    for (let j = 0; j < data.length; j++) {
                        for (let i = 0; i < data[0].length; i++) {
                            let d = data[j][i];
                            let color = PM.getPixel(i + x, j + y);
                            if (tool.extra.state.newButton) {
                                if (isSame(d, OWOP.player.rightSelectedColor)) {
                                    PM.setPixel(i + x, j + y, color);
                                    continue;
                                }
                            }
                            if (!color) continue;
                            let pH = !isNaN(d[3]) ? d[3] / 255 : 1;
                            color = [fix(color[0], d[0], pH), fix(color[1], d[1], pH), fix(color[2], d[2], pH)];
                            PM.setPixel(i + x, j + y, color);
                        }
                    }
                    PM.endHistory();
                });
            }));
            OWOP.tool.addToolObject(new OWOP.tool.class('Write', OWOP.cursors.write, null, 1, tool => {
                tool.extra.state = {
                    rainbow: false
                };
                tool.extra.text = "";
                tool.extra.position = 0;
                tool.extra.start = undefined;
                tool.extra.end = undefined;
                tool.extra.newText = textData.newText;
                tool.extra.cyrillic = textData.cyrillic;
                function setText(t, pos, func) {
                    let localPos = [...pos];
                    let furthestPos = [...pos];
                    function setLetter(letter, pos, func) {
                        if (letter === "\n") return 1;
                        let letterData = tool.extra.newText[letter];
                        if (!letterData) letterData = tool.extra.cyrillic[letter];
                        if (!letterData) letterData = tool.extra.newText[letter.toLocaleLowerCase()];
                        if (!letterData) letterData = tool.extra.cyrillic[letter.toLocaleLowerCase()];
                        if (!letterData) return 0;
                        for (let x = 0; x < letterData.width; x++) {
                            for (let y = 0; y < letterData.height; y++) {
                                if (letterData.text[x + y * letterData.width] !== "0") func(pos[0] + x, pos[1] + y + letterData.skip);
                            }
                        }
                        return letterData;
                    }
                    for (let p5 = 0; p5 < t.length; p5++) {
                        let l = setLetter(t[p5], localPos, func);
                        if (l === 0) continue;
                        if (l === 1) {
                            localPos[0] = pos[0];
                            localPos[1] = localPos[1] + tool.extra.newText.data.height + 1;
                        } else {
                            localPos[0] += l.width + tool.extra.newText.data.gap;
                        }
                        if (localPos[0] > furthestPos[0]) furthestPos[0] = localPos[0];
                        if (localPos[1] > furthestPos[1]) furthestPos[1] = localPos[1];
                    }
                    return furthestPos;
                }
                tool.setFxRenderer((fx, ctx, time) => {
                    if (someRenderer(fx, ctx, time, () => 1)) return;

                    let camera = OWOP.camera;
                    let oldlinew = ctx.lineWidth;
                    ctx.lineWidth = 2;
                    let s = undefined;
                    let e = undefined;
                    if (!tool.extra.start) {
                        s = [OWOP.mouse.tileX, OWOP.mouse.tileY];
                        ctx.strokeStyle = "#00FF00";
                    } else {
                        s = tool.extra.start;
                        ctx.strokeStyle = "#FF0000";
                    }
                    let oldFillstyle = ctx.fillStyle;
                    ctx.fillStyle = OWOP.player.htmlRgb;
                    let tempEnd = setText(tool.extra.text, [...s], (x, y) => {
                        let x1 = (x - camera.x) * camera.zoom + 0.5;
                        let y1 = (y - camera.y) * camera.zoom + 0.5;
                        ctx.fillStyle = tool.extra.state.rainbow ? Color.toHex(Color.hue(x - y, 8)) : OWOP.player.htmlRgb;
                        ctx.fillRect(x1, y1, camera.zoom, camera.zoom);
                    });
                    e = [tempEnd[0] + 1, tempEnd[1] + 8]
                    if (tool.extra.end) tool.extra.end = e;
                    let x = (s[0] - camera.x) * camera.zoom + 0.5;
                    let y = (s[1] - camera.y) * camera.zoom + 0.5;
                    let w = e[0] - s[0];
                    let h = e[1] - s[1];
                    ctx.beginPath();
                    ctx.rect(x, y, w * camera.zoom, h * camera.zoom);
                    ctx.stroke();
                    ctx.lineWidth = oldlinew;
                    ctx.fillStyle = oldFillstyle;
                    return 0;
                });
                tool.setEvent('mousedown', (mouse, _event) => {
                    let s = tool.extra.start;
                    let e = tool.extra.end;
                    const isInside = () => mouse.tileX >= s[0] && mouse.tileX < e[0] && mouse.tileY >= s[1] && mouse.tileY < e[1];
                    if (mouse.buttons === 1 && !tool.extra.end) {
                        tool.extra.start = [mouse.tileX, mouse.tileY];
                        tool.extra.end = [mouse.tileX + 1, mouse.tileY + 7];
                        tool.setEvent('keydown', (keysDown, event, isNS) => {
                            if (!isNS) return;
                            if (event.key.length > 1) {
                                switch (event.key) {
                                    case "Enter": {
                                        tool.extra.text += "\n";
                                    } break;
                                    case "Backspace": {
                                        let t = tool.extra.text.split("");
                                        t.pop();
                                        tool.extra.text = t.join("");
                                    } break;
                                }
                                return;
                            }
                            tool.extra.text += event.key;
                            return 1;
                        });
                    } else if (mouse.buttons === 1 && tool.extra.end) {
                        if (isInside()) {
                            let offx = mouse.tileX;
                            let offy = mouse.tileY;
                            tool.setEvent('mousemove', (mouse, _event) => {
                                let dx = mouse.tileX - offx;
                                let dy = mouse.tileY - offy;
                                tool.extra.start = [s[0] + dx, s[1] + dy];
                                tool.extra.end = [e[0] + dx, e[1] + dy];
                            });
                            tool.setEvent('mouseup', () => tool.setEvent('mouseup mousemove', null));
                        } else {
                            tool.extra.start = undefined;
                            tool.extra.end = undefined;
                        }
                    } else if (mouse.buttons === 2 && tool.extra.end && isInside()) {
                        PM.startHistory();
                        setText(tool.extra.text, [...tool.extra.start], (x, y) => PM.setPixel(x, y, tool.extra.state.rainbow ? Color.hue(x - y, 8) : OWOP.player.selectedColor));
                        PM.endHistory();
                        return true;
                    }
                });
                tool.setEvent('deselect', () => {
                    tool.extra.position = 0;
                    tool.extra.start = undefined;
                    tool.extra.end = undefined;
                    // ! MARK FOR CHANGE
                    // tool.extra.text = "";
                    tool.setEvent('keydown mouseup mousemove', null);
                });
                tool.setEvent('keyup', () => 1);
            }));
            OWOP.tool.addToolObject(tools.shape);
            if (OWOP?.tool?.allTools?.pipette) OWOP.tool.allTools.pipette.fxRenderer = someRenderer;
            if (OWOP?.tool?.allTools?.move) OWOP.tool.allTools.move.fxRenderer = someRenderer;
            if (OWOP?.tool?.allTools?.zoom) OWOP.tool.allTools.zoom.fxRenderer = someRenderer;
            OWOP.tool.updateToolbar();
            let r = 0;
            for (let e in OWOP.tool.allTools) {
                e = OWOP.tool.allTools[e];
                if (e.rankRequired < 2) r++;
            }
            document.getElementById("toole-container").style.maxWidth = 40 * Math.ceil(r / 8) + "px";
            document.getElementById("toole-container").parentElement.style.transform = "translate(7px, 60px)";
        }
        function a() {
            if (OWOP?.tool !== undefined && OWOP?.player?.tool?.id !== undefined) setTools();
            else {
                console.error("will this ever log ever?");
                setTimeout(a, 1e2);
            }
        }
        a();
    }());

    // setting style classes
    ((true) && !function () {
        let nekoStyles = document.createElement("style");
        nekoStyles.innerHTML = `
			.ns_topbar {
				width: calc(100vw - 55px);
				display: flex;
				flex-direction: row;
				justify-content: space-between;
                position: fixed;
                top: 27px;
			}
			.ns_righttopbar {
				display: flex;
				flex-direction: row;
				justify-content: flex-start;
			}
			.ns_lefttopbar {
				display: flex;
				flex-direction: row;
				justify-content: flex-end;
			}
			.ns_rtelements {
				position: relative !important;
				margin: 0px 10px;
			}
			.ns_container {
				margin: 0px;
				border-radius: 5px;
				background-color: #7e635c;
				box-shadow: inset 3px 2px 0px 0px #4d313b;
			}
			.ns_vertical {
				width: 5px;
			}
			.ns_horizontal {
				height: 5px;
			}
			.ns_xydisplay {
				position: relative !important;
				top: 0px !important;
				left: 0px !important;
				margin-right: 10px;
			}
			.ns_rSCcontainer {
				display: flex;
				flex-direction: row;
			}
			.ns_playercountDisplay {
				position: relative !important;
				top: 0px !important;
				right: 0px !important;
				margin-left: 10px;
			}
			.ns_dropdown {
				padding: 3px 0px;
				background: #aba389;
			}
			.ns_button {
				width: 16px;
				height: 16px;
				position: fixed;
				top: -5px;
				padding: 0px;
				border: 0px;
			}
			.tabp {
				display: flex;
				justify-content: space-between;
				margin: 1px 0px;
			}
			#chat {
				    /*
                bottom: 10px !important;
                    */
				right: 55px !important;
			}
			#chat-input {
				overflow: auto !important;
			}
		`;
        document.head.appendChild(nekoStyles);
    }());

    // chat listeners & teleport handling
    ((true) && !function () {
        NS.teleport = function () {
            let { x, y } = NS.teleport.camera;
            if (isNaN(x) || isNaN(y)) {
                NS.teleport.camera = {};
                NS.teleport.teleporting = false;
                return;
            }
            let dx = x - OWOP.camera.x;
            let dy = y - OWOP.camera.y;
            OWOP.camera.zoom = 32;

            let p = 9952;
            let d = Math.sqrt((x - OWOP.mouse.tileX) ** 2 + (y - OWOP.mouse.tileY) ** 2) * (1 / p);
            let xdirection = (x - OWOP.mouse.tileX) / d;
            let ydirection = (y - OWOP.mouse.tileY) / d;

            let p1 = new Point(x, y);
            let p2 = new Point(OWOP.mouse.tileX, OWOP.mouse.tileY);
            let distance = Point.distance(p1, p2);

            let tempx = Math.min(Math.max(x, -480000), 480000);
            let tempy = Math.min(Math.max(y, -480000), 480000);
            let p3 = new Point(tempx, tempy);

            if (Point.distance(p2, p3) > 100 && Point.distance(p1, p3) < distance) {
                OWOP.emit(29, tempx, tempy);
                setTimeout(() => NS.teleport(), 250);
                return;
            }

            if (distance < p) {
                if (distance > 100) {
                    setTimeout(() => NS.teleport(), 2000);
                } else {
                    NS.teleport.camera = {};
                    NS.teleport.teleporting = false;
                }
                OWOP.emit(29, Math.round(-window.innerWidth / OWOP.camera.zoom / 2 + dx) + OWOP.camera.x, Math.round(-window.innerHeight / OWOP.camera.zoom / 2 + dy) + OWOP.camera.y);
                return;
            }
            OWOP.emit(29, Math.round(xdirection) + OWOP.camera.x, Math.round(ydirection) + OWOP.camera.y);
            NS.teleport.teleporting = true;
            setTimeout(() => NS.teleport(), 150);
        }

        NS.teleport.camera = {};
        NS.teleport.teleporting = false;


        let originalFunction = OWOP.chat.sendModifier;
        OWOP.chat.sendModifier = function (...args) {
            let command = args[0].slice(1).split(' ');
            if (args[0].startsWith('/')) {
                switch (command[0].toLocaleLowerCase()) {
                    case "commands":
                    case "help": {
                        OWOP.chat.local(`Commands: /tp, /whitelist, /msg`);
                    } break;
                    case "tp": {
                        let x = undefined;
                        let y = undefined;
                        if (command.length === 3) {
                            [x, y] = [Number(command[1]), Number(command[2])];
                        }
                        if (command.length === 2) {
                            if (isNaN(Number(command[1]))) break;
                            let p = OWOP.misc._world.players[command[1]];
                            if (!p) {
                                OWOP.chat.local(`Player ${command[1]} doesn't exist.`);
                                break;
                            }
                            ({ tileX: x, tileY: y } = p);
                        }
                        if (isNaN(x) || isNaN(y)) {
                            NS.teleport.camera = {};
                            break;
                        }
                        if (Math.abs(x) > 0xFFFFFF) {
                            x = Math.sign(x) * 0xFFFFFF;
                        }
                        if (Math.abs(y) > 0xFFFFFF) {
                            y = Math.sign(y) * 0xFFFFFF;
                        }
                        if (Math.abs(x) < 5e5 && Math.abs(y) < 5e5) {
                            NS.teleport.camera = {};
                            OWOP.emit(29, x, y);
                            break;
                        }
                        NS.teleport.camera = { x: x, y: y };
                        OWOP.camera.zoom = 32;
                        if (!NS.teleport.teleporting) {
                            OWOP.chat.local("Press Esc to cancel teleport OR send \"/tp\" in chat.");
                            NS.teleport();
                        }
                    } break;
                    case "chat": {
                        if (command[1] === "all") {
                            NS.privateMessageID = void 0;
                            OWOP.chat.local(`Chat set to Mode: All.`);
                        } else if (isNaN(Number(command[1]))) {
                            undefined; // intentionally left blank
                        } else {
                            OWOP.chat.local(`Chat set to Mode: Private Messaging\nID: ${command[1]}`);
                        }
                        NS.privateMessageID = Number(command[1]);
                        command[0] = "tell";
                        args[0] = "/" + command.join(" ");
                    } break;
                    case "pm":
                    case "message":
                    case "msg": {
                        command[0] = "tell";
                        args[0] = "/" + command.join(" ");
                    } break;
                    case "wl":
                    case "whitelist": {
                        if (OWOP.player.rank > 1 && PM.enableMod) OWOP.chat.local(`Disable moderator on PM to allow whitelist to work.`);
                        if (!command[1]) {
                            OWOP.chat.local(`Whitelist: ${Object.keys(PM.whitelist).join(", ")}`);
                            console.log(1);
                            break;
                        }
                        switch (command[1]) {
                            case "add": {
                                if (isNaN(Number(command[2]))) {
                                    OWOP.chat.local(`Syntax: /whitelist [add/remove] [id]`);
                                    console.log(3);
                                    break;
                                }
                                if (PM.whitelist[command[2]]) {
                                    OWOP.chat.local(`Player ${command[2]} is already whitelisted.`);
                                    console.log(4);
                                    break;
                                }
                                if (!OWOP.misc._world.players[command[2]]) {
                                    OWOP.chat.local(`Player ${command[2]} doesn't exist.`);
                                    console.log(5);
                                    break;
                                }
                                PM.whitelist[command[2]] = true;
                                OWOP.chat.local(`Player ${command[2]} added to whitelist.`);
                                console.log(6);
                            } break;
                            case "remove": {
                                if (isNaN(Number(command[2]))) {
                                    OWOP.chat.local(`Syntax: /whitelist [add/remove] [id]`);
                                    console.log(7);
                                    break;
                                }
                                if (!PM.whitelist[command[2]]) {
                                    OWOP.chat.local(`Player ${command[2]} is not on the whitelist.`);
                                    console.log(8);
                                    break;
                                }
                                delete PM.whitelist[command[2]];
                                OWOP.chat.local(`Player ${command[2]} removed from whitelist.`);
                                console.log(9);
                            } break;
                            default: {
                                undefined; // intentionally left blank
                            }
                        }
                    } break;
                }
            } else if (NS.privateMessageID) {
                command[0] = "tell";
                args[0] = "/" + command.join(" ");
            }
            return originalFunction(...args);
        }
        return;

        NS.privateMessageID = void 0;
        let cm = document.getElementById("chat-messages");
        const observer = new MutationObserver(ml => {
            ml.forEach((m) => {
                m.addedNodes.forEach(e => {
                    let t = e.innerText;
                    let id = OWOP.player.id;
                    if (!t.match(new RegExp(`(^\\[${id}\\] [\\w\\d]+: )|(^${id}: )`))) {
                        if (t.replace(/(^\[(\d+)\] [\w\d]+: )|(^(\d+): )/, "").replace(/\n+/g, "").split(" ").some(s => s === `${id}`)) e.style = "background: #FF404059;";
                    }
                })
            });
        });
        observer.observe(cm, { childList: true });
        OWOP.on(owop.events.net.chat, function (text) {
            if (text.startsWith("[D]")) {
                let nickname = text.split(": ")[0] + ": ";
                text = text.slice(nickname.length);
            } else if (text.startsWith("[Server]") || text.startsWith("Server:") || text.startsWith("Nickname set to") || text.startsWith("User: ")) {
                undefined; // intentionally left blank
            } else if (text.startsWith("->")) {
                let cuttxt = text.slice(3);
                let id = parseInt(cuttxt);
                cuttxt = cuttxt.slice(id.toString().length);
                if (cuttxt.startsWith(" tells you: ")) {
                    text = cuttxt.slice(12);
                    // them saying
                } else {
                    // me saying
                }
            } else if (text.startsWith("(M)")) {
                undefined; // intentionally left blank
            } else if (isNaN(text.split(": ")[0]) && text.split(": ")[0].charAt(0) !== "[") {
                undefined; // intentionally left blank
            } else {
                let nickname = text.split(": ")[0];
                // let id = nickname.startsWith("[") ? nickname.split(" ")[0].slice(1, -1) : nickname;
                // id = parseInt(id);
                text = text.slice(nickname.length + 2);
            }
        });
    }());

    // topbar elements
    ((true) && !function () {
        // get rid of owop's displayers, since we cant really affect their native functions
        document.querySelector("#xy-display").style.display = "none";
        document.querySelector("#playercount-display").style.display = "none";

        // create our own to add our own infos
        let topBar = document.createElement("span");
        topBar.className = "ns_topbar";
        topBar.innerHTML = `
			<span class="ns_lefttopbar">
				<span id="ns_xydisplay_pointer" class="framed ns_rtelements whitetext"></span>
				<span id="ns_chunkdisplay" class="framed ns_rtelements whitetext"></span>
			</span>
			<span class="ns_righttopbar">
				<span style="width: 128px; margin-right: 10px;"></span>
				<span class="framed ns_rtelements ns_rSCcontainer whitetext">
					<span>Right Color: </span>
					<span id="ns_rSCcolor" class="ns_rSCspan" style="width:40px;height:17px;background:#FFFFFF;"></span>
				</span>
				<span id="ns_playerID" class="framed ns_rtelements whitetext">Your ID: null</span>
				<span id="ns_playercountDisplay" class="framed ns_rtelements whitetext"></span>
			</span>
		`;
        //let nsrt = topBar.querySelector(".ns_righttopbar");
        //nsrt.insertBefore(document.querySelector("#dinfo-display"), nsrt.children[1]);
        document.body.appendChild(topBar);
        // NS.M14.eventSys.emit(NS.M13.EVENTS.net.donUntil, Date.now() + 10000000, 2)
        // dinfo-display
        // let rightBar = document.createElement("span");
        // let leftBar = document.createElement("span");
        // let xyDisplay = document.querySelector("#xy-display");
        // let chunkXchunkYDisplay = document.createElement("span");
        // let fillerSpan = document.createElement("span");
        // let rSCcontainer = document.createElement("span");
        // let rSCtext = document.createElement("span");
        // let rSCspan = document.createElement("span");
        // let playerID = document.createElement("span");
        // let playercountDisplay = document.querySelector("#playercount-display");
        // rSCcontainer.appendChild(rSCtext);
        // rSCcontainer.appendChild(rSCspan);
        // leftBar.appendChild(xyDisplay);
        // leftBar.appendChild(chunkXchunkYDisplay);
        // rightBar.appendChild(fillerSpan);
        // rightBar.appendChild(rSCcontainer);
        // rightBar.appendChild(playerID);
        // rightBar.appendChild(playercountDisplay);
        // topBar.appendChild(leftBar);
        // topBar.appendChild(rightBar);
        // document.body.appendChild(topBar);

        // xyDisplay.classList.add("framed");
        // chunkXchunkYDisplay.classList.add("framed");
        // rSCcontainer.classList.add("framed");
        // playerID.classList.add("framed");
        // playercountDisplay.classList.add("framed");

        // topBar.classList.add("ns_topbar");
        // leftBar.classList.add("ns_lefttopbar");
        // rightBar.classList.add("ns_righttopbar");
        // xyDisplay.classList.add("ns_xydisplay");
        // chunkXchunkYDisplay.classList.add("ns_rtelements");
        // chunkXchunkYDisplay.classList.add("whitetext");
        // rSCcontainer.classList.add("ns_rtelements");
        // rSCcontainer.classList.add("ns_rSCcontainer");
        // rSCcontainer.classList.add("whitetext");

        // playerID.classList.add("ns_rtelements");
        // playerID.classList.add("whitetext");
        // playercountDisplay.classList.add("ns_playercountDisplay");

        // fillerSpan.style.width = "128px";
        // fillerSpan.style["margin-right"] = "10px";

        // rSCspan.style.width = "40px";
        // rSCspan.style.height = "17px";
        // rSCspan.style.background = "#FFFFFF";

        // rSCtext.textContent = "Right Color:";
        // playerID.textContent = "Your ID: null";


        OWOP.elements.topBar = topBar;
        // OWOP.elements.chunkXchunkYDisplay = chunkXchunkYDisplay;
        // ! MARK FOR CHANGE
        setInterval(() => {
            let rSCspan = document.querySelector("#ns_rSCcolor");
            rSCspan && (
                rSCspan.style.background = Color.toHex(OWOP.player.rightSelectedColor)
            );
            let playerID = document.querySelector("#ns_playerID");
            playerID && (
                playerID.textContent = `Your ID: ${OWOP.player.id}`
            );
        }, 100);
        let playercountDisplay = document.querySelector("#ns_playercountDisplay");
        playercountDisplay.textContent = `${Object.keys(OWOP.misc._world.players).length + 1} cursors online`;
        let ns_xydisplay_pointer = document.querySelector("#ns_xydisplay_pointer");
        ns_xydisplay_pointer.textContent = `X: 0, Y: 0`;
        let ns_chunkdisplay = document.querySelector("#ns_chunkdisplay");
        ns_chunkdisplay.textContent = `ChunkX: 0, ChunkY: 0`;
        OWOP.on(OWOP.events.net.world.join, function () {
            playercountDisplay.textContent = `Waiting.`;
        }.bind(this));
        OWOP.on(OWOP.events.net.world.leave, function () {
            playercountDisplay.textContent = `Offline.`;
        }.bind(this));
        OWOP.on(OWOP.events.net.playerCount, function (count) {
            playercountDisplay.textContent = `${count} cursors online`;
        }.bind(this));
    }());

    // setting wasd movement
    ((true) && !function () {
        clearInterval(OWOP.misc.tickInterval);
        NS.tickIntervalNS = setInterval(mainTick, 1000 / OWOP.options.tickSpeed);
        function mainTick() {
            OWOP.emit(OWOP.events.tick, undefined /*t*/);
            if (null !== OWOP.player.tool && null !== OWOP.misc._world) OWOP.player.tool.call("tick");
            if (OWOP.player.tool === OWOP.tool.allTools.write) return;
            let t = ++OWOP.misc.tick;
            let e = Math.max(Math.min(OWOP.options.movementSpeed, 64), 1);
            let n = 0;
            let r = 0;
            (NS.keysdown[38] || (NS.keysdown[87] && !NS.keysdown[16])) && (r -= e);
            (NS.keysdown[37] || (NS.keysdown[65] && !NS.keysdown[16])) && (n -= e);
            (NS.keysdown[40] || (NS.keysdown[83] && !NS.keysdown[16])) && (r += e);
            (NS.keysdown[39] || (NS.keysdown[68] && !NS.keysdown[16])) && (n += e);
            if (0 !== n || 0 !== r) {
                OWOP.camera.moveCameraBy(n, r);
                A("mousemove", OWOP.mouse.x, OWOP.mouse.y);
            }
        }
        function A(eventName, x, y) {
            OWOP.mouse.x = x;
            OWOP.mouse.y = y;
            let o = 0;
            if (null !== OWOP.misc._world) OWOP.mouse.validTile = OWOP.misc._world.validMousePos(OWOP.mouse.tileX, OWOP.mouse.tileY);
            if (null !== OWOP.player.tool) o = OWOP.player.tool.call(eventName, [OWOP.mouse]);
            if (updateCoordDisplay(OWOP.mouse.tileX, OWOP.mouse.tileY)) null;//NS.M21.updateClientFx();
            return o;
        }
        function updateCoordDisplay(x, y) {
            if (!(OWOP.misc.lastXYDisplay[0] !== x || OWOP.misc.lastXYDisplay[1] !== y)) return false;
            OWOP.misc.lastXYDisplay = [x, y]
            if (OWOP.options.hexCoords) {
                (x = (x < 0 ? "-" : "") + "0x" + Math.abs(x).toString(16), y = (y < 0 ? "-" : "") + "0x" + Math.abs(y).toString(16))
            }
            OWOP.elements.xyDisplay.innerHTML = "X: " + x + ", Y: " + y;
            OWOP.elements.chunkXchunkYDisplay.innerHTML = "ChunkX: " + Math.floor(x / 16) + ", ChunkY: " + Math.floor(y / 16);
            return true;
        }
        function updateMouse(e, type, x, y) {
            if (type !== 'mousemove') return;
            let xydisplay = document.querySelector("#ns_xydisplay_pointer");
            let chunkXchunkYDisplay = document.querySelector("#ns_chunkdisplay");
            xydisplay.textContent = `X: ${x}, Y: ${y}`;
            chunkXchunkYDisplay.textContent = `ChunkX: ${Math.floor(OWOP.mouse.tileX / 16)}, ChunkY: ${Math.floor(OWOP.mouse.tileY / 16)}`;
        }
        window.addEventListener("mousemove", event => {
            let mouse = event;
            let cancelledButtons = updateMouse(event, 'mousemove', OWOP.mouse.tileX, OWOP.mouse.tileY);
            let remainingButtons = mouse.buttons & ~cancelledButtons;
            if (remainingButtons & 0b100) { /* If middle click was not used for anything */
                //! i didnt check if NS.M20.moveCameraBy is correct;
                // OWOP.camera.moveCameraBy((mouse.mouseDownWorldX - mouse.worldX) / 16, (mouse.mouseDownWorldY - mouse.worldY) / 16);
            }
        });
        const mousewheel = event => {
            if (event.ctrlKey) zoom(OWOP.mouse, Math.sign(-event.deltaY));
            else OWOP.player.paletteIndex += Math.sign(event.deltaY);
        };

        document.getElementById("viewport").addEventListener("wheel", mousewheel, { passive: true, NS: true });
        document.getElementById("viewport").addEventListener("wheel", (function (e) { e.preventDefault() }), { passive: false, NS: true });

        function zoom(mouse, type) {
            let lzoom = OWOP.camera.zoom;
            let nzoom = OWOP.camera.zoom;
            let offX = 0;
            let offY = 0;
            let w = window.innerWidth;
            let h = window.innerHeight;
            if (type === 1) {
                // Zoom in
                nzoom *= 1 + OWOP.options.zoomStrength;
                offX = (mouse.x - w / 2) / nzoom;
                offY = (mouse.y - h / 2) / nzoom;
            } else if (type === -1) {
                // Zoom out
                nzoom /= 1 + OWOP.options.zoomStrength;
                offX = (mouse.x - w / 2) * (3 / lzoom - 2 / nzoom);
                offY = (mouse.y - h / 2) * (3 / lzoom - 2 / nzoom);
            } else if (type === 3) {
                // Reset zoom (right + left click)
                // nzoom = OWOP.options.defaultZoom;
            }
            nzoom = Math.round(nzoom);
            OWOP.camera.zoom = nzoom;
            if (OWOP.camera.zoom !== lzoom) {
                OWOP.camera.moveCameraBy(offX, offY);
            }
        }
    }());

    // window setup
    ((true) && !function () {
        function optionmaker(name, inputType, checked, onclick) {
            let current = mkHTML("div");
            current.className = "tabp";
            current.appendChild(mkHTML("p", { innerHTML: name }));
            let button = mkHTML("button");
            button.classList.add("optionButton");
            current.appendChild(button);
            if (inputType === "button") button.innerHTML = checked ? "on" : "off";
            else if (inputType === "select") button.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;";
            button.onclick = function () {
                if (inputType === "button") {
                    button.classList.toggle("on");
                    button.innerHTML = button.classList.contains("on") ? "on" : "off";
                }
                onclick();
            }
            if (checked) button.classList.toggle("on");
            return current;
        }

        // players
        ((true) && !function () {
            let windowName = "Players";
            let options = {
                close: true,
                minimize: false,
                lock: true
            }

            function windowFunc(thisWindow) {
                let divwindow = document.createElement("div");
                OWOP.showPlayerList(true);
                document.getElementById("player-list").parentElement.style.visibility = "hidden";
                divwindow.appendChild(document.getElementById("player-list"));
                thisWindow.container.classList.remove("wincontainer");
                thisWindow.addObj(divwindow);
            }

            NS.windows[windowName] = new GUIWindow(windowName, options, windowFunc).hide();
        }());

        // palette saver
        ((true) && !function () {
            let windowName = "Palette Saver";
            let options = {
                close: true,
                minimize: false,
                lock: true
            }

            function windowFunc(thisWindow) {
                let divwindow = document.createElement("div");
                divwindow.style = "width: 300px; overflow-y: scroll; overflow-x: scroll; max-height: 165px;";
                divwindow.innerHTML = `<input id="pName" type="text" style="max-width: 100px; border: 0px;" placeholder="Name"></input>
        		<button id="addPalette" >Save Current Palette</button> <table id="paletteTable" style="overflow-x: hidden; overflow-y: scroll;"></table>`;
                thisWindow.addObj(divwindow);
            }

            NS.windows[windowName] = new GUIWindow(windowName, options, windowFunc).hide();

            let pName = document.querySelector("#pName");

            pName.oninput = () => {
                if (pName.value.length > 25) pName.style.backgroundColor = "rgb(255 148 129)";
                else pName.style.backgroundColor = "rgb(255, 255, 255)";
            }

            document.getElementById("addPalette").onclick = () => {
                if (pName.value.length > 25) return alert("Your max name length is 25 characters.");
                if (pName.value.length === 0) return alert("Invalid Name");

                let paletteJson = localStorage.paletteJson ? JSON.parse(localStorage.paletteJson) : {};
                if (paletteJson[pName.value]) return (pName.value = "", alert("You already have a palette with this name."));
                paletteJson[pName.value] = OWOP.player.palette;
                localStorage.paletteJson = JSON.stringify(paletteJson);

                let divPalette = document.createElement("tr");
                let pN = pName.value;
                divPalette.id = `im-busy${pN}`;
                divPalette.innerHTML = `<td id="palette-${pN}" style="cursor: pointer; padding: 5px; border: 1px solid white; border-radius: 5px; color: white;">${pN}</td> <td id="useT1-${pN}"><button id="useB1-${pN}">Use</button></td> <td id="useT2-${pN}"><button id="useB2-${pN}">Replace</button></td> <td id="useT3-${pN}"><button id="useB3-${pN}">Delete</button></td>`;
                document.getElementById("paletteTable").appendChild(divPalette);
                document.getElementById(`useB1-${pN}`).onclick = () => {
                    let paletteJson = JSON.parse(localStorage.getItem("paletteJson"));
                    OWOP.player.palette.splice(0);
                    OWOP.player.palette.push(...paletteJson[pN]);
                    OWOP.player.paletteIndex = OWOP.player.paletteIndex;
                }
                document.getElementById(`useB2-${pN}`).onclick = () => {
                    if (!confirm(`Are you sure you want to REPLACE the palette ${pN}?`)) return;
                    let paletteJson = JSON.parse(localStorage.paletteJson);
                    paletteJson[`${pN}`] = OWOP.player.palette;
                    localStorage.paletteJson = JSON.stringify(paletteJson);
                }
                document.getElementById(`useB3-${pN}`).onclick = () => {
                    if (!confirm(`Are you sure you want to DELETE the palette ${pN}?`)) return;
                    let paletteJson = JSON.parse(localStorage.paletteJson);
                    document.getElementById(`palette-${pN}`).outerHTML = '';
                    document.getElementById(`im-busy${pN}`).outerHTML = '';
                    delete paletteJson[pN];
                    localStorage.paletteJson = JSON.stringify(paletteJson);
                }

                pName.style.backgroundColor = "rgb(255 255 255)";

                pName.value = "";
            }

            if (localStorage.paletteJson) {
                let gettedJson = JSON.parse(localStorage.paletteJson);
                let obj = Object.keys(gettedJson);
                for (let i = 0; i < obj.length; i++) {
                    let pN = obj[i];
                    let divPalette = document.createElement("tr");
                    divPalette.id = `im-busy${pN}`;
                    divPalette.innerHTML = `<td id="palette-${pN}" style="cursor: pointer; padding: 5px; border: 1px solid white; border-radius: 5px; color: white;">${pN}</td> <td id="useT1-${pN}"><button id="useB1-${pN}">Use</button></td> <td id="useT2-${pN}"><button id="useB2-${pN}">Replace</button></td> <td id="useT3-${pN}"><button id="useB3-${pN}">Delete</button></td>`;
                    document.getElementById("paletteTable").appendChild(divPalette);
                    document.getElementById(`useB1-${pN}`).onclick = () => {
                        let paletteJson = JSON.parse(localStorage.paletteJson);
                        OWOP.player.palette.splice(0);
                        OWOP.player.palette.push(...paletteJson[`${pN}`]);
                        OWOP.player.paletteIndex = OWOP.player.paletteIndex;
                    }
                    document.getElementById(`useB2-${pN}`).onclick = () => {
                        if (!confirm(`Are you sure you want to REPLACE the palette ${pN}?`)) return;
                        let paletteJson = JSON.parse(localStorage.paletteJson);
                        paletteJson[`${pN}`] = OWOP.player.palette;
                        localStorage.paletteJson = JSON.stringify(paletteJson);
                    }
                    document.getElementById(`useB3-${pN}`).onclick = () => {
                        if (!confirm(`Are you sure you want to DELETE the palette ${pN}?`)) return;
                        let paletteJson = JSON.parse(localStorage.paletteJson);
                        document.getElementById(`palette-${pN}`).outerHTML = '';
                        document.getElementById(`im-busy${pN}`).outerHTML = '';
                        delete paletteJson[pN];
                        localStorage.paletteJson = JSON.stringify(paletteJson);
                    }
                }
            }
        }());

        // keybinds
        ((false) && !function () {
            let windowName = "Keybinds";
            let options = {
                close: true,
                minimize: false,
                lock: true
            }

            let keybinds = {
                // look into inverse color for contrast to be removable
                // look into making my script modular so i can turn on and off modules
            }

            function windowFunc(thisWindow) {
                let divwindow = document.createElement("div");
                divwindow.style = "width: 300px; overflow-y: scroll; overflow-x: scroll; max-height: 165px;";
                divwindow.innerHTML = ``;
                thisWindow.addObj(divwindow);
            }

            NS.windows[windowName] = new GUIWindow(windowName, options, windowFunc).hide();

            if (localStorage.paletteJson) {
            }
        }());

        // icons
        ((true) && !function () {
            let windowName = "Icons";
            let options = {
                close: true,
                minimize: false,
                lock: true
            }

            function windowFunc(thisWindow) {
                let content = `
					<style>
						.NSspan1 {
							display: flex;
							flex-direction: column;
							max-height: 200px;
							width: 300px;
						}
						.NSspan2 {
							display: flex;
							justify-content: space-between;
							padding: 4px 0px;
						}
						.NSspan3 {
							display: flex;
							background: #0003;
							border-radius: 10px;
							padding: 5px;
						}
						.NSspan4 {
							display: flex;
							flex-direction: column;
							align-items: center;
							width: 75px;
						}
						.NSspan5 {
							display: flex;
							flex-direction: column;
							justify-content: space-evenly;
						}
						.NSspan6 {
							padding: 5px 0px;
						}
						.NSdiv1 {
							background-image: url("https://ourworldofpixels.com/img/toolset.png");
							width: 36px;
							height: 36px;
						}
						/* switch background #aba389 to #8b08bf on halloween */
						/* switch color #7e635c to #fdfbff on halloween */
						.NSdiv2 {
							background: #aba389;
							color: #7e635c;
							border-radius: 6px;
							border: initial;
							padding: 4px;
							text-shadow: 1px 1px #4d313b;
						}
					</style>
					<span class="NSspan1">
						<span class="NSspan2">
							<span class="NSspan3">
								<span class="NSspan4">
									<span class="NSspan6">
										<div class="NSdiv1" style="background-position: 0px 0px;"></div>
									</span>
									<div class="NSdiv2">Cursor</div>
								</span>
								<span class="NSspan5">
									<button class="optionButton" style="max-height: 25px;" onclick="NS.iconSelect('cursor')">Select</button>
									<button class="optionButton" style="max-height: 25px;" onclick="NS.iconPaste('cursor')">Paste</button>
								</span>
							</span>
							<span class="NSspan3">
								<span class="NSspan4">
									<span class="NSspan6">
										<div class="NSdiv1" style="background-position: -36px 0px;"></div>
									</span>
									<div class="NSdiv2">Move</div>
								</span>
								<span class="NSspan5">
									<button class="optionButton" style="max-height: 25px;" onclick="NS.iconSelect('move')">Select</button>
									<button class="optionButton" style="max-height: 25px;" onclick="NS.iconPaste('move')">Paste</button>
								</span>
							</span>
						</span>
						<span class="NSspan2">
							<span class="NSspan3">
								<span class="NSspan4">
									<span class="NSspan6">
										<div class="NSdiv1" style="background-position: 0px -36px;"></div>
									</span>
									<div class="NSdiv2">Pipette</div>
								</span>
								<span class="NSspan5">
									<button class="optionButton" style="max-height: 25px;" onclick="NS.iconSelect('pipette')">Select</button>
									<button class="optionButton" style="max-height: 25px;" onclick="NS.iconPaste('pipette')">Paste</button>
								</span>
							</span>
							<span class="NSspan3">
								<span class="NSspan4">
									<span class="NSspan6">
										<div class="NSdiv1" style="background-position: -36px -72px;"></div>
									</span>
									<div class="NSdiv2">Zoom</div>
								</span>
								<span class="NSspan5">
									<button class="optionButton" style="max-height: 25px;" onclick="NS.iconSelect('zoom')">Select</button>
									<button class="optionButton" style="max-height: 25px;" onclick="NS.iconPaste('zoom')">Paste</button>
								</span>
							</span>
						</span>
						<span class="NSspan2">
							<span class="NSspan3">
								<span class="NSspan4">
									<span class="NSspan6">
										<div class="NSdiv1" style="background-position: -72px 0px;"></div>
									</span>
									<div class="NSdiv2">Select</div>
								</span>
								<span class="NSspan5">
									<button class="optionButton" style="max-height: 25px;" onclick="NS.iconSelect('export')">Select</button>
									<button class="optionButton" style="max-height: 25px;" onclick="NS.iconPaste('export')">Paste</button>
								</span>
							</span>
							<span class="NSspan3">
								<span class="NSspan4">
									<span class="NSspan6">
										<div class="NSdiv1" style="background-position: -36px -36px;"></div>
									</span>
									<div class="NSdiv2">Bucket</div>
								</span>
								<span class="NSspan5">
									<button class="optionButton" style="max-height: 25px;" onclick="NS.iconSelect('fill')">Select</button>
									<button class="optionButton" style="max-height: 25px;" onclick="NS.iconPaste('fill')">Paste</button>
								</span>
							</span>
						</span>
						<span class="NSspan2">
							<span class="NSspan3">
								<span class="NSspan4">
									<span class="NSspan6">
										<div class="NSdiv1" style="background-position: -108px -108px;"></div>
									</span>
									<div class="NSdiv2">Wand</div>
								</span>
								<span class="NSspan5">
									<button class="optionButton" style="max-height: 25px;" onclick="NS.iconSelect('line')">Select</button>
									<button class="optionButton" style="max-height: 25px;" onclick="NS.iconPaste('line')">Paste</button>
								</span>
							</span>
							<span class="NSspan3">
								<span class="NSspan4">
									<span class="NSspan6">
										<div class="NSdiv1" style="background-position: -108px -36px;"></div>
									</span>
								<div class="NSdiv2">Paste</div>
								</span>
								<span class="NSspan5">
									<button class="optionButton" style="max-height: 25px;" onclick="NS.iconSelect('paste')">Select</button>
									<button class="optionButton" style="max-height: 25px;" onclick="NS.iconPaste('paste')">Paste</button>
								</span>
							</span>
						</span>
						<span class="NSspan2">
							<span class="NSspan3">
								<span class="NSspan4">
									<span class="NSspan6">
										<div class="NSdiv1" style="background-position: -108px 0px;"></div>
									</span>
									<div class="NSdiv2">Copy</div>
								</span>
								<span class="NSspan5">
									<button class="optionButton" style="max-height: 25px;" onclick="NS.iconSelect('copy')">Select</button>
									<button class="optionButton" style="max-height: 25px;" onclick="NS.iconPaste('copy')">Paste</button>
								</span>
							</span>
							<span class="NSspan3">
								<span class="NSspan4">
									<span class="NSspan6">
										<div class="NSdiv1" style="background-position: -36px -108px;"></div>
									</span>
									<div class="NSdiv2">Text</div>
								</span>
								<span class="NSspan5">
									<button class="optionButton" style="max-height: 25px;" onclick="NS.iconSelect('write')">Select</button>
									<button class="optionButton" style="max-height: 25px;" onclick="NS.iconPaste('write')">Paste</button>
								</span>
							</span>
						</span>
						<!--
						<span class="NSspan2">
							<span class="NSspan3">
								<span class="NSspan4">
									<span class="NSspan6">
										<div class="NSdiv1" style="background-position: -108px 0px;"></div>
									</span>
									<div class="NSdiv2">Copy</div>
								</span>
								<span class="NSspan5">
									<button class="optionButton" style="max-height: 25px;" onclick="NS.iconSelect('copy')">Select</button>
									<button class="optionButton" style="max-height: 25px;" onclick="NS.iconPaste('copy')">Paste</button>
								</span>
							</span>
							<span class="NSspan3">
								<span class="NSspan4">
									<span class="NSspan6">
										<div class="NSdiv1" style="background-position: -36px -108px;"></div>
									</span>
									<div class="NSdiv2">Text</div>
								</span>
								<span class="NSspan5">
									<button class="optionButton" style="max-height: 25px;" onclick="NS.iconSelect('write')">Select</button>
									<button class="optionButton" style="max-height: 25px;" onclick="NS.iconPaste('write')">Paste</button>
								</span>
							</span>
						</span>
						-->
					</span>
				`;
                thisWindow.container.innerHTML = content;

                NS.iconSelect = function (iconsName) {
                    OWOP.tool.allTools.copy.extra.tempCallback = function (data) {
                        if (data.length !== 36 || data[0].length !== 36) {
                            OWOP.chat.local("The size needs to be (36 by 36).");
                            return false;
                        }
                        NS.localStorage.cursors[iconsName].icon = NS.setImageData(data).toDataURL();
                        localStorage.NS = JSON.stringify(NS.localStorage);
                        return true;
                    }
                    OWOP.player.tool = "copy";
                }
                NS.iconPaste = function (iconsName) {
                    // let offset = [0, 0];
                    let icon = dataImages?.[iconsName];
                    if (icon === undefined) dataImages.cursor;
                    let img = document.createElement("img");
                    img.src = icon;
                    img.onload = function () {
                        ((onblob) => {
                            let c1 = document.createElement('canvas');
                            let ctx1 = c1.getContext('2d');
                            ctx1.drawImage(img, 0, 0);
                            let iconImageData = ctx1.getImageData(0, 0, 36, 36);
                            let c2 = document.createElement('canvas');
                            c2.width = 38;
                            c2.height = 38;
                            let ctx2 = c2.getContext('2d');
                            ctx2.fillStyle = "#000000";
                            ctx2.fillRect(0, 0, c2.width, c2.height);
                            for (let y = 0; y < 36; y++) {
                                for (let x = 0; x < 36; x++) {
                                    let pix = iconImageData.data[4 * (y * 36 + x) + 3];
                                    if (pix < 255) {
                                        iconImageData.data[4 * (y * 36 + x)] = 255;
                                        iconImageData.data[4 * (y * 36 + x) + 1] = 255;
                                        iconImageData.data[4 * (y * 36 + x) + 2] = 255;
                                        iconImageData.data[4 * (y * 36 + x) + 3] = 255;
                                    }
                                }
                            }
                            ctx2.putImageData(iconImageData, 1, 1);
                            c2.toBlob(onblob);
                        })(b => {
                            let url = URL.createObjectURL(b);
                            let image = new Image();
                            image.onload = () => {
                                OWOP.tool.allTools.paste.extra.k = image;
                                OWOP.player.tool = "move";
                                OWOP.player.tool = "paste";
                            }
                            image.src = url;
                        });
                    }
                }
            }

            NS.windows[windowName] = new GUIWindow(windowName, options, windowFunc).hide();
        }());

        // assets
        ((true) && !function () {
            let windowName = "Assets";
            let options = {
                close: true,
                minimize: false,
                lock: true
            }

            let G = r => document.getElementById(r);

            function windowFunc(thisWindow) {
                thisWindow.frame.style.width = "500px";
                let innerFrame = document.createElement("div");
                let realAssetsCont = mkHTML("div", {
                    id: "real-assets-cont"
                });
                let p = mkHTML("p");
                p.style["margin-block"] = "auto";
                p.style["display"] = "flex";
                p.style["justify-content"] = "space-evenly";

                let J = () => {
                    NS.assets = localStorage.MB_Assets;
                    if (!NS.assets) NS.assets = [];
                    else NS.assets = JSON.parse(NS.assets);
                    let y = G("real-assets-cont");
                    y.innerHTML = '';
                    for (let p0 in NS.assets) {
                        let p1 = new Image();

                        p1.onload = () => {
                            p1.style.width = '48px';
                            p1.style.height = '48px';
                            p1.style.border = 'solid 1px';

                            p1.onclick = () => {
                                for (let p4 in G('real-assets-cont').children) {
                                    if (typeof G('real-assets-cont').children[p4] !== 'object') break;
                                    G('real-assets-cont').children[p4].style.border = 'solid 1px';
                                }
                                if (NS.selectedImg) {
                                    NS.selectedImg.style.width = '48px';
                                    NS.selectedImg.style.height = '48px';
                                }
                                NS.selectedAsset = NS.assets[p0];
                                NS.selectedAssetIndex = p0;
                                NS.selectedImg = p1;
                                p1.style.width = '40px';
                                p1.style.height = '40px';
                                p1.style.border = 'solid 5px black';
                            };

                            p1.oncontextmenu = p3 => {
                                p3.preventDefault();
                                NS.assets.splice(p0, 1);
                                localStorage.MB_Assets = JSON.stringify(NS.assets);
                                J();
                            };

                            y.append(p1);
                        };

                        p1.src = NS.assets[p0];
                    }
                };

                let X = (r = '*') => new Promise(Q => {
                    let c = document.createElement('input');
                    c.type = 'file';
                    c.accept = r;

                    c.onchange = () => {
                        let N = new FileReader();

                        N.onloadend = () => {
                            Q(N.result);
                        };

                        N.readAsDataURL(c.files[0]);
                    };

                    c.onclick = () => void 0;

                    c.click();
                });

                let button1 = mkHTML("button", {
                    id: "NSoptions",
                    innerHTML: "Add"
                });

                let button2 = mkHTML("button", {
                    id: "NSoptions",
                    innerHTML: "Paste"
                });

                let button3 = mkHTML("button", {
                    id: "NSoptions",
                    innerHTML: "Delete"
                });

                let button4 = mkHTML("button", {
                    id: "NSoptions",
                    innerHTML: "Reload"
                });

                button1.onclick = async () => {
                    OWOP.sounds.play(OWOP.sounds.click);
                    let pE = localStorage.MB_Assets;
                    if (!pE) pE = [];
                    else pE = JSON.parse(pE);
                    let _imgTotal = 0;
                    let _imageData = undefined;
                    {
                        let _lsTotal = 0;
                        let _xLen = undefined;
                        let _x = undefined;
                        for (_x in localStorage) {
                            if (!localStorage.hasOwnProperty(_x)) {
                                continue;
                            }
                            _xLen = ((localStorage[_x].length + _x.length) * 2);
                            _lsTotal += _xLen;
                        }
                        //console.log("Total = " + (_lsTotal / 1024).toFixed(2) + " KB");
                        if ((_lsTotal / 1024) > 3000) return OWOP.chat.local(`Storage limit reached (3MB), remove images to add more.`);
                        _imgTotal = _lsTotal;
                    }
                    {
                        _imageData = await X('image/*');
                        let _lsTotal = 0;
                        let _x = undefined;
                        _x = JSON.stringify(_imageData);
                        _lsTotal = _x.length * 2;
                        //console.log("Total = " + (_lsTotal / 1024).toFixed(2) + " KB");
                        if ((_lsTotal / 1024) > 500) {
                            if (((_lsTotal + _imgTotal) / 1024) > 3000) return OWOP.chat.local(`Image being added is more than Storage limit (3KB)`);
                            if (!confirm(`Are you sure you want to add a image with ${(_lsTotal / 1024).toFixed(2)} KB`)) return;
                        }
                    }
                    pE.push(_imageData);
                    localStorage.MB_Assets = JSON.stringify(pE);
                    J();
                };

                button2.onclick = () => {
                    OWOP.sounds.play(OWOP.sounds.click);
                    let img = new Image();
                    img.onload = () => {
                        OWOP.tool.allTools.paste.extra.k = img;
                        OWOP.player.tool = "move";
                        OWOP.player.tool = "paste";
                    }
                    img.src = NS.selectedAsset;
                };

                button3.onclick = () => {
                    OWOP.sounds.play(OWOP.sounds.click);
                    if (!NS.selectedAssetIndex) return;
                    if (confirm("Do you want to delete the selected asset?")) NS.assets.splice(NS.selectedAssetIndex, 1);
                    else return;
                    localStorage.MB_Assets = JSON.stringify(NS.assets);
                    J();
                };

                button4.onclick = () => {
                    OWOP.sounds.play(OWOP.sounds.click);
                    J();
                };

                button2.addEventListener("click", function () {
                    OWOP.sounds.play(OWOP.sounds.click)
                });
                p.appendChild(button1);
                p.appendChild(button2);
                p.appendChild(button3);
                p.appendChild(button4);
                innerFrame.appendChild(p);
                innerFrame.appendChild(realAssetsCont);
                thisWindow.addObj(innerFrame);
            }

            NS.windows[windowName] = new GUIWindow(windowName, options, windowFunc).hide();
        }());

        // patterns
        ((true) && !function () {
            let windowName = "Patterns";
            let options = {
                close: true,
                minimize: false,
                lock: true
            }

            function windowFunc(win) {
                let content = `
					<span style="display: flex;flex-direction:column;">
						<div class="ns_container">
							<div style="border: 10px #0000 solid;">
								<span class="tabp">
									<p>Columns: </p>
									<input id="patternCol" type="text" style="max-width: 100px; border: 0px;" placeholder="columns" value="8"></input>
								</span>
								<span class="tabp">
									<p>Rows: </p>
									<input id="patternRow" type="text" style="max-width: 100px; border: 0px;" placeholder="rows" value="8"></input>
								</span>
								<span id="patternSpanPatternColors">
								</span>
								<!--
								<span class="tabp">
									<p>Type</p>
									<select class="ns_dropdown" oninput="NS.patternSetting=this.value">
										<option value="default">Default</option>
										<option value="checkered">Checkered</option>
										<option value="1">Pattern 1</option>
										<option value="2">Pattern 2</option>
										<option value="3">Pattern 3</option>
										<option value="4">Pattern 4</option>
										<option value="5">Pattern 5</option>
										<option value="6">Pattern 6</option>
										<option value="7">Pattern 7</option>
										<option value="8">Pattern 8</option>
									</select>
								</span>
								-->
							</div>
						</div>
						<div class="ns_horizontal"></div>
						<div id="nsCanvasContainer" class="nscontainer" style="display: flex;align-content: space-around;">
						</div>
					</span>
				`;
                let container = win.container;
                container.style = "margin: 0px -5px -5px -5px;";
                container.className = "optionsDiv";
                container.innerHTML = content;

                let canvas = document.createElement("canvas");
                let ctx = canvas.getContext("2d");
                canvas.width = 274;
                canvas.height = 274;
                canvas.textContent = "Your browser does not support the HTML canvas tag.";
                canvas.id = "nsCanvas";
                container.querySelector("#nsCanvasContainer").appendChild(canvas);

                ctx.strokeStyle = "black";
                ctx.lineWidth = 0;

                NS.pattern = [];
                for (let i = 0; i < 16; i++) {
                    NS.pattern.push([]);
                    for (let j = 0; j < 16; j++) {
                        NS.pattern[i].push({ on: false, c: "#000000", a: [0, 0, 0] });
                    }
                }

                container.querySelector("#patternSpanPatternColors").appendChild(optionmaker("Colors", "button", NS.patternColors, () => (NS.patternColors = !NS.patternColors, setPatternSize())));

                function fill(color) {
                    ctx.fillStyle = color;
                }

                function drawRect(x, y, width, height) {
                    ctx.fillRect(x, y, width, height);
                }

                function makeCells(cols, rows) { // x by y, thats why its cols, rows
                    canvas.width = Math.min(16, Math.max(8, cols)) * 34 + 2;
                    canvas.height = Math.min(16, Math.max(8, rows)) * 34 + 2;
                    fill("#000000");
                    drawRect(0, 0, canvas.width, canvas.height);
                    for (let y = 0; y < Math.max(8, rows); y++) {
                        for (let x = 0; x < Math.max(8, cols); x++) {
                            fill("#1f1f1f");
                            if (x < cols && y < rows) (fill("#ffffff"), drawRect(x * 34 + 2, y * 34 + 2, 32, 32), NS.pattern[x][y].on ? (NS.patternColors ? fill(NS.pattern[x][y].c) : fill("#aba389")) : (fill("#7e635c")));
                            drawRect(x * 34 + 3, y * 34 + 3, 30, 30);
                        }
                    }
                }

                function getMousePos(canvas, evt) {
                    let rect = canvas.getBoundingClientRect();
                    return {
                        x: (evt.clientX - rect.left) / (rect.right - rect.left) * canvas.width,
                        y: (evt.clientY - rect.top) / (rect.bottom - rect.top) * canvas.height
                    };
                }

                let col = container.querySelector("#patternCol");
                let row = container.querySelector("#patternRow");

                function setPatternSize() {
                    if (col.value.length === 0 || row.value.length === 0) return;
                    let c = parseInt(col.value);
                    let r = parseInt(row.value);
                    if (!c || !r) return;
                    r = Math.min(16, Math.max(1, r));
                    c = Math.min(16, Math.max(1, c));
                    col.value = c;
                    row.value = r;
                    NS.pattern.x = c;
                    NS.pattern.y = r;
                    makeCells(c, r);
                }

                col.onchange = setPatternSize;
                row.onchange = setPatternSize;

                setPatternSize();

                let mode = false;
                let modeSwitch = false;
                function handleCanvasMouseEvent(event) {
                    switch (event.type) {
                        case "mousedown": {
                            event.preventDefault();
                            let { x, y } = getMousePos(canvas, event);
                            if (x / 34 >= 16 || y / 34 >= 16) return;
                            mode = true;
                            let x1 = x % 34;
                            let y1 = y % 34;
                            if (x1 < 3 || x1 > 32 || y1 < 3 || y1 > 32) return;
                            let e = NS.pattern[Math.floor(x / 34)][Math.floor(y / 34)];
                            modeSwitch = true;
                            if (!NS.patternColors || !(e.on && e.c !== OWOP.player.htmlRgb)) modeSwitch = e.on = !e.on;
                            e.c = OWOP.player.htmlRgb;
                            e.a = OWOP.player.selectedColor;
                            setPatternSize();
                        } break;
                        case "mousemove": {
                            event.preventDefault();
                            let { x, y } = getMousePos(canvas, event);
                            if (x / 34 >= 16 || y / 34 >= 16) return;
                            if (!mode) break;
                            let x1 = x % 34;
                            let y1 = y % 34;
                            if (x1 < 3 || x1 > 32 || y1 < 3 || y1 > 32) return;
                            let e = NS.pattern[Math.floor(x / 34)][Math.floor(y / 34)];
                            e.on = modeSwitch;
                            e.c = OWOP.player.htmlRgb;
                            e.a = OWOP.player.selectedColor;
                            setPatternSize();
                        } break;
                        case "mouseup": {
                            mode = false;
                        } break;
                    }
                }

                canvas.addEventListener("mousedown", handleCanvasMouseEvent);
                canvas.addEventListener("mousemove", handleCanvasMouseEvent);
                canvas.addEventListener("mouseup", handleCanvasMouseEvent);

            }

            NS.windows[windowName] = new GUIWindow(windowName, options, windowFunc).hide();
        }());

        // custom modification to colors
        ((true) && !function () {
            undefined;
        }());

        // options
        ((true) && !function () {
            let windowName = "Options";
            let options = {
                close: false,
                minimize: true,
                lock: true
            }

            function windowFunc(thisWindow) {
                let content = `
					<span>
						<span id="optionsMinimize" style="display: flex;">
						<style>
							p {
								margin-block: auto;
								color: white;
								font-family: Arial;
							}
								.tabcontentleft, .tabcontentright {
								display: none;
								margin-block: auto;
								text-align: center;
							}
							.tabButton, .optionButton {
								border-style: none !important;
								border-image: none !important;
								border: initial;
								border-radius: 6px;
								padding: 5px 8px;
							}
							.optionButton {
								padding: 5px 12px;
							}
							.tabButton {
								margin: 0px 1px;
							}
							button.on {
								background: #9a937b;
							}
						</style>
						<!--dont be a idiot, put the #7e635c back into the styling of background-color when halloween is over
						and put it to #5e038f when halloween happens
						also dont forget to switch button.on up there to #9a937b and switch to #6e009a on halloween
						change box-shadow to #440f58 on halloween and #4d313b when not-->
						<div style="display: flex;margin: 0px;border-radius: 5px;background-color: #7e635c;box-shadow: inset 3px 2px 0px 0px #4d313b;align-content: space-around;">
							<span style="border: 10px #0000 solid;">
								<div class="tab">
									<div style="align-content: center;margin: 0px 0px 5px 0px;display: flex;justify-content: space-between;">
									<button class="tabButton olt on" onclick="NS.switchTabs(event, 'display', 'olt', this)">
										Window Display
									</button>
									<button class="tabButton olt" onclick="NS.switchTabs(event, 'options', 'olt', this)">
										Options
									</button>
									</div>
									<div id="display" class="tabcontentolt" style="display: block;"></div>
									<div id="options" class="tabcontentolt" style="display: none;"></div>
								</div>
							</span>
						</div>
						<div style="width: 5px;"></div>
							<!--dont be a idiot, put the #7e635c back into the styling of background-color when halloween is over
							and put it to #5e038f when halloween happens
							change box-shadow to #440f58 on halloween and #4d313b when not-->
							<div style="display: flex;margin: 0px;border-radius: 5px;background-color: #7e635c;box-shadow: inset 3px 2px 0px 0px #4d313b;align-content: space-around;">
								<span style="border: 10px #0000 solid;">
								<div class="tab">
									<span>
										<div style="align-content: center;margin: 0px 0px 5px 0px;display: flex;justify-content: space-between;">
											<button class="tabButton ort on" onclick="NS.switchTabs(event, 'cursor', 'ort', this)">
												Cursor
											</button>
											<button class="tabButton ort" onclick="NS.switchTabs(event, 'line', 'ort', this)">
												Line
											</button>
											<button class="tabButton ort" onclick="NS.switchTabs(event, 'fill', 'ort', this)">
												Bucket
											</button>
											<button class="tabButton ort" onclick="NS.switchTabs(event, 'export', 'ort', this)">
												Select
											</button>
										</div>
										<div style="align-content: center;margin: 0px 0px 5px 0px;display: flex;justify-content: space-between;">
											<button class="tabButton ort" onclick="NS.switchTabs(event, 'copy', 'ort', this)">
												Copy
											</button>
											<button class="tabButton ort" onclick="NS.switchTabs(event, 'paste', 'ort', this)">
												Paste
											</button>
											<button class="tabButton ort" onclick="NS.switchTabs(event, 'write', 'ort', this)">
												Write
											</button>
											<button class="tabButton ort" onclick="NS.switchTabs(event, 'all', 'ort', this)">
												All
											</button>
										</div>
									</span>
									<div id="cursor" class="tabcontentort" style="display: block;">
										<div class="tabp">
											<p>Scale</p>
											<input type="range" style="margin: 0px 15px;" value="1" min="1" max="16" oninput="OWOP.tool.allTools.cursor.extra.state.scalar = this.value;document.getElementById('cursorspan').innerHTML = this.value;"></input>
											<span style="padding: 4px 0px 5px 0px;" id="cursorspan">1</span>
										</div>
										<div class="tabp">
											<p>Chunkize</p>
											<button class="optionButton switch" onclick="NS.optionbutton(this, 'chunkize')">off</button>
										</div>
										<div class="tabp">
											<p>Rainbow</p>
											<button class="optionButton switch" onclick="NS.optionbutton(this, 'rainbow')">off</button>
										</div>
										<div class="tabp">
											<p>Pixel Perfect</p>
											<button class="optionButton switch" onclick="NS.optionbutton(this, 'perfect')">off</button>
										</div>
										<div class="tabp">
											<p>Copy Coords</p>
											<button class="optionButton switch" onclick="NS.optionbutton(this, 'copyCoords')">off</button>
										</div>
									</div>
									<div id="line" class="tabcontentort" style="display: none;">
										<div class="tabp">
											<p>Rainbow</p>
											<button class="optionButton switch" onclick="NS.optionbutton(this, 'rainbow')">off</button>
										</div>
										<div class="tabp">
											<p>Gradient</p>
											<button class="optionButton switch" onclick="NS.optionbutton(this, 'gradient')">off</button>
										</div>
									</div>
									<div id="fill" class="tabcontentort" style="display: none;">
										<div class="tabp">
											<p>Rainbow</p>
											<button class="optionButton switch" onclick="NS.optionbutton(this, 'rainbow')">off</button>
										</div>
										<div class="tabp">
											<p>Enable Patterns</p>
											<button class="optionButton switch" onclick="NS.optionbutton(this, 'patterns')">off</button>
										</div>
										<!--
										<div class="tabp">
											<p>Open Pattern Window</p>
											<button class="optionButton switch" onclick="">off</button>
										</div>
										-->
										<div class="tabp">
											<p>Checkered</p>
											<button class="optionButton switch" onclick="NS.optionbutton(this, 'checkered')">off</button>
										</div>
										<div class="tabp">
											<p>Pattern 1</p>
											<button class="optionButton switch" onclick="NS.optionbutton(this, 'dither')">off</button>
										</div>
										<div class="tabp">
											<p>Pattern 2</p>
											<button class="optionButton switch" onclick="NS.optionbutton(this, 'dither2')">off</button>
										</div>
										<div class="tabp">
											<p>Pattern 3</p>
											<button class="optionButton switch" onclick="NS.optionbutton(this, 'dither3')">off</button>
										</div>
										<div class="tabp">
											<p>Pattern 4</p>
											<button class="optionButton switch" onclick="NS.optionbutton(this, 'dither4')">off</button>
										</div>
										<div class="tabp">
											<p>Pattern 5</p>
											<button class="optionButton switch" onclick="NS.optionbutton(this, 'dither5')">off</button>
										</div>
										<div class="tabp">
											<p>Pattern 6</p>
											<button class="optionButton switch" onclick="NS.optionbutton(this, 'dither6')">off</button>
										</div>
										<div class="tabp">
											<p>Pattern 7</p>
											<button class="optionButton switch" onclick="NS.optionbutton(this, 'dither7')">off</button>
										</div>
										<div class="tabp">
											<p>Pattern 8</p>
											<button class="optionButton switch" onclick="NS.optionbutton(this, 'dither8')">off</button>
										</div>
									</div>
									<div id="export" class="tabcontentort" style="display: none;">
										<div class="tabp">
											<p>Type</p>
											<select class="ns_dropdown" oninput="OWOP.tool.allTools.export.extra.state.type=this.value">
												<option value="export">Export</option>
												<option value="color">Palette Color Adder</option>
												<option value="adder">Queue Adder</option>
												<option value="filler">Queue Filler</option>
												<option value="clearer">Queue Clearer</option>
											</select>
										</div>
										<div class="tabp">
											<p>Chunkize</p>
											<button class="optionButton switch" onclick="NS.optionbutton(this, 'chunkize')">off</button>
										</div>
										<div class="tabp">
											<p>Rainbow</p>
											<button class="optionButton switch" onclick="NS.optionbutton(this, 'rainbow')">off</button>
										</div>
									</div>
									<div id="copy" class="tabcontentort" style="display: none;">
										<div class="tabp">
											<p>Chunkize</p>
											<button class="optionButton switch" onclick="NS.optionbutton(this, 'chunkize')">off</button>
										</div>
										<!--
										<div class="tabp">
											<p>Shrink Margins</p>
											<button class="optionButton switch" onclick="NS.optionbutton(this, 'margin')">off</button>
										</div>
										-->
									</div>
									<div id="paste" class="tabcontentort" style="display: none;">
										<div class="tabp">
											<p>Chunkize</p>
											<button class="optionButton switch" onclick="NS.optionbutton(this, 'chunkize')">off</button>
										</div>
										<div class="tabp">
											<p>Rotate Clockwise</p>
											<button class="optionButton click" onclick="NS.optionbutton(this, 'rc')">&nbsp;&nbsp;&nbsp;&nbsp;</button>
										</div>
										<div class="tabp">
											<p>Rotate the other way</p>
											<button class="optionButton click" onclick="NS.optionbutton(this, 'rcc')">&nbsp;&nbsp;&nbsp;&nbsp;</button>
										</div>
										<div class="tabp">
											<p>Flip Horizontally</p>
											<button class="optionButton click" onclick="NS.optionbutton(this, 'fh')">&nbsp;&nbsp;&nbsp;&nbsp;</button>
										</div>
										<div class="tabp">
											<p>Flip Vertically</p>
											<button class="optionButton click" onclick="NS.optionbutton(this, 'fv')">&nbsp;&nbsp;&nbsp;&nbsp;</button>
										</div>
										<div class="tabp">
											<p>Right Color Clear</p>
											<button class="optionButton switch" onclick="NS.optionbutton(this, 'newButton')">off</button>
										</div>
									</div>
									<div id="write" class="tabcontentort" style="display: none;">
										<div class="tabp">
											<p>Rainbow</p>
											<button class="optionButton switch" onclick="NS.optionbutton(this, 'rainbow')">off</button>
										</div>
										<!--
										<div class="tabp">
											<p>Font Size</p>
											<button class="optionButton switch" onclick="NS.optionbutton(this, 'gradient')">off</button>
										</div>
										<div class="tabp">
											<p>Font Type</p>
											<button class="optionButton switch" onclick="NS.optionbutton(this, 'gradient')">off</button>
										</div>
										-->
									</div>
									<!--
									<div id="all" class="tabcontentort" style="display: none;">
										<div class="tabp">
											<p>Rainbow</p>
											<button class="optionButton switch" onclick="NS.optionbutton(this, 'rainbow')">off</button>
										</div>
										<div class="tabp">
											<p>Some color stuff</p>
											<button class="optionButton switch" onclick="NS.optionbutton(this, 'gradient')">off</button>
										</div>
									</div>
									-->
								</div>
								</span>
							</div>
						</span>
						<span id="optionsMaximize" style="display: none;">
							<div style="display: flex;margin: 0px;border-radius: 5px;background-color: #7e635c;box-shadow: inset 3px 2px 0px 0px #4d313b;align-content: space-around;">
								<span style="border: 10px #0000 solid;">
								<button class="optionButton" onclick="NS.minimizeOptions(false)">Maximize</button>
								</span>
							</div>
						</span>
					</span>
				`;
                let container = thisWindow.container;
                container.style = "margin: 0px -5px -5px -5px;";
                container.className = "optionsDiv";
                container.innerHTML = content;
                const root = [...container.childNodes].find(e => e.nodeType !== Node.TEXT_NODE);
                let display = root.querySelector("#display");
                for (let w in NS.windows) {
                    w = NS.windows[w];
                    if (w.title === "Options" || w.title === "Resulting image") continue;
                    if (w.title !== "Tools") {
                        w.frame.style.visibility = "hidden";
                        let b = w.frame.querySelectorAll(".windowCloseButton");
                        if (b.length) w.frame.removeChild(b[0]);
                    }
                    let current = mkHTML("p");
                    current.className = "tabp";
                    current.appendChild(mkHTML("p", { innerHTML: w.title }));
                    current.appendChild(w.windowbutton);
                    display.appendChild(current);
                }
                let options = root.querySelector("#options");

                options.appendChild(optionmaker("Disable PM", "button", !NS.PM.enabled, () => NS.PM.enabled = !NS.PM.enabled));
                options.appendChild(optionmaker("Disable PM mod", "button", !NS.PM.enableMod, () => NS.PM.enableMod = !NS.PM.enableMod));
                options.appendChild(optionmaker("Ignore Protection", "button", NS.PM.ignoreProtectedChunks, () => NS.PM.ignoreProtectedChunks = !NS.PM.ignoreProtectedChunks));
                options.appendChild(optionmaker("Clear PM", "select", void 0, () => NS.PM.clearQueue()));
                options.appendChild(optionmaker("Render PM", "button", NS.PM.renderBorder, () => NS.PM.renderBorder = !NS.PM.renderBorder));
                options.appendChild(optionmaker("Render Rings", "button", NS.PM.renderPlayerRings, () => NS.PM.renderPlayerRings = !NS.PM.renderPlayerRings));
                options.appendChild(optionmaker("AutoFix", "button", NS.PM.autoMove, () => NS.PM.autoMove = !NS.PM.autoMove));
                /* options.appendChild(optionmaker("Mute", "button", !OWOP.options.enableSounds, () => {
                    OWOP.options.enableSounds = !OWOP.options.enableSounds;
                    localStorage.options = JSON.stringify({ enableSounds: OWOP.options.enableSounds });
                })); */
                options.appendChild(optionmaker("Undo", "select", void 0, () => PM.undo()));
                options.appendChild(optionmaker("Redo", "select", void 0, () => PM.redo()));
                options.appendChild(optionmaker("Minimize Options", "select", void 0, () => NS.minimizeOptions(true)));

                NS.switchTabs = function (evt, cityName, s, button) {
                    let i = undefined;
                    let tabcontent = undefined;
                    let tablinks = undefined;
                    tabcontent = document.getElementsByClassName("tabcontent" + s);
                    for (i = 0; i < tabcontent.length; i++) {
                        tabcontent[i].style.display = "none";
                    }
                    tablinks = document.getElementsByClassName(s);
                    for (i = 0; i < tablinks.length; i++) {
                        tablinks[i].classList.remove("on");
                    }
                    button.classList.add("on");
                    document.getElementById(cityName).style.display = "block";
                }
                NS.optionbutton = function (button, state) {
                    let type = "unknown";
                    let s = true;
                    if (button.classList.contains("switch")) type = "switch";
                    if (button.classList.contains("click")) type = "click";
                    if (type === "unknown") return;
                    let parent1 = button.parentElement;
                    let parent2 = parent1.parentElement;
                    if (type === "switch") {
                        button.classList.toggle("on");
                        s = button.classList.contains("on");
                        button.innerHTML = s ? "on" : "off";
                    }
                    let extraState = OWOP.tool.allTools[parent2.id].extra.state;
                    if (typeof extraState[state] === "function") {
                        if (parent2.className === "tabcontentort" && parent2.id !== "all") extraState[state](s);
                    } else {
                        if (parent2.className === "tabcontentort" && parent2.id !== "all") extraState[state] = s;
                    }
                }
                NS.minimizeOptions = function (_minimize) {
                    NS.windows["Options"].toggleminimize();
                }
            }

            NS.windows[windowName] = new GUIWindow(windowName, options, windowFunc);
        }());
    }());
}

function init() {
    // Math.abs(i*j) <= 510 ? Math.abs(i*j)%255 : 0
    if (document.getElementById("load-scr")?.style?.transform && OWOP?.player?.tool) {
        console.time("Neko");
        console.log("Loading Neko's Scripts.");
        install();
        console.log("Neko's Scripts Loaded.");
        console.timeEnd("Neko");
    } else {
        setTimeout(init, 1e2);
    }
}

init();
