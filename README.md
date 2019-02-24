# stylelint-config-camo

[![npm version](https://img.shields.io/npm/v/stylelint-config-camo.svg)](https://npmjs.com/package/stylelint-config-camo)
[![travis-ci build status](https://travis-ci.com/usecamo/stylelint-config-camo.svg?branch=master)](https://travis-ci.com/usecamo/stylelint-config-camo)
[![appveyor build status](https://ci.appveyor.com/api/projects/status/u26gv6n2yjr1un2m/branch/master?svg=true)](https://ci.appveyor.com/project/jasonnam/stylelint-config-camo/branch/master)

stylelint shareable config by Camo.

## Installation

### install-peerdeps

Install with [`install-peerdeps`](https://npmjs.com/package/install-peerdeps):

```sh
npx install-peerdeps --dev stylelint-config-camo
```

### npm

Install with npm:

```sh
npm install --save-dev stylelint-config-camo
```

Next, install the correct versions of each package, which are listed by the command:

```sh
npm info "stylelint-config-camo@latest" peerDependencies
```

## Usage

### CSS

Extend stylelint config with `stylelint-config-camo/css`.

```json
{
  "extends": "stylelint-config-camo/css"
}
```

### Sass

Extend stylelint config with `stylelint-config-camo/scss`.

```json
{
  "extends": "stylelint-config-camo/scss"
}
```

## License

stylelint-config-camo is released under the MIT license. [See LICENSE](https://github.com/usecamo/stylelint-config-camo/blob/master/LICENSE) for details.
