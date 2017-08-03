import CodeMirror from 'codemirror'
import deepEqual from 'fast-deep-equal'

export default {
  name: 'CodeMirror',

  model: {
    event: 'change'
  },

  props: {
    value: String,
    options: Object,
    preserveScrollPosition: Boolean
  },

  methods: {
    focus() {
      this.codemirror && this.codemirror.focus()
    },

    getCodeMirror() {
      return this.codemirror
    },

    setOptionIfChanged(name, newValue) {
      const oldValue = this.codemirror.getOption(name)
      if (!deepEqual(oldValue, newValue)) {
        this.codemirror.setOption(name, newValue)
      }
    }
  },

  watch: {
    value(newValue) {
      if (this.codemirror && newValue !== this.codemirror.getValue()) {
        if (this.preserveScrollPosition) {
          const prevScrollPosition = this.codemirror.getScrollInfo()
          this.codemirror.setValue(newValue)
          this.codemirror.scrollTo(
            prevScrollPosition.left,
            prevScrollPosition.top
          )
        } else {
          this.codemirror.setValue(newValue)
        }
      }
    },

    options: {
      deep: true,
      handler(newValue) {
        if (this.codemirror) {
          // eslint-disable-next-line guard-for-in
          for (const name in newValue) {
            this.setOptionIfChanged(name, newValue[name])
          }
        }
      }
    }
  },

  mounted() {
    this.codemirror = CodeMirror.fromTextArea(this.$el, this.options)

    this.codemirror.on('change', e => this.$emit('change', e.getValue()))
    this.codemirror.on('focus', () => this.$emit('focus'))
    this.codemirror.on('blur', () => this.$emit('blur'))
    this.codemirror.on('scroll', cm => this.$emit('scroll', cm.getScrollInfo()))
    this.codemirror.on('cursorActivity', cm => this.$emit('cursorActivity', cm))
  },

  beforeDestroy() {
    this.codemirror && this.codemirror.toTextArea()
  },

  render(h) {
    return h('textarea', null, [this.value])
  }
}
