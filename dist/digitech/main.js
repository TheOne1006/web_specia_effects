"use strict";function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function stripOld(){for(var t=Date.now(),e=0,n=ACTIVE_ELECTRONS.length;e<n;e++){ACTIVE_ELECTRONS[e].expireAt-t<1e3&&(ACTIVE_ELECTRONS.splice(e,1),e--,n--)}}function createRandomCell(){var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];if(!(ACTIVE_ELECTRONS.length>=MAX_ELECTRONS)){var e=mainLayer.width,n=mainLayer.height;new Cell(_.random(e/CELL_DISTANCE),_.random(n/CELL_DISTANCE),t).paintNextTo(mainLayer)}}function drawGrid(){var t=arguments.length<=0||void 0===arguments[0]?bgLayer.context:arguments[0],e=arguments.length<=1||void 0===arguments[1]?bgLayer:arguments[1],n=e.width,i=e.height;t.fillStyle=BG_COLOR,t.fillRect(0,0,n,i),t.fillStyle=BORDER_COLOR;for(var o=CELL_SIZE;o<i;o+=CELL_DISTANCE)t.fillRect(0,o,n,BORDER_WIDTH);for(var a=CELL_SIZE;a<n;a+=CELL_DISTANCE)t.fillRect(a,0,BORDER_WIDTH,i)}function iterateItemsIn(t){for(var e=Date.now(),n=0,i=t.length;n<i;n++){var o=t[n];e>=o.expireAt?(t.splice(n,1),n--,i--):o.paintNextTo(mainLayer)}}function drawMain(){iterateItemsIn(PINNED_CELLS),iterateItemsIn(ACTIVE_ELECTRONS)}function activateRandom(){var t=Date.now();t<nextRandomAt||(nextRandomAt=t+_.random(300,1e3),createRandomCell())}function render(){mainLayer.blendBackground(bgLayer.canvas),drawMain(),activateRandom(),shape.renderID=requestAnimationFrame(render)}function handleClick(){function t(t){var e=t.clientX,n=t.clientY;new Cell(Math.floor(e/CELL_DISTANCE),Math.floor(n/CELL_DISTANCE),{background:CELL_HIGHLIGHT,forceElectrons:!0,electronCount:4,electronOptions:{speed:3,lifeTime:1500,color:CELL_HIGHLIGHT}}).paintNextTo(mainLayer)}function e(e){e.touches?Array.from(e.touches).forEach(t):t(e)}return["mousedown","touchstart"].forEach(function(t){document.addEventListener(t,e)}),function(){["mousedown","touchstart"].forEach(function(t){document.removeEventListener(t,e)})}}function queue(t){t.split("").reduce(function(t,e,n){var i=t+e;return setTimeout(function(){shape.print(i)},500*n),i},"")}var getQueryParams=function(t){var e=(t||window.location.search).substring(1);return!!e&&_.chain(e.split("&")).map(function(t){var e=t.split("=");return[e[0],decodeURIComponent(e[1])]}).object().value()},STEP_LENGTH=2,CELL_SIZE=5,BORDER_WIDTH=1,MAX_FONT_SIZE=150,MAX_ELECTRONS=100,CELL_DISTANCE=CELL_SIZE+BORDER_WIDTH,CELL_REPAINT_DURATION=[300,500],BG_COLOR="#1d2227",BORDER_COLOR="#13191f",CELL_HIGHLIGHT="#328bf6",ELECTRON_COLOR="#00b07c",FONT_COLOR="#0090ff",FONT_FAMILY='Helvetica, Arial, "Hiragino Sans GB", "Microsoft YaHei", "WenQuan Yi Micro Hei", sans-serif',DPR=window.devicePixelRatio||1,ACTIVE_ELECTRONS=[],PINNED_CELLS=[],MOVE_TRAILS=[[0,1],[0,-1],[1,0],[-1,0]].map(function(t){return[t[0]*CELL_DISTANCE,t[1]*CELL_DISTANCE]}),END_POINTS_OFFSET=[[0,0],[0,1],[1,0],[1,1]].map(function(t){return[t[0]*CELL_DISTANCE-BORDER_WIDTH/2,t[1]*CELL_DISTANCE-BORDER_WIDTH/2]}),FullscreenCanvas=function(){function t(){var e=!(arguments.length<=0||void 0===arguments[0])&&arguments[0];_classCallCheck(this,t);var n=document.createElement("canvas"),i=n.getContext("2d");this.canvas=n,this.context=i,this.disableScale=e,this.resizeHandlers=[],this.handleResize=_.debounce(this.handleResize.bind(this),100),this.adjust(),window.addEventListener("resize",this.handleResize)}return t.prototype.adjust=function(){var t=this.canvas,e=this.context,n=this.disableScale,i=window,o=i.innerWidth,a=i.innerHeight;this.width=o,this.height=a;var r=n?1:DPR;this.realWidth=t.width=o*r,this.realHeight=t.height=a*r,t.style.width=o+"px",t.style.height=a+"px",e.scale(r,r)},t.prototype.clear=function(){this.context.clearRect(0,0,this.width,this.height)},t.prototype.makeCallback=function(t){t(this.context,this)},t.prototype.blendBackground=function(t){var e=arguments.length<=1||void 0===arguments[1]?.1:arguments[1];return this.paint(function(n,i){var o=i.realWidth,a=i.realHeight,r=i.width,s=i.height;n.save(),n.globalCompositeOperation="source-over",n.globalAlpha=e,n.drawImage(t,0,0,o,a,0,0,r,s),n.restore()})},t.prototype.paint=function(t){if(_.isFunction(t))return this.makeCallback(t),this},t.prototype.repaint=function(t){if(_.isFunction(t))return this.clear(),this.paint(t)},t.prototype.onResize=function(t){_.isFunction(t)&&this.resizeHandlers.push(t)},t.prototype.handleResize=function(){var t=this.resizeHandlers;t.length&&(this.adjust(),t.forEach(this.makeCallback.bind(this)))},t.prototype.renderIntoView=function(){var t=arguments.length<=0||void 0===arguments[0]?0:arguments[0],e=arguments.length<=1||void 0===arguments[1]?window.document.body:arguments[1],n=this.canvas;this.container=e;window.location.href.substr(0,19),window.location.href.substr(0,4);n.style.position="absolute",n.style.left="0px",n.style.top="0px",n.style.zIndex=t,e.appendChild(n)},t.prototype.remove=function(){if(this.container)try{this.container.removeChild(this.canvas)}catch(t){}},t}(),Electron=function(){function t(){var e=arguments.length<=0||void 0===arguments[0]?0:arguments[0],n=arguments.length<=1||void 0===arguments[1]?0:arguments[1],i=arguments.length<=2||void 0===arguments[2]?{}:arguments[2],o=i.lifeTime,a=void 0===o?3e3:o,r=i.speed,s=void 0===r?STEP_LENGTH:r,l=i.color,h=void 0===l?ELECTRON_COLOR:l;_classCallCheck(this,t),4===h.length&&(h=h.replace(/[0-9a-f]/g,function(t){return""+t+t})),this.lifeTime=a,this.expireAt=Date.now()+a,this.speed=s,this.color=h,this.shadowColor=this.buildShadowColor(h),this.radius=BORDER_WIDTH/2,this.current=[e,n],this.visited={},this.setDest(this.randomPath())}return t.prototype.buildShadowColor=function(t){return"rgba("+t.match(/[0-9a-f]{2}/gi).map(function(t){return parseInt(t,16)}).join(", ")+", 0.8)"},t.prototype.randomPath=function(){var t=this.current,e=t[0],n=t[1],i=MOVE_TRAILS.length,o=MOVE_TRAILS[_.random(i-1)];return[e+o[0],n+o[1]]},t.prototype.composeCoord=function(t){return t.join(",")},t.prototype.hasVisited=function(t){var e=this.composeCoord(t);return this.visited[e]},t.prototype.setDest=function(t){this.destination=t,this.visited[this.composeCoord(t)]=!0},t.prototype.next=function(){var t=this.speed,e=this.current,n=this.destination;if(Math.abs(e[0]-n[0])<=t/2&&Math.abs(e[1]-n[1])<=t/2){n=this.randomPath();for(var i=1;this.hasVisited(n)&&i<=4;)i++,n=this.randomPath();this.setDest(n)}var o=n[0]-e[0],a=n[1]-e[1];return o&&(e[0]+=o/Math.abs(o)*t),a&&(e[1]+=a/Math.abs(a)*t),[].concat(this.current)},t.prototype.paintNextTo=function(){var t=arguments.length<=0||void 0===arguments[0]?new FullscreenCanvas:arguments[0],e=t.context,n=this.radius,i=this.color,o=this.shadowColor,a=this.expireAt,r=this.lifeTime,s=this.next(),l=s[0],h=s[1];e.save(),e.globalAlpha=Math.max(0,a-Date.now())/r,e.fillStyle=i,e.shadowBlur=5*n,e.shadowColor=o,e.globalCompositeOperation="lighter",e.beginPath(),e.arc(l,h,n,0,2*Math.PI),e.closePath(),e.fill(),e.restore()},t}(),Cell=function(){function t(){var e=arguments.length<=0||void 0===arguments[0]?0:arguments[0],n=arguments.length<=1||void 0===arguments[1]?0:arguments[1],i=arguments.length<=2||void 0===arguments[2]?{}:arguments[2],o=i.electronCount,a=void 0===o?_.random(1,4):o,r=i.background,s=void 0===r?ELECTRON_COLOR:r,l=i.forceElectrons,h=void 0!==l&&l,c=i.electronOptions,d=void 0===c?{}:c;_classCallCheck(this,t),this.background=s,this.electronOptions=d,this.forceElectrons=h,this.electronCount=Math.min(a,4),this.startX=e*CELL_DISTANCE,this.startY=n*CELL_DISTANCE}return t.prototype.pin=function(){var t=arguments.length<=0||void 0===arguments[0]?-1>>>1:arguments[0];this.expireAt=Date.now()+t,PINNED_CELLS.push(this)},t.prototype.scheduleUpdate=function(){var t;this.nextUpdate=Date.now()+(t=_).random.apply(t,CELL_REPAINT_DURATION)},t.prototype.paintNextTo=function(){var t=arguments.length<=0||void 0===arguments[0]?new FullscreenCanvas:arguments[0],e=t.context,n=this.startX,i=this.startY,o=this.background,a=this.nextUpdate;a&&Date.now()<a||(this.scheduleUpdate(),this.createElectrons(),e.save(),e.globalCompositeOperation="lighter",e.fillStyle=o,e.fillRect(n,i,CELL_SIZE,CELL_SIZE),e.restore())},t.prototype.popRandom=function(){var t=arguments.length<=0||void 0===arguments[0]?[]:arguments[0],e=_.random(t.length-1);return t.splice(e,1)[0]},t.prototype.createElectrons=function(){var t=this.startX,e=this.startY,n=this.electronCount,i=this.electronOptions,o=this.forceElectrons;if(n)for(var a=[].concat(END_POINTS_OFFSET),r=o?n:Math.min(n,MAX_ELECTRONS-ACTIVE_ELECTRONS.length),s=0;s<r;s++){var l=this.popRandom(a),h=l[0],c=l[1];ACTIVE_ELECTRONS.push(new Electron(t+h,e+c,i))}},t}(),bgLayer=new FullscreenCanvas,mainLayer=new FullscreenCanvas,shapeLayer=new FullscreenCanvas(!0),nextRandomAt=void 0,shape={lastText:"",lastMatrix:null,renderID:void 0,appendQueueTimer:void 0,isAlive:!1,get cellOptions(){return{electronCount:_.random(1,4),background:FONT_COLOR,electronOptions:{speed:2,lifeTime:_.random(300,1500),color:FONT_COLOR}}},init:function(){var t=this,e=arguments.length<=0||void 0===arguments[0]?document.body:arguments[0];this.isAlive||(bgLayer.paint(drawGrid),bgLayer.onResize(drawGrid),mainLayer.paint(drawMain),mainLayer.onResize(drawMain),bgLayer.renderIntoView(0,e),mainLayer.renderIntoView(1,e),shapeLayer.onResize(function(){t.lastText&&t.print(t.lastText)}),render(),activateRandom(),this.unbindEvents=handleClick(),this.isAlive=!0)},clear:function(){this.lastMatrix&&this.explode(this.lastMatrix),clearTimeout(this.appendQueueTimer),this.lastText="",this.lastMatrix=null,PINNED_CELLS.length=0},destroy:function(){this.isAlive&&(bgLayer.remove(),mainLayer.remove(),shapeLayer.remove(),this.unbindEvents(),clearTimeout(this.appendQueueTimer),cancelAnimationFrame(this.renderID),ACTIVE_ELECTRONS.length=PINNED_CELLS.length=0,this.lastMatrix=null,this.lastText="",this.isAlive=!1)},getTextMatrix:function(t){var e=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],n=e.fontWeight,i=void 0===n?"bold":n,o=e.fontFamily,a=void 0===o?FONT_FAMILY:o,r=shapeLayer.width,s=shapeLayer.height;shapeLayer.repaint(function(e){e.textAlign="center",e.textBaseline="middle",e.font=i+" "+MAX_FONT_SIZE+"px "+a;var n=r/e.measureText(t).width,o=Math.min(MAX_FONT_SIZE,MAX_FONT_SIZE*n*.8);e.font=i+" "+o+"px "+a,e.fillText(t,r/2,s/2)});for(var l=shapeLayer.context.getImageData(0,0,r,s).data,h=[],c=0;c<s;c+=CELL_DISTANCE)for(var d=0;d<r;d+=CELL_DISTANCE){var u=l[4*(d+c*r)+3];u>0&&h.push([Math.floor(d/CELL_DISTANCE),Math.floor(c/CELL_DISTANCE)])}return h},print:function(t,e){var n=this;this.clear(),this.lastText=t;var i=this.lastMatrix=_.shuffle(this.getTextMatrix(t,e)),o=0,a=i.length;!function t(){for(var e=_.random(Math.floor(a/10),Math.floor(a/5)),r=0;r<e&&o<a;){var s=i[o],l=s[0],h=s[1],c=new Cell(l,h,n.cellOptions);c.paintNextTo(mainLayer),c.pin(),o++,r++}o<a&&(n.appendQueueTimer=setTimeout(t,_.random(50,100)))}()},explode:function(t){if(stripOld(),t)for(var e=t.length,n=Math.min(50,_.random(Math.floor(e/40),Math.floor(e/20))),i=0;i<n;i++){var o=t[i],a=o[0],r=o[1],s=new Cell(a,r,this.cellOptions);s.paintNextTo(mainLayer)}else for(var n=_.random(10,20),i=0;i<n;i++)this.randomCell(this.cellOptions)}};