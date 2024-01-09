/**
 * MyUtils: v1.1.0
 * - await loadLibs([URLs]) -- loads and caches the loaded libraries to avoid loading them again
 * - injectCSS(string) -- injects CSS into the page
 */
// prettier-ignore
cacheLoadedLibs={},loadLibs=async(l)=>{const r=await Promise.all(l.map(async(l)=>{if(cacheLoadedLibs[l])return cacheLoadedLibs[l];const r=await fetch(l),t=await r.text();return cacheLoadedLibs[l]=t,t}));r.forEach(r=>{eval.call(window,r)})},injectCSS=(e,t=document.createElement("style"))=>(t.type="text/css",t.textContent=e,t.innerText=e,document.body.appendChild(t));

// Name: Auto highlight

async function autoHighlight(element) {
  await loadLibs(['https://code.jquery.com/jquery-3.5.1.min.js']);

  /* TextHighlighter: The MIT License (MIT) Copyright (c) 2011 - 2016 mirz <mirz.hq@gmail.com> Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE. */
  // prettier-ignore
  !function(a){"use strict";function b(a,b){return q(a).color()===q(b).color()}function c(a,b){var c;a=a||{};for(c in b)b.hasOwnProperty(c)&&void 0===a[c]&&(a[c]=b[c]);return a}function d(a){return a.filter(function(a,b,c){return c.indexOf(a)===b})}function e(a){var b=a.startContainer,c=a.endContainer,d=a.commonAncestorContainer,e=!0;if(0===a.endOffset){for(;!c.previousSibling&&c.parentNode!==d;)c=c.parentNode;c=c.previousSibling}else c.nodeType===o.TEXT_NODE?a.endOffset<c.nodeValue.length&&c.splitText(a.endOffset):a.endOffset>0&&(c=c.childNodes.item(a.endOffset-1));return b.nodeType===o.TEXT_NODE?a.startOffset===b.nodeValue.length?e=!1:a.startOffset>0&&(b=b.splitText(a.startOffset),c===b.previousSibling&&(c=b)):b=a.startOffset<b.childNodes.length?b.childNodes.item(a.startOffset):b.nextSibling,{startContainer:b,endContainer:c,goDeeper:e}}function f(a,b){a.sort(function(a,c){return q(b?c:a).parents().length-q(b?a:c).parents().length})}function g(a){function b(a,b){for(var c=Math.min(a.length,b.length),d=0;d<c;){if(a[d]!==b[d])return a[d]-b[d];d++}return a.length-b.length}a.sort(function(a,c){return b(a[2].split(":"),c[2].split(":"))})}function h(a){var b=[],c={},d=[];return a.forEach(function(a){var d=a.getAttribute(n);"undefined"==typeof c[d]&&(c[d]=[],b.push(d)),c[d].push(a)}),b.forEach(function(a){var b=c[a];d.push({chunks:b,timestamp:a,toString:function(){return b.map(function(a){return a.textContent}).join("")}})}),d}function i(a,b){a.addEventListener("mouseup",l),a.addEventListener("touchend",l)}function j(a,b){a.removeEventListener("mouseup",l),a.removeEventListener("touchend",l)}function k(a,b){if(!a)throw"Missing anchor element";this.el=a,this.options=c(b,{enabled:!0,color:"#ffff7b",highlightedClass:"highlighted",contextClass:"highlighter-context",tagName:"span",keepRange:!1,onRemoveHighlight:function(){return!0},onBeforeHighlight:function(){return!0},onAfterHighlight:function(){}}),q(this.el).addClass(this.options.contextClass),l=this.highlightHandler.bind(this),this.options.enabled&&i(this.el,this)}var l,m="data-highlighted",n="data-timestamp",o={ELEMENT_NODE:1,TEXT_NODE:3},p=["SCRIPT","STYLE","SELECT","OPTION","BUTTON","OBJECT","APPLET","VIDEO","AUDIO","CANVAS","EMBED","PARAM","METER","PROGRESS"],q=function(a){return{addClass:function(b){a.classList?a.classList.add(b):a.className+=" "+b},removeClass:function(b){a.classList?a.classList.remove(b):a.className=a.className.replace(new RegExp("(^|\\b)"+b+"(\\b|$)","gi")," ")},prepend:function(b){for(var c=Array.prototype.slice.call(b),d=c.length;d--;)a.insertBefore(c[d],a.firstChild)},append:function(b){var c,d,e=Array.prototype.slice.call(b);for(c=0,d=e.length;c<d;++c)a.appendChild(e[c])},insertAfter:function(b){return b.parentNode.insertBefore(a,b.nextSibling)},insertBefore:function(b){return b.parentNode.insertBefore(a,b)},remove:function(){a.parentNode.removeChild(a),a=null},contains:function(b){return a!==b&&a.contains(b)},wrap:function(b){return a.parentNode&&a.parentNode.insertBefore(b,a),b.appendChild(a),b},unwrap:function(){var b,c=Array.prototype.slice.call(a.childNodes);return c.forEach(function(a){b=a.parentNode,q(a).insertBefore(a.parentNode),q(b).remove()}),c},parents:function(){for(var b,c=[];b=a.parentNode;)c.push(b),a=b;return c},normalizeTextNodes:function(){if(a){if(a.nodeType===o.TEXT_NODE)for(;a.nextSibling&&a.nextSibling.nodeType===o.TEXT_NODE;)a.nodeValue+=a.nextSibling.nodeValue,a.parentNode.removeChild(a.nextSibling);else q(a.firstChild).normalizeTextNodes();q(a.nextSibling).normalizeTextNodes()}},color:function(){return a.style.backgroundColor},fromHTML:function(a){var b=document.createElement("div");return b.innerHTML=a,b.childNodes},getRange:function(){var b,c=q(a).getSelection();return c.rangeCount>0&&(b=c.getRangeAt(0)),b},removeAllRanges:function(){var b=q(a).getSelection();b.removeAllRanges()},getSelection:function(){return q(a).getWindow().getSelection()},getWindow:function(){return q(a).getDocument().defaultView},getDocument:function(){return a.ownerDocument||a}}};k.prototype.destroy=function(){j(this.el,this),q(this.el).removeClass(this.options.contextClass)},k.prototype.highlightHandler=function(){this.doHighlight()},k.prototype.doHighlight=function(a){if(a="undefined"==typeof a?this.options.keepRange:a,!this.options.enabled)return!1;var b,c,d,e,f=q(this.el).getRange();f&&!f.collapsed&&(this.options.onBeforeHighlight(f)===!0&&(e=+new Date,b=k.createWrapper(this.options),b.setAttribute(n,e),c=this.highlightRange(f,b),d=this.normalizeHighlights(c),this.options.onAfterHighlight(f,d,e)),a||q(this.el).removeAllRanges())},k.prototype.highlightRange=function(a,b){if(!a||a.collapsed)return[];var c,d,f,g=e(a),h=g.startContainer,i=g.endContainer,j=g.goDeeper,k=!1,l=h,n=[];do j&&l.nodeType===o.TEXT_NODE&&(p.indexOf(l.parentNode.tagName)===-1&&""!==l.nodeValue.trim()&&(d=b.cloneNode(!0),d.setAttribute(m,!!this.options.color),f=l.parentNode,(q(this.el).contains(f)||f===this.el)&&(c=q(l).wrap(d),n.push(c))),j=!1),l!==i||i.hasChildNodes()&&j||(k=!0),l.tagName&&p.indexOf(l.tagName)>-1&&(i.parentNode===l&&(k=!0),j=!1),j&&l.hasChildNodes()?l=l.firstChild:l.nextSibling?(l=l.nextSibling,j=!0):(l=l.parentNode,j=!1);while(!k);return n},k.prototype.normalizeHighlights=function(a){var b;return this.flattenNestedHighlights(a),this.mergeSiblingHighlights(a),b=a.filter(function(a){return a.parentElement?a:null}),b=d(b),b.sort(function(a,b){return a.offsetTop-b.offsetTop||a.offsetLeft-b.offsetLeft}),b},k.prototype.flattenNestedHighlights=function(a){function c(){var c=!1;return a.forEach(function(d,f){var g=d.parentElement,h=g.previousSibling,i=g.nextSibling;e.isHighlight(g)&&(b(g,d)?(g.replaceChild(d.firstChild,d),a[f]=g,c=!0):(d.nextSibling||(q(d).insertBefore(i||g),c=!0),d.previousSibling||(q(d).insertAfter(h||g),c=!0),g.hasChildNodes()||q(g).remove()))}),c}var d,e=this;f(a,!0);do d=c();while(d)},k.prototype.mergeSiblingHighlights=function(a){function c(a,c){return c&&c.nodeType===o.ELEMENT_NODE&&b(a,c)&&d.isHighlight(c)}var d=this;a.forEach(function(a){var b=a.previousSibling,d=a.nextSibling;c(a,b)&&(q(a).prepend(b.childNodes),q(b).remove()),c(a,d)&&(q(a).append(d.childNodes),q(d).remove()),q(a).normalizeTextNodes()})},k.prototype.setColor=function(a){this.options.color=a},k.prototype.getColor=function(){return this.options.color},k.prototype.removeHighlights=function(a){function b(a){var b=a.previousSibling,c=a.nextSibling;b&&b.nodeType===o.TEXT_NODE&&(a.nodeValue=b.nodeValue+a.nodeValue,q(b).remove()),c&&c.nodeType===o.TEXT_NODE&&(a.nodeValue=a.nodeValue+c.nodeValue,q(c).remove())}function c(a){var c=q(a).unwrap();c.forEach(function(a){b(a)})}var d=a||this.el,e=this.getHighlights({container:d}),g=this;f(e,!0),e.forEach(function(a){g.options.onRemoveHighlight(a)===!0&&c(a)})},k.prototype.getHighlights=function(a){a=c(a,{container:this.el,andSelf:!0,grouped:!1});var b=a.container.querySelectorAll("["+m+"]"),d=Array.prototype.slice.call(b);return a.andSelf===!0&&a.container.hasAttribute(m)&&d.push(a.container),a.grouped&&(d=h(d),"last"===a.grouped?d=d[d.length-1]:"first"===a.grouped&&(d=d[0])),d},k.prototype.isHighlight=function(a){return a&&a.nodeType===o.ELEMENT_NODE&&a.hasAttribute(m)},k.prototype.serializeHighlights=function(a){function b(a,b){var c,d=[];do c=Array.prototype.slice.call(a.parentNode.childNodes),d.unshift(c.indexOf(a)),a=a.parentNode;while(a!==b||!a);return d}var c=this.getHighlights(a||{}),d=this.el,e=[];return c.chunks&&(c=c.chunks),f(c,!1),c.forEach(function(a){var c=0,f=a.textContent.length,g=b(a,d),h=a.cloneNode(!0);h.innerHTML="",h=h.outerHTML,a.previousSibling&&a.previousSibling.nodeType===o.TEXT_NODE&&(c=a.previousSibling.length),e.push([h,a.textContent,g.join(":"),c,f])}),g(e),JSON.stringify(e)},k.prototype.deserializeHighlights=function(a){function b(a){for(var b,c,f,g={wrapper:a[0],text:a[1],path:a[2].split(":"),offset:a[3],length:a[4]},h=g.path.pop(),i=e.el;f=g.path.shift();)i=i.childNodes[f];i.childNodes[h-1]&&i.childNodes[h-1].nodeType===o.TEXT_NODE&&(h-=1),i=i.childNodes[h],b=i.splitText(g.offset),b.splitText(g.length),b.nextSibling&&!b.nextSibling.nodeValue&&q(b.nextSibling).remove(),b.previousSibling&&!b.previousSibling.nodeValue&&q(b.previousSibling).remove(),c=q(b).wrap(q().fromHTML(g.wrapper)[0]),d.push(c)}var c,d=[],e=this;if(!a)return d;try{c=JSON.parse(a)}catch(f){throw"Can't parse JSON: "+f}return g(c),c.forEach(function(a){try{b(a)}catch(c){console&&console.warn&&console.warn("Can't deserialize highlight descriptor. Cause: "+c)}}),d},k.prototype.find=function(a,b){var c=q(this.el).getWindow(),d=c.scrollX,e=c.scrollY,f="undefined"==typeof b||b;if(q(this.el).removeAllRanges(),c.find)for(;c.find(a,f);)this.doHighlight(!0);else if(c.document.body.createTextRange){var g=c.document.body.createTextRange();for(g.moveToElementText(this.el);g.findText(a,1,f?4:0)&&(q(this.el).contains(g.parentElement())||g.parentElement()===this.el);)g.select(),this.doHighlight(!0),g.collapse(!1)}q(this.el).removeAllRanges(),c.scrollTo(d,e)},k.prototype.disable=function(){this.options.enabled&&(j(this.el,this),this.options.enabled=!1)},k.prototype.enable=function(){this.options.enabled||(i(this.el,this),this.options.enabled=!0)},k.createWrapper=function(a){var b=document.createElement(a.tagName);return b.style.backgroundColor=a.color,b.className=a.highlightedClass,b},a.TextHighlighter=k}(window),function(a){"use strict";function b(a,b){return function(){b.call(this,a)}}var c="textHighlighter";a.fn.getHighlighter=function(){return this.data(c)},a.fn[c]=function(d){return this.each(function(){var e,f=this;a.data(f,c)||(e=new TextHighlighter(f,d),e.destroy=b(e.destroy,function(b){b.call(e),a(f).removeData(c)}),a.data(f,c,e))})}}(jQuery);

  $.fn.textHighlighter = function () {
    let hltr;
    let currentColor;
    let currentMousePos = { x: 0, y: 0 };

    const colors = ['green', 'yellow', 'orange', 'blue', 'gray', 'red'];

    $('#highlighter-dot').remove();

    return this.each(function () {
      function setColor(colorIndex) {
        currentColor = colors[colorIndex];
        hltr.setColor(currentColor);
        $('#highlighter-dot').attr('class', `${currentColor}-highlight`);
      }

      function enable() {
        enabled = true;
        updateDotLocation();
        $('#highlighter-dot').css('visibility', 'visible');
        hltr.enable();
      }

      function changeHighlightColor(elem, color) {
        elem.attr(
          'class',
          elem
            .attr('class')
            .replace(/\w+-highlight/, '')
            .replace(/^\s+|\s+&/g, '')
            .replace(/\s+/g, ' ')
        );
        elem.addClass(`${color}-highlight`);
        save();
      }

      function updateDotLocation() {
        $('#highlighter-dot').offset({ top: currentMousePos.y + 10, left: currentMousePos.x + 10 });
      }

      function onMouseMove(event) {
        currentMousePos.x = event.pageX;
        currentMousePos.y = event.pageY;
        updateDotLocation();
      }

      function changeColor() {
        setColor((colors.indexOf(currentColor) + 1) % colors.length);
      }

      function updateColor(element) {
        changeHighlightColor($(element), currentColor);
      }

      function removeHighlight(element) {
        hltr.removeHighlights(element);
        save();
      }

      function save() {
        $('.highlighted.selected').removeClass('selected');
      }

      function init() {
        hltr = new TextHighlighter(document.body, {
          enabled: false,
          onAfterHighlight: function (range, hlts) {
            hlts.forEach((elem) => {
              $(elem).removeAttr('style');
              $(elem).attr('style');
              $(elem).attr('class', `highlighted ${currentColor}-highlight`);
            });

            save();
          },
        });

        injectCSS(getStyles());

        $('body').prepend('<div id="highlighter-dot"></div>');

        setColor(0);
      }

      $(this).on('click', '.highlighted', (event) => {
        window.getSelection().removeAllRanges();
        updateColor(event.target);
        event.stopPropagation();
        event.preventDefault();
        return false;
      });

      $(this).on('contextmenu', '.highlighted', (event) => {
        window.getSelection().removeAllRanges();
        removeHighlight(event.target);
        event.stopPropagation();
        event.preventDefault();
        return false;
      });

      $(this).one('dblclick', function (event) {
        window.getSelection().removeAllRanges();
        enable();
        event.stopPropagation();
        event.preventDefault();
        return false;
      });

      $(this).on('contextmenu', (event) => {
        window.getSelection().removeAllRanges();
        changeColor();
        event.stopPropagation();
        event.preventDefault();
        return false;
      });

      $(document).on('mousemove', onMouseMove);

      init();
    });

    function getStyles() {
      return `
    #highlighter-dot {
      position: absolute;
      height: 15px;
      width: 15px;
      z-index: 999999;
      border-radius: 50%;
      display: block;
      visibility: hidden;
      top: 0;
      left: 0;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
        rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    }
    
    .highlighted {
      cursor: pointer;
    }
    
    .green-highlight {
      background-color: #bcff1e;
    }
    
    .orange-highlight {
      background-color: #fdd13d;
    }
    
    .blue-highlight {
      background-color: #36fbfb;
    }
    
    .gray-highlight {
      background-color: #f2f2f2;
    }
    
    .yellow-highlight {
      background-color: #feff00;
    }
    
    .red-highlight {
      background-color: #ff86a4;
    }
      `;
    }
  };

  $.fn.destoryTextHighlighter = function () {
    return this.each(function () {
      $(this).off('click', '.highlighted');
      $(this).off('contextmenu', '.highlighted');
      $(this).off('contextmenu');
      $(document).off('mousemove');
      $(this).off('dblclick');
      $('#highlighter-dot').remove();
    });
  };

  $(document).ready(function () {
    $(element).textHighlighter();
  });
}

function destoryTextHighlighter(element) {
  $(element).destoryTextHighlighter();
}
