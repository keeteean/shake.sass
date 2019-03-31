# Shake.sass

A small Sass framework for BEM and ITCSS based web projects highly inspired by 
[iotaCSS](https://www.iotacss.com).

## Getting Started

You can install all Shake.sass at once:

```shell
yarn add shake.sass --dev
```

Then import it to your main sass file as follows:

```scss
@import "node_modules/shake.sass/helpers";
@import "your-sass-settings";
@import "node_modules/shake.sass/shake";
@import "your-own-components";
```

1. So first you need to import helpers sass file. This contains all helper sass
functions and mixins what required by sass settings/variables.
2. Then you import your Shake.sass overrides and custom variables.
3. Finally import the whole Shake.sass with default settings where you haven't
override variables.
4. Then you can import your other sass files.

_note: If you use [Sass loader](https://github.com/webpack-contrib/sass-loader),
you can import from node_modules:_

```scss
@import "~shake.sass/shake";
```

## Documentation
