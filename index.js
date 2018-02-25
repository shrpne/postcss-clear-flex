var postcss = require('postcss');

module.exports = postcss.plugin('postcss-clear-flex', function () {
    return function (root) {
        root.walkDecls('display', function (decl) {
            if (decl.value  === '-webkit-box' || decl.value  === '-webkit-flex') {
                decl.remove();
            }
        });
    };
});

