<template>
  <div class="bSelect">
    <el-cascader
      :style="selfStyle"
      v-model.lazy="childModel"
      :options="optionsResult"
      :placeholder="placeholder"
      :disabled="disabled"
      :clearable="clearable"
      :show-all-levels="showAllLevels"
      :props="otherProps"
      :collapse-tags="collapseTags"
      :filterable="filterable"
      @change="change(childModel,modelKey)">
    </el-cascader>
  </div>
</template>

<script>

export default {
  name: 'Select',
  props: {
    // 当前组件绑定值
    model: {
      type: [Array, String, Number, Boolean],
      require: true
    },
    // 样式
    selfStyle: {
      type: Object,
      default () {
        return {
          minWidth:'220px'
        }
      }
    },
    // 当前绑定值key，可以用于formData中获取到当前组件渲染配置items
    modelKey: {
      type: String,
      default () {
        return ''
      }
    },
    // 输入框默认占位文本
    placeholder: {
      type: String,
      default () {
        return ''
      }
    },
    // 下拉选项
    options: {
      type: Array,
      default () {
        return []
      }
    },
     // 默认options
    defaultOptions: {
      type: Array,
      default () {
        return []
      }
    },
    // 输入框中是否显示选中值的完整路径
    showAllLevels: {
      type: Boolean,
      default () {
        return true
      }
    },
    // props
    otherProps: {
      type: Object,
      default () {
        return {}
      }
    },
    // 多选时是否将选中值按文字的形式展示
    collapseTags: {
      type: Boolean,
      default () {
        return false
      }
    },
    // 是否可以清空选项
    clearable: {
      type: Boolean,
      default () {
        return false
      }
    },
    // 是否可搜索
    filterable: {
      type: Boolean,
      default () {
        return true
      }
    },
    // 是否禁用
    disabled: {
      type: Boolean,
      default () {
        return false
      }
    },
    // 选中值发生变化时触发
    change: {
      type: Function,
      default () {
      }
    },
    // 异步options
    onInitAsync: {
      type: Function
    }
  },
  data () {
    return {
      childModel: this.model,
      optionsData: this.options
    }
  },
  async created() {
    const onInitAsync = this.onInitAsync
    if (onInitAsync) {
      const data = await onInitAsync();
      this.optionsData = data
    }
  },
  computed: {
    optionsResult(){
      return this.defaultOptions.concat(this.optionsData)
    }
  },
  watch: {
    childModel (val) {
      this.$emit('update:model', val)
    },
    model (val) {
      console.log(val,'val')
      if (val !== this.childModel) {
        this.childModel = val
      }
    }
  },
}
</script>
