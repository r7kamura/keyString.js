function keyString (e) {
  var ret = '';
  if (e.ctrlKey) ret += 'C-';
  if (e.altKey)  ret += 'M-';
  if (e.metaKey && !e.ctrlKey) ret += 'W-';
  if (e.which == 0) {
    if (e.shiftKey) ret += 'S-';
    ret += arguments.callee.codeMap[e.keyCode];
  } else {
    var key = arguments.callee.codeMap[e.which];
    if (key) {
      if (e.shiftKey) ret += 'S-';
      ret += key;
    } else {
      ret += String.fromCharCode(e.which)[e.shiftKey ? 'toUpperCase' : 'toLowerCase']();
    }
  }
  return ret;
}

keyString.codeMap = {
    8: 'BackSpace',
    9: 'Tab',
   13: 'Return',
   27: 'Esc',
   32: 'Space',
   33: 'PageUp',
   34: 'PageDown',
   35: 'End',
   36: 'Home',
   37: 'Left',
   38: 'Up',
   39: 'Right',
   40: 'Down',
   45: 'Insert',
   46: 'Delete',
  112: 'F1',
  113: 'F2',
  114: 'F3',
  115: 'F4',
  116: 'F5',
  117: 'F6',
  118: 'F7',
  119: 'F8',
  120: 'F9',
  121: 'F10',
  122: 'F11',
  123: 'F12'
};

/* Usage (with jQuery):
*
*  var keyConfig = {
*      'M-1' : function () { ... },
*      'M-2' : function () { ... },
*      'M-3' : function () { ... },
*      'M-4' : function () { ... },
*      'M-0' : function () { ... },
*      '.'   : function () { ... },
*      'ESC' : function () { ... }
*  };
*  $(window).keydown(function (e) {
*      (keyConfig[keyString(e)] || function() {})();
*  });
*
*/
