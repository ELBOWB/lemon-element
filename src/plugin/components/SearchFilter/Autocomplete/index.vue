<template>
  <div>
    <el-autocomplete
      v-model.trim="childModel"
      :style="selfStyle"
      :clearable="clearable"
      :disabled="disabled"
      :debounce="debounce"
      :placement="placement"
      :popper-class="popperClass"
      :select-when-unmatched="selectWhenNnmatched"
      :prefix-icon="prefixIcon"
      :suffix-icon="suffixIcon"
      :hide-loading="hideLoading"
      :highlight-first-item="highlightFirstItem"
      :fetch-suggestions="querySearchAsync"
      :placeholder="placeholder"
      :trigger-on-focus="triggerOnFocus"
      @blur="blur(childModel,modelKey)"
      @select="handleSelect"
    >
      <slot :slot="slotType" name="inputSlot"></slot>
    </el-autocomplete>
  </div>
</template>

<script>

  export default {
    name: 'autocomplete',
    model: {},
    props: {
      // 样式
      selfStyle: {
        type: Object,
        default () {
          return {
            minWidth: '220px'
          }
        }
      },
      // 当前组件绑定值
      model: {
        type: [String, Number],
        require: true
      },
      // 当前绑定值key，可以用于formData中获取到当前组件渲染配置items
      modelKey: {
        type: String,
        default () {
          return ''
        }
      },
      // 是否可清空
      clearable: {
        type: Boolean,
        default () {
          return false
        }
      },
      // 输入框默认占位文本
      placeholder: {
        type: String,
        default () {
          return ''
        }
      },
      //获取输入建议的去抖延时
      debounce: {
        type: Number,
        default() {
          return 300;
        }
      },
      // 菜单弹出位置 include: top / top-start / top-end / bottom / bottom-start / bottom-end
      placement: {
        type: String,
        default() {
          return 'bottom-start';
        }
      },
      // Autocomplete 下拉列表的类名
      popperClass: {
        type: String,
        default () {
          return ''
        }
      },
      // 在输入没有任何匹配建议的情况下，按下回车是否触发 select 事件
      selectWhenNnmatched: {
        type: Boolean,
        default () {
          return false
        }
      },
      // 输入框尾部图标
      suffixIcon: {
        type: String,
        default () {
          return ''
        }
      },
      // 输入框头部图标
      prefixIcon: {
        type: String,
        default () {
          return ''
        }
      },
      // 是否隐藏远程加载时的加载图标
      hideLoading: {
        type: Boolean,
        default () {
          return false
        }
      },
      // 是否默认突出显示远程搜索建议中的第一项
      highlightFirstItem: {
        type: Boolean,
        default () {
          return false
        }
      },
      // 是否在输入框 focus 时显示建议列表
      triggerOnFocus: {
        type: Boolean,
        default (){
          return true
        }
      },
      // 失去焦点
      blur: {
        type: Function,
        default () {
        }
      },
      // 当前组件slot插槽类型prefix、suffix、prepend、append
      slotType: {
        type: String,
        default () {
          return ''
        }
      },
      // 禁用
      disabled: {
        type: Boolean,
        default () {
          return false
        }
      },
      // 返回输入建议的方法，仅当你的输入建议数据 resolve 时，通过调用 callback(data:[]) 来返回它
      querySearchAsync: {
        type: Function,
        default () {
          return ()=>{ }
        }
      },
      handleSelect: {
        type: Function,
        default () {
        }
      }
    },
    data () {
      return {
        childModel: this.model
      }
    },
    watch: {
      childModel(val) {
        this.$emit('update:model', val);
      },
      model(val) {
        this.childModel = val;
        this.$emit('update:model', val);
      }
    },
    created () {
    },
    methods: {
      emitModel (val) {
        this.$emit('update:model', val)
      }
    }
  }
</script>

<style lang="scss">
</style>
