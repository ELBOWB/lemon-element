<template>
<div class="SearchFilter">
    <el-form :gutter="90" :inline="true" :model="formData" ref="searchFilterForm" label-width="100px">
        <el-form-item :label="item.label" :prop="item.model" :key="index" v-for="(item,index) in Fields">
            <SearchInput
              v-if="item.type === 'Input'"
              :selfStyle="item.style"
              :autosize="item.props.autosize"
              :blur="item.props.blur"
              :clearable="item.props.clearable"
              :disabled="item.props.disabled"
              :keydownEnter="item.props.keydownEnter"
              :model.sync="formData[item.model]"
              :modelKey="item.model"
              :placeholder="item.props.placeholder"
              :readonly="item.props.readonly"
              :resize="item.props.resize"
              :rows="item.props.rows"
              :slotType="item.props.slotType"
              :tabindex="item.props.tabindex"
              :toFixed="item.props.toFixed"
              :type="item.props.type"
            ></SearchInput>
            <SearchAutocomplete
              v-if="item.type === 'Autocomplete'"
              :selfStyle="item.style"
              :clearable="item.props.clearable"
              :disabled="item.props.disabled"
              :model.sync="formData[item.model]"
              :modelKey="item.model"
              :placeholder="item.props.placeholder"
              :debounce="item.props.debounce"
              :placement="item.props.placement"
              :popperClass="item.props.popperClass"
              :selectWhenNnmatched="item.props.selectWhenNnmatched"
              :prefixIcon="item.props.prefixIcon"
              :suffixIcon="item.props.suffixIcon"
              :hideLoading="item.props.hideLoading"
              :highlightFirstItem="item.props.highlightFirstItem"
              :slotType="item.props.slotType"
              :handleSelect="item.props.handleSelect"
              :triggerOnFocus="item.props.triggerOnFocus"
              :blur="item.props.blur"
              :querySearchAsync="item.props.querySearchAsync"
            ></SearchAutocomplete>
            <SearchDatepicker
              v-if="item.type==='DatePicker'"
              :selfStyle="item.style"
              :change="item.props.change"
              :clearable="item.props.clearable"
              :disabled="item.props.disabled"
              :editable="item.props.editable"
              :model.sync="formData[item.model]"
              :pickerOptions="item.props.pickerOptions"
              :type="item.props.type"
              :valueFormat="item.valueFormat"
              ></SearchDatepicker>
              <!--select下拉框-->
              <SearchSelect
                v-if="item.type==='Select'"
                :selfStyle="item.style"
                :placeholder="item.props.placeholder"
                :change="item.props.change"
                :clearable="item.props.clearable"
                :collapseTags="item.props.collapseTags"
                :disabled="item.props.disabled"
                :filterable="item.props.filterable"
                :loading="item.props.loading"
                :model.sync="formData[item.model]"
                :modelKey="item.model"
                :multiple="item.props.multiple"
                :options="item.props.options"
                :optionsProps="item.props.optionsProps"
                :valueKey="item.props.valueKey"
                :defaultOptions="item.props.defaultOptions"
                :visibleChange="item.props.visibleChange"
                :onInitAsync="item.props.onInitAsync"
              ></SearchSelect>
              <!--checkbox多选框-->
              <SearchCheckbox
                v-if="item.type==='Checkbox'"
                :selfStyle="item.style"
                :change="item.props.change"
                :disabled="item.props.disabled"
                :falseLabel="item.props.falseLabel"
                :indeterminate="item.props.indeterminate"
                :model.sync="formData[item.model]"
                :options="item.props.options"
                :optionsProps="item.props.optionsProps"
                :trueLabel="item.props.trueLabel"
              ></SearchCheckbox>
              <!--checkbox多选框-->
              <SearchCascader
                v-if="item.type==='Cascader'"
                :selfStyle="item.style"
                :placeholder="item.props.placeholder"
                :change="item.props.change"
                :disabled="item.props.disabled"
                :clearable="item.props.clearable"
                :otherProps="item.props.otherProps"
                :filterable="item.props.filterable"
                :showAllLevels="item.props.showAllLevels"
                :model.sync="formData[item.model]"
                :modelKey="item.model"
                :options="item.props.options"
                :onInitAsync="item.props.onInitAsync"
                :defaultOptions="item.props.defaultOptions"
              ></SearchCascader>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">查询</el-button>
            <el-button @click="onReset">重置</el-button>
        </el-form-item>
    </el-form>
  </div>
</template>

<script>
import SearchInput from './Input'
import SearchAutocomplete from './Autocomplete'
import SearchDatepicker from './Datepicker'
import SearchSelect from './Select'
import SearchCheckbox from './Checkbox'
import SearchCascader from './Cascader'
export default {
  name: 'searchFilter',
  components:{
    SearchInput,
    SearchAutocomplete,
    SearchDatepicker,
    SearchSelect,
    SearchCheckbox,
    SearchCascader
  },
  props:{
    formData:Object,
    Fields:{
      type: Array,
      default () {
          return []
        }
    }
  },
  methods: {
    onSubmit() {
      this.$emit('onChange',this.$refs.searchFilterForm)
    },
    onReset() {
      this.resetFields()
      this.$emit('onReset')
    },
    resetFields() {
      this.$refs.searchFilterForm.resetFields();
    }
  }
}
</script>

<style lang="scss" scoped>
.SearchFilter{
  padding: 20px 20px 0 20px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  .el-form-item{
    margin-bottom: 16px;
  }
  .el-form--inline .el-form-item__content{
    width: 300px;
  }
}
</style>
