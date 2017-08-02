# vue-cm

[![NPM version](https://img.shields.io/npm/v/vue-cm.svg?style=flat)](https://npmjs.com/package/vue-cm) [![NPM downloads](https://img.shields.io/npm/dm/vue-cm.svg?style=flat)](https://npmjs.com/package/vue-cm) [![CircleCI](https://circleci.com/gh/egoist/vue-cm/tree/master.svg?style=shield)](https://circleci.com/gh/egoist/vue-cm/tree/master)  [![donate](https://img.shields.io/badge/$-donate-ff69b4.svg?maxAge=2592000&style=flat)](https://github.com/egoist/donate)

**NOTE:** I'm aware of the existence of [vue-codemirror](https://github.com/surmon-china/vue-codemirror), but I built this one for good reasons:

- Smaller.
- No unnecessary abstractions, which means simpler API.
- Prebuilt bundle, you can use it with or without a bundler.
- More modern-ish.

## Install

```bash
yarn add codemirror vue-cm
```

CDN: [UNPKG](https://unpkg.com/vue-cm/dist/) | [jsDelivr](https://cdn.jsdelivr.net/npm/vue-cm/dist/)

> **NOTE**: You need to include CodeMirror as well if you're using the CDN version, basically we access it via `window.CodeMirror` in the CDN version.

## Usage

```vue
<template>
  <code-mirror 
    :code="code"
    :options="options"
    @change="updateCode">
  </code-mirror>
</template>

<script>
import CodeMirror from 'vue-cm'

// Using language mode
import 'codemirror/mode/javascript/javascript'

export default {
  component: {
    CodeMirror
  },

  data() {
    return { 
      code: '',
      options: {
        mode: 'javascript'
      }
    }
  },

  methods: {
    updateCode(newValue) {
      this.code = newValue
    }
  }
}
</script>

<style src="codemirror/lib/codemirror.css"></style>
```

### Props

- `value`: `string` Editor value
- `options`: `object` CodeMirror instance options
- `preserveScrollPosition` `default: false`: Preserve previous scroll position after updating value.

### Events

- `change`: Emitted when a change is made, args:
  - `newValue`: New editor value
- `focus`: Emitted when the editor is focused
- `blur`: Emitted when the editor loses focus
- `scroll`: Emitted when the editor is scrolled, args:
  - `scrollInfo`
- `cursorActivity`: Emitted when cursor is moved, args:
  - `codemirror`: CodeMirror instance

### Methods

- `focus()`: focuses the CodeMirror instance
- `getCodeMirror()`: get the CodeMirror instance

You can interact with the `CodeMirror` component by using a `ref` attribute, eg: `<code-mirror ref="editor"></code-mirror>`, then you can call `this.$refs.editor.getCodeMirror()` in parent component's `mounted` hook to get the CodeMirror instance we use in the child component.

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D


## Author

**vue-cm** © [egoist](https://github.com/egoist), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by egoist with help from contributors ([list](https://github.com/egoist/vue-cm/contributors)).

> [egoist.moe](https://egoist.moe) · GitHub [@egoist](https://github.com/egoist) · Twitter [@_egoistlily](https://twitter.com/_egoistlily)
