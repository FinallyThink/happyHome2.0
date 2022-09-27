<template>
  <el-table
    :data="tableData"
    style="width: 100%"
    :row-class-name="tableRowClassName"         
  >
    <el-table-column v-for="(e,i) in tableHead" :prop="e.value" :label="e.text" :width="e.width||'auto'" />
  </el-table>
</template>

<script  setup>

const tableRowClassName = ({
  rowIndex,
}) => {
  if (rowIndex%2 == 1) {
    return 'warning-row'
  } else{
    return 'success-row'
  }
}
const props = defineProps({
  tableHead:Array,
  tableData:Array
})
</script>

<style>
.el-table .warning-row {
  --el-table-tr-bg-color: var(--el-color-warning-light-9);
}
.el-table .success-row {
  --el-table-tr-bg-color: var(--el-color-success-light-9);
}
</style>
