<script setup>
import Table from "../../components/Table.vue";
import cells from "./index";

const search = ()=>{
    console.log("搜索")
}

</script>

<template>
  <div class="searchFrom">
    <el-row> 
        <el-button @click="search" type="primary">搜索</el-button>
    </el-row>
  </div>
  <Table :table-data="cells.tableData" :table-head="cells.tableHead" />
</template>

<style scoped>
.searchFrom{
    padding: 10px 3px;
}
</style>
