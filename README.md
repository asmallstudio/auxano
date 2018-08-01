# Auxano Advisors

A frontend static site made with [React Static](https://react-static.js.org/).

## Installing

After cloning this repo, go into the new folder and run:

```sh
yarn install
```

## Running

### Development

```sh
yarn start
```

### Staging

```sh
yarn stage
yarn serve
```

### Production

```sh
yarn build
yarn serve
```

## Notes

### Branching strategy

- `master` branch should be kept pristine, and only validated commits should be
  merge into this branch. This branch will autodeploy to production once
  changed!
- `develop` branch will be used to merge in all of the feature branches, and
  will be considered the latest working state of the project before merging into
  the `master` branch

### Deployment

- Deployment is mainly managed by Netlify
- All pushes to `master` will autodeploy to production
- Any pull requests to `develop` will create a deployment preview that can be
  viewed via the link in the pull request (after the build pipeline finishes).
  Note, the build command for a deployment preview is `yarn stage`

### CSS

- The styling uses [Sass (or SCSS)](https://sass-lang.com/) and [CSS Modules](https://github.com/css-modules/css-modules#readme)
- Since CSS Modules are used, the convention for class names is to use camelcase instead of dash-case (`myClass` instead of
  `my-class`). The reason is it's much easier to access the variable name when
  referencing it in JavaScript (using dot notation vs. bracket notation)
  ([reference](https://github.com/css-modules/css-modules#naming))
- [CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*) including color, spacing, and typeface are managed in `/src/lib/theme.json`.
- [Autoprefixer](https://github.com/postcss/autoprefixer) and [Normalize.css](https://necolas.github.io/normalize.css/) are included via [PostCSS](https://postcss.org)
- A 12-column layout is included and build with Sass syntax. All that is needed to use, however, is an understanding of the class naming scheme. The column names follow the format: `col-xs-12` the first part: `col-` begins the class name, the second `xs-` defines the minimum width the class takes effect (xs begins at 0 px and is thus the base class for most components), and the final part `12`, a number, defines how many columns the object should span out of twelve. 
- Media Queries are best used via the Sass mixins included in `/src/components/styles/utils.scss`. For example: `@include respond-above(md) {}` creates a `min-width` media query. Also available are `@include respond-below(lg) {}` for `max-width` media queries and `@include respond-between(md, xl) {}` for creating min- and max-width media queries targeting viewports between the breakpoint parameters. Available breakpoint sizes are: `xs`, `sm`, `md`, `lg`, `xl`.

### Code formatting

Formatting is kept consistent by using [Prettier](https://prettier.io/) and listed with ES Lint. If using Visual Studio Code, install Prettier and ES Lint plugins via: `code --install-extension esbenp.prettier-vscode; code --install-extension dbaeumer.vscode-eslint`. Furthermore, here are some recommended workspace settings: 

```json
{
  "editor.insertSpaces": true,
  "editor.tabSize": 2,
  "editor.formatOnSave": true,
  "eslint.packageManager": "yarn"
}
```