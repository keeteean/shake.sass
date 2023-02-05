# Tools

## Helper Tools

Required Sass functions and mixins for tools and other sass files.
The must be imported before settings (Sass variables)!

```scss
@import "2.tools/tools._helpers";
@import "2.tools/tools.variable";
```

## Settings

Setting files contain **global** configurations that are shared by more than
one module.
Settings that are connected to one and only module are a part of the module
itself.
Local configurations should be contained into the modules (objects,
components, etc.) that are related to.

```scss
@import "1.settings/settings._all";
```
