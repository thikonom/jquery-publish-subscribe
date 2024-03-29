(function (a) {
    var d = {};
    a.publish = function (b, c) {
        c = a.makeArray(c);
        d[b] && a.each(d[b].concat(), function () {
            try {
                this.apply(a, c || [])
            } catch (e) {
                console.error("pub/sub. topic: ", b, ", error: ", e, "msg:", e.message, "stack:", e.stack, ", func: ", this)
            }
        })
    };
    a.subscribe = function (b, c) {
        d[b] || (d[b] = []);
        d[b].push(c);
        return [b, c]
    };
    a.unsubscribe = function (b) {
        var c = b[0];
        d[c] && a.each(d[c], function (e) {
            this == b[1] && d[c].splice(e, 1)
        })
    };
    a.subscriptions = d
})(jQuery);