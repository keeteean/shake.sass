# Shake.sass

Shake is a small [Sass](http://sass-lang.com) framework what follows the
[BEM Methodology](https://en.bem.info) and has inspired by
[ITCSS (Inverted Triangle CSS)](https://www.creativebloq.com/web-design/manage-large-scale-web-projects-new-css-architecture-itcss-41514731)
and [Atomic Design](http://atomicdesign.bradfrost.com). Many techniques has been
borrowed from other css frameworks like [iotaCSS](https://www.iotacss.com),
[Spectre.css](https://picturepan2.github.io) or [Bootstrap](https://getbootstrap.com).

It's a Sass only framework: there are only Sass variables, functions,
mixins and very limited amount of css classes. It doesn't contains
any theming rules, only very basics one.

Some highlighted functions:

- ITCSS file structure
- Prepaired Sass variables, ex: system font-families
- Modularscale based responsive font-size and line-height generator
- Modular and enhanced normalize.css
- Prepaired document settings, ex: font-size, links
- Media-query generator
- Very light grid generator
- Responsive table
- Responsive video
- Responsive media object

## Getting Started

### Installation

You can install it easily as node package:

```bash
yarn add shake.sass --dev
```

We use yarn as package manager, but you can install it via npm too:

```bash
npm install --save-dev shake.sass
```

After installation you can import Shake.sass in three different ways:

### Import all modules

If you want to use all tools, objects, components and utilities import
it to your main sass file as follows (some rare needed options turned
off by default):

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
you can import from `node_modules` like:_

```scss
@import "~shake.sass/shake";
```

### Import all modules then turn off unneeded ones

In this case you need import only helpers sass:

```scss
@import "node_modules/shake.sass/helpers";
@import "your-sass-settings";
```

Then copy the original shake file to your sass files:

```bash
cp node_modules/shake.sass/shake.scss ./{your-sass-root}
```

Afterwards you need to modify all paths in this way:

```scss
// an old path
@import "2.tools/tools.all";

// replaced with
@import "node_modules/shake.sass/2.tools/tools.all";
```

Finally here you can turn off by commented out unneeded modules. But be
careful, you may need some need modules, like:

- 1.settings/settings.all
- 2.tools/tools.all

An example main sass file:

```scss
@import "node_modules/shake.sass/helpers";
@import "your-sass-settings";
@import "shake"; // it's your version
@import "your-own-components";
```

### Import only needed modules

In this case you will import only required tools and settings, then what
you really need one-by-one.

_WARNING: this is the cleanest way but may needs more manual work!_

For easier importing we provide a `_boilertemplate` directory with all
required sass files, just copy them to you sass source directory like:

```bash
cp -a node_modules/shake.sass/_boilertemplate/ ./sass/
```

This directory contains all modules with documents, but you can drop
out easily what you don't need. But keep in mind
`2.tools/_tools.helpers.scss` required by the most tools and settings.

The `1.settings` directory contains all variables so you don't need to
import them from Shake.sass. `1.settings` contains only global variables
all local variables should be in related modules. Ex.: All Type related
variables should be in `2.tools/_tools.type.scss`.
