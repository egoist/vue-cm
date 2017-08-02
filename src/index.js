import CodeMirror from './CodeMirror'

export default CodeMirror

if (typeof window !== 'undefined') {
  window.Vue.component(CodeMirror.name, CodeMirror)
}
