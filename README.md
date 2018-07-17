# Auxano Advisors

A frontend static site made with React-Static.

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

- The styling uses SCSS and CSS Modules
- Since CSS Modules are used, the convention for class names / general variable
  names is to use camelcase instead of dash-case (`myClass` instead of
  `my-class`). The reason is it's much easier to access the variable name when
  referencing it in JavaScript (using dot notation vs. bracket notation)
  ([reference](https://github.com/css-modules/css-modules#naming))

### Code formatting

- Formatting is kept consistent by using [Prettier](https://prettier.io/)
