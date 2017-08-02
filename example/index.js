import Vue from 'vue'
import CodeMirror from '../src'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/markdown/markdown'

import 'codemirror/lib/codemirror.css'

const code = `
function foo() {
  return 'foo'
}
`.trim()

const markdownCode = `
# hello

**this is bold**

\`\`\`js
function foo() {
  return 'foo'
}
\`\`\`
`.trim()

new Vue({
  el: '#app',

  data: {
    code,
    options: {
      mode: 'javascript'
    }
  },

  mounted() {
    console.log(this.$refs.editor)
  },

  methods: {
    updateEditor() {
      this.code = markdownCode
      this.options.mode = 'markdown'
    }
  },

  render() {
    return (
      <div>
        <button onClick={this.updateEditor}>update</button>
        <CodeMirror
          ref="editor"
          autofocus={true}
          class="my-editor"
          value={this.code}
          onChange={code => this.code = code}
          onFocus={() => console.log('focused')}
          onScroll={info => console.log(info)}
          onCursorActivity={cm => console.log(cm)}
          options={this.options}
        />
      </div>
    )
  }
})
