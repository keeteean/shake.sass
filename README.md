# Shake.sass

Shake is a small [Sass](http://sass-lang.com) framework that follows the
[BEM Methodology](https://en.bem.info) and has inspired by
[ITCSS (Inverted Triangle CSS)](https://www.creativebloq.com/web-design/manage-large-scale-web-projects-new-css-architecture-itcss-41514731)
and [Atomic Design](http://atomicdesign.bradfrost.com). Many techniques have been
borrowed from other css frameworks like [iotaCSS](https://www.iotacss.com),
[Spectre.css](https://picturepan2.github.io), or [Bootstrap](https://getbootstrap.com).

It's a Sass-only framework: there are only Sass variables, functions,
mixins, and a very limited amount of css classes. It doesn't contain
any theming rules, only some very basics one.

Some highlighted functions:

- ITCSS file structure
- BEMit Methodology based class names
- Modular Sass (Dart Sass 2.0.0 ready)
- Logical properties used (easily support RTL and Asian languages)
- Prepared Sass variables, ex: system font-families
- Responsive font-size and line-height generator
- Modular and enhanced normalize.css
- Prepared document settings, ex: font size, links
- Media-query generator
- A very light grid generator
- Container generator
- Responsive table
- Responsive video
- Responsive media object

## Getting Started

### Installation

You can install it easily as node a package:

```shell
yarn add -D shake.sass
```

We use yarn as the package manager, but you can install it via npm too:

```shell
npm install --save-dev shake.sass
```

After the installation, you can import Shake.sass in three different ways:

### Import all modules

If you want to use all tools, objects, components, and utilities import
it to your _main_ sass file as follows:

```scss
@use "your-sass-settings";
@use "node_modules/shake.sass/shake" as *;
@use "your-own-component-one";
@use "your-own-component-two";
[etc]
```

_Please note: some rarely needed options turned
off by default._

1. First you need to import your Shake.sass overrides and custom variables (optionally you can add a namespace alias like: `as variables`).
2. Then import the whole Shake.sass.
3. Finally you can import your other own Sass files one by one (optionally you can add a namespace alias like: `as header` or if you want to provide any namespaces: `as *`).

_Note: If you use [Sass loader](https://github.com/webpack-contrib/sass-loader),
you can import from node_modules like:_

```scss
@import "~shake.sass/shake";
```

### Import all modules then turn off unneeded ones

In this case you need import only your settings:

```scss
@use "your-sass-settings";
```

Then copy the original Shake file to your sass files:

```shell
cp node_modules/shake.sass/shake.scss ./{your-sass-root}
```

Afterward, you need to modify all paths in this way:

```scss
// an old path
@use "2.tools/tools.grid";

// replaced with
@use "node_modules/shake.sass/2.tools/tools.grid";
```

Finally, here you can turn off by commenting out the unneeded modules. But be
careful, you may need some essential modules, like:

- 1.settings/_index.scss
- 2.tools/_index.scss

An example main sass file:

```scss
@use "your-sass-settings";
@use "shake" as *; // it's your version
@use "your-own-component-one";
@use "your-own-component-two";
[etc]
```

### Import modules by needs

In this case, you will import only the required tools and settings, then what
you need one-by-one.

_WARNING: This is the cleanest way but may need more manual work!_

For easier importing we provide a `_boilertemplate` directory with all
required sass files, just copy them to your sass source directory like:

```shell
cp -a node_modules/shake.sass/_boilertemplate/ ./sass/
```

This directory contains all modules with documents, but you can drop
out easily what you don't need. But keep in mind the `2.tools/validators`
and `2.tools/libraries` are required by most tools and settings.

The `1.settings` directory contains all variables, so you don't need to
import them from Shake.sass. The `1.settings` contains only global variables,
all local variables should be in the related modules. Ex.: All Type Tool
related variables should be in `2.tools/_tools.type.scss`.

Because we use the Sass modular way, the global variables, settings, mixins, and
functions are not globally accessible by default; you should import each of
them that you want to use in your current component. You can import the globally
needed settings and tools via the shortcut files in the root directory:

```scss
@use "../settings";
@use "../tools" as *;
```

The best if you import only the needed tools to your component like:

```scss
@use "../settings";
@use "../2.tools/tools.breakpoint" as *;
@use "../2.tools/tools.grid" as grid;

.c-header {
  &__logo {
    @include grid.make-column(1.5rem);
    @include grid.column-size(10,12);
    @include grid.column-offset(1,12);

    @include breakpoint(large) {
      @include grid.column-size(2,12);
      @include grid.column-offset(0,12);
    }
  }
}
```

## Documentation

However, all Sass files are highly commented, you can find the full
documentation at
[keeteean.github.io/shake.sass](https://keeteean.github.io/shake.sass/) or in
the `/docs` directory as well.
