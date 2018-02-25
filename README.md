# PostCSS Clear Flex [![Build Status][ci-img]][ci]

[PostCSS] plugin clear old webkit flex prefixes to prevent wrong order in the Autoprefixer output.

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/shrpne/postcss-clear-flex.svg
[ci]:      https://travis-ci.org/shrpne/postcss-clear-flex

If you have to use prefixed sources like [Uikit 2](https://github.com/uikit/uikit/blob/v2/master/src/less/core/grid.less#L71) and need to support browsers with old [flexbox](https://caniuse.com/#search=flex) specification like Safari 6, Android 4.3, Blackberry 7, Autoprefixer will produce wrong prefixes order

```css
/* source */
.foo {
    display: -webkit-flex;
    display: flex;
}

/* output from Autoprefixer with config "Safari 6, Safari 8" */
.foo {
  display: -webkit-flex;
  display: -webkit-box; 
  /* ^^^ old prefix get higher priority than new prefix, Safari 8 will be forced to use old flexbox specification and layout will break */
  display: flex;
}
```

To prevent it this plugin clear flexbox prefixes so Autoprefixer will apply prefixes from scratch with correct order


```css
/* source */
.foo {
    display: -webkit-flex;
    display: flex;
}

/* postcss-clear-flex */
.foo {
  display: flex;
}

/* Autoprefixer */
.foo {
    display: -ms-flexbox;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
}
```

## Usage
postcss-clear-flex should be used before Autoprefixer

```js
postcss([ require('postcss-clear-flex') ])
```

See [PostCSS] docs for examples for your environment.
