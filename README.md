# Shake.sass
A small Sass framework for BEM and ITCSS based web projects highly inspired by (iotaCSS)[https://www.iotacss.com].

## Getting Started
You can install all Shake.sass at once:

```
yarn add shake.sass --dev
```

Then import it to your main sass file as follows:

```scss
@import "node_modules/shake.sass/helpers";
@import "your-sass-settings";
@import "node_modules/shake.sass/shake";
@import "your-own-components";
```

So first you need to import helpers sass file. This contains all helper sass
functions and mixins what required by sass settings/variables.
Then you import your Shake.sass overrides and custom variables.
Finally import the whole Shake.sass with default settings where you haven't
override variables.
Then you can import your other sass files.

## Documentation
