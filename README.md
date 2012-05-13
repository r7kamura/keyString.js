# keyString.js
A converter of event object to string representaion

## Example
Here's an example code (with jQuery).

```javascript
var keyConfig = {
    'M-1' : function () { ... },
    'M-2' : function () { ... },
    'M-3' : function () { ... },
    'M-4' : function () { ... },
    'M-0' : function () { ... },
    '.'   : function () { ... },
    'ESC' : function () { ... }
};
$(window).keydown(function (e) {
    (keyConfig[keyString(e)] || function() {})();
});
```
