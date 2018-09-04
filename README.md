# Auxano Advisors

A frontend static site made with [React Static](https://react-static.js.org/).

## Installing

After cloning this repo, go into the new folder and run:

```sh
yarn install
```

## Build Environments

### Development

Development includes hot reloading and does not minimize built CSS. CSS Module class names are expanded (yet still unique) allowing for easier debugging.

```sh
yarn start
```

### Staging

Essentially the same as production but allows CSS Modules class names to still be viewed, as in develop.

```sh
yarn stage
yarn serve
```

### Production

The final version of the site for deployment, bundled and minified.

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

- The styling uses [Sass (or SCSS)](https://sass-lang.com/) and
  [CSS Modules](https://github.com/css-modules/css-modules#readme)
- Since CSS Modules are used, the convention for class names is to use camelcase
  instead of dash-case (`myClass` instead of `my-class`). The reason is it's
  much easier to access the variable name when referencing it in JavaScript
  (using dot notation vs. bracket notation)
  ([reference](https://github.com/css-modules/css-modules#naming))
- [CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
  including color, spacing, and typeface are managed in `/src/lib/theme.json`.
- [Autoprefixer](https://github.com/postcss/autoprefixer) and
  [Normalize.css](https://necolas.github.io/normalize.css/) are included via
  [PostCSS](https://postcss.org)
- A 12-column layout is included and build with Sass syntax. All that is needed
  to use, however, is an understanding of the class naming scheme. The column
  names follow the format: `col-xs-12` the first part: `col-` begins the class
  name, the second `xs-` defines the minimum width the class takes effect (xs
  begins at 0 px and is thus the base class for most components), and the final
  part `12`, a number, defines how many columns the object should span out of
  twelve.
- Media Queries are best used via the Sass mixins included in
  `/src/components/styles/utils.scss`. For example:
  `@include respond-above(md) {}` creates a `min-width` media query. Also
  available are `@include respond-below(lg) {}` for `max-width` media queries
  and `@include respond-between(md, xl) {}` for creating min- and max-width
  media queries targeting viewports between the breakpoint parameters. Available
  breakpoint sizes are: `xs`, `sm`, `md`, `lg`, `xl`.

### Code formatting

Formatting is kept consistent by using [Prettier](https://prettier.io/) and
linted with [ESLint](https://eslint.org/). If using Visual Studio Code, install
Prettier and ESLint plugins via:
`code --install-extension esbenp.prettier-vscode; code --install-extension dbaeumer.vscode-eslint`.
Furthermore, here are some recommended workspace settings:

```json
{
  "editor.insertSpaces": true,
  "editor.tabSize": 2,
  "editor.formatOnSave": true,
  "eslint.packageManager": "yarn"
}
```

### Continuous integration

Continuous integration is handled by two sources, Netlify and
[CircleCI](https://circleci.com/).

#### Netlify

Will verify the application builds for production by running `yarn run build`

#### CircleCI

Will verify a suite of tests located in the configuration
(`.circleci/config.yml`)

- The following branches will trigger tests when pushed: `master`, `develop`,
  `feature/`, and `fix/`

##### Tests

- ESLint
  - Validates that the code conforms to the ESLint standards set in
    `.eslintrc.js`
  - Command: `yarn run test-eslint`
- PageSpeed
  - Checks the Google
    [PageSpeed](https://developers.google.com/speed/pagespeed/insights/) API to
    analyze web performance. The results are stored as an artifact inside the CI
    test results.
- Pa11y
  - Validates that the code conforms to accessibility standards. The results are
    stored as an artifact inside the CI test results.

### Admin panel

The admin panel allows users to modify website content via a frontend interface. This is done through [Netlify CMS](https://www.netlifycms.org/), an open source React application. The admin panel can be viewed at `sitedomain.com/admin/`.

> Note the trailing slash, without it the route will fail.

#### Custom preview templates

This site uses [custom preview templates](https://www.netlifycms.org/docs/customization/#registerpreviewtemplate) for each page in the `pages` collection. The custom preview is a screenshot of the website's page with highlighted sections labeled with their matching input field names. For example, for a page with a hero section with a background image and title, the screenshot will have a highlighted section labeled `Hero`. The purpose of these screenshots is to help guide a client / non-technical user in editing the website content.

To add guide images:

##### Generate guide images

The guides are generated using [this repository](https://github.com/asmallstudio/netlify-cms-client-guide-gen).

To use the guide generator, the admin configuation needs a few additions.

> Note: only `object` and `list` type items can be labeled

- Each page needs a `path` field that is the path to the specific webpage.
- Add a classname to the HTML element that corresponds to the section to be highlighted. The classname will be `dg-<field name>`. So for a `hero` object field, the corresponding classname will be `dg-hero` and can be placed in the container `div` of the hero's content.

Then serve up the website, and run the client guide generator to generate the images.

The resulting image guides are placed in the `/public/admin/guides` folder, where they are accessed by the admin panel.

##### Register the templates in the admin panel

To add the templates to the admin panel, they are registered in `/public/admin/index.html`, like this:

```js
const PagePreview = filename =>
  createClass({
    render: function() {
      return h(
        "div",
        {},
        h(
          "p",
          {
            style: {
              color: "rgb(122, 130, 145)",
              fontWeight: "bold"
            }
          },
          "Note: The image below is for reference only, it may not represent the latest content from your website."
        ),
        h("img", {
          src: `/admin/guides/${filename}.jpg`,
          style: { width: "100%" },
          alt: "Visual documentation guide"
        })
      );
    }
  });

CMS.registerPreviewTemplate("home", PagePreview("home"));
```
