"use strict";
var _ = require('lodash');
var Bar = (function () {
    function Bar(id, display_phone, image_url, name, rating, url) {
        _.assign(this, {
            id: id,
            display_phone: display_phone,
            image_url: image_url,
            name: name,
            rating: rating,
            url: url
        });
    }
    return Bar;
}());
exports.Bar = Bar;
//# sourceMappingURL=bar.js.map