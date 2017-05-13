/* 
* IE8兼容
*/
if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function (item, i) {
        //alert("prototyping...")
        i || (i = 0)
        var length = this.length
        if (i < 0) i = length + i
        for (; i < length; i++)
            if (this[i] === item) return i
        return -1
    }
}

if (!window.WebSocket) {
    window.WebSocket = function () { }
    window.WebSocket.prototype = {
        onmessage: function () { },
        onclose: function () { },
        onopen: function () { },
        close: function () { }
    }
}