var postcss = require('postcss');

var plugin = require('./');

function run(input, output, opts) {
    return postcss([ plugin(opts) ]).process(input, { from: undefined })
        .then(function (result) {
            expect(result.css).toEqual(output);
            expect(result.warnings().length).toBe(0);
        });
}


it('remove webkit flex prefixes', function () {
    return run(
        'a{ display: -webkit-flex; display: -webkit-box; display: flex; }',
        'a{ display: flex; }',
        {}
    );
});

