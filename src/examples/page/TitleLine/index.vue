<template>
  <div class="titleline">
      <div class="example-title">标题展示</div>
      <le-TitleLine title="测试title" />
      <Attribute title='Titleline Attribute' :dataSource="AttributeFields" />
  </div>
</template>

<script>
import Attribute from '../../components/Attribute'
import AttributeFields from './Fields/attribute'
export default {
  name: 'titleline',
  components:{ Attribute },
  data(){
    return {
      AttributeFields
    }
  }
}
</script>

<style lang="scss" scoped>
.titleline{
    background-color: #fff;
    padding: 24px;
}
</style>
